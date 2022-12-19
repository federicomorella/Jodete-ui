import React, { useState} from 'react'
import './App.css'
import { Home } from 'pages/Home'
import {Game} from 'pages/Game'
import {Rules} from 'pages/Rules'


import { 
  Route, Routes
} from 'react-router-dom'


function App() {

  return (
    <div >    

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='game/' element={<Game/>} />
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
