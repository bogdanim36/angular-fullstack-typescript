import {ServerRepository} from '@server/app/common/ServerRepository';
import {ServerStore} from '@server/app/common/ServerStore';

export class ProjectsServerRepository extends ServerRepository {
	tableName = 'projects';
	schema = 'pm';
	primaryKey = 'id';

	constructor(protected store: ServerStore) {
		super(store);
	}
}

