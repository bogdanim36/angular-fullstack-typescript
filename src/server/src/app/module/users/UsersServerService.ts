import {ServerService} from '@server/app/ServerService';
import {UsersServerRepository} from './UsersServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {User} from '@shared/user';

export class UsersServerService extends ServerService<User, UsersServerRepository> {
	public repository: UsersServerRepository;

	constructor(protected store: ServerStore) {
		super(User, store);
		this.repository = new UsersServerRepository(store);
	}
}