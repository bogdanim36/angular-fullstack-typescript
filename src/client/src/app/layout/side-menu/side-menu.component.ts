import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, withLatestFrom} from 'rxjs/operators';
import {MatSidenav} from '@angular/material';
import {AppSharedService} from '@app/core/app-shared.service';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-side-menu',
	templateUrl: 'side-menu.component.html',
	styleUrls: ['side-menu.component.scss'],
})
export class SideMenuComponent implements OnDestroy, OnInit {
	@ViewChild('drawer') drawer: MatSidenav;
	isHandset$: Observable<boolean>;

	constructor(public appSharedService: AppSharedService,
				router: Router, ) {
		this.isHandset$ = appSharedService.observableIsHandset;
		router.events.pipe(
			withLatestFrom(this.isHandset$),
			filter(([a, b]) => b && a instanceof NavigationEnd)
		).subscribe(() => this.drawer.close());
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
	}
}
