import { Link } from "react-router-dom"

export default function Home(){
  return(
    <div className="homePage">
      <nav className="navBar">
      <Link to='/gameList'>Game List</Link>
      <Link to='/gameForm'>New Game</Link>
      <Link to='/devList'>Dev List</Link>
      <Link to='devForm'>New Dev</Link>
      </nav>
      <h2>Welcome to the Game completion tracker</h2>
      <h3>By: Johnathan Weil</h3>
      <div className="image-container">
        <img src="https://i.imgur.com/NEopOAX.jpg" alt="none" />
        
      </div>
    </div>
  )
}