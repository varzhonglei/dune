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

export const useModsWithLoading = () => {
  const { files, loading: loadFormIndexDB } = useModsFile()
  const modsZip = files?.[0]
  const hasMods = modsZip?.name === 'mods.zip'
  const navigate = useNavigate()
  useEffect(() => {
    if (!loadFormIndexDB && !hasMods) {
      navigate(ROUTES.home)
    }
  }, [loadFormIndexDB, hasMods, navigate])

  const mods = useModsStore()
  const [modsLoading, setModsLoading] = useState(false)
  const [modsLoadProgress, setProgress] = useState(0)
  useEffect(() => {
    if (mods.length < modNumber && !modsLoading && modsZip && hasMods) {
      setProgress(0)
      setModsLoading(true)
      unzipFile({
        file: modsZip.file,
        onProgress: (p) => setProgress(p),
        onFinishCallback: (res) => {
          modsStore.setState(unionBy(res, 'name'))
          setProgress(100)
          setModsLoading(false)
        }
      })
    }
  }, [mods, modsLoading, hasMods, modsZip])
  return {
    modsLoadProgress: modsLoadProgress,
    mods,
  }
}

export const useMods = () => {
  const mods = useModsStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (mods.length !== modNumber) {
      navigate(ROUTES.home)
    }
  }, [mods, navigate])
  return mods
}