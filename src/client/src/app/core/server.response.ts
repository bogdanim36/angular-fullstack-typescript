import {ServerResponseError} from './server.response.error';

export interface ServerResponse extends ArrayBuffer {
    status: boolean;
    errors: ServerResponseError;
    data: any;
    extra: any;
}
