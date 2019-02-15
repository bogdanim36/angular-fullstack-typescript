module.exports.base = function entityConfig() {
	let config = {
		build: function () {
			this.model.build();
			this.form.build();
			this.uiConfig.build();
			this.script.build();
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
				clientForm: {src: ["src/templates/entity/client/form.*.*"], dest: "/client/src/app/module/pages/", entitiesSubdir: true, filesNameCase: 'paramCase', filesName: "entity"},
				shared: {src: "src/templates/entity/shared/**", dest: "/shared/", identity: "\\shared", filesNameCase: 'paramCase', filesName: "entity", addBaseName: false},
				server: {src: "src/templates/entity/server/**", dest: "/server/src/app/module/", entitiesSubdir: true, filesNameCase: 'pascalCase', filesName: "entities"},
				scripts: {src: "src/templates/entity/scripts/**", dest: "/scripts/", filesNameCase: 'paramCase', filesName: "entities", addBaseName: false}
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
			labels: "",
			specifics: "",
			columns: "",
			label: function(name, en,ro){
				this.labels += "\t\tthis.labels."+ name + " = new Translation('"+en+"','"+ro+"');\n";
			},
			specific: function(name, en,ro){
				this.specifics += "\t\tthis.labels.specific."+ name + " = new Translation('"+en+"','"+ro+"');\n";
			},
			column: function (name, width, sortable) {
				this.columns += "\t\tthis.addColumn({field: '" + name + "', headerName: this.labels.specific." + name + ", sortable: " + sortable + ", width: " + width + "});\n";
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
				this.html[where] += '\n\t<mat-form-field >';
				this.html[where] += '\n\t\t<mat-label >{{' + (title ? title : "uiConfig.labels.specific['" + field + "']") + '}}</mat-label>'
				this.html[where] += '\n\t\t<input matInput autocomplete="off" [disabled]="!entityService.isEditing" [(ngModel)]="item[\'' + field + '\']"/>';
				this.html[where] += '\n\t\t<mat-error *ngIf="errors[\'' + field + '\']">';
				this.html[where] += '\n\t\t\t<p *ngFor="let msg of errors[\'' + field + '\']">{{msg}}</p>';
				this.html[where] += '\n\t\t</mat-error>';
				this.html[where] += '\n\t</mat-form-field>';
			},
			inputTextarea: function (where, field, title, model) {
				this.html[where] += '\n\t<mat-form-field >';
				this.html[where] += '\n\t\t<mat-label >{{' + (title ? title : "uiConfig.labels.specific['" + field + "']") + '}}</mat-label>'
				this.html[where] += '\n\t\t<textarea matInput cdkTextareaAutosize autocomplete="off" [disabled]="!entityService.isEditing" [(ngModel)]="item[\'' + field + '\']"></textarea>';
				this.html[where] += '\n\t\t<mat-error *ngIf="errors[\'' + field + '\']">';
				this.html[where] += '\n\t\t\t<p *ngFor="let msg of errors[\'' + field + '\']">{{msg}}</p>';
				this.html[where] += '\n\t\t</mat-error>';
				this.html[where] += '\n\t</mat-form-field>';
			},
			custom: function (where, html) {
				this.html[where] += html;
			},
			build: function () {
			}
		}
	};
	return config;
};
