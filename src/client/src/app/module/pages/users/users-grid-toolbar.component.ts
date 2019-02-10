import {Component, Input} from "@angular/core";
import {UsersUiConfig} from "@app/module/pages/users/users-ui-config";
import {GridOptions} from "ag-grid-community";

@Component({
	selector: "app-users-grid-toolbar",
	template: `
		 <mat-toolbar class="grid-toolbar" role="footer">
			 <div class="right-side">
				 <button mat-flat-button color="primary" 
						 (click)="grid.api.sizeColumnsToFit()">
					 Size columns to fit
				 </button>
			 </div>
		 </mat-toolbar>`
})

export class UsersGridToolbarComponent {
	@Input() uiConfig: UsersUiConfig;
	@Input() grid: GridOptions;

	constructor() {
	}

}

