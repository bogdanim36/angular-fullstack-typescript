export class SpkTime {
    private _hours = 0;
    private _minutes = 0;
    private _value = 0;

    constructor(hours: number, minutes?: number) {
        if (arguments.length === 2) {
            this.hours = hours;
            this._minutes = minutes;
        } else {
            this.value = hours;
        }
    }

    set value(value) {
        this.hours = Math.floor(value);
        this.minutes = Math.floor((value - this._hours) * 60);
    }

    get value() {
        return (this.hours * 60 + this.minutes) / 60;
    }

    format() {
        let hours = this.hours;
        let mins = this.minutes;
        let formated = hours.toString().padStart(2, '0') + 'h ';
        formated += mins.toString().padStart(2, '0') + 'm';
        return formated;
    }

    get hours(): number {
        return this._hours;
    }

    set hours(hours) {
        this._hours = Math.floor(hours);
    }

    get minutes(): number {
        return this._minutes;
    }

    set minutes(mins) {
        this._minutes = Math.floor(mins);
    }
}
