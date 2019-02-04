import {ColDef} from 'ag-grid-community';
import {SpkHelper} from "@app/core/spk-helper";
import ObjectAssign = SpkHelper.ObjectAssign;

export class TableColumn implements ColDef {
	field: string;
	headerName: string;
	filter?: string | boolean;
	sortable: boolean;
	width?: number;
	resizable?: boolean;
	pinned?: string;
	cellRendererFramework?: any;
	type?: string;

	constructor(source: Partial<TableColumn>) {
		if (source.resizable === undefined) this.resizable = true;
		if (source.filter === undefined) this.filter = true;
		ObjectAssign(this, source);
	}
}
