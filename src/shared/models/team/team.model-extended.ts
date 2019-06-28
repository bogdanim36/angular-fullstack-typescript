import {ModelExtended} from "@shared/common/model-extended";
import {TeamValidator} from "./team-validator";
import {Team} from "./team";

export class TeamModelExtended extends ModelExtended<Team, TeamValidator> {
    relations = {};

    constructor() {
        super();
    }

}
