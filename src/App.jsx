import { useState } from 'react'
import './App.css'
import Formulario from './Formulario.jsx' 
import Lista from './lista'


function App() {

  let citas = []

  const setCitas = (cita) =>{
    citas.push(cita)
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1 >
      <div className="container">
        <div className="row">
          <Formulario setCitas={setCitas}/>
          <Lista citas={citas}/>
        </div>
      </div>

    </>
  )
}

export default App
