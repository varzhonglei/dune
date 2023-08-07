import { Request } from "express"
import jwt_decode from "jwt-decode"
import { userList } from "../round-table/users";

export const getUserSub = (req: Request) => {
  const token = req.get('Authorization')
  if (!token) {
    throw new Error("Missing header: Authorization");
  }
  return jwt_decode<{
    sub: string
  }>(token).sub
}


export const getUserToken = (req: Request) => {
  const token = req.get('Authorization')
  const u = userList.find(u => u.token === token)
  if (u) {
    return u.token
  }else {
    return 401
  }
}

