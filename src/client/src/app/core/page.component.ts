import {AppSharedService} from '@app/core/app-shared.service';

export class PageComponent {
	// isHandset = false;

	constructor(protected appShared: AppSharedService) {
		// appShared.isHandset$.subscribe(value => {
		// 	this.isHandset = value;
		// });
	}

}
