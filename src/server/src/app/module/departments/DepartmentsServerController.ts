import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {Department} from '@shared/models/department';
import {DepartmentsServerService} from '@module/departments/DepartmentsServerService';
import {DepartmentsServerRepository} from '@module/departments/DepartmentsServerRepository';

export class DepartmentsServerController extends ServerServiceController<Department, DepartmentsServerService, DepartmentsServerRepository> {
	service: DepartmentsServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "departments");
		this.service = new DepartmentsServerService(this.store);
		this.setDefaultRoutes();
	}
}

