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

    // Custom Hooks

    // Context API

    // React Router

    // Forms & Validation

    // API Integration

    // Redux & state Management

    // Testing React Applications

    // Performance Optimization

    // Server-side Rendering

    // Advanced Patterns

    // Production Deployment

    
]

export default reactJSQ;