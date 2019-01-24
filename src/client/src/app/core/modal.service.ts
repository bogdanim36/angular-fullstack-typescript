import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ModalConfirmComponent} from "@app/components/modal-confirm/modal-confirm.component";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ModalService {
	constructor(private dialog: MatDialog) {
	}

	confirm(message, header = 'Alert', acceptLabel = 'OK', rejectLabel: "Cancel"): Observable<any> {
		const dialogRef = this.dialog.open(ModalConfirmComponent, {
			width: '250px',
			data: {tile: header, text: message, okLabel: acceptLabel, cancelLabel: rejectLabel}
		});

		return dialogRef.afterClosed();
	}

	alert(message, header = 'Alert', buttonLabel = 'OK', width="250px", icon = ""): Observable<any> {
		const dialogRef = this.dialog.open(ModalConfirmComponent, {
			width: '250px',
			data: {tile: header, text: message, okLabel: buttonLabel}
		});

		return dialogRef.afterClosed();
	}

}
