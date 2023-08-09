import WebSocket from "ws"
import { MessageType, TMessage } from "../../common/typing/socket"
import { tableListStore } from "../round-table/tables"
import { sendMessage, sendTableMessage } from "./socket"
import { userList } from "../round-table/users"
import { checkAllReadyAndSetup, someoneReady } from "../one-game/userActionsHandler/gameSet"

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
      sendMessage({
        token: data.token,
        body: {
          type: MessageType.data,
          data: game
        }
      })
    }
  } else if (type === MessageType.iAmReady) {
    const { data } = message as TMessage<MessageType.iAmReady>
    const table = tableListStore.find(t => t.id === data.tableId)
    if (table && data.token) {
      someoneReady(table, data.token)
      sendTableMessage({
        tableId: table.id,
        body: {
          type: MessageType.someoneReady,
          data: {
            user: table?.store?.getState().dashboards.find(d => d.user?.token === data?.token)?.user
          }
        }
      })
      // 如果全员准备，直接开始
      checkAllReadyAndSetup(table)
    }
  }
}
