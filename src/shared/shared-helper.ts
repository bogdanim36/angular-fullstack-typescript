export class SharedHelper {
    static findObject(data: Array<any>, fieldName: string, fieldValue: any): any {
        let find = null;
        data.some(item => {
            if (item[fieldName] === fieldValue) {
                find = item;
                return true;
            }
            return false;
        });
        return find;
    }

    static findObjectTyped<T>(data: Array<T>, fieldName: string, fieldValue: any): T  {
        let find = null;
        data.some(item => {
            if (item[fieldName] === fieldValue) {
                find = item;
                return true;
            }
            return false;
        });
        return find;
    }

}