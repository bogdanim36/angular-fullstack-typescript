import {ServerStore} from '@server/app/ServerStore';
import {ServerDb} from '@server/app/ServerDb';

export class ServerRepository {
    tableName: string;
    primaryKey: string;
    db: ServerDb;

    constructor(protected store: ServerStore, db?: ServerDb) {
        this.db = db || new ServerDb(store);
    }

    getAll(): Promise<any> {
        const query = 'select * from ??';
        return this.db.runPromiseQuery(query, [this.tableName]);

    }

    getOne(id): Promise<any> {
        const query = 'select * from ?? where ??=?';
        return this.db.runPromiseQuery(query, [this.tableName, this.primaryKey, id]);
    }

    update(id, item): Promise<any> {
        return this.db.getUpdateQuery(item, this.tableName).then(data => {
            return this.db.runPromiseQuery(data.query, data.values);
        }, error => {
            throw error;
        }).catch(error => {
            throw error;
        });
    }

    create(item): Promise<any> {
        return this.db.getCreateQuery(item, this.tableName).then(data => {
            return this.db.runPromiseQuery(data.query, data.values);
        }, error => {
            throw error;
        }).catch(error => {
            throw error;
        });
    }

    delete(id): Promise<any> {
        return this.db.getDeleteQuery(id, this.tableName).then(data => {
            return this.db.runPromiseQuery(data.query, data.values);
        }, error => {
            throw error;
        }).catch(error => {
            throw error;
        });
        // ;
    }


}