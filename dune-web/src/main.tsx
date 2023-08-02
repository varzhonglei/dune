import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { initAuth } from './libs/auth/index.ts'
import { initialAxios } from './libs/api/axios.ts'
initAuth()
initialAxios()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
