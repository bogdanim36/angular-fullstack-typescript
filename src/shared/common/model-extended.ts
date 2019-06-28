// export class ModelExtended<V> {
//     relations: any;
//
//     constructor(private validatorClass: new (item) => V) {
//     }
//
//     createValidator(item: any): V {
//         return new this.validatorClass(item);
//     }
//
// }

export class RelationType {
    public static many = 'many';
    public static single = 'single';
}
