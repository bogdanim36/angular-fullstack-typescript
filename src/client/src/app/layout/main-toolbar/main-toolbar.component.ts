import {Component, OnInit} from '@angular/core';
import {appInfo} from "../../../app-info";

@Component({
    selector: 'app-main-toolbar',
    templateUrl: './main-toolbar.component.html',
    styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
    appTitle:string;

    constructor() {
        this.appTitle = appInfo.name + " v" + appInfo.version;
        document.title = this.appTitle;
    }

    ngOnInit() {
    }

}
