import { PromiseProvider } from "mongoose";

export default function DevDev(props){
  if(props.dev == ''){
    return (
      <h3></h3>
    )
  }else {
    return(
      <h3>Developer: {props.dev}</h3>
    )
  }
}