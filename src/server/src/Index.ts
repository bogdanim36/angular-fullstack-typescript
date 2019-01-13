import {ServerApp} from '@server/app/ServerApp';

const server = new ServerApp();
const app = server.getApp();
server.start();
export { app };
