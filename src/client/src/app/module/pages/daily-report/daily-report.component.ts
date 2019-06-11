import {Component, ComponentFactoryResolver, OnInit} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

import {AppSharedService} from "@app/core/app-shared.service";

import {DailyReport} from "@shared/daily-report";
import {DailyReportClientService} from "@app/module/pages/daily-report/daily-report-client.service";
import {PageComponent} from "@app/core/page.component";

@Component({
    selector: "app-daily-report",
    templateUrl: "./daily-report.component.html",
    styleUrls: ["./daily-report.component.scss"]
})
export class DailyReportComponent extends PageComponent implements OnInit {

    constructor( public appSharedService: AppSharedService,
                public service: DailyReportClientService,
                protected componentFactoryResolver: ComponentFactoryResolver,
                protected sanitizer: DomSanitizer) {
    super (appSharedService);
    }


    ngOnInit() {
    }


}
