import {Component, Input} from '@angular/core';
import {UsersUiConfig} from "@app/module/pages/users/users-ui-config";
import {GridOptions} from 'ag-grid-community';
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
	public selectedRow: User;

	constructor() {
		this.source = {};
		this.item = new User(this.source);
		this.errors = {};
	}

	formTitle(): string {
		let title = this.uiConfig.labels.itemDetails + " (" + (this.isNewItem ? this.uiConfig.labels.addItem : this.uiConfig.labels.modify) + ")";
		return title;
	}

	ngOnInit() {
	}

	newItem() {
		this.source = {};
		this.item = new User(this.source);
		this.errors = {};
		this.isNewItem = true;
	}

	modify() {
		this.errors = {};
		this.gridSelectionChanged();

	}

	gridSelectionChanged(event: any) {
		console.log('selection changed', event.api.getSelectedRows(), this.item);
		let rows = event.api.getSelectedRows();
		this.isNewItem = false;
		this.selectedRow = new User(rows[0]);
		console.log(this.selectedRow);
		if (rows.length) {
			this.source = rows[0];
			this.item = new User(this.source);
		} else {
			this.newItem();
		}

	}

	save() {
	}

	delete() {
	}

}
