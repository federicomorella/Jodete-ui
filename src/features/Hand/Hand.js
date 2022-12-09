import {React,useEffect,useState} from 'react'
import { Card } from '../Card/Card'
import { Button ,ButtonGroup} from 'react-bootstrap'
import './hand.css'

export function Hand({cards}){

  const [sortedBySuit, setSortedBySuit] = useState(true);
  const [hand, setHand] = useState([]);
  

  useEffect(()=>{
    if(sortedBySuit){
      setHand(cards.slice().sort((a,b)=>{return a.suit-b.suit}))
    }
    else
      setHand(cards.slice().sort((a,b)=>{return a.number-b.number}))
  }
  ,[cards,sortedBySuit]);

  
  
  const handleSortByNumber=()=>{
      setSortedBySuit(false);
  }
  const handleSortBySuit=()=>{
    setSortedBySuit(true);
}

  return (
    <div>
      
      <div className='hand-container'>
        <div className='hand-button-sort'>
          <ButtonGroup>
            <Button active={!sortedBySuit} variant="outline-dark" onClick={handleSortByNumber}>Ordenar por número</Button>
            <Button active={sortedBySuit} variant="outline-dark"onClick={handleSortBySuit}>Ordenar por palo</Button>
          </ButtonGroup>
        </div>
        <div className='hand-cards'>
          {hand.map((card)=>{  
              return ( 
                <Card key={card.id} card={card}/>
              );    
            })}
        </div>

      </div>

    </div>

  )
}