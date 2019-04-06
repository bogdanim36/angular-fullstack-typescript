import {ServerResponseError} from './server.response.error';

export interface ServerResponse extends ArrayBuffer {
	status: boolean;
	errors: ServerResponseError;
	message?: string;
	data: any;
	extra: any;
}
