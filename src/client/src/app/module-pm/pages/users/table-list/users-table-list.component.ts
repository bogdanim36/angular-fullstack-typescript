import {Component, forwardRef, Inject, OnInit, ViewChild} from '@angular/core';
import {UsersIndexComponent} from '@app/module-pm/pages/users/index/users-index.component';
import {Table} from 'primeng/table';

@Component({
    selector: 'app-users-table-list',
    templateUrl: './users-table-list.component.html',
    styleUrls: ['./users-table-list.component.scss']
})
export class UsersTableListComponent implements OnInit {
    @ViewChild('entitiesTable') table: Table;

    constructor(@Inject(forwardRef(() => UsersIndexComponent)) public parent: UsersIndexComponent) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // console.log('uiConfig', this.uiConfig);
        // const uiConfig = this.uiConfig.el.nativeElement.querySelector('uiConfig');
        // uiConfig.setAttribute('id', 'tableUsersId');
        // console.log('uiConfig', uiConfig);
    }
}
