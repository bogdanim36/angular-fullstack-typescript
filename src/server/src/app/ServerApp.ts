import * as express from 'express';
import {ConfigApi} from '@server/ConfigApi';
import bodyParser = require('body-parser');
import {Application} from 'express';
import {ServerStore} from '@server/app/ServerStore';
import {ServerLog} from '@server/app/ServerLog';

export class ServerApp {
    private app: express.Application;
    private port: string | number;
    private apiConfig: ConfigApi;
    public store: ServerStore;

    constructor() {
        this.store = new ServerStore();
        this.config();
        this.createApp();
        this.initLogger();
    }


    private createApp() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
    }
    private initLogger(){
        let con = new ServerLog(this.apiConfig.logFile, this.apiConfig.errorsFile);
          console.log('------------------- Start logger', this.apiConfig.logFile, this.apiConfig.errorsFile);
    }

    private config(): void {
        this.apiConfig = new ConfigApi();
        this.port = process.env.PORT || this.apiConfig.port;
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log('Start server on port %s', this.port);
        }).on('error', function (err) {
            console.error(' runningServer error:', err.message);
            console.error(err.stack);
            process.exit(1);
        });
        process.on('uncaughtException', (err) => {
            console.error(' uncaughtException:', err.message);
            console.error(err.stack);
            process.exit(1);
        });
        process.on('unhandledRejection', (reason, p) => {
            console.error('Unhandled Rejection at', p);
            console.error('Reason:', reason);
            process.exit(1 );
            // application specific logging, throwing an error, or other logic here
        });
    }

    public getApp(): Application {
        return this.app;
    }
}
