import styled from '@emotion/styled'
import { setToken, useMyName } from '../../libs/auth'
import LogoImg from '../../assets/logo.jpg'
import { useState } from 'react'
import { createUser } from '../../libs/api/user'
import { ModsLoad } from '../mods-load'
import { RES_TYPE } from '../../../../common/typing/rest-req'
import { useDashboards } from './useDashboards'
import { useIsStart } from '../../libs/hooks/useGame'
import { BottomBar } from '../bottom-bar'
import { TopBar } from '../top-bar'
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
  const name = useMyName()
  const gameStart = useIsStart()
  const [name2, setName2] = useState('')

  const handleCreate = async () => {
    const res = await createUser({ name: name2 })
    if (res.type === RES_TYPE.success) {
      setToken(res.data)
    }
  }
  const logout = () => {
    setToken('')
  }
  const { content: DashBoards } = useDashboards()


  return <Container>
    {
      !gameStart && <>
        { name ? <div className='m-3 is-flex is-align-items-center hover-f'>
        <Img src={LogoImg}/>
        { name }
        <div 
          onClick={logout}
          className="tag is-light align-items-center ml-4 hover-c is-pointer">
            登出
        </div>
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
      </>
    }
    
    <ModsLoad />
    {DashBoards}
  </Container>
}


const Wrapper = styled.div`
  display: flex;
  padding-bottom: 120px;
`
const Left = styled.div`
  width: 100px;
  flex: 1;
`


export const WithSidebar = (p: JSX.Element) => {
  return <>
    <TopBar />
    <Wrapper>
    <Left>{p}</Left>
    <SideBar />
    <BottomBar />
  </Wrapper>
  </>
}