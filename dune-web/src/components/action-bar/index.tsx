

import styled from '@emotion/styled'
import { setToken, useMyName } from '../../libs/auth'
import LogoImg from '../../assets/logo.jpg'
import { useState } from 'react'
import { createUser } from '../../libs/api/user'
import { ModsLoad } from '../mods-load'
import { RES_TYPE } from '../../../../common/typing/rest-req'
import { useIsStart } from '../../libs/hooks/useGame'
const Container = styled.div`
  position: absolute;
  bottom: 0;
  min-height: 100px;
`


export const SideBar = () => {
  const [name2, setName2] = useState('')

  return <Container>
   
  </Container>
}
