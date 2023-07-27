import { useEffect, useState } from "react"

import JSZip from 'jszip'
import { groupBy } from "lodash"

export const unzipFileAndSave = ({
  data,
  onFinishCallback,
}: {
  data: File
  onFinishCallback?: any
}) => {
  const res: Blob[] = []
  JSZip.loadAsync(data).then(async function (zip) {
    const groupedFs = groupBy(zip.files, 'dir')
    for (let i = groupedFs['false'].length - 1; i >= 0; i--) {
      const file = groupedFs['false'][i]
      if (file) {
        // 忽略 mac 上的 隐藏文件
        if (file.name.startsWith('__MACOSX') || file.name.includes('.DS_Store')) continue;
        const data = await file.async('blob')
        res.push(data)
      }
    }
    onFinishCallback && onFinishCallback(res)
  })
}

export function AddFileForm() {
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState< Blob[]>([])
  const [srcs, setSrcs] = useState([])

  function addFile() {
    file && unzipFileAndSave({
      data: file,
      onFinishCallback: (res: Blob[]) => {
        setFiles(res)
      }
    })
  }
  useEffect(() => {
    setSrcs([])
    if (files) {
      files.forEach(f => {
        const reader = new FileReader()
        reader.onload = function (e: any) {
          setSrcs(old => [...old, e.target.result])
        }
        reader.readAsDataURL(f);
      })
    }

  }, [files])

  return <>
    <input
      type="file"
      onChange={ev => setFile(ev.target.files?.[0] || null)}
    />

    <button onClick={addFile}>
      Add
    </button>
    {
      srcs.map((s, ind) => <img
          key={ind}
          src={s}
      />)
    }
  </>
}



// async function saveFile(params: {
//   file: Uint8Array,
//   name: string
// }) {
//   try {
//     if (params.file) {
//       const id = await db.files.add({
//         name: params.name,
//         file: params.file,
//       });
//       console.log(`File successfully added: ${params.name}. Got id ${id}`)
//     }

//   } catch (error) {
//     console.log(`Failed to add ${params?.name}: ${error}`)
//   }
// }

// const getFilename = (path: string) => {
//   return path.split('/').pop() || ''
// }