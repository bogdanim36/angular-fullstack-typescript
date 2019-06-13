import {environment} from "../../environments/environment";

export class Translation {
	en: string;
	ro: string;
	text?:string;

	constructor(en, ro) {
		this.en = en;
		this.ro = ro;
		Object.defineProperty(this,'text', {get:()=>this[environment.language]});
	}

	toString() {
		return this[environment.language];
	}
}
