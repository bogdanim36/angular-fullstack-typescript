import {ColDef} from 'ag-grid-community';

export class TableColumn implements ColDef {
	field: string;
	headerName: string;
	filter?: string | boolean;
	sortable:boolean;
	width?: number;
	editable?: boolean;
	resizable?: boolean;
	pinned?:string;
	cellRenderer?: any;
	cellRendererFramework?:any;

	constructor(source: Partial<TableColumn>) {
		if (source['editable'] === undefined) this.editable = false;
		if (source.resizable === undefined) this.resizable = true;
		if (source.filter === undefined) this.filter = true;
		Object.assign(this,source);
	}
}

export class ActionsCellRenderer {
	eGui:HTMLElement;
	constructor(){}
	init(){
		console.log('init');
		let element = document.createElement('mat-button');
		element.innerHTML="add";
		this.eGui = element;
	}
	getGui():HTMLElement{
		return this.eGui;
	}
	refresh(){
		return false;
	}
}
