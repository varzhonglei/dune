import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../libs/db"

export function FileList() {
  const files = useLiveQuery(
    () => db.files.toArray()
  );
  return <ul>
    {files?.map(file => <li key={file.id}>
      {file.name}
    </li>)}
  </ul>;
}