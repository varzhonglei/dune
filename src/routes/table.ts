import express from "express"
import { RES_TYPE, TypedResponse } from "../typing/req"
import { tableListStore } from "../round-table/tables"
import { getUserToken } from "../utils/route-util"
import { userList } from "../round-table/users"



export const tableRouter = express.Router()

tableRouter.get('/list', async (req, res: TypedResponse, next) => {
  const tables = tableListStore.map(t => ({
    userList: t.store.getState().users
  }))

  res.status(200).send({
    data: tables,
    type: RES_TYPE.success,
  })
})

const joinTable = (id: number, token: string) => {
  const table = tableListStore.find(t => t.id === id)
  if (table) {
    table.store.setState(draft => {
      const user = userList.find(u => u.token === token)
      if (user) {
        draft.dashboards[draft.users.length].user = user
        draft.users.push(user)
      }
    })
  }
}

tableRouter.post('/join/:id', async (req, res: TypedResponse, next) => {
  const id = Number(req.params.id)
  const token = getUserToken(req) 
  if (!id) {
    return  res.status(400).send({
      type: RES_TYPE.error,
      message: 'missing table id'
    })
  }
  joinTable(id, token)
  res.status(200).send({
    data: '',
    type: RES_TYPE.success,
  })
})

