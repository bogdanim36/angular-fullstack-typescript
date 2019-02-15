import {EntityUiConfig} from '@app/core/entity-ui-config';
import {Translation} from "@app/core/translation";

export class <%= entities.pascalCase %>UiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.formPanelWidth = '<%= uiConfig.formPanelWidth %>';
<%= uiConfig.labels %>
<%= uiConfig.specifics %>
<%= uiConfig.columns %>
	}
}
