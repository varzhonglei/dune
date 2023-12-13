
import styled from "@emotion/styled"
import { useModsWithLoading } from "../../libs/hooks/useModsFile"
import { Game } from "./Game"

const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const GamePage = () => {
  const { modsLoadProgress } = useModsWithLoading()
  
  if (modsLoadProgress < 100) return <Container className="flex-center is-flex-direction-column">
    <progress className="progress is-primary max-w-400" value={modsLoadProgress} max="100"></progress>
  </Container>
  return <Game></Game>
}