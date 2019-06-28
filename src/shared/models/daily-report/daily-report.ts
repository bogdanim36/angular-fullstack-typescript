import {Model} from '../../common/model';
import {DailyReportDetail} from "@shared/models/daily-report-detail/daily-report-detail";

export class DailyReport extends Model {

    id?: number;
    date?: Date;
    userId?: number;
    departmentId?: number;
    projectId?: number;
    tasks?: DailyReportDetail[];

    constructor(source: Partial<DailyReport>, extra = {}) {
        super(source, extra);
    }
}

