import { ModImage } from "../../components/mod-image"
import { useAvailableStation } from "../../libs/hooks/useAction"
import { useGameSubscribe } from "../../libs/store/game"
import styled from "@emotion/styled"
import { BGMap } from "./bg-map"

const Container = styled('div')`
  width: 100%;
  height: 100%;
`

export const Game = () => {
  useGameSubscribe()

  const availableStations = useAvailableStation()

  return <Container>
    <div className="is-flex">
      <BGMap style={{flex:3, width: '1px'}} modName={'bg2.jpg'}/>
      <BGMap style={{flex:2, width: '1px'}} modName={'bg4.jpg'}/>
    </div>
    <BGMap modName={'bg1.jpg'}/>
  </Container>
}