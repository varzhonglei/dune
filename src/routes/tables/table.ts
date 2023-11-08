import express from "express"
import { TypedRequestAny, TypedRequestBody, TypedResponse } from "../../typing/req"
import { addTable, deleteTable, tableListStore } from "../../round-table/tables"
import { userList } from "../../round-table/users"
import { getUserName } from "../../utils/tools"
import { sendTableChange } from "./sendTableChange"
import { RES_TYPE } from "../../../common/typing/rest-req"
import { verifyToken } from "../middleware/verify"
 
export const tableRouter = express.Router()

tableRouter.get('/list', async (req: TypedRequestAny, res: TypedResponse) => {
  const tables = tableListStore.map(t => ({
    id: t.id,
    userList: t.getState().dashboards?.map(d => d.user)
  }))

  res.status(200).send({
    data: tables,
    type: RES_TYPE.success,
  })
})

tableRouter.post('/create', verifyToken, async (req: TypedRequestAny, res: TypedResponse,) => {
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

tableRouter.delete('/:id', verifyToken, async (req: TypedRequestAny, res: TypedResponse) => {
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
// quit the table
const joinTable = (id: number, name: string, ind: number) => {
  const table = tableListStore.find(t => t.id === id)
  let res: string | RES_TYPE = RES_TYPE.success
  if (table) {
    table.store.setState(draft => {
      const user = userList.find(u => u.name === name)
      if (user) {
        const oldIndex = draft.dashboards.findIndex(d => d.user?.name === name)
        const thePerson = draft.dashboards[ind]?.user
        if (thePerson && thePerson?.name !== name) {
          res = '这个位置已经有人了'
          return 
        }
        if (oldIndex === -1 ) {
          // join
          draft.dashboards[ind].user = user
        } else {
          // 换座位
          draft.dashboards[ind].user = user

          draft.dashboards[oldIndex].user = undefined
        }
      }
    })
  }
  return res
}

tableRouter.post('/join/:id', verifyToken, async (req:TypedRequestBody<{ ind: number }>, res: TypedResponse) => {
  const id = Number(req.params.id)
  const ind = req.body.ind
  const name = getUserName(req) || ''
  if (!id || typeof ind !== 'number') {
    return  res.status(400).send({
      type: RES_TYPE.error,
      message: 'wrong id or ind'
    })
  }
  const r = joinTable(id, name, ind)
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

