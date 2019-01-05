import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export class PageComponent {
    isHandset = false;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(protected breakpointObserver: BreakpointObserver) {
        this.isHandset$.subscribe(value => {
            this.isHandset = value;
        });
    }

}