import styled from "@emotion/styled"
import { useGame } from "../../libs/store/game"
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import { joinTable } from "../../libs/api/table"
import { noop } from "lodash"
import { useParams } from "react-router-dom"
import { sendMessage } from "../../libs/socket"
import { MessageType } from "../../../../common/typing/socket"
import { useMyName } from "../../libs/auth"
import { cls } from "../../libs/utils/class-names"
import { Image } from "../image"
import MoneyImg  from '../../assets/money.svg'
import WaterImg  from '../../assets/water.svg'
import SpiceImg  from '../../assets/spice.svg'
import TurnImg  from '../../assets/turn.svg'
import { ModImage, SpriteImageWithEnlarge } from "../mod-image"
import { getRoleByKey } from '../../../../common/roles/roles'
import { useIsStart } from "../../libs/hooks/useGame"
import './dashboard.scss'
import { MiBaoEmptyIcon, MiBaoIcon } from "../../assets/svg"

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
  padding: 10px;
  width: 100%;
  border-bottom: 1px dashed #eee;
  height: fit-content;
  margin-bottom: 8px;
`



export const useDashboards = () => {

  const myName = useMyName()
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
              user?.name === myName && !gameStart ? <span 
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
              <SpriteImageWithEnlarge isViewAll 
                className="mr-2"  
                style={{borderRadius: '20px'}} 
                name={role.srcName} 
                sprite={role.sprite} 
                width={40} height={40}
                enlargeWidth={1150/2} enlargeHeight={804 /2}
              />
            </div>
            <div className="flex-center mr-4 dashboard-source">
              <ModImage name="point.jpg"  width={35} height={35}/> 
              <div className="has-text-white dashboard-source-count is-size-6">{d.point}</div>
            </div>
            <div className="flex-center mr-2 dashboard-source">
              <Image height={23} src={WaterImg}/> 
              <div className="has-text-white dashboard-source-count">{d.water}</div>
            </div>
            <div className="flex-center mr-2 dashboard-source">
              <Image height={25} src={SpiceImg}/> 
              <div className="has-text-white dashboard-source-count">{d.spice}</div>
            </div>
            <div className="flex-center mr-2 dashboard-source">
              <Image height={25} src={MoneyImg}/> 
              <div className="has-text-white dashboard-source-count">{d.money}</div>
            </div>
          </div>    
          <div className="is-flex pt-2">
            <div className="flex-center mr-2">
              {
                d.mibao[0] ? <MiBaoIcon width={30} height={40} color={d.miBaoColor || ''}/> : <MiBaoEmptyIcon  width={30} height={40}/>
              }
            </div>
            <div className="flex-center mr-2">
              {
                d.mibao[1] ? <MiBaoIcon  width={30} height={40} color={d.miBaoColor || ''}/> : <MiBaoEmptyIcon  width={30} height={40}/>
              }
            </div>
            <div className="flex-center mr-2">
              {
                d.mibao[2] ? <MiBaoIcon  width={30} height={40} color={d.miBaoColor || ''}/> : <MiBaoEmptyIcon   width={30} height={40}/>
              }
            </div>
            <div className="flex-center mr-2 dashboard-source">
              <ModImage name="draw.jpg"  width={30}/> 
              <div className="has-text-white dashboard-source-card-count">{d.handCards.length}</div>
            </div>
            <div className="flex-center mr-2 dashboard-source">
              <ModImage name="draw-yin.jpg"  width={30}/> 
              <div className="has-text-white dashboard-source-card-count">{d.yinCards.length}</div>
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