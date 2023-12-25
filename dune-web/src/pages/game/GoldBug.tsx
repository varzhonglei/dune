import styled from "@emotion/styled"
import { useGame } from "../../libs/store/game"
import { CircleIcon } from "../../assets/svg"
import { groupBy } from "lodash"
import Spice2 from '../../assets/spice2.png'

const Container = styled('div')`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 24%;
`

const Column = styled('div')`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 7%;
    align-items: center;
    justify-content: center;
`

const columnPositions = [ 
    '0%',
    '18%',
    '30%',
    '40%',
    '55%',
    '72%',
    '80.5%',
    '89%',
]

const startPositions = [{
    top: '16%',
    left: '2.7%',
},{
    top: '16%',
    left: '9%',
},{
    top: '53%',
    left: '2.7%',
},{
    top: '53%',
    left: '9%',
}]




export const GoldBug = () => {
  const gameData = useGame()
  const bugs = gameData.dashboards.map(d => {
    return {
        miBaoColor: d.miBaoColor,
        goldBug: d.goldBug
    }
  })
  const grouped = groupBy(bugs, 'goldBug')

  const reach4 = Object.keys(grouped).some(v => Number(v) >= 4)

  return <Container>
     {
        Object.keys(grouped).map(gName => {
            if (gName === '0') {
                return grouped[gName].map((theBug, index) => {
                    return  <CircleIcon key={theBug.miBaoColor}  style={{
                            width: '6.8%',
                            position: 'absolute',
                            ...(startPositions[index] || {})
                        }}
                    color={theBug.miBaoColor}
                    />
                })
            }
            return <Column
                style={{
                    left: columnPositions[Number(gName)]
                }}
            >
                {
                    grouped[gName].map(theBug => {
                        return  <CircleIcon key={theBug.miBaoColor} style={{
                            width: '70%',
                            }}
                        color={theBug.miBaoColor}
                        />
                    })
                }
            </Column>
        })
     }
     {
        !reach4 && <img src={Spice2} style={{
            position: 'absolute',
            top: '55%',
            left: '62%',
            width: '6.7%',
         }}/>
     }
  </Container>
}   