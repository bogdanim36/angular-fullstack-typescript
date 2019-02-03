import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from './server.response';
import {environment} from '@app/../environments/environment';

export class ClientService<M> {
	_items: M[] = [];
	urls: any = {};
	primaryKey: string = 'id';

	constructor(protected http: HttpClient, protected modelClass: M & Function, protected baseRoute?: string) {
	}

	instanceCreate(source: Partial<M>, extra?: any): M {
		return new this.modelClass.prototype.constructor(source, extra);
	}

	injectModelInCollection(input) {
		let output = [];
		input.forEach(item => {
			let modelInstance = this.instanceCreate(item);
			output.push(modelInstance);
		});
		return output;
	}


	// build request url based on baseRoute or config urls
	getUrl(method: string, id = null): string {
		let url = '';
		if (this.urls[method]) url = (environment.apiUrl ? environment.apiUrl : '') + '/' + this.urls[method];
		else {
			url = this.baseRoute + '/' + method;
			if (!this.baseRoute) console.error('Must define a baseRoute or urls for method: ', method);
		}
		return url;
	}

	// method to define params for getAll method
	getAllApiArgs(): any {
		return {};
	}

	getAll(params ?, reload = false): Promise<Array<M>> {
		params = params === undefined ? this.getAllApiArgs() : params;
		let httpParams = new HttpParams();
		Object.keys(params).forEach(key => {
			httpParams = httpParams.append(key, params[key]);
		});
		const url = this.getUrl('');
		// console.log('request ', url, params);
		return this.http.get<ServerResponse>(url, {params: httpParams}).toPromise<ServerResponse>()
			.then(response => {
				if (response && response.status) {
					return this.injectModelInCollection(response.data);
				}
			});
	}


	getOne(id: number) {
		return this.http.get(`${this.baseRoute}/${id}`).subscribe((response: ServerResponse) => {
			if (response.status) return this.instanceCreate(response.data);
			else return null;
		});
	}

	get items(): M[] {
		return this._items;
	}

	clearItems() {
		this._items = [];
	}

	update(originalItem: M, editedItem: Partial<M>) {
		const id = originalItem[this.primaryKey];
		const url = `${this.baseRoute}/` + (this.urls['update'] ? this.urls.update : `${id}`);
		return this.http.post<ServerResponse>(url, {item: editedItem}).toPromise<ServerResponse>()
			.then(response => {
				// console.log(url, editedItem);
				if (response && response.status) {
					Object.assign(originalItem, this.instanceCreate(response.data));
				}
				return response;
			}, error => {
				console.error(error);
				return error;
			});
	}

	create(sourceItem: M) {
		const url = `${this.baseRoute}/` + (this.urls['create'] ? this.urls.create : ``);
		return this.http.put<ServerResponse>(url, {item: sourceItem}).toPromise<ServerResponse>()
			.then(response => {
				// console.log(url, sourceItem);
				if (response && response.status) {
					this._items.push(this.instanceCreate(response.data));
				}
				return response;
			}, error => {
				console.error(error);
				return error;
			});
	}

	delete(sourceItem: M) {
		let id = sourceItem[this.primaryKey];
		const url = `${this.baseRoute}/` + (this.urls['create'] ? this.urls.create : `${id}`);
		return this.http.delete<ServerResponse>(url).toPromise<ServerResponse>()
			.then(response => {
				if (response && response.status) {
					this._items = this.items.filter((item, i) => item[this.primaryKey] !== id);
					response.data = sourceItem;
				}
				return response;
			}, error => {
				console.error(error);
				return error;
			});

	}
}

