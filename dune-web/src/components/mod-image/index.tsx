import { useEffect, useState } from "react"
import { useMods } from "../../libs/hooks/useModsFile"
import { useLatestValue } from "../../libs/hooks/useLatestValue"

export const ModImage = (props: {
    name: string
    width?: number | string
    height?: number | string
    style?:  React.CSSProperties
    className?: string
}) => {
    const [src, setSrc] = useState<string | null>(null)
    const latestSrc = useLatestValue(src)
    const mods = useMods()
    useEffect(() => {
        const file = mods.find(m => m.name === props.name)
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
    }, [mods, props.name])

    const style: React.CSSProperties ={
        width: props.width,
        height: props.height,
        ...(props.style || {})
    }
  
    if (!src) return <div 
        className={props.className ? props.className : undefined}
        style={style}
    /> 
    return <img 
        className={props.className ? props.className : undefined}
        src={src} style={style}/>
  }