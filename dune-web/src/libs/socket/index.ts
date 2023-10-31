import { useEffect } from "react"
import { clearToken, getMyName, getToken, useToken } from "../auth"
import { socket_URL } from "../const";
import { MessageType, TMessage, TMessageData } from '../../../../common/typing/socket'
import { addToast } from "../../components/alert";
import { gameStore, getStoreIndex, queryKeyStore, setStoreIndex } from "../store/game";
import { getTableIdFromUrl } from "../utils/common";
import { mutate } from "swr";

export let socket: WebSocket | undefined
type TMessageHandle<T extends MessageType> = (message: TMessage<T>) => void
export const handlers:TMessageHandle<any>[]= [] 

const maxReconnectAttempts = 10000;
let currentReconnectAttempts = 0;
const reconnectInterval = 3000; // 重连间隔时间（毫秒）
// WebSocket.CONNECTING (0): 这是初始状态，表示 WebSocket 连接正在建立中。当创建了 WebSocket 实例，但尚未建立连接时，它的 readyState 值为 CONNECTING。

// WebSocket.OPEN (1): 当 WebSocket 连接成功建立时，readyState 的值将变为 OPEN。在这个状态下，可以通过 WebSocket 实例发送和接收数据。

// WebSocket.CLOSING (2): 当 WebSocket 连接正在关闭过程中时，readyState 的值将变为 CLOSING。这表示连接正在进行关闭握手，但尚未完全关闭。

// WebSocket.CLOSED (3): 当 WebSocket 连接已经关闭时，readyState 的值将变为 CLOSED。在这个状态下，无法发送或接收数据，且连接无法重新打开。
function connectWebSocket() {
  if (socket?.readyState === 1) {
    return
  }
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
  sendMessage({
    type: MessageType.tokenBack,
    data: {
      token: getToken(),
    }
  })
}

export const sendMessage = <T extends MessageType>(body: {
  type: T
  data:  Omit<TMessageData<T>, 'token'>
}) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      type: body.type,
      data: {
        ...body.data,
        token: getToken(),
      }
    }));
  }
}



export const userActionMessage =(data: Omit<TMessageData<MessageType.userAction>, 'token' | 'storeIndex' | 'name'>) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(
      {
        type: MessageType.userAction,
        data: {
          ...data,
          token: getToken(),
          storeIndex: getStoreIndex(),
          name: getMyName()
        }
      }));
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
  useEffect(() => {
    addMessageHandler<MessageType.data>((message) => {
      if (message.type === MessageType.data && message.data) {
        gameStore.setState(message?.data?.game)
        setStoreIndex(message.data.storeIndex)
      }
    })
    
    addMessageHandler<MessageType.tableChange>((message) => {
      if (message.type === MessageType.tableChange) {
        const currentTableId = Number(getTableIdFromUrl(location.href))
        if (currentTableId === message.data?.tableId) {
          queryKeyStore.setState(old => old + 1)
        } 
      }
    })
    
    addMessageHandler<MessageType.someoneReady>((message) => {
      if (message.type === MessageType.someoneReady) {
        const user = message.data?.user
        if (user) {
          gameStore.setStateImmer(old => {
            const d = old.dashboards?.find(d => d.user?.name === user.name)
            if (d) {
              d.user = user
            }
          })
        }
      }
    })
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

    addMessageHandler<MessageType.tableChange>((message) => {
      if (message.type === MessageType.tableChange) {
        const currentTableId = Number(getTableIdFromUrl(location.href))
        if (!currentTableId) {
          mutate('useTables')
        }
      }
    })
  }, [])
}

