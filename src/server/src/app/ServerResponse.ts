import {Response} from 'express';

export class ServerResponse {
    static success(res: Response, data, extra = null) {
        const response = {
            status: true,
            data: data,
            extra: extra
        };
        console.log("server-response-success", response, data);
        res.send(response);
    }

    static error(res: Response, err ) {
        const response = {
            status: false,
            data: err,
            message: err.message || 'Server internal error'
        };
        console.error("server-response-error", err.message);
        res.send(response);
    }

    static validateError(err, res: Response) {
        const response = {
            status: false,
            errors: err
        };
        res.send(response);
    }

}