import { Table } from "../../round-table/tables"
import { Dashboard } from "../../../common/typing"
import { TAction } from "../userActions"


type TCreateHandler<T> = (dashboard:Dashboard, payload: T ) => void
type Handler<T> = {
  table: Table
  token: string,
  payload: T
}

type P = {
  table: Table
  token: string,
  payload: TAction
}

export const CreateLocationHandler = <T>(fn: TCreateHandler<T>) => ({
  table,
  token,
  payload }: Handler<T>
) => {
  table.store.setState(s => {
      const dashboard = s.dashboards.find(d => d.user?.token === token)
      if (dashboard) {
        fn(dashboard, payload) 
      }
  }) 
}


export const miBaoHandler = ({
  table,
  token,
  payload,
}: P) => {
  if (payload.miBaoAction) {
    const ap = payload.miBaoAction
    table.setState(s => {
      const dashboard = s.dashboards.find(d => d.user?.token === token)
      const location = s.station.find(s => s.id === ap?.locationId)
      const card = s.allCard.find(c => c.id === ap.cardId)
      if (dashboard && location && card) {
        const mibao = dashboard.mibao.pop()
        mibao && location.miBao?.push(mibao)
        
        dashboard.effects.push(...location.get, ...card.playEffect)
        dashboard.handCards = dashboard.handCards.filter(c => c.id !== card?.id)
        dashboard.playedCards.push(card)
      }
  })}
}

