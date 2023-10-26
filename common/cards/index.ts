import { fremenCards, spiceMustFlowCards, spacingGuidCards, basicCards  } from './cards'
import { storeCards } from './cards-store'

export  const allCards = [...storeCards, ...spiceMustFlowCards, ...fremenCards, ...spacingGuidCards, ...basicCards]