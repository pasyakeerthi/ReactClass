# Day 2 – React Learning 🚀
Course: CS World Telugu React  
Date: 04-04-2026

Today I completed lectures 6 to 10 of the CS World Telugu React course and learned about functional components, class components, named exports, CSS styling, and component rendering in React.

I understood that functional components are simple JavaScript functions that return JSX and are used to build reusable UI elements. These components must start with a capital letter and are rendered using angular bracket syntax like <Header />. Functional components are lightweight and commonly used in modern React development.
### Example Code

function Header() {
    return (
        <header>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

root.render(<Header />)

I also learned about class components, which are created using ES6 classes and extend React.Component. Class components must contain a render() method that returns JSX. In this lecture, I created a Menu component using a class and rendered it using root.render(<Menu />). This helped me understand how React components work internally and how JSX is returned from both functional and class components.

---


### Example Code

class Menu extends React.Component {
    render() {
        let menu = ['Home', 'About', 'Contact']

        return (
            <menu>
                <li>{menu[0]}</li>
                <li>{menu[1]}</li>
                <li>{menu[2]}</li>
            </menu>
        )
    }
}

root.render(<Menu />)

Another important concept covered was named exports and imports. Named exports allow multiple components to be exported from a file and must be imported using curly braces {}. This helps in organizing components and keeping the project structure clean and maintainable.


I also learned how to apply CSS in React using two methods: inline styling and className styling. Inline styling is done using JavaScript objects inside style={}, while className styling is done by importing a CSS file and applying className to elements. Since class is a reserved keyword in JavaScript, React uses className instead. Importing CSS using import "./App.css" allows styles to be applied globally to components.

Overall, today's learning helped me understand the difference between functional and class components, how to export and import components, and how to apply styling in React applications. I was able to build simple components, apply styles, and organize the project structure properly.

Outcome:
- Learned functional components
- Learned class components
- Learned named exports and imports
- Learned CSS import and styling
- Understood component rendering
- Built styled React components

Next Learning:
- Props
- Event handling
- Dynamic data
- State