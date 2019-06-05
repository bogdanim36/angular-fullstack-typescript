import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-angular';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {GridActionColumnComponent} from "@app/components/entity-page/index/grid-action-column.component";
import {CommonModule} from "@angular/common";
import {AppSharedService} from "@app/core/app-shared.service";
import {GridBooleanCellRenderComponent} from "@app/components/entity-page/index/grid-boolean-cell-render.component";

@NgModule({
	declarations: [
		GridActionColumnComponent
	],
	exports: [
	],
	imports: [
		FormsModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatCardModule,
		AgGridModule.withComponents([GridActionColumnComponent, GridBooleanCellRenderComponent])
	],
	providers: [AppSharedService]
})

export class EntityPageModule {

}
