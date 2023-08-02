import { User } from "../typing/user"

export let userList: User[] = []
export const setUserList = (l:  User[]) => {
  if (l && Array.isArray(l)) {
    userList = l
  }
}
 
