import { User } from "../typing/user"
import jwt from "jsonwebtoken";

export const userList: User[] = []

export const DuplicateName = 'username already exist'

export const createUser = (name: string): string => {
  const user = {
    name
  }
  const allNames = userList.map(u => u.name)
  if (allNames.includes(name)) {
    return DuplicateName
  }
  const token = generateJwtToken(user)
  userList.push({
    name,
    token
  })
  return token
}

type Payload = {
  name: string
}

function generateJwtToken(payload: Payload): string {
  const secret = "mysecretkey-ben";
  const expiresIn = "30D";
  return jwt.sign(payload, secret, { expiresIn });
}
