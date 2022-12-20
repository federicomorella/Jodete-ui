import React, { useState} from 'react'
import './App.css'
import { Home } from 'pages/Home'
import {Game} from 'pages/Game'
import {Rules} from 'pages/Rules'
import { useUser } from 'hooks/useUser'


import { 
  Route, Routes
} from 'react-router-dom'



function App() {

  const {login,logout,username,uuid,jwt,isLogged}=useUser();
  console.log('rendering App page\nisLogged='+isLogged)

  const logoutButton=(<button onClick={logout}>Salir</button>);
  return (
    <div >    
      <h1>{isLogged?username:'sin registrar'}</h1>
      {isLogged?logoutButton:null}
      <Routes>
        <Route path='/' element={<Home login={login} username={username}/>}/>
        <Route path='game/' element={<Game username={username} uuid={uuid} logout={logout}/>} />
        <Route path='rules' element={<Rules/>} />
      </Routes>  
    <footer>
      <div>
        Jodete
      </div>

    </footer>
    </div>



  );
}

export default App;
