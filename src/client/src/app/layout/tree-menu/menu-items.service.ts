import {ConfigMenu, MenuItem} from '@shared/config-menu';
import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class MenuItemsService {
	dataChange = new BehaviorSubject<MenuItem[]>([]);

	get data(): MenuItem[] {
		return this.dataChange.value;
	}

	constructor() {
		this.initialize();
	}

	initialize() {
		// Parse the string to json object.
		const data = ConfigMenu[0].menu;

		// Notify the change.
		this.dataChange.next(data);
	}
}
