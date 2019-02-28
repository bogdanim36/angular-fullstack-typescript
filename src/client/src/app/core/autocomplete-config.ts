import {ClientService} from "@app/core/client-service";

export class AutocompleteConfig<M> {
	allItems:M[] = [];
	filteredItems:M[] = [];
	displayField: string;
	idField: string;
	itemsLoaded = false;

	constructor(idField: string, displayField: string, private service?: ClientService<M>, items?: []) {
		this.idField = idField;
		this.displayField = displayField;
		if (service) service.getAll().then(response => {
			this.allItems = response;
			this.itemsLoaded = true;
		});
		if (items) {
			this.allItems = items;
			this.itemsLoaded = true;
		}
	}

	display() {
		return (id => {
			if (id) {
				let found = this.findItemById(id);
				return found ? found[this.displayField] : 'item not found';
			} else return '';
		});
	}

	findItemById(id) {
		return this.allItems.find(item => item[this.idField] === id);
	}

	filter(searchBy: any, currentItemId?:number):M[] {
		if (searchBy === '' || searchBy === null || searchBy === undefined) searchBy = '';
		if (typeof searchBy === "number") return [this.findItemById(searchBy)];
		searchBy = searchBy.toLowerCase().trim();
		return this.allItems.filter(item => item[this.displayField].toLowerCase().includes(searchBy) && item[this.idField] !== currentItemId);
	}

	search(newValue, currentItemId?) {
		if (newValue === '') newValue = null;
		this.filteredItems = this.filter(newValue, currentItemId);
		console.log('filtered options', this.filteredItems);
	}
}
