import { User } from "../typing/user"
import { tableListStore } from "./tables"



export const joinTable = (id: number, user: User) => {
  const table = tableListStore.find(t => t.id === id)
  if (table) {
    table.users.push(user)
  }
}