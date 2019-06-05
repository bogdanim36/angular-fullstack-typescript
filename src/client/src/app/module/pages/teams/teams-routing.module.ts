import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamsIndexComponent} from "@app/module/pages/teams/teams-index.component";

const routes: Routes = [
  {
    path: '',
    component: TeamsIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
