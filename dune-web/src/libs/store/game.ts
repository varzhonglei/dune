import { useEffect } from 'react'
import { initialGame } from '../../../../common/game'
import { MessageType } from '../../../../common/typing/socket'
import { createSyncExternalAtom, useSyncExternalState } from '../hooks/useSyncStore'
import { addMessageHandler, sendMessage } from '../socket'
import { useParams } from 'react-router-dom'
import { getTableIdFromUrl } from '../utils/common'

export const gameStore = createSyncExternalAtom(initialGame)
export const useGame = () => useSyncExternalState(gameStore)

let storeIndex = '-'

export const getStoreIndex = () => storeIndex

export const queryKeyStore = createSyncExternalAtom(1)
export const useQueryKey = () => useSyncExternalState(queryKeyStore)
export const useGameSubscribe = () => {
  const { id: tableId } = useParams()
  const queryKey = useQueryKey()
  useEffect(() => {
    if (tableId) {
      sendMessage({
        type: MessageType.reqData,
        data: {
          tableId: Number(tableId),
        }
      })
    }
  }, [tableId, queryKey])
}


addMessageHandler<MessageType.data>((message) => {
  if (message.type === MessageType.data && message.data) {
    gameStore.setState(message?.data?.game)
    storeIndex = message.data.storeIndex
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