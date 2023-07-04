import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddFileForm } from './components/File-From'
import { FileList } from './components/fs'

export const App = () => <>

  <h1>My simple Dexie app</h1>

  <h2>Add File</h2>
  <AddFileForm />

  <h2>File List</h2>
  <FileList />
</>;