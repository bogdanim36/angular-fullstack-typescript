import {RelationType} from "../../common/model-extended";
import {DailyReportValidator} from "./daily-report.validator";
import {DailyReportDetail} from "../daily-report-detail/daily-report-detail";
import {DailyReport} from "@shared/models/daily-report/daily-report";

export class DailyReportModelExtended {
    modelClass: DailyReport;
    relations = {
        tasks: {type: RelationType.many, class: DailyReportDetail}
    };

    createValidator(): DailyReportValidator {
        return new DailyReportValidator();
    }

}
