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
	parentAutocompleteOptions: Project[];
	parentAutocompleteOptionsFiltered: Project[];

	constructor(public entityService: EntityService, public sharedService: AppSharedService) {
		super(Project, entityService, sharedService);
		this.parentAutocompleteOptions = [];
		this.parentAutocompleteOptions.push(new Project({name: 'Project1', id: 1}));
		this.parentAutocompleteOptions.push(new Project({name: 'Project2', id: 2}));
		this.parentAutocompleteOptionsFiltered = this.parentAutocompleteFilter('');
	}

	parentAutocompleteDisplay(){
		return (id => id ? this.parentAutocompleteOptionsFiltered.find(item=>item.id === id).name : '');
	}
	parentAutocompleteFilter(searchBy:any){
		let searchStr = searchBy && typeof searchBy === 'object'? searchBy.name: searchBy;
		console.log('search', searchBy, searchStr);
		return this.parentAutocompleteOptions.filter(item=>item.name.toLowerCase().includes(searchStr))
	}
	parentAutocompleteSearch(newValue){
		this.parentAutocompleteOptionsFiltered = this.parentAutocompleteFilter(newValue);
	}
}
