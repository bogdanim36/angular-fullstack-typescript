import * as moment from 'moment';

export class SpkDate {
    constructor(public value: any, format?: string) {
        if (format) this.value = moment(value, format).toDate();
    }

    get Hours(): number {
        return this.value.getHours();
    }

    set Hours(value) {
        this.value.setHours(value);
    }

    get Minutes(): number {
        return this.value.getMinutes();
    }

    set Minutes(value) {
        this.value.setMinutes(value);
    }

    toString() {
        return this.value.toString();
    }
}


