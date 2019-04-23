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
import {SpkTableTemplateDirective} from "@app/components/spk-grid/spk-grid-template/spk-table-template/spk-table-template.directive";
import {SpkGridComponent} from "@app/components/spk-grid/spk-grid.component";
import {SpkTableColumnTemplateDirective} from "@app/components/spk-grid/spk-grid-template/spk-table-template/spk-table-column-template.directive";
import {SpkGridTemplateDirective} from "@app/components/spk-grid/spk-grid-template/spk-grid-template.directive";
import { SpkTableComponent } from './spk-table/spk-table.component';


@NgModule({
	entryComponents: [
		SpkTableComponent
	],
	declarations: [
		SpkTableTemplateDirective,
		SpkGridComponent,
		SpkTableColumnTemplateDirective,
		SpkGridTemplateDirective,
		SpkTableComponent,
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
		SpkTableColumnTemplateDirective,
		SpkTableTemplateDirective,
		SpkGridTemplateDirective,
		SpkGridComponent,
	]
})

export class SpkGridModule {
}
