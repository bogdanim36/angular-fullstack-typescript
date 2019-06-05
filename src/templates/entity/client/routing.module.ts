import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {<%= entities.pascalCase %>IndexComponent} from "@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-index.component";

const routes: Routes = [
	{
		path: '',
		component: <%= entities.pascalCase %>IndexComponent
	}
];
	@NgModule({
		imports: [RouterModule.forChild(routes)],
		exports: [RouterModule]
	})
export class <%= entities.pascalCase %>RoutingModule {
}
