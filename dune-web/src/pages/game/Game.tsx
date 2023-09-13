import { ModImage } from "../../components/mod-image"
import { useAvailableStation } from "../../libs/hooks/useAction"
import { useGameSubscribe } from "../../libs/store/game"
import styled from "@emotion/styled"
import { Test2 } from "./test"

const Container = styled('div')`
  width: 100%;
  height: 100%;
`


export const Game = () => {
  useGameSubscribe()

  const availableStations = useAvailableStation()

  return <Container>
    <div className="is-flex">
      <ModImage style={{flex:3, width: '1px', transform: 'scaleY(1.01)'}} name={'bg2.jpg'}/>
      <ModImage style={{flex:2, width: '1px'}} name={'bg4.jpg'}/>
    </div>
    <ModImage name={'bg1.jpg'}/>
    <Test2/>
  </Container>
}