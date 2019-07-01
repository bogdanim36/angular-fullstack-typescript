import {Component} from '@angular/core';

import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {AppSharedService} from "@app/core/app-shared.service";

import {DailyReportDetailsUiConfig} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-ui-config";
import {DailyReportDetailsClientService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-client.service";
import {DailyReportDetailsEntityService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-entity.service";
import {DailyReportDetailModelExtended} from "@shared/models/daily-report-detail/daily-report-detail.model-extended";

@Component({
    selector: 'app-entity-form',
    templateUrl: './daily-report-detail-form.component.html',
    styleUrls: ['../../../../components/entity-page/form/entity-form.component.scss', './daily-report-detail-form.component.scss']
})
export class DailyReportDetailFormComponent extends EntityFormComponentBaseClass<DailyReportDetailModelExtended, DailyReportDetailsUiConfig, DailyReportDetailsClientService> {
    public remote = false;

    constructor(public entityService: DailyReportDetailsEntityService, public sharedService: AppSharedService) {
        super(DailyReportDetailModelExtended, entityService, sharedService );
    }
    newItem() {
        this.source = this.createInstance({status:"In progress"});
        this.isNewItem = true;
        this.editing();
    }
}
