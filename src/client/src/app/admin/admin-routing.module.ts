import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {VerifyEmailComponent} from "@app/admin/verify-email/verify-email.component";

const routes: Routes = [
	{
		path: 'admin',
		children: [
			{path: 'login', component: LoginComponent},
			{path: 'register', component: RegisterComponent},
			{path: 'forgot-password', component: ForgotPasswordComponent},
			{path: 'verify-email', component: VerifyEmailComponent}
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule {
}
