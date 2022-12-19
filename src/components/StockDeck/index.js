import React from 'react'
import styles from './stockDeck.module.css'

export function StockDeck ({stockCards}) {

  const nCards=20;

  const stock=[];

  for(let i=0;i<nCards;i++){
    stock.push(
      
      <img  
        key={i}
        className={styles.sock_card}
        draggable='false'
        src={'./cartas/dorso.png'} 
        style={{
          width:'100%' , 
          height:'100%', 
          position:'absolute' ,
          bottom: `${i*0.5}px` ,
          // 'border-radius': 'inherit',
          display: 'flex',
          flexDirection:'row-reverse',
        }} 
        alt='error'>
      </img>
      
      
    )
  }


  return (
    <div className={styles.stock_deck} >
      {stock}
    </div>
  )
}
