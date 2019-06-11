import {Model} from './model';

export class Department extends Model {

	id?: number;
	name?: string;
	description?: string;

	constructor(source: Partial<Department>, extra = {}) {
		super(source, extra);

	}
}

