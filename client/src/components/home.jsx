import { Link } from "react-router-dom"

export default function Home(){
  return(
    <div className="homePage">
      <nav className="navBar">
      <Link to='/gameList'>Game List</Link>
      <Link to='/gameForm'>New Game</Link>
      </nav>
      <h2>Welcome to the Video game completion tracker</h2>
    </div>
  )
}