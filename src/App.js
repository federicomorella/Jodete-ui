import React, { useState} from 'react';
import './App.css';
import {Hand} from './features/Hand/Hand';
import { Deck } from './features/Deck/Deck';
import { Home } from './features/Home/Home';
import { Button } from 'react-bootstrap';


/**Genera cartas aleatoriamente */
const cards = (()=>{
  const N_CARTAS=25;
  let c=[];
  for(let i=0;i<N_CARTAS;i++){
    c.push( {
      id:i,
      suit: Math.floor( Math.random()*4 + 1),
      number: Math.floor( Math.random()*12)+1
    });
  }
    return c;
})();



function App() {

  const [showHome, setShowHome] = useState(true)
  const togglePage=()=>{
    setShowHome(!showHome);
  };

  return (
    <div >
      <div hidden={!showHome}>
        <Home/>
      </div>



      <div className='game' hidden={showHome}>        
        <div className='item-hidden-deck'>
            <Deck/>
        </div>
        <div className='item-hand'>
          <Hand cards={cards}/>
        </div>
      </div>

      <Button style={{position:"absolute",top:0, rigth:0, zIndex:10}} onClick={togglePage}> cambiar pagina</Button>
    </div>



  );
}

export default App;
