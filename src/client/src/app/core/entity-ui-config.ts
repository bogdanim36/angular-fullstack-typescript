import {TableColumn} from '@app/core/table-column';
import {GridOptions} from 'ag-grid-community';

export class EntityUiConfig {
	columns: TableColumn[] = [];
	components: any;
	gridRowHeight: number = 30;
	gridRowHeaderHeight: number = 36;
	private _formPanelWidth: string;
	labels: {
		save: string,
		list: string,
		addItem: string,
		delete: string,
		modify: string,
		cancel: string,
		itemDetails: string,
		actions: string,
		showFormPanel: string,
		closeFormPanel: string
		specific: any
	} = {
		save: 'Save',
		cancel: 'Cancel',
		list: 'List of items',
		addItem: 'New',
		delete: 'Delete',
		modify: 'Modify',
		itemDetails: 'Item Details',
		actions: "Actions",
		showFormPanel: "Show form panel",
		closeFormPanel: "Close form panel",
		specific: {}
	};

	addColumn(column: Partial<TableColumn>) {
		this.columns.push(new TableColumn(column));
	}

	set formPanelWidth(value) {
		if (value === "auto") throw  new Error("auto is not a valid value for formPanelWidth.Use 100%, or 400px format");
		this._formPanelWidth = value;
	}

	get formPanelWidth() {
		return this._formPanelWidth;
	}

	setGridOptions(grid: GridOptions) {
		grid.rowHeight = this.gridRowHeight;
		grid.headerHeight = this.gridRowHeaderHeight;
		grid.columnDefs = this.columns;
		grid.components = this.components;
	}
}
