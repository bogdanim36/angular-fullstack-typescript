import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from './server.response';
import {environment} from '@app/../environments/environment';
import {Datasource} from "@app/core/datasource";

export class ClientServiceBaseClass<M> {
	data: Datasource;
	urls: any = {};
	primaryKey: string = 'id';

	constructor(protected http: HttpClient, protected modelClass: M & Function, protected baseRoute?: string) {
		this.data = new Datasource();
	}

	createInstance(source: Partial<M>, extra?: any): M {
		return new this.modelClass.prototype.constructor(source, extra);
	}

	injectModelInCollection(input) {
		let output = [];
		input.forEach(item => {
			let modelInstance = this.createInstance(item);
			output.push(modelInstance);
		});
		return output;
	}


	// build request url based on baseRoute or config urls
	buildUrl(method: string, id = null): string {
		let url = '';
		if (this.urls[method]) {
			url = (environment.apiUrl ? environment.apiUrl : '') + '/' + this.urls[method];
		} else {
			url = this.baseRoute + '/' + method;
			if (!this.baseRoute) console.error('Must define a baseRoute or urls for method: ', method);
		}
		return url;
	}

	// method to define params for getAll method
	getAllApiArgs(): any {
		return {};
	}

	getHttpParams(params) {
		let httpParams = new HttpParams();
		Object.keys(params).forEach(key => {
			httpParams = httpParams.append(key, params[key]);
		});
		return httpParams;
	}

	async getAll(params ?, reload = false): Promise<M[]> {
		params = params === undefined ? this.getAllApiArgs() : params;
		const httpParams = this.getHttpParams(params);
		const url = this.buildUrl('');
		const response = await this.http.get<ServerResponse>(url, {params: httpParams}).toPromise<ServerResponse>();
		if (response && response.status) {
			return this.injectModelInCollection(response.data);
		} else {
			return [];
		}

	}

	async getOne(id: number): Promise<M> {
		const url = `${this.baseRoute}/${id}`;
		const response = await this.http.get<ServerResponse>(url).toPromise<ServerResponse>();
		if (response.status) return this.createInstance(response.data);
		else return null;
	}

	get items(): M[] {
		return this.data.items || [];
	}

	clearItems() {
		return this.data.clearItems();
	}

	async update(originalItem: M, editedItem: Partial<M>): Promise<ServerResponse> {
		const id = originalItem[this.primaryKey];
		const url = `${this.baseRoute}/` + (this.urls['update'] ? this.urls.update : `${id}`);
		const response = await this.http.post<ServerResponse>(url, {item: editedItem}).toPromise<ServerResponse>();
		if (response && response.status) {
			Object.assign(originalItem, this.createInstance(response.data));
		}
		return response;
	}

	async create(sourceItem: M): Promise<ServerResponse> {
		const url = `${this.baseRoute}/` + (this.urls['create'] ? this.urls.create : ``);
		const response = await this.http.put<ServerResponse>(url, {item: sourceItem}).toPromise<ServerResponse>();
		if (response && response.status) {
			this.data.add(this.createInstance(response.data), 0);
		}
		return response;
	}

	async delete(sourceItem: M): Promise<ServerResponse>  {
		let id = sourceItem[this.primaryKey];
		const url = `${this.baseRoute}/` + (this.urls['create'] ? this.urls.create : `${id}`);
		const response = await this.http.delete<ServerResponse>(url).toPromise<ServerResponse>();
		if (response && response.status) {
			this.data.deleteByColumn(this.primaryKey, id);
			response.data = sourceItem;
		}
		return response;
	}
}

