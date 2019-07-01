import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";

import {AppSharedService} from "@app/core/app-shared.service";

import {DailyReport} from "@shared/models/daily-report/daily-report";
import {DailyReportClientService} from "@app/module/pages/daily-report/daily-report-client.service";
import {DailyReportUiConfig} from "@app/module/pages/daily-report/daily-report-ui-config";
import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {DateAdapter, MatDatepicker} from "@angular/material";
import {MAT_DATE_FORMATS} from '@angular/material';
import {DATE_FORMAT} from "@app/app.constants";
import {AppDateAdapter} from "@app/core/AppDateAdapter";
import {AutocompleteConfig} from "@app/core/autocomplete-config";
import {Project} from "@shared/models/project/project";
import {Department} from "@shared/models/department/department";
import {DepartmentsClientService} from "@app/module/pages/departments/departments-client.service";
import {ProjectsClientService} from "@app/module/pages/projects/projects-client.service";
import {Team} from "@shared/models/team/team";
import {TeamsClientService} from "@app/module/pages/teams/teams-client.service";
import {DailyReportDetail} from "@shared/models/daily-report-detail/daily-report-detail";
import {DailyReportModuleService} from "@app/module/pages/daily-report/daily-report-module.service";
import {Subscription} from "rxjs";
import {DailyReportModelExtended} from "@shared/models/daily-report/daily-report.model-extended";


@Component({
    selector: "app-entity-form",
    templateUrl: "./daily-report.component.html",
    styleUrls: ["../../../components/entity-page/form/entity-form.component.scss", "./daily-report.component.scss"],
    providers: [
        {provide: DateAdapter, useClass: AppDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT}
    ]
})
export class DailyReportComponent extends EntityFormComponentBaseClass<DailyReport, DailyReportUiConfig, DailyReportClientService> implements OnDestroy, OnInit {
    @ViewChild(MatDatepicker) reportDate: MatDatepicker<Date>;
    departmentAutocomplete: AutocompleteConfig<Department>;
    teamAutocomplete: AutocompleteConfig<Team>;
    projectAutocomplete: AutocompleteConfig<Project>;
    itemSubscription: Subscription;
    currentUserSubscription: Subscription;
    modelExtended: DailyReportModelExtended;

    constructor(public entityService: EntityService,
                public sharedService: AppSharedService,
                public uiConfig: DailyReportUiConfig,
                public service: DailyReportClientService,
                public moduleService: DailyReportModuleService,
                public departmentsService: DepartmentsClientService,
                public teamsService: TeamsClientService,
                public projectsService: ProjectsClientService,
                private dateAdapter: AppDateAdapter) {
        super(DailyReport, entityService, sharedService, DailyReportModelExtended);
        if (this.appSharedService.currentUser) this.createItem(this.appSharedService.currentUser);
        else this.currentUserSubscription = this.appSharedService.currentUser$.subscribe(user=>this.createItem(user));
        this.departmentAutocomplete = new AutocompleteConfig<Department>('id', 'name', this.departmentsService);
        this.teamAutocomplete = new AutocompleteConfig<Team>('id', 'name', this.teamsService);
        this.projectAutocomplete = new AutocompleteConfig<Project>('id', 'name', this.projectsService);
        this.entityService.isEditing = true;
        if (this.moduleService.item) this.item = this.moduleService.item;
        this.itemSubscription = this.moduleService.item$.subscribe(item => {
            this.item = item;
            console.log('item subscription');
        });
    }

    ngOnInit(): void {
    }

    createItem(user) {
        this.moduleService.item$.next(new DailyReport({
            userId: user.id,
            date: new Date(),
            tasks: [new DailyReportDetail({status: "In progress", percent: ""})]
        }));
    }

    ngOnDestroy(): void {
        this.itemSubscription.unsubscribe();
    }

    save() {
        console.log("item to save", this.item);
        let item: any = Object.assign({}, this.item);
        item.date = this.dateAdapter.format(this.item.date, 'YYYY-MM-DD');
        super.save(item);
    }
}
