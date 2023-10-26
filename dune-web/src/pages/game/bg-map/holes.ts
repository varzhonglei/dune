import { TLocationId } from "../../../../../common/locations/locations";
import { THole } from "../../../components/canvas-mask/canvas-mask";


export const holes: {
    [key in TLocationId]: THole
} = {
    kejiSale: {
        widthMultiple: 0.43,
        heightMultiple: 0.27,
        topMultiple: 0.039,
        leftMultiple: 0.07,
    },
    jian: {
        widthMultiple: 0.43,
        heightMultiple: 0.25,
        topMultiple: 0.31,
        leftMultiple: 0.07,
    },
    empireMai: {
        widthMultiple: 0.14,
        heightMultiple: 0.10,
        topMultiple: 0.04,
        leftMultiple: 0.125,
    },
    empireMoney: {
        widthMultiple: 0.14,
        heightMultiple: 0.105,
        topMultiple: 0.14,
        leftMultiple: 0.125,
    },
    unionAllIn: {
        widthMultiple: 0.14,
        heightMultiple: 0.105,
        topMultiple: 0.285,
        leftMultiple: 0.125,
    },
    unionGuild: {
        widthMultiple: 0.14,
        heightMultiple: 0.105,
        topMultiple: 0.385,
        leftMultiple: 0.125,
    },
    sisterDraw: {
        widthMultiple: 0.14,
        heightMultiple: 0.105,
        topMultiple: 0.530,
        leftMultiple: 0.125,
    },
    sisterYin: {
        widthMultiple: 0.14,
        heightMultiple: 0.105,
        topMultiple: 0.632,
        leftMultiple: 0.125,
    },
    fremenUseWater: {
        widthMultiple: 0.14,
        heightMultiple: 0.105,
        topMultiple: 0.775,
        leftMultiple: 0.125,
    },
    fremenGetWater: {
        widthMultiple: 0.14,
        heightMultiple: 0.105,
        topMultiple: 0.876,
        leftMultiple: 0.125,
    },
    circleDraw1: {
        widthMultiple: 0.147,
        heightMultiple: 0.129,
        topMultiple: 0.232,
        leftMultiple: 0.755,
    },
    circleYin: {
        widthMultiple: 0.147,
        heightMultiple: 0.129,
        topMultiple: 0.267,
        leftMultiple: 0.582,
    },
    circleDraw2: {
        widthMultiple: 0.156,
        heightMultiple: 0.097,
        topMultiple: 0.350,
        leftMultiple: 0.418,
    },
    circleWater: {
        widthMultiple: 0.156,
        heightMultiple: 0.11,
        topMultiple: 0.448,
        leftMultiple: 0.325,
    },
    spice1: {
        widthMultiple: 0.170,
        heightMultiple: 0.13,
        topMultiple: 0.385,
        leftMultiple: 0.74,
    },
    spice2: {
        widthMultiple: 0.170,
        heightMultiple: 0.097,
        topMultiple: 0.446,
        leftMultiple: 0.546,
    },
    spice3: {
        widthMultiple: 0.170,
        heightMultiple: 0.097,
        topMultiple: 0.559,
        leftMultiple: 0.287,
    },
    high: {
        widthMultiple: 0.31,
        heightMultiple: 0.101,
        topMultiple: 0.009,
        leftMultiple: 0.306,
    },
    hei: {
        widthMultiple: 0.18,
        heightMultiple: 0.096,
        topMultiple: 0.11,
        leftMultiple: 0.306,
    },
    unlock: {
        widthMultiple: 0.127,
        heightMultiple: 0.096,
        topMultiple: 0.11,
        leftMultiple: 0.49,
    },
    pao2: {
        widthMultiple: 0.137,
        heightMultiple: 0.106,
        topMultiple: 0.005,
        leftMultiple: 0.662,
    },
    pao1: {
        widthMultiple: 0.137,
        heightMultiple: 0.09,
        topMultiple: 0.112,
        leftMultiple: 0.662,
    }
}