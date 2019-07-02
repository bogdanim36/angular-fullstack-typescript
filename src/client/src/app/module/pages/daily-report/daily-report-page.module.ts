import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {CommonModule} from "@angular/common";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {
	MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
	MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule,
	MatAutocompleteModule, MatNativeDateModule, MatDatepickerModule, MatOptionModule
} from "@angular/material";
import {AgGridModule} from "ag-grid-angular";

import {EntityPageModule} from "@app/components/entity-page/entity-page.module";
import {DailyReportComponent} from "@app/module/pages/daily-report/daily-report.component";
import {DailyReportClientService} from "@app/module/pages/daily-report/daily-report-client.service";
import {DailyReportRoutingModule} from "@app/module/pages/daily-report/daily-report-routing.module";
import {
	GridBooleanCellRenderComponent,
	GridBooleanCellRenderModule
} from "@app/components/entity-page/index/grid-boolean-cell-render.component";
import {DailyReportUiConfig} from "@app/module/pages/daily-report/daily-report-ui-config";
import {EntityService} from "@app/components/entity-page/entity.service";
import {DailyReportDetailsIndexComponent} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-index.component";
import {DailyReportDetailFormComponent} from "@app/module/pages/daily-report/daily-report-details/daily-report-detail-form.component";
import {DailyReportDetailsUiConfig} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-ui-config";
import {DailyReportDetailsClientService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-client.service";
import {DailyReportDetailsEntityService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-entity.service";
import {AppDateAdapter} from "@app/core/AppDateAdapter";
import {
	GridErrorsCellRenderComponent,
	GridErrorsCellRenderModule
} from "@app/components/entity-page/index/grid-errors-cell-render.component";

@NgModule({
	entryComponents: [
		DailyReportComponent,
		DailyReportDetailsIndexComponent,
		DailyReportDetailFormComponent
	],
	declarations: [
		DailyReportComponent,
		DailyReportDetailsIndexComponent,
		DailyReportDetailFormComponent,
	],
	providers: [
		DailyReportClientService,
		DailyReportUiConfig,
		DailyReportDetailsUiConfig,
		DailyReportDetailsClientService,
		DailyReportDetailsEntityService,
		EntityService,
		AppDateAdapter
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
		MatSlideToggleModule,
		MatAutocompleteModule,
		ScrollingModule,
		DailyReportRoutingModule,
		GridBooleanCellRenderModule,
		GridErrorsCellRenderModule,
		MatDatepickerModule,
		MatNativeDateModule,
		AgGridModule.withComponents([GridBooleanCellRenderComponent, GridErrorsCellRenderComponent])
	]
})

export class DailyReportPageModule {
}
