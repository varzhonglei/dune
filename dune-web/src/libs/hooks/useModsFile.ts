import { ModFile, db } from "../db"
import { useEffect, useState } from "react"
import { createSyncExternalAtom, useSyncExternalState } from "./useSyncStore"
import { unzipFile } from "../file"
import { unionBy } from "lodash"
import { modsFileName } from "../const"

const keyState = createSyncExternalAtom(1)

export const mutateModsFromBD = () => keyState.setState(old => old + 1)

export const useModsFile = () => {
  const key = useSyncExternalState(keyState)
  const [res, setRes] = useState<{
    loading:boolean,
    files: ModFile[],
  }>({
    loading: false,
    files: [],
  })
  useEffect(() => {
    const fun = async () => {
      setRes({
        loading: true,
        files: [],
      })
      try {
        const fs = await db.files.where('name').equals(modsFileName).toArray() 
        setRes({
          loading: false,
          files: fs,
        })
      } catch (error) {
        setRes({
          loading: false,
          files: [],
        })
      }
    }
    fun()
  }, [key])
  return res
}

type TMod = {
  file: Blob,
  name: string,
}


export const modsState = createSyncExternalAtom([] as TMod[])
export const useModsState = () => useSyncExternalState(modsState)
const modsLoadingState = createSyncExternalAtom(false)
const modsLoadProgressState = createSyncExternalAtom(0)

export const useModsWithLoading = () => {
  const { files } = useModsFile()
  const modsZip = files?.[0]
  const hasMods = modsZip?.name === modsFileName
  const mods = useModsState()
  const modsLoading = useSyncExternalState(modsLoadingState)
  const modsLoadProgress = useSyncExternalState(modsLoadProgressState)

  useEffect(() => {
    if (!modsLoading && hasMods && mods.length === 0 ) {
      modsLoadProgressState.setState(0)
      modsLoadingState.setState(true)
      unzipFile({
        file: modsZip.file,
        onProgress: (p) => modsLoadProgressState.setState(p),
        onFinishCallback: (res) => {
          modsState.setState(unionBy(res, 'name'))
          modsLoadProgressState.setState(100)
          modsLoadingState.setState(false)
        }
      })
    }
  }, [mods, modsLoading, hasMods, modsZip?.file])
  return {
    modsLoadProgress: modsLoadProgress,
    mods,
  }
}

export const useMods = () => {
  const mods = useModsState()
  return mods
}