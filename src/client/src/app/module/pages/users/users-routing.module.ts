import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersIndexComponent} from "@app/module/pages/users/users-index.component";

const routes: Routes = [
  {
    path: '',
    component: UsersIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
