import styled from "@emotion/styled"
import { useGame } from "../../pages/game/store/game"
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import { joinTable } from "../../libs/api/table"
import { noop } from "lodash"
import { useParams } from "react-router-dom"

const Container = styled.div`
  padding: 10px;
  width: 100%;
  border-top: 1px dashed #eee;
  height: fit-content;
`

export const useDashboards = () => {

  const gameData = useGame()

  const { id: tableId } = useParams()

  const dashboardsData = gameData.dashboards

  const handleJoinTable = async (params: { ind: number, id: number }) => {
    await joinTable(params)
  }

  const content = <>{
      dashboardsData?.map((d, ind) => {
        const user = d.user
        return <Container
          key={d.miBaoColor}
        >
          <div className="tags are-large">
            <span 
              onClick={user?.name ? noop : handleJoinTable.bind(null, {
                ind,
                id: Number(tableId),
              })}
              className="tag" 
              style={{background: d.miBaoColor, color: '#fff'}}>{
              user?.name ? user.name : <Icon path={mdiPlusCircleOutline} size={0.5} />
            }</span>
            <span className="tag">todo: 准备就绪</span>
          </div>
        </Container>
      })
  }</>

  return {
    content
  }
}