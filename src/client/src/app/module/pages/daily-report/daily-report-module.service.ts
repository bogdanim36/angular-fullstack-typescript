import {DailyReport} from "@shared/models/daily-report/daily-report";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {DailyReportPageModule} from "@app/module/pages/daily-report/daily-report-page.module";
import {DailyReportDetail} from "@shared/models/daily-report-detail/daily-report-detail";

@Injectable({
    providedIn: DailyReportPageModule
})
export class DailyReportModuleService {
    item: DailyReport;
    item$: Subject<DailyReport> = new Subject();
    detailsDataUpdate$: Subject<{tasks}> = new Subject();
    tasksChanged$: Subject<DailyReportDetail[]> = new Subject();
    masterEditing

    constructor() {
        this.item$.subscribe(item => {
            this.item = item;
        });
        this.tasksChanged$.subscribe(tasks=>{
            this.item.tasks = tasks;
            console.log('tasks', tasks);
        });
    }
}
