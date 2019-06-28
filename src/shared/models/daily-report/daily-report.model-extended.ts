import {ModelExtended, RelationType} from "../../common/model-extended";
import {DailyReport} from "./daily-report";
import {DailyReportValidator} from "./daily-report.validator";
import {DailyReportDetail} from "../daily-report-detail/daily-report-detail";

export class DailyReportModelExtended extends ModelExtended<DailyReport, DailyReportValidator> {
    relations = {
        tasks: {type: RelationType.many, class: DailyReportDetail}
    };

    constructor() {
        super();
    }

}
