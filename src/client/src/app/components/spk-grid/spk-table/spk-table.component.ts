import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SpkTableColumnTemplateDirective} from "@app/components/spk-grid/spk-grid-template/spk-table-template/spk-table-column-template.directive";

@Component({
	selector: 'app-spk-table',
	templateUrl: './spk-table.component.html',
	styleUrls: ['./spk-table.component.scss']
})
export class SpkTableComponent implements OnInit, OnChanges {
	@Input() def: {columns:SpkTableColumnTemplateDirective[], data:Array<any>};
	master: boolean;

	constructor() {
		this.master = true;
	}

	ngOnInit() {
		console.log('table def', this.def);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.def) {
		}
	}
}
