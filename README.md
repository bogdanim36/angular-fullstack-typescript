# Fullstack Typescript project
Please visit other project of mine about same thing: <a href='https://github.com/bogdanim36/project-manager'>Project manager</a>
<br>I create this project as a start-kit for projects using: Typescript with Angular7 and Express NodeJS, Webpack, PrimeNg.
Objectives:
 - using typescript not only on client side, but server side too, and having a shared folder for models and other useful code on both sides.
 - use automatic nodejs server update with nodemon and webpack and use angular live dev server with proxy having separated node modules packages for client and server side. Also creating gulp task for production build.
 - has generic classes for Server side (separation of concerns pattern design having generic CRUD operation): Controller, Service, Repository.
 - has generic class for Client side: entity typed generic service. 
 - has generic layout for applications with left side slide tree menu;
 
<h2>Installing and run project</h2>
<br>  01. Clone this repository.
<br>  02. Create database with src/scripts/init-db.sql (change db name, user and password as desired).
<br>  05. Change extends in root tslint.json to you general tslint.json file, or delete extend.
<br>  06. Change server port in src/server/src/ConfigApi.ts and in src/client/proxy.conf.json to the desired one.
<br>  07. Change angular dev server port in src/client/angular.json, serve.port to the desired one.
<br>  08. Run npm server:build-dev. This will create dist/server.js
<br>  09. Run npm server:start-dev. This will start nodeJs api server.
<br>  10. Run npm client:start. This will run ng serve with proxy config (src/client/proxy.conf.json).
<br>  11. View app on http://localhost:4201
<br>  12. For production build run gulp build-prod. This will ruin build for client and server side and copy source files in dist folder
<br>  13. For create simple page, you must create a template in src/templates/entity/. There are some samples to follows.
Run task with gulp gen:entity --config ./src/templates/entity/templateName.js


