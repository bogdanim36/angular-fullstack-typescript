import {ServerRepository} from '@server/app/common/ServerRepository';
import {ServerStore} from '@server/app/common/ServerStore';

export class DepartmentsServerRepository extends ServerRepository {
	tableName = 'departments';
	schema = 'pm';
	primaryKey = 'id';

	constructor(protected store: ServerStore) {
		super(store);
	}
}

