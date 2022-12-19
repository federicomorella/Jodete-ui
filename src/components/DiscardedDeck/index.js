import React from 'react'
import styles from './discardedDeck.module.css'
import { Card } from '../Card'

/**
 * @param {Card[]} discarded array containing cards in the discarded deck
 * @returns 
 */
export function DiscardedDeck({discarded}) {

  const discardedCards=discarded.map((card,index)=>{
    card.show=true;
    return (
      <div key={index} className={styles.discarded_card} style={{position:'absolute',bottom:index*0.5}}>
        <Card   card={card} />
      </div>
    )});

  return (    
    <div className={styles.discarded_deck} >
       {discardedCards}
    </div>
  )
}
