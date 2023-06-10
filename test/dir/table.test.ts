import { users } from  './user.test'
import assert from 'assert'
import { joinTable, tableListStore, } from '../../src/round-table/index'
import { setup } from '../../src/one-game/setup'

describe('join table', function() {
  it('4 user sit down', function() {
    joinTable(0, users[0])
    joinTable(0, users[1])
    joinTable(0, users[2])
    joinTable(0, users[3])
    assert.equal(tableListStore[0].store.getState().users[1].name, 'jeff')
    assert.equal(tableListStore[0].store.getState().users[2].name, 'ben')
  })
})

describe('set up', function() {
  it('set up game', function() {
    setup(0)
    const roles = Object.values(tableListStore[0].store.getState().dashboards || {}).map(d => d.role)
    assert.equal(roles.length, 4)
    console.log('0', tableListStore[0].store.getState().dashboards[0])
    console.log('1', tableListStore[0].store.getState().dashboards[1])
    console.log('2', tableListStore[0].store.getState().dashboards[2])
    console.log('3', tableListStore[0].store.getState().dashboards[3])
    console.log('yin', tableListStore[0].store.getState().yinCards)
  })
})


