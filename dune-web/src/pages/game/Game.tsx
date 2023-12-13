import { useAvailableLocations, useMiBaoAction } from "../../libs/hooks/useAction"
import { useGame, useGameSubscribe } from "../../libs/store/game"
import styled from "@emotion/styled"
import { BGMap } from "./bg-map"
import { holes } from "./bg-map/holes"
import { Troops } from "./troops"

const Container = styled('div')`
  width: 100%;
  height: 100%;
`

export const Game = () => {
  useGameSubscribe()

  const miBaoAction = useMiBaoAction()
  const availableLocations = useAvailableLocations()
  const bg4Stations = availableLocations.filter(s => ['kejiSale', 'jian'].includes(s.id))
  const bg1Stations = availableLocations.filter(s => !['kejiSale', 'jian'].includes(s.id))
  const holes4 = bg4Stations.map(s => holes[s.id])
  const holes1 = bg1Stations.map(s => holes[s.id])
  const gameData = useGame()
  console.log('gameData', gameData.locations)

  return <Container>
    <div className="is-flex">
      <BGMap style={{flex:3, width: '1px'}} showMask={false} modName={'bg2.jpg'}/>
      <BGMap style={{flex:2, width: '1px'}} showMask={!!miBaoAction.card}  holes={holes4}   modName={'bg4.jpg'}/>
    </div>
    <BGMap 
      showMask={!!miBaoAction.card} 
      holes={holes1}
      modName={'bg1.jpg'}
      slot={<Troops />}
    />
  </Container>
}