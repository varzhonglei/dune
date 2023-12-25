import { useAvailableLocations, useMiBaoAction } from "../../libs/hooks/useAction"
import { useGameSubscribe } from "../../libs/store/game"
import styled from "@emotion/styled"
import { BGMap } from "./bg-map"
import { holes } from "./bg-map/holes"
import { Troops } from "./troops"
import { locations } from "../../../../common/locations/locations"
import { GoldBug } from "./GoldBug"
import { Research } from "./Research"

const Container = styled('div')`
  width: 100%;
  height: 100%;
`

export const Game = () => {
  useGameSubscribe()

  const miBaoAction = useMiBaoAction()
  const availableLocations = useAvailableLocations()
  const bg4AvailableLocations = availableLocations.filter(s => ['kejiSale', 'jian'].includes(s.id))
  const bg1AvailableLocations = availableLocations.filter(s => !['kejiSale', 'jian'].includes(s.id))
  const holes4 = bg4AvailableLocations.map(s => holes[s.id])
  const holes1 = bg1AvailableLocations.map(s => holes[s.id])

  const bg4Locations = locations.filter(s => ['kejiSale', 'jian'].includes(s.id))
  const bg1Locations = locations.filter(s => !['kejiSale', 'jian'].includes(s.id))
  // const gameData = useGame()

  return <Container>
    <div className="is-flex">
      <BGMap 
        style={{flex:3, width: '1px'}} 
        slot={<>
          <GoldBug />
          <Research />
        </>}
        showMask={false} 
        modName={'bg2.jpg'}/>
      <BGMap style={{flex:2, width: '1px'}} showMask={!!miBaoAction.card} locations={bg4Locations} holes={holes4}  modName={'bg4.jpg'}/>
    </div>
    <BGMap 
      showMask={!!miBaoAction.card} 
      locations={bg1Locations}
      holes={holes1}
      modName={'bg1.jpg'}
      slot={<Troops />}
    />
  </Container>
}