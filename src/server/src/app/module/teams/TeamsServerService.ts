import {ServerService} from '@server/app/common/ServerService';
import {TeamsServerRepository} from './TeamsServerRepository';
import {ServerStore} from '@server/app/common/ServerStore';
import {Team} from '@shared/models/team/team';
import {TeamModelExtended} from "@shared/models/team/team.model-extended";

export class TeamsServerService extends ServerService<Team, TeamModelExtended, TeamsServerRepository> {

    constructor(protected store: ServerStore) {
        super(Team, TeamModelExtended, TeamsServerRepository, store);
    }
}
