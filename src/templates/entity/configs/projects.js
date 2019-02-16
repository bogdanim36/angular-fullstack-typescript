let entity = require('../entity.base');
let base = entity.base;
module.exports = function () {
	let config = new base();
	config.entity = {name: "Project"};
	config.entities = {name: "Projects"};
	config.script.schema = "pm";
	config.script.primaryKey = 'id';
	config.script.build = function () {
		config.script.column('id', 'int(11)', false, null, true);
		config.script.column('name', 'varchar(100)', false, null, false);
		config.script.column('description', 'text', false, null, false);
		config.script.column('closed', 'tinyint', false, null, false);
		config.script.column('parentId', 'int(11)', true, null, false);
	};
	config.model.build = function () {
		config.model.regular("id", true, "number");
		config.model.regular("name", true, "string");
		config.model.regular("description", true, "string");
		config.model.regular("closed", true, "boolean");
		config.model.regular("parentId", true, "number");
	};
	config.uiConfig.build = function () {
		config.uiConfig.formPanelWidth = '600px';
		config.uiConfig.label("list", "List of Projects", "Lista de Proiecte");
		config.uiConfig.label("itemDetails", "Project Details", "Detalii Proiect");
		config.uiConfig.specific("name", "Name", "Denumire");
		config.uiConfig.specific("closed", "Closed", "Inchis");
		config.uiConfig.specific("description", "Description", "Descriere");

		config.uiConfig.column('name', 250, true);
		config.uiConfig.column('closed', 100, true, 'GridBooleanCellRenderComponent');
		config.uiConfig.column('description', 300, false);
	};
	config.form.build = function () {
		config.form.inputText('content', 'name');
		config.form.inputTextarea('content', 'description');
		// config.form.toggleButton('content', 'closed', 'Closed');
	};
	return config;
};
