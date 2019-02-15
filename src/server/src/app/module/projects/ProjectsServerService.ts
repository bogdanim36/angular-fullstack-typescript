import {ServerService} from '@server/app/ServerService';
import {ProjectsServerRepository} from './ProjectsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {Project} from '@shared/project';

export class ProjectsServerService extends ServerService<Project, ProjectsServerRepository> {
	public repository: ProjectsServerRepository;

	constructor(protected store: ServerStore) {
		super(Project, store);
		this.repository = new ProjectsServerRepository(store);
	}
}