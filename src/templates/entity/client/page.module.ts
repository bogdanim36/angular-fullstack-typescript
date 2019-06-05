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
import {<%= entities.pascalCase %>IndexComponent} from "@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-index.component";
import {<%= entities.pascalCase %>ClientService} from "@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-client.service";
import {<%= entities.pascalCase %>UiConfig} from "@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-ui-config";
import {<%= entity.pascalCase %>FormComponent} from "@app/module/pages/<%= entities.paramCase %>/<%= entity.paramCase %>-form.component";
import {<%= entity.pascalCase %>RoutingModule} from "@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-routing.module";
import {GridBooleanCellRenderComponent, GridBooleanCellRenderModule } from "@app/components/entity-page/index/grid-boolean-cell-render.component";
import {EntityService} from "@app/components/entity-page/entity.service";

<%= uiConfig.module.imports %>

@NgModule({
	entryComponents: [
		<%= entity.pascalCase %>FormComponent,
	],
	declarations: [
		<%= entities.pascalCase %>IndexComponent
		,<%= entity.pascalCase %>FormComponent
		<%= uiConfig.module.declarations %>
	],
	providers: [
		<%= entities.pascalCase %>ClientService,
		<%= entities.pascalCase %>UiConfig,
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
		<%= entity.pascalCase %>RoutingModule,
	]
})

export class <%= entities.pascalCase %>PageModule {
}
