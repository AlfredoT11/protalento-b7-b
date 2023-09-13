import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundoComponent from './components/HolaMundoComponent'

function App() {

  return (
    <>
      <HolaMundoComponent nombre='Alfredo' colores={['Verde', 'Rojo', 'Azul', 'Morado']} />
      <HolaMundoComponent nombre='Malinali' colores={['Azul', 'Rosa', 'Verde']} />
      <HolaMundoComponent nombre='Nelson' colores={['Azul', 'Blanco', 'Negro']}/>  
    </>
  )
}

export default App
