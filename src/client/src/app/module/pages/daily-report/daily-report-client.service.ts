import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {DailyReport} from '@shared/models/daily-report';
import {DailyReportPageModule} from "@app/module/pages/daily-report/daily-report-page.module";

@Injectable({providedIn: DailyReportPageModule})
export class DailyReportClientService extends ClientServiceBaseClass<DailyReport> {

	constructor(protected http: HttpClient) {
		super(http, DailyReport, 'api/daily-report');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}
}
