import {ModelExtended} from "@shared/common/model-extended";
import {UserValidator} from "@shared/models/user/user-validator";
import {User} from "@shared/models/user/user";

export class UserModelExtended extends ModelExtended<User, UserValidator> {
    relations = {};

    constructor() {
        super();
    }

}
