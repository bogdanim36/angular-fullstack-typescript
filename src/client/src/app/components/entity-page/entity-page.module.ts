import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import {
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatOptionModule,
	MatSelectModule,
	MatToolbarModule
} from "@angular/material";
import {GridActionColumnComponent} from "@app/components/entity-page/index/grid-action-column.component";
import {AppSharedService} from "@app/core/app-shared.service";
import {GridRowActionsMenuColumnComponent} from "@app/components/entity-page/index/grid-row-actions-menu-column.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@NgModule({
	declarations: [
		GridActionColumnComponent,
		GridRowActionsMenuColumnComponent,
	],
	exports: [
		GridRowActionsMenuColumnComponent,
		GridActionColumnComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatCardModule,
		MatSelectModule,
		MatOptionModule,
		AgGridModule.withComponents([])
	],
	providers: [AppSharedService]
})

export class EntityPageModule {

}
