import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsIndexComponent} from "@app/module/pages/projects/projects-index.component";


const routes: Routes = [
  {
    path: '',
    component: ProjectsIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
