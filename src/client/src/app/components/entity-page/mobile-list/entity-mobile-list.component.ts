import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entity-mobile-list',
  templateUrl: './entity-mobile-list.component.html',
  styleUrls: ['./entity-mobile-list.component.scss']
})
export class EntityMobileListComponent implements OnInit {
    @Input() parentRef;

  constructor() { }

  ngOnInit() {
  }

}
