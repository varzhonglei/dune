import { locations } from '../../../../common/locations/locations'
import { MessageType } from '../../../../common/typing/socket'
import { miBaoActionState, useAvailableLocations, useMiBaoAction } from '../../libs/hooks/useAction'
import { sendMessage } from '../../libs/socket'

export const MiBao = ()=> {

  const { card, locationId } = useMiBaoAction()
  const location = locations.find(s => s.id === locationId)
  const availableLocations = useAvailableLocations()

  const handleSendMiBaoAction = () => {
    sendMessage({
      type: MessageType.userAction,
      data: {
        // token:string,
        // tableId: number,
        // storeIndex: string,
        // name: string,
        // actionType: EActionType,
        // payload: TAction
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