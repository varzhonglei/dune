import JSZip from 'jszip'
import { groupBy } from "lodash"
import { db } from './db'



type TMod = {
  file: Blob,
  name: string,
}
export const unzipFile = ({
  file,
  onFinishCallback,
  onProgress,
}: {
  file: File
  onFinishCallback?: (res:TMod[]) => void
  onProgress?:(percent: number) => void
}) => {
  const res:TMod[] = []
  JSZip.loadAsync(file).then(async function (zip) {
    const groupedFs = groupBy(zip.files, 'dir')
     // 忽略 mac 上的 隐藏文件
    const files = groupedFs['false'].filter(f => !(f.name.startsWith('__MACOSX') || file.name.includes('.DS_Store')))
    const total = files.length
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if (file) {
        const data = await file.async('blob')
        const p = Math.floor(i/total * 100)
        if (p % 2 === 0) {
          onProgress && onProgress(p)
        }
        res.push({
          file: data,
          name: getFilename(file.name || '-')
        })
      }
    }
    onFinishCallback && onFinishCallback(res)
  })
}

export async function saveFileToDB(params: {
  file: File,
  name: string
}) {
  try {
    if (params.file) {
      const id = await db.files.add({
        name: params.name,
        file: params.file,
      });
      console.log(`File successfully added: ${params.name}. Got id ${id}`)
    }

  } catch (error) {
    console.log(`Failed to add ${params?.name}: ${error}`)
  }
}
const getFilename = (path: string) => {
  return path.split('/').pop() || ''
}