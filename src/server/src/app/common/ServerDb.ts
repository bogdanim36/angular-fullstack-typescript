import mysql = require('mysql');
import {SharedHelper} from '@shared/shared-helper';
import {ConfigDb} from '@server/ConfigDb';
import {ServerStore} from '@server/app/common/ServerStore';
import {TableStructureRowData} from '@server/app/common/TableStructureRowData';

export class ServerDb {
    config: ConfigDb;
    connectionPool: mysql.Pool;

    constructor(protected store: ServerStore) {
        this.config = new ConfigDb();

        this.connectionPool = mysql.createPool({
            host: this.config.host,
            user: this.config.user,
            password: this.config.password,
            database: this.config.db
        });
    }


    static getFieldValue(field, value) {
        switch (field.DataType) {
            case 'varchar':
                return '\'' + value + '\'';
            case 'int':
                return value;
        }
    }


    getDeleteQuery(id, tableName, schema=null) {
        return this.getTableStructure(tableName, schema).then((structure) => {
            const primaryField = SharedHelper.findObjectTyped<TableStructureRowData>(structure, 'IsPrimaryKey', 1);
            if (!primaryField) throw new Error('No primary field found for table: ' + tableName);
            const query = 'delete from ?? where ??=?';
            let values = [tableName, primaryField.FieldCaption, id];
            return {query: query, values: values};
        }, error => {
            throw error;
        }).catch(error => {
            throw error;
        });
    }


    getFieldsList(structure, item, values) {
        let fieldsList = '';
        let fields: String[] = Object.keys(item);
        structure.forEach((fieldRowData: TableStructureRowData) => {
            let fieldName = fieldRowData.FieldCaption;
            if (fieldRowData.IsPrimaryKey) return;
            if (fields.indexOf(fieldName) === -1) return;
            fieldsList += (fieldsList ? ', ' : '') + ' ??=? ';
            values.push(fieldName);
            values.push(item[fieldName]);
        });
        return fieldsList;
    }

    getUpdateQuery(item, tableName, schema=null): Promise<{ query: string, values: Array<any> }> {
// console.log('get update query', arguments);
        return this.getTableStructure(tableName, schema).then((structure) => {
            let values = [tableName];
            const primaryField = SharedHelper.findObjectTyped<TableStructureRowData>(structure, 'IsPrimaryKey', 1);
            if (!primaryField) throw new Error('No primary field found for table: ' + tableName);
            let fieldsList = this.getFieldsList(structure, item, values);
            let query = 'update ?? set ' + fieldsList + ' where ??=?';
            values.push(primaryField.FieldCaption);
            values.push(item[primaryField.FieldCaption]);
            return {query: query, values: values};
        }, error => {
            throw error;
        }).catch(error => {
            throw error;
        });
    }

    getCreateQuery(item, tableName, schema=null): Promise<{ query: string, values: Array<any> }> {
        return this.getTableStructure(tableName, schema).then((structure) => {
            //console.log("structure", structure);
            let values = [tableName];
            const primaryField = SharedHelper.findObjectTyped<TableStructureRowData>(structure, 'IsPrimaryKey', 1);
            if (!primaryField) throw new Error('No primary field found for table: ' + tableName);
            let fieldsList = this.getFieldsList(structure, item, values);
            let query = 'insert into ?? set ' + fieldsList;
            return {query: query, values: values};
        }, error => {
            throw error;
        }).catch(error => {
            throw error;
        });
    }

    getTableStructure(tableName: string, schema?: string): Promise<Array<TableStructureRowData>> {
        schema = schema || this.config.db;
        // console.log('verify', this.store.TablesStructure[schema + '.' + tableName]);
        if (this.store.TablesStructure[schema + '.' + tableName]) {
            return new Promise((resolve) => {
                resolve(this.store.TablesStructure[schema + '.' + tableName]);
            });
        } else {
            const query = `
              SELECT lower(Column_name)                                                                as FieldName,
                     Column_name                                                                       as FieldCaption,
                     Data_type                                                                         As DataType,
                     COLUMN_KEY = 'PRI'                                                                As IsPrimaryKey,
                     Extra                                                                             As Extra,
                     if(isnull(Character_Maximum_Length), Numeric_Precision, Character_Maximum_Length) As Length,
                     if(isnull(Numeric_Scale), 000, Numeric_Scale)                                     As DecimalPosition
              From information_schema.COLUMNS
              Where Table_Schema = ?
                And LOWER(Table_Name) = ?`;
            const values = [schema, tableName.toLowerCase()];
            return this.runPromiseQuery(query, values).then(structure => {
                this.store.TablesStructure[schema + '.' + tableName] = structure;
                return structure;
            });
        }
    }


    runAsyncQuery(data, resolve, reject): Promise<any> {
        const connectionPool = data.connectionPool || this.connectionPool;
        return connectionPool.getConnection((connectionError, connection) => {
            if (!connection) reject(connectionError);
            else if (connectionError) {
                connection.release();
                reject(connectionError);
            } else {
                // console.log('run async query: ', data.query, data.values);
                return connectionPool.query(String(data.query), data.values, (queryError, rows, fields) => {
                    connection.release();
                    // console.log('response query ', rows, err1);
                    if (queryError) {
                        queryError.SQL = connectionPool.sql;
                        reject(queryError);
                    } else resolve(rows);
                });
            }
        });
    }

    runPromiseQuery(query, values): Promise<any> {
        return new Promise((resolve, reject) => {
            const data = {
                query: query,
                values: values
            };
            return this.runAsyncQuery(data, resolve, reject);
        });
    }
}
