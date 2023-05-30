import { EConstraint, EEffect } from "./effect"


export enum StationIcon {
  triangle = 'triangle',
  pentagon = 'pentagon',
  circle = 'circle',

  fremen = 'fremen',
  sister = 'sister',
  union = 'union',
  empire = 'empire',
}

export const station = {
  //三角
  paoCLower: {
    icon: StationIcon.triangle,
    get: [{ key: EEffect.getMoney }, { key: EEffect.paoC }]
  },
  paoCPower: {
    icon: StationIcon.triangle,
    require: EConstraint.union2,
    get: [{ key: EEffect.paoC, number: 2}]
  },
  spice1: {
    icon: StationIcon.triangle,
    get: [{ key: EEffect.collectSpice1 }]
  },
  spice2: {
    icon: StationIcon.triangle,
    get: [{ key: EEffect.collectSpice2 }]
  },
  spice3: {
    icon: StationIcon.triangle,
    get: [{ key: EEffect.collectSpice3 }]
  },
  //圆点
  circleDraw: {
    icon: StationIcon.circle,
    get: [{ key: EEffect.drawCard }, { key: EEffect.getTroops } ]
  },
  circleYin: {
    icon: StationIcon.circle,
    get: [{ key: EEffect.drawYin }, { key: EEffect.getTroops } ]
  },
  circleDrawPower: {
    icon: StationIcon.circle,
    get: [{ key: EEffect.drawCard, number: 2 }, { key: EEffect.research }]
  },
  circleWater: {
    icon: StationIcon.circle,
    require: EConstraint.fremen2,
    get: [{ key: EEffect.getWater }, { key: EEffect.getTroops } ]
  },
  // 四大家族


}