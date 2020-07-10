import React from 'react'
import Card from './card'



const Cardlist = ({pokes}) => {
    return(
    pokes.map ((poke,i) => {
        return (
        <Card  
        key={i} 
        id={pokes[i].id} 
        name={pokes[i].name} 
        weight={pokes[i].weight}
        />
        )
    }
    ) 
)
}

export default Cardlist