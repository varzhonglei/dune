import { roles } from "../store/roles"
import { genRandomArray } from "../tools/random"
import { Game, Table } from "../round-table/tables"
import { DataStore } from "../store/momento"
import { Role, initDashBoard } from "../typing"


 
// const roleSet = () => {
//   const random1_4 = genRandomArray(4) 
//   roles.slice(0, 4).forEach((r, ind) => {
//     store.roles.push({
//       ...r,
//       user: store.users[random1_4[ind]]
//     })
//   })
//   store.firstPlayer = roles[random1_4[0]]
// }
const setRole = ( {
  store,
  token,
  role,
}:{
  store: DataStore<Game>,
  token: string
  role: Role
}) => {
  store.setState({
    dashboards: {
      [token]: {
        ...initDashBoard,
        role,
      }
    }
  })
}

export const setUp = (table: Table) => {
  const store = table.store

}