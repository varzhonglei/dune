import { Table } from "../../round-table/tables"
import { Dashboard } from "../../../common/typing"
import { TAction } from "../../../common/typing/user-action"
import { TBaiFoDi, baiFoBasicInf, baiFoDi } from "../../../common/locations/locations"
import { BasicHandler } from "./basicHandler"
import { allCards } from "../../../common/cards/cards"


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


export const miBaoHandler = ({
  table,
  name,
  payload,
}: P) => {

  if (payload.miBaoAction) {
    const ap = payload.miBaoAction
    table.setState(s => {
      const dashboard = s.dashboards.find(d => d.user?.name === name)
      const location = s.locations.find(s => s.id === ap?.locationId)
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

        if (location.require) {
          //todo: some check & skip
        }


        const mibao = dashboard.mibao.pop()
        mibao && location.miBao?.push(mibao)


        // 拜佛
        const theBaio = location.icon as TBaiFoDi
        if (baiFoDi.includes(theBaio)) {
          BasicHandler({
            dashboard,
            typeKey: baiFoBasicInf[theBaio].key,
            payload: {
              number: 1
            },
            game: s
          })
        }

        if (location.pay) {
          location.pay.forEach(pay => {
            BasicHandler({
              dashboard,
              typeKey: pay.key,
              payload: {
                number: pay.number
              },
              game: s
            })
         })
        }
        
        dashboard.mibaoActioned = true
        dashboard.effects.push(...(location.get|| []), ...(card.playEffect || []))
        dashboard.handCards = dashboard.handCards.filter(c => c.id !== card?.id)
        dashboard.playedCards.push(card)
      }
  })}
}

