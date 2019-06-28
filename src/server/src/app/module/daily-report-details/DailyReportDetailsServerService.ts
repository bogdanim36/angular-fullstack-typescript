import {ServerService} from '@server/app/ServerService';
import {DailyReportDetailsServerRepository} from './DailyReportDetailsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {DailyReportDetail} from '@shared/models/daily-report-detail';

export class DailyReportDetailsServerService extends ServerService<DailyReportDetail, DailyReportDetailsServerRepository> {
	public repository: DailyReportDetailsServerRepository;

	constructor(protected store: ServerStore) {
		super(DailyReportDetail, store);
		this.repository = new DailyReportDetailsServerRepository(store);
	}
}
