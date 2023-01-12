import {React, useContext} from 'react'
import GameContext from 'context/gameContext'
export function useGame(){

    const game=useContext(GameContext)


    return({
        players:game.players.filter(e=>e.id !== game.player.id),
        player: game.player,
        code: game.code


    })
}