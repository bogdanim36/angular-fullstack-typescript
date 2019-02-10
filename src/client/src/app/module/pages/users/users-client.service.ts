import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientService} from '@app/core/client-service';
import {User} from '@shared/user';

@Injectable({providedIn: 'root'})
export class UsersClientService extends ClientService<User> {

	constructor(protected http: HttpClient) {
		super(http, User, 'api/users');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}
}
