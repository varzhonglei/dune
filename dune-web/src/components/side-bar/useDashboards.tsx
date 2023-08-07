import styled from "@emotion/styled"
import { useGame } from "../../pages/game/store/game"
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'

const Container = styled.div`
  padding: 10px;
  width: 100%;
  border-top: 1px dashed #eee;
  height: fit-content;
`

export const useDashboards = () => {

  const gameData = useGame()
  const dashboardsData = gameData.dashboards

  const content = <>{
      dashboardsData?.map(d => {
        const user = d.user
        return <Container>
          <div className="tags are-large">
            <span className="tag" style={{background: d.miBaoColor}}>{
              user?.name ? user.name : <Icon path={mdiPlusCircleOutline} size={0.5} />
            }</span>
            <span className="tag"></span>
          </div>
        </Container>
      })
  }</>

  return {
    content
  }
}