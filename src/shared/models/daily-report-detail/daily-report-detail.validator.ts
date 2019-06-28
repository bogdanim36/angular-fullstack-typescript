import {ModelValidator} from "../../common/model-validator";
import {DailyReportDetail} from "@shared/models/daily-report-detail/daily-report-detail";

export class DailyReportDetailValidator extends ModelValidator<DailyReportDetail> {

    constructor(item) {
        super(item);
        this.getRuleForField('status', 'required');
        this.getRuleForField('percent', 'required');
        this.getRuleForField('subsection', 'required');
        this.getRuleForField('description', 'required');
    }
}
