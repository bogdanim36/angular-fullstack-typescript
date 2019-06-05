import {ServerService} from '@server/app/ServerService';
import {TeamsServerRepository} from './TeamsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {Team} from '@shared/team';

export class TeamsServerService extends ServerService<Team, TeamsServerRepository> {
	public repository: TeamsServerRepository;

	constructor(protected store: ServerStore) {
		super(Team, store);
		this.repository = new TeamsServerRepository(store);
	}
}