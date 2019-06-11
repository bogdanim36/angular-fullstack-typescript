import {Model} from './model';

export class DailyReport extends Model {

    id?: number;
    date?: string;
    userId?: number;
    departmentId?: number;
    projectId?: number;

    constructor(source: Partial<DailyReport>, extra = {}) {
        super(source, extra);
    }
}

