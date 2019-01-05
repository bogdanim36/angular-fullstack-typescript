export class Model {
    constructor(source?: any, extra?: any) {
        let fields = Object.keys(source || {});
        if (extra) fields = fields.concat(Object.keys(extra));
        fields.forEach(key => {
            this[key] = source[key];
            // console.log("key", key, source[key]);
        });
        // console.log("source", source, this);
    }
}