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
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the global object in Node.js?",
        "options": [
        "window",
        "document",
        "global",
        "process"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "global",
        "difficulty": "easy",
        "explanation": "In Node.js, the 'global' object is the equivalent of the 'window' object in browsers. It represents the global namespace object.",
        "hint": "This object provides access to globally available objects, functions, and variables."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "How do you include a module in a Node.js file?",
        "options": [
        "import module from 'module'",
        "require('module')",
        "include 'module'",
        "#include <module>"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "require('module')",
        "difficulty": "easy",
        "explanation": "The 'require()' function is used to include modules in Node.js using CommonJS module system.",
        "hint": "This is the traditional way to import functionality from other files in Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What does the process object in Node.js provide?",
        "options": [
        "Information about the current HTTP request",
        "Information about the system's hardware",
        "Information and control over the current Node.js process",
        "Tools for processing data streams"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Information and control over the current Node.js process",
        "difficulty": "easy",
        "explanation": "The process object provides information about and control over the current Node.js process, including environment variables, command-line arguments, and methods to control the process.",
        "hint": "This object lets you interact with the running Node.js environment itself."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the purpose of module.exports in Node.js?",
        "options": [
        "To import modules from other files",
        "To expose functionality from a module to other modules",
        "To define module-level variables",
        "To export modules to the browser"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To expose functionality from a module to other modules",
        "difficulty": "easy",
        "explanation": "module.exports is an object that determines what a module exports to other modules when it's required.",
        "hint": "It controls what is accessible when another file requires this module."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is event-driven programming in Node.js?",
        "options": [
        "Programming based on calendar events",
        "Programming where execution is determined by user events like clicks",
        "Programming where the flow is determined by events such as I/O operations or timers",
        "Programming focused on scheduling regular events"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Programming where the flow is determined by events such as I/O operations or timers",
        "difficulty": "medium",
        "explanation": "Event-driven programming in Node.js is a paradigm where the flow of the program is determined by events that occur, such as I/O operations, timers, or HTTP requests, which trigger event handlers.",
        "hint": "Think about how Node.js handles operations that might take time to complete."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "Which of the following is NOT a core module in Node.js?",
        "options": [
        "fs",
        "http",
        "path",
        "express"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "express",
        "difficulty": "easy",
        "explanation": "Express is a popular third-party web framework for Node.js, not a core module. fs, http, and path are all built-in core modules.",
        "hint": "Core modules come bundled with Node.js and don't need to be installed separately."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the difference between exports and module.exports?",
        "options": [
        "They are exactly the same",
        "exports is a reference to module.exports, but reassigning exports doesn't affect module.exports",
        "module.exports is for objects, exports is for functions",
        "exports is deprecated in newer versions of Node.js"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "exports is a reference to module.exports, but reassigning exports doesn't affect module.exports",
        "difficulty": "medium",
        "explanation": "exports is a reference to module.exports, so adding properties to exports will add them to module.exports. However, if you reassign exports to a new object, it breaks the reference and doesn't affect what the module actually exports.",
        "hint": "Think about how variable references work in JavaScript."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "How do you check if a file exists synchronously in Node.js?",
        "options": [
        "fs.exists('file.txt')",
        "fs.existsSync('file.txt')",
        "fs.check('file.txt')",
        "fs.fileExists('file.txt')"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "fs.existsSync('file.txt')",
        "difficulty": "medium",
        "explanation": "The fs.existsSync() method is used to synchronously check if a file exists at the specified path.",
        "hint": "Look for a method in the fs module with 'Sync' in its name."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the purpose of the __dirname variable in Node.js?",
        "options": [
        "It contains the name of the current directory",
        "It contains the absolute path of the directory containing the current module",
        "It contains the relative path to the root directory",
        "It contains the name of the current file"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It contains the absolute path of the directory containing the current module",
        "difficulty": "easy",
        "explanation": "__dirname is a global variable in Node.js that contains the absolute path of the directory containing the currently executing file/module.",
        "hint": "This variable helps when you need to reference files relative to the current module's location."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What does the path.join() method do in Node.js?",
        "options": [
        "Joins two strings with a space between them",
        "Joins an array of strings into a single string",
        "Joins path segments using the platform-specific separator",
        "Joins two files into one"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Joins path segments using the platform-specific separator",
        "difficulty": "medium",
        "explanation": "path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.",
        "hint": "This method helps create correct file paths across different operating systems."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the purpose of the Buffer class in Node.js?",
        "options": [
        "To store data in memory before sending it to disk",
        "To handle binary data",
        "To buffer network requests to prevent overload",
        "To temporarily store logs before writing to disk"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To handle binary data",
        "difficulty": "medium",
        "explanation": "The Buffer class in Node.js is used to handle binary data. It provides a way to work with streams of binary data and to convert between different encodings.",
        "hint": "This is especially important when dealing with file operations or network protocols."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "How can you make a Node.js application exit?",
        "options": [
        "app.exit()",
        "node.exit()",
        "process.exit()",
        "exit()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "process.exit()",
        "difficulty": "easy",
        "explanation": "The process.exit() method is used to end the process immediately with an optional exit code.",
        "hint": "This method is part of the process global object."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What happens when you run the following code in Node.js: console.log(1); setTimeout(() => console.log(2), 0); console.log(3);",
        "options": [
        "1, 2, 3",
        "3, 2, 1",
        "1, 3, 2",
        "2, 1, 3"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "1, 3, 2",
        "difficulty": "medium",
        "explanation": "Even with a timeout of 0ms, setTimeout schedules the callback to run in the next event loop iteration after the current execution context has completed, so 1 and 3 are printed before 2.",
        "hint": "Think about how the event loop processes synchronous code versus asynchronous callbacks."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "Which module would you use to create a web server in Node.js without any external packages?",
        "options": [
        "server",
        "url",
        "http",
        "net"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "http",
        "difficulty": "easy",
        "explanation": "The built-in 'http' module provides functionality to create HTTP servers in Node.js without any external packages.",
        "hint": "This core module is specifically designed for HTTP protocol operations."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the purpose of the 'querystring' module in Node.js?",
        "options": [
        "To query databases",
        "To parse and format URL query strings",
        "To make string-based queries to APIs",
        "To create search functionality"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To parse and format URL query strings",
        "difficulty": "medium",
        "explanation": "The 'querystring' module provides utilities for parsing and formatting URL query strings. It can convert between query strings and JavaScript objects.",
        "hint": "This module deals with the part of a URL that comes after the '?' character."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the difference between process.nextTick() and setImmediate()?",
        "options": [
        "They are exactly the same",
        "process.nextTick() executes in the next event loop, setImmediate() executes immediately",
        "process.nextTick() executes before I/O events, setImmediate() executes after I/O events",
        "setImmediate() is not a standard Node.js function"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "process.nextTick() executes before I/O events, setImmediate() executes after I/O events",
        "difficulty": "hard",
        "explanation": "process.nextTick() callbacks execute after the current operation completes but before the event loop continues, while setImmediate() callbacks execute in the next iteration of the event loop after I/O events.",
        "hint": "The key difference is in their timing relative to the phases of the event loop."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the purpose of the crypto module in Node.js?",
        "options": [
        "To handle cryptocurrencies",
        "To provide cryptographic functionality",
        "To encrypt the Node.js code",
        "To protect against security vulnerabilities"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide cryptographic functionality",
        "difficulty": "medium",
        "explanation": "The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.",
        "hint": "This module helps with tasks like hashing passwords and encrypting data."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "Which of the following statements about the Node.js module system is TRUE?",
        "options": [
        "Modules are loaded synchronously",
        "Modules are loaded only once and then cached",
        "Modules must always export a function",
        "All of the above"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Modules are loaded only once and then cached",
        "difficulty": "medium",
        "explanation": "Node.js caches modules after the first time they are loaded. This means that every call to require('foo') will get exactly the same object returned, if it would resolve to the same file.",
        "hint": "Think about performance implications if modules were loaded from disk every time they were required."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "How can you access command-line arguments in a Node.js application?",
        "options": [
        "args.argv",
        "arguments",
        "process.argv",
        "command.args"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "process.argv",
        "difficulty": "easy",
        "explanation": "The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.",
        "hint": "This property is part of the process global object."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the role of the 'cluster' module in Node.js?",
        "options": [
        "To group similar modules together",
        "To create a cluster of databases",
        "To run multiple Node.js processes to handle load",
        "To cluster similar requests together for faster processing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To run multiple Node.js processes to handle load",
        "difficulty": "hard",
        "explanation": "The cluster module allows you to create child processes (workers) that run simultaneously and share the same server port, effectively distributing the workload among multiple CPU cores.",
        "hint": "This module helps improve performance on multi-core systems."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the key benefit of using the 'util.promisify()' function?",
        "options": [
        "It makes asynchronous code run faster",
        "It converts callback-based functions to return Promises",
        "It automatically retries failed operations",
        "It provides utility functions for common tasks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It converts callback-based functions to return Promises",
        "difficulty": "medium",
        "explanation": "util.promisify() takes a function following the common Node.js callback style and returns a version that returns promises, making it easier to work with modern async/await syntax.",
        "hint": "This function helps modernize older Node.js APIs."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "How would you create a custom event emitter in Node.js?",
        "options": [
        "new EventEmitter()",
        "require('events').EventEmitter()",
        "By extending the EventEmitter class from the 'events' module",
        "create.EventEmitter()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "By extending the EventEmitter class from the 'events' module",
        "difficulty": "hard",
        "explanation": "To create a custom event emitter, you typically extend the EventEmitter class from the 'events' module, which allows your class to inherit all the event-handling functionality.",
        "hint": "This is an object-oriented approach to creating your own event emitter with custom behavior."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What does the __filename variable represent in Node.js?",
        "options": [
        "The name of the current file",
        "The absolute path of the currently executing file",
        "The relative path of the current file",
        "The content of the current file"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The absolute path of the currently executing file",
        "difficulty": "easy",
        "explanation": "__filename is a global variable in Node.js that contains the absolute path of the currently executing file, including the filename.",
        "hint": "This variable provides the full path to the current module."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "Which method would you use to check the number of available CPU cores in a Node.js application?",
        "options": [
        "os.cpuCount()",
        "process.cpus()",
        "os.cpus().length",
        "system.getCPUCount()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "os.cpus().length",
        "difficulty": "medium",
        "explanation": "The os.cpus() method returns an array of objects containing information about each CPU/core. The length of this array gives you the number of cores.",
        "hint": "You need to use the 'os' module and get an array property."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the purpose of the url.parse() method in Node.js?",
        "options": [
        "To check if a URL is valid",
        "To convert relative URLs to absolute URLs",
        "To parse a URL string into an object containing its components",
        "To encode URLs properly"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To parse a URL string into an object containing its components",
        "difficulty": "medium",
        "explanation": "url.parse() takes a URL string and returns an object with properties for each component of the URL (like protocol, hostname, path, etc.).",
        "hint": "This method breaks down a URL into its constituent parts."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the correct way to read a file asynchronously in Node.js?",
        "options": [
        "fs.readFile('file.txt', (err, data) => {...})",
        "fs.read('file.txt', (err, data) => {...})",
        "fs.open('file.txt', (err, data) => {...})",
        "file.readAsync('file.txt', (err, data) => {...})"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "fs.readFile('file.txt', (err, data) => {...})",
        "difficulty": "easy",
        "explanation": "fs.readFile() is the standard way to read a file asynchronously in Node.js. It takes a filename and a callback function that receives any errors and the file data.",
        "hint": "This is one of the most common file system operations in Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the purpose of the 'vm' module in Node.js?",
        "options": [
        "To create virtual machines",
        "To compile and run code within a V8 Virtual Machine context",
        "To manage virtual memory",
        "To simulate different operating systems"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To compile and run code within a V8 Virtual Machine context",
        "difficulty": "hard",
        "explanation": "The vm module enables you to compile and run JavaScript code within a V8 Virtual Machine context, which is isolated from the surrounding Node.js environment.",
        "hint": "This module is useful for running untrusted code in a sandboxed environment."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the difference between require() and import in Node.js?",
        "options": [
        "They are exactly the same",
        "require() is synchronous, import is asynchronous",
        "require() is CommonJS, import is ES modules syntax",
        "require() is for internal modules, import is for external packages"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "require() is CommonJS, import is ES modules syntax",
        "difficulty": "medium",
        "explanation": "require() is part of the CommonJS module system traditionally used in Node.js, while import is part of the ECMAScript modules (ESM) specification which is now supported in newer versions of Node.js.",
        "hint": "These represent two different module systems with different syntax and behaviors."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What happens if an unhandled exception occurs in a Node.js application?",
        "options": [
        "The application continues running normally",
        "Only the current function stops executing",
        "The application crashes (the process exits)",
        "Node.js automatically restarts the application"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The application crashes (the process exits)",
        "difficulty": "medium",
        "explanation": "By default, when an unhandled exception occurs, Node.js prints the error to stderr and then exits the process, effectively crashing the application.",
        "hint": "This behavior emphasizes the importance of proper error handling in Node.js applications."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "What is the purpose of the 'zlib' module in Node.js?",
        "options": [
        "To handle ZIP files",
        "To provide compression/decompression functionality",
        "To optimize database queries",
        "To compress JavaScript code for faster execution"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide compression/decompression functionality",
        "difficulty": "medium",
        "explanation": "The zlib module provides compression and decompression functionality (gzip, deflate, etc.) which can be used with other Node.js streams.",
        "hint": "This module is useful for reducing data size when sending over networks or storing files."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Node.js Fundamentals",
        "questionText": "Which pattern is commonly used when a module exports a single function in Node.js?",
        "options": [
        "module.exports = function() {...}",
        "exports = function() {...}",
        "export default function() {...}",
        "module.function = function() {...}"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "module.exports = function() {...}",
        "difficulty": "medium",
        "explanation": "When a module's main purpose is to export a single function, it's common to directly assign that function to module.exports.",
        "hint": "This pattern allows users to directly invoke the required module as a function."
    },

    // Asynchronous Programming
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the primary benefit of using async/await over Promises?",
        "options": [
        "It makes asynchronous code look and behave like synchronous code",
        "It runs faster than Promises",
        "It doesn't require the event loop",
        "It can handle multiple promises in parallel by default"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It makes asynchronous code look and behave like synchronous code",
        "difficulty": "easy",
        "explanation": "The main advantage of async/await is that it allows you to write asynchronous code in a way that resembles synchronous code, making it more readable and easier to understand.",
        "hint": "Think about the readability and structure of code using async/await compared to promise chains."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What will be logged to the console after executing this code?\n```javascript\nconsole.log('Start');\nsetTimeout(() => {\n  console.log('Timeout');\n}, 0);\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('End');\n```",
        "options": [
        "Start, End, Timeout, Promise",
        "Start, End, Promise, Timeout",
        "Start, Promise, End, Timeout",
        "Start, Timeout, Promise, End"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Start, End, Promise, Timeout",
        "difficulty": "medium",
        "explanation": "The execution order is determined by the event loop and its task queue. 'Start' and 'End' are logged immediately as part of the main execution thread. The Promise is added to the microtask queue, which has higher priority than the timer callback in the task queue, so 'Promise' is logged before 'Timeout'.",
        "hint": "Consider the different priorities in Node's event loop between promises (microtasks) and setTimeout callbacks (macrotasks)."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "Which method is used to handle errors in Promises?",
        "options": [
        "catch()",
        "error()",
        "try()",
        "handleError()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "catch()",
        "difficulty": "easy",
        "explanation": "The catch() method is used to handle errors in Promises. It's called when a promise is rejected, allowing you to gracefully handle errors in your asynchronous code.",
        "hint": "This method is similar to the catch block in a try/catch statement."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What does the following code return?\n```javascript\nasync function test() {\n  return 'Hello';\n}\n```",
        "options": [
        "'Hello'",
        "A Promise that resolves to 'Hello'",
        "undefined",
        "A function that returns 'Hello'"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A Promise that resolves to 'Hello'",
        "difficulty": "easy",
        "explanation": "Async functions always return a Promise, regardless of what you return from the function. In this case, the function returns a Promise that resolves to the string 'Hello'.",
        "hint": "The 'async' keyword affects what type of value is returned from the function."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the output of this code?\n```javascript\nconst promise = new Promise((resolve, reject) => {\n  resolve('First');\n  reject('Second');\n  resolve('Third');\n});\n\npromise\n  .then(value => console.log(value))\n  .catch(error => console.log(error));\n```",
        "options": [
        "First",
        "Second",
        "Third",
        "All three values"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "First",
        "difficulty": "medium",
        "explanation": "Once a Promise is settled (either resolved or rejected), it cannot be resettled. The first call to resolve() or reject() determines the Promise's final state. In this case, the Promise is resolved with 'First', and subsequent calls to resolve() or reject() are ignored.",
        "hint": "A Promise can only be resolved or rejected once - its state cannot be changed after that."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "Which of the following correctly creates a Promise that resolves after a specified delay?",
        "options": [
        "new Promise(resolve => setTimeout(resolve, 1000))",
        "new Promise(setTimeout(resolve, 1000))",
        "Promise.delay(1000)",
        "await setTimeout(1000)"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "new Promise(resolve => setTimeout(resolve, 1000))",
        "difficulty": "medium",
        "explanation": "To create a Promise that resolves after a delay, you need to pass a function to the Promise constructor that calls setTimeout and then calls the resolve function when the timeout completes.",
        "hint": "The Promise constructor takes a function with resolve and reject parameters."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What will the following code log?\n```javascript\nasync function test() {\n  try {\n    return 'Success';\n  } finally {\n    console.log('Finally');\n  }\n}\n\ntest().then(result => console.log(result));\n```",
        "options": [
        "Success, Finally",
        "Finally, Success",
        "Success only",
        "Finally only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Finally, Success",
        "difficulty": "medium",
        "explanation": "In an async function, the finally block is executed before the Promise is fulfilled. The function returns a Promise that resolves to 'Success', but 'Finally' is logged before the Promise's then handler executes.",
        "hint": "Consider the order of execution in async functions with try/finally blocks and how Promises are handled."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the purpose of util.promisify() in Node.js?",
        "options": [
        "To convert callback-based functions to Promise-based functions",
        "To create a new Promise",
        "To convert synchronous functions to asynchronous functions",
        "To check if a value is a Promise"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To convert callback-based functions to Promise-based functions",
        "difficulty": "easy",
        "explanation": "util.promisify() takes a function that follows the common Node.js callback pattern (with a callback as the last argument that receives (err, value)) and returns a version that returns a Promise instead.",
        "hint": "It helps modernize older Node.js APIs that use callbacks rather than Promises."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What happens when you await a non-Promise value?",
        "options": [
        "It throws an error",
        "It wraps the value in a Promise and resolves immediately",
        "It waits for the next tick in the event loop",
        "It converts the value to undefined"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It wraps the value in a Promise and resolves immediately",
        "difficulty": "medium",
        "explanation": "When you await a non-Promise value, it automatically wraps the value in a Promise using Promise.resolve() and then waits for that Promise to resolve, which happens immediately for regular values.",
        "hint": "The await operator works with any 'thenable' object, but what happens with plain values?"
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the output of the following code?\n```javascript\nconst promise = Promise.resolve('Resolved');\n\npromise.then(value => {\n  console.log(value);\n  return Promise.reject('Rejected');\n}).then(value => {\n  console.log('Then:', value);\n}).catch(reason => {\n  console.log('Catch:', reason);\n});\n```",
        "options": [
        "Resolved, Then: undefined",
        "Resolved, Catch: Rejected",
        "Resolved only",
        "Catch: Rejected only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Resolved, Catch: Rejected",
        "difficulty": "medium",
        "explanation": "First, 'Resolved' is logged. The first then handler returns a rejected Promise with the reason 'Rejected'. This causes the second then handler to be skipped, and control flows to the catch handler, which logs 'Catch: Rejected'.",
        "hint": "When a then handler returns a rejected Promise, the next catch handler in the chain is called."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "Which of these is NOT a valid way to create a Promise in Node.js?",
        "options": [
        "new Promise((resolve, reject) => {})",
        "Promise.resolve(value)",
        "Promise.create(value)",
        "Promise.reject(reason)"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Promise.create(value)",
        "difficulty": "easy",
        "explanation": "Promise.create() is not a standard method in the Promise API. The correct ways to create Promises are using the Promise constructor, Promise.resolve(), or Promise.reject().",
        "hint": "Think about the standard static methods available on the Promise object."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What does Promise.all() do?",
        "options": [
        "Returns a new Promise that resolves when all promises in the array resolve",
        "Returns a new Promise that resolves when any promise in the array resolves",
        "Waits for all promises to settle and returns an array of their results",
        "Executes promises in parallel but returns results in order"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Returns a new Promise that resolves when all promises in the array resolve",
        "difficulty": "easy",
        "explanation": "Promise.all() takes an array of promises and returns a new Promise that resolves when all the promises in the array have resolved, or rejects as soon as one of them rejects. When it resolves, it provides an array containing the resolved values of all the input promises in the same order.",
        "hint": "It's useful when you need to wait for multiple asynchronous operations to complete before proceeding."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the main difference between Promise.race() and Promise.any()?",
        "options": [
        "Promise.race() resolves or rejects with the first settled promise, while Promise.any() resolves with the first fulfilled promise and only rejects if all promises reject",
        "Promise.race() only works with two promises, while Promise.any() works with any number of promises",
        "Promise.race() can only resolve, not reject, while Promise.any() can do both",
        "There is no difference, they are aliases of the same function"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Promise.race() resolves or rejects with the first settled promise, while Promise.any() resolves with the first fulfilled promise and only rejects if all promises reject",
        "difficulty": "hard",
        "explanation": "Promise.race() settles as soon as any promise in the array settles, whether that's a fulfillment or rejection. In contrast, Promise.any() resolves as soon as any promise in the array fulfills, and only rejects if all promises reject (with an AggregateError containing all rejection reasons).",
        "hint": "Both methods are about timing, but they differ in how they handle rejections."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What will the following code output?\n```javascript\nfunction delay(ms) {\n  return new Promise(resolve => setTimeout(() => resolve(ms), ms));\n}\n\nasync function test() {\n  const results = await Promise.all([\n    delay(1000),\n    delay(500),\n    delay(1500)\n  ]);\n  console.log(results);\n}\n\ntest();\n```",
        "options": [
        "[1000, 500, 1500]",
        "[500, 1000, 1500]",
        "1000",
        "The function will complete in 1500ms"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "[1000, 500, 1500]",
        "difficulty": "medium",
        "explanation": "Promise.all() returns the results of all promises in the same order they were provided in the input array, regardless of which promise resolved first. Each delay function resolves with the delay time passed to it, so the output will be [1000, 500, 1500].",
        "hint": "The order of results in Promise.all() is determined by the order of the input promises, not by which resolves first."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "Which of the following correctly describes a callback function in Node.js?",
        "options": [
        "A function passed as an argument to another function that is executed after some operation has been completed",
        "A function that automatically runs when the application starts",
        "A function that is only called when an error occurs",
        "A function that returns a Promise"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A function passed as an argument to another function that is executed after some operation has been completed",
        "difficulty": "easy",
        "explanation": "In Node.js, a callback function is a function that's passed as an argument to another function and is invoked when that operation completes. It's a fundamental concept for handling asynchronous operations in Node.js, especially in older APIs.",
        "hint": "Callbacks are the traditional way of handling asynchronous operations in Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is 'callback hell' in Node.js?",
        "options": [
        "A situation where callbacks are nested within callbacks, making code hard to read and maintain",
        "A performance issue when too many callbacks are used",
        "A memory leak caused by unhandled callbacks",
        "When callbacks are called too frequently"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A situation where callbacks are nested within callbacks, making code hard to read and maintain",
        "difficulty": "easy",
        "explanation": "Callback hell (also known as the 'pyramid of doom') refers to heavily nested callback functions that make code difficult to read and maintain. It's one of the main reasons why Promises and async/await were introduced as alternatives to callback-based asynchronous code.",
        "hint": "It's about code readability and structure rather than performance or memory issues."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the output of the following code?\n```javascript\nconst promise1 = Promise.resolve(1);\nconst promise2 = Promise.reject('Error');\nconst promise3 = Promise.resolve(3);\n\nPromise.allSettled([promise1, promise2, promise3])\n  .then(results => console.log(results.map(r => r.status)));\n```",
        "options": [
        "['fulfilled', 'rejected', 'fulfilled']",
        "['resolved', 'rejected', 'resolved']",
        "['fulfilled', 'Error', 'fulfilled']",
        "Error will be thrown"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "['fulfilled', 'rejected', 'fulfilled']",
        "difficulty": "medium",
        "explanation": "Promise.allSettled() returns an array of objects, each representing the outcome of each promise. The status property will be either 'fulfilled' or 'rejected'. For the given promises, the result will be ['fulfilled', 'rejected', 'fulfilled'].",
        "hint": "Promise.allSettled() waits for all promises to settle, regardless of whether they fulfill or reject, and provides information about each result."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "In Node.js, which of the following best describes the 'error-first callback' pattern?",
        "options": [
        "The first parameter of the callback is reserved for an error object, which is null if no error occurred",
        "The callback is only called when an error occurs",
        "The callback function throws an error as its first action",
        "The error parameter must always be at the end of the parameter list"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The first parameter of the callback is reserved for an error object, which is null if no error occurred",
        "difficulty": "easy",
        "explanation": "The error-first callback pattern (also known as the Node.js callback pattern) is a convention where callbacks have their first parameter reserved for an error object. If no error occurred, this parameter will be null or undefined, and subsequent parameters contain the operation's result data.",
        "hint": "This is a common convention in Node.js APIs to handle potential errors in asynchronous operations."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What will happen when executing this code?\n```javascript\nasync function test() {\n  throw new Error('Oops');\n}\n\ntest();\n```",
        "options": [
        "The error will be caught and logged",
        "The program will crash with an unhandled promise rejection",
        "Nothing, the error is suppressed",
        "The function will return undefined"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The program will crash with an unhandled promise rejection",
        "difficulty": "medium",
        "explanation": "When an error is thrown in an async function, it's converted to a rejected Promise. Since there's no catch handler for this Promise (either using .catch() or try/catch with await), it will result in an unhandled promise rejection, which will typically crash the program in Node.js (or at least produce a warning).",
        "hint": "Think about what happens to errors in async functions and how they need to be handled."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the correct way to use async/await with error handling?",
        "options": [
        "async function test() { try { await riskyOperation(); } catch (error) { console.error(error); } }",
        "async function test() { await riskyOperation().catch(error => console.error(error)); }",
        "function test() { try { async () => await riskyOperation(); } catch (error) { console.error(error); } }",
        "Both A and B are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both A and B are correct",
        "difficulty": "medium",
        "explanation": "There are two common ways to handle errors with async/await: 1) Using try/catch blocks, which is more similar to synchronous error handling, and 2) Using the .catch() method on the Promise returned by the await expression. Both methods A and B in the options are valid ways to handle errors with async/await.",
        "hint": "Consider whether try/catch blocks can be used with await, and also whether Promise methods can still be used."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "Which of the following is true about the process.nextTick() function in Node.js?",
        "options": [
        "It's a way to start a new Node.js process",
        "It delays the execution of a function until the next event loop iteration",
        "It schedules a callback to be executed after any I/O events and before setTimeout or setImmediate",
        "It's an alias for setImmediate()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It schedules a callback to be executed after any I/O events and before setTimeout or setImmediate",
        "difficulty": "hard",
        "explanation": "process.nextTick() schedules a callback to execute after the current operation completes, regardless of the current phase of the event loop, but before the event loop continues. It runs before any I/O events or timers and has higher priority than promises (microtasks).",
        "hint": "Think about where nextTick sits in relation to the event loop phases compared to other asynchronous methods."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the difference between setTimeout() and setImmediate() in Node.js?",
        "options": [
        "setTimeout executes in the timers phase of the event loop, while setImmediate executes in the check phase",
        "setTimeout always executes before setImmediate",
        "setImmediate always executes before setTimeout",
        "There is no difference, they are aliases"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "setTimeout executes in the timers phase of the event loop, while setImmediate executes in the check phase",
        "difficulty": "hard",
        "explanation": "setTimeout() schedules a callback to run after a minimum delay (in the timers phase of the event loop), while setImmediate() schedules a callback to run in the 'check' phase of the event loop, after I/O callbacks. The order they execute depends on various factors including the context in which they're called.",
        "hint": "Consider the different phases of the Node.js event loop and when each function's callbacks are processed."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the primary purpose of the async/await syntax in JavaScript?",
        "options": [
        "To make code execute faster",
        "To make asynchronous code easier to write and reason about",
        "To eliminate the need for the event loop",
        "To replace callbacks entirely in Node.js"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To make asynchronous code easier to write and reason about",
        "difficulty": "easy",
        "explanation": "The primary purpose of async/await is to provide a more readable and maintainable way to work with Promises. It allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to understand the flow of execution.",
        "hint": "It's about developer experience and code clarity rather than performance or removing underlying mechanisms."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What will be the output of the following code?\n```javascript\nfunction resolveAfter2Seconds() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve('slow');\n      console.log('slow promise resolved');\n    }, 2000);\n  });\n}\n\nfunction resolveAfter1Second() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve('fast');\n      console.log('fast promise resolved');\n    }, 1000);\n  });\n}\n\nasync function sequentialStart() {\n  console.log('==SEQUENTIAL START==');\n  const slow = await resolveAfter2Seconds();\n  console.log(slow);\n  const fast = await resolveAfter1Second();\n  console.log(fast);\n}\n\nsequentialStart();\n```",
        "options": [
        "==SEQUENTIAL START==, slow promise resolved, slow, fast promise resolved, fast",
        "==SEQUENTIAL START==, fast promise resolved, slow promise resolved, slow, fast",
        "==SEQUENTIAL START==, slow, fast, slow promise resolved, fast promise resolved",
        "==SEQUENTIAL START==, slow promise resolved, fast promise resolved, slow, fast"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "==SEQUENTIAL START==, slow promise resolved, slow, fast promise resolved, fast",
        "difficulty": "hard",
        "explanation": "In the sequentialStart function, the code awaits resolveAfter2Seconds() first, which means it waits for 2 seconds, then logs 'slow promise resolved' and returns 'slow'. This value is logged next. Then it awaits resolveAfter1Second(), which takes another 1 second, and logs 'fast promise resolved' before returning 'fast', which is then logged. The operations happen in sequence because of the await keyword.",
        "hint": "With await, each promise must complete before the next line of code executes."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the output of the following code?\n```javascript\nconst promise = new Promise((resolve, reject) => {\n  resolve('Success');\n});\n\npromise\n  .then(value => {\n    throw new Error('Something went wrong');\n    return value;\n  })\n  .then(value => console.log('Then:', value))\n  .catch(error => {\n    console.log('Catch:', error.message);\n    return 'From catch';\n  })\n  .then(value => console.log('Then after catch:', value));\n```",
        "options": [
        "Then: Success, Then after catch: From catch",
        "Catch: Something went wrong, Then after catch: From catch",
        "Then: Success only",
        "Catch: Something went wrong only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Catch: Something went wrong, Then after catch: From catch",
        "difficulty": "hard",
        "explanation": "When the first then handler throws an error, the second then handler is skipped, and the catch handler is invoked with the error. The catch handler logs 'Catch: Something went wrong' and returns 'From catch'. This value is then passed to the next then handler in the chain, which logs 'Then after catch: From catch'.",
        "hint": "Consider how errors propagate through Promise chains and what happens after a catch handler."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What happens if you forget to add the 'await' keyword before an async function call?",
        "options": [
        "The function won't execute",
        "The function will execute, but its result will be a Promise object",
        "It will cause a syntax error",
        "It will perform the operation synchronously"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The function will execute, but its result will be a Promise object",
        "difficulty": "medium",
        "explanation": "If you call an async function without await, the function will still execute, but it will return a Promise immediately rather than the resolved value of that Promise. This means that the code following the function call won't wait for the async operation to complete.",
        "hint": "Async functions always return Promises, regardless of whether you use await or not."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What is the result of the following code?\n```javascript\nconst promises = [\n  Promise.resolve(1),\n  Promise.resolve(2),\n  Promise.reject('error'),\n  Promise.resolve(4)\n];\n\nPromise.all(promises)\n  .then(values => console.log(values))\n  .catch(error => console.log('Caught:', error));\n```",
        "options": [
        "[1, 2, 'error', 4]",
        "Caught: error",
        "The code will throw an uncaught exception",
        "[1, 2, undefined, 4]"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Caught: error",
        "difficulty": "medium",
        "explanation": "Promise.all() rejects as soon as any of the provided promises reject. In this case, the third promise rejects with 'error', so the entire Promise.all() call will reject with that reason, and the catch handler will log 'Caught: error'.",
        "hint": "Consider how Promise.all() behaves when one of the promises rejects."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "In the context of Node.js, what is 'promisification'?",
        "options": [
        "Converting callback-based functions to return Promises",
        "Creating new Promise objects",
        "The process of connecting Promises together in a chain",
        "Converting synchronous code to asynchronous code"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Converting callback-based functions to return Promises",
        "difficulty": "medium",
        "explanation": "Promisification is the process of converting a callback-based function to a Promise-based one. In Node.js, the util.promisify() utility function helps make this process easier by automatically converting callback-based functions to return Promises.",
        "hint": "It's a way to modernize older Node.js APIs to work with Promises instead of callbacks."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Asynchronous Programming",
        "questionText": "What does Promise.allSettled() return if all input promises are fulfilled?",
        "options": [
        "An array of resolved values",
        "An array of objects with status 'fulfilled' and value properties",
        "A single object with a 'fulfilled' property containing all values",
        "A new Promise that resolves to true"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An array of objects with status 'fulfilled' and value properties",
        "difficulty": "medium",
        "explanation": "Promise.allSettled() returns an array of objects, one for each input promise. For fulfilled promises, the object has a status property set to 'fulfilled' and a value property containing the resolved value. Even if all promises fulfill, it still returns this array of descriptive objects rather than just the values.",
        "hint": "Unlike Promise.all(), Promise.allSettled() provides detailed information about each promise's outcome."
    },
    

    // Event-Driven Architecture
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the core class in Node.js that provides event-driven functionality?",
        "options": [
        "EventLoop",
        "EventEmitter",
        "EventHandler",
        "EventDispatcher"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "EventEmitter",
        "difficulty": "easy",
        "explanation": "The EventEmitter class is the foundation of Node.js's event-driven architecture. It provides methods to emit events and register listeners for those events.",
        "hint": "This class is from the 'events' module and is used to implement the Observer pattern in Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "Which method is used to register a listener function for an event in Node.js?",
        "options": [
        "on()",
        "listen()",
        "register()",
        "subscribe()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "on()",
        "difficulty": "easy",
        "explanation": "The on() method is used to register a listener function for a named event. When the event is emitted, all listeners for that event are called synchronously.",
        "hint": "This method is an alias for addListener() in the EventEmitter class."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What happens when an event is emitted with no listeners in Node.js?",
        "options": [
        "Node.js throws an error",
        "The event is queued until a listener is added",
        "The event is ignored",
        "The process exits"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The event is ignored",
        "difficulty": "easy",
        "explanation": "If there are no listeners registered for an event, the event is simply ignored when emitted. No error is thrown, and the event is not queued for future listeners.",
        "hint": "This is the default behavior for most events, though there's a special case for 'error' events."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the special behavior of the 'error' event in Node.js EventEmitter?",
        "options": [
        "It automatically logs the error to the console",
        "It throws the error if there are no listeners",
        "It ignores the error completely",
        "It triggers process.exit()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It throws the error if there are no listeners",
        "difficulty": "medium",
        "explanation": "If an 'error' event is emitted and there are no listeners registered for it, Node.js will throw the error, potentially crashing the application. This is different from other events which are silently ignored.",
        "hint": "This behavior encourages proper error handling in event-driven applications."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "Which method is used to emit an event in Node.js?",
        "options": [
        "trigger()",
        "dispatch()",
        "emit()",
        "publish()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "emit()",
        "difficulty": "easy",
        "explanation": "The emit() method is used to synchronously trigger a named event with optional arguments that are passed to the listeners. All registered listeners for the event are called in the order they were registered.",
        "hint": "This is the primary method for triggering events from an EventEmitter instance."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the difference between the 'on()' and 'once()' methods in EventEmitter?",
        "options": [
        "once() can only be called one time on an EventEmitter instance",
        "on() is faster than once()",
        "once() registers a listener that will be invoked only once, then removed",
        "on() can handle multiple events while once() can only handle one event type"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "once() registers a listener that will be invoked only once, then removed",
        "difficulty": "medium",
        "explanation": "The once() method adds a one-time listener that will be automatically removed after it is triggered once. The on() method adds a listener that will be invoked every time the event is emitted until it's explicitly removed.",
        "hint": "Think about the behavior after the first event is handled."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What will be the output of this code?\n```javascript\nconst EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\nemitter.on('message', (msg) => {\n  console.log(`Message: ${msg}`);\n});\n\nemitter.emit('message', 'Hello');\nemitter.emit('message', 'World');\n```",
        "options": [
        "Message: Hello",
        "Message: World",
        "Message: Hello\\nMessage: World",
        "No output"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Message: Hello\\nMessage: World",
        "difficulty": "easy",
        "explanation": "The code registers a listener for the 'message' event that logs the message. When the event is emitted twice with different arguments, the listener is called twice, resulting in two lines of output: 'Message: Hello' and 'Message: World'.",
        "hint": "The on() method registers a listener that runs every time the event is emitted."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What will be the output of this code?\n```javascript\nconst EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\nemitter.once('message', (msg) => {\n  console.log(`Message: ${msg}`);\n});\n\nemitter.emit('message', 'Hello');\nemitter.emit('message', 'World');\n```",
        "options": [
        "Message: Hello",
        "Message: World",
        "Message: Hello\\nMessage: World",
        "No output"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Message: Hello",
        "difficulty": "medium",
        "explanation": "The code registers a one-time listener using once() for the 'message' event. When the event is emitted the first time with 'Hello', the listener is called and then automatically removed. The second emit with 'World' has no effect since there are no more listeners.",
        "hint": "The once() method registers a listener that is automatically removed after it's called once."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "How do you remove a specific listener for an event in Node.js?",
        "options": [
        "emitter.remove(event, listener)",
        "emitter.off(event, listener)",
        "emitter.removeListener(event, listener)",
        "Both B and C are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are correct",
        "difficulty": "medium",
        "explanation": "In Node.js, you can use either the removeListener() method or its alias off() to remove a specific listener for an event. Both methods require you to pass the event name and the reference to the listener function that was previously registered.",
        "hint": "One is the original method name, and the other is an alias introduced later for convenience."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the maximum number of listeners that can be registered for a single event by default in Node.js?",
        "options": [
        "5",
        "10",
        "100",
        "Unlimited"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "10",
        "difficulty": "medium",
        "explanation": "By default, Node.js EventEmitter allows a maximum of 10 listeners per event. If you add more than 10 listeners for a single event, Node.js will print a warning to help you identify potential memory leaks. This limit can be changed using the setMaxListeners() method.",
        "hint": "This is a precaution to help detect potential memory leaks from listener accumulation."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "How can you check how many listeners are registered for a specific event?",
        "options": [
        "emitter.listenerCount(event)",
        "emitter.countListeners(event)",
        "emitter.getListenerCount(event)",
        "emitter.listeners(event).length"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "emitter.listenerCount(event)",
        "difficulty": "medium",
        "explanation": "The listenerCount(event) method returns the count of listeners registered for the specified event. This is useful for debugging or conditional logic based on whether there are any listeners for an event.",
        "hint": "This method is directly available on the EventEmitter instance."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the order in which listeners are executed when an event is emitted?",
        "options": [
        "In random order",
        "In the order they were registered",
        "In reverse order of registration",
        "Based on their priority"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "In the order they were registered",
        "difficulty": "medium",
        "explanation": "When an event is emitted, Node.js calls the listeners for that event synchronously in the order they were registered. This means the first listener registered will be the first one called.",
        "hint": "Think about the queuing behavior of event listeners."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "How can you remove all listeners for a specific event?",
        "options": [
        "emitter.removeAllListeners(event)",
        "emitter.clearListeners(event)",
        "emitter.off(event)",
        "emitter.reset(event)"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "emitter.removeAllListeners(event)",
        "difficulty": "medium",
        "explanation": "The removeAllListeners(event) method removes all listeners for the specified event. If no event is specified, it removes all listeners for all events. This is useful for cleaning up before object disposal.",
        "hint": "This method is useful when you want to completely reset the behavior for a specific event."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What happens when you use emitter.removeAllListeners() without specifying an event?",
        "options": [
        "It throws an error",
        "It removes listeners for the default event only",
        "It removes all listeners for all events",
        "It has no effect"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It removes all listeners for all events",
        "difficulty": "medium",
        "explanation": "When you call removeAllListeners() without specifying an event name, it removes all listeners for all events on that emitter. This is a powerful cleanup method but should be used with caution as it may affect functionality that relies on event handling.",
        "hint": "This is a complete reset of all event handlers on the emitter."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What method can you use to get a list of all registered event names on an emitter?",
        "options": [
        "emitter.eventNames()",
        "emitter.getEvents()",
        "emitter.listEvents()",
        "emitter.events"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "emitter.eventNames()",
        "difficulty": "medium",
        "explanation": "The eventNames() method returns an array listing the events for which the emitter has registered listeners. This is useful for debugging and introspection of your event-driven application.",
        "hint": "This method helps you discover what events an emitter is currently listening for."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "How can you add a listener to the front of the listeners array?",
        "options": [
        "emitter.addFirstListener(event, listener)",
        "emitter.prependListener(event, listener)",
        "emitter.unshift(event, listener)",
        "emitter.on(event, listener, { prepend: true })"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "emitter.prependListener(event, listener)",
        "difficulty": "hard",
        "explanation": "The prependListener(event, listener) method adds the listener function to the beginning of the listeners array for the specified event. This means it will be called before listeners added using on() or addListener().",
        "hint": "This is useful when you need to ensure a particular listener runs before others."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What will be the output of this code?\n```javascript\nconst EventEmitter = require('events');\nclass MyEmitter extends EventEmitter {}\nconst myEmitter = new MyEmitter();\n\nmyEmitter.on('event', () => {\n  console.log('A');\n  setTimeout(() => {\n    console.log('B');\n  }, 0);\n});\n\nmyEmitter.on('event', () => {\n  console.log('C');\n});\n\nmyEmitter.emit('event');\nconsole.log('D');\n```",
        "options": [
        "A, B, C, D",
        "A, C, D, B",
        "A, C, B, D",
        "A, B, C, D (in random order)"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A, C, D, B",
        "difficulty": "hard",
        "explanation": "The code emits an 'event' which calls the first listener, logging 'A'. This listener schedules 'B' to be logged after the current execution cycle using setTimeout. Then the second listener is called, logging 'C'. After both listeners are done, the code continues and logs 'D'. Finally, in the next tick of the event loop, 'B' is logged.",
        "hint": "Consider how the event loop handles the setTimeout callback versus the synchronous code execution."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the purpose of the newListener event in Node.js EventEmitter?",
        "options": [
        "It's emitted when a new EventEmitter instance is created",
        "It's emitted when a new listener is added to any event",
        "It's emitted when a new event type is registered for the first time",
        "It's used to create a new type of listener"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It's emitted when a new listener is added to any event",
        "difficulty": "hard",
        "explanation": "The 'newListener' event is emitted before a listener is added to the EventEmitter instance. It receives the event name and the listener function as arguments. This can be useful for tracking listener additions or modifying listener behavior before they're registered.",
        "hint": "This is a special event that helps monitor when listeners are being added to any event on the emitter."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the purpose of the removeListener event in Node.js EventEmitter?",
        "options": [
        "It's used to remove a listener from an event",
        "It's emitted when a listener is removed from any event",
        "It's emitted when all listeners are removed at once",
        "It's an alias for off() method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It's emitted when a listener is removed from any event",
        "difficulty": "hard",
        "explanation": "The 'removeListener' event is emitted after a listener is removed from the EventEmitter instance. It receives the event name and the listener function as arguments. This can be useful for tracking when listeners are being removed from the emitter.",
        "hint": "This is a special event that helps monitor when listeners are being removed from any event on the emitter."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What happens when you call emitter.emit() with arguments?",
        "options": [
        "Only the first argument is passed to listeners",
        "All arguments after the event name are passed to listeners",
        "Arguments are ignored by event listeners",
        "It throws an error if arguments are provided"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "All arguments after the event name are passed to listeners",
        "difficulty": "medium",
        "explanation": "When you call emit(event, ...args), all arguments after the event name are passed to each listener function in the order they were provided. This allows you to pass data relevant to the event to the listeners.",
        "hint": "This is how event data is communicated to the listeners."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "How can you increase the maximum number of listeners for all event types on an emitter?",
        "options": [
        "emitter.setMaxListeners(n)",
        "EventEmitter.defaultMaxListeners = n",
        "emitter.maxListeners = n",
        "Both A and B are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both A and B are correct",
        "difficulty": "hard",
        "explanation": "You can set the maximum number of listeners for a specific emitter using emitter.setMaxListeners(n). Alternatively, you can change the default maximum for all newly created EventEmitter instances using EventEmitter.defaultMaxListeners = n. The first option affects only one instance, while the second affects all instances created after the change.",
        "hint": "One affects an individual instance, while the other sets a default for all instances."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the return value of the emit() method?",
        "options": [
        "undefined",
        "The number of listeners called",
        "A boolean indicating if any listeners were called",
        "A Promise that resolves when all listeners have completed"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A boolean indicating if any listeners were called",
        "difficulty": "medium",
        "explanation": "The emit() method returns a boolean value: true if the event had listeners, false otherwise. This can be useful for conditional logic based on whether anyone was listening for a particular event.",
        "hint": "This return value can help you detect if an event is being handled."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is 'event bubbling' in the context of Node.js?",
        "options": [
        "When events automatically propagate to parent objects",
        "When multiple events are triggered in rapid succession",
        "A design pattern where EventEmitters are linked together to propagate events",
        "Not a standard concept in Node.js"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Not a standard concept in Node.js",
        "difficulty": "medium",
        "explanation": "Unlike in browser DOM, 'event bubbling' is not a standard concept in Node.js's EventEmitter implementation. Events do not automatically propagate to parent objects. If you want events to propagate, you would need to implement this behavior manually by re-emitting events from one emitter to another.",
        "hint": "Consider how Node.js events differ from browser events in terms of propagation."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the main advantage of using event-driven architecture in Node.js?",
        "options": [
        "It always performs faster than other programming paradigms",
        "It uses less memory than object-oriented programming",
        "It enables efficient handling of asynchronous operations",
        "It makes debugging easier"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It enables efficient handling of asynchronous operations",
        "difficulty": "easy",
        "explanation": "Event-driven architecture in Node.js allows for efficient handling of asynchronous operations by enabling a non-blocking I/O model. Instead of waiting for operations to complete, code can continue executing and respond to events when they occur, making it particularly well-suited for applications with high concurrency needs.",
        "hint": "Think about Node.js's primary use case and how events relate to its handling of I/O operations."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What will happen if a listener function throws an error during event processing?",
        "options": [
        "The error is silently ignored",
        "The error is caught and emitted as an 'error' event",
        "The error propagates up and can crash the application if not caught",
        "Node.js automatically retries the listener function"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The error propagates up and can crash the application if not caught",
        "difficulty": "medium",
        "explanation": "If a listener function throws an error during event processing, the error will propagate up the call stack like any other JavaScript error. If not caught with try/catch, it can crash the Node.js application. The EventEmitter does not automatically handle errors thrown by listeners.",
        "hint": "Consider how uncaught exceptions are handled in Node.js in general."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "Which of the following Node.js core modules does NOT inherit from EventEmitter?",
        "options": [
        "http.Server",
        "net.Socket",
        "fs.ReadStream",
        "path"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "path",
        "difficulty": "hard",
        "explanation": "The 'path' module is a utility module for working with file and directory paths. It does not inherit from EventEmitter because it provides synchronous utility functions and doesn't need to emit events. The other options (http.Server, net.Socket, and fs.ReadStream) all inherit from EventEmitter to handle asynchronous events.",
        "hint": "Think about which modules need to handle asynchronous operations or notifications."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "Which of the following best describes the relationship between the Node.js event loop and EventEmitter?",
        "options": [
        "The event loop is implemented using EventEmitter",
        "EventEmitter uses the event loop to schedule asynchronous event callbacks",
        "EventEmitter executes listeners synchronously, outside the event loop",
        "The event loop and EventEmitter are completely unrelated components"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "EventEmitter executes listeners synchronously, outside the event loop",
        "difficulty": "hard",
        "explanation": "EventEmitter executes listeners synchronously in the order they were registered. When emit() is called, the event loop is not involved in calling the listeners - they run immediately as part of the current execution context. If a listener performs asynchronous operations, those would involve the event loop, but the event emission itself is synchronous.",
        "hint": "Consider the timing of when listeners are executed when emit() is called."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What happens when you add a listener to an event that was already emitted?",
        "options": [
        "The listener is called immediately with the last emitted value",
        "Node.js throws a warning about late listener registration",
        "The listener will only be called when the event is emitted again",
        "The listener is ignored since the event already occurred"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The listener will only be called when the event is emitted again",
        "difficulty": "medium",
        "explanation": "When you add a listener to an event that was already emitted, the listener is simply registered for future emissions of that event. Unlike some reactive programming models, Node.js EventEmitter does not replay past events for new listeners.",
        "hint": "Think about whether EventEmitter keeps a history of emitted events."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "How can you make a class emit events in Node.js?",
        "options": [
        "Implement the Emitter interface",
        "Extend the EventEmitter class",
        "Call EventEmitter.register(this)",
        "Use the @emitter decorator"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Extend the EventEmitter class",
        "difficulty": "easy",
        "explanation": "To create a class that can emit events, you typically extend the EventEmitter class from the 'events' module. This gives your class all the event emitting functionality while allowing you to add your own methods and properties.",
        "hint": "This is the standard way to create custom event emitters in Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What will be the output of this code?\n```javascript\nconst EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\nemitter.on('event', function() {\n  console.log(this === emitter);\n});\n\nemitter.on('event', () => {\n  console.log(this === emitter);\n});\n\nemitter.emit('event');\n```",
        "options": [
        "true, true",
        "true, false",
        "false, false",
        "false, true"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "true, false",
        "difficulty": "hard",
        "explanation": "When a regular function is used as an event listener, 'this' refers to the EventEmitter instance that emitted the event. But when an arrow function is used, it captures the 'this' value from its surrounding lexical context, not from the emitter. So the first listener (regular function) logs 'true', and the second listener (arrow function) logs 'false'.",
        "hint": "Consider how 'this' works differently in regular functions versus arrow functions in JavaScript."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "What is the purpose of emitter.rawListeners() method?",
        "options": [
        "Returns the raw event name strings without any formatting",
        "Returns listeners that haven't been processed by middleware",
        "Returns an array of listener functions without unwrapping once() listeners",
        "Returns listeners sorted by their registration order"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Returns an array of listener functions without unwrapping once() listeners",
        "difficulty": "hard",
        "explanation": "The rawListeners() method returns an array of listener functions for the specified event, similar to listeners(), but with one key difference: it includes the wrappers used for once() listeners rather than unwrapping them. This can be useful for inspecting or manipulating these wrappers.",
        "hint": "This is useful when you need to inspect how listeners were originally registered."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Event-Driven Architecture",
        "questionText": "Which of the following is NOT a method of the EventEmitter class?",
        "options": [
        "prependOnceListener()",
        "waitForEvent()",
        "removeAllListeners()",
        "listenerCount()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "waitForEvent()",
        "difficulty": "medium",
        "explanation": "waitForEvent() is not a standard method of the EventEmitter class. The other options (prependOnceListener(), removeAllListeners(), and listenerCount()) are all valid methods that the EventEmitter class provides.",
        "hint": "Think about methods related to waiting for events to occur in a Promise-like way."
    },

    // File System (fs) Module
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which module is used to work with the file system in Node.js?",
        "options": ["file", "fs", "fileSystem", "system"],
        "correctOptionIndex": 1,
        "correctOptionText": "fs",
        "difficulty": "easy",
        "explanation": "The 'fs' module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.",
        "hint": "It's a short, two-letter module name."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "How do you import the file system module in Node.js?",
        "options": ["import fs from 'fs';", "require('filesystem');", "const fs = require('fs');", "import filesystem from 'node';"],
        "correctOptionIndex": 2,
        "correctOptionText": "const fs = require('fs');",
        "difficulty": "easy",
        "explanation": "The file system module is imported using the require function with 'fs' as the parameter.",
        "hint": "Node.js traditionally uses the require function to import modules."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which method is used to read the entire contents of a file synchronously?",
        "options": ["fs.read()", "fs.readFile()", "fs.readFileSync()", "fs.readSync()"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.readFileSync()",
        "difficulty": "easy",
        "explanation": "fs.readFileSync() reads the entire contents of a file synchronously, blocking further execution until the operation completes.",
        "hint": "Look for the method that includes both 'read', 'File', and indicates it's synchronous."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What does the following code do? fs.writeFile('test.txt', 'Hello World', (err) => {});",
        "options": ["Creates a file synchronously", "Reads a file asynchronously", "Creates a file asynchronously", "Appends to a file synchronously"],
        "correctOptionIndex": 2,
        "correctOptionText": "Creates a file asynchronously",
        "difficulty": "easy",
        "explanation": "fs.writeFile() creates a file with the specified content asynchronously, providing a callback function that is called when the operation completes.",
        "hint": "The method has a callback function parameter, indicating it's asynchronous."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which fs method is used to check if a file exists without opening it?",
        "options": ["fs.exists()", "fs.existsSync()", "fs.access()", "fs.stat()"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.access()",
        "difficulty": "medium",
        "explanation": "fs.access() is used to test a user's permissions for a file or directory. It can be used to check if a file exists without opening it.",
        "hint": "The fs.exists() method is deprecated; Node.js now recommends a different approach."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What's the main difference between fs.readFile() and fs.readFileSync()?",
        "options": ["One reads text files, the other reads binary files", "One returns a buffer, the other returns a string", "One is asynchronous, the other is synchronous", "One is faster than the other"],
        "correctOptionIndex": 2,
        "correctOptionText": "One is asynchronous, the other is synchronous",
        "difficulty": "easy",
        "explanation": "fs.readFile() is asynchronous and doesn't block execution, while fs.readFileSync() is synchronous and blocks further execution until the file is read.",
        "hint": "The 'Sync' suffix in method names indicates a particular execution model."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "How do you append to a file using the fs module?",
        "options": ["fs.write(file, data, 'append')", "fs.writeFile(file, data, { append: true })", "fs.appendFile(file, data, callback)", "fs.addToFile(file, data)"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.appendFile(file, data, callback)",
        "difficulty": "medium",
        "explanation": "fs.appendFile() is specifically designed to append data to a file, creating the file if it doesn't exist.",
        "hint": "There's a dedicated method for this operation with 'append' in its name."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What does the following code return? fs.readdirSync('/path/to/directory')",
        "options": ["A string with file contents", "A boolean indicating if the directory exists", "An array of filenames", "A buffer object"],
        "correctOptionIndex": 2,
        "correctOptionText": "An array of filenames",
        "difficulty": "medium",
        "explanation": "fs.readdirSync() reads the contents of a directory synchronously and returns an array containing the names of the files in the directory.",
        "hint": "This method returns multiple items that are found within the specified location."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which method would you use to rename a file?",
        "options": ["fs.changeName()", "fs.rename()", "fs.move()", "fs.changeFile()"],
        "correctOptionIndex": 1,
        "correctOptionText": "fs.rename()",
        "difficulty": "easy",
        "explanation": "fs.rename() is used to rename a file or directory. It can also be used to move a file to a different location.",
        "hint": "The method name corresponds directly to the operation being performed."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What happens if you call fs.writeFile() on a file that already exists?",
        "options": ["The operation fails with an error", "The new content is appended to the existing content", "The existing file is deleted and a new file is created with the new content", "Nothing happens, the original file is preserved"],
        "correctOptionIndex": 2,
        "correctOptionText": "The existing file is deleted and a new file is created with the new content",
        "difficulty": "medium",
        "explanation": "fs.writeFile() replaces any existing file with the same name, effectively deleting the old content and writing the new content.",
        "hint": "This method prioritizes the new content rather than preserving existing data."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which of the following methods would create a directory?",
        "options": ["fs.createDir()", "fs.newDirectory()", "fs.mkdir()", "fs.directory()"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.mkdir()",
        "difficulty": "easy",
        "explanation": "fs.mkdir() is used to create a new directory with the specified path and permissions.",
        "hint": "The method name is a shortened form of 'make directory', similar to the Unix command."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What is the purpose of the fs.watch() method?",
        "options": ["To monitor CPU usage of file operations", "To watch for changes in files or directories", "To time how long file operations take", "To prevent unauthorized file access"],
        "correctOptionIndex": 1,
        "correctOptionText": "To watch for changes in files or directories",
        "difficulty": "medium",
        "explanation": "fs.watch() is used to watch for changes on a file or directory, triggering a callback when changes occur.",
        "hint": "This method helps you detect when something is modified in the file system."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which fs method would you use to delete a file?",
        "options": ["fs.delete()", "fs.remove()", "fs.unlink()", "fs.deleteFile()"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.unlink()",
        "difficulty": "medium",
        "explanation": "fs.unlink() is used to remove a file from the file system. The name comes from the Unix system call that performs the same function.",
        "hint": "The method name is based on Unix terminology rather than a more intuitive name."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What is the purpose of the 'flags' option in fs.createWriteStream()?",
        "options": ["To set file permissions", "To specify the character encoding", "To indicate whether to create, append, or write to a file", "To mark the file as hidden"],
        "correctOptionIndex": 2,
        "correctOptionText": "To indicate whether to create, append, or write to a file",
        "difficulty": "hard",
        "explanation": "The 'flags' option specifies how the file should be opened, such as 'w' for writing (creating a new file or truncating an existing one), 'a' for appending, etc.",
        "hint": "These flags determine the behavior of the stream when interacting with the target file."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What is returned when you call fs.statSync() on a file?",
        "options": ["A boolean indicating if the file exists", "A string with the file path", "A Stats object with file metadata", "The file's content"],
        "correctOptionIndex": 2,
        "correctOptionText": "A Stats object with file metadata",
        "difficulty": "medium",
        "explanation": "fs.statSync() returns a Stats object that contains metadata about the file, such as size, modification time, access permissions, etc.",
        "hint": "This method provides information about the file rather than its contents."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "How can you check if a path is a directory using the fs module?",
        "options": ["fs.isDirectory(path)", "fs.statSync(path).isFile()", "fs.statSync(path).isDirectory()", "fs.checkIfDirectory(path)"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.statSync(path).isDirectory()",
        "difficulty": "medium",
        "explanation": "You first get a Stats object using fs.statSync() and then call the isDirectory() method on that object to determine if the path is a directory.",
        "hint": "This requires first getting information about the path and then checking a specific property."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which fs method can be used to get the absolute path of a file?",
        "options": ["fs.absolutePath()", "fs.resolve()", "fs.realpath()", "fs.path()"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.realpath()",
        "difficulty": "hard",
        "explanation": "fs.realpath() resolves symbolic links and returns the absolute path of a file or directory.",
        "hint": "This method is useful when working with relative paths or symbolic links."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What's the difference between fs.rmdir() and fs.unlink()?",
        "options": ["One is synchronous, the other is asynchronous", "One removes files, the other removes directories", "One requires admin permissions, the other doesn't", "There is no difference"],
        "correctOptionIndex": 1,
        "correctOptionText": "One removes files, the other removes directories",
        "difficulty": "medium",
        "explanation": "fs.rmdir() is used to remove directories, while fs.unlink() is used to remove files.",
        "hint": "These methods target different types of filesystem entities."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What happens if you try to read a file that doesn't exist using fs.readFile()?",
        "options": ["It creates the file and returns empty content", "It returns null", "It throws a synchronous error", "It calls the callback with an error"],
        "correctOptionIndex": 3,
        "correctOptionText": "It calls the callback with an error",
        "difficulty": "medium",
        "explanation": "When attempting to read a non-existent file with fs.readFile(), the callback function is invoked with an error object as its first argument.",
        "hint": "The asynchronous nature of this method affects how errors are handled."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which method would you use to change file permissions in Node.js?",
        "options": ["fs.permission()", "fs.chmod()", "fs.access()", "fs.rights()"],
        "correctOptionIndex": 1,
        "correctOptionText": "fs.chmod()",
        "difficulty": "hard",
        "explanation": "fs.chmod() is used to change the permissions of a file, similar to the Unix chmod command.",
        "hint": "The method name comes from the corresponding Unix command for changing file mode bits."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What is the correct way to create a read stream for a file?",
        "options": ["fs.readFile('file.txt')", "fs.streamRead('file.txt')", "fs.createReadStream('file.txt')", "new fs.ReadStream('file.txt')"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.createReadStream('file.txt')",
        "difficulty": "medium",
        "explanation": "fs.createReadStream() creates a readable stream that allows you to read a file's contents in chunks, which is more memory-efficient for large files.",
        "hint": "This method uses Node.js streams API for reading file data."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What does the fs.promises.readFile() method return?",
        "options": ["A callback function", "A buffer or string", "A Promise", "A stream"],
        "correctOptionIndex": 2,
        "correctOptionText": "A Promise",
        "difficulty": "medium",
        "explanation": "fs.promises.readFile() is a Promise-based version of fs.readFile() that returns a Promise which resolves with the file contents.",
        "hint": "The 'promises' namespace provides Promise-based alternatives to callback-style methods."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which of the following is true about the fs.copyFile() function?",
        "options": ["It can only copy text files", "It creates hard links between files", "It preserves file permissions by default", "It was introduced in Node.js v8.5.0"],
        "correctOptionIndex": 3,
        "correctOptionText": "It was introduced in Node.js v8.5.0",
        "difficulty": "hard",
        "explanation": "fs.copyFile() was introduced in Node.js v8.5.0 to simplify file copying operations. Before that, developers had to implement their own copy functions using read and write streams.",
        "hint": "This relates to when this specific functionality became available in Node.js."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What is the purpose of the 'recursive' option in fs.mkdir()?",
        "options": ["To recursively search for directories", "To create parent directories as needed", "To remove directories recursively", "To copy directories recursively"],
        "correctOptionIndex": 1,
        "correctOptionText": "To create parent directories as needed",
        "difficulty": "medium",
        "explanation": "When the 'recursive' option is set to true, fs.mkdir() will create parent directories as needed, similar to the 'mkdir -p' command in Unix.",
        "hint": "This option helps when you need to create nested directory structures."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which method would you use to truncate a file to a specified length?",
        "options": ["fs.truncate()", "fs.resize()", "fs.shorten()", "fs.crop()"],
        "correctOptionIndex": 0,
        "correctOptionText": "fs.truncate()",
        "difficulty": "hard",
        "explanation": "fs.truncate() is used to truncate a file to a specified length. If the file is larger than the specified length, the extra data is discarded.",
        "hint": "The method name directly describes the operation being performed on the file."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "How would you get the size of a file using the fs module?",
        "options": ["fs.size(path)", "fs.getSize(path)", "fs.statSync(path).size", "fs.statSync(path).size()"],
        "correctOptionIndex": 2,
        "correctOptionText": "fs.statSync(path).size",
        "difficulty": "medium",
        "explanation": "You can use fs.statSync() to get a Stats object for the file, which has a 'size' property that contains the file size in bytes.",
        "hint": "This requires accessing a property on an object returned by a method call."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What is the main advantage of using streams for file operations over methods like fs.readFile()?",
        "options": ["Streams are always faster", "Streams use less memory for large files", "Streams are synchronous", "Streams work with remote files"],
        "correctOptionIndex": 1,
        "correctOptionText": "Streams use less memory for large files",
        "difficulty": "medium",
        "explanation": "Streams process data in chunks rather than loading the entire file into memory at once, which makes them more memory-efficient when working with large files.",
        "hint": "Consider how data is loaded and processed when using streams versus reading an entire file."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What does the 'withFileTypes' option do in fs.readdir()?",
        "options": ["Returns file extensions", "Returns file sizes", "Returns Dirent objects instead of strings", "Returns file timestamps"],
        "correctOptionIndex": 2,
        "correctOptionText": "Returns Dirent objects instead of strings",
        "difficulty": "hard",
        "explanation": "When 'withFileTypes' is set to true, fs.readdir() returns an array of Dirent objects instead of strings. These objects have methods like isFile() and isDirectory() that provide information about the entry.",
        "hint": "This option changes the type of data that is returned, providing more information about each entry."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "What is the output of console.log(fs.constants.F_OK)?",
        "options": ["'File OK'", "A function", "An integer (commonly 0)", "undefined"],
        "correctOptionIndex": 2,
        "correctOptionText": "An integer (commonly 0)",
        "difficulty": "hard",
        "explanation": "fs.constants.F_OK is an integer flag used with fs.access() to test for the existence of a file. Its value is commonly 0.",
        "hint": "This is a constant with a numeric value used for bitwise operations in file access testing."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "How would you find the last modification time of a file?",
        "options": ["fs.modTime(path)", "fs.statSync(path).mtime", "fs.lastModified(path)", "fs.getModificationTime(path)"],
        "correctOptionIndex": 1,
        "correctOptionText": "fs.statSync(path).mtime",
        "difficulty": "medium",
        "explanation": "The Stats object returned by fs.statSync() has an 'mtime' property that contains the last modification time of the file.",
        "hint": "This requires extracting a specific property from the metadata object returned by a stat operation."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "File System (fs) Module",
        "questionText": "Which fs method is used to open a file for both reading and writing?",
        "options": ["fs.readwrite()", "fs.open()", "fs.access()", "fs.createReadWriteStream()"],
        "correctOptionIndex": 1,
        "correctOptionText": "fs.open()",
        "difficulty": "hard",
        "explanation": "fs.open() allows you to open a file with specific flags, such as 'r+' for reading and writing, returning a file descriptor that can be used with other fs methods.",
        "hint": "This low-level method gives you fine-grained control over how the file is accessed."
    },
      
    // HTTP Server & Networking
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which module is used to create an HTTP server in Node.js?",
        "options": ["server", "http", "web", "net"],
        "correctOptionIndex": 1,
        "correctOptionText": "http",
        "difficulty": "easy",
        "explanation": "The built-in 'http' module in Node.js provides functionality to create HTTP servers and handle HTTP requests and responses.",
        "hint": "It's a simple, descriptive module name that directly relates to the HTTP protocol."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "How do you create a basic HTTP server in Node.js?",
        "options": [
        "const server = http.createServer();",
        "const server = new http.Server();",
        "const server = http.createServer((req, res) => {});",
        "const server = http.listen();"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "const server = http.createServer((req, res) => {});",
        "difficulty": "easy",
        "explanation": "http.createServer() takes a request listener callback function with request and response parameters, which is called whenever a request is made to the server.",
        "hint": "The server needs a function to handle incoming requests and send responses."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which method starts an HTTP server listening for connections?",
        "options": ["server.start()", "server.begin()", "server.listen()", "server.connect()"],
        "correctOptionIndex": 2,
        "correctOptionText": "server.listen()",
        "difficulty": "easy",
        "explanation": "After creating an HTTP server, server.listen() is called to start the server and make it listen for incoming connections on a specified port.",
        "hint": "The server needs to 'listen' for incoming requests."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which of the following is the correct way to send a basic HTTP response?",
        "options": [
        "res.send('Hello World');",
        "res.write('Hello World');",
        "res.end('Hello World');",
        "res.output('Hello World');"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "res.end('Hello World');",
        "difficulty": "easy",
        "explanation": "res.end() is used to signal to the server that all response headers and body have been sent and that the request has been completed. You can also send data as a parameter.",
        "hint": "This method finalizes the response and sends it to the client."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "How do you set the status code for an HTTP response?",
        "options": [
        "res.status = 404;",
        "res.statusCode = 404;",
        "res.setStatus(404);",
        "res.status(404);"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "res.statusCode = 404;",
        "difficulty": "easy",
        "explanation": "The HTTP response status code is set by assigning a value to the statusCode property of the response object.",
        "hint": "It's a property that you assign a value to, not a method that you call."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which property of the request object contains the URL path requested by the client?",
        "options": ["req.path", "req.pathname", "req.url", "req.route"],
        "correctOptionIndex": 2,
        "correctOptionText": "req.url",
        "difficulty": "easy",
        "explanation": "The req.url property contains the URL string that the client requested, including path, query parameters, etc.",
        "hint": "This property contains the full URL string from the request."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which method is used to set an HTTP response header?",
        "options": [
        "res.header('Content-Type', 'text/html')",
        "res.setHeader('Content-Type', 'text/html')",
        "res.addHeader('Content-Type', 'text/html')",
        "res.writeHeader('Content-Type', 'text/html')"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "res.setHeader('Content-Type', 'text/html')",
        "difficulty": "easy",
        "explanation": "res.setHeader() is used to set a single header value for the HTTP response. Headers must be set before response.write() or response.end() is called.",
        "hint": "This method allows you to set a specific header with a name and value."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "How do you access query string parameters in a Node.js HTTP server?",
        "options": [
        "req.query",
        "req.params",
        "Parse req.url manually or use the 'url' module",
        "req.querystring"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Parse req.url manually or use the 'url' module",
        "difficulty": "medium",
        "explanation": "In a basic HTTP server, query parameters aren't parsed automatically. You need to use the 'url' module or manually parse req.url to extract query parameters.",
        "hint": "The raw HTTP server doesn't provide this functionality automatically; you need additional parsing."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which module would you use to make HTTP requests from a Node.js application?",
        "options": ["request", "fetch", "http/https", "client"],
        "correctOptionIndex": 2,
        "correctOptionText": "http/https",
        "difficulty": "medium",
        "explanation": "The built-in 'http' and 'https' modules in Node.js can be used to make outgoing HTTP requests to other servers.",
        "hint": "The same core modules used for creating servers can also act as clients."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What does the following code do? http.get('http://example.com', (res) => {});",
        "options": [
        "Creates an HTTP server on example.com",
        "Makes a GET request to example.com",
        "Downloads the example.com website",
        "Checks if example.com is accessible"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Makes a GET request to example.com",
        "difficulty": "medium",
        "explanation": "http.get() is a convenience method that makes an HTTP GET request to the specified URL and provides the response in a callback function.",
        "hint": "This is a client-side operation, not server creation."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "How do you handle POST data in a Node.js HTTP server?",
        "options": [
        "req.body contains the POST data",
        "Use req.post to access the data",
        "Collect data chunks from the 'data' event and assemble them",
        "Call req.getData() to retrieve POST data"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Collect data chunks from the 'data' event and assemble them",
        "difficulty": "medium",
        "explanation": "In a raw HTTP server, POST data comes in chunks via the request object's 'data' events. You need to collect these chunks and assemble them to get the complete POST data.",
        "hint": "The request is a readable stream, so you need to handle streaming data."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What is the primary purpose of the 'https' module in Node.js?",
        "options": [
        "To compress HTTP responses",
        "To create HTTP/2 servers",
        "To create secure HTTP servers using SSL/TLS",
        "To improve HTTP server performance"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To create secure HTTP servers using SSL/TLS",
        "difficulty": "medium",
        "explanation": "The 'https' module provides functionality for creating HTTPS servers that use SSL/TLS encryption for secure communication.",
        "hint": "The 's' in 'https' stands for something important regarding security."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What additional options do you need when creating an HTTPS server compared to an HTTP server?",
        "options": [
        "Port number and hostname",
        "SSL certificate and private key",
        "Server name and version",
        "Maximum connections and timeout"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "SSL certificate and private key",
        "difficulty": "medium",
        "explanation": "When creating an HTTPS server, you must provide SSL/TLS certificate and private key files in the options object to enable secure connections.",
        "hint": "These security credentials are essential for encrypted HTTPS communication."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which event is emitted when a client connects to an HTTP server?",
        "options": ["'connect'", "'connection'", "'request'", "'open'"],
        "correctOptionIndex": 2,
        "correctOptionText": "'request'",
        "difficulty": "medium",
        "explanation": "The 'request' event is emitted when a client makes a request to the HTTP server. This is the main event for handling client interactions.",
        "hint": "This event represents what a client is doing when they connect to your server."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "How can you handle file uploads in a basic Node.js HTTP server?",
        "options": [
        "Use req.files to access uploaded files",
        "Call server.upload() to process files",
        "Parse multipart form data from request streams manually",
        "Files are automatically saved to the uploads directory"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Parse multipart form data from request streams manually",
        "difficulty": "hard",
        "explanation": "In a raw HTTP server, you need to manually parse multipart form data by listening for 'data' events on the request stream and processing the incoming chunks according to the multipart specification.",
        "hint": "This requires understanding the multipart/form-data format and processing chunked data."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which method would you use to redirect a client to a different URL?",
        "options": [
        "res.redirect('/new-page')",
        "res.sendRedirect('/new-page')",
        "Set Location header and 302 status code",
        "res.forward('/new-page')"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Set Location header and 302 status code",
        "difficulty": "medium",
        "explanation": "To perform a redirect in a raw HTTP server, you need to set the 'Location' header with the new URL and a 3xx status code (typically 302 for temporary redirects).",
        "hint": "HTTP redirects work by sending specific headers and status codes."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What is the default port for HTTP servers?",
        "options": ["8080", "3000", "80", "443"],
        "correctOptionIndex": 2,
        "correctOptionText": "80",
        "difficulty": "easy",
        "explanation": "Port 80 is the standard default port for HTTP traffic on the internet. However, Node.js applications often use higher ports like 3000 or 8080 when running in development.",
        "hint": "This is the well-known port number assigned to HTTP by IANA."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What is the default port for HTTPS servers?",
        "options": ["8443", "3001", "80", "443"],
        "correctOptionIndex": 3,
        "correctOptionText": "443",
        "difficulty": "easy",
        "explanation": "Port 443 is the standard default port for HTTPS (HTTP Secure) traffic on the internet.",
        "hint": "This is the well-known port number assigned to HTTPS by IANA."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which of the following is NOT a valid HTTP method?",
        "options": ["GET", "POST", "SAVE", "DELETE"],
        "correctOptionIndex": 2,
        "correctOptionText": "SAVE",
        "difficulty": "easy",
        "explanation": "SAVE is not a standard HTTP method. The standard methods include GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH, etc.",
        "hint": "Consider the standard HTTP methods defined in the HTTP specification."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "How can you determine the HTTP method used in a request?",
        "options": ["req.method", "req.type", "req.httpMethod", "req.getMethod()"],
        "correctOptionIndex": 0,
        "correctOptionText": "req.method",
        "difficulty": "easy",
        "explanation": "The HTTP method (GET, POST, etc.) used in the request is available in the method property of the request object.",
        "hint": "This is a simple property on the request object."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What does the 'createServer' method return in Node.js?",
        "options": ["A Promise", "A function", "An HTTP server instance", "A port number"],
        "correctOptionIndex": 2,
        "correctOptionText": "An HTTP server instance",
        "difficulty": "easy",
        "explanation": "http.createServer() returns a new instance of http.Server, which is an EventEmitter that can be used to start the server and handle requests.",
        "hint": "It creates and returns an object representing your server."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which module would you use to parse URL strings in Node.js?",
        "options": ["querystring", "path", "url", "http-parser"],
        "correctOptionIndex": 2,
        "correctOptionText": "url",
        "difficulty": "medium",
        "explanation": "The built-in 'url' module provides utilities for URL resolution and parsing, making it easier to work with URL strings.",
        "hint": "This module's name directly relates to what it's parsing."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What is the purpose of the 'net' module in Node.js?",
        "options": [
        "To create web servers",
        "To create TCP servers and clients",
        "To check network connectivity",
        "To configure network interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create TCP servers and clients",
        "difficulty": "medium",
        "explanation": "The 'net' module provides an asynchronous network API for creating TCP servers and clients. It's a lower-level module than 'http'.",
        "hint": "This module works at a lower network protocol level than HTTP."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "How do you handle WebSocket connections in Node.js?",
        "options": [
        "Use the built-in 'websocket' module",
        "Use a third-party library like 'ws' or 'socket.io'",
        "Use http.createWebSocketServer()",
        "WebSockets are automatically handled by HTTP servers"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use a third-party library like 'ws' or 'socket.io'",
        "difficulty": "hard",
        "explanation": "Node.js doesn't have built-in WebSocket support. You need to use third-party libraries like 'ws' or 'socket.io' to handle WebSocket connections.",
        "hint": "This functionality isn't available in Node.js core modules."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What is the purpose of the 'dns' module in Node.js?",
        "options": [
        "To create DNS servers",
        "To configure domain names for your server",
        "To perform DNS lookups and name resolution",
        "To register domain names programmatically"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To perform DNS lookups and name resolution",
        "difficulty": "medium",
        "explanation": "The 'dns' module provides functions to perform DNS (Domain Name System) lookups and name resolution, allowing you to translate domain names to IP addresses and vice versa.",
        "hint": "This module helps your application interact with DNS servers."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What happens when you call server.close() on an HTTP server?",
        "options": [
        "The server stops immediately, disconnecting all clients",
        "The server stops accepting new connections but finishes existing requests",
        "The server pauses and can be resumed later",
        "The server enters shutdown mode but continues accepting connections"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The server stops accepting new connections but finishes existing requests",
        "difficulty": "medium",
        "explanation": "server.close() stops the server from accepting new connections, but it allows existing connections to complete naturally before the server fully closes.",
        "hint": "This provides a graceful shutdown that respects ongoing connections."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which of the following is a way to serve static files with a basic HTTP server?",
        "options": [
        "Use server.static('/public')",
        "Static files are served automatically from the 'public' directory",
        "Read files using fs and send them in the response",
        "Use http.staticServer('/public')"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Read files using fs and send them in the response",
        "difficulty": "medium",
        "explanation": "To serve static files with a basic HTTP server, you need to manually read the files using the fs module and send the contents in the response.",
        "hint": "The raw HTTP server doesn't have built-in static file serving capabilities."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which Node.js module would you use to create an HTTP/2 server?",
        "options": ["http", "http2", "https2", "net"],
        "correctOptionIndex": 1,
        "correctOptionText": "http2",
        "difficulty": "hard",
        "explanation": "The 'http2' module provides an implementation of the HTTP/2 protocol for Node.js. It allows you to create HTTP/2 servers and make HTTP/2 requests.",
        "hint": "The name directly corresponds to the protocol version."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "What is the main difference between the 'http' and 'https' modules in Node.js?",
        "options": [
        "http is synchronous, https is asynchronous",
        "http is for server-side, https is for client-side",
        "http uses unencrypted connections, https uses SSL/TLS encryption",
        "http is faster, https has more features"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "http uses unencrypted connections, https uses SSL/TLS encryption",
        "difficulty": "medium",
        "explanation": "The primary difference is that the 'https' module provides HTTP functionality over TLS/SSL (encrypted), while the 'http' module provides unencrypted HTTP functionality.",
        "hint": "This relates to security and encryption of data during transmission."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which object property would you check to determine if a client request includes cookies?",
        "options": ["req.cookies", "req.headers.cookie", "req.getCookies()", "req.session.cookies"],
        "correctOptionIndex": 1,
        "correctOptionText": "req.headers.cookie",
        "difficulty": "medium",
        "explanation": "In a raw HTTP server, cookies sent by the client are available in the 'cookie' property of the request headers object. You would need to parse this string to extract individual cookies.",
        "hint": "Cookies are sent as part of the HTTP headers."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "How would you set a cookie in an HTTP response?",
        "options": [
        "res.setCookie('name', 'value')",
        "res.cookie('name', 'value')",
        "res.setHeader('Set-Cookie', 'name=value')",
        "res.cookies.name = 'value'"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "res.setHeader('Set-Cookie', 'name=value')",
        "difficulty": "medium",
        "explanation": "To set a cookie in a raw HTTP response, you use the setHeader method with 'Set-Cookie' as the header name and a string with the cookie name and value.",
        "hint": "Cookies are set using a special HTTP header."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "HTTP Server & Networking",
        "questionText": "Which Node.js API would you use to make an HTTP POST request with a JSON body?",
        "options": [
        "http.post(url, data, callback)",
        "Use http.request() with appropriate method and headers",
        "http.postJSON(url, data)",
        "fetch(url, { method: 'POST', body: JSON.stringify(data) })"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use http.request() with appropriate method and headers",
        "difficulty": "hard",
        "explanation": "To make a POST request with JSON data using the core http module, you need to use http.request(), set the method to 'POST', set Content-Type to 'application/json', and write the JSON string to the request body.",
        "hint": "The core http module provides a general request method that can be configured for different types of requests."
    },

    // Express.js Framework
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What function is used to create an Express application?",
        "options": ["express()", "createExpress()", "app()", "newExpress()"],
        "correctOptionIndex": 0,
        "correctOptionText": "express()",
        "difficulty": "easy",
        "explanation": "The express() function creates an Express application. It's the top-level function exported by the Express module.",
        "hint": "It's the same as the name of the module itself."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "Which HTTP method is used to request data from a specified resource?",
        "options": ["GET", "POST", "PUT", "DELETE"],
        "correctOptionIndex": 0,
        "correctOptionText": "GET",
        "difficulty": "easy",
        "explanation": "The GET method is used to retrieve information from the server using a given URI. Requests using GET should only retrieve data and have no other effect.",
        "hint": "Think of which HTTP method you use when you enter a URL in your browser."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "Which of the following is NOT a valid Express.js HTTP method?",
        "options": ["app.patch()", "app.copy()", "app.delete()", "app.put()"],
        "correctOptionIndex": 1,
        "correctOptionText": "app.copy()",
        "difficulty": "medium",
        "explanation": "Express.js supports standard HTTP methods like GET, POST, PUT, DELETE, PATCH, etc., but 'COPY' is not a standard HTTP method that Express implements by default.",
        "hint": "Think about which one isn't commonly used in RESTful APIs."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What is the correct way to send a JSON response in Express?",
        "options": ["res.sendJSON(data)", "res.json(data)", "res.send(JSON.stringify(data))", "res.writeJSON(data)"],
        "correctOptionIndex": 1,
        "correctOptionText": "res.json(data)",
        "difficulty": "easy",
        "explanation": "The res.json() method sends a JSON response. This method sends a response with the correct content-type header set to application/json.",
        "hint": "Express has a dedicated method for sending JSON responses."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "Which middleware is used to parse incoming request bodies in JSON format?",
        "options": ["express.json()", "express.bodyParser()", "express.urlencoded()", "express.parseJSON()"],
        "correctOptionIndex": 0,
        "correctOptionText": "express.json()",
        "difficulty": "medium",
        "explanation": "express.json() is a built-in middleware function in Express that parses incoming requests with JSON payloads and is based on body-parser.",
        "hint": "In Express 4.16.0 and above, a built-in middleware replaced body-parser for handling JSON."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "How do you define route parameters in Express.js?",
        "options": ["Using curly braces: {paramName}", "Using angle brackets: <paramName>", "Using colons: :paramName", "Using dollar sign: $paramName"],
        "correctOptionIndex": 2,
        "correctOptionText": "Using colons: :paramName",
        "difficulty": "easy",
        "explanation": "In Express.js, route parameters are defined using colons (:) followed by the parameter name, like '/users/:userId'.",
        "hint": "Think about how you would define a route like /users/:id in Express."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What does the following code do? app.use(express.static('public'))",
        "options": ["Serves static files from a folder named 'public'", "Creates a public API", "Makes all routes publicly accessible", "Loads the 'public' plugin"],
        "correctOptionIndex": 0,
        "correctOptionText": "Serves static files from a folder named 'public'",
        "difficulty": "medium",
        "explanation": "express.static() is a built-in middleware function in Express that serves static files. In this case, it's configured to serve files from a directory named 'public'.",
        "hint": "This is how you would serve files like CSS, images, and client-side JavaScript in Express."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "Which method is used to register middleware that should be executed for every incoming request?",
        "options": ["app.use()", "app.all()", "app.middleware()", "app.every()"],
        "correctOptionIndex": 0,
        "correctOptionText": "app.use()",
        "difficulty": "easy",
        "explanation": "app.use() is used to mount middleware functions at a specified path. If no path is specified, the middleware will be executed for every request to the application.",
        "hint": "This method is commonly used to apply middleware globally in Express applications."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What's the main difference between app.use() and app.get()?",
        "options": ["app.use() handles all HTTP methods, app.get() only handles GET requests", "app.use() is for middleware, app.get() is for routes", "app.use() is for global configurations, app.get() is for retrieving values", "app.use() is deprecated, app.get() is the current standard"],
        "correctOptionIndex": 0,
        "correctOptionText": "app.use() handles all HTTP methods, app.get() only handles GET requests",
        "difficulty": "medium",
        "explanation": "app.use() mounts middleware for all HTTP request methods, while app.get() specifically handles GET requests. Additionally, app.use() matches paths that start with the specified path, while app.get() matches exact paths.",
        "hint": "Think about which one would process both GET and POST requests to a path."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "How can you access query parameters in Express.js?",
        "options": ["req.query", "req.params", "req.queryParams", "req.getQuery()"],
        "correctOptionIndex": 0,
        "correctOptionText": "req.query",
        "difficulty": "easy",
        "explanation": "In Express.js, req.query is an object containing the query string parameters (e.g., for a request to /search?q=express, req.query.q would be 'express').",
        "hint": "This object contains key-value pairs of the query string in the URL."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "How do you access route parameters in Express.js?",
        "options": ["req.routeParams", "req.params", "req.parameters", "req.getParams()"],
        "correctOptionIndex": 1,
        "correctOptionText": "req.params",
        "difficulty": "easy",
        "explanation": "In Express.js, req.params is an object containing properties mapped to the named route parameters. For example, if you have the route /user/:id, the 'id' property is available as req.params.id.",
        "hint": "This object contains values extracted from the URL according to your route pattern."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "Which module is commonly used for session management in Express.js?",
        "options": ["express-sessions", "express-session", "express-auth", "express-cookie"],
        "correctOptionIndex": 1,
        "correctOptionText": "express-session",
        "difficulty": "medium",
        "explanation": "express-session is a middleware module that enables session management in Express applications. It stores session data on the server and gives clients a session ID cookie.",
        "hint": "This popular middleware module has a very straightforward name related to its function."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What does the 'next' parameter do in Express middleware functions?",
        "options": ["Sends the next response to the client", "Calls the next middleware function in the stack", "Redirects to the next route", "Jumps to the next iteration in a loop"],
        "correctOptionIndex": 1,
        "correctOptionText": "Calls the next middleware function in the stack",
        "difficulty": "medium",
        "explanation": "In Express middleware, calling the 'next' function passes control to the next middleware function in the application's request-response cycle. If you don't call next(), the request will be left hanging.",
        "hint": "It's essential for the middleware chain to continue processing a request."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What happens if you don't call next() in a middleware function?",
        "options": ["The application crashes", "The request continues to the next middleware automatically", "The request is terminated and no response is sent", "The response is automatically sent with a default message"],
        "correctOptionIndex": 2,
        "correctOptionText": "The request is terminated and no response is sent",
        "difficulty": "medium",
        "explanation": "If you don't call next() and also don't end the request-response cycle with methods like res.send(), res.json(), or res.end(), the request will hang and eventually time out.",
        "hint": "Think about what happens when a request gets 'stuck' in the middleware chain."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What is the purpose of the 'app.all()' method in Express?",
        "options": ["To handle all types of HTTP methods for a specified path", "To apply middleware to all routes", "To send the same response for all requests", "To define routes that accept all parameters"],
        "correctOptionIndex": 0,
        "correctOptionText": "To handle all types of HTTP methods for a specified path",
        "difficulty": "medium",
        "explanation": "app.all() is used to route all HTTP verbs (GET, POST, PUT, DELETE, etc.) to the same handler function for a specified path. It's useful for implementing functionality that should operate regardless of the HTTP method used.",
        "hint": "It's like a catch-all for various HTTP methods on a specific route."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "Which of the following is NOT a valid way to send a response in Express?",
        "options": ["res.send()", "res.json()", "res.end()", "res.dispatch()"],
        "correctOptionIndex": 3,
        "correctOptionText": "res.dispatch()",
        "difficulty": "easy",
        "explanation": "There is no res.dispatch() method in Express.js. Valid methods for sending responses include res.send(), res.json(), res.end(), res.render(), and others.",
        "hint": "Three of these are common Express response methods, but one doesn't exist."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "How do you handle file uploads in Express.js?",
        "options": ["Using the built-in express.uploads middleware", "Using the express-uploader package", "Using multer or similar middleware", "Using the express.files() method"],
        "correctOptionIndex": 2,
        "correctOptionText": "Using multer or similar middleware",
        "difficulty": "medium",
        "explanation": "Express doesn't have built-in middleware for handling file uploads. Multer is a popular middleware module specifically designed for handling multipart/form-data, which is used for file uploads.",
        "hint": "A third-party middleware is typically used for this purpose in Express applications."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What's the purpose of the app.listen() method in Express?",
        "options": ["To start the Express application", "To listen for incoming WebSocket connections", "To bind and listen for connections on the specified host and port", "To enable event listening for the application"],
        "correctOptionIndex": 2,
        "correctOptionText": "To bind and listen for connections on the specified host and port",
        "difficulty": "easy",
        "explanation": "app.listen() binds and listens for connections on the specified host and port. It's essentially a wrapper for Node.js's http.Server.listen() method.",
        "hint": "This method is what makes your Express server start accepting HTTP requests."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What is Express Router used for?",
        "options": ["To route HTTP requests to the appropriate controller", "To create modular, mountable route handlers", "To define the application's URL structure", "To navigate between different pages in the application"],
        "correctOptionIndex": 1,
        "correctOptionText": "To create modular, mountable route handlers",
        "difficulty": "medium",
        "explanation": "Express Router is a mini Express application without views and settings but with routing APIs like .use(), .get(), .param(), and route. It helps organize routes in separate files or modules to make the application more modular and manageable.",
        "hint": "It helps break down a large application into smaller, more manageable pieces."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "How do you create a new router instance in Express?",
        "options": ["new Express.Router()", "express.createRouter()", "express.Router()", "new Router()"],
        "correctOptionIndex": 2,
        "correctOptionText": "express.Router()",
        "difficulty": "easy",
        "explanation": "You create a new router instance using express.Router(). This creates a router object that is an isolated instance of middleware and routes.",
        "hint": "This is a method on the express object, not a constructor function."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What is the purpose of the 'next(err)' pattern in Express middleware?",
        "options": ["To skip the current middleware and move to the next one", "To pass an error to the error-handling middleware", "To terminate the request with an error response", "To log errors to the console"],
        "correctOptionIndex": 1,
        "correctOptionText": "To pass an error to the error-handling middleware",
        "difficulty": "hard",
        "explanation": "Calling next() with an argument (typically an Error object) in Express middleware skips all remaining non-error handling middleware and routes, and passes control to the first error-handling middleware in the stack.",
        "hint": "This is part of Express's error handling mechanism."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "How many parameters does an error-handling middleware function in Express have?",
        "options": ["2", "3", "4", "5"],
        "correctOptionIndex": 2,
        "correctOptionText": "4",
        "difficulty": "hard",
        "explanation": "Error-handling middleware functions in Express have four parameters (err, req, res, next). Express recognizes it as an error handler by the presence of four parameters, whereas regular middleware has three (req, res, next).",
        "hint": "It's one more than regular middleware functions because it includes the error object."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What does the express.urlencoded() middleware do?",
        "options": ["Parses URL parameters", "Parses URL-encoded bodies from form submissions", "Validates URLs in requests", "Encodes URLs in responses"],
        "correctOptionIndex": 1,
        "correctOptionText": "Parses URL-encoded bodies from form submissions",
        "difficulty": "medium",
        "explanation": "express.urlencoded() is a built-in middleware function that parses incoming requests with URL-encoded payloads (typically from HTML form submissions) and makes the resulting data available on req.body.",
        "hint": "This middleware is commonly used for processing form submissions with content-type 'application/x-www-form-urlencoded'."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What will req.params contain in a route defined as '/users/:id/posts/:postId'?",
        "options": ["A single value for the matched ID", "An array of path segments", "An object with id and postId properties", "A string with the combined path parameters"],
        "correctOptionIndex": 2,
        "correctOptionText": "An object with id and postId properties",
        "difficulty": "medium",
        "explanation": "For a route defined with parameters '/users/:id/posts/:postId', req.params will be an object with properties named after the parameters, such as { id: '123', postId: '456' } for a request to '/users/123/posts/456'.",
        "hint": "The object contains key-value pairs where keys are the parameter names defined in the route pattern."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "How can you implement CORS in an Express application?",
        "options": ["It's enabled by default, no action needed", "Using the built-in express.cors() middleware", "Installing and configuring the cors package", "Adding appropriate headers manually in a middleware"],
        "correctOptionIndex": 2,
        "correctOptionText": "Installing and configuring the cors package",
        "difficulty": "hard",
        "explanation": "Cross-Origin Resource Sharing (CORS) can be implemented in Express by installing the 'cors' package and using it as middleware (e.g., app.use(cors())). While you could also implement CORS by setting headers manually, the cors package is the recommended approach.",
        "hint": "There's a popular npm package specifically designed for this purpose."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What is the difference between res.send() and res.end() in Express?",
        "options": ["They are aliases of the same function", "res.send() can take an argument to send as the response, res.end() only ends the response", "res.send() is for HTML responses, res.end() is for JSON", "res.send() is deprecated, res.end() is preferred"],
        "correctOptionIndex": 1,
        "correctOptionText": "res.send() can take an argument to send as the response, res.end() only ends the response",
        "difficulty": "medium",
        "explanation": "res.send() sends a response of various types and automatically assigns the appropriate Content-Type header, while res.end() simply ends the response process without sending any data. res.send() calls res.end() internally after sending the data.",
        "hint": "One is more feature-rich and handles content types automatically, while the other is more basic."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What is the correct way to render a template with data in Express using a view engine like EJS?",
        "options": ["res.display('template', data)", "res.view('template', data)", "res.render('template', data)", "res.template('template', data)"],
        "correctOptionIndex": 2,
        "correctOptionText": "res.render('template', data)",
        "difficulty": "medium",
        "explanation": "res.render() is used to render a view template (like EJS, Pug, or Handlebars) with the data provided and sends the rendered HTML to the client.",
        "hint": "This method renders a view and sends the rendered HTML string to the client."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "How do you configure a view engine in Express?",
        "options": ["app.useEngine('ejs')", "app.engine('view engine', 'ejs')", "app.set('view engine', 'ejs')", "app.configure('view engine', 'ejs')"],
        "correctOptionIndex": 2,
        "correctOptionText": "app.set('view engine', 'ejs')",
        "difficulty": "medium",
        "explanation": "In Express, you configure the view engine using app.set('view engine', 'engineName'). This tells Express which template engine to use for rendering views.",
        "hint": "The app.set() method is used to configure Express application settings."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What's the purpose of the 'morgan' package in Express applications?",
        "options": ["Database access and ORM", "Authentication and authorization", "HTTP request logging", "Form validation"],
        "correctOptionIndex": 2,
        "correctOptionText": "HTTP request logging",
        "difficulty": "hard",
        "explanation": "Morgan is a popular HTTP request logger middleware for Node.js that's commonly used with Express. It logs requests to the console with various levels of detail depending on the configuration.",
        "hint": "This middleware helps developers see what HTTP requests are being made to their application."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "Which of the following is NOT a valid Express application setting that can be configured with app.set()?",
        "options": ["views", "view engine", "case sensitive routing", "middleware stack"],
        "correctOptionIndex": 3,
        "correctOptionText": "middleware stack",
        "difficulty": "hard",
        "explanation": "While 'views', 'view engine', and 'case sensitive routing' are valid Express application settings that can be configured with app.set(), there is no 'middleware stack' setting. Middleware is added using app.use() or similar methods.",
        "hint": "Three of these are documented Express settings, but one is a concept rather than a setting name."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Express.js Framework",
        "questionText": "What does the following middleware do? app.use((req, res, next) => { res.status(404).send('Not found'); });",
        "options": ["Handles 404 errors for all routes", "Redirects all requests to a 404 page", "Catches requests that don't match any route", "Logs 404 errors to the console"],
        "correctOptionIndex": 2,
        "correctOptionText": "Catches requests that don't match any route",
        "difficulty": "hard",
        "explanation": "When placed at the end of the middleware stack, this middleware will catch any requests that haven't been handled by previous routes or middleware and respond with a 404 status. It acts as a catch-all for undefined routes.",
        "hint": "The position of this middleware in the application's middleware stack is crucial to its function."
    },

    // Databases & ORMS
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What does ORM stand for in the context of databases?",
        "options": ["Object-Relational Mapping", "Object-Record Management", "Online Record Management", "Operational Relationship Model"],
        "correctOptionIndex": 0,
        "correctOptionText": "Object-Relational Mapping",
        "difficulty": "easy",
        "explanation": "ORM stands for Object-Relational Mapping. It's a programming technique that converts data between incompatible type systems in object-oriented programming languages and relational databases.",
        "hint": "Think about what technology helps map database tables to JavaScript objects."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which of the following is NOT a popular ORM for Node.js?",
        "options": ["Sequelize", "Mongoose", "TypeORM", "ActiveRecord"],
        "correctOptionIndex": 3,
        "correctOptionText": "ActiveRecord",
        "difficulty": "medium",
        "explanation": "ActiveRecord is a popular ORM in Ruby on Rails, not Node.js. Sequelize, Mongoose, and TypeORM are all popular ORMs used with Node.js applications.",
        "hint": "Three of these are commonly used with Node.js, but one is primarily associated with another programming language."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which database is Mongoose designed to work with?",
        "options": ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        "correctOptionIndex": 2,
        "correctOptionText": "MongoDB",
        "difficulty": "easy",
        "explanation": "Mongoose is an Object Data Modeling (ODM) library specifically designed for MongoDB and Node.js. It provides a schema-based solution to model application data.",
        "hint": "Think about which database is document-oriented rather than relational."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which of the following databases is NOT relational?",
        "options": ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
        "correctOptionIndex": 3,
        "correctOptionText": "MongoDB",
        "difficulty": "easy",
        "explanation": "MongoDB is a NoSQL, document-oriented database, not a relational database. PostgreSQL, MySQL, and SQLite are all relational database management systems (RDBMS).",
        "hint": "Three of these use SQL as their query language, but one uses a different approach."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which Sequelize method is used to establish a connection to the database?",
        "options": ["sequelize.connect()", "sequelize.authenticate()", "sequelize.open()", "sequelize.init()"],
        "correctOptionIndex": 1,
        "correctOptionText": "sequelize.authenticate()",
        "difficulty": "medium",
        "explanation": "The authenticate() method tests if the connection is successful and properly established. It returns a Promise that resolves if the connection is successful or rejects if it fails.",
        "hint": "This method verifies that your credentials and connection details are correct."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "In Mongoose, what is a Schema?",
        "options": ["A JavaScript function that creates database tables", "A JSON document that defines the structure of database collections", "A blueprint that defines the structure and rules for documents in a collection", "A query builder for complex MongoDB operations"],
        "correctOptionIndex": 2,
        "correctOptionText": "A blueprint that defines the structure and rules for documents in a collection",
        "difficulty": "medium",
        "explanation": "In Mongoose, a Schema defines the structure of documents within a collection, including validation rules, default values, and other metadata. It maps to a MongoDB collection and defines the shape of the documents within that collection.",
        "hint": "Think about what determines the fields, types, and validations for documents in a MongoDB collection when using Mongoose."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is the correct way to define a Sequelize model?",
        "options": ["const Model = sequelize.define('name', attributes, options)", "const Model = sequelize.model('name', attributes, options)", "const Model = sequelize.create('name', attributes, options)", "const Model = new sequelize.Model('name', attributes, options)"],
        "correctOptionIndex": 0,
        "correctOptionText": "const Model = sequelize.define('name', attributes, options)",
        "difficulty": "medium",
        "explanation": "In Sequelize, models are defined using the sequelize.define() method, which takes the model name, an object defining the attributes, and an optional options object as parameters.",
        "hint": "This is the standard method for creating a model in Sequelize that maps to a database table."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which of the following is NOT a valid Mongoose schema type?",
        "options": ["String", "Number", "Date", "Character"],
        "correctOptionIndex": 3,
        "correctOptionText": "Character",
        "difficulty": "medium",
        "explanation": "Mongoose schema supports various types like String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, and Map, but there is no 'Character' type. For single characters, the String type would be used.",
        "hint": "Think about the standard JavaScript and MongoDB data types that Mongoose supports."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is a migration in the context of database ORMs?",
        "options": ["Moving data from one database to another", "Changing the database engine", "A version control system for database schemas", "Converting between different data formats"],
        "correctOptionIndex": 2,
        "correctOptionText": "A version control system for database schemas",
        "difficulty": "hard",
        "explanation": "Migrations are like version control for databases. They allow you to define changes to your database schema over time, apply those changes, and roll them back if necessary. Each migration typically contains code to both apply and undo a specific schema change.",
        "hint": "This concept helps teams collaborate on database changes, similar to how Git helps with code changes."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What does the Sequelize sync() method do?",
        "options": ["Synchronizes data between multiple databases", "Creates tables in the database based on model definitions", "Updates records in the database to match the application state", "Refreshes the connection to the database"],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates tables in the database based on model definitions",
        "difficulty": "medium",
        "explanation": "The sync() method creates tables in the database if they don't exist, based on the models you've defined. With options like {force: true}, it can also drop existing tables and recreate them.",
        "hint": "This method ensures that your database structure matches your model definitions."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "In Mongoose, what method would you use to save a new document to the database?",
        "options": ["model.insert()", "model.create()", "model.save()", "model.add()"],
        "correctOptionIndex": 2,
        "correctOptionText": "model.save()",
        "difficulty": "easy",
        "explanation": "In Mongoose, after creating a new document instance from a model, you use the save() method to save it to the database. For example: const doc = new Model({...}); doc.save();",
        "hint": "This method is called on an instance of a model, not on the model itself."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which Sequelize method is used to retrieve all records from a table?",
        "options": ["Model.getAll()", "Model.findAll()", "Model.fetchAll()", "Model.all()"],
        "correctOptionIndex": 1,
        "correctOptionText": "Model.findAll()",
        "difficulty": "easy",
        "explanation": "In Sequelize, Model.findAll() is used to retrieve all instances/records from a table. It returns a promise that resolves to an array of model instances.",
        "hint": "This method allows you to retrieve multiple records based on optional criteria."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is an ODM in the context of databases?",
        "options": ["Object-Document Mapping", "Operational Database Management", "Online Data Manipulation", "Output Data Modification"],
        "correctOptionIndex": 0,
        "correctOptionText": "Object-Document Mapping",
        "difficulty": "medium",
        "explanation": "ODM stands for Object-Document Mapping. It's similar to ORM but specifically maps between objects in code and document-oriented databases like MongoDB, rather than relational databases.",
        "hint": "This is the document database equivalent of ORM for relational databases."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is the primary difference between an ORM and an ODM?",
        "options": ["ORMs are for Node.js, ODMs are for other languages", "ORMs map objects to relational databases, ODMs map objects to document databases", "ORMs handle data validation, ODMs don't", "ORMs are older technology, ODMs are newer"],
        "correctOptionIndex": 1,
        "correctOptionText": "ORMs map objects to relational databases, ODMs map objects to document databases",
        "difficulty": "medium",
        "explanation": "The main difference is in the type of database they work with. ORMs (Object-Relational Mappers) map objects to tables in relational databases like MySQL or PostgreSQL, while ODMs (Object-Document Mappers) map objects to documents in document-oriented databases like MongoDB.",
        "hint": "Think about the different database paradigms each is designed to work with."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "In Sequelize, what does the include option do when querying data?",
        "options": ["Includes specific columns in the query result", "Includes additional WHERE conditions", "Performs eager loading of associated models", "Includes transaction information"],
        "correctOptionIndex": 2,
        "correctOptionText": "Performs eager loading of associated models",
        "difficulty": "hard",
        "explanation": "The include option in Sequelize allows for eager loading of associations, which means it fetches the associated models/data in a single query. This is similar to a JOIN in SQL.",
        "hint": "This option helps you retrieve related data without making multiple database queries."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which of the following is a valid way to define a one-to-many relationship in Sequelize?",
        "options": ["User.hasMany(Task); Task.belongsTo(User);", "User.hasOne(Task); Task.hasMany(User);", "User.belongsToMany(Task); Task.belongsToMany(User);", "User.includes(Task); Task.parent(User);"],
        "correctOptionIndex": 0,
        "correctOptionText": "User.hasMany(Task); Task.belongsTo(User);",
        "difficulty": "hard",
        "explanation": "In Sequelize, a one-to-many relationship is defined by using hasMany() on the 'one' side and belongsTo() on the 'many' side. For example, one user can have many tasks, so User.hasMany(Task) and Task.belongsTo(User).",
        "hint": "Think about how you would set up a relationship where one record can be associated with multiple records in another table."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "In Mongoose, how do you define a reference to another model (relationship)?",
        "options": ["{ type: Schema.Types.ObjectId, ref: 'ModelName' }", "{ type: 'reference', model: 'ModelName' }", "{ reference: Schema.Types.ObjectId, model: 'ModelName' }", "{ type: Schema.Types.Reference, to: 'ModelName' }"],
        "correctOptionIndex": 0,
        "correctOptionText": "{ type: Schema.Types.ObjectId, ref: 'ModelName' }",
        "difficulty": "hard",
        "explanation": "In Mongoose, relationships between models are created by storing the ObjectId of one document in another document. The ref option tells Mongoose which model to use during population.",
        "hint": "This syntax indicates that a field should store a MongoDB ObjectId that references another collection."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is 'population' in Mongoose?",
        "options": ["Creating multiple documents at once", "Filling a database with initial data", "Automatically replacing referenced document IDs with the actual documents", "Counting the number of documents in a collection"],
        "correctOptionIndex": 2,
        "correctOptionText": "Automatically replacing referenced document IDs with the actual documents",
        "difficulty": "hard",
        "explanation": "Population is the process of automatically replacing specified paths in a document with document(s) from other collection(s). It's used to reference documents across collections and is similar to a JOIN in SQL databases.",
        "hint": "This feature helps you work with related data across different MongoDB collections."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which MongoDB method would you typically call after a Mongoose query to execute it and return a promise?",
        "options": ["run()", "execute()", "exec()", "perform()"],
        "correctOptionIndex": 2,
        "correctOptionText": "exec()",
        "difficulty": "medium",
        "explanation": "In Mongoose, query objects have an exec() method that executes the query and returns a Promise. For example: Model.find({}).exec().then(docs => {...}).",
        "hint": "This method converts a query builder chain into a Promise that resolves with the query results."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What does the following Sequelize code create? sequelize.define('User', { name: DataTypes.STRING, age: DataTypes.INTEGER });",
        "options": ["A database connection for users", "A database migration for the User table", "A model representing the User table", "A query to select users with name and age fields"],
        "correctOptionIndex": 2,
        "correctOptionText": "A model representing the User table",
        "difficulty": "medium",
        "explanation": "This code creates a Sequelize model called 'User' with 'name' (string) and 'age' (integer) fields. Models in Sequelize are JavaScript classes that represent tables in your database.",
        "hint": "This is the standard pattern for defining a model that maps to a database table in Sequelize."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is a database transaction?",
        "options": ["A record of database access for billing purposes", "A unit of work that is performed against a database", "The process of moving data between different databases", "A financial payment made through a database system"],
        "correctOptionIndex": 1,
        "correctOptionText": "A unit of work that is performed against a database",
        "difficulty": "medium",
        "explanation": "A database transaction is a sequence of operations performed as a single logical unit of work. It follows the ACID principles (Atomicity, Consistency, Isolation, Durability) and either completes entirely or fails entirely.",
        "hint": "This concept ensures that related operations either all succeed or all fail together."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "How do you typically create a Sequelize transaction?",
        "options": ["sequelize.startTransaction()", "sequelize.transaction()", "sequelize.beginTransaction()", "sequelize.createTransaction()"],
        "correctOptionIndex": 1,
        "correctOptionText": "sequelize.transaction()",
        "difficulty": "hard",
        "explanation": "In Sequelize, you create a transaction by calling sequelize.transaction(), which returns a Promise that resolves to a transaction object. You can then pass this transaction object to various queries to include them in the transaction.",
        "hint": "This method starts a new transaction that can be used with multiple database operations."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is the purpose of database indexing?",
        "options": ["To organize tables visually in database GUIs", "To speed up data retrieval operations", "To compress data for storage efficiency", "To validate data before insertion"],
        "correctOptionIndex": 1,
        "correctOptionText": "To speed up data retrieval operations",
        "difficulty": "medium",
        "explanation": "Database indexing is a data structure technique that improves the speed of data retrieval operations on a database table. Indexes reduce the number of data pages that need to be searched when performing queries, similar to how a book's index helps find information quickly.",
        "hint": "This concept is analogous to how an index in a book helps you find pages quickly."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "How do you typically define an index in a Mongoose schema?",
        "options": ["{ indexed: true }", "{ index: true }", "{ createIndex: true }", "{ fastAccess: true }"],
        "correctOptionIndex": 1,
        "correctOptionText": "{ index: true }",
        "difficulty": "medium",
        "explanation": "In Mongoose, you can define an index on a field by setting the index option to true in the field definition. For example: { name: { type: String, index: true } }.",
        "hint": "This property tells Mongoose to create an index on this field in MongoDB."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is database sharding?",
        "options": ["Backing up databases to multiple locations", "Encrypting sensitive data in databases", "Splitting a database into smaller, faster, more manageable parts", "Converting between different database formats"],
        "correctOptionIndex": 2,
        "correctOptionText": "Splitting a database into smaller, faster, more manageable parts",
        "difficulty": "hard",
        "explanation": "Sharding is a database architecture pattern related to horizontal partitioning — splitting one dataset across multiple databases or servers. Each shard contains a subset of the data, allowing for better performance and scalability for large datasets.",
        "hint": "This technique is used to distribute data across multiple machines when a database grows too large for a single server."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is the purpose of Sequelize validations?",
        "options": ["To verify database connection credentials", "To ensure data meets specific criteria before saving to the database", "To validate the Sequelize configuration file", "To check if tables exist in the database"],
        "correctOptionIndex": 1,
        "correctOptionText": "To ensure data meets specific criteria before saving to the database",
        "difficulty": "medium",
        "explanation": "Sequelize validations are checks that are run before creating or updating data in the database. They help ensure that only valid data is stored, by checking things like data types, required fields, string lengths, numeric ranges, etc.",
        "hint": "This feature helps maintain data integrity by catching invalid data before it reaches the database."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which of the following is a NoSQL database?",
        "options": ["PostgreSQL", "Oracle", "MySQL", "Redis"],
        "correctOptionIndex": 3,
        "correctOptionText": "Redis",
        "difficulty": "medium",
        "explanation": "Redis is a NoSQL database, specifically an in-memory key-value store. PostgreSQL, Oracle, and MySQL are all traditional relational database management systems that use SQL.",
        "hint": "Three of these use tables with rows and columns, but one uses a completely different data model."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is the primary purpose of using an ORM like Sequelize or Mongoose?",
        "options": ["To increase database security", "To reduce the need for database administrators", "To abstract database operations and work with data in an object-oriented way", "To compress data before storing it in the database"],
        "correctOptionIndex": 2,
        "correctOptionText": "To abstract database operations and work with data in an object-oriented way",
        "difficulty": "easy",
        "explanation": "ORMs like Sequelize and Mongoose abstract the underlying database operations, allowing developers to work with data using familiar object-oriented programming paradigms instead of writing raw SQL or database queries.",
        "hint": "These tools help bridge the gap between how data is represented in code versus how it's stored in databases."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "In the context of databases, what does ACID stand for?",
        "options": ["Atomicity, Consistency, Isolation, Durability", "Automated, Concurrent, Integrated, Distributed", "Access, Control, Identity, Description", "Analysis, Computation, Implementation, Design"],
        "correctOptionIndex": 0,
        "correctOptionText": "Atomicity, Consistency, Isolation, Durability",
        "difficulty": "hard",
        "explanation": "ACID is an acronym representing four key properties that guarantee reliable processing of database transactions: Atomicity (all operations complete successfully or none do), Consistency (the database remains in a valid state), Isolation (concurrent transactions don't interfere with each other), and Durability (completed transactions persist even after system failures).",
        "hint": "These are fundamental properties that ensure reliable transaction processing in databases."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "What is a database connection pool?",
        "options": ["A collection of identical databases for redundancy", "A cache of database connections maintained for reuse", "A group of database administrators who manage connections", "A visualization of all active database connections"],
        "correctOptionIndex": 1,
        "correctOptionText": "A cache of database connections maintained for reuse",
        "difficulty": "hard",
        "explanation": "A connection pool is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. Connection pools are used to enhance the performance of executing commands on a database by reducing the overhead of establishing connections.",
        "hint": "This technique improves performance by avoiding the cost of creating new connections for each database operation."
    },
    {
        "topic": "67dec085269789799b76ef03",
        "module": "Databases & ORMs",
        "questionText": "Which of the following is NOT a common method for connecting a Node.js application to a database?",
        "options": ["Using a native driver", "Using an ORM", "Using a REST API", "Using a browser plugin"],
        "correctOptionIndex": 3,
        "correctOptionText": "Using a browser plugin",
        "difficulty": "easy",
        "explanation": "Browser plugins are not used to connect Node.js applications to databases. The common methods include using native database drivers (like 'mysql', 'pg'), using ORMs/ODMs (like Sequelize, Mongoose), or connecting through REST APIs or other service interfaces.",
        "hint": "Three of these are valid approaches for server-side database connectivity, but one is client-side technology."
    },

    // Middleware

    // Error Handling & Debugging
    
    // Authentication & Authorization

    // Node.js Applications

    // Testing & Debugging

    // Advanced Topics

    // Performance Optimization

]

export default nodeJSQuestions;