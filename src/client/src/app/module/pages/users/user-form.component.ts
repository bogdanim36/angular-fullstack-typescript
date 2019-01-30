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
	isNewRecord = true;

	constructor() {
		this.source = {firstName: "Boddd"};
		this.item = new User(this.source);
		this.errors = {};
	}

	ngOnInit() {
	}

	gridSelectionChanged(event: any) {
		console.log('selection changed', event.api.getSelectedRows(), this.item);
		let rows = event.api.getSelectedRows();
		if (rows.length) this.source = rows[0];
		else this.source = {};
		this.item = new User(this.source);
	}

}
