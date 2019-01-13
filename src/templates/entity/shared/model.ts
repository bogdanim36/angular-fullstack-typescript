import {Model} from './model';

export class <%= entity.pascalCase%> extends Model {

<%=model.fields%>
	constructor(source: Partial<<%= entity.pascalCase%>>, extra = {}) {
		super(source, extra);
<%=model.constructor%>
	}
}

