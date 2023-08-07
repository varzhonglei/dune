import WebSocket from "ws"
import { MessageType, TMessage } from "../../common/typing/socket"
import { tableListStore } from "../round-table/tables"
import { sendMessage } from "./socket"
import { userList } from "../round-table/users"
// import { writeJSON } from "fs-extra"

export const messageHandler = (message: TMessage<any>, ws: WebSocket, clients: Map<string, WebSocket>) => {
  const { type } = message
  if (type === MessageType.token) {
    const { data } = message as TMessage<MessageType.token>
    const u = userList.find(u => u.token === data) 
    if (u) {
      clients.set(data, ws)
    } else {
      ws.send(JSON.stringify({
        type: MessageType.unauthorized,
      }))
    }

  } else if (type === MessageType.reqData) {
    const { data } = message as TMessage<MessageType.reqData>
    const table = tableListStore.find(t => t.id === data.tableId)

    if (table) {
      const game = table.store.getState()
      // try {
      //   writeJSON('/Users/zhonglei/workplace/forge-king/json-db/log.json', game)
      // } catch (error) {
      //   //
      // }
      sendMessage({
        token: data.token,
        body: {
          type: MessageType.data,
          data: game
        }
      })
    }
  }
}
