import {Component} from '@angular/core';

import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {AppSharedService} from "@app/core/app-shared.service";

import {DailyReportDetail} from "@shared/daily-report-detail";
import {DailyReportDetailsUiConfig} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-ui-config";
import {DailyReportDetailsClientService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-client.service";

@Component({
	selector: 'app-entity-form',
	templateUrl: './daily-report-detail-form.component.html',
	styleUrls: ['../../../../components/entity-page/form/entity-form.component.scss', './daily-report-detail-form.component.scss']
})
export class DailyReportDetailFormComponent extends EntityFormComponentBaseClass<DailyReportDetail, DailyReportDetailsUiConfig, DailyReportDetailsClientService> {

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(DailyReportDetail, entityService, sharedService);
	}
}
