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
        config.uiConfig.labels("list", 'List of Users', "Lsiat de Utilizatori");
        config.uiConfig.labels("itemDetails", 'User Details', 'Detalii Utilizator');

        config.uiConfig.labels.specific('email', "Email", 'Email');
        config.uiConfig.labels.specific('firstName', "First Name", "Nume complet");
        config.uiConfig.labels.specific('lastName', "Last Name", "Nume");
        config.uiConfig.labels.specific('fullName', "Full Name", "Prenume");

        config.uiConfig.column('email', 250, true);
        config.uiConfig.column('fullName', 300, true);
        config.uiConfig.column('firstName', 150, true);
        config.uiConfig.column('lastName', 150, true);
    };
    config.form.build = function () {
        config.form.inputText('content', 'firstName');
        config.form.inputText('content', 'lastName');
        config.form.inputText('content', 'email');
    };
    return config;
};
