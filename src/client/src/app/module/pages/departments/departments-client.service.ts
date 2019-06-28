import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {Department} from '@shared/models/department';

@Injectable({providedIn: 'root'})
export class DepartmentsClientService extends ClientServiceBaseClass<Department> {

	constructor(protected http: HttpClient) {
		super(http, Department, 'api/departments');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}
}
