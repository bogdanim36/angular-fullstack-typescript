import {ModelValidator} from "@shared/common/model-validator";
import {Project} from "@shared/models/project/project";

export class ProjectValidator extends ModelValidator<Project> {

    constructor() {
        super();
        this.getRuleForField('name', 'required');
    }
}
