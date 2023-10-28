import styled from '@emotion/styled'
import { useMyName, useToken } from '../../libs/auth'
import { useGame } from '../../libs/store/game'
import { useGetEffects } from '../../libs/hooks/useAction'
import { ModImageWithEnlarge } from '../mod-image'
import { MiBao } from './Mibao'
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

const Bottom = styled.div`
  height: 70px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
 

export const TopBar = () => {
  const myName = useMyName()
  const gameData = useGame()
  const myDashboard = gameData.dashboards.find(d => d.user?.name === myName)

  const yinCards = myDashboard?.yinCards || []


  const myEffects = useGetEffects()

  const hasEffects = myEffects?.length !== 0
  const isInturn = myDashboard?.turn === 'inturn'

  return <Container>
    <Top>      
      {
        isInturn ? <div className='has-text-danger-dark title is-4 mb-0'>轮到你了</div>
        : <div className='title is-4 mb-0'>Dune</div>
      }
     
      {
        isInturn && <div className='title is-5'>
          特使行动阶段
        </div>
      }
    </Top>

    <Bottom>
      <div className="columns w100">

        { hasEffects && <div className="column-n-pd is-two-thirds">
            <div className="flex-center">
                {myEffects?.map(e => e.toString())}
            </div>
          </div> }
        {
          !hasEffects &&  <div className="column-n-pd is-two-thirds">
            <div className="flex-center">
              <MiBao/>
            </div>
          </div>
        }
      </div> 
      <div className="column-n-pd flex-center">
          <div  className="flex-center">
            <div className="mr-1">密谋牌：</div>
            {
              yinCards.map(yc => <ModImageWithEnlarge 
                key={yc.id}
                name={yc?.img?.name}
                // 687/1039
                width={ 65 * 687/1039}
                height={65}
                enlargeWidth={240 * 687/1039}
                enlargeHeight={240}
              />)
            }
          </div>
        </div>
    </Bottom>
  </Container>
}