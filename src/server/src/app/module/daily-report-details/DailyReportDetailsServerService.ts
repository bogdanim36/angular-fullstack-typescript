import {ServerService} from '@server/app/common/ServerService';
import {DailyReportDetailsServerRepository} from './DailyReportDetailsServerRepository';
import {ServerStore} from '@server/app/common/ServerStore';
import {DailyReportDetail} from '@shared/models/daily-report-detail/daily-report-detail';
import {DailyReportModelExtended} from "@shared/models/daily-report/daily-report.model-extended";
import {DailyReportDetailModelExtended} from "@shared/models/daily-report-detail/daily-report-detail.model-extended";

export class DailyReportDetailsServerService extends ServerService<DailyReportDetail, DailyReportDetailModelExtended, DailyReportDetailsServerRepository> {

	constructor(protected store: ServerStore) {
		super(DailyReportDetail, DailyReportDetailModelExtended, DailyReportDetailsServerRepository, store);
	}
}
