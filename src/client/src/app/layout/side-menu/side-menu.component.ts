import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MenuService} from './menu.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter, map, withLatestFrom} from 'rxjs/operators';
import {MatSidenav} from '@angular/material';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {MenuItem} from 'primeng/api';


@Component({
    selector: 'app-side-menu',
    templateUrl: 'side-menu.component.html',
    styleUrls: ['side-menu.component.scss'],
})
export class SideMenuComponent implements OnDestroy, OnInit {
    items: MenuItem[];
    @ViewChild('drawer') drawer: MatSidenav;
    isHandset = false;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver,
                public menuSrv: MenuService,
                router: Router) {
        router.events.pipe(
            withLatestFrom(this.isHandset$),
            filter(([a, b]) => b && a instanceof NavigationEnd)
        ).subscribe(_ => this.drawer.close());
        this.isHandset$.subscribe(value=>this.isHandset = value);
    }
    ngOnInit(): void {
        this.menuSrv.getItems().then(response=>{
            this.items = response;
        });
    }

    ngOnDestroy(): void {
    }
}
