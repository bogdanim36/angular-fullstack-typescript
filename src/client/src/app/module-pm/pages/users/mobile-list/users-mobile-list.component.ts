import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {UsersIndexComponent} from '@app/module-pm/pages/users/index/users-index.component';

@Component({
  selector: 'app-users-mobile-list',
  templateUrl: './users-mobile-list.component.html',
  styleUrls: ['./users-mobile-list.component.scss']
})
export class UsersMobileListComponent implements OnInit {

  constructor(@Inject(forwardRef(() => UsersIndexComponent)) public parent: UsersIndexComponent) { }

  ngOnInit() {
  }

}
