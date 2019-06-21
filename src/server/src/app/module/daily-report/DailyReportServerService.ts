import {ServerService} from '@server/app/ServerService';
import {ServerStore} from '@server/app/ServerStore';
import {DailyReport} from "@shared/daily-report";
import {DailyReportServerRepository} from "@module/daily-report/DailyReportServerRepository";

export class DailyReportServerService extends ServerService<DailyReport, DailyReportServerRepository> {
	public repository: DailyReportServerRepository;

	constructor(protected store: ServerStore) {
		super(DailyReport, store);
		this.repository = new DailyReportServerRepository(store);
	}
}
