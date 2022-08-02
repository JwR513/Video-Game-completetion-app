import { useState } from "react"
import axios from 'axios'
import DevDev from "./dev"
import { BASE_URL } from "./globals"


export default function Games(props){

const [status, setStatus] =useState('')

const deleteOne = async()=>{
let gameId = props.game._id 
console.log(gameId)
const deleted = await axios.delete(`${BASE_URL}/api/deleteMe/${gameId}`)
console.log(deleted)
}

let handleChange =(e)=>{
  setStatus(e.target.value)
  console.log(status)
}
const handleClick = async ()=>{
  let updated = {
    completion: status
  }
  console.log(props.game._id)
let res = await axios.put(`${BASE_URL}/api/games/${props.game._id}`, updated)
console.log(res)
}

  return(
<div>
    <section className='single-box'>
      <button onClick={deleteOne}>Delete</button>
      <h3>Title: {props.game.name}</h3>
      <DevDev dev={props.game.developer}/>
      <h4>Genre:  {props.game.genre}</h4>
      <h4>Completion Status: {props.game.completion}
      </h4>
      <input type="text" placeholder="Completetion status" onChange={handleChange} />
      <button onClick={handleClick} >Submit</button>
    </section>
</div>
)

}