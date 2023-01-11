// Code EyesOnMe Component Here
import React from 'react'

export default function EyesOnMe() {
    
    function handleFocus() {
        console.log('Good!')
    }

    function handleBLur() {
        console.log('Hey! Eyes on me!')
    }
  return (
    <button onFocus={handleFocus} onBlur={handleBLur}>
        Eyes on me
    </button>
  )
}
