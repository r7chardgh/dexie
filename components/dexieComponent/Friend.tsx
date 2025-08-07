'use client'
import { db } from "@/lib/data";
import { useLiveQuery } from "dexie-react-hooks";

const Friend = () => {
  const friends = useLiveQuery(async () => {
    return await db.friends.toArray()
  })
  return (
    <ul>
      {friends?.map(fan => <li key={fan.id}>
        <p>name: {fan.name}</p>
        <p>age: {fan.age}</p>
      </li>)}
    </ul>
  )
}

export default Friend