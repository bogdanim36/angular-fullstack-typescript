import {Component, NgModule} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";
import {AppComponent} from "@app/app.component";
import {ModalConfirmComponent} from "@app/components/modal-confirm/modal-confirm.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "@app/app-routing.module";
import {AppLayoutModule} from "@app/layout/app-layout.module";
import {MatIconModule} from "@angular/material";
import {AdminModule} from "@app/admin/admin.module";
import {ProjectsPageModule} from "@app/module/pages/projects/projects-page.module";
import {AppSharedService} from "@app/core/app-shared.service";

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

@NgModule({
	declarations: [
		GridBooleanCellRenderComponent
	],
	imports: [MatIconModule],
})
export class GridBooleanCellRenderModule {
}
