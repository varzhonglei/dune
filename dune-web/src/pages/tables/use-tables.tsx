import useSWR, { mutate } from 'swr'
import { getTables } from '../../libs/api/table'
import { addMessageHandler } from '../../libs/socket'
import { MessageType } from '../../../../common/typing/socket'


addMessageHandler<MessageType.data>((receivedData) => {
  if (receivedData.type === MessageType.tableChange) {
    mutate('useTables')
  }
})


export const useTables = () => {
  return useSWR('useTables', getTables)
}