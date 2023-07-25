import JSZip from 'jszip'
import { groupBy } from "lodash"

export const unzipFile = ({
  data,
  finishCallback,
}: {
  data: File
  finishCallback: () => void
}) => {
  JSZip.loadAsync(data).then(async function (zip) {
    const groupedFs = groupBy(zip.files, 'dir')
    groupedFs['true'].forEach(f => {
      console.log('f',f)
    })
    for (let i = groupedFs['false'].length - 1; i >= 0; i--) {
      const file = groupedFs['false'][i]
      console.log('file', file)
    }
    finishCallback()
  })
}