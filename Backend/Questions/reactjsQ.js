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