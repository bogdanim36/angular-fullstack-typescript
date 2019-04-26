import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'spk-table-toolbar',
	templateUrl: './spk-table-toolbar.component.html',
	styleUrls: ['./spk-table-toolbar.component.scss']
})
export class SpkTableToolbarComponent implements OnInit {
	@Input() top = false;
	@Input() bottom = false;

	constructor() {
		console.log('toolbar constructor', this);
	}

	ngOnInit() {
	}

}
