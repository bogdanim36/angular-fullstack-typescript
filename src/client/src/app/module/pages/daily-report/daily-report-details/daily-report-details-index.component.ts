import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

import {AppSharedService} from "@app/core/app-shared.service";
import {EntityIndexComponentBaseClass} from "@app/components/entity-page/index/entity-index-component-base-class";

import {DailyReportDetail} from "@shared/models/daily-report-detail/daily-report-detail";
import {DailyReportDetailsUiConfig} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-ui-config";
import {DailyReportDetailsClientService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-client.service";
import {DailyReportDetailFormComponent} from "@app/module/pages/daily-report/daily-report-details/daily-report-detail-form.component";
import {DailyReportDetailsEntityService} from "@app/module/pages/daily-report/daily-report-details/daily-report-details-entity.service";
import {DailyReportModuleService} from "@app/module/pages/daily-report/daily-report-module.service";
import {Subscription} from "rxjs";

@Component({
    selector: "app-daily-report-details",
    templateUrl: "../../../../components/entity-page/index/entity-index.component.html",
    styleUrls: ["../../../../components/entity-page/index/entity-index.component.scss", "./daily-report-details-index.component.scss"]
})
export class DailyReportDetailsIndexComponent extends EntityIndexComponentBaseClass<DailyReportDetail, DailyReportDetailsUiConfig, DailyReportDetailsClientService> implements OnInit, OnDestroy {
    itemSubscription: Subscription;

    constructor(appShared: AppSharedService,
                public service: DailyReportDetailsClientService,
                public uiConfig: DailyReportDetailsUiConfig,
                protected componentFactoryResolver: ComponentFactoryResolver,
                protected sanitizer: DomSanitizer,
                protected entityService: DailyReportDetailsEntityService,
                public moduleService: DailyReportModuleService) {
        super(appShared, uiConfig, sanitizer, entityService);
    }

    getTasks(item) {
        if (this.service) this.service.data.items = item.tasks;
        if (!this.grid) return;
        setTimeout(() => {
            let nodes = this.grid.api.getRenderedNodes();
            if (nodes.length) {
                nodes[0].setSelected(true);
                this.grid.api.setFocusedCell(0, '1');
            }
        });
    }

    ngOnInit() {
        this.componentIsLoaded('data');
        if (this.moduleService.item) this.getTasks(this.moduleService.item);
        this.itemSubscription = this.moduleService.item$.subscribe(this.getTasks);
    }

    ngOnDestroy(): void {
        this.itemSubscription.unsubscribe();
    }

    @ViewChild('gridForm', {read: ViewContainerRef}) set gridFormContent(content: ViewContainerRef) {
        this.gridForm = content;
        if (!content) return;
        setTimeout(() => {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(DailyReportDetailFormComponent);
            this.gridForm.clear();
            let gridForm = this.gridForm.createComponent(componentFactory).instance;
            gridForm.uiConfig = this.uiConfig;
            gridForm.grid = this.grid;
            gridForm.service = this.service;
            gridForm.toggleShowPanel = this.toggleShowPanel.bind(this);
            gridForm.editEvent.subscribe(this.handleEdit.bind(this));
            gridForm.deleteEvent.subscribe(this.handleDelete.bind(this));
            this.gridSelectionChanged = gridForm.gridSelectionChanged.bind(gridForm);
            gridForm.setCurrentItem(this.grid);
            gridForm.componentLoaded();
            this.componentIsLoaded('gridForm');
        });
    }

    @ViewChild('handsetForm', {read: ViewContainerRef}) set handsetFormContent(content: ViewContainerRef) {
        this.handsetForm = content;
        if (!content) return;
        setTimeout(() => {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(DailyReportDetailFormComponent);
            this.handsetForm.clear();
            let handsetForm = this.handsetForm.createComponent(componentFactory).instance;
            handsetForm.uiConfig = this.uiConfig;
            handsetForm.service = this.service;
            handsetForm.setCurrentItem();
        });
    }
}
