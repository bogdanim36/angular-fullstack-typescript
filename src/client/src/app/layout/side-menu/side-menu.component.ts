import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MenuService} from './menu.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter, withLatestFrom} from 'rxjs/operators';
import {MatSidenav} from '@angular/material';
import {MenuItem} from 'primeng/api';
import {AppSharedService} from '@app/core/app-shared.service';
import {Observable} from 'rxjs';


@Component({
	selector: 'app-side-menu',
	templateUrl: 'side-menu.component.html',
	styleUrls: ['side-menu.component.scss'],
})
export class SideMenuComponent implements OnDestroy, OnInit {
	items: MenuItem[];
	@ViewChild('drawer') drawer: MatSidenav;
	isHandset = false;
	isHandset$: Observable<boolean>;

	constructor(private appShared: AppSharedService,
				public menuSrv: MenuService,
				router: Router) {

		appShared.isHandset$.subscribe(value => this.isHandset = value);
		this.isHandset$ = appShared.isHandset$;
		//close menu when isHandset === true
		router.events.pipe(
			withLatestFrom(this.isHandset$),
			filter(([a, b]) => b && a instanceof NavigationEnd)
		).subscribe(() => this.drawer.close());

	}

	ngOnInit(): void {
		this.menuSrv.getItems().then(response => {
			this.items = response;
		});
	}

	ngOnDestroy(): void {
	}
}
