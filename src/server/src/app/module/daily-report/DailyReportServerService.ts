import {ServerService} from '@server/app/ServerService';
import {ServerStore} from '@server/app/ServerStore';
import {DailyReport} from "@shared/daily-report";
import {DailyReportServerRepository} from "@module/daily-report/DailyReportServerRepository";
import {DailyReportDetail} from "@shared/daily-report-detail";

export class DailyReportServerService extends ServerService<DailyReport, DailyReportServerRepository> {
	public repository: DailyReportServerRepository;
	children = {
		tasks:DailyReportDetail
	};

	constructor(protected store: ServerStore) {
		super(DailyReport, store);
		this.repository = new DailyReportServerRepository(store);
	}
}
