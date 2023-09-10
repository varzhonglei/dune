import styled from "@emotion/styled"
import { useEffect, useRef, useState } from "react"
import { createSyncExternalAtom, useSyncExternalState } from "../../libs/hooks/useSyncStore"
import { useSrcByName } from "../mod-image"

const Container = styled.div`
  position: fixed;
  z-index: 10000;
`

const globalPreviewState = createSyncExternalAtom<{
  name: null | string,
  style: React.CSSProperties,
  imageStyle: React.CSSProperties,
  content?: any | null
}>({
  name: null,
  style: {},
  imageStyle: {},
  content: null
})


const __ModImage = ({
  name,
  style,
}: {
  style:  React.CSSProperties,
  name: string
}) => {
  const src = useSrcByName(name)
  if (!src) return null
  return <img 
      style={style}
      src={src}
  />
}

export const globalPreviewOpen = createSyncExternalAtom(false)


export const GlobalViewer = () => {
    const open = useSyncExternalState(globalPreviewOpen)
    const info = useSyncExternalState(globalPreviewState)

    useEffect(() => {
      const fun = function(event:KeyboardEvent) {
        if (event.key === 'Alt' || event.code === 'AltLeft' || event.code === 'AltRight') { 
          globalPreviewOpen.setState(old => !old)
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
      if (info.content) {
        return <Container
          style={{
            ...info.style
          }}
        >
          {info.content}
        </Container>
      }
      return <Container
        style={{
          ...info.style
        }}
      >
        <__ModImage 
          style={info.imageStyle}
          name={info.name}
        />
      </Container>
    }
 
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMouseHoverRef = <T extends Element>(imgInfo: { name: string, width: number, height: number,
  content?: any
}) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const fn = () => {
      const { width, height } = imgInfo;

      const baseStyle = {
        width: width + 'px',
        height: height + 'px'
      }
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const { top, bottom, left, right } = rect
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const rectToBottom = viewportHeight - bottom
        const rectToRight = viewportWidth - right
        const tb = Math.max(Math.min(top, rectToBottom), 0)
        const lr =  Math.max(Math.min(left, rectToRight), 0)
        const isCloserTop = top < rectToBottom
        const isCloserLeft = left < rectToRight
        const position = {
          top:  isCloserTop ? tb : 'unset',
          bottom:  !isCloserTop ? tb : 'unset',
          left:  isCloserLeft ? lr : 'unset',
          right: !isCloserLeft ? lr : 'unset',
        }

        globalPreviewState.setStateImmer(draft => {
          draft.name = imgInfo.name;
          draft.style = {
            ...position,
            transformOrigin: `${isCloserTop ? 'top' : 'bottom'} ${isCloserLeft ? 'left' : 'right'}`
          },
          draft.imageStyle = baseStyle,
          draft.content = imgInfo.content
        })
      }
    }

    if (ref.current) {
      ref.current.addEventListener('mouseover', fn);
    }

    return () => {
      ref.current?.removeEventListener('mouseover', fn);
    }
  }, [ref.current, imgInfo.name, imgInfo.width, imgInfo.height])

  return ref
}