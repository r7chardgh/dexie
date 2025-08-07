# Dexie Demo
## site with offline mode using dexieJS (indexed DB)

### Setup db

better to construct a class extends Dexie class

```
class FriendDB extends Dexie{
    friends: Table<IFriend,number>
    //IFriend is the interface of the item
    constructor(){
        super('db name display on browser')
        this.version(1).stores({
            friends:'++id,name,age'
        })
    }
}

export const db = new FriendDB();
```

