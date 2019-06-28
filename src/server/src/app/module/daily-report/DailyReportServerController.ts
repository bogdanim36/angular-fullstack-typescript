import {ServerServiceController} from '@server/app/common/ServerServiceController';
import {ServerStore} from '@server/app/common/ServerStore';
import {DailyReport} from "@shared/models/daily-report/daily-report";
import {DailyReportServerService} from "@module/daily-report/DailyReportServerService";
import {DailyReportServerRepository} from "@module/daily-report/DailyReportServerRepository";

export class DailyReportServerController extends ServerServiceController<DailyReport, DailyReportServerService, DailyReportServerRepository> {
	service: DailyReportServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "daily-report");
		this.service = new DailyReportServerService(this.store);
		this.setDefaultRoutes();
	}
}

