import {ModelValidator} from "@shared/common/model-validator";
import {Team} from "@shared/models/team/team";

export class TeamValidator extends ModelValidator<Team> {

    constructor() {
        super();
        this.getRuleForField('name', 'required');
    }
}
