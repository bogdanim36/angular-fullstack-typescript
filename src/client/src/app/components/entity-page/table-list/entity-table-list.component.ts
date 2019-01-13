import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';

@Component({
	selector: 'app-entity-table-list',
	templateUrl: './entity-table-list.component.html',
	styleUrls: ['./entity-table-list.component.scss']
})
export class EntityTableListComponent implements OnInit {
	@Input() parentRef;
	@ViewChild('table') table: Table;

	constructor() {
	}

	ngAfterViewInit() {
		this.table.el.nativeElement.querySelector('.ui-table').classList.add('box-shadow');
	}

	ngOnInit() {
	}
}
