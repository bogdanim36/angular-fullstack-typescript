import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersIndexComponent} from '@app/module/pages/users/users-index.component';
import {ProjectsIndexComponent} from '@app/module/pages/projects/projects-index.component';
import {AuthGuard} from "@app/admin/guard/auth.guard";

const routes: Routes     = [
	{path: 'users', component:UsersIndexComponent, canActivate: [AuthGuard] },
	{path: 'projects', component:ProjectsIndexComponent, canActivate: [AuthGuard]}
	];

@NgModule({
	imports: [RouterModule.forRoot(routes, {enableTracing:false})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
