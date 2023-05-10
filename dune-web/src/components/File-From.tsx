import { useState } from "react"
import { db } from "../libs/db"

export function AddFileForm() {
  const [file, setFile] = useState<File | null>(null);

  async function addFile() {
    try {
      if (file) {
        const id = await db.files.add({
          name: file.name,
          file: file,
        });
        console.log(`File successfully added: ${file.name}. Got id ${id}`)
      }

    } catch (error) {
      console.log(`Failed to add ${file?.name}: ${error}`)
    }
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