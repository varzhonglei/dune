import { useEffect } from 'react'
import { initialGame } from '../../../../common/game'
import { MessageType } from '../../../../common/typing/socket'
import { createSyncExternalAtom, useSyncExternalState } from '../hooks/useSyncStore'
import { addMessageHandler, sendMessage } from '../socket'
import { useParams } from 'react-router-dom'
import { getToken } from '../auth'
import { getTableIdFromUrl } from '../utils/common'

export const gameStore = createSyncExternalAtom(initialGame)
export const useGame = () => useSyncExternalState(gameStore)


export const gameStoreKey = createSyncExternalAtom(1)
export const useQueryKey = () => useSyncExternalState(gameStoreKey)
export const useGameSubscribe = () => {
  const { id: tableId } = useParams()
  const queryKey = useQueryKey()
  useEffect(() => {
    if (tableId) {
      sendMessage({
        type: MessageType.reqData,
        data: {
          tableId: Number(tableId),
          token: getToken()
        }
      })
    }
  }, [tableId, queryKey])
}


addMessageHandler<MessageType.data>((message) => {
  if (message.type === MessageType.data && message.data) {
    gameStore.setState(message?.data?.game)
  }
})

addMessageHandler<MessageType.tableChange>((message) => {
  if (message.type === MessageType.tableChange) {
    const currentTableId = Number(getTableIdFromUrl(location.href))
    if (currentTableId === message.data?.tableId) {
      gameStoreKey.setState(old => old + 1)
    } 
  }
})

addMessageHandler<MessageType.someoneReady>((message) => {
  if (message.type === MessageType.someoneReady) {
    const user = message.data?.user
    if (user) {
      gameStore.setStateImmer(old => {
        const d = old.dashboards?.find(d => d.user?.token === user.token)
        if (d) {
          d.user = user
        }
      })
    }
  }
})