import {Component, Input} from "@angular/core";
import {UsersUiConfig} from "@app/module/pages/users/users-ui-config";
import {GridOptions} from "ag-grid-community";

@Component({
	selector: "app-users-grid-toolbar",
	template: `
		 <mat-toolbar class="grid-toolbar" role="footer">
			 <div class="right-side">
				 <button mat-flat-button color="primary" (click)="grid.api.sizeColumnsToFit()">
					 <mat-icon>add</mat-icon>
					 Size columns
				 </button>
				 <button mat-flat-button color="primary" (click)="toggleShowPanel()">
					 <mat-icon>remove_red_eye</mat-icon>
					 {{uiConfig?.labels.showDetails}}
				 </button>
			 </div>
		 </mat-toolbar>`
})

export class UsersGridToolbarComponent {
	@Input() uiConfig: UsersUiConfig;
	@Input() grid: GridOptions;

	constructor() {
	}

	toggleShowPanel() {
	}
}

