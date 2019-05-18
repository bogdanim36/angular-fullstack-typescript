import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {AdminRoutingModule} from "@app/admin/admin-routing.module";
import {AngularFireModule} from "@angular/fire";
import {firebaseConfig} from "../../environments/secrets";
import {AuthService} from "@app/admin/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		ForgotPasswordComponent,
		VerifyEmailComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		AdminRoutingModule,
		AngularFireModule.initializeApp(firebaseConfig),
	],
	providers:[
		AuthService,
		AngularFireAuth,
		AngularFirestore
	]
})
export class AdminModule {
}
