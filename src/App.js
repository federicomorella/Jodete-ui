import React, { useState} from 'react'
import './App.css'
import { Home } from 'pages/Home'
import {Game} from 'pages/Game'
import {Rules} from 'pages/Rules'
import useCable from 'services/websocket'

import { 
  Route, Routes
} from 'react-router-dom'
import { useGame } from 'hooks/useGame'



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
    loadingGame} =useGame()


  return (
    <>
        <Routes>
          <Route path='/' element={<Home game={{joinGame,createGame,loadingGame}}/>}/>
          <Route path='game/' element={<Game />} />
          <Route path='rules' element={<Rules/>} />
        </Routes>  
        <footer>
          <div>
            Jodete
          </div>
      </footer>
      
    </>  
  );
}

export default App;
