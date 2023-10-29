import express from "express"
import jwt from "jsonwebtoken";
import { TypedRequestBody, TypedResponse } from "../typing/req"
import { userList } from "../round-table/users"
import { dbKey, jdb } from "../store/json-db"
import { RES_TYPE } from "../../common/typing/rest-req";
import { secret } from "./middleware/verify"

const DuplicateName = 'username already exist'

export const userRouter = express.Router()

userRouter.post('/create', async (req:TypedRequestBody<{ name: string }>, res: TypedResponse, next) => {
  const name = req.body.name || ''
  const user = {
    name,
  }
  const allNames = userList.map(u => u.name)
  if (allNames.includes(name)) {
    return res.status(400).send({
      type: RES_TYPE.error,
      message: DuplicateName
    })
  }
  const token = generateJwtToken(user)
  userList.push({
    name,
  })
  jdb.save(dbKey.users, userList)
  res.status(200).send({
    data: token,
    type: RES_TYPE.success,
  })
})



function generateJwtToken(payload: {
  name: string
}): string {
  const expiresIn = "1999999D";
  return jwt.sign(payload, secret, { expiresIn });
}
