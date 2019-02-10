var gulp = require('gulp'),
	{src, dest} = require('gulp'),
	fs = require('fs-sync'),
	cb = require('cb'),
	argv = require('yargs').argv,
	gulpData = require('gulp-data'),
	gulpIf = require('gulp-if'),
	template = require('gulp-template'),
	rename = require('gulp-rename'),
	path = require('path'),
	changeCase = require('change-case'),
	exec = require('child_process').exec;


gulp.task('build-prod', (callback) => {
	process.chdir('src/client');
	console.log("start building");
	exec('ng build --prod', (err, stdout, sterr) => {
		console.log(stdout);
		console.error(sterr);
		cb('err');
		if (sterr) return callback();

		process.chdir('../..');
		exec('npm run  server:build-prod', (err, stdout, sterr) => {
			console.log("server build finished");
			console.log(stdout);
			console.error(sterr);
			cb('err');
			if (sterr) return callback();
			fs.copy('src/server/dist/prod/server.js', 'dist/server.js');
			fs.copy('src/server/dist/prod/server.js.map', 'dist/server.js.map');
			fs.copy('src/server/package.json', 'dist/package.json');
			process.chdir('dist');
			exec('npm install --only=prod', (err, stdout, sterr) => {
				console.log(stdout);
				console.error(sterr);
				cb('err');
				callback();
			});
		});
	});
});

gulp.task("gen:entity", (callback) => {
	let config = require(argv.config)();
	let moduleNames = Object.keys(config.paths.modules);
	if (!config.entity) throw "No entity argument provided";
	if (!config.entities) throw "No entities argument provided";
	let nameCases = {pascalCase:''};
	moduleNames.forEach(moduleName => {
		let module = config.paths.modules[moduleName];
		nameCases[module.filesNameCase] = '';
	});
	// create all nameCases if not exists
	Object.keys(nameCases).forEach((nameCase) => {
		if (!config.entity[nameCase]) config.entity[nameCase] = changeCase[nameCase](config.entity.name)
		if (!config.entities[nameCase]) config.entities[nameCase] = changeCase[nameCase](config.entities.name)
	});
	config.build();
	moduleNames.forEach((moduleName) => {
		let module = config.paths.modules[moduleName];
		// console.log('generate module', moduleName);
		gulp.src(module.src)
			.pipe(gulpData(() => config))
			.pipe(template())
			.pipe(rename((file) => {
				if (file.extname === '') return;
				let baseName = module.addBaseName === false ? "" : file.basename;
				file.basename = config[module.filesName][module.filesNameCase] + (module.filesNameCase === 'paramCase' && baseName ? "-" : "") + baseName;
			}))
			.pipe(gulp.dest(config.paths.destRoot + module.dest + (module.entitiesSubdir ? config.entities.paramCase : "")));
		// if (moduleName === 'server') addControllerToServerIndex(config);
		// if (moduleName === 'client') {
		// 	addClientRooting(config);
		// 	addClientModule(config);
		// }
	});

	callback();
});

let addControllerToServerIndex = function (config) {
	let content = fs.read(config.paths.files.serverIndex);
	// console.log(module, content);
	let EntitiesToImport = config.entities.pascalCase + "ServerController";
	if (content.indexOf(EntitiesToImport) > -1) return;
	// ads import statement
	let positionToInsert = content.lastIndexOf('import ');
	positionToInsert = content.indexOf(';', positionToInsert) + 1;
	let stringToInsert = "\nimport {" + EntitiesToImport + "} from '@module/" + config.entities.paramCase + "/" + EntitiesToImport + "';";
	content = content.substring(0, positionToInsert) + stringToInsert + content.substring(positionToInsert + 1);
	// declare serverController
	positionToInsert = content.indexOf('server.start();');
	stringToInsert = "\nconst " + config.entities.pascalCase + " = new " + EntitiesToImport + "(app, server.store);\n";
	content = content.substring(0, positionToInsert - 1) + stringToInsert + content.substring(positionToInsert);
	fs.write(config.paths.files.serverIndex, content);
	console.log("Added controller ", EntitiesToImport, " to ", config.paths.files.serverIndex);
};

