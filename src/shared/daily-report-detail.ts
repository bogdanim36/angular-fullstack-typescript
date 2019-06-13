import {Model} from './model';

export class DailyReportDetail extends Model {

	id?: number;
	status?: string;
	percent?: string;
	taiga?: string;
	subsection?: string;

	constructor(source: Partial<DailyReportDetail>, extra = {}) {
		super(source, extra);
	}
}

