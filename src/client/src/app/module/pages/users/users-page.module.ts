import {NgModule} from '@angular/core';
import {BrowserModule, SafeHtml} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIcon, MatIconModule, MatToolbarModule} from "@angular/material";
import {AgGridModule} from 'ag-grid-angular';

import {EntityPageModule} from '@app/components/entity-page/entity-page.module';
import {UsersIndexComponent} from '@app/module/pages/users/index/users-index.component';
import {UsersClientService} from '@app/module/pages/users/users-client.service';
import {UsersUiConfig} from '@app/module/pages/users/users-ui-config';
import {GridToolbarComponent} from "@app/components/entity-page/shared/grid-toolbar.component";
import {CommonModule} from "@angular/common";

@NgModule({
	entryComponents: [
	],
	declarations: [
		UsersIndexComponent,
		GridToolbarComponent
	],
	providers: [
		UsersClientService,
		UsersUiConfig
	],
	imports: [
		BrowserModule,
		CommonModule,
		EntityPageModule,
		FormsModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		AngularFontAwesomeModule,
		BrowserAnimationsModule,
		AgGridModule.withComponents([])
	]
})

export class UsersPageModule {
}
