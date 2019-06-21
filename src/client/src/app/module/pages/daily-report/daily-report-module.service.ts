import {DailyReport} from "@shared/daily-report";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {DailyReportPageModule} from "@app/module/pages/daily-report/daily-report-page.module";

@Injectable({
    providedIn: DailyReportPageModule
})
export class DailyReportModuleService {
    item: DailyReport;
    item$: Subject<DailyReport> = new Subject();

    constructor() {
        this.item$.subscribe(item => {
            this.item = item;
        });
    }
}
