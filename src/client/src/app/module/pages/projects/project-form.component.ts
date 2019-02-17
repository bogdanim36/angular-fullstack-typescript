import {Component} from '@angular/core';
import {GridOptions} from 'ag-grid-community';

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
	parentAutocompleteOptions: Project[];
	parentAutocompleteOptionsFiltered: Project[];

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(Project, entityService, sharedService);
	}

	componentLoaded() {
		super.componentLoaded();
		this.parentAutocompleteOptions = this.service.data.items;
		this.parentAutocompleteOptionsFiltered = this.parentAutocompleteFilter('');
	}

	parentAutocompleteDisplay() {
		return (id => {
			if (id) {
				let found = this.parentAutocompleteOptionsFiltered.find(item => item.id === id);
				return found ? found.name : '';
			} else return '';
		});
	}

	parentAutocompleteFilter(searchBy: any) {
		console.log('search', searchBy, this.item.parentId);
		if (searchBy === '' || searchBy === null || searchBy === undefined) return this.parentAutocompleteOptions;
		if (typeof searchBy === "number") return this.parentAutocompleteOptions.filter(item => item.id === searchBy);
		searchBy = searchBy.toLowerCase().trim();
		return this.parentAutocompleteOptions.filter(item => item.name.toLowerCase().includes(searchBy));
	}

	parentAutocompleteSearch(newValue) {
		if (newValue === '') newValue = null;
		this.parentAutocompleteOptionsFiltered = this.parentAutocompleteFilter(newValue);
		console.log('filtered options', this.parentAutocompleteOptionsFiltered);
	}

	gridSelectionChanged(grid: GridOptions) {
		super.gridSelectionChanged(grid);
		if (this.componentIsLoaded)
			setTimeout(() => this.parentAutocompleteSearch(''));
	}
}
