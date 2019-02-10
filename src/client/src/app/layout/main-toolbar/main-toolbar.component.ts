import {Component, OnInit} from '@angular/core';
import {appInfo} from "@shared/app-info";

@Component({
	selector: 'app-main-toolbar',
	templateUrl: './main-toolbar.component.html',
	styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
	appTitle:string;

	constructor() {
		this.appTitle = appInfo.name;
		document.title = this.appTitle;
		document.querySelector('head title').innerHTML = this.appTitle;
	}

	ngOnInit() {
	}

}
