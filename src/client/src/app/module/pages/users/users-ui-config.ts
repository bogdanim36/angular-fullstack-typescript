import {EntityUiConfig} from '@app/core/entity-ui-config';
import {GridActionColumnComponent} from "@app/components/entity-page/index/grid-action-column.component";

export class UsersUiConfig extends EntityUiConfig {
	constructor() {
		super();
		this.gridRowHeight = 30;
		this.gridRowHeaderHeight = 36;
		this.labels.list = 'List of Users';
		this.labels.addItem = 'Add User';
		this.labels.save = 'Save';
		this.labels.delete = 'Delete';
		this.labels.itemDetails = 'User Details';
		this.labels.specific={
			email:"Email",
			firstName:"First Name",
			lastName:"Last Name",
			fullName:"Full Name",
		};
		this.addColumn({field: 'email', headerName: 'Email', sortable: true, width: 250, editable: true});
		this.addColumn({field: 'fullName', headerName: 'Full Name', sortable: true, width: 300, editable: false});
		this.addColumn({field: 'firstName', headerName: 'First Name', sortable: true, width: 150, editable: true});
		this.addColumn({field: 'lastName', headerName: 'Last Name', sortable: true, width: 150, editable: true});
		this.addColumn({headerName: this.labels.actions, width: 100, pinned: 'right', cellRendererFramework: GridActionColumnComponent});
	}
}



