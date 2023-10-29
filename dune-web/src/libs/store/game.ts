import { useEffect } from 'react'
import { initialGame } from '../../../../common/game'
import { MessageType } from '../../../../common/typing/socket'
import { createSyncExternalAtom, useSyncExternalState } from '../hooks/useSyncStore'
import {  sendMessage } from '../socket'
import { useParams } from 'react-router-dom'

export const gameStore = createSyncExternalAtom(initialGame)
export const useGame = () => useSyncExternalState(gameStore)

let storeIndex = '-'

export const getStoreIndex = () => storeIndex
export const setStoreIndex = (v: string) => storeIndex = v

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


