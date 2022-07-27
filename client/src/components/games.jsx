import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
import DevDev from "./dev"
export default function Games(props){

const [status, setStatus] =useState('')

const deleteOne = async()=>{
await axios.delete('http://localhost:3001/api/deleteMe')
}

let handleChange =(e)=>{
  setStatus(e.target.value)
  console.log(status)
}
// const handleClick = async ()=>{
// let res = await axios.put(`http://localhost:3001/api/statusUpdate`, status)
// console.log(res)
// }

  return(
<div>
    <section>
      <button onClick={deleteOne}>Delete</button>
      <h3>Title: {props.name}</h3>
      <DevDev dev={props.dev}/>
      <h4>Genre:  {props.genre}</h4>
      <p>Completion Status: {props.status}
      </p>
      <input type="text" placeholder="Completetion status" onChange={handleChange} />
      <button >Submit</button>
    </section>
</div>
)

}