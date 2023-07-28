import React from 'react'
import './styles/App.scss'
import { ModsLoad } from './pages/mods-load'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TablesPage } from './pages/tables'

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
    element: <TablesPage/>,
  },
])

export const App = () => <>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</>