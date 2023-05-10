import assert from 'assert'
import { createUser, userList } from '../../src/user/users'

const user1 = {
  name: 'jiang',
  token: '',
}
const user2 = {
  name: 'jeff',
  token: '',
}
const user3 = {
  name: 'ben',
  token: '',
}
const user4 = {
  name: 'yang',
  token: '',
}

describe('create user', function() {
  it('create 4 user', function() {
    user1.token = createUser(user1.name)
    user2.token = createUser(user2.name)
    user3.token = createUser(user3.name)
    user4.token = createUser(user4.name)
    assert.equal(userList.length, 4)
    const u1 =  userList.find(u => u.token === user1.token)
    assert.equal(u1?.user?.name, 'jiang')
    const u4 =  userList.find(u => u.token === user4.token)
    assert.equal(u4?.user?.name, 'yang')
  })
})


