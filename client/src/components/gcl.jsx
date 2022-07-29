import { Link } from "react-router-dom"
import Games from "./games"
import { useEffect, useState } from "react"
import axios from 'axios'

export default function GameCompletionList(){

const [games, setGames] = useState([])

  useEffect(()=>{
    async function getlist(){
      const gameInfo = await axios.get(`http://localhost:3001/api/games`)
      setGames(gameInfo.data.games)
    }
    getlist()
    
  }, [])

  return(
    <div>
      <nav className="navBar">
        <Link to='/' id="home">Home</Link>
        <Link to='/gameForm' >New Game</Link>
        <Link to='/devList'>Dev List</Link>
        <Link to='/devForm'>New Dev</Link>
      </nav>
      <div className="content">
        <h2>Game List</h2>
        <div className="games">
          {games.map((game) =>( 
          <Games key={game._id} game={game}/>  
          ))}
        
        </div>
      </div>
    </div>
  )
}