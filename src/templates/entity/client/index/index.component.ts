import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/api';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {<%= entity.pascalCase %>} from '@shared/<%= entity.paramCase %>';
import {<%= entities.pascalCase %>UiConfig} from '@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-ui-config';
import {<%= entity.pascalCase %>FormComponent} from '@app/module/pages/<%= entities.paramCase %>/form/<%= entity.paramCase %>-form.component';
import {<%= entities.pascalCase %>ClientService} from '@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-client.service';

@Component({
	selector: 'app-<%= entities.paramCase %>-list',
	templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class <%= entities.pascalCase %>IndexComponent extends EntityIndexComponent<<%= entity.pascalCase %>, <%= entities.pascalCase %>UiConfig, <%= entities.pascalCase %>ClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: <%= entities.pascalCase %>ClientService,
				public uiConfig: <%= entities.pascalCase %>UiConfig,
				public dialogService: DialogService) {
		super(appShared, <%= entity.pascalCase %>FormComponent);
	}
}
