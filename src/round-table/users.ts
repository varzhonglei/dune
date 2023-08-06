import { User } from "../../common/typing/user"

export let userList: User[] = []
export const setUserList = (l:  User[]) => {
  if (l && Array.isArray(l)) {
    userList = l
  }
}
 
