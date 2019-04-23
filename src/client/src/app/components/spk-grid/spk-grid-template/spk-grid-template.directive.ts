import {AfterContentInit, ContentChildren, Directive, OnInit, QueryList} from '@angular/core';
import {SpkTableTemplateDirective} from "@app/components/spk-grid/spk-grid-template/spk-table-template/spk-table-template.directive";

@Directive({
	selector: 'spk-grid-template'
})
export class SpkGridTemplateDirective implements OnInit, AfterContentInit {
	@ContentChildren(SpkTableTemplateDirective) tablesTemplates: QueryList<SpkTableTemplateDirective>;
	tables:Array<any>;

	constructor() {
	}

	ngOnInit() {
	}

	ngAfterContentInit(): void {
		if (this.tablesTemplates) {
			this.tables = this.tablesTemplates.map(table => {
				return table;
			});
			console.log('grid tables', this.tables);
		}
	}

}
