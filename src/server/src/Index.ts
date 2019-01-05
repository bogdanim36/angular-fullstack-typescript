import {ServerApp} from '@server/app/ServerApp';
import {UsersServerController} from '@module/users/UsersServerController';
const server = new ServerApp();
const app = server.getApp();
const users = new UsersServerController(app, server.store);
server.start();
export { app };
