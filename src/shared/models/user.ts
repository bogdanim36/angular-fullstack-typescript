import {Model} from '../common/model';

export class User extends Model {

	id?: number;
	email?: string;
	firstName?: string;
	lastName?: string;
	fullName?: string;

	constructor(source: Partial<User>, extra = {}) {
		super(source, extra);

		Object.defineProperty(this, 'fullName', {
			get() {
				return ((this.firstName ? this.firstName.trim() : '') + (this.lastName ? ' ' + this.lastName.trim() : '')).trim();
			}
		});

	}
}

