import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {User} from '@shared/user';
import {UsersServerService} from '@module/users/UsersServerService';
import {UsersServerRepository} from '@module/users/UsersServerRepository';
import {Request, Response} from "express";
import {ServerResponse} from "@server/app/ServerResponse";

export class UsersServerController extends ServerServiceController<User, UsersServerService, UsersServerRepository> {
	service: UsersServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "users");
		this.service = new UsersServerService(this.store);
		this.setDefaultRoutes();
	}
	checkUserExistence(req: Request, res: Response) {
        if (!this.isAuthenticated(req, res)) return;
        if (!req.params.email) ServerResponse.error(res, {message: 'No email provided as parameter'});
        else if (!req.params.displayName) ServerResponse.error(res, {message: 'No displayName provided as parameter'});
        else {

		}
	}
}

