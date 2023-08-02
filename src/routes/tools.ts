import { Request } from "express";
import jwt_decode from 'jwt-decode'

export const getUserName = (req: Request) => {
    const token = req.get('Authorization')
    if (!token) {
      return ''
    }else {
      try {
        const v = jwt_decode<{
          name: string
        }>(token)
        return v.name
      } catch (error) {
        // skip
      }
    }
  }
  