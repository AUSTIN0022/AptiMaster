const AngularQuestions = [

    // Introduction to Angular
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is Angular primarily used for?",
        "options": [
            "Server-side rendering",
            "Building mobile applications",
            "Creating single-page web applications",
            "Database management"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Creating single-page web applications",
        "difficulty": "easy",
        "explanation": "Angular is a comprehensive framework for building dynamic single-page web applications using TypeScript.",
        "hint": "Think about modern web application development approaches"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "Which command is used to create a new Angular project using Angular CLI?",
        "options": [
            "ng create project",
            "ng new",
            "angular generate",
            "npm install angular"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "ng new",
        "difficulty": "easy",
        "explanation": "The 'ng new' command is used to generate a new Angular project with all necessary configurations and dependencies.",
        "hint": "This is a standard Angular CLI command for project initialization"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does TypeScript add to JavaScript in Angular development?",
        "options": [
            "Only visual styling capabilities",
            "Static typing and object-oriented programming features",
            "Database connection methods",
            "Purely server-side rendering"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Static typing and object-oriented programming features",
        "difficulty": "medium",
        "explanation": "TypeScript adds static typing, interfaces, generics, and other OOP features that help catch errors early and improve code quality.",
        "hint": "TypeScript is a superset of JavaScript with additional compile-time checks"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the purpose of the angular.json file in an Angular project?",
        "options": [
            "To define component templates",
            "To configure project build settings and options",
            "To manage database connections",
            "To create routing configurations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To configure project build settings and options",
        "difficulty": "medium",
        "explanation": "The angular.json file contains comprehensive configuration for the entire Angular project, including build options, file paths, and project settings.",
        "hint": "Think about project-wide configuration and build process"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "Which decorator is used to define a component in Angular?",
        "options": [
            "@Component",
            "@Injectable",
            "@Module",
            "@Service"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "@Component",
        "difficulty": "easy",
        "explanation": "The @Component decorator is used to define and configure Angular components, specifying metadata like selector, template, and styles.",
        "hint": "This decorator helps Angular understand how to process and render a component"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the main entry point of an Angular application?",
        "options": [
            "index.html",
            "main.ts",
            "app.module.ts",
            "app.component.ts"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "main.ts",
        "difficulty": "medium",
        "explanation": "main.ts is the primary entry point that bootstraps the Angular application, typically using platformBrowserDynamic to bootstrap the main module.",
        "hint": "This file is responsible for starting the Angular application"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does AOT compilation stand for in Angular?",
        "options": [
            "Angular Object Transformation",
            "Ahead of Time compilation",
            "Angular Optimization Technique",
            "Application Object Transfer"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ahead of Time compilation",
        "difficulty": "medium",
        "explanation": "AOT (Ahead of Time) compilation converts Angular HTML and TypeScript code into efficient JavaScript code during the build process, before the browser downloads and runs that code.",
        "hint": "This compilation method improves application performance"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "Which command is used to generate a new component in Angular CLI?",
        "options": [
            "ng generate component",
            "ng create component",
            "ng new component",
            "ng build component"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "ng generate component",
        "difficulty": "easy",
        "explanation": "The 'ng generate component' command creates a new Angular component with its associated files (template, styles, spec, and component class).",
        "hint": "CLI command for component creation"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the primary difference between constructor and ngOnInit?",
        "options": [
            "They are exactly the same",
            "Constructor is for dependency injection, ngOnInit for initialization logic",
            "Constructor handles HTTP requests, ngOnInit handles component rendering",
            "ngOnInit is only used in services"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Constructor is for dependency injection, ngOnInit for initialization logic",
        "difficulty": "hard",
        "explanation": "The constructor is primarily used for dependency injection, while ngOnInit is a lifecycle hook used for component initialization logic after data-bound properties are initialized.",
        "hint": "Think about the sequence of component initialization"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does the following TypeScript code demonstrate?\n\n```typescript\ninterface User {\n  name: string;\n  age: number;\n}\n```",
        "options": [
            "A class definition",
            "A type definition using an interface",
            "A function declaration",
            "A variable declaration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type definition using an interface",
        "difficulty": "medium",
        "explanation": "This code defines an interface in TypeScript, which describes the shape of an object with specific properties and their types.",
        "hint": "Interfaces in TypeScript provide a way to define object structures"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the purpose of the @NgModule decorator?",
        "options": [
            "To create components",
            "To define a module and its dependencies",
            "To handle HTTP requests",
            "To manage routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define a module and its dependencies",
        "difficulty": "medium",
        "explanation": "The @NgModule decorator is used to define an Angular module, specifying its declarations, imports, providers, and exports.",
        "hint": "Modules in Angular help organize and structure application components"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does the following Angular template syntax demonstrate?\n\n```html\n<div *ngIf=\"isVisible\">Conditional Content</div>\n```",
        "options": [
            "A standard div element",
            "Structural directive for conditional rendering",
            "An event binding",
            "A property binding"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Structural directive for conditional rendering",
        "difficulty": "medium",
        "explanation": "The *ngIf directive is a structural directive that conditionally renders or removes an element based on the expression's truthiness.",
        "hint": "Structural directives modify the DOM structure"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is a decorator in Angular/TypeScript?",
        "options": [
            "A method for styling components",
            "A function that adds metadata to classes, methods, or properties",
            "A way to create HTTP interceptors",
            "A technique for database mapping"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A function that adds metadata to classes, methods, or properties",
        "difficulty": "hard",
        "explanation": "Decorators are special kind of declarations that can be attached to a class declaration, method, accessor, property, or parameter to modify its behavior or add metadata.",
        "hint": "Decorators provide a way to add annotations and modify class characteristics"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the purpose of zone.js in Angular?",
        "options": [
            "To manage database connections",
            "To handle change detection and tracking asynchronous operations",
            "To create animations",
            "To manage routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To handle change detection and tracking asynchronous operations",
        "difficulty": "hard",
        "explanation": "Zone.js helps Angular track and automatically trigger change detection for asynchronous operations like setTimeout, promises, and event listeners.",
        "hint": "It plays a crucial role in Angular's change detection mechanism"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does the following TypeScript code demonstrate?\n\n```typescript\nconst numbers: number[] = [1, 2, 3, 4, 5];\nconst squared = numbers.map(x => x * x);\n```",
        "options": [
            "Object creation",
            "Array transformation using map function",
            "Conditional filtering",
            "Recursive function"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Array transformation using map function",
        "difficulty": "medium",
        "explanation": "The map() function creates a new array by calling a provided function on every element in the calling array, transforming each element.",
        "hint": "This is a common functional programming technique in JavaScript/TypeScript"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the primary benefit of using TypeScript in Angular?",
        "options": [
            "Faster runtime performance",
            "Automatic database integration",
            "Static typing and compile-time error checking",
            "Enhanced CSS preprocessing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Static typing and compile-time error checking",
        "difficulty": "easy",
        "explanation": "TypeScript provides static typing, which helps catch errors during development and improves code quality through compile-time type checking.",
        "hint": "Think about catching potential errors before runtime"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the purpose of the package.json file in an Angular project?",
        "options": [
            "To define component templates",
            "To manage project dependencies and scripts",
            "To configure routing",
            "To handle component styling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To manage project dependencies and scripts",
        "difficulty": "easy",
        "explanation": "The package.json file lists project dependencies, defines npm scripts, and manages the project's metadata and configuration.",
        "hint": "This file is crucial for npm package management"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does the following TypeScript code demonstrate?\n\n```typescript\nlet message: string = 'Hello';\nmessage = 42; // Will this compile?\n```",
        "options": [
            "This will compile without issues",
            "This will cause a compile-time type error",
            "This will create a dynamic type",
            "This will convert the string to a number"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "This will cause a compile-time type error",
        "difficulty": "medium",
        "explanation": "TypeScript's static typing prevents assigning a number to a variable declared as a string, causing a compile-time type error.",
        "hint": "TypeScript enforces strict type checking"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the difference between let and const in TypeScript?",
        "options": [
            "There is no difference",
            "let allows reassignment, const creates immutable variables",
            "const is used only for numbers, let for strings",
            "let is used only in loops, const in function declarations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "let allows reassignment, const creates immutable variables",
        "difficulty": "easy",
        "explanation": "let allows variable reassignment, while const creates variables that cannot be reassigned after initial declaration.",
        "hint": "Think about variable mutability"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is Angular's change detection strategy primarily responsible for?",
        "options": [
            "Managing server-side rendering",
            "Detecting and updating view when data changes",
            "Handling HTTP requests",
            "Creating component animations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Detecting and updating view when data changes",
        "difficulty": "hard",
        "explanation": "Change detection is the process by which Angular automatically detects changes in component data and updates the view accordingly.",
        "hint": "This is crucial for reactive user interfaces"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does the following TypeScript generic type demonstrate?\n\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n```",
        "options": [
            "A function that always returns null",
            "A generic function that preserves the input type",
            "A type conversion function",
            "A method for creating new types"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A generic function that preserves the input type",
        "difficulty": "hard",
        "explanation": "This is a generic function that takes a type T as an argument and returns the same type, allowing type-safe operations across different types.",
        "hint": "Generics provide type flexibility while maintaining type safety"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the primary purpose of the tsconfig.json file?",
        "options": [
            "To define component styles",
            "To configure TypeScript compiler options",
            "To manage project dependencies",
            "To create routing configurations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To configure TypeScript compiler options",
        "difficulty": "medium",
        "explanation": "The tsconfig.json file specifies the root files and the compiler options required to compile the TypeScript project.",
        "hint": "Think about TypeScript project configuration"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the difference between a service and a component in Angular?",
        "options": [
            "There is no difference",
            "Services handle business logic, components manage UI and user interactions",
            "Components are only used for styling",
            "Services are only used for HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Services handle business logic, components manage UI and user interactions",
        "difficulty": "medium",
        "explanation": "Services are used to organize and share business logic across the application, while components are responsible for the UI and user interactions.",
        "hint": "Separation of concerns is key in Angular architecture"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does the following Angular template syntax represent?\n\n```html\n<input [value]=\"username\" (input)=\"username = $event.target.value\">\n```",
        "options": [
            "Standard HTML input",
            "Two-way data binding",
            "One-way property binding",
            "Event binding only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Two-way data binding",
        "difficulty": "medium",
        "explanation": "This demonstrates two-way data binding, where the input's value is bound to the username property, and changes are reflected back to the component.",
        "hint": "Two-way binding combines property and event binding"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the purpose of dependency injection in Angular?",
        "options": [
            "To create new components",
            "To manage component lifecycle",
            "To provide and inject services and dependencies",
            "To handle routing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To provide and inject services and dependencies",
        "difficulty": "hard",
        "explanation": "Dependency Injection is a design pattern that allows classes to receive dependencies from external sources rather than creating them internally, promoting loose coupling and easier testing.",
        "hint": "Think about modular and testable code design"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the significance of the @Injectable() decorator?",
        "options": [
            "To create new components",
            "To mark a class as available for dependency injection",
            "To handle HTTP requests",
            "To define component templates"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To mark a class as available for dependency injection",
        "difficulty": "medium",
        "explanation": "The @Injectable() decorator marks a class as a service that can be injected as a dependency in other classes, particularly in components and other services.",
        "hint": "This enables Angular's dependency injection system"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does the following TypeScript code demonstrate?\n\n```typescript\nconst add = (a: number, b: number): number => a + b;\n```",
        "options": [
            "A class method",
            "An arrow function with type annotations",
            "A standard function declaration",
            "A type definition"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An arrow function with type annotations",
        "difficulty": "easy",
        "explanation": "This is an arrow function that takes two number parameters, explicitly defines the return type as number, and returns their sum.",
        "hint": "Arrow functions provide a concise way to define functions"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the primary role of the main.ts file in an Angular application?",
        "options": [
            "To define component styles",
            "To bootstrap the main application module",
            "To manage routing",
            "To handle HTTP interceptors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To bootstrap the main application module",
        "difficulty": "medium",
        "explanation": "The main.ts file is the entry point of an Angular application, responsible for bootstrapping the root module (typically AppModule) and launching the application.",
        "hint": "This is where the Angular application officially starts"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the purpose of type inference in TypeScript?",
        "options": [
            "To force explicit type declarations",
            "To automatically determine variable types based on their initial value",
            "To create new types",
            "To convert between different types"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To automatically determine variable types based on their initial value",
        "difficulty": "hard",
        "explanation": "Type inference allows TypeScript to automatically deduce the type of a variable based on its initial value, reducing the need for explicit type annotations.",
        "hint": "This feature makes TypeScript more convenient to use"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What does the spread operator (...) do in TypeScript?",
        "options": [
            "It always creates a deep copy of an object",
            "It expands an array or object into individual elements",
            "It is used only for mathematical operations",
            "It creates a new array with additional elements"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It expands an array or object into individual elements",
        "difficulty": "medium",
        "explanation": "The spread operator allows an iterable like an array or object to be expanded in places where zero or more arguments or elements are expected.",
        "hint": "Think about array and object manipulation"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Introduction to Angular",
        "questionText": "What is the primary difference between compilation modes in Angular?",
        "options": [
            "JIT compiles at runtime, AOT compiles during build",
            "JIT is faster than AOT",
            "AOT only works with specific browsers",
            "JIT and AOT are exactly the same"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "JIT compiles at runtime, AOT compiles during build",
        "difficulty": "hard",
        "explanation": "Just-in-Time (JIT) compilation happens in the browser at runtime, while Ahead-of-Time (AOT) compilation occurs during the build process before the application is deployed.",
        "hint": "Consider the performance and deployment implications"
    },
    
    // Angular Components
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the primary purpose of a component in Angular?",
        "options": [
            "To manage database connections",
            "To define a piece of the user interface with its logic and view",
            "To handle HTTP requests",
            "To create routing configurations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define a piece of the user interface with its logic and view",
        "difficulty": "easy",
        "explanation": "Components are the building blocks of Angular applications, encapsulating the template, data, and logic for a specific part of the user interface.",
        "hint": "Think about how a web page is broken down into reusable pieces"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following component decorator represent?\n\n```typescript\n@Component({\n  selector: 'app-example',\n  template: '<div>Hello World</div>'\n})\n```",
        "options": [
            "A service definition",
            "A component configuration",
            "A module declaration",
            "An interface implementation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A component configuration",
        "difficulty": "easy",
        "explanation": "The @Component decorator defines metadata for an Angular component, specifying its selector, template, and other configuration options.",
        "hint": "This decorator tells Angular how to process and render the component"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What are the lifecycle hooks of an Angular component?",
        "options": [
            "Start, Run, Stop",
            "Constructor, ngOnInit, ngOnDestroy",
            "Create, Update, Delete",
            "Initialize, Process, Terminate"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Constructor, ngOnInit, ngOnDestroy",
        "difficulty": "medium",
        "explanation": "Angular components have several lifecycle hooks, with key ones including constructor (for dependency injection), ngOnInit (for initialization), and ngOnDestroy (for cleanup).",
        "hint": "Lifecycle hooks allow you to tap into different stages of a component's existence"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the primary difference between @Input() and @Output() decorators?",
        "options": [
            "They are exactly the same",
            "@Input() passes data into a component, @Output() emits events from a component",
            "@Input() handles HTTP requests, @Output() manages routing",
            "@Input() creates components, @Output() destroys them"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "@Input() passes data into a component, @Output() emits events from a component",
        "difficulty": "medium",
        "explanation": "@Input() allows data to be passed into a component from its parent, while @Output() enables the component to emit custom events to its parent.",
        "hint": "Think about parent-child component communication"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following code demonstrate?\n\n```typescript\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html'\n})\n```",
        "options": [
            "Inline template definition",
            "External template reference",
            "Service injection",
            "Module configuration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "External template reference",
        "difficulty": "easy",
        "explanation": "The templateUrl property allows a component to use an external HTML file as its template, separating the template from the component logic.",
        "hint": "This approach helps in organizing larger, more complex templates"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the purpose of the ngOnInit() lifecycle hook?",
        "options": [
            "To create the component instance",
            "To perform component initialization after data-bound properties are initialized",
            "To handle component destruction",
            "To manage component styling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To perform component initialization after data-bound properties are initialized",
        "difficulty": "hard",
        "explanation": "ngOnInit() is called once the component is initialized and all input properties have been bound, making it ideal for initial data fetching or setup logic.",
        "hint": "This is different from the constructor, which is primarily for dependency injection"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following component method demonstrate?\n\n```typescript\n@HostListener('click') onClick() {\n  console.log('Component clicked');\n}\n```",
        "options": [
            "A standard method declaration",
            "An event listener for the host element",
            "A lifecycle hook",
            "A service method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An event listener for the host element",
        "difficulty": "hard",
        "explanation": "The @HostListener decorator allows a component to listen to events on its host element, in this case, capturing click events.",
        "hint": "This enables direct interaction with the component's DOM element"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the primary purpose of ViewChild in Angular?",
        "options": [
            "To create new components",
            "To access a child component or element from the parent component",
            "To manage routing",
            "To handle HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To access a child component or element from the parent component",
        "difficulty": "medium",
        "explanation": "ViewChild allows a parent component to access and interact with a child component or DOM element defined in its template.",
        "hint": "Think about parent-child component interactions"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following template syntax demonstrate?\n\n```html\n<div *ngIf=\"isVisible\">Conditional Content</div>\n```",
        "options": [
            "A standard div element",
            "A structural directive for conditional rendering",
            "A property binding",
            "An event binding"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A structural directive for conditional rendering",
        "difficulty": "easy",
        "explanation": "The *ngIf directive is a structural directive that conditionally renders or removes an element based on the expression's truthiness.",
        "hint": "Structural directives modify the DOM structure"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the purpose of @ViewChildren in Angular?",
        "options": [
            "To create multiple components",
            "To query and access multiple child components or elements",
            "To manage component lifecycle",
            "To handle event propagation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To query and access multiple child components or elements",
        "difficulty": "hard",
        "explanation": "@ViewChildren allows a parent component to access multiple child components or elements defined in its template, returning a QueryList.",
        "hint": "Similar to ViewChild, but works with multiple elements"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the difference between template reference and ViewChild?",
        "options": [
            "They are exactly the same",
            "Template reference is in the template, ViewChild is in the component class",
            "Template reference handles routing, ViewChild manages components",
            "ViewChild creates templates, reference is used for styling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Template reference is in the template, ViewChild is in the component class",
        "difficulty": "medium",
        "explanation": "A template reference variable is defined in the template using #, while ViewChild is a decorator in the component class used to access that referenced element.",
        "hint": "Think about where and how elements are accessed"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the Change Detection Strategy OnPush do?",
        "options": [
            "Stops all change detection",
            "Optimizes change detection by checking only when input references change",
            "Disables component rendering",
            "Forces immediate update of all components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Optimizes change detection by checking only when input references change",
        "difficulty": "hard",
        "explanation": "OnPush change detection strategy improves performance by only checking a component for changes when its input references have changed.",
        "hint": "This is an optimization technique for complex applications"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the purpose of ngOnChanges() lifecycle hook?",
        "options": [
            "To initialize the component",
            "To detect and respond to changes in input properties",
            "To destroy the component",
            "To manage component styling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To detect and respond to changes in input properties",
        "difficulty": "medium",
        "explanation": "ngOnChanges() is called whenever one or more data-bound input properties change, allowing the component to react to these changes.",
        "hint": "This is useful for performing actions based on input property modifications"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following code demonstrate?\n\n```typescript\n@Component({\n  selector: 'app-example',\n  styleUrls: ['./example.component.css']\n})\n```",
        "options": [
            "Inline style definition",
            "External stylesheet reference",
            "Styling configuration",
            "Component templating"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "External stylesheet reference",
        "difficulty": "easy",
        "explanation": "The styleUrls property allows a component to use an external CSS file for its styles, separating styling from component logic.",
        "hint": "This helps in organizing and maintaining component styles"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the purpose of ngContent in Angular?",
        "options": [
            "To create new components",
            "To project content from a parent component into a child component",
            "To handle routing",
            "To manage component lifecycle"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To project content from a parent component into a child component",
        "difficulty": "medium",
        "explanation": "ngContent allows content passed between the opening and closing tags of a component to be projected into a specific location in the component's template.",
        "hint": "Think of it as a way to create more flexible and reusable components"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following template syntax represent?\n\n```html\n<div [ngClass]=\"{'active': isActive, 'disabled': !isActive}\">\n  Content\n</div>\n```",
        "options": [
            "Standard class binding",
            "Dynamic class assignment based on conditions",
            "Event binding",
            "Property binding"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Dynamic class assignment based on conditions",
        "difficulty": "medium",
        "explanation": "The [ngClass] directive allows dynamic class assignment based on expression evaluation, adding or removing classes conditionally.",
        "hint": "This provides a flexible way to manage element classes"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the primary purpose of @Component decorator?",
        "options": [
            "To create services",
            "To define and configure an Angular component",
            "To manage routing",
            "To handle HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define and configure an Angular component",
        "difficulty": "easy",
        "explanation": "The @Component decorator provides metadata that tells Angular how to create, render, and manage a component.",
        "hint": "It's a crucial part of defining component behavior"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the ngOnDestroy() lifecycle hook do?",
        "options": [
            "Initializes the component",
            "Cleans up resources before a component is destroyed",
            "Creates new components",
            "Manages component rendering"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Cleans up resources before a component is destroyed",
        "difficulty": "medium",
        "explanation": "ngOnDestroy() is called just before a component is destroyed, allowing you to unsubscribe from observables or clean up any resources.",
        "hint": "This prevents memory leaks and manages resource cleanup"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the purpose of @HostBinding in Angular?",
        "options": [
            "To create new components",
            "To dynamically set properties on the host element",
            "To manage routing",
            "To handle event listeners"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To dynamically set properties on the host element",
        "difficulty": "hard",
        "explanation": "@HostBinding allows a component to dynamically set properties or attributes on its host element.",
        "hint": "This provides a way to modify the host element's characteristics"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following code demonstrate?\n\n```typescript\n@Component({\n  selector: 'app-example',\n  template: `\n    <div>{{ message }}</div>\n  `\n})\n```",
        "options": [
            "External template reference",
            "Inline template definition",
            "Service injection",
            "Component configuration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Inline template definition",
        "difficulty": "easy",
        "explanation": "The template property allows defining the component's template directly within the component decorator using template literals.",
        "hint": "This is useful for small, simple templates"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the difference between structural and attribute directives?",
        "options": [
            "They are exactly the same",
            "Structural directives change DOM layout, attribute directives change element appearance",
            "Structural directives handle routing, attribute directives manage components",
            "Attribute directives create DOM elements, structural directives style them"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Structural directives change DOM layout, attribute directives change element appearance",
        "difficulty": "hard",
        "explanation": "Structural directives like *ngIf modify the DOM structure, while attribute directives like [ngClass] change the appearance or behavior of an element.",
        "hint": "Think about how they interact with the DOM"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the purpose of ng-container?",
        "options": [
            "To create new components",
            "To group elements without adding extra DOM elements",
            "To manage routing",
            "To handle HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To group elements without adding extra DOM elements",
        "difficulty": "medium",
        "explanation": "ng-container allows grouping and applying directives to multiple elements without introducing an additional DOM element.",
        "hint": "This helps in keeping the DOM structure clean"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following event binding demonstrate?\n\n```html\n<button (click)=\"incrementCounter()\">Click me</button>\n```",
        "options": [
            "A standard button element",
            "An event binding that calls a component method on click",
            "A property binding",
            "A structural directive"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An event binding that calls a component method on click",
        "difficulty": "easy",
        "explanation": "The (click) syntax is an event binding that calls the specified method when the button is clicked.",
        "hint": "Event bindings allow responding to user interactions"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the primary purpose of @ContentChild in Angular?",
        "options": [
            "To create new components",
            "To access content projected into a component",
            "To manage routing",
            "To handle HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To access content projected into a component",
        "difficulty": "hard",
        "explanation": "@ContentChild allows a component to access and interact with content projected using ng-content.",
        "hint": "This is different from ViewChild, as it works with projected content"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What does the following interpolation syntax demonstrate?\n\n```html\n<div>{{ user?.name }}</div>\n```",
        "options": [
            "Standard text display",
            "Safe navigation operator to prevent null/undefined errors",
            "Property binding",
            "Event binding"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Safe navigation operator to prevent null/undefined errors",
        "difficulty": "medium",
        "explanation": "The ?. safe navigation operator prevents errors when accessing properties of potentially null or undefined objects.",
        "hint": "This helps handle cases where an object might not be initialized"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Components",
        "questionText": "What is the purpose of ngDoCheck() lifecycle hook?",
        "options": [
            "To initialize the component",
            "To implement custom change detection logic",
            "To destroy the component",
            "To manage component routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To implement custom change detection logic",
        "difficulty": "hard",
        "explanation": "ngDoCheck() is called during every change detection run, allowing developers to implement custom change detection logic.",
        "hint": "This is an advanced hook for fine-grained change tracking"
    },
    
    // Directives & Pipes
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What type of directive changes the appearance or behavior of an element?",
        "options": ["Structural Directive", "Attribute Directive", "Component Directive", "Event Directive"],
        "correctOptionIndex": 1,
        "correctOptionText": "Attribute Directive",
        "difficulty": "easy",
        "explanation": "Attribute directives modify the appearance or behavior of an element, component, or another directive without changing the DOM structure.",
        "hint": "Think of directives that look like HTML attributes but provide additional functionality."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Which directive is used to conditionally render an element in Angular?",
        "options": ["*ngIf", "*ngFor", "*ngSwitch", "*ngClass"],
        "correctOptionIndex": 0,
        "correctOptionText": "*ngIf",
        "difficulty": "easy",
        "explanation": "*ngIf is a structural directive that conditionally renders an element based on a boolean expression.",
        "hint": "This directive completely removes or recreates an element in the DOM based on a condition."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What is the primary difference between pure and impure pipes?",
        "options": [
            "Pure pipes are faster", 
            "Impure pipes are always more complex", 
            "Pure pipes only run when the reference of input changes", 
            "Impure pipes run on every change detection cycle"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Impure pipes run on every change detection cycle",
        "difficulty": "medium",
        "explanation": "Impure pipes are called on every change detection cycle, regardless of whether the input has changed. Pure pipes only run when the reference of the input changes.",
        "hint": "Consider performance implications when creating pipes."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "How do you create a custom directive in Angular?",
        "options": [
            "Using @Directive decorator", 
            "By extending HTMLElement", 
            "Through @Component decorator", 
            "By implementing DirectiveInterface"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using @Directive decorator",
        "difficulty": "medium",
        "explanation": "Custom directives are created by using the @Directive decorator and defining a class with specific element manipulation logic.",
        "hint": "The decorator provides metadata about how the directive should be used."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What does the code `*ngFor='let item of items; let i = index'` demonstrate?",
        "options": [
            "Iterating through an array with index tracking", 
            "Creating a new array", 
            "Filtering array items", 
            "Sorting array elements"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Iterating through an array with index tracking",
        "difficulty": "easy",
        "explanation": "This *ngFor syntax iterates through an array 'items' and provides access to both the current item and its index.",
        "hint": "The 'let i = index' part allows you to use the current iteration index."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Which built-in pipe can transform text to uppercase?",
        "options": ["uppercase", "toUpperCase", "upper", "upperCase"],
        "correctOptionIndex": 0,
        "correctOptionText": "uppercase",
        "difficulty": "easy",
        "explanation": "The uppercase pipe in Angular transforms text to uppercase letters.",
        "hint": "Used in templates like: {{ name | uppercase }}"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What does the @HostListener decorator do in a custom directive?",
        "options": [
            "Listens to host element events", 
            "Creates a new component", 
            "Defines directive metadata", 
            "Manages dependency injection"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Listens to host element events",
        "difficulty": "hard",
        "explanation": "@HostListener allows a directive to listen and respond to events on its host element.",
        "hint": "It's used to add event handling logic to custom directives."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Code snippet: What will be the output of `{{ 1.2345 | number:'1.2-2' }}`?",
        "options": ["1.23", "1.234", "01.23", "1"],
        "correctOptionIndex": 0,
        "correctOptionText": "1.23",
        "difficulty": "medium",
        "explanation": "The number pipe formats the number with minimum 1 digit before decimal, and 2-2 digits after decimal.",
        "hint": "The format is 'minimumIntegerDigits.minimumFractionDigits-maximumFractionDigits'"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What is the purpose of @Input() decorator in directives?",
        "options": [
            "To define input properties", 
            "To create a new component", 
            "To inject dependencies", 
            "To handle events"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To define input properties",
        "difficulty": "easy",
        "explanation": "@Input() allows a directive to accept input values from its parent component.",
        "hint": "Similar to props in other frameworks, it enables data binding."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Which structural directive allows alternative rendering based on a condition?",
        "options": ["*ngIf", "*ngSwitch", "*ngFor", "*ngClass"],
        "correctOptionIndex": 1,
        "correctOptionText": "*ngSwitch",
        "difficulty": "medium",
        "explanation": "*ngSwitch allows rendering different elements based on multiple conditions.",
        "hint": "Similar to switch-case statement in programming languages."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What's the difference between async pipe and other pipes?",
        "options": [
            "It handles Promises and Observables", 
            "It's faster", 
            "It works only with numbers", 
            "It modifies data directly"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It handles Promises and Observables",
        "difficulty": "hard",
        "explanation": "Async pipe can automatically subscribe and unsubscribe from Promises and Observables, handling their asynchronous nature.",
        "hint": "Used frequently with RxJS streams in Angular applications."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "How can you chain multiple pipes together?",
        "options": [
            "Using | operator multiple times", 
            "Creating a complex pipe", 
            "Using nested pipe functions", 
            "It's not possible in Angular"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using | operator multiple times",
        "difficulty": "easy",
        "explanation": "Pipes can be chained using the | operator, with each pipe transforming the output of the previous one.",
        "hint": "Example: {{ value | pipe1 | pipe2 | pipe3 }}"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What does @HostBinding do in a custom directive?",
        "options": [
            "Binds properties to the host element", 
            "Creates a new component", 
            "Manages event listeners", 
            "Injects dependencies"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Binds properties to the host element",
        "difficulty": "hard",
        "explanation": "@HostBinding allows a directive to dynamically set properties on its host element.",
        "hint": "Used for conditionally applying styles or attributes."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Which pipe can format dates in Angular?",
        "options": ["datePipe", "formatDate", "date", "DatePipe"],
        "correctOptionIndex": 2,
        "correctOptionText": "date",
        "difficulty": "easy",
        "explanation": "The date pipe formats dates according to locale rules and custom formats.",
        "hint": "Used like: {{ birthday | date:'short' }}"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What is the default behavior of a pure pipe?",
        "options": [
            "Runs on every change detection", 
            "Caches results based on input reference", 
            "Always creates new instances", 
            "Modifies input directly"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Caches results based on input reference",
        "difficulty": "medium",
        "explanation": "Pure pipes cache their results and only recompute when the input reference changes, improving performance.",
        "hint": "They are more efficient than impure pipes."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What is the primary purpose of a custom pipe in Angular?",
        "options": [
            "To create new components", 
            "To transform data before display", 
            "To manage routing", 
            "To handle HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To transform data before display",
        "difficulty": "easy",
        "explanation": "Custom pipes allow developers to create reusable data transformation logic that can be applied in templates.",
        "hint": "Pipes modify data presentation without changing the original data source."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Which decorator is used to define a custom pipe?",
        "options": ["@Pipe", "@Injectable", "@Component", "@Directive"],
        "correctOptionIndex": 0,
        "correctOptionText": "@Pipe",
        "difficulty": "easy",
        "explanation": "The @Pipe decorator is used to define a custom pipe class in Angular, specifying its name and transformation logic.",
        "hint": "This decorator marks a class as a pipe that can be used in templates."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What does the code `*ngFor='let item of items; trackBy: trackByFn'` help achieve?",
        "options": [
            "Improve performance by tracking list changes", 
            "Sort the list", 
            "Filter the list", 
            "Create a new list"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Improve performance by tracking list changes",
        "difficulty": "medium",
        "explanation": "trackBy helps Angular optimize rendering by identifying unique items, reducing unnecessary DOM manipulations.",
        "hint": "Useful for large lists where you want to minimize re-rendering"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "How can you create a pure pipe that converts temperature?",
        "options": [
            "By implementing PipeTransform interface", 
            "By extending BasePipe class", 
            "By using @Injectable decorator", 
            "By creating a component"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "By implementing PipeTransform interface",
        "difficulty": "hard",
        "explanation": "Custom pipes must implement the PipeTransform interface, which requires a transform method defining the pipe's logic.",
        "hint": "Example implementation involves creating a method that converts input values"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What is the purpose of the safe navigation operator (?.) in Angular?",
        "options": [
            "To prevent null reference errors", 
            "To create new objects", 
            "To validate form inputs", 
            "To handle HTTP errors"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To prevent null reference errors",
        "difficulty": "medium",
        "explanation": "The safe navigation operator prevents template errors when accessing potentially undefined or null properties.",
        "hint": "Used like: {{ user?.name }} to safely access nested properties"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Which directive allows dynamic application of CSS classes?",
        "options": ["*ngClass", "[ngClass]", "className", "@HostBinding"],
        "correctOptionIndex": 1,
        "correctOptionText": "[ngClass]",
        "difficulty": "easy",
        "explanation": "[ngClass] allows dynamic application of CSS classes based on component logic.",
        "hint": "Can use object or array syntax for conditional class application"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What type of method is required in a custom pipe implementation?",
        "options": [
            "render()", 
            "transform()", 
            "convert()", 
            "modify()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "transform()",
        "difficulty": "medium",
        "explanation": "Custom pipes must implement a transform() method that defines how input values are transformed.",
        "hint": "This method is part of the PipeTransform interface"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "How many parameters can a pipe's transform method accept?",
        "options": ["Only one", "Exactly two", "Up to three", "Unlimited"],
        "correctOptionIndex": 2,
        "correctOptionText": "Up to three",
        "difficulty": "hard",
        "explanation": "A pipe's transform method can accept the primary value and up to two additional optional parameters.",
        "hint": "Additional parameters provide more flexibility in transformation"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What does the async pipe automatically handle?",
        "options": [
            "HTTP requests", 
            "Subscribing and unsubscribing from Observables", 
            "Component lifecycle", 
            "Data validation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Subscribing and unsubscribing from Observables",
        "difficulty": "medium",
        "explanation": "The async pipe automatically manages Observable subscriptions, preventing memory leaks.",
        "hint": "Simplifies handling of asynchronous data in templates"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Which structural directive can repeat elements based on a range?",
        "options": ["*ngFor", "*ngRepeat", "*ngRange", "*ngIterate"],
        "correctOptionIndex": 0,
        "correctOptionText": "*ngFor",
        "difficulty": "easy",
        "explanation": "*ngFor can be used with various iterable sources, including arrays created with methods like Array.from() or spread operators.",
        "hint": "Can create elements based on numeric ranges or collections"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What does the percent pipe do?",
        "options": [
            "Converts numbers to percentages", 
            "Calculates percentage differences", 
            "Formats percentage display", 
            "Rounds percentage values"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Formats percentage display",
        "difficulty": "medium",
        "explanation": "The percent pipe formats a number as a percentage with optional digit formatting.",
        "hint": "Used like: {{ 0.25 | percent }}"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "How can you make a custom pipe impure?",
        "options": [
            "Use @Impure decorator", 
            "Set pure: false in @Pipe", 
            "Implement ImpurePipe interface", 
            "It's not possible"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Set pure: false in @Pipe",
        "difficulty": "hard",
        "explanation": "By setting pure: false in the @Pipe decorator, you create an impure pipe that runs on every change detection cycle.",
        "hint": "Impure pipes can be less performant but more flexible"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What is the primary use of *ngIf with else?",
        "options": [
            "Create alternative rendering paths", 
            "Handle errors", 
            "Validate forms", 
            "Manage routing"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Create alternative rendering paths",
        "difficulty": "easy",
        "explanation": "*ngIf with else allows conditional rendering of template blocks.",
        "hint": "Syntax involves using ng-template with a template reference variable"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "Which method ensures a custom directive responds to input changes?",
        "options": [
            "ngOnChanges", 
            "constructor", 
            "ngInit", 
            "render()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "ngOnChanges",
        "difficulty": "medium",
        "explanation": "ngOnChanges is called whenever an input-bound property changes, allowing directives to respond to dynamic inputs.",
        "hint": "Part of the component/directive lifecycle hooks"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Directives & Pipes",
        "questionText": "What does the currency pipe do?",
        "options": [
            "Convert between currencies", 
            "Format numbers as currency", 
            "Calculate exchange rates", 
            "Store currency information"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Format numbers as currency",
        "difficulty": "easy",
        "explanation": "The currency pipe formats numbers with currency symbol, code, and locale-specific formatting.",
        "hint": "Used like: {{ price | currency:'USD':'symbol' }}"
    },
    
    // Services & Dependency Injection[
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What decorator is used to define a service that can be injected?",
        "options": ["@Injectable", "@Inject", "@Service", "@Module"],
        "correctOptionIndex": 0,
        "correctOptionText": "@Injectable",
        "difficulty": "easy",
        "explanation": "@Injectable marks a class as available to be provided and injected as a dependency, enabling Angular's dependency injection system.",
        "hint": "This decorator allows the class to be used in the dependency injection mechanism."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the primary purpose of dependency injection in Angular?",
        "options": [
            "To create new components", 
            "To manage component lifecycle", 
            "To provide loose coupling between classes", 
            "To handle routing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To provide loose coupling between classes",
        "difficulty": "medium",
        "explanation": "Dependency Injection allows classes to receive their dependencies from external sources, reducing tight coupling and improving modularity.",
        "hint": "It helps in creating more maintainable and testable code."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How can you provide a service at the root level in Angular?",
        "options": [
            "Using @Injectable({ providedIn: 'root' })", 
            "Using @NgModule", 
            "Using constructor injection", 
            "Using @Provide decorator"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using @Injectable({ providedIn: 'root' })",
        "difficulty": "medium",
        "explanation": "providedIn: 'root' ensures the service is available application-wide as a single instance.",
        "hint": "This is the recommended way to create application-wide singleton services."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the difference between @Injectable and @Inject?",
        "options": [
            "@Injectable creates services, @Inject injects dependencies", 
            "They are exactly the same", 
            "@Inject is used for primitive values", 
            "@Injectable is only for components"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "@Injectable creates services, @Inject injects dependencies",
        "difficulty": "hard",
        "explanation": "@Injectable marks a class as a service that can be injected, while @Inject is used to explicitly specify dependency tokens.",
        "hint": "Think of @Injectable as a class decorator and @Inject as a parameter decorator."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is a service in Angular?",
        "options": [
            "A component with special methods", 
            "A class that handles specific functionality", 
            "A type of directive", 
            "A routing mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A class that handles specific functionality",
        "difficulty": "easy",
        "explanation": "Services in Angular are classes that encapsulate business logic, data fetching, or shared functionality across components.",
        "hint": "Services promote code reusability and separation of concerns."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How do you inject a service into a component?",
        "options": [
            "Using @Inject decorator", 
            "Through constructor parameter", 
            "Using @Service decorator", 
            "Manually creating an instance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Through constructor parameter",
        "difficulty": "easy",
        "explanation": "Services are injected into components through the constructor parameter, with Angular's DI system handling the instantiation.",
        "hint": "Example: constructor(private myService: MyService) {}"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is a provider in Angular's dependency injection?",
        "options": [
            "A class that creates service instances", 
            "A component that manages services", 
            "A mechanism to configure service creation", 
            "A routing configuration"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A mechanism to configure service creation",
        "difficulty": "medium",
        "explanation": "Providers tell the injector how to create an instance of a dependency, allowing customization of service instantiation.",
        "hint": "Providers can specify different ways of creating and sharing service instances."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What does the scope of a service mean in Angular?",
        "options": [
            "The physical size of the service", 
            "Where and how the service is available", 
            "The number of methods in the service", 
            "The complexity of the service"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Where and how the service is available",
        "difficulty": "medium",
        "explanation": "Service scope determines the lifetime and accessibility of a service within the application or specific modules.",
        "hint": "Services can be provided at root, module, or component level."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How can you create a hierarchical dependency injection?",
        "options": [
            "Using @Inject decorator", 
            "Providing services in different modules", 
            "Using constructor injection", 
            "By creating multiple service instances"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Providing services in different modules",
        "difficulty": "hard",
        "explanation": "Hierarchical DI allows services to be provided at different levels of the application, creating a hierarchical resolution strategy.",
        "hint": "Services can be scoped to specific modules or components."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the purpose of @Optional() decorator?",
        "options": [
            "To make a service mandatory", 
            "To make a dependency injection optional", 
            "To create optional methods", 
            "To handle service errors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To make a dependency injection optional",
        "difficulty": "hard",
        "explanation": "@Optional() allows a dependency to be null if no provider is found, preventing injection errors.",
        "hint": "Useful when a service might not always be available."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What does the @Self() decorator do in dependency injection?",
        "options": [
            "Creates a self-referencing service", 
            "Limits service resolution to the current component", 
            "Prevents service injection", 
            "Creates a singleton service"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Limits service resolution to the current component",
        "difficulty": "hard",
        "explanation": "@Self() instructs the injector to only look for the dependency in the local injector of the current component.",
        "hint": "Restricts dependency lookup to the immediate context."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How do you share data between components using a service?",
        "options": [
            "Using @Input and @Output", 
            "Through service properties and methods", 
            "Using global variables", 
            "Through router parameters"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Through service properties and methods",
        "difficulty": "medium",
        "explanation": "Services can maintain shared state and provide methods for components to interact and exchange data.",
        "hint": "Services act as a central data store accessible by multiple components."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the difference between a service and a component?",
        "options": [
            "Services and components are the same", 
            "Services handle logic, components handle UI", 
            "Components cannot use services", 
            "Services cannot be injected"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Services handle logic, components handle UI",
        "difficulty": "easy",
        "explanation": "Services are responsible for business logic, data fetching, and shared functionality, while components manage UI and user interactions.",
        "hint": "Separation of concerns is key in Angular architecture."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What does the @Host() decorator do in dependency injection?",
        "options": [
            "Creates a new host component", 
            "Limits service resolution to the component's host", 
            "Prevents service injection", 
            "Creates a global service"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Limits service resolution to the component's host",
        "difficulty": "hard",
        "explanation": "@Host() instructs the injector to look for the dependency in the host component of the current component.",
        "hint": "Useful in scenarios involving component composition."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How can you create a multi-provider service?",
        "options": [
            "Using @MultiProvide decorator", 
            "Using useFactory with multi: true", 
            "Creating multiple service instances", 
            "Using @Injectable multiple times"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using useFactory with multi: true",
        "difficulty": "hard",
        "explanation": "Multi-providers allow multiple service implementations to be injected for the same token.",
        "hint": "Useful for plugin-like architectures or extending core services."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the primary purpose of a service in Angular?",
        "options": [
            "To define component templates",
            "To share data and functionality across components",
            "To create HTML elements",
            "To manage routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To share data and functionality across components",
        "difficulty": "easy",
        "explanation": "Services in Angular are used to organize and share code across the application, providing a way to centralize business logic, data fetching, and other reusable functionality.",
        "hint": "Think about code reusability and separation of concerns"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "Which decorator is used to define a service in Angular?",
        "options": ["@Component", "@Injectable", "@Service", "@Module"],
        "correctOptionIndex": 1,
        "correctOptionText": "@Injectable",
        "difficulty": "easy",
        "explanation": "The @Injectable decorator marks a class as available to be provided and injected as a dependency.",
        "hint": "This decorator allows the class to be injected into other classes"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the purpose of the 'providedIn' property in @Injectable?",
        "options": [
            "To specify where the service can be used",
            "To create a new instance of the service",
            "To define service methods",
            "To inject dependencies"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To specify where the service can be used",
        "difficulty": "medium",
        "explanation": "The 'providedIn' property allows you to specify the injection scope, such as 'root' for application-wide singleton, or a specific module.",
        "hint": "It determines the visibility and lifetime of the service"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What will the following code do?\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class UserService { }",
        "options": [
            "Create a service local to a component",
            "Create a global singleton service",
            "Restrict the service to a specific module",
            "Prevent the service from being injected"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Create a global singleton service",
        "difficulty": "medium",
        "explanation": "The 'providedIn: root' ensures that only one instance of the service is created and shared across the entire application.",
        "hint": "Root means the service is available application-wide"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How do you inject a service into a component?",
        "options": [
            "By using new keyword",
            "By using @Inject decorator",
            "By adding it to the constructor with type annotation",
            "By manually creating an instance"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "By adding it to the constructor with type annotation",
        "difficulty": "easy",
        "explanation": "Angular's dependency injection system automatically provides the service instance when it's added to the constructor with its type.",
        "hint": "Constructor injection is the standard Angular pattern"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the difference between @Injectable and @Inject?",
        "options": [
            "@Injectable creates services, @Inject injects them",
            "@Injectable is for classes, @Inject is for primitive values",
            "@Injectable defines providers, @Inject resolves dependencies",
            "They are exactly the same"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "@Injectable is for classes, @Inject is for primitive values",
        "difficulty": "hard",
        "explanation": "@Injectable is used to define services that can be injected, while @Inject is used to inject non-class dependencies like primitive values or tokens.",
        "hint": "Think about how you'd inject a configuration value"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What does hierarchical dependency injection mean in Angular?",
        "options": [
            "Services can only be injected at the root level",
            "Each component can have its own service instance",
            "Services are always singleton",
            "Dependency injection is disabled"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Each component can have its own service instance",
        "difficulty": "medium",
        "explanation": "Angular's DI system allows services to be created at different levels of the component tree, potentially creating unique instances for different components.",
        "hint": "Services can have different scopes in the component hierarchy"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is a dependency injection token?",
        "options": [
            "A unique identifier for a service",
            "A method to create services",
            "A way to prevent service injection",
            "A component decorator"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A unique identifier for a service",
        "difficulty": "hard",
        "explanation": "A DI token is a unique key used by Angular's injector to identify and retrieve dependency instances, which can be a class type or a custom InjectionToken.",
        "hint": "Think of it as a unique key in a dependency dictionary"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How can you manually provide a service in NgModule?",
        "options": [
            "Using @Provide decorator",
            "Using providers array in @NgModule",
            "By creating a new instance",
            "It's not possible"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using providers array in @NgModule",
        "difficulty": "medium",
        "explanation": "Services can be manually provided in a module by adding them to the providers array in the @NgModule decorator.",
        "hint": "Look for the providers property in module configuration"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What happens if a service is not provided in Angular?",
        "options": [
            "The application crashes",
            "A runtime error is thrown",
            "The service becomes a global variable",
            "The dependency cannot be resolved"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A runtime error is thrown",
        "difficulty": "medium",
        "explanation": "If a service is not provided and attempted to be injected, Angular will throw a runtime error indicating that the dependency cannot be resolved.",
        "hint": "Unprovided services lead to dependency resolution errors"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the purpose of @Optional() decorator in dependency injection?",
        "options": [
            "To make a dependency mandatory",
            "To create optional service methods",
            "To allow a dependency to be null if not provided",
            "To prevent service injection"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To allow a dependency to be null if not provided",
        "difficulty": "hard",
        "explanation": "@Optional() prevents a dependency injection error if the service is not provided, allowing the dependency to be null.",
        "hint": "Prevents errors when a service might not be available"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How do you create a service in Angular?",
        "options": [
            "By extending Component class",
            "By using @Service decorator",
            "By creating a class and using @Injectable decorator",
            "By defining it in a module"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "By creating a class and using @Injectable decorator",
        "difficulty": "easy",
        "explanation": "A service is created by defining a TypeScript class and decorating it with @Injectable to make it available for dependency injection.",
        "hint": "Think about creating a plain TypeScript class with a decorator"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What does the @Self() decorator do in dependency injection?",
        "options": [
            "Allows injection only from the current component",
            "Creates a new service instance",
            "Prevents service injection",
            "Makes the service global"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Allows injection only from the current component",
        "difficulty": "hard",
        "explanation": "@Self() instructs Angular to look for the dependency only in the local injector of the current component or directive.",
        "hint": "Restricts dependency resolution to the current context"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the primary advantage of using services in Angular?",
        "options": [
            "To reduce component complexity",
            "To create HTML elements",
            "To manage routing",
            "To define component styles"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To reduce component complexity",
        "difficulty": "easy",
        "explanation": "Services help separate business logic from components, making components lighter and more focused on view-related tasks.",
        "hint": "Think about separation of concerns"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is dependency injection in Angular?",
        "options": [
            "A way to create new objects",
            "A design pattern for managing dependencies",
            "A method to define component styles",
            "A routing mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A design pattern for managing dependencies",
        "difficulty": "easy",
        "explanation": "Dependency Injection is a design pattern where dependencies are passed into a component or service, rather than being created within it.",
        "hint": "Think about how services are 'injected' into components"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What does the @Host() decorator do in dependency injection?",
        "options": [
            "Creates a new service instance",
            "Limits dependency lookup to the component's host",
            "Makes the service global",
            "Prevents service injection"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Limits dependency lookup to the component's host",
        "difficulty": "hard",
        "explanation": "@Host() restricts the dependency search to the host component of the current component or directive.",
        "hint": "Constrains dependency resolution to the immediate host"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How can you create a multi-provider service?",
        "options": [
            "By using @MultiProvide decorator",
            "Using useFactory with multi: true",
            "By creating multiple service instances",
            "It's not possible in Angular"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using useFactory with multi: true",
        "difficulty": "hard",
        "explanation": "Multi-providers allow multiple service implementations to be injected for the same token by using the multi: true configuration.",
        "hint": "Multiple services can be provided for a single token"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the difference between useClass and useValue in service providers?",
        "options": [
            "They are exactly the same",
            "useClass creates a new instance, useValue uses an existing value",
            "useClass is for primitive values, useValue for objects",
            "They cannot be used together"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "useClass creates a new instance, useValue uses an existing value",
        "difficulty": "medium",
        "explanation": "useClass creates a new instance of a class, while useValue allows you to provide an existing object or primitive value directly.",
        "hint": "One creates, one provides an existing value"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the purpose of useFactory in service providers?",
        "options": [
            "To create static service instances",
            "To dynamically create service instances with custom logic",
            "To prevent service injection",
            "To define service methods"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To dynamically create service instances with custom logic",
        "difficulty": "hard",
        "explanation": "useFactory allows you to create service instances dynamically by providing a factory function that can include complex initialization logic.",
        "hint": "Think about creating services with complex setup requirements"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How do you inject a service into another service?",
        "options": [
            "Using @Inject decorator in the constructor",
            "By creating a new instance manually",
            "It's not possible in Angular",
            "By adding it as a static method"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using @Inject decorator in the constructor",
        "difficulty": "medium",
        "explanation": "Services can be injected into other services using constructor injection, just like in components.",
        "hint": "Constructor injection works the same way as in components"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the scope of a service provided in a module?",
        "options": [
            "Global to the entire application",
            "Limited to the module where it's provided",
            "Unique to each component",
            "Cannot be provided in a module"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Limited to the module where it's provided",
        "difficulty": "medium",
        "explanation": "When a service is provided in a specific module, it's only available to the components and services within that module.",
        "hint": "Providers in a module limit the service's visibility"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is an InjectionToken used for?",
        "options": [
            "To create service methods",
            "To provide non-class dependencies",
            "To prevent service injection",
            "To define component templates"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide non-class dependencies",
        "difficulty": "hard",
        "explanation": "InjectionToken allows you to create a unique token for dependencies that are not classes, such as configuration objects or primitive values.",
        "hint": "Used for injecting values that aren't class types"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What does @SkipSelf() do in dependency injection?",
        "options": [
            "Makes the service mandatory",
            "Skips the current injector and looks in parent injectors",
            "Creates a new service instance",
            "Prevents service injection"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Skips the current injector and looks in parent injectors",
        "difficulty": "hard",
        "explanation": "@SkipSelf() instructs Angular to skip the current injector and look for the dependency in parent injectors.",
        "hint": "Searches for dependency in parent component hierarchy"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How can you prevent a service from being a singleton?",
        "options": [
            "Remove @Injectable decorator",
            "Use providedIn: 'any'",
            "Manually create new instances",
            "It's not possible in Angular"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use providedIn: 'any'",
        "difficulty": "hard",
        "explanation": "Using providedIn: 'any' ensures that each lazy-loaded module gets its own unique instance of the service.",
        "hint": "Look for a way to create unique service instances per module"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the primary purpose of dependency injection decorators like @Optional(), @Self(), @SkipSelf()?",
        "options": [
            "To create new service instances",
            "To control how dependencies are resolved",
            "To define service methods",
            "To prevent service injection"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To control how dependencies are resolved",
        "difficulty": "hard",
        "explanation": "These decorators provide fine-grained control over how Angular's dependency injection system searches for and resolves dependencies.",
        "hint": "They modify the dependency lookup behavior"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the recommended way to share data between components?",
        "options": [
            "Using global variables",
            "Passing data through input/output",
            "Using services with shared state",
            "Using window object"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using services with shared state",
        "difficulty": "medium",
        "explanation": "Services with shared state provide a clean and manageable way to share data between components in Angular.",
        "hint": "Think about centralized data management"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "How does lazy loading impact service injection?",
        "options": [
            "Prevents service injection",
            "Creates unique service instances for lazy-loaded modules",
            "Disables dependency injection",
            "No impact on service injection"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates unique service instances for lazy-loaded modules",
        "difficulty": "hard",
        "explanation": "Lazy-loaded modules can have their own unique instances of services, depending on the providedIn configuration.",
        "hint": "Consider how module loading affects service scope"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Services & Dependency Injection",
        "questionText": "What is the most common way to define a service in Angular?",
        "options": [
            "Using @Service decorator",
            "Extending a base Service class",
            "Creating a class with @Injectable decorator",
            "Defining it in a module directly"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Creating a class with @Injectable decorator",
        "difficulty": "easy",
        "explanation": "The standard way to create a service is to define a TypeScript class and decorate it with @Injectable.",
        "hint": "Think about a simple class with a decorator"
    },

    // RxJS & Observables
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is an Observable in RxJS?",
        "options": [
            "A way to handle synchronous data",
            "A stream of values that can be observed over time",
            "A method to create static arrays",
            "A type of event listener"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A stream of values that can be observed over time",
        "difficulty": "easy",
        "explanation": "An Observable is a core concept in RxJS that represents a stream of values or events that can be observed over time, allowing for complex async operations.",
        "hint": "Think of it as a collection of future values"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What method creates an Observable from a single value?",
        "options": ["from()", "of()", "create()", "interval()"],
        "correctOptionIndex": 1,
        "correctOptionText": "of()",
        "difficulty": "easy",
        "explanation": "The of() operator creates an Observable that emits the specified value(s) and then completes.",
        "hint": "Used to create an Observable from a single or multiple static values"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the difference between map() and switchMap()?",
        "options": [
            "They are exactly the same",
            "map() transforms values, switchMap() switches to a new Observable",
            "map() is for arrays, switchMap() is for Observables",
            "switchMap() only works with HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "map() transforms values, switchMap() switches to a new Observable",
        "difficulty": "medium",
        "explanation": "map() transforms the emitted values, while switchMap() allows switching to a new Observable, canceling the previous inner Observable subscription.",
        "hint": "Think about transformation vs. switching Observables"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "How do you unsubscribe from an Observable?",
        "options": [
            "Using .unsubscribe() method",
            "It automatically unsubscribes",
            "By calling .complete()",
            "Observables cannot be unsubscribed"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using .unsubscribe() method",
        "difficulty": "easy",
        "explanation": "Subscriptions can be manually unsubscribed using the .unsubscribe() method to prevent memory leaks.",
        "hint": "Prevent memory leaks by manually closing subscriptions"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the catchError operator do?",
        "options": [
            "Prevents all errors",
            "Handles and transforms error events",
            "Stops the Observable completely",
            "Creates new errors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Handles and transforms error events",
        "difficulty": "medium",
        "explanation": "catchError allows you to handle errors in an Observable stream by catching and potentially returning a new Observable or throwing an error.",
        "hint": "Used for error handling and recovery in Observable streams"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the purpose of the takeUntil operator?",
        "options": [
            "To take only specific values",
            "To stop an Observable when another Observable emits",
            "To limit Observable emissions",
            "To create a new Observable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To stop an Observable when another Observable emits",
        "difficulty": "medium",
        "explanation": "takeUntil allows you to automatically complete an Observable when another 'notifier' Observable emits a value, useful for cleaning up subscriptions.",
        "hint": "Helps with automatic subscription management"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the difference between concat() and merge()?",
        "options": [
            "They are exactly the same",
            "concat() subscribes to Observables sequentially, merge() subscribes concurrently",
            "concat() is only for arrays",
            "merge() only works with HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "concat() subscribes to Observables sequentially, merge() subscribes concurrently",
        "difficulty": "hard",
        "explanation": "concat() subscribes to Observables one after another, emitting values in sequence, while merge() subscribes to multiple Observables concurrently.",
        "hint": "Think about sequential vs. parallel Observable emissions"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the debounceTime operator do?",
        "options": [
            "Completely stops Observable emissions",
            "Delays Observable emissions by a fixed time",
            "Waits for a pause in emissions before emitting the last value",
            "Increases Observable performance"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Waits for a pause in emissions before emitting the last value",
        "difficulty": "medium",
        "explanation": "debounceTime waits for a specified time of silence before emitting the most recent value, useful for reducing unnecessary operations like search input.",
        "hint": "Used to limit rapid successive events"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is a Subject in RxJS?",
        "options": [
            "A type of error handling",
            "An Observable that can multicast values to many Observers",
            "A way to create static values",
            "A method to stop Observables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An Observable that can multicast values to many Observers",
        "difficulty": "medium",
        "explanation": "A Subject is both an Observable and an Observer, allowing it to multicast values to multiple subscribers.",
        "hint": "Think of it as a central communication hub"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the switchMap operator typically used for?",
        "options": [
            "To create new Observables",
            "To handle HTTP requests and cancel previous requests",
            "To merge multiple Observables",
            "To filter Observable values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To handle HTTP requests and cancel previous requests",
        "difficulty": "medium",
        "explanation": "switchMap is commonly used in HTTP scenarios to switch to a new Observable and automatically cancel the previous subscription.",
        "hint": "Useful for scenarios like search-as-you-type"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the difference between Observable and Promise?",
        "options": [
            "They are exactly the same",
            "Observables can be canceled, Promises cannot",
            "Promises are more powerful",
            "Observables only work in Angular"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Observables can be canceled, Promises cannot",
        "difficulty": "medium",
        "explanation": "Observables can be canceled and can emit multiple values, while Promises resolve once and cannot be canceled.",
        "hint": "Think about single vs. multiple value streams"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the shareReplay operator do?",
        "options": [
            "Stops Observable emissions",
            "Shares the source Observable with multiple subscribers and replays recent values",
            "Creates multiple copies of an Observable",
            "Increases Observable performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Shares the source Observable with multiple subscribers and replays recent values",
        "difficulty": "hard",
        "explanation": "shareReplay allows multiple subscribers to share the same Observable execution and replay a specified number of previous emissions.",
        "hint": "Useful for caching and preventing multiple unnecessary network requests"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the purpose of the combineLatest operator?",

"options": [
            "To combine the last values from multiple Observables",
            "To merge Observables completely",
            "To stop Observable emissions",
            "To create a new Observable"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To combine the last values from multiple Observables",
        "difficulty": "medium",
        "explanation": "combineLatest emits an array of the latest values from multiple Observables whenever any of them emit a new value.",
        "hint": "Used when you need to work with multiple Observables simultaneously"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is a Cold Observable?",
        "options": [
            "An Observable that doesn't emit values",
            "An Observable that starts producing values when subscribed",
            "A frozen Observable",
            "An Observable with no subscribers"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An Observable that starts producing values when subscribed",
        "difficulty": "hard",
        "explanation": "A Cold Observable creates a new execution for each subscriber, typically used for data sources like HTTP requests.",
        "hint": "Think about lazy initialization of data streams"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the exhaustMap operator do?",

"options": [
            "Combines all Observable values",
            "Ignores new Observable sources while the current one is active",
            "Creates new Observables constantly",
            "Stops all Observable emissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ignores new Observable sources while the current one is active",
        "difficulty": "hard",
        "explanation": "exhaustMap switches to a new Observable but ignores subsequent source values until the current inner Observable completes.",
        "hint": "Prevents overlapping Observable executions"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "How do you create an Observable from scratch?",
        "options": [
            "Using new Observable() constructor",
            "Using of() method",
            "Using from() method",
            "It's not possible"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using new Observable() constructor",
        "difficulty": "medium",
        "explanation": "You can create a custom Observable using the new Observable() constructor and defining the subscription logic.",
        "hint": "Define your own emission and completion logic"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the primary purpose of the tap operator?",
        "options": [
            "To transform Observable values",
            "To perform side effects without modifying the value",
            "To filter Observable values",
            "To stop Observable emissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To perform side effects without modifying the value",
        "difficulty": "easy",
        "explanation": "tap allows you to perform side effects like logging or debugging without modifying the emitted values.",
        "hint": "Used for debugging and logging in Observable streams"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is a Hot Observable?",
        "options": [
            "An Observable that's always active",
            "An Observable that produces values independently of subscribers",
            "A fast Observable",
            "An Observable with many subscribers"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An Observable that produces values independently of subscribers",
        "difficulty": "hard",
        "explanation": "A Hot Observable produces values regardless of subscriptions, like a live data stream or WebSocket.",
        "hint": "Think about continuous data sources"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the filter operator do?",
        "options": [
            "Transforms Observable values",
            "Stops all Observable emissions",
            "Selects values that meet a specific condition",
            "Merges multiple Observables"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Selects values that meet a specific condition",
        "difficulty": "easy",
        "explanation": "filter allows you to select only the values that pass a test implemented by a provided function.",
        "hint": "Similar to Array.filter() method"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the purpose of the forkJoin operator?",
        "options": [
            "To create a new Observable",
            "To wait for multiple Observables to complete and emit their last values",
            "To merge Observables immediately",
            "To stop Observable emissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To wait for multiple Observables to complete and emit their last values",
        "difficulty": "medium",
        "explanation": "forkJoin waits for all provided Observables to complete and then emits an array of their final values.",
        "hint": "Useful for parallel async operations"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the interval() operator create?",
        "options": [
            "A one-time Observable",
            "An Observable that emits sequential numbers at a specified interval",
            "A random number Observable",
            "A static number Observable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An Observable that emits sequential numbers at a specified interval",
        "difficulty": "easy",
        "explanation": "interval() creates an Observable that emits incremental numbers at specified time intervals.",
        "hint": "Think about a timer that continuously emits values"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the primary difference between BehaviorSubject and Subject?",
        "options": [
            "They are exactly the same",
            "BehaviorSubject requires an initial value and remembers the current value",
            "BehaviorSubject cannot be used in Observables",
            "Subject is more powerful"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "BehaviorSubject requires an initial value and remembers the current value",
        "difficulty": "medium",
        "explanation": "BehaviorSubject requires an initial value and always emits its current value to new subscribers.",
        "hint": "Maintains state and provides the most recent value"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the retry() operator do?",
        "options": [
            "Stops Observable execution",
            "Retries an Observable a specified number of times if it fails",
            "Creates a new Observable",
            "Prevents all errors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Retries an Observable a specified number of times if it fails",
        "difficulty": "medium",
        "explanation": "retry() allows you to automatically resubscribe to an Observable if it encounters an error, with an optional retry count.",
        "hint": "Useful for handling transient network errors"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is the purpose of the withLatestFrom operator?",
        "options": [
            "To create a new Observable",
            "To combine the latest values from multiple Observables",
            "To stop Observable emissions",
            "To merge Observables completely"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To combine the latest values from multiple Observables",
        "difficulty": "hard",
        "explanation": "withLatestFrom combines the source Observable with other Observables, emitting when the source Observable emits, using the latest values from other Observables.",
        "hint": "Similar to combineLatest, but with different emission rules"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What is a ReplaySubject?",
        "options": [
            "A Subject that never emits values",
            "A Subject that replays a specified number of previous values to new subscribers",
            "A Subject that only emits the first value",
            "A Subject that merges multiple Observables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A Subject that replays a specified number of previous values to new subscribers",
        "difficulty": "hard",
        "explanation": "ReplaySubject allows you to specify how many previous values should be replayed to new subscribers.",
        "hint": "Provides a buffer of previous emissions"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "What does the concatMap operator do?",
        "options": [
            "Merges Observables immediately",
            "Maps values and subscribes to inner Observables sequentially",
            "Creates new Observables constantly",
            "Stops Observable emissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Maps values and subscribes to inner Observables sequentially",
        "difficulty": "hard",
        "explanation": "concatMap maps values to inner Observables and subscribes to them sequentially, waiting for each to complete before moving to the next.",
        "hint": "Ensures ordered execution of inner Observables"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "RxJS & Observables",
        "questionText": "How do you complete an Observable?",
        "options": [
            "Using .unsubscribe()",
            "Using .complete() method",
            "Automatically after emitting all values",
            "It's not possible to manually complete"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using .complete() method",
        "difficulty": "easy",
        "explanation": "When creating custom Observables, you can call .complete() to signal the end of value emissions.",
        "hint": "Signals the end of the Observable stream"
    },

    // Angular Modules
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the primary purpose of an Angular module?",
        "options": [
            "To define application styling",
            "To organize related components, directives, and services",
            "To handle HTTP requests",
            "To create database connections"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To organize related components, directives, and services",
        "difficulty": "easy",
        "explanation": "Angular modules are containers that group related components, directives, pipes, and services together, providing a way to organize and modularize Angular applications.",
        "hint": "Think of a module as a way to encapsulate related functionality."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "Which decorator is used to define an Angular module?",
        "options": ["@Module", "@NgModule", "@Component", "@Injectable"],
        "correctOptionIndex": 1,
        "correctOptionText": "@NgModule",
        "difficulty": "easy",
        "explanation": "@NgModule is the decorator used to define and configure an Angular module, specifying its metadata like declarations, imports, and providers.",
        "hint": "This decorator helps Angular understand how to compile and run the module."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the purpose of the 'declarations' array in an @NgModule?",
        "options": [
            "To import external libraries",
            "To list components, directives, and pipes used in the module",
            "To define service providers",
            "To configure routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To list components, directives, and pipes used in the module",
        "difficulty": "medium",
        "explanation": "The 'declarations' array specifies which components, directives, and pipes belong to the module. These must be declared before they can be used in templates.",
        "hint": "Components and directives must be declared in exactly one module."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the difference between a feature module and the root module?",
        "options": [
            "Feature modules cannot have components, root modules can",
            "Root module is the main module of the application, feature modules provide specific functionality",
            "Root module is always smaller than feature modules",
            "Feature modules can only be used in large applications"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Root module is the main module of the application, feature modules provide specific functionality",
        "difficulty": "medium",
        "explanation": "The root module (typically AppModule) initializes the application, while feature modules organize specific areas of functionality like user management or product catalog.",
        "hint": "Think of feature modules as specialized sections of your application."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What does the 'imports' array in @NgModule do?",
        "options": [
            "Imports TypeScript files",
            "Imports other Angular modules",
            "Imports external JavaScript libraries",
            "Imports CSS files"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Imports other Angular modules",
        "difficulty": "easy",
        "explanation": "The 'imports' array allows a module to use capabilities from other Angular modules, such as CommonModule or FormsModule.",
        "hint": "This is how you bring in additional module-level capabilities."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is a shared module in Angular?",
        "options": [
            "A module that can be accessed globally",
            "A module that contains components shared across multiple feature modules",
            "A module used for dependency injection",
            "A module that handles network requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A module that contains components shared across multiple feature modules",
        "difficulty": "medium",
        "explanation": "A shared module contains reusable components, directives, and pipes that can be imported and used in multiple feature modules, promoting code reuse.",
        "hint": "Think of a shared module as a collection of common, reusable elements."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "Which method do you use to configure lazy-loaded modules?",
        "options": [
            "loadChildren()",
            "import()",
            "lazyLoad()",
            "preloadModule()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "loadChildren()",
        "difficulty": "hard",
        "explanation": "In Angular routing configuration, loadChildren() is used to specify a module that should be lazy-loaded, meaning it's loaded only when its route is accessed.",
        "hint": "This method helps improve initial load time by loading modules on-demand."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the purpose of the 'providers' array in @NgModule?",
        "options": [
            "To define component styles",
            "To register services for dependency injection",
            "To create new HTML elements",
            "To configure routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To register services for dependency injection",
        "difficulty": "medium",
        "explanation": "The 'providers' array registers services at the module level, making them available for dependency injection throughout the module.",
        "hint": "Services declared here can be injected into components, directives, and other services within the module."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What does the 'exports' array in @NgModule do?",
        "options": [
            "Exports TypeScript interfaces",
            "Makes components, directives, and pipes available for other modules",
            "Creates export files for the application",
            "Defines module-level variables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Makes components, directives, and pipes available for other modules",
        "difficulty": "medium",
        "explanation": "The 'exports' array specifies which declarables (components, directives, pipes) should be made available for other modules to use.",
        "hint": "Items in the exports array can be used in templates of other modules that import this module."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is a standalone component in Angular?",
        "options": [
            "A component that cannot be used in templates",
            "A component that doesn't require a module declaration",
            "A component that runs independently of Angular",
            "A component that can only be used in root module"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A component that doesn't require a module declaration",
        "difficulty": "hard",
        "explanation": "Standalone components can be used directly without being declared in an NgModule, introduced in Angular 14 to simplify module architecture.",
        "hint": "These components manage their own dependencies and imports."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "Which of the following is NOT a typical characteristic of an Angular module?",
        "options": [
            "Can have its own providers",
            "Can import other modules",
            "Can define routing configuration",
            "Can create database connections"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Can create database connections",
        "difficulty": "medium",
        "explanation": "Angular modules organize application structure, provide dependency injection, and manage component relationships, but they do not directly create database connections.",
        "hint": "Modules are about organizing code and dependencies, not direct data access."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is a core module typically used for?",
        "options": [
            "To handle all HTTP requests",
            "To store application-wide singleton services",
            "To define global CSS styles",
            "To manage component lifecycle"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To store application-wide singleton services",
        "difficulty": "hard",
        "explanation": "A core module usually contains singleton services, interceptors, and other app-wide dependencies that should only be imported once in the root module.",
        "hint": "Think of the core module as a centralized place for global, application-level services."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What does the forRoot() method typically do in a module?",
        "options": [
            "Creates a new instance of the module",
            "Configures services for the root injector",
            "Defines the root component",
            "Sets up global routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Configures services for the root injector",
        "difficulty": "hard",
        "explanation": "forRoot() is a convention used to configure services at the application's root level, preventing multiple instances of singleton services.",
        "hint": "This method helps manage service instantiation in large applications."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "Can a component belong to multiple modules?",
        "options": [
            "Yes, always",
            "No, never",
            "Only in specific circumstances",
            "Only with special permission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "No, never",
        "difficulty": "medium",
        "explanation": "In Angular, a component must be declared in exactly one module. If you need to use it in multiple modules, you need to export it from its original module and import that module.",
        "hint": "Each component has a single, strict module declaration."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the primary benefit of using feature modules?",
        "options": [
            "Improved performance",
            "Better code organization and potential lazy loading",
            "Reduced bundle size",
            "Enhanced security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Better code organization and potential lazy loading",
        "difficulty": "easy",
        "explanation": "Feature modules help organize code into logical sections and enable lazy loading, which can improve application performance and maintainability.",
        "hint": "Think of feature modules as specialized sections of your application's functionality."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What does @NgModule({ bootstrap: [] }) specify?",
        "options": [
            "The main component to start the application",
            "The loading screen component",
            "A list of components to preload",
            "The default route component"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The main component to start the application",
        "difficulty": "medium",
        "explanation": "The bootstrap array in @NgModule specifies the root component that Angular creates and inserts into the index.html host web page.",
        "hint": "This is typically done only in the root AppModule."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the recommended approach for organizing large Angular applications?",
        "options": [
            "Put all code in one module",
            "Create feature modules with clear responsibilities",
            "Use only the root module",
            "Maximize the number of components in each module"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Create feature modules with clear responsibilities",
        "difficulty": "easy",
        "explanation": "Best practices recommend breaking large applications into feature modules, each responsible for a specific area of functionality.",
        "hint": "Modularization helps maintain clean, scalable code."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the primary difference between imports and providers in @NgModule?",
        "options": [
            "They are exactly the same",
            "Imports bring in module capabilities, providers register services",
            "Imports create new components, providers define routes",
            "Imports handle styling, providers handle logic"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Imports bring in module capabilities, providers register services",
        "difficulty": "hard",
        "explanation": "The imports array brings in capabilities from other modules, while the providers array registers services for dependency injection.",
        "hint": "Think of imports as module-level inclusion, providers as service registration."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What happens if you don't include a component in the declarations array?",
        "options": [
            "The component won't compile",
            "The component will still work",
            "Angular will automatically declare it",
            "The application will crash"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The component won't compile",
        "difficulty": "medium",
        "explanation": "Components must be declared in a module's declarations array before they can be used in templates. Omitting this will cause a compilation error.",
        "hint": "Every component needs a module home."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is a dynamic module in Angular?",
        "options": [
            "A module that changes during runtime",
            "A module configured programmatically",
            "A module that loads components dynamically",
            "A module with changing imports"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A module configured programmatically",
        "difficulty": "hard",
        "explanation": "Dynamic modules are modules that can be configured programmatically, often using static methods like forRoot() or forChild() to provide flexible configuration.",
        "hint": "Think of these as modules with configurable behavior."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the purpose of CommonModule?",
        "options": [
            "To provide common services",
            "To include common directives like *ngIf and *ngFor",
            "To handle HTTP requests",
            "To define routing configuration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To include common directives like *ngIf and *ngFor",
        "difficulty": "easy",
        "explanation": "CommonModule provides common directives such as *ngIf, *ngFor, and *ngSwitch, which are essential for template manipulation.",
        "hint": "Most feature modules import CommonModule to use basic Angular template directives."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is a potential issue with registering a service in the root module's providers array?",
        "options": [
            "It will cause performance issues",
            "It creates a global singleton instance",
            "It prevents the service from working",
            "It duplicates the service"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It creates a global singleton instance",
        "difficulty": "hard",
        "explanation": "Services registered in the root module's providers array become singleton instances available application-wide, which might not always be the desired behavior.",
        "hint": "Consider the scope and lifecycle of your services carefully."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What does @NgModule({ entryComponents: [] }) do in modern Angular?",
"options": [
            "Creates entry points for the application",
            "Defines dynamically created components (deprecated)",
            "Manages component routing",
            "Controls component initialization"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Defines dynamically created components (deprecated)",
        "difficulty": "hard",
        "explanation": "In modern Angular (9+), entryComponents is deprecated. Ivy renderer has made dynamic component creation more straightforward without requiring explicit registration.",
        "hint": "This was previously used for components created programmatically."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "How do you prevent a service from being tree-shakable?",
        "options": [
            "Use @Injectable({ providedIn: 'root' })",
            "Use @Injectable({ providedIn: 'platform' })",
            "Use @Injectable({ providedIn: 'any' })",
            "Use @Injectable()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use @Injectable({ providedIn: 'platform' })",
        "difficulty": "hard",
        "explanation": "Using providedIn: 'platform' prevents tree-shaking, ensuring the service is not removed during build optimization.",
        "hint": "This relates to Angular's dependency injection and build optimization strategies."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is the primary purpose of creating a routing module?",
        "options": [
            "To define component styles",
            "To separate routing configuration from the main module",
            "To create new components",
            "To manage service providers"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To separate routing configuration from the main module",
        "difficulty": "medium",
        "explanation": "A routing module keeps routing logic separate from the main module, improving code organization and maintainability.",
        "hint": "This follows the single responsibility principle."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What is a potential problem with importing the same module multiple times?",
        "options": [
            "It improves performance",
            "It can cause service duplication",
            "It has no impact",
            "It creates additional components"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It can cause service duplication",
        "difficulty": "hard",
        "explanation": "Importing the same module multiple times can lead to multiple instances of services, breaking the singleton pattern.",
        "hint": "Be cautious about module imports, especially for core and shared modules."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What does the resolvedData property in Angular routing configuration represent?",
        "options": [
            "Default route parameters",
            "Data resolved before a route is activated",
            "Static route configuration",
            "Component initialization data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data resolved before a route is activated",
        "difficulty": "hard",
        "explanation": "Resolved data allows you to fetch data before a route is activated, ensuring components have required data before rendering.",
        "hint": "This helps prevent incomplete or loading states in routed components."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "In Angular, what is a barrel file?",
        "options": [
            "A file that stores large data collections",
            "An index file that re-exports multiple modules or components",
            "A configuration file for modules",
            "A routing definition file"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An index file that re-exports multiple modules or components",
        "difficulty": "medium",
        "explanation": "A barrel file (typically index.ts) aggregates and re-exports multiple related modules, components, or services to simplify imports.",
        "hint": "It helps reduce import complexity in large projects."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Modules",
        "questionText": "What does the providedIn property in @Injectable do?",
        "options": [
            "Defines service availability globally",
            "Specifies where the service is provided",
            "Creates multiple service instances",
            "Manages service inheritance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Specifies where the service is provided",
        "difficulty": "hard",
        "explanation": "The providedIn property determines the injection scope of a service, such as 'root' (application-wide), 'platform', or a specific module.",
        "hint": "This controls service instantiation and tree-shaking behavior."
    },

    // Angular Router
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the main purpose of Angular Router?",
        "options": [
            "To manage server-side routing",
            "To enable client-side navigation between views",
            "To handle HTTP requests",
            "To create database connections"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To enable client-side navigation between views",
        "difficulty": "easy",
        "explanation": "Angular Router enables navigation between different components without reloading the entire page, creating a single-page application (SPA) experience.",
        "hint": "Think of routing as seamless view transitions within a web application."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "Which module do you need to import to use routing in Angular?",
        "options": [
            "RouterModule",
            "NavigationModule",
            "RouteModule",
            "PathModule"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "RouterModule",
        "difficulty": "easy",
        "explanation": "RouterModule provides the necessary services and directives for routing in Angular applications.",
        "hint": "This module is essential for configuring routes and navigation."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the purpose of the routerLink directive?",
        "options": [
            "To define route parameters",
            "To create navigation links in templates",
            "To handle route guards",
            "To manage route configurations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create navigation links in templates",
        "difficulty": "easy",
        "explanation": "routerLink is used in templates to create clickable links that navigate between different components without page reload.",
        "hint": "Similar to <a> tag, but for Angular routing."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What does the 'children' property in route configuration do?",
        "options": [
            "Defines parent-child component relationships",
            "Creates nested routes within a parent route",
            "Manages component inheritance",
            "Controls route visibility"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates nested routes within a parent route",
        "difficulty": "medium",
        "explanation": "The 'children' property allows you to define child routes that are rendered within the parent route's component.",
        "hint": "Useful for creating hierarchical route structures."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the purpose of a route guard in Angular?",
        "options": [
            "To prevent unauthorized access to routes",
            "To validate form inputs",
            "To manage HTTP interceptors",
            "To create route animations"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To prevent unauthorized access to routes",
        "difficulty": "medium",
        "explanation": "Route guards are interfaces that allow or prevent navigation to and from routes based on conditions like authentication or permissions.",
        "hint": "Think of guards as checkpoints for route navigation."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What does the 'resolve' property in route configuration do?",
        "options": [
            "Resolves CSS styles",
            "Fetches data before activating a route",
            "Defines route parameters",
            "Handles route redirects"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Fetches data before activating a route",
        "difficulty": "hard",
        "explanation": "The resolve guard allows you to fetch data before a route is activated, ensuring the component has all required data before rendering.",
        "hint": "Prevents rendering incomplete or loading components."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is lazy loading in Angular routing?",
        "options": [
            "Delaying component rendering",
            "Loading modules only when needed",
            "Caching route configurations",
            "Preloading all routes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Loading modules only when needed",
        "difficulty": "medium",
        "explanation": "Lazy loading allows you to load feature modules only when their routes are accessed, improving initial application load time.",
        "hint": "A performance optimization technique for large applications."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "How do you define a route parameter in Angular?",
        "options": [
            "Using :paramName syntax",
            "With query parameters",
            "Through route guards",
            "In the component definition"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using :paramName syntax",
        "difficulty": "easy",
        "explanation": "Route parameters are defined using the :paramName syntax in the route configuration, allowing dynamic routing.",
        "hint": "Example: { path: 'user/:id', component: UserComponent }"
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the difference between ActivatedRoute and Router?",
        "options": [
            "They are the same thing",
            "ActivatedRoute provides current route information, Router handles navigation",
            "Router manages components, ActivatedRoute handles templates",
            "ActivatedRoute is only used for guards"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "ActivatedRoute provides current route information, Router handles navigation",
        "difficulty": "hard",
        "explanation": "ActivatedRoute provides information about the current route, while Router is used for programmatic navigation between routes.",
        "hint": "One provides route details, the other enables route changes."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What does the wildcard route ('**') represent?",
        "options": [
            "A route that matches all possible paths",
            "A catch-all route for undefined routes",
            "A route with multiple parameters",
            "A dynamic routing mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A catch-all route for undefined routes",
        "difficulty": "medium",
        "explanation": "The wildcard route is typically used to handle 404 errors or redirect to a default route when no matching route is found.",
        "hint": "Usually placed at the end of route configurations."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the purpose of RouterModule.forRoot()?",
        "options": [
            "To create routes in feature modules",
            "To configure routes in the root module",
            "To generate route links",
            "To manage route guards"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To configure routes in the root module",
        "difficulty": "medium",
        "explanation": "RouterModule.forRoot() is used in the root module to register the main routes and route services for the entire application.",
        "hint": "Should only be used once in the main AppModule."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What types of route guards exist in Angular?",
        "options": [
            "CanActivate only",
            "CanActivate, CanDeactivate, CanLoad, Resolve",
            "Only authentication guards",
            "Client-side and server-side guards"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "CanActivate, CanDeactivate, CanLoad, Resolve",
        "difficulty": "hard",
        "explanation": "Angular provides multiple types of route guards to control navigation, component loading, and data resolution.",
        "hint": "Each guard serves a different purpose in route navigation."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "How can you pass optional parameters in routing?",
        "options": [
            "Only through route configuration",
            "Using query parameters or matrix parameters",
            "Through component inputs",
            "Only in resolve guards"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using query parameters or matrix parameters",
        "difficulty": "medium",
        "explanation": "Optional parameters can be passed using query parameters (?) or matrix parameters (;) in the route URL.",
        "hint": "Provides flexibility in passing additional route information."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the purpose of RouterModule.forChild()? ",
        "options": [
            "To create the main application routes",
            "To configure routes in feature modules",
            "To handle root-level navigation",
            "To manage global routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To configure routes in feature modules",
        "difficulty": "medium",
        "explanation": "RouterModule.forChild() is used in feature modules to register routes specific to that module without duplicating root-level services.",
        "hint": "Used for modular route configuration."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What does the CanLoad guard prevent?",
        "options": [
            "User navigation",
            "Lazy-loaded module download",
            "Component rendering",
            "Route parameter access"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Lazy-loaded module download",
        "difficulty": "hard",
        "explanation": "CanLoad prevents downloading of lazy-loaded modules if the guard returns false, unlike CanActivate which only prevents route activation.",
        "hint": "Provides an additional layer of access control for lazy-loaded modules."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "How can you retrieve route parameters in a component?",
        "options": [
            "Using window.location",
            "Through ActivatedRoute service",
            "By accessing global router object",
            "Using @Input decorators"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Through ActivatedRoute service",
        "difficulty": "easy",
        "explanation": "ActivatedRoute service provides methods like params and snapshot to retrieve route parameters in a component.",
        "hint": "Inject ActivatedRoute in the component constructor."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is a preloading strategy in Angular routing?",
        "options": [
            "Preloading all modules at startup",
            "A technique to load modules in the background",
            "Caching route configurations",
            "Preventing module downloads"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A technique to load modules in the background",
        "difficulty": "hard",
        "explanation": "Preloading strategies allow lazy-loaded modules to be downloaded in the background after the initial application load, improving performance.",
        "hint": "Balances initial load time with subsequent navigation speed."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What does the routerLinkActive directive do?",
        "options": [
            "Creates navigation links",
            "Applies CSS class when route is active",
            "Manages route transitions",
            "Handles route redirects"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Applies CSS class when route is active",
        "difficulty": "easy",
        "explanation": "routerLinkActive automatically applies a CSS class to an element when its associated route becomes active.",
        "hint": "Useful for highlighting current navigation item."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "How do you programmatically navigate in Angular?",
        "options": [
            "Using window.location",
            "Through the Router.navigate() method",
            "By changing URL manually",
            "Using routerLink in code"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Through the Router.navigate() method",
        "difficulty": "easy",
        "explanation": "The Router service provides a navigate() method to programmatically change routes in a component.",
        "hint": "Inject Router in the component and use navigate() method."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the purpose of the location strategy in routing?",
"options": [
            "To define route locations",
            "To determine how URLs are handled",
            "To manage route parameters",
            "To create route guards"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To determine how URLs are handled",
        "difficulty": "medium",
        "explanation": "Location strategy determines how Angular handles URLs, with PathLocationStrategy (clean URLs) and HashLocationStrategy (using #) as main options.",
        "hint": "Affects how routes are represented in the browser URL."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What does the CanDeactivate guard prevent?",
        "options": [
            "Route navigation",
            "Leaving a current route",
            "Module loading",
            "Parameter access"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Leaving a current route",
        "difficulty": "hard",
        "explanation": "CanDeactivate guard allows you to prevent navigation away from the current route, often used to warn users about unsaved changes.",
        "hint": "Provides a way to intercept route departure."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "How can you handle route redirects?",
        "options": [
            "Using JavaScript",
            "Through route configuration's redirectTo property",
            "By modifying URL manually",
            "Using only guards"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Through route configuration's redirectTo property",
        "difficulty": "medium",
        "explanation": "Route configuration allows defining redirects using the redirectTo property, specifying where to redirect when a specific path is accessed.",
        "hint": "Simplifies route redirection logic."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the difference between snapshot and observable params?",
        "options": [
            "They are the same",
            "Snapshot is current state, observable tracks changes",
            "Snapshot is for guards, observable for components",
            "One is deprecated, other is current"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Snapshot is current state, observable tracks changes",
        "difficulty": "hard",
        "explanation": "Route params snapshot provides the current parameter values, while params observable allows tracking parameter changes within the same component.",
        "hint": "Choose based on whether you need to react to parameter changes."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What does the Resolve guard do?",
        "options": [
            "Resolves CSS styles",
            "Fetches data before route activation",
            "Manages route transitions",
            "Handles error routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Fetches data before route activation",
        "difficulty": "hard",
        "explanation": "Resolve guard allows you to fetch required data before a route is activated, ensuring the component has all necessary data before rendering.",
        "hint": "Prevents rendering incomplete components."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "How can you pass data to a route?",
        "options": [
            "Only through URL parameters",
            "Using route configuration's data property",
            "Through component inputs only",
            "Using only query parameters"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using route configuration's data property",
        "difficulty": "medium",
        "explanation": "Routes can have a data property to pass static data that can be accessed via ActivatedRoute service.",
        "hint": "Useful for passing configuration or metadata to routes."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is a child route in Angular?",
        "options": [
            "A route that can't have children",
            "A nested route rendered within a parent component",
            "A route with multiple parameters",
            "A dynamically created route"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A nested route rendered within a parent component",
        "difficulty": "medium",
        "explanation": "Child routes are defined within a parent route and render their components inside the parent component's template using <router-outlet>.",
        "hint": "Creates hierarchical route structures."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "What is the primary purpose of <router-outlet>?",
        "options": [
            "To create navigation menus",
            "To render routed components",
            "To define route configurations",
            "To manage route guards"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To render routed components",
        "difficulty": "easy",
        "explanation": "<router-outlet> is a placeholder where Angular dynamically renders components based on the current route.",
        "hint": "Think of it as a component display area that changes based on routing."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Router",
        "questionText": "How do multiple <router-outlet> work?",
        "options": [
            "They always conflict",
            "Named outlets allow rendering different components",
            "Only one can be used per application",
            "They require special configuration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Named outlets allow rendering different components",
        "difficulty": "hard",
        "explanation": "Multiple router outlets can be used with named outlets, allowing different components to be rendered in different parts of the application simultaneously.",
        "hint": "Enables more complex routing scenarios."
    },

    // Template-Driven Forms
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What directive is used to create a template-driven form in Angular?",
        "options": ["ngForm", "formGroup", "ngModel", "formControl"],
        "correctOptionIndex": 0,
        "correctOptionText": "ngForm",
        "difficulty": "easy",
        "explanation": "The `ngForm` directive is automatically applied to `<form>` elements in template-driven forms, creating a form control group.",
        "hint": "This directive is automatically applied to form elements in template-driven forms."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "Which directive is used to bind form controls to model properties in template-driven forms?",
        "options": ["ngBind", "formControlName", "ngModel", "ngControl"],
        "correctOptionIndex": 2,
        "correctOptionText": "ngModel",
        "difficulty": "easy",
        "explanation": "`ngModel` is used for two-way data binding in template-driven forms, connecting form inputs to component properties.",
        "hint": "This directive enables two-way data binding in forms."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is the purpose of the `name` attribute in template-driven forms?",
        "options": [
            "To define CSS classes", 
            "To create a unique identifier for form controls", 
            "To set input validation", 
            "To bind form data to a model"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create a unique identifier for form controls",
        "difficulty": "medium",
        "explanation": "The `name` attribute creates a unique identifier for form controls, allowing Angular to track and manage individual form inputs.",
        "hint": "This attribute helps Angular track form elements uniquely."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "How do you mark a form control as required in a template-driven form?",
        "options": [
            "Use [required] attribute", 
            "Use required attribute", 
            "Use ngRequired directive", 
            "Use formValidator"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use required attribute",
        "difficulty": "easy",
        "explanation": "In template-driven forms, you use the standard HTML `required` attribute to mark a form control as mandatory.",
        "hint": "This is a standard HTML form validation attribute."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What method is used to access form validation state in a template-driven form?",
        "options": [
            "form.isValid()", 
            "ngForm.valid", 
            "form.validate()", 
            "ngModel.validation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "ngForm.valid",
        "difficulty": "medium",
        "explanation": "`ngForm.valid` is a property that returns a boolean indicating whether the entire form is valid.",
        "hint": "This is a property that checks the overall form validation state."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "Which of the following is NOT a built-in validator in Angular template-driven forms?",
        "options": [
            "required", 
            "minlength", 
            "maxlength", 
            "mustMatch"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "mustMatch",
        "difficulty": "medium",
        "explanation": "`mustMatch` is not a built-in Angular validator. Developers typically create custom validators for such complex validations.",
        "hint": "This is a custom validation that would require manual implementation."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "How can you display validation error messages in a template-driven form?",
        "options": [
            "Using ngIf with form control state", 
            "Using JavaScript alerts", 
            "Using console.log()", 
            "Using ngSwitch"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using ngIf with form control state",
        "difficulty": "medium",
        "explanation": "Validation error messages are typically displayed using `ngIf` directive and checking form control states like `touched`, `invalid`, etc.",
        "hint": "Use Angular's structural directive with form control validation properties."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is the correct way to import FormsModule for template-driven forms?",
        "options": [
            "import { FormsModule } from '@angular/forms'", 
            "import { TemplateFormsModule } from '@angular/core'", 
            "import { NgModel } from '@angular/forms'", 
            "import { FormModule } from '@angular/core'"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "import { FormsModule } from '@angular/forms'",
        "difficulty": "easy",
        "explanation": "FormsModule is imported from '@angular/forms' and must be added to the imports array in the module decorator.",
        "hint": "Check the standard Angular forms module import path."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What does the `ngSubmit` event do in a template-driven form?",
        "options": [
            "Validates form data", 
            "Triggers form submission handler", 
            "Resets form fields", 
            "Stops form submission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Triggers form submission handler",
        "difficulty": "easy",
        "explanation": "`ngSubmit` is an event that is emitted when a form is submitted, allowing you to define a method to handle the submission.",
        "hint": "This event is used to define what happens when a form is submitted."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "How can you disable form submission if the form is invalid?",
        "options": [
            "[disabled]='!myForm.form.valid'", 
            "disabled='myForm.invalid'", 
            "[disabled]='myForm.invalid'", 
            "disabled='!myForm.form.valid'"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "[disabled]='!myForm.form.valid'",
        "difficulty": "medium",
        "explanation": "Use property binding with the form's valid state to disable the submit button when the form is invalid.",
        "hint": "Use square brackets for property binding and check form validity."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is the purpose of `ngModel` standalone attribute?",
        "options": [
            "To create a two-way binding", 
            "To mark a form control without requiring FormsModule", 
            "To validate form inputs", 
            "To reset form data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To mark a form control without requiring FormsModule",
        "difficulty": "hard",
        "explanation": "The standalone `ngModel` allows creating form controls without importing FormsModule, useful in specific scenarios.",
        "hint": "This attribute provides an alternative way to use form controls."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "Which method can you use to reset a template-driven form programmatically?",
        "options": [
            "form.reset()", 
            "ngForm.resetForm()", 
            "form.clear()", 
            "ngModel.reset()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "ngForm.resetForm()",
        "difficulty": "medium",
        "explanation": "`ngForm.resetForm()` completely resets the form, clearing all form controls and resetting validation states.",
        "hint": "This method is available on the ngForm directive."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What does the `touched` property indicate in form control state?",
        "options": [
            "The field has been modified", 
            "The field has been focused", 
            "The field has been blurred", 
            "The field is currently active"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The field has been blurred",
        "difficulty": "medium",
        "explanation": "`touched` becomes true when a form control loses focus after being interacted with.",
        "hint": "This state changes when a user moves away from an input field."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "How do you create a custom validator in a template-driven form?",
        "options": [
            "Using @Validator decorator", 
            "Implementing ValidatorFn interface", 
            "Using ngValidator directive", 
            "Creating a directive with validate method"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Creating a directive with validate method",
        "difficulty": "hard",
        "explanation": "Custom validators in template-driven forms are typically created using custom directives with a validate method.",
        "hint": "This involves creating a custom directive that implements validation logic."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is the correct syntax for two-way data binding in template-driven forms?",
        "options": [
            "[(ngModel)]='property'", 
            "{{ngModel}}='property'", 
            "[ngModel]='property'", 
            "(ngModel)='property'"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "[(ngModel)]='property'",
        "difficulty": "easy",
        "explanation": "The banana in a box syntax `[(ngModel)]='property'` provides two-way data binding in template-driven forms.",
        "hint": "This syntax combines property and event binding."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "Which form state property indicates if any form control has been modified?",
        "options": [
            "pristine", 
            "dirty", 
            "modified", 
            "changed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "dirty",
        "difficulty": "medium",
        "explanation": "The `dirty` state becomes true when any form control's value has been changed from its initial value.",
        "hint": "This property tracks if the form has been modified from its original state."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is the default email validation pattern in Angular?",
        "options": [
            "/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/", 
            "/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/", 
            "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/", 
            "No default pattern"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/",
        "difficulty": "hard",
        "explanation": "Angular provides a default email validation pattern that checks for standard email format.",
        "hint": "This pattern allows most common email formats."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What does the `novalidate` attribute do in a template-driven form?",
        "options": [
            "Disables all form validations", 
            "Prevents HTML5 browser validations", 
            "Enables custom Angular validations", 
            "Marks form as always valid"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Prevents HTML5 browser validations",
        "difficulty": "medium",
        "explanation": "The `novalidate` attribute prevents browser's native HTML5 form validation, allowing Angular's form validation to take over.",
        "hint": "This attribute gives full control to Angular's validation mechanism."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "How can you access form control values in the component?",
        "options": [
            "Using @ViewChild", 
            "Directly through ngModel", 
            "Using form.value", 
            "Through component properties"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using form.value",
        "difficulty": "medium",
        "explanation": "In template-driven forms, you can access all form control values using the `form.value` property.",
        "hint": "This property provides an object with all form control values."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is the purpose of `ngModelGroup`?",
        "options": [
            "To create nested form groups", 
            "To validate multiple fields together", 
            "To style form groups", 
            "To disable form submission"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To create nested form groups",
        "difficulty": "hard",
        "explanation": "`ngModelGroup` allows creating nested form groups within a template-driven form, organizing related form controls.",
        "hint": "This directive helps structure complex form hierarchies."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "Which method prevents the default form submission behavior?",
        "options": [
            "event.stop()", 
            "event.preventDefault()", 
            "form.stopSubmit()", 
            "ngSubmit.cancel()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "event.preventDefault()",
        "difficulty": "easy",
        "explanation": "`event.preventDefault()` stops the default form submission behavior, allowing custom handling.",
        "hint": "This is a standard JavaScript method to prevent default event actions."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What does the `pending` state in form validation indicate?",
        "options": [
            "Form is being validated", 
            "Validation is complete", 
            "Form has errors", 
            "Form is valid"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Form is being validated",
        "difficulty": "hard",
        "explanation": "The `pending` state occurs during asynchronous validations, indicating that validation is in progress.",
        "hint": "This state is common with async validators like checking unique usernames."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "How can you add custom CSS classes based on form control state?",
        "options": [
            "Using [ngClass]", 
            "Using CSS selectors", 
            "Using [class.is-invalid]", 
            "Using form state attributes"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using [class.is-invalid]",
        "difficulty": "medium",
        "explanation": "Angular allows adding dynamic CSS classes using property binding with form control states.",
        "hint": "Use property binding to conditionally apply classes."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is the primary difference between template-driven and reactive forms?",
        "options": [
            "Validation complexity", 
            "Form creation approach", 
            "Performance", 
            "Browser compatibility"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Form creation approach",
        "difficulty": "hard",
        "explanation": "Template-driven forms are created in the template using directives, while reactive forms are created programmatically in the component.",
        "hint": "Consider where most of the form logic is defined."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What does the `pattern` attribute do in form validation?",
        "options": [
            "Creates custom validation rules", 
            "Defines input format", 
            "Applies regex validation", 
            "Restricts input characters"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Applies regex validation",
        "difficulty": "medium",
        "explanation": "The `pattern` attribute allows applying regular expression validation to form inputs.",
        "hint": "Use this to enforce specific input formats."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "How do you disable a form control in a template-driven form?",
        "options": [
            "[disabled]='true'", 
            "disabled attribute", 
            "[ngModel]='disabled'", 
            "formControl.disable()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "disabled attribute",
        "difficulty": "easy",
        "explanation": "Use the standard HTML `disabled` attribute to disable form controls in template-driven forms.",
        "hint": "This is a standard HTML form control attribute."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is the purpose of `ngModelChange` event?",
        "options": [
            "To validate input", 
            "To trigger a method on value change", 
            "To reset form", 
            "To disable form controls"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To trigger a method on value change",
        "difficulty": "medium",
        "explanation": "`ngModelChange` allows executing a method whenever a form control's value changes.",
        "hint": "This event is used for reactive form interactions."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "Which method is used to check if a specific form control is valid?",
        "options": [
            "form.isControlValid()", 
            "control.valid", 
            "ngModel.validate()", 
            "form.checkValidity()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "control.valid",
        "difficulty": "easy",
        "explanation": "The `valid` property on a form control indicates whether that specific control is valid.",
        "hint": "This is a boolean property available on form controls."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Template-Driven Forms",
        "questionText": "What is an async validator in Angular forms?",
        "options": [
            "A validator that runs synchronously", 
            "A validator that checks form state", 
            "A validator that returns a Promise or Observable", 
            "A validator for complex forms"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A validator that returns a Promise or Observable",
        "difficulty": "hard",
        "explanation": "Async validators perform validation that might take time, typically returning a Promise or Observable that resolves to a validation result.",
        "hint": "These are useful for server-side validations like checking username availability."
    },

    // Reactive Forms
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What module must be imported to use Reactive Forms in Angular?",
        "options": [
            "FormsModule", 
            "ReactiveFormsModule", 
            "FormModule", 
            "AngularFormsModule"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "ReactiveFormsModule",
        "difficulty": "easy",
        "explanation": "ReactiveFormsModule must be imported from '@angular/forms' to use reactive form features in Angular.",
        "hint": "Check the standard Angular reactive forms module import path."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "Which class is used to create a form control in Reactive Forms?",
        "options": [
            "FormControl", 
            "NgControl", 
            "FormGroup", 
            "FormBuilder"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "FormControl",
        "difficulty": "easy",
        "explanation": "`FormControl` is the basic building block for creating individual form controls in reactive forms.",
        "hint": "This class represents a single input element in a form."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What method is used to add validators to a FormControl?",
        "options": [
            "addValidators()", 
            "setValidators()", 
            "withValidators()", 
            "createValidators()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "setValidators()",
        "difficulty": "medium",
        "explanation": "`setValidators()` is used to add one or more validators to a FormControl.",
        "hint": "This method replaces existing validators with new ones."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What is the purpose of FormBuilder service?",
        "options": [
            "To create form templates", 
            "To simplify form control creation", 
            "To validate forms", 
            "To style form elements"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To simplify form control creation",
        "difficulty": "medium",
        "explanation": "FormBuilder provides syntactic sugar for creating FormControl, FormGroup, and FormArray instances more concisely.",
        "hint": "This service reduces boilerplate code when creating complex forms."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "Which method creates a form group in Reactive Forms?",
        "options": [
            "createGroup()", 
            "new FormGroup()", 
            "FormBuilder.group()", 
            "addGroup()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "FormBuilder.group()",
        "difficulty": "easy",
        "explanation": "`FormBuilder.group()` is the recommended way to create a form group with multiple form controls.",
        "hint": "This method is part of the FormBuilder service."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What is the primary difference between FormControl and FormGroup?",
        "options": [
            "FormControl is for multiple inputs, FormGroup for single input", 
            "FormControl manages a single input, FormGroup manages multiple controls", 
            "They are exactly the same", 
            "FormControl is only for validation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "FormControl manages a single input, FormGroup manages multiple controls",
        "difficulty": "medium",
        "explanation": "FormControl represents a single input element, while FormGroup is a collection of FormControls.",
        "hint": "Think of FormGroup as a container for multiple FormControls."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "How do you add a validator to a form control programmatically?",
        "options": [
            "this.control.validator = Validators.required", 
            "this.control.setValidators(Validators.required)", 
            "this.control.addValidator(Validators.required)", 
            "this.control.validate(Validators.required)"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "this.control.setValidators(Validators.required)",
        "difficulty": "medium",
        "explanation": "`setValidators()` method is used to add validators to a form control in the component class.",
        "hint": "This method is part of the FormControl class."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What does the `touched` property indicate in Reactive Forms?",
        "options": [
            "The field has been modified", 
            "The field has been focused", 
            "The field has been blurred", 
            "The field is currently active"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The field has been blurred",
        "difficulty": "easy",
        "explanation": "`touched` becomes true when a form control loses focus after being interacted with.",
        "hint": "This state changes when a user moves away from an input field."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "Which method is used to reset a Reactive Form?",
        "options": [
            "form.reset()", 
            "form.clear()", 
            "form.clearValidators()", 
            "form.removeControl()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "form.reset()",
        "difficulty": "easy",
        "explanation": "`reset()` method clears the form controls and resets their validation states.",
        "hint": "This method restores the form to its initial state."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What is FormArray used for in Reactive Forms?",
        "options": [
            "To create static form layouts", 
            "To manage a dynamic list of form controls", 
            "To validate multiple inputs", 
            "To style form elements"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To manage a dynamic list of form controls",
        "difficulty": "hard",
        "explanation": "FormArray allows dynamically adding or removing form controls at runtime.",
        "hint": "Useful for forms with variable number of inputs, like dynamic form fields."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "How do you create a custom validator in Reactive Forms?",
        "options": [
            "Using @Validator decorator", 
            "Creating a function that returns null or ValidationErrors", 
            "Using ngValidator directive", 
            "Extending Validators class"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating a function that returns null or ValidationErrors",
        "difficulty": "hard",
        "explanation": "Custom validators are functions that return null if valid or a ValidationErrors object if invalid.",
        "hint": "The validator function receives the form control as an argument."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What method adds a control to an existing FormGroup?",
        "options": [
            "addControl()", 
            "insertControl()", 
            "setControl()", 
            "pushControl()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "setControl()",
        "difficulty": "medium",
        "explanation": "`setControl()` method adds or replaces a control in an existing FormGroup.",
        "hint": "This method allows dynamic control management."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What does the `markAllAsTouched()` method do?",
        "options": [
            "Marks all controls as modified", 
            "Triggers validation for all controls", 
            "Marks all controls as touched", 
            "Disables all form controls"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Marks all controls as touched",
        "difficulty": "medium",
        "explanation": "`markAllAsTouched()` sets the `touched` state to true for all controls in a form group.",
        "hint": "Useful for showing validation errors on form submission."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "How do you disable a form control in Reactive Forms?",
        "options": [
            "this.control.disabled = true", 
            "this.control.disable()", 
            "this.control.setDisabled(true)", 
            "this.control.markAsDisabled()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "this.control.disable()",
        "difficulty": "easy",
        "explanation": "`disable()` method prevents user interaction and changes the control's disabled state.",
        "hint": "This method is part of the FormControl class."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What is an async validator in Reactive Forms?",
        "options": [
            "A validator that runs synchronously", 
            "A validator that checks form state", 
            "A validator that returns a Promise or Observable", 
            "A validator for complex forms"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A validator that returns a Promise or Observable",
        "difficulty": "hard",
        "explanation": "Async validators perform validation that might take time, typically returning a Promise or Observable.",
        "hint": "Useful for server-side validations like checking username availability."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What method retrieves the value of a form group?",
        "options": [
            "form.getValue()", 
            "form.values", 
            "form.value", 
            "form.getValues()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "form.value",
        "difficulty": "easy",
        "explanation": "`value` property returns an object containing the current values of all controls in a form group.",
        "hint": "This is a simple way to access form data."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "How do you check if a form control is valid?",
        "options": [
            "this.control.isValid()", 
            "this.control.valid", 
            "this.control.validate()", 
            "this.control.checkValidity()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "this.control.valid",
        "difficulty": "easy",
        "explanation": "`valid` property is a boolean indicating whether the form control passes all its validators.",
        "hint": "This is a simple boolean property on form controls."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What is the purpose of `patchValue()` method?",
        "options": [
            "To completely replace form values", 
            "To update part of the form values", 
            "To reset form values", 
            "To validate form values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To update part of the form values",
        "difficulty": "medium",
        "explanation": "`patchValue()` allows updating specific form control values without replacing the entire form group.",
        "hint": "Unlike `setValue()`, this method doesn't require all values to be specified."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What does the `pending` state indicate in form validation?",
        "options": [
            "Form is being validated", 
            "Validation is complete", 
            "Form has errors", 
            "Form is valid"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Form is being validated",
        "difficulty": "hard",
        "explanation": "`pending` state occurs during asynchronous validations, indicating validation is in progress.",
        "hint": "Common with async validators like server-side checks."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "How do you add error messages conditionally in Reactive Forms?",
        "options": [
            "Using ngIf with form control errors", 
            "Using JavaScript alerts", 
            "Using console.log()", 
            "Using ngSwitch"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using ngIf with form control errors",
        "difficulty": "medium",
        "explanation": "Error messages are typically displayed using `ngIf` directive and checking form control's `errors` property.",
        "hint": "Access specific error types through the control's errors object."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What is the difference between `setValue()` and `patchValue()`?",
        "options": [
            "They are exactly the same", 
            "setValue() updates partial values, patchValue() replaces all", 
            "setValue() replaces all values, patchValue() updates partial values", 
            "No difference"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "setValue() replaces all values, patchValue() updates partial values",
        "difficulty": "hard",
        "explanation": "`setValue()` requires all form control values to be specified, while `patchValue()` allows updating only specific values.",
        "hint": "Consider the level of control needed when updating form values."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "How do you create a cross-field validator?",
        "options": [
            "Using @CrossValidator decorator", 
            "Creating a custom validator function for the form group", 
            "Using built-in cross-field validators", 
            "Extending Validators class"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating a custom validator function for the form group",
        "difficulty": "hard",
        "explanation": "Cross-field validators are custom validator functions applied to the entire form group, comparing multiple control values.",
        "hint": "The validator function receives the entire form group as an argument."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What method removes a control from a FormGroup?",
        "options": [
            "deleteControl()", 
            "removeControl()", 
            "clearControl()", 
            "destroyControl()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "removeControl()",
        "difficulty": "medium",
        "explanation": "`removeControl()` method removes a specific control from a FormGroup.",
        "hint": "Used for dynamically managing form controls."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What is the purpose of `statusChanges` observable?",
        "options": [
            "To track form value changes", 
            "To monitor form validation status", 
            "To disable form controls", 
            "To reset form values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To monitor form validation status",
        "difficulty": "hard",
        "explanation": "`statusChanges` observable emits whenever the validation status of a form control or group changes.",
        "hint": "Useful for reactive programming and complex form interactions."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "How do you create a dynamic form control?",
        "options": [
            "Using ngIf", 
            "Using FormArray", 
            "Using *ngFor", 
            "Using ngSwitch"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using FormArray",
        "difficulty": "hard",
        "explanation": "FormArray allows dynamically adding or removing form controls at runtime.",
        "hint": "Ideal for forms with a variable number of input fields."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What method is used to clear validators from a form control?",
        "options": [
            "clearValidators()", 
            "removeValidators()", 
            "setValidators(null)", 
            "deleteValidators()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "clearValidators()",
        "difficulty": "medium",
        "explanation": "`clearValidators()` removes all validators from a form control.",
        "hint": "Use this when you want to remove all validation rules."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "What is the primary advantage of Reactive Forms over Template-Driven Forms?",
        "options": [
            "Less code in template", 
            "More control and predictability", 
            "Easier to set up", 
            "Better performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "More control and predictability",
        "difficulty": "hard",
        "explanation": "Reactive Forms provide more explicit control over form validation, value changes, and form management in the component class.",
        "hint": "Consider where most of the form logic is defined and managed."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Reactive Forms",
        "questionText": "How do you bind a reactive form to a template?",
        "options": [
            "Using ngModel", 
            "Using formControlName", 
            "Using [(ngModel)]", 
            "Using form attribute"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using formControlName",
        "difficulty": "easy",
        "explanation": "`formControlName` directive binds form controls defined in the component to template inputs.",
        "hint": "This is the standard way to connect reactive form controls to template elements."
    },

    // HTTP Client
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What module do you need to import to use HttpClient in Angular?",
        "options": ["HttpModule", "HttpClientModule", "AngularHttpModule", "WebRequestModule"],
        "correctOptionIndex": 1,
        "correctOptionText": "HttpClientModule",
        "difficulty": "easy",
        "explanation": "To use HttpClient, you must import HttpClientModule in your app module's imports array.",
        "hint": "Look for the module that provides HTTP client functionality in Angular core."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "Which method is used to send a GET request in Angular's HttpClient?",
        "options": ["get()", "fetch()", "retrieve()", "request()"],
        "correctOptionIndex": 0,
        "correctOptionText": "get()",
        "difficulty": "easy",
        "explanation": "HttpClient.get() is used to send HTTP GET requests and retrieve data from a server.",
        "hint": "This method returns an Observable of the response."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What does the `HttpClient.post()` method return by default?",
        "options": ["Promise<any>", "Observable<any>", "Array<any>", "Subject<any>"],
        "correctOptionIndex": 1,
        "correctOptionText": "Observable<any>",
        "difficulty": "medium",
        "explanation": "HttpClient methods like post() return an Observable by default, which needs to be subscribed to trigger the request.",
        "hint": "RxJS Observables are central to Angular's HTTP client design."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "How can you handle HTTP request errors in Angular?",
        "options": [
            "Using try-catch block", 
            "Using catchError operator from RxJS", 
            "Using global error handler", 
            "Using async/await"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using catchError operator from RxJS",
        "difficulty": "medium",
        "explanation": "The catchError operator from RxJS allows you to intercept and handle HTTP errors in the request stream.",
        "hint": "Error handling in Observables is different from traditional error handling."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What is the purpose of HttpInterceptor in Angular?",
        "options": [
            "To modify request headers", 
            "To cache HTTP responses", 
            "To log network activity", 
            "All of the above"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above",
        "difficulty": "hard",
        "explanation": "HttpInterceptor allows you to intercept and modify HTTP requests and responses globally, enabling tasks like adding headers, logging, and response caching.",
        "hint": "Interceptors are powerful middleware for HTTP requests in Angular."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "Code Snippet: What will be the output of this HTTP request?",
        "options": [
            "Returns User data", 
            "Throws an error", 
            "Returns null", 
            "Returns empty array"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Returns User data",
        "difficulty": "hard",
        "questionCode": `
@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}
    
    getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
    }
}`,
        "explanation": "The method returns an Observable of User array by making a GET request to '/api/users' endpoint.",
        "hint": "Type casting with generic type helps TypeScript understand the response structure."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "Which RxJS operator is best for handling multiple HTTP requests concurrently?",
        "options": ["mergeMap", "switchMap", "concatMap", "forkJoin"],
        "correctOptionIndex": 3,
        "correctOptionText": "forkJoin",
        "difficulty": "hard",
        "explanation": "forkJoin is ideal for executing multiple HTTP requests concurrently and waiting for all to complete.",
        "hint": "Think about scenarios where you need results from multiple parallel API calls."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What HTTP method would you use to update a resource partially?",
        "options": ["PUT", "POST", "PATCH", "UPDATE"],
        "correctOptionIndex": 2,
        "correctOptionText": "PATCH",
        "difficulty": "medium",
        "explanation": "PATCH is used for partial updates, sending only the changes instead of the entire resource.",
        "hint": "Difference between PUT (full update) and PATCH (partial update)."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "How do you set custom headers in an HTTP request?",
        "options": [
            "Using request() method", 
            "Using headers property", 
            "Using HttpHeaders class", 
            "Using interceptors"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using HttpHeaders class",
        "difficulty": "medium",
        "explanation": "HttpHeaders provides methods to set, append, and modify HTTP headers for requests.",
        "hint": "Angular provides a dedicated class for managing HTTP headers."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What does the HttpClient.delete() method do?",
        "options": [
            "Removes local data", 
            "Sends DELETE request to server", 
            "Clears browser cache", 
            "Stops ongoing requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Sends DELETE request to server",
        "difficulty": "easy",
        "explanation": "delete() method sends an HTTP DELETE request to remove a resource on the server.",
        "hint": "Used for removing resources in RESTful APIs."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What is the purpose of HttpParams in Angular's HttpClient?",
        "options": [
            "To set request headers", 
            "To create query parameters", 
            "To handle response data", 
            "To manage error handling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create query parameters",
        "difficulty": "medium",
        "explanation": "HttpParams helps construct and manage URL query parameters for HTTP requests.",
        "hint": "Used when you need to add parameters to a GET request URL."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "How can you set a timeout for an HTTP request in Angular?",
        "options": [
            "Using setTimeout()", 
            "With catchError operator", 
            "Using HttpClient's timeout config", 
            "By catching network errors"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using HttpClient's timeout config",
        "difficulty": "hard",
        "explanation": "Angular's HttpClient allows setting request timeout using the timeout operator from RxJS.",
        "hint": "RxJS provides operators for managing request timing and cancellation."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What does the withCredentials option do in HTTP requests?",
        "options": [
            "Adds authentication headers", 
            "Enables cross-origin requests with credentials", 
            "Stores cookies locally", 
            "Manages session tokens"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Enables cross-origin requests with credentials",
        "difficulty": "hard",
        "explanation": "withCredentials allows sending cookies and authentication headers in cross-origin requests.",
        "hint": "Important for handling authentication across different domains."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "Code Snippet: What is the purpose of this HTTP interceptor?",
        "questionCode": `
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(authReq);
    }
}`,
        "options": [
            "Logging requests", 
            "Adding authentication token", 
            "Caching responses", 
            "Error handling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Adding authentication token",
        "difficulty": "hard",
        "explanation": "This interceptor automatically adds an Authorization header to every outgoing HTTP request.",
        "hint": "Interceptors can modify requests globally before they are sent."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "Which RxJS operator is best for sequential HTTP requests?",
        "options": [
            "mergeMap", 
            "switchMap", 
            "concatMap", 
            "exhaustMap"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "concatMap",
        "difficulty": "hard",
        "explanation": "concatMap ensures HTTP requests are made sequentially, waiting for each to complete before starting the next.",
        "hint": "Think about scenarios requiring ordered API calls."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What method can you use to handle HTTP request progress?",
        "options": [
            "reportProgress option", 
            "onProgress method", 
            "trackProgress method", 
            "progressEvent listener"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "reportProgress option",
        "difficulty": "medium",
        "explanation": "The reportProgress option in HttpClient allows tracking upload and download progress.",
        "hint": "Useful for file uploads and downloads to show progress bars."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What does the responseType option do in HTTP requests?",
        "options": [
            "Changes response format", 
            "Sets content type", 
            "Defines expected response type", 
            "Modifies request headers"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Defines expected response type",
        "difficulty": "medium",
        "explanation": "responseType allows specifying the expected type of response data (e.g., json, text, blob).",
        "hint": "Helps in handling different types of server responses."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "How can you cancel an ongoing HTTP request?",
        "options": [
            "Using Promise.cancel()", 
            "With RxJS takeUntil operator", 
            "Calling unsubscribe()", 
            "Using HttpClient.abort()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "With RxJS takeUntil operator",
        "difficulty": "hard",
        "explanation": "RxJS's takeUntil operator allows cancelling ongoing observables based on a cancellation signal.",
        "hint": "Provides a clean way to manage request lifecycle."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "What is the primary difference between HttpClient and HttpModule?",
        "options": [
            "No significant difference", 
            "HttpClient is more modern and feature-rich", 
            "HttpModule supports more request types", 
            "HttpClient is slower"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "HttpClient is more modern and feature-rich",
        "difficulty": "medium",
        "explanation": "HttpClient is a more modern replacement for HttpModule, offering improved features like typed requests and better testing support.",
        "hint": "HttpClient is recommended for new Angular applications."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "HTTP Client",
        "questionText": "Code Snippet: What will this code accomplish?",
        "questionCode": `
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}

    createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user)
        .pipe(
        retry(3),
        catchError(this.handleError)
        );
    }
}`,
        "options": [
            "Simple user creation without error handling", 
            "User creation with retry and error handling", 
            "Automatic user validation", 
            "Cached user request"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "User creation with retry and error handling",
        "difficulty": "hard",
        "explanation": "The code creates a user via POST request, with 3 retry attempts and custom error handling.",
        "hint": "RxJS operators provide powerful request management capabilities."
    },


    // angular Material
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What module must be imported to use Angular Material components?",
        "options": [
            "MatComponentsModule", 
            "MaterialModule", 
            "MatModule", 
            "MatImportsModule"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MaterialModule",
        "difficulty": "easy",
        "explanation": "To use Angular Material components, you need to import specific Material modules for each component type.",
        "hint": "Each Material component typically has its own import module."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "Which command is used to add Angular Material to an Angular project?",
        "options": [
            "ng add material", 
            "npm install @angular/material", 
            "ng add @angular/material", 
            "npm install material-angular"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "ng add @angular/material",
        "difficulty": "easy",
        "explanation": "The ng add command installs Angular Material and sets up necessary configurations automatically.",
        "hint": "This is the official Angular CLI command for adding Material to a project."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the purpose of MatThemingModule?",
        "options": [
            "Create custom color themes", 
            "Manage component animations", 
            "Handle material icons", 
            "Configure material layouts"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Create custom color themes",
        "difficulty": "medium",
        "explanation": "MatThemingModule allows developers to create and apply custom color palettes across Angular Material components.",
        "hint": "Theming is a key feature of Angular Material for consistent design."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "Which decorator is used to create a custom Material theme?",
        "options": [
            "@Theme", 
            "@MaterialTheme", 
            "@angular/theme", 
            "No specific decorator needed"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "No specific decorator needed",
        "difficulty": "medium",
        "explanation": "Custom themes in Angular Material are typically created using SCSS mixins and configuration, not a specific decorator.",
        "hint": "Theme creation involves SCSS configuration rather than a TypeScript decorator."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What component is used for creating responsive layout in Angular Material?",
        "options": [
            "MatGrid", 
            "MatLayout", 
            "MatFlex", 
            "MatCard"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MatLayout",
        "difficulty": "easy",
        "explanation": "MatLayout provides flexible layout directives for creating responsive designs in Angular Material.",
        "hint": "This component helps in creating responsive and adaptive layouts."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "Which Material component is used for creating dialog boxes?",
        "options": [
            "MatPopup", 
            "MatModal", 
            "MatDialog", 
            "MatOverlay"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "MatDialog",
        "difficulty": "easy",
        "explanation": "MatDialog service is used to create and manage dialog boxes in Angular Material.",
        "hint": "This service allows programmatic creation of dialog windows."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the primary use of MatSnackBar?",
        "options": [
            "Creating complex forms", 
            "Displaying temporary notifications", 
            "Managing data tables", 
            "Creating navigation menus"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Displaying temporary notifications",
        "difficulty": "medium",
        "explanation": "MatSnackBar provides a way to show brief, temporary notifications to users.",
        "hint": "Think of toast messages or quick feedback mechanisms."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "Code Snippet: How would you open a Material Dialog?",
        "options": [
            "dialog.open()", 
            "dialog.create()", 
            "dialog.show()", 
            "dialog.launch()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "dialog.open()",
        "difficulty": "medium",
        "questionCode": `
@Component({...})
export class ExampleComponent {
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
        width: '250px',
        data: { name: 'John' }
    });
    }
}`,
        "explanation": "The open() method of MatDialog creates and displays a dialog with optional configuration.",
        "hint": "MatDialog.open() takes the component and optional configuration object."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "Which Material component is used for creating tabs?",
        "options": [
            "MatTabs", 
            "MatNavigation", 
            "MatTabGroup", 
            "MatRouter"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "MatTabGroup",
        "difficulty": "easy",
        "explanation": "MatTabGroup component is used to create tabbed interfaces in Angular Material.",
        "hint": "This component manages a group of interactive tabs."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the primary purpose of MatPaginator?",
        "options": [
            "Creating forms", 
            "Managing pagination for data tables", 
            "Routing between pages", 
            "Handling user authentication"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Managing pagination for data tables",
        "difficulty": "medium",
        "explanation": "MatPaginator provides controls for paginating data in tables or lists.",
        "hint": "Used to break large datasets into manageable pages."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "How do you create a custom theme in Angular Material?",
        "options": [
            "Using @angular/theme decorator", 
            "Through SCSS with mat-core() and mat-palette()", 
            "In component metadata", 
            "Using TypeScript configuration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Through SCSS with mat-core() and mat-palette()",
        "difficulty": "hard",
        "explanation": "Custom themes in Angular Material are created using SCSS mixins like mat-core() and defining color palettes.",
        "hint": "Theming involves creating SCSS variables and using Material's theming mixins."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the purpose of MatBottomSheet?",
        "options": [
            "Creating full-screen dialogs", 
            "Showing sheets from bottom of screen", 
            "Managing page navigation", 
            "Handling form submissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Showing sheets from bottom of screen",
        "difficulty": "medium",
        "explanation": "MatBottomSheet displays a sheet of content from the bottom of the screen, typically for mobile interfaces.",
        "hint": "Similar to a modal, but slides up from the bottom."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "Code Snippet: How would you create a form field with error handling?",
        "questionCode": `
<mat-form-field>
    <input matInput 
            [formControl]="emailControl">
    <mat-error *ngIf="emailControl.hasError('required')">
    Email is required
    </mat-error>
    <mat-error *ngIf="emailControl.hasError('email')">
    Invalid email format
    </mat-error>
</mat-form-field>`,
        "options": [
            "Simple input field", 
            "Form field with error messages", 
            "Disabled input", 
            "Read-only input"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Form field with error messages",
        "difficulty": "medium",
        "explanation": "This demonstrates using MatFormField with reactive forms to show specific error messages.",
        "hint": "MatError provides conditional error display based on form control state."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What component is used for creating expandable panels?",
        "options": [
            "MatExpand", 
            "MatAccordion", 
            "MatExpansionPanel", 
            "MatDropdown"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "MatExpansionPanel",
        "difficulty": "easy",
        "explanation": "MatExpansionPanel creates collapsible/expandable content sections in Angular Material.",
        "hint": "Commonly used for creating FAQ-style or accordion-like interfaces."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "How do you implement dark mode in Angular Material?",
        "options": [
            "Using @angular/dark-theme", 
            "Manually switching CSS classes", 
            "Using predefined dark theme from Material", 
            "Through MatThemingModule"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using predefined dark theme from Material",
        "difficulty": "hard",
        "explanation": "Angular Material provides predefined dark themes that can be applied through SCSS configuration.",
        "hint": "Involves creating alternate theme stylesheets and toggling between them."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the purpose of MatRipple directive?",
        "options": [
            "Creating loading animations", 
            "Adding click interaction effects", 
            "Managing form validations", 
            "Handling scroll events"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Adding click interaction effects",
        "difficulty": "easy",
        "explanation": "MatRipple creates material design-style click/touch interaction ripple effects on elements.",
        "hint": "Provides visual feedback for user interactions."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "Which service is used to create dynamic tooltips?",
        "options": [
            "MatTooltipService", 
            "MatTooltip", 
            "TooltipBuilder", 
            "MatTooltipModule"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MatTooltip",
        "difficulty": "medium",
        "explanation": "MatTooltip directive is used to create informational tooltips on elements.",
        "hint": "Can be applied directly to elements in the template."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What module provides stepper functionality?",
        "options": [
            "MatStepperModule", 
            "MatWizardModule", 
            "MatProgressModule", 
            "MatSequenceModule"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "MatStepperModule",
        "difficulty": "easy",
        "explanation": "MatStepperModule allows creation of multi-step forms or processes with linear/non-linear progression.",
        "hint": "Useful for complex forms or guided workflows."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "How can you customize Material component appearance?",
        "options": [
            "Using @Input() decorators", 
            "Through global SCSS variables", 
            "By extending component classes", 
            "Using ViewEncapsulation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Through global SCSS variables",
        "difficulty": "hard",
        "explanation": "Material components can be customized using global SCSS variables and theme mixins.",
        "hint": "Theming involves modifying color, typography, and density variables."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the primary use of MatChipsModule?",
        "options": [
            "Creating navigation menus", 
            "Displaying compact input tags", 
            "Managing form validations", 
            "Creating dropdown selections"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Displaying compact input tags",
        "difficulty": "medium",
        "explanation": "MatChipsModule provides components for creating compact, removable input tags or chips.",
        "hint": "Commonly used in email inputs, tag selections, and filters."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the purpose of MatSidenavModule?",
        "options": [
            "Creating pop-up windows", 
            "Implementing side navigation drawers", 
            "Managing form layouts", 
            "Creating modal dialogs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Implementing side navigation drawers",
        "difficulty": "easy",
        "explanation": "MatSidenavModule provides components for creating sliding side navigation menus that can be toggled open and closed.",
        "hint": "Common in responsive web applications for mobile and desktop layouts."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "How do you implement drag and drop functionality in Angular Material?",
        "options": [
            "Using MatDragDrop", 
            "With CdkDragDrop from @angular/cdk", 
            "Through MatDropModule", 
            "Using custom directives"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "With CdkDragDrop from @angular/cdk",
        "difficulty": "medium",
        "explanation": "CdkDragDrop is part of Angular's CDK (Component Dev Kit) and provides drag and drop functionality.",
        "hint": "Part of the Angular Material ecosystem but from the CDK package."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "Code Snippet: What does this Angular Material configuration demonstrate?",
        "questionCode": `
const myTheme = createTheme({
    palette: {
    primary: {
        main: '#ff4400',
    },
    secondary: {
        main: '#0044ff',
    },
    },
});`,
        "options": [
            "Creating a new Angular component", 
            "Defining a custom color palette", 
            "Setting up routing", 
            "Managing form validations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Defining a custom color palette",
        "difficulty": "hard",
        "explanation": "This code creates a custom theme with specific primary and secondary color definitions.",
        "hint": "Theming allows precise control over Material component colors."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What component is used for creating date pickers?",
        "options": [
            "MatCalendar", 
            "MatDatepicker", 
            "MatDateInput", 
            "MatCalendarInput"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MatDatepicker",
        "difficulty": "easy",
        "explanation": "MatDatepicker provides a calendar interface for selecting dates in forms.",
        "hint": "Supports various date input and selection scenarios."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "How can you implement progressive loading in Material data tables?",
        "options": [
            "Using MatPaginator", 
            "With CdkVirtualScrollViewport", 
            "Through MatProgressBar", 
            "Using ngFor directive"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "With CdkVirtualScrollViewport",
        "difficulty": "hard",
        "explanation": "CdkVirtualScrollViewport enables efficient rendering of large lists by only rendering visible items.",
        "hint": "Part of Angular CDK, helps with performance in large datasets."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the primary purpose of MatBadge?",
        "options": [
            "Creating form badges", 
            "Displaying notification counts", 
            "Marking form fields", 
            "Generating QR codes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Displaying notification counts",
        "difficulty": "easy",
        "explanation": "MatBadge allows adding small numerical or status indicators to elements.",
        "hint": "Commonly used for showing unread notifications or item counts."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "How do you implement form field hints in Material?",
        "options": [
            "Using matHint directive", 
            "With tooltip", 
            "Through error messages", 
            "Using placeholder"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using matHint directive",
        "difficulty": "medium",
        "explanation": "matHint directive allows adding helper text to form fields in Material design.",
        "hint": "Provides additional context for form inputs."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What module provides progress indicator components?",
        "options": [
            "MatLoadingModule", 
            "MatProgressModule", 
            "MatIndicatorModule", 
            "MatSpinnerModule"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MatProgressModule",
        "difficulty": "easy",
        "explanation": "MatProgressModule provides components like progress bar and spinner for indicating loading states.",
        "hint": "Essential for providing user feedback during async operations."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "How can you implement responsive layouts in Angular Material?",
        "options": [
            "Using MatGrid", 
            "With @angular/flex-layout", 
            "Through CSS media queries", 
            "Using MatLayout"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "With @angular/flex-layout",
        "difficulty": "hard",
        "explanation": "While not strictly part of Material, @angular/flex-layout provides powerful responsive layout directives.",
        "hint": "Complements Material's responsive design capabilities."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "Angular Material",
        "questionText": "What is the purpose of MatMenuModule?",
        "options": [
            "Creating dropdown navigation", 
            "Managing form menus", 
            "Handling context menus", 
            "Creating side navigation"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Creating dropdown navigation",
        "difficulty": "easy",
        "explanation": "MatMenuModule provides components for creating dropdown menus and navigation lists.",
        "hint": "Supports nested menus and various interaction patterns."
    },
    // State Management
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the primary purpose of NgRx Store in Angular?",
        "options": [
            "To manage component styling",
            "To create a centralized state management solution",
            "To handle routing",
            "To implement HTTP interceptors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create a centralized state management solution",
        "difficulty": "easy",
        "explanation": "NgRx Store provides a centralized, predictable state container for managing application state using Redux principles.",
        "hint": "Think of it as a single source of truth for your application's data."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "Which of the following is NOT a core component of NgRx?",
        "options": [
            "Actions",
            "Reducers",
            "Selectors",
            "Controllers"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Controllers",
        "difficulty": "easy",
        "explanation": "NgRx core components are Actions, Reducers, Selectors, Effects, and Store. Controllers are not a part of the NgRx architecture.",
        "hint": "Look for the standard Redux-like pattern in state management."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What does an Action represent in NgRx?",
        "options": [
            "A function that changes the state",
            "A method to retrieve state",
            "An immutable description of a state change",
            "A component lifecycle hook"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An immutable description of a state change",
        "difficulty": "medium",
        "explanation": "Actions in NgRx are plain JavaScript objects that describe an intention to change the state, without directly mutating it.",
        "hint": "Actions are like messages that tell the reducer what should happen."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the primary responsibility of a Reducer in NgRx?",
        "options": [
            "To create new components",
            "To handle HTTP requests",
            "To specify how the application's state changes in response to actions",
            "To manage component lifecycle"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To specify how the application's state changes in response to actions",
        "difficulty": "medium",
        "explanation": "Reducers are pure functions that take the current state and an action, and return a new state based on that action.",
        "hint": "Reducers are pure functions that determine state transitions."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the purpose of NgRx Selectors?",
        "options": [
            "To create new actions",
            "To filter and transform state data for components",
            "To modify the application state",
            "To handle routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To filter and transform state data for components",
        "difficulty": "medium",
        "explanation": "Selectors provide a way to efficiently select and derive data from the store, allowing components to access specific pieces of state.",
        "hint": "Think of selectors as query methods for your application state."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is a pure function in the context of Redux/NgRx?",
        "options": [
            "A function that always returns undefined",
            "A function with side effects",
            "A function that returns the same output for the same input without modifying external state",
            "A function that can only be used in reducers"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A function that returns the same output for the same input without modifying external state",
        "difficulty": "hard",
        "explanation": "Pure functions are predictable and have no side effects. In NgRx, reducers must be pure functions to ensure state predictability.",
        "hint": "Pure functions are deterministic and do not modify external state or have observable side effects."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What does the @ngrx/effects library help you manage?",
        "options": [
            "Component styling",
            "Side effects like async operations",
            "HTTP request interceptors",
            "Component lifecycle hooks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Side effects like async operations",
        "difficulty": "medium",
        "explanation": "NgRx Effects help manage side effects in the application, such as API calls, without modifying the reducers.",
        "hint": "Effects handle operations that are not pure state transformations."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "Which method is used to dispatch an action in NgRx?",
        "options": [
            "emit()",
            "dispatch()",
            "send()",
            "trigger()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "dispatch()",
        "difficulty": "easy",
        "explanation": "The `dispatch()` method is used to send actions to the NgRx store, triggering state changes.",
        "hint": "This method is called on the Store service to send actions."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the recommended way to handle complex state transformations in NgRx?",
        "options": [
            "Using multiple reducers",
            "Modifying state directly",
            "Creating multiple stores",
            "Using component methods"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using multiple reducers",
        "difficulty": "hard",
        "explanation": "NgRx recommends using multiple reducers and combining them with `combineReducers()` to manage complex state structures.",
        "hint": "Break down complex state into smaller, manageable pieces."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What does the `createFeatureSelector` method help you do?",
        "options": [
            "Create new actions",
            "Select a specific feature's state from the global store",
            "Create a new reducer",
            "Handle HTTP requests"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Select a specific feature's state from the global store",
        "difficulty": "medium",
        "explanation": "`createFeatureSelector` allows you to select a specific slice of state corresponding to a feature module.",
        "hint": "This method helps in accessing feature-specific state branches."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is memoization in the context of NgRx Selectors?",
        "options": [
            "A way to create actions",
            "Caching selector results to improve performance",
            "A method to modify state",
            "Creating multiple stores"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Caching selector results to improve performance",
        "difficulty": "hard",
        "explanation": "Memoization in NgRx Selectors helps cache and reuse selector results, preventing unnecessary computations.",
        "hint": "Think of it as an optimization technique for selector performance."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the primary benefit of using NgRx compared to simple services?",
        "options": [
            "Faster development time",
            "Reduced code complexity",
            "Predictable state management with unidirectional data flow",
            "Less memory usage"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Predictable state management with unidirectional data flow",
        "difficulty": "medium",
        "explanation": "NgRx provides a predictable state container with a clear, unidirectional data flow, making state changes more manageable and traceable.",
        "hint": "Consider the benefits of a centralized, immutable state approach."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the purpose of the `props()` method in NgRx Actions?",
        "options": [
            "To create component properties",
            "To define additional metadata for an action",
            "To handle routing",
            "To modify state"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define additional metadata for an action",
        "difficulty": "hard",
        "explanation": "`props()` allows you to add additional metadata or payload to an action, providing more context for state changes.",
        "hint": "Think of props as additional information carried by an action."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "Which Angular decorator is used to register NgRx Effects?",
        "options": [
            "@Effect()",
            "@Injectable()",
            "@NgModule()",
            "@Effect"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "@Effect()",
        "difficulty": "easy",
        "explanation": "The `@Effect()` decorator is used to mark methods in an Effect class that should be listened to by the NgRx Effects system.",
        "hint": "This decorator is specific to NgRx Effects."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the primary purpose of the NgRx Store DevTools?",
        "options": [
            "To create new components",
            "To debug and track state changes",
            "To handle HTTP requests",
            "To optimize application performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To debug and track state changes",
        "difficulty": "medium",
        "explanation": "NgRx Store DevTools provide a way to inspect and debug state changes, action history, and time-travel debugging.",
        "hint": "Think of it as a debugging tool for state management."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What does the `@ngrx/store-devtools` package provide?",
        "options": [
            "Performance monitoring tools",
            "Development tools for inspecting and debugging store state",
            "Server-side rendering support",
            "Component testing utilities"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Development tools for inspecting and debugging store state",
        "difficulty": "medium",
        "explanation": "The `@ngrx/store-devtools` package provides browser extensions and tools for monitoring and debugging NgRx store state.",
        "hint": "This package helps developers understand state changes during development."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the recommended approach for handling complex state in large applications?",
        "options": [
            "Using a single, large reducer",
            "Creating multiple stores",
            "Using feature modules with their own state",
            "Avoiding state management entirely"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using feature modules with their own state",
        "difficulty": "hard",
        "explanation": "In large Angular applications, it's recommended to use feature modules with their own state, which can be combined into a global store.",
        "hint": "Think modular and break down state into manageable pieces."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What does the `createAction()` function from @ngrx/store do?",
        "options": [
            "Creates a new component",
            "Generates a typed action creator",
            "Modifies the application state",
            "Handles routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Generates a typed action creator",
        "difficulty": "medium",
        "explanation": "`createAction()` helps create type-safe action creators with optional payload, improving type checking in NgRx.",
        "hint": "This function helps create strongly-typed actions."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "How do NgRx Selectors support performance optimization?",
        "options": [
            "By reducing the number of components",
            "Through memoization and avoiding unnecessary computations",
            "By minimizing HTTP requests",
            "By reducing state size"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Through memoization and avoiding unnecessary computations",
        "difficulty": "hard",
        "explanation": "NgRx Selectors use memoization to cache results and prevent redundant calculations, improving overall application performance.",
        "hint": "Selectors can cache and reuse computation results."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the purpose of the `on()` method in reducer configuration?",
        "options": [
            "To create new actions",
            "To handle component events",
            "To define how specific actions modify the state",
            "To manage routing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To define how specific actions modify the state",
        "difficulty": "medium",
        "explanation": "The `on()` method is used in reducer configuration to specify how particular actions should transform the state.",
        "hint": "This method maps actions to state transformation logic."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is an anti-pattern in NgRx state management?",
        "options": [
            "Using multiple reducers",
            "Modifying state directly in a reducer",
            "Creating feature modules",
            "Using selectors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Modifying state directly in a reducer",
        "difficulty": "hard",
        "explanation": "Directly mutating state in a reducer is an anti-pattern. Reducers should always return a new state object to maintain immutability.",
        "hint": "Immutability is key in NgRx state management."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the primary role of NgRx Effects in handling asynchronous operations?",
        "options": [
            "To replace HTTP services",
            "To listen for actions and perform side effects",
            "To manage component lifecycle",
            "To handle routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To listen for actions and perform side effects",
        "difficulty": "medium",
        "explanation": "NgRx Effects listen for specific actions and perform side effects like API calls, without modifying the reducers directly.",
        "hint": "Effects handle async logic outside of components and reducers."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What does the term 'lifting state' mean in NgRx?",
        "options": [
            "Creating a new store",
            "Moving component-specific state to the global store",
            "Optimizing state performance",
            "Handling routing state"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Moving component-specific state to the global store",
        "difficulty": "hard",
        "explanation": "'Lifting state' refers to moving local component state to the centralized NgRx store for better state management and sharing.",
        "hint": "Consider moving isolated state to a more global, accessible location."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the purpose of the `createReducer()` function?",
        "options": [
            "To create new components",
            "To define the initial state and handle state transitions",
            "To manage HTTP requests",
            "To handle routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define the initial state and handle state transitions",
        "difficulty": "medium",
        "explanation": "`createReducer()` helps define the initial state and specify how different actions modify that state using the `on()` method.",
        "hint": "This function sets up the state transformation logic."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "How do you handle error states in NgRx Effects?",
        "options": [
            "By ignoring errors",
            "Using the `catchError` operator from RxJS",
            "Modifying the reducer directly",
            "Creating a new store"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using the `catchError` operator from RxJS",
        "difficulty": "hard",
        "explanation": "In NgRx Effects, the `catchError` RxJS operator is used to handle and dispatch error actions when async operations fail.",
        "hint": "RxJS operators help manage error scenarios in Effects."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is a key benefit of using NgRx for state management?",
        "options": [
            "Reduced application complexity",
            "Automatic performance optimization",
            "Predictable state changes and easier debugging",
            "Elimination of all async operations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Predictable state changes and easier debugging",
        "difficulty": "medium",
        "explanation": "NgRx provides a predictable state management approach with clear action flows, making it easier to track and debug state changes.",
        "hint": "Consider the advantages of a structured, unidirectional state management approach."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What is the recommended way to handle form state in NgRx?",
        "options": [
            "Using component local state",
            "Creating a dedicated form state in the store",
            "Avoiding state management for forms",
            "Using only template-driven forms"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating a dedicated form state in the store",
        "difficulty": "hard",
        "explanation": "For complex forms, it's recommended to create a dedicated form state in the NgRx store to manage form data and validation centrally.",
        "hint": "Consider centralizing form-related state for better management."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "What does the term 'action creator' mean in NgRx?",
        "options": [
            "A method to create new components",
            "A function that returns an action object",
            "A way to modify the store directly",
            "A method to handle routing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A function that returns an action object",
        "difficulty": "medium",
        "explanation": "An action creator is a function that returns a standardized action object, providing a consistent way to create actions in NgRx.",
        "hint": "Action creators help create type-safe, structured actions."
    },
    {
        "topic": "67defd2be107cf2e3745af6c",
        "module": "State Management",
        "questionText": "How can you optimize performance in large NgRx applications?",
        "options": [
            "Using a single, large reducer",
            "Avoiding state management",
            "Using feature modules, memoized selectors, and OnPush change detection",
            "Increasing the number of actions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Using feature modules, memoized selectors, and OnPush change detection",
        "difficulty": "hard",
        "explanation": "Performance optimization in large NgRx applications involves using feature modules, memoized selectors, and OnPush change detection strategy.",
        "hint": "Consider modular design and efficient rendering techniques."
    },

    // Testing Angular Applications

    // Performance Optimization

    // Advance Angular Concepts

]

export default AngularQuestions;