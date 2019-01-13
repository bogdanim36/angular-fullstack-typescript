import {EntityUiConfig} from '@app/core/entity-ui-config';

export class <%= entities.pascalCase %>UiConfig extends EntityUiConfig {

	constructor() {
		super();
<%= uiConfig.columns %>
		this.labels.list = 'List of <%= entities.name %>';
		this.labels.addItem = 'Add <%= entity.name %>';
		this.labels.save = 'Save';
		this.labels.delete = 'Delete';
		this.labels.itemDetails = '<%= entity.name %> Details';
	}
}