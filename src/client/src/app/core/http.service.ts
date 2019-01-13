import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from './server.response';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export abstract class HttpService {
	urls: any = {};

	constructor(protected http: HttpClient, protected controller?: string) {
	}

	// build request url based on baseRoute or config urls
	getUrl(method: string, id = null): string {
		let url = environment.apiUrl + '/';
		if (this.urls[method]) url += this.urls[method];
		else {
			if (this.controller) url += this.controller + '/';
			url += method;
			if (!this.controller) console.error('Must define a baseRoute or urls for method: ', method);
		}
		return url;
	}


	get(method, params ?, reload = false): Observable<ServerResponse> {
		let httpParams = new HttpParams();
		Object.keys(params || {}).forEach(key => {
			httpParams = httpParams.append(key, params[key]);
		});
		const url = this.getUrl(method);
		return this.http.get<ServerResponse>(url, {params: httpParams});
	}
}

