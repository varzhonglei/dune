import { users } from  './user.test'
import assert from 'assert'
import { joinTable, tableListStore } from '../../src/round-table/index'

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


