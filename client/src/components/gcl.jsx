import { Link } from "react-router-dom"
export default function GameCompletionList(props){
  return(
    <div>
      <nav className="navBar">
        <Link to='/'>Home</Link>
      </nav>
      <div className="content">
        <h2>Game List</h2>
        <div className="games">
          <section>
            <h3>Title:{props.name}</h3>
            <h3>Developer:{props.dev}</h3>
            <h4>Genre: {props.genre}</h4>
            <h4>Completion Status: {props.status}
            </h4>
          </section>
        </div>
      </div>
    </div>
  )
}