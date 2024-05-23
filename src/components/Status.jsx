import React from 'react'

export default function Status(props) {

    return (
        <div className='Status'>
            <h2>Status</h2>
            <hr />
            <div>
                <p><b>Peso:</b> {props.weight}</p>
                <p><b>Vida:</b> {props.hp}</p>
                <p><b>Ataque:</b> {props.attack}</p>
                <p><b>Defesa:</b> {props.defense}</p>
                <p><b>Velocidade:</b> {props.speed}</p>
            </div>
        </div>
    )
}