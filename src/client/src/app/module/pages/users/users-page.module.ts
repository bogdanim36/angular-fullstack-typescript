import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {AgGridModule} from 'ag-grid-angular';

import {EntityPageModule} from '@app/components/entity-page/entity-page.module';
import {UsersIndexComponent} from '@app/module/pages/users/users-index.component';
import {UsersClientService} from '@app/module/pages/users/users-client.service';
import {UsersUiConfig} from '@app/module/pages/users/users-ui-config';
import {CommonModule} from "@angular/common";
import {UsersGridToolbarComponent} from "@app/module/pages/users/users-grid-toolbar.component";
import {UserFormComponent} from "@app/module/pages/users/user-form.component";

@NgModule({
	entryComponents: [
		UsersGridToolbarComponent,
		UserFormComponent
	],
	declarations: [
		UsersIndexComponent,
		UsersGridToolbarComponent,
		UserFormComponent
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
		MatFormFieldModule,
		MatInputModule,
		AngularFontAwesomeModule,
		BrowserAnimationsModule,
		AgGridModule.withComponents([])
	]
})

export class UsersPageModule {
}
