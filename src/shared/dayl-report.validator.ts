import {ModelValidator, ValidatorRule} from "@shared/model-validator";
import {DailyReport} from "@shared/daily-report";

export class DailyReportValidator extends ModelValidator<DailyReport> {

    constructor(item) {
        super(DailyReport);
        console.log('required', item);
        let userId = this.rules['userId'] = [];
        userId.push(new this.existingRules.required('userId', item));
        userId.push(new this.existingRules.integer('userId', item));
    }
}
