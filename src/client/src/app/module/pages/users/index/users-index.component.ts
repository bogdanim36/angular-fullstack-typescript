import {ChangeDetectorRef, Component, ComponentFactoryResolver, OnChanges, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {User} from '@shared/user';
import {UsersUiConfig} from '@app/module/pages/users/users-ui-config';
import {UsersClientService} from '@app/module/pages/users/users-client.service';
import {UsersGridToolbarComponent} from "@app/module/pages/users/users-grid-toolbar.component";

@Component({
	selector: 'app-users-list',
	templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class UsersIndexComponent extends EntityIndexComponent<User, UsersUiConfig, UsersClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: UsersClientService,
				public uiConfig: UsersUiConfig,
				protected componentFactoryResolver: ComponentFactoryResolver) {
		super(appShared, null, uiConfig);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	@ViewChild('gridToolbar', {read: ViewContainerRef}) set gridToolbarContent(content: ViewContainerRef) {
		this.gridToolbar = content;
		console.log(this.gridToolbar);
		setTimeout(()=>{
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UsersGridToolbarComponent);
		this.gridToolbar.clear();
		let componentRef = this.gridToolbar.createComponent(componentFactory);
		componentRef.instance.uiConfig = this.uiConfig;
		componentRef.instance.grid = this.grid;
		// (<DynamicContentDirective>componentRef.instance).data = adItem.data;
		});
	}

	ngAfterViewInit() {
		super.ngAfterViewInit();
	}
}
