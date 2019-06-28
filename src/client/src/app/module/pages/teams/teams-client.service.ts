import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {Team} from '@shared/models/team/team';

@Injectable({providedIn: 'root'})
export class TeamsClientService extends ClientServiceBaseClass<Team> {

	constructor(protected http: HttpClient) {
		super(http, Team, 'api/teams');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}
}
