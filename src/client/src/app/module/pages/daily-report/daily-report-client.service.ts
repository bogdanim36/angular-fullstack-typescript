import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ClientServiceBaseClass} from '@app/core/client-service-base-class';
import {DailyReport} from '@shared/daily-report';

@Injectable({providedIn: 'root'})
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
