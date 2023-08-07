import { MessageType } from "../../../common/typing/socket"
import { sendMessage2All } from "../../libs/socket"


export const sendTableChange = (tableId?: number) => {
  sendMessage2All({
    type: MessageType.tableChange,
    data: tableId ? {
      tableId,
    } : null
  })
}