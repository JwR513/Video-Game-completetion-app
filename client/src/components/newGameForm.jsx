import { Link } from "react-router-dom"
export default function NewGameForm(){


  return(
    <div> 
      <nav className="navBar">
        <Link to='/'>Home</Link>
        <Link to='/gameList'>Game List</Link>
      </nav>
      <h2>Create a New Game</h2>
      <p>Create a new game that you want to track the progress of here. Just enter the Game name, genre, completion status, and developer.</p>
      <section id="newGameSect">
        <input type="text" placeholder="Game title/name" />
        <input type="text" placeholder="Genre" />
        <input type="text" placeholder="Completion status" />
        <input type="text" placeholder="Developer (Optional)" />
        <button id="sumbit-info">Sumbit</button>
      </section>
    </div>
  )
}