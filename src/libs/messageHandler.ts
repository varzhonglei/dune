import WebSocket from "ws"
import { MessageType, TMessage } from "../../common/typing/socket"
import { tableListStore } from "../round-table/tables"
import { sendMessage, sendTableMessage } from "./socket"
import { userList } from "../round-table/users"
import { checkAllReadyAndSetup, someoneReady } from "../one-game/userActionsHandler/gameSet"
import { getUserNameFromToken } from "../utils/tools"

export const messageHandler = (message: TMessage<any>, ws: WebSocket, clients: Map<string, WebSocket>) => {
  const { type } = message
  if (type === MessageType.tokenBack) {
    const { data } = message as TMessage<MessageType.tokenBack>
    const theUserName = getUserNameFromToken(data.token)
    const u = userList.find(u => u.name === theUserName) 
    if (u) {
      clients.set(theUserName, ws)
    } else {
      ws.send(JSON.stringify({
        type: MessageType.unauthorized,
      }))
    }

  } else if (type === MessageType.reqData) {
    const { data } = message as TMessage<MessageType.reqData>
    const table = tableListStore.find(t => t.id === data.tableId)
    const theUserName = getUserNameFromToken(data.token)
    if (table) {
      sendMessage({
        name: theUserName,
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
    const theUserName = getUserNameFromToken(data.token)
    if (table && theUserName) {
      someoneReady(table, theUserName)
      sendTableMessage({
        tableId: table.id,
        body: {
          type: MessageType.someoneReady,
          data: {
            user: table.getState().dashboards.find(d => d.user?.name === theUserName)?.user
          }
        }
      })
      // 如果全员准备，直接开始
      checkAllReadyAndSetup(table)
    }
  }
}
