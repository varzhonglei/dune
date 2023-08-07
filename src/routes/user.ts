import express from "express"
import jwt from "jsonwebtoken";
import {  TypedRequestBody, TypedResponse } from "../typing/req"
import { userList } from "../round-table/users"
import { dbKey, jdb } from "../store/json-db"
import { RES_TYPE } from "../../common/typing/rest-req";

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
    token
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
  const secret = "mysecretkey-ben";
  const expiresIn = "1000Y";
  return jwt.sign(payload, secret, { expiresIn });
}
