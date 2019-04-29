import {AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import {SpkTableColumnDirective} from "@app/components/spk-grid/spk-table/spk-table-column.directive";

@Component({
	selector: 'spk-table',
	templateUrl: './spk-table.component.html',
	styleUrls: ['./spk-table.component.scss']
})
export class SpkTableComponent implements OnInit, OnChanges, AfterContentInit {
	def: {
		columns?: SpkTableColumnDirective[],
	};
	@Input() data: Array<any>;
	@Input() master:boolean;
	@ContentChildren(SpkTableColumnDirective) columnsTemplates: QueryList<SpkTableColumnDirective>;
	componentsToLoad: Array<string>;

	constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
		this.master = true;
		this.componentsToLoad = ['topToolbar'];
		this.def = {};
		this.data=[];
	}

	ngOnInit() {
	}

	ngAfterContentInit(): void {
		if (this.columnsTemplates) {
			this.def.columns = this.columnsTemplates.map((column: SpkTableColumnDirective) => {
				return column;
			});
			console.log('this.def',this.def.columns);
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.def) {
			console.log('table def changed', changes.def);
		}
	}
	testClick(event){
		const test = this.master;
		console.log('test click', event);
	}
}
