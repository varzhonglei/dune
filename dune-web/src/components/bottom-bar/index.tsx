import styled from '@emotion/styled'
import { useMyName } from '../../libs/auth'
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
  const myName = useMyName()
  const miBaoAction = useMiBaoAction()
  const gameData = useGame()

  const dashboardsData = gameData.dashboards
  const myDashBoard = dashboardsData.find(d => d.user?.name === myName)
  
  const handCards = myDashBoard?.handCards || []
  const yinCards = myDashBoard?.yinCards || []

  const isInturn =  myDashBoard?.turn === 'inturn'

  const mibaoActioned = myDashBoard?.mibaoActioned

  const handleChooseCard = (card: TCard) => ()  => {
    if (isInturn && !mibaoActioned) {
      miBaoActionState.setStateImmer(draft => {
        if (draft.card?.id === card.id) {
          draft.card = null
        } else {
          draft.card = card
        }
      })
    }
  }

  return <Container>
    {handCards.map(c => {
      const isChoose = c.id === miBaoAction.card?.id
      return <div key={c.id} className='mr-1 is-flex is-align-items-end'>
      <ModImageWithEnlarge 
        name={c.img?.name || ''}
        onClick={handleChooseCard(c)}
        width={isChoose ? 80 * 1.2 : 80} 
        height={isChoose ? 110 * 1.2 : 110}
        enlargeWidth={240}
        enlargeHeight={330}
      />
  </div>
    })}
    <div className="column-n-pd flex-center">
      <div  className="flex-center">
        <div className="mr-1">密谋牌：</div>
        {
          yinCards.map(yc => <ModImageWithEnlarge 
            key={yc.id}
            name={yc?.img?.name}
            // 687/1039
            width={ 65 * 687/1039}
            height={65}
            enlargeWidth={240 * 687/1039}
            enlargeHeight={240}
          />)
        }
      </div>
    </div>
  </Container>
}
