import { useState } from "react"
import { unzipFileAndSave } from "../libs/file"

export function AddFileForm() {
  const [file, setFile] = useState<File | null>(null);

  function addFile() {
    file && unzipFileAndSave({
      data: file,
    })
  }

  return <>
    <input
      type="file"
      onChange={ev => setFile(ev.target.files?.[0] || null)}
    />
    
    <button onClick={addFile}>
      Add
    </button>
  </>
}