import { Table } from "../../round-table/tables"
import { Dashboard } from "../../../common/typing"
import { TAction } from "../../../common/typing/user-action"
import { LocationIcon, locations } from "../../../common/locations/locations"
import { allCards } from "../../../common/cards"


type TCreateHandler<T> = (dashboard:Dashboard, payload: T ) => void
type Handler<T> = {
  table: Table
  name: string,
  payload: T
}

type P = {
  table: Table
  name: string,
  payload: TAction
}

export const CreateLocationHandler = <T>(fn: TCreateHandler<T>) => ({
  table,
  name,
  payload }: Handler<T>
) => {
  table.store.setState(s => {
      const dashboard = s.dashboards.find(d => d.user?.name === name)
      if (dashboard) {
        fn(dashboard, payload) 
      }
  }) 
}



const baifoDi = [LocationIcon.fremen, LocationIcon.empire, LocationIcon.sister, LocationIcon.union]
type TBaifoDi = LocationIcon.fremen | LocationIcon.empire | LocationIcon.sister | LocationIcon.union

export const miBaoHandler = ({
  table,
  name,
  payload,
}: P) => {

  if (payload.miBaoAction) {
    const ap = payload.miBaoAction
    table.setState(s => {
      const dashboard = s.dashboards.find(d => d.user?.name === name)
      const location = locations.find(s => s.id === ap?.locationId)
      const card = allCards.find(c => c.id === ap.cardId)
      if (dashboard && location && card) {

        if (dashboard.effects.length > 0) {
          //skip
          return
        }
        if (dashboard.turn !== 'inturn') {
          //skip
          return
        }

        const mibao = dashboard.mibao.pop()
        mibao && location.miBao?.push(mibao)

        if (baifoDi.includes(location.icon)) {
          dashboard[location.icon as TBaifoDi] = Math.max(dashboard[location.icon as TBaifoDi] + 1, 5)
        }
        if (location.require) {
          location.require.forEach(c => {
            // dashboard
          })
        }
        
        dashboard.effects.push(...(location.get|| []), ...(card.playEffect || []))
        dashboard.handCards = dashboard.handCards.filter(c => c.id !== card?.id)
        dashboard.playedCards.push(card)
      }
  })}
}

