import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {DailyReportDetail} from '@shared/models/daily-report-detail/daily-report-detail';
import {DailyReportDetailsServerService} from '@module/daily-report-details/DailyReportDetailsServerService';
import {DailyReportDetailsServerRepository} from '@module/daily-report-details/DailyReportDetailsServerRepository';

export class DailyReportDetailsServerController extends ServerServiceController<DailyReportDetail, DailyReportDetailsServerService, DailyReportDetailsServerRepository> {
	service: DailyReportDetailsServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "daily-report-details");
		this.service = new DailyReportDetailsServerService(this.store);
		this.setDefaultRoutes();
	}
}

