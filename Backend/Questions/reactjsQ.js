const reactJSQ = [

    // Introduction to React
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is React?",
        "options": ["A JavaScript library for building user interfaces", "A programming language", "A database system", "A testing framework"],
        "correctOptionIndex": 0,
        "correctOptionText": "A JavaScript library for building user interfaces",
        "difficulty": "easy",
        "explanation": "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where UI updates are frequent.",
        "hint": "It was developed by Facebook for building interactive UIs."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is JSX?",
        "options": ["A JavaScript extension for XML-like syntax", "A new programming language", "A database query language", "A CSS preprocessor"],
        "correctOptionIndex": 0,
        "correctOptionText": "A JavaScript extension for XML-like syntax",
        "difficulty": "easy",
        "explanation": "JSX is a syntax extension for JavaScript that looks similar to XML/HTML and allows you to write HTML elements in JavaScript.",
        "hint": "It allows you to write HTML-like code within JavaScript."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "Which company developed React?",
        "options": ["Google", "Microsoft", "Facebook", "Amazon"],
        "correctOptionIndex": 2,
        "correctOptionText": "Facebook",
        "difficulty": "easy",
        "explanation": "React was developed and is maintained by Facebook (now Meta). It was first deployed on Facebook's newsfeed in 2011 and later open-sourced in 2013.",
        "hint": "The same company that owns Instagram and WhatsApp."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the virtual DOM in React?",
        "options": ["A complete copy of the real DOM", "A lightweight copy of a subset of the real DOM", "A programming concept unrelated to the DOM", "A third-party library"],
        "correctOptionIndex": 1,
        "correctOptionText": "A lightweight copy of a subset of the real DOM",
        "difficulty": "medium",
        "explanation": "The virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to improve performance by minimizing direct manipulations to the real DOM.",
        "hint": "It's an in-memory representation that React uses to optimize rendering performance."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "In React, what is the correct way to render a component?",
        "options": ["<Component>", "<Component />", "Component()", "render(Component)"],
        "correctOptionIndex": 1,
        "correctOptionText": "<Component />",
        "difficulty": "easy",
        "explanation": "In JSX, you render a component using the syntax <ComponentName /> for self-closing tags or <ComponentName></ComponentName> if the component has children.",
        "hint": "It uses an XML-like syntax similar to HTML tags."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What does the 'key' prop do in React lists?",
        "options": ["Encrypts the list items", "Provides styling information", "Helps React identify which items have changed", "Sets the order of elements"],
        "correctOptionIndex": 2,
        "correctOptionText": "Helps React identify which items have changed",
        "difficulty": "medium",
        "explanation": "Keys help React identify which items have changed, been added, or removed. They should be unique among siblings to ensure proper reconciliation and rendering performance.",
        "hint": "It's related to the reconciliation process and element identification."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What tool is commonly used to create a new React application?",
        "options": ["React Generator", "React CLI", "Create React App", "React Starter"],
        "correctOptionIndex": 2,
        "correctOptionText": "Create React App",
        "difficulty": "easy",
        "explanation": "Create React App (CRA) is a tool developed by Facebook that sets up a new React project with a good default configuration, allowing developers to start building immediately without complex setup.",
        "hint": "It's an official tool with a three-word name."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "Which of the following is NOT a core concept in React?",
        "options": ["Components", "Virtual DOM", "Two-way data binding", "JSX"],
        "correctOptionIndex": 2,
        "correctOptionText": "Two-way data binding",
        "difficulty": "medium",
        "explanation": "React uses one-way data flow (unidirectional data flow), not two-way data binding. Two-way data binding is more associated with frameworks like Angular.",
        "hint": "React implements a unidirectional data flow pattern instead."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What happens when you call ReactDOM.render()?",
        "options": ["Compiles JSX to JavaScript", "Mounts the specified element into the DOM", "Creates a new React component", "Refreshes the entire page"],
        "correctOptionIndex": 1,
        "correctOptionText": "Mounts the specified element into the DOM",
        "difficulty": "medium",
        "explanation": "ReactDOM.render() is used to render React elements into the DOM at a specified container. It's the primary method to mount your React application to the webpage.",
        "hint": "It connects your React application to an HTML element on the page."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the recommended way to handle events in React?",
        "options": ["Using traditional DOM event listeners", "Using inline event handlers", "Using custom event delegation", "Using React's synthetic event system"],
        "correctOptionIndex": 3,
        "correctOptionText": "Using React's synthetic event system",
        "difficulty": "medium",
        "explanation": "React implements a synthetic event system that wraps the browser's native event system, providing consistent behavior across browsers and better performance through event delegation.",
        "hint": "React has its own cross-browser wrapper for handling events."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "In JSX, how do you write a JavaScript expression?",
        "options": ["Using {{expression}}", "Using {expression}", "Using [expression]", "Using (expression)"],
        "correctOptionIndex": 1,
        "correctOptionText": "Using {expression}",
        "difficulty": "easy",
        "explanation": "In JSX, JavaScript expressions are wrapped in curly braces {}. This allows you to embed any JavaScript expression into your JSX code.",
        "hint": "You need to use a specific type of bracket to include JavaScript in JSX."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the purpose of 'Babel' in a React application?",
        "options": ["To optimize image loading", "To translate JSX into standard JavaScript", "To manage database connections", "To handle API requests"],
        "correctOptionIndex": 1,
        "correctOptionText": "To translate JSX into standard JavaScript",
        "difficulty": "medium",
        "explanation": "Babel is a JavaScript compiler that translates JSX syntax and newer JavaScript features into standard JavaScript that browsers can understand.",
        "hint": "It's a compiler related to making modern JavaScript features work in older environments."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the significance of React using a declarative approach?",
        "options": ["It makes the code more complicated", "You focus on what the UI should look like, not how to change it", "It completely eliminates the need for JavaScript", "It requires more lines of code"],
        "correctOptionIndex": 1,
        "correctOptionText": "You focus on what the UI should look like, not how to change it",
        "difficulty": "medium",
        "explanation": "React's declarative approach means you describe what your UI should look like for a given state, and React handles the DOM updates when that state changes. This is in contrast to imperative programming where you explicitly manipulate the DOM.",
        "hint": "It's about describing desired outcomes rather than step-by-step procedures."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "Which of the following is NOT a valid way to create a React component?",
        "options": ["Function components", "Class components", "HTML components", "Higher-Order Components"],
        "correctOptionIndex": 2,
        "correctOptionText": "HTML components",
        "difficulty": "easy",
        "explanation": "While React uses HTML-like syntax in JSX, 'HTML components' is not a React concept. The main types of components in React are function components and class components.",
        "hint": "React has specific component types, and not all HTML-related terms apply."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the recommended file extension for React component files?",
        "options": [".js", ".jsx", ".react", ".component"],
        "correctOptionIndex": 1,
        "correctOptionText": ".jsx",
        "difficulty": "easy",
        "explanation": "While both .js and .jsx will work with modern tooling, .jsx is recommended as it explicitly indicates that the file contains JSX syntax. However, many projects use .js with JSX content as well.",
        "hint": "It indicates that the file contains JSX syntax."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What happens if you try to render an array directly in JSX?",
        "options": ["It causes a syntax error", "React throws a warning", "React renders each item in the array", "Nothing renders"],
        "correctOptionIndex": 2,
        "correctOptionText": "React renders each item in the array",
        "difficulty": "medium",
        "explanation": "React can render arrays of elements directly. When an array is returned from a component or placed in JSX, React will render each item in sequence.",
        "hint": "Think about how React handles collections of elements."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the purpose of ReactDOM in a React application?",
        "options": ["To define React components", "To provide UI component library", "To connect React to the web browser's DOM", "To handle data fetching"],
        "correctOptionIndex": 2,
        "correctOptionText": "To connect React to the web browser's DOM",
        "difficulty": "medium",
        "explanation": "ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable the React virtual DOM to interact with the browser DOM.",
        "hint": "It's the bridge between React's virtual representation and the actual browser rendering."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "How do you add comments in JSX?",
        "options": ["// Comment", "/* Comment */", "<!-- Comment -->", "{/* Comment */}"],
        "correctOptionIndex": 3,
        "correctOptionText": "{/* Comment */}",
        "difficulty": "easy",
        "explanation": "In JSX, comments must be wrapped in curly braces and use the JavaScript multi-line comment syntax. Single-line comments like // won't work directly in JSX.",
        "hint": "It combines JavaScript comment syntax with JSX's way of embedding JavaScript."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the React element type for a div in JSX?",
        "options": ["React.div", "'div'", "Div", "HTMLDivElement"],
        "correctOptionIndex": 1,
        "correctOptionText": "'div'",
        "difficulty": "medium",
        "explanation": "In JSX, HTML elements are represented as strings (like 'div'). When transformed, React.createElement() will use this string to create the appropriate DOM element.",
        "hint": "It's the simplest form that matches the HTML tag name."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "Which of the following is true about React components?",
        "options": ["They must always return a single root element", "They can return multiple elements without a wrapper", "They can only be created as classes", "They cannot contain other components"],
        "correctOptionIndex": 0,
        "correctOptionText": "They must always return a single root element",
        "difficulty": "medium",
        "explanation": "React components must return a single root element. This can be a native DOM element or a Fragment, but there must be a single element that contains all other elements.",
        "hint": "Think about the structure requirements for JSX returns."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "Which statement is FALSE about case sensitivity in React?",
        "options": ["Component names must be capitalized", "HTML attributes use camelCase in JSX", "HTML tag names are lowercase", "Event handlers are case-insensitive"],
        "correctOptionIndex": 3,
        "correctOptionText": "Event handlers are case-insensitive",
        "difficulty": "medium",
        "explanation": "Event handlers in React use camelCase and are case-sensitive (e.g., onClick, onMouseEnter). Using the wrong case will result in the event not being properly handled.",
        "hint": "React has specific naming conventions for various parts of the library."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the output of `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`?",
        "options": ["Returns a React element", "Renders the App component to the DOM element with id 'root'", "Creates a new instance of App", "Displays an error message"],
        "correctOptionIndex": 1,
        "correctOptionText": "Renders the App component to the DOM element with id 'root'",
        "difficulty": "medium",
        "explanation": "This code creates a root using ReactDOM.createRoot() and then renders the App component into that root. It's the modern way to render React applications with React 18 and above.",
        "hint": "This is how React applications are typically bootstrapped in the browser."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "How do you write inline styles in JSX?",
        "options": ["style=\"color: blue\"", "style={color: blue}", "style={{color: 'blue'}}", "styles=\"{color: 'blue'}\""],
        "correctOptionIndex": 2,
        "correctOptionText": "style={{color: 'blue'}}",
        "difficulty": "easy",
        "explanation": "In JSX, inline styles are written as objects with camelCased properties. The outer curly braces are for embedding JavaScript in JSX, and the inner ones define the object literal.",
        "hint": "You need two sets of different symbols for this syntax."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What's the significance of the 'className' attribute in React?",
        "options": ["It's the same as the 'id' attribute", "It's a React-specific attribute with no HTML equivalent", "It's used instead of the 'class' attribute from HTML", "It refers to JavaScript classes"],
        "correctOptionIndex": 2,
        "correctOptionText": "It's used instead of the 'class' attribute from HTML",
        "difficulty": "easy",
        "explanation": "In JSX, you use className instead of class to specify CSS classes because 'class' is a reserved keyword in JavaScript.",
        "hint": "It's related to a naming conflict with JavaScript reserved words."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is React's primary design philosophy?",
        "options": ["Write once, run anywhere", "Component-based architecture", "Convention over configuration", "Make it work, make it right, make it fast"],
        "correctOptionIndex": 1,
        "correctOptionText": "Component-based architecture",
        "difficulty": "easy",
        "explanation": "React's core philosophy is building UIs through composable, reusable components. This approach promotes code reuse, separation of concerns, and makes code more maintainable.",
        "hint": "It's about how React structures applications into modular pieces."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the difference between React elements and React components?",
        "options": ["They are different names for the same concept", "Elements are DOM nodes, components are JavaScript functions/classes", "Elements are instances of components", "Components render to elements"],
        "correctOptionIndex": 3,
        "correctOptionText": "Components render to elements",
        "difficulty": "hard",
        "explanation": "Components are the functions or classes that describe a part of the UI. Elements are the objects representing what you want to see on the screen. Components render elements, which are then used to update the DOM.",
        "hint": "Think about the relationship between blueprints and the objects they describe."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "Which statement about JSX transpilation is correct?",
        "options": [
        "JSX is interpreted directly by browsers", 
        "JSX is transformed to React.createElement() calls", 
        "JSX compiles to HTML", 
        "JSX is converted to CSS"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "JSX is transformed to React.createElement() calls",
        "difficulty": "medium",
        "explanation": "JSX is not valid JavaScript by itself. A transpiler like Babel converts JSX syntax into React.createElement() function calls that JavaScript engines can execute.",
        "hint": "Consider what happens behind the scenes when JSX is processed."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is React Strict Mode?",
        "options": [
        "A syntax checker that enforces React best practices", 
        "A development tool for highlighting potential problems", 
        "A production optimization setting", 
        "A way to enforce type checking"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A development tool for highlighting potential problems",
        "difficulty": "hard",
        "explanation": "StrictMode is a tool for highlighting potential problems in a React application. It activates additional checks and warnings for its descendants and doesn't render any visible UI. It's only active in development mode.",
        "hint": "It helps developers find issues early in the development process."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "Which of the following can a React component NOT directly return?",
        "options": [
        "A string", 
        "An array of elements", 
        "null", 
        "Multiple elements without a wrapper (before React 16)"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Multiple elements without a wrapper (before React 16)",
        "difficulty": "hard",
        "explanation": "Before React 16, components had to return a single element. With the introduction of React Fragments in version 16, components can now return multiple elements without an explicit wrapper, though they're actually wrapped in a Fragment behind the scenes.",
        "hint": "This limitation was removed in a specific version of React."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "What is the correct way to render conditional content in React?",
        "options": [
        "Using if/else statements inside the render method", 
        "Using switch statements in JSX", 
        "Using ternary operators or logical && in JSX", 
        "Using the condition attribute"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using ternary operators or logical && in JSX",
        "difficulty": "medium",
        "explanation": "In React, you can use JavaScript expressions like ternary operators (condition ? true : false) or logical AND (condition && element) directly in JSX for conditional rendering.",
        "hint": "It involves using JavaScript expressions that can be embedded within JSX."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Introduction to React",
        "questionText": "In React 18, what is the main difference in how applications are initialized compared to earlier versions?",
        "options": [
        "React.render() is used instead of ReactDOM.render()", 
        "createRoot API is used instead of direct rendering", 
        "React apps must use hooks for initialization", 
        "All components must be classes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "createRoot API is used instead of direct rendering",
        "difficulty": "hard",
        "explanation": "React 18 introduced a new root API. Instead of ReactDOM.render(), applications now use ReactDOM.createRoot() followed by root.render() to enable new features like concurrent rendering.",
        "hint": "It's related to the new concurrent features introduced in React 18."
    },

    // Components & Props
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What are the two main types of components in React?",
        "options": ["DOM and Virtual components", "Parent and Child components", "Functional and Class components", "Simple and Complex components"],
        "correctOptionIndex": 2,
        "correctOptionText": "Functional and Class components",
        "difficulty": "easy",
        "explanation": "React has two primary ways to define components: Function components (which are JavaScript functions that return JSX) and Class components (which extend React.Component).",
        "hint": "One is defined using JavaScript functions, and the other uses ES6 classes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What is the correct way to define a functional component in React?",
        "options": [
        "function MyComponent(props) { return <div>{props.name}</div>; }",
        "const MyComponent = () => { <div>Hello</div>; }",
        "class MyComponent { render() { return <div>Hello</div>; } }",
        "React.createComponent(() => <div>Hello</div>)"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function MyComponent(props) { return <div>{props.name}</div>; }",
        "difficulty": "easy",
        "explanation": "Functional components are JavaScript functions that accept props as an argument and return JSX. They must return the JSX explicitly, and the function can be defined using either the function keyword or arrow function syntax.",
        "hint": "It needs to accept props and return JSX elements."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What is the correct way to define a class component in React?",
        "options": [
        "class MyComponent { render() { return <div>Hello</div>; } }",
        "class MyComponent extends React.Component { render() { return <div>Hello</div>; } }",
        "const MyComponent = class { render = () => <div>Hello</div> }",
        "React.Component.create({ render: () => <div>Hello</div> })"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "class MyComponent extends React.Component { render() { return <div>Hello</div>; } }",
        "difficulty": "easy",
        "explanation": "Class components must extend React.Component and implement a render() method that returns JSX. This allows the component to inherit React component functionality like lifecycle methods.",
        "hint": "It needs to inherit from a specific React class."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "How are props accessed in a functional component?",
        "options": [
        "Using this.props",
        "Directly from the function parameter",
        "Using React.getProps()",
        "From the global props object"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Directly from the function parameter",
        "difficulty": "easy",
        "explanation": "In functional components, props are passed as a parameter to the function. You can access them directly by their names or use destructuring for cleaner code.",
        "hint": "Think about how arguments are normally accessed in JavaScript functions."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "How are props accessed in a class component?",
        "options": [
        "Using this.props",
        "Directly from the constructor parameter",
        "Using the getProps() method",
        "From the global props object"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using this.props",
        "difficulty": "easy",
        "explanation": "In class components, props are accessed through the this.props object. Props are passed to the parent constructor and are available throughout the component via this.props.",
        "hint": "It uses the class instance to reference properties."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What does this code snippet do?\n```jsx\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <Welcome name=\"Sara\" />\n      <Welcome name=\"Cahal\" />\n      <Welcome name=\"Edite\" />\n    </div>\n  );\n}```",
        "options": [
        "Creates a component called Welcome but doesn't use it",
        "Displays 'Hello, Sara', 'Hello, Cahal', and 'Hello, Edite' in h1 tags",
        "Displays a list of names: Sara, Cahal, and Edite",
        "Causes an error because components can't be reused"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Displays 'Hello, Sara', 'Hello, Cahal', and 'Hello, Edite' in h1 tags",
        "difficulty": "medium",
        "explanation": "The App component renders three instances of the Welcome component, each with a different 'name' prop. The Welcome component displays 'Hello, ' followed by the name value it receives.",
        "hint": "Look at how the Welcome component uses its props and how it's called multiple times with different props."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What is prop drilling in React?",
        "options": [
        "A method to drill into and examine props for debugging",
        "Passing props through multiple layers of components",
        "A technique to create holes in the component hierarchy",
        "A way to automatically distribute props to all children"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Passing props through multiple layers of components",
        "difficulty": "medium",
        "explanation": "Prop drilling refers to the process of passing props through multiple nested components, even when some intermediate components don't use those props but just pass them along to deeper components.",
        "hint": "It's about the flow of data through multiple component levels."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What is the main purpose of props in React?",
        "options": [
        "To maintain internal component state",
        "To pass data from parent to child components",
        "To handle user events",
        "To define component styling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To pass data from parent to child components",
        "difficulty": "easy",
        "explanation": "Props (short for properties) are a mechanism for passing data from parent to child components. They enable component reuse with different data and create a unidirectional data flow.",
        "hint": "Think about communication between components in a hierarchy."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "Can props be modified inside a component?",
        "options": [
        "Yes, props can be freely modified",
        "No, props are read-only",
        "Only if the component is a class component",
        "Only if specifically allowed by the parent"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "No, props are read-only",
        "difficulty": "easy",
        "explanation": "Props are read-only in React. A component should never modify its own props. This ensures the unidirectional data flow and helps maintain the predictability of the application.",
        "hint": "Think about the immutability principles in React."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What will be rendered by this component?\n```jsx\nfunction Greeting({ firstName, lastName }) {\n  return <h1>Hello, {firstName || 'Guest'} {lastName}!</h1>;\n}\n\nfunction App() {\n  return <Greeting firstName=\"\" lastName=\"Smith\" />;\n}```",
        "options": [
        "Hello, Smith!",
        "Hello, Guest Smith!",
        "Hello,  Smith!",
        "Hello, !"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Hello, Guest Smith!",
        "difficulty": "medium",
        "explanation": "The component uses destructuring to get firstName and lastName from props. Since firstName is an empty string, which is falsy in JavaScript, the logical OR operator || returns 'Guest' instead. Therefore, it renders 'Hello, Guest Smith!'.",
        "hint": "Pay attention to the logical OR operator and what happens when the first operand is an empty string."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What are defaultProps used for in React?",
        "options": [
        "To override any props passed to a component",
        "To provide default values for props when they're not specified",
        "To make certain props required",
        "To reset props to their initial values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide default values for props when they're not specified",
        "difficulty": "medium",
        "explanation": "defaultProps is a property that can be defined on a component to set default values for props that aren't explicitly provided. This helps avoid undefined props and makes components more robust.",
        "hint": "It's about handling cases when a prop might be missing."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "How would you set default props in a functional component in modern React?",
        "options": [
        "Using the defaultProps static property",
        "Using default parameters in the function signature",
        "Using the useState hook",
        "Using the React.setDefaults() method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using default parameters in the function signature",
        "difficulty": "medium",
        "explanation": "In modern React with functional components, the most common way to set default props is using JavaScript's default parameter syntax in the function signature, like function Component({ prop1 = 'default' }).",
        "hint": "It uses a standard JavaScript feature for function parameters."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What's the correct way to set default props for a class component?",
        "options": [
        "Inside the constructor with this.props = {...defaults, ...this.props}",
        "Using static defaultProps = { propName: defaultValue }",
        "Using this.setDefaultProps() in componentDidMount",
        "Using React.createDefaultProps() helper"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using static defaultProps = { propName: defaultValue }",
        "difficulty": "medium",
        "explanation": "For class components, default props are defined using a static class property called defaultProps. This property should be an object containing the default values for each prop.",
        "hint": "It's a static property defined on the component class."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What will this code render?\n```jsx\nfunction Welcome({ name = \"Guest\", greeting = \"Hello\" }) {\n  return <h1>{greeting}, {name}!</h1>;\n}\n\nfunction App() {\n  return <Welcome greeting=\"Howdy\" />;\n}```",
        "options": [
        "Howdy, !",
        "Hello, Guest!",
        "Howdy, Guest!",
        "Hello, !"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Howdy, Guest!",
        "difficulty": "medium",
        "explanation": "The Welcome component uses default parameter values. Since 'greeting' is provided as 'Howdy', it uses that value. Since 'name' is not provided, it uses the default value 'Guest'. Therefore it renders 'Howdy, Guest!'.",
        "hint": "Consider which props are passed and which use their default values."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What's wrong with this component?\n```jsx\nfunction Button(props) {\n  props.label = props.label || 'Click Me';\n  return <button>{props.label}</button>;\n}```",
        "options": [
        "The label should be accessed using this.props",
        "The component is trying to modify its props directly",
        "Button components can't have labels",
        "The return statement is missing parentheses"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The component is trying to modify its props directly",
        "difficulty": "medium",
        "explanation": "Props in React should be treated as read-only. The component is attempting to modify the props.label property directly, which is against React's principles and can lead to unpredictable behavior.",
        "hint": "React has a specific rule about how props should be treated."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What does the spread operator (...) do when passing props?",
        "options": [
        "Creates a copy of the props to avoid reference issues",
        "Passes all properties from an object as individual props",
        "Spreads the prop values across multiple components",
        "Merges multiple props objects into one"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Passes all properties from an object as individual props",
        "difficulty": "medium",
        "explanation": "The spread operator (...) in JSX allows you to pass all properties from an object as individual props to a component. For example, <Component {...obj}> will pass each property of obj as a separate prop.",
        "hint": "It's about turning an object's properties into separate props."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What does this code accomplish?\n```jsx\nfunction Profile(props) {\n  const { name, bio, ...rest } = props;\n  return (\n    <div>\n      <h1>{name}</h1>\n      <p>{bio}</p>\n      <Avatar {...rest} />\n    </div>\n  );\n}```",
        "options": [
        "It causes an error because you can't use spread with destructuring",
        "It extracts name and bio props, then passes all remaining props to Avatar",
        "It renders three elements but doesn't use any props correctly",
        "It creates a copy of all props including name and bio"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It extracts name and bio props, then passes all remaining props to Avatar",
        "difficulty": "hard",
        "explanation": "This code uses destructuring with rest parameters to extract 'name' and 'bio' props while collecting all other props in the 'rest' object. It then uses the spread operator to pass all those remaining props to the Avatar component.",
        "hint": "It's using both destructuring with rest syntax and the spread operator."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What are children props in React?",
        "options": [
        "Props passed specifically to child components",
        "Content placed between opening and closing tags of a component",
        "Components that inherit from parent components",
        "Special props only available to class components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Content placed between opening and closing tags of a component",
        "difficulty": "medium",
        "explanation": "In React, anything that's placed between a component's opening and closing tags is passed to that component as a special prop called 'children'. This allows components to accept and render arbitrary content.",
        "hint": "It's related to what's inside component tags in JSX."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "How would you access children in a component?",
        "options": [
        "Using the getChildren() method",
        "Accessing props.children",
        "Using React.Children.get()",
        "Children are automatically rendered"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Accessing props.children",
        "difficulty": "easy",
        "explanation": "Children passed to a component can be accessed through the special props.children property. This allows components to manipulate or render whatever was passed between their opening and closing tags.",
        "hint": "It's a special property of the props object."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What will this component render?\n```jsx\nfunction Container({ children }) {\n  return <div className=\"container\">{children}</div>;\n}\n\nfunction App() {\n  return (\n    <Container>\n      <h1>Hello World</h1>\n      <p>Welcome to React</p>\n    </Container>\n  );\n}```",
        "options": [
        "A div with the class 'container' containing nothing",
        "A div with the class 'container' containing an h1 and a p",
        "Just the h1 and p without a container",
        "An error because children is not a valid prop"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A div with the class 'container' containing an h1 and a p",
        "difficulty": "medium",
        "explanation": "The Container component renders a div with className 'container' and places its children props inside it. In the App component, an h1 and a p are passed as children to Container, so they will appear inside the container div.",
        "hint": "Consider what the Container component renders and what's passed between its tags."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What is prop-types used for in React?",
        "options": [
        "To transform props into different data types",
        "To create typed props similar to TypeScript",
        "To validate the types of props passed to components",
        "To define which props are required"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To validate the types of props passed to components",
        "difficulty": "medium",
        "explanation": "prop-types is a library used to document and validate the types of props a component expects. It helps catch bugs by ensuring props are of the correct type and provides warnings in development when they're not.",
        "hint": "It's about validation and type checking for props."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "How would you specify that a prop is required using PropTypes?",
        "options": [
        "propName: PropTypes.string.required",
        "propName: PropTypes.string.isRequired",
        "propName: PropTypes.required.string",
        "@required propName: PropTypes.string"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "propName: PropTypes.string.isRequired",
        "difficulty": "medium",
        "explanation": "To specify that a prop is required with PropTypes, you add .isRequired to the PropType definition. This will cause a warning in development if the prop is not provided.",
        "hint": "It's a chained property on the PropType validator."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What will happen with this code?\n```jsx\nimport PropTypes from 'prop-types';\n\nfunction UserProfile({ name, age }) {\n  return (\n    <div>\n      <h1>{name}</h1>\n      <p>Age: {age}</p>\n    </div>\n  );\n}\n\nUserProfile.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number\n};\n\nfunction App() {\n  return <UserProfile name=\"John\" age=\"30\" />;\n}```",
        "options": [
        "It will render correctly with no warnings",
        "It will fail to render because 'name' is missing",
        "It will render but with a warning because 'age' is a string, not a number",
        "It will cause a runtime error"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It will render but with a warning because 'age' is a string, not a number",
        "difficulty": "hard",
        "explanation": "The component will render but PropTypes will log a warning in the console because 'age' is being passed as a string (\"30\") when the PropType definition specifies it should be a number.",
        "hint": "Look at the type of the 'age' prop being passed compared to its PropType definition."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What is the key difference between functional and class components regarding props?",
        "options": [
        "Functional components can't receive props",
        "Class components need to call super(props) in the constructor",
        "Functional components can receive more props than class components",
        "Props in class components are mutable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Class components need to call super(props) in the constructor",
        "difficulty": "medium",
        "explanation": "In class components, if you define a constructor, you must call super(props) to ensure that props are properly initialized. Functional components don't need this as they receive props directly as a parameter.",
        "hint": "It's related to the inheritance pattern used in class components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What happens if you forget to call super(props) in a class component constructor?",
        "options": [
        "The component still works but logs a warning",
        "The component won't have access to this.props in the constructor",
        "The component won't render at all",
        "The component will only render once"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The component won't have access to this.props in the constructor",
        "difficulty": "hard",
        "explanation": "If you don't call super(props) in a constructor, this.props will be undefined inside the constructor. However, React will still set up this.props before the component renders, so props will be accessible in other methods like render().",
        "hint": "It affects a specific part of the component lifecycle."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What will this component render?\n```jsx\nfunction Parent() {\n  const data = { text: \"Hello World\" };\n  return <Child info={data} />;\n}\n\nfunction Child({ info }) {\n  info.text = \"Modified Text\";\n  return <p>{info.text}</p>;\n}```",
        "options": [
        "Hello World",
        "Modified Text",
        "It will cause an error because props are read-only",
        "It won't render anything"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Modified Text",
        "difficulty": "hard",
        "explanation": "While props themselves are read-only, objects passed as props are passed by reference. The Child component modifies the text property of the info object, which will work but is poor practice as it can lead to unexpected side effects and breaks the principle of unidirectional data flow.",
        "hint": "Consider how JavaScript handles object references when passed as function arguments."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What's the best practice for handling many props in a component?",
        "options": [
        "Always use individual props regardless of the number",
        "Use an object to group related props",
        "Limit components to no more than 3 props",
        "Use global variables instead"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use an object to group related props",
        "difficulty": "medium",
        "explanation": "When a component requires many props, especially related ones, it's often cleaner to group them into objects. This reduces prop drilling, makes component signatures cleaner, and makes it easier to pass related data.",
        "hint": "It's about organization and readability when dealing with many props."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What pattern does this code implement?\n```jsx\nfunction Button({ children, ...props }) {\n  return <button {...props}>{children}</button>;\n}\n\nfunction App() {\n  return <Button onClick={() => alert('Clicked')} className=\"primary\">Click Me</Button>;\n}```",
        "options": [
        "HOC pattern",
        "Render props pattern",
        "Prop drilling pattern",
        "Props forwarding pattern"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Props forwarding pattern",
        "difficulty": "hard",
        "explanation": "This implements props forwarding (or prop spreading), where a component takes props and passes them along to another element. The Button component extracts 'children' for its own use but forwards all other props directly to the button element.",
        "hint": "The component is passing along props it receives to an underlying DOM element."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What issue arises from this code?\n```jsx\nfunction ListItem({ item }) {\n  return <li>{item}</li>;\n}\n\nfunction List({ items }) {\n  return (\n    <ul>\n      {items.map(item => <ListItem item={item} />)}\n    </ul>\n  );\n}```",
        "options": [
        "The items prop should be called 'data'",
        "The ListItem component isn't properly defined",
        "Missing a key prop for the list items",
        "The map function is used incorrectly"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Missing a key prop for the list items",
        "difficulty": "hard",
        "explanation": "When rendering lists in React, each item should have a unique 'key' prop. Without it, React will log a warning and may have performance issues or unexpected behavior when the list changes, as it uses keys to identify which items have changed.",
        "hint": "React needs a way to identify each item in a list efficiently."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What will be rendered by this component?\n```jsx\nfunction Greeting({ person = { name: 'Guest' } }) {\n  person.name = person.name.toUpperCase();\n  return <h1>Hello, {person.name}!</h1>;\n}\n\nfunction App() {\n  const user = { name: 'John' };\n  return (\n    <div>\n      <Greeting person={user} />\n      <p>Welcome, {user.name}</p>\n    </div>\n  );\n}```",
        "options": [
        "<h1>Hello, JOHN!</h1><p>Welcome, John</p>",
        "<h1>Hello, JOHN!</h1><p>Welcome, JOHN</p>",
        "<h1>Hello, John!</h1><p>Welcome, John</p>",
        "It will cause an error because props cannot be modified"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "<h1>Hello, JOHN!</h1><p>Welcome, JOHN</p>",
        "difficulty": "hard",
        "explanation": "The Greeting component modifies the person.name property to be uppercase. Since objects are passed by reference, this changes the original 'user' object in the App component. Therefore, both the h1 and p elements will display 'JOHN' in uppercase.",
        "hint": "Consider how modifying an object passed as a prop affects the original object."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What is the purpose of React.memo?",
        "options": [
        "To create memoized state values",
        "To prevent components from re-rendering when props haven't changed",
        "To store important information about components",
        "To improve memory management in React"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To prevent components from re-rendering when props haven't changed",
        "difficulty": "hard",
        "explanation": "React.memo is a higher-order component that memoizes a component, preventing it from re-rendering when its props haven't changed. This can improve performance for function components that render the same result given the same props.",
        "hint": "It's a performance optimization technique related to component rendering."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Components & Props",
        "questionText": "What does this code do?\n```jsx\nconst MemoizedComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n```",
        "options": [
        "Creates a component that renders once and never updates",
        "Creates a component with memoized internal state",
        "Creates a component that only re-renders when its props change",
        "Creates a component that caches its rendered output"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Creates a component that only re-renders when its props change",
        "difficulty": "hard",
        "explanation": "React.memo creates a memoized version of the component that will skip rendering when its props are unchanged from the previous render. It performs a shallow comparison of props by default but can accept a custom comparison function.",
        "hint": "It's about optimizing when a component needs to update based on prop changes."
    },

    // State Management
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What is the primary purpose of React state?",
        "options": [
        "To store server data only",
        "To maintain and update data that changes over time",
        "To replace props in components",
        "To directly modify the DOM"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To maintain and update data that changes over time",
        "difficulty": "easy",
        "explanation": "React state is used to manage data that changes over time within a component, allowing React to track these changes and update the UI accordingly.",
        "hint": "Think about what causes a component to re-render when changed."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "In a class component, which method is used to update state?",
        "options": [
        "this.state()",
        "this.updateState()",
        "this.setState()",
        "this.changeState()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "this.setState()",
        "difficulty": "easy",
        "explanation": "In class components, the setState() method is used to update component state, as direct state mutation should be avoided.",
        "hint": "Direct manipulation of state (like this.state = newValue) won't trigger re-renders."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What is the initial value of state in this component?\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState();\n  return <div>{count}</div>;\n}\n```",
        "options": [
        "0",
        "null",
        "undefined",
        "An error will be thrown"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "undefined",
        "difficulty": "medium",
        "explanation": "When no initial value is provided to useState(), the state will be initialized as undefined.",
        "hint": "What's the default value when nothing is passed to a function parameter in JavaScript?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "Which of the following is NOT a valid way to initialize state in a class component?",
        "options": [
        "this.state = { count: 0 } in the constructor",
        "state = { count: 0 } as a class property",
        "this.setState({ count: 0 }) in the constructor",
        "static getDerivedStateFromProps() to set initial state"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "this.setState({ count: 0 }) in the constructor",
        "difficulty": "medium",
        "explanation": "You should never call this.setState() in the constructor. State should be initialized directly by assigning to this.state in the constructor, or by using class property syntax.",
        "hint": "The constructor runs before the component mounts, so which method would be inappropriate there?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What's wrong with this state update?\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  function increment() {\n    setCount(count + 1);\n    setCount(count + 1);\n  }\n  \n  return <button onClick={increment}>{count}</button>;\n}\n```",
        "options": [
        "Nothing is wrong; count will increase by 2",
        "setState is asynchronous, so count will only increase by 1",
        "You can't call setCount twice in the same function",
        "The increment function needs to use an arrow function syntax"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "setState is asynchronous, so count will only increase by 1",
        "difficulty": "medium",
        "explanation": "Both setCount calls are using the same value of count from the current render. State updates are batched, so only the last update with the same value will be applied.",
        "hint": "Think about closure and how React batches state updates."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What's the correct way to update state based on the previous state value?",
        "options": [
        "setState(state + 1)",
        "setState(this.state + 1)",
        "setState(prevState => prevState + 1)",
        "setState({ state: state + 1 })"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "setState(prevState => prevState + 1)",
        "difficulty": "medium",
        "explanation": "When updating state based on the previous state, you should use the functional form of setState that receives the previous state as an argument.",
        "hint": "Which option ensures you're working with the most up-to-date state value?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "Which hook would you use to preserve a value between renders without causing re-renders when it changes?",
        "options": [
        "useState",
        "useEffect",
        "useContext",
        "useRef"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "useRef",
        "difficulty": "medium",
        "explanation": "useRef creates a mutable object with a .current property that persists across renders. Unlike state, changes to the ref object don't trigger re-renders.",
        "hint": "Which hook provides a mutable value that doesn't trigger component updates?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What happens when you call setState in React?",
        "options": [
        "The component is immediately re-rendered with the new state",
        "The state is updated and the component is scheduled for re-rendering",
        "Only the affected DOM elements are updated",
        "Nothing until you call forceUpdate()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The state is updated and the component is scheduled for re-rendering",
        "difficulty": "medium",
        "explanation": "When setState is called, React doesn't immediately re-render. Instead, it updates the state and schedules a re-render. This allows React to batch multiple state updates for performance.",
        "hint": "Think about React's reconciliation process and how it batches updates."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "In React, what is the key difference between state and props?",
        "options": [
        "State is for static data, props for dynamic data",
        "State is controlled by parent components, props by the component itself",
        "State is mutable within a component, props are passed from parent components",
        "State requires useEffect to update, props update automatically"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "State is mutable within a component, props are passed from parent components",
        "difficulty": "easy",
        "explanation": "State is managed internally by a component and can be changed by the component itself. Props are passed to a component from its parent and should be treated as immutable within the receiving component.",
        "hint": "Think about who controls each type of data."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What will be logged when the button is clicked?\n```jsx\nfunction Example() {\n  const [count, setCount] = useState(0);\n  \n  function handleClick() {\n    setCount(count + 1);\n    console.log(count);\n  }\n  \n  return <button onClick={handleClick}>Click me</button>;\n}\n```",
        "options": [
        "The updated value (1)",
        "The previous value (0)",
        "undefined",
        "An error will be thrown"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The previous value (0)",
        "difficulty": "medium",
        "explanation": "State updates in React are asynchronous. The console.log runs before the state is actually updated and the component re-renders, so it logs the previous value.",
        "hint": "Think about the execution order and when React actually updates the state."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What lifecycle method is equivalent to this useEffect hook?\n```jsx\nuseEffect(() => {\n  // Some code\n  return () => {\n    // Cleanup code\n  };\n}, []);\n```",
        "options": [
        "componentDidMount only",
        "componentDidMount and componentDidUpdate",
        "componentDidMount and componentWillUnmount",
        "componentDidUpdate only"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "componentDidMount and componentWillUnmount",
        "difficulty": "medium",
        "explanation": "This useEffect with an empty dependency array runs once after the first render (like componentDidMount), and the returned function runs when the component unmounts (like componentWillUnmount).",
        "hint": "The empty dependency array [] means the effect runs only once, and the return function is for cleanup."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "Which statement about React state is FALSE?",
        "options": [
        "State updates may be asynchronous",
        "State should not be modified directly",
        "Multiple state updates within the same function are always applied in sequence",
        "React may batch multiple setState() calls for better performance"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Multiple state updates within the same function are always applied in sequence",
        "difficulty": "medium",
        "explanation": "React often batches multiple state updates that occur in the same event handler or lifecycle method for performance reasons. They don't necessarily execute in sequence as written.",
        "hint": "Think about how React handles multiple state updates in the same function - are they guaranteed to be executed one after another?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What will be displayed after clicking the button once?\n```jsx\nfunction Counter() {\n  const [state, setState] = useState({ count: 0 });\n  \n  function handleClick() {\n    setState({ newCount: state.count + 1 });\n  }\n  \n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={handleClick}>Increment</button>\n    </div>\n  );\n}\n```",
        "options": [
        "Count: 1",
        "Count: 0",
        "Count: undefined",
        "The component will crash"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Count: undefined",
        "difficulty": "medium",
        "explanation": "Unlike class components' setState, the useState setter completely replaces the state value rather than merging it. When setState is called with { newCount: state.count + 1 }, it replaces the entire state object, removing the count property.",
        "hint": "In functional components, useState doesn't automatically merge objects like this.setState does in class components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What is the best way to update a complex nested state object?",
        "options": [
        "Directly modify the nested property and call setState",
        "Create a deep copy of the state, modify it, and then update with setState",
        "Use immer or a similar library to handle immutable updates",
        "Both B and C are correct approaches"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are correct approaches",
        "difficulty": "hard",
        "explanation": "For complex nested state, you should either create a deep copy and modify it (using the spread operator or other methods), or use a library like immer that helps with immutable updates. Direct mutation should be avoided.",
        "hint": "Think about the immutability principle in React state management."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What happens when you update state in React?",
        "options": [
        "Only the component with the updated state re-renders",
        "The component and all its children re-render by default",
        "The component and its parent re-render",
        "The entire application re-renders"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The component and all its children re-render by default",
        "difficulty": "medium",
        "explanation": "When a component's state changes, React re-renders that component and all of its children by default, regardless of whether the children actually use that state or not.",
        "hint": "Think about React's rendering model and how changes propagate down the component tree."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What will be logged to the console?\n```jsx\nfunction Example() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    console.log('Effect ran, count is now:', count);\n    \n    return () => {\n      console.log('Cleanup, count was:', count);\n    };\n  }, [count]);\n  \n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Increment ({count})\n    </button>\n  );\n}\n```",
        "options": [
        "'Effect ran, count is now: 0' only on initial render",
        "'Effect ran, count is now: 1' after first click, without cleanup",
        "'Cleanup, count was: 0' then 'Effect ran, count is now: 1' after first click",
        "'Effect ran, count is now: 0' on mount, then nothing else on clicks"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "'Cleanup, count was: 0' then 'Effect ran, count is now: 1' after first click",
        "difficulty": "hard",
        "explanation": "When count changes, React first runs the cleanup function from the previous effect (with the old count value), then runs the new effect with the updated count value.",
        "hint": "With dependencies specified, the cleanup function runs before the next effect, using the values from when that effect was created."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What's the main difference between useState and useReducer?",
        "options": [
        "useState can only handle primitive values, useReducer can handle objects",
        "useState updates are synchronous, useReducer updates are asynchronous",
        "useState is for simple state logic, useReducer is for complex state logic",
        "useReducer can only be used in class components"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "useState is for simple state logic, useReducer is for complex state logic",
        "difficulty": "medium",
        "explanation": "While both manage state, useReducer is generally preferred for complex state logic with multiple sub-values or when the next state depends on the previous one in complex ways.",
        "hint": "Think about which hook might be better for managing form input fields vs. a shopping cart with many operations."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "Why might you use useReducer instead of useState?",
        "options": [
        "When your state update logic is very simple",
        "When you need to improve rendering performance",
        "When your state logic includes complex transitions or involves multiple sub-values",
        "When you need to share state between components"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "When your state logic includes complex transitions or involves multiple sub-values",
        "difficulty": "medium",
        "explanation": "useReducer is beneficial when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one in complex ways. It provides a more structured approach to state transitions.",
        "hint": "Which scenario involves complex state transitions rather than simple updates?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What is the purpose of the 'key' prop when rendering lists in React?",
        "options": [
        "It's used for styling elements in a list",
        "It helps React identify which items have changed, been added, or removed",
        "It's required for all React components",
        "It determines the order of elements in a list"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It helps React identify which items have changed, been added, or removed",
        "difficulty": "easy",
        "explanation": "Keys help React identify which items have changed, been added, or removed. They give elements a stable identity across renders, which is essential for efficient updates and correct state management when rendering dynamic lists.",
        "hint": "Think about how React needs to track elements in a list when the list changes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What's wrong with this code?\n```jsx\nfunction ListWithState() {\n  const [items, setItems] = useState(['a', 'b', 'c']);\n  \n  const handleAdd = () => {\n    items.push('d');\n    setItems(items);\n  };\n  \n  return (\n    <div>\n      <button onClick={handleAdd}>Add Item</button>\n      <ul>\n        {items.map((item, index) => (\n          <li key={index}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n```",
        "options": [
        "Using index as key is inappropriate for dynamic lists",
        "The items array is being mutated directly",
        "setItems requires a new reference to trigger re-render",
        "Both B and C"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C",
        "difficulty": "hard",
        "explanation": "This code has two issues: 1) It mutates the state directly with push() which is against React's immutability principle, and 2) setItems is called with the same reference to the items array, so React may not detect the change and not re-render.",
        "hint": "Consider both how the array is modified and what reference is passed to the setState function."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What is 'lifting state up' in React?",
        "options": [
        "Moving state from functional components to class components",
        "Moving state from a parent component to its children",
        "Moving state from child components to their common ancestor",
        "Using context instead of component state"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Moving state from child components to their common ancestor",
        "difficulty": "medium",
        "explanation": "Lifting state up means moving shared state to the closest common ancestor of components that need it. This allows multiple components to share and update the same state, ensuring they stay in sync.",
        "hint": "Think about how multiple components can share and operate on the same data."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What will be displayed after clicking the button?\n```jsx\nfunction Example() {\n  const [count, setCount] = useState(0);\n  \n  function delayedCount() {\n    setTimeout(() => {\n      setCount(count + 1);\n    }, 1000);\n  }\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => {\n        delayedCount();\n        delayedCount();\n        delayedCount();\n      }}>Add 3</button>\n    </div>\n  );\n}\n```",
        "options": [
        "Count: 3",
        "Count: 1",
        "Count: 0",
        "It varies depending on the timing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Count: 1",
        "difficulty": "hard",
        "explanation": "All three setTimeout callbacks capture the same value of count (0) due to closures. After the timeouts, each will call setCount(0 + 1), resulting in count being set to 1, not 3.",
        "hint": "Consider how closures work in JavaScript and what value of 'count' each timeout has access to."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What approach should you take to update an array in state?",
        "options": [
        "Directly modify the array and then call setState with the same array",
        "Make a copy of the array, modify the copy, then update state with the copy",
        "Always create a completely new array with different values",
        "Use refs instead of state for arrays"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Make a copy of the array, modify the copy, then update state with the copy",
        "difficulty": "medium",
        "explanation": "React state should be treated as immutable. To update an array, first create a copy using methods like slice(), concat(), or the spread operator, modify the copy, then update the state with the new copy.",
        "hint": "Think about React's immutability principle for state updates."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What will the component display?\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    setCount(count + 1);\n  }, []);\n  \n  return <div>Count: {count}</div>;\n}\n```",
        "options": [
        "Count: 0",
        "Count: 1",
        "Count: Infinity (infinite loop)",
        "It will throw an error"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Count: 1",
        "difficulty": "medium",
        "explanation": "The useEffect with an empty dependency array runs once after the initial render. It increases count from 0 to 1. Since the dependency array is empty, the effect won't run again on subsequent renders.",
        "hint": "The empty dependency array means the effect runs only once after initial render."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What is the correct way to update state that depends on the previous state in a functional component?",
        "options": [
        "this.setState({ count: this.state.count + 1 })",
        "setState(count + 1)",
        "setState(prevState => prevState + 1)",
        "setState(state => ({ ...state, count: state.count + 1 }))"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "setState(prevState => prevState + 1)",
        "difficulty": "easy",
        "explanation": "When updating state based on the previous state, you should use the functional form of the state setter function, which receives the previous state value as its argument.",
        "hint": "Which option guarantees you're working with the most up-to-date state value?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What's wrong with this approach to updating a complex state object?\n```jsx\nfunction UserProfile() {\n  const [user, setUser] = useState({\n    name: 'John',\n    email: 'john@example.com',\n    preferences: { theme: 'light', notifications: true }\n  });\n  \n  const toggleTheme = () => {\n    user.preferences.theme = user.preferences.theme === 'light' ? 'dark' : 'light';\n    setUser(user);\n  };\n  \n  return (\n    <button onClick={toggleTheme}>\n      Toggle theme (current: {user.preferences.theme})\n    </button>\n  );\n}\n```",
        "options": [
        "You can't nest objects in state",
        "The state is being mutated directly",
        "setState should be called with a function, not an object",
        "You should use useReducer instead of useState for objects"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The state is being mutated directly",
        "difficulty": "medium",
        "explanation": "The code directly mutates the state object by modifying user.preferences.theme. In React, state should be treated as immutable, and you should create a new object with the updated values instead.",
        "hint": "React state should never be modified directly; think about the immutability principle."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What does the 'lazy initialization' of state refer to in React?",
        "options": [
        "Delaying state updates until a component re-renders",
        "Passing a function to useState instead of an initial value",
        "Using useEffect to set state after component mounts",
        "Creating state only when a specific condition is met"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Passing a function to useState instead of an initial value",
        "difficulty": "hard",
        "explanation": "Lazy initialization means passing a function to useState instead of a direct value. React will call this function only during the first render, which is useful for expensive calculations that shouldn't run on every render.",
        "hint": "How can you avoid running expensive initialization logic on every render with useState?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What is the output of this component?\n```jsx\nfunction Example() {\n  const [state, setState] = useState(() => {\n    console.log('Initializing state');\n    return { count: 0 };\n  });\n  \n  console.log('Rendering with count:', state.count);\n  \n  return (\n    <button onClick={() => setState({ count: state.count + 1 })}>\n      Increment\n    </button>\n  );\n}\n```",
        "options": [
        "'Initializing state' logs once, 'Rendering with count: 0' logs on every render",
        "'Initializing state' and 'Rendering with count: 0' both log on every render",
        "'Initializing state' never logs, only 'Rendering with count: 0' logs",
        "'Initializing state' logs on every render, 'Rendering with count: 0' logs once"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "'Initializing state' logs once, 'Rendering with count: 0' logs on every render",
        "difficulty": "hard",
        "explanation": "The initialization function passed to useState is only called during the first render. The render console log runs on every render with the current count value.",
        "hint": "Think about what lazy initialization means for the useState hook's behavior."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "In a React functional component, what's the difference between state and a regular variable?",
        "options": [
        "There is no difference, they work the same way",
        "Regular variables are faster to update than state",
        "State persists between renders and triggers re-renders when updated",
        "State can only hold primitive values, while variables can hold objects"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "State persists between renders and triggers re-renders when updated",
        "difficulty": "easy",
        "explanation": "Regular variables are reset to their initial values on every render. State, on the other hand, is preserved by React between renders, and updating state triggers a component re-render.",
        "hint": "Think about what happens to a regular variable when a component re-renders."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "What is the primary reason to use the functional update form of setState?",
        "options": [
        "It runs synchronously instead of asynchronously",
        "It's more readable than the regular form",
        "It ensures you're working with the most current state value",
        "It allows for partial updates of state objects"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It ensures you're working with the most current state value",
        "difficulty": "medium",
        "explanation": "The functional update form (setState(prevState => newState)) ensures you have access to the most current state, which is crucial when the new state depends on the previous state, especially with asynchronous updates.",
        "hint": "What problem could arise when multiple state updates happen in rapid succession?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "State Management",
        "questionText": "How would you correctly update a nested property in a state object?",
        "options": [
        "state.nested.property = newValue; setState(state);",
        "setState({ ...state, nested: { property: newValue } });",
        "setState({ ...state, nested: { ...state.nested, property: newValue } });",
        "setState(state => { state.nested.property = newValue; return state; });"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "setState({ ...state, nested: { ...state.nested, property: newValue } });",
        "difficulty": "hard",
        "explanation": "To update a nested property immutably, you need to create copies at each level of nesting. This option creates a new state object with a new nested object that has all the same properties as the original except for the updated one.",
        "hint": "Which option preserves all existing properties while only updating the specific nested property?"
    },

    // React Hooks
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What are React Hooks?",
        "options": [
        "Classes that let you use state in functional components",
        "Functions that let you use React features in functional components",
        "Components that can be reused across different parts of the application",
        "Methods to optimize rendering performance in React"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Functions that let you use React features in functional components",
        "difficulty": "easy",
        "explanation": "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.",
        "hint": "Think about what Hooks enable you to do in functional components that was previously only possible in class components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "Which of the following is NOT a built-in React Hook?",
        "options": [
        "useEffect",
        "useState",
        "useDispatch",
        "useContext"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "useDispatch",
        "difficulty": "easy",
        "explanation": "useDispatch is not a built-in React Hook; it's a Hook provided by the Redux library (specifically, react-redux). useState, useEffect, and useContext are all built-in React Hooks.",
        "hint": "Which option is provided by a third-party library rather than React itself?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What does the useState Hook return?",
        "options": [
        "The current state value only",
        "A function to update the state only",
        "An array with the current state value and a function to update it",
        "An object with the current state value and a function to update it"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An array with the current state value and a function to update it",
        "difficulty": "easy",
        "explanation": "The useState Hook returns an array with exactly two elements: the current state value and a function to update that state. This is why array destructuring is commonly used with useState.",
        "hint": "Think about how you typically use useState in a component and what you get from it."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the purpose of the dependency array in useEffect?",
        "options": [
        "To specify when the component should re-render",
        "To determine when the effect should be re-run",
        "To list the states that can be modified by the effect",
        "To optimize memory usage in React applications"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To determine when the effect should be re-run",
        "difficulty": "easy",
        "explanation": "The dependency array in useEffect is used to control when the effect function should be re-executed. The effect will only run if one of the values in the dependency array has changed since the last render.",
        "hint": "What happens to the effect function when a value in the dependency array changes?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What will happen if you don't provide a dependency array to useEffect?",
        "options": [
        "The effect will run once when the component mounts",
        "The effect will never run",
        "The effect will run after every render",
        "React will throw an error"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The effect will run after every render",
        "difficulty": "medium",
        "explanation": "When no dependency array is provided to useEffect, the effect function will run after every render of the component. This includes the initial render and all subsequent re-renders.",
        "hint": "Consider the different behaviors of useEffect with different dependency array configurations."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What does the useRef Hook return?",
        "options": [
        "A primitive value that persists across renders",
        "A mutable object with a 'current' property",
        "A function to update a reference",
        "An array with the current reference and a setter function"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A mutable object with a 'current' property",
        "difficulty": "medium",
        "explanation": "useRef returns a mutable object with a 'current' property. This object persists for the full lifetime of the component, and changing the 'current' property doesn't cause a re-render.",
        "hint": "Think about the structure of what useRef returns and how you access the stored value."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the main difference between useState and useRef?",
        "options": [
        "useState can store objects, useRef cannot",
        "useRef values persist between renders, useState values don't",
        "Changes to useState trigger re-renders, changes to useRef don't",
        "useRef can only be used for DOM references"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Changes to useState trigger re-renders, changes to useRef don't",
        "difficulty": "medium",
        "explanation": "The main difference is that updates to a useState value trigger component re-renders, while changes to a useRef's current property don't cause the component to re-render. Both can persist values between renders.",
        "hint": "Consider what happens to the component when each type of value is changed."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the purpose of the useContext Hook?",
        "options": [
        "To create a new context object",
        "To provide context values to child components",
        "To subscribe to a context and access its value",
        "To manage global state in a React application"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To subscribe to a context and access its value",
        "difficulty": "medium",
        "explanation": "The useContext Hook is used to subscribe to a React context and access its current value. It accepts a context object (created by React.createContext) and returns the current context value for that context.",
        "hint": "Think about what useContext allows a component to do with an existing context."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "When using the useReducer Hook, what parameters does it accept?",
        "options": [
        "A reducer function and an initial state",
        "A reducer function, an initial state, and a middleware function",
        "A reducer function, an initial state, and optionally an init function",
        "A reducer function and a context object"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A reducer function, an initial state, and optionally an init function",
        "difficulty": "medium",
        "explanation": "useReducer accepts a reducer function, an initial state, and optionally a third function (the 'init' function) that can be used to lazily initialize the state, which is useful for complex state initialization logic.",
        "hint": "What are all the possible parameters that can be passed to useReducer?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What does the useReducer Hook return?",
        "options": [
        "The current state only",
        "The dispatch function only",
        "An array containing the current state and the dispatch function",
        "An object containing the current state and the dispatch function"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An array containing the current state and the dispatch function",
        "difficulty": "medium",
        "explanation": "The useReducer Hook returns an array with exactly two elements: the current state and the dispatch function. The dispatch function is used to trigger state updates by sending actions to the reducer.",
        "hint": "What do you get back when you call useReducer that allows you to both access and update state?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What does the useMemo Hook do?",
        "options": [
        "Caches a function definition between renders",
        "Memoizes a computed value to avoid recalculation on every render",
        "Creates a mutable reference that persists through renders",
        "Triggers side effects in function components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Memoizes a computed value to avoid recalculation on every render",
        "difficulty": "medium",
        "explanation": "useMemo memoizes (caches) the result of a computation between renders. It only recomputes the cached value when one of the dependencies has changed, optimizing performance by avoiding unnecessary calculations.",
        "hint": "What performance optimization does useMemo provide when you have expensive calculations in your component?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the purpose of the useCallback Hook?",
        "options": [
        "To create a callback function that persists between renders",
        "To execute a callback after every render",
        "To create callback references to DOM elements",
        "To handle asynchronous operations in React"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To create a callback function that persists between renders",
        "difficulty": "medium",
        "explanation": "useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",
        "hint": "How does useCallback help with function stability across renders?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the difference between useMemo and useCallback?",
        "options": [
        "useMemo is for values, useCallback is for functions",
        "useCallback can handle side effects, useMemo cannot",
        "useMemo works with class components, useCallback with functional components",
        "useCallback has a dependency array, useMemo doesn't"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "useMemo is for values, useCallback is for functions",
        "difficulty": "medium",
        "explanation": "The key difference is what they memoize: useMemo memoizes the returned value of a function, while useCallback memoizes the function itself. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",
        "hint": "Consider what type of data each Hook is designed to cache between renders."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the result of this code?\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount(count + 1);\n    }, 1000);\n    return () => clearInterval(id);\n  }, []);\n  \n  return <div>{count}</div>;\n}\n```",
        "options": [
        "The counter increases by 1 every second indefinitely",
        "The counter increases to 1 and stops",
        "The counter remains at 0",
        "The code results in an error"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The counter increases to 1 and stops",
        "difficulty": "hard",
        "explanation": "The count will increase from 0 to 1 and then stop. Since the effect's dependency array is empty, the effect is only run once after the initial render, capturing count as 0. The interval keeps setting count to 0+1, but never sees updated values of count.",
        "hint": "Pay attention to the dependency array and closure capture in the effect."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "How can you fix the previous Counter component to make it increment indefinitely?",
        "options": [
        "Add count to the dependency array",
        "Remove the dependency array entirely",
        "Use a functional update with setCount(c => c + 1)",
        "Change useEffect to useLayoutEffect"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use a functional update with setCount(c => c + 1)",
        "difficulty": "hard",
        "explanation": "Using a functional update with setCount(c => c + 1) solves the problem because it doesn't rely on the captured value of count in the closure. It gets the latest state value directly from React, allowing the counter to increment properly.",
        "hint": "What form of setState allows you to update based on the current state without depending on closure-captured values?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the purpose of the useLayoutEffect Hook?",
        "options": [
        "It's used for DOM measurements before the browser paints",
        "It optimizes layout rendering in React applications",
        "It's used for asynchronous data fetching",
        "It manages the component's responsive layout"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It's used for DOM measurements before the browser paints",
        "difficulty": "hard",
        "explanation": "useLayoutEffect works similarly to useEffect, but it fires synchronously after all DOM mutations, before the browser paints. This is useful for DOM measurements and manipulations that should happen before the user sees any visual updates.",
        "hint": "When might you need to measure or update the DOM synchronously before the browser paint cycle?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What's wrong with this code?\n```jsx\nfunction Example() {\n  const [count, setCount] = useState(0);\n  \n  if (count > 5) {\n    const [message, setMessage] = useState('Count is high');\n  }\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n```",
        "options": [
        "Nothing is wrong with this code",
        "You can't use multiple useState Hooks in one component",
        "You can't conditionally call Hooks",
        "useState must be assigned to a const variable"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "You can't conditionally call Hooks",
        "difficulty": "medium",
        "explanation": "React Hooks must be called at the top level of the component and cannot be called conditionally, inside loops, or inside nested functions. This ensures that Hooks are called in the same order on every render, which is crucial for React to correctly preserve the state between renders.",
        "hint": "What is one of the Rules of Hooks that this code violates?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What will be logged when the button is clicked?\n```jsx\nfunction Example() {\n  const [count, setCount] = useState(0);\n  const countRef = useRef(count);\n  \n  const handleClick = () => {\n    setCount(count + 1);\n    countRef.current = count + 1;\n    console.log('Count:', count);\n    console.log('CountRef:', countRef.current);\n  };\n  \n  return <button onClick={handleClick}>Click me</button>;\n}\n```",
        "options": [
        "Count: 0, CountRef: 0",
        "Count: 1, CountRef: 1",
        "Count: 0, CountRef: 1",
        "Count: 1, CountRef: 0"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Count: 0, CountRef: 1",
        "difficulty": "hard",
        "explanation": "When handleClick runs, the count state is still 0 due to the closure and React's asynchronous state updates. The console.log will show the current closure value (0). However, countRef.current is updated synchronously to 1, so it shows the updated value.",
        "hint": "Consider the difference between state updates (which are asynchronous) and ref updates (which are synchronous)."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "When would you use the useImperativeHandle Hook?",
        "options": [
        "To optimize re-renders in a component tree",
        "To handle imperative browser APIs like localStorage",
        "To customize the instance value exposed when using refs with forwardRef",
        "To handle imperative functions like DOM measurements"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To customize the instance value exposed when using refs with forwardRef",
        "difficulty": "hard",
        "explanation": "useImperativeHandle is used with forwardRef to customize the instance value that is exposed when a parent component uses a ref to access a child component. It allows the child to expose only specific functions or properties to the parent.",
        "hint": "Which scenario involves controlling what a parent component can access when using refs?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the useDebugValue Hook used for?",
        "options": [
        "To debug performance issues in React applications",
        "To display custom labels for custom Hooks in React DevTools",
        "To log state changes during development",
        "To add breakpoints within functional components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To display custom labels for custom Hooks in React DevTools",
        "difficulty": "hard",
        "explanation": "useDebugValue is used to display a custom label for custom Hooks in React DevTools. It helps developers identify and inspect custom Hooks when debugging an application.",
        "hint": "How can you make custom Hooks more identifiable in development tools?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What will this component display?\n```jsx\nfunction Example() {\n  const [state, setState] = useState({ count: 0, name: 'John' });\n  \n  function handleClick() {\n    setState({ count: state.count + 1 });\n  }\n  \n  return (\n    <div>\n      <p>Count: {state.count}, Name: {state.name}</p>\n      <button onClick={handleClick}>Increment</button>\n    </div>\n  );\n}\n```",
        "options": [
        "Count: 1, Name: John (after clicking)",
        "Count: 1, Name: undefined (after clicking)",
        "An error because you can't use objects with useState",
        "Count: 0, Name: John (won't update on click)"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Count: 1, Name: undefined (after clicking)",
        "difficulty": "medium",
        "explanation": "Unlike this.setState in class components, the setState function from useState doesn't automatically merge objects. It completely replaces the state value. After clicking, state will be { count: 1 } without the name property.",
        "hint": "How does useState's update behavior differ from class component's this.setState when dealing with objects?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the best way to update an object state with useState?",
        "options": [
        "Directly modify the object and call setState",
        "Use two separate useState calls for each property",
        "Use the spread operator to merge the old state with new values",
        "Use useReducer instead of useState for objects"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use the spread operator to merge the old state with new values",
        "difficulty": "medium",
        "explanation": "When updating object state with useState, you should use the spread operator to create a new object that includes all the properties of the previous state object, with the updated properties overriding the old ones: setState({...state, count: state.count + 1}).",
        "hint": "Which approach preserves existing properties while updating specific ones?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What will be logged in this component when clicking the button?\n```jsx\nfunction Example() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    console.log('Effect ran, count is:', count);\n  }, [count]);\n  \n  function handleClick() {\n    setCount(prevCount => prevCount + 1);\n    setCount(prevCount => prevCount + 1);\n    console.log('After updates, count is:', count);\n  }\n  \n  return <button onClick={handleClick}>Update</button>;\n}\n```",
        "options": [
        "'After updates, count is: 2' followed by 'Effect ran, count is: 2'",
        "'After updates, count is: 0' followed by 'Effect ran, count is: 2'",
        "'Effect ran, count is: 0' followed by 'After updates, count is: 0'",
        "'After updates, count is: 0' followed by 'Effect ran, count is: 0'"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "'After updates, count is: 0' followed by 'Effect ran, count is: 2'",
        "difficulty": "hard",
        "explanation": "Due to closure, handleClick sees the count value from render time (0). State updates are batched and don't immediately update the state in the current execution context. The effect runs after render with the new count value (2).",
        "hint": "Consider the timing of state updates, closures, and when effects run in the React lifecycle."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "When should you include a function in the dependency array of useEffect?",
        "options": [
        "Never, functions should not be dependencies",
        "Only when the function is defined inside the component and used in the effect",
        "Always, any function used in the effect must be a dependency",
        "Only when the function is passed as a prop to the component"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Only when the function is defined inside the component and used in the effect",
        "difficulty": "hard",
        "explanation": "Functions defined inside components are recreated on each render and are part of the component's closure. If an effect uses such a function, it should be included in the dependency array to ensure the effect uses the latest version of that function.",
        "hint": "Think about when a function references values from the component scope and how that affects dependencies."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the effect of passing an empty array as the dependency to useEffect?",
        "options": [
        "The effect runs after every render",
        "The effect runs only once, after the first render",
        "The effect never runs",
        "The effect runs only when the component unmounts"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The effect runs only once, after the first render",
        "difficulty": "easy",
        "explanation": "When you pass an empty array ([]) as the dependency to useEffect, the effect will run only once after the initial render (component mount), similar to componentDidMount in class components.",
        "hint": "How can you make an effect behave like componentDidMount in class components?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What happens if you return a function from useEffect?",
        "options": [
        "React throws an error",
        "The function runs before the effect on subsequent renders",
        "The function runs when the component unmounts or before the effect runs again",
        "The function becomes a callback that must be manually triggered"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The function runs when the component unmounts or before the effect runs again",
        "difficulty": "medium",
        "explanation": "A function returned from useEffect is the cleanup function. It runs when the component unmounts and also before the effect runs again on subsequent renders. This is useful for cleaning up resources or subscriptions.",
        "hint": "When is the cleanup function in useEffect executed?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What's a proper use case for the useRef Hook?",
        "options": [
        "To store state that triggers re-renders when changed",
        "To access DOM elements directly",
        "To memoize expensive calculations",
        "To share state between components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To access DOM elements directly",
        "difficulty": "easy",
        "explanation": "One of the primary use cases for useRef is to get a reference to a DOM element, allowing direct manipulation or measurement of that element when necessary. This is achieved by assigning the ref to the ref attribute of a JSX element.",
        "hint": "What might you need to do that requires direct access to DOM nodes?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What will be the result of this code?\n```jsx\nfunction Example() {\n  const [count, setCount] = useState(0);\n  const prevCountRef = useRef();\n  \n  useEffect(() => {\n    prevCountRef.current = count;\n  });\n  \n  const prevCount = prevCountRef.current;\n  \n  return (\n    <div>\n      <p>Now: {count}, Before: {prevCount}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n```",
        "options": [
        "Now: 1, Before: 0 (after clicking)",
        "Now: 1, Before: 1 (after clicking)",
        "Now: 1, Before: undefined (after first click)",
        "Now: 0, Before: undefined (initial render)"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Now: 0, Before: undefined (initial render)",
        "difficulty": "hard",
        "explanation": "On the initial render, prevCountRef.current is undefined because the effect hasn't run yet. After clicking, it would show Now: 1, Before: 0 because the effect updates prevCountRef.current with the previous count after each render.",
        "hint": "Consider the sequence of operations during the initial render, including when useEffect runs."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "How do you correctly implement a previous value pattern with Hooks?",
        "options": [
        "Use two state variables, one for current and one for previous",
        "Use useRef to store the previous value and update it in useEffect",
        "Use useState with an object containing both current and previous values",
        "Use useReducer to manage both current and previous states"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use useRef to store the previous value and update it in useEffect",
        "difficulty": "hard",
        "explanation": "To track the previous value of a state or prop, you can use a ref to store it, and then update that ref in an effect that runs after the render. This works because refs persist between renders and useEffect runs after the render is committed.",
        "hint": "Which approach uses a combination of Hooks to track values across renders without triggering additional renders?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What is the recommended way to fetch data with Hooks?",
        "options": [
        "Use the built-in useFetch Hook",
        "Call fetch directly in the component body",
        "Use useEffect with proper cleanup and dependency management",
        "Use the useData Hook provided by React"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use useEffect with proper cleanup and dependency management",
        "difficulty": "medium",
        "explanation": "The recommended pattern for data fetching with Hooks is to use useEffect with proper dependency management and cleanup. This includes handling loading states, errors, and cancellation of requests when the component unmounts or dependencies change.",
        "hint": "Which approach handles both the initial fetch and proper cleanup when dependencies change or the component unmounts?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Hooks",
        "questionText": "What's wrong with this code?\n```jsx\nfunction SearchResults({ query }) {\n  const [results, setResults] = useState([]);\n  const [isLoading, setIsLoading] = useState(false);\n  \n  useEffect(() => {\n    const fetchData = async () => {\n      setIsLoading(true);\n      const response = await fetch(`/api/search?q=${query}`);\n      const data = await response.json();\n      setResults(data);\n      setIsLoading(false);\n    };\n    \n    fetchData();\n  }, [query]);\n  \n  return (\n    <div>\n      {isLoading ? <p>Loading...</p> : (\n        <ul>\n          {results.map(item => <li key={item.id}>{item.title}</li>)}\n        </ul>\n      )}\n    </div>\n  );\n}\n```",
        "options": [
        "You can't use async/await in useEffect",
        "You should use useReducer instead of multiple state variables",
        "The effect is missing a cleanup function for pending requests",
        "useState shouldn't be used with arrays"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The effect is missing a cleanup function for pending requests",
        "difficulty": "hard",
        "explanation": "The code is missing a cleanup function in useEffect that would cancel or ignore results from outdated requests. If the query changes rapidly, responses might arrive out of order, causing race conditions where older results overwrite newer ones.",
        "hint": "What happens if the query changes before the previous request completes?"
    },

    // Custom Hooks
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What is the naming convention for custom hooks in React?",
        "options": ["start with 'use' prefix", "start with 'hook' prefix", "end with 'Hook' suffix", "no specific convention"],
        "correctOptionIndex": 0,
        "correctOptionText": "start with 'use' prefix",
        "difficulty": "easy",
        "explanation": "Custom hooks in React must start with the 'use' prefix (e.g., useCounter, useFetch) to indicate to React that they follow the Rules of Hooks.",
        "hint": "React has a specific naming requirement to identify functions as hooks."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What is the primary purpose of creating custom hooks?",
        "options": [
        "To replace Redux entirely",
        "To extract and reuse stateful logic between components",
        "To create class components without writing classes",
        "To optimize performance automatically"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To extract and reuse stateful logic between components",
        "difficulty": "easy",
        "explanation": "Custom hooks allow developers to extract component logic into reusable functions, making it possible to share stateful logic across multiple components without duplicating code.",
        "hint": "Think about sharing functionality between components without repeating code."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "Which of the following is NOT a valid custom hook?",
        "options": ["useWindowSize()", "useDataFetching()", "DataProvider()", "useLocalStorage()"],
        "correctOptionIndex": 2,
        "correctOptionText": "DataProvider()",
        "difficulty": "easy",
        "explanation": "DataProvider() doesn't follow the naming convention for custom hooks, which must start with 'use'. The other options follow this convention and are valid custom hook names.",
        "hint": "Look for the naming convention that all valid hooks must follow."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "Can custom hooks call other hooks?",
        "options": ["Yes, always", "No, never", "Only if they're built-in hooks", "Only if they're in the same component"],
        "correctOptionIndex": 0,
        "correctOptionText": "Yes, always",
        "difficulty": "easy",
        "explanation": "Custom hooks can call other hooks (both built-in and custom). This composition is a key feature that makes hooks powerful for reusing logic.",
        "hint": "Think about the composability aspect of hooks."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "When implementing a custom hook called usePrevious that tracks a previous value, what hook would you most likely use internally?",
        "options": ["useState", "useEffect", "useRef", "useCallback"],
        "correctOptionIndex": 2,
        "correctOptionText": "useRef",
        "difficulty": "medium",
        "explanation": "useRef is typically used to implement usePrevious because it persists values between renders without causing re-renders, and the .current property can be updated in useEffect to store the previous value.",
        "hint": "Which hook provides a mutable object that persists across renders?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's the correct implementation of a simple useToggle custom hook?",
        "options": [
        "const useToggle = () => { const [state, setState] = useState(false); return [state, setState]; }",
        "const useToggle = (initialState = false) => { const [state, setState] = useState(initialState); const toggle = () => setState(!state); return [state, toggle]; }",
        "const useToggle = (initialState = false) => { let state = initialState; const toggle = () => { state = !state; }; return [state, toggle]; }",
        "const useToggle = (initialState = false) => { const state = useRef(initialState); const toggle = () => { state.current = !state.current; }; return [state, toggle]; }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "const useToggle = (initialState = false) => { const [state, setState] = useState(initialState); const toggle = () => setState(!state); return [state, toggle]; }",
        "difficulty": "medium",
        "explanation": "A proper useToggle hook uses useState to manage the toggle state and returns both the current state and a function to toggle that state. Option 1 doesn't provide a toggle function, Option 3 doesn't use React state, and Option 4 uses useRef but doesn't trigger re-renders.",
        "hint": "The hook should use React state management and provide a way to toggle the state."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "Which statement about custom hooks is FALSE?",
        "options": [
        "Custom hooks can share stateful logic between components",
        "Custom hooks must be used inside components or other hooks",
        "Custom hooks create shared state between components that use them",
        "Custom hooks can use other hooks inside them"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Custom hooks create shared state between components that use them",
        "difficulty": "medium",
        "explanation": "Custom hooks do NOT create shared state between components. Each component that uses a custom hook gets its own isolated instance of the state. If you need shared state, you need to use Context or another state management solution.",
        "hint": "Think about how state is isolated between components in React."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What will the following custom hook return when called?\n\n```jsx\nfunction useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n  \n  const increment = () => setCount(c => c + 1);\n  const decrement = () => setCount(c => c - 1);\n  const reset = () => setCount(initialValue);\n  \n  return { count, increment, decrement, reset };\n}\n```",
        "options": [
        "A number",
        "An array containing the count and three functions",
        "An object containing the count and three functions",
        "A function to update the count"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An object containing the count and three functions",
        "difficulty": "easy",
        "explanation": "The useCounter hook returns an object with four properties: count (the current state value), and three functions (increment, decrement, and reset) to manipulate that state.",
        "hint": "Look at the return statement and its structure."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "Which built-in React hook would you use to implement a custom hook that needs to run code on component mount and cleanup on unmount?",
        "options": ["useState", "useEffect", "useCallback", "useMemo"],
        "correctOptionIndex": 1,
        "correctOptionText": "useEffect",
        "difficulty": "easy",
        "explanation": "useEffect with an empty dependency array runs code on mount, and its return function runs on unmount, making it perfect for initialization and cleanup operations in custom hooks.",
        "hint": "Which hook handles side effects in the component lifecycle?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's wrong with this custom hook implementation?\n\n```jsx\nfunction useFetchData(url) {\n  if (url) {\n    const [data, setData] = useState(null);\n    useEffect(() => {\n      fetch(url).then(res => res.json()).then(setData);\n    }, [url]);\n    return data;\n  }\n  return null;\n}\n```",
        "options": [
        "It doesn't handle loading or error states",
        "The useState call is conditional, violating Rules of Hooks",
        "It should return an array, not a single value",
        "The useEffect dependency array is incorrect"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The useState call is conditional, violating Rules of Hooks",
        "difficulty": "medium",
        "explanation": "React's Rules of Hooks state that hooks must not be called conditionally. In this code, useState is inside an if statement, which violates this rule and can lead to bugs.",
        "hint": "React has strict rules about where and how hooks can be called."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's the best way to implement a useLocalStorage custom hook that syncs state with localStorage?",
        "options": [
        "Use useState with useEffect that only runs on mount",
        "Use useRef to store the value and update localStorage directly",
        "Use useState with useEffect that runs whenever the state changes",
        "Use a regular variable and update it with localStorage.setItem"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use useState with useEffect that runs whenever the state changes",
        "difficulty": "medium",
        "explanation": "A proper useLocalStorage hook uses useState to manage the value and an useEffect with the state in its dependency array to sync changes to localStorage. This ensures the state and localStorage stay in sync as the state changes.",
        "hint": "You need React state management plus a way to respond to state changes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What would the following custom hook be useful for?\n\n```jsx\nfunction useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n```",
        "options": [
        "Preventing too many re-renders",
        "Making API calls more efficient",
        "Delaying state updates until user stops typing",
        "Preventing memory leaks"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Delaying state updates until user stops typing",
        "difficulty": "medium",
        "explanation": "This is a debounce hook that delays updating its returned value until after a specified delay has passed without the input value changing. It's commonly used for search inputs to prevent API calls on every keystroke.",
        "hint": "Think about scenarios where you want to wait for a pause in user activity."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's the expected behavior of this custom hook?\n\n```jsx\nfunction useTimeout(callback, delay) {\n  const savedCallback = useRef(callback);\n  \n  useEffect(() => {\n    savedCallback.current = callback;\n  }, [callback]);\n  \n  useEffect(() => {\n    if (delay !== null) {\n      const id = setTimeout(() => savedCallback.current(), delay);\n      return () => clearTimeout(id);\n    }\n  }, [delay]);\n}\n```",
        "options": [
        "Executes the callback repeatedly every 'delay' milliseconds",
        "Executes the callback once after 'delay' milliseconds",
        "Cancels a timeout after 'delay' milliseconds",
        "Creates a debounced version of the callback"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Executes the callback once after 'delay' milliseconds",
        "difficulty": "hard",
        "explanation": "This hook creates a timeout that executes the callback once after the specified delay. It also properly cleans up the timeout on unmount or when delay changes. The useRef + useEffect pattern ensures the latest callback is always used.",
        "hint": "Look at the setTimeout usage and how it differs from setInterval."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What does this custom hook do?\n\n```jsx\nfunction useMediaQuery(query) {\n  const [matches, setMatches] = useState(false);\n\n  useEffect(() => {\n    const media = window.matchMedia(query);\n    setMatches(media.matches);\n    \n    const listener = (e) => setMatches(e.matches);\n    media.addEventListener('change', listener);\n    \n    return () => media.removeEventListener('change', listener);\n  }, [query]);\n\n  return matches;\n}\n```",
        "options": [
        "Fetches media files based on a query",
        "Detects if the browser matches a media query (like screen size)",
        "Plays media when a condition is met",
        "Tracks media loading state"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Detects if the browser matches a media query (like screen size)",
        "difficulty": "medium",
        "explanation": "This hook uses the browser's matchMedia API to check if the current viewport matches a CSS media query (like screen width). It returns a boolean and updates when the match status changes, useful for responsive designs.",
        "hint": "Think about responsive design and how to detect screen characteristics."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What would be a good use case for the following custom hook?\n\n```jsx\nfunction usePrevious(value) {\n  const ref = useRef();\n  \n  useEffect(() => {\n    ref.current = value;\n  }, [value]);\n  \n  return ref.current;\n}\n```",
        "options": [
        "Animation effects that need the previous state",
        "Form validation comparing current and previous inputs",
        "Performance optimization to prevent re-renders",
        "All of the above"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above",
        "difficulty": "medium",
        "explanation": "The usePrevious hook captures the previous value of a variable across renders. This is useful for animations that compare previous and current state, form validation that needs to compare values, and optimizations that need to know when values have changed.",
        "hint": "Think about scenarios where you need to compare the current value with its previous value."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What will happen if you call the following custom hook from a component?\n\n```jsx\nfunction useDangerousHook() {\n  console.log('Hook called');\n  \n  if (Math.random() > 0.5) {\n    const [state, setState] = useState(0);\n    return state;\n  }\n  \n  const [fallback, setFallback] = useState(-1);\n  return fallback;\n}\n```",
        "options": [
        "It will return 0 or -1 randomly",
        "It will cause a React error about the Rules of Hooks",
        "It will always return -1",
        "It will crash the application"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It will cause a React error about the Rules of Hooks",
        "difficulty": "hard",
        "explanation": "This hook violates the Rules of Hooks by conditionally calling useState. React requires hooks to be called in the same order on every render, which this doesn't guarantee. React will detect this error and warn about it.",
        "hint": "Consider the order in which hooks are called across different renders."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's the purpose of using useRef in custom hooks instead of useState when you need to store a value that shouldn't trigger re-renders?",
        "options": [
        "useRef is faster than useState",
        "useRef values persist between renders without causing re-renders",
        "useRef can store more complex data structures",
        "useRef values can be accessed outside of React components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "useRef values persist between renders without causing re-renders",
        "difficulty": "medium",
        "explanation": "useRef creates a mutable object whose .current property persists across renders, and changes to it don't trigger re-renders. This makes it ideal for storing values that need to persist but shouldn't cause the component to update when changed.",
        "hint": "Think about the key difference in rendering behavior between useState and useRef."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What type of problem is this custom hook designed to solve?\n\n```jsx\nfunction useClickOutside(ref, handler) {\n  useEffect(() => {\n    const listener = (event) => {\n      if (!ref.current || ref.current.contains(event.target)) {\n        return;\n      }\n      handler(event);\n    };\n    \n    document.addEventListener('mousedown', listener);\n    document.addEventListener('touchstart', listener);\n    \n    return () => {\n      document.removeEventListener('mousedown', listener);\n      document.removeEventListener('touchstart', listener);\n    };\n  }, [ref, handler]);\n}\n```",
        "options": [
        "Tracking mouse movements across the screen",
        "Detecting clicks outside a specific element (like closing modals)",
        "Preventing default browser behavior on clicks",
        "Creating draggable elements"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Detecting clicks outside a specific element (like closing modals)",
        "difficulty": "medium",
        "explanation": "This hook detects clicks that occur outside a specified element (referenced by ref). It's commonly used to close dropdowns, modals, or popups when a user clicks anywhere else on the page.",
        "hint": "Consider what happens when the handler is called - under what specific click condition?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "In a custom hook that uses multiple state variables, what's the best practice for its return value?",
        "options": [
        "Return a single object with all state variables and setter functions",
        "Return an array with all state variables first, followed by all setter functions",
        "Return just the state variables and keep setter functions internal to the hook",
        "Return a function that gives access to the state when called"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Return a single object with all state variables and setter functions",
        "difficulty": "medium",
        "explanation": "When a custom hook manages multiple state variables, it's best to return an object with named properties. This makes the hook's API clearer and allows consumers to destructure only the values they need. Arrays are better for hooks with just 1-2 return values.",
        "hint": "Think about readability and how consumers will use the returned values."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's the main issue with this custom hook implementation?\n\n```jsx\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    fetch(url)\n      .then(res => res.json())\n      .then(data => {\n        setData(data);\n        setLoading(false);\n      })\n      .catch(err => {\n        setError(err);\n        setLoading(false);\n      });\n  }, []);\n  \n  return { data, loading, error };\n}\n```",
        "options": [
        "It doesn't handle the response status code",
        "It uses too many state variables",
        "The url dependency is missing from the useEffect dependency array",
        "It should use async/await instead of promises"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The url dependency is missing from the useEffect dependency array",
        "difficulty": "medium",
        "explanation": "The hook has a critical flaw: the url parameter is used in the useEffect, but it's not included in the dependency array. This means if the url changes, the effect won't rerun and the data won't be refetched.",
        "hint": "The effect depends on a value that isn't listed in its dependencies."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's the advantage of using the useCallback hook inside custom hooks?",
        "options": [
        "It makes the code run faster",
        "It prevents infinite loops in useEffect",
        "It ensures functions maintain referential equality between renders",
        "It automatically memoizes the result of function calls"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It ensures functions maintain referential equality between renders",
        "difficulty": "hard",
        "explanation": "useCallback ensures that functions maintain the same reference between renders (unless their dependencies change). This is important in custom hooks because returning a stable function reference prevents unnecessary re-renders in components that depend on those functions.",
        "hint": "Think about how JavaScript compares functions by reference, not value."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What does this custom hook do?\n\n```jsx\nfunction useUpdateEffect(effect, dependencies) {\n  const isFirstRender = useRef(true);\n  \n  useEffect(() => {\n    if (isFirstRender.current) {\n      isFirstRender.current = false;\n      return;\n    }\n    return effect();\n  }, dependencies);\n}\n```",
        "options": [
        "Runs the effect only on the first render",
        "Runs the effect on every render except the first one",
        "Updates dependencies automatically",
        "Prevents the effect from running too often"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Runs the effect on every render except the first one",
        "difficulty": "hard",
        "explanation": "This hook is a variation of useEffect that skips the first render. It tracks the first render with a ref, and only runs the effect when dependencies change on subsequent renders. This is useful when you want to respond to changes but not on initial mount.",
        "hint": "The hook is tracking something about the render cycle - when exactly does the effect function run?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What is the correct way to handle cleanup in a custom hook that subscribes to events?",
        "options": [
        "Call removeEventListener in a separate useEffect",
        "Return a cleanup function from useEffect that removes event listeners",
        "Use useLayoutEffect instead of useEffect",
        "Store event listeners in state"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Return a cleanup function from useEffect that removes event listeners",
        "difficulty": "medium",
        "explanation": "The proper way to handle cleanup in custom hooks is to return a function from useEffect that performs the cleanup (like removing event listeners). React will call this function before the component unmounts or before the effect runs again.",
        "hint": "useEffect has a specific feature to handle resource cleanup."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What will happen if you use this custom hook in multiple components?\n\n```jsx\nlet shared = 0;\n\nfunction useSharedCounter() {\n  const increment = () => {\n    shared += 1;\n    return shared;\n  };\n  \n  return [shared, increment];\n}\n```",
        "options": [
        "Each component will have its own isolated counter",
        "All components will share the same counter value",
        "Only the first component will be able to increment the counter",
        "React will throw an error about hook implementation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "All components will share the same counter value",
        "difficulty": "hard",
        "explanation": "This hook uses a variable declared outside the hook (shared) which creates a globally shared state. All components using this hook will share the same counter value. This is generally an anti-pattern in React, as it creates implicit dependencies between components.",
        "hint": "Consider the scope of the 'shared' variable and how it relates to component instances."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What problem does this custom hook solve?\n\n```jsx\nfunction useOnScreen(ref, rootMargin = '0px') {\n  const [isIntersecting, setIntersecting] = useState(false);\n  \n  useEffect(() => {\n    const observer = new IntersectionObserver(\n      ([entry]) => setIntersecting(entry.isIntersecting),\n      { rootMargin }\n    );\n    \n    if (ref.current) {\n      observer.observe(ref.current);\n    }\n    \n    return () => {\n      observer.disconnect();\n    };\n  }, [ref, rootMargin]);\n  \n  return isIntersecting;\n}\n```",
        "options": [
        "Detecting when an element is visible in the viewport",
        "Measuring the exact dimensions of an element",
        "Preventing elements from overlapping",
        "Tracking mouse position relative to an element"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Detecting when an element is visible in the viewport",
        "difficulty": "hard",
        "explanation": "This hook uses the Intersection Observer API to detect when a referenced element enters or exits the viewport (or a specified container). This is commonly used for lazy loading, infinite scrolling, or triggering animations when elements become visible.",
        "hint": "The IntersectionObserver API is used to detect a specific condition about element visibility."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's the correct implementation for a useAsync custom hook that handles asynchronous operations?",
        "options": [
        "useAsync = (asyncFn) => { useState(asyncFn()); }",
        "useAsync = async (asyncFn) => { const [state, setState] = useState(null); setState(await asyncFn()); return state; }",
        "useAsync = (asyncFn, immediate = true) => { const [state, setState] = useState({ loading: false, value: null, error: null }); const execute = useCallback(() => { setState({loading: true, value: null, error: null}); return asyncFn().then(value => { setState({loading: false, value, error: null}); return value; }).catch(error => { setState({loading: false, value: null, error}); throw error; }); }, [asyncFn]); useEffect(() => { if (immediate) { execute(); } }, [execute, immediate]); return [state, execute]; }",
        "useAsync = (asyncFn) => { useEffect(() => { asyncFn(); }, []); }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "useAsync = (asyncFn, immediate = true) => { const [state, setState] = useState({ loading: false, value: null, error: null }); const execute = useCallback(() => { setState({loading: true, value: null, error: null}); return asyncFn().then(value => { setState({loading: false, value, error: null}); return value; }).catch(error => { setState({loading: false, value: null, error}); throw error; }); }, [asyncFn]); useEffect(() => { if (immediate) { execute(); } }, [execute, immediate]); return [state, execute]; }",
        "difficulty": "hard",
        "explanation": "This implementation correctly handles all states of an async operation: loading, success, and error. It returns both the current state and an execute function to trigger the operation manually. It also has an immediate flag to control whether the operation runs automatically on mount.",
        "hint": "A proper async hook should track loading state, success values, error states, and provide a way to trigger the operation."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's wrong with the following custom hook implementation?\n\n```jsx\nfunction useInput(initialValue) {\n  const [value, setValue] = useState(initialValue);\n  \n  function handleChange(e) {\n    setValue(e.target.value);\n  }\n  \n  function reset() {\n    setValue(initialValue);\n  }\n  \n  return {\n    value,\n    onChange: handleChange,\n    reset\n  };\n}\n```",
        "options": [
        "The initialValue should be in the dependency array of a useEffect",
        "The handleChange function should be wrapped in useCallback",
        "The reset function will always reset to the original initialValue, not an updated one",
        "There's nothing wrong with this implementation"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The reset function will always reset to the original initialValue, not an updated one",
        "difficulty": "hard",
        "explanation": "The issue is that if the initialValue prop changes after the component mounts, the reset function will still use the original initialValue from the first render. To fix this, the hook should track the latest initialValue with a ref or in state.",
        "hint": "Consider what happens if the component using this hook receives a new initialValue prop after mount."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Custom Hooks",
        "questionText": "What's the benefit of extracting logic into custom hooks versus using regular helper functions?",
        "options": [
        "Custom hooks can't be used outside of React components",
        "Custom hooks can use React's built-in hooks and follow component lifecycle",
        "Custom hooks are always more performant than regular functions",
        "Custom hooks automatically memoize their return values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Custom hooks can use React's built-in hooks and follow component lifecycle",
        "difficulty": "medium",
        "explanation": "The key advantage of custom hooks over regular functions is that hooks can use React's built-in hooks (useState, useEffect, useContext, etc.). This allows them to integrate with React's component lifecycle, use state, context, and other React features that regular functions can't access.",
        "hint": "Think about what capabilities custom hooks have that regular JavaScript functions don't."
    },

    // Context API
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What problem does React's Context API primarily solve?",
        "options": [
        "Managing local component state",
        "Avoiding prop drilling",
        "Handling side effects",
        "Optimizing performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Avoiding prop drilling",
        "difficulty": "easy",
        "explanation": "React's Context API is designed to solve the problem of 'prop drilling,' which occurs when props need to be passed through multiple nested components. Context provides a way to share values between components without explicitly passing props through every level of the component tree.",
        "hint": "Think about passing data through multiple levels of the component hierarchy."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "Which React function is used to create a new context?",
        "options": [
        "React.makeContext()",
        "React.newContext()",
        "React.createContext()",
        "React.generateContext()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "React.createContext()",
        "difficulty": "easy",
        "explanation": "React.createContext() is the correct function to create a new context object. It accepts an optional default value and returns a Context object with Provider and Consumer components.",
        "hint": "The function name follows React's typical 'create' pattern."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What are the two main components that React.createContext() returns?",
        "options": [
        "Sender and Receiver",
        "Creator and User",
        "Producer and Consumer",
        "Provider and Consumer"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Provider and Consumer",
        "difficulty": "easy",
        "explanation": "React.createContext() returns an object with two components: Provider and Consumer. The Provider component is used to provide the context value to its descendant components, while the Consumer component is used to consume the context value.",
        "hint": "One component provides values, and the other consumes them."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What is the role of the Context.Provider component?",
        "options": [
        "To consume context values",
        "To provide context values to all descendant components",
        "To create a new context instance",
        "To optimize rendering performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide context values to all descendant components",
        "difficulty": "easy",
        "explanation": "The Context.Provider component accepts a 'value' prop that is passed to consuming components that are descendants of this Provider. All descendants that use the same Context can access this provided value.",
        "hint": "This component makes values available to components further down the tree."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "How do you access context values in a functional component?",
        "options": [
        "Using the useState hook",
        "Using the useContext hook",
        "Using the withContext HOC",
        "Using this.context"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using the useContext hook",
        "difficulty": "easy",
        "explanation": "The useContext hook is the preferred way to consume context values in functional components. It accepts a context object (created by React.createContext) and returns the current context value for that context.",
        "hint": "React provides a specific hook for working with context."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What happens when the value prop of a Context.Provider changes?",
        "options": [
        "Nothing, context values are immutable",
        "It triggers a re-render of all components that consume that context",
        "It only updates components that explicitly call for an update",
        "It throws an error and requires a context reset"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It triggers a re-render of all components that consume that context",
        "difficulty": "medium",
        "explanation": "When the value prop of a Context.Provider changes, React will re-render all the components that consume this context. This is an important aspect of context and affects performance considerations when using context for frequently changing values.",
        "hint": "Think about how React's reactivity system works with context updates."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What is the default value in React.createContext(defaultValue) used for?",
        "options": [
        "It's used when no matching Provider is found in the component tree",
        "It's used to reset the context to its initial state",
        "It's used as a fallback when the Provider's value is undefined",
        "It's used to compare with new values to determine if re-rendering is needed"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It's used when no matching Provider is found in the component tree",
        "difficulty": "medium",
        "explanation": "The default value is only used when a component consumes the context but does not have a matching Provider above it in the component tree. This is useful for testing components in isolation or for providing fallback values.",
        "hint": "Think about what happens when you use useContext without wrapping your component in a Provider."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What will the following code output?\n\n```jsx\nconst MyContext = React.createContext('default');\n\nfunction MyComponent() {\n  return (\n    <div>\n      <MyContext.Consumer>\n        {value => <p>{value}</p>}\n      </MyContext.Consumer>\n    </div>\n  );\n}\n```",
        "options": [
        "<p>default</p>",
        "<p>undefined</p>",
        "<p>[object Object]</p>",
        "It will throw an error"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "<p>default</p>",
        "difficulty": "medium",
        "explanation": "Since there is no MyContext.Provider above MyComponent in the component tree, the Consumer will receive the default value 'default' that was passed to React.createContext(). Therefore, it will render <p>default</p>.",
        "hint": "What happens when a Consumer is used without a Provider?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "How can you access context in a class component?",
        "options": [
        "Using this.useContext(MyContext)",
        "Using a static contextType property",
        "Only with HOCs, class components can't use context directly",
        "By extending ContextComponent instead of React.Component"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using a static contextType property",
        "difficulty": "medium",
        "explanation": "In class components, you can access a single context by setting the static contextType property to the context you want to use. This allows you to access the context value using this.context within the component.",
        "hint": "Class components have a special property to define which context they want to access."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What's the most efficient way to structure context for a large application with multiple domains of state?",
        "options": [
        "Create one large context for the entire application",
        "Create separate contexts for different domains of state",
        "Always use Redux instead of Context for large applications",
        "Use Context for UI state and Redux for business logic"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Create separate contexts for different domains of state",
        "difficulty": "medium",
        "explanation": "For large applications, it's more efficient to create separate, smaller contexts for different domains of state (e.g., user context, theme context, etc.). This approach prevents unnecessary re-renders, as components will only re-render when the specific context they consume changes, not when any part of a large unified context changes.",
        "hint": "Think about minimizing re-renders when only certain parts of the state change."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What is a common performance issue when using Context API?",
        "options": [
        "Context API is always slower than Redux",
        "Context causes memory leaks",
        "All components that consume a context re-render when the context value changes",
        "Context API can't handle complex state objects"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "All components that consume a context re-render when the context value changes",
        "difficulty": "medium",
        "explanation": "A common performance issue with Context API is that all components that consume a particular context will re-render when the context value changes, even if they only use a portion of the context that didn't change. This can lead to unnecessary re-renders in large applications.",
        "hint": "Consider what happens to consumer components when any part of a context value changes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What's the best way to combine Context with state management for complex applications?",
        "options": [
        "Use useState inside the Provider and pass both state and setter functions in the context value",
        "Context shouldn't be used for state management, only for static configuration",
        "Always use useReducer with Context for complex state",
        "Avoid Context entirely and use Redux for all state management"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Use useState inside the Provider and pass both state and setter functions in the context value",
        "difficulty": "medium",
        "explanation": "A common pattern is to create a Provider component that uses hooks like useState to manage state, then include both the state values and setter functions in the context value. This allows consumer components to both read from and update the shared state.",
        "hint": "Think about how to make the context not just readable but also writable by consumers."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What's wrong with the following code?\n\n```jsx\nconst ThemeContext = React.createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  \n  return (\n    <ThemeContext.Provider value={theme}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  \n  return (\n    <button\n      style={{ background: theme === 'light' ? '#fff' : '#000' }}\n      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}\n    >\n      Toggle Theme\n    </button>\n  );\n}\n```",
        "options": [
        "The ThemeProvider should use useReducer instead of useState",
        "The setTheme function isn't included in the context value",
        "The useContext hook is used incorrectly",
        "The ThemeContext shouldn't have a default value"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The setTheme function isn't included in the context value",
        "difficulty": "medium",
        "explanation": "The ThemedButton component tries to call setTheme, but this function isn't available in the context. The ThemeProvider only provides the theme value, not the setter function. To fix this, the Provider should include both in its value: value={{ theme, setTheme }}.",
        "hint": "Look at what's provided in the context versus what's being used in the consumer component."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "When is it appropriate to use the Context API instead of prop drilling?",
        "options": [
        "Always, prop drilling should never be used",
        "Only for global state like themes or user authentication",
        "When props need to be passed through more than one level of components",
        "When props need to be passed through three or more levels of components"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "When props need to be passed through three or more levels of components",
        "difficulty": "hard",
        "explanation": "While there's no hard rule, a common guideline is to consider using Context when props need to be passed through three or more levels of components. For just one or two levels, prop drilling is often simpler and doesn't introduce the complexity of Context.",
        "hint": "Consider the trade-off between the complexity of Context setup versus the simplicity of direct props."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "How can you optimize performance when using Context with frequently changing values?",
        "options": [
        "Split your context into multiple contexts based on update frequency",
        "Always use useMemo to memoize the context value",
        "Context isn't suitable for frequently changing values",
        "Use shouldComponentUpdate in class components"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Split your context into multiple contexts based on update frequency",
        "difficulty": "hard",
        "explanation": "A good strategy is to split your context into multiple, more focused contexts. For example, have one context for rarely changing values (like user info) and another for frequently changing values (like UI state). This prevents components that only need the stable data from re-rendering when the volatile data changes.",
        "hint": "Think about how to minimize the scope of re-renders when certain parts of the state change."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What does the following code create?\n\n```jsx\nconst AuthContext = React.createContext();\n\nfunction useAuth() {\n  const context = useContext(AuthContext);\n  if (context === undefined) {\n    throw new Error('useAuth must be used within an AuthProvider');\n  }\n  return context;\n}\n\nfunction AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  \n  const login = useCallback((username, password) => {\n    // Authentication logic\n    setUser({ username });\n  }, []);\n  \n  const logout = useCallback(() => {\n    setUser(null);\n  }, []);\n  \n  const value = { user, login, logout };\n  \n  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;\n}\n```",
        "options": [
        "A custom hook that provides authentication functionality",
        "A higher-order component for authentication",
        "A context provider with a custom hook to access it",
        "A reducer for managing authentication state"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A context provider with a custom hook to access it",
        "difficulty": "hard",
        "explanation": "This code creates an authentication context (AuthContext), a provider component (AuthProvider) that manages authentication state, and a custom hook (useAuth) that provides a convenient way to access the authentication context. This pattern combines Context with custom hooks for a clean API.",
        "hint": "Look at how the code combines multiple React patterns to create a reusable authentication solution."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What will happen if you call useContext multiple times for the same context in a component?",
        "options": [
        "It will create multiple subscriptions to the context",
        "It will return the same value each time with no performance penalty",
        "It will throw an error about duplicate context subscriptions",
        "It will cause memory leaks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It will return the same value each time with no performance penalty",
        "difficulty": "medium",
        "explanation": "Calling useContext multiple times for the same context in a component is fine. Each call will return the same current context value, and React optimizes this so there's no performance penalty for multiple calls to useContext with the same context.",
        "hint": "Think about how React's hooks system handles multiple calls to the same hook."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "How can a class component consume multiple contexts?",
        "options": [
        "Using multiple static contextType properties",
        "By extending multiple context classes",
        "It can't; class components can only consume one context",
        "By nesting Context.Consumer components"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "By nesting Context.Consumer components",
        "difficulty": "hard",
        "explanation": "While a class component can only have one static contextType, it can consume multiple contexts by nesting Context.Consumer components. Each Consumer uses a render prop pattern where you provide a function that receives the context value and returns JSX.",
        "hint": "The static contextType approach only works for a single context in class components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What pattern does the following code implement?\n\n```jsx\nconst TodosDispatchContext = React.createContext(null);\nconst TodosStateContext = React.createContext(null);\n\nfunction TodosProvider({ children }) {\n  const [todos, dispatch] = useReducer(todosReducer, []);\n  \n  return (\n    <TodosDispatchContext.Provider value={dispatch}>\n      <TodosStateContext.Provider value={todos}>\n        {children}\n      </TodosStateContext.Provider>\n    </TodosDispatchContext.Provider>\n  );\n}\n\nfunction useTodosState() {\n  return useContext(TodosStateContext);\n}\n\nfunction useTodosDispatch() {\n  return useContext(TodosDispatchContext);\n}\n```",
        "options": [
        "The Singleton pattern",
        "The Observer pattern",
        "The Context splitting pattern",
        "The Factory pattern"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The Context splitting pattern",
        "difficulty": "hard",
        "explanation": "This code implements the 'Context splitting' pattern, where state and dispatch functions are separated into different contexts. Components can choose to consume only what they need (read-only state or dispatch functions), minimizing unnecessary re-renders. This is a recommended pattern from the React team for performance optimization.",
        "hint": "This pattern divides a single logical context into separate pieces for more granular consumption."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What's wrong with the following code that attempts to update context values?\n\n```jsx\nconst CountContext = React.createContext(0);\n\nfunction CountDisplay() {\n  const count = useContext(CountContext);\n  return <div>Count: {count}</div>;\n}\n\nfunction CountButton() {\n  const count = useContext(CountContext);\n  \n  return (\n    <button onClick={() => count + 1}>\n      Increment\n    </button>\n  );\n}\n```",
        "options": [
        "The context value should be an object, not a primitive",
        "The onClick handler doesn't actually update the context value",
        "useContext is being used in too many components",
        "CountContext needs a Provider wrapping these components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The onClick handler doesn't actually update the context value",
        "difficulty": "medium",
        "explanation": "The main issue is that the onClick handler in CountButton doesn't actually update the context value. It just calculates count + 1 but doesn't do anything with it. Context is read-only in consumer components; to update it, you need to include a setter function in the context value that the provider supplies.",
        "hint": "Look at the onClick handler and what it actually does with the calculation."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "When would you use the Context.Consumer component instead of the useContext hook?",
        "options": [
        "When you need better performance",
        "In class components or when using render props",
        "When accessing multiple contexts",
        "When you need to modify the context value"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "In class components or when using render props",
        "difficulty": "medium",
        "explanation": "Context.Consumer is primarily used in class components (that need to consume multiple contexts) or when you're using the render props pattern. For functional components, useContext is generally simpler and more concise.",
        "hint": "Think about scenarios where hooks aren't available or render props are preferred."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What happens if you don't specify a value prop for Context.Provider?",
        "options": [
        "It uses the default value specified in createContext()",
        "It sets the context value to undefined",
        "It throws an error",
        "It uses the previous value from the last render"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It sets the context value to undefined",
        "difficulty": "medium",
        "explanation": "If you don't specify a value prop for Context.Provider, it will pass undefined as the context value to consumers. The default value specified in createContext() is only used when a component tries to read the context but isn't wrapped in a Provider.",
        "hint": "The default value from createContext() is only used in a specific scenario."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What's the recommended way to initialize state in a Context Provider?",
        "options": [
        "From localStorage or other persistent storage",
        "Always use default values specified in the component",
        "Accept initial values as props to the Provider component",
        "Always initialize with empty/null values"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Accept initial values as props to the Provider component",
        "difficulty": "hard",
        "explanation": "The most flexible approach is to accept initial values as props to the Provider component. This makes the Provider component reusable and testable, as you can provide different initial values in different situations or tests.",
        "hint": "Think about making the provider component configurable and reusable."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "Which technique is most effective for memoizing context values to prevent unnecessary re-renders?",
        "options": [
        "Using the useCallback hook on each value separately",
        "Using the useMemo hook to memoize the entire value object",
        "Storing values in useRef instead of useState",
        "Wrapping the Provider component in React.memo"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using the useMemo hook to memoize the entire value object",
        "difficulty": "hard",
        "explanation": "The most effective approach is using useMemo to memoize the entire context value object. Because React context uses reference equality to determine when to re-render, creating a new object on every render (even with the same properties) will cause all consumers to re-render. useMemo ensures the object reference stays the same when dependencies haven't changed.",
        "hint": "Context performs a reference comparison on values to determine when to update."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What happens in this scenario?\n\n```jsx\nconst ThemeContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value={'dark'}>\n      <ThemeContext.Provider value={'light'}>\n        <ThemedButton />\n      </ThemeContext.Provider>\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>Themed Button</button>;\n}\n```",
        "options": [
        "The button will have a 'dark' class",
        "The button will have a 'light' class",
        "The button will have both 'dark' and 'light' classes",
        "It will throw an error about nested providers"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The button will have a 'light' class",
        "difficulty": "hard",
        "explanation": "When Context.Providers are nested, the innermost Provider's value takes precedence for components within its subtree. In this case, ThemedButton is within the scope of the inner Provider with value 'light', so it will use that value rather than 'dark' from the outer Provider.",
        "hint": "Think about how nested providers affect the context value that a component receives."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What is the purpose of the following pattern?\n\n```jsx\nfunction MyProvider({ children }) {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  \n  const contextValue = useMemo(() => {\n    return { state, dispatch };\n  }, [state, dispatch]);\n  \n  return (\n    <MyContext.Provider value={contextValue}>\n      {children}\n    </MyContext.Provider>\n  );\n}\n```",
        "options": [
        "To create a global Redux-like store",
        "To optimize performance by preventing unnecessary re-renders",
        "To combine useReducer with Context API",
        "To provide type safety for the context value"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To optimize performance by preventing unnecessary re-renders",
        "difficulty": "hard",
        "explanation": "This pattern uses useMemo to memoize the context value object. Without this, a new object would be created on every render of the Provider component, causing all consumers to re-render even if the actual state and dispatch haven't changed. useMemo ensures the object reference stays stable between renders when dependencies haven't changed.",
        "hint": "Consider what happens to the context value object between renders and how React determines when to update context consumers."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What's the key difference between React Context and Redux?",
        "options": [
        "Context is built into React while Redux is a third-party library",
        "Context is for UI state while Redux is for business logic",
        "Context provides a way to pass data through the component tree without props, while Redux implements a predictable state container",
        "Context can only be used with functional components, while Redux works with both functional and class components"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Context provides a way to pass data through the component tree without props, while Redux implements a predictable state container",
        "difficulty": "medium",
        "explanation": "The fundamental difference is that Context is a mechanism for passing data down the component tree without props, while Redux is a complete state management solution with a single store, actions, reducers, and middleware. Context by itself doesn't provide state management, though it can be combined with hooks like useReducer to create state management solutions.",
        "hint": "Think about what each technology was primarily designed to solve."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What will this code render?\n\n```jsx\nconst CountContext = React.createContext();\n\nfunction CountProvider({ children, initialCount = 0 }) {\n  const value = useState(initialCount);\n  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;\n}\n\nfunction Counter() {\n  const [count, setCount] = useContext(CountContext);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <CountProvider initialCount={10}>\n      <Counter />\n    </CountProvider>\n  );\n}\n```",
        "options": [
        "Count: 0 (ignoring the initialCount prop)",
        "Count: 10 (using the initialCount prop)",
        "Nothing, it will throw an error about null context",
        "Nothing, it will throw an error about incorrect useContext usage"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Count: 10 (using the initialCount prop)",
        "difficulty": "hard",
        "explanation": "This code properly passes the entire result of useState (both the state value and setter function) as the context value. The Counter component destructures this array with useContext. Since the CountProvider is created with initialCount={10}, the initial count displayed will be 10.",
        "hint": "Pay attention to how the state hook result is being passed through context and how initialCount is used."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "In a React application, when might you need both Context API and Redux?",
        "options": [
        "Never, they solve the same problem and should not be used together",
        "For different parts of the application with different state management needs",
        "Always, Context for UI state and Redux for business logic",
        "Only in large enterprise applications"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "For different parts of the application with different state management needs",
        "difficulty": "hard",
        "explanation": "It's reasonable to use both Context API and Redux in the same application for different purposes. For example, you might use Context for UI themes, current user data, or localization, while using Redux for more complex business logic, API cache management, or when you need middleware for side effects. Each tool has strengths for different scenarios.",
        "hint": "Consider that different parts of an application may have different state management requirements."
    },  
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Context API",
        "questionText": "What issue might you encounter when using Context with React's Concurrent Mode?",
        "options": [
          "Context isn't supported in Concurrent Mode",
          "Context might cause more re-renders than expected due to tearing",
          "Context values are not stable between renders in Concurrent Mode",
          "You must use useTransition with all context updates"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Context might cause more re-renders than expected due to tearing",
        "difficulty": "hard",
        "explanation": "In Concurrent Mode, React might render a component multiple times with different priorities. If context values change during these renders, it can cause 'tearing' where parts of the UI show inconsistent states. To mitigate this, you can use techniques like memoization, batching updates, or external state management tools like Redux to ensure consistency.",
        "hint": "Think about how React prioritizes renders in Concurrent Mode and how that affects shared state."
    },
    
    
    // React Router
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "Which package is the main package for React Router?",
        "options": ["react-routing", "react-router", "react-router-dom", "react-navigation"],
        "correctOptionIndex": 2,
        "correctOptionText": "react-router-dom",
        "difficulty": "easy",
        "explanation": "The main package used for routing in web applications is 'react-router-dom', which provides DOM bindings for React Router.",
        "hint": "This package provides DOM-specific components for React Router."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "Which component is used to define a route in React Router v6?",
        "options": ["<Path>", "<Route>", "<Router>", "<Switch>"],
        "correctOptionIndex": 1,
        "correctOptionText": "<Route>",
        "difficulty": "easy",
        "explanation": "The <Route> component is used to define a route in React Router v6, mapping a URL path to a specific component.",
        "hint": "This component maps paths to components in React Router."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "In React Router v6, which component replaced <Switch> from v5?",
        "options": ["<Path>", "<Routes>", "<Router>", "<Outlet>"],
        "correctOptionIndex": 1,
        "correctOptionText": "<Routes>",
        "difficulty": "medium",
        "explanation": "In React Router v6, the <Routes> component replaced the <Switch> component from v5. It serves a similar purpose of matching routes but with improved capabilities.",
        "hint": "This component provides a new way to define route matching in v6."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the purpose of the 'element' prop in React Router v6's <Route> component?",
        "options": ["To specify the route path", "To specify the component to render", "To specify route parameters", "To handle route transitions"],
        "correctOptionIndex": 1,
        "correctOptionText": "To specify the component to render",
        "difficulty": "easy",
        "explanation": "The 'element' prop in React Router v6's <Route> component is used to specify the React element/component that should be rendered when the route matches.",
        "hint": "This prop determines what content will be displayed when a route matches."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "Which hook is used to access route parameters in React Router v6?",
        "options": ["useParams", "useRouteParams", "usePathParams", "useQueryParams"],
        "correctOptionIndex": 0,
        "correctOptionText": "useParams",
        "difficulty": "easy",
        "explanation": "The useParams hook is used to access the parameters from the current route in React Router v6.",
        "hint": "This hook lets you access dynamic segments in your route path."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the correct way to create a nested route in React Router v6?",
        "options": [
        "Use multiple <Router> components",
        "Use the 'children' prop with <Route>",
        "Use nested <Route> elements inside the parent <Route>",
        "Use the 'nested' attribute"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use nested <Route> elements inside the parent <Route>",
        "difficulty": "medium",
        "explanation": "In React Router v6, nested routes are created by placing <Route> elements inside a parent <Route> element. This approach allows for creating hierarchical route structures.",
        "hint": "This approach allows for hierarchical or parent-child routing relationships."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "Which component is used to render nested routes in React Router v6?",
        "options": ["<Nested>", "<Outlet>", "<Children>", "<View>"],
        "correctOptionIndex": 1,
        "correctOptionText": "<Outlet>",
        "difficulty": "medium",
        "explanation": "The <Outlet> component in React Router v6 is used as a placeholder where child routes will be rendered. It's essential for rendering nested routes.",
        "hint": "This component acts as a placeholder for where child routes should render."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the purpose of the useNavigate hook in React Router v6?",
        "options": [
        "To handle browser navigation events",
        "To access navigation history",
        "To programmatically navigate between routes",
        "To create custom navigation components"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To programmatically navigate between routes",
        "difficulty": "medium",
        "explanation": "The useNavigate hook in React Router v6 returns a function that lets you navigate programmatically, replacing the history.push method from earlier versions.",
        "hint": "This hook provides a way to change routes from within your code rather than via user clicks."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the correct syntax for a route with URL parameters in React Router v6?",
        "options": [
        "<Route path='/user/:id' element={<UserProfile />} />",
        "<Route path='/user/{id}' element={<UserProfile />} />",
        "<Route path='/user/(id)' element={<UserProfile />} />",
        "<Route path='/user/[id]' element={<UserProfile />} />"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "<Route path='/user/:id' element={<UserProfile />} />",
        "difficulty": "easy",
        "explanation": "In React Router, dynamic segments (URL parameters) are defined using a colon followed by the parameter name. The correct syntax is '/user/:id' where ':id' is the parameter.",
        "hint": "URL parameters in React Router are prefixed with a specific character."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "Which component is used to create a link to another route in React Router?",
        "options": ["<RouterLink>", "<Hyperlink>", "<Link>", "<NavLink>"],
        "correctOptionIndex": 2,
        "correctOptionText": "<Link>",
        "difficulty": "easy",
        "explanation": "The <Link> component is used to create navigation links in React Router. It renders an <a> element but prevents the default page refresh behavior.",
        "hint": "This component creates a standard navigation link without special styling features."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the difference between <Link> and <NavLink> in React Router?",
        "options": [
        "<NavLink> supports external URLs, <Link> doesn't",
        "<NavLink> can apply active styles, <Link> cannot",
        "<NavLink> supports nested routes, <Link> doesn't",
        "<NavLink> performs server-side rendering, <Link> doesn't"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "<NavLink> can apply active styles, <Link> cannot",
        "difficulty": "medium",
        "explanation": "<NavLink> extends the functionality of <Link> by adding the ability to apply styling when the link's route is active. It automatically adds an 'active' class or can use the 'style' or 'className' props that accept functions.",
        "hint": "One of these components has special features for styling the current/active route."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "How do you handle 404 (Not Found) routes in React Router v6?",
        "options": [
        "Use <Route path='/404' element={<NotFound />} />",
        "Use <NotFound /> component outside the <Routes>",
        "Use <Route path='*' element={<NotFound />} />",
        "Set notFound attribute on <Routes>"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use <Route path='*' element={<NotFound />} />",
        "difficulty": "medium",
        "explanation": "In React Router v6, you can create a catch-all route using the asterisk (*) path. This route will match any URL that doesn't match any of the previous routes, making it perfect for 404 pages.",
        "hint": "You need a special wildcard route that captures any unmatched paths."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What React Router hook would you use to access the current location object?",
        "options": ["useRoute", "useLocation", "useHistory", "usePath"],
        "correctOptionIndex": 1,
        "correctOptionText": "useLocation",
        "difficulty": "medium",
        "explanation": "The useLocation hook returns the current location object, which contains information about the current URL like pathname, search, and hash properties.",
        "hint": "This hook gives you access to details about the current URL the user is viewing."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "How would you implement a redirect in React Router v6?",
        "options": [
        "<Redirect to='/login' />",
        "<Route path='/old-path' redirect='/new-path' />",
        "Use the Navigate component: <Navigate to='/login' />",
        "Use the Redirect component with element prop"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use the Navigate component: <Navigate to='/login' />",
        "difficulty": "medium",
        "explanation": "In React Router v6, the <Navigate> component replaces the <Redirect> component from v5. You can use it to declaratively navigate to a new location.",
        "hint": "React Router v6 introduced a new component for declarative redirects."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What does the following code do in React Router v6?\n```jsx\n<Routes>\n  <Route path='/' element={<Layout />}>\n    <Route index element={<Home />} />\n    <Route path='about' element={<About />} />\n  </Route>\n</Routes>\n```",
        "options": [
        "Creates two separate routes at '/' and '/about'",
        "Creates nested routes with Layout as the parent and Home and About as children",
        "Creates a layout that applies only to the Home component",
        "This is invalid syntax in React Router v6"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates nested routes with Layout as the parent and Home and About as children",
        "difficulty": "medium",
        "explanation": "This code creates a nested route structure. The Layout component will be rendered for both '/' and '/about' paths, and either Home or About will be rendered inside Layout where the <Outlet> component is placed.",
        "hint": "Think about how parent-child relationships work in React Router v6."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What does the 'index' attribute do in a <Route> component?",
        "options": [
        "Sets the order of routes to be matched",
        "Indicates it's the first route in the router",
        "Makes it the default route for the parent's path",
        "Sets the component as a higher priority"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Makes it the default route for the parent's path",
        "difficulty": "medium",
        "explanation": "The 'index' prop indicates that this route should match when the parent's path matches exactly. It acts as the default child route that renders when no other child routes match.",
        "hint": "This attribute helps determine what to show at a parent's exact path."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "Which hook would you use to access URL search parameters (query string) in React Router v6?",
        "options": ["useQueryParams", "useSearchParams", "useURLParams", "useQueryString"],
        "correctOptionIndex": 1,
        "correctOptionText": "useSearchParams",
        "difficulty": "medium",
        "explanation": "The useSearchParams hook in React Router v6 returns an array with two items: the current search parameters and a function to update them. It works similarly to React's useState hook.",
        "hint": "This hook gives you access to the part of the URL after the '?' character."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the purpose of the 'replace' prop in the <Navigate> component?",
        "options": [
        "To replace the content with new elements",
        "To replace the current URL in the history stack instead of adding a new one",
        "To replace the component with a different one",
        "To replace all child routes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To replace the current URL in the history stack instead of adding a new one",
        "difficulty": "hard",
        "explanation": "The 'replace' prop in the <Navigate> component determines whether the navigation should replace the current entry in the history stack (true) or add a new one (false, default). Using replace=true means the user can't use the browser's back button to return to the current page.",
        "hint": "This prop affects how browser history behaves after navigation."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the role of the <BrowserRouter> component in React Router?",
        "options": [
        "To enable browser-specific features",
        "To store the history of visited routes",
        "To use the HTML5 history API for clean URLs",
        "To add browser compatibility for older browsers"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To use the HTML5 history API for clean URLs",
        "difficulty": "medium",
        "explanation": "The <BrowserRouter> component uses the HTML5 history API (pushState, replaceState, and popstate event) to keep the UI in sync with the URL. It creates clean URLs without the hash (#) character.",
        "hint": "This router type uses modern browser capabilities to create standard-looking URLs."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What's the main difference between <BrowserRouter> and <HashRouter>?",
        "options": [
        "<HashRouter> supports more browsers than <BrowserRouter>",
        "<BrowserRouter> uses HTML5 history API while <HashRouter> uses URL hash",
        "<HashRouter> supports server-side rendering while <BrowserRouter> doesn't",
        "<BrowserRouter> is faster than <HashRouter>"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "<BrowserRouter> uses HTML5 history API while <HashRouter> uses URL hash",
        "difficulty": "medium",
        "explanation": "<BrowserRouter> uses the HTML5 history API for clean URLs (like '/about'), while <HashRouter> uses the hash portion of the URL (like '/#/about'). <HashRouter> is useful for older browsers or static file servers that don't configure server-side routing.",
        "hint": "Look at the URL format each router type produces."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the correct way to pass state to a new route when using the useNavigate hook?",
        "options": [
        "navigate('/profile', { withState: { id: 123 } })",
        "navigate('/profile?id=123')",
        "navigate('/profile', { state: { id: 123 } })",
        "navigate.withState('/profile', { id: 123 })"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "navigate('/profile', { state: { id: 123 } })",
        "difficulty": "hard",
        "explanation": "When using the useNavigate hook, you can pass state to the new route by providing a state object in the second parameter. This state can then be accessed in the target component using the useLocation hook.",
        "hint": "The navigate function accepts an options object as its second parameter."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the primary use of the 'exact' prop in React Router v5 and what replaced it in v6?",
        "options": [
        "It was used for exact path matching; in v6 all paths match exactly by default",
        "It was used for case-sensitive matching; in v6 use the 'sensitive' prop",
        "It was used for strict path matching; in v6 use the 'strict' prop",
        "It was used for exact component matching; in v6 use the 'exact' attribute"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It was used for exact path matching; in v6 all paths match exactly by default",
        "difficulty": "hard",
        "explanation": "In React Router v5, the 'exact' prop was used to ensure that a route would only match if the path matched exactly. In v6, this behavior is the default, so the 'exact' prop was removed. Routes in v6 match exactly unless you add a * at the end of the path.",
        "hint": "Think about the default matching behavior change between versions."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the purpose of the useRoutes hook in React Router v6?",
        "options": [
        "To dynamically generate routes based on user permissions",
        "To create routes from an object-based configuration instead of JSX",
        "To monitor route changes for analytics",
        "To handle route transitions and animations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create routes from an object-based configuration instead of JSX",
        "difficulty": "hard",
        "explanation": "The useRoutes hook in React Router v6 allows developers to define routes using JavaScript objects instead of JSX. This can be useful for applications that need to generate routes dynamically or from an external configuration.",
        "hint": "This hook provides an alternative to using JSX for defining routes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "In React Router v6, what happens when you navigate to the same route with different parameters?",
        "options": [
        "The component won't re-render by default",
        "The component will always re-render completely",
        "A navigation error will be thrown",
        "The router will prevent the navigation"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The component won't re-render by default",
        "difficulty": "hard",
        "explanation": "In React Router v6, when navigating to the same route with different parameters, the component won't re-render by default. You need to use the useParams hook and include it in your component's dependency array to detect parameter changes.",
        "hint": "Consider the component lifecycle when route parameters change."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What does the following code accomplish in React Router v6?\n```jsx\nconst element = useRouteError();\nconsole.error(element);\n```",
        "options": [
        "Logs navigation errors to the console",
        "Captures and logs errors from a route error boundary",
        "Identifies invalid route configurations",
        "Logs errors when route parameters are invalid"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Captures and logs errors from a route error boundary",
        "difficulty": "hard",
        "explanation": "This code uses the useRouteError hook, which is part of React Router v6's error handling system. When used within an errorElement, it retrieves the error that was thrown during rendering, data loading, or navigation. This allows for centralized error handling in routing.",
        "hint": "This relates to React Router's way of handling errors that occur during routing."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "Which feature is used to prefetch routes for better performance in React Router?",
        "options": ["<Prefetch>", "<Suspense>", "<Link prefetch>", "useLoader"],
        "correctOptionIndex": 2,
        "correctOptionText": "<Link prefetch>",
        "difficulty": "hard",
        "explanation": "In React Router, you can improve performance by prefetching routes with the 'prefetch' attribute on <Link> components. This will fetch the necessary data and components before the user actually clicks the link, making navigation feel instantaneous.",
        "hint": "This optimizes performance by loading route data before a user navigates to it."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the purpose of the 'loader' function in React Router v6.4+?",
        "options": [
        "To show loading indicators during navigation",
        "To load static assets for a route",
        "To fetch data before a route component renders",
        "To load route components lazily"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To fetch data before a route component renders",
        "difficulty": "hard",
        "explanation": "Introduced in React Router v6.4, the 'loader' function allows you to load data for a route before its component renders. This creates a better user experience by ensuring all necessary data is available when the component mounts, rather than showing loading states after navigation.",
        "hint": "This feature helps avoid the need for loading states within components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "Which hook would you use to access data returned by a route's loader function?",
        "options": ["useLoaderData", "useRouteData", "useLoadedData", "useData"],
        "correctOptionIndex": 0,
        "correctOptionText": "useLoaderData",
        "difficulty": "hard",
        "explanation": "The useLoaderData hook is used to access the data returned by the current route's loader function. This hook is a key part of the data loading features introduced in React Router v6.4 and later.",
        "hint": "This hook lets components access data that was loaded before they rendered."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the purpose of the 'action' function in React Router v6.4+?",
        "options": [
        "To define animations between route transitions",
        "To handle form submissions and data mutations",
        "To execute actions when a route is about to unmount",
        "To define custom route behaviors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To handle form submissions and data mutations",
        "difficulty": "hard",
        "explanation": "The 'action' function in React Router v6.4+ is used to handle form submissions and data mutations. When a form is submitted to a route with an action, the action function receives the form data and can perform mutations like creating, updating, or deleting resources.",
        "hint": "This feature is primarily used with forms to modify data on the server."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "React Router",
        "questionText": "What is the purpose of the useSubmit hook in React Router v6.4+?",
        "options": [
        "To handle form submissions programmatically",
        "To submit data to an API endpoint",
        "To validate form inputs before submission",
        "To submit route changes to a state management system"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To handle form submissions programmatically",
        "difficulty": "hard",
        "explanation": "The useSubmit hook in React Router v6.4+ returns a function that lets you programmatically submit a form to a route action. This is useful when you want to trigger a form submission from a button click or other event that's outside the form itself.",
        "hint": "This hook gives you a way to trigger form submissions without a user clicking a submit button."
    },

    // Forms & Validation
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What are the two main types of form components in React?",
        "options": ["Static and Dynamic", "Input and Output", "Controlled and Uncontrolled", "Simple and Complex"],
        "correctOptionIndex": 2,
        "correctOptionText": "Controlled and Uncontrolled",
        "difficulty": "easy",
        "explanation": "React forms can be either controlled (where form data is handled by React state) or uncontrolled (where form data is handled by the DOM itself).",
        "hint": "Think about who manages the form data - React or the DOM."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "In a controlled component, what is required to update the input's value?",
        "options": ["A ref", "An onChange handler", "A useEffect hook", "A form action"],
        "correctOptionIndex": 1,
        "correctOptionText": "An onChange handler",
        "difficulty": "easy",
        "explanation": "In controlled components, you need to implement an onChange handler to update the state that stores the input value. Without this, the input will appear to be read-only.",
        "hint": "This handler is needed to update the state when a user types."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the primary difference between a controlled and uncontrolled input?",
        "options": [
        "Controlled inputs can be styled, uncontrolled ones cannot",
        "Controlled inputs store values in React state, uncontrolled inputs store values in the DOM",
        "Controlled inputs are faster than uncontrolled inputs",
        "Uncontrolled inputs work only with class components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Controlled inputs store values in React state, uncontrolled inputs store values in the DOM",
        "difficulty": "easy",
        "explanation": "The key difference is where the form data lives. In controlled components, React state is the 'single source of truth'. In uncontrolled components, the DOM itself maintains the form data.",
        "hint": "Think about where the input's value is stored and managed."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "How do you access the value of an uncontrolled input in React?",
        "options": [
        "Using the useState hook",
        "Using React.createState()",
        "Using a ref with useRef()",
        "Using document.getElementById()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using a ref with useRef()",
        "difficulty": "easy",
        "explanation": "In uncontrolled components, you can access input values using React refs. Create a ref with useRef() and attach it to the input element to access its value when needed.",
        "hint": "This React feature lets you directly access DOM elements."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the correct way to handle a form submission in React?",
        "options": [
        "Always use the form's action attribute",
        "Add an onSubmit handler to the form and call event.preventDefault()",
        "Let the browser handle it by default",
        "Use window.submit() method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Add an onSubmit handler to the form and call event.preventDefault()",
        "difficulty": "easy",
        "explanation": "In React, you typically handle form submissions by attaching an onSubmit handler to the form element and calling event.preventDefault() to prevent the default browser behavior of page reload.",
        "hint": "You need to prevent the default browser behavior and handle the submission programmatically."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What does the following code accomplish?\n```jsx\nconst [value, setValue] = useState('');\n\nreturn (\n  <input \n    value={value} \n    onChange={(e) => setValue(e.target.value)}\n  />\n);\n```",
        "options": [
        "Creates an uncontrolled input",
        "Creates a controlled input",
        "Creates a read-only input",
        "Creates a form validation system"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a controlled input",
        "difficulty": "easy",
        "explanation": "This code creates a controlled input. The input's value is controlled by React state (value), and it's updated using the setValue function in the onChange handler.",
        "hint": "Look at how the input's value is managed and updated."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the default behavior when a form is submitted in a browser?",
        "options": [
        "The form data is cleared",
        "Nothing happens without JavaScript",
        "The page reloads and form data is sent to the action URL",
        "A validation error is shown"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The page reloads and form data is sent to the action URL",
        "difficulty": "easy",
        "explanation": "By default, when a form is submitted, the browser will reload the page and send the form data to the URL specified in the action attribute (or the current URL if no action is specified).",
        "hint": "This is the standard HTML form behavior that React form handling often needs to override."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "How do you set a default value for an uncontrolled input in React?",
        "options": [
        "Use the defaultValue prop",
        "Use the initialValue prop",
        "Use the value prop",
        "Set it in useState()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Use the defaultValue prop",
        "difficulty": "medium",
        "explanation": "For uncontrolled inputs in React, you can set an initial value using the defaultValue prop. This sets the initial value once but allows the input to be modified without React intervention afterward.",
        "hint": "This prop sets the initial value without making the input controlled."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the equivalent of defaultValue for checkboxes and radio buttons?",
        "options": ["defaultState", "defaultChecked", "initialChecked", "checkedValue"],
        "correctOptionIndex": 1,
        "correctOptionText": "defaultChecked",
        "difficulty": "medium",
        "explanation": "For checkboxes and radio buttons, the defaultChecked prop is used to set the initial checked state in uncontrolled components, similar to how defaultValue works for text inputs.",
        "hint": "This prop is specific to input elements that can be checked or unchecked."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the best way to handle multiple input fields in a form?",
        "options": [
        "Create a separate state variable for each input",
        "Use one state object with properties for each input",
        "Always use uncontrolled components with refs",
        "Use the DOM API directly"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use one state object with properties for each input",
        "difficulty": "medium",
        "explanation": "For forms with multiple inputs, using a single state object with properties corresponding to each input field is more maintainable. This approach scales better and keeps related form data grouped together.",
        "hint": "This approach keeps all form data in one place and is easier to manage as forms grow in complexity."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What does the following code accomplish?\n```jsx\nconst handleChange = (e) => {\n  setFormData({\n    ...formData,\n    [e.target.name]: e.target.value\n  });\n};\n```",
        "options": [
        "Creates a new form element",
        "Handles multiple input changes using a single handler",
        "Validates form input",
        "Submits form data to a server"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Handles multiple input changes using a single handler",
        "difficulty": "medium",
        "explanation": "This code creates a single change handler that can update multiple form fields in a state object. It uses the input's 'name' attribute to determine which property in the state object to update, making it reusable across many inputs.",
        "hint": "This pattern is commonly used to avoid writing separate handlers for each input field."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the purpose of form validation in React applications?",
        "options": [
        "To prevent users from submitting forms",
        "To ensure the backend receives correct data formats",
        "To provide users feedback on input errors before submission",
        "To improve performance of React applications"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To provide users feedback on input errors before submission",
        "difficulty": "medium",
        "explanation": "Form validation in React applications is primarily used to provide immediate feedback to users about input errors before they submit the form. This improves user experience and reduces server load by catching errors early.",
        "hint": "Think about the user experience when entering data into forms."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "When is client-side validation insufficient for form data?",
        "options": [
        "When using controlled components",
        "When the form has more than five fields",
        "For security-sensitive operations or data that must be verified on the server",
        "When using the useState hook"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "For security-sensitive operations or data that must be verified on the server",
        "difficulty": "medium",
        "explanation": "Client-side validation improves user experience but can be bypassed. For security-sensitive operations (like authentication) or data that requires server verification (like checking if a username exists), server-side validation is essential.",
        "hint": "Consider cases where validation is related to security or requires server-side data."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the most basic approach to implement form validation in React?",
        "options": [
        "Using HTML5 built-in validation attributes",
        "Always use a validation library",
        "Server-side validation only",
        "Use React.createValidator()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using HTML5 built-in validation attributes",
        "difficulty": "medium",
        "explanation": "The most basic approach to form validation in React is using HTML5 built-in validation attributes like required, minlength, max, pattern, etc. These provide simple validation with minimal code.",
        "hint": "This approach uses standard HTML features rather than React-specific code."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is a disadvantage of using HTML5 validation attributes for form validation?",
        "options": [
        "They're not supported in modern browsers",
        "Limited customization of error messages and validation behavior",
        "They require JavaScript to function",
        "They make forms slower to render"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Limited customization of error messages and validation behavior",
        "difficulty": "medium",
        "explanation": "While HTML5 validation attributes are easy to use, they offer limited customization options for error messages and validation behavior. Custom validations, complex rules, and personalized error messages often require JavaScript-based validation approaches.",
        "hint": "Consider how much control you have over the user experience with built-in HTML validation."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the purpose of the 'touched' state in form validation?",
        "options": [
        "To track if the user has physically touched the screen",
        "To track if the user has visited/interacted with a field",
        "To track if a field has been validated",
        "To track if a field contains valid data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To track if the user has visited/interacted with a field",
        "difficulty": "medium",
        "explanation": "The 'touched' state tracks whether a user has interacted with a form field. This is commonly used to avoid showing validation errors before the user has had a chance to interact with the field, providing a better user experience.",
        "hint": "This helps determine when to start showing validation errors to users."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "In a custom validation implementation, when is the best time to show validation errors to users?",
        "options": [
        "As soon as the form loads",
        "Only after form submission is attempted",
        "After a field loses focus (onBlur) or submission is attempted",
        "Only when explicitly requested by the user"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "After a field loses focus (onBlur) or submission is attempted",
        "difficulty": "medium",
        "explanation": "Showing validation errors after a field loses focus (onBlur) or when submission is attempted provides the best user experience. This approach doesn't interrupt users while they're typing but still provides timely feedback.",
        "hint": "Consider when feedback would be most helpful without being intrusive."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What does the following code accomplish?\n```jsx\nconst validateEmail = (email) => {\n  const re = /^[\\w-]+(\\.[\\w-]+)*@([\\w-]+\\.)+[a-zA-Z]{2,7}$/;\n  return re.test(email);\n};\n```",
        "options": [
        "Sends an email to the user",
        "Validates if a string is a properly formatted email address",
        "Creates an email subscription",
        "Encrypts email data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Validates if a string is a properly formatted email address",
        "difficulty": "medium",
        "explanation": "This code defines a function that uses a regular expression to validate if a string matches the pattern of a properly formatted email address. It returns true if the email is valid and false otherwise.",
        "hint": "The function uses a regex pattern to check the format of the input string."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What popular form libraries are commonly used with React?",
        "options": [
        "React-Form and Redux-Form",
        "Formik and React Hook Form",
        "Angular Forms and React Forms",
        "Vue-Form and React-Validate"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Formik and React Hook Form",
        "difficulty": "medium",
        "explanation": "Formik and React Hook Form are two of the most popular form libraries used with React. They provide solutions for managing form state, validation, error messages, and form submission with less boilerplate code.",
        "hint": "These libraries help reduce the amount of code needed to handle forms in React."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What are the main benefits of using a form library like Formik?",
        "options": [
        "It makes forms look better visually",
        "It automatically connects to databases",
        "It helps manage form state, validation, error handling, and submission with less code",
        "It's required for React forms to work"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It helps manage form state, validation, error handling, and submission with less code",
        "difficulty": "medium",
        "explanation": "Form libraries like Formik reduce boilerplate code by providing utilities to manage form state, handle validation logic, track field touches, display error messages, and manage form submission - all common tasks that would otherwise require repetitive code.",
        "hint": "Think about what tasks are repetitive when working with forms and how a library might simplify them."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "How does React Hook Form differ from other form libraries like Formik?",
        "options": [
        "It only works with functional components",
        "It uses uncontrolled components by default for better performance",
        "It requires TypeScript",
        "It's maintained by the React team"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It uses uncontrolled components by default for better performance",
        "difficulty": "hard",
        "explanation": "React Hook Form primarily uses uncontrolled components with refs by default, which reduces the number of re-renders and can improve performance. This is different from Formik which uses controlled components by default.",
        "hint": "Think about the approach to managing input values and how that affects rendering."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is Yup commonly used for in React form implementations?",
        "options": [
        "State management",
        "Form submission handling",
        "Schema-based form validation",
        "UI component styling"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Schema-based form validation",
        "difficulty": "hard",
        "explanation": "Yup is a JavaScript schema builder for value parsing and validation. It's commonly used with form libraries like Formik to create validation schemas that define the shape and validation rules for form data.",
        "hint": "This library helps define the expected shape and rules for your data."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What does the following Yup validation schema check for?\n```jsx\nconst schema = Yup.object().shape({\n  username: Yup.string()\n    .min(3, 'Username must be at least 3 characters')\n    .required('Username is required'),\n  password: Yup.string()\n    .min(8, 'Password must be at least 8 characters')\n    .matches(/[0-9]/, 'Password must contain at least one number')\n    .required('Password is required')\n});\n```",
        "options": [
        "It validates that usernames are unique and passwords are secure",
        "It checks for required fields only",
        "It validates username length (min 3) and password length (min 8) with a number requirement",
        "It only checks that the fields exist in the submitted data"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It validates username length (min 3) and password length (min 8) with a number requirement",
        "difficulty": "hard",
        "explanation": "This Yup schema validates that: 1) username is a string with at least 3 characters and is required, 2) password is a string with at least 8 characters, contains at least one number (via regex), and is required. It also provides custom error messages for each validation case.",
        "hint": "Analyze each constraint defined in the schema and what it checks for."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "In Formik, what is the purpose of the <ErrorMessage> component?",
        "options": [
        "To log errors to the console",
        "To display validation error messages for specific fields",
        "To handle form submission errors",
        "To catch and handle JavaScript errors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To display validation error messages for specific fields",
        "difficulty": "hard",
        "explanation": "In Formik, the <ErrorMessage> component is used to easily display validation error messages for specific form fields. It automatically connects to Formik's context to access errors for the specified field name.",
        "hint": "This component helps render field-specific validation messages from Formik's state."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the purpose of the 'setFieldTouched' function in Formik?",
        "options": [
        "To mark a field as modified",
        "To mark a field as visited by the user",
        "To set a field's validation status",
        "To trigger field re-rendering"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To mark a field as visited by the user",
        "difficulty": "hard",
        "explanation": "The 'setFieldTouched' function in Formik is used to manually mark a field as 'touched' (visited by the user). This is useful for custom input components or manually triggering validation after a user interaction like blur (onBlur).",
        "hint": "This relates to tracking user interaction with fields to control when validation feedback appears."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the primary advantage of using the 'useField' hook in Formik?",
        "options": [
        "It creates new form fields programmatically",
        "It simplifies connecting custom input components to Formik",
        "It enables field-level validation only",
        "It improves form rendering performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It simplifies connecting custom input components to Formik",
        "difficulty": "hard",
        "explanation": "The 'useField' hook in Formik simplifies the process of connecting custom input components to Formik. It returns field props, meta information (like errors, touched status), and helper functions in one call, making it easier to create reusable form components.",
        "hint": "This hook helps create custom form controls that work seamlessly with Formik."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What does the 'register' function do in React Hook Form?",
        "options": [
        "Creates a new form instance",
        "Adds a field to the form for validation and state tracking",
        "Registers the form with a backend service",
        "Creates form validation rules"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Adds a field to the form for validation and state tracking",
        "difficulty": "hard",
        "explanation": "The 'register' function in React Hook Form is used to register an input with the form. It returns props that should be spread on the input element, connecting it to the form's validation and state management system.",
        "hint": "This is how inputs become 'known' to React Hook Form for tracking and validation."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What does this React Hook Form code accomplish?\n```jsx\nconst { register, handleSubmit, formState: { errors } } = useForm();\n\nconst onSubmit = data => console.log(data);\n\nreturn (\n  <form onSubmit={handleSubmit(onSubmit)}>\n    <input {...register('name', { required: 'Name is required' })} />\n    {errors.name && <p>{errors.name.message}</p>}\n    <button type='submit'>Submit</button>\n  </form>\n);\n```",
        "options": [
        "Creates an uncontrolled form with no validation",
        "Creates a form where 'name' is required with error display",
        "Submits form data to a server automatically",
        "Validates that the name input contains alphabetic characters only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a form where 'name' is required with error display",
        "difficulty": "hard",
        "explanation": "This code sets up a form using React Hook Form where: 1) The 'name' field is registered with validation requiring it to be filled in, 2) Error messages are displayed if validation fails, 3) When submitted, the form data is logged to the console via the onSubmit function.",
        "hint": "Look at how the input is registered and what validation rules are applied."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What is the purpose of the 'resetForm' function in Formik?",
        "options": [
        "To refresh the page and start over",
        "To reset all form fields to their initial values",
        "To clear only validation errors",
        "To reset the form's submission status"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To reset all form fields to their initial values",
        "difficulty": "hard",
        "explanation": "The 'resetForm' function in Formik resets the form state back to its initial values. This includes clearing all current values, errors, touched fields, and submission status. It's commonly used after successful form submission.",
        "hint": "This function is often used after form submission completes to prepare for new input."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "How can you implement conditional validation in React forms?",
        "options": [
        "It's not possible; all validations must be static",
        "By using if/else statements inside validation functions",
        "By using the conditional() method in validation libraries",
        "Only by using external validation services"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "By using if/else statements inside validation functions",
        "difficulty": "hard",
        "explanation": "Conditional validation can be implemented using if/else or other conditional logic inside validation functions. This allows you to apply different validation rules based on the values of other fields or application state.",
        "hint": "Think about how JavaScript logic can be used within validation functions."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Forms & Validation",
        "questionText": "What approach would you use to validate a password confirmation field should match the password field?",
        "options": [
        "Use the HTML5 'match' attribute",
        "This can only be validated on the server",
        "Compare the values in a custom validation function",
        "Use the built-in 'sameAs' validator"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Compare the values in a custom validation function",
        "difficulty": "hard",
        "explanation": "To validate that a password confirmation field matches the password field, you would create a custom validation function that compares the two values. This can be done by accessing both field values and checking if they're equal.",
        "hint": "This requires access to multiple field values during validation."
    },

    // API Integration
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "Which hook is commonly used to fetch data from an API in a functional component?",
        "options": ["useAPI", "useEffect", "useFetch", "useData"],
        "correctOptionIndex": 1,
        "correctOptionText": "useEffect",
        "difficulty": "easy",
        "explanation": "The useEffect hook is commonly used to perform side effects like data fetching in functional components.",
        "hint": "This hook runs after render and can be used for API calls."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the recommended way to handle loading states when fetching data from an API?",
        "options": [
        "Use a global loading variable",
        "Use setTimeout to delay rendering",
        "Maintain a loading state in component state",
        "Use CSS animations only"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Maintain a loading state in component state",
        "difficulty": "easy",
        "explanation": "Maintaining a loading state in your component's state allows you to conditionally render different UI elements based on whether data is still being fetched.",
        "hint": "You need to track when data is being fetched and when it's ready."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What would be the result of this code snippet?\n```jsx\nimport { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  \n  useEffect(() => {\n    fetch('https://api.example.com/users')\n      .then(response => response.json())\n      .then(data => setUsers(data));\n  });\n  \n  return (\n    <ul>\n      {users.map(user => <li key={user.id}>{user.name}</li>)}\n    </ul>\n  );\n}\n```",
        "options": [
        "The component will fetch users data once and display it",
        "The component will fetch users data repeatedly in an infinite loop",
        "The component will throw an error because the useEffect is missing dependencies",
        "The component will not fetch any data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The component will fetch users data repeatedly in an infinite loop",
        "difficulty": "medium",
        "explanation": "Without a dependency array, useEffect runs after every render. Setting state in useEffect triggers a re-render, creating an infinite loop.",
        "hint": "Look at the useEffect dependencies argument and what happens after setState."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the purpose of the second argument (the dependency array) in a useEffect hook when fetching API data?",
        "options": [
        "It specifies which variables to include in the API request",
        "It controls how often the effect runs based on which values have changed",
        "It defines the order of multiple API calls",
        "It sets the timeout duration for the API request"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It controls how often the effect runs based on which values have changed",
        "difficulty": "easy",
        "explanation": "The dependency array tells React to only re-run the effect if any of the specified values have changed between renders. An empty array means the effect runs only once after the initial render.",
        "hint": "This argument helps prevent unnecessary API calls."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What's the best practice for handling API errors in React components?",
        "options": [
        "Let the global error handler catch all errors",
        "Ignore errors to prevent UI disruption",
        "Use try/catch blocks or .catch() on promises and set an error state",
        "Always reload the page when an error occurs"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use try/catch blocks or .catch() on promises and set an error state",
        "difficulty": "medium",
        "explanation": "Properly handling API errors involves catching them with try/catch (for async/await) or .catch() (for promises) and storing error information in state to display appropriate error messages to users.",
        "hint": "Think about how to capture errors and make them visible to users."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the purpose of an AbortController when making API requests in React?",
        "options": [
        "To cancel in-flight API requests when a component unmounts",
        "To automatically retry failed API requests",
        "To authenticate API requests",
        "To compress API response data"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To cancel in-flight API requests when a component unmounts",
        "difficulty": "hard",
        "explanation": "AbortController allows you to cancel pending fetch requests, which is useful for cleaning up when a component unmounts to prevent setting state on unmounted components and memory leaks.",
        "hint": "It helps with proper cleanup when components are no longer visible."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the correct way to make a POST request using the fetch API?",
        "options": [
        "fetch(url, { body: JSON.stringify(data) })",
        "fetch(url, { method: 'POST', body: data })",
        "fetch(url, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })",
        "fetch(url).post(JSON.stringify(data))"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "fetch(url, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })",
        "difficulty": "medium",
        "explanation": "A POST request with fetch requires specifying the method, stringifying the data for the body, and setting the Content-Type header to application/json for JSON data.",
        "hint": "Consider what method, body format, and headers are needed for a proper POST request."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What's the issue with this API fetch implementation?\n```jsx\nfunction ProductDetail({ productId }) {\n  const [product, setProduct] = useState(null);\n  \n  useEffect(() => {\n    fetch(`https://api.example.com/products/${productId}`)\n      .then(response => response.json())\n      .then(data => setProduct(data));\n  }, []);\n  \n  return product ? <div>{product.name}</div> : <div>Loading...</div>;\n}\n```",
        "options": [
        "Missing error handling",
        "Not using async/await",
        "productId is not included in the dependency array",
        "Should use axios instead of fetch"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "productId is not included in the dependency array",
        "difficulty": "medium",
        "explanation": "The useEffect's dependency array is empty, so it only runs once when the component mounts. If productId changes, the effect won't re-run to fetch the new product data.",
        "hint": "What happens if the productId prop changes after the component has mounted?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "Which library is NOT commonly used for making API requests in React applications?",
        "options": ["axios", "fetch API", "redux-saga", "jquery-ajax"],
        "correctOptionIndex": 3,
        "correctOptionText": "jquery-ajax",
        "difficulty": "easy",
        "explanation": "While jQuery's ajax method was popular in the past, it's rarely used in modern React applications. Instead, developers typically use fetch (built into browsers), axios, or redux-saga for more complex workflows.",
        "hint": "Think about which option represents an older approach that's less common in modern React apps."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the primary advantage of using axios over the native fetch API?",
        "options": [
        "Automatic JSON parsing of responses",
        "Built-in CSRF protection",
        "Lower bundle size",
        "Native browser support"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Automatic JSON parsing of responses",
        "difficulty": "medium",
        "explanation": "Axios automatically parses JSON responses, whereas with fetch you need to call .json() on the response object. Axios also provides other conveniences like better error handling and request cancellation.",
        "hint": "Think about steps you need to take with fetch that axios handles automatically."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What pattern does this code implement?\n```jsx\nconst useFetch = (url) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const response = await fetch(url);\n        if (!response.ok) throw new Error(`HTTP error ${response.status}`);\n        const result = await response.json();\n        setData(result);\n      } catch (err) {\n        setError(err);\n      } finally {\n        setLoading(false);\n      }\n    };\n    fetchData();\n  }, [url]);\n\n  return { data, loading, error };\n};\n```",
        "options": [
        "Higher-Order Component pattern",
        "Render Props pattern",
        "Custom Hook pattern",
        "Context Provider pattern"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Custom Hook pattern",
        "difficulty": "medium",
        "explanation": "This code implements a custom hook called useFetch that encapsulates the data fetching logic, including loading and error states, making it reusable across different components.",
        "hint": "This pattern allows for reusing stateful logic across components and starts with 'use'."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the purpose of the React Query library in API integration?",
        "options": [
        "It's just a wrapper around fetch with no additional benefits",
        "It provides caching, background updates, and stale data handling for API requests",
        "It's primarily for GraphQL queries only",
        "It's used for database querying directly from React"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It provides caching, background updates, and stale data handling for API requests",
        "difficulty": "medium",
        "explanation": "React Query is a data-fetching library that provides powerful features like caching, automatic refetching, and background updates, making API integration in React much more efficient.",
        "hint": "Think about what problems this library solves compared to manual fetch implementations."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "How should environment-specific API URLs be handled in a React application?",
        "options": [
        "Hardcode different URLs based on conditional checks",
        "Always use localhost URLs and change them before deployment",
        "Use environment variables (like REACT_APP_API_URL in Create React App)",
        "Store URLs in localStorage"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use environment variables (like REACT_APP_API_URL in Create React App)",
        "difficulty": "medium",
        "explanation": "Environment variables allow you to use different API URLs for development, testing, and production environments without changing the code. In Create React App, these variables must start with REACT_APP_.",
        "hint": "What's the best way to configure different values for development vs. production?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What does the following code accomplish?\n```jsx\nconst cache = new Map();\n\nfunction fetchWithCache(url) {\n  if (cache.has(url)) {\n    return Promise.resolve(cache.get(url));\n  }\n  \n  return fetch(url)\n    .then(response => response.json())\n    .then(data => {\n      cache.set(url, data);\n      return data;\n    });\n}\n```",
        "options": [
        "Implements server-side rendering",
        "Creates a simple client-side caching mechanism for API responses",
        "Handles API rate limiting",
        "Implements JWT authentication"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a simple client-side caching mechanism for API responses",
        "difficulty": "hard",
        "explanation": "This code implements a basic cache using a Map. If a URL has been fetched before, it returns the cached data instead of making a new network request, improving performance for repeated requests to the same endpoint.",
        "hint": "What happens when the same URL is requested multiple times?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the recommended approach for handling authentication tokens in API requests?",
        "options": [
        "Store them in component state",
        "Store them in localStorage or cookies and include them in request headers",
        "Include them directly in the API endpoint URL",
        "Regenerate them for each request"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Store them in localStorage or cookies and include them in request headers",
        "difficulty": "medium",
        "explanation": "Authentication tokens should typically be stored in localStorage (for SPA) or secure cookies, then included in the Authorization header of API requests. This provides persistence across page refreshes while keeping them out of your codebase.",
        "hint": "Consider both persistence and security concerns."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What's the purpose of using async/await with API calls instead of promises with .then()?",
        "options": [
        "async/await is the only way to handle errors in API calls",
        "async/await makes the code faster",
        "async/await makes asynchronous code look and behave more like synchronous code",
        "async/await is required for using the fetch API"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "async/await makes asynchronous code look and behave more like synchronous code",
        "difficulty": "easy",
        "explanation": "async/await is syntactic sugar for promises that makes asynchronous code more readable and maintainable by allowing it to be written in a style that looks more like traditional synchronous code.",
        "hint": "Think about readability and code structure."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "When is it appropriate to use the SWR library in a React application?",
        "options": [
        "Only for server-side rendering",
        "Only for WebSocket connections",
        "For data fetching with smart caching, revalidation, and stale-while-revalidate strategy",
        "Only when using Redux for state management"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "For data fetching with smart caching, revalidation, and stale-while-revalidate strategy",
        "difficulty": "hard",
        "explanation": "SWR (stale-while-revalidate) is a data fetching library that implements a caching strategy where it returns cached (stale) data first, then revalidates in the background, making it excellent for frequently updated data and optimistic UI updates.",
        "hint": "The library's name contains a clue about its primary strategy."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the correct way to handle form submissions to an API in React?",
        "options": [
        "Always use axios.post() directly on form submit",
        "Prevent the default form behavior, collect form data, and send it to the API",
        "Use HTML form action attribute to point to the API endpoint",
        "Forms cannot be used with APIs in React"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Prevent the default form behavior, collect form data, and send it to the API",
        "difficulty": "easy",
        "explanation": "When handling form submissions in React that need to be sent to an API, you should prevent the default form submission behavior with e.preventDefault(), collect the form data (often from component state), and then make the API request programmatically.",
        "hint": "Think about how to maintain a single-page application experience."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What issue might arise when setting component state based on API responses if the component unmounts before the response is received?",
        "options": [
        "The API call will be canceled automatically",
        "React will throw a warning about memory leaks",
        "The state update will silently fail",
        "The component will remount automatically"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "React will throw a warning about memory leaks",
        "difficulty": "medium",
        "explanation": "If you try to update state on an unmounted component, React will issue a warning about memory leaks. To prevent this, you should either cancel the API request or use a flag to avoid the state update if the component has unmounted.",
        "hint": "React has a specific message it displays in the console for this situation."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What does this code accomplish in terms of API cleanup?\n```jsx\nuseEffect(() => {\n  let isMounted = true;\n  fetch(url)\n    .then(response => response.json())\n    .then(data => {\n      if (isMounted) setData(data);\n    });\n  return () => {\n    isMounted = false;\n  };\n}, [url]);\n```",
        "options": [
        "It cancels the API request if the component unmounts",
        "It prevents state updates if the component has unmounted",
        "It caches the API response for future use",
        "It retries the API call if it fails"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It prevents state updates if the component has unmounted",
        "difficulty": "hard",
        "explanation": "This code uses an 'isMounted' flag that is set to false in the cleanup function when the component unmounts. This prevents updating state on an unmounted component, avoiding memory leak warnings. However, it doesn't actually cancel the ongoing network request.",
        "hint": "Look at how the flag is being used before setting state."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "Which HTTP status code range indicates a successful API response?",
        "options": ["100-199", "200-299", "300-399", "400-499"],
        "correctOptionIndex": 1,
        "correctOptionText": "200-299",
        "difficulty": "easy",
        "explanation": "HTTP status codes in the 200-299 range indicate success. The most common is 200 OK, but others include 201 Created, 202 Accepted, and 204 No Content.",
        "hint": "These indicate that the request was received, understood, and processed successfully."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What's wrong with this data fetching approach?\n```jsx\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  \n  fetch(`https://api.example.com/users/${userId}`)\n    .then(response => response.json())\n    .then(data => setUser(data));\n  \n  return user ? <div>{user.name}</div> : <div>Loading...</div>;\n}\n```",
        "options": [
        "The API call should use axios instead of fetch",
        "The fetch call is made on every render, causing an infinite loop",
        "UserId is not being used correctly in the fetch URL",
        "The API call should be asynchronous"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The fetch call is made on every render, causing an infinite loop",
        "difficulty": "medium",
        "explanation": "The fetch call is placed directly in the component body, so it runs on every render. When the fetch completes, it updates state with setUser, which triggers another render, creating an infinite loop. API calls should be placed inside useEffect.",
        "hint": "Think about the component lifecycle and when this code will execute."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is optimistic UI updating in the context of API integration?",
        "options": [
        "Assuming the API will always return success and not handling errors",
        "Updating the UI immediately based on expected API response, then reconciling when the actual response arrives",
        "Having a positive attitude toward API response times",
        "Only updating the UI after multiple successful API calls"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Updating the UI immediately based on expected API response, then reconciling when the actual response arrives",
        "difficulty": "hard",
        "explanation": "Optimistic UI updating is a pattern where the UI is updated immediately based on the expected result of an API call, without waiting for the actual response. If the API call succeeds, nothing more needs to be done. If it fails, the UI is reverted or reconciled accordingly.",
        "hint": "This approach makes the application feel more responsive to users."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is a correct implementation of an API request with proper error handling?",
        "options": [
        "```jsx\nfetch(url).then(res => res.json()).then(setData);\n```",
        "```jsx\ntry {\n  fetch(url).then(res => res.json()).then(setData);\n} catch (err) {\n  setError(err);\n}\n```",
        "```jsx\nfetch(url)\n  .then(res => {\n    if (!res.ok) throw new Error(`HTTP error ${res.status}`);\n    return res.json();\n  })\n  .then(setData)\n  .catch(setError);\n```",
        "```jsx\naxios.get(url).json().then(setData);\n```"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "```jsx\nfetch(url)\n  .then(res => {\n    if (!res.ok) throw new Error(`HTTP error ${res.status}`);\n    return res.json();\n  })\n  .then(setData)\n  .catch(setError);\n```",
        "difficulty": "hard",
        "explanation": "This implementation properly checks if the response is ok (status 200-299) and throws an error if not, which is then caught by the catch block. Many developers forget that fetch() only rejects on network errors, not HTTP error statuses.",
        "hint": "The fetch API doesn't automatically reject on HTTP error status codes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is the purpose of Axios interceptors in API integration?",
        "options": [
        "To block certain API calls based on user permissions",
        "To intercept and modify requests or responses before they are handled by then or catch",
        "To cache API responses automatically",
        "To create mock API responses for testing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To intercept and modify requests or responses before they are handled by then or catch",
        "difficulty": "hard",
        "explanation": "Axios interceptors allow you to globally modify requests before they are sent or responses before they are processed by your application. Common uses include adding authentication headers to all requests or normalizing response data formats.",
        "hint": "Think about global pre-processing of requests or responses."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is CORS and how does it affect API integration in React applications?",
        "options": [
        "CORS is a React library for optimizing API calls",
        "CORS is a browser security feature that restricts cross-origin HTTP requests, potentially blocking API calls to different domains",
        "CORS is a server-side framework for building APIs",
        "CORS is an encryption protocol for secure API communication"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "CORS is a browser security feature that restricts cross-origin HTTP requests, potentially blocking API calls to different domains",
        "difficulty": "medium",
        "explanation": "Cross-Origin Resource Sharing (CORS) is a security mechanism built into browsers that restricts web applications from making requests to domains different from the one that served the web application, unless the API server explicitly allows it with specific headers.",
        "hint": "Think about security restrictions when making requests to different domains."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "When implementing an API fetch with pagination, what should be stored in state?",
        "options": [
        "Only the current page of data",
        "All pages of data concatenated together, current page number, and total pages",
        "Only the total number of items available",
        "Just the API endpoint URL"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "All pages of data concatenated together, current page number, and total pages",
        "difficulty": "medium",
        "explanation": "For paginated API data, you typically want to store all fetched data concatenated together (to avoid refetching earlier pages), the current page number (to know what to fetch next), and total pages or other metadata (to know when to stop).",
        "hint": "Think about what information you need to both display the current data and know what to fetch next."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What approach does this code implement for API error handling?\n```jsx\nconst UserDetail = ({ id }) => {\n  const [user, setUser] = useState(null);\n  const [error, setError] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch(`/api/users/${id}`)\n      .then(res => {\n        if (!res.ok) {\n          if (res.status === 404) {\n            throw new Error('User not found');\n          } else if (res.status === 403) {\n            throw new Error('Not authorized');\n          } else {\n            throw new Error('Something went wrong');\n          }\n        }\n        return res.json();\n      })\n      .then(data => setUser(data))\n      .catch(err => setError(err.message))\n      .finally(() => setLoading(false));\n  }, [id]);\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  return user ? <UserProfile user={user} /> : null;\n};\n```",
        "options": [
        "Basic error handling with a single error message",
        "Global error boundary approach",
        "Error handling with status-specific error messages",
        "Error handling with retry mechanism"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Error handling with status-specific error messages",
        "difficulty": "hard",
        "explanation": "This code implements error handling that provides different error messages based on HTTP status codes. It checks for specific status codes (404, 403) and provides tailored error messages, with a fallback for other errors.",
        "hint": "Look at how the code handles different HTTP status codes differently."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "When using the fetch API, what is the correct way to include request headers?",
        "options": [
        "fetch(url, { headers: { 'Content-Type': 'application/json' } })",
        "fetch(url, headers: { 'Content-Type': 'application/json' })",
        "fetch(url).headers({ 'Content-Type': 'application/json' })",
        "fetch(url).setHeaders({ 'Content-Type': 'application/json' })"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "fetch(url, { headers: { 'Content-Type': 'application/json' } })",
        "difficulty": "easy",
        "explanation": "Headers are passed as an object within the options object (the second argument to fetch). The headers property takes an object where each key-value pair represents a header name and value.",
        "hint": "Headers are part of the request configuration object in fetch."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "API Integration",
        "questionText": "What is a common pattern for refreshing authentication tokens in React applications?",
        "options": [
        "Manually refresh the page when tokens expire",
        "Use axios interceptors to detect 401 responses and request a new token before retrying the original request",
        "Always request a new token with each API call",
        "Tokens cannot be refreshed automatically"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use axios interceptors to detect 401 responses and request a new token before retrying the original request",
        "difficulty": "hard",
        "explanation": "A common pattern for token refreshing is to use axios response interceptors to detect 401 (Unauthorized) responses, then make a request to refresh the token, and finally retry the original request with the new token. This creates a seamless experience for users.",
        "hint": "This approach handles expired tokens without requiring user intervention."
    },

    // Redux & state Management
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the primary purpose of Redux in a React application?",
        "options": [
        "To replace React's component state",
        "To manage global state in a predictable way",
        "To improve application performance",
        "To handle API requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To manage global state in a predictable way",
        "difficulty": "easy",
        "explanation": "Redux provides a predictable state container for JavaScript apps, primarily used for managing global application state in a consistent manner with clear update patterns.",
        "hint": "Think about state management across multiple components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What are the three principles of Redux?",
        "options": [
        "Components, Actions, Store",
        "Single source of truth, State is read-only, Changes are made with pure functions",
        "Immutability, Purity, Composition",
        "Reducers, Actions, Middleware"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Single source of truth, State is read-only, Changes are made with pure functions",
        "difficulty": "medium",
        "explanation": "Redux is based on three fundamental principles: maintaining a single state tree (single source of truth), making state read-only (only changed by dispatching actions), and using pure functions (reducers) to specify how actions transform the state.",
        "hint": "These principles define how data flows through Redux."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is a Redux action?",
        "options": [
        "A function that directly modifies the state",
        "A plain JavaScript object that describes what happened",
        "A component that renders Redux state",
        "A middleware function"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A plain JavaScript object that describes what happened",
        "difficulty": "easy",
        "explanation": "Redux actions are plain JavaScript objects that have a 'type' property describing the action and optionally a payload with additional data. They describe what happened but don't specify how the state changes.",
        "hint": "Actions describe 'what happened' in your application."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is a reducer in Redux?",
        "options": [
        "A function that dispatches actions",
        "A component that subscribes to the store",
        "A pure function that takes the previous state and an action, and returns the next state",
        "A middleware function that intercepts actions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A pure function that takes the previous state and an action, and returns the next state",
        "difficulty": "easy",
        "explanation": "A reducer is a pure function that receives the current state and an action, then returns a new state based on that action. Reducers specify how the application's state changes in response to actions.",
        "hint": "These functions determine how state should change in response to actions."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What does the following Redux reducer do?\n```javascript\nfunction counterReducer(state = { count: 0 }, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return { count: state.count + 1 };\n    case 'DECREMENT':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n```",
        "options": [
        "It manages API requests for a counter service",
        "It renders a counter component",
        "It increments or decrements a count value in state based on dispatched actions",
        "It dispatches INCREMENT and DECREMENT actions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It increments or decrements a count value in state based on dispatched actions",
        "difficulty": "medium",
        "explanation": "This reducer manages a simple counter state. It handles two action types: 'INCREMENT' which adds 1 to the count, and 'DECREMENT' which subtracts 1 from the count. For any other action type, it returns the current state unchanged.",
        "hint": "Look at how the state changes in response to different action types."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "How do you access Redux state in a functional React component?",
        "options": [
        "By importing the state directly",
        "By using the useSelector hook",
        "By using this.props.state",
        "By using the getState() method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "By using the useSelector hook",
        "difficulty": "easy",
        "explanation": "In functional components, Redux state is accessed using the useSelector hook from react-redux. This hook accepts a function that takes the Redux state as an argument and returns the part of state you want to access.",
        "hint": "React-Redux provides hooks for functional components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the purpose of the useDispatch hook in React-Redux?",
        "options": [
        "To create a new Redux store",
        "To listen for state changes",
        "To dispatch actions to the Redux store",
        "To combine multiple reducers"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To dispatch actions to the Redux store",
        "difficulty": "easy",
        "explanation": "The useDispatch hook from react-redux returns a reference to the dispatch function from the Redux store. This function is used to dispatch actions to update the state.",
        "hint": "This hook helps components trigger state changes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What does the following code do in a React component?\n```javascript\nconst count = useSelector(state => state.counter.count);\nconst dispatch = useDispatch();\n\nconst handleIncrement = () => {\n  dispatch({ type: 'INCREMENT' });\n};\n```",
        "options": [
        "It creates a new Redux store with a counter",
        "It retrieves the count value from Redux state and defines a function to increment it",
        "It defines a new reducer for a counter",
        "It creates a local state variable for counting"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It retrieves the count value from Redux state and defines a function to increment it",
        "difficulty": "medium",
        "explanation": "This code uses useSelector to extract the count value from the Redux state and useDispatch to get the dispatch function. The handleIncrement function dispatches an INCREMENT action to the store, which will be handled by a reducer to update the state.",
        "hint": "Look at how the component is interacting with Redux state and actions."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is Redux middleware used for?",
        "options": [
        "For rendering React components",
        "For handling side effects, async logic, and more between dispatching an action and reaching the reducer",
        "For creating React context providers",
        "For defining Redux actions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "For handling side effects, async logic, and more between dispatching an action and reaching the reducer",
        "difficulty": "medium",
        "explanation": "Redux middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer. Middleware is commonly used for logging, crash reporting, handling asynchronous requests, routing, and more.",
        "hint": "Middleware lets you extend Redux's capabilities beyond simple synchronous updates."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is Redux Thunk used for?",
        "options": [
        "Combining multiple reducers",
        "Creating Redux stores",
        "Writing action creators that return functions instead of plain actions to handle async logic",
        "Optimizing Redux performance"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Writing action creators that return functions instead of plain actions to handle async logic",
        "difficulty": "medium",
        "explanation": "Redux Thunk is middleware that allows you to write action creators that return a function instead of an action object. This function can perform async operations and dispatch actions when those operations complete, making it useful for API calls and other async tasks.",
        "hint": "It helps with operations that can't be handled synchronously."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What does this Redux action creator do?\n```javascript\nfunction fetchUserData(userId) {\n  return function(dispatch) {\n    dispatch({ type: 'FETCH_USER_REQUEST' });\n    \n    return fetch(`/api/users/${userId}`)\n      .then(response => response.json())\n      .then(data => dispatch({ \n        type: 'FETCH_USER_SUCCESS', \n        payload: data \n      }))\n      .catch(error => dispatch({ \n        type: 'FETCH_USER_FAILURE', \n        error: error.message \n      }));\n  };\n}\n```",
        "options": [
        "It's a standard synchronous action creator",
        "It's an async action creator using Redux Thunk to handle a user data fetch request",
        "It's a Redux reducer for user data",
        "It's a React component that fetches user data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It's an async action creator using Redux Thunk to handle a user data fetch request",
        "difficulty": "hard",
        "explanation": "This is a thunk action creator that returns a function instead of an action. The returned function dispatches actions at different stages of the API request: before the request (FETCH_USER_REQUEST), on success (FETCH_USER_SUCCESS), and on failure (FETCH_USER_FAILURE).",
        "hint": "Notice that it returns a function that receives dispatch as an argument instead of returning a plain object."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the purpose of the combineReducers function in Redux?",
        "options": [
        "To dispatch multiple actions at once",
        "To merge multiple components",
        "To combine multiple reducer functions into a single reducer function",
        "To connect React components to Redux"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To combine multiple reducer functions into a single reducer function",
        "difficulty": "medium",
        "explanation": "combineReducers is a utility function that turns an object whose values are different reducer functions into a single reducer function. This allows you to have multiple reducers that each manage a specific slice of your application state.",
        "hint": "It helps with organizing larger Redux applications into manageable pieces."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the purpose of the Provider component in React-Redux?",
        "options": [
        "To create a Redux store",
        "To make the Redux store available to all nested components",
        "To connect to external API providers",
        "To provide context between components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To make the Redux store available to all nested components",
        "difficulty": "easy",
        "explanation": "The Provider component from react-redux wraps your React application and makes the Redux store available to any nested components that need to access the Redux state or dispatch actions.",
        "hint": "It's typically placed at the top level of your component tree."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the correct way to create a Redux store?",
        "options": [
        "new Redux.Store(reducer)",
        "createStore(reducer)",
        "makeStore(reducer)",
        "Store.create(reducer)"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "createStore(reducer)",
        "difficulty": "easy",
        "explanation": "The correct way to create a Redux store is by using the createStore function from Redux, passing it a reducer function. In newer versions of Redux, configureStore from Redux Toolkit is recommended instead.",
        "hint": "This function is provided by the Redux library itself."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is Redux Toolkit and why is it recommended?",
        "options": [
        "A collection of React components for Redux",
        "A set of tools and simplified APIs for Redux development that reduces boilerplate code",
        "A performance optimization package for Redux",
        "A testing library for Redux applications"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A set of tools and simplified APIs for Redux development that reduces boilerplate code",
        "difficulty": "medium",
        "explanation": "Redux Toolkit is the official, opinionated toolset for efficient Redux development. It includes utilities to simplify common Redux use cases like store setup, creating reducers, immutable update logic, and even creates action creators automatically, significantly reducing boilerplate code.",
        "hint": "It's the official recommended approach for writing Redux logic."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the purpose of the createSlice function in Redux Toolkit?",
        "options": [
        "To split the Redux store into multiple parts",
        "To generate action creators and action types automatically based on reducer functions",
        "To create middleware functions",
        "To implement code-splitting in Redux applications"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To generate action creators and action types automatically based on reducer functions",
        "difficulty": "medium",
        "explanation": "createSlice is a function that accepts an initial state, an object of reducer functions, and a slice name, and automatically generates action creators and action types that correspond to the reducers and state. This simplifies the Redux workflow significantly.",
        "hint": "It helps reduce the amount of Redux code you need to write manually."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What does this Redux Toolkit code do?\n```javascript\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: state => {\n      state.value += 1;\n    },\n    decrement: state => {\n      state.value -= 1;\n    },\n    incrementByAmount: (state, action) => {\n      state.value += action.payload;\n    }\n  }\n});\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions;\n```",
        "options": [
        "It only creates a reducer function",
        "It creates action creators but no reducer",
        "It creates a slice of Redux state, with a reducer and action creators for incrementing and decrementing a counter",
        "It creates a new Redux store"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It creates a slice of Redux state, with a reducer and action creators for incrementing and decrementing a counter",
        "difficulty": "hard",
        "explanation": "This code uses Redux Toolkit's createSlice to create a 'counter' slice of state with an initial value of 0. It defines three reducer functions: increment, decrement, and incrementByAmount. Redux Toolkit automatically creates corresponding action creators, which are exported at the end.",
        "hint": "Look at what createSlice returns and what's being exported."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "In Redux Toolkit, what does the following code do?\n```javascript\nstate.value += 1;\n```",
        "options": [
        "It violates Redux's immutability principle and will cause errors",
        "It uses Immer behind the scenes to produce a new state object without mutating the original",
        "It creates a side effect that will be ignored by Redux",
        "It dispatches an action to update the state"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It uses Immer behind the scenes to produce a new state object without mutating the original",
        "difficulty": "hard",
        "explanation": "Redux Toolkit uses Immer internally, which allows you to write code that appears to mutate state directly, but actually produces a new immutable state object. This makes reducers much simpler to write while maintaining Redux's immutability requirements.",
        "hint": "Redux Toolkit makes it easier to write immutable updates."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is Redux-Saga used for?",
        "options": [
        "For combining reducers",
        "For handling side effects (like asynchronous operations) using generator functions",
        "For connecting React components to Redux",
        "For optimizing Redux store performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "For handling side effects (like asynchronous operations) using generator functions",
        "difficulty": "hard",
        "explanation": "Redux-Saga is middleware for handling side effects in Redux applications using generator functions. It's particularly well-suited for complex operations like API calls, worker threads, and other asynchronous flows that are difficult to handle with standard Redux or even Redux Thunk.",
        "hint": "It's an alternative to Redux Thunk for handling async operations."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the difference between Redux and React's Context API?",
        "options": [
        "Redux is for global state while Context is only for component state",
        "There is no difference; they serve identical purposes",
        "Redux provides a more structured approach with actions, reducers, and middleware, while Context API is simpler but has fewer features",
        "Context API is only for class components while Redux works with functional components"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Redux provides a more structured approach with actions, reducers, and middleware, while Context API is simpler but has fewer features",
        "difficulty": "medium",
        "explanation": "Both Redux and Context API can manage global state, but Redux offers a more structured approach with concepts like actions, reducers, and middleware. Context API is simpler and built into React, but lacks features like middleware for handling side effects, time-travel debugging, and the explicit state update patterns Redux enforces.",
        "hint": "Think about the complexity and feature set differences."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is a selector in the context of Redux?",
        "options": [
        "A function that dispatches actions",
        "A function that creates the Redux store",
        "A function that extracts specific pieces of data from the store state",
        "A React component that connects to Redux"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A function that extracts specific pieces of data from the store state",
        "difficulty": "medium",
        "explanation": "A selector is a function that accepts Redux state as an argument and returns data derived from that state. Selectors help encapsulate the state shape and can compute derived data, enabling Redux to store the minimal possible state.",
        "hint": "These functions help components get exactly the data they need from the store."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is Reselect library used for in Redux applications?",
        "options": [
        "For combining multiple stores",
        "For creating memoized selector functions that prevent unnecessary recalculations",
        "For selecting which middleware to use",
        "For selecting components to connect to Redux"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "For creating memoized selector functions that prevent unnecessary recalculations",
        "difficulty": "hard",
        "explanation": "Reselect is a library for creating memoized selector functions in Redux applications. Memoization helps prevent unnecessary recalculations when the input state hasn't changed, improving performance for derived data calculations.",
        "hint": "It helps with performance optimization for computed values from state."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is wrong with the following Redux reducer code?\n```javascript\nfunction userReducer(state = { name: 'John', age: 25 }, action) {\n  switch (action.type) {\n    case 'UPDATE_NAME':\n      state.name = action.payload;\n      return state;\n    case 'UPDATE_AGE':\n      state.age = action.payload;\n      return state;\n    default:\n      return state;\n  }\n}\n```",
        "options": [
        "The reducer doesn't handle enough action types",
        "The reducer is directly mutating the state object instead of returning a new state",
        "The initial state should be in a separate variable",
        "There's nothing wrong with this reducer"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The reducer is directly mutating the state object instead of returning a new state",
        "difficulty": "medium",
        "explanation": "This reducer violates Redux's core principle of immutability by directly modifying the state object. Redux requires that reducers never mutate state, but instead create a new state object with the updated values.",
        "hint": "Redux requires state to be immutable."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the purpose of the useSelector hook's second argument?",
        "options": [
        "To specify which Redux store to use",
        "To provide default values if the state is undefined",
        "To customize the comparison function used to determine if the component should re-render",
        "To transform the selected state before returning it"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To customize the comparison function used to determine if the component should re-render",
        "difficulty": "hard",
        "explanation": "The second argument to useSelector is an optional equality function. By default, useSelector uses strict === reference equality, but you can provide a custom comparison function like shallowEqual to prevent unnecessary re-renders when dealing with objects or arrays.",
        "hint": "It affects when the component re-renders based on state changes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What does the Redux DevTools extension allow you to do?",
        "options": [
        "Write Redux code more efficiently",
        "Debug network requests",
        "Inspect Redux state, action history, and time-travel debugging",
        "Generate Redux components automatically"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Inspect Redux state, action history, and time-travel debugging",
        "difficulty": "easy",
        "explanation": "Redux DevTools is a browser extension that allows you to inspect the Redux store state, view a history of dispatched actions, and even travel back in time to previous states, making debugging Redux applications much easier.",
        "hint": "It's a powerful tool for debugging Redux applications."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the role of the store.subscribe() method in Redux?",
        "options": [
        "To subscribe to API updates",
        "To attach a listener that will be called whenever the state changes",
        "To subscribe components to specific parts of the state",
        "To subscribe to action dispatches"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To attach a listener that will be called whenever the state changes",
        "difficulty": "medium",
        "explanation": "store.subscribe() registers a callback that will be called whenever an action is dispatched and the state changes. This is used internally by React-Redux, but can also be used directly to create store state listeners.",
        "hint": "It lets you know when something changes in the store."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the correct way to handle multiple related pieces of data in a Redux store?",
        "options": [
        "Create multiple stores, one for each data type",
        "Create a new React context for each data type",
        "Use a normalized state structure with entities and IDs",
        "Store each piece in a separate global variable"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use a normalized state structure with entities and IDs",
        "difficulty": "hard",
        "explanation": "For related data like users, posts, comments, etc., Redux recommends using a normalized state structure where items are stored in objects keyed by their IDs, with separate arrays of IDs for ordering. This prevents duplication and makes updates more efficient.",
        "hint": "This approach is inspired by database design principles."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the purpose of the \"action\" object in Redux?",
        "options": [
        "To execute state changes directly",
        "To describe what changes should happen to the state",
        "To create React components",
        "To connect to external APIs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To describe what changes should happen to the state",
        "difficulty": "easy",
        "explanation": "Redux actions are plain JavaScript objects that describe what change should happen to the state. They don't directly change state themselves, but are processed by reducers which create a new state based on the action.",
        "hint": "Actions are the 'what happened' part of Redux."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "When using Redux Toolkit, what's the purpose of the createAsyncThunk function?",
        "options": [
        "To create reducer functions",
        "To generate action types automatically",
        "To handle asynchronous operations with automatic loading, success, and error action dispatching",
        "To optimize performance of Redux applications"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To handle asynchronous operations with automatic loading, success, and error action dispatching",
        "difficulty": "hard",
        "explanation": "createAsyncThunk generates a thunk that dispatches lifecycle actions (pending/fulfilled/rejected) based on the returned promise. This simplifies handling async operations like API calls by automatically creating and dispatching the appropriate actions at each stage.",
        "hint": "It handles the three states of an async operation automatically."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "Which of the following is NOT a recommended way to structure Redux action types?",
        "options": [
        "domain/eventName (e.g., 'todos/todoAdded')",
        "SCREAMING_SNAKE_CASE (e.g., 'ADD_TODO')",
        "Using a random string for each action type",
        "Using a Symbol as an action type"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using a random string for each action type",
        "difficulty": "medium",
        "explanation": "Using random strings for action types would make debugging extremely difficult, as actions wouldn't have consistent, recognizable types. The other options are all valid approaches, with domain/eventName being recommended by Redux Toolkit.",
        "hint": "Think about what would make debugging and maintenance difficult."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "What is the purpose of the 'payload' property in a Redux action?",
        "options": [
        "It's required by Redux to identify the action",
        "It contains data needed for the state update",
        "It specifies which reducer should handle the action",
        "It's used for authentication with Redux"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It contains data needed for the state update",
        "difficulty": "easy",
        "explanation": "The 'payload' property is a convention in Redux for including data with an action. While not strictly required by Redux (only 'type' is required), it's a standard way to pass along the data needed for the reducer to update the state appropriately.",
        "hint": "It carries information needed to perform the state update."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Redux & State Management",
        "questionText": "In the following Redux Toolkit extraReducers configuration, what will happen when fetchUser.fulfilled action is dispatched?\n```javascript\nextraReducers: (builder) => {\n  builder\n    .addCase(fetchUser.pending, (state) => {\n      state.status = 'loading';\n    })\n    .addCase(fetchUser.fulfilled, (state, action) => {\n      state.status = 'idle';\n      state.user = action.payload;\n    })\n    .addCase(fetchUser.rejected, (state, action) => {\n      state.status = 'failed';\n      state.error = action.error.message;\n    });\n}\n```",
        "options": [
        "Nothing, the configuration is incorrect",
        "It will set status to 'idle' and update the user property with the payload data",
        "It will throw an error because you can't use builder.addCase",
        "It will dispatch another action automatically"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It will set status to 'idle' and update the user property with the payload data",
        "difficulty": "hard",
        "explanation": "When fetchUser.fulfilled action is dispatched, the corresponding reducer will run, setting the status to 'idle' and updating the user property in state with the data from action.payload. This is part of Redux Toolkit's createAsyncThunk pattern for handling async operations.",
        "hint": "Look at the specific reducer defined for the fulfilled case."
    },

    // Testing React Applications
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "Which testing library is most commonly paired with Jest for testing React components?",
        "options": ["Enzyme", "React Testing Library", "Mocha", "Chai"],
        "correctOptionIndex": 1,
        "correctOptionText": "React Testing Library",
        "difficulty": "easy",
        "explanation": "React Testing Library is currently the most commonly used library for testing React components. It encourages testing components based on how users interact with them rather than implementation details.",
        "hint": "This library focuses on testing from a user's perspective rather than implementation details."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is the main purpose of Jest's snapshot testing?",
        "options": ["To test API integration", "To verify component rendering hasn't changed unexpectedly", "To test performance", "To validate form submissions"],
        "correctOptionIndex": 1,
        "correctOptionText": "To verify component rendering hasn't changed unexpectedly",
        "difficulty": "easy",
        "explanation": "Snapshot testing captures the rendered output of a component and compares it to a previously saved 'snapshot'. This helps ensure that UI doesn't change unexpectedly between code changes.",
        "hint": "It helps detect unintended changes in rendered component output."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What does the `render` function from React Testing Library return?",
        "options": ["A Promise", "The component's props", "A collection of DOM querying utilities and rendered component", "Jest mock functions"],
        "correctOptionIndex": 2,
        "correctOptionText": "A collection of DOM querying utilities and rendered component",
        "difficulty": "medium",
        "explanation": "The `render` function returns an object with queries to find elements in the rendered component, along with other utilities for interacting with the rendered component.",
        "hint": "It provides methods to query and interact with the rendered component."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "Which of the following is NOT a query method in React Testing Library?",
        "options": ["getByText", "findByRole", "queryByLabel", "expectByTestId"],
        "correctOptionIndex": 3,
        "correctOptionText": "expectByTestId",
        "difficulty": "medium",
        "explanation": "React Testing Library provides query methods in three categories: getBy, findBy, and queryBy. 'expectByTestId' is not a valid query method.",
        "hint": "Think about the prefix patterns used in React Testing Library queries."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is the main difference between `getBy...` and `queryBy...` queries in React Testing Library?",
        "options": ["getBy queries are synchronous, queryBy are asynchronous", "getBy queries throw an error when no element is found, queryBy return null", "getBy can only query by text, queryBy can query by any attribute", "getBy are for functional components, queryBy for class components"],
        "correctOptionIndex": 1,
        "correctOptionText": "getBy queries throw an error when no element is found, queryBy return null",
        "difficulty": "medium",
        "explanation": "When an element isn't found, getBy queries throw an error, making them suitable for assertions about elements that should be present. queryBy queries return null, making them useful for asserting elements that should NOT be in the DOM.",
        "hint": "Think about their behavior when an element doesn't exist."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What does the `fireEvent` object in React Testing Library do?",
        "options": ["Prevents test errors", "Creates mock event handlers", "Simulates user interactions", "Checks component performance"],
        "correctOptionIndex": 2,
        "correctOptionText": "Simulates user interactions",
        "difficulty": "easy",
        "explanation": "The `fireEvent` object provides methods to simulate user interactions like clicks, form input, keyboard events, etc., allowing you to test how components respond to user behavior.",
        "hint": "It helps test how components respond when users do things like clicking buttons."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "When using Jest, what's the purpose of the `beforeEach` function?",
        "options": ["To run code before all tests in the file", "To run code before each individual test", "To define test prerequisites", "To initialize the testing environment"],
        "correctOptionIndex": 1,
        "correctOptionText": "To run code before each individual test",
        "difficulty": "easy",
        "explanation": "The `beforeEach` function runs before each test in a describe block, allowing you to set up a fresh testing environment for each test to avoid state sharing between tests.",
        "hint": "It helps set up consistent conditions for each individual test case."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is the primary benefit of using `@testing-library/user-event` over `fireEvent`?",
        "options": ["It's faster", "It more accurately simulates real user interactions", "It works with class components", "It supports animations"],
        "correctOptionIndex": 1,
        "correctOptionText": "It more accurately simulates real user interactions",
        "difficulty": "medium",
        "explanation": "`@testing-library/user-event` provides more realistic user event simulation than `fireEvent`. For example, `userEvent.type` will trigger input, keyDown, keyPress, and keyUp events just like a real user typing would, while `fireEvent.change` only triggers a single change event.",
        "hint": "It creates events that more closely match what happens when a real person interacts with the page."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is `waitFor` used for in React Testing Library?",
        "options": ["To pause test execution for a set time", "To wait for API responses", "To wait for assertions to pass within a timeout period", "To test loading states"],
        "correctOptionIndex": 2,
        "correctOptionText": "To wait for assertions to pass within a timeout period",
        "difficulty": "medium",
        "explanation": "`waitFor` allows you to wait for certain expectations to pass within a timeout period. This is useful for asynchronous operations where you don't know exactly when the UI will update.",
        "hint": "It helps with testing asynchronous UI updates by repeatedly checking until a condition is met."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What does the `screen` object in React Testing Library provide?",
        "options": ["A virtual DOM for testing", "Access to the browser window", "Pre-bound queries for the document body", "A mock of the React renderer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Pre-bound queries for the document body",
        "difficulty": "easy",
        "explanation": "The `screen` object provides pre-bound queries that are automatically bound to document.body, making it convenient to query elements without having to store and use the return value from `render`.",
        "hint": "It gives you a convenient way to search for elements in your rendered component."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "Which is the recommended query to use when testing accessibility in React?",
        "options": ["getByTestId", "getByClassName", "getByRole", "getBySelector"],
        "correctOptionIndex": 2,
        "correctOptionText": "getByRole",
        "difficulty": "medium",
        "explanation": "`getByRole` is recommended for testing accessibility because it queries elements by their ARIA role, promoting the creation of accessible components. It resembles how users using assistive technologies would interact with your app.",
        "hint": "This query relates to how screen readers and other assistive technologies identify elements."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is a test fixture in the context of React testing?",
        "options": ["A component reserved for testing", "A predefined set of data used for testing", "A testing utility in Jest", "A type of UI component"],
        "correctOptionIndex": 1,
        "correctOptionText": "A predefined set of data used for testing",
        "difficulty": "medium",
        "explanation": "A test fixture is a fixed state of the application or data used as a baseline for running tests. Fixtures help ensure tests are reliable and repeatable by providing consistent test data.",
        "hint": "It's something you set up before testing to ensure consistent conditions."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is the purpose of Jest's `mock` function?",
        "options": ["To render mock components", "To simulate browser events", "To create mock implementations of functions", "To bypass React's rendering process"],
        "correctOptionIndex": 2,
        "correctOptionText": "To create mock implementations of functions",
        "difficulty": "medium",
        "explanation": "Jest's `mock` function allows you to replace actual implementations with mock functions that you can track calls to, set return values for, and more. This is useful for isolating the code being tested.",
        "hint": "It helps simulate certain behaviors without executing the actual code."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is the recommended way to test a component that uses React context?",
        "options": ["Mock the context with Jest", "Use a real context provider in tests", "Avoid testing components with context", "Refactor to remove context dependency"],
        "correctOptionIndex": 1,
        "correctOptionText": "Use a real context provider in tests",
        "difficulty": "hard",
        "explanation": "The recommended approach is to wrap the component under test with the actual context provider and provide test values. This ensures the component interacts with context correctly and maintains the component's actual implementation.",
        "hint": "Think about how you would make context values available to a component in a real application."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What does the following test code do?\n```jsx\ntest('button click increments counter', async () => {\n  render(<Counter />);\n  const button = screen.getByRole('button', { name: /increment/i });\n  expect(screen.getByText('Count: 0')).toBeInTheDocument();\n  userEvent.click(button);\n  expect(screen.getByText('Count: 1')).toBeInTheDocument();\n});\n```",
        "options": ["Tests if a button exists", "Tests if clicking a button increments a counter", "Tests if the counter starts at 0", "Tests if the Counter component renders"],
        "correctOptionIndex": 1,
        "correctOptionText": "Tests if clicking a button increments a counter",
        "difficulty": "medium",
        "explanation": "This test renders a Counter component, finds a button with 'increment' in its accessible name, verifies the initial count is 0, simulates a click on the button, and then checks if the count has increased to 1.",
        "hint": "The test involves checking a value before and after a user interaction."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "When testing components that make API calls, what is the recommended approach?",
        "options": ["Disable API calls during tests", "Use the real API in tests", "Mock the API responses", "Skip testing components with API calls"],
        "correctOptionIndex": 2,
        "correctOptionText": "Mock the API responses",
        "difficulty": "medium",
        "explanation": "When testing components that make API calls, it's best to mock the API responses. This makes tests faster, more reliable (not dependent on external services), and allows testing different scenarios (success, error, loading states) easily.",
        "hint": "Think about how to make tests reliable and not dependent on external services."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "In Jest, what's the difference between `describe` and `it` (or `test`)?",
        "options": ["No difference, they're aliases", "`describe` groups related tests, while `it` defines individual test cases", "`describe` is for unit tests, `it` is for integration tests", "`describe` is synchronous, `it` is asynchronous"],
        "correctOptionIndex": 1,
        "correctOptionText": "`describe` groups related tests, while `it` defines individual test cases",
        "difficulty": "easy",
        "explanation": "`describe` is used to group related tests, providing organization and scope for setup/teardown functions. `it` (or its alias `test`) defines individual test cases that make specific assertions about your code.",
        "hint": "One is for organization, the other defines actual test cases."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What will the following code output when run as a test?\n```jsx\ntest('async test', async () => {\n  await waitFor(() => {\n    expect(1 + 1).toBe(3);\n  });\n  console.log('Test completed');\n});\n```",
        "options": ["'Test completed'", "Error: expect(2).toBe(3)", "Nothing, the test will time out", "Error: waitFor timed out"],
        "correctOptionIndex": 3,
        "correctOptionText": "Error: waitFor timed out",
        "difficulty": "hard",
        "explanation": "The test will fail with a timeout error from `waitFor`. Since 1+1 will never equal 3, the assertion will never pass, and `waitFor` will retry until it hits its timeout limit, then fail with a timeout error.",
        "hint": "Consider what happens when an assertion inside waitFor never becomes true."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What does the `rerender` function do in React Testing Library?",
        "options": ["Re-runs all tests", "Refreshes the browser page", "Re-renders a component with new props", "Resets the testing environment"],
        "correctOptionIndex": 2,
        "correctOptionText": "Re-renders a component with new props",
        "difficulty": "medium",
        "explanation": "The `rerender` function allows you to re-render the previously rendered component with different props. This is useful for testing how a component responds to prop changes without unmounting and remounting it.",
        "hint": "It helps test how components react to changing input values."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is the purpose of the `cleanup` function in React Testing Library?",
        "options": ["To reset mock functions", "To remove the rendered component from the DOM", "To clear test data", "To stop running tests"],
        "correctOptionIndex": 1,
        "correctOptionText": "To remove the rendered component from the DOM",
        "difficulty": "medium",
        "explanation": "`cleanup` unmounts components from the DOM and removes any components rendered via React Testing Library. It's automatically called after each test when using the React Testing Library setup with Jest, but can be called manually if needed.",
        "hint": "It helps prevent test environment pollution between tests."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "Why might a test using `findBy` queries fail with a timeout error?",
        "options": ["The element exists but takes too long to appear", "The element never appears in the DOM", "The test runner is configured incorrectly", "The component has an error"],
        "correctOptionIndex": 1,
        "correctOptionText": "The element never appears in the DOM",
        "difficulty": "medium",
        "explanation": "`findBy` queries are asynchronous and wait for an element to appear. If the element never appears in the DOM, the query will retry until it hits the timeout limit, then fail with a timeout error.",
        "hint": "Think about what these queries are waiting for and what happens if that condition is never met."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is a common way to test a React component that uses Redux?",
        "options": ["Avoid testing Redux components", "Test the Redux store separately from components", "Wrap components in a <Provider> with a test store", "Mock the connect HOC"],
        "correctOptionIndex": 2,
        "correctOptionText": "Wrap components in a <Provider> with a test store",
        "difficulty": "hard",
        "explanation": "When testing Redux-connected components, wrapping them in a Redux <Provider> with a test store allows you to test the component's interaction with Redux. You can create a test store with initial state and test how the component renders and responds to state changes.",
        "hint": "The component needs access to the Redux store during testing, just like in the real application."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What does the `act` function do in React testing?",
        "options": ["Simulates user actions", "Creates test actors", "Wraps code that causes React state updates", "Activates test mode"],
        "correctOptionIndex": 2,
        "correctOptionText": "Wraps code that causes React state updates",
        "difficulty": "hard",
        "explanation": "The `act` function ensures that all updates related to React component state and rendering are processed and applied before making assertions. It helps make tests more reliable by ensuring the DOM is updated before assertions are checked.",
        "hint": "It helps when testing code that triggers React state updates, ensuring everything is processed properly."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "When testing a custom hook, what is the recommended approach?",
        "options": ["Test the components that use the hook", "Use react-hooks-testing-library", "Can't test hooks directly", "Convert the hook to a class component"],
        "correctOptionIndex": 1,
        "correctOptionText": "Use react-hooks-testing-library",
        "difficulty": "hard",
        "explanation": "The `@testing-library/react-hooks` library provides utilities for testing hooks directly without needing to render a component. It allows you to call hooks within a test context and test their behavior, state updates, and effects.",
        "hint": "There's a specific library in the Testing Library family designed for this purpose."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "Which pattern is most effective for testing components that use React Router?",
        "options": ["Mock the useHistory hook", "Mock the entire react-router-dom module", "Wrap components in a <MemoryRouter>", "Avoid testing routed components"],
        "correctOptionIndex": 2,
        "correctOptionText": "Wrap components in a <MemoryRouter>",
        "difficulty": "hard",
        "explanation": "When testing components that use React Router, wrapping them in a <MemoryRouter> provides the routing context they need. MemoryRouter stores history in memory (rather than using the browser's history) which makes it ideal for testing.",
        "hint": "You need to provide a router context that doesn't depend on browser history."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is a test double in the context of testing?",
        "options": ["Running the same test twice", "A testing approach where two developers test the same code", "A generic term for test objects that stand in for real dependencies", "A duplicate test file"],
        "correctOptionIndex": 2,
        "correctOptionText": "A generic term for test objects that stand in for real dependencies",
        "difficulty": "hard",
        "explanation": "Test doubles are objects that stand in for real dependencies during testing. They include mocks, stubs, fakes, and spies. They help isolate the code being tested by controlling the behavior of dependencies.",
        "hint": "It's like a stunt double in movies - it stands in for something else during testing."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is Test-Driven Development (TDD) in the context of React?",
        "options": ["Writing tests for existing components", "A testing framework for React", "Writing tests before implementing components", "Testing components in production"],
        "correctOptionIndex": 2,
        "correctOptionText": "Writing tests before implementing components",
        "difficulty": "medium",
        "explanation": "Test-Driven Development is a development methodology where you write tests before implementing the actual code. In React, this means writing tests for components, hooks, or utilities before creating them, then implementing the code to make those tests pass.",
        "hint": "It follows a red-green-refactor cycle where failing tests come before working code."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is the primary goal of integration testing in React applications?",
        "options": ["Test individual functions in isolation", "Test how components work together", "Test the application's performance", "Test the application's UI design"],
        "correctOptionIndex": 1,
        "correctOptionText": "Test how components work together",
        "difficulty": "medium",
        "explanation": "Integration testing focuses on testing how different parts of your application work together. In React, this often means testing multiple components that interact with each other, ensuring they integrate properly.",
        "hint": "It tests the connections and interactions between different parts of your app."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "Which tool would you use for end-to-end testing of a React application?",
        "options": ["Jest", "React Testing Library", "Cypress", "Enzyme"],
        "correctOptionIndex": 2,
        "correctOptionText": "Cypress",
        "difficulty": "easy",
        "explanation": "Cypress is a popular tool for end-to-end testing of web applications, including React apps. It runs tests in a real browser environment and can interact with your application just like a real user would.",
        "hint": "This tool is specifically designed for testing the entire application flow in a real browser."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "What is a common issue when testing React components that use setTimeout or setInterval?",
        "options": ["They cause memory leaks in tests", "Jest doesn't support timing functions", "Tests may finish before timeout callbacks execute", "They make tests run too slowly"],
        "correctOptionIndex": 2,
        "correctOptionText": "Tests may finish before timeout callbacks execute",
        "difficulty": "hard",
        "explanation": "When testing components that use setTimeout or setInterval, tests might complete before the scheduled callbacks execute, leading to false negatives. This is usually addressed by using Jest's timer mocks (jest.useFakeTimers()) to control time in tests.",
        "hint": "Think about the asynchronous nature of these functions and how it might affect test execution."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Testing React Applications",
        "questionText": "In the following code, what is the purpose of `{ name: /increment/i }` in the getByRole call?\n```jsx\nconst button = screen.getByRole('button', { name: /increment/i });\n```",
        "options": ["To make the test case-insensitive", "To find a button with a name prop", "To find a button with accessible text matching 'increment'", "To find a button with ID 'increment'"],
        "correctOptionIndex": 2,
        "correctOptionText": "To find a button with accessible text matching 'increment'",
        "difficulty": "medium",
        "explanation": "The `name` option in getByRole refers to the accessible name of the element, which is typically the text content for buttons. The `/increment/i` is a case-insensitive regular expression that matches any button with text containing 'increment'.",
        "hint": "This helps find elements based on what a user (or screen reader) would perceive as their label or name."
    },

    // Performance Optimization
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What is the primary purpose of React.memo()?",
        "options": ["To store values in memory", "To prevent re-renders when props haven't changed", "To optimize state updates", "To memoize function calls"],
        "correctOptionIndex": 1,
        "correctOptionText": "To prevent re-renders when props haven't changed",
        "difficulty": "easy",
        "explanation": "React.memo() is a higher-order component that memoizes the rendered output of a component, preventing unnecessary re-renders when the props haven't changed. It performs a shallow comparison of props by default.",
        "hint": "Think about what happens when a parent component re-renders."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "When using the useCallback hook, what is being memoized?",
        "options": ["Component render output", "Hook return values", "Function definitions", "State values"],
        "correctOptionIndex": 2,
        "correctOptionText": "Function definitions",
        "difficulty": "easy",
        "explanation": "useCallback memoizes function definitions between renders. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",
        "hint": "It prevents a new instance of something from being created on every render."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What is the difference between useMemo and useCallback?",
        "options": ["useMemo is for class components, useCallback is for functional components", "useMemo memoizes values, useCallback memoizes functions", "useMemo is synchronous, useCallback is asynchronous", "useMemo is for React 18+, useCallback is for older versions"],
        "correctOptionIndex": 1,
        "correctOptionText": "useMemo memoizes values, useCallback memoizes functions",
        "difficulty": "medium",
        "explanation": "While both hooks help with memoization, useMemo returns a memoized value from a computation, whereas useCallback returns a memoized version of the callback function itself. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",
        "hint": "They both help with performance but cache different things."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which of the following is a valid use case for React.lazy()?",
        "options": ["Reducing the initial bundle size through code-splitting", "Lazy-loading data from an API", "Deferring state updates", "Making components load faster"],
        "correctOptionIndex": 0,
        "correctOptionText": "Reducing the initial bundle size through code-splitting",
        "difficulty": "medium",
        "explanation": "React.lazy() enables code-splitting by dynamically importing components only when they're needed. This helps reduce the initial bundle size of your application, improving load times by only loading the code required for the current view.",
        "hint": "Think about what happens to your JavaScript bundle when you use this feature."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What will happen with the following code when the count changes?\n```jsx\nfunction MyComponent({ count }) {\n  const expensiveValue = computeExpensiveValue(count);\n  return <div>{expensiveValue}</div>;\n}\n```",
        "options": ["The component will not re-render", "computeExpensiveValue will be called on every render", "React will optimize it automatically", "It will cause a memory leak"],
        "correctOptionIndex": 1,
        "correctOptionText": "computeExpensiveValue will be called on every render",
        "difficulty": "medium",
        "explanation": "Without memoization, the expensive computation will run on every render. To optimize this, you should wrap the computation in useMemo: useMemo(() => computeExpensiveValue(count), [count]). This ensures the expensive calculation only runs when count changes.",
        "hint": "There's no optimization in this code. What would happen in a normal JavaScript function execution?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which React DevTools feature helps identify components that are re-rendering too often?",
        "options": ["Elements panel", "Components panel", "Profiler", "Network tab"],
        "correctOptionIndex": 2,
        "correctOptionText": "Profiler",
        "difficulty": "easy",
        "explanation": "The React DevTools Profiler allows you to record performance information and visualize which components are rendering, how often they render, and how long they take to render. This helps identify components that are re-rendering unnecessarily.",
        "hint": "This tool shows you a timeline of component rendering activity."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What is the purpose of the 'key' prop when rendering lists in React?",
        "options": ["To provide CSS styling to list items", "To help React identify which items have changed, been added, or been removed", "To define the order of elements", "To pass data to child components"],
        "correctOptionIndex": 1,
        "correctOptionText": "To help React identify which items have changed, been added, or been removed",
        "difficulty": "easy",
        "explanation": "The 'key' prop helps React identify which items in a list have changed, been added, or been removed. This allows React to update only the components that have actually changed rather than re-rendering the entire list, resulting in better performance.",
        "hint": "It's related to React's reconciliation process for efficiently updating the DOM."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which prop can be passed to React.memo() to customize its comparison behavior?",
        "options": ["comparator", "shouldUpdate", "isEqual", "areEqual"],
        "correctOptionIndex": 3,
        "correctOptionText": "areEqual",
        "difficulty": "medium",
        "explanation": "React.memo() accepts a second parameter, a custom comparison function called areEqual. It has the signature (prevProps, nextProps) => boolean. Returning true means the component doesn't need to re-render. This allows you to implement custom logic for deciding when to skip renders.",
        "hint": "This function lets you define your own logic for determining if props are equivalent."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What is the main performance benefit of using a virtual DOM in React?",
        "options": ["It eliminates the need for JavaScript", "It reduces the number of actual DOM manipulations", "It makes components load faster", "It decreases the application bundle size"],
        "correctOptionIndex": 1,
        "correctOptionText": "It reduces the number of actual DOM manipulations",
        "difficulty": "easy",
        "explanation": "The virtual DOM allows React to batch and optimize updates to the actual DOM. React first updates its virtual representation of the DOM, calculates the most efficient way to update the real DOM, and then applies only the necessary changes. This reduces costly DOM manipulations, which are typically the slowest part of web applications.",
        "hint": "Direct manipulation of the browser's DOM is expensive. How does the virtual DOM help with this?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What performance issue might occur in this code?\n```jsx\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n      <ExpensiveChild doSomething={() => console.log('doing something')} />\n    </div>\n  );\n}\n```",
        "options": ["Memory leak", "Infinite loop", "Unnecessary re-renders of ExpensiveChild", "State update batching issues"],
        "correctOptionIndex": 2,
        "correctOptionText": "Unnecessary re-renders of ExpensiveChild",
        "difficulty": "medium",
        "explanation": "A new function reference for doSomething is created on every render of ParentComponent. Even if ExpensiveChild is wrapped in React.memo(), it will still re-render on every count change because the function reference changes. Fix this by using useCallback: const doSomething = useCallback(() => console.log('doing something'), []).",
        "hint": "Look at what happens to the callback prop when ParentComponent re-renders."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which of the following is NOT a valid strategy for optimizing React performance?",
        "options": ["Using the production build", "Implementing code-splitting with React.lazy()", "Memoizing expensive calculations with useMemo()", "Updating all components on every state change to ensure UI consistency"],
        "correctOptionIndex": 3,
        "correctOptionText": "Updating all components on every state change to ensure UI consistency",
        "difficulty": "easy",
        "explanation": "Updating all components on every state change goes against React's performance optimization principles. Instead, React uses a component-based architecture where only components affected by state changes should re-render. This selective updating is key to React's performance.",
        "hint": "Think about which approach would lead to the most unnecessary rendering work."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What performance problem might this pattern create?\n```jsx\nfunction SearchComponent() {\n  const [query, setQuery] = useState('');\n  \n  function handleChange(e) {\n    setQuery(e.target.value);\n    fetchSearchResults(e.target.value);\n  }\n  \n  return <input type=\"text\" value={query} onChange={handleChange} />;\n}\n```",
        "options": ["Memory leak", "Too many API calls on every keystroke", "React reconciliation errors", "Input lag from synchronous updates"],
        "correctOptionIndex": 1,
        "correctOptionText": "Too many API calls on every keystroke",
        "difficulty": "medium",
        "explanation": "This code calls fetchSearchResults on every keystroke, which can lead to a flood of API requests as the user types. To optimize this, implement debouncing or throttling to limit the rate of API calls. For example, use a library like lodash's debounce or the useDebounce hook from use-debounce.",
        "hint": "What happens if a user types quickly and each keystroke triggers a network request?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What is 'debouncing' in the context of React performance optimization?",
        "options": ["A way to reduce component nesting", "A technique to eliminate state updates", "Delaying the execution of a function until after a certain timeout", "Breaking up components into smaller pieces"],
        "correctOptionIndex": 2,
        "correctOptionText": "Delaying the execution of a function until after a certain timeout",
        "difficulty": "medium",
        "explanation": "Debouncing is a programming technique that limits how often a function can be executed. In React, it's commonly used to delay processing of events like input changes until the user has stopped typing, reducing the number of expensive operations (like API calls or heavy computations).",
        "hint": "It helps when you want to wait for a user to finish an action before responding to it."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which of these approaches would NOT help optimize a React application with many complex forms?",
        "options": ["Using a form library like Formik or React Hook Form", "Implementing controlled components for all inputs", "Using uncontrolled components with refs where appropriate", "Re-rendering the entire form on every keystroke"],
        "correctOptionIndex": 3,
        "correctOptionText": "Re-rendering the entire form on every keystroke",
        "difficulty": "medium",
        "explanation": "Re-rendering an entire complex form on every keystroke can lead to performance issues. Instead, optimizing forms involves strategies like isolating state updates to specific fields, using uncontrolled components where appropriate, or using specialized form libraries that implement optimizations internally.",
        "hint": "Think about which approach would cause the most rendering work as a user types."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What is the main benefit of using the React.PureComponent base class instead of React.Component?",
        "options": ["It has access to more lifecycle methods", "It implements shouldComponentUpdate with a shallow prop and state comparison", "It renders faster HTML", "It allows components to use hooks"],
        "correctOptionIndex": 1,
        "correctOptionText": "It implements shouldComponentUpdate with a shallow prop and state comparison",
        "difficulty": "medium",
        "explanation": "React.PureComponent implements shouldComponentUpdate with a shallow comparison of props and state. This prevents unnecessary re-renders when the props and state haven't changed, which can improve performance for components that render often with the same data.",
        "hint": "It's related to automatically preventing some re-renders in class components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "When implementing a virtualized list in React, what key performance problem are you solving?",
        "options": ["Slow API calls", "Inefficient state management", "Rendering too many DOM nodes at once", "Excessive CSS calculations"],
        "correctOptionIndex": 2,
        "correctOptionText": "Rendering too many DOM nodes at once",
        "difficulty": "medium",
        "explanation": "Virtualization techniques (using libraries like react-window or react-virtualized) solve the performance problem of rendering large lists by only rendering the items currently visible in the viewport. This dramatically reduces the number of DOM nodes created and managed, improving rendering performance and reducing memory usage.",
        "hint": "Think about what happens when you try to render thousands of items in a scrollable container."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What technique does this code demonstrate?\n```jsx\nconst MemoizedComponent = React.memo(({ value }) => {\n  return <div>{value}</div>;\n});\n\nfunction App() {\n  const [count, setCount] = useState(0);\n  const value = useMemo(() => expensiveComputation(), []);\n  \n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Click me: {count}</button>\n      <MemoizedComponent value={value} />\n    </div>\n  );\n}\n```",
        "options": ["Code splitting", "Component composition", "Memoization with dependency arrays", "Virtual DOM optimization"],
        "correctOptionIndex": 2,
        "correctOptionText": "Memoization with dependency arrays",
        "difficulty": "hard",
        "explanation": "This code demonstrates memoization with dependency arrays. The component is wrapped in React.memo() to prevent re-renders when props don't change. Additionally, useMemo() with an empty dependency array ensures expensiveComputation() only runs once during the initial render, not on subsequent re-renders when count changes.",
        "hint": "Look at how both the component and the calculation result are being cached."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What performance improvement technique is being used in this code?\n```jsx\nconst MyComponent = () => {\n  const [visible, setVisible] = useState(false);\n  \n  return (\n    <div>\n      <button onClick={() => setVisible(true)}>Show Content</button>\n      {visible && <ComplexComponent />}\n    </div>\n  );\n};\n```",
        "options": ["Memoization", "Code splitting", "Conditional rendering", "Virtualization"],
        "correctOptionIndex": 2,
        "correctOptionText": "Conditional rendering",
        "difficulty": "easy",
        "explanation": "This code uses conditional rendering to only render the ComplexComponent when it's needed (when visible is true). This improves performance by avoiding the rendering, mounting, and updating of components that aren't currently needed by the user.",
        "hint": "The component only appears under certain conditions, saving resources when it's not needed."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which of the following would be a valid reason to use React.lazy() and Suspense?",
        "options": ["To improve SEO", "To reduce the initial bundle size of your application", "To implement server-side rendering", "To optimize Redux state management"],
        "correctOptionIndex": 1,
        "correctOptionText": "To reduce the initial bundle size of your application",
        "difficulty": "medium",
        "explanation": "React.lazy() enables code splitting, allowing you to load components only when they're needed. When combined with Suspense, it provides a way to show a fallback UI while components are loading. This reduces the initial bundle size of your application, improving load times especially for larger applications.",
        "hint": "Think about what happens to your JavaScript bundle when you split it into smaller chunks."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What performance issue might occur in this code?\n```jsx\nfunction ListComponent({ items }) {\n  return (\n    <ul>\n      {items.map(item => (\n        <li>{item.name}</li>\n      ))}\n    </ul>\n  );\n}\n```",
        "options": ["Memory leaks", "Missing keys for list items", "Too many re-renders", "API request flooding"],
        "correctOptionIndex": 1,
        "correctOptionText": "Missing keys for list items",
        "difficulty": "easy",
        "explanation": "The code is missing the 'key' prop for each list item. Without keys, React has to re-render the entire list when items change, which can lead to performance issues and potential UI glitches. Adding a unique key to each item helps React identify which items have changed, been added, or been removed.",
        "hint": "React needs help tracking individual items when rendering arrays."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "In React 18, which new API helps optimize rendering of non-urgent updates?",
        "options": ["useReducer", "useTransition", "useQuery", "useOptimizer"],
        "correctOptionIndex": 1,
        "correctOptionText": "useTransition",
        "difficulty": "hard",
        "explanation": "In React 18, the useTransition hook allows you to mark state updates as non-urgent, letting React prioritize more important updates like user input. This helps keep your app responsive during expensive state transitions by letting React know which updates can be rendered with lower priority.",
        "hint": "This new hook is about managing the priority of state updates in concurrent mode."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which of the following is NOT a valid optimization for React Context performance?",
        "options": ["Splitting contexts by update frequency", "Using context selectors", "Memoizing context values", "Updating context on every render to ensure consistency"],
        "correctOptionIndex": 3,
        "correctOptionText": "Updating context on every render to ensure consistency",
        "difficulty": "hard",
        "explanation": "Updating context on every render defeats the purpose of optimization and would cause all consuming components to re-render unnecessarily. Valid optimization strategies include splitting contexts by update frequency (so infrequently updated values don't cause re-renders), using selectors to consume only needed values, and memoizing context values to prevent unnecessary updates.",
        "hint": "Think about which approach would cause the most unnecessary re-renders."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What's the primary reason to avoid using the index as a key in React lists?",
        "options": ["It makes the code less readable", "React documentation prohibits it", "It can lead to performance issues and bugs if items can be reordered or deleted", "Keys should always be strings, not numbers"],
        "correctOptionIndex": 2,
        "correctOptionText": "It can lead to performance issues and bugs if items can be reordered or deleted",
        "difficulty": "medium",
        "explanation": "Using an array index as a key can lead to performance issues and bugs when items can be reordered, added, or removed. If an item is removed from the beginning of the array, all subsequent items get a new index, causing React to unnecessarily re-render them all and potentially causing state issues. Always use stable, unique IDs as keys when possible.",
        "hint": "Think about what happens to indices when you insert or delete items from an array."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What optimization technique is demonstrated by this code?\n```jsx\nimport React, { Suspense } from 'react';\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nfunction App() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <LazyComponent />\n      </Suspense>\n    </div>\n  );\n}\n```",
        "options": ["Server-side rendering", "Code splitting", "Memoization", "Tree shaking"],
        "correctOptionIndex": 1,
        "correctOptionText": "Code splitting",
        "difficulty": "medium",
        "explanation": "This code demonstrates code splitting using React.lazy() and Suspense. The LazyComponent is only loaded when it's needed, not in the initial bundle. This reduces the initial load time of the application and improves performance, especially for larger applications with many components.",
        "hint": "This technique divides your JavaScript into smaller chunks that are loaded on demand."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What is the benefit of using the useId hook introduced in React 18?",
        "options": ["It generates optimized component IDs that improve rendering performance", "It creates unique IDs without causing hydration mismatches in server rendering", "It helps track component performance metrics", "It optimizes state updates in concurrent mode"],
        "correctOptionIndex": 1,
        "correctOptionText": "It creates unique IDs without causing hydration mismatches in server rendering",
        "difficulty": "hard",
        "explanation": "The useId hook in React 18 generates unique, stable IDs that are consistent between server and client rendering. This prevents hydration mismatches in server-side rendering scenarios, which would otherwise hurt performance and cause warnings or errors. Unlike manually created IDs or random generation approaches, useId is designed specifically to work with React's rendering model.",
        "hint": "It solves a problem related to generating consistent identifiers across server and client rendering."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What is 'component composition' and how does it relate to performance?",
        "options": ["Creating many small components to improve code organization", "Combining multiple components into one to reduce prop drilling", "Structuring components to minimize re-renders through strategic state placement", "Writing components in a functional style"],
        "correctOptionIndex": 2,
        "correctOptionText": "Structuring components to minimize re-renders through strategic state placement",
        "difficulty": "hard",
        "explanation": "Component composition as a performance optimization involves structuring your component hierarchy in a way that minimizes unnecessary re-renders. This includes strategies like lifting state up only as far as needed, using children props to avoid re-renders, isolating state changes to specific subtrees, and breaking up components based on update frequency.",
        "hint": "It's about how you organize and structure components to control when and where re-renders happen."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which tool would be most useful for identifying React performance bottlenecks in production?",
        "options": ["React DevTools Profiler", "Chrome DevTools Performance tab", "Lighthouse", "React.Profiler component with onRender callback"],
        "correctOptionIndex": 3,
        "correctOptionText": "React.Profiler component with onRender callback",
        "difficulty": "hard",
        "explanation": "The React.Profiler component with an onRender callback is designed for measuring performance in production builds. Unlike React DevTools which are primarily for development, the Profiler component can be conditionally included in production code to measure and report real-world performance metrics by wrapping sections of your app and collecting timing information.",
        "hint": "This tool can be used to collect performance measurements even in a production environment."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Why is it important to use the 'production' build of React for deployed applications?",
        "options": ["It includes additional features not available in development mode", "It removes development-only warnings, error checks, and debugging tools", "It makes the code more readable", "It enhances security features"],
        "correctOptionIndex": 1,
        "correctOptionText": "It removes development-only warnings, error checks, and debugging tools",
        "difficulty": "easy",
        "explanation": "The production build of React is significantly smaller and faster than the development build because it removes development-only warnings, prop-type validations, and debug tools. This results in less JavaScript to download, parse, and execute, improving the initial load time and runtime performance of your application.",
        "hint": "Think about what features might be in the development version that aren't needed in production."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "Which of the following would NOT help reduce the JavaScript bundle size of a React application?",
        "options": ["Using code splitting with React.lazy()", "Implementing tree shaking", "Using smaller libraries or alternatives", "Converting all class components to functional components"],
        "correctOptionIndex": 3,
        "correctOptionText": "Converting all class components to functional components",
        "difficulty": "medium",
        "explanation": "While functional components are often preferred in modern React code, simply converting class components to functional components doesn't necessarily reduce bundle size significantly. The other options - code splitting, tree shaking (removing unused code), and using smaller libraries - have a much more direct impact on reducing bundle size.",
        "hint": "Think about which strategy actually removes or delays loading code versus just changing the coding style."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What technique is shown in this code?\n```jsx\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  const [text, setText] = useState('');\n  \n  return (\n    <div>\n      <input value={text} onChange={e => setText(e.target.value)} />\n      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>\n      <ExpensiveList data={['static', 'data', 'array']} />\n    </div>\n  );\n}\n\nconst ExpensiveList = React.memo(function ExpensiveList({ data }) {\n  return (\n    <ul>\n      {data.map(item => <li key={item}>{item}</li>)}\n    </ul>\n  );\n});\n```",
        "options": ["Preventing unnecessary renders with static data and memoization", "Code splitting", "Controlled components", "Unidirectional data flow"],
        "correctOptionIndex": 0,
        "correctOptionText": "Preventing unnecessary renders with static data and memoization",
        "difficulty": "hard",
        "explanation": "This code demonstrates preventing unnecessary re-renders by combining React.memo with static data. The ExpensiveList component is wrapped in React.memo, and its props (the data array) are static and defined inline. Since the array reference never changes between renders of Parent, the ExpensiveList won't re-render when count or text state changes.",
        "hint": "Look at how the props passed to the memoized component are defined."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Performance Optimization",
        "questionText": "What potential performance issue exists in this code?\n```jsx\nfunction SearchResults({ query }) {\n  const [results, setResults] = useState([]);\n  \n  useEffect(() => {\n    fetch(`/api/search?q=${query}`)\n      .then(res => res.json())\n      .then(data => setResults(data));\n  }, [query]);\n  \n  return (\n    <ul>\n      {results.map(item => <li key={item.id}>{item.name}</li>)}\n    </ul>\n  );\n}\n```",
        "options": ["Memory leak from unmounted components", "Too many API calls for frequent query changes", "Inefficient list rendering", "Missing error handling"],
        "correctOptionIndex": 1,
        "correctOptionText": "Too many API calls for frequent query changes",
        "difficulty": "medium",
        "explanation": "This code triggers a new API call whenever the query changes, which could lead to too many requests if the user types quickly. To optimize this, you could implement debouncing to wait until the user has stopped typing before making the API call, or add throttling to limit the rate of API calls.",
        "hint": "Think about what happens if a user is quickly typing into a search box."
    },

    // Server-side Rendering
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the primary benefit of Server-Side Rendering in React applications?",
        "options": [
        "Reducing server load",
        "Improved initial load performance and SEO",
        "Simplifying component development",
        "Eliminating the need for client-side JavaScript"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improved initial load performance and SEO",
        "difficulty": "easy",
        "explanation": "Server-Side Rendering improves initial page load performance by delivering pre-rendered HTML to the client, which also makes content immediately available for search engine crawlers, enhancing SEO.",
        "hint": "Think about what users and search engines see when they first request a page."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "Which of the following is NOT a React framework that supports SSR?",
        "options": [
        "Next.js",
        "Gatsby",
        "Create React App",
        "Remix"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Create React App",
        "difficulty": "easy",
        "explanation": "Create React App is a toolchain for setting up React projects, but it does not support Server-Side Rendering out of the box. Next.js, Gatsby, and Remix all provide built-in SSR capabilities.",
        "hint": "Which option is primarily focused on client-side rendering?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "In Next.js, which file is used to define server-side rendering logic for a specific route?",
        "options": [
        "pages/[route].server.js",
        "pages/[route].ssr.js",
        "pages/[route].js",
        "server/[route].js"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "pages/[route].js",
        "difficulty": "easy",
        "explanation": "In Next.js, any component exported from a file in the 'pages' directory automatically becomes a route and can implement server-side rendering through functions like getServerSideProps or getStaticProps.",
        "hint": "Next.js uses a file-system based routing system."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What function is used in Next.js to fetch data on each request for server-side rendering?",
        "options": [
        "getStaticProps()",
        "getServerSideProps()",
        "fetchServerData()",
        "useServerEffect()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "getServerSideProps()",
        "difficulty": "easy",
        "explanation": "getServerSideProps() is a Next.js function that runs on every request, fetching data on the server before rendering the page, enabling true server-side rendering.",
        "hint": "Which function name explicitly references server-side props?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "Which of the following is NOT a benefit of Static Site Generation (SSG) compared to Server-Side Rendering (SSR)?",
        "options": [
        "Better performance for unchanged content",
        "Lower server costs",
        "Ability to update content without rebuilding",
        "Improved security"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Ability to update content without rebuilding",
        "difficulty": "medium",
        "explanation": "Static Site Generation requires rebuilding the site when content changes, unlike SSR which can render the latest content on each request. This is a limitation of SSG, not a benefit compared to SSR.",
        "hint": "Think about what happens when your content changes with each approach."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is hydration in the context of React server-side rendering?",
        "options": [
        "The process of optimizing server performance",
        "Adding styling to server-rendered components",
        "Attaching event listeners to server-rendered HTML",
        "Refreshing the server cache"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Attaching event listeners to server-rendered HTML",
        "difficulty": "medium",
        "explanation": "Hydration is the process where React attaches event listeners to the server-rendered HTML once it loads in the browser, making the static HTML interactive without re-rendering the entire DOM.",
        "hint": "What makes a static HTML page become interactive?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What happens if you use browser-specific APIs like 'window' or 'document' in component code that gets server-rendered?",
        "options": [
        "The server will automatically polyfill these APIs",
        "It will cause runtime errors during server rendering",
        "Next.js will automatically skip those parts during SSR",
        "It will work fine but show warnings in the console"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It will cause runtime errors during server rendering",
        "difficulty": "medium",
        "explanation": "Browser-specific APIs like 'window' or 'document' don't exist in the server environment, so using them directly in component code that's rendered on the server will cause runtime errors.",
        "hint": "Consider the different JavaScript environments on server versus browser."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the main difference between getStaticProps() and getServerSideProps() in Next.js?",
        "options": [
        "getStaticProps() runs at build time, while getServerSideProps() runs on each request",
        "getStaticProps() supports API calls, while getServerSideProps() doesn't",
        "getStaticProps() is for client components, while getServerSideProps() is for server components",
        "getStaticProps() provides more data, while getServerSideProps() is more limited"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "getStaticProps() runs at build time, while getServerSideProps() runs on each request",
        "difficulty": "medium",
        "explanation": "getStaticProps() runs at build time and generates static HTML, making it ideal for content that doesn't change often. getServerSideProps() runs on each request, enabling server-side rendering with fresh data every time.",
        "hint": "When does each function execute during the application lifecycle?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "In Next.js, what is Incremental Static Regeneration (ISR)?",
        "options": [
        "A technique for optimizing client-side rendering",
        "A way to partially update server-side rendered pages",
        "A method to regenerate static pages after deployment without rebuilding the entire site",
        "A database caching strategy for faster data retrieval"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A method to regenerate static pages after deployment without rebuilding the entire site",
        "difficulty": "medium",
        "explanation": "Incremental Static Regeneration allows Next.js to regenerate individual static pages on-demand after they've been deployed, combining the benefits of static generation (performance) with the ability to update content over time.",
        "hint": "Think about refreshing static content without a full rebuild."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What can cause hydration errors in React SSR applications?",
        "options": [
        "Using too many components",
        "Differences between server-rendered HTML and client React tree",
        "Slow network connections",
        "Using too many CSS styles"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Differences between server-rendered HTML and client React tree",
        "difficulty": "medium",
        "explanation": "Hydration errors occur when the React component tree that the client tries to attach to doesn't match the HTML structure that was rendered on the server, which can happen with dynamic content or when using browser-specific logic incorrectly.",
        "hint": "What happens when the client and server render different content?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the correct way to safely access browser APIs in a Next.js component that gets server-rendered?",
        "options": [
        "Use a polyfill for all browser APIs",
        "Add a try/catch around all browser API calls",
        "Use useEffect or componentDidMount hooks for browser-only code",
        "Import a server-side version of the browser APIs"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use useEffect or componentDidMount hooks for browser-only code",
        "difficulty": "medium",
        "explanation": "useEffect and componentDidMount hooks only run on the client after the component has mounted, so they're safe places to put browser-specific code in components that also get server-rendered.",
        "hint": "Which React features only execute on the client side?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What does the following Next.js code primarily achieve?\n```javascript\nexport async function getStaticPaths() {\n  return {\n    paths: [\n      { params: { id: '1' } },\n      { params: { id: '2' } }\n    ],\n    fallback: 'blocking'\n  }\n}\n```",
        "options": [
        "It defines server-side routes for API endpoints",
        "It pre-renders specific dynamic routes at build time",
        "It creates a caching strategy for specific resources",
        "It sets up redirects for legacy URLs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It pre-renders specific dynamic routes at build time",
        "difficulty": "medium",
        "explanation": "The getStaticPaths function tells Next.js which dynamic routes (with params id: '1' and id: '2') should be pre-rendered at build time. The 'blocking' fallback means other paths will be server-rendered on first request.",
        "hint": "This function is used with dynamic routes and static generation."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the 'fallback' property in getStaticPaths used for in Next.js?",
        "options": [
        "To provide a default page when routes don't match",
        "To configure error handling for failed data fetching",
        "To determine what happens with paths not generated at build time",
        "To set up a redirects system for deprecated routes"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To determine what happens with paths not generated at build time",
        "difficulty": "medium",
        "explanation": "The 'fallback' property controls what happens when a user requests a page that wasn't pre-rendered at build time. Options include false (404 error), true (render fallback UI, then generate page), or 'blocking' (server-render on first request).",
        "hint": "Think about dynamic paths that weren't specified explicitly in getStaticPaths."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What does the 'revalidate' property do in Next.js getStaticProps?",
        "options": [
        "Validates user input on forms",
        "Checks data integrity from APIs",
        "Enables automatic re-generation of static pages after a specific time period",
        "Verifies component prop types at runtime"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Enables automatic re-generation of static pages after a specific time period",
        "difficulty": "medium",
        "explanation": "The 'revalidate' property in getStaticProps enables Incremental Static Regeneration, allowing Next.js to regenerate the static page after the specified number of seconds, keeping content fresh without rebuilding the entire site.",
        "hint": "How can static content be updated without a full site rebuild?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the purpose of Next.js's 'getInitialProps' and why is it considered legacy?",
        "options": [
        "It's for client-side data fetching and is legacy because it's slower than useEffect",
        "It's for server-side rendering and is legacy because newer APIs provide better granularity",
        "It's for route configuration and is legacy because file-based routing is now preferred",
        "It's for CSS-in-JS and is legacy because CSS Modules are now recommended"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It's for server-side rendering and is legacy because newer APIs provide better granularity",
        "difficulty": "hard",
        "explanation": "getInitialProps was Next.js's original data fetching method for SSR, but it's now considered legacy because newer methods like getStaticProps and getServerSideProps provide more granular control over rendering strategies and better performance optimizations.",
        "hint": "Consider how this function compares to the newer data fetching methods."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What problem does this Next.js code solve?\n```javascript\nimport dynamic from 'next/dynamic'\n\nconst ClientOnlyComponent = dynamic(\n  () => import('../components/ClientComponent'),\n  { ssr: false }\n)\n```",
        "options": [
        "It delays loading of large components to improve performance",
        "It prevents server-side rendering of components that use browser-only APIs",
        "It encrypts sensitive component code on the server",
        "It creates a separate bundle for mobile devices"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It prevents server-side rendering of components that use browser-only APIs",
        "difficulty": "hard",
        "explanation": "This code uses Next.js's dynamic imports with the { ssr: false } option to prevent a component from being rendered on the server. This is useful for components that rely on browser-only APIs (like window or document) that would cause errors during server rendering.",
        "hint": "What would happen if a component that uses browser APIs was rendered on the server?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "In a Next.js application, what's the difference between using getStaticProps with a revalidate value versus using getServerSideProps?",
        "options": [
        "There's no real difference; they're just alternative syntaxes",
        "getStaticProps with revalidate serves cached content until revalidation, while getServerSideProps renders fresh on every request",
        "getStaticProps with revalidate works only with API routes, while getServerSideProps works with page routes",
        "getStaticProps with revalidate is client-side only, while getServerSideProps is server-side only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "getStaticProps with revalidate serves cached content until revalidation, while getServerSideProps renders fresh on every request",
        "difficulty": "hard",
        "explanation": "getStaticProps with revalidate implements Incremental Static Regeneration, serving cached static HTML until the revalidation period expires, then regenerating in the background. getServerSideProps always renders fresh content on each request, making it more dynamic but potentially slower.",
        "hint": "Consider the caching behavior and when the rendering happens in each approach."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the primary challenge of managing state in server-rendered React applications?",
        "options": [
        "Server-side code can't access the Redux store",
        "React hooks don't work in server environments",
        "Initial state on the server must match what the client will hydrate",
        "Server-rendered components can't use the Context API"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Initial state on the server must match what the client will hydrate",
        "difficulty": "hard",
        "explanation": "In server-rendered React apps, the state used during server rendering must match the initial state used for hydration on the client. If they don't match, React will warn about hydration mismatches and may need to re-render components, defeating some of the benefits of SSR.",
        "hint": "Think about what happens during the hydration process if states don't align."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the correct way to handle cookies or authentication in getServerSideProps?",
        "options": [
        "Use the document.cookie API directly",
        "Access the request object and its cookies property",
        "Import a cookie library in the component",
        "Use window.localStorage to retrieve auth tokens"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Access the request object and its cookies property",
        "difficulty": "hard",
        "explanation": "In getServerSideProps, you have access to the request object which contains headers and cookies. You can access cookies through request.cookies to handle authentication or other cookie-based functionality on the server.",
        "hint": "getServerSideProps receives a context parameter with HTTP-related objects."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the purpose of the '_document.js' file in Next.js?",
        "options": [
        "To define global CSS styles",
        "To customize the server-rendered HTML structure",
        "To configure API routes",
        "To set up client-side routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To customize the server-rendered HTML structure",
        "difficulty": "hard",
        "explanation": "The '_document.js' file in Next.js allows you to customize the server-rendered HTML document structure, including elements like <html>, <head>, and <body>. It's commonly used to add language attributes, custom fonts, or third-party scripts that need to be present in the initial HTML.",
        "hint": "Think about the HTML that wraps your entire React application."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "Which of the following is a key disadvantage of Server-Side Rendering compared to Client-Side Rendering?",
        "options": [
        "Poorer SEO performance",
        "Slower initial page load",
        "Higher server load and cost",
        "Less interactive user interfaces"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Higher server load and cost",
        "difficulty": "hard",
        "explanation": "Server-Side Rendering requires more server resources since the server has to render the full page HTML for each request, rather than sending a minimal HTML file and letting the client handle rendering. This can lead to higher server costs, especially for high-traffic applications.",
        "hint": "Consider where the computational work happens in each approach."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the concept of 'streaming SSR' in modern React frameworks?",
        "options": [
        "Using video streams alongside React components",
        "Progressively sending HTML chunks to the client as they're generated",
        "A technique for streaming data between server and client during hydration",
        "A method for streaming CSS assets to improve rendering performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Progressively sending HTML chunks to the client as they're generated",
        "difficulty": "hard",
        "explanation": "Streaming SSR allows the server to send HTML chunks to the client as they become available, rather than waiting for the entire page to render. This improves Time To First Byte and allows the browser to start processing parts of the page earlier, improving perceived performance.",
        "hint": "How might you improve the delivery of server-rendered content without waiting for everything to complete?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "Which statement about React 18's Suspense with SSR is correct?",
        "options": [
        "It's only available in client-side rendering",
        "It allows selective hydration of different parts of the page",
        "It's primarily used for code-splitting in SSR",
        "It requires Redux to function properly"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It allows selective hydration of different parts of the page",
        "difficulty": "hard",
        "explanation": "React 18 introduced Suspense-enabled SSR, which allows for selective hydration of different parts of the page. This means less important parts can be hydrated later, letting critical UI become interactive faster, improving user experience.",
        "hint": "What new capability does Suspense bring to the hydration process?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What does this Next.js code accomplish?\n```javascript\nexport default function MyPage({ products }) {\n  return <ProductList products={products} />;\n}\n\nexport async function getStaticProps() {\n  const res = await fetch('https://api.example.com/products');\n  const products = await res.json();\n  \n  return {\n    props: { products },\n    revalidate: 60\n  };\n}\n```",
        "options": [
        "Client-side fetching of products every 60 seconds",
        "Server-side rendering of products on each request",
        "Static generation with data revalidation every 60 seconds",
        "API route creation for product data"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Static generation with data revalidation every 60 seconds",
        "difficulty": "hard",
        "explanation": "This code implements Incremental Static Regeneration (ISR) in Next.js. It statically generates the page with product data at build time, then revalidates and regenerates the page in the background at most once every 60 seconds if the page is requested.",
        "hint": "Look closely at the revalidate property and what it controls."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is the purpose of Next.js's 'next/script' component?",
        "options": [
        "To optimize JavaScript bundle size",
        "To control how external scripts load with SSR",
        "To transform JSX into JavaScript",
        "To enable TypeScript support"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To control how external scripts load with SSR",
        "difficulty": "hard",
        "explanation": "The 'next/script' component in Next.js provides control over how external scripts are loaded and executed in an SSR context. It offers options like 'beforeInteractive', 'afterInteractive', and 'lazyOnload' to optimize when scripts load relative to page rendering and hydration.",
        "hint": "Consider the challenges of loading third-party scripts in a server-rendered application."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "In Next.js, what is the primary difference between 'pages' and 'app' directory for routing?",
        "options": [
        "The 'pages' directory is for static pages, while 'app' is for dynamic pages",
        "The 'pages' directory uses the older Pages Router, while 'app' uses the newer App Router with RSC support",
        "The 'pages' directory is for client components, while 'app' is for server components",
        "There is no difference; they're alternative naming conventions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The 'pages' directory uses the older Pages Router, while 'app' uses the newer App Router with RSC support",
        "difficulty": "hard",
        "explanation": "Next.js 13+ introduced the App Router using the 'app' directory, which supports React Server Components, parallel routes, and other advanced features. The 'pages' directory uses the original Pages Router, which has a different routing system and data fetching approach.",
        "hint": "This relates to a major architectural change introduced in Next.js 13."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What is a React Server Component and how does it differ from traditional SSR?",
        "options": [
        "Server Components run on both client and server; traditional SSR only runs on the server",
        "Server Components are just a marketing term for traditional SSR with no technical differences",
        "Server Components never hydrate on the client; traditional SSR components render on server then hydrate on client",
        "Server Components only work with GraphQL; traditional SSR works with any data source"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Server Components never hydrate on the client; traditional SSR components render on server then hydrate on client",
        "difficulty": "hard",
        "explanation": "React Server Components represent a fundamental shift from traditional SSR. They execute exclusively on the server and stream their output to the client without JavaScript, eliminating hydration costs. Traditional SSR renders on the server but still sends component JavaScript for client-side hydration.",
        "hint": "Think about what happens with the JavaScript for each component type."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "What technique does this Next.js code implement?\n```javascript\nimport { useRouter } from 'next/router'\n\nexport default function Page({ fallback }) {\n  const router = useRouter()\n  \n  // If the page is not yet generated, this will be displayed initially\n  if (router.isFallback) {\n    return <LoadingComponent />\n  }\n\n  // Normal render\n  return <ProductDetails {...fallback} />\n}\n```",
        "options": [
        "Server-side error handling",
        "Client-side routing with transitions",
        "Fallback UI for Incremental Static Generation",
        "Suspense-based code splitting"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Fallback UI for Incremental Static Generation",
        "difficulty": "hard",
        "explanation": "This code implements a fallback UI for Incremental Static Generation in Next.js. When getStaticPaths has fallback: true and a user visits a path not generated at build time, router.isFallback will be true, allowing you to show a loading state while the page is generated on-demand.",
        "hint": "What does router.isFallback indicate in Next.js?"
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Server-Side Rendering",
        "questionText": "In Next.js with App Router, what's the difference between a Client Component and a Server Component?",
        "options": [
        "Client Components only render on the client; Server Components render on both server and client",
        "Client Components can use hooks and interactivity; Server Components cannot use React hooks or browser APIs",
        "Client Components handle routing; Server Components handle data fetching",
        "There's no difference; they're just naming conventions for organizational purposes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Client Components can use hooks and interactivity; Server Components cannot use React hooks or browser APIs",
        "difficulty": "hard",
        "explanation": "In Next.js App Router, Server Components render only on the server and can access server resources directly but cannot use React hooks or browser APIs. Client Components are marked with 'use client' directive, can use React hooks and browser APIs, and enable interactivity.",
        "hint": "Consider what capabilities are unique to each component type in terms of React features."
    },

    // Advanced Patterns
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the primary purpose of the Render Props pattern in React?",
        "options": [
        "To optimize component rendering performance",
        "To share code between components by passing a function as a prop",
        "To create consistent styling across components",
        "To manage global state without using Redux"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To share code between components by passing a function as a prop",
        "difficulty": "easy",
        "explanation": "The Render Props pattern allows components to share code by passing a function prop that returns a React element. This pattern enables the sharing of state and behavior without using inheritance or duplicating code.",
        "hint": "Think about how this pattern allows for code reuse between components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "Which React pattern uses components as children of a wrapper component to create a cohesive API?",
        "options": [
        "Higher-Order Components",
        "Render Props",
        "Compound Components",
        "Container-Presenter Pattern"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Compound Components",
        "difficulty": "easy",
        "explanation": "Compound Components is a pattern where components are designed to work together, with a parent component managing shared state and providing context to child components that are usually used together to create a cohesive component API.",
        "hint": "This pattern is often used for complex UI elements like tabs, select dropdowns, or accordions."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is a Higher-Order Component (HOC) in React?",
        "options": [
        "A component that renders faster than regular components",
        "A function that takes a component and returns a new enhanced component",
        "A component that uses the newest React features",
        "A component that can render both on server and client"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A function that takes a component and returns a new enhanced component",
        "difficulty": "easy",
        "explanation": "A Higher-Order Component is a function that takes a component as input and returns a new component with enhanced functionality. This pattern is used for cross-cutting concerns like adding authentication, data fetching, or logging capabilities to multiple components.",
        "hint": "Think about component composition and how functionality can be wrapped around existing components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "In the following code snippet, what pattern is being implemented?\n```jsx\nfunction withUser(Component) {\n  return function(props) {\n    const user = useContext(UserContext);\n    return <Component user={user} {...props} />;\n  };\n}\n\nconst ProfilePage = withUser(UserProfile);\n```",
        "options": [
        "Render Props",
        "Higher-Order Component",
        "Compound Component",
        "Custom Hook"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Higher-Order Component",
        "difficulty": "easy",
        "explanation": "This code implements the Higher-Order Component (HOC) pattern. The 'withUser' function takes a component as an argument and returns a new component that adds user data from context to the wrapped component's props.",
        "hint": "Look at the function signature and what it returns."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the primary benefit of using Custom Hooks over Render Props or HOCs?",
        "options": [
        "Custom Hooks run faster than other patterns",
        "Custom Hooks work with class components",
        "Custom Hooks result in cleaner component trees and better composition",
        "Custom Hooks automatically memoize their results"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Custom Hooks result in cleaner component trees and better composition",
        "difficulty": "medium",
        "explanation": "Custom Hooks provide a cleaner way to share stateful logic between components compared to HOCs or Render Props. They don't create extra components in the tree, allow for better composition of multiple hooks, and result in more readable component code.",
        "hint": "Think about what happens to the component tree with each pattern."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What pattern is demonstrated in this code?\n```jsx\nfunction Mouse(props) {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n  \n  useEffect(() => {\n    const handleMouseMove = (event) => {\n      setPosition({ x: event.clientX, y: event.clientY });\n    };\n    \n    window.addEventListener('mousemove', handleMouseMove);\n    return () => window.removeEventListener('mousemove', handleMouseMove);\n  }, []);\n  \n  return props.render(position);\n}\n\n// Usage\n<Mouse render={position => (\n  <p>Mouse position: {position.x}, {position.y}</p>\n)} />\n```",
        "options": [
        "Higher-Order Component",
        "Render Props",
        "Compound Component",
        "Container/Presenter Pattern"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Render Props",
        "difficulty": "medium",
        "explanation": "This code demonstrates the Render Props pattern. The Mouse component tracks mouse position state and passes it to a function provided via props.render, allowing the parent component to determine what to render with that data.",
        "hint": "Notice how the component receives a function through props that determines what to render."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the main disadvantage of using multiple Higher-Order Components to compose functionality?",
        "options": [
        "They make debugging more difficult with deep component nesting",
        "They require class components and cannot be used with hooks",
        "They always cause performance issues",
        "They cannot share data between each other"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "They make debugging more difficult with deep component nesting",
        "difficulty": "medium",
        "explanation": "Using multiple Higher-Order Components leads to 'wrapper hell' or deep component nesting, which makes debugging more difficult as error traces become harder to follow, and it can be unclear which HOC is providing which props.",
        "hint": "Consider what happens to your component tree when you apply multiple HOCs to a component."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "Which pattern is being implemented in this code?\n```jsx\nconst Tabs = ({ children, defaultIndex = 0 }) => {\n  const [activeIndex, setActiveIndex] = useState(defaultIndex);\n  \n  const context = {\n    activeIndex,\n    setActiveIndex\n  };\n  \n  return (\n    <TabsContext.Provider value={context}>\n      <div className=\"tabs\">{children}</div>\n    </TabsContext.Provider>\n  );\n};\n\nTabs.Tab = ({ children, index }) => {\n  const { activeIndex, setActiveIndex } = useContext(TabsContext);\n  \n  return (\n    <div \n      className={`tab ${activeIndex === index ? 'active' : ''}`}\n      onClick={() => setActiveIndex(index)}\n    >\n      {children}\n    </div>\n  );\n};\n\nTabs.Panel = ({ children, index }) => {\n  const { activeIndex } = useContext(TabsContext);\n  \n  return activeIndex === index ? (\n    <div className=\"panel\">{children}</div>\n  ) : null;\n};\n```",
        "options": [
        "Higher-Order Component",
        "Render Props",
        "Compound Components",
        "State Reducer"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Compound Components",
        "difficulty": "medium",
        "explanation": "This code implements the Compound Components pattern. The Tabs component and its associated Tab and Panel components work together, sharing state through context. The parent Tabs component manages state while child components (accessed as Tabs.Tab and Tabs.Panel) consume the context.",
        "hint": "Look at how the components are structured as properties on a parent component and share context."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the State Reducer pattern in React?",
        "options": [
        "A way to replace Redux with React's built-in state management",
        "A pattern that allows consumers to customize a component's state logic by providing a reducer function",
        "A method to reduce the initial state size for performance optimization",
        "A technique for combining multiple useState hooks into a single state object"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A pattern that allows consumers to customize a component's state logic by providing a reducer function",
        "difficulty": "medium",
        "explanation": "The State Reducer pattern gives consumers control over a component's internal state management by allowing them to provide a custom reducer function. This enables them to intercept and modify state updates, adding custom logic or overriding default behavior while preserving the component's core functionality.",
        "hint": "Think about how this pattern gives control to component consumers rather than keeping all state logic internal."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the primary purpose of the Container/Presenter pattern (also known as Smart/Dumb components)?",
        "options": [
        "To improve performance by reducing re-renders",
        "To separate data fetching and state management from presentation logic",
        "To create responsive components that adapt to different screen sizes",
        "To implement code-splitting for faster initial loads"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To separate data fetching and state management from presentation logic",
        "difficulty": "medium",
        "explanation": "The Container/Presenter pattern separates components into two types: containers that handle data fetching and state management, and presentational components that focus on how things look. This separation of concerns makes components more reusable and easier to test.",
        "hint": "This pattern is about separation of concerns between different aspects of component functionality."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "In the Context Module Function pattern, where should complex state update logic be placed?",
        "options": [
        "Inside useEffect hooks in consumer components",
        "In separate reducer functions outside of components",
        "Inside dedicated functions exported from the context module",
        "In event handler functions within the component"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Inside dedicated functions exported from the context module",
        "difficulty": "medium",
        "explanation": "The Context Module Function pattern places complex state update logic in dedicated functions that are exported from the same module as the context provider. This encapsulates the implementation details of state updates while providing a clean API for consumers to call.",
        "hint": "This pattern is about abstracting away complex state logic from both providers and consumers."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What pattern is demonstrated in this code?\n```jsx\n// Usage\nfunction App() {\n  return (\n    <Select \n      items={['Apple', 'Orange', 'Banana']}\n      onSelect={item => console.log(item)}\n    >\n      <Select.Trigger className=\"trigger\" />\n      <Select.Menu>\n        {(item) => <Select.Item value={item}>{item}</Select.Item>}\n      </Select.Menu>\n    </Select>\n  );\n}\n```",
        "options": [
        "Higher-Order Component",
        "Controlled Component",
        "Compound Component with Render Props",
        "Container/Presenter Pattern"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Compound Component with Render Props",
        "difficulty": "medium",
        "explanation": "This code demonstrates a combination of Compound Components and Render Props patterns. It uses Compound Components structure with Select.Trigger and Select.Menu as related components, while also using a render prop function within Select.Menu to render each item.",
        "hint": "Look at both how the components are structured as properties and how some components receive functions that render content."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the Props Getters pattern (also known as Prop Collection)?",
        "options": [
        "A way to dynamically fetch props from an API",
        "A pattern that provides functions that return props to apply to specific elements",
        "A method to validate component props against a schema",
        "A technique to combine props from multiple HOCs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A pattern that provides functions that return props to apply to specific elements",
        "difficulty": "hard",
        "explanation": "The Props Getters pattern provides functions (often named like getButtonProps, getInputProps) that return collections of props to be spread onto specific elements. This pattern allows components to expose the right props for different elements while allowing users to extend or override them.",
        "hint": "This pattern is commonly used in headless UI libraries to provide both correct behavior and customization options."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What pattern is demonstrated by this code?\n```jsx\nfunction useToggle(initialState = false) {\n  const [state, setState] = useState(initialState);\n  \n  const toggle = useCallback(() => {\n    setState(s => !s);\n  }, []);\n  \n  const getTogglerProps = useCallback(({ onClick, ...props } = {}) => ({\n    'aria-pressed': state,\n    onClick: callAll(toggle, onClick),\n    ...props\n  }), [state, toggle]);\n  \n  return {\n    on: state,\n    toggle,\n    getTogglerProps\n  };\n}\n\n// Usage\nfunction App() {\n  const { on, getTogglerProps } = useToggle();\n  return (\n    <div>\n      <button {...getTogglerProps()}>Toggle: {on ? 'ON' : 'OFF'}</button>\n      <button {...getTogglerProps({ 'aria-label': 'custom toggler' })}>Custom</button>\n    </div>\n  );\n}\n```",
        "options": [
        "Compound Components",
        "Controlled Components",
        "Props Getters / Prop Collections",
        "State Reducer"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Props Getters / Prop Collections",
        "difficulty": "hard",
        "explanation": "This code demonstrates the Props Getters pattern. The useToggle hook returns a getTogglerProps function that provides a collection of props to be spread onto elements. It handles merging user-provided props with the internal functionality, allowing for customization while maintaining the core toggle behavior.",
        "hint": "Notice how the hook returns a function that generates props to be spread onto elements."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the Control Props pattern in React?",
        "options": [
        "A way to control which props are passed to child components",
        "A pattern where a component allows external control of its state via props",
        "A method to validate props before they're used",
        "A technique to optimize prop updates for better performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A pattern where a component allows external control of its state via props",
        "difficulty": "hard",
        "explanation": "The Control Props pattern allows components to be either internally controlled (managing their own state) or externally controlled (having their state managed by a parent component through props). This is similar to controlled vs. uncontrolled form inputs but applied to complex components.",
        "hint": "This pattern is an extension of React's controlled vs. uncontrolled input concept to more complex components."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the State Initializer pattern?",
        "options": [
        "A way to set default state values in class components",
        "A pattern allowing consumers to set initial state and reset to that state later",
        "A method to initialize state from localStorage or other persistent storage",
        "A technique to generate initial state based on props"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A pattern allowing consumers to set initial state and reset to that state later",
        "difficulty": "hard",
        "explanation": "The State Initializer pattern allows components or hooks to accept initial state values from consumers and provides a way to reset state back to those initial values. This is useful for components that need to be reset to a fresh state, like forms or wizards.",
        "hint": "This pattern involves both setting initial values and providing a reset mechanism."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What React pattern is being implemented in this code?\n```jsx\nfunction useToggle({\n  initialOn = false,\n  reducer = (state, action) => {\n    switch (action.type) {\n      case 'toggle': return { on: !state.on };\n      case 'reset': return { on: action.initialState };\n      default: return state;\n    }\n  }\n} = {}) {\n  const initialState = { on: initialOn };\n  const [state, dispatch] = useReducer(reducer, initialState);\n  \n  const toggle = () => dispatch({ type: 'toggle' });\n  const reset = () => dispatch({ type: 'reset', initialState: initialOn });\n  \n  return [state.on, { toggle, reset }];\n}\n```",
        "options": [
        "Custom Hook",
        "Control Props",
        "State Reducer",
        "Props Getters"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "State Reducer",
        "difficulty": "hard",
        "explanation": "This code implements the State Reducer pattern. It allows consumers to provide a custom reducer function that can override or extend the default state update logic of the toggle component, giving them control over how state transitions work.",
        "hint": "Notice how the component accepts an optional custom reducer that can override the default behavior."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What pattern is being implemented in this code?\n```jsx\nfunction useCounter(initialCount = 0) {\n  const [count, setCount] = useState(initialCount);\n  \n  const increment = () => setCount(c => c + 1);\n  const decrement = () => setCount(c => c - 1);\n  const reset = () => setCount(initialCount);\n  \n  return {\n    count,\n    increment,\n    decrement,\n    reset\n  };\n}\n\nfunction CounterDisplay() {\n  const counter = useCounter(10);\n  \n  return (\n    <div>\n      <div>Count: {counter.count}</div>\n      <button onClick={counter.increment}>+</button>\n      <button onClick={counter.decrement}>-</button>\n      <button onClick={counter.reset}>Reset</button>\n    </div>\n  );\n}\n```",
        "options": [
        "Higher-Order Component",
        "Render Props",
        "Custom Hook with State Initializer",
        "Container/Presenter Pattern"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Custom Hook with State Initializer",
        "difficulty": "hard",
        "explanation": "This code implements a Custom Hook with the State Initializer pattern. The useCounter hook accepts an initialCount parameter to set the initial state and provides a reset function that returns to that initial state, allowing the component to be reset to its starting condition.",
        "hint": "Notice how the initial value is both used to set the first state and to reset back to later."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the purpose of the Context Module Function pattern?",
        "options": [
        "To optimize context performance with memoization",
        "To include non-React code in context providers",
        "To expose actions that encapsulate complex state updates without exposing the implementation details",
        "To create isolated context instances for different parts of the application"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To expose actions that encapsulate complex state updates without exposing the implementation details",
        "difficulty": "hard",
        "explanation": "The Context Module Function pattern encapsulates complex state update logic in functions exported from a context module rather than exposing dispatch or setState directly. This creates a cleaner API for consumers, hides implementation details, and centralizes related logic in one place.",
        "hint": "This pattern is about creating a clean API for updating context state without exposing how those updates happen."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "In the following code snippet, what pattern is being implemented?\n```jsx\nfunction App() {\n  const [counter, setCounter] = useState(0);\n  \n  // External control of the component's state\n  const handleIncrement = () => setCounter(counter + 1);\n  \n  return (\n    <Counter \n      value={counter} \n      onChange={setCounter} \n      onIncrement={handleIncrement}\n    />\n  );\n}\n\nfunction Counter({ value, onChange, onIncrement }) {\n  // Component renders based on external state\n  return (\n    <div>\n      <p>Count: {value}</p>\n      <button onClick={onIncrement}>Increment</button>\n      <button onClick={() => onChange(value - 1)}>Decrement</button>\n    </div>\n  );\n}\n```",
        "options": [
        "Compound Components",
        "Control Props",
        "State Reducer",
        "Render Props"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Control Props",
        "difficulty": "hard",
        "explanation": "This code implements the Control Props pattern. The Counter component doesn't maintain its own state; instead, its state (value) is controlled externally by the parent App component through props, similar to how controlled form inputs work in React.",
        "hint": "Think about the relationship between the parent and child component regarding who controls the state."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the Headless Component pattern?",
        "options": [
        "Components that don't render any UI elements",
        "Components that generate only HTML without CSS",
        "Components that provide behavior and state but let consumers control rendering",
        "Components that run server-side without client-side rendering"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Components that provide behavior and state but let consumers control rendering",
        "difficulty": "hard",
        "explanation": "Headless Components separate behavior from presentation by providing functionality and state management without rendering specific UI elements. They let consumers decide exactly how to render the UI while handling the complex behavior, often using render props or custom hooks to expose their state and actions.",
        "hint": "Think about a component that handles all the behavior but doesn't make assumptions about appearance."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What pattern is demonstrated in this code?\n```jsx\nconst MenuButton = React.forwardRef(function MenuButton(props, ref) {\n  return <button {...props} ref={ref} />;\n});\n\nconst Menu = React.forwardRef(function Menu({ children, ...props }, ref) {\n  return (\n    <div role=\"menu\" {...props} ref={ref}>\n      {children}\n    </div>\n  );\n});\n\nconst MenuItem = React.forwardRef(function MenuItem(props, ref) {\n  return <div role=\"menuitem\" tabIndex={-1} {...props} ref={ref} />;\n});\n\n// Export the individual components\nexport { MenuButton, Menu, MenuItem };\n```",
        "options": [
        "Compound Component with Forward Refs",
        "Higher-Order Component",
        "Component Collection",
        "Polymorphic Component"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Compound Component with Forward Refs",
        "difficulty": "hard",
        "explanation": "This code demonstrates the Compound Component pattern with the addition of forwarded refs. Each component in the menu system (MenuButton, Menu, MenuItem) is designed to work together but they're exported individually rather than as properties on a parent component, allowing for more flexibility in imports and usage.",
        "hint": "Notice how the components are designed to work together as a cohesive system but with ref forwarding added."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the purpose of the \"as\" prop in Polymorphic Components?",
        "options": [
        "To conditionally render a component based on a boolean value",
        "To change the underlying HTML element or component that gets rendered",
        "To specify which prop should be used as the component key",
        "To define the component's animation type"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To change the underlying HTML element or component that gets rendered",
        "difficulty": "hard",
        "explanation": "The \"as\" prop in Polymorphic Components allows consumers to change what HTML element or React component is ultimately rendered while keeping the same props and behaviors. This enables greater flexibility in how components are used across different contexts.",
        "hint": "This pattern is about changing the rendered element type while maintaining the same functionality."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What is the primary issue with the following code using the Render Props pattern?\n```jsx\n<MouseTracker>\n  {(mousePosition) => (\n    <WindowSize>\n      {(windowSize) => (\n        <ThemeContext.Consumer>\n          {(theme) => (\n            <UserData>\n              {(userData) => (\n                <div>/* Deeply nested component */</div>\n              )}\n            </UserData>\n          )}\n        </ThemeContext.Consumer>\n      )}\n    </WindowSize>\n  )}\n</MouseTracker>\n```",
        "options": [
        "Performance issues due to excessive re-rendering",
        "The Render Props components cannot share data",
        "Callback hell or pyramid of doom",
        "The code will not compile due to syntax errors"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Callback hell or pyramid of doom",
        "difficulty": "hard",
        "explanation": "This code demonstrates the primary drawback of extensively using the Render Props pattern: it can lead to deeply nested callback functions (known as callback hell or the pyramid of doom), making the code harder to read and maintain as more render prop components are composed together.",
        "hint": "Look at the structure of the nested callbacks and how it affects readability."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "Which pattern would be most appropriate for implementing a complex form with custom validation, submission handling, and field state management?",
        "options": [
        "Compound Components",
        "Controlled Components",
        "Custom Hook with State Reducer and Props Getters",
        "Higher-Order Components"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Custom Hook with State Reducer and Props Getters",
        "difficulty": "hard",
        "explanation": "For complex forms, a Custom Hook combining State Reducer and Props Getters patterns provides the most flexibility. The State Reducer allows custom validation and form logic, while Props Getters provide the right props for form elements. This approach encapsulates form complexity while giving consumers control over behavior and rendering.",
        "hint": "Think about which pattern would provide both the necessary abstraction for complex behavior and flexibility for consumers."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "What pattern is demonstrated in this code?\n```jsx\nconst Box = ({ as: Component = 'div', ...props }) => {\n  return <Component {...props} />;\n};\n\n// Usage\n<Box as=\"button\" onClick={handleClick}>Click Me</Box>\n<Box as={Link} to=\"/home\">Home</Box>\n```",
        "options": [
        "Higher-Order Component",
        "Polymorphic Component",
        "Compound Component",
        "Factory Component"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Polymorphic Component",
        "difficulty": "hard",
        "explanation": "This code demonstrates the Polymorphic Component pattern. The Box component accepts an 'as' prop that determines what HTML element or React component gets rendered, allowing it to adapt its rendering while maintaining consistent props handling and behavior.",
        "hint": "Look at how the component can change what element type it renders based on props."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Advanced Patterns",
        "questionText": "When implementing a State Reducer pattern, how can you give component consumers the ability to modify behavior while preserving default functionality?",
        "options": [
        "By exposing the component's internal state through props",
        "By allowing consumers to pass a custom reducer function that receives the default reducer's result",
        "By using higher-order components to wrap the base component",
        "By implementing the observer pattern to notify consumers of state changes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "By allowing consumers to pass a custom reducer function that receives the default reducer's result",
        "difficulty": "hard",
        "explanation": "To preserve default functionality while allowing customization in a State Reducer pattern, you can provide a mechanism where consumer-provided reducers can access the result of the default reducer for each action. This allows them to override specific cases while falling back to default behavior for others.",
        "hint": "Think about how you could chain reducers together to allow customization without completely replacing the default logic."
    },

    // Production Deployment
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which of the following build commands generates production-ready files for a Create React App project?",
        "options": ["npm start", "npm run build", "npm run dev", "npm run production"],
        "correctOptionIndex": 1,
        "correctOptionText": "npm run build",
        "difficulty": "easy",
        "explanation": "The 'npm run build' command optimizes the build for production by minifying files, removing comments, and creating efficient production bundles.",
        "hint": "This command creates a 'build' directory with optimized files."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which environment variable file has the highest priority in a Create React App project?",
        "options": [".env", ".env.local", ".env.production", ".env.production.local"],
        "correctOptionIndex": 3,
        "correctOptionText": ".env.production.local",
        "difficulty": "medium",
        "explanation": "Environment variables are loaded in the following order: .env → .env.local → .env.production → .env.production.local, with later files taking precedence over earlier ones.",
        "hint": "Environment-specific local files have the highest priority."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which of the following is NOT a benefit of using a Content Delivery Network (CDN) for deploying React applications?",
        "options": ["Reduced latency", "Improved load times", "Server-side rendering", "DDoS protection"],
        "correctOptionIndex": 2,
        "correctOptionText": "Server-side rendering",
        "difficulty": "medium",
        "explanation": "CDNs distribute static content across multiple geographically dispersed servers to reduce latency and improve load times. They don't provide server-side rendering, which requires application servers running Node.js or similar.",
        "hint": "CDNs primarily deal with static content distribution, not dynamic rendering."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is the purpose of setting up a CI/CD pipeline for a React application?",
        "options": ["To automatically optimize images", "To automate testing and deployment processes", "To create documentation", "To monitor application performance"],
        "correctOptionIndex": 1,
        "correctOptionText": "To automate testing and deployment processes",
        "difficulty": "easy",
        "explanation": "CI/CD (Continuous Integration/Continuous Deployment) pipelines automate the process of testing code changes and deploying them to production, ensuring a more reliable and efficient workflow.",
        "hint": "CI/CD is about automation of development workflows."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which file should you create at the root of your React project to configure routing on platforms like Netlify or Vercel for single-page applications?",
        "options": ["routes.json", "_redirects", "vercel.json", "netlify.toml"],
        "correctOptionIndex": 1,
        "correctOptionText": "_redirects",
        "difficulty": "medium",
        "explanation": "The '_redirects' file is used on Netlify to handle client-side routing in single-page applications. It ensures that all paths are redirected to the index.html file, allowing React Router to handle the routing.",
        "hint": "This file helps solve the refresh 404 problem on static hosting providers."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What's the primary purpose of code splitting in a React application?",
        "options": ["To organize code in different files", "To reduce initial bundle size and improve load time", "To make the code more readable", "To prevent syntax errors"],
        "correctOptionIndex": 1,
        "correctOptionText": "To reduce initial bundle size and improve load time",
        "difficulty": "medium",
        "explanation": "Code splitting allows you to split your code into various bundles which can then be loaded on demand, reducing the size of the initial bundle and improving the application's initial load time.",
        "hint": "It helps with lazy-loading parts of your application that aren't immediately needed."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which of the following is NOT a valid method for implementing code splitting in React?",
        "options": ["React.lazy() with Suspense", "import() syntax", "require.ensure()", "React.split()"],
        "correctOptionIndex": 3,
        "correctOptionText": "React.split()",
        "difficulty": "medium",
        "explanation": "React.split() is not a real method. React supports code splitting through React.lazy() with Suspense, dynamic import() syntax, and the older require.ensure() method (in webpack).",
        "hint": "Three of these are valid code splitting techniques, but one doesn't exist in React."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What does the following code accomplish in a React application?\n\nconst ProfilePage = React.lazy(() => import('./ProfilePage'));\n\nfunction MyApp() {\n  return (\n    <React.Suspense fallback={<Spinner />}>\n      <ProfilePage />\n    </React.Suspense>\n  );\n}",
        "options": ["Server-side rendering", "Code splitting with lazy loading", "Error boundary implementation", "Memoization of the ProfilePage component"],
        "correctOptionIndex": 1,
        "correctOptionText": "Code splitting with lazy loading",
        "difficulty": "hard",
        "explanation": "This code implements code splitting using React.lazy(), which loads the ProfilePage component only when it's needed. The Suspense component provides a fallback UI (Spinner) while the component is loading.",
        "hint": "Look at how the ProfilePage component is being imported and rendered."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which environment variable prefix is required for Create React App to expose variables to the browser?",
        "options": ["APP_", "BROWSER_", "REACT_APP_", "PUBLIC_"],
        "correctOptionIndex": 2,
        "correctOptionText": "REACT_APP_",
        "difficulty": "easy",
        "explanation": "In Create React App, only environment variables that start with 'REACT_APP_' will be exposed to your JavaScript code in the browser.",
        "hint": "This prefix is specific to Create React App and helps prevent accidental exposure of sensitive environment variables."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is the purpose of a web server's 'gzip' or 'brotli' compression in the context of React deployment?",
        "options": ["To compress images for faster loading", "To reduce the size of JavaScript and CSS files sent to the browser", "To compress database storage", "To minify React code during build"],
        "correctOptionIndex": 1,
        "correctOptionText": "To reduce the size of JavaScript and CSS files sent to the browser",
        "difficulty": "medium",
        "explanation": "Web servers use compression algorithms like gzip or brotli to compress text-based resources (HTML, CSS, JavaScript) before sending them to the browser, reducing bandwidth usage and improving load times.",
        "hint": "This happens at the HTTP response level, not during the build process."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is the purpose of the 'source-map-explorer' tool in a React project?",
        "options": ["To create visual representations of your application routes", "To analyze and visualize the size of bundled files", "To detect memory leaks", "To map API endpoints"],
        "correctOptionIndex": 1,
        "correctOptionText": "To analyze and visualize the size of bundled files",
        "difficulty": "hard",
        "explanation": "source-map-explorer analyzes JavaScript bundles using source maps. It helps you understand what code is taking up space in your bundle, which is useful for optimizing bundle size.",
        "hint": "This tool helps you identify large dependencies that might be bloating your application."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which of the following is NOT a common hosting platform for React applications?",
        "options": ["Netlify", "Vercel", "MongoDB Atlas", "Firebase Hosting"],
        "correctOptionIndex": 2,
        "correctOptionText": "MongoDB Atlas",
        "difficulty": "easy",
        "explanation": "MongoDB Atlas is a database-as-a-service platform for MongoDB, not a hosting platform for web applications. Netlify, Vercel, and Firebase Hosting are all popular platforms for hosting React applications.",
        "hint": "Three of these are web application hosting platforms, while one is primarily for a different purpose."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is the primary benefit of implementing HTTP/2 on your server when deploying a React application?",
        "options": ["Better SEO rankings", "Multiplexed connections reducing latency", "Automatic SSL encryption", "Increased server CPU utilization"],
        "correctOptionIndex": 1,
        "correctOptionText": "Multiplexed connections reducing latency",
        "difficulty": "hard",
        "explanation": "HTTP/2 allows multiple requests and responses to be sent over a single connection simultaneously (multiplexing), which significantly reduces latency compared to HTTP/1.1, especially for applications that load many resources.",
        "hint": "This protocol feature helps overcome the 'head-of-line blocking' problem in HTTP/1.1."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What information does the following script provide?\n\nnpx source-map-explorer 'build/static/js/*.js'",
        "options": ["Testing coverage information", "Bundle size analysis", "Server response times", "Dependency tree visualization"],
        "correctOptionIndex": 1,
        "correctOptionText": "Bundle size analysis",
        "difficulty": "medium",
        "explanation": "This command uses source-map-explorer to analyze JavaScript bundles in the build directory, showing a visualization of what's contributing to your bundle size, which helps identify large dependencies.",
        "hint": "This tool helps detect what might be making your JavaScript bundles too large."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which of the following headers should be set to prevent clickjacking attacks on your deployed React application?",
        "options": ["X-Content-Type-Options", "X-Frame-Options", "Content-Security-Policy", "X-XSS-Protection"],
        "correctOptionIndex": 1,
        "correctOptionText": "X-Frame-Options",
        "difficulty": "medium",
        "explanation": "The X-Frame-Options header prevents your page from being displayed in a frame or iframe, which helps protect against clickjacking attacks where malicious sites embed your site.",
        "hint": "This header controls whether a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is the purpose of setting up a Content Security Policy (CSP) for a deployed React application?",
        "options": ["To improve SEO rankings", "To prevent Cross-Site Scripting (XSS) attacks", "To reduce server load", "To implement authentication"],
        "correctOptionIndex": 1,
        "correctOptionText": "To prevent Cross-Site Scripting (XSS) attacks",
        "difficulty": "medium",
        "explanation": "A Content Security Policy helps prevent XSS attacks by specifying which dynamic resources are allowed to load, restricting inline scripts, and controlling where scripts can be loaded from.",
        "hint": "CSP is a security feature that helps mitigate certain types of attacks by controlling resource loading."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which AWS service is MOST suitable for hosting a static React application?",
        "options": ["EC2", "Lambda", "S3 with CloudFront", "RDS"],
        "correctOptionIndex": 2,
        "correctOptionText": "S3 with CloudFront",
        "difficulty": "medium",
        "explanation": "S3 (Simple Storage Service) is ideal for hosting static files, and when combined with CloudFront (CDN), it provides fast, secure, and cost-effective hosting for static React applications.",
        "hint": "This combination provides storage for static files and a global content delivery network."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What does the following command do in a Docker-based React deployment?\n\ndocker build -t my-react-app:latest .",
        "options": ["Starts a local development server", "Creates a Docker image from your Dockerfile", "Uploads your React app to Docker Hub", "Installs Docker dependencies"],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a Docker image from your Dockerfile",
        "difficulty": "medium",
        "explanation": "The 'docker build' command creates a Docker image based on the instructions in your Dockerfile. The '-t' flag tags the image with a name ('my-react-app') and version ('latest').",
        "hint": "This is the first step in containerizing your application before running it."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is a key advantage of using Docker for deploying React applications?",
        "options": ["It provides built-in server-side rendering", "It ensures consistency across different environments", "It automatically optimizes your React code", "It provides free SSL certificates"],
        "correctOptionIndex": 1,
        "correctOptionText": "It ensures consistency across different environments",
        "difficulty": "easy",
        "explanation": "Docker containers package your application with all its dependencies, ensuring that it runs the same way in every environment, from development to staging to production.",
        "hint": "Docker helps solve the 'it works on my machine' problem."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which of the following is NOT a valid approach for handling client-side routing in a deployed static React application?",
        "options": [
        "Configure the server to return index.html for all routes",
        "Use HashRouter instead of BrowserRouter",
        "Create a _redirects file for Netlify",
        "Use window.location.pathname directly instead of a router"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Use window.location.pathname directly instead of a router",
        "difficulty": "hard",
        "explanation": "While technically possible, using window.location.pathname directly instead of a router library is not a recommended approach for handling client-side routing in React applications. It lacks important features like history management, nested routes, and code splitting support.",
        "hint": "Three of these are standard solutions for client-side routing in deployed React applications."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is the purpose of the PUBLIC_URL environment variable in a Create React App project?",
        "options": [
        "To specify the domain name for API requests",
        "To define the base URL for all relative URLs in the HTML",
        "To set the URL for the public API documentation",
        "To configure the URL for social media sharing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define the base URL for all relative URLs in the HTML",
        "difficulty": "medium",
        "explanation": "PUBLIC_URL is used to specify the base URL for all relative URLs in your HTML files (like paths to CSS and JavaScript files). This is particularly useful when deploying to a subdirectory or using a CDN.",
        "hint": "This environment variable affects how asset paths are resolved in the build output."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "In a multi-environment deployment pipeline for React, what is the main purpose of a staging environment?",
        "options": [
        "To develop new features",
        "To test changes in a production-like setting before actual deployment",
        "To host the documentation",
        "To back up the production environment"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To test changes in a production-like setting before actual deployment",
        "difficulty": "easy",
        "explanation": "A staging environment closely mimics the production environment and allows teams to test changes, detect issues, and verify behaviors before deploying to the actual production environment that users interact with.",
        "hint": "This environment serves as a final checkpoint before changes reach end users."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is a blue-green deployment strategy in the context of React applications?",
        "options": [
        "A color scheme for your application UI",
        "A technique where you maintain two identical production environments with only one active at a time",
        "A method for separating development and production code",
        "A way to visually highlight code changes in pull requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A technique where you maintain two identical production environments with only one active at a time",
        "difficulty": "hard",
        "explanation": "Blue-green deployment involves maintaining two identical production environments. One (blue) serves production traffic while you deploy to the other (green). Once green is verified, you switch traffic to it, minimizing downtime and risk.",
        "hint": "This strategy reduces downtime and risk during deployments by providing a quick rollback option."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What does the following Netlify configuration file do?\n\n# netlify.toml\n[[redirects]]\n  from = \"/*\"\n  to = \"/index.html\"\n  status = 200",
        "options": [
        "Redirects all 404 errors to the homepage",
        "Configures server-side rendering",
        "Handles client-side routing by sending all requests to index.html",
        "Sets up automatic HTTPS"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Handles client-side routing by sending all requests to index.html",
        "difficulty": "medium",
        "explanation": "This Netlify configuration redirects all routes to index.html with a 200 status code, enabling client-side routing in single-page applications (SPAs) like React with React Router.",
        "hint": "This configuration solves the problem of refreshing pages on routes other than the root in SPAs."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which tool in the React ecosystem can help you generate static HTML files for each route, improving SEO and initial load performance?",
        "options": ["React Router", "Next.js", "Redux", "styled-components"],
        "correctOptionIndex": 1,
        "correctOptionText": "Next.js",
        "difficulty": "medium",
        "explanation": "Next.js provides static site generation (SSG) capabilities, allowing you to pre-render React pages at build time into HTML files. This improves SEO and initial load performance compared to client-side rendering.",
        "hint": "This framework extends React with server-side rendering and static site generation features."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What is a key benefit of implementing route-based code splitting in a React application?",
        "options": [
        "It improves SEO rankings",
        "It reduces the initial load time by loading only necessary code",
        "It simplifies the development process",
        "It automatically fixes routing errors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It reduces the initial load time by loading only necessary code",
        "difficulty": "medium",
        "explanation": "Route-based code splitting loads JavaScript only for the current route, reducing the initial bundle size and improving the application's startup time. Users only download the code they need for the current view.",
        "hint": "This technique is particularly valuable for large applications with many routes."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "What does the following GitHub Actions workflow accomplish?\n\nname: Deploy\non:\n  push:\n    branches: [ main ]\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Install Dependencies\n        run: npm ci\n      - name: Build\n        run: npm run build\n      - name: Deploy to Netlify\n        uses: netlify/actions/cli@master\n        with:\n          args: deploy --prod\n        env:\n          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}\n          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}",
        "options": [
        "Sets up continuous testing for pull requests",
        "Automatically deploys the main branch to Netlify when changes are pushed",
        "Creates a new Netlify site for each commit",
        "Builds the application locally without deployment"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Automatically deploys the main branch to Netlify when changes are pushed",
        "difficulty": "hard",
        "explanation": "This GitHub Actions workflow automates the deployment process to Netlify. When code is pushed to the main branch, it checks out the code, installs dependencies, builds the project, and deploys it to Netlify using authentication tokens.",
        "hint": "This is an example of a CI/CD pipeline that automates the build and deployment process."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which of the following is TRUE about environment variables in a production React application?",
        "options": [
        "They can be changed after the application is built and deployed",
        "They are automatically encrypted in the browser",
        "They are embedded in the bundle at build time and cannot be changed without rebuilding",
        "They are stored in cookies for persistence"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "They are embedded in the bundle at build time and cannot be changed without rebuilding",
        "difficulty": "hard",
        "explanation": "In a React application, environment variables are embedded in the JavaScript bundle at build time. Once the application is built, these values cannot be changed without rebuilding the application, unlike server-side applications where environment variables can be changed on the server.",
        "hint": "This is an important consideration when deploying React applications to different environments."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "Which feature of webpack is MOST directly responsible for creating optimized production builds in React applications?",
        "options": ["Hot Module Replacement", "Tree Shaking", "Code Splitting", "DevServer"],
        "correctOptionIndex": 1,
        "correctOptionText": "Tree Shaking",
        "difficulty": "hard",
        "explanation": "Tree Shaking is a term for dead code elimination. It removes unused code from your final bundle by identifying and eliminating code that isn't actually used/imported, resulting in smaller production builds.",
        "hint": "This feature is named after the process of shaking a tree to remove dead leaves."
    },
    {
        "topic": "67defd0ce107cf2e3745af6b",
        "module": "Production Deployment",
        "questionText": "In a containerized React application deployment, what is the primary purpose of a multi-stage Dockerfile?",
        "options": [
        "To deploy to multiple environments simultaneously",
        "To create smaller production images by separating build and runtime environments",
        "To test the application in multiple browsers",
        "To support multiple versions of React"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create smaller production images by separating build and runtime environments",
        "difficulty": "hard",
        "explanation": "Multi-stage Dockerfiles use multiple FROM statements, where one stage builds the application (including all build dependencies), and a second stage copies only the built artifacts into a clean, minimal production image, resulting in much smaller images.",
        "hint": "This approach helps avoid including unnecessary build tools and dependencies in the final production container."
    },

    
]

export default reactJSQ;