import {PageComponent} from '@app/core/page.component';
import {OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {AppSharedService} from '@app/core/app-shared.service';
import {GridOptions} from 'ag-grid-community';
import {EntityUiConfig} from "@app/core/entity-ui-config";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {EntityService} from "@app/components/entity-page/shared/entity.service";
import {TableColumn} from "@app/core/table-column";

export class EntityIndexComponent<M, C extends EntityUiConfig, S> extends PageComponent implements OnInit {
	isNewItem = false;
	form: { item: M, errorMessages: Array<string> };
	protected service: ClientService<M>;
	protected uiConfig: C;
	grid: GridOptions;
	formPanelWidth: string;
	private gridWidth: SafeStyle;
	componentsToLoad: Array<string>;
	hasItem: boolean;
	globalSearch: string;
	globalSearchSelectedColumns: Array<string>;
	globalSearchColumns: Array<TableColumn>;
	@ViewChild('gridToolbar', {read: ViewContainerRef}) gridToolbar: ViewContainerRef;
	@ViewChild('gridForm', {read: ViewContainerRef}) gridForm: ViewContainerRef;
	@ViewChild('handsetForm', {read: ViewContainerRef}) handsetForm: ViewContainerRef;
	ref: any;


	constructor(protected appShared: AppSharedService, uiConfig, protected sanitizer: DomSanitizer, protected entityService: EntityService) {
		super(appShared);
		this.ref = this;
		this.entityService.formPanelIsVisible = true;
		this.componentsToLoad = ['gridToolbar', 'gridForm', 'data'];
		this.grid = <GridOptions>{
			context: {
				componentParent: this
			},
			defaultColDef: {resizable: true}
		};
		uiConfig.setGridOptions(this.grid);

		this.formPanelWidth = uiConfig.formPanelWidth;
		this.gridWidth = sanitizer.bypassSecurityTrustStyle("calc(100% - " + this.formPanelWidth + ")");
		this.globalSearch = "";
		this.globalSearchSelectedColumns = [];
		this.globalSearchColumns = [];
		uiConfig.columns.forEach(column => {
			if (column.field) {
				this.globalSearchColumns.push(column);
				this.globalSearchSelectedColumns.push(column.field);
			}
		});
	}

	componentIsLoaded(componentName) {
		if (this.componentsToLoad.length === 0) return true;
		let index = this.componentsToLoad.indexOf(componentName);
		if (index === -1) throw new Error(componentName + ' is not a valid componentName');
		this.componentsToLoad.splice(index, 1);
		console.log('component loaded', componentName);
		return false;
	}

	public gridActions(action, rowIndex, headerName) {
		let dataRow = this.grid.api.getDisplayedRowAtIndex(rowIndex);
		alert(`"Parent Component Method from ${dataRow.data.email}! ${action}`);
	}

	ngOnInit() {
		this.service.getAll().then((data) => {
			if (this.appShared.isHandset) {
				this.service.data.first();
			} else {
				setTimeout(() => {
					this.componentIsLoaded('data');
					let nodes = this.grid.api.getRenderedNodes();
					if (nodes.length) {
						nodes[0].setSelected(true);
						this.grid.api.setFocusedCell(0, '1');
					}
				});
			}
		}, console.error);

	}

	globalSearchValueChanged(newValue) {
		this.globalSearch = newValue;
		this.grid.api.setQuickFilter(newValue);
	}

	globalSearchColumnChanged() {
		// console.log(this.globalSearchSelectedColumns, arguments);
		this.uiConfig.columns.forEach(column=>{
			if (this.globalSearchSelectedColumns.indexOf(column.field)>-1) column.getQuickFilterText = (params)=> params.value.name;
			else column.getQuickFilterText = ()=> '';
		});
		this.grid.api.setColumnDefs(this.uiConfig.columns);
		this.grid.api.onFilterChanged();
		this.grid.api.resetQuickFilter();
		this.grid.api.setQuickFilter(this.globalSearch);
	}

	showDialogToAdd() {
		this.showDialog(true, {});
	}

	showDialogToEdit(event, item) {
		this.showDialog(false, item);
	}

	showDialog(isNewItem: boolean, source) {
		this.isNewItem = isNewItem;
		const editingItem = this.service.instanceCreate(source);
		// this.dialogService.open(this.formClass, {
		//     data: {
		//         uiConfig: this.uiConfig,
		//         item: editingItem as M,
		//         source: source,
		//         launcher: this,
		//         isNewItem: isNewItem,
		//         save: this.save.bind(this),
		//         delete: this.delete.bind(this)
		//     },
		//     height: this.isHandset ? '100%' : 'auto',
		//     width: this.isHandset ? '100%' : '300px'
		// });
	}

	gridSelectionChanged(event: any) {
		//this will be mapped to entity-form.gridSelectionChanged method
	}

	toggleShowPanel() {
		this.entityService.formPanelIsVisible = !this.entityService.formPanelIsVisible;
		this.formPanelWidth = this.entityService.formPanelIsVisible ? this.uiConfig.formPanelWidth : "0px";
		this.gridWidth = this.sanitizer.bypassSecurityTrustStyle("calc(100% - " + this.formPanelWidth + ")");
	}

}
