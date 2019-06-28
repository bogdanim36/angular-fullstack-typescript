import {ModelValidator} from "@shared/common/model-validator";
import {Department} from "@shared/models/department/department";

export class DepartmentValidator extends ModelValidator<Department> {

    constructor() {
        super();
        this.getRuleForField('name', 'required');
    }
}
