import { db } from "./data";

export async function populate() {
    await db.friends.bulkAdd([
        {name:'peter chan',age:19},
        {name:'tom hanks',age:42},
        {name:'william copper',age:31}
    ])
}