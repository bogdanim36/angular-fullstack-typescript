import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {User} from '@shared/user';
import {UsersServerService} from '@module/users/UsersServerService';
import {UsersServerRepository} from '@module/users/UsersServerRepository';

export class UsersServerController extends ServerServiceController<User, UsersServerService, UsersServerRepository> {
	service: UsersServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "users");
		this.service = new UsersServerService(this.store);
		this.setDefaultRoutes();
	}
}

