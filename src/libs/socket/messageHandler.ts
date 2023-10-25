import WebSocket from "ws"
import { MessageType, TMessage } from "../../../common/typing/socket"
import { tableListStore } from "../../round-table/tables"
import { sendMessage, sendTableMessage } from "./socket"
import { userList } from "../../round-table/users"
import { checkAllReadyAndSetup, someoneReady } from "../../one-game/userActionsHandler/gameSet"
import { getUserNameFromToken } from "../../utils/tools"
import { clearSecretInfo } from "./data-processor"
import { userActionsHandler } from "../../one-game/userActionsHandler"

const getTableById = (id: number) => tableListStore.find(t => t.id === id)

export const messageHandler = (message: TMessage<any>, ws: WebSocket, clients: Map<string, WebSocket>) => {
  const { type } = message

  const { data } = message as TMessage<MessageType.tokenBack>
  const theUserName = getUserNameFromToken(data.token)
  const u = userList.find(u => u.name === theUserName) 
  if (!u) {
    ws.send(JSON.stringify({
      type: MessageType.unauthorized,
    }))
    return 
  } 

  if (type === MessageType.tokenBack) {
    if (u) {
      clients.set(theUserName, ws)
    } else {
      ws.send(JSON.stringify({
        type: MessageType.unauthorized,
      }))
    }

  } else if (type === MessageType.reqData) {
    const { data } = message as TMessage<MessageType.reqData>
    const table = getTableById(data.tableId)
    if (table) {
      sendMessage({
        name: theUserName,
        body: {
          type: MessageType.data,
          data: {
            game: clearSecretInfo(table.getState()),
            storeIndex: table.getStoreIndex()
          }
        }
      })
    }

  } else if (type === MessageType.iAmReady) {
    const { data } = message as TMessage<MessageType.iAmReady>
    const table =  getTableById(data.tableId)
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


  } else if (type === MessageType.userAction) {
    const { data } = message as TMessage<MessageType.userAction>
    const table =  getTableById(data.tableId)
    
    if (table && data.storeIndex !== table.getStoreIndex()) {
      // the user client is not up to date
      sendMessage({
        name: theUserName,
        body: {
          type: MessageType.data,
          data: {
            game: clearSecretInfo(table.getState()),
            storeIndex: table.getStoreIndex()
          }
        }
      })
    }

    if (table && theUserName) { 
      userActionsHandler({
        table,
        name: theUserName,
        actionType: data.actionType,
        payload: data.payload,
      })
    }
  }
}
