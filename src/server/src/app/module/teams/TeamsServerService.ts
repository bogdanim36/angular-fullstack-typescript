import {ServerService} from '@server/app/ServerService';
import {TeamsServerRepository} from './TeamsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {Team} from '@shared/models/team/team';
import {TeamModelExtended} from "@shared/models/team/team.model-extended";

export class TeamsServerService extends ServerService<Team, TeamModelExtended, TeamsServerRepository> {
    public repository: TeamsServerRepository;

    constructor(protected store: ServerStore) {
        super(Team, TeamModelExtended, TeamsServerRepository, store);
    }
}
