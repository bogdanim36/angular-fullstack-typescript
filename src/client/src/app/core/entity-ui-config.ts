import {TableColumn} from '@app/core/table-column';

export class EntityUiConfig {
    columns: TableColumn[] = [];
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
}