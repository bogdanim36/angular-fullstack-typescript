import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersIndexComponent} from '@app/module/pages/users/users-index.component';
import {ProjectsIndexComponent} from '@app/module/pages/projects/projects-index.component';
import {Projects2Component} from "@app/module/pages/projects2/projects2.component";

const routes: Routes     = [{path: 'users', component:UsersIndexComponent},
	{path: 'projects', component:ProjectsIndexComponent},
	{path: 'projects2', component:Projects2Component},
	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
