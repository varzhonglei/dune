import { useEffect, useState } from "react"
import { useMods } from "../../libs/hooks/useModsFile"
import { useLatestValue } from "../../libs/hooks/useLatestValue"
import { TSprite } from '../../../../common/typing/ui'
import { isNumber } from "lodash"
import { useMouseHoverRef } from "../global-viewer"

export const ModImage = ({
    name, width, height, style, sprite, className
}: {
    name: string
    width?: number
    height?: number
    style?:  React.CSSProperties
    sprite?: TSprite
    className?: string
}) => {
    const [src, setSrc] = useState<string | null>(null)
    const ref = useMouseHoverRef<HTMLImageElement>({
        name,
        //todo: fix me
        width: 1150,
        height: 804
    })
    console.log('ref', ref.current)
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

    const style2: React.CSSProperties ={
        width: isNumber(width) ? `${width}px` : undefined,
        height: isNumber(height) ? `${height}px` :undefined,
        ...(style || {})
    }
  
    if (!src) return <div 
        className={className ? className : ''}
        style={style2}
    /> 
    if (sprite && width && height) {
        return <SpriteImage 
            name={name}
            className={className ? className : ''}
            style={style2}
            src={src}
            width={width}
            height={height}
            sprite={sprite}
        />
    }

    return <img 
        ref={ref}
        className={className ? className : ''}
        src={src} style={style2}/>
  }

  export const SpriteImage = ({ name, sprite, className, src, style, width, height }: {
    name: string
    src: string
    sprite: TSprite
    width: number 
    height: number
    style?: React.CSSProperties
    className?: string
  }) => {
    const ref = useMouseHoverRef<HTMLDivElement>({
        name,
        //todo: fix me
        width: 1150,
        height: 804
    })
    const { position, size, clip } = sprite
    const base =  width / clip.width
    
    const style2: React.CSSProperties ={
        width: isNumber(width) ? `${width}px` : undefined,
        height: isNumber(height) ? `${height}px` :undefined,
        ...(style || {})
    }
    const imageStyle = {
      backgroundImage: `url(${src})`,
      backgroundPosition: `-${position.x * base}px -${position.y * base}px`,
      backgroundSize: `${size.width * base}px ${size.height * base}px`,
      overflow: 'hidden',
      ...(style2 || {})
    };
  
    return <div ref={ref} className={className ? className : ''} style={imageStyle}></div>;
  };
  