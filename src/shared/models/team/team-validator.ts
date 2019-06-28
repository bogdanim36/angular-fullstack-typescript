import {ModelValidator} from "@shared/common/model-validator";
import {Team} from "@shared/models/team/team";

export class TeamValidator extends ModelValidator<Team> {

    constructor(item) {
        super(item);
        this.getRuleForField('name', 'required');
    }
}
