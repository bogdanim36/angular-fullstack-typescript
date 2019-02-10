import {EntityUiConfig} from '@app/core/entity-ui-config';

export class <%= entities.pascalCase %>UiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.formPanelWidth = '<%= uiConfig.formPanelWidth %>';
		this.labels.list = '<%= uiConfig.labels.list %>';
		this.labels.itemDetails = '<%= uiConfig.labels.itemDetails %>';
		this.labels.specific = <%= JSON.stringify( uiConfig.labels.specific) %>;
<%= uiConfig.columns %>
	}
}
