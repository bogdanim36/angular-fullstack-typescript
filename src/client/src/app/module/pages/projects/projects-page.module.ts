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
import {AgGridModule} from "ag-grid-angular";

import {EntityPageModule} from "@app/components/entity-page/entity-page.module";
import {ProjectsIndexComponent} from "@app/module/pages/projects/projects-index.component";
import {ProjectsClientService} from "@app/module/pages/projects/projects-client.service";
import {ProjectsUiConfig} from "@app/module/pages/projects/projects-ui-config";
import {ProjectFormComponent} from "@app/module/pages/projects/project-form.component";
import {GridBooleanCellRenderComponent} from "@app/components/entity-page/index/grid-boolean-cell-render.component";


@NgModule({
	entryComponents: [
		ProjectFormComponent,
	],
	declarations: [
		ProjectsIndexComponent
		,ProjectFormComponent
		,GridBooleanCellRenderComponent
	],
	providers: [
		ProjectsClientService,
		ProjectsUiConfig
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularFontAwesomeModule,
		CommonModule,
		EntityPageModule,
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
		ScrollingModule,
		AgGridModule.withComponents([])
	]
})

export class ProjectsPageModule {
}
