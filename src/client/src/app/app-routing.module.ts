import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersIndexComponent} from '@app/module/pages/users/users-index.component';
import {ProjectsIndexComponent} from '@app/module/pages/projects/projects-index.component';

const routes: Routes     = [
	{path: 'users', component:UsersIndexComponent},
	{path: 'projects', component:ProjectsIndexComponent}
	];

@NgModule({
	imports: [RouterModule.forRoot(routes, {enableTracing:false})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
