import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class DailyReportDetailsServerRepository extends ServerRepository {
	tableName = 'daily-report-details';
	schema = 'pm';
	primaryKey = 'id';

	constructor(protected store: ServerStore) {
		super(store);
	}
}

