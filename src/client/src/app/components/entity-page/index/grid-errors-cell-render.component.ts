import {Component, NgModule} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";
import {MatIconModule} from "@angular/material";

@Component({
	selector: 'errors-cell',
	template: `
		 <mat-icon style="height: 100%;width:100%;text-align: center" color="warn">{{show ? 'error' : ''}}</mat-icon>`,
	styles: []
})
export class GridErrorsCellRenderComponent implements ICellRendererAngularComp {
	public params: any;
	colDef: ColDef;
	show=false;

	agInit(params: any): void {
		this.params = params;
		this.colDef = params.colDef;
		if (this.params.context.cellRenders[this.colDef.field]){
			let errors = params.data[this.colDef.field] || {};
			this.show=Object.keys(errors).length>0;
			console.log("error render show", errors, this.show);
		}
	}

	public invokeParentMethod(method) {
		this.params.context.componentParent[method]('edit', this.params.node.rowIndex, this.colDef.headerName);
	}

	refresh(): boolean {
		return false;
	}
}

@NgModule({
	declarations: [
		GridErrorsCellRenderComponent
	],
	imports: [MatIconModule],
})
export class GridErrorsCellRenderModule {
}
