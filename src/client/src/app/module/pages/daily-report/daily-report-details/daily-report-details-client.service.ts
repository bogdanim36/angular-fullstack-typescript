import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {DailyReportDetail} from '@shared/models/daily-report-detail';

@Injectable({providedIn: 'root'})
export class DailyReportDetailsClientService extends ClientServiceBaseClass<DailyReportDetail> {

	constructor(protected http: HttpClient) {
		super(http, DailyReportDetail, 'api/daily-report-details');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this.data.items = response;
			return response;
		});
	}
}
