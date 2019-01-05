import {ServerServiceController} from '@server/app/ServerServiceController';
import {UserService} from '@module/users/UsersServerService';
import {ServerStore} from '@server/app/ServerStore';
import {UsersServerRepository} from '@module/users/UsersServerRepository';
import {User} from '@shared/user';

export class UsersServerController extends ServerServiceController<User, UserService, UsersServerRepository> {
    service: UserService;

    constructor(protected app, private store: ServerStore) {
        super(app, "users");
        this.service = new UserService(this.store);
        this.setDefaultRoutes();
    }

}

