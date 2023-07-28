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
}: {
  file: File
  onFinishCallback?: (res:TMod[]) => void
}) => {
  const res:TMod[] = []
  JSZip.loadAsync(file).then(async function (zip) {
    const groupedFs = groupBy(zip.files, 'dir')
    for (let i = groupedFs['false'].length - 1; i >= 0; i--) {
      const file = groupedFs['false'][i]
      if (file) {
        // 忽略 mac 上的 隐藏文件
        if (file.name.startsWith('__MACOSX') || file.name.includes('.DS_Store')) continue;

        const data = await file.async('blob')
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