import {Model} from './model';

export class Team extends Model {

	id?: number;
	name?: string;
	description?: string;

	constructor(source: Partial<Team>, extra = {}) {
		super(source, extra);

	}
}

