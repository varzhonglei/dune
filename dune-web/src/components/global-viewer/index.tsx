import styled from "@emotion/styled"
import { useEffect } from "react"

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`

document.addEventListener('mouseover', function(event) {
  const hoveredElement = event.target;
  console.log(hoveredElement); // 获取当前鼠标停留处的元素
});


export const GlobalViewer = () => {
    useEffect(() => {
      const fun = function(event:KeyboardEvent) {
        if (event.keyCode === 32) { // 按下空格键的keyCode是32
          const focusedElement = document.activeElement;
          console.log('focusedElement:', focusedElement); // 获取当前光标停留处的元素
        }
      }
      document.addEventListener('keydown', fun)
      return () => {
        document.removeEventListener('keydown', fun)
      }
    }, [])
    return <Container></Container>
}