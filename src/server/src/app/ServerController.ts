import {Application, NextFunction, Request, Response} from 'express';
import {ServerResponse} from '@server/app/ServerResponse';

export class ServerController {

    constructor(protected app: Application, public controllerRoute: string) {
    }


    setDefaultRoutes() {
        this.addRoute(this.controllerRoute, 'get', this.getAll);
        this.addRoute(this.controllerRoute + '/:id', 'post', this.post);
        this.addRoute(this.controllerRoute, 'put', this.put);
        this.addRoute(this.controllerRoute + '/:id', 'delete', this.delete);
    }

    addRoute(route: string, method: string, callback: Function) {
        const url = '/api/' + route;
        console.log('controllerRoute', url, method);
        this.app[method](url, callback.bind(this));
    }

    getAll(req: Request, res: Response, next: NextFunction) {

    }

    post(req: Request, res: Response, next: NextFunction) {

    }

    put(req: Request, res: Response, next: NextFunction) {

    }

    delete(req: Request, res: Response, next: NextFunction) {

    }

    get(req: Request, res: Response) {
        if (!this.isAuthenticated(req, res)) return;
        if (!req.params.id) ServerResponse.error(res, {message: 'No id provided as parameter'});
        else {
            const id = req.params.id;
            let response = {
                status: true,
                data: null,
                serverResponse: res
            };
            // let item = this.createInstance(response, 'data');
        }
    }


    isAuthenticated(req, res) {
        // var userInfo = helper.cookie(res, 'userInfo');
        // if (userInfo && userInfo.UserName) return true;
        // res.status(401).send({redirect: '/login'});
        return true;
    }

}

