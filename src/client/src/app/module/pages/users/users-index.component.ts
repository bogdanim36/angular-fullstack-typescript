import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {User} from '@shared/user';
import {UsersUiConfig} from './users-ui-config';
import {UsersClientService} from './users-client.service';
import {UsersGridToolbarComponent} from "./users-grid-toolbar.component";
import {UserFormComponent} from "@app/module/pages/users/user-form.component";
import {DomSanitizer} from "@angular/platform-browser";
import {EntityService} from "@app/components/entity-page/shared/entity.service";

@Component({
	selector: 'app-users-list',
	templateUrl: '../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../components/entity-page/index/entity-index.component.scss', './users-index.component.scss']
})
export class UsersIndexComponent extends EntityIndexComponent<User, UsersUiConfig, UsersClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: UsersClientService,
				public uiConfig: UsersUiConfig,
				protected componentFactoryResolver: ComponentFactoryResolver,
				protected sanitizer: DomSanitizer,
				protected entityService: EntityService) {
		super(appShared, uiConfig, sanitizer, entityService);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	@ViewChild('gridToolbar', {read: ViewContainerRef}) set gridToolbarContent(content: ViewContainerRef) {
		this.gridToolbar = content;
		if (!content) return;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UsersGridToolbarComponent);
			this.gridToolbar.clear();
			let componentRef = this.gridToolbar.createComponent(componentFactory);
			componentRef.instance.uiConfig = this.uiConfig;
			componentRef.instance.grid = this.grid;
			this.componentIsLoaded('gridToolbar');
		});
	}

	@ViewChild('gridForm', {read: ViewContainerRef}) set gridFormContent(content: ViewContainerRef) {
		this.gridForm = content;
		if (!content) return;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UserFormComponent);
			this.gridForm.clear();
			let gridForm = this.gridForm.createComponent(componentFactory).instance;
			gridForm.uiConfig = this.uiConfig;
			gridForm.grid = this.grid;
			gridForm.service = this.service;
			gridForm.toggleShowPanel = this.toggleShowPanel.bind(this);
			this.gridSelectionChanged = gridForm.gridSelectionChanged.bind(gridForm);
			gridForm.setCurrentItem(this.grid);
			this.componentIsLoaded('gridForm');
		});
	}
	@ViewChild('handsetForm', {read: ViewContainerRef}) set handsetFormContent(content: ViewContainerRef) {
		this.handsetForm = content;
		if (!content) return;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UserFormComponent);
			this.handsetForm .clear();
			let handsetForm = this.handsetForm.createComponent(componentFactory).instance;
			handsetForm.uiConfig = this.uiConfig;
			handsetForm.service = this.service;
			handsetForm.setCurrentItem();
			// this.componentIsLoaded('handsetForm');
		});
	}

}
