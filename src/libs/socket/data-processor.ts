import { produce } from "immer"
import { Game } from "../../../common/game"
import { TCard } from "../../../common/cards/cards"
import { TYinCard } from "../../../common/yin-card/yin-card"


const fakerCard: TCard = {
  name: 'fakerCard',
  id: -9999
}
const fakerYin: TYinCard = {
  cardName: 'fakerYinCard',
  id: -9999,
  img: {name: '-'}
}

export const clearSecretInfo = (game: Game, name: string) => {
  return produce(game, (draft) => {
    for(let i = 0; i < draft.dashboards.length; i++) {
      const ds = draft.dashboards[i]
      ds.moCards = ds.moCards.map(hc => (fakerCard))
      if (ds.user?.name !== name) {
        ds.yinCards = ds.yinCards.map(y => (fakerYin))
      }
    }
    draft.yinCards = []
  })
}

