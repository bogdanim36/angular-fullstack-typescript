import {EntityUiConfig} from '@app/core/entity-ui-config';
import {Translation} from "@app/core/translation";

export class DailyReportDetailsUiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.formPanelWidth = '400px';
		this.gridContext = {};

		this.labels.list = new Translation('Tasks','Taskuri');
		this.labels.itemDetails = new Translation('Task','Task');

		this.labels.specific.status = new Translation('Status','Status');
		this.labels.specific.percent = new Translation('Percent','Procent');
		this.labels.specific.taiga = new Translation('Taiga#','Taiga#');
		this.labels.specific.subsection = new Translation('Subsection','Sectiune');

		this.addColumn({field: 'status', headerName: this.labels.specific.status, sortable: true, width: 100});
		this.addColumn({field: 'percent', headerName: this.labels.specific.percent, sortable: true, width: 100});
		this.addColumn({field: 'taiga', headerName: this.labels.specific.taiga, sortable: true, width: 100});
		this.addColumn({field: 'subsection', headerName: this.labels.specific.subsection, sortable: false, width: 300});

	}
}
