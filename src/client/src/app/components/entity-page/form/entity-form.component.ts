import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-entity-form',
	templateUrl:"./entity-form.component.html",
    styleUrls:["./entity-form.component.scss"]
})
export class EntityFormComponent<M,C,S, I> implements OnInit {
    public launcher: any ;
    public item: M;
    public errorMessages: Array<string> = [];

    constructor() {
    }

    ngOnInit() {
    }

}
