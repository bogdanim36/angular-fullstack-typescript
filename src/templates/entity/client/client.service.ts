import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {<%= entity.pascalCase %>} from '@shared/<%= entity.paramCase %>';

@Injectable({providedIn: 'root'})
export class <%= entities.pascalCase %>ClientService extends ClientServiceBAseClass<<%= entity.pascalCase %>> {

	constructor(protected http: HttpClient) {
		super(http, <%= entity.pascalCase %>, 'api/<%= entities.paramCase %>');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}
}
