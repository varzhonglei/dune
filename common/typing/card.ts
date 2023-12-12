import { TConstraint, TEffect } from "../typing/effect"
import { LocationIcon } from "../locations/locations"
import { TSprite } from "../typing/ui"

export type TConstraintIcons = {
  key: LocationIcon,
  con: TConstraint[]
}


export enum ECardCamp {
  'fremen' = 'fremen',
  'sister' = 'sister',
  'union' = 'union',
  'empire' = 'empire',
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