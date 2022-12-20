import {React, useEffect} from 'react'
import {Hand} from 'components/Hand';
import { StockDeck } from 'components/StockDeck';
import { DiscardedDeck } from 'components/DiscardedDeck';
import {Players} from 'components/Players'
import { Link } from 'react-router-dom';
import styles from './game.module.css'

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

export function Game({logout,username,uuid}){
  
  useEffect(() => {
    console.log('GAME:')
    console.log({logout,username,uuid})

  }, [logout,username,uuid])
  

  return (
    <div className={styles['game']} >    
        <div >
            <Link style={{margin:'10px', padding:'10px'}} to='/rules'>Rules</Link>
            <Link style={{margin:'10px', padding:'10px'}} to='/'>home</Link>    
        </div>

        <div className={styles['item-players']}>
            <Players/>
        </div>
        <div className={styles['item-stock-deck']}>
            <StockDeck/>
        </div>
        <div className={styles['item-discarded-deck']}>
            <DiscardedDeck discarded={cards}/>
        </div>
        <div className={styles['item-hand']}>
          <Hand cards={cards}/>
        </div>
    </div>
  )
}






