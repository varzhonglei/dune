import { roles } from "../../common/roles/roles"
import { Role } from "../../common/typing"
import { Table } from "../round-table/tables"
import { random, shuffle, slice } from "lodash"


const setRoles = (table: Table) => {
  const rs = Object.values(roles)
  rs.sort((a,b) => random(-1.1, 1.1))
  rs.slice(0, 4).forEach((role, ind) => {
    table.store.setState(draft => {

      const dbs = draft.dashboards[ind]
      dbs.role = role.key
      if (role.key === Role.queen) {
        dbs.water = 0
      }
      if (role.key === Role.fanshu2) {
        dbs.money = 1
        dbs.spice = 1
      }
    })
  })

}
const setFirstPlayer = (table: Table) => {
  const randomNum = random(0, 3)
  table.store.setState(draft => {
    draft.dashboards[randomNum].turn = 'inturn'
    draft.firstPlayer = randomNum
  })
}

const firstDrawCard = (table: Table) => {
  table.store.setState((draft) => {
    [0,1,2,3].forEach(k => {
      const d = draft.dashboards[k]
      const operationCards = shuffle(d.moCards)
      d.handCards = slice(operationCards, 0, 5)
      d.moCards = slice(operationCards, 5)
    })
  })
}

const firstDrawYin = (table: Table) => {
  table.store.setState((draft) => {
    const operationCards = shuffle(draft.yinCards);
    [0,1,2,3].forEach(k => {
      const d = draft.dashboards[k]
      d.yinCards = [operationCards[k]]
    })
    draft.yinCards = slice(operationCards, 4)
  })
}

const setTechnology = (table: Table) => {
  table.store.setState((draft) => {
    const technology = shuffle(draft.technology);
    const [t0,t1,t2] = technology
    draft.technologyDeck[0].cur = t0
    draft.technologyDeck[1].cur = t1
    draft.technologyDeck[2].cur = t2
  })
}


export const setupDune = (table: Table) => {  
  table.store.setState(s => {
    s.stage = 1
  })
  setRoles(table)
  setFirstPlayer(table)
  firstDrawCard(table)
  firstDrawYin(table)
  setTechnology(table)
}