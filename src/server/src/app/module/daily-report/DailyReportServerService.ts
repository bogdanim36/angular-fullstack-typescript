import {ServerService} from '@server/app/ServerService';
import {DailyReportServerRepository} from './DepartmentsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {DailyReport} from "@shared/daily-report";

export class DailyReportServerService extends ServerService<DailyReport, DailyReportServerRepository> {
	public repository: DailyReportServerRepository;

	constructor(protected store: ServerStore) {
		super(DailyReport, store);
		this.repository = new DailyReportServerRepository(store);
	}
}