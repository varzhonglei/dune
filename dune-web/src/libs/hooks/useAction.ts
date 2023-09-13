import { TCard } from "../../../../common/cards/cards"
import { TLocationId, station } from "../../../../common/station/station"
import { createSyncExternalAtom, useSyncExternalState } from "./useSyncStore"

export const miBaoActionState = createSyncExternalAtom<{
  card: TCard | null
  location: TLocationId | null
}>({
  card: null,
  location: null
})

export const useMiBaoAction = () => useSyncExternalState(miBaoActionState)

export const useAvailableStation = () => {
  const info = useMiBaoAction()
  return station.filter(s => info.card?.icons?.includes(s.icon))
}