import {Component, OnDestroy, ViewChild} from "@angular/core";

import {AppSharedService} from "@app/core/app-shared.service";

import {DailyReport} from "@shared/daily-report";
import {DailyReportClientService} from "@app/module/pages/daily-report/daily-report-client.service";
import {DailyReportUiConfig} from "@app/module/pages/daily-report/daily-report-ui-config";
import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {DateAdapter, MatDatepicker} from "@angular/material";
import {MAT_DATE_FORMATS} from '@angular/material';
import {DATE_FORMAT} from "@app/app.constants";
import {AppDateAdapter} from "@app/core/AppDateAdapter";
import {AutocompleteConfig} from "@app/core/autocomplete-config";
import {Project} from "@shared/project";
import {Department} from "@shared/department";
import {DepartmentsClientService} from "@app/module/pages/departments/departments-client.service";
import {ProjectsClientService} from "@app/module/pages/projects/projects-client.service";
import {Team} from "@shared/team";
import {TeamsClientService} from "@app/module/pages/teams/teams-client.service";
import {DailyReportDetail} from "@shared/daily-report-detail";
import {DailyReportModuleService} from "@app/module/pages/daily-report/daily-report-module.service";

@Component({
    selector: "app-entity-form",
    templateUrl: "./daily-report.component.html",
    styleUrls: ["../../../components/entity-page/form/entity-form.component.scss", "./daily-report.component.scss"],
    providers: [
        {provide: DateAdapter, useClass: AppDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT}
    ]
})
export class DailyReportComponent extends EntityFormComponentBaseClass<DailyReport, DailyReportUiConfig, DailyReportClientService> implements OnDestroy {
    @ViewChild(MatDatepicker) reportDate: MatDatepicker<Date>;
    departmentAutocomplete: AutocompleteConfig<Department>;
    teamAutocomplete: AutocompleteConfig<Team>;
    projectAutocomplete: AutocompleteConfig<Project>;

    constructor(public entityService: EntityService,
                public sharedService: AppSharedService,
                public uiConfig: DailyReportUiConfig,
                public service: DailyReportClientService,
                public moduleService: DailyReportModuleService,
                public departmentsService: DepartmentsClientService,
                public teamsService: TeamsClientService,
                public projectsService: ProjectsClientService) {
        super(DailyReport, entityService, sharedService);
        this.createItem();
        this.departmentAutocomplete = new AutocompleteConfig<Department>('id', 'name', this.departmentsService);
        this.teamAutocomplete = new AutocompleteConfig<Team>('id', 'name', this.teamsService);
        this.projectAutocomplete = new AutocompleteConfig<Project>('id', 'name', this.projectsService);
        this.entityService.isEditing = true;
        this.moduleService.item$.subscribe(item => this.item = item);
    }

    createItem() {
        this.moduleService.item$.next(new DailyReport({
            date: new Date(),
            tasks: [new DailyReportDetail({status: "In progress", percent: ""})]
        }));
    }

    ngOnDestroy(): void {
        this.moduleService.item$.unsubscribe();
    }

    save() {
        console.log("item to save", this.item);
        super.save();
    }
}
