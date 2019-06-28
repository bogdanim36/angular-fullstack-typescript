import {ModelExtended, RelationType} from "../common/model-extended";
import {DailyReport} from "../models/daily-report";
import {DailyReportValidator} from "../models/daily-report.validator";
import {DailyReportDetail} from "../models/daily-report-detail";

export class DailyReportModelExtended extends ModelExtended<DailyReport, DailyReportValidator> {
    relations = {
        tasks: {type: RelationType.many, class: DailyReportDetail}
    };

    constructor() {
        super();
    }

}
