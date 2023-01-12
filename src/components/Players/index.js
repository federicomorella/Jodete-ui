import {React,useEffect,useState,useRef} from 'react'
import styles from './players.module.css'


export const Players = ( {players}) => {
    // const players=[
    //     {name:'Ger',cardsCount:3},
    //     {name:'Fede',cardsCount:10},
    //     {name:'Jesi',cardsCount:5},
    //     {name:'Rami',cardsCount:12},
    //     {name:'Pulga',cardsCount:8},
    //     {name:'Ger',cardsCount:3},
    //     {name:'Fede',cardsCount:10},
    //     {name:'Jesi',cardsCount:5},
    //     {name:'Rami',cardsCount:12},
    //     {name:'Pulga',cardsCount:8},
    // ]

    const [turn, setTurn] = useState(0);

    // useEffect(()=>{
    //     let t=8
    //     setInterval(()=>{
    //         t=(t+1)>=players.length?0:(t+1);
    //         setTurn(t)
    //         console.log(t)
    //     },2000);

    // },[players.length])

    const playersRef=useRef();

    if(playersRef&& playersRef.current&&playersRef.current.parentElement){
        const currentPlayer=playersRef.current.childNodes[turn];
        currentPlayer.scrollIntoView();
    }

    return (        
        <div className={styles.players_container}  ref={playersRef}>

            {players.map((player,index)=>{return(
                <div key={index} className={(turn===index)?styles.player_turn:styles.player}>
                    <div>
                        {player.name}
                    </div>

                </div>
                )
            })}         

        </div>      

    )
}
