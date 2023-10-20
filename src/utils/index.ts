import { map } from "lodash"
import { TCardPart, TCard } from "../../common/cards/cards"
import { TYinCard, TYinCardPart } from "../../common/yin-card/yin-card"

const ids = {
    card: 1,
    yinCard: 1,
    miBao: 1,
}
type IdNamespace = 'card' | 'yinCard' | 'miBao'

export const numberId = (nameSpace: IdNamespace) => {
    return ids[nameSpace]++
}



export const addId = <T>(obj: T, nameSpace: IdNamespace)  => {
    return {
        ...obj,
        id: numberId(nameSpace)
    } 
}
export const addIds = <T>(arr: T[], nameSpace: IdNamespace)  => {
    return arr.map(i => {
        return {
            ...i,
            id: numberId(nameSpace)
        }
    })
}

export const addCardId = (a: TCardPart) => addId(a, 'card')
export const addCardIds = (a: TCardPart[]) => addIds(a, 'card')

export const addYinCardId = (a: TYinCardPart) => addId(a, 'yinCard')
export const addYinCardIds = (a: TYinCardPart[]) => addIds(a, 'yinCard')