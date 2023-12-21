import { CanvasMask, THole } from "../../../components/canvas-mask/canvas-mask"
import { useSrcByName } from "../../../components/mod-image"
import { useResizeObserver } from "../../../libs/hooks/useResizeObserver"
import styled from "@emotion/styled"
import { Locations } from "../Location"
import { Location } from '../../../../../common/locations/locations'

type Props = {
   modName: string
   style?: React.CSSProperties
   holes?: THole[]
   locations?: Location[]
   showMask?: boolean
   slot?: any
}


const Container = styled('div')`
    position: relative;
    width: 100%;
`


export const BGMap = (props: Props) => {
  const src = useSrcByName(props.modName)
  const { ref, width, height } = useResizeObserver()
  return <Container
    style={props.style}
  >
  <img 
    ref={ref}
    title={props.modName}
    style={{width: '100%', height: '100%'}}
    src={src || ''} 
  />
  {
    props.showMask && <CanvasMask 
    id={props.modName} 
    width={width} height={height} holes={props.holes || []} />
  }
  <Locations
    width={width} height={height} locations={props.locations || []}
  ></Locations>
  {
    props.slot && props.slot
  }
  </Container>
}