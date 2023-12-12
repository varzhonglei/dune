import styled from "@emotion/styled"
import { DreadnoughtIcon, TroopsIcon } from "../../assets/svg"
import { useGame } from "../../libs/store/game"
import { Box } from "../../components/atom/box"
import { Dashboard } from "../../../../common/typing"

const Container = styled('div')`
  position: absolute;
  left: 51%;
  top: 60%;
  width: 41%;
  height: 38%;
`
const P1 = styled('div')`
  position: absolute;
  left: 3.5%;
  top: 3.5%;
  display: flex;
  width: 22%;
  height: 22%;
  flex-direction: column;
  justify-content: center;
`

const P2 = styled('div')`
  position: absolute;
  right: 3%;
  top: 3.5%;
  display: flex;
  width: 22%;
  height: 22%;
  flex-direction: column;
  justify-content: center;
`

const P3 = styled('div')`
  position: absolute;
  left: 3.5%;
  top: 35%;
  display: flex;
  width: 22%;
  height: 22%;
  flex-direction: column;
  justify-content: center;
`

const P4 = styled('div')`
  position: absolute;
  right: 3%;
  top: 35%;
  display: flex;
  width: 22%;
  height: 22%;
  flex-direction: column;
  justify-content: center;
`

const Item = styled('div')`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`



export const Troops = () => {
  const gameData = useGame()
  const [d1, d2, d3, d4] = gameData.dashboards

  const content = (ds: Dashboard) => <>
        { ds && <Item >
        <TroopsIcon size={18} color={ds.miBaoColor}></TroopsIcon> 
        { ` ${ds.troops.troopsCamp.length}` }
      </Item>
      }
      {ds.troops.dreadnoughtBattle?.length > 0 && <Item >
        <Box mr={1}>
          <DreadnoughtIcon size={22} color={ds.miBaoColor}></DreadnoughtIcon> 
        </Box>
       { ds.troops.dreadnoughtBattle?.length > 1 &&  <Box mr={1}>
          <DreadnoughtIcon size={22} color={ds.miBaoColor}></DreadnoughtIcon> 
        </Box>}   
      </Item>} 
  </>

  return <Container>
    <P1>
      {content(d1)}
    </P1>
    <P2>
     {content(d2)}
    </P2>
    <P3>
     {content(d3)}
    </P3>
    <P4>
     {content(d4)}
    </P4>
  </Container>
}   