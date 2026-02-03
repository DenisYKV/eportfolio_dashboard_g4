
import TokenContext from './context/TokenContext'
import { useState } from 'react'
import UserContext from './context/UserContext'
import Cabecera from './componentes/cabecera/Cabecera'
import Roles from './componentes/roles/Roles'
import Main from './componentes/main/Main'
function App() {
  let usuario = "Denis"
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
              <Main menu={menu}></Main>
            </div >
          </UserContext.Provider>

        </div >

      </TokenContext.Provider>
      
    </>
  )
}

export default App
