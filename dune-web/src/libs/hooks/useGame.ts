import { useGame } from "../store/game"


export const useIsStart = () => {
    const gameData = useGame()
    return gameData.stage !== 0
}