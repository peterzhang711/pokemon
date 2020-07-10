import React from 'react'
import './card.css'




const Card = ({id, name, weight}) => {
    
    return (
        <ul id='container'>
            <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <h2>{name}</h2>
            <p>{weight}kg</p>
        </ul>
    )
}

export default Card