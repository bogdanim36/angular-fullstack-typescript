import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientService} from '@app/core/client-service';
import {Project} from '@shared/project';

@Injectable({providedIn: 'root'})
export class ProjectsClientService extends ClientService<Project> {

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
