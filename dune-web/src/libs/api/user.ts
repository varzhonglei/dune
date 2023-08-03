import axios from 'axios'
import { RES_TYPE } from '../../typing'
import { APP_BE_URL } from '../const'


export const createUser = async (data: {
  name: string
}) => {
  const res = await axios.post<{
    data: string
    type: RES_TYPE
  }>(`${APP_BE_URL}/user/create`, data)
  return res?.data
}