let addClientRooting = function (config) {
	let content = fs.read(config.paths.files.appRoutingModule);
	let EntitiesToImport = config.entities.pascalCase + "IndexComponent";
	if (content.indexOf(EntitiesToImport) > -1) return;
	// ads import statement
	let positionToInsert = content.lastIndexOf('import ');
	positionToInsert = content.indexOf(';', positionToInsert) + 1;
	let pathToImport = "@app/module/pages/" + config.entities.paramCase + "/index/" + config.entities.paramCase + "-index.component";
	let stringToInsert = "\nimport {" + EntitiesToImport + "} from '" + pathToImport + "';";
	content = content.substring(0, positionToInsert) + stringToInsert + content.substring(positionToInsert + 1);

	// add routing
	positionToInsert = content.indexOf('const routes:');
	let positionEnds = content.indexOf(';', positionToInsert);
	let contentBefore = content.substr(0, positionToInsert);
	let contentToChange = content.substring(positionToInsert, positionEnds);
	let contentAfter = content.substring(positionEnds + 1);
	// console.log('before', contentBefore);
	// console.log('to change', contentToChange);
	// console.log('after', contentAfter
	let routingArrayString = contentToChange.split("=")[1].trim().substring(1).replace(']', '').trim();
	let routingArray = routingArrayString === "" ? [] : routingArrayString.split(",");
	routingArray.push("\n\t{path: '" + config.entities.paramCase + "', component:" + EntitiesToImport + "}");
	routingArrayString = "[" + routingArray.join(",") + "\n\t];";
	content = contentBefore + contentToChange.split("=")[0] + " = " + routingArrayString + contentAfter;
	// console.log('routingArrayString', routingArrayString, routingArray);
	console.log('content:\n', content);
	fs.write(config.paths.files.appRoutingModule, content);

	console.log("Added client routing ", config.entities.paramCase, " to ", config.paths.files.appRoutingModule);
};
let addClientModule = function (config) {
	let content = fs.read(config.paths.files.appModule);
	let EntitiesToImport = config.entities.pascalCase + "PageModule";
	if (content.indexOf(EntitiesToImport) > -1) return;
	// ads import statement
	let positionToInsert = content.lastIndexOf('import ');
	positionToInsert = content.indexOf(';', positionToInsert) + 1;
	let pathToImport = "@app/module/pages/" + config.entities.paramCase + "/" + config.entities.paramCase + "-page.module";
	let stringToInsert = "\nimport {" + EntitiesToImport + "} from '" + pathToImport + "';";
	content = content.substring(0, positionToInsert) + stringToInsert + content.substring(positionToInsert + 1);
	// console.log('content', content);

	// add routing
	positionToInsert = content.indexOf('imports');
	let positionEnds = content.indexOf(']', positionToInsert);
	let contentBefore = content.substr(0, positionToInsert);
	let contentToChange = content.substring(positionToInsert, positionEnds + 1);
	let contentAfter = content.substring(positionEnds + 1);
	// console.log('before', contentBefore);
	// console.log('to change', contentToChange);
	// console.log('after', contentAfter);
	let routingArrayString = contentToChange.split(":")[1].trim().substring(1).replace(']', '').trim();
	let routingArray = routingArrayString.split(",");
	routingArray.splice(routingArray.length, 0, "\n\t\t" + EntitiesToImport);
	// routingArray.splice(routingArray.length - 1, 1);
	content = contentBefore + "\n" + contentToChange.split(":")[0] + " : [" + routingArray + "\n\t]" + contentAfter;
	// console.log('routingArrayString', routingArrayString);
	// console.log('routingArray', routingArray);
	// console.log('content', content);
	fs.write(config.paths.files.appModule, content);

	console.log("Added client module ", config.entities.paramCase, " to ", config.paths.files.appRoutingModule);
};

