import {ColDef} from 'ag-grid-community';

export class TableColumn implements ColDef {
	field: string;
	headerName: string;
	filter?: string | boolean;
	sortable:boolean;
	width?: number;
	resizable?: boolean;
	pinned?:string;
	cellRendererFramework?:any;

	constructor(source: Partial<TableColumn>) {
		if (source.resizable === undefined) this.resizable = true;
		if (source.filter === undefined) this.filter = true;
		Object.assign(this,source);
	}
}
