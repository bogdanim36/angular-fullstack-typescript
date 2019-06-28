import {ServerRepository} from '@server/app/common/ServerRepository';
import {ServerStore} from '@server/app/common/ServerStore';

export class TeamsServerRepository extends ServerRepository {
	tableName = 'teams';
	schema = 'pm';
	primaryKey = 'id';

	constructor(protected store: ServerStore) {
		super(store);
	}
}

