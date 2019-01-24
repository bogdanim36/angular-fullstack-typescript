import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'actions-cell',
    template: `<mat-icon style="height: 100%;width:100%;text-align: center" (click)="invokeParentMethod('gridActions')">edit</mat-icon>`,
    styles: []
})
export class GridActionColumnComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod(method) {
        this.params.context.componentParent[method]('edit',this.params.node.rowIndex, this.params.colDef.headerName );
    }

    refresh(): boolean {
        return false;
    }
}
