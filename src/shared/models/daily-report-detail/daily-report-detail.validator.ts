import {ModelValidator} from "@shared/common/model-validator";
import {DailyReportDetail} from "@shared/models/daily-report-detail/daily-report-detail";

export class DailyReportDetailValidator extends ModelValidator<DailyReportDetail> {

    constructor() {
        super();
        this.getRuleForField('status', 'required');
        this.getRuleForField('percent', 'required');
        this.getRuleForField('subsection', 'required');
        this.getRuleForField('description', 'required');
    }
}
