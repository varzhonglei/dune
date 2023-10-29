import useSWR from 'swr'
import { getTables } from '../../libs/api/table'


export const useTables = () => {
  return useSWR('useTables', getTables)
}
