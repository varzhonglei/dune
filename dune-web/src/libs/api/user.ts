import axios from 'axios'
import { APP_BE_URL } from '../const'
import { RES_TYPE } from '../../../../common/typing/rest-req'


export const createUser = async (data: {
  name: string
}) => {
  const res = await axios.post<{
    data: string
    type: RES_TYPE
  }>(`${APP_BE_URL}/user/create`, data)
  return res?.data
}