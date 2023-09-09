import { useState } from "react"

export default function Team (){
    const [team, setTeam] = useState(11)
    // Button Style
    const buttonStyle={
        background:"violet",
        color:"white",
        marginLeft:"10px"
    }
    // Team area style
    const teamStyle = {
        border:"2px solid brown",
        padding: "15px",
        borderRadius:"5px",
        margin:"15px",
        color:"deepskyblue"
    }
    const handleAdd =() => {
        setTeam(team + 1)
    }
    const handleRemove = ()=>{
        setTeam(team - 1);
    }

    return (
        <div style={teamStyle}>
            <h3>Team : {team} </h3>
            <button style={buttonStyle} onClick={handleAdd}>Add</button>
            <button style={buttonStyle} onClick={handleRemove}>Remove</button>
        </div>
    )
}