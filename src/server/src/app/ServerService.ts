import {ServerStore} from '@server/app/ServerStore';
import {ServerRepository} from '@server/app/ServerRepository';
import {OkPacket} from '@server/app/OkPacket';

export class ServerService<M, R extends ServerRepository> {
    public repository: R;

    constructor(protected modelClass: M & Function, protected store: ServerStore) {
    }

    instanceCreate(source: Partial<M>, extra?: any): M {
        return new this.modelClass.prototype.constructor(source, extra);
    }

    injectModelInCollection(input) {
        let output = [];
        input.forEach(item => {
            let modelInstance = this.instanceCreate(item);
            output.push(modelInstance);
        });
        return output;
    }

    getAll(): Promise<Array<M>> {
        return this.repository.getAll().then((data: Array<any>) => this.injectModelInCollection(data));
    }

    getOne(id): Promise<any> {
        return this.repository.getOne(id).then((data: any) => {
            console.log('get one response', data);
            if (data && data.length === 1) return this.instanceCreate(data[0]);
            else throw new Error('No item retrieved for id ' + id + ' for model ' + this.modelClass.name);
        });
    }

    new(source): M {
        return this.instanceCreate(source);
    }

    create(item): Promise<M> {
        if (!item) throw new Error('No item provided for service.create!');
        return this.repository.create(item)
            .then((response: OkPacket) => {
                console.log("create response", response);
                if (response.insertId) return this.getOne(response.insertId);
                else throw new Error('Create error!');
            })
            .catch(error => {
                throw error;
            });
    }

    update(id, item): Promise<M> {
        if (!item) throw new Error('No item provided for service.update ');
        return this.repository.update(id, item)
            .then((response: OkPacket) => {
                if (response.affectedRows === 1) return this.getOne(id);
                else throw new Error('Update error');
            })
            .catch(error => {
                throw error;
            });
    }
    delete(id): Promise<boolean> {
        if (!id) throw new Error('No id provided for service.delete!');
        return this.repository.delete(id)
            .then((response: OkPacket) => {
                console.log("Delete response", response);
                if (response.affectedRows === 1) return true;
                else throw new Error('Delete error!');
            })
            .catch(error => {
                throw error;
            });
    }
}