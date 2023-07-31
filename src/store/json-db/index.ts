import { writeJson, readJson } from "fs-extra"
import path from "path"
import { dbPath } from "../../utils/path"
import { setUserList } from "../../round-table/user/users"
import { setTableList } from "../../round-table/tables"

export enum dbKey {
  'tables' = 'tables',
  'users' = 'users'
}


const save = async (key: dbKey, data: any) => {
  return await writeJson(path.join(dbPath, key), data)
}
const get = async (key: dbKey) => {
  try {
    const res = await readJson(path.join(dbPath, key))
    return res
  } catch (error) {
    return null
  }
}

const init = async () => {
  const userList = await get(dbKey.users)
  setUserList(userList || [])
  const tables = await get(dbKey.tables)
  setTableList(tables)
}


export const jdb = {
  save,
  get,
  init
}