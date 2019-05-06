let entity = require('../entity.base');
let base = entity.base;
module.exports = function () {
	let config = new base();
	config.entity = {name: "Daily Report"};
	config.entities = {name: "Daily Reports"};
	config.script.schema = "pm";
	config.script.primaryKey = 'id';
	config.script.build = function () {
		config.script.column('id', 'int(11)', false, null, true);
		config.script.column('userId', 'int(11)', false, null, false);
		config.script.column('date', 'date', false, null, false);
		config.script.column('description', 'text', false, null, false);
		config.script.column('department', 'varchar(30)', false, null, false);
		config.script.column('project', 'varchar(100)', true, null, false);
		config.script.column('status', 'varchar(15)', true, null, false);
		config.script.column('progress', 'varchar(10)', true, null, false);
		config.script.column('task', 'varchar(10)', true, null, false);
		config.script.column('subsection', 'varchar(100)', true, null, false);
	};
	config.model.build = function () {
		config.model.regular("id", true, "number");
		config.model.regular("userId", true, "number");
		config.model.regular("date", true, "Date");
		config.model.regular("description", true, "string");
		config.model.regular("department", true, "string");
		config.model.regular("project", true, "string");
		config.model.regular("status", true, "string");
		config.model.regular("progress", true, "string");
		config.model.regular("task", true, "string");
		config.model.regular("subsection", true, "string");
	};
	config.uiConfig.build = function () {
		config.uiConfig.formPanelWidth = '400px';
		config.uiConfig.label("list", "Tasks", "task-uri realizate");
		config.uiConfig.label("itemDetails", "Task Details", "Detalii task");
		config.uiConfig.specific("userId", "User", "Utilizator");
		config.uiConfig.specific("date", "Date", "Data");
		config.uiConfig.specific("description", "Description", "Descriere");
		config.uiConfig.specific("department", "Department", "Departament");
		config.uiConfig.specific("project", "Project", "Proiect");
		config.uiConfig.specific("status", "Status", "Stare");
		config.uiConfig.specific("progress", "Progress", "Progres");
		config.uiConfig.specific("task", "Task", "Task");

		config.uiConfig.column('userId', 150, true);
		config.uiConfig.column('date', 150, true);
		config.uiConfig.column('department', 200, true);
		config.uiConfig.column('project', 200, true);
		config.uiConfig.column('status', 150, true);
		config.uiConfig.column('progress', 100, true);
		config.uiConfig.column('task', 100, true);
		config.uiConfig.column('description', 300, false);
	};
	config.form.build = function () {
		config.form.inputText('content', 'date');
		config.form.inputText('content', 'date');
		config.form.inputText('content', 'date');
		config.form.inputText('content', 'date');
		config.form.inputTextarea('content', 'description', false, false, 4);
	};
	return config;
};
