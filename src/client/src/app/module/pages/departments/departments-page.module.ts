import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {CommonModule} from "@angular/common";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {
	MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
	MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {AgGridModule} from "ag-grid-angular";

import {EntityPageModule} from "@app/components/entity-page/entity-page.module";
import {DepartmentsRoutingModule} from "@app/module/pages/departments/departments-routing.module";
import {DepartmentsIndexComponent} from "@app/module/pages/departments/departments-index.component";
import {DepartmentsClientService} from "@app/module/pages/departments/departments-client.service";
import {DepartmentsUiConfig} from "@app/module/pages/departments/departments-ui-config";
import {DepartmentFormComponent} from "@app/module/pages/departments/department-form.component";
import {GridBooleanCellRenderComponent, GridBooleanCellRenderModule } from "@app/components/entity-page/index/grid-boolean-cell-render.component";
import {EntityService} from "@app/components/entity-page/entity.service";



@NgModule({
	entryComponents: [
		DepartmentFormComponent,
	],
	declarations: [
		DepartmentsIndexComponent
		,DepartmentFormComponent
		
	],
	providers: [
		DepartmentsClientService,
		DepartmentsUiConfig,
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
		ScrollingModule,
		GridBooleanCellRenderModule,
		AgGridModule.withComponents([GridBooleanCellRenderComponent ]),
		DepartmentsRoutingModule,
	]
})

export class DepartmentsPageModule {
}
