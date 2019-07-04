import {Component} from '@angular/core';

import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {AppSharedService} from "@app/core/app-shared.service";

import {DailyReportDetailsUiConfig} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-ui-config";
import {DailyReportDetailsClientService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-client.service";
import {DailyReportDetailsEntityService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-entity.service";
import {DailyReportDetailModelExtended} from "@shared/models/daily-report-detail/daily-report-detail.model-extended";
import {DailyReportDetail} from "@shared/models/daily-report-detail/daily-report-detail";
import {DailyReportModuleService} from "@app/module/pages/daily-report/daily-report-module.service";

@Component({
    selector: 'app-entity-form',
    templateUrl: './daily-report-detail-form.component.html',
    styleUrls: ['../../../../components/entity-page/form/entity-form.component.scss', './daily-report-detail-form.component.scss']
})
export class DailyReportDetailFormComponent extends EntityFormComponentBaseClass<DailyReportDetail, DailyReportDetailModelExtended, DailyReportDetailsUiConfig, DailyReportDetailsClientService> {
    public remote = false;

    constructor(public entityService: DailyReportDetailsEntityService, public sharedService: AppSharedService, private moduleService: DailyReportModuleService) {
        super(DailyReportDetailModelExtended, entityService, sharedService );
    }
    newItem() {
        this.source = this.createInstance({status:"In progress", id: this.moduleService.nextDetailId++});
        this.isNewItem = true;
        this.editing();
    }
    save(source?): Promise<any> {
        return super.save(source).then(response=>{
            // console.log('task details promise response', response);
            if(response.status){
                let tasks = [];
                this.grid.api.forEachNode(function(node) {
                    tasks.push(node.data);
                });
                this.moduleService.tasksChanged$.next(tasks);
            }
        });
    }
}
