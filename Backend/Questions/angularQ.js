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

    // Angular Modules

    // Angular Router

    // Template-Driven Forms

    // Reactive Forms

    // HTTP Client

    // angular Material

    // State Management

    // Testing Angular Applications

    // Performance Optimization

    // Advance Angular Concepts

]

export default AngularQuestions;