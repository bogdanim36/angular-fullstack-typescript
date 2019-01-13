import {ServerService} from '@server/app/ServerService';
import {<%=entities.pascalCase%>ServerRepository} from './<%=entities.pascalCase%>ServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {<%=entity.pascalCase%>} from '@shared/<%=entity.paramCase%>';

export class <%=entities.pascalCase%>ServerService extends ServerService<<%=entity.pascalCase%>, <%=entities.pascalCase%>ServerRepository> {
	public repository: <%=entities.pascalCase%>ServerRepository;

	constructor(protected store: ServerStore) {
		super(<%=entity.pascalCase%>, store);
		this.repository = new <%=entities.pascalCase%>ServerRepository(store);
	}
}