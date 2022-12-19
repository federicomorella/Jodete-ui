import {React, useState} from 'react'
import {Button, Form } from 'react-bootstrap'
import './home.css'
import {getJWT} from '../../services/jwt'
import { Link } from 'react-router-dom'


export const Home = () => {
    const [name, setName] = useState('');

    const handleJoinGame=async (e)=>{
        console.log(await getJWT(name))
    }

    const handleCreateGame=(e)=>{

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

                <Link to='/rules'>Rules</Link>
                <Link to='/game'>Game</Link>
                <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Button className='mt-1' onClick={handleCreateGame}>Crear juego</Button>
                <Button className='mt-1' onClick={handleJoinGame}>Unirse</Button>


            </div>
        </div>
    )
}
