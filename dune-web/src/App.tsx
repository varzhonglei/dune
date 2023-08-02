import React from 'react'
import './styles/App.scss'
import { ModsLoad } from './pages/mods-load'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TablesPage } from './pages/tables'
import { SWRConfig } from 'swr'
import { WithSidebar } from './components/side-bar/SideBar'

export enum ROUTES {
  home = '/',
  tables = '/tables'
}

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <ModsLoad/>,
  },
  {
    path: ROUTES.tables,
    element: WithSidebar(<TablesPage/>),
  },
])

export const App = () => <>
  <React.StrictMode>
    <SWRConfig
      value={ {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
</>