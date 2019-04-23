import {Directive, Input, OnInit} from '@angular/core';
import {TableColumn} from "@app/core/table-column";

@Directive({
	selector: 'spk-table-column-template',
})

export class SpkTableColumnTemplateDirective implements OnInit{
	@Input() def: TableColumn;

	constructor() {
	}

	ngOnInit() {
	}

}
