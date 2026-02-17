
import TokenContext from './context/TokenContext'
import { useState } from 'react'
import UserContext from './context/UserContext'
import Cabecera from './componentes/cabecera/Cabecera'
import Roles from './componentes/roles/Roles'
import Main from './componentes/main/Main'
import NuevaEvidencia from './componentes/nuevaevidencia/NuevaEvidencia'
import { Route, Routes } from 'react-router-dom'
import FuncionalidadEstudiante from './componentes/paginas/FuncionalidadEstudiante'
import FuncionalidadDocente from './componentes/paginas/FuncionalidadDocente'
import PaginaFamiliasProfesionales from "./componentes/paginas/PaginaFamiliasProfesionales";

function App() {
  let usuario = "Victor"
  let token = "esta es la variable token con CONTEXTO"
  let menu = "este es el menu"

  const [user, setUser] = useState(usuario)

  return (
    <>
      <TokenContext.Provider value={token}>

        <div className="container-fluid">

          <div className="row">
           <Cabecera usuario={user}></Cabecera>
          </div>
          <UserContext.Provider value={user}>
            <div className="row">
              <Roles></Roles>
               <Routes>
                
                <Route path='/' element={<Main menu={menu}></Main>}/>
                <Route path='/funcionalidadestuiante/:moduloId' element={<FuncionalidadEstudiante></FuncionalidadEstudiante>}></Route>
                <Route path='/funcionalidaddocente/:moduloId' element={<FuncionalidadDocente></FuncionalidadDocente>}></Route>
              <Route path="/familiasprofesionales" element={<PaginaFamiliasProfesionales />} />
              </Routes> 
            </div >
          </UserContext.Provider>

        </div >

      </TokenContext.Provider>
    </>
  )
}

export default App
