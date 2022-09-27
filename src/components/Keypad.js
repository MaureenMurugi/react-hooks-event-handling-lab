// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange(event) {
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={handleChange} type="password" placeholder="Password"></input>
        </div>
    )
}

export default Keypad;