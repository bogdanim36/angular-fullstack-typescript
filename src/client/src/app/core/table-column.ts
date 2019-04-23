import {ColDef} from 'ag-grid-community';
import {SpkHelper} from "@app/core/spk-helper";
import ObjectAssign = SpkHelper.ObjectAssign;
import {GetQuickFilterTextParams, ColGroupDef} from "ag-grid-community/src/ts/entities/colDef";

export class TableColumn implements ColDef {
	field: string;
	id?:string|number;
	headerName: string ;
	filter?: string | boolean;
	sortable: boolean;
	width?: number;
	resizable?: boolean;
	pinned?: string;
	cellRendererFramework?: any;
	type?: string;
	children?: (ColDef | ColGroupDef)[];
	getQuickFilterText: any;

	constructor(source: Partial<TableColumn>) {
		if (source.resizable === undefined) this.resizable = true;
		if (source.filter === undefined) this.filter = true;
		ObjectAssign(this, source);
		if (!source.getQuickFilterText) this.getQuickFilterText = (params: GetQuickFilterTextParams) => {
			return params.value;
		};
	}


}
