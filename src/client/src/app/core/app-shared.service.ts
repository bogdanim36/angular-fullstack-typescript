import {Injectable} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from "@app/admin/auth.service";
import {LoginComponent} from "@app/admin/login/login.component";
import {UsersClientService} from "@app/module/pages/users/users-client.service";
import {User} from "@shared/user";
import {AppSharedModule} from "@app/core/app-shared.module";

@Injectable({providedIn: AppSharedModule})
export class AppSharedService {
	static instance?: AppSharedService;
	isHandset: boolean;
	hideAppFrame;
	isHandset$: Observable<boolean>;
	currentUser: User;

	constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService, public userService: UsersClientService) {
		console.log('new instance !!!!!!');
		if (AppSharedService.instance !== undefined) {
			throw new Error('Import SharedModule only once.');
		}

		AppSharedService.instance = this;
		this.isHandset$ = this.breakpointObserver
			.observe(['(max-width: 800px)'])
			.pipe(
				map((result: BreakpointState) => result.matches)
			);

		this.isHandset$.subscribe(value => {
			this.isHandset = value;
			if (this.isHandset) {
				console.log('Viewport is  less than 500px !');
			} else {
				console.log('Viewport is big enough !');
			}
		});
		let userSubscription = this.authService.afAuth.authState.subscribe(authUser => {
			userService.checkUserExistence(authUser).then(response => {
				if (response.status) {
					this.currentUser = response.data;
					console.log('check user exists', authUser, response);
					userSubscription.unsubscribe();
				}
			});
		});

	}

	addToStorage(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	getStorage(key) {
		return JSON.parse(localStorage.getItem(key));
	}

	onRouteActivate(event) {
		this.hideAppFrame = event instanceof LoginComponent;
		// console.log("route activate", event, this.hideAppFrame);
	}
}
