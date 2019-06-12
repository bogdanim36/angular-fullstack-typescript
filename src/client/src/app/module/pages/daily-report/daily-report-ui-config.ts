import {EntityUiConfig} from '@app/core/entity-ui-config';
import {Translation} from "@app/core/translation";

export class DailyReportUiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.formPanelWidth = '400px';

		this.labels.list = new Translation('List of Departments','Lista de Departamente');
		this.labels.itemDetails = new Translation('Daily Report','Raportul zilei');


		this.addColumn({field: 'name', headerName: this.labels.specific.name, sortable: true, width: 250});
		this.addColumn({field: 'description', headerName: this.labels.specific.description, sortable: false, width: 300});
	}
}
