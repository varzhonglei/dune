import { Table } from "../../round-table/tables"
import { Dashboard } from "../../../common/typing"
import { TAction } from "../../../common/typing/user-action"
import { LocationIcon } from "../../../common/locations/locations"
import { allCards } from "../../../common/cards"
import { BasicHandler } from "./basicHandler"
import { EEffect, TEffect } from "../../../common/typing/effect"


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


const baiFoDi = [LocationIcon.fremen, LocationIcon.empire, LocationIcon.sister, LocationIcon.union]
const baiFoBonus: {
  [key in TBaiFoDi]: TEffect
} = {
  [LocationIcon.fremen]: { key: EEffect.getWater },
  [LocationIcon.sister]: { key: EEffect.drawYin },
  [LocationIcon.union]: { key: EEffect.getMoney, number: 3 },
  [LocationIcon.empire]: { key: EEffect.getTroops, number: 2 },
}
type TBaiFoDi = LocationIcon.fremen | LocationIcon.empire | LocationIcon.sister | LocationIcon.union

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
          const old = dashboard[theBaio] 
          dashboard[theBaio] = Math.min(dashboard[location.icon as TBaiFoDi] + 1, 5)
          if (dashboard[theBaio] === 4 && old === 3) {
            BasicHandler(
              {
                dashboard,
                typeKey: baiFoBonus[theBaio].key,
                payload: {
                  number: baiFoBonus[theBaio].number
                },
                game: s,
              }            
            )
          }
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

