import { Component } from '@angular/core';
import {AppSharedService} from "@app/core/app-shared.service";
import {environment} from "../environments/environment";
import {UsersClientService} from "@app/module/pages/users/users-client.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private appSharedService:AppSharedService, private usersClientService: UsersClientService){
		let language = appSharedService.getStorage('language');
		if (language) environment.language = language;
		// console.log('get language', language);
	}
}
