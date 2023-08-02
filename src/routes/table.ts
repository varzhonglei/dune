import express from "express"
import { RES_TYPE, TypedRequestBody, TypedResponse } from "../typing/req"
import { tableListStore } from "../round-table/tables"
import { getUserToken } from "../utils/route-util"
import { userList } from "../round-table/users"

export const tableRouter = express.Router()

tableRouter.get('/list', async (req, res: TypedResponse, next) => {
  const tables = tableListStore.map(t => ({
    id: t.id,
    userList: t.store.getState().users
  }))

  res.status(200).send({
    data: tables,
    type: RES_TYPE.success,
  })
})

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


// join  
// move 
// quit the table: join 现在的位置（ind）会自动退出该座位
tableRouter.post('/join/:id', async (req:TypedRequestBody<{ ind: number }>, res: TypedResponse, next) => {
  const id = Number(req.params.id)
  const ind = req.body.ind
  const token = getUserToken(req) 
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

