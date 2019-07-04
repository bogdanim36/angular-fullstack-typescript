import {Model} from '../../common/model';

export class DailyReportDetail extends Model {

    id?: any;
    status?: string;
    percent?: string;
    taiga?: string;
    subsection?: string;
    description?: string;

    constructor(source: Partial<DailyReportDetail>, extra = {}) {
        super(source, extra);
    }
}

