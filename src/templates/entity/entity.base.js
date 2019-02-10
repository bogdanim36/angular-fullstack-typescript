module.exports = function entityConfig() {
	let config = {
		build: function () {
			// this.model.build();
			// this.form.build();
			this.uiConfig.build();
			// this.script.build();
			let text = "To do next:";
			text += "\n Add option menu '" + this.entities.name + "' in shared/config-menu.ts";
			// console.log(text);
		},
		paths: {
			destRoot: "./src",
			files: {
				serverIndex: './src/server/src/index.ts',
				appRoutingModule: './src/client/src/app/app-routing.module.ts',
				appModule: './src/client/src/app/app.module.ts',
				configMenu: './src/shared/config-menu.ts'
			},
			modules: {
				client: {src: ["src/templates/entity/client/**", "!src/templates/entity/client/form.*.*"], dest: "/client/src/app/module/pages/", entitiesSubdir: true, filesNameCase: 'paramCase', filesName: "entities"},
				clientForm: {src: ["src/templates/entity/client/form.*.*" ], dest: "/client/src/app/module/pages/", entitiesSubdir: true, filesNameCase: 'paramCase', filesName: "entity"},
				// shared: {src: "src/templates/entity/shared/**", dest: "/shared/", identity: "\\shared", filesNameCase: 'paramCase', filesName: "entity", addBaseName: false},
				// server: {src: "src/templates/entity/server/**", dest: "/server/src/app/module/", entitiesSubdir: true, filesNameCase: 'pascalCase', filesName: "entities"},
				// scripts: {src: "src/templates/entity/scripts/**", dest: "/scripts/", filesNameCase: 'paramCase', filesName: "entities", addBaseName: false}
			}
		},
		entity: {name: "", paramCase: '', pascalCase: ''},
		entities: {name: "", paramCase: '', pascalCase: ''},
		script: {
			schema: "",
			primaryKey: "id",
			columns: [],
			column: function (name, type, nullable, defaultValue, autoIncrement) {
				let cr = this.columns.length ? "\n\t" : "";
				let column = cr + '`' + name + '` ' +
					type.toUpperCase() +
					(nullable ? '' : ' NOT NULL') +
					(defaultValue ? ' DEFAULT ' + defaultValue : '') +
					(autoIncrement ? ' AUTO_INCREMENT' : '');
				this.columns.push(column);
			},
			build: function () {
			}
		},
		model: {
			fields: '',
			constructor: '',
			build: function () {
			},
			regular: function (name, optional, type) {
				let field = name + (optional ? "?" : "") + ": " + type;
				config.model.fields += "\t" + field + ";\n";
				if (type === 'boolean') {
					let indent = '\n\t\t';
					this.constructor += this.constructor ? '\t\t' : indent;
					this.constructor += 'if (typeof source["' + name + '"] === "number") this["' + name + '"] = source["' + name + '"] === 1;';
					this.constructor += indent + 'if (typeof source["' + name + '"] === "undefined") this["' + name + '"] = false;';
				}
			},
			expression: function (name, optional, type, expression) {
				let indent = '\n\t\t';
				this.constructor += this.constructor ? '\t\t' : indent;
				this.constructor += "Object.defineProperty(this, '" + name + "', {";
				this.constructor += indent + "\tget() {";
				this.constructor += indent + "\t\treturn " + expression;
				this.constructor += indent + "\t}";
				this.constructor += indent + "});\n";
			}
		},
		uiConfig: {
			labels: {},
			columns: "",
			column: function (name, header, width, sortable) {
				this.columns += "\t\tthis.addColumn({field: '" + name + "', headerName: '" + header + "', sortable: " + sortable + ", width: " + width + "});\n";
			},
			addGridActionColumn(headerName, width, pinned) {
				this.columns += "\t\tthis.addColumn({field: '" + name + "', headerName: '" + header + "', sortable: " + sortable + ", width: " + width + (pinned ? ", pinned:'" + pinned + "'" : "") + ", cellRendererFramework: GridActionColumnComponent});\n";
			},
			build: function () {

			}
		},
		form: {
			html: {
				header: "",
				content: "",
				footer: ""
			},
			inputText: function (where, field, title, model) {
				this.html[where] += '\n\t<div class="ui-g-12">';
				this.html[where] += '\n\t\t<label for="' + field + '">' + title + '</label>;'
				this.html[where] += '\n\t\t<input pInputText id="' + field + '"  class="ui-inputtext" autocomplete="off" [(ngModel)]="config.data.item[\'' + field + '\']"/>';
				this.html[where] += '\n\t</div>';
			},
			toggleButton: function (where, field, title, model) {
				this.html[where] += '\n\t<div class="ui-g-12">';
				this.html[where] += '\n\t\t<label for="' + field + '">' + title + '</label>;'
				this.html[where] += '\n\t\t<p-toggleButton  id="' + field + '"  class="ui-togglebutton"  [(ngModel)]="config.data.item[\'' + field + '\']"></p-toggleButton>';
				this.html[where] += '\n\t</div>';
			},
			inputTextarea: function (where, field, title, model) {
				this.html[where] += '\n\t<div class="ui-g-12">';
				this.html[where] += '\n\t\t<label for="' + field + '">' + title + '</label>;';
				this.html[where] += '\n\t\t<textarea pInputTextarea id="' + field + '" class="ui-inputtextarea"  [(ngModel)]="config.data.item[\'' + field + '\']"></textarea>';
				this.html[where] += '\n\t</div>';
			},
			custom: function (where, html) {
				this.html[where] += html;
			},
			button: function (where, attrs, innerHTML) {
				let attrsList = ["type='button'", 'pButton'];
				Object.keys(attrs).forEach(attr => {
					attrsList.push(attr + (attrs[attr] !== undefined ? "='" + attrs[attr] + "'" : ''));
				})
				this.html[where] += '\n\t\t<button ' + attrsList.join(' ') + '>' + (innerHTML ? innerHTML : '') + '</button>';
			},
			build: function () {
			}
		}
	};
	return config;
}
;
