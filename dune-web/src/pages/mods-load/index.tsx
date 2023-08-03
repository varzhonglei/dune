import { useState } from "react"
import { saveFileToDB } from "../../libs/file"
import { useModsFile } from "../../libs/hooks/useModsFile"
import styled from "@emotion/styled"
import Icon from '@mdi/react';
import { mdiUpload } from '@mdi/js';
import { CenterLoading } from "../../components/loading"
import { modsFileName } from "../../libs/const"
import { useModLinks } from "./useModLinks"
import { addToast } from "../../components/alert"


const Container = styled.div`
  padding: 30px 20px;
  width: 100%;
  align-items: baseline !important;
`

export const ModsLoad = () => {
  const { files, loading:loadingFromDB } = useModsFile()
  const [curFile, setCurFile] = useState<File | null>(null)
  const save = () => {
    if (!curFile) return
    if (curFile?.name !== modsFileName) {
      addToast({
        text: `只接受指定文件：${modsFileName}`,
        type: 'danger'
      })
      return 
    }
    curFile && saveFileToDB({
      file: curFile,
      name: curFile.name
    })
  }

  const hasMods = files?.[0]?.name === modsFileName
  const fileName = curFile?.name

  const content = useModLinks()


  if (loadingFromDB) return <Container><CenterLoading/></Container>
  if (hasMods) return null
  return <Container className="flex-center is-flex-direction-column">
    <div className="columns flex-center">
      <div className="file has-name mr-2">
        <label className="file-label">
          <input 
            onChange={(e) => { setCurFile(e.target?.files?.[0] || null ) }} 
            className="file-input" type="file"/>
          <span className="file-cta">
            <Icon path={mdiUpload} size={1} />
          </span>
          <div className="file-name max-w-120 min-w-120 ellipsis">
            { fileName || 'choose mods.zip' }
          </div>
        </label>
      </div>
      <button className="button is-primary is-light" onClick={save}>
        Add
      </button>
    </div>
    {
     content
    }
  </Container>
}