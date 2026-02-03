import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera';
import Main from './componentes/Main';
import Roles from './componentes/Roles';


function App() {
  let usuario = "Jaime"
  let menu = "Menu"
  let token = "token"

  return (
    <>
      <div className= "container-fluid">
        <div className="row">
          <div className="cabecera col-12"><Cabecera usuario={usuario} /></div>
        </div>
        <div className="row">
          <div className= "roles col-3"> <Roles token={token} /></div>
          <div className= "main col-9"> <Main menu={menu} /></div>
        </div>
      </div>
    </>
  );
}

export default App
