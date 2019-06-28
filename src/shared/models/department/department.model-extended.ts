import {ModelExtended} from "@shared/common/model-extended";
import {DepartmentValidator} from "@shared/models/department/department-validator";
import {Department} from "@shared/models/department/department";

export class DepartmentModelExtended extends ModelExtended<Department, DepartmentValidator> {
    relations = {};

    constructor() {
        super();
    }

}
