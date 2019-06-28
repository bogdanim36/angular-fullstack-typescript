import {ModelValidator} from "@shared/common/model-validator";
import {Project} from "@shared/models/project/project";

export class ProjectValidator extends ModelValidator<Project> {

    constructor(item) {
        super(item);
        this.getRuleForField('name', 'required');
    }
}
