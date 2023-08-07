import { useEffect } from 'react'
import { initialGame } from '../../../../../common/game'
import { MessageType } from '../../../../../common/typing/socket'
import { createSyncExternalAtom, useSyncExternalState } from '../../../libs/hooks/useSyncStore'
import { addMessageHandler, sendMessage } from '../../../libs/socket'
import { useParams } from 'react-router-dom'
import { getToken } from '../../../libs/auth'
import { useCurrentTableBasicInfo } from '../../tables/use-tables'

export const gameStore = createSyncExternalAtom(initialGame)
export const useGame = () => useSyncExternalState(gameStore)

export const useGameSubscribe = () => {
  const { id: tableId } = useParams()
  const tableBasicInfo = useCurrentTableBasicInfo()
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
  }, [tableId, tableBasicInfo?.userList?.map(u => u?.name).join()])
}


addMessageHandler<MessageType.data>((message) => {
  if (message.type === MessageType.data && message.data) {
    gameStore.setState(message?.data)
  }
})
