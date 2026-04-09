##Day-4 React Learning (State and useState)  09th April
🚀 Topics Covered
State in React
useState Hook
Functional Component State
Class Component State
Dynamic Data Handling
Updating UI using State

1. State in React
📌 Explanation
State is used to change information dynamically.
Whenever we want to update UI dynamically, we use state.
State stores data that can change over time.
React re-renders the component when state updates.
🔹 Types
State → Class Component
useState → Functional Component
✅ Key Points
State stores dynamic data
UI updates automatically
Used in forms, counters, products
Important for interactive applications
Core concept in React


2. useState Hook (Functional Component)
📌 Explanation
useState is a React Hook
Used in functional components
Must be imported from React
Returns two values:
state variable
update function

syntax
const [state, setState] = useState(initialValue)

import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.js' // named import

const root=ReactDOM.createRoot(document.getElementById('root'))

function App(){

   let[counter,updatecounter]=useState(0)

   return(
      <>
      <h1>Counter value:{counter}</h1>

      <button onClick={()=>{updatecounter(counter++)}}>
         Add
      </button>

      </>
   )
}

root.render(
   <App/>
)

✅ Key Points
useState(0) sets initial value
counter stores state
updatecounter updates state
UI updates automatically
Used in counters, forms, buttons

3. Class Component State
📌 Explanation
State is defined inside class
Accessed using this.state
Updated using this.setState()
React re-renders after update
💻 Code
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

class App extends React.Component {

   state = {
      name:"Realme 9 Pro",
      price:10000
   }

   render(){
      return(
         <div>

            <h1>Product Name:{this.state.name}</h1>
            <h2>Price:{this.state.price}</h2>

            <input id='price' type='number' />

            <button onClick={()=>{

               let p=document.getElementById('price').value;
               console.log(p)

               this.setState({price: p }, () => {
                  console.log(this.state)
               })

            }}>
               update
            </button>

         </div>
      )
   }
}

root.render(
   <App />
)
✅ Key Points
state stores product data
this.state accesses data
this.setState() updates data
Callback runs after update
Used in old React versions

🆚 Functional vs Class State
Functional Component	Class Component
useState hook	state object
Simple and clean	More syntax
Modern React	Old React
Easy to manage	Slightly complex
Preferred today	Less used now
📚 What I Learned
State concept in React
useState Hook
Functional component state
Class component state
Dynamic UI updates
React re-rendering
🎯 Day-4 Progress

✅ Learned State
✅ Learned useState
✅ Implemented Counter
✅ Understood Class State
✅ Practiced Dynamic UI

💡 Summary

State is used to update information dynamically in React.
Functional components use useState, and class components use state and setState.
Understanding state is important for building interactive and dynamic React applications.