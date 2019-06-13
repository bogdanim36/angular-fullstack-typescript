import {Component, ViewChild} from "@angular/core";

import {AppSharedService} from "@app/core/app-shared.service";

import {DailyReport} from "@shared/daily-report";
import {DailyReportClientService} from "@app/module/pages/daily-report/daily-report-client.service";
import {DailyReportUiConfig} from "@app/module/pages/daily-report/daily-report-ui-config";
import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {MatDatepicker} from "@angular/material";

@Component({
    selector: "app-entity-form",
    templateUrl: "./daily-report.component.html",
    styleUrls: ["../../../components/entity-page/form/entity-form.component.scss", "./daily-report.component.scss"]
})
export class DailyReportComponent extends EntityFormComponentBaseClass<DailyReport, DailyReportUiConfig, DailyReportClientService> {
    @ViewChild(MatDatepicker) reportDate: MatDatepicker<Date>;
    constructor(public entityService: EntityService, public sharedService: AppSharedService, public uiConfig: DailyReportUiConfig, public service: DailyReportClientService,) {
        super(DailyReport, entityService, sharedService);
        this.createItem();
        this.entityService.isEditing = true;
    }
    createItem(){
    	this.item = new DailyReport({date: Date(), name:'test'});
    	console.log(this.item);
	}
}
