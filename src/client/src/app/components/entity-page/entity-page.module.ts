import {NgModule} from '@angular/core';
import {EntityTableListComponent} from './table-list/entity-table-list.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-angular';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {GridActionColumnComponent} from "@app/components/entity-page/index/grid-action-column.component";

@NgModule({
	declarations: [
		EntityTableListComponent,
		GridActionColumnComponent
	],
	exports: [
		EntityTableListComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatCardModule,
		AgGridModule.withComponents([GridActionColumnComponent])
	],
	providers: []
})

export class EntityPageModule {

}
