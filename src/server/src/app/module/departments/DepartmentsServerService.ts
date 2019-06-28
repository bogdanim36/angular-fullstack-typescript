import {ServerService} from '@server/app/ServerService';
import {DepartmentsServerRepository} from './DepartmentsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {Department} from '@shared/models/department/department';
import {DepartmentModelExtended} from "@shared/models/department/department.model-extended";

export class DepartmentsServerService extends ServerService<Department, DepartmentModelExtended, DepartmentsServerRepository> {
	public repository: DepartmentsServerRepository;

	constructor(protected store: ServerStore) {
		super(Department, DepartmentModelExtended, DepartmentsServerRepository, store);
	}
}
