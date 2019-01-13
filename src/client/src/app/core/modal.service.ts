import {Injectable} from '@angular/core';
import {ConfirmationService} from "primeng/api";

@Injectable({providedIn: 'root'})
export class ModalService {
	constructor(private confirmSrv: ConfirmationService) {
	}

	confirm(message, header = 'Alert', acceptLabel = 'OK', rejectLabel: "Cancel", successCallback: Function, rejectCallback: Function) {
		return this.confirmSrv.confirm({
			header: header,
			message: message,
			acceptLabel: acceptLabel,
			rejectLabel: rejectLabel,
			accept: successCallback,
			reject: rejectCallback
		});
	}

	alert(message, header = 'Alert', buttonLabel = 'OK', icon = "", callback: Function) {
		return this.confirmSrv.confirm({
			header: header,
			message: message,
			acceptLabel: buttonLabel,
			acceptVisible: true,
			rejectVisible: false,
			accept: callback,
			icon: icon
		});
	}

}
