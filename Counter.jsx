import { useState } from "react"

export default function Counter (){
    const [activity, setResult]= useState(0)
    const handleAddNum =()=>{
        setResult(activity+1);
    }
    const handleRemoveNum =()=>{
        setResult(activity - 1);
    }
    // Style for button
    const buttonStyle = {
        background:"Hotpink", 
        color:"white",
        marginLeft: "10px"
    }
    return(
        <div style={{border:"2px solid coral", color:"blue", padding:"10px", borderRadius:"5px"}}>
            <h3>Counter : {activity} </h3>
            <button style={buttonStyle} onClick={handleAddNum}>Add</button>
            <button style={buttonStyle} onClick={handleRemoveNum}>Remove</button>
        </div>
    )
}