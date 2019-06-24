import {Application, NextFunction, Request, Response} from 'express';
import {ServerResponse} from '@server/app/ServerResponse';
import {ServerController} from '@server/app/ServerController';
import {ServerService} from '@server/app/ServerService';
import {ServerRepository} from '@server/app/ServerRepository';


export class ServerServiceController<M, S extends ServerService<M, R>, R extends ServerRepository> extends ServerController {
    protected service: S;

    constructor(protected app: Application, controllerRoute) {
        super(app, controllerRoute);
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        console.log('route:', req.route.path, 'methods:', req.route.methods, 'body:',  req.body, 'params', req.params );
        this.service.getAll().then((data: Array<M>) => {
            ServerResponse.success(res, data);
        }, (error) => ServerResponse.error(res, error ));
    }

    delete(req: Request, res: Response) {
        console.log(req.route, req.body, req.params );
        if (!this.isAuthenticated(req, res)) return;
        if (!req.params.id) ServerResponse.error(res, {message: 'No id provided as parameter'});
        try {
            this.service.delete(req.params.id)
                .then(data => {
                        // console.error('service success response', data);
                        ServerResponse.success(res, data);
                    },
                    error => {
                        throw error;
                    }).catch(error => {
                ServerResponse.error(res, error);
            });
        } catch (e) {
            ServerResponse.error(res, e);
        }
    }
    post(req: Request, res: Response) {
        console.log(req.route, req.body, req.params );

        if (!this.isAuthenticated(req, res)) return;
        if (!req.params.id) ServerResponse.error(res, {message: 'No id provided as parameter'});
        if (!req.body.item) ServerResponse.error(res, {message: 'No item provided as parameter'});
        try {
            this.service.update(req.params.id, req.body.item)
                .then(data => {
                        // console.error('service success response', data);
                        ServerResponse.success(res, data);
                    },
                    error => {
                        throw error;
                    }).catch(error => {
                ServerResponse.error(res, error);
            });
        } catch (e) {
            ServerResponse.error(res, e);
        }
    }
    put(req: Request, res: Response) {
        console.log(req.route, req.body, req.params );
        if (!this.isAuthenticated(req, res)) return;
        if (!req.body.item) ServerResponse.error(res, {message: 'No item provided as parameter'});
        try {
            this.service.create(req.body.item)
                .then(data => {
                        // console.error('service success response', data);
                        ServerResponse.success(res, data);
                    },
                    error => {
                        throw error;
                    }).catch(error => {
                ServerResponse.error(res, error);
            });
        } catch (e) {
            ServerResponse.error(res, e);
        }
    }
}

