
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js' // named import
const root=ReactDOM.createRoot(document.getElementById('root'))

   root.render(
      //<App>child Props Demonistration</App>
      <App>
         <p>child props Demonistration</p>
         <button>Click Me</button>
         <br></br>
         <button>like</button>
         <br></br>
         <button>dislike</button>
         <br></br>
         <button>subscribe</button>
      </App>
   )