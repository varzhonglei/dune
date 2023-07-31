import { User } from "../typing/user"

export let userList: User[] = []
export const setUserList = (l:  User[]) => {
  userList = l
}
 
