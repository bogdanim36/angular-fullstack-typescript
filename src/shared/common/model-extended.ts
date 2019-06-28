export class ModelExtended<M, V> {
    model: M;
    validator: V;
}

export class RelationType {
    public static many = 'many';
    public static single = 'single';
}
