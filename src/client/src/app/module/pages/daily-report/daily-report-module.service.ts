import {DailyReport} from "@shared/models/daily-report/daily-report";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {DailyReportPageModule} from "@app/module/pages/daily-report/daily-report-page.module";
import {DailyReportDetail} from "@shared/models/daily-report-detail/daily-report-detail";
import {Guid} from "@app/core/guid";

@Injectable({
    providedIn: DailyReportPageModule
})
export class DailyReportModuleService {
    item: DailyReport;
    item$: Subject<DailyReport> = new Subject();
    detailsDataUpdate$: Subject<{tasks}> = new Subject();
    tasksChanged$: Subject<DailyReportDetail[]> = new Subject();
    nextDetailId = 9999999999;

    constructor() {
        this.item$.subscribe(item => {
            this.item = item;
        });
        this.tasksChanged$.subscribe(tasks=>{
            this.item.tasks = tasks;
            console.log('tasks', tasks);
        });
    }
    public guid(): Guid {
        return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = (c === 'x') ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }
}
