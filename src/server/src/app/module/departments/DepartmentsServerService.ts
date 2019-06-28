import {ServerService} from '@server/app/ServerService';
import {DepartmentsServerRepository} from './DepartmentsServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {Department} from '@shared/models/department';

export class DepartmentsServerService extends ServerService<Department, DepartmentsServerRepository> {
	public repository: DepartmentsServerRepository;

	constructor(protected store: ServerStore) {
		super(Department, store);
		this.repository = new DepartmentsServerRepository(store);
	}
}
