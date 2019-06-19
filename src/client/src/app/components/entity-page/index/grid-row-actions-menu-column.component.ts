import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {MatSelect, MatOption} from "@angular/material";

@Component({
	selector: 'actions-cell',
	template: `
		 <mat-icon (click)="select.toggle()">menu</mat-icon>
		 <mat-select #select>
			 <mat-option *ngFor="let option of options" 
						 (click)="invokeParentMethod(option.actionName)">{{option.title}}</mat-option>
		 </mat-select>
	`,
	styles: []
})
export class GridRowActionsMenuColumnComponent implements ICellRendererAngularComp {
	public params: any;
	options: any[];

	agInit(params: any): void {
		this.params = params;
		this.options = params.context.gridRowActionsMenu;
	}

	public invokeParentMethod(method) {
		this.params.context.componentParent[method]('edit', this.params.node.rowIndex, this.params.colDef.headerName);
	}

	refresh(): boolean {
		return false;
	}
}
