import {ServerService} from '@server/app/common/ServerService';
import {ServerStore} from '@server/app/common/ServerStore';
import {DailyReport} from "@shared/models/daily-report/daily-report";
import {DailyReportModelExtended} from "@shared/models/daily-report/daily-report.model-extended";
import {DailyReportServerRepository} from "./DailyReportServerRepository";

export class DailyReportServerService extends ServerService<DailyReport, DailyReportModelExtended, DailyReportServerRepository> {

    constructor(protected store: ServerStore) {
        super(DailyReport, DailyReportModelExtended, DailyReportServerRepository, store);
    }
}
