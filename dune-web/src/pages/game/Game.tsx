import { ModImage } from "../../components/mod-image"
import { useGameSubscribe } from "../../libs/store/game"


export const Game = () => {
  useGameSubscribe()

  return <>{
    <ModImage name={'bg1.jpg'}/>
  }</>
}