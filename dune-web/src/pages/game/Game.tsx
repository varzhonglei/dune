import { useEffect } from "react"
import { useMods } from "../../libs/hooks/useModsFile"
import { sendMessage } from "../../libs/socket"
import { MessageType } from "../../../../common/typing/socket"
import { getToken } from "../../libs/auth"

export const Game = () => {
  const mods = useMods()
  const bg1 = mods.find(m => m.name === 'bg1.jpg')
  const imageUrl = bg1?.file && URL.createObjectURL(bg1.file)
  
  useEffect(() => {
    sendMessage({
      type: MessageType.reqData,
      data: {
        //todo
        tableId: 1,
        token: getToken()
      }
    })
  }, [])
  return <>{
    <img src={imageUrl}/>
  }</>
}