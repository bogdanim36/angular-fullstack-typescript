import {ServerService} from '@server/app/ServerService';
import {ProjectsServerRepository} from './ProjectsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {Project} from '@shared/models/project/project';
import {ProjectModelExtended} from "@shared/models/project/project.model-extended";

export class ProjectsServerService extends ServerService<Project, ProjectModelExtended,  ProjectsServerRepository> {
	public repository: ProjectsServerRepository;

	constructor(protected store: ServerStore) {
		super(Project, ProjectModelExtended, ProjectsServerRepository, store);
	}
}
