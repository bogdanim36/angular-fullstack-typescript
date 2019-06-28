import {Project} from "@shared/models/project/project";
import {ProjectValidator} from "@shared/models/project/project-validator";

export class ProjectModelExtended {
    relations = {};

    createValidator(): ProjectValidator {
        return new ProjectValidator();
    }

}
