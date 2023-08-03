import styled from "@emotion/styled"
import { createSyncExternalAtom, useSyncExternalState } from "../../libs/hooks/useSyncStore"

type TAlert = {
  id?: number
  type?: 'danger' | 'warning' | 'info' | 'success'
  text: string
}
const alertStore = createSyncExternalAtom<TAlert[]>([])
const useAlertStore = () => useSyncExternalState(alertStore)

let alertId = 1
// eslint-disable-next-line react-refresh/only-export-components
export const addToast = (i: TAlert) => {
  const id = alertId
  alertStore.setState(cur => [...cur, {
    id: id,
    ...i,
  }])
  setTimeout(() => {
    alertStore.setState(cur => {
      return cur.filter(c => c.id !== id)
    })
  }, 6000)
  alertId++
}

const Container = styled('div')`
  position: fixed;
  bottom: 30px;
  z-index: 10003;
  left: 50%;
  transform: translateX(-50%);
`

export function SimpleToast () {
  const alerts = useAlertStore()
  const RenderItem = (i: TAlert) => {
    return <div 
      key={ i.id }
      className={`notification is-${i.type || 'info'} is-light`}>
      <button onClick={ () => {
        alertStore.setState(cur => {
          return cur.filter(c => c.id !== i.id)
        })
      } } className="delete"></button>
      { i.text }
    </div>
  }
  return (
    <Container>
      { alerts.map(i => {
        return RenderItem(i)
      }) }
    </Container>
  )
}
