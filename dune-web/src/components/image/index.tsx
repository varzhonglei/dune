export const Image = (props: {
    src: string | null
    ref?: any
    title?: string
    width?: number | string
    height?: number | string
    style?:  React.CSSProperties
    className?: string
}) => {
    const style: React.CSSProperties ={
        width: props.width,
        height: props.height,
        ...(props.style || {})
    }
  
    if (!props.src) return <div 
        ref={props.ref}
        title={props.title}
        className={props.className ? props.className : undefined}
        style={style}
    /> 
    return <img 
        ref={props.ref}
        title={props.title}
        className={props.className ? props.className : undefined}
        src={props.src} style={style}/>
  }
