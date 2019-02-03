import {Injectable} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AppSharedService {
	isHandset: boolean;
	isHandset$: Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver) {
		this.isHandset$ = this.breakpointObserver
			.observe(['(max-width: 800px)'])
		.pipe(
			map((result:BreakpointState) => result.matches)
		);

		this.isHandset$.subscribe(value => {
			this.isHandset = value;
			if (this.isHandset ) {
				// console.log('Viewport is  less than 500px !');
			} else {
				// console.log('Viewport is big enough !');
			}
		});

	}
}
