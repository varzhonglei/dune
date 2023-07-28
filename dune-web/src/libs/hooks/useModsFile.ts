import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../db"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../App"
import { createSyncExternalAtom, useSyncExternalState } from "./useSyncStore"
import { unzipFile } from "../file"
import { unionBy } from "lodash"


export const useModsFile = () => {
  const [loading, setLoading] = useState(true)
  const files = useLiveQuery(
     async() => {
      try {
        setLoading(true)
        const res = await db.files.where('name').equals('mods.zip').toArray()
        setLoading(false)
        return res
      } catch (error) {
        setLoading(false)
      }
     }
  )
  return {
    loading,
    files,
  }
}

type TMod = {
  file: Blob,
  name: string,
}
const modNumber = 231

export const modsStore = createSyncExternalAtom([] as TMod[])
export const useModsStore = () => useSyncExternalState(modsStore)

export const useMods = () => {
  const { files, loading } = useModsFile()
  const modsZip = files?.[0]
  const hasMods = modsZip?.name === 'mods.zip'
  const navigate = useNavigate()
  useEffect(() => {
    if (!loading && !hasMods) {
      navigate(ROUTES.home)
    }
  }, [loading, hasMods, navigate])

  const mods = useModsStore()
  const [modsLoading, setModsLoading] = useState(false)
  useEffect(() => {
    if (mods.length < modNumber && !modsLoading && modsZip && hasMods) {
      unzipFile({
        file: modsZip.file,
        onFinishCallback: (res) => {
          modsStore.setState(unionBy(res, 'name'))
        }
      })
    }
  }, [mods, modsLoading, hasMods, modsZip])
}