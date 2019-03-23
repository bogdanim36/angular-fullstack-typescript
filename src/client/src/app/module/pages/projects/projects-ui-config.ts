import {EntityUiConfig} from '@app/core/entity-ui-config';
import {Translation} from "@app/core/translation";
import {GridBooleanCellRenderComponent} from "@app/components/entity-page/index/grid-boolean-cell-render.component";

export class ProjectsUiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.formPanelWidth = '400px';
		this.gridContext = {"cellRenders":{"closed":{"iconChecked":"check_box","iconUnchecked":"check_box_outline_blank"}}};

		this.labels.list = new Translation('List of Projects','Lista de Proiecte');
		this.labels.itemDetails = new Translation('Project Details','Detalii Proiect');

		this.labels.specific.parentId = new Translation('Parent project','Proiect parinte');
		this.labels.specific.name = new Translation('Name','Denumire');
		this.labels.specific.closed = new Translation('Closed','Inchis');
		this.labels.specific.description = new Translation('Description','Descriere');

		this.addColumn({field: 'name', headerName: this.labels.specific.name, sortable: true, width: 250});
		this.addColumn({field: 'closed', headerName: this.labels.specific.closed, sortable: true, width: 100, cellRendererFramework: GridBooleanCellRenderComponent});
		this.addColumn({field: 'description', headerName: this.labels.specific.description, sortable: false, width: 300});

	}
}
