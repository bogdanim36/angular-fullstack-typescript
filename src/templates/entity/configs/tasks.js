let base = require('../entity.base');
module.exports = function () {
	let config = new base();
	config.entity = {name: "Task"};
	config.entities = {name: "Tasks"};
	config.script.schema = "pm";
	config.script.primaryKey = 'id';
	config.script.build = function () {
		config.script.column('id', 'int(11)', false, null, true);
		config.script.column('name', 'varchar(100)', false, null, false);
		config.script.column('description', 'text', false, null, false);
		config.script.column('type', 'varchar(10)', false, null, false);
		config.script.column('closed', 'tinyint', false, null, false);
		config.script.column('projectId', 'int(11)', false, null, false);
		config.script.column('parentId', 'int(11)', true, null, false);
	};
	config.model.build = function () {
		config.model.regular("id", true, "number");
		config.model.regular("name", true, "string");
		config.model.regular("type", true, "string");
		config.model.regular("description", true, "string");
		config.model.regular("closed", true, "boolean");
		config.model.regular("projectId", true, "number");
		config.model.regular("parentId", true, "number");
		// this.expression("fullName", true, "string", "((this.firstName ? this.firstName.trim() : '') + (this.lastName ? ' ' + this.lastName.trim() : '')).trim();")
	};
	config.uiConfig.build = function () {
		config.uiConfig.column('name', 'Name', '250px', true, true);
		config.uiConfig.column('closed', 'Closed', '100px', true, true);
		config.uiConfig.column('type', 'Type', '90px', true, true);
		config.uiConfig.column('description', 'Description', '100%', true, true);
	};
	config.form.build = function () {
		config.form.inputText('content', 'name', 'Name');
		config.form.inputText('content', 'type', 'Type');
		config.form.inputTextarea('content', 'description', 'Description');
		config.form.toggleButton('content', 'closed', 'Closed');
		config.form.button('footer', {
			'[label]': 'config.data.uiConfig.labels.save',
			'icon': 'fa fa-check',
			'(click)': 'config.data.save(config.data.isNewItem, config.data.source, config.data.item)'
		})
		;
		config.form.button('footer', {
			'[label]': 'config.data.uiConfig.labels.delete',
			'icon': 'fa fa-close',
			'[disabled]': 'config.data.isNewItem',
			'(click)': 'config.data.delete(config.data.source)'
		});
	};
	return config;
};
