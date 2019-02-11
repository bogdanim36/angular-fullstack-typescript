let base = require('../entity.base');
module.exports = function () {
	let config = new base();
	config.entity = {name: "User"};
	config.entities = {name: "Users"};
	config.script.schema = "pm";
	config.script.primaryKey = 'id';
	config.script.build = function () {
		config.script.column('id', 'int(11)', false, null, true);
		config.script.column('email', 'varchar(250)', false, null, false);
		config.script.column('firstName', 'varchar(50)', false, null, false);
		config.script.column('lastName', 'varchar(50)', false, null, false);
	};
	config.model.build = function () {
		config.model.regular("id", true, "number");
		config.model.regular("email", true, "string");
		config.model.regular("firstName", true, "string");
		config.model.regular("lastName", true, "string");
		config.model.expression("fullName", true, "string", "((this.firstName ? this.firstName.trim() : '') + (this.lastName ? ' ' + this.lastName.trim() : '')).trim();")
	};
	config.uiConfig.build = function () {
		config.uiConfig.formPanelWidth = '400px';
		config.uiConfig.labels.list = 'List of Users';
		config.uiConfig.labels.itemDetails = 'User Details';
		config.uiConfig.labels.specific = {
			email: "Email",
			firstName: "First Name",
			lastName: "Last Name",
			fullName: "Full Name"
		};
		config.uiConfig.column('email', 'Email', 250, true);
		config.uiConfig.column('fullName', 'Full Name', 300, true);
		config.uiConfig.column('firstName', 'First Name', 150, true);
		config.uiConfig.column('lastName', 'Last Name', 150, true);
	};
	config.form.build = function () {
		config.form.inputText('content', 'firstName', 'First Name');
		config.form.inputText('content', 'lastName', 'Last Name');
		config.form.inputText('content', 'email', 'Email');
	};
	return config;
};
