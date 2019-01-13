import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/primeng';

import {PanelMenuModule} from '@app/prime-ng/panelmenu/panelmenu';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {MenuService} from '@app/layout/side-menu/menu.service';
import {SideMenuComponent} from '@app/layout/side-menu/side-menu.component';
import {MainToolbarComponent} from '@app/layout/main-toolbar/main-toolbar.component';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
	declarations: [
		SideMenuComponent,
		MainToolbarComponent,
	],
	exports:[
		SideMenuComponent,
	],
	providers: [
		HttpClient,
		MenuService,
	],
	imports: [
		BrowserModule,
		LayoutModule,
		BrowserAnimationsModule,
		AngularFontAwesomeModule,
		PanelMenuModule,
		MatIconModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		SidebarModule,
	]
})

export class AppLayoutModule {
}