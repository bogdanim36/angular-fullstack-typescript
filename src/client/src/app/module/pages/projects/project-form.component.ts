import {Component} from '@angular/core';
import {GridOptions} from 'ag-grid-community';

import {EntityService} from "@app/components/entity-page/entity.service";
import {EntityFormComponentBaseClass} from "@app/components/entity-page/form/entity-form-component-base-class";
import {AppSharedService} from "@app/core/app-shared.service";

import {Project} from "@shared/models/project";
import {ProjectsUiConfig} from "@app/module/pages/projects/projects-ui-config";
import {ProjectsClientService} from "@app/module/pages/projects/projects-client.service";
import {AutocompleteConfig} from "@app/core/autocomplete-config";

@Component({
	selector: 'app-entity-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['../../../components/entity-page/form/entity-form.component.scss', './project-form.component.scss']
})
export class ProjectFormComponent extends EntityFormComponentBaseClass<Project, ProjectsUiConfig, ProjectsClientService> {
	parentAutocomplete:AutocompleteConfig<Project>;

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(Project, entityService, sharedService);
	}

	componentLoaded() {
		super.componentLoaded();
		this.parentAutocomplete = new AutocompleteConfig<Project>('id', 'name', this.service);
	}

	gridSelectionChanged(grid: GridOptions) {
		super.gridSelectionChanged(grid);
		if (this.componentIsLoaded)
			setTimeout(() => this.parentAutocomplete.search('', this.item.id));
	}
}
