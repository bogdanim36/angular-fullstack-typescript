import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";

@Component({
	selector: 'boolean-cell-render',
	template: `
		 <mat-icon style="height: 100%;width:100%;text-align: center">{{params.value ? iconChecked : iconUnchecked}}</mat-icon>`,
	styles: []
})
export class GridBooleanCellRenderComponent implements ICellRendererAngularComp {
	public params: any;
	colDef: ColDef;
	iconChecked: string;
	iconUnchecked: string;

	agInit(params: any): void {
		this.params = params;
		this.colDef = params.colDef;
		if (this.params.context.cellRenders[this.colDef.field]){
			let cellRenderDef = this.params.context.cellRenders[this.colDef.field];
			this.iconChecked =cellRenderDef.iconChecked;
			this.iconUnchecked =cellRenderDef.iconUnchecked;
		}
	}

	public invokeParentMethod(method) {
		this.params.context.componentParent[method]('edit', this.params.node.rowIndex, this.colDef.headerName);
	}

	refresh(): boolean {
		return false;
	}
}
