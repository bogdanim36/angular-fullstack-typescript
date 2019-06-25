import {ServerService} from '@server/app/ServerService';
import {ServerStore} from '@server/app/ServerStore';
import {DailyReport} from "@shared/daily-report";
import {DailyReportServerRepository} from "@module/daily-report/DailyReportServerRepository";
import {DailyReportValidator} from "@shared/dayl-report.validator";

export class DailyReportServerService extends ServerService<DailyReport, DailyReportServerRepository> {
    public repository: DailyReportServerRepository;
    private validator: DailyReportValidator;

    constructor(protected store: ServerStore) {
        super(DailyReport, store);
        this.repository = new DailyReportServerRepository(store);
    }

    itemValidation(item): { status: boolean; errors: any, message?:string } {
        this.validator = new DailyReportValidator(item);
        if (this.validator.pass()) return {status:true, errors:null};
        else return {status: false, errors: this.validator.errors, message: 'Item validation failed!'};
    }
}
