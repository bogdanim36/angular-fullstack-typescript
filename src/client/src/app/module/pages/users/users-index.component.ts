import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {User} from '@shared/user';
import {UsersUiConfig} from './users-ui-config';
import {UsersClientService} from './users-client.service';
import {UsersGridToolbarComponent} from "./users-grid-toolbar.component";
import {UserFormComponent} from "@app/module/pages/users/user-form.component";
import {EntityUiConfig} from "@app/core/entity-ui-config";

@Component({
	selector: 'app-users-list',
	templateUrl: '../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../components/entity-page/index/entity-index.component.scss']
})
export class UsersIndexComponent extends EntityIndexComponent<User, UsersUiConfig , UsersClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: UsersClientService,
				public uiConfig: UsersUiConfig,
				protected componentFactoryResolver: ComponentFactoryResolver) {
		super(appShared, uiConfig);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	@ViewChild('gridToolbar', {read: ViewContainerRef}) set gridToolbarContent(content: ViewContainerRef) {
		this.gridToolbar = content;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UsersGridToolbarComponent);
			this.gridToolbar.clear();
			let componentRef = this.gridToolbar.createComponent(componentFactory);
			componentRef.instance.uiConfig = this.uiConfig;
			componentRef.instance.grid = this.grid;
		});
	}

	@ViewChild('gridForm', {read: ViewContainerRef}) set gridFormContent(content: ViewContainerRef) {
		this.gridForm = content;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UserFormComponent);
			this.gridForm.clear();
			let componentRef = this.gridForm.createComponent(componentFactory);
			componentRef.instance.uiConfig = this.uiConfig;
			componentRef.instance.grid = this.grid;
			componentRef.instance.save = this.save.bind(componentRef.instance);
			componentRef.instance.delete = this.delete.bind(componentRef.instance);
			this.formTitle = componentRef.instance.formTitle.bind(componentRef.instance);
			this.gridSelectionChanged = componentRef.instance.gridSelectionChanged.bind(componentRef.instance);
		});
	}

	ngAfterViewInit() {
		super.ngAfterViewInit();
	}
}
