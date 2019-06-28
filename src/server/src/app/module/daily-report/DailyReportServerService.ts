import {ServerService} from '@server/app/ServerService';
import {ServerStore} from '@server/app/ServerStore';
import {DailyReport} from "@shared/models/daily-report/daily-report";
import {DailyReportValidator} from "@shared/models/daily-report/daily-report.validator";
import {DailyReportModelExtended} from "@shared/models/daily-report/daily-report.model-extended";
import {DailyReportServerRepository} from "./DailyReportServerRepository";

export class DailyReportServerService extends ServerService<DailyReport, DailyReportModelExtended, DailyReportServerRepository> {
    public repository: DailyReportServerRepository;
    private validator: DailyReportValidator;

    constructor(protected store: ServerStore) {
        super(DailyReport, DailyReportModelExtended, DailyReportServerRepository, store);
    }

    itemValidation(item): { status: boolean; errors: any, message?:string } {
        this.validator = new DailyReportValidator(item);
        if (this.validator.pass()) return {status:true, errors:null};
        else return {status: false, errors: this.validator.errors, message: 'Item validation failed!'};
    }
}
