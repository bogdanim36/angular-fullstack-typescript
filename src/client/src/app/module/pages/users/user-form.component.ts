import {Component} from '@angular/core';

import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponent} from "@app/components/entity-page/form/entity-form.component";
import {AppSharedService} from "@app/core/app-shared.service";

import {User} from "@shared/user";
import {UsersUiConfig} from "@app/module/pages/users/users-ui-config";
import {UsersClientService} from "@app/module/pages/users/users-client.service";

@Component({
	selector: 'app-entity-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['../../../components/entity-page/form/entity-form.component.scss', './user-form.component.scss']
})
export class UserFormComponent extends EntityFormComponent<User, UsersUiConfig, UsersClientService> {

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(User, entityService, sharedService);
	}
}
