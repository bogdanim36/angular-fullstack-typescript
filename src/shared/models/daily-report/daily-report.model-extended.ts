import {RelationType} from "../../common/model-extended";
import {DailyReportValidator} from "./daily-report.validator";
import {DailyReportDetail} from "../daily-report-detail/daily-report-detail";
import {DailyReport} from "@shared/models/daily-report/daily-report";
import {DailyReportDetailValidator} from "@shared/models/daily-report-detail/daily-report-detail.validator";

export class DailyReportModelExtended {
    modelClass = DailyReport;
    validator = DailyReportValidator;
    relations = {
        tasks: {type: RelationType.many, class: DailyReportDetail, validator: DailyReportDetailValidator}
    };

    createValidator(): DailyReportValidator {
        return new DailyReportValidator();
    }

}
