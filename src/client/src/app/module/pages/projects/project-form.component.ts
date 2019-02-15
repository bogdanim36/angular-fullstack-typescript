import {Component} from '@angular/core';

import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponent} from "@app/components/entity-page/form/entity-form.component";
import {AppSharedService} from "@app/core/app-shared.service";

import {Project} from "@shared/project";
import {ProjectsUiConfig} from "@app/module/pages/projects/projects-ui-config";
import {ProjectsClientService} from "@app/module/pages/projects/projects-client.service";

@Component({
	selector: 'app-entity-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['../../../components/entity-page/form/entity-form.component.scss', './project-form.component.scss']
})
export class ProjectFormComponent extends EntityFormComponent<Project, ProjectsUiConfig, ProjectsClientService> {

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(Project, entityService, sharedService);
	}
}
