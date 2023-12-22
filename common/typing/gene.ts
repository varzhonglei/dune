import {EConstraint, EEffect, TEffect } from './effect'

type TGene = {
  id: number
  bonus: TEffect[],
  top: TGene | null
  bottom: TGene | null
}

const gene1:TGene = {
  id: 1,
  bonus: [{ key: EEffect.TLLBuy }],
  top: null,
  bottom: null
}

const gene2:TGene = {
  id: 2,
  bonus: [{ key: EEffect.TLLBuy }],
  top: null,
  bottom: null
}

const gene3:TGene = {
  id: 3,
  bonus: [{ key: EEffect.getGoldBug }],
  top: null,
  bottom: null
}

const gene4:TGene = {
  id: 4,
  bonus: [{ key: EEffect.research }],
  top: null,
  bottom: null
}

const gene5:TGene = {
  id: 5,
  bonus: [{ key: EEffect.TLLBuy }, { key: EEffect.trashCard }],
  top: null,
  bottom: null
}

const gene6:TGene = {
  id: 6,
  bonus: [{ key: EEffect.TLLBuy }, { key: EEffect.getGoldBug }],
  top: null,
  bottom: null
}

const gene7:TGene = {
  id: 7,
  bonus: [{ key: EEffect.getGoldBug }],
  top: null,
  bottom: null
}

const gene8:TGene = {
  id: 8,
  bonus: [{ key: EEffect.TLLBuy }],
  top: null,
  bottom: null
}

const gene9:TGene = {
  id: 9,
  bonus: [{ key: EEffect.research }],
  top: null,
  bottom: null
}


const gene10:TGene = {
  id: 10,
  bonus: [{ key: EEffect.research }],
  top: null,
  bottom: null
}

const gene11:TGene = {
  id: 11,
  bonus: [{ key: EEffect.TLLBuy }],
  top: null,
  bottom: null
}

const gene12:TGene = {
  id: 12,
  bonus: [{ key: EEffect.getMoney }],
  top: null,
  bottom: null
}


const gene13:TGene = {
  id: 13,
  bonus: [{ key: EEffect.getSpice }],
  top: null,
  bottom: null
}

const gene14:TGene = {
  id: 14,
  bonus: [{ key: EEffect.getGoldBug }],
  top: null,
  bottom: null
}

const gene15:TGene = {
  id: 15,
  bonus: [{ key: EEffect.inf }],
  top: null,
  bottom: null
}


const gene16:TGene = {
  id: 16,
  bonus: [{ key: EEffect.getGoldBug }],
  top: null,
  bottom: null
}

const gene17:TGene = {
  id: 17,
  bonus: [{ key: EEffect.constraint, 
    mayAbandon: true,
    con: [{key: EConstraint.trashYin}],
    conBonus: [{key: EEffect.drawCard}, { key: EEffect.drawYin }]
  }],
  top: null,
  bottom: null
}

const gene18:TGene = {
  id: 18,
  bonus: [{ key: EEffect.TLLBuy }, { key: EEffect.trashCard }],
  top: null,
  bottom: null
}

const gene19:TGene = {
  id: 19,
  bonus: [{ key: EEffect.getSpice, number: 2 }],
  top: null,
  bottom: null
}

const gene20:TGene = {
  id: 20,
  bonus: [{ key: EEffect.getGoldBug }],
  top: null,
  bottom: null
}

const gene21:TGene = {
  id: 21,
  bonus: [{ key: EEffect.constraint,
    mayAbandon: true,
    con: [{ key: EConstraint.payMoney, number: 7 }],
    conBonus: [{ key: EEffect.getGoldBug }, { key: EEffect.getGoldBug }]
  }],
  top: null,
  bottom: null
}

function init () {
  gene1.top = gene2
  gene1.bottom = gene3

  gene2.top = gene4
  gene2.bottom = gene5

  gene3.top = gene5
  gene3.bottom = gene6

  gene4.bottom = gene7

  gene5.top = gene7
  gene5.bottom = gene8

  gene6.top = gene8
  gene6.bottom = gene9

  gene7.top = gene10
  gene7.bottom = gene11

  gene8.top = gene11
  gene8.bottom = gene12

  gene9.top = gene12

  gene10.bottom = gene13

  gene11.top = gene13
  gene11.bottom = gene14

  gene12.top = gene14
  gene12.bottom = gene15

  gene13.top = gene16
  gene13.bottom = gene17

  gene14.top = gene17
  gene14.bottom = gene18

  gene15.top = gene18

  gene16.bottom = gene19

  gene17.top = gene19
  gene17.bottom = gene20

  gene18.top = gene20
  gene18.bottom = gene21
}
init()
