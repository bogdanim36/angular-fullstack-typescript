import {AfterContentInit, ContentChildren, Directive, Input, OnChanges, OnInit, QueryList, SimpleChanges} from '@angular/core';
import {SpkTableColumnTemplateDirective} from "@app/components/spk-grid/spk-grid-template/spk-table-template/spk-table-column-template.directive";
import {TableColumn} from "@app/core/table-column";

@Directive({
	selector: 'spk-table-template'
})
export class SpkTableTemplateDirective implements OnInit, AfterContentInit, OnChanges {
	@ContentChildren(SpkTableColumnTemplateDirective) columnsTemplates: QueryList<SpkTableColumnTemplateDirective>;
	columns: Array<SpkTableColumnTemplateDirective>;
	@Input() master: boolean;
	@Input() data: Array<any>;

	constructor() {
	}

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.data){
			console.log('data', changes.data.currentValue);
		}
	}

	ngAfterContentInit(): void {
		if (this.columnsTemplates) {
			this.columns = this.columnsTemplates.map(column => {
				return column ;
			});
			console.log('table columns defs', this.columns);
		}

	}
}
