import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class UsersServerRepository extends ServerRepository {
    tableName = 'users';
    schema = 'pm';
    primaryKey = 'id';

    constructor(protected store: ServerStore) {
        super(store);
    }


}

