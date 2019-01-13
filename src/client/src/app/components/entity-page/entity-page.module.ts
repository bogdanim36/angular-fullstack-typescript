import {NgModule} from '@angular/core';
import {EntityTableListComponent} from './table-list/entity-table-list.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {EntityMobileListComponent} from './mobile-list/entity-mobile-list.component';
import {EntityFormComponent} from './form/entity-form.component';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FormsModule} from '@angular/forms';
import {DialogService, DynamicDialogRef} from 'primeng/api';
import {BrowserModule} from '@angular/platform-browser';
import {InputSwitchModule, InputTextareaModule, InputTextModule, ToggleButtonModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        EntityTableListComponent,
        EntityMobileListComponent,
    ],
    exports:[
        EntityTableListComponent,
        EntityMobileListComponent
    ],
    imports: [
        BrowserModule,
        TableModule,
        ButtonModule,
        TableModule,
        ButtonModule,
        DataViewModule,
        DialogModule,
        DynamicDialogModule,
        FormsModule,
        InputTextModule,
        InputSwitchModule,
        InputTextareaModule,
        ToggleButtonModule,

    ],
    providers: [
        EntityFormComponent,
        DialogService,
        DynamicDialogRef,
    ]
})

export class EntityPageModule {

}