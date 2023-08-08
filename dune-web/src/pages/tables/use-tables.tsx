import useSWR, { mutate } from 'swr'
import { getTables } from '../../libs/api/table'
import { addMessageHandler } from '../../libs/socket'
import { MessageType } from '../../../../common/typing/socket'
import { getTableIdFromUrl } from '../../libs/utils/common'

addMessageHandler<MessageType.tableChange>((message) => {
  if (message.type === MessageType.tableChange) {
    const currentTableId = Number(getTableIdFromUrl(location.href))
    if (!currentTableId) {
      mutate('useTables')
    }
  }
})

export const useTables = () => {
  return useSWR('useTables', getTables)
}
