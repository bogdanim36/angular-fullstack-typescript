import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DailyReportComponent} from "@app/module/pages/daily-report/daily-report.component";


const routes: Routes = [
    {
        path: 'add',
        component: DailyReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DailyReportRoutingModule {
}
