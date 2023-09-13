import styled from '@emotion/styled'
import { useToken } from '../../libs/auth'
import { useGame } from '../../libs/store/game'
import { ModImageWithEnlarge } from '../mod-image'
import { TCard } from '../../../../common/cards/cards'
import { miBaoActionState, useMiBaoAction } from '../../libs/hooks/useAction'
// import { useParams } from 'react-router-dom'
const Container = styled.div`
  position: fixed;
  bottom: 0;
  min-height: 100px;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  max-width: 100vw;
  overflow-y: auto;
`


export const BottomBar = () => {
  const token = useToken()
  const miBaoAction = useMiBaoAction()
  const gameData = useGame()



  const dashboardsData = gameData.dashboards
  const myDashBoard = dashboardsData.find(d => d.user?.token === token)
  
  const handCards = myDashBoard?.handCards || []
  const yinCards = myDashBoard?.yinCards || []


  const isInturn =  myDashBoard?.turn === 'inturn'

  const handleChooseCard = (card: TCard) => ()  => {
    if (isInturn) {
      miBaoActionState.setStateImmer(draft => {
        draft.card = card
      })
    }
  }

  return <Container>
    {handCards.map(c => {
      const isChoose = c.id === miBaoAction.card?.id
      return <div className='mr-1 is-flex is-align-items-end'>
      <ModImageWithEnlarge 
        name={c.img?.name || ''}
        onClick={handleChooseCard(c)}
        width={isChoose ? 80 * 1.2 : 80} 
        height={isChoose ? 110 * 1.2 : 110}
        enlargeWith={240}
        enlargeHeight={330}
      />
  </div>
    })}
  {/* {yinCards.map(y => {
      return <div className='mr-1 is-flex is-align-items-end'>
      <ModImageWithEnlarge 
        name={y.img?.name || ''}
        onClick={handleChooseCard(c)}
        width={isChoose ? 80 * 1.2 : 80} 
        height={isChoose ? 110 * 1.2 : 110}
        enlargeWith={240}
        enlargeHeight={330}
      />
  </div>
    })} */}
  </Container>
}
