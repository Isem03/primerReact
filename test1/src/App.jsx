import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora from './calculadora'

function App() {
  
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento){
    setUsuario(evento.target.value)
  }

  function cambiarPassword(evento){
    setPassword(evento.target.value)
  }

  function ingresar(){
    
    if(usuario == "Isaias" && password=="1234"){
      alert("Sesion Iniciada")
      setLogueado(true)
    }else{
      alert("Acceso no Permitido")
    }
  }
  if(logueado){
    return (<Calculadora></Calculadora>)
  }

  return (
    <>
      <h1>Inicio de Sesion</h1>
      <input type='text' name='user' id='user' value ={usuario} onChange={cambiarUsuario}></input>
      <br></br>
      <input type='text' name='password' id='password' value ={password} onChange={cambiarPassword}></input>
      <br></br>
      <button onClick={ingresar}>Ingresar</button>
    </>
  )
}

export default App
