/* eslint-disable react-refresh/only-export-components */
import styled from '@emotion/styled'
import { TopBar } from '../top-bar'
import { SideBar } from '../side-bar/SideBar'
import { BottomBar } from '../bottom-bar'



const Wrapper = styled.div`
  display: flex;
  padding-bottom: 120px;
  padding-top: 120px;
`
const Left = styled.div`
  width: 100px;
  flex: 1;
  margin-left: 8px;
`


export const baseLayout = (p: JSX.Element) => {
  return <>
    <TopBar />
    <Wrapper>
      <Left>{p}</Left>
      <SideBar />
      <BottomBar />
    </Wrapper>
  </>
}