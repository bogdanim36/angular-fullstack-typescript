import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    ButtonModule,
    DialogModule,
    DialogService,
    DynamicDialogRef,
    InputTextareaModule,
    InputTextModule,
    SidebarModule, ToggleButtonModule
} from 'primeng/primeng';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideMenuComponent} from './layout/side-menu/side-menu.component';
import {MainToolbarComponent} from './layout/main-toolbar/main-toolbar.component';
import {MenuService} from '@app/layout/side-menu/menu.service';
import {UsersIndexComponent} from '@app/module-pm/pages/users/index/users-index.component';
import {UsersClientService} from '@app/module-pm/pages/users/users-client-service';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';
import {PanelMenuModule} from '@app/prime-ng/panelmenu/panelmenu';
import {UsersUiConfig} from '@app/module-pm/pages/users/users-ui-config';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';
import {UsersMobileListComponent} from './module-pm/pages/users/mobile-list/users-mobile-list.component';
import {UsersTableListComponent} from './module-pm/pages/users/table-list/users-table-list.component';
import {UserFormComponent} from './module-pm/pages/users/form/user-form.component';
import {DynamicDialogModule} from 'primeng/components/dynamicdialog/dynamicdialog';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
    entryComponents: [
        UserFormComponent],
    declarations: [
        AppComponent,
        SideMenuComponent,
        MainToolbarComponent,
        UsersIndexComponent,
        UsersMobileListComponent,
        UsersTableListComponent,
        UserFormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        PanelMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        SidebarModule,
        TableModule,
        ButtonModule,
        DataViewModule,
        DialogModule,
        DynamicDialogModule,
        FormsModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        InputTextModule,
        InputSwitchModule,
        InputTextareaModule,
        ToggleButtonModule
    ],
    providers: [
        HttpClient,
        MenuService,
        DialogService,
        DynamicDialogRef,
        UsersClientService,
        UsersUiConfig],
    bootstrap: [AppComponent]
})
export class AppModule {
}
