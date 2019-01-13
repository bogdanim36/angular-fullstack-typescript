import {Model} from '@shared/model';

export class TableColumn extends Model {
	field: string;
	header: string;
	sortable?: string | boolean;
	width?: string | number;
	editable?:boolean;

	constructor(source: Partial<TableColumn>) {
		super(source);
		if (this.sortable === true) this.sortable = this.field;
		if (source['editable'] === undefined) this.editable = false;
	}
}