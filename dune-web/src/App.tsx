import React from 'react'
import './styles/App.scss'
import { ModsLoad } from './pages/mods-load'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TablesPage } from './pages/tables'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ModsLoad/>,
  },
  {
    path: "/tables",
    element: <TablesPage/>,
  },
])

export const App = () => <>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</>