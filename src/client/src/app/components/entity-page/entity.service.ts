import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class EntityService {
	isEditing: boolean;
	formPanelIsVisible: boolean;

	constructor() {
	}
}
