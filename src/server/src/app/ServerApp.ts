import * as express from 'express';
import {ConfigApi} from '@server/ConfigApi';
import {ConfigMenu} from '@server/ConfigMenu';
import bodyParser = require('body-parser');
import {Application} from 'express';
import {ServerStore} from '@server/app/ServerStore';

export class ServerApp {
    private app: express.Application;
    private port: string | number;
    private apiConfig: ConfigApi;
    private menu: ConfigMenu;
    public store: ServerStore;

    constructor() {
        this.store = new ServerStore();
        this.config();
        this.createApp();
    }

    private createApp() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
    }

    private config(): void {
        this.apiConfig = new ConfigApi();
        this.menu = new ConfigMenu();
        this.port = process.env.PORT || this.apiConfig.port;
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        }).on('error', function (e) {
            console.log('oroare', e);
        });
        process.on('uncaughtException', (err) => {
            console.error((new Date()).toUTCString() + ' uncaughtException:', err.message);
            console.error(err.stack);
            process.exit(1);
        });
        process.on('unhandledRejection', (reason, p) => {
            console.error('Unhandled Rejection at', p);
            console.error('Reason:', reason);
            process.exit(1, );
            // application specific logging, throwing an error, or other logic here
        });
    }

    public getApp(): Application {
        return this.app;
    }
}
