import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {Project} from '@shared/models/project/project';

@Injectable({providedIn: 'root'})
export class ProjectsClientService extends ClientServiceBaseClass<Project> {

	constructor(protected http: HttpClient) {
		super(http, Project, 'api/projects');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}
}
