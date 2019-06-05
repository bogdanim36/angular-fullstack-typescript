import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {AppLayoutModule} from '@app/layout/app-layout.module';
import {AppSharedService} from '@app/core/app-shared.service';
import {AdminModule} from "@app/admin/admin.module";
import {ModalConfirmComponent} from './components/modal-confirm/modal-confirm.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProjectsPageModule} from "@app/module/pages/projects/projects-page.module";
import {MatIconModule} from "@angular/material";
import {TeamsPageModule} from '@app/module/pages/teams/teams-page.module';


@NgModule({
	declarations: [
		AppComponent,
		ModalConfirmComponent
	],
	
imports : [BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		AppLayoutModule,
		MatIconModule,
		AdminModule,
		ProjectsPageModule,
		TeamsPageModule
	],
	bootstrap: [AppComponent],
	providers: [AppSharedService]
})
export class AppModule {
}
