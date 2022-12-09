import React from 'react'
import {Button, Form } from 'react-bootstrap'
import './home.css'


export const Home = () => {
    let nombre;

    return (
        <div >
            {/* background image */}
            <div className='home-bgd'>
            </div>

            <div className='home'>
                <div>
                    <h1 style={{'font-size':'auto', color:'lightblue', textAlign:'center'}}>
                        JODETE
                    </h1>
                    <br/>
                </div>

        
                <Form.Control type="text" placeholder="Nombre" value={nombre} />
                <Button className='mt-1'>Crear juego</Button>
                <Button className='mt-1'>Unirse</Button>

            </div>
        </div>
    )
}
