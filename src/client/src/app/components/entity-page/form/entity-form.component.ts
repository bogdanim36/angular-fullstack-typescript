import {Input} from '@angular/core';
import {EntityService} from "@app/components/entity-page/entity.service";
import {GridOptions, RowNode} from 'ag-grid-community';
import {EntityUiConfig} from "@app/core/entity-ui-config";
import {ClientService} from "@app/core/client-service";
import {AppSharedService} from "@app/core/app-shared.service";

export class EntityFormComponent<M, C extends EntityUiConfig, S extends ClientService<M>> {

	@Input() uiConfig: C;
	@Input() grid: GridOptions;
	@Input() service: S;
	public item: M;
	public source: M;
	public errorMessages: Array<string> = [];
	public successMessages: Array<string> = [];
	public errors: M;
	public isNewItem = true;
	hasItem: boolean;
	public selectedGridRowNode: RowNode;
	showNavigation: boolean;
	working = false;
	componentIsLoaded = false;

	constructor(protected modelClass: M & Function,
				protected entityService: EntityService,
				protected sharedService: AppSharedService) {
		this.item = this.instanceCreate({});
		this.errors = this.instanceCreate({});
		Object.defineProperty(this, 'hasItem', {
			get() {
				return this.isNewItem || Object.keys(this.item).length > 0;
			}
		});
		Object.defineProperty(this, 'showNavigation', {
			get() {
				return sharedService.isHandset && !entityService.isEditing;
			}
		});
	}

	//callback fired after entity-form.component is injected in entity-index.component
	//this can be customized in particular instance
	componentLoaded() {
		this.componentIsLoaded = true;
	}

	instanceCreate(source: Partial<M>, extra?: any): M {
		return new this.modelClass.prototype.constructor(source, extra);
	}

	formTitle(): string {
		let title = this.uiConfig.labels.itemDetails.toString();
		title += this.entityService.isEditing ? " (" + (this.isNewItem ? this.uiConfig.labels.addItem : this.uiConfig.labels.modify) + ")" : "";
		return title;
	}

	newItem() {
		this.source = this.instanceCreate({});
		this.isNewItem = true;
		this.editing();
	}

	modify() {
		if (this.sharedService.isHandset) {
			this.source = this.item;
		} else {
			this.source = this.selectedGridRowNode.data;
		}
		this.isNewItem = false;
		this.editing();
	}

	editing() {
		if (this.sharedService.isHandset) {
		} else {
			this.grid.rowSelection = "";
			this.grid.suppressRowClickSelection = true;
		}
		this.item = this.instanceCreate(this.source);
		this.entityService.isEditing = true;
		this.successMessages = [];
	}

	cancel() {
		this.errors = this.instanceCreate({});
		this.errorMessages = [];
		this.entityService.isEditing = false;
		this.isNewItem = false;
		this.source = null;
		if (this.sharedService.isHandset) {
			if (this.service.data.currentItem) this.item = this.service.data.currentItem;
			else this.item = this.instanceCreate({});
		} else {
			this.grid.suppressRowClickSelection = false;
			this.grid.rowSelection = "single";
			this.gridSelectionChanged(this.grid);
		}
	}

	setCurrentItem(grid?: GridOptions) {
		if (this.sharedService.isHandset) {
			if (this.service.data.currentItem) this.item = this.service.data.currentItem;
			this.service.data.currentItemChanged.subscribe(item => {
				this.item = item;
			});
		} else this.gridSelectionChanged(grid);
	}

	gridSelectionChanged(grid: GridOptions) {
		// console.log('selection changed', event.api.getSelectedRows(), this.item);
		let nodes = grid.api.getSelectedNodes();
		if (nodes.length) this.selectedGridRowNode = nodes[0];
		else this.selectedGridRowNode = null;
		if (this.selectedGridRowNode) this.item = this.selectedGridRowNode.data;
		else this.item = this.instanceCreate({});
	}

	showSuccessMsg(msg) {
		this.successMessages.push(msg);
		setTimeout(() => {
			this.successMessages = [];
		}, 2000);
	}

	save() {
		this.working = true;
		this.serviceSave(this.isNewItem, this.source, this.item).then(response => {
			this.working = false;
			if (response.status) {
				this.showSuccessMsg(this.uiConfig.labels.itemIsSaved);
				let item = this.instanceCreate(response.data);
				if (this.sharedService.isHandset) {
					if (this.isNewItem) {
						let columnName = this.service.primaryKey;
						let index = this.service.data.findIndexByColumn(columnName, item[columnName]);
						this.service.data.setCurrent(index);
					}
				} else {
					if (this.isNewItem) {
						this.grid.api.updateRowData({add: [item], addIndex: 0});
						this.grid.api.selectIndex(0, false, null);
					} else {
						this.selectedGridRowNode.setData(item);
						this.selectedGridRowNode.setSelected(true);
					}
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
				if (this.grid) this.grid.api.updateRowData({remove: [item]});
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
