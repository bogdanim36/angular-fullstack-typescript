import {TeamValidator} from "./team-validator";
import {Team} from "./team";

export class TeamModelExtended {
    modelClass= Team;
    validator = TeamValidator;
    relations = {};
}
