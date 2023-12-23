import styled from "@emotion/styled"
import { useGame } from "../../libs/store/game"
import { Box } from "../../components/atom/box"
import { Dashboard } from "../../../../common/typing"
import { CircleIcon } from "../../assets/svg"

const Container = styled('div')`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 0%;
  height: 0%;
`

const TheCircle = styled('img')`
  position: absolute;
  left: 3.5%;
  top: 3.5%;
  width: 10%;
`





export const GoldBug = () => {
  const gameData = useGame()
  const [d1, d2, d3, d4] = gameData.dashboards
  const item = (d: Dashboard, ind: 0|1|2|3) => {
    
    // return <TheCircle src={}/>
  }

  return <Container>

  </Container>
}   