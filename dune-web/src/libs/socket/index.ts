import { useEffect } from "react"
import { getToken, useToken } from "../auth"
import { socket_URL } from "../const";
import { MessageType } from '../../../../common/typing/socket'

let socket: any = null;
const maxReconnectAttempts = 20;
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
    console.log('收到消息:', event.data);
    // 处理接收到的消息
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

export const useSocket = () => {
  const token = useToken()
  useEffect(() => {
    token && connectWebSocket()
  }, [token])
}