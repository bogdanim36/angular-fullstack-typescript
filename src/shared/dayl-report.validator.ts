import {ModelValidator} from "@shared/model-validator";
import {DailyReport} from "@shared/daily-report";

export class DailyReportValidator extends ModelValidator<DailyReport> {

    constructor(item) {
        super(item);
        this.getRuleForField('userId', 'required');
        this.getRuleForField('userId', 'integer');
        this.getRuleForField('departmentId', 'required');
        this.getRuleForField('departmentId', 'integer');
    }
}
