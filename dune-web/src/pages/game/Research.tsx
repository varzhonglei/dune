import styled from "@emotion/styled"
import { useGame } from "../../libs/store/game"
import { CircleIcon } from "../../assets/svg"
import { groupBy } from "lodash"

const Container = styled('div')`
  position: absolute;
  left: 0%;
  top: 24%;
  width: 100%;
  height: 76%;
`

const Row = styled('div')`
  position: absolute;
  height: 10%;
  width: 10%;
  display: flex;
  justify-content: center;
`

const positions = [{}, 
  {
    top: '27%',
    left: '12.5%',
  },
  {
    top: '15.5%',
    left: '23.5%',
  },
  {
    top: '38.5%',
    left: '23.5%',
  },
  {
    //4
    top: '3.8%',
    left: '34.3%',
  },
  {
    top: '40%',
    left: '20%',
  },
  {
    top: '40%',
    left: '20%',
  },
  {
    top: '40%',
    left: '20%',
  },
  {
    top: '40%',
    left: '20%',
  },
  {
    top: '40%',
    left: '20%',
  },
  {
    top: '40%',
    left: '20%',
  },
  {
    top: '40%',
    left: '20%',
  },
]



export const Research = () => {
  const gameData = useGame()
  // const genes = gameData.dashboards.map(d => {
  //   return {
  //       miBaoColor: d.miBaoColor,
  //       gene: d.gene
  //   }
  // })

  const genes = [
    {
      miBaoColor: 'red',
      gene: {id: 4}
    },
    {
      miBaoColor: 'yellow',
      gene: {id: 4}
    },
    {
      miBaoColor: 'blue',
      gene: {id: 4}
    },
    {
      miBaoColor: 'green',
      gene: {id: 4}
    }
  ]

  const grouped = groupBy(genes, 'gene.id')

  const keys = Object.keys(grouped)


  return <Container>
    {
      keys.map(k => {
        if (Number(k) === 0) {
          return null
        } else {
          return <Row
            key={k}
            style={{
              position: 'absolute',
              ...(positions[grouped[k]?.[0]?.gene?.id] || {})
            }}
          >
            {
              grouped[k]?.map(gene => {
                return <CircleIcon key={gene.miBaoColor} style={{
                  width: '55%',
                  display: 'inline-block',
                  marginLeft: '-50%',
                  marginRight: '6%'
                  }}
                color={gene.miBaoColor}
                />
              })
            }
          </Row>
        }
      })
    }

  </Container>
}   