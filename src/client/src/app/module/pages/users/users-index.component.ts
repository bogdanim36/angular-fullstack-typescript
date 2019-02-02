import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {User} from '@shared/user';
import {UsersUiConfig} from './users-ui-config';
import {UsersClientService} from './users-client.service';
import {UsersGridToolbarComponent} from "./users-grid-toolbar.component";
import {UserFormComponent} from "@app/module/pages/users/user-form.component";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
	selector: 'app-users-list',
	templateUrl: '../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../components/entity-page/index/entity-index.component.scss']
})
export class UsersIndexComponent extends EntityIndexComponent<User, UsersUiConfig, UsersClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: UsersClientService,
				public uiConfig: UsersUiConfig,
				protected componentFactoryResolver: ComponentFactoryResolver, protected sanitizer: DomSanitizer) {
		super(appShared, uiConfig, sanitizer);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	@ViewChild('gridToolbar', {read: ViewContainerRef}) set gridToolbarContent(content: ViewContainerRef) {
		this.gridToolbar = content;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UsersGridToolbarComponent);
			let indexComponent = this;
			this.gridToolbar.clear();
			let componentRef = this.gridToolbar.createComponent(componentFactory);
			componentRef.instance.uiConfig = this.uiConfig;
			componentRef.instance.grid = this.grid;
			Object.defineProperty(componentRef.instance, "formPanelIsVisible", {
				get() {
					return indexComponent.showFormPanel;
				}
			});
			componentRef.instance.toggleShowPanel = this.toggleShowPanel.bind(this);
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
			gridForm.toggleShowPanel = this.toggleShowPanel.bind(this);
			gridForm.saveGeneric = this.save.bind(this);
			gridForm.deleteGeneric = this.delete.bind(this);
			this.formTitle = gridForm.formTitle.bind(gridForm);
			this.gridSelectionChanged = gridForm.gridSelectionChanged.bind(gridForm);
			gridForm.gridSelectionChanged(this.grid);
		});
	}

	ngAfterViewInit() {
		super.ngAfterViewInit();
	}
}
