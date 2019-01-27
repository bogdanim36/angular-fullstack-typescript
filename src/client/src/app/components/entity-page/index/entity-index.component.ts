import {PageComponent} from '@app/core/page.component';
import {OnInit} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {AppSharedService} from '@app/core/app-shared.service';
import {GridOptions} from 'ag-grid-community';

export class EntityIndexComponent<M, C, S> extends PageComponent implements OnInit {
	isNewItem = false;
	form: { item: M, errorMessages: Array<string> };
	editingItem: Partial<M>;
	protected service: ClientService<M>;
	protected uiConfig: C;
	grid: GridOptions;
	gridToolbar = `<div class="right-side">
						<button mat-flat-button color="primary" (click)="grid.api.sizeColumnsToFit()">
							<mat-icon>add</mat-icon>
							Size columns
						</button>
						<button mat-flat-button color="primary" (click)="grid.api.selectAll()">
							<mat-icon>add</mat-icon>
							{{uiConfig.labels.addItem}}</button>
					</div>
`;

	// protected dialogService: DialogService;
	ref: any;

	constructor(protected appShared: AppSharedService, protected formClass: any, uiConfig) {
		super(appShared);
		this.ref = this;
		this.grid = <GridOptions>{
			context: {
				componentParent: this
			},
			defaultColDef: {resizable: true}
		};
		uiConfig.setGridOptions(this.grid);
	}

	public gridActions(action, rowIndex, headerName) {
		let dataRow = this.grid.api.getDisplayedRowAtIndex(rowIndex);
		console.log("datarow", dataRow);
		alert(`"Parent Component Method from ${dataRow.data.email}! ${action}`);
	}

	ngOnInit() {
		this.service.getAll().then((data) => console.log('get data', data), console.error);
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

	saveCallback(response) {
		if (response.status) {
			this.editingItem = null;
			// this.dialogService.dialogComponentRef.instance.close();
		} else {
			if (response.message) this.form.errorMessages.push(response.message);
			console.error('save error', response);
		}
	}

	save(isNewItem, source, edited) {
		if (isNewItem)
			return this.service.create(edited).then((response) => this.saveCallback(response));
		else
			return this.service.update(source, edited).then((response) => this.saveCallback(response));
	}

	delete(item) {
		this.service.delete(item);
		this.editingItem = null;
		// this.dialogService.dialogComponentRef.instance.close();
	}
}
