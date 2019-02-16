import {EntityUiConfig} from '@app/core/entity-ui-config';
import {Translation} from "@app/core/translation";
<%= uiConfig.imports %>
export class <%= entities.pascalCase %>UiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.formPanelWidth = '<%= uiConfig.formPanelWidth %>';
<%= uiConfig.gridContext? 'this.gridContext = '+ JSON.stringify(uiConfig.gridContext): '' %>

<%= uiConfig.labels %>
<%= uiConfig.specifics %>
<%= uiConfig.columns %>
	}
}
