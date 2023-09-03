

import styled from '@emotion/styled'
import { setToken, useMyName, useToken } from '../../libs/auth'
import LogoImg from '../../assets/logo.jpg'
import { useState } from 'react'
import { createUser } from '../../libs/api/user'
import { ModsLoad } from '../mods-load'
import { RES_TYPE } from '../../../../common/typing/rest-req'
import { useIsStart } from '../../libs/hooks/useGame'
import { useGame } from '../../libs/store/game'
import { ModImageWithEnlarge } from '../mod-image'
// import { useParams } from 'react-router-dom'
const Container = styled.div`
    position: fixed;
    bottom: 0;
    min-height: 100px;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100vw;
    overflow-y: auto;
`


export const BottomBar = () => {
    const token = useToken()
    const gameData = useGame()
  
    // const { id: tableId } = useParams()
  
    const dashboardsData = gameData.dashboards
    const myDashBoard = dashboardsData.find(d => d.user?.token === token)

    const handCards = myDashBoard?.handCards || []

  return <Container>
    {handCards.map(c => <div className='mr-1'>
        <ModImageWithEnlarge name={c.img?.name || ''} width={80} height={110}/>
    </div>)}
  </Container>
}
