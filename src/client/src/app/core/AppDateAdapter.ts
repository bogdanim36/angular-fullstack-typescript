import {NativeDateAdapter} from "@angular/material";
import {Injectable} from "@angular/core";

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {

    parse(value: any): Date | null {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            const str = value.split('/');
            const year = Number(str[2]);
            const month = Number(str[1]) - 1;
            const date = Number(str[0]);
            return new Date(year, month, date);
        }
        const timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    }
    format(date: Date, displayFormat: string): string {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        if (displayFormat === "input") {
            return this._to2digit(day) + '.' + this._to2digit(month) + '.' + year;
        } else if (displayFormat === "YYYY-MM-DD") {
            return year + '-' + this._to2digit(month) + '-' + this._to2digit(day) ;
        } else if (displayFormat === "inputMonth") {
            return  this._to2digit(month) + '.' + year;
        } else {
            return date.toDateString();
        }
    }

    private _to2digit(n: number) {
        return ('00' + n).slice(-2);
    }
}
