import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class UsersServerRepository extends ServerRepository {
	tableName = 'users';
	schema = 'pm';
	primaryKey = 'id';

	constructor(protected store: ServerStore) {
		super(store);
	}
	getOneByEmail(email): Promise<any> {
        const query = 'select * from ?? where ??=?';
        return this.db.runPromiseQuery(query, [this.tableName, 'email', email]);
    }
}

