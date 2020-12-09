// Code Keypad Component Here
import React from 'react'

function KeyPad(){
    return <input type="password" onKeyUp={handleKeyUp} />
}

const handleKeyUp = () =>{
    console.log("Entering password...")
}

export default KeyPad