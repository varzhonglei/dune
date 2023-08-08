import styled from "@emotion/styled"
import { useGame } from "../../pages/game/store/game"
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import { joinTable } from "../../libs/api/table"
import { noop } from "lodash"
import { useParams } from "react-router-dom"
import { sendMessage } from "../../libs/socket"
import { MessageType } from "../../../../common/typing/socket"
import { useToken } from "../../libs/auth"
import { cls } from "../../libs/utils/class-names"
import { ModImage } from "../mod-image"

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
  padding: 10px;
  width: 100%;
  border-top: 1px dashed #eee;
  height: fit-content;
  margin-top: 20px;
`



export const useDashboards = () => {

  const gameData = useGame()
  const token = useToken()

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
        return <Container
          key={d.miBaoColor}
        >
          <div className="tags hover-f mb-1">
            <span 
              onClick={user?.name ? noop : handleJoinTable.bind(null, {
                ind,
                id: Number(tableId),
              })}
              className="tag" 
              style={{background: d.miBaoColor, color: '#fff'}}>
              {
                user?.name ? user.name : <Icon path={mdiPlusCircleOutline} size={0.7} />
              }
              { ready && '👌' }   
            </span>
            {
              user?.token === token ? <span 
              onClick={handleReady}
              className={
                cls('tag is-link is-light', {
                  'is-primary': ready,
                  'is-info': !ready,
                  'hover-c': ready,
                })
              }>{
                ready ? '取消' : '准备'
              }</span> : null
            }
          </div>
          <div className="is-flex">
            {
              //todo: fixme warter
            }
            <div className="flex-center mr-4">
              <ModImage height={30} name={'warter.jpg'}/> 
              <div className="ml-1">{d.water}</div>
            </div>
            <div className="flex-center mr-4">
              <ModImage height={30} name={'spice.jpg'}/> 
              <div className="ml-1">{d.spice}</div>
            </div>
            <div className="flex-center mr-4">
              <ModImage height={30} name={'money.jpg'}/> 
              <div className="ml-1">{d.money}</div>
            </div>
          </div>
        </Container>
      })
  }</>
  return {
    content
  }
}