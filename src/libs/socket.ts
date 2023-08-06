import WebSocket from 'ws'
import { socketProt } from './const'
import { MessageType } from '../../common/typing/socket'
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
        const parsedMessage = JSON.parse(messageString);
        const { type, data } = parsedMessage
        if (type === MessageType.token) {
          clients.set(data, ws);
        }
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

const sendMessage = (params: {
  token: string,
  data: any
}) => {
  const s = clients.get(params.token)
  if (s) {
    s.send(JSON.stringify({ data:params.data, type: MessageType.data }));
  }
}

const sendTableMessage = (params: {
  tableId: number,
  data?: any
}) => {
  const table = tableListStore.find(t => t.id === params.tableId)
  if (table) {
    const game = table.store.getState()
    game.users.forEach(u => {
      if (u?.token) {
        sendMessage({
          token: u.token,
          data: params.data || game
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

