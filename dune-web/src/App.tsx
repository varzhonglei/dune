import React from 'react'
import './styles/App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TablesPage } from './pages/tables'
import { SWRConfig } from 'swr'
import { WithSidebar } from './components/side-bar/SideBar'
import { SimpleToast } from './components/alert'
import { GamePage } from './pages/game'
import { useSocket } from './libs/socket'

export enum ROUTES {
  home = '/',
  table = '/table/:id'
}

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: WithSidebar(<TablesPage/>),
  },
  {
    path: ROUTES.table,
    element: WithSidebar(<GamePage/>),
  },
])

export const App = () => {
  useSocket()
  return  <React.StrictMode>
  <SWRConfig
    value={ {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }}
  >
    <RouterProvider router={router} />
  </SWRConfig>
  <SimpleToast />
</React.StrictMode>
}
 