import axios from 'axios'
import { RES_TYPE, User } from '../../typing'

export const APP_URL = 'http://localhost:5001'

export const getTables = async () => {
  const res = await axios.get<{
    data: {
      id: number
      admin: string
      userList: User[]
    }[],
    type: RES_TYPE,
  }>(`${APP_URL}/table/list`)
  return res.data
}

export const joinTable = async (params: {
  id: number
  ind: number
}) => {
  const res = await axios.post<{
    type: RES_TYPE,
  }>(`${APP_URL}/table/join/${params.id}`, {
    ind: params.ind
  })
  return res.data
}

export const createTable = async () => {
  const res = await axios.post<{
    type: RES_TYPE,
  }>(`${APP_URL}/table/create`)
  return res.data
}

export const deleteTable = async (id: number) => {
  const res = await axios.delete<{
    type: RES_TYPE,
  }>(`${APP_URL}/table/${id}`)
  return res.data
}


