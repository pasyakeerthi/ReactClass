import React from 'react'
function App(){
    function display(){
        alert("Button Clicked")
    }


    return(
        <button onClickCapture={display}>Click Me</button>
    )
}
export default App