enum StationIcon {
  triangle = 'triangle',
  pentagon = 'pentagon',
  circular = 'circular',

  fremen = 'fremen',
  sister = 'sister',
  union = 'union',
  empire = 'empire',
}

type card = {
  name: string
  playEffect: any
  revealEffect: any
  icons: StationIcon[]
  img?: any
}

const c1: card = {
  name: '香料控制',
  icons: [StationIcon.triangle],
  playEffect: {
    con: ['give-spice-1'],
    conBonus: ['trash-card-1', 'get-troops-1']
  },
  revealEffect: {
    get: ['get-cardBuy-1']
  }
}

const c2 = {
  name: '外交',
  icons: [StationIcon.fremen, StationIcon.sister, StationIcon.union, StationIcon.empire],
  playEffect: {},
  revealEffect: {
    get: ['get-cardBuy-1']
  }
}

const c3 = {
  name: '寻求盟友',
  icons: [StationIcon.fremen, StationIcon.sister, StationIcon.union, StationIcon.empire],
  playEffect: { get: ['trash-card-self'] },
  revealEffect: {
    get: ['get-cardBuy-1']
  }
}

const c4 = {
  name: 'todo 三角',
  icons: [StationIcon.triangle],
  playEffect: { get: ['research'] },
  revealEffect: {
    get: ['get-cardBuy-1', 'get-TLLBuy-1']
  }
}

const c5 = {
  name: '土地测量',
  icons: [StationIcon.circular],
  playEffect: {},
  revealEffect: {
    get: ['get-cardBuy-1']
  }
}

const c6 = {
  name: '说服',
  icons: [],
  playEffect: {},
  revealEffect: {
    get: ['get-cardBuy-2']
  }
}

const c7 = {
  name: '匕首',
  icons: [StationIcon.pentagon],
  playEffect: {},
  revealEffect: {
    get: ['combat-power-1']
  }
}

const c8 = {
  name: '印章戒指',
  icons: [StationIcon.pentagon, StationIcon.triangle, StationIcon.circular],
  playEffect: { get: ['role-effect'] },
  revealEffect: {
    get: ['combat-power-1']
  }
}


export const basicCards = [c1,c2,c3,c4,c4, c5,c6,c6,c7,c7, c8]