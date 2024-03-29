import WebSocket from 'ws'
import { socketProt } from '../const'
import { MessageType, TMessage } from '../../../common/typing/socket'
import { tableListStore } from '../../round-table/tables'
import { messageHandler } from './messageHandler'

const wss = new WebSocket.Server({ port: socketProt })

// 用于存储客户端连接的映射关系
const clients = new Map<string, WebSocket>();

const initWS  = () => {
  wss.on('connection', (ws) => {
    // console.log(`ws 建立, 数量：${wss.clients.size}`);
    ws.on('message', (message) => {
      // 将Buffer转换为字符串
      const messageString = message.toString();
      // console.log('收到消息:', messageString);
      try {
        const parsedMessage = JSON.parse(messageString)
        messageHandler(parsedMessage, ws, clients)
      } catch (error) {
        console.error('解析消息出错:', error);
      }
    })
    ws.on('close', () => {
      // console.log(`ws 关闭, 数量：${wss.clients.size}`);
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
// setInterval(() => {
//   const memoryUsage = process.memoryUsage();
//   const memoryUsageMB = {
//     rss: Math.round(memoryUsage.rss / 1024 / 1024),
//     heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024),
//     heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024),
//     external: Math.round(memoryUsage.external / 1024 / 1024)
//   };
//   console.log('memoryUsageMB:',memoryUsageMB);
//   console.log(`ws 数量：${wss.clients.size}`);
// }, 1000 * 60)


const sendMessage = <T extends MessageType>(params: {
  name: string,
  body: TMessage<T>
}) => {
  const s = clients.get(params.name)
  if (s) {
    s.send(JSON.stringify(params.body));
  }
}

const sendTableMessage = <T extends MessageType>(params: {
  tableId: number,
  body: TMessage<T>
}) => {
  const table = tableListStore.find(t => t.id === params.tableId)
  if (table) {
    const game = table.getState()
    game.dashboards.forEach(d => {
      if (d.user?.name) {
        sendMessage<T>({
          name: d.user?.name,
          body: params.body
        })
      }
    })
  }
}

const sendMessage2All = <T extends MessageType>(body: TMessage<T>) => {
  for (const key of clients.keys()) {
    sendMessage<T>({
      name: key,
      body: body
    })
  }
}

export  {
  clients,
  initWS,
  sendMessage,
  sendTableMessage,
  sendMessage2All
}

