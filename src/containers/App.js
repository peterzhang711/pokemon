import React, { Component } from 'react'
import SearchBox from '../components/searchbox'
import Cardlist from '../components/cardlist'
import ErrorBoundry from '../components/ErrorBoundry'



class App extends Component {
    constructor(){
        super()
        this.state = {
            searchfield:'',
            pokes: []
        }
    }
    
    componentDidMount () { 
        var array = []
        for(var i=1; i<=40; i++)  {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json()) 
            .then(result => {
               array.push(result)
                this.setState({pokes: array})
            })
     
            }
        }
   
    onsearchChange =(event) => {
        this.setState({searchfield: event.target.value})   
    }

    render(){
        const {pokes, searchfield} = this.state
        const filteredPokes = pokes.filter(poke => {
        return poke.name.toLowerCase().includes(searchfield.toLowerCase())
        }) 
      
        
        return !pokes.length?
        <h1>Loading</h1> :
        (
            <div>
                <SearchBox searchChange={this.onsearchChange}/>
                <ErrorBoundry>
                    <Cardlist pokes={filteredPokes}/>
                </ErrorBoundry>
            </div>
        )
    }  
}


export default App