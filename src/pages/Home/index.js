import {React, useState, useEffect, useCallback, useRef} from 'react'
import {Button, Form } from 'react-bootstrap'
import './home.css'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Prompt } from 'components/Prompt'
import {} from 'react-bootstrap'

/******************************************************************
 * Home page
 * @param  props {joinGame,createGame} 
 * @returns 
 */
export const Home = ({game}) => {
    const {joinGame,createGame,loadingGame}=game;
    const [name, setName] = useState('');
    const navigate=useNavigate();
   
    let [showCodeInput,setShowCodeInput]=useState(null)

    const join=(code)=>{
        setShowCodeInput(false)
        if(code && name){//if user inputted game code...            
            joinGame(code,name)
            .then(res=>{
                if(res)
                navigate('/game')
            })
            
        }

    }

    const handleJoinGame=async (e)=>{
        setShowCodeInput(true)        
    }

    let promptGameCode= showCodeInput?<Prompt message="Código del juego" callback={join}/>:null
 
    const handleCreateGame=()=>{
            if(name){
                createGame(name)
                .then(res=>{
                    console.log({res})  
                    if(res)                  
                        navigate('game')
                })

            }
        }
        
        
    

    return (
        <div >
            {/* background image */}
            <div className='home-bgd'>
            </div>

            <div className='home'>
                <div>
                    <h1 style={{ color:'lightblue', textAlign:'center'}}>
                        JODETE
                    </h1>
                    <br/>
                </div>
                <div>{promptGameCode}</div>
                <Link to='/rules'>Rules</Link>
                {/* <Link to='/game'>Game</Link> */}
                <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Button className='mt-1' onClick={handleCreateGame}>Crear juego</Button>
                <Button className='mt-1' onClick={handleJoinGame}>Unirse</Button>
            </div>
        </div>
    )
}
