import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {
	MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
	MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule,
	MatAutocompleteModule
} from "@angular/material";
import {SpkGridComponent} from "@app/components/spk-grid/spk-grid.component";
import { SpkTableComponent } from './spk-table/spk-table.component';
import { SpkTableToolbarComponent } from './spk-table/spk-table-toolbar/spk-table-toolbar.component';
import {SpkTableColumnDirective} from "@app/components/spk-grid/spk-table/spk-table-column.directive";
import { SpkTableBodyCellComponent } from './spk-table/spk-table-body-cell/spk-table-body-cell.component';


@NgModule({
	entryComponents: [
		SpkTableComponent,
		SpkTableToolbarComponent,
	],
	declarations: [
		SpkTableColumnDirective,
		SpkGridComponent,
		SpkTableComponent,
		SpkTableToolbarComponent,
		SpkTableBodyCellComponent,
	],
	providers: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularFontAwesomeModule,
		CommonModule,
		FormsModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatMenuModule,
		MatTooltipModule,
		MatProgressSpinnerModule,
		MatDividerModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatAutocompleteModule,
		ScrollingModule
	],
	exports:[
		SpkTableColumnDirective,
		SpkTableToolbarComponent,
		SpkTableComponent,
		SpkGridComponent,
	]
})

export class SpkGridModule {
}
