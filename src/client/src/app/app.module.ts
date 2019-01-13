import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AppLayoutModule} from '@app/layout/app-layout.module';
import {AppSharedService} from '@app/core/app-shared.service';

@NgModule({
	declarations: [
		AppComponent,
	],
	
imports : [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		AppLayoutModule
	],
	bootstrap: [AppComponent],
	providers: [AppSharedService]
})
export class AppModule {
}
