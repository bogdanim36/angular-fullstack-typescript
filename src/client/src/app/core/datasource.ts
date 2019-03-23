
import {EventEmitter} from "@angular/core";

export class Datasource  {
	items: Array<any>;
	currentItem: any;
	currentItemChanged= new EventEmitter();
	currentIndex: number;
	isLast: boolean;
	isFirst: boolean;

	constructor() {
		this.items = [];
	}

	findByColumn(columnName, value) {
		return this.items.find(item => {
			return item[columnName] === value;
		});
	}

	findIndexByColumn(columnName, value) {
		return this.items.findIndex(item => {
			return item[columnName] === value;
		});
	}

	setCurrent(index) {
		index = Math.max(0, index);
		index = Math.min(this.items.length - 1, index);
		let currentIndexChanged = this.currentIndex !== index;
		if (index === -1) this.currentItem = {};
		else this.currentItem = this.items[index];
		this.currentIndex = index;
		this.isFirst = this.currentIndex === 0;
		this.isLast = this.currentIndex === this.items.length-1;
		if (currentIndexChanged !== index) this.currentItemChanged.emit(this.currentItem);
		// console.log("datasource.setCurrent", index, this.currentItem);
	}

	first() {
		let index = this.items.length === 0 ? -1 : 0;
		this.setCurrent(index);
	}

	next() {
		let index = this.currentIndex;
		if (this.items.length === 0) {
			index = -1;
		} else if (this.currentIndex < this.items.length - 1) {
			index = this.currentIndex + 1;
		}
		this.setCurrent(index);
	}

	previous() {
		let index = this.currentIndex - (this.currentIndex > 0 ? 1 : 0);
		this.setCurrent(index);
	}

	last() {
		let index = this.items.length === 0 ? -1 : this.items.length - 1;
		this.setCurrent(index);
	}

	add(item: Object, position: number, setCurrent?: boolean) {
		if (position) {
			this.items.splice(position, 0, item);
		} else {
			this.items.push(item);
			position = this.items.length - 1;
		}
		if (setCurrent) this.setCurrent(position);
	}

	deleteByColumn(columnName, value) {
		let index = this.findIndexByColumn(columnName, value);
		if (index > -1) this.deleteByIndex(index);
	}

	deleteByIndex(index) {
		if (index < this.items.length) {
			this.items.splice(index, 1);
			this.setCurrent(index);
		} else console.error("datasource.deleteByIndex:", "index", index, "not found in datasource:", this.items.length);
	}

	deleteCurrent() {
		let index = this.currentIndex;
		this.items.splice(index, 1);
		this.setCurrent(index);
	}


	clearItems() {
		this.items = [];
		this.first();
	}


}

