import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function NewGameForm(){
const [title, setTitle]= useState('')
const [genre, setGenre]= useState('')
const [completion, setCompletion] =useState('')
const [dev, setDev]=useState('')

const handleName=(e)=>{
setTitle(e.target.value)
}
const handleGenre=(e)=>{
setGenre(e.target.value)
}
const handleCompletion=(e)=>{
  setCompletion(e.target.value)
}
const handleDev=(e)=>{
  setDev(e.target.value)
}

const handleSubmit = async(e)=>{
  let gameData ={
    name: title,
    genre: genre,
    completion: completion,
    developer: dev
  }
  let res = await axios.post('http://localhost:3001/api/games', gameData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  setCompletion('')
  setDev('')
  setGenre('')
  setTitle('')
}

  return(
    <div> 
      <nav className="navBar">
        <Link to='/'>Home</Link>
        <Link to='/gameList'>Game List</Link>
      </nav>
      <h2>Create a New Game</h2>
      <p>Create a new game that you want to track the progress of here. Just enter the Game name, genre, completion status, and developer.</p>
      <section id="newGameSect">
        <input type="text" placeholder="Game title/name" value={title} onChange={handleName} />
        <input type="text" placeholder="Genre" value={genre} onChange={handleGenre} />
        <input type="text" placeholder="Completion status" value={completion} onChange={handleCompletion}/>
        <input type="text" placeholder="Developer (Optional)" value={dev} onChange={handleDev}/>
        <button id="sumbit-info"
        onClick={handleSubmit}>Sumbit</button>
      </section>
    </div>
  )
}