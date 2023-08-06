import WebSocket from 'ws'
import { socketProt } from './const'
import { MessageType, TMessage } from '../../common/typing/socket'
import { tableListStore } from '../round-table/tables'

const wss = new WebSocket.Server({ port: socketProt })

// 用于存储客户端连接的映射关系
const clients = new Map<string, WebSocket>();

const initWS  = () => {
  wss.on('connection', (ws) => {
    console.log('WebSocket连接已建立');
    ws.on('message', (message) => {
      console.log('收到消息:', message);
      // 将Buffer转换为字符串
      const messageString = message.toString();
      try {
        const parsedMessage = JSON.parse(messageString)
        messageHandler(parsedMessage, ws)

      } catch (error) {
        console.error('解析消息出错:', error);
      }
    })
    ws.on('close', () => {
      console.log('WebSocket连接已关闭');
      // 从客户端连接映射中移除断开连接的客户端
      clients.forEach((client, key) => {
        if (client === ws) {
          clients.delete(key);
        }
      });
    });
    ws.on('error', (error) => {
      console.error('WebSocket出现错误:', error);
    })
  })
}

const messageHandler = (message: TMessage<any>, ws: WebSocket) => {
  const { type } = message
  if (type === MessageType.token) {
    const { data } = message as TMessage<MessageType.token>
    clients.set(data, ws);
  } else if (type === MessageType.reqData) {
    //todo 
    // sendMessage()
  }
}

const sendMessage = <T extends MessageType>(params: {
  token: string,
  body: TMessage<T>
}) => {
  const s = clients.get(params.token)
  if (s) {
    s.send(JSON.stringify(params.body));
  }
}

const sendTableMessage = <T extends MessageType>(params: {
  tableId: number,
  data: TMessage<T>
}) => {
  const table = tableListStore.find(t => t.id === params.tableId)
  if (table) {
    const game = table.store.getState()
    game.users.forEach(u => {
      if (u?.token) {
        sendMessage<T>({
          token: u.token,
          body: params.data
        })
      }
    })
  }
}

export  {
  initWS,
  sendMessage,
  sendTableMessage
}

