import { TConstraint, TEffect } from "../typing/effect"
import { LocationIcon } from "../locations/locations"
import { TSprite } from '../typing/ui'
import { addCardIds } from "../../src/utils"

import * as allCards from './cards-store' 

export type TConstraintIcons = {
  key: LocationIcon,
  con: TConstraint[]
}

export type TCardPart = {
  price?: number
  TTLPrice?: number
  camp?: ECardCamp[]
  name: string
  playEffect?: TEffect[]
  revealEffect?: TEffect[]
  icons?: LocationIcon[]
  constraintIcons?: TConstraintIcons[]
  buyEffect?: TEffect[]
  dropEffect?: TEffect[]
  trashEffect?: TEffect[]
  qianRu?: LocationIcon[]
  graft?: boolean
  img?: {
    name: string,
    sprite?: TSprite,
  }
}

export enum ECardCamp {
  'fremen' = 'fremen',
  'sister' = 'sister',
  'union' = 'union',
  'empire' = 'empire',
}

export type TCard = TCardPart & {
  id: number
}

export const basicCards: TCard[] = addCardIds([
  allCards.c3,
  allCards.c3,
  allCards.c61,
  allCards.c70,
  allCards.c42,
  allCards.c103,
  allCards.c103,
  allCards.c60,
  allCards.c60,
  allCards.c41,
])


export const spiceMustFlowCards: TCard[] = addCardIds(Array.from({length: 10}).map(_ => allCards.c55))

export const fremenCards: TCard[] = addCardIds(Array.from({length: 9}).map(_ => allCards.c51))

export const spacingGuidCards: TCard[] = addCardIds(Array.from({length: 6}).map(_ => allCards.c76))


export const empireDeck = addCardIds([
  allCards.c1,
  allCards.c2,
  allCards.c2,
  allCards.c5,
  allCards.c6,  
  allCards.c7,  

  allCards.c9,
  allCards.c10,
  allCards.c10,
  allCards.c11,
  allCards.c11,
  allCards.c12,
  allCards.c12,
  allCards.c13,
  allCards.c14,
  allCards.c15,
  allCards.c16,
  allCards.c17,
  allCards.c18,
  allCards.c19,
  allCards.c19,
  allCards.c20,

  allCards.c21,
  allCards.c21,
  allCards.c22,
  allCards.c23,
  allCards.c24,
  allCards.c25,
  allCards.c25,
  allCards.c26,
  allCards.c27,
  allCards.c28,
  allCards.c29,
  allCards.c30,

  allCards.c31,
  allCards.c31,
  allCards.c32,
  allCards.c33,
  allCards.c33,
  allCards.c34,
  allCards.c34,
  allCards.c35,
  allCards.c36,
  allCards.c36,
  allCards.c37,
  allCards.c38,
  allCards.c39,
  allCards.c39,
  allCards.c40,
  allCards.c40,

  allCards.c43,
  allCards.c44,
  allCards.c44,
  allCards.c45,
  allCards.c46,
  allCards.c47,
  allCards.c48,
  allCards.c49,
  allCards.c50,
  allCards.c53,
  allCards.c53,
  allCards.c56,
  allCards.c57,
  allCards.c58,
  allCards.c58,
  allCards.c59,
  allCards.c59,
  allCards.c62,
  allCards.c62,
  allCards.c63,
  allCards.c64,
  allCards.c64,
  allCards.c65,
  allCards.c65,
  allCards.c66,
  allCards.c67,
  allCards.c68,
  allCards.c69,
  allCards.c71,
  allCards.c71,
  allCards.c72,
  allCards.c73,
  allCards.c74,
  allCards.c75,
  allCards.c77,
  allCards.c78,
  allCards.c78,
  allCards.c79,
  allCards.c80,
  allCards.c81,
  allCards.c82,
  allCards.c83,
  allCards.c84,
  allCards.c85,
  allCards.c85,
  allCards.c86,
  allCards.c87,
  allCards.c87,
  allCards.c88,
  allCards.c89,
  allCards.c90,
  allCards.c91,

  allCards.c93,
  allCards.c93,
  allCards.c94,
  allCards.c95,
  allCards.c96,
  allCards.c97,
  allCards.c98,
  allCards.c98,
  allCards.c99,
  allCards.c100,
  allCards.c101,
  allCards.c101,
  allCards.c102,
  allCards.c102,
  allCards.c104,
  allCards.c104,
])