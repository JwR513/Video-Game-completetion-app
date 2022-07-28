import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function NewDevForm(){
const [title, setTitle]= useState('')
const [genre, setGenre]= useState('')


const handleName=(e)=>{
setTitle(e.target.value)
}
const handleGenre=(e)=>{
setGenre(e.target.value)
}

const handleSubmit = async(e)=>{
  let devData ={
    studioName: title,
    ceoName: genre,
  }
await axios.post('http://localhost:3001/api/devs', devData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  setGenre('')
  setTitle('')
}

  return(
    <div> 
      <nav className="navBar">
        <Link to='/'>Home</Link>
        <Link to='/gameList'>Game List</Link>
        <Link to='/gameForm'>New Game</Link>
        <Link to='devList'>Dev List</Link>
      </nav>
      <h2>Create a New Developer</h2>
      <p>Create a new Developer so you can look at developers you are interested in and find games they've made</p>
      <section id="newGameSect">
        <input type="text" placeholder="Studio Name" value={title} onChange={handleName} />
        <input type="text" placeholder="Ceo" value={genre} onChange={handleGenre} />
        <button onClick={handleSubmit}>Submit</button>
      </section>
    </div>
  )
}