import {ModelExtended} from "@shared/common/model-extended";
import {Project} from "@shared/models/project/project";
import {ProjectValidator} from "@shared/models/project/project-validator";

export class ProjectModelExtended extends ModelExtended<Project, ProjectValidator> {
    relations = {};

    constructor() {
        super();
    }

}
