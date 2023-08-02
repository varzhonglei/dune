import axios from 'axios'
import { APP_URL } from './table'
import { RES_TYPE } from '../../typing'


export const createUser = async (data: {
  name: string
}) => {
  const res = await axios.post<{
    data: string
    type: RES_TYPE
  }>(`${APP_URL}/user/create`, data)
  return res?.data
}