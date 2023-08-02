import styled from '@emotion/styled'
import { setToken, useName } from '../../libs/auth'
import LogoImg from '../../assets/logo.jpg'
import { useState } from 'react'
import { createUser } from '../../libs/api/user'
import { RES_TYPE } from '../../typing'
const Container = styled.div`
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  border-left: 1px solid #ddd;
`
const Img = styled.img`
  width: 40px;
  border-radius: 20px;
  margin-right: 8px;
`

export const SideBar = () => {
  const name = useName()
  const [name2, setName2] = useState('')

  const handleCreate = async () => {
    const res = await createUser({ name: name2 })
    if (res.type === RES_TYPE.success) {
      setToken(res.data)
    }
  }

  return <Container>
    { name ? <div className='m-3 is-flex is-align-items-center'>
      <Img src={LogoImg}/>
      { name }
    </div>
    : <div className='m-3'>
        <div className='mb-2'>创建用户：</div>
        <div className='is-flex'>
          <input
            onChange={(e) => {setName2(e.target.value)}}
            className="input is-primary mr-2" 
            type="text" 
            placeholder='用户名'
            value={name2}
          />
          <button onClick={handleCreate} className="button is-primary">创建</button>
        </div>
      </div>
    }
  </Container>
}


const Wrapper = styled.div`
  display: flex;
`
const Left = styled.div`
  width: 100px;
  flex: 1;
`


export const WithSidebar = (p: JSX.Element) => {
  return <Wrapper>
    <Left>{p}</Left>
    <SideBar />
  </Wrapper>
}