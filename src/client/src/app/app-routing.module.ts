import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuItem} from "primeng/api";
import {UsersIndexComponent} from "./module-pm/pages/users/index/users-index.component";

const routes: Routes = [
    {path: 'users', component: UsersIndexComponent},
];


export const MenuItems: MenuItem[] =
    [{
        label: "Administration",
        expanded: true,
        items: [
            {label: "Users", routerLink: "users" , icon:"pi pi-users"},
        ]
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
