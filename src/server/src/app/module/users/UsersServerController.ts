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
		this.addRoute('users/checkUserExistence', 'post', this.checkUserExistence);
		this.setDefaultRoutes();
	}

	checkUserExistence(req: Request, res: Response) {
		console.log('route:', req.route, 'body:',  req.body, 'params', req.params );
		if (!this.isAuthenticated(req, res)) return;
		if (!req.body.email) ServerResponse.error(res, {message: 'No email provided as parameter'});
		else if (!req.body.displayName) ServerResponse.error(res, {message: 'No displayName provided as parameter'});
		else {
			this.service.getOneByEmail(req.body.email).then(response => {
				ServerResponse.success(res, response);
			}, error => ServerResponse.error(res, error));
		}
	}
}

