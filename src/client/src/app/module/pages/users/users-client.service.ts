import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {User} from '@shared/user';
import {AuthService} from "@app/admin/auth.service";

@Injectable({providedIn: 'root'})
export class UsersClientService extends ClientServiceBaseClass<User> {

	constructor(protected http: HttpClient, private authService:AuthService) {
		super(http, User, 'api/users');
		authService.login$.subscribe(authUser=>{
			console.log('google auth ', authUser);
		});
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}
}
