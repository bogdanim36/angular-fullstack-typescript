import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {Team} from '@shared/models/team';
import {TeamsServerService} from '@module/teams/TeamsServerService';
import {TeamsServerRepository} from '@module/teams/TeamsServerRepository';

export class TeamsServerController extends ServerServiceController<Team, TeamsServerService, TeamsServerRepository> {
	service: TeamsServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "teams");
		this.service = new TeamsServerService(this.store);
		this.setDefaultRoutes();
	}
}

