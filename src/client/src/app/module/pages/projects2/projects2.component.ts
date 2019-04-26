import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {AppSharedService} from "@app/core/app-shared.service";
import {ProjectsClientService} from "@app/module/pages/projects/projects-client.service";
import {ProjectsUiConfig} from "@app/module/pages/projects/projects-ui-config";

@Component({
	selector: 'app-projects2',
	templateUrl: './projects2.component.html',
	styleUrls: ['./projects2.component.scss']
})
export class Projects2Component implements OnInit {
	constructor(appShared: AppSharedService,
				public service: ProjectsClientService,
				public uiConfig: ProjectsUiConfig,
				protected componentFactoryResolver: ComponentFactoryResolver,
	) {
		service.getAll();
	}

	ngOnInit() {
	}

}
