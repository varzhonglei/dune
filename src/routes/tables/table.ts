import express from "express"
import { TypedRequestBody, TypedResponse } from "../../typing/req"
import { addTable, deleteTable, tableListStore } from "../../round-table/tables"
import { getUserToken } from "../../utils/route-util"
import { userList } from "../../round-table/users"
import { getUserName } from "../tools"
import { sendTableChange } from "./sendTableChange"
import { RES_TYPE } from "../../../common/typing/rest-req"
 
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
    sendTableChange()
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
    sendTableChange()
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
  let res: string | RES_TYPE = RES_TYPE.success
  if (table) {
    table.store.setState(draft => {
      const user = userList.find(u => u.token === token)
      if (user) {
        const oldIndex = draft.users.findIndex(u => u?.token === token)
        const thePerson = draft.dashboards[ind]?.user
        if (thePerson && thePerson?.token !== token) {
          res = '这个位置已经有人了'
          return 
        }
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
  return res
}

tableRouter.post('/join/:id', async (req:TypedRequestBody<{ ind: number }>, res: TypedResponse, next) => {
  const id = Number(req.params.id)
  const ind = req.body.ind
  const token = getUserToken(req) 
  if (token === 401) {
    return  res.status(401).send({
      type: RES_TYPE.unauthorized,
      message: "unauthorized"
    })
  }
  if (!id || typeof ind !== 'number') {
    return  res.status(400).send({
      type: RES_TYPE.error,
      message: 'wrong id or ind'
    })
  }
  const r = joinTable(id, token, ind)
  if (r === RES_TYPE.success) {
    sendTableChange(id)
    res.status(200).send({
      data: '',
      type: RES_TYPE.success,
    })
  } else {
    res.status(400).send({
      data: '',
      message: r,
      type: RES_TYPE.error,
    })
  }
})

