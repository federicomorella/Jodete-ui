import {useState} from 'react';
import './card.css';


export function Card({ card }) {    
    let [showCard,setShowCard]=useState(true);
    
    let handleClick=()=>{
        setShowCard(!showCard);
        
    }
    //console.log(showCard);
    let cardImg='';
    if(card.suit>=1 && card.suit<=4 && card.number>=1 && card.number<=12)
        cardImg=`./cartas/row-${card.suit}-column-${card.number}.png`;
    else if(card.suit===0)
     cardImg=`./cartas/comodin.png`;
    else cardImg='';

    return (
      <div className={`card ${showCard ? 'flipFront' : 'flipBack'}`} onClick={handleClick}>
       
        <div className='front'>
          <img src={cardImg} style={{width:'100%' , height:'100%','border-radius': 'inherit'}} alt='error'></img>
        </div>
        <div className="back">
          <img src={'./cartas/dorso.png'} style={{width:'100%' , height:'100%', 'border-radius': 'inherit'}} alt='error'></img>
        </div>
        
      </div>
    );
  }
  
