import styled from "@emotion/styled"
import { useGame } from "../../libs/store/game"
import { CircleIcon, TroopsIcon } from "../../assets/svg"
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

const startPositions = [{
  top: '13%',
  left: '7%',
},{
  top: '25%',
  left: '7%',
},{
  top: '37%',
  left: '7%',
},{
  top: '49%',
  left: '7%',
}]

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
    top: '3.8%',
    left: '34.3%',
  },
  {
    top: '26.5%',
    left: '34.3%',
  },
  {
    top: '50%',
    left: '34.3%',
  },
  {
    top: '15%',
    left: '45%',
  },
  {
    top: '38%',
    left: '45%',
  },
  {
    top: '61.2%',
    left: '45%',
  },
  {
    top: '3.7%',
    left: '56%',
  },
  {
    top: '26.7%',
    left: '56%',
  },
  {
    top: '49.7%',
    left: '56%',
  },
  {
    top: '15%',
    left: '67%',
  },
  {
    top: '38%',
    left: '67%',
  },
  {
    top: '61.2%',
    left: '67%',
  },
  {
    top: '3.9%',
    left: '77.6%',
  },
  {
    top: '26.5%',
    left: '77.6%',
  },
  {
    top: '49.7%',
    left: '77.6%',
  },
  {
    top: '15%',
    left: '89.5%',
  },
  {
    top: '38.4%',
    left: '89.5%',
  },
  {
    top: '61.4%',
    left: '89.5%',
  },
]



export const Research = () => {
  const gameData = useGame()
  const genes = gameData.dashboards.map(d => {
    return {
        miBaoColor: d.miBaoColor,
        gene: d.gene
    }
  })

  const indexInformation = gameData.dashboards.reduce((pre, cur, index) => {
    return {...pre, 
      [cur.miBaoColor || index]: index
    }
  }, {}) as any

  const grouped = groupBy(genes, 'gene.id')

  const keys = Object.keys(grouped)


  return <Container>
    {
      keys.map(k => {
        if (Number(k) === 0) {
          return <Row
            key={k}
            style={{ height: '100%', width: '12%' }}
          >
            {
              grouped[k]?.map((gene) => {
                return <CircleIcon key={gene.miBaoColor} style={{
                    width: '55%',
                    position: 'absolute',
                    ...(startPositions[indexInformation[gene?.miBaoColor || '']] || {})
                  }}
                  color={gene.miBaoColor}
                />
              })
            }
          </Row>
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
    <TTLTroops></TTLTroops>
  </Container>
}   


const C2 = styled('div')`
  position: absolute;
  left: 2%;
  bottom: 6%;
  width: 25%;
  height: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const TTLTroops = () => {
  const gameData = useGame()
  
  return <C2>
    { gameData.dashboards?.map(d => {
      const count = d.troops.troopsTLL.length
      if (count === 0) return null
      return <div className="ml-4 mr-4 is-flex is-align-items-center" style={{ width: '25%', height: '25%' }}>
        <TroopsIcon size={18} color={d.miBaoColor}></TroopsIcon> 
        <div style={{color: d.miBaoColor}}>{ count }</div>
      </div>
    })}
  </C2>
}