import React from 'react';
import './App.css';
import {Hand} from './features/Hand/Hand';
import { Deck } from './features/Deck/Deck';
import { Home } from './features/Home/Home';

const cards = (()=>{
  let c=[];
  for(let n=1;n<13;n++)
    for(let p=1;p<5;p++){
      c.push({id:p*12+n,suit:p,number:n});
    }
    return c;
})();



function App() {
  return (
    <Home/>
    // <div className='game'>
      
    //   <div className='item-hidden-deck'>
    //     <Deck/>
    //   </div>
    // <div className='item-hand'>
    //   <Hand cards={cards}/>
    // </div>

    // </div>

  );
}

export default App;
