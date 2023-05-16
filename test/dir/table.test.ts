import { users } from  './user.test'
import assert from 'assert'
import { joinTable, tableListStore, } from '../../src/round-table/index'
import { setup } from '../../src/one-game/setup'

describe('join table', function() {
  it('4 user sit down', function() {
    joinTable(1, users[0])
    joinTable(1, users[1])
    joinTable(1, users[2])
    joinTable(1, users[3])
    assert.equal(tableListStore[0].users[1].name, 'jeff')
    assert.equal(tableListStore[0].users[2].name, 'ben')
  })
})

describe('set up', function() {
  it('set up game', function() {
    setup(1)
    console.log('first player',tableListStore[0].store.getState().firstPlayer?.name)
    const roles = Object.values(tableListStore[0].store.getState().dashboards || {}).map(d => d.role)
    console.log('roles:', roles)
    assert.equal(roles.length, 4)
  })
})


