# Day 1 – React Learning (CS World Telugu)

## Topics Covered

- Introduction to React
- React Project Setup
- React.createElement
- Rendering Elements
- JSX Introduction
- Functional Components
- Babel
- ReactDOM

---

## 1. What is React

React is a JavaScript library used to build user interfaces.

### Key Points

- Used for frontend development
- Component-based architecture
- Fast rendering
- Virtual DOM
- SPA (Single Page Application)

React helps in building dynamic and reusable UI components.

---

## 2. React Project Setup

### Steps

npx create-react-app reactclass  
cd reactclass  
npm start

### Project Structure

- src → React code
- public → HTML file
- package.json → dependencies
- node_modules → libraries

Project runs on:

http://localhost:3000

---

## 3. React.createElement

React elements are created using:

React.createElement()

### Example

import React from "react"
import ReactDOM from "react-dom/client"

let h1 = React.createElement("h1", {}, "Hello World")

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(h1)

### Flow

React.createElement → root.render → Browser

---

## 4. Multiple Elements

We can create nested elements.

### Example

let li1 = React.createElement("li", {}, "Home")
let li2 = React.createElement("li", {}, "About")

let ul = React.createElement("ul", {}, li1, li2)

root.render(ul)

React builds UI structure like HTML tree.

---

## 5. JSX

JSX means writing HTML inside JavaScript.

### Example

const menu = (
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
    </ul>
)

root.render(menu)

---

## 6. Babel

Babel is a JavaScript compiler.

JSX → Babel → React.createElement → DOM

---

## 7. Functional Components

Function that returns JSX is called a functional component.

### Example

function Menu() {
    return (
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
    )
}

root.render(<Menu />)

---

## 8. JSX Rules

- Use className instead of class
- Use htmlFor instead of for
- JSX must have single parent
- Components start with capital letter
- JSX should be inside ()

---

## Day 1 Outcome

- Understood React basics
- Created React project
- Learned React.createElement
- Learned JSX
- Learned functional components
- Successfully rendered components in browser

---

## Next Learning

- Components in depth
- Props
- State
- Event handling
