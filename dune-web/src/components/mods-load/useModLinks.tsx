import { useState } from "react"
import { addToast } from "../alert"
import { APP_PATH, modsFileName } from "../../libs/const"
import { saveFileToDB } from "../../libs/file"
import { copyToClipboard } from "../../libs/utils/copy2clipboard"
import axios from "axios"
import { mutateModsFromBD } from "../../libs/hooks/useModsFile"

const link1 = 'https://anonfiles.com/P6M1b76ez0/mods_zip'
const link2 = 'https://pixeldrain.com/api/file/bbJL9tdf?download'
const localLint = `${APP_PATH}/${modsFileName}`

const links = [link1, link2]

export const useModLinks = () => {
  const [progress, setProgress] = useState(0)
  const [loadFromNetwork, setLoadFromNetwork] =useState(false)

  const downloadFile = async (url: string) => {
    setLoadFromNetwork(true)
    try {
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'blob',
        onDownloadProgress: (progressEvent: any) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });
      setLoadFromNetwork(false)
      const file = new File([response.data], modsFileName);
      return file
    } catch (error) {
      setLoadFromNetwork(false)
    }
  }

  const handleLoadMods = async (url: string) => {
    const curFile = await downloadFile(url)
    if (curFile?.name !== modsFileName) {
      addToast({
        text: `文件错误：${curFile?.name}`,
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
  const content = <>
    <div className="tags mb-3 pt-2 pl-2 pr-2" style={{border: '1px solid #eee', borderRadius: '12px'}}>
        <div 
          className="tag is-dark  max-w-120 min-w-120 ellipsis" 
          onClick={() => copyToClipboard(localLint)}
          style={{ display: 'block', lineHeight: '24px' }}>{localLint}</div>
        <span onClick={() => handleLoadMods(localLint)} className="tag  is-info is-pointer">开始加载</span>
    </div>
    {links.map(link => <div key={link} className="tags mb-3 pt-2 pl-2 pr-2" style={{border: '1px solid #eee', borderRadius: '12px'}}>
      <div 
        className="tag is-dark  max-w-120 min-w-120 ellipsis" 
        onClick={() => copyToClipboard(link)}
        style={{ display: 'block', lineHeight: '24px' }}>
          {link}
      </div>
       <span className="tag is-info is-light">备用链接</span>
    </div>)}
  </>
  if (loadFromNetwork) return <progress className="progress is-primary" value={progress} max="100">{progress}%</progress>
  return content
}

