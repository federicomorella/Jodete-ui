import { createContext, useState} from "react";

/**
 * Game context
 * @returns value {players,code,player,setPlayer,setCode,setPlayer}
 */
const GameContext=createContext()


export function GameContextProvider({children}){
    const [players, setPlayers] = useState([])
    const [code,setCode]=useState(null)
    const [player,setPlayer]=useState(null)

    const contextValue={players,code,player,setPlayers,setCode,setPlayer}
    return(
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    )


}
export default GameContext