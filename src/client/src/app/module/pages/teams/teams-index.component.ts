import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

import {AppSharedService} from "@app/core/app-shared.service";
import {EntityIndexComponentBaseClass} from "@app/components/entity-page/index/entity-index-component-base-class";
import {EntityService} from "@app/components/entity-page/entity.service";

import {Team} from "@shared/team";
import {TeamsUiConfig} from "@app/module/pages/teams/teams-ui-config";
import {TeamsClientService} from "@app/module/pages/teams/teams-client.service";
import {TeamFormComponent} from "@app/module/pages/teams/team-form.component";

@Component({
	selector: "app-teams-list",
	templateUrl: "../../../components/entity-page/index/entity-index.component.html",
	styleUrls: ["../../../components/entity-page/index/entity-index.component.scss", "./teams-index.component.scss"]
})
export class TeamsIndexComponent extends EntityIndexComponentBaseClass<Team, TeamsUiConfig, TeamsClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: TeamsClientService,
				public uiConfig: TeamsUiConfig,
				protected componentFactoryResolver: ComponentFactoryResolver,
				protected sanitizer: DomSanitizer,
				protected entityService: EntityService) {
		super(appShared, uiConfig, sanitizer, entityService);
	}
	ngOnInit() {
		super.ngOnInit();
	}

	// @ViewChild('gridToolbar', {read: ViewContainerRef}) set gridToolbarContent(content: ViewContainerRef) {
	// 	this.gridToolbar = content;
	// 	if (!content) return;
	// 	setTimeout(() => {
	// 		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UsersGridToolbarComponent);
	// 		this.gridToolbar.clear();
	// 		let componentRef = this.gridToolbar.createComponent(componentFactory);
	// 		componentRef.instance.uiConfig = this.uiConfig;
	// 		componentRef.instance.grid = this.grid;
	// 		this.componentIsLoaded('gridToolbar');
	// 	});
	// }

	@ViewChild('gridForm', {read: ViewContainerRef}) set gridFormContent(content: ViewContainerRef) {
		this.gridForm = content;
		if (!content) return;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TeamFormComponent);
			this.gridForm.clear();
			let gridForm = this.gridForm.createComponent(componentFactory).instance;
			gridForm.uiConfig = this.uiConfig;
			gridForm.grid = this.grid;
			gridForm.service = this.service;
			gridForm.toggleShowPanel = this.toggleShowPanel.bind(this);
			gridForm.editEvent.subscribe(this.handleEdit.bind(this));
			gridForm.deleteEvent.subscribe(this.handleDelete.bind(this));
			this.gridSelectionChanged = gridForm.gridSelectionChanged.bind(gridForm);
			gridForm.setCurrentItem(this.grid);
			gridForm.componentLoaded();
			this.componentIsLoaded('gridForm');
		});
	}

	@ViewChild('handsetForm', {read: ViewContainerRef}) set handsetFormContent(content: ViewContainerRef) {
		this.handsetForm = content;
		if (!content) return;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TeamFormComponent);
			this.handsetForm.clear();
			let handsetForm = this.handsetForm.createComponent(componentFactory).instance;
			handsetForm.uiConfig = this.uiConfig;
			handsetForm.service = this.service;
			handsetForm.setCurrentItem();
		});
	}
}
