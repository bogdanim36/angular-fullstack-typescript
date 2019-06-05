import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {
	MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
	MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {AgGridModule} from "ag-grid-angular";

import {EntityPageModule} from "@app/components/entity-page/entity-page.module";
import {TeamsIndexComponent} from "@app/module/pages/teams/teams-index.component";
import {TeamsClientService} from "@app/module/pages/teams/teams-client.service";
import {TeamsUiConfig} from "@app/module/pages/teams/teams-ui-config";
import {TeamFormComponent} from "@app/module/pages/teams/team-form.component";
import {GridBooleanCellRenderComponent, GridBooleanCellRenderModule } from "@app/components/entity-page/index/grid-boolean-cell-render.component";
import {EntityService} from "@app/components/entity-page/entity.service";
import {TeamsRoutingModule} from "@app/module/pages/teams/teams-routing.module";



@NgModule({
	entryComponents: [
		TeamFormComponent,
	],
	declarations: [
		TeamsIndexComponent
		,TeamFormComponent
		
	],
	providers: [
		TeamsClientService,
		TeamsUiConfig,
		EntityService
	],
	imports: [
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
		ScrollingModule,GridBooleanCellRenderModule,
		AgGridModule.withComponents([GridBooleanCellRenderComponent ]),
		TeamsRoutingModule,
	]
})

export class TeamsPageModule {
}
