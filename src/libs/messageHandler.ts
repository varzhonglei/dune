import WebSocket from "ws"
import { MessageType, TMessage } from "../../common/typing/socket"
import { tableListStore } from "../round-table/tables"
import { sendMessage, sendTableMessage } from "./socket"
import { userList } from "../round-table/users"
import { checkAllReadyAndSetup, someoneReady } from "../one-game/userActionsHandler/gameSet"

export const messageHandler = (message: TMessage<any>, ws: WebSocket, clients: Map<string, WebSocket>) => {
  const { type } = message
  if (type === MessageType.tokenBack) {
    const { data } = message as TMessage<MessageType.tokenBack>
    const u = userList.find(u => u.token === data.token) 
    if (u) {
      clients.set(data.token, ws)
    } else {
      ws.send(JSON.stringify({
        type: MessageType.unauthorized,
      }))
    }

  } else if (type === MessageType.reqData) {
    const { data } = message as TMessage<MessageType.reqData>
    const table = tableListStore.find(t => t.id === data.tableId)

    if (table) {
      sendMessage({
        token: data.token,
        body: {
          type: MessageType.data,
          data: {
            game: table.getState(),
            storeIndex: table.getStoreIndex()
          }
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
            user: table.getState().dashboards.find(d => d.user?.token === data?.token)?.user
          }
        }
      })
      // 如果全员准备，直接开始
      checkAllReadyAndSetup(table)
    }
  }
}
