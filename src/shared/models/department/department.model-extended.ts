import {DepartmentValidator} from "@shared/models/department/department-validator";
import {Department} from "@shared/models/department/department";

export class DepartmentModelExtended {
    relations = {};

    createValidator(): DepartmentValidator {
        return new DepartmentValidator();
    }
}
