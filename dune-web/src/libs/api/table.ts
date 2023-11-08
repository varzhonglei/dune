import axios from 'axios'
import { User } from '../../typing'
import { APP_BE_URL } from '../const'
import { RES_TYPE } from '../../../../common/typing/rest-req'



export const getTables = async () => {
  const res = await axios.get<{
    data: {
      id: number
      userList: User[]
    }[],
    type: RES_TYPE,
  }>(`${APP_BE_URL}/table/list`)
  return res.data
}

export const joinTable = async (params: {
  id: number
  ind: number
}) => {
  const res = await axios.post<{
    type: RES_TYPE,
  }>(`${APP_BE_URL}/table/join/${params.id}`, {
    ind: params.ind
  })
  return res.data
}

export const createTable = async () => {
  const res = await axios.post<{
    type: RES_TYPE,
  }>(`${APP_BE_URL}/table/create`)
  return res.data
}

export const deleteTable = async (id: number) => {
  const res = await axios.delete<{
    type: RES_TYPE,
  }>(`${APP_BE_URL}/table/${id}`)
  return res.data
}


