import { outputJson, readJson, readdirSync } from "fs-extra"
import path from "path"
import { dbPath } from "../../utils/path"
import { setUserList } from "../../round-table/users"
import { Game } from "../../../common/game"
import { restoreTables } from "../../round-table/tables"

export enum dbKey {
  'users' = 'users.json'
}


const save = async (fileName: string, data: any) => {
  return await outputJson(path.join(dbPath, fileName), data)
}
const get = async (filename: string) => {
  try {
    const res = await readJson(path.join(dbPath, filename))
    return res
  } catch (error) {
    return null
  }
}

function getTableId(filename: string) {
  const match = filename.match(/table-(\d+)\.json/);
  return Number(match ? match[1] : null)
}

function getJsonFileNames() {
  try {
    const files = readdirSync(dbPath)
    const jsonFiles = files.filter(file => /^table-\d{1,3}\.json$/.test(file));
    return jsonFiles
  } catch (error) {
    console.log('getJsonFiles error', error)
  }
 }

const saveGame = (tableId: number, data: Game) => {
  save(`table-${tableId}.json`, data)
}

const init = async () => {
  const userList = await get(dbKey.users)
  userList && setUserList(userList)
  
  const allTableFileNames = getJsonFileNames()
  if (allTableFileNames) {
    const allData = await Promise.all(
      allTableFileNames.map(fileName => {
        return (async () => {
          const data = await get(fileName)
          return {
            id: getTableId(fileName),
            data,
          }
        })()
      })
    )
    restoreTables(allData)
   
  }
}


export const jdb = {
  save,
  get,
  init,
  saveGame,
}