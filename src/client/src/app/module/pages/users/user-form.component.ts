import {Component, Input} from '@angular/core';
import {UsersUiConfig} from "@app/module/pages/users/users-ui-config";
import {GridOptions, RowNode} from 'ag-grid-community';
import {User} from "@shared/user";

@Component({
	selector: 'app-entity-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['../../../components/entity-page/form/entity-form.component.scss', './user-form.component.scss']
})
export class UserFormComponent {
	@Input() uiConfig: UsersUiConfig;
	@Input() grid: GridOptions;
	public item: User;
	public source: User;
	public errorMessages: Array<string> = [];
	public errors: User;
	public isNewItem = true;
	public rowNode: RowNode;
	public isEditing: boolean;
	public showFormPanel: boolean;

	constructor() {
		this.item = {};
		this.errors = {};
		this.source = {};
	}

	formTitle(): string {
		let title = this.uiConfig.labels.itemDetails + (this.isEditing ? " (" + (this.isNewItem ? this.uiConfig.labels.addItem : this.uiConfig.labels.modify) + ")" : "");
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
		this.source = this.rowNode.data;
		this.isNewItem = false;
		this.editing();
	}

	editing() {
		this.isEditing = true;
		this.grid.rowSelection = "";
		this.grid.suppressRowClickSelection = true;
		this.item = new User(this.source);
	}

	cancel() {
		this.errors = {};
		this.errorMessages = [];
		this.isEditing = false;
		this.isNewItem = false;
		this.source = null;
		this.grid.suppressRowClickSelection = false;
		this.grid.rowSelection = "single";
		this.gridSelectionChanged(this.grid);
	}

	gridSelectionChanged(event: GridOptions) {
		console.log('selection changed', event.api.getSelectedRows(), this.item);
		let nodes = event.api.getSelectedNodes();
		if (nodes.length) this.rowNode = nodes[0];
		else this.rowNode = null;
		if (this.rowNode) this.item = this.rowNode.data;
		else this.item = new User({});
	}

	save() {
		this.saveGeneric(this.isNewItem, this.source, this.item).then(response => {
			if (response.status) {
				console.log(response);
				let item = new User(response.data);
				if (this.isNewItem) {
					this.grid.api.updateRowData({add: [item], addIndex: 0});
					this.grid.api.selectIndex(0, false, null);
				} else {
					this.rowNode.setData(item);
				}
				this.cancel();
			} else {
				if (response.message) this.errorMessages.push(response.message);
				console.error('save error', response);
			}
		});
	}

	saveGeneric(isNewRecord, source, edited): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve(1);
			reject("1");
		});
	}

	delete(item: User) {
		this.deleteGeneric(item).then(response => {
			if (response.status) {
				this.grid.api.updateRowData({remove: [item] });
			} else {
				if (response.message) this.errorMessages.push(response.message);
				console.error('save error', response);
			}
		});
	}

	deleteGeneric(item: User): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve(1);
			reject("1");
		});
	}
	close(){

	}
	toggleShowPanel(){}


}
