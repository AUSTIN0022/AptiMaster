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