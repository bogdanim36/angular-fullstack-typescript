import {environment} from "../../environments/environment";

export class Translation {
	en: string;
	ro: string;

	constructor(en, ro) {
		this.en = en;
		this.ro = ro;
	}

	toString() {
		return this[environment.language];
	}
}
