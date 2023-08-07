import { initialGame } from '../../../../../common/game'
import { MessageType } from '../../../../../common/typing/socket'
import { createSyncExternalAtom, useSyncExternalState } from '../../../libs/hooks/useSyncStore'
import { addMessageHandler } from '../../../libs/socket'

export const gameStore = createSyncExternalAtom(initialGame)
export const useGame = () => useSyncExternalState(gameStore)

addMessageHandler<MessageType.data>((receivedData) => {
  if (receivedData.type === MessageType.data && receivedData.data) {
    gameStore.setState(receivedData?.data)
  }
})
