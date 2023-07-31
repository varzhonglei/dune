import { useState } from "react"
import { saveFileToDB } from "../../libs/file"
import { useModsFile } from "../../libs/hooks/useModsFile"
import styled from "@emotion/styled"
import Icon from '@mdi/react';
import { mdiUpload } from '@mdi/js';
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../App"
import { CenterLoading } from "../../components/loading"


const Container = styled.div`
  width: 100%;
  height: 100%;
`


export const ModsLoad = () => {
  const { files, loading:loadingFromDB } = useModsFile()
  const navigate = useNavigate()

  const [curFile, setCurFile] = useState<File | null>(null)
  const save = () => {
    curFile && saveFileToDB({
      file: curFile,
      name: curFile.name
    })
  }

  const hasMods = files?.[0]?.name === 'mods.zip'
  const fileName = curFile?.name


  if (loadingFromDB) return <CenterLoading/>
  if (hasMods) {
    navigate(ROUTES.tables)
  }
  return <Container className="flex-center is-flex-direction-column">
    <div className="columns flex-center">
      <div className="file has-name mr-2">
        <label className="file-label">
          <input 
            onChange={(e) => { setCurFile(e.target?.files?.[0] || null ) }} 
            className="file-input" type="file"/>
          <span className="file-cta">
            <Icon path={mdiUpload} size={1} />
            <span className="file-label">
              Please choose the mods.zip
            </span>
          </span>
          <span className="file-name">
          { fileName || '...' }
          </span>
        </label>
      </div>
      <button className="button is-primary is-light" onClick={save}>
        Add
      </button>
    </div>
    {
      //todo: add online mods file
    }
  </Container>
}