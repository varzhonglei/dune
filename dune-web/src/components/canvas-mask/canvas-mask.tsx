import styled from "@emotion/styled"
import { useEffect } from "react"
import { TLocationId } from "../../../../common/station/station"


const C1 = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
`

export type THole = {
  name?: TLocationId
  topMultiple: number
  leftMultiple: number
  widthMultiple: number
  heightMultiple: number
}

type IProps = {
  id: string
  width: number
  height: number
  holes: THole[]
}

export const CanvasMask = (props: IProps) => {
  const {
    id,
    holes,
    width,
    height
  } = props

  useEffect(() => {
    const canvas = document.getElementById(id) as HTMLCanvasElement | null;

    const ctx = canvas && canvas.getContext('2d') as CanvasRenderingContext2D | null;
    if (ctx) {
      // 绘制灰色背景
      ctx.fillStyle = 'rgba(128, 128, 128, 0.5)'
      ctx.clearRect(0, 0, width, height);
      ctx.fillRect(0, 0, width, height);

      holes.forEach(h => {
        // 绘制透明空洞
        const holeWidth = h.widthMultiple * width
        const holeHeight = h.heightMultiple * height
        const holeX = width * h.leftMultiple
        const holeY = height * h.topMultiple
    
        ctx.clearRect(holeX, holeY, holeWidth, holeHeight);
      })

    }

  }, [id, holes, width, height])

  return <C1>
    <canvas width={width} height={height} id={id}></canvas> 
</C1>
}