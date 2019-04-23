import {AfterContentInit, Component, ComponentFactoryResolver, ContentChild, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SpkGridTemplateDirective} from "@app/components/spk-grid/spk-grid-template/spk-grid-template.directive";
import {SpkTableComponent} from "@app/components/spk-grid/spk-table/spk-table.component";

@Component({
	selector: 'spk-grid',
	templateUrl: './spk-grid.component.html',
	styleUrls: ['./spk-grid.component.scss']
})
export class SpkGridComponent implements OnInit, AfterContentInit {
	@ContentChild(SpkGridTemplateDirective) template: SpkGridTemplateDirective;
	@ViewChild('masterTable', {read: ViewContainerRef}) masterTable: ViewContainerRef;
	masterTableDef: any;
	content = null;
	tables: Array<any>;
	componentsToLoad: Array<string>;

	constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
		this.componentsToLoad = ['masterTable'];
	}

	ngAfterContentInit(): void {
		if (this.template) {
			console.log('final template', this.template);
			if (this.template.tables) {
				this.masterTableDef = this.template.tables.find(table => table.master);
				this.tables = this.template.tables.map((table) => {
					return table;
				});
				console.log('master', this.masterTable);
			}
		}
	}

	@ViewChild('masterTable', {read: ViewContainerRef}) set gridFormContent(content: ViewContainerRef) {
		this.masterTable = content;
		if (!content) return;
		setTimeout(() => {
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpkTableComponent);
			this.masterTable.clear();
			let masterTable = this.masterTable.createComponent(componentFactory).instance;
			masterTable.def = this.masterTableDef;
			this.componentIsLoaded('masterTable');
		});
	}

	componentIsLoaded(componentName) {
		if (this.componentsToLoad.length === 0) return true;
		let index = this.componentsToLoad.indexOf(componentName);
		if (index === -1) throw new Error(componentName + ' is not a valid componentName');
		this.componentsToLoad.splice(index, 1);
		console.log('component loaded:', componentName);
		return false;
	}

	ngOnInit() {
	}

}
