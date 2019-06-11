import {Component} from '@angular/core';

import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {AppSharedService} from "@app/core/app-shared.service";

import {Department} from "@shared/department";
import {DepartmentsUiConfig} from "@app/module/pages/departments/departments-ui-config";
import {DepartmentsClientService} from "@app/module/pages/departments/departments-client.service";

@Component({
	selector: 'app-entity-form',
	templateUrl: './department-form.component.html',
	styleUrls: ['../../../components/entity-page/form/entity-form.component.scss', './department-form.component.scss']
})
export class DepartmentFormComponent extends EntityFormComponentBaseClass<Department, DepartmentsUiConfig, DepartmentsClientService> {

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(Department, entityService, sharedService);
	}
}