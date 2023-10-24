import { useMyName } from "../auth"
import { useGame } from "../store/game"


export const useIsStart = () => {
    const gameData = useGame()
    return gameData.stage !== 0
}

export const useMyDashBoard = () => {
    const gameData = useGame()
    const myName = useMyName()
    return gameData.dashboards?.find(d => d.user?.name === myName)
}