import {Injectable} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from "@app/admin/auth.service";
import {LoginComponent} from "@app/admin/login/login.component";

@Injectable({
	providedIn: 'root',
})
export class AppSharedService {
	isHandset: boolean;
	hideAppFrame;
	observableIsHandset: Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService) {
		this.observableIsHandset = this.breakpointObserver
			.observe(['(max-width: 800px)'])
			.pipe(
				map((result: BreakpointState) => result.matches)
			);

		this.observableIsHandset.subscribe(value => {
			this.isHandset = value;
			if (this.isHandset) {
				// console.log('Viewport is  less than 500px !');
			} else {
				// console.log('Viewport is big enough !');
			}
		});

	}

	addToStorage(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	getStorage(key) {
		return JSON.parse(localStorage.getItem(key));
	}

	onRouteActivate(event) {
		if (event instanceof LoginComponent) {
			this.hideAppFrame = true;
		} else {
			this.hideAppFrame = false;
		}
		console.log("route activate", event, this.hideAppFrame);
	}
}
