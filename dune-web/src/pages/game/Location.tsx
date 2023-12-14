import styled from "@emotion/styled"
import { useGame } from "../../libs/store/game"
import { Location } from '../../../../common/locations/locations'
import { holes } from "./bg-map/holes"
import { Box } from "../../components/atom/box"
import { MiBaoIcon } from "../../assets/svg"
const Container = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Item = styled('div')`
  position: absolute;
`

const Mibao = styled(Box)`
  position: absolute;
  top: 35%;
  left: 12%;
`

type Props = {
  width: number
  height: number
  locations: Location[]
}
export const Locations = (props: Props) => {
  const { width, height, locations } = props
  const game = useGame()
  const locationsData = game.locations

  const hs = locationsData
    .filter(l => locations.some(lInner => lInner.id === l.id))
    .map(location => ({
      ...holes[location.id],
      mibao: location.miBao
    })) 

  return <Container>
    {hs.map(h => {
      
      return <Item
        style={{
          height: h.heightMultiple * height,
          width: h.widthMultiple * width,
          top: h.topMultiple * height,
          left: h.leftMultiple * height
        }}
      >
        {
          h.mibao?.length && h.mibao.map(m =>
            <Mibao ml={3}>
              <MiBaoIcon color={m.color} size={28} />
            </Mibao>
          )
        }
      </Item>
    })}
  </Container>
}   
