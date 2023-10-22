import styled from '@emotion/styled'
import { useToken } from '../../libs/auth'
import { useGame } from '../../libs/store/game'
const Container = styled.div`
    min-height: 50px;
    max-height: 120px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #bbb;
    z-index: 3
`
 


export const TopBar = () => {
  const token = useToken()
  const gameData = useGame()
  
  const myDashboard = gameData.dashboards.find(d => d.user?.token === token)

  const isInturn =  myDashboard?.turn === 'inturn'

  return <Container>
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
  </Container>
}