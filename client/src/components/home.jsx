import { Link } from "react-router-dom"
import GameCompletionList from "./gcl"



export default function Home(){
  return(
    <div className="homePage">
      <nav className="navBar">
      <Link to='/gameList' element={<GameCompletionList />}>Game List</Link>
      </nav>
      <h2>Welcome to the Video game completion tracker</h2>


    </div>
  )
}