import { Request } from "express"
import jwt_decode from "jwt-decode"

export const getUserSub = (req: Request) => {
  const token = req.get('Authorization')
  if (!token) {
    throw new Error("Missing header: Authorization");
  }
  return jwt_decode<{
    sub: string
  }>(token).sub
}

