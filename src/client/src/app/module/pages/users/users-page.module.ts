import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";

import {CommonModule} from "@angular/common";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {
	MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
	MatMenuModule, MatOptionModule, MatProgressSpinnerModule, MatSelectModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {AgGridModule} from "ag-grid-angular";

import {EntityPageModule} from "@app/components/entity-page/entity-page.module";
import {UsersIndexComponent} from "@app/module/pages/users/users-index.component";
import {UsersUiConfig} from "@app/module/pages/users/users-ui-config";
import {UserFormComponent} from "@app/module/pages/users/user-form.component";
import {EntityService} from "@app/components/entity-page/entity.service";
import {GridBooleanCellRenderComponent, GridBooleanCellRenderModule} from "@app/components/entity-page/index/grid-boolean-cell-render.component";
import {UsersRoutingModule} from "@app/module/pages/users/users-routing.module";
import {UsersGridToolbarComponent} from "@app/module/pages/users/users-grid-toolbar.component";

@NgModule({
	entryComponents: [
		UserFormComponent,
	],
	declarations: [
		UsersIndexComponent,
		UserFormComponent,
		UsersGridToolbarComponent
	],
	providers: [
		UsersUiConfig,
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
		MatOptionModule,
		ScrollingModule,
		UsersRoutingModule,
		GridBooleanCellRenderModule,
		AgGridModule.withComponents([GridBooleanCellRenderComponent ])
	]
})

export class UsersPageModule {
}
