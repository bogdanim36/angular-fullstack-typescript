import {User} from '@shared/user';
import {ServerService} from '@server/app/ServerService';
import {UsersServerRepository} from './UsersServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class UserService extends ServerService<User, UsersServerRepository> {
    public repository: UsersServerRepository;

    constructor(protected store: ServerStore) {
        super(User, store);
        this.repository = new UsersServerRepository(store);
    }
}