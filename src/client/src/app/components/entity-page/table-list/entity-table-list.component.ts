import {Component, ElementRef, Host, Input, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid-community';

@Component({
	selector: 'app-entity-table-list',
	templateUrl: './entity-table-list.component.html',
	styleUrls: ['./entity-table-list.component.scss']
})
export class EntityTableListComponent implements OnInit {
	@Input() parentRef: any;
	grid: GridOptions;

	constructor(private elementRef: ElementRef) {
		this.grid = <GridOptions>{};
		this.grid.rowHeight=30;
		this.grid.headerHeight=36;
	}

	ngAfterViewInit() {
		// this.table.el.nativeElement.querySelector('.ui-table').classList.add('box-shadow');
		this.parentRef.uiConfig.columns.push();
	}

	ngOnInit() {
	}

	sizeToFit() {
		this.grid.api.sizeColumnsToFit();
	}

	autoSizeAll() {
		let allColumnIds = [];
		this.grid.columnApi.getAllColumns().forEach(function (column) {
			allColumnIds.push(column.getColId());
		});
		this.grid.columnApi.autoSizeColumns(allColumnIds);
	}

	private querySelector(selector: string): HTMLElement {
		return this.elementRef.nativeElement.querySelector(selector);
	}
}
