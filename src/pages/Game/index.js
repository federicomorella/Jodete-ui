import {React, useEffect,useState} from 'react'
import {Hand} from 'components/Hand';
import { StockDeck } from 'components/StockDeck';
import { DiscardedDeck } from 'components/DiscardedDeck';
import {Players} from 'components/Players'
import { Link,  useNavigate } from 'react-router-dom';
import { useGame } from 'hooks/useGame';
import styles from './game.module.css';
import {Button, Badge} from 'react-bootstrap'

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

export function Game(){
  const {players,player,code}=useGame()
  const [jugando,setJugando]=useState(false)
  const navigate=useNavigate()

  useEffect(() => {
    if(!code || ! player)
      navigate('/') // if there is no game code nor player returns home

  }, [code,player,navigate])
  
  const startGame=()=>{
    setJugando(true)
  }

  const endGame=()=>{
    setJugando(false)
  }

  return (
    <div className={styles['game']} >    
        <div className={styles['header']}>
            <Link style={{margin:'10px', padding:'10px'}} to='/rules'>Reglas</Link>
            {(! jugando)?
            <Button 
              variant="outline-light"
              onClick={startGame}
              >Empezar juego
            </Button>:
            <Button 
              variant="outline-light"
              onClick={endGame}
              >Abandonar Juego
            </Button>}
            {player.admin?<Badge bg="danger">Administrador</Badge>:null}
        </div>

        <div className={styles['item_players']}>
            <Players players={players}/>
        </div>
        <div className={styles['item_stock_deck']}>
            <StockDeck/>
        </div>
        <div className={styles['item_discarded_deck']}>
            <DiscardedDeck discarded={cards}/>
        </div>
        <div className={styles['item_hand']}>
          <Hand cards={cards}/>
        </div>
    </div>
  )
}






