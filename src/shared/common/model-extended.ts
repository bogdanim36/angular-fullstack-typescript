export class ModelExtended<M, V> {
    model: M;
    validator: V;
    relations: any;
}

export class RelationType {
    public static many = 'many';
    public static single = 'single';
}
