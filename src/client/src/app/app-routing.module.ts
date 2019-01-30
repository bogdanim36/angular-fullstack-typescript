import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersIndexComponent} from '@app/module/pages/users/users-index.component';

const routes: Routes    = [
	{path: 'users', component:UsersIndexComponent}
	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
