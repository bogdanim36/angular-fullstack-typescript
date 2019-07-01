import {DailyReportDetail} from "./daily-report-detail";
import {DailyReportDetailValidator} from "@shared/models/daily-report-detail/daily-report-detail.validator";

export class DailyReportDetailModelExtended {
    modelClass = DailyReportDetail;
    relations = {};
    validator = DailyReportDetailValidator;

    createValidator(): DailyReportDetailValidator {
        return new DailyReportDetailValidator();
    }
}
