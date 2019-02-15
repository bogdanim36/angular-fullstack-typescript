import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class ProjectsServerRepository extends ServerRepository {
	tableName = 'projects';
	schema = 'pm';
	primaryKey = 'id';

	constructor(protected store: ServerStore) {
		super(store);
	}
}

