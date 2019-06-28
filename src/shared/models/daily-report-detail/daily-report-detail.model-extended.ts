import {ModelExtended} from "../../common/model-extended";
import {DailyReportDetail} from "./daily-report-detail";
import {DailyReportDetailValidator} from "@shared/models/daily-report-detail/daily-report-detail.validator";

export class DailyReportDetailModelExtended extends ModelExtended<DailyReportDetail, DailyReportDetailValidator> {
    relations = {};

    constructor() {
        super();
    }

}
