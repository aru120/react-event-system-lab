// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe(){
    return(
        <button onBlur={onBlur} onFocus={onFocus}></button>
    )
}

const onBlur = () =>{
    console.log("Hey! Eyes on me!")
}

const onFocus = () =>{
    console.log("Good!")
}

export default EyesOnMe