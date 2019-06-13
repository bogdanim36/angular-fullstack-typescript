import {Model} from './model';

export class DailyReport extends Model {

    id?: number;
    date?: Date;
    userId?: number;
    departmentId?: number;
    projectId?: number;

    constructor(source: Partial<DailyReport>, extra = {}) {
        super(source, extra);
    }
}

