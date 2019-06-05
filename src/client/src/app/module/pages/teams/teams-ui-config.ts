import {EntityUiConfig} from '@app/core/entity-ui-config';
import {Translation} from "@app/core/translation";

export class TeamsUiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.formPanelWidth = '400px';
		this.gridContext = {};

		this.labels.list = new Translation('List of Teams','Lista de Echipe');
		this.labels.itemDetails = new Translation('Team Details','Detalii Echipa');

		this.labels.specific.name = new Translation('Name','Denumire');
		this.labels.specific.description = new Translation('Description','Descriere');

		this.addColumn({field: 'name', headerName: this.labels.specific.name, sortable: true, width: 250});
		this.addColumn({field: 'description', headerName: this.labels.specific.description, sortable: false, width: 300});

	}
}
