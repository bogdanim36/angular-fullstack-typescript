import {ServerApp} from '@server/app/ServerApp';
import {UsersServerController} from '@module/users/UsersServerController';
import {ProjectsServerController} from '@module/projects/ProjectsServerController';
import {TasksServerController} from '@module/tasks/TasksServerController';
import {TaskTypesServerController} from '@module/task-types/TaskTypesServerController';
import {TaskStatusServerController} from '@module/task-status/TaskStatusServerController';

const server = new ServerApp();
const app = server.getApp();
const users = new UsersServerController(app, server.store);
const projects = new ProjectsServerController(app, server.store);
const tasks = new TasksServerController(app, server.store);
const taskTypes = new TaskTypesServerController(app, server.store);
const TaskStatus = new TaskStatusServerController(app, server.store);
server.start();
export { app };
