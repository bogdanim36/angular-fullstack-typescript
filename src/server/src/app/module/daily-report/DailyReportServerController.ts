import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {DepartmentsServerService} from '@module/departments/DepartmentsServerService';
import {DepartmentsServerRepository} from '@module/departments/DepartmentsServerRepository';
import {DailyReport} from "@shared/daily-report";

export class DailyReportServerController extends ServerServiceController<DailyReport, DepartmentsServerService, DepartmentsServerRepository> {
	service: DepartmentsServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "daily-report");
		this.service = new DepartmentsServerService(this.store);
		this.setDefaultRoutes();
	}
}

