import Dexie, { Table } from 'dexie';
import { IFriend } from './definition';
import { populate } from './populate';


export class PersonDB extends Dexie {
    friends!: Table<IFriend, number>;
    constructor() {
        super('PersonDB');
        this.version(1).stores({
            friends: '++id, name, age',
            messages: '++id, chatId, role, content, createdAt',
        });
    }

}
export const db = new PersonDB();

db.on('populate', populate);
