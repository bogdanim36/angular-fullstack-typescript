import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";

import {AppComponent} from './app.component';

import {AppLayoutModule} from '@app/layout/app-layout.module';
import {AppSharedService} from '@app/core/app-shared.service';
import {UsersPageModule} from '@app/module/pages/users/users-page.module';
import {ModalConfirmComponent} from './components/modal-confirm/modal-confirm.component';
import {ProjectsPageModule} from '@app/module/pages/projects/projects-page.module';
import {firebaseConfig} from "../environments/secrets";


@NgModule({
	declarations: [
		AppComponent,
		ModalConfirmComponent,
	],

	imports: [BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AppLayoutModule,
		UsersPageModule,
		ProjectsPageModule
	],
	bootstrap: [AppComponent],
	providers: [AppSharedService]
})
export class AppModule {
}
