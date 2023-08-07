import { useEffect } from "react"
import { clearToken, getToken, useToken } from "../auth"
import { socket_URL } from "../const";
import { MessageType, TMessage } from '../../../../common/typing/socket'
import { addToast } from "../../components/alert";

export let socket: WebSocket | undefined
type TMessageHandle<T extends MessageType> = (message: TMessage<T>) => void
const handlers:TMessageHandle<any>[]= [] 

const maxReconnectAttempts = 10000;
let currentReconnectAttempts = 0;
const reconnectInterval = 3000; // 重连间隔时间（毫秒）

function connectWebSocket() {
  socket = new WebSocket(socket_URL);

  socket.onopen = () => {
    console.log('WebSocket连接已建立');
    currentReconnectAttempts = 0; // 重置重连尝试次数
    sendToken(); // 连接建立后发送token
  };

  socket.onmessage = (event: any) => {
    try {
      // 调用所有的消息处理器
      const data = JSON.parse(event.data)
      handlers.forEach(handler => {
        handler(data)
      })
    } catch (error) {
      console.error('解析消息出错:', error);
    }
  };

  socket.onclose = (event: any) => {
    console.log('WebSocket连接已关闭');
    if (currentReconnectAttempts < maxReconnectAttempts) {
      // 尝试重新连接
      if (getToken()) {
        currentReconnectAttempts++;
        setTimeout(connectWebSocket, reconnectInterval);
      }
      
    } else {
      console.log('已达到最大重连次数');
    }
  };

  socket.onerror = (error: any) => {
    console.error('WebSocket出现错误:', error);
  };
}

// 发送token给服务端
function sendToken() {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ 
      data: getToken(),
      type: MessageType.token
    }));
  }
}

export const sendMessage = <T extends MessageType>(body: TMessage<T>) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(body));
  }
}

export function addMessageHandler<T extends MessageType>(handler: TMessageHandle<T>) {
  handlers.push(handler)
}

export const useSocket = () => {
  const token = useToken()
  useEffect(() => {
    token && connectWebSocket()
  }, [token])
}

addMessageHandler((message) => {
  if (message.type === MessageType.unauthorized) {
    addToast({
      text: '认证已经过期，请重新创建角色',
      type: 'danger'
    })
    clearToken()
    socket?.close()
  }
})