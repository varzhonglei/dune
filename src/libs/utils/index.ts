import { map } from "lodash"
import { v4 } from "uuid"
import { TCardPart, TCard } from "../cards"
import { TYinCard, TYinCardPart } from "../yin-card"

const ids = {
    card: 1,
    yinCard: 1,
}
type IdNamespace = 'card' | 'yinCard'

export const uuid = (nameSpace?: IdNamespace) => {
    let res = ''
    if (nameSpace) {
        res = ids[nameSpace].toString()
        ids[nameSpace]++
    } else {
        res = v4()
    }
    return res
}



export const addId = <T>(obj: T, nameSpace?: IdNamespace)  => {
    return {
        ...obj,
        id: uuid(nameSpace)
    } 
}
export const addIds = <T>(arr: T[], nameSpace?: IdNamespace)  => {
    return arr.map(i => {
        return {
            ...i,
            id: uuid(nameSpace)
        }
    })
}

export const addCardId = (a: TCardPart) => addId(a, 'card')
export const addCardIds = (a: TCardPart[]) => addIds(a, 'card')

export const addYinCardId = (a: TYinCardPart) => addId(a, 'yinCard')
export const addYinCardIds = (a: TYinCardPart[]) => addIds(a, 'yinCard')