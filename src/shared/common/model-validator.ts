export class ModelValidator<M> {

    existingRules = {
        required: RequiredValidatorRule,
        integer: IntegerTypeValidatorRule,
        date: DateTypeValidatorRule
    };
    rules: any;
    errors: any;
    item: M;

    constructor(item) {
        this.rules = {};
        this.item = item;
    }

    getRuleForField(field, ruleName, overwrite?: Partial<ValidatorRule>) {
        if (!this.rules[field]) this.rules[field] = [];
        let ruleObj = new this.existingRules[ruleName](this.item, field);
        if (typeof overwrite === "object") Object.assign(ruleObj, overwrite);
        this.rules[field].push(ruleObj);
    }

    pass(): boolean {
        let errors = {};
        Object.keys(this.rules).forEach(key => {
            let rules = this.rules[key];
            errors[key] = [];
            rules.find((rule: ValidatorRule) => {
                if (rule.pass()) return false;
                errors[key].push(rule.message);
                return rule.stopProcessing;
            });
            if (errors[key].length === 0) delete errors[key];
        });
        if (Object.keys(errors).length === 0) return true;
        this.errors = errors;
        return false;
    }

}

export class ValidatorRule {
    name: string;
    item: any;
    field: string;
    message: string;
    stopProcessing = false;

    pass(): boolean {
        return true;
    }
}

export class RequiredValidatorRule extends ValidatorRule {
    name = 'required';
    message: string;
    stopProcessing = true;

    constructor(item, field) {
        super();
        this.item = item;
        this.field = field;
        this.message = `Value is required!`;
    }

    pass() {
        let value = this.item[this.field];
        if (value === undefined) return false;
        // if (typeof value === 'string' && value.length === 0) return false;
        return value !== null;
    }
}

export class IntegerTypeValidatorRule extends ValidatorRule {
    name = 'integer';
    message: string;
    stopProcessing = true;

    constructor(item, field) {
        super();
        this.item = item;
        this.field = field;
        this.message = `Value must be an integer!`;
    }

    pass() {
        let value = this.item[this.field];
        if (value === undefined) return false;
        if (value === null) return false;
        if (typeof value !== "number") return false;
        return parseInt(value.toString(), 10) === value;
    }
}

export class DateTypeValidatorRule extends ValidatorRule {
    name = 'date';
    message: string;
    stopProcessing = true;

    constructor(item, field) {
        super();
        this.item = item;
        this.field = field;
        this.message = `Value must be a date!`;
    }

    pass() {
        let value = this.item[this.field];
        console.log('date value', value);
        if (value === undefined) return false;
        if (value === null) return false;
        if (typeof value !== "string") return false;
        if (value.length !== 10) return false;
        let year = parseInt(value.substring(0, 4), 10);
        let month = parseInt(value.substring(5, 7), 10);
        let day = parseInt(value.substring(8, 10), 10);
        let validYear = year >0 ;
        let validMonth = month > 0 && month < 12;
        let validDay = day > 0 && day < 31;
        return (!(!validYear || !validMonth || !validDay));
    }
}
