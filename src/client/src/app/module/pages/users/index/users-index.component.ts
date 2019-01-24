import {Component, OnInit} from '@angular/core';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {User} from '@shared/user';
import {UsersUiConfig} from '@app/module/pages/users/users-ui-config';
import {UsersClientService} from '@app/module/pages/users/users-client.service';

@Component({
	selector: 'app-users-list',
	templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class UsersIndexComponent extends EntityIndexComponent<User, UsersUiConfig, UsersClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: UsersClientService,
				public uiConfig: UsersUiConfig) {
		super(appShared, null, uiConfig);
	}
}
