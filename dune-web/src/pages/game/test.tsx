import styled from "@emotion/styled"
import { useEffect } from "react"


const C1 = styled('div')`
  position: fixed;
  top: 0;
`

export const Test2 = () => {

  useEffect(() => {
    const canvas = document.getElementById('myCanvas')
    if (canvas) {
      const ctx = canvas.getContext('2d');

      // 绘制灰色背景
      ctx.fillStyle = 'rgba(128, 128, 128, 0.5)'
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      // 绘制透明空洞
      const holeSize = 200; // 空洞的尺寸
      const holeX = (canvas.width - holeSize) / 2; // 空洞的X坐标
      const holeY = (canvas.height - holeSize) / 2; // 空洞的Y坐标
  
      ctx.clearRect(holeX, holeY, holeSize, holeSize);
    }

  }, [])

  return <C1>
    <canvas width={400} height={400} id="myCanvas"></canvas> 
</C1>
}