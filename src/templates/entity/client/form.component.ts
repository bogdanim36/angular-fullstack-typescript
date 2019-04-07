import {Component} from '@angular/core';

import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {AppSharedService} from "@app/core/app-shared.service";

import {<%= entity.pascalCase %>} from "@shared/<%= entity.paramCase %>";
import {<%= entities.pascalCase %>UiConfig} from "@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-ui-config";
import {<%= entities.pascalCase %>ClientService} from "@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-client.service";

@Component({
	selector: 'app-entity-form',
	templateUrl: './<%= entity.paramCase %>-form.component.html',
	styleUrls: ['../../../components/entity-page/form/entity-form.component.scss', './<%= entity.paramCase %>-form.component.scss']
})
export class <%= entity.pascalCase %>FormComponent extends EntityFormComponentBaseClass<<%= entity.pascalCase %>, <%= entities.pascalCase %>UiConfig, <%= entities.pascalCase %>ClientService> {

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(<%= entity.pascalCase %>, entityService, sharedService);
	}
}
