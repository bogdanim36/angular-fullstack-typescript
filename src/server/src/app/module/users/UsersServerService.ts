import {ServerService} from '@server/app/common/ServerService';
import {UsersServerRepository} from './UsersServerRepository';
import {ServerStore} from '@server/app/common/ServerStore';
import {User} from '@shared/models/user/user';
import {UserModelExtended} from "@shared/models/user/user.model-extended";

export class UsersServerService extends ServerService<User, UserModelExtended, UsersServerRepository> {

	constructor(protected store: ServerStore) {
		super(User, UserModelExtended, UsersServerRepository, store);
	}

	getOneByEmail(email): Promise<any> {
		return this.repository.getOneByEmail(email).then((data: any) => {
			console.log('get one by email response', data);
			if (data && data.length === 1) return this.createInstance(data[0]);
			else return false;
		});
	}
}
