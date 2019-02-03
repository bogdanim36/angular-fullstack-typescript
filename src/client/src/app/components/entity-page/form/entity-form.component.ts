import {Input} from '@angular/core';
import {EntityService} from "@app/components/entity-page/shared/entity.service";
import {GridOptions, RowNode} from 'ag-grid-community';
import {EntityUiConfig} from "@app/core/entity-ui-config";
import {ClientService} from "@app/core/client-service";

export class EntityFormComponent<M, C extends EntityUiConfig, S extends ClientService<M>> {

	@Input() uiConfig: C;
	@Input() grid: GridOptions;
	@Input() service: S;
	public item: M;
	public source: M;
	public errorMessages: Array<string> = [];
	public errors: M;
	public isNewItem = true;
	public selectedGridRowNode: RowNode;

	constructor(protected modelClass: M & Function, protected entityService: EntityService) {
		this.item = this.instanceCreate({});
		this.errors = this.instanceCreate({});
	}

	instanceCreate(source: Partial<M>, extra?: any): M {
		return new this.modelClass.prototype.constructor(source, extra);
	}

	formTitle(): string {
		let title = this.uiConfig.labels.itemDetails;
		title += this.entityService.isEditing ? " (" + (this.isNewItem ? this.uiConfig.labels.addItem : this.uiConfig.labels.modify) + ")" : "";
		return title;
	}

	newItem() {
		this.source = this.instanceCreate({});
		this.isNewItem = true;
		this.editing();
	}

	modify() {
		this.source = this.selectedGridRowNode.data;
		this.isNewItem = false;
		this.editing();
	}

	editing() {
		this.grid.rowSelection = "";
		this.grid.suppressRowClickSelection = true;
		this.item = this.instanceCreate(this.source);
		this.entityService.isEditing = true;
	}

	cancel() {
		this.errors = this.instanceCreate({});
		this.errorMessages = [];
		this.entityService.isEditing = false;
		this.isNewItem = false;
		this.source = null;
		this.grid.suppressRowClickSelection = false;
		this.grid.rowSelection = "single";
		this.gridSelectionChanged(this.grid);
	}

	gridSelectionChanged(event: GridOptions) {
		// console.log('selection changed', event.api.getSelectedRows(), this.item);
		let nodes = event.api.getSelectedNodes();
		if (nodes.length) this.selectedGridRowNode = nodes[0];
		else this.selectedGridRowNode = null;
		if (this.selectedGridRowNode) this.item = this.selectedGridRowNode.data;
		else this.item = this.instanceCreate({});
	}

	save() {
		this.serviceSave(this.isNewItem, this.source, this.item).then(response => {
			if (response.status) {
				let item = this.instanceCreate(response.data);
				if (this.isNewItem) {
					this.grid.api.updateRowData({add: [item], addIndex: 0});
					this.grid.api.selectIndex(0, false, null);
				} else {
					this.selectedGridRowNode.setData(item);
					this.selectedGridRowNode.setSelected(true);
				}
				this.cancel();
			} else {
				if (response.message) this.errorMessages.push(response.message);
				if (response.erros) this.errors = response.errors;
				console.error('save error', response);
			}
		});
	}

	serviceSave(isNewItem, source, edited): Promise<any> {
		if (isNewItem)
			return this.service.create(edited);
		else
			return this.service.update(source, edited);
	}

	delete(item: M) {
		this.service.delete(item).then(response => {
			if (response.status) {
				this.grid.api.updateRowData({remove: [item]});
			} else {
				if (response.message) this.errorMessages.push(response.message);
				console.error('save error', response);
			}
		});
	}

	toggleShowPanel() {
		//this method si mapped to EntityIndexComponent.toggleShowPanel
	}

}
