import {UserValidator} from "@shared/models/user/user-validator";
import {User} from "@shared/models/user/user";

export class UserModelExtended  {
    modelClass = User;
    relations = {};
    validator = UserValidator;
}
