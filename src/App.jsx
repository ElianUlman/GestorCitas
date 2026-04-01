import { useState } from 'react'
import './App.css'
import Formulario from './Formulario.jsx' 
import Lista from './lista'

function App() {

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1 >
      <div className="container">
        <div className="row">
          <Formulario />
          <Lista />
        </div>
      </div>

    </>
  )
}

export default App
