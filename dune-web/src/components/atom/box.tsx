import { ReactNode } from "react"

type Props = {
  children: ReactNode
  sx?: React.CSSProperties
  className?: string
  mt?: number
  mr?: number
  mb?: number
  ml?: number

  pt?: number
  pr?: number
  pb?: number
  pl?: number
}
export const Box = (props: Props) => {

  const styles:React.CSSProperties = {
    marginTop: props.mt && `${props.mt}px`,
    marginRight: props.mr && `${props.mr}px`,
    marginBottom: props.mb && `${props.mb}px`,
    marginLeft: props.ml && `${props.ml}px`,

   paddingTop: props.pt && `${props.pt}px`,
   paddingRight: props.pr && `${props.pr}px`,
   paddingBottom: props.pb && `${props.pb}px`,
   paddingLeft: props.pl && `${props.pl}px`,
  }

  return <div
    className={props.className}
    style={{ ...styles, ...(props.sx || {}) } }
  >
    { props.children }
  </div>
}