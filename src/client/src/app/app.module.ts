import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {AppLayoutModule} from '@app/layout/app-layout.module';
import {AdminModule} from "@app/admin/admin.module";
import {ModalConfirmComponent} from './components/modal-confirm/modal-confirm.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppSharedModule} from "@app/core/app-shared.module";

@NgModule({
    declarations: [
        AppComponent,
        ModalConfirmComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        AppLayoutModule,
        AdminModule,
		AppSharedModule
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}
