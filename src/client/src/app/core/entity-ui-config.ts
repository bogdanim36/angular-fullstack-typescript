import {TableColumn} from '@app/core/table-column';
import {GridOptions} from 'ag-grid-community';

export class EntityUiConfig {
	columns: TableColumn[] = [];
	components: any;
	gridRowHeight: number = 30;
	gridRowHeaderHeight: number = 36;
	labels: {
		save: string,
		list: string,
		addItem: string,
		delete: string,
		modify: string,
		cancel: string,
		itemDetails: string,
		actions: string,
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
		specific: {}
	};

	addColumn(column: Partial<TableColumn>) {
		this.columns.push(new TableColumn(column));
	}

	setGridOptions(grid: GridOptions) {
		grid.rowHeight = this.gridRowHeight;
		grid.headerHeight = this.gridRowHeaderHeight;
		grid.columnDefs = this.columns;
		grid.components = this.components;
	}
}
