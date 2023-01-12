import  { React, useCallback, useState , useEffect,useContext} from 'react'
import {createGame as createGameService, joinGame as joinGameService} from 'services/gameLogin'
import  GameContext  from 'context/gameContext'

export function useGameLogin(){
    const game=useContext(GameContext)
    
    const [loadingGame,setLoadingGame]=useState(false);
/**
 * Create new game 
 * @param player player ={name: 'name'}
 * @return game code or null
 */
    const createGame=useCallback((player)=>{
        console.log('creating game...\nplayer name:' +player)
        setLoadingGame(true)
        return createGameService(player)
        .then(newGame=>{
            setLoadingGame(false)
            console.log(newGame)
            
            if(newGame?.code){
                game.setCode(newGame.code)
                game.setPlayers(newGame.players)
                game.setPlayer(newGame.players[0])
                console.log('Game created: game code=' + newGame.code)         
                return newGame.code
            }
            else{            
                console.log('Failed to create game') 
                return null
            }
        })
        .catch(err=>{
            setLoadingGame(false)
            return null
        })
        
            

    },
    [])

/**
 * Join game by code  
 * @param code
 * @param player player ={name: 'name'}
 * @return game code or null
 */
    const joinGame=useCallback(async (code, player)=>{
        console.log('joining game...\nplayer name:' +player)
        setLoadingGame(true)
        return joinGameService(code,player)
        .then(newGame=>{
            setLoadingGame(false)
            console.log({newGame})
            if(newGame?.code){
                game.setCode(newGame.code)
                game.setPlayers(newGame.players)
                game.setPlayer(newGame.players[newGame.players.length-1]) 
                console.log('Joined: game code=' + newGame.code)            
                return newGame.code
            }
            else{            
                console.log('Failed to join game') 
                return null
            }

        })
        .catch(err=>{
            setLoadingGame(false)
            return null
        })
        
    

    },[])

    return({
        createGame: (player)=>createGame(player),
        joinGame: (code,player)=>joinGame(code,player),
        code:game?.code,
        player: game?.player,
        players: game?.players,    
        loadingGame:loadingGame  
    })

}

