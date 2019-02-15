import {ServerApp} from '@server/app/ServerApp';
import {UsersServerController} from '@module/users/UsersServerController';
import {ProjectsServerController} from '@module/projects/ProjectsServerController';
const server = new ServerApp();
const app = server.getApp();
const Users = new UsersServerController(app, server.store);
const Projects = new ProjectsServerController(app, server.store);
server.start();
export { app };
