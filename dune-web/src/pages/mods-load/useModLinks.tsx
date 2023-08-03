import { addToast } from "../../components/alert"
import { APP_PATH, modsFileName } from "../../libs/const"
import { saveFileToDB } from "../../libs/file"
import { copyToClipboard } from "../../libs/utils/copy2clipboard"

const link1 = 'https://anonfiles.com/P6M1b76ez0/mods_zip'
const link2 = 'https://pixeldrain.com/api/file/bbJL9tdf?download'
const localLint = `${APP_PATH}/${modsFileName}`

async function downloadFile(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], modsFileName);
  return file;
}
const links = [link1, link2]

export const useModLinks = () => {
  const handleLoadMods = async (url: string) => {
    const curFile = await downloadFile(url)
    if (curFile?.name !== modsFileName) {
      addToast({
        text: `文件错误：${curFile?.name}`,
        type: 'danger'
      })
      return 
    }
    curFile && saveFileToDB({
      file: curFile,
      name: curFile.name
    })
  }
  const content = <>
    <div className="tags mb-3 pt-2 pl-2 pr-2" style={{border: '1px solid #eee', borderRadius: '12px'}}>
        <div 
          className="tag is-dark  max-w-120 min-w-120 ellipsis" 
          onClick={() => copyToClipboard(localLint)}
          style={{ display: 'block', lineHeight: '24px' }}>{localLint}</div>
        <span onClick={() => handleLoadMods(localLint)} className="tag  is-info is-pointer">开始加载</span>
    </div>
    {links.map(link => <div className="tags mb-3 pt-2 pl-2 pr-2" style={{border: '1px solid #eee', borderRadius: '12px'}}>
      <div 
        className="tag is-dark  max-w-120 min-w-120 ellipsis" 
        onClick={() => copyToClipboard(link)}
        style={{ display: 'block', lineHeight: '24px' }}>
          {link}
      </div>
       <span onClick={() => handleLoadMods(localLint)} className="tag is-info is-light">备用链接</span>
    </div>)}
  </>
  return content
}

