import { Table } from "../../round-table/tables"
import { TAction } from "."


type P = {
  table: Table
  token: string,
  payload: TAction
}
export const yinHandler = ({
  table,
  token,
  payload,
}: P) => {
  // if (payload.yinCard) {

  // }
}