import { Link } from "react-router-dom"
import Devs from "./devs"
import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "./globals"

export default function DevList(){

const [devs, setDevs] = useState([])

  useEffect(()=>{
    async function getlist(){
      const devInfo = await axios.get(`${BASE_URL}/api/devs`)
      setDevs(devInfo.data.devs)
      console.log(devInfo.data.devs)
    }
    getlist()
    
  }, [])

  return(
    <div>
      <nav className="navBar">
        <Link to='/' id="home">Home</Link>
        <Link to='/gameList' >Game List</Link>
        <Link to='/devForm'>New Dev</Link>
      </nav>
      <div className="content">
        <h2>Developer  List</h2>
        <div className="games">
          {devs.map((dev)=>(
          <Devs key={dev._id} dev={dev}/>
          ))}
        </div>
      </div>
    </div>
  )
}