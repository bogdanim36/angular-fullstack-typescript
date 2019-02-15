import {Component, OnInit} from '@angular/core';
import {appInfo} from "@shared/app-info";
import {environment} from "../../../environments/environment";
import {MatSelectChange} from "@angular/material";
import {AppSharedService} from "@app/core/app-shared.service";

@Component({
	selector: 'app-main-toolbar',
	templateUrl: './main-toolbar.component.html',
	styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
	appTitle: string;
	language: string;
	languages: any[];

	constructor(private appSharedService: AppSharedService) {
		this.appTitle = appInfo.name;
		this.language = environment.language;
		this.languages = environment.languages;
		document.title = this.appTitle;
		document.querySelector('head title').innerHTML = this.appTitle;
	}

	ngOnInit() {
	}

	languageChanged(changed:MatSelectChange) {
		environment.language = changed.value;
		this.appSharedService.addToStorage('language', environment.language);
		window.location.reload();
	}
}
