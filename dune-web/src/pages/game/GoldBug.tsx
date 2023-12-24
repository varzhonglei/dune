import styled from "@emotion/styled"
import { useGame } from "../../libs/store/game"
import { Dashboard } from "../../../../common/typing"
import { CircleIcon } from "../../assets/svg"
import { groupBy } from "lodash"

const Container = styled('div')`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 24%;
`

const TheCircleWrap = styled('div')`
  position: absolute;
`

const Column = styled('div')`
    position: absolute;
    display: flex;
    flex-direction: column;
`

const columnPositions = {
    '1': '40%',
    '2': '55',
    '3': '40%',
    '4': '55',
    '5': '60%',
    '6': '75',
    '7': '85',
}

export const GoldBug = () => {
  const gameData = useGame()
//   const bugs = gameData.dashboards.map(d => {
//     return {
//         miBaoColor: d.miBaoColor,
//         goldBug: d.goldBug
//     }
//   })
  const bugs = [
    {
        miBaoColor: 'red',
        goldBug: 1
    },
    {
        miBaoColor: 'blue',
        goldBug: 2
    },
    {
        miBaoColor: 'green',
        goldBug: 2
    },
    {
        miBaoColor: 'yellow',
        goldBug: 1
    }
  ]
  const grouped = groupBy(bugs, 'goldBug')

  console.log('grouped', grouped)
//   const item = (d: Dashboard, ind: 0|1|2|3) => {
//     return <TheCircleWrap
//         style={{
//             top: `${ind * 25 + 3}%`
//         }}
//     >
//         <CircleIcon style={{
//              width: '6.5%',
//              marginBottom: '0.2%'
//             }}
//           color={d.miBaoColor}
//         />
//     </TheCircleWrap>
//   }

  return <Container>
     {/* {item(d1, 0)}
     {item(d2, 1)}
     {item(d3, 2)}
     {item(d4, 3)} */}

     {
        Object.keys(grouped).map(gName => {
            if (gName === '0') return null
            return <Column
                style={{
                    left: columnPositions[gName as '1']
                }}
            >
                {
                    grouped[gName].map(theBug => {
                        return  <CircleIcon style={{
                            width: '6.5%',
                            }}
                        color={theBug.miBaoColor}
                        />
                    })
                }
            </Column>
            
            
        })
     }
  </Container>
}   