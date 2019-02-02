import {PageComponent} from '@app/core/page.component';
import {OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {AppSharedService} from '@app/core/app-shared.service';
import {GridOptions} from 'ag-grid-community';
import {EntityUiConfig} from "@app/core/entity-ui-config";

export class EntityIndexComponent<M, C extends EntityUiConfig, S> extends PageComponent implements OnInit {
	isNewItem = false;
	form: { item: M, errorMessages: Array<string> };
	protected service: ClientService<M>;
	protected uiConfig: C;
	grid: GridOptions;
	showFormPanel:boolean;
	@ViewChild('gridToolbar', {read: ViewContainerRef}) gridToolbar: ViewContainerRef;
	@ViewChild('gridForm', {read: ViewContainerRef}) gridForm: ViewContainerRef;
	// protected dialogService: DialogService;
	ref: any;


	constructor(protected appShared: AppSharedService, uiConfig) {
		super(appShared);
		this.ref = this;
		this.grid = <GridOptions>{
			context: {
				componentParent: this
			},
			defaultColDef: {resizable: true}
		};
		uiConfig.setGridOptions(this.grid);
		this.showFormPanel=true;
	}

	formTitle():string {
		return this.uiConfig.labels.itemDetails;
	}

	public gridActions(action, rowIndex, headerName) {
		let dataRow = this.grid.api.getDisplayedRowAtIndex(rowIndex);
		alert(`"Parent Component Method from ${dataRow.data.email}! ${action}`);
	}

	ngOnInit() {
		this.service.getAll().then((data) => console.log('get data', data), console.error);
	}

	gridSelectionChanged(event: any) {
		//this will be mapped to entity-form.gridSelectionChanged method
	}

	ngAfterViewInit() {
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


	save(isNewItem, source, edited) {
		if (isNewItem)
			return this.service.create(edited);
		else
			return this.service.update(source, edited);
	}

	delete(item) {
		return this.service.delete(item);
		// this.dialogService.dialogComponentRef.instance.close();
	}
	toggleShowPanel(){
		this.showFormPanel = !this.showFormPanel;
	}
}
