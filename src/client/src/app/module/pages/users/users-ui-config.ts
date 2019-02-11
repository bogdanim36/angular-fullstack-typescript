import {EntityUiConfig} from '@app/core/entity-ui-config';
import {Translation} from "@app/core/translation";

export class UsersUiConfig extends EntityUiConfig {

	constructor() {
		super();

		this.formPanelWidth = '400px';
		this.labels.list = new Translation('List of Users', "Lista Utilizatori");
		this.labels.itemDetails = new Translation('User Details', "Detalii Utilizator");
		this.labels.specific = {
			"email": new Translation("Email", "Email"),
			"firstName": new Translation("First Name", "Prenume"),
			"lastName": new Translation("Last Name", "Nume"),
			"fullName": new Translation("Full Name", "Numele complet")
		};
		this.addColumn({field: 'email', headerName: this.labels.specific.email, sortable: true, width: 250});
		this.addColumn({field: 'fullName', headerName: this.labels.specific.fullName, sortable: true, width: 250});
		this.addColumn({field: 'firstName', headerName: this.labels.specific.firstName, sortable: true, width: 150});
		this.addColumn({field: 'lastName', headerName: this.labels.specific.lastName, sortable: true, width: 150});

	}
}
