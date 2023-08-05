import { useState } from "react"
import { saveFileToDB } from "../../libs/file"
import { mutateModsFromBD, useModsFile } from "../../libs/hooks/useModsFile"
import styled from "@emotion/styled"
import Icon from '@mdi/react';
import { mdiUpload } from '@mdi/js';
import { CenterLoading } from "../loading"
import { modsFileName } from "../../libs/const"
import { useModLinks } from "./useModLinks"
import { addToast } from "../alert"


const Container = styled.div`
  padding: 30px 20px;
  width: 100%;
  align-items: baseline !important;
  border-top: 1px dashed #eee;
  border-bottom: 1px dashed #eee;
  height: fit-content;
`
const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`
const SubTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #777;
  margin-bottom: 2px;
  margin-top: 4px;
`

export const ModsLoad = () => {
  const { files, loading:loadingFromDB } = useModsFile()
  const [curFile, setCurFile] = useState<File | null>(null)
  const save = async () => {
    if (!curFile) return
    if (curFile?.name !== modsFileName) {
      addToast({
        text: `只接受指定文件：${modsFileName}`,
        type: 'danger'
      })
      return 
    }
    if (curFile) {
      await saveFileToDB({
        file: curFile,
        name: curFile.name
      })
      mutateModsFromBD()
      addToast({
        text: `加载图包成功`,
        type: 'success'
      })
    }
  }

  const hasMods = files?.[0]?.name === modsFileName
  const fileName = curFile?.name

  const content = useModLinks()


  if (loadingFromDB) return <Container><CenterLoading/></Container>
  if (hasMods) return null
  return <Container className="flex-center is-flex-direction-column">
    <Title>加载图包</Title>
    <SubTitle>选择本地文件：</SubTitle>
    <div className="columns flex-center mt-1">
      <div className="file has-name mr-2">
        <label className="file-label">
          <input 
            onChange={(e) => { setCurFile(e.target?.files?.[0] || null ) }} 
            className="file-input" type="file"/>
          <span className="file-cta">
            <Icon path={mdiUpload} size={1} />
          </span>
          <div className="file-name w-120 min-w-120 h-40 ellipsis is-size-7 flex-center">
            { fileName || '请选择:mods.zip' }
          </div>
        </label>
      </div>
      <button className="button is-primary is-light" onClick={save}>
        Add
      </button>
    </div>
    <SubTitle>从网络下载：</SubTitle>
    {
     content
    }
  </Container>
}