import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../db"


export const useModsFile = () => {
  const files = useLiveQuery(
    () => db.files.where('name').equals('mods.zip').toArray()
  )
  return files
}