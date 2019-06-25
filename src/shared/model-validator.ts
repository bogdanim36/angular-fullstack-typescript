export class ModelValidator<M> {

    existingRules= {
        required: RequiredValidatorRule,
        integer: IntegerValidatorRule
    };
    rules: any;
    errors: any;

    constructor(protected modelClass: M & Function) {
    }

    createInstance(source: Partial<M>, extra?: any): M {
        return new this.modelClass.prototype.constructor(source, extra);
    }

    pass():boolean {
        let stopProcessing=false;
        Object.keys(this.rules).forEach(key=>{
            let rules = this.rules[key];
            rules.forEach(rule:ValidatorRule=>{
                if (rule.pass())return true;
                if (rule.)
            })
        })
        return true;
    }

}

export class ValidatorRule {
    name: string;
    item: any;
    field: string;
    message: string;

    pass(): boolean {
        return true;
    }
}

export class RequiredValidatorRule extends ValidatorRule {
    name = 'required';
    message = `${this.field} is required!`;

    constructor(item, field) {
        super();
        this.item = item;
        this.field = field;
    }

    pass() {
        if (this.item[this.field] === undefined) return false;
        return this.item[this.field] !== null;
    }
}

export class IntegerValidatorRule extends ValidatorRule {
    name = 'integer';
    message = `${this.field} is integer!`;

    constructor(item, field) {
        super();
        this.item = item;
        this.field = field;
    }

    pass() {
        if (this.item[this.field] === undefined) return false;
        return this.item[this.field] !== null;
    }
}
