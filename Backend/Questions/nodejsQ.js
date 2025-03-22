const nodeJSQuestions = [
    // Introduction to Node.js
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is Node.js?",
        "options": [
        "A frontend JavaScript framework",
        "A runtime environment for executing JavaScript outside the browser",
        "A programming language derived from JavaScript",
        "A database management system"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A runtime environment for executing JavaScript outside the browser",
        "difficulty": "easy",
        "explanation": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code server-side.",
        "hint": "Think about where JavaScript traditionally runs versus what Node.js enables."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the core technology behind Node.js?",
        "options": [
        "SpiderMonkey JavaScript engine",
        "V8 JavaScript engine",
        "JavaScriptCore engine",
        "Chakra JavaScript engine"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "V8 JavaScript engine",
        "difficulty": "easy",
        "explanation": "Node.js is built on Chrome's V8 JavaScript engine, which was developed by Google for the Chrome browser.",
        "hint": "This engine is also used in Google Chrome."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Who created Node.js?",
        "options": [
        "Brendan Eich",
        "Ryan Dahl",
        "Douglas Crockford",
        "David Flanagan"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ryan Dahl",
        "difficulty": "medium",
        "explanation": "Node.js was created by Ryan Dahl in 2009. He presented it at the JSConf EU the same year.",
        "hint": "He introduced it at JSConf EU in 2009."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Which of the following is NOT a characteristic of Node.js?",
        "options": [
        "Event-driven",
        "Non-blocking I/O",
        "Multi-threaded by default",
        "Asynchronous programming"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Multi-threaded by default",
        "difficulty": "medium",
        "explanation": "Node.js uses a single-threaded event loop model by default. While it can use multiple threads with worker threads, it is not multi-threaded by default.",
        "hint": "Consider the default threading model of Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What command is used to install Node.js packages?",
        "options": [
        "node install",
        "npm install",
        "node package",
        "install npm"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "npm install",
        "difficulty": "easy",
        "explanation": "npm (Node Package Manager) is used to install packages with the command 'npm install'.",
        "hint": "It uses the default package manager that comes with Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the command to check the installed version of Node.js?",
        "options": [
        "node -v",
        "npm -version",
        "node --version",
        "Both A and C"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both A and C",
        "difficulty": "easy",
        "explanation": "Both 'node -v' and 'node --version' can be used to check the installed version of Node.js.",
        "hint": "There are two common command line arguments to check version information."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Which file is used to define dependencies for a Node.js project?",
        "options": [
        "package.json",
        "node_modules.json",
        "dependencies.js",
        "npm.config"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "package.json",
        "difficulty": "easy",
        "explanation": "The package.json file contains metadata about the project and lists its dependencies.",
        "hint": "This JSON file is at the root of most Node.js projects."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What does the 'npm init' command do?",
        "options": [
        "Installs Node.js on your system",
        "Initializes a new Node.js project with a package.json file",
        "Starts a Node.js server",
        "Runs tests for a Node.js application"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Initializes a new Node.js project with a package.json file",
        "difficulty": "easy",
        "explanation": "The 'npm init' command creates a new package.json file with default values based on user input.",
        "hint": "This command is typically the first step when creating a new Node.js project."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Which of the following is true about Node.js architecture?",
        "options": [
        "It uses multiple threads for handling requests",
        "It blocks I/O operations until they are complete",
        "It uses a non-blocking, event-driven architecture",
        "It can only handle synchronous operations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It uses a non-blocking, event-driven architecture",
        "difficulty": "medium",
        "explanation": "Node.js uses a non-blocking, event-driven architecture that makes it efficient for I/O-intensive applications.",
        "hint": "Consider how Node.js handles operations that might take time to complete."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is REPL in Node.js?",
        "options": [
        "Real Event Processing Library",
        "Read-Eval-Print Loop",
        "Runtime Environment Programming Language",
        "Reactive Extension Programming Logic"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Read-Eval-Print Loop",
        "difficulty": "medium",
        "explanation": "REPL stands for Read-Eval-Print Loop, which is an interactive programming environment that allows you to execute Node.js code interactively.",
        "hint": "It's an interactive shell for testing simple Node.js code."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "How do you access Node.js REPL?",
        "options": [
        "Type 'node repl' in the terminal",
        "Type 'npm repl' in the terminal",
        "Type 'node' in the terminal",
        "Type 'start repl' in the terminal"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Type 'node' in the terminal",
        "difficulty": "easy",
        "explanation": "Typing 'node' without any arguments in the terminal starts the Node.js REPL environment.",
        "hint": "The simplest command to access the Node.js interactive shell."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the significance of the 'node_modules' folder in a Node.js project?",
        "options": [
        "It contains the Node.js runtime core modules",
        "It stores the project's source code",
        "It contains the installed npm packages/dependencies",
        "It hosts the Node.js configuration files"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It contains the installed npm packages/dependencies",
        "difficulty": "easy",
        "explanation": "The 'node_modules' folder is where npm installs all the dependencies for your project.",
        "hint": "This folder is created when you install packages using npm."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Which file is typically used to define environment variables for a Node.js application?",
        "options": [
        ".env",
        "environment.js",
        "config.js",
        "variables.json"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": ".env",
        "difficulty": "medium",
        "explanation": "The .env file is commonly used to store environment variables for Node.js applications, often accessed using packages like dotenv.",
        "hint": "This file is not processed by Node.js directly but is commonly used with a specific package."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the difference between 'npm install package' and 'npm install package --save'?",
        "options": [
        "They are exactly the same in recent npm versions",
        "'--save' installs the package globally",
        "'--save' adds the package to dependencies in package.json",
        "'--save' installs the package with all its dependencies"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "They are exactly the same in recent npm versions",
        "difficulty": "medium",
        "explanation": "In npm version 5 and above, 'npm install' automatically adds packages to dependencies in package.json, making '--save' optional and redundant.",
        "hint": "This behavior changed in npm version 5."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the default port for a Node.js HTTP server?",
        "options": [
        "80",
        "3000",
        "8080",
        "There is no default port"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "There is no default port",
        "difficulty": "medium",
        "explanation": "Node.js HTTP server doesn't have a built-in default port. You must specify the port when creating the server.",
        "hint": "You need to explicitly define the port when setting up an HTTP server in Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Which of the following is NOT a valid way to install Node.js?",
        "options": [
        "Using a package manager like apt, yum, or brew",
        "Downloading and installing from nodejs.org",
        "Using Node Version Manager (nvm)",
        "Using npm install node"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Using npm install node",
        "difficulty": "medium",
        "explanation": "You cannot install Node.js using npm because npm itself requires Node.js to be installed first.",
        "hint": "Consider which tool is needed before the other can be used."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What makes Node.js suitable for real-time applications?",
        "options": [
        "Its compiled nature",
        "Its non-blocking I/O model",
        "Its strict typing system",
        "Its multi-threaded architecture"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Its non-blocking I/O model",
        "difficulty": "medium",
        "explanation": "Node.js's non-blocking I/O model makes it efficient for handling multiple concurrent connections, which is essential for real-time applications.",
        "hint": "Think about how Node.js handles operations that wait for data."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the purpose of the 'package-lock.json' file?",
        "options": [
        "It's a backup of package.json",
        "It tracks exactly which versions of each dependency were installed",
        "It locks the package.json file to prevent changes",
        "It's used to configure npm settings"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It tracks exactly which versions of each dependency were installed",
        "difficulty": "medium",
        "explanation": "package-lock.json is automatically generated and locks the specific version of installed packages and their dependencies to ensure consistent installations across environments.",
        "hint": "It helps with dependency version consistency across different installations."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the command to run a Node.js script?",
        "options": [
        "run app.js",
        "node start app.js",
        "node app.js",
        "start node app.js"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "node app.js",
        "difficulty": "easy",
        "explanation": "To run a Node.js script, you use the 'node' command followed by the name of the JavaScript file.",
        "hint": "The command is straightforward and begins with invoking the node runtime."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is npm?",
        "options": [
        "Node Programming Module",
        "Node Package Manager",
        "Node Process Manager",
        "Node Platform Manager"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Node Package Manager",
        "difficulty": "easy",
        "explanation": "npm is the default package manager for Node.js, which allows developers to install, share, and manage dependencies.",
        "hint": "It's the tool you use to add libraries to your Node.js projects."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the difference between dependencies and devDependencies in package.json?",
        "options": [
        "There is no difference",
        "dependencies are required for production, devDependencies are only for development",
        "dependencies are automatically updated, devDependencies are fixed versions",
        "dependencies are Node.js modules, devDependencies are third-party packages"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "dependencies are required for production, devDependencies are only for development",
        "difficulty": "medium",
        "explanation": "dependencies are packages required for the application to run in production, while devDependencies are only needed for development and testing.",
        "hint": "Think about which packages would be needed when deploying to production vs. developing locally."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What command would you use to install a package as a development dependency?",
        "options": [
        "npm install --dev package",
        "npm install --development package",
        "npm install --save-dev package",
        "npm install package --development"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "npm install --save-dev package",
        "difficulty": "medium",
        "explanation": "The '--save-dev' flag is used to install a package as a development dependency, adding it to the devDependencies section in package.json.",
        "hint": "This flag tells npm to save the package specifically for development purposes."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the LTS version of Node.js?",
        "options": [
        "Latest Technical Support",
        "Long Term Support",
        "Limited Time Service",
        "Lasting Technical Standard"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Long Term Support",
        "difficulty": "easy",
        "explanation": "LTS stands for Long Term Support, which is a version of Node.js that receives maintenance and security updates for a longer period than regular releases.",
        "hint": "These versions are recommended for most users as they offer stability for an extended period."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Which statement about Node.js is FALSE?",
        "options": [
        "Node.js is single-threaded",
        "Node.js can handle concurrent requests",
        "Node.js executes JavaScript code",
        "Node.js requires Apache server to run"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Node.js requires Apache server to run",
        "difficulty": "medium",
        "explanation": "Node.js does not require Apache or any other web server to run. It is itself capable of running as a standalone server.",
        "hint": "Consider whether Node.js depends on other server technologies."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What does the 'npm outdated' command do?",
        "options": [
        "Removes outdated packages from node_modules",
        "Lists all installed packages",
        "Shows which installed packages are outdated and need updating",
        "Updates all outdated packages automatically"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Shows which installed packages are outdated and need updating",
        "difficulty": "medium",
        "explanation": "The 'npm outdated' command checks the registry to see if any installed packages are currently outdated and displays a list of them.",
        "hint": "This command helps identify which packages have newer versions available."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Which of the following is true about nvm (Node Version Manager)?",
        "options": [
        "It is the official version manager for Node.js",
        "It allows you to install and switch between different versions of Node.js",
        "It comes pre-installed with Node.js",
        "It is only available for Windows operating systems"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It allows you to install and switch between different versions of Node.js",
        "difficulty": "medium",
        "explanation": "nvm is a version manager for Node.js that allows developers to install and switch between different versions of Node.js on the same machine.",
        "hint": "It's particularly useful for developers who need to work with different Node.js versions for different projects."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What happens when you run 'npm update' without specifying a package name?",
        "options": [
        "It updates npm itself to the latest version",
        "It updates Node.js to the latest version",
        "It updates all packages in the dependencies list to their latest versions",
        "It does nothing without package names"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It updates all packages in the dependencies list to their latest versions",
        "difficulty": "medium",
        "explanation": "The 'npm update' command will update all packages in the dependencies list to their latest versions that satisfy the version constraints in package.json.",
        "hint": "This command affects multiple packages at once when no specific package is mentioned."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the significance of semantic versioning (SemVer) in Node.js packages?",
        "options": [
        "It determines the loading order of packages",
        "It enables version control features",
        "It provides a standardized way to express version changes and compatibility",
        "It enforces security rules for package installation"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It provides a standardized way to express version changes and compatibility",
        "difficulty": "hard",
        "explanation": "Semantic Versioning (SemVer) is a versioning scheme with the format MAJOR.MINOR.PATCH that communicates the nature of changes and their impact on backward compatibility.",
        "hint": "Think about what the three numbers in a version like '2.1.4' indicate."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What does the caret (^) symbol mean in package.json version constraints?",
        "options": [
        "Exact version match only",
        "Compatible with latest version",
        "Compatible with minor and patch updates but not major updates",
        "Compatible with patch updates only"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Compatible with minor and patch updates but not major updates",
        "difficulty": "hard",
        "explanation": "The caret (^) allows automatic updates to all future MINOR and PATCH versions without incrementing the MAJOR version. For example, ^2.3.4 would allow updates to 2.3.5, 2.4.0, but not 3.0.0.",
        "hint": "It's related to which parts of semantic versioning can change automatically."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "Which of the following tools can be used to execute Node.js code in a browser?",
        "options": [
        "nvm",
        "browserify",
        "webpack",
        "Both B and C"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C",
        "difficulty": "hard",
        "explanation": "Both browserify and webpack are module bundlers that can transform Node.js code with its module system to make it compatible with browsers.",
        "hint": "These tools help bridge the gap between Node.js modules and browser JavaScript."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Introduction to Node.js",
        "questionText": "What is the main advantage of using Node.js over traditional server-side languages for I/O-intensive applications?",
        "options": [
        "Better syntax and easier to learn",
        "Higher computational performance",
        "Non-blocking I/O operations and event-driven architecture",
        "Stronger type checking and fewer runtime errors"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Non-blocking I/O operations and event-driven architecture",
        "difficulty": "hard",
        "explanation": "Node.js's non-blocking I/O and event-driven architecture allow it to handle many concurrent connections with minimal overhead, making it particularly efficient for I/O-intensive applications.",
        "hint": "Consider how Node.js handles operations that wait for external resources compared to traditional synchronous models."
    },

    // Node.js Fundamentals

    // Asynchronous Programming

    // Event-Driven Architecture

    // File System (fs) Module

    // HTTP Server & Networking

    // Express.js Framework

    // Databases & ORMS

    // Middleware

    // Error Handling & Debugging
    
    // Authentication & Authorization

    // Node.js Applications

    // Testing & Debugging

    // Advanced Topics

    // Performance Optimization

]

export default nodeJSQuestions;