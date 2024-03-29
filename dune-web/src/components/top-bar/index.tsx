import styled from '@emotion/styled'
import { useMyName } from '../../libs/auth'
import { useGame } from '../../libs/store/game'
import { useGetEffects } from '../../libs/hooks/useAction'
import { MiBao } from './Mibao'
import { userActionMessage } from '../../libs/socket'
import { useParams } from 'react-router-dom'
import { EActionType } from '../../../../common/typing/user-action'
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
  const { id: tableId } = useParams()

  const myEffects = useGetEffects()

  const hasEffects = myEffects?.length !== 0
  const isInturn = myDashboard?.turn === 'inturn'
  const mibaoActioned = myDashboard?.mibaoActioned
  const revealed = myDashboard?.revealed

  return <Container>
    <Top>      
      {
        isInturn ? <div className='has-text-danger-dark title is-4 mb-0'>轮到你了</div>
        : <div className='title is-4 mb-0'>Dune</div>
      }
     
      {
        isInturn && !mibaoActioned &&  <div className='title is-5'>
          特使行动阶段
        </div>
      }
    </Top>

    <Bottom>
      <div className="columns w100">
        { hasEffects && <div className="column-n-pd is-two-thirds">
            <div className="flex-center">
                {myEffects?.map(e => <button 
                  onClick={() => { 
                    userActionMessage( {
                      tableId: Number(tableId),
                      actionType: EActionType.todoEffect,
                      payload: {
                        todoEffect: e
                      }
                    })
                   }}
                  className="button is-info is-light mr-1 ml-1">{
                  e.key
                }</button>)}
            </div>
          </div> }
        {
          !hasEffects &&  <div className="column-n-pd is-two-thirds">
            <div className="flex-center">
              <MiBao/>
            </div>
          </div>
        }
        <div className="column column-n-pd">
        {
          isInturn && <>
           {
            revealed || mibaoActioned && !hasEffects &&  <button 
              onClick={() => {
                userActionMessage( {
                  tableId: Number(tableId),
                  actionType: EActionType.endTurn,
                  payload: {}
                })
              }}
              className="button is-info is-light mr-1 ml-1">
                结束轮次
            </button>
          }
          {
            !revealed && !mibaoActioned && <button 
              onClick={() => {
                //
              }}
              className="button is-info is-light mr-1 ml-1">
                展示
            </button>
            }
          </>
        }
        </div>
      </div> 
    </Bottom>
  </Container>
}