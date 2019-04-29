import {Component, Input} from '@angular/core';

@Component({
	selector: 'spk-table-toolbar',
	templateUrl: './spk-table-toolbar.component.html',
	styleUrls: ['./spk-table-toolbar.component.scss']
})
export class SpkTableToolbarComponent {
	@Input() top = false;
	@Input() bottom = false;

	constructor() {
	}
}
