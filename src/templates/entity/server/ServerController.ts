import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {<%= entity.pascalCase %>} from '@shared/<%= entity.paramCase %>';
import {<%= entities.pascalCase %>ServerService} from '@module/<%= entities.paramCase %>/<%= entities.pascalCase %>ServerService';
import {<%= entities.pascalCase %>ServerRepository} from '@module/<%= entities.paramCase %>/<%= entities.pascalCase %>ServerRepository';

export class <%= entities.pascalCase%>ServerController extends ServerServiceController<<%= entity.pascalCase %>, <%= entities.pascalCase %>ServerService, <%= entities.pascalCase %>ServerRepository> {
	service: <%= entities.pascalCase %>ServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "<%= entities.paramCase %>");
		this.service = new <%= entities.pascalCase %>ServerService(this.store);
		this.setDefaultRoutes();
	}
}

