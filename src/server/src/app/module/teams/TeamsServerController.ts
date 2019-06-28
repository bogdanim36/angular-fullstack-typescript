import {ServerServiceController} from '@server/app/common/ServerServiceController';
import {ServerStore} from '@server/app/common/ServerStore';
import {Team} from '@shared/models/team/team';
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

