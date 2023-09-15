import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListaTareas from './components/ListaTareas'
import './App.css'

function App() {

  return (
    <>
      <ListaTareas titulo='Tareas del trabajo' />
      <ListaTareas titulo='Tareas de la escuela' />
      <ListaTareas titulo='Tareas del hogar' />
    </>
  )
}

export default App
