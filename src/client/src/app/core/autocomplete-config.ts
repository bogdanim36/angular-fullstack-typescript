import {ClientServiceBaseClass} from "@app/core/client-service-base-class";
import {Observable} from "rxjs";

export class AutocompleteConfig<M> {
	allItems: Observable<M[]>;
	filteredItems: Observable<M[]>;
	displayField: string;
	idField: string;
	itemsLoaded = false;

	constructor(idField: string, displayField: string, private service?: ClientServiceBaseClass<M>, items?: []) {
		this.idField = idField;
		this.displayField = displayField;
		if (service) this.allItems = service.getAll();
		this.allItems.subscribe(response => {
			this.itemsLoaded = true;
		});
	}

	display() {
		return (id => {
			if (id && this.itemsLoaded) {
				let found = this.findItemById(id);
				return found ? found[this.displayField] : 'item not found';
			} else return '';
		});
	}

	findItemById(id) {
		return this.allItems.find(item => item[this.idField] === id);
	}

	filter(searchBy: any, currentItemId?: number): M[] {
		if (searchBy === '' || searchBy === null || searchBy === undefined) searchBy = '';
		if (typeof searchBy === "number") return [this.findItemById(searchBy)];
		searchBy = searchBy.toLowerCase().trim();
		return this.allItems.filter(item => item[this.displayField].toLowerCase().includes(searchBy) && item[this.idField] !== currentItemId);
	}

	search(newValue, currentItemId?) {
		if (newValue === '') newValue = null;
		this.filteredItems = this.filter(newValue, currentItemId);
	}
}
