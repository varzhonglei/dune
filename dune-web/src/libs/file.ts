import JSZip from 'jszip'
import { groupBy } from "lodash"
import { db } from './db'

export const unzipFileAndSave = ({
  data,
  onFinishCallback,
}: {
  data: File
  onFinishCallback?: any
}) => {
  JSZip.loadAsync(data).then(async function (zip) {
    const groupedFs = groupBy(zip.files, 'dir')
    for (let i = groupedFs['false'].length - 1; i >= 0; i--) {
      const file = groupedFs['false'][i]
      if (file) {
        // 忽略 mac 上的 隐藏文件
        if (file.name.startsWith('__MACOSX') || file.name.includes('.DS_Store')) continue;

        const data = await file.async('uint8array')
        await saveFile({
          file: data,
          name: getFilename(file.name || '') 
        })
      }
    }
    onFinishCallback && onFinishCallback()
  })
}

async function saveFile(params: {
  file: Uint8Array,
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