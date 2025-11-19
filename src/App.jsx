import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera'
import Roles from './componentes/Roles'
import Main from './componentes/Main'
function App() {
  let usuario= "Denis"
let token= "esta es la variable token"
  let menu= "este es el menu"
  return (
    <>

      <div className="container-fluid">
        <div className="row">
            <div className="cabecera col-12 " ><Cabecera usuario={usuario}></Cabecera></div>
        </div>
        <div className="row">
            <div className="roles col-3"><Roles token={token}></Roles></div>         
            <div className="main col-9"><Main menu={menu}></Main></div>
          
        </div >

      </div >
    </>
  )
}

export default App
