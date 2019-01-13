import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class <%=entities.pascalCase%>ServerRepository extends ServerRepository {
	tableName = '<%=entities.paramCase%>';
	schema = '<%=script.schema%>';
	primaryKey = '<%=script.primaryKey%>';

	constructor(protected store: ServerStore) {
		super(store);
	}
}

