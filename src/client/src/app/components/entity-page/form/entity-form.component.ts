import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {EntityDialogData} from '@app/components/entity-page/entityDialogData';

@Component({
    selector: 'app-entity-form',
	templateUrl:'./entity-form.component.html',
    styleUrls:["./entity-form.component.scss"]
})
export class EntityFormComponent<M,C,S, I> implements OnInit {
    public launcher: any ;
    public data: EntityDialogData<M, I>;
    public item: M;
    public errorMessages: Array<string> = [];

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        config.header = config.data.uiConfig.labels.itemDetails;
        config.closeOnEscape = true;
        this.launcher = config.data.launcher;
        this.launcher.form = this;
        this.data = config.data;
        this.item = config.data.item;
    }

    ngOnInit() {
    }

}
