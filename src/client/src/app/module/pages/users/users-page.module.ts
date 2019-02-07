import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatToolbarModule, MatTooltipModule} from "@angular/material";
import {AgGridModule} from 'ag-grid-angular';

import {EntityPageModule} from '@app/components/entity-page/entity-page.module';
import {UsersIndexComponent} from '@app/module/pages/users/users-index.component';
import {UsersClientService} from '@app/module/pages/users/users-client.service';
import {UsersUiConfig} from '@app/module/pages/users/users-ui-config';
import {CommonModule} from "@angular/common";
import {UsersGridToolbarComponent} from "@app/module/pages/users/users-grid-toolbar.component";
import {UserFormComponent} from "@app/module/pages/users/user-form.component";
import {ScrollingModule} from "@angular/cdk/scrolling";

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
		BrowserAnimationsModule,
		AngularFontAwesomeModule,
		CommonModule,
		EntityPageModule,
		FormsModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatMenuModule,
		MatTooltipModule,
		MatProgressSpinnerModule,
		MatDividerModule,
		ScrollingModule,
		AgGridModule.withComponents([])
	]
})

export class UsersPageModule {
}
