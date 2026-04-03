import React from "react"
import ReactDOM  from "react-dom/client"
//let h1=React.createElement("h1",{},"hello world")
//let root=ReactDOM.createRoot(document.getElementById("root"))
//root.render(h1)
//export default h1
/*let li1=React.createElement("li",{},"Home")
let li2=React.createElement("li",{},"About")
let ul=React.createElement("ul",{},li1,li2)
let root=ReactDOM.createRoot(document.getElementById("root"))
root.render(ul)
*/
//using jsx "Writing html like code in js file is called jsx"
/*let menu=(<ul>
    <li>Home</li>
    <li>About</li>
    <li>contact</li>
</ul>)
*/
const root=ReactDOM.createRoot(document.getElementById("root"))

//babel is a js compiler which converts jsx code into js code
// we should write class as className in jsx because class is a reserved keyword in js
//we should write for as htmlFor in jsx because for is a reserved keyword in js
//we should call the function in the form angular brackets in jsx
function Menu(){
    return (<ul>
    <li>Home</li>
    <li>About</li>
    <li>contact</li>
    <li>blog</li>
</ul>)
}root.render(<Menu> </Menu>)