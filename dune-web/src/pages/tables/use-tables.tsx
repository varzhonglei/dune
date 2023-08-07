import useSWR, { mutate } from 'swr'
import { getTables } from '../../libs/api/table'
import { addMessageHandler } from '../../libs/socket'
import { MessageType } from '../../../../common/typing/socket'
import { useParams } from 'react-router-dom'

const getTableIdFromUrl = (url: string) => {
  const regex = /table\/(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
addMessageHandler<MessageType.tableChange>((message) => {
  if (message.type === MessageType.tableChange) {
    const currentTableId = Number(getTableIdFromUrl(location.href))
    if (currentTableId && message.data?.tableId) {
      if (message.data?.tableId === currentTableId){
        mutate('useTables')
      } else {
        return
      }
    }
  }
  mutate('useTables')
})


export const useTables = () => {
  return useSWR('useTables', getTables)
}

export const useCurrentTableBasicInfo = () => {
  const { id: tableId } = useParams()
  const { data:tables } = useTables()
  const table = tables?.data?.find(t => t.id === Number(tableId))
  return table
}