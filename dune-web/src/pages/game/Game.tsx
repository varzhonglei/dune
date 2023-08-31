import { ModImage } from "../../components/mod-image"
import { useGameSubscribe } from "../../libs/store/game"
import styled from "@emotion/styled"

const Container = styled('div')`
  width: 100%;
  height: 100%;
`


export const Game = () => {
  useGameSubscribe()

  return <Container>
    <div className="is-flex">
      <ModImage style={{flex:3, width: '1px'}} name={'bg2.jpg'}/>
      <ModImage style={{flex:2, width: '1px'}} name={'bg4.jpg'}/>
    </div>
    <ModImage name={'bg1.jpg'}/>
    </Container>
}