import { TCard } from "../../../../common/cards/cards"
import { TLocationId, locations } from "../../../../common/locations/locations"
import { EConstraint } from "../../../../common/typing/effect"
import { useMyDashBoard } from "./useGame"
import { createSyncExternalAtom, useSyncExternalState } from "./useSyncStore"

export const miBaoActionState = createSyncExternalAtom<{
  card: TCard | null
  locationId: TLocationId | null
}>({
  card: null,
  locationId: null
})

export const useMiBaoAction = () => useSyncExternalState(miBaoActionState)

export const useAvailableLocations = () => {
  const info = useMiBaoAction()
  const myDashBoard = useMyDashBoard()
  if (!myDashBoard) return []

  return locations
    .filter(s => info.card?.icons?.includes(s.icon))
    .filter(s => {
      return (s.require || []).concat(s.pay || []).every(require => {
        const num = require.number || 1
        if (require.key === EConstraint.fremen) {
          return myDashBoard.fremen >= num
        } else if (require.key === EConstraint.payWater) {
          return myDashBoard.water >= num
        } else if (require.key === EConstraint.paySpice) {
          return myDashBoard.spice >= num
        } else if (require.key === EConstraint.union) {
          return myDashBoard.union >= num
        } else if (require.key === EConstraint.payMoney) {
          return myDashBoard.money >= num
        } else {
          return true
        }
      })
    })
}

export const useGetEffects = ()=> {
  const dashboard = useMyDashBoard()
  return dashboard?.effects || []
}