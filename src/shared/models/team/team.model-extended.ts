import {TeamValidator} from "./team-validator";
import {Team} from "./team";

export class TeamModelExtended {
    relations = {};

    createValidator(): TeamValidator {
        return new TeamValidator();
    }

}
