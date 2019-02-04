import {PageComponent} from '@app/core/page.component';
import {OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {AppSharedService} from '@app/core/app-shared.service';
import {GridOptions} from 'ag-grid-community';
import {EntityUiConfig} from "@app/core/entity-ui-config";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {EntityService} from "@app/components/entity-page/shared/entity.service";

export class EntityIndexComponent<M, C extends EntityUiConfig, S> extends PageComponent implements OnInit {
	isNewItem = false;
	form: { item: M, errorMessages: Array<string> };
	protected service: ClientService<M>;
	protected uiConfig: C;
	grid: GridOptions;
	formPanelWidth: string;
	private gridWidth: SafeStyle;
	componentsToLoad: Array<string>;
	@ViewChild('gridToolbar', {read: ViewContainerRef}) gridToolbar: ViewContainerRef;
	@ViewChild('gridForm', {read: ViewContainerRef}) gridForm: ViewContainerRef;
	// protected dialogService: DialogService;
	ref: any;


	constructor(protected appShared: AppSharedService, uiConfig, protected sanitizer: DomSanitizer, protected entityService: EntityService) {
		super(appShared);
		this.ref = this;
		this.entityService.formPanelIsVisible = true;
		this.componentsToLoad = ['gridToolbar', 'gridForm'];
		this.grid = <GridOptions>{
			context: {
				componentParent: this
			},
			defaultColDef: {resizable: true}
		};
		uiConfig.setGridOptions(this.grid);
		this.formPanelWidth = uiConfig.formPanelWidth;
		this.gridWidth = sanitizer.bypassSecurityTrustStyle("calc(100% - " + this.formPanelWidth + ")");
	}

	componentLoaded(componentName) {
		if (this.componentsToLoad.length === 0) return;
		let index = this.componentsToLoad.indexOf(componentName);
		if (index === -1) throw new Error(componentName + ' is not a valid componentName');
		this.componentsToLoad.splice(index,1);
	}

	public gridActions(action, rowIndex, headerName) {
		let dataRow = this.grid.api.getDisplayedRowAtIndex(rowIndex);
		alert(`"Parent Component Method from ${dataRow.data.email}! ${action}`);
	}

	ngOnInit() {
		this.service.getAll().then((data) => {
		}, console.error);
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
