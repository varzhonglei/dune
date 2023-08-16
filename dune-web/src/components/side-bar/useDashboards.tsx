import styled from "@emotion/styled"
import { useGame } from "../../libs/store/game"
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import { joinTable } from "../../libs/api/table"
import { noop } from "lodash"
import { useParams } from "react-router-dom"
import { sendMessage } from "../../libs/socket"
import { MessageType } from "../../../../common/typing/socket"
import { useToken } from "../../libs/auth"
import { cls } from "../../libs/utils/class-names"
import { Image } from "../image"
import MoneyImg  from '../../assets/money.svg'
import WaterImg  from '../../assets/water.svg'
import SpiceImg  from '../../assets/spice.svg'
import TurnImg  from '../../assets/turn.svg'
import { ModImage } from "../mod-image"
import { getRoleByKey } from '../../../../common/roles/roles'
import { useIsStart } from "../../libs/hooks/useGame"
import './dashboard.scss'

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
  padding: 10px;
  width: 100%;
  border-bottom: 1px dashed #eee;
  height: fit-content;
  margin-bottom: 8px;
`



export const useDashboards = () => {

  const token = useToken()
  const gameData = useGame()
  const gameStart = useIsStart()

  const { id: tableId } = useParams()

  const dashboardsData = gameData.dashboards

  const handleJoinTable = async (params: { ind: number, id: number }) => {
    await joinTable(params)
  }

  const handleReady = async () => {
    sendMessage({
      type: MessageType.iAmReady,
      data: {
        tableId: Number(tableId),
        token,
      }
    })
  }

  if (!tableId) return {
    content: null
  }
  const content = <>{
      dashboardsData?.map((d, ind) => {
        const user = d.user
        const ready = user?.readyStatus === 'ready'
        const role = getRoleByKey(d.role)
        const isMe = d.user?.token === token
        return <Container
          key={d.miBaoColor}
        >
          <div className="tags hover-f mb-1">
            <span 
              onClick={user?.name ? noop : handleJoinTable.bind(null, {
                ind,
                id: Number(tableId),
              })}
              className="tag mb-0" 
              style={{background: d.miBaoColor, color: '#fff'}}>
              {
                user?.name ? user.name : <Icon path={mdiPlusCircleOutline} size={0.7} />
              }
              { ready && !gameStart && '👌' }   
            </span>
            {
              gameStart && gameData.firstPlayer === ind && <div className='tag is-light mb-0'>先手</div>
            }
            {
              gameStart &&  d.turn === 'inturn' && <Image title={'turn'} width={25} src={TurnImg}/>
            }
            {
              user?.token === token && !gameStart ? <span 
              onClick={handleReady}
              className={
                cls('tag is-link is-light mb-0', {
                  'is-primary': ready,
                  'is-info': !ready,
                  'hover-c': ready,
                })
              }>{
                ready ? '取消' : '准备'
              }</span> : null
            }
          </div>
          {
            gameStart && <> 
          <div className="is-flex">
            <div className="is-flex">
              <ModImage  className="mr-2"  style={{borderRadius: '20px'}} name={role.srcName} sprite={role.sprite} width={40} height={40}/>
            </div>
            <div className="flex-center mr-2 dashboard-source">
              <Image height={30} src={WaterImg}/> 
              <div className="has-text-white dashboard-source-count">{d.water}</div>
            </div>
            <div className="flex-center mr-2 dashboard-source">
              <Image height={30} src={SpiceImg}/> 
              <div className="has-text-white dashboard-source-count">{d.spice}</div>
            </div>
            <div className="flex-center mr-2 dashboard-source">
              <Image height={30} src={MoneyImg}/> 
              <div className="has-text-white dashboard-source-count">{d.money}</div>
            </div>
          </div>       
            </>
          }
        </Container>
      })
  }
  </>
  return {
    content
  }
}