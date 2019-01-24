import {TableColumn} from '@app/core/table-column';
import {GridOptions} from 'ag-grid-community';

export class EntityUiConfig {
	columns: TableColumn[] = [];
	components:any;
	gridRowHeight:number;
	gridRowHeaderHeight:number;
	labels: {
		save: string,
		list: string,
		addItem: string,
		delete: string,
		itemDetails: string,
		actions:string
	} = {
		save: 'Save',
		list: 'List of items',
		addItem: 'Add Item',
		delete: 'Delete',
		itemDetails: 'Item Details',
		actions:"Actions"
	};

	addColumn(column: Partial<TableColumn>) {
		this.columns.push(new TableColumn(column));
	}
	setGridOptions(grid:GridOptions){
		grid.rowHeight = this.gridRowHeight;
		grid.headerHeight = this.gridRowHeaderHeight;
		grid.columnDefs = this.columns;
		grid.components = this.components;
	}
}
