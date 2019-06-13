let entity = require('../entity.base');
let base = entity.base;
module.exports = function () {
	let config = new base();
	config.entity = {name: "DailyReportDetail"};
	config.entities = {name: "DailyReportDetails"};
	config.script.schema = "pm";
	config.script.primaryKey = 'id';
	config.script.build = function () {
		config.script.column('id', 'int(11)', false, null, true);
		config.script.column('dailyReportId', 'int(11)', false, null, false);
		config.script.column('status', 'varchar(20)', false, null, false);
		config.script.column('percent', 'varchar(20)', false, null, false);
		config.script.column('taiga', 'varchar(15)', true, null, false);
		config.script.column('subsection', 'varchar(300)', true, null, false);
	};
	config.model.build = function () {
		config.model.regular("id", true, "number");
		config.model.regular("status", true, "string");
		config.model.regular("percent", true, "string");
		config.model.regular("taiga", true, "string");
		config.model.regular("subsection", true, "string");
	};
	config.uiConfig.build = function () {
		config.uiConfig.formPanelWidth = '400px';
		config.uiConfig.gridContext = {
		};
		config.uiConfig.label("list", "List of Tasks", "Lista de taskuri");
		config.uiConfig.label("itemDetails", "tasks", "Taskuri");
		config.uiConfig.specific("status", "Status", "Status");
		config.uiConfig.specific("percent", "Percent", "Procent");
		config.uiConfig.specific("taiga", "Taiga#", "Taiga#");
		config.uiConfig.specific("subsection", "Subsection", "Sectiune");

		config.uiConfig.column('status', 100, true);
		config.uiConfig.column('percent', 100, true);
		config.uiConfig.column('taiga', 100, true);
		config.uiConfig.column('subsection', 300, false);
	};
	config.form.build = function () {
		config.form.inputText('content', 'status');
		config.form.inputText('content', 'percent');
		config.form.inputText('content', 'taiga');
		config.form.inputTextarea('content', 'subsection', false, false, 4);
	};
	return config;
};
