import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {HttpClient} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {MatButtonModule, MatIconModule, MatSelectModule, MatSidenavModule, MatToolbarModule, MatTreeModule} from '@angular/material';
import {MenuItemsService} from "@app/layout/tree-menu/menu-items.service";
import {SideMenuComponent} from '@app/layout/side-menu/side-menu.component';
import {MainToolbarComponent} from '@app/layout/main-toolbar/main-toolbar.component';
import {RouterModule} from "@angular/router";
import {TreeMenuComponent} from "@app/layout/tree-menu/tree-menu.component";
import {TreeModule} from "angular-tree-component";
import {FormsModule} from "@angular/forms";

@NgModule({
	declarations: [
		SideMenuComponent,
		TreeMenuComponent,
		MainToolbarComponent,
	],
	exports: [
		SideMenuComponent,
	],
	providers: [
		HttpClient,
		MenuItemsService
	],
	imports: [
		BrowserModule,
		LayoutModule,
		RouterModule,
		BrowserAnimationsModule,
		AngularFontAwesomeModule,
		MatTreeModule,
		MatIconModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatTreeModule,
		FormsModule,
		MatSelectModule,
		TreeModule.forRoot()
	]
})

export class AppLayoutModule {
}
