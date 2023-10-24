import { useGame } from "../store/game"


export const useIsStart = () => {
    const gameData = useGame()
    return gameData.stage !== 0
}

export const useMeDashBoald = () => {
    const gameData = useGame()
    // return gameData.dashboards?.filter(d => d.user?.token === )
}