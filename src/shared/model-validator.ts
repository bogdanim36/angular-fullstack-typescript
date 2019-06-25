export class ModelValidator<M> {

    existingRules = {
        required: RequiredValidatorRule,
        integer: IntegerValidatorRule
    };
    rules: any;
    errors: any;
    item: M;

    constructor(item) {
        this.rules = {};
        this.item = item;
    }

    getRuleForField(field, rule) {
        if (!this.rules[field]) this.rules[field] = [];
        this.rules[field].push(new this.existingRules[rule](this.item, field));
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
        this.message = `${this.field} is required!`;
    }

    pass() {
        if (this.item[this.field] === undefined) return false;
        return this.item[this.field] !== null;
    }
}

export class IntegerValidatorRule extends ValidatorRule {
    name = 'integer';
    message: string;
    stopProcessing = true;

    constructor(item, field) {
        super();
        this.item = item;
        this.field = field;
        this.message = `${this.field} must be an integer!`;
    }

    pass() {
        let value = this.item[this.field];
        if (value === undefined) return false;
        if (value === null) return false;
        if (typeof value !== "number") return false;
        return parseInt(value.toString(), 10) === value;
    }
}
