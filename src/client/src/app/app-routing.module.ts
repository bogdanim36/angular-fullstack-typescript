import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "@app/admin/guard/auth.guard";
const routes: Routes = [
	{path: '', redirectTo: 'daily-report', pathMatch: "full"},
	{path: 'users', loadChildren: "@app/module/pages/users/users-page.module#UsersPageModule", canActivate: [AuthGuard]},
	{path: 'projects', loadChildren:'@app/module/pages/projects/projects-page.module#ProjectsPageModule',  canActivate: [AuthGuard]},
	{path: 'teams', loadChildren: '@app/module/pages/teams/teams-page.module#TeamsPageModule',  canActivate: [AuthGuard]},
	{path: 'departments', loadChildren:'./module/pages/departments/departments-page.module#DepartmentsPageModule',  canActivate: [AuthGuard]},
	{path: 'daily-report', loadChildren: './module/pages/daily-report/daily-report-page.module#DailyReportPageModule',  canActivate: [AuthGuard]}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {enableTracing: false})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
