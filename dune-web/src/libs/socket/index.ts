import { useEffect } from "react"
import { getToken, useToken } from "../auth"
import { socket_URL } from "../const";
import { MessageType, TMessage } from '../../../../common/typing/socket'

export let socket: WebSocket | undefined
type TMessageHandle<T extends MessageType> = (message: TMessage<T>) => void
const handlers:TMessageHandle<any>[]= [] 

const maxReconnectAttempts = 30;
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
    // console.log('收到消息:', event.data);
    try {
      // 调用所有的消息处理器
      handlers.forEach(handler => {
        handler(event.data);
      })
    } catch (error) {
      console.error('解析消息出错:', error);
    }
  };

  socket.onclose = (event: any) => {
    console.log('WebSocket连接已关闭');
    if (currentReconnectAttempts < maxReconnectAttempts) {
      // 尝试重新连接
      currentReconnectAttempts++;
      setTimeout(connectWebSocket, reconnectInterval);
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