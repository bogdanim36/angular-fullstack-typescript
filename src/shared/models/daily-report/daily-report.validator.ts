import {ModelValidator} from "../../common/model-validator";
import {DailyReport} from "./daily-report";

export class DailyReportValidator extends ModelValidator<DailyReport> {

    constructor(item) {
        super(item);
        this.getRuleForField('userId', 'required');
        this.getRuleForField('userId', 'integer');
        this.getRuleForField('date', 'required');
        this.getRuleForField('date', 'date');
        this.getRuleForField('departmentId', 'required');
        this.getRuleForField('departmentId', 'integer');
        this.getRuleForField('teamId', 'required');
        this.getRuleForField('teamId', 'integer');
        this.getRuleForField('projectId', 'required');
        this.getRuleForField('projectId', 'integer');
    }
}
