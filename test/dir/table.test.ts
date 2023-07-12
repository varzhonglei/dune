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
    console.log('before dong')
    const roles = Object.values(tableListStore[0].store.getState().dashboards || {}).map(d => d.role)
    assert.equal(roles.length, 4)
  })
})


describe('action', function() {
  it('dong', function() {
    const turn = tableListStore[0].store.getState().turn
    console.log('store turn', turn)
  }) 
})

