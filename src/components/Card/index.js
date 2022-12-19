import './card.css';

/**
 * Render card with number, suit and show parameters
 * @param {Card} card 
 * @returns 
 */
export function Card({ card }) {    
   
    
    let handleClick=()=>{
             
    }


    let cardImg='';
    if(card.suit>=1 && card.suit<=4 && card.number>=1 && card.number<=12)
        cardImg=`./cartas/row-${card.suit}-column-${card.number}.png`;
    else if(card.suit===0)
     cardImg=`./cartas/comodin.png`;
    else cardImg='';

    return (
      <div className={`card ${card.show ? 'flipFront' : 'flipBack'}`} onClick={handleClick}>
       
        <div className='front'>
          <img draggable='false' src={cardImg} style={{width:'100%' , height:'100%'}} alt='error'></img>
        </div>
        <div className="back">
          <img draggable='false'  src={'./cartas/dorso.png'} style={{width:'100%' , height:'100%'}} alt='error'></img>
        </div>
        
      </div>
    );
  }
  
