import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ConfigMenu} from '@shared/config-menu';

@Injectable()
export class MenuService {
	items: MenuItem[];

	constructor(private http: HttpClient) {
		this.items = ConfigMenu[0].menu as Array<MenuItem>;
	}

	private getJSON(url: string) {
		return this.http.get(url).subscribe(data => {
			// console.log('menu columns', data);
			this.items = data as MenuItem[];
		});
	}

	public getItems(): Promise<any> {
		const promise = new Promise((resolve, reject) => {
			resolve(this.items);
			reject(Error);
		});
		return promise;
	}
}