import {Directive, Input, OnInit} from '@angular/core';
import {TableColumn} from "@app/core/table-column";

@Directive({
	selector: 'spk-table-column',
})

export class SpkTableColumnDirective implements OnInit{
	@Input() def: TableColumn;

	constructor() {
	}

	ngOnInit() {
	}

}
