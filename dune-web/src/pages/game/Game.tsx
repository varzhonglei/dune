import { useEffect } from "react"
import { useMods } from "../../libs/hooks/useModsFile"
import { sendMessage } from "../../libs/socket"
import { MessageType } from "../../../../common/typing/socket"
import { getToken } from "../../libs/auth"
import { useParams } from "react-router-dom"
import { useGame } from "./store/game"

export const Game = () => {
  const mods = useMods()
  const bg1 = mods.find(m => m.name === 'bg1.jpg')
  const imageUrl = bg1?.file && URL.createObjectURL(bg1.file)
  const { id: tableId } = useParams()
  const gameData = useGame()
  useEffect(() => {
    if (tableId) {
      sendMessage({
        type: MessageType.reqData,
        data: {
          tableId: Number(tableId),
          token: getToken()
        }
      })
    }
  }, [tableId])
  return <>{
    <img src={imageUrl}/>
  }</>
}