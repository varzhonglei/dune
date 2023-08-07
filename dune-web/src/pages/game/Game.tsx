import { useMods } from "../../libs/hooks/useModsFile"
import { useGame, useGameSubscribe } from "./store/game"


export const Game = () => {
  const mods = useMods()
  const bg1 = mods.find(m => m.name === 'bg1.jpg')
  const imageUrl = bg1?.file && URL.createObjectURL(bg1.file)
  const game = useGame()
  useGameSubscribe()

  return <>{
    <img src={imageUrl}/>
  }</>
}