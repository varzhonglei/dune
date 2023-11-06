import { useParams } from 'react-router-dom'
import { TLocationId, locations } from '../../../../common/locations/locations'
import { miBaoActionState, useAvailableLocations, useMiBaoAction } from '../../libs/hooks/useAction'
import { userActionMessage } from '../../libs/socket'
import { EActionType } from '../../../../common/typing/user-action'
import { useMyDashBoard } from '../../libs/hooks/useGame'

export const MiBao = ()=> {

  
  const { card, locationId } = useMiBaoAction()
  const location = locations.find(s => s.id === locationId)
  const availableLocations = useAvailableLocations()
  const { id: tableId } = useParams()
  const myDs = useMyDashBoard()
  const miBao = myDs?.mibao?.[0]

  const handleSendMiBaoAction = () => {
    miBaoActionState.setState({
      card: null,
      locationId: null,
    })
    userActionMessage( {
      tableId: Number(tableId),
      actionType: EActionType.miBao,
      payload: {
        miBaoAction: {
          cardId: Number(card?.id),
          miBaoId: Number(miBao?.id),
          locationId: location?.id as TLocationId,
        }
      }
    })
  }


  return <div className="flex-center">
    {
      availableLocations.map(l =>  <button 
        onClick={() => {
          miBaoActionState.setStateImmer(old => {
            old.locationId = l.id
          })
        }}
        className="button is-info is-light mr-1 ml-1">{
        l.name
      }</button>)
    }
    <div className='w-100 h100 ml-1 mr-1 is-flex is-flex-direction-column'>
      {
        card && location && <>
          <div className=''>
            { card.name };
            { location.id }
          </div>
          <div className=''>
            <button onClick={handleSendMiBaoAction} className="button is-primary">确认</button>
          </div>
        </>
      }
    </div>
  </div>
}