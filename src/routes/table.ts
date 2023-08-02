import express from "express"
import { RES_TYPE, TypedRequestBody, TypedResponse } from "../typing/req"
import { addTable, deleteTable, tableListStore } from "../round-table/tables"
import { getUserToken } from "../utils/route-util"
import { userList } from "../round-table/users"
import { getUserName } from "./tools"
 
export const tableRouter = express.Router()

tableRouter.get('/list', async (req, res: TypedResponse, next) => {
  const tables = tableListStore.map(t => ({
    id: t.id,
    admin: t.admin,
    userList: t.store.getState().users
  }))

  res.status(200).send({
    data: tables,
    type: RES_TYPE.success,
  })
})

tableRouter.post('/create', async (req, res: TypedResponse, next) => {
  const name = getUserName(req)
  if (name) {
    addTable(name)
    res.status(200).send({
      data: '',
      type: RES_TYPE.success,
    })
  }
})

tableRouter.delete('/:id', async (req, res: TypedResponse, next) => {
  const name = getUserName(req)
  const id = Number(req.params.id)
  if (name && id) {
    deleteTable(name, id)
    res.status(200).send({
      data: '',
      type: RES_TYPE.success,
    })
  }
})


// join  
// move 
// quit the table: join 现在的位置（ind）会自动退出该座位
const joinTable = (id: number, token: string, ind: number) => {
  const table = tableListStore.find(t => t.id === id)
  if (table) {
    table.store.setState(draft => {
      const user = userList.find(u => u.token === token)
      if (user) {
        const oldIndex = draft.users.findIndex(u => u?.token === token)
        if (oldIndex === -1 ) {
          // join
          draft.dashboards[ind].user = user
          draft.users[ind] = user
        } else {
          // 换座位
          draft.dashboards[ind].user = user
          draft.users[ind] = user

          draft.dashboards[oldIndex].user = undefined
          draft.users[oldIndex] = null
        }
      }
    })
  }
}

tableRouter.post('/join/:id', async (req:TypedRequestBody<{ ind: number }>, res: TypedResponse, next) => {
  const id = Number(req.params.id)
  const ind = req.body.ind
  const token = getUserToken(req) 
  if (!token) {
    return  res.status(401).send({
      type: RES_TYPE.error,
      message: 'unauthorized'
    })
  }
  if (!id || typeof ind !== 'number') {
    return  res.status(400).send({
      type: RES_TYPE.error,
      message: 'wrang id or ind'
    })
  }
  joinTable(id, token, ind)
  res.status(200).send({
    data: '',
    type: RES_TYPE.success,
  })
})

