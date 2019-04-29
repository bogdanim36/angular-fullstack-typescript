import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {SpkTableColumnDirective} from "@app/components/spk-grid/spk-table/spk-table-column.directive";

@Component({
	selector: 'spk-table-body-cell',
	templateUrl: './spk-table-body-cell.component.html',
	styleUrls: ['./spk-table-body-cell.component.scss']
})
export class SpkTableBodyCellComponent implements OnInit {
	@Input() templateRef: TemplateRef<any>;
	@Input() rowData:any;
	@Input() column:SpkTableColumnDirective;
	constructor() {
	}

	ngOnInit() {
	}

}
