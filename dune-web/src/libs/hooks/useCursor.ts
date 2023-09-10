import { useEffect } from "react"
import { globalPreviewOpen} from "../../components/global-viewer"
import { useSyncExternalState } from "./useSyncStore"

export const useCursor =  () => {
  const open = useSyncExternalState(globalPreviewOpen)
  useEffect(() => {
    if (open) {
      document.body.style.cursor = 'zoom-in'
    } else {
      document.body.style.cursor = 'auto'
    }
  }, [open])
}