import {Model} from '../common/model';

export class Project extends Model {

	id?: number;
	name?: string;
	description?: string;
	closed?: boolean;
	parentId?: number;

	constructor(source: Partial<Project>, extra = {}) {
		super(source, extra);

		if (typeof source["closed"] === "number") this["closed"] = source["closed"] === 1;
		if (typeof source["closed"] === "undefined") this["closed"] = false;
	}
}

