import {EntityUiConfig} from '@app/core/entity-ui-config';
import {Translation} from "@app/core/translation";

export class DepartmentsUiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.formPanelWidth = '400px';
		this.gridContext = {};

		this.labels.list = new Translation('List of Departments','Lista de Departamente');
		this.labels.itemDetails = new Translation('Department Details','Detalii Departament');

		this.labels.specific.name = new Translation('Name','Denumire');
		this.labels.specific.description = new Translation('Description','Descriere');

		this.addColumn({field: 'name', headerName: this.labels.specific.name, sortable: true, width: 250});
		this.addColumn({field: 'description', headerName: this.labels.specific.description, sortable: false, width: 300});

	}
}
