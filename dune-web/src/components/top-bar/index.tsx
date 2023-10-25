import styled from '@emotion/styled'
import { useMyName, useToken } from '../../libs/auth'
import { useGame } from '../../libs/store/game'
import { useAvailableStation, useGetEffects, useMiBaoAction } from '../../libs/hooks/useAction'
const Container = styled.div`
    min-height: 50px;
    max-height: 120px;
    width: 100vw;
    display: flex;  
    flex-direction: column;  
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #bbb;
    z-index: 3;
`

const Top = styled.div`
  min-height: 50px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
 


export const TopBar = () => {
  const myName = useMyName()
  const gameData = useGame()
  
  const myDashboard = gameData.dashboards.find(d => d.user?.name === myName)

  const miBaoAction = useMiBaoAction()
  const availableStations = useAvailableStation()
  const myEffects = useGetEffects()

  const isInturn = myDashboard?.turn === 'inturn'

  return <Container>
    <Top>
      <div className='has-text-danger-dark title is-4 mb-0'>
        {
          isInturn ? '轮到你了' : ''
        }
      </div>
      {
        isInturn && <div className='title is-5'>
        特使行动阶段
      </div>
      }
    </Top>

  </Container>
}