import {ServerServiceController} from '@server/app/common/ServerServiceController';
import {ServerStore} from '@server/app/common/ServerStore';
import {Project} from '@shared/models/project/project';
import {ProjectsServerService} from '@module/projects/ProjectsServerService';
import {ProjectsServerRepository} from '@module/projects/ProjectsServerRepository';

export class ProjectsServerController extends ServerServiceController<Project, ProjectsServerService, ProjectsServerRepository> {
	service: ProjectsServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "projects");
		this.service = new ProjectsServerService(this.store);
		this.setDefaultRoutes();
	}
}

