# Fullstack Typescript project

Please visit another project of mine about the same thing: <a href='https://github.com/bogdanim36/project-manager'>Project manager</a>, or <a href='https://ionescu.io/blog'>my blog</a>.

I created this project as a start-kit for projects using: Typescript with Angular7 and Express NodeJS, Webpack, Angular Material and Ag-Grid.

## Objectives

 - Use typescript not only on client side, but server side too, and have a shared folder for models and other useful code on both sides.
 - Use automatic Node.js server update with nodemon and webpack and use angular live dev server with proxy having separated node modules packages for client and server side. Also create gulp task for production build.
 - Has generic classes for Server side (separation of concerns pattern design having generic CRUD operation): Controller, Service, Repository.
 - Has generic class for Client side: entity typed generic service. 
 - Has generic layout for applications with left side slide tree menu.
 
## Installing and running project

01. Clone this repository.
02. Run `npm run install-all script` in project root folder.
03. Create database with `src/scripts/init-db.sql` (change db name, user and password as desired).
04. Change extends in root `tslint.json` to your general `tslint.json` file, or delete extend.
05. Change server port in `src/server/src/ConfigApi.ts` and in `src/client/proxy.conf.json` to the desired one.
06. Change angular dev server port in `rc/client/angular.json`, `serve.port` to the desired one.
07. Run `npm server:build-dev`. This will create `dist/server.js`.
08. Run `npm server:start-dev`. This will start Node.js api server.
09. Run `npm client:start-dev`. This will run ng serve with proxy config (`src/client/proxy.conf.json`).
10. View app on http://localhost:4201 (default port).
11. For production build run `gulp build-prod` task. This will run build for client and server side and copy source files in dist folder.
12. For creating a simple page, you must create a template in `src/templates/entity/`. There are some examples to follow.
13. Run task with `gulp gen:entity --config ./src/templates/entity/templateName.js` for creating entities (users, projects, etc.).
