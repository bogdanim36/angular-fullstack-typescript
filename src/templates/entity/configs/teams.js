let entity = require('../entity.base');
let base = entity.base;
module.exports = function () {
	let config = new base();
	config.entity = {name: "Team"};
	config.entities = {name: "Teams"};
	config.script.schema = "pm";
	config.script.primaryKey = 'id';
	config.script.build = function () {
		config.script.column('id', 'int(11)', false, null, true);
		config.script.column('name', 'varchar(100)', false, null, false);
		config.script.column('description', 'text', false, null, false);
	};
	config.model.build = function () {
		config.model.regular("id", true, "number");
		config.model.regular("name", true, "string");
		config.model.regular("description", true, "string");
	};
	config.uiConfig.build = function () {
		config.uiConfig.formPanelWidth = '400px';
		config.uiConfig.gridContext = {
		};
		config.uiConfig.label("list", "List of Teams", "Lista de Echipe");
		config.uiConfig.label("itemDetails", "Team Details", "Detalii Echipa");
		config.uiConfig.specific("name", "Name", "Denumire");
		config.uiConfig.specific("description", "Description", "Descriere");

		config.uiConfig.column('name', 250, true);
		config.uiConfig.column('description', 300, false);
	};
	config.form.build = function () {
		config.form.inputText('content', 'name');
		config.form.inputTextarea('content', 'description', false, false, 4);
	};
	return config;
};
