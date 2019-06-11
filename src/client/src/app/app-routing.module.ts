import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "@app/admin/guard/auth.guard";

const routes: Routes = [
	{path: '', redirectTo: 'daily-report', pathMatch: "full"},
	{path: 'users', loadChildren: () => import('./module/pages/users/users-page.module').then(mod => mod.UsersPageModule), canActivate: [AuthGuard]},
	{path: 'projects', loadChildren: () => import('./module/pages/projects/projects-page.module').then(mod => mod.ProjectsPageModule),  canActivate: [AuthGuard]},
	{path: 'teams', loadChildren: () => import('./module/pages/teams/teams-page.module').then(mod => mod.TeamsPageModule),  canActivate: [AuthGuard]},
	{path: 'departments', loadChildren: () => import('./module/pages/departments/departments-page.module').then(mod => mod.DepartmentsPageModule),  canActivate: [AuthGuard]},
	{path: 'daily-report', loadChildren: () => import('./module/pages/daily-report/daily-report-page.module').then(mod => mod.DailyReportPageModule),  canActivate: [AuthGuard]}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {enableTracing: false})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
