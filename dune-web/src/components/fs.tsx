import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../libs/db"
import { useEffect, useState } from "react"

export function FileList() {
  const files = useLiveQuery(
    () => db.files.toArray()
  );
  const [src, setSrc] = useState('')
  useEffect(() => {
    if (files && files[0]) {
      const reader = new FileReader()
      reader.onload = function (e) {
          setSrc(e.target.result)
      }
      reader.readAsDataURL(files[0].file);
    }
  }, [files])
  return <ul>
    {files?.slice(0,1)?.map(file => <li key={file.id}>
      {file.name}
    </li>)}
    <img src={src}/>
  </ul>;
}

