import {EntityUiConfig} from '@app/core/entity-ui-config';

export class UsersUiConfig extends EntityUiConfig {

    constructor() {
        super();
        this.addColumn({field: 'fullName', header: 'Full Name', sortable: true, width: '100%'});
        this.addColumn({field: 'firstName', header: 'First Name', width: '200px', editable: true});
        this.addColumn({field: 'lastName', header: 'Last Name', width: '200px', editable: true});
        this.addColumn({field: 'email', header: 'Email', sortable: true, width: '300px', editable: true});
        this.labels.list = 'List of Users';
        this.labels.addItem = 'Add User';
        this.labels.save = 'Save';
        this.labels.delete = 'Delete';
        this.labels.itemDetails = 'User Details';
    }
}