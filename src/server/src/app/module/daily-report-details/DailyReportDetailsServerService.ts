import {ServerService} from '@server/app/ServerService';
import {DailyReportDetailsServerRepository} from './DailyReportDetailsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {DailyReportDetail} from '@shared/models/daily-report-detail/daily-report-detail';
import {DailyReportModelExtended} from "@shared/models/daily-report/daily-report.model-extended";
import {DailyReportDetailModelExtended} from "@shared/models/daily-report-detail/daily-report-detail.model-extended";

export class DailyReportDetailsServerService extends ServerService<DailyReportDetail, DailyReportDetailModelExtended, DailyReportDetailsServerRepository> {
	public repository: DailyReportDetailsServerRepository;
	public modelExtended: DailyReportModelExtended;

	constructor(protected store: ServerStore) {
		super(DailyReportDetail, DailyReportDetailModelExtended, DailyReportDetailsServerRepository, store);
	}
}
