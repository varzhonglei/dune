import { MessageType, TMessage } from "../../../../common/typing/socket"


export const createMsg = <T extends MessageType>(msg: TMessage<T>): string => {
  return JSON.stringify(msg)
}