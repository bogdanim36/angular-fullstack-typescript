import {DepartmentValidator} from "@shared/models/department/department-validator";
import {Department} from "@shared/models/department/department";

export class DepartmentModelExtended {
    relations = {};
    modelClass = Department;
    validator = DepartmentValidator;
}
