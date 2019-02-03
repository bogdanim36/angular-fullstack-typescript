import {Component, Input} from '@angular/core';
import {UsersUiConfig} from "@app/module/pages/users/users-ui-config";
import {GridOptions, RowNode} from 'ag-grid-community';
import {User} from "@shared/user";
import {UsersClientService} from "@app/module/pages/users/users-client.service";
import {EntityService} from "@app/components/entity-page/shared/entity.service";

@Component({
	selector: 'app-entity-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['../../../components/entity-page/form/entity-form.component.scss', './user-form.component.scss']
})
export class UserFormComponent {
	@Input() uiConfig: UsersUiConfig;
	@Input() grid: GridOptions;
	@Input() service: UsersClientService;
	public item: User;
	public source: User;
	public errorMessages: Array<string> = [];
	public errors: User;
	public isNewItem = true;
	public selectedGridRowNode: RowNode;

	constructor(protected entityService: EntityService) {
		this.item = {};
		this.errors = {};
		this.source = {};
	}

	formTitle(): string {
		let title = this.uiConfig.labels.itemDetails + (this.entityService.isEditing ? " (" + (this.isNewItem ? this.uiConfig.labels.addItem : this.uiConfig.labels.modify) + ")" : "");
		return title;
	}

	ngOnInit() {
	}

	newItem() {
		this.source = {};
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
		this.item = new User(this.source);
		this.entityService.isEditing = true;
	}

	cancel() {
		this.errors = {};
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
		else this.item = new User({});
	}

	save() {
		this.serviceSave(this.isNewItem, this.source, this.item).then(response => {
			if (response.status) {
				let item = new User(response.data);
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

	delete(item: User) {
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
