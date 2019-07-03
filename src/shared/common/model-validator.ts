export class ModelValidator<M> {

    existingRules = {
        required: RequiredValidatorRule,
        integer: IntegerTypeValidatorRule,
        date: DateTypeValidatorRule
    };
    rules: any;
    errors: any;

    constructor() {
        this.rules = {};
    }

    getRuleForField(field, ruleName, overwrite?: Partial<ValidatorRule>) {
        if (!this.rules[field]) this.rules[field] = [];
        let ruleObj = new this.existingRules[ruleName](field);
        if (typeof overwrite === "object") Object.assign(ruleObj, overwrite);
        this.rules[field].push(ruleObj);
    }

    pass(item, relations): boolean {
        let errors = {};
        Object.keys(this.rules).forEach(key => {
            let rules = this.rules[key];
            errors[key] = [];
            rules.find((rule: ValidatorRule) => {
                if (rule.pass(item)) return false;
                errors[key].push(rule.message);
                return rule.stopProcessing;
            });
            if (errors[key].length === 0) delete errors[key];
        });
        if (Object.keys(errors).length === 0) if (!relations) return true; else return this.validateRelations(item, relations, errors);
        this.errors = errors;
        return false;
    }

    private validateRelations(item, relations: Array<{ class, type, validator }>, errors): boolean {
        Object.keys(relations).forEach(relation => {
            let relationData = item[relation];
            if (!relationData) return;
            let modelExtend = relations[relation];
            let relationType = modelExtend.type;
            console.log(relations[relation], relationType, relationData);
            if (relationType === 'many') {
                errors[relation] = [];
                let errorsCount = 0;
                relationData.forEach(itemData => {
                    let validator = new modelExtend.validator();
                    let isValid = validator.pass(itemData, modelExtend.relations);
                    let error = isValid ? [] : validator.errors;
                    errorsCount += isValid ? 0 : 1;
                    errors[relation].push(error);
                });
                if (errorsCount === 0) delete errors[relation];
                console.log('errors', errorsCount, errors[relation]);
            }
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

    pass(item): boolean {
        return true;
    }
}

export class RequiredValidatorRule extends ValidatorRule {
    name = 'required';
    message: string;
    stopProcessing = true;

    constructor(field) {
        super();
        this.field = field;
        this.message = `Value is required!`;
    }

    pass(item) {
        let value = item[this.field];
        if (value === undefined) return false;
        if (typeof value === 'string' && value.length === 0) return false;
        return value !== null;
    }
}

export class IntegerTypeValidatorRule extends ValidatorRule {
    name = 'integer';
    message: string;
    stopProcessing = true;

    constructor(field) {
        super();
        this.field = field;
        this.message = `Value must be an integer!`;
    }

    pass(item) {
        let value = item[this.field];
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

    constructor(field) {
        super();
        this.field = field;
        this.message = `Value must be a date!`;
    }

    pass(item) {
        let value = item[this.field];
        console.log('date value', value);
        if (value === undefined) return false;
        if (value === null) return false;
        if (typeof value !== "string") return false;
        if (value.length !== 10) return false;
        let year = parseInt(value.substring(0, 4), 10);
        let month = parseInt(value.substring(5, 7), 10);
        let day = parseInt(value.substring(8, 10), 10);
        let validYear = year > 0;
        let validMonth = month > 0 && month < 12;
        let validDay = day > 0 && day < 31;
        return (!(!validYear || !validMonth || !validDay));
    }
}
