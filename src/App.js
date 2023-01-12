import React, { useState} from 'react'
import './App.css'
import { Home } from 'pages/Home'
import {Game} from 'pages/Game'
import {Rules} from 'pages/Rules'
import useCable from 'services/websocket'

import { 
  Route, Routes
} from 'react-router-dom'
import { useGameLogin } from 'hooks/useGameLogin'



function App() {

  var sub=useCable()
  if(sub)sub.perform("speak","app-"+Math.random())
  console.log(sub)
  const {
    createGame,
    joinGame,
    code,
    player,
    players,
    loadingGame} =useGameLogin()


  return (
    <>
        <Routes>
          <Route path='/' element={<Home game={{joinGame,createGame,loadingGame}}/>}/>
          <Route path='game/' element={<Game />} />
          <Route path='rules' element={<Rules/>} />
        </Routes>  
        <footer>
          {code?<div>{`Código de sala: ${code}`}</div>:null}
          <div>
            {player?`Jugador: ${player.name}`:'Jodete'}
          </div>
      </footer>
      
    </>  
  );
}

export default App;
