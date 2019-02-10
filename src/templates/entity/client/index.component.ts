import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {EntityService} from "@app/components/entity-page/entity.service";

import {<%= entity.pascalCase %>} from '@shared/<%= entity.paramCase %>';
import {<%= entities.pascalCase %>UiConfig} from '@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-ui-config';
import {<%= entities.pascalCase %>ClientService} from '@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-client.service';
import {<%= entity.pascalCase %>FormComponent} from '@app/module/pages/<%= entities.paramCase %>/<%= entity.paramCase %>-form.component';

@Component({
	selector: 'app-<%= entities.paramCase %>-list',
	templateUrl: '../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../components/entity-page/index/entity-index.component.scss', './<%= entities.paramCase %>-index.component.scss']
})
export class <%= entities.pascalCase %>IndexComponent extends EntityIndexComponent<<%= entity.pascalCase %>, <%= entities.pascalCase %>UiConfig, <%= entities.pascalCase %>ClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: <%= entities.pascalCase %>ClientService,
				public uiConfig: <%= entities.pascalCase %>UiConfig,
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
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(<%= entity.pascalCase %>FormComponent);
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
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(<%= entity.pascalCase %>FormComponent);
			this.handsetForm.clear();
			let handsetForm = this.handsetForm.createComponent(componentFactory).instance;
			handsetForm.uiConfig = this.uiConfig;
			handsetForm.service = this.service;
			handsetForm.setCurrentItem();
		});
	}
}
