import { CanvasMask } from "../../../components/canvas-mask/canvas-mask"
import { useSrcByName } from "../../../components/mod-image"
import { useResizeObserver } from "../../../libs/hooks/useResizeObserver"
import styled from "@emotion/styled"

type Props = {
   modName: string
   style?: React.CSSProperties
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
		<CanvasMask 
			id={props.modName} 
			width={width} height={height} holes={[{
				widthMultiple: 0.137,
				heightMultiple: 0.09,
				topMultiple: 0.112,
				leftMultiple: 0.662,
			}]} />
    </Container>
}