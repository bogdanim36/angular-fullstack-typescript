import {Component} from '@angular/core';

import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {AppSharedService} from "@app/core/app-shared.service";

import {Team} from "@shared/models/team/team";
import {TeamsUiConfig} from "@app/module/pages/teams/teams-ui-config";
import {TeamsClientService} from "@app/module/pages/teams/teams-client.service";
import {TeamModelExtended} from "@shared/models/team/team.model-extended";

@Component({
	selector: 'app-entity-form',
	templateUrl: './team-form.component.html',
	styleUrls: ['../../../components/entity-page/form/entity-form.component.scss', './team-form.component.scss']
})
export class TeamFormComponent extends EntityFormComponentBaseClass<Team, TeamModelExtended, TeamsUiConfig, TeamsClientService> {

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(TeamModelExtended, entityService, sharedService);
	}
}
