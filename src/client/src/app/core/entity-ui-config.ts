import {TableColumn} from '@app/core/table-column';
import {GridOptions} from 'ag-grid-community';
import {Translation} from "@app/core/translation";

export class EntityUiConfig {
	columns: TableColumn[] = [];
	components: any;
	gridRowActionsMenu: { title: string, actionName: String }[];
	gridRowHeight: number = 30;
	gridRowHeaderHeight: number = 36;
	private _formPanelWidth: string;
	labels: {
		save: Translation,
		list: Translation,
		addItem: Translation,
		delete: Translation,
		modify: Translation,
		cancel: Translation,
		itemDetails: Translation,
		actions: Translation,
		showFormPanel: Translation,
		closeFormPanel: Translation
		itemIsSaved: Translation,
		confirm: Translation,
		records:Translation,
		specific: any
	} = {
		save: new Translation('Save', "Salveaza"),
		confirm: new Translation('Confirm', "Confirm"),
		list: new Translation('List of items', 'Lista elemente'),
		cancel: new Translation('Cancel', "Renunta"),
		addItem: new Translation('Add new Item', "Adauga element nou"),
		delete:new Translation( 'Delete item!!!', 'Sterge element!!!'),
		modify: new Translation('Modify', 'Modifica'),
		itemDetails: new Translation( 'Item Details', "Informatii Element"),
		actions: new Translation( "Actions", "Actiuni"),
		showFormPanel: new Translation( "Show form panel", 'Afiseaza panoul  formular'),
		closeFormPanel: new Translation("Close form panel", "Inchide panoul formular"),
		itemIsSaved: new Translation("Item is saved!", "Elementul este salvat!"),
		records: new Translation("records", "inregistrari"),
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
