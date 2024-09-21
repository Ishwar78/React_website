import React,{useState} from "react"

export default function state() {
    const [counter ,setCounter]=useState(0)
  return (
    <div>
    <h1>Count is :</h1>
     <button onClick={increasecounter}>counter</button>

    </div>
  )
}
