import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentsIndexComponent} from "@app/module/pages/departments/departments-index.component";

const routes: Routes = [
	{
		path: '',
		component: DepartmentsIndexComponent
	}
];
	@NgModule({
		imports: [RouterModule.forChild(routes)],
		exports: [RouterModule]
	})
export class DepartmentsRoutingModule {
}
