import { useEffect, useState } from "react"
import { useMods } from "../../libs/hooks/useModsFile"
import { useLatestValue } from "../../libs/hooks/useLatestValue"
import { TSprite } from '../../../../common/typing/ui'
import { useMouseHoverRef } from "../global-viewer"
import { Image } from "../image"

// eslint-disable-next-line react-refresh/only-export-components
export const useSrcByName = (name: string) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mods, name])
    return src
}

export const ModImage = (props: {
    name: string
    width?: number
    height?: number
    style?:  React.CSSProperties
    className?: string
}) => {
    const src = useSrcByName(props.name)
    return <Image src={src} {...props}/>
}

  export const ModImageWithEnlarge = (props: {
    name: string
    title?: string
    width?: number | string
    height?: number | string
    style?:  React.CSSProperties
    className?: string
}) => {
    const src = useSrcByName(props.name) || ''
    const ref = useMouseHoverRef<HTMLImageElement>({
        name: props.name,
        //todo: fix me
        width: 1150,
        height: 804,
    })

    const style: React.CSSProperties ={
      width: props.width,
      height: props.height,
      ...(props.style || {})
  }

    return <img 
    ref={ref}
    title={props.title}
    className={props.className ? props.className : undefined}
    src={src} style={style}/>
  }

  export const SpriteImage = (props: {
    name: string
    sprite: TSprite
    width: number 
    height: number 
    style?: React.CSSProperties
    className?: string
  }) => {
    const src = useSrcByName(props.name) || ''
    const { sprite, className, width } = props
    const { position, size, clip } = sprite
    const base =  width / clip.width

    const style: React.CSSProperties ={
        width: props.width,
        height: props.height,
        ...(props.style || {})
    }
    const imageStyle = {
      backgroundImage: `url(${src})`,
      backgroundPosition: `-${position.x * base}px -${position.y * base}px`,
      backgroundSize: `${size.width * base}px ${size.height * base}px`,
      overflow: 'hidden',
      ...(style || {})
    }
    return <div className={className ? className : ''} style={imageStyle}></div>;
  }
  

  export const SpriteImageWithEnlarge = (props: {
    name: string
    sprite: TSprite
    isViewAll?: boolean
    width: number 
    height: number
    style?: React.CSSProperties
    className?: string
  }) => {
    const src = useSrcByName(props.name) || ''
    const { name, sprite, className, width, isViewAll } = props
    const ref = useMouseHoverRef<HTMLDivElement>({
        name,
        //todo: fix me
        width: 1150,
        height: 804,
        content: isViewAll ? null : <SpriteImage {...props}
            style={{
            ...(props.style || {}),
        }}
        />,
    })
    const { position, size, clip } = sprite
    const base =  width / clip.width

    const style: React.CSSProperties ={
        width: props.width,
        height: props.height,
        ...(props.style || {})
    }
    
    const imageStyle = {
      backgroundImage: `url(${src})`,
      backgroundPosition: `-${position.x * base}px -${position.y * base}px`,
      backgroundSize: `${size.width * base}px ${size.height * base}px`,
      overflow: 'hidden',
      ...(style || {})
    };
  
    return <div ref={ref} className={className ? className : ''} style={imageStyle}></div>;
  };

