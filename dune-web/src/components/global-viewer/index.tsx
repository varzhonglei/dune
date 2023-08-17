import styled from "@emotion/styled"
import { useEffect, useRef, useState } from "react"
import { createSyncExternalAtom, useSyncExternalState } from "../../libs/hooks/useSyncStore"
import { useLatestValue } from "../../libs/hooks/useLatestValue"
import { useMods } from "../../libs/hooks/useModsFile"

const Container = styled.div`
  position: fixed;
  z-index: 10000;
`

const globalPreviewState = createSyncExternalAtom<{
  name: null | string,
  position: {}
}>({
  name: null,
  position: {}
})


const __ModImage = ({
  name,
}: {
  name: string
}) => {
  const [src, setSrc] = useState<string | null>(null)
  const latestSrc = useLatestValue(src)
  const mods = useMods()
  useEffect(() => {
      const file = mods.find(m => m.name === name)
      if (file) {
      setSrc(old => {
          if (old) {
              URL.revokeObjectURL(old)
          }
          return file?.file && URL.createObjectURL(file.file)
      })
     }
     return () => {
      if (latestSrc.current) {
          URL.revokeObjectURL(latestSrc.current)
      }
     }
  }, [mods, name])

  if (!src) return null
  return <img 
      src={src}
  />
}


export const GlobalViewer = () => {
    const [open, setOpen] = useState(false)
    const info = useSyncExternalState(globalPreviewState)
    console.log('info', info)

    useEffect(() => {
      const fun = function(event:KeyboardEvent) {
        if (event.keyCode === 32) { // 按下空格键的keyCode是32
          setOpen(old => !old)
        }
      }
      document.addEventListener('keydown', fun)
      return () => {
        document.removeEventListener('keydown', fun)
      }
    }, [])

    if (!open || !info.name) {
      return null
    } else {
      return <Container
        style={{
          ...info.position
        }}
      >
        <__ModImage 
          name={info.name}
        />
      </Container>
    }
 
}

export const useMouseHoverRef = <T extends Element>(imgInfo: { name: string, width: number, height: number }) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const fn = () => {
      const { width, height } = imgInfo;
      const rect = ref.current?.getBoundingClientRect();

      if (rect) {
        const { top, bottom, left, right } = rect;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const position = {
          top: top - (height / 2),
          bottom: viewportHeight - (bottom + (height / 2)),
          left: left - (width / 2),
          right: viewportWidth - (right + (width / 2))
        };

        globalPreviewState.setStateImmer(draft => {
          draft.name = imgInfo.name;
          draft.position = position;
        });
      }
    };

    if (ref.current) {
      ref.current.addEventListener('mouseover', fn);
    }

    return () => {
      ref.current?.removeEventListener('mouseover', fn);
    };
  }, [ref.current, imgInfo.name, imgInfo.width, imgInfo.height]);

  return ref
};