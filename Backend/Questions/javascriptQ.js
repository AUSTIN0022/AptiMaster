const JSQuestions = [
    // JavaScript Basics
    {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of `typeof NaN`?",
        "options": ["Number", "NaN", "Undefined", "String"],
        "correctOptionIndex": 0,
        "correctOptionText": "Number",
        "difficulty": "medium",
        "explanation": "`NaN` stands for Not-a-Number, but its type is `number`.",
        "hint": "JavaScript treats `NaN` as a special number type."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which of the following is NOT a primitive data type in JavaScript?",
        "options": ["String", "Number", "Boolean", "Array"],
        "correctOptionIndex": 3,
        "correctOptionText": "Array",
        "difficulty": "easy",
        "explanation": "Array is a reference type, not a primitive type. The primitive types in JavaScript are String, Number, Boolean, null, undefined, Symbol, and BigInt.",
        "hint": "Primitive types represent single values, while non-primitive types can contain multiple values."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the output of `console.log(3 + '3')`?",
        "options": ["6", "33", "Error", "undefined"],
        "correctOptionIndex": 1,
        "correctOptionText": "33",
        "difficulty": "easy",
        "explanation": "When adding a number and a string, JavaScript converts the number to a string and performs string concatenation.",
        "hint": "JavaScript performs type coercion when operators are used with different types."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which operator is used for strict equality comparison in JavaScript?",
        "options": ["==", "===", "=", "!="],
        "correctOptionIndex": 1,
        "correctOptionText": "===",
        "difficulty": "easy",
        "explanation": "The `===` operator checks for both value and type equality without type coercion.",
        "hint": "The strict equality operator has three equal signs."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of `console.log(typeof undefined)`?",
        "options": ["undefined", "null", "object", "string"],
        "correctOptionIndex": 0,
        "correctOptionText": "undefined",
        "difficulty": "easy",
        "explanation": "The `typeof` operator returns 'undefined' when used with the undefined value.",
        "hint": "The `typeof` operator returns a string representing the data type."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of `console.log(typeof null)`?",
        "options": ["null", "undefined", "object", "number"],
        "correctOptionIndex": 2,
        "correctOptionText": "object",
        "difficulty": "medium",
        "explanation": "Due to a historical bug in JavaScript, `typeof null` returns 'object' instead of 'null'.",
        "hint": "This is a well-known quirk in JavaScript's type system."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which keyword is used to declare a variable that cannot be reassigned?",
        "options": ["var", "let", "const", "static"],
        "correctOptionIndex": 2,
        "correctOptionText": "const",
        "difficulty": "easy",
        "explanation": "The `const` keyword declares a constant variable that cannot be reassigned after initialization.",
        "hint": "Think about which keyword is used for constant values."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the scope of a variable declared with `var` inside a function?",
        "options": ["Global scope", "Function scope", "Block scope", "Module scope"],
        "correctOptionIndex": 1,
        "correctOptionText": "Function scope",
        "difficulty": "medium",
        "explanation": "Variables declared with `var` inside a function are function-scoped, meaning they are only accessible within that function.",
        "hint": "Think about where a `var` variable can be accessed when declared inside a function."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of `console.log(0.1 + 0.2 === 0.3)`?",
        "options": ["true", "false", "undefined", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "false",
        "difficulty": "medium",
        "explanation": "Due to floating-point precision issues in JavaScript, 0.1 + 0.2 actually equals 0.30000000000000004, not exactly 0.3.",
        "hint": "JavaScript uses IEEE 754 floating-point arithmetic which can lead to precision issues."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which statement correctly declares a variable and assigns it a value?",
        "options": ["variable x = 5;", "var x : 5;", "var x = 5;", "x := 5;"],
        "correctOptionIndex": 2,
        "correctOptionText": "var x = 5;",
        "difficulty": "easy",
        "explanation": "In JavaScript, you declare variables using keywords like `var`, `let`, or `const`, followed by the variable name, then an assignment operator and a value.",
        "hint": "The correct syntax is: keyword variableName = value;"
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the output of `console.log(5 + '5' - 2)`?",
        "options": ["8", "53", "3", "NaN"],
        "correctOptionIndex": 1,
        "correctOptionText": "53",
        "difficulty": "medium",
        "explanation": "First, `5 + '5'` results in string concatenation, giving '55'. Then, '55' - 2 triggers numeric conversion, resulting in 53.",
        "hint": "JavaScript performs different type conversions depending on the operators used."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which of the following statements is true about `let` and `const`?",
        "options": ["Both are function-scoped", "Both are block-scoped", "let is function-scoped, const is block-scoped", "let is block-scoped, const is function-scoped"],
        "correctOptionIndex": 1,
        "correctOptionText": "Both are block-scoped",
        "difficulty": "medium",
        "explanation": "Both `let` and `const` are block-scoped, meaning they are only accessible within the block they are declared in.",
        "hint": "Block scope means the variable is only accessible within the curly braces {}."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What will `console.log(Boolean(0))` output?",
        "options": ["true", "false", "0", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "false",
        "difficulty": "easy",
        "explanation": "The Boolean() function converts 0 to false, as 0 is considered a falsy value in JavaScript.",
        "hint": "In JavaScript, certain values are considered 'falsy' when converted to boolean."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        "options": ["var x = 10;", "let x = 10;", "const x = 10;", "int x = 10;"],
        "correctOptionIndex": 3,
        "correctOptionText": "int x = 10;",
        "difficulty": "easy",
        "explanation": "JavaScript does not use type declarations like `int`. Valid variable declarations use var, let, or const.",
        "hint": "JavaScript is dynamically typed and doesn't require type declarations."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What does the following code return? `console.log(typeof typeof 1)`",
        "options": ["number", "string", "undefined", "NaN"],
        "correctOptionIndex": 1,
        "correctOptionText": "string",
        "difficulty": "hard",
        "explanation": "`typeof 1` returns 'number', and then `typeof 'number'` returns 'string', because the result of any typeof operation is always a string.",
        "hint": "The `typeof` operator always returns a string representing the type."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of `console.log('5' - 3)`?",
        "options": ["2", "'5-3'", "8", "NaN"],
        "correctOptionIndex": 0,
        "correctOptionText": "2",
        "difficulty": "medium",
        "explanation": "When using the subtraction operator (-), JavaScript converts the string '5' to a number and performs the subtraction.",
        "hint": "Unlike addition, subtraction always tries to convert operands to numbers."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which operator is used for exponentiation in JavaScript?",
        "options": ["^", "*", "**", "^^"],
        "correctOptionIndex": 2,
        "correctOptionText": "**",
        "difficulty": "medium",
        "explanation": "The ** operator is used for exponentiation in JavaScript (e.g., 2 ** 3 equals 8).",
        "hint": "This operator was introduced in ES2016 (ES7)."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of `10 % 3`?",
        "options": ["3.33", "1", "0", "3"],
        "correctOptionIndex": 1,
        "correctOptionText": "1",
        "difficulty": "easy",
        "explanation": "The modulo operator (%) returns the remainder of a division. 10 divided by 3 is 3 with a remainder of 1.",
        "hint": "Think about what remains after dividing 10 by 3 as many times as possible."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of the expression `'b' + 'a' + + 'a' + 'a'`?",
        "options": ["baa", "ba+aa", "baNaNa", "baaa"],
        "correctOptionIndex": 2,
        "correctOptionText": "baNaNa",
        "difficulty": "hard",
        "explanation": "'b' + 'a' gives 'ba'. Then, + 'a' attempts to convert 'a' to a number, which results in NaN. So, 'ba' + NaN + 'a' becomes 'baNaNa'.",
        "hint": "Pay attention to the unary plus operator before the second 'a'."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which of the following is NOT a valid comment in JavaScript?",
        "options": ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "/** This is a comment */"],
        "correctOptionIndex": 2,
        "correctOptionText": "<!-- This is a comment -->",
        "difficulty": "easy",
        "explanation": "<!-- --> is HTML comment syntax, not JavaScript. JavaScript comments use // for single-line and /* */ for multi-line comments.",
        "hint": "JavaScript and HTML have different comment syntaxes."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the output of `console.log(1 + true)`?",
        "options": ["1true", "true1", "2", "Error"],
        "correctOptionIndex": 2,
        "correctOptionText": "2",
        "difficulty": "medium",
        "explanation": "In JavaScript, true is converted to 1 when used in arithmetic operations, so 1 + true equals 2.",
        "hint": "JavaScript performs type coercion when operators are used with different types."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of `console.log(\"5\" > \"10\")`?",
        "options": ["true", "false", "undefined", "Error"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "medium",
        "explanation": "When comparing strings, JavaScript compares them lexicographically (character by character). Since '5' comes after '1' in the character set, '5' is greater than '10'.",
        "hint": "String comparison in JavaScript works differently than numeric comparison."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the output of `console.log(undefined == null)`?",
        "options": ["true", "false", "undefined", "Error"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "medium",
        "explanation": "Using loose equality (==), undefined and null are considered equal. However, with strict equality (===), they are not equal.",
        "hint": "The == operator performs type coercion, which affects how null and undefined compare."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which of the following variable names is NOT valid in JavaScript?",
        "options": ["myVariable", "_value", "123test", "$price"],
        "correctOptionIndex": 2,
        "correctOptionText": "123test",
        "difficulty": "easy",
        "explanation": "Variable names in JavaScript cannot start with a number. They must start with a letter, underscore (_), or dollar sign ($).",
        "hint": "Think about the rules for naming variables in JavaScript."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the result of `console.log(\"Hello\" - \"World\")`?",
        "options": ["NaN", "\"HelloWorld\"", "0", "Error"],
        "correctOptionIndex": 0,
        "correctOptionText": "NaN",
        "difficulty": "medium",
        "explanation": "The subtraction operator attempts to convert both strings to numbers. Since neither can be converted to a number, the result is NaN (Not a Number).",
        "hint": "Subtraction in JavaScript always tries to convert operands to numbers."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What will `console.log(\"5\" + + \"5\")` output?",
        "options": ["10", "55", "5+5", "510"],
        "correctOptionIndex": 0,
        "correctOptionText": "10",
        "difficulty": "hard",
        "explanation": "The unary plus operator (+ before the second \"5\") converts the string to a number. So, \"5\" + + \"5\" becomes \"5\" + 5, which evaluates to 10 (not \"55\").",
        "hint": "Pay attention to the unary plus operator and how it affects the type conversion."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the value of `Math.max()`?",
        "options": ["0", "undefined", "-Infinity", "Infinity"],
        "correctOptionIndex": 2,
        "correctOptionText": "-Infinity",
        "difficulty": "hard",
        "explanation": "When called with no arguments, `Math.max()` returns -Infinity, which is the smallest possible number in JavaScript.",
        "hint": "Think about what would be the initial value for finding the maximum number."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "Which of the following is a valid way to check if a variable is undefined?",
        "options": ["if (variable === undefined)", "if (typeof variable === 'undefined')", "if (variable == null)", "All of the above"],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above",
        "difficulty": "medium",
        "explanation": "All three options are valid ways to check if a variable is undefined. However, the second option is safest as it works even if the variable is not declared.",
        "hint": "Consider what happens when a variable doesn't exist at all."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What is the output of `console.log(\"2\" + 2 - \"1\")`?",
        "options": ["21", "1", "3", "NaN"],
        "correctOptionIndex": 0,
        "correctOptionText": "21",
        "difficulty": "hard",
        "explanation": "First, \"2\" + 2 performs string concatenation, resulting in \"22\". Then, \"22\" - \"1\" performs numeric subtraction, converting both strings to numbers, resulting in 21.",
        "hint": "JavaScript handles + and - operations differently with strings and numbers."
        },
        {
        "topic": "67d6b45a953bd3a26da2ad84",
        "module": "JavaScript Basics",
        "questionText": "What will `console.log(Boolean([]));` output?",
        "options": ["true", "false", "undefined", "Error"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "medium",
        "explanation": "An empty array is an object, and all objects are truthy in JavaScript. Therefore, Boolean([]) returns true.",
        "hint": "In JavaScript, only specific values are considered 'falsy' when converted to boolean."
        },
        // Control Flow & Functions
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "Which statement is used to stop the execution of a loop immediately?",
            "options": ["continue", "break", "exit", "return"],
            "correctOptionIndex": 1,
            "correctOptionText": "break",
            "difficulty": "easy",
            "explanation": "`break` exits a loop immediately, terminating the loop's execution.",
            "hint": "Which keyword exits the loop entirely?"
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What does the `continue` statement do in a loop?",
            "options": ["Stops the loop completely", "Skips the current iteration and continues with the next one", "Pauses the loop for one second", "Restarts the loop from the beginning"],
            "correctOptionIndex": 1,
            "correctOptionText": "Skips the current iteration and continues with the next one",
            "difficulty": "easy",
            "explanation": "`continue` skips the remaining code within the current iteration and jumps to the next iteration of the loop.",
            "hint": "It allows you to skip parts of a loop without terminating it completely."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "Which of the following is NOT a looping structure in JavaScript?",
            "options": ["for", "while", "do-while", "foreach"],
            "correctOptionIndex": 3,
            "correctOptionText": "foreach",
            "difficulty": "easy",
            "explanation": "JavaScript does not have a native `foreach` loop. It has `for`, `while`, `do-while`, and the `forEach` method for arrays (note the camelCase).",
            "hint": "Look for syntax that doesn't exist in JavaScript's core language features."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the result of `(true && false) || true`?",
            "options": ["true", "false", "undefined", "null"],
            "correctOptionIndex": 0,
            "correctOptionText": "true",
            "difficulty": "medium",
            "explanation": "First, `true && false` evaluates to `false`. Then, `false || true` evaluates to `true` because logical OR returns `true` if either operand is `true`.",
            "hint": "Remember the order of operations: AND (&&) executes before OR (||)."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "How do you declare a function expression in JavaScript?",
            "options": ["function myFunction() {}", "let myFunction = function() {};", "function = myFunction() {}", "def myFunction() {}"],
            "correctOptionIndex": 1,
            "correctOptionText": "let myFunction = function() {};",
            "difficulty": "medium",
            "explanation": "A function expression assigns an anonymous function to a variable: `let myFunction = function() {};`",
            "hint": "Function expressions involve assigning a function to a variable."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What's the difference between `==` and `===` operators?",
            "options": ["No difference, they're identical", "`==` compares values, `===` compares values and types", "`==` is faster than `===`", "`===` allows more type coercion than `==`"],
            "correctOptionIndex": 1,
            "correctOptionText": "`==` compares values, `===` compares values and types",
            "difficulty": "easy",
            "explanation": "The `==` operator compares values with type coercion, while `===` compares both values and types without coercion.",
            "hint": "One performs type conversion before comparison, the other doesn't."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What will be logged by `console.log(hoistedFunction()); function hoistedFunction() { return 'I am hoisted!'; }`?",
            "options": ["undefined", "Reference Error", "I am hoisted!", "null"],
            "correctOptionIndex": 2,
            "correctOptionText": "I am hoisted!",
            "difficulty": "medium",
            "explanation": "Function declarations are hoisted entirely in JavaScript, meaning they can be called before they are defined in the code.",
            "hint": "Function declarations and function expressions behave differently regarding hoisting."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the output of the following code? `for(var i=0; i<3; i++) {} console.log(i);`",
            "options": ["0", "2", "3", "undefined"],
            "correctOptionIndex": 2,
            "correctOptionText": "3",
            "difficulty": "medium",
            "explanation": "After the loop completes, `i` is 3 because that's when the condition `i<3` becomes false. Since `var` has function scope, `i` is still accessible after the loop.",
            "hint": "Think about what value of `i` causes the loop condition to evaluate to false."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What does the `return` statement do in a function?",
            "options": ["Prints a value to the console", "Exits the function and specifies a value to be returned", "Creates a new variable", "Resets the function to its initial state"],
            "correctOptionIndex": 1,
            "correctOptionText": "Exits the function and specifies a value to be returned",
            "difficulty": "easy",
            "explanation": "The `return` statement exits a function and returns a specified value to the caller.",
            "hint": "It determines what the function call evaluates to when used in an expression."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the result of `let f = function g() { return 23; }; typeof g;`?",
            "options": ["'function'", "'number'", "'undefined'", "Error"],
            "correctOptionIndex": 2,
            "correctOptionText": "'undefined'",
            "difficulty": "hard",
            "explanation": "In a named function expression, the function name (`g` in this case) is only available within the function's scope, not outside. So `typeof g` returns 'undefined'.",
            "hint": "Consider the scope of the function name in a named function expression."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "Which of the following is a correct if-else statement in JavaScript?",
            "options": ["if x > 10 then console.log('Greater');", "if (x > 10) console.log('Greater');", "if x > 10: console.log('Greater');", "if x > 10 { console.log('Greater'); }"],
            "correctOptionIndex": 1,
            "correctOptionText": "if (x > 10) console.log('Greater');",
            "difficulty": "easy",
            "explanation": "The correct syntax for an if statement in JavaScript requires parentheses around the condition. For a single statement, curly braces are optional.",
            "hint": "JavaScript's if statement syntax requires certain punctuation."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What will be the output of `const add = (a, b) => a + b; console.log(add(2, 3));`?",
            "options": ["undefined", "Error", "5", "2,3"],
            "correctOptionIndex": 2,
            "correctOptionText": "5",
            "difficulty": "easy",
            "explanation": "This code defines an arrow function that adds two parameters and returns the result. Calling add(2, 3) returns 5.",
            "hint": "Arrow functions with a single expression implicitly return the result of that expression."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What happens if a function is called with fewer arguments than parameters?",
            "options": ["Error is thrown", "Extra parameters are undefined", "Extra parameters are null", "Extra parameters are 0"],
            "correctOptionIndex": 1,
            "correctOptionText": "Extra parameters are undefined",
            "difficulty": "medium",
            "explanation": "When a function is called with fewer arguments than declared parameters, the missing arguments are assigned the value `undefined`.",
            "hint": "JavaScript doesn't enforce parameter count matching."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "Which statement about default parameters is true?",
            "options": ["Default parameters can't be used with arrow functions", "Default parameters are evaluated from left to right", "Default parameters can't be expressions", "Default parameters were introduced in ES5"],
            "correctOptionIndex": 1,
            "correctOptionText": "Default parameters are evaluated from left to right",
            "difficulty": "medium",
            "explanation": "Default parameters are evaluated from left to right when the function is called. This means a default parameter can use the value of a previous parameter.",
            "hint": "Consider the order of parameter evaluation when default values are involved."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the output of `(function() { return typeof arguments; })()`?",
            "options": ["'array'", "'object'", "'function'", "'undefined'"],
            "correctOptionIndex": 1,
            "correctOptionText": "'object'",
            "difficulty": "medium",
            "explanation": "The `arguments` object in JavaScript is an array-like object, so `typeof arguments` returns 'object', not 'array'.",
            "hint": "Despite looking like an array, `arguments` has a different underlying type."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the output of `console.log(1 < 2 < 3)` and `console.log(3 > 2 > 1)`?",
            "options": ["true, true", "false, false", "true, false", "false, true"],
            "correctOptionIndex": 2,
            "correctOptionText": "true, false",
            "difficulty": "hard",
            "explanation": "`1 < 2 < 3` evaluates as `(1 < 2) < 3` which is `true < 3`. Since `true` is converted to 1, it becomes `1 < 3`, which is `true`. Conversely, `3 > 2 > 1` evaluates as `(3 > 2) > 1` which is `true > 1`. This becomes `1 > 1`, which is `false`.",
            "hint": "Comparison operators are evaluated left to right with type coercion."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the value of `this` inside an arrow function?",
            "options": ["The global object", "The object that the arrow function is a method of", "The value of `this` in the enclosing lexical context", "undefined"],
            "correctOptionIndex": 2,
            "correctOptionText": "The value of `this` in the enclosing lexical context",
            "difficulty": "hard",
            "explanation": "Arrow functions don't have their own `this` context. They inherit `this` from the enclosing lexical context (where the arrow function is defined).",
            "hint": "Arrow functions handle `this` differently from regular functions."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "Which of the following is true about the ternary operator?",
            "options": ["It only works with numbers", "It can only be used once per statement", "It can be nested", "It requires at least two conditions"],
            "correctOptionIndex": 2,
            "correctOptionText": "It can be nested",
            "difficulty": "medium",
            "explanation": "The ternary operator (`condition ? valueIfTrue : valueIfFalse`) can be nested inside another ternary operator, though this can reduce readability.",
            "hint": "Consider how conditional expressions can be composed."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What does the `switch` statement compare using?",
            "options": ["Loose equality (==)", "Strict equality (===)", "Greater than (>)", "Less than (<)"],
            "correctOptionIndex": 1,
            "correctOptionText": "Strict equality (===)",
            "difficulty": "medium",
            "explanation": "The `switch` statement uses strict equality (===) when comparing the expression value with case values.",
            "hint": "Think about whether type coercion happens during case matching."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the output of the following? `function sum(a, b) { return a + b; } console.log(sum(1, '2'));`",
            "options": ["3", "'12'", "TypeError", "NaN"],
            "correctOptionIndex": 1,
            "correctOptionText": "'12'",
            "difficulty": "medium",
            "explanation": "When adding a number and a string with the + operator, JavaScript converts the number to a string and performs string concatenation. So, `1 + '2'` results in the string `'12'`.",
            "hint": "Consider how the + operator behaves with mixed types."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "In JavaScript, what does a recursive function do?",
            "options": ["Calls external libraries", "Calls a different function", "Calls itself", "None of the above"],
            "correctOptionIndex": 2,
            "correctOptionText": "Calls itself",
            "difficulty": "easy",
            "explanation": "A recursive function is one that calls itself during its execution, usually with modified parameters until a base case is reached.",
            "hint": "Think about functions that solve problems by breaking them into smaller instances of the same problem."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the output of `function test(a) { arguments[0] = 2; return a; } console.log(test(1));`?",
            "options": ["1", "2", "undefined", "Error"],
            "correctOptionIndex": 1,
            "correctOptionText": "2",
            "difficulty": "hard",
            "explanation": "The `arguments` object in non-strict mode is linked to the named parameters. Changing `arguments[0]` also changes the value of `a`.",
            "hint": "Consider how parameters and the arguments object relate in non-strict mode."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What's the main difference between a for-in loop and a for-of loop?",
            "options": ["for-in loops through object properties, for-of loops through iterable values", "for-in loops through arrays, for-of loops through objects", "There is no difference", "for-in is deprecated, for-of is recommended"],
            "correctOptionIndex": 0,
            "correctOptionText": "for-in loops through object properties, for-of loops through iterable values",
            "difficulty": "medium",
            "explanation": "A for-in loop iterates over the enumerable properties of an object, while a for-of loop iterates over the values of iterable objects like arrays, strings, Maps, Sets, etc.",
            "hint": "Think about what kind of elements each loop accesses."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What will be the output of `let result = 0; for (let i = 0; i < 5; i++) { if (i % 2 === 0) continue; result += i; } console.log(result);`?",
            "options": ["0", "4", "6", "8"],
            "correctOptionIndex": 2,
            "correctOptionText": "6",
            "difficulty": "medium",
            "explanation": "The loop runs for i = 0 to 4. The continue statement skips even numbers (0, 2, 4). So only odd numbers (1, 3) are added to result: 1 + 3 = 4.",
            "hint": "The continue statement skips the current iteration and moves to the next one."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the output of `function add(a, b = 1) { return a + b; } console.log(add(5));`?",
            "options": ["5", "6", "undefined", "Error"],
            "correctOptionIndex": 1,
            "correctOptionText": "6",
            "difficulty": "easy",
            "explanation": "The function has a default parameter `b = 1`. When called with only one argument, `b` takes its default value, so the result is 5 + 1 = 6.",
            "hint": "Default parameters provide values when arguments are not passed."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What will this code print? `let x = 5; if (x = 0) { console.log('Zero'); } else { console.log('Not zero'); }`",
            "options": ["Zero", "Not zero", "5", "Error"],
            "correctOptionIndex": 0,
            "correctOptionText": "Zero",
            "difficulty": "hard",
            "explanation": "The condition uses assignment (`=`) instead of comparison (`==`). So `x = 0` assigns 0 to x and returns 0. Since 0 is falsy, the 'Zero' branch executes.",
            "hint": "Be careful about the difference between = (assignment) and == (comparison)."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is a pure function?",
            "options": ["A function that only uses pure JavaScript syntax", "A function that always returns the same output for the same input and has no side effects", "A function that only works with primitive data types", "A function declared with the 'pure' keyword"],
            "correctOptionIndex": 1,
            "correctOptionText": "A function that always returns the same output for the same input and has no side effects",
            "difficulty": "medium",
            "explanation": "A pure function always produces the same output for the same inputs and has no side effects (doesn't modify external state or variables).",
            "hint": "This concept is important in functional programming."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What will the following code output? `let f = function factorial(n) { return n <= 1 ? 1 : n * factorial(n-1); }; console.log(f(5));`",
            "options": ["5", "24", "120", "Error"],
            "correctOptionIndex": 2,
            "correctOptionText": "120",
            "difficulty": "hard",
            "explanation": "This is a recursive factorial function. For n=5, it calculates 5! = 5×4×3×2×1 = 120.",
            "hint": "Recursive functions call themselves with modified parameters until a base case is reached."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What is the output of `let a = 10; if (a > 5) { let a = 5; } console.log(a);`?",
            "options": ["5", "10", "undefined", "Error"],
            "correctOptionIndex": 1,
            "correctOptionText": "10",
            "difficulty": "medium",
            "explanation": "The `let a = 5` inside the if block creates a new variable `a` that only exists within that block (due to block scoping). The console.log accesses the outer `a`, which is still 10.",
            "hint": "Remember that `let` declarations are block-scoped."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Control Flow & Functions",
            "questionText": "What will be the output of `function outer() { const x = 10; function inner() { console.log(x); } return inner; } const closureFn = outer(); closureFn();`?",
            "options": ["undefined", "null", "10", "Error"],
            "correctOptionIndex": 2,
            "correctOptionText": "10",
            "difficulty": "hard",
            "explanation": "This demonstrates a closure. The inner function maintains access to the variables from its outer scope even after the outer function has completed execution. So `x` is still accessible when `closureFn()` is called.",
            "hint": "Closures remember the environment they were created in."
        },
        // Arrays & Objects 
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "Which method adds one or more elements to the end of an array?",
            "options": ["push()", "unshift()", "pop()", "shift()"],
            "correctOptionIndex": 0,
            "correctOptionText": "push()",
            "difficulty": "easy",
            "explanation": "The `push()` method adds one or more elements to the end of an array and returns the new length of the array.",
            "hint": "Think about 'pushing' something onto the end of a stack."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "Which method removes the last element from an array?",
            "options": ["pop()", "shift()", "delete()", "remove()"],
            "correctOptionIndex": 0,
            "correctOptionText": "pop()",
            "difficulty": "easy",
            "explanation": "The `pop()` method removes the last element from an array and returns that element.",
            "hint": "Think about 'popping' something off the top of a stack."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "How do you access the first element of an array called 'fruits'?",
            "options": ["fruits[0]", "fruits[1]", "fruits.first()", "fruits.get(0)"],
            "correctOptionIndex": 0,
            "correctOptionText": "fruits[0]",
            "difficulty": "easy",
            "explanation": "Arrays in JavaScript are zero-indexed, so the first element is at index 0.",
            "hint": "JavaScript arrays start indexing at what number?"
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "Which method can be used to transform all elements in an array?",
            "options": ["find()", "forEach()", "map()", "filter()"],
            "correctOptionIndex": 2,
            "correctOptionText": "map()",
            "difficulty": "medium",
            "explanation": "The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.",
            "hint": "This method returns a new array where each element has been transformed."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "Which method is used to select elements from an array based on a condition?",
            "options": ["find()", "forEach()", "map()", "filter()"],
            "correctOptionIndex": 3,
            "correctOptionText": "filter()",
            "difficulty": "medium",
            "explanation": "The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.",
            "hint": "This method returns a new array containing only the elements that satisfy a condition."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `['a', 'b', 'c', 'd'].slice(1, 3)`?",
            "options": ["['a', 'b', 'c']", "['b', 'c']", "['b', 'c', 'd']", "['a', 'b']"],
            "correctOptionIndex": 1,
            "correctOptionText": "['b', 'c']",
            "difficulty": "medium",
            "explanation": "The `slice()` method returns a shallow copy of a portion of an array into a new array object. It extracts elements from the start index up to (but not including) the end index.",
            "hint": "The slice method takes start and end indices, where the end index is exclusive."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "How do you create an empty object in JavaScript?",
            "options": ["let obj = {}", "let obj = new Object()", "let obj = Object.create(null)", "All of the above"],
            "correctOptionIndex": 3,
            "correctOptionText": "All of the above",
            "difficulty": "medium",
            "explanation": "In JavaScript, you can create an empty object using object literal notation `{}`, the `Object` constructor, or `Object.create(null)`. All are valid ways to create an object.",
            "hint": "There are multiple ways to create objects in JavaScript."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)`?",
            "options": ["10", "24", "0", "Error"],
            "correctOptionIndex": 0,
            "correctOptionText": "10",
            "difficulty": "medium",
            "explanation": "The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value. In this case, it's summing all elements: 1 + 2 + 3 + 4 = 10.",
            "hint": "The reducer function accumulates values from left to right across the array."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "How do you check if an object has a specific property?",
            "options": ["obj.hasProperty('prop')", "obj.includes('prop')", "obj.hasOwnProperty('prop')", "'prop' in obj"],
            "correctOptionIndex": 2,
            "correctOptionText": "obj.hasOwnProperty('prop')",
            "difficulty": "medium",
            "explanation": "The `hasOwnProperty()` method returns a boolean indicating whether the object has the specified property as its own property (not inherited).",
            "hint": "This method checks if a property exists directly on an object, not in its prototype chain."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `typeof [1, 2, 3]`?",
            "options": ["'array'", "'object'", "'Array'", "'list'"],
            "correctOptionIndex": 1,
            "correctOptionText": "'object'",
            "difficulty": "medium",
            "explanation": "In JavaScript, arrays are objects, so `typeof [1, 2, 3]` returns 'object'.",
            "hint": "Arrays are actually a special type of object in JavaScript."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "How do you merge two arrays in JavaScript?",
            "options": ["array1.concat(array2)", "array1.push(array2)", "array1.merge(array2)", "[...array1, ...array2]"],
            "correctOptionIndex": 3,
            "correctOptionText": "[...array1, ...array2]",
            "difficulty": "medium",
            "explanation": "The spread operator `...` can be used to merge arrays by spreading their elements into a new array: `[...array1, ...array2]`. The `concat()` method is also correct but wasn't listed as an option.",
            "hint": "The spread operator is a modern way to combine arrays."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What method is used to convert an array to a string with a specified separator?",
            "options": ["concat()", "split()", "join()", "toString()"],
            "correctOptionIndex": 2,
            "correctOptionText": "join()",
            "difficulty": "easy",
            "explanation": "The `join()` method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator.",
            "hint": "This method lets you specify what character should appear between each array element in the resulting string."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `Object.keys({a: 1, b: 2, c: 3})`?",
            "options": ["[1, 2, 3]", "['a', 'b', 'c']", "['a: 1', 'b: 2', 'c: 3']", "{a: 1, b: 2, c: 3}"],
            "correctOptionIndex": 1,
            "correctOptionText": "['a', 'b', 'c']",
            "difficulty": "medium",
            "explanation": "The `Object.keys()` method returns an array of a given object's own enumerable property names.",
            "hint": "This method returns just the property names, not their values."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "Which method is used to find the first element in an array that satisfies a condition?",
            "options": ["filter()", "find()", "forEach()", "some()"],
            "correctOptionIndex": 1,
            "correctOptionText": "find()",
            "difficulty": "medium",
            "explanation": "The `find()` method returns the value of the first element in the array that satisfies the provided testing function.",
            "hint": "Unlike filter(), this method returns only one element (not an array)."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, 2, 3].indexOf(4)`?",
            "options": ["3", "4", "-1", "undefined"],
            "correctOptionIndex": 2,
            "correctOptionText": "-1",
            "difficulty": "easy",
            "explanation": "The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
            "hint": "This method returns a special value when the element is not found."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "How do you check if an object is an array?",
            "options": ["obj.isArray()", "typeof obj === 'array'", "obj instanceof Array", "Array.isArray(obj)"],
            "correctOptionIndex": 3,
            "correctOptionText": "Array.isArray(obj)",
            "difficulty": "medium",
            "explanation": "The `Array.isArray()` method determines whether the passed value is an Array.",
            "hint": "This is a static method of the Array object."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is destructuring in JavaScript?",
            "options": ["A way to destroy objects", "A technique to copy objects", "A syntax for extracting values from objects or arrays", "A method to merge objects"],
            "correctOptionIndex": 2,
            "correctOptionText": "A syntax for extracting values from objects or arrays",
            "difficulty": "medium",
            "explanation": "Destructuring is a JavaScript syntax that allows you to extract data from arrays or objects into distinct variables.",
            "hint": "It's a way to unpack values from data structures into separate variables."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `['a', 'b', 'c'].includes('b')`?",
            "options": ["0", "1", "true", "false"],
            "correctOptionIndex": 2,
            "correctOptionText": "true",
            "difficulty": "easy",
            "explanation": "The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
            "hint": "This method checks for the presence of an element and returns a boolean."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, 2, 3].map(x => x * 2)`?",
            "options": ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "[3, 6, 9]"],
            "correctOptionIndex": 1,
            "correctOptionText": "[2, 4, 6]",
            "difficulty": "medium",
            "explanation": "The `map()` method creates a new array with the results of calling a provided function on every element. Here, each element is multiplied by 2.",
            "hint": "Each element in the original array is transformed by the provided function."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, 2, 3, 4].filter(x => x % 2 === 0)`?",
            "options": ["[1, 3]", "[2, 4]", "[1, 2, 3, 4]", "[]"],
            "correctOptionIndex": 1,
            "correctOptionText": "[2, 4]",
            "difficulty": "medium",
            "explanation": "The `filter()` method creates a new array with all elements that pass the test. Here, it returns all even numbers.",
            "hint": "The condition is checking if a number is even (divisible by 2 with no remainder)."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "How do you clone an object in JavaScript?",
            "options": ["let clone = obj", "let clone = Object.clone(obj)", "let clone = {...obj}", "let clone = Object.copy(obj)"],
            "correctOptionIndex": 2,
            "correctOptionText": "let clone = {...obj}",
            "difficulty": "medium",
            "explanation": "The spread operator `{...obj}` creates a shallow copy of an object, copying its own enumerable properties.",
            "hint": "The spread operator provides a concise way to create a new object with the same properties."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, [2, 3]].flat()`?",
            "options": ["[1, 2, 3]", "[[1, 2, 3]]", "[1, [2, 3]]", "Error"],
            "correctOptionIndex": 0,
            "correctOptionText": "[1, 2, 3]",
            "difficulty": "medium",
            "explanation": "The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth (default is 1).",
            "hint": "This method flattens nested arrays by one level by default."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "Which method adds one or more elements to the beginning of an array?",
            "options": ["push()", "unshift()", "pop()", "shift()"],
            "correctOptionIndex": 1,
            "correctOptionText": "unshift()",
            "difficulty": "easy",
            "explanation": "The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.",
            "hint": "Think of 'shifting' elements to make room for new ones at the start."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `Object.values({a: 1, b: 2, c: 3})`?",
            "options": ["['a', 'b', 'c']", "[1, 2, 3]", "['a:1', 'b:2', 'c:3']", "{1, 2, 3}"],
            "correctOptionIndex": 1,
            "correctOptionText": "[1, 2, 3]",
            "difficulty": "medium",
            "explanation": "The `Object.values()` method returns an array of a given object's own enumerable property values.",
            "hint": "This method returns just the values, not the keys."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "How do you remove a property from an object?",
            "options": ["delete obj.property", "obj.property = undefined", "obj.remove('property')", "obj.delete('property')"],
            "correctOptionIndex": 0,
            "correctOptionText": "delete obj.property",
            "difficulty": "easy",
            "explanation": "The `delete` operator removes a property from an object.",
            "hint": "This operator completely removes the property, rather than just setting its value to undefined."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, 2, 3].some(x => x > 2)`?",
            "options": ["true", "false", "3", "[3]"],
            "correctOptionIndex": 0,
            "correctOptionText": "true",
            "difficulty": "medium",
            "explanation": "The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. Here, it checks if any element is greater than 2.",
            "hint": "This method returns true if the condition is true for at least one element."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, 2, 3].every(x => x > 0)`?",
            "options": ["true", "false", "[1, 2, 3]", "3"],
            "correctOptionIndex": 0,
            "correctOptionText": "true",
            "difficulty": "medium",
            "explanation": "The `every()` method tests whether all elements in the array pass the test implemented by the provided function. Here, it checks if all elements are greater than 0.",
            "hint": "This method returns true only if the condition is true for all elements."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `Array.from('hello')`?",
            "options": ["['hello']", "['h', 'e', 'l', 'l', 'o']", "[104, 101, 108, 108, 111]", "Error"],
            "correctOptionIndex": 1,
            "correctOptionText": "['h', 'e', 'l', 'l', 'o']",
            "difficulty": "medium",
            "explanation": "The `Array.from()` method creates a new Array instance from an array-like or iterable object. When applied to a string, it creates an array of the string's characters.",
            "hint": "This method can convert a string into an array of its individual characters."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, 2, 3].reverse()`?",
            "options": ["[3, 2, 1]", "[1, 2, 3]", "3", "Error"],
            "correctOptionIndex": 0,
            "correctOptionText": "[3, 2, 1]",
            "difficulty": "easy",
            "explanation": "The `reverse()` method reverses an array in place and returns the reference to the same array.",
            "hint": "This method modifies the original array and returns it."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "What is the output of `[1, 2, 3].splice(1, 1, 'a', 'b')`?",
            "options": ["[1, 'a', 'b', 3]", "[1, 'a', 'b', 2, 3]", "[2]", "[1, 2, 3, 'a', 'b']"],
            "correctOptionIndex": 2,
            "correctOptionText": "[2]",
            "difficulty": "hard",
            "explanation": "The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements. It returns the removed elements. Here, it removes 1 element at index 1 (which is 2) and inserts 'a' and 'b' at that position.",
            "hint": "This method returns the removed elements, not the modified array."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Arrays & Objects",
            "questionText": "After the operation `[1, 2, 3].splice(1, 1, 'a', 'b')`, what will the original array look like?",
            "options": ["[1, 'a', 'b', 3]", "[1, 'a', 'b', 2, 3]", "[2]", "[1, 2, 3, 'a', 'b']"],
            "correctOptionIndex": 0,
            "correctOptionText": "[1, 'a', 'b', 3]",
            "difficulty": "hard",
            "explanation": "The `splice()` method modifies the original array. In this case, it removes 1 element at index 1 (which is 2) and inserts 'a' and 'b' at that position, resulting in [1, 'a', 'b', 3].",
            "hint": "The splice method modifies the original array in place."
        },
        // Dom Manlpulation
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which method is used to select an element by its ID?",
            "options": ["document.querySelector()", "document.getElementById()", "document.getElementsByClassName()", "document.getElementsByTagName()"],
            "correctOptionIndex": 1,
            "correctOptionText": "document.getElementById()",
            "difficulty": "easy",
            "explanation": "document.getElementById() selects a single element based on its unique ID attribute.",
            "hint": "Look for the method that specifically mentions 'ID' in its name."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which property is used to change the text content of an element?",
            "options": ["element.innerText", "element.innerHTML", "element.textContent", "All of the above"],
            "correctOptionIndex": 3,
            "correctOptionText": "All of the above",
            "difficulty": "medium",
            "explanation": "All three properties (innerText, innerHTML, and textContent) can be used to change the text content of an element, but they have subtle differences in behavior.",
            "hint": "Consider which properties can modify text within an element."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "How do you create a new element in the DOM?",
            "options": ["document.makeElement()", "document.createElement()", "document.newElement()", "document.generateElement()"],
            "correctOptionIndex": 1,
            "correctOptionText": "document.createElement()",
            "difficulty": "easy",
            "explanation": "document.createElement() is used to create a new element node that can be inserted into the DOM.",
            "hint": "Which method sounds like it's constructing something new?"
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which method is used to add a new child element to a parent element?",
            "options": ["parent.appendElement(child)", "parent.appendChild(child)", "parent.insertChild(child)", "parent.addChild(child)"],
            "correctOptionIndex": 1,
            "correctOptionText": "parent.appendChild(child)",
            "difficulty": "easy",
            "explanation": "parent.appendChild(child) appends a node as the last child of a parent element.",
            "hint": "This method adds a node at the end of the parent's children list."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is the difference between innerHTML and textContent?",
            "options": ["innerHTML parses content as HTML while textContent treats it as plain text", "textContent parses content as HTML while innerHTML treats it as plain text", "They are identical in functionality", "innerHTML works only with div elements"],
            "correctOptionIndex": 0,
            "correctOptionText": "innerHTML parses content as HTML while textContent treats it as plain text",
            "difficulty": "medium",
            "explanation": "innerHTML interprets string content as HTML, allowing you to insert formatted content and elements, while textContent treats everything as plain text without parsing HTML tags.",
            "hint": "Consider how each property would handle the string '<b>Hello</b>'."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which method is used to select all elements matching a specific CSS selector?",
            "options": ["document.querySelectorAll()", "document.getElementsBySelector()", "document.selectAll()", "document.findElements()"],
            "correctOptionIndex": 0,
            "correctOptionText": "document.querySelectorAll()",
            "difficulty": "easy",
            "explanation": "document.querySelectorAll() returns a static NodeList containing all elements that match the specified CSS selector.",
            "hint": "This method uses CSS selector syntax and returns multiple elements."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "How do you remove a child element from the DOM?",
            "options": ["parent.deleteChild(child)", "parent.removeChild(child)", "child.remove()", "Both B and C"],
            "correctOptionIndex": 3,
            "correctOptionText": "Both B and C",
            "difficulty": "medium", 
            "explanation": "Both parent.removeChild(child) and child.remove() can be used to remove an element from the DOM, though remove() is more modern and has slightly less browser support in older browsers.",
            "hint": "There are two valid approaches - one from the parent's perspective and one from the child's perspective."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What does document.querySelector('.myClass') select?",
            "options": ["All elements with class 'myClass'", "The first element with class 'myClass'", "The element with ID 'myClass'", "The element with tag name 'myClass'"],
            "correctOptionIndex": 1,
            "correctOptionText": "The first element with class 'myClass'",
            "difficulty": "medium",
            "explanation": "document.querySelector() returns the first element that matches the specified CSS selector. In this case, it's selecting the first element with the class 'myClass'.",
            "hint": "Unlike querySelectorAll(), this method returns only one element."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which property gets or sets the value of an element's attribute?",
            "options": ["element.attribute", "element.getAttribute()/element.setAttribute()", "element.getProperty()/element.setProperty()", "element.value"],
            "correctOptionIndex": 1,
            "correctOptionText": "element.getAttribute()/element.setAttribute()",
            "difficulty": "easy",
            "explanation": "getAttribute() and setAttribute() methods are used to get and set the value of an element's attribute respectively.",
            "hint": "These are methods specifically designed for working with HTML attributes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is the return type of document.getElementsByClassName()?",
            "options": ["Array", "NodeList", "HTMLCollection", "Object"],
            "correctOptionIndex": 2,
            "correctOptionText": "HTMLCollection",
            "difficulty": "medium",
            "explanation": "document.getElementsByClassName() returns a live HTMLCollection of elements with the specified class name.",
            "hint": "This collection is automatically updated when elements in the document change."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "How can you insert an element before a specific child element?",
            "options": ["parent.insertBefore(newElement, referenceElement)", "parent.before(newElement, referenceElement)", "referenceElement.insertBefore(newElement)", "parent.prepend(newElement, referenceElement)"],
            "correctOptionIndex": 0,
            "correctOptionText": "parent.insertBefore(newElement, referenceElement)",
            "difficulty": "medium",
            "explanation": "parent.insertBefore(newElement, referenceElement) inserts newElement into parent before referenceElement.",
            "hint": "This method requires both the new element and a reference element that already exists in the parent."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which property is used to get or set the CSS styles of an element?",
            "options": ["element.css", "element.style", "element.cssText", "element.stylesheet"],
            "correctOptionIndex": 1,
            "correctOptionText": "element.style",
            "difficulty": "easy",
            "explanation": "The style property represents the inline style of an element, allowing you to get and set CSS properties directly.",
            "hint": "This property provides access to the element's inline styles."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is the purpose of document.createDocumentFragment()?",
            "options": ["To create a new HTML document", "To create a lightweight container for DOM nodes without affecting the DOM", "To create a copy of the current document", "To fragment the DOM into smaller parts"],
            "correctOptionIndex": 1,
            "correctOptionText": "To create a lightweight container for DOM nodes without affecting the DOM",
            "difficulty": "hard",
            "explanation": "document.createDocumentFragment() creates a lightweight container for DOM nodes that isn't part of the active DOM tree. It's useful for preparing a batch of elements before adding them to the DOM, which improves performance by minimizing reflows and repaints.",
            "hint": "It's used to improve performance when adding multiple elements to the DOM."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What's the difference between parentNode and parentElement?",
            "options": ["They are identical in all cases", "parentNode can be any node type while parentElement is always an element node", "parentElement can be any node type while parentNode is always an element node", "parentNode is deprecated"],
            "correctOptionIndex": 1,
            "correctOptionText": "parentNode can be any node type while parentElement is always an element node",
            "difficulty": "hard",
            "explanation": "parentNode returns the parent node of any type (could be an element, document, or document fragment), while parentElement returns the parent element node (or null if the parent is not an element).",
            "hint": "Consider what would happen if the parent is the document node."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is the correct way to change the CSS class of an element?",
            "options": ["element.class = 'newClass'", "element.className = 'newClass'", "element.classList.add('newClass')", "Both B and C"],
            "correctOptionIndex": 3,
            "correctOptionText": "Both B and C",
            "difficulty": "medium",
            "explanation": "Both element.className = 'newClass' and element.classList.add('newClass') can modify classes, but className replaces all existing classes while classList.add() adds a class without affecting existing ones.",
            "hint": "There are two approaches - one that replaces all classes and another that adds a class."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What method would you use to clone an element?",
            "options": ["element.duplicate()", "element.copy()", "element.clone()", "element.cloneNode()"],
            "correctOptionIndex": 3,
            "correctOptionText": "element.cloneNode()",
            "difficulty": "medium",
            "explanation": "element.cloneNode() creates a copy of the node. When passed true as an argument, it also clones all child nodes.",
            "hint": "This method creates an exact copy of a DOM node."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "How do you check if an element has a specific class?",
            "options": ["element.hasClass('className')", "element.classList.contains('className')", "element.className.includes('className')", "element.class.has('className')"],
            "correctOptionIndex": 1,
            "correctOptionText": "element.classList.contains('className')",
            "difficulty": "medium",
            "explanation": "element.classList.contains('className') returns true if the element has the specified class and false otherwise.",
            "hint": "The classList property provides methods for working with an element's classes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which method inserts content at the beginning of an element?",
            "options": ["element.prepend()", "element.insertFirst()", "element.beforeBegin()", "element.insertAtBeginning()"],
            "correctOptionIndex": 0,
            "correctOptionText": "element.prepend()",
            "difficulty": "medium",
            "explanation": "element.prepend() inserts nodes or strings at the beginning of the element, inside it as its first child.",
            "hint": "This method adds content as the first child of the element."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is the purpose of the dataset property?",
            "options": ["To access the element's CSS data properties", "To access custom data attributes (data-*)", "To access the element's dataset in JSON format", "To access the element's stored data values"],
            "correctOptionIndex": 1,
            "correctOptionText": "To access custom data attributes (data-*)",
            "difficulty": "medium",
            "explanation": "The dataset property provides access to all custom data attributes (data-*) set on the element. The attribute names are converted from kebab-case to camelCase.",
            "hint": "It's related to HTML5 custom data attributes that start with 'data-'."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is the difference between childNodes and children properties?",
            "options": ["They are identical in functionality", "childNodes includes all node types while children only includes element nodes", "children includes all node types while childNodes only includes element nodes", "childNodes is deprecated"],
            "correctOptionIndex": 1,
            "correctOptionText": "childNodes includes all node types while children only includes element nodes",
            "difficulty": "hard",
            "explanation": "childNodes returns all child nodes including text nodes, comment nodes, and element nodes, while children returns only child element nodes.",
            "hint": "Consider what happens with whitespace text nodes between elements."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which method is used to get all computed CSS properties and values of an element?",
            "options": ["element.getComputedStyles()", "element.currentStyle", "window.getComputedStyle(element)", "document.getElementStyles(element)"],
            "correctOptionIndex": 2,
            "correctOptionText": "window.getComputedStyle(element)",
            "difficulty": "hard",
            "explanation": "window.getComputedStyle(element) returns a CSSStyleDeclaration object containing all CSS properties and values that are actually being applied to the element after all stylesheets have been applied.",
            "hint": "This method returns all effective styles, not just inline styles."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What does the Element.getBoundingClientRect() method return?",
            "options": ["A string describing the element's position", "An object with properties like top, right, bottom, left, width, and height", "A DOM node representing the element's boundaries", "The coordinates of the element relative to its parent"],
            "correctOptionIndex": 1,
            "correctOptionText": "An object with properties like top, right, bottom, left, width, and height",
            "difficulty": "hard",
            "explanation": "Element.getBoundingClientRect() returns a DOMRect object with properties like top, right, bottom, left, width, and height that describe the element's position relative to the viewport.",
            "hint": "It provides information about the size and position of an element."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What method would you use to insert HTML content at a specific position relative to an element?",
            "options": ["element.insertHTML()", "element.innerHTML = content", "element.insertAdjacentHTML()", "element.addHTML()"],
            "correctOptionIndex": 2,
            "correctOptionText": "element.insertAdjacentHTML()",
            "difficulty": "hard",
            "explanation": "element.insertAdjacentHTML(position, text) parses text as HTML and inserts the resulting nodes at the specified position relative to the element ('beforebegin', 'afterbegin', 'beforeend', or 'afterend').",
            "hint": "This method allows you to specify where exactly to insert the HTML content."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is event bubbling?",
            "options": ["When an event occurs on an element, it first triggers on the element itself, then bubbles up to parent elements", "When an event occurs on an element, it first triggers on the document, then propagates down to the target element", "The process of creating multiple events simultaneously", "When events are cancelled before reaching their target"],
            "correctOptionIndex": 0,
            "correctOptionText": "When an event occurs on an element, it first triggers on the element itself, then bubbles up to parent elements",
            "difficulty": "medium",
            "explanation": "Event bubbling is the process where an event triggered on a nested element 'bubbles up' through its ancestors in the DOM tree, triggering the same event on each parent element up to the document root.",
            "hint": "Think about how events propagate through the DOM hierarchy after they occur."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "Which method would you use to create a text node?",
            "options": ["document.createText()", "document.newTextNode()", "document.createTextNode()", "document.textNode()"],
            "correctOptionIndex": 2,
            "correctOptionText": "document.createTextNode()",
            "difficulty": "medium",
            "explanation": "document.createTextNode() creates a new Text node with the specified text content.",
            "hint": "This method is similar to createElement but specifically for text content."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What does MutationObserver do?",
            "options": ["Modifies DOM elements automatically", "Observes changes in the DOM tree", "Prevents mutations to the DOM", "Creates mutations in the JavaScript code"],
            "correctOptionIndex": 1,
            "correctOptionText": "Observes changes in the DOM tree",
            "difficulty": "hard",
            "explanation": "MutationObserver is an interface that provides the ability to watch for changes being made to the DOM tree. It can observe additions or removals of elements, attribute changes, or text content changes.",
            "hint": "It's used to react to changes in the DOM without using events."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What happens when you call replaceChild() method?",
            "options": ["The old child is removed and garbage collected", "The old child is replaced with the new child and returned", "The old child becomes a new reference in memory", "The DOM tree is reorganized entirely"],
            "correctOptionIndex": 1,
            "correctOptionText": "The old child is replaced with the new child and returned",
            "difficulty": "medium",
            "explanation": "parentNode.replaceChild(newChild, oldChild) replaces oldChild with newChild in the list of children of parentNode, and returns the removed oldChild node.",
            "hint": "This method both modifies the DOM and returns a value."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is the difference between innerText and textContent?",
            "options": ["They are identical in functionality", "innerText is aware of CSS styling and won't return text from hidden elements, while textContent returns all text", "textContent is aware of CSS styling and won't return text from hidden elements, while innerText returns all text", "innerText is deprecated"],
            "correctOptionIndex": 1,
            "correctOptionText": "innerText is aware of CSS styling and won't return text from hidden elements, while textContent returns all text",
            "difficulty": "hard",
            "explanation": "innerText only returns visible text content and is affected by CSS styling. textContent returns all text content, including text in script and style elements, and disregards whether the text is visible or not.",
            "hint": "One respects CSS visibility properties while the other doesn't."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "What is the purpose of Element.scrollIntoView()?",
            "options": ["To check if an element is visible in the viewport", "To scroll the element into the visible area of the browser window", "To add scroll functionality to an element", "To calculate the scroll position of an element"],
            "correctOptionIndex": 1,
            "correctOptionText": "To scroll the element into the visible area of the browser window",
            "difficulty": "medium",
            "explanation": "Element.scrollIntoView() scrolls the element's parent container to make the element visible in the viewport. It can take a boolean parameter or options object to control the scrolling behavior.",
            "hint": "This method adjusts the scroll position so you can see the element."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "DOM Manipulation",
            "questionText": "How do you determine if an element matches a specific CSS selector?",
            "options": ["element.matchesSelector(selector)", "element.isMatch(selector)", "element.matches(selector)", "element.querySelector(selector)"],
            "correctOptionIndex": 2,
            "correctOptionText": "element.matches(selector)",
            "difficulty": "hard",
            "explanation": "element.matches(selector) returns true if the element would be selected by the specified CSS selector string, otherwise false.",
            "hint": "This method tests whether an element would be selected by a particular selector."
        },
        
        // Events & Event Handling
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "Which method is used to attach an event handler to an element?",
            "options": ["element.addEventListener()", "element.attachEvent()", "element.on()", "element.addEvent()"],
            "correctOptionIndex": 0,
            "correctOptionText": "element.addEventListener()",
            "difficulty": "easy",
            "explanation": "element.addEventListener() is the standard method used to register an event handler on a specified element.",
            "hint": "This is the modern standard method for attaching events in JavaScript."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is event bubbling?",
            "options": ["When an event triggered on a parent element affects its children", "When an event triggered on a child element propagates up through its ancestors", "When multiple events trigger simultaneously", "When an event is canceled before reaching its target"],
            "correctOptionIndex": 1,
            "correctOptionText": "When an event triggered on a child element propagates up through its ancestors",
            "difficulty": "medium",
            "explanation": "Event bubbling is when an event triggered on a nested element 'bubbles up' through its parent elements in the DOM tree, triggering the same event on each parent.",
            "hint": "Think about how events move through the DOM hierarchy after being triggered."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What does event.preventDefault() do?",
            "options": ["Stops the event from bubbling up", "Cancels the event completely", "Prevents the browser's default action for the event", "Resets the event to its initial state"],
            "correctOptionIndex": 2,
            "correctOptionText": "Prevents the browser's default action for the event",
            "difficulty": "medium",
            "explanation": "event.preventDefault() tells the browser not to perform the default action associated with the event, such as following a link or submitting a form.",
            "hint": "This method doesn't stop event propagation, but prevents what would normally happen as a result of the event."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What method stops event propagation completely?",
            "options": ["event.halt()", "event.stop()", "event.stopPropagation()", "event.cancelBubble()"],
            "correctOptionIndex": 2,
            "correctOptionText": "event.stopPropagation()",
            "difficulty": "medium",
            "explanation": "event.stopPropagation() prevents an event from bubbling up to parent elements.",
            "hint": "This method specifically prevents the event from continuing its normal path through the DOM."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is the third parameter of addEventListener()?",
            "options": ["Event type", "Callback function", "Options object or useCapture boolean", "Event target"],
            "correctOptionIndex": 2,
            "correctOptionText": "Options object or useCapture boolean",
            "difficulty": "medium",
            "explanation": "The third parameter of addEventListener() can be either a boolean indicating whether to use capture phase (true) or bubbling phase (false), or an options object with properties like capture, once, and passive.",
            "hint": "This parameter controls how the event listener behaves, particularly regarding event phases."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "Which event fires when the DOM content is fully loaded, but before stylesheets and images?",
            "options": ["window.onload", "document.onready", "document.DOMContentLoaded", "document.complete"],
            "correctOptionIndex": 2,
            "correctOptionText": "document.DOMContentLoaded",
            "difficulty": "medium",
            "explanation": "The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.",
            "hint": "This event fires earlier than load, making it useful for executing code as soon as possible."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is event delegation?",
            "options": ["Assigning an event to multiple elements at once", "Using a parent element to handle events for its children", "Transferring events between elements", "Creating custom event handlers"],
            "correctOptionIndex": 1,
            "correctOptionText": "Using a parent element to handle events for its children",
            "difficulty": "medium",
            "explanation": "Event delegation is a technique where you attach a single event listener to a parent element that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.",
            "hint": "This pattern leverages event bubbling and is useful for dynamically created elements."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is the difference between event.target and event.currentTarget?",
            "options": ["They are identical in all cases", "target is the element that triggered the event, currentTarget is the element the listener is attached to", "currentTarget is the element that triggered the event, target is the element the listener is attached to", "target is for mouse events, currentTarget is for keyboard events"],
            "correctOptionIndex": 1,
            "correctOptionText": "target is the element that triggered the event, currentTarget is the element the listener is attached to",
            "difficulty": "medium",
            "explanation": "event.target is the element that triggered the event (e.g., the actual element that was clicked), while event.currentTarget is the element that the event listener is attached to, which may be a parent of the target during event bubbling.",
            "hint": "During bubbling, these may refer to different elements."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is the correct way to remove an event listener?",
            "options": ["element.removeEventListener(type, listener)", "element.detachEvent(type, listener)", "element.off(type, listener)", "element.detach(type, listener)"],
            "correctOptionIndex": 0,
            "correctOptionText": "element.removeEventListener(type, listener)",
            "difficulty": "easy",
            "explanation": "element.removeEventListener() removes an event handler that has been attached with addEventListener().",
            "hint": "This method pairs with addEventListener() for cleanup."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "Which event is fired when a user resizes the browser window?",
            "options": ["window.onresize", "document.onresize", "browser.resize", "window.resize"],
            "correctOptionIndex": 0,
            "correctOptionText": "window.onresize",
            "difficulty": "easy",
            "explanation": "The resize event fires on the window object when the browser window is resized.",
            "hint": "This event belongs to the window object, not the document."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is event capturing?",
            "options": ["The process of recording events for later use", "When events propagate from the target element up to its ancestors", "When events propagate from the root of the document down to the target element", "When an event is intercepted before reaching its target"],
            "correctOptionIndex": 2,
            "correctOptionText": "When events propagate from the root of the document down to the target element",
            "difficulty": "hard",
            "explanation": "Event capturing is the first phase of event propagation where the event travels from the root of the document down through the DOM tree to the target element, before bubbling back up.",
            "hint": "It's the opposite direction of event bubbling."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What method stops the current event immediately and prevents subsequent event handling?",
            "options": ["event.stopImmediatePropagation()", "event.cancelAll()", "event.prevent()", "event.terminate()"],
            "correctOptionIndex": 0,
            "correctOptionText": "event.stopImmediatePropagation()",
            "difficulty": "hard",
            "explanation": "event.stopImmediatePropagation() not only prevents the event from bubbling up, but also stops other event handlers on the same element from being executed.",
            "hint": "This is more aggressive than stopPropagation(), as it affects handlers on the current element too."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What property would you check to determine which mouse button was pressed during a mouse event?",
            "options": ["event.mouseButton", "event.which", "event.button", "event.keyCode"],
            "correctOptionIndex": 2,
            "correctOptionText": "event.button",
            "difficulty": "medium",
            "explanation": "event.button returns a number indicating which button was pressed on the mouse (0 for left button, 1 for middle button, 2 for right button).",
            "hint": "This property specifically indicates which physical button on the mouse triggered the event."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "How do you create and dispatch a custom event?",
            "options": [
            "element.createEvent('customEvent'); element.dispatchEvent(customEvent)",
            "new Event('customEvent'); element.dispatchEvent(event)",
            "element.trigger('customEvent')",
            "element.fireEvent('customEvent')"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "new Event('customEvent'); element.dispatchEvent(event)",
            "difficulty": "hard",
            "explanation": "To create and dispatch a custom event, you create a new Event object with the event name, then use the dispatchEvent method on the target element.",
            "hint": "This involves creating an event object and then using a method to trigger it on an element."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "Which event is fired when an element loses focus?",
            "options": ["blur", "unfocus", "focusout", "focuslost"],
            "correctOptionIndex": 0,
            "correctOptionText": "blur",
            "difficulty": "easy",
            "explanation": "The blur event fires when an element has lost focus. The related focusout event is similar but bubbles up the DOM tree.",
            "hint": "This event is often used with form elements to validate input when a user moves away from a field."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is the difference between mouseenter and mouseover events?",
            "options": ["They are identical in all cases", "mouseenter triggers once when entering an element, mouseover triggers on entering the element and its children", "mouseenter bubbles, mouseover does not", "mouseenter is deprecated"],
            "correctOptionIndex": 1,
            "correctOptionText": "mouseenter triggers once when entering an element, mouseover triggers on entering the element and its children",
            "difficulty": "hard",
            "explanation": "The mouseenter event only triggers when the mouse enters the target element. The mouseover event triggers when the mouse enters the target element or any of its children. Additionally, mouseenter doesn't bubble, while mouseover does.",
            "hint": "One of these events can trigger multiple times when moving over child elements."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What does the 'passive' option in addEventListener do?",
            "options": [
            "Makes the event handler silent and not execute any code",
            "Indicates that the listener will not call preventDefault()",
            "Makes the event listener only trigger once",
            "Prevents the event from bubbling"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Indicates that the listener will not call preventDefault()",
            "difficulty": "hard",
            "explanation": "Setting {passive: true} tells the browser that the event handler will not call preventDefault(), allowing the browser to optimize scrolling performance by not waiting for the event handler to complete before scrolling.",
            "hint": "This option is particularly important for touch and wheel events to improve scrolling performance."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "Which event is fired when a user scrolls an element?",
            "options": ["wheel", "scroll", "move", "roll"],
            "correctOptionIndex": 1,
            "correctOptionText": "scroll",
            "difficulty": "easy",
            "explanation": "The scroll event fires when an element's scrollbar is being scrolled. Note that this is different from the wheel event, which fires when the user rotates the mouse wheel.",
            "hint": "This event is named after the actual scrolling action, not the input method used to trigger it."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is the correct way to pass data to an event handler?",
            "options": [
            "element.addEventListener('click', handler(data))",
            "element.addEventListener('click', function() { handler(data); })",
            "element.addEventListener('click', handler, data)",
            "element.addEventListener('click', { handler: handler, data: data })"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "element.addEventListener('click', function() { handler(data); })",
            "difficulty": "medium",
            "explanation": "Using an anonymous function as a wrapper allows you to pass custom parameters to the event handler while still having access to the event object.",
            "hint": "This approach uses closure to maintain access to both the event object and custom data."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "Which event is NOT a keyboard event?",
            "options": ["keydown", "keyup", "keypress", "keypush"],
            "correctOptionIndex": 3,
            "correctOptionText": "keypush",
            "difficulty": "easy",
            "explanation": "The standard keyboard events are keydown, keyup, and keypress. There is no keypush event in JavaScript.",
            "hint": "Three of these are valid keyboard events in the DOM API."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What event is fired when a form is submitted?",
            "options": ["onsubmit", "submit", "formsubmit", "send"],
            "correctOptionIndex": 1,
            "correctOptionText": "submit",
            "difficulty": "easy",
            "explanation": "The submit event fires when a form is submitted, either by clicking a submit button or pressing Enter in certain form fields.",
            "hint": "This event attaches to the form element itself, not to a button."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "Which property returns the key value for keyboard events?",
            "options": ["event.char", "event.keyCode", "event.key", "event.button"],
            "correctOptionIndex": 2,
            "correctOptionText": "event.key",
            "difficulty": "medium",
            "explanation": "event.key returns the value of the key that was pressed. This is the modern property that's recommended over the deprecated keyCode property.",
            "hint": "This modern property returns a string representing the key's value, like 'a' or 'Enter'."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is the difference between change and input events on form fields?",
            "options": [
            "They are identical in functionality",
            "input fires on every character change, change fires when the field loses focus after being modified",
            "change fires on every character change, input fires when the field loses focus",
            "input is for text fields only, change is for all form elements"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "input fires on every character change, change fires when the field loses focus after being modified",
            "difficulty": "medium",
            "explanation": "The input event fires every time the value of an input or textarea element changes. The change event only fires when the field loses focus after its value has been changed.",
            "hint": "One fires immediately with each keystroke, the other waits for the user to complete their entry."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What's the purpose of the once option in addEventListener?",
            "options": [
            "To ensure the event handler executes only once across all elements",
            "To make the event handler fire only for the first instance of the element",
            "To automatically remove the event listener after it has been triggered once",
            "To restrict the event to only one type of input device"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "To automatically remove the event listener after it has been triggered once",
            "difficulty": "medium",
            "explanation": "Setting {once: true} in addEventListener automatically removes the event listener after it has been triggered once, eliminating the need to manually call removeEventListener.",
            "hint": "This option helps prevent memory leaks for one-time events."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "Which event is triggered when a user clicks on an element?",
            "options": ["onclick", "click", "mouseclick", "press"],
            "correctOptionIndex": 1,
            "correctOptionText": "click",
            "difficulty": "easy",
            "explanation": "The click event is triggered when an element is clicked. When using addEventListener, you use 'click' without the 'on' prefix.",
            "hint": "The DOM event name does not include the 'on' prefix used in HTML event attributes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "How can you handle events for elements that will be created in the future?",
            "options": [
            "Use futureEvents() method",
            "Create event listeners in advance and they will automatically apply",
            "Use event delegation by attaching the event to a parent element",
            "Use the deferEvents() method"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Use event delegation by attaching the event to a parent element",
            "difficulty": "medium",
            "explanation": "Event delegation involves attaching a single event listener to a parent element that exists when the page loads. The listener will then handle events for all matching descendants, including those added to the DOM later.",
            "hint": "This technique relies on event bubbling to work effectively."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What's the difference between load and DOMContentLoaded events?",
            "options": [
            "They are identical in functionality",
            "load fires when the entire page including assets is loaded, DOMContentLoaded fires when the HTML is fully parsed",
            "DOMContentLoaded fires when the entire page including assets is loaded, load fires when the HTML is fully parsed",
            "load is for images, DOMContentLoaded is for scripts"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "load fires when the entire page including assets is loaded, DOMContentLoaded fires when the HTML is fully parsed",
            "difficulty": "medium",
            "explanation": "The DOMContentLoaded event fires when the HTML document has been completely loaded and parsed, while the load event fires when the whole page has loaded, including all dependent resources such as stylesheets, scripts, and images.",
            "hint": "One waits for just the DOM structure, the other waits for everything."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is the EventTarget interface?",
            "options": [
            "A specific HTML element that events are focused on",
            "An interface implemented by objects that can receive events and have listeners",
            "A targeting system for sending events to specific elements",
            "A deprecated part of the DOM API"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "An interface implemented by objects that can receive events and have listeners",
            "difficulty": "hard",
            "explanation": "EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them. Element, Document, and Window are the most common event targets, but other objects like XMLHttpRequest also implement this interface.",
            "hint": "This is the fundamental interface that allows DOM objects to handle events."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What properties can be used to get the mouse coordinates during a mouse event?",
            "options": [
            "event.x and event.y",
            "event.mouseX and event.mouseY",
            "event.clientX and event.clientY",
            "event.coordinates.x and event.coordinates.y"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "event.clientX and event.clientY",
            "difficulty": "medium",
            "explanation": "event.clientX and event.clientY properties return the horizontal and vertical coordinates of the mouse pointer relative to the viewport when the event was triggered.",
            "hint": "These properties give coordinates relative to the client area (viewport)."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What happens if you call event.preventDefault() on a custom event?",
            "options": [
            "The event is canceled completely",
            "Nothing, as custom events don't have default actions",
            "It throws an error",
            "The event is prevented from bubbling"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Nothing, as custom events don't have default actions",
            "difficulty": "hard",
            "explanation": "Custom events don't have default actions associated with them, so calling preventDefault() on a custom event has no effect. Default actions only exist for standard browser events like clicking a link or submitting a form.",
            "hint": "Default actions are behaviors built into the browser for standard events."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Events & Event Handling",
            "questionText": "What is the correct way to check if an event is cancelable?",
            "options": [
            "event.isCancelable",
            "event.cancelable",
            "event.canCancel",
            "event.preventable"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "event.cancelable",
            "difficulty": "hard",
            "explanation": "The event.cancelable property returns a Boolean indicating whether the event can be canceled using preventDefault(). Some events, like the focus event, cannot be canceled.",
            "hint": "This property helps determine if calling preventDefault() would have any effect."
        }, 
       // Asynchronous JavaScript
       {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the main purpose of using asynchronous code in JavaScript?",
            "options": [
            "To make code execution faster",
            "To prevent blocking the main thread during time-consuming operations",
            "To reduce memory usage",
            "To organize code better"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "To prevent blocking the main thread during time-consuming operations",
            "difficulty": "easy",
            "explanation": "Asynchronous code allows time-consuming operations (like network requests or file operations) to run in the background without blocking the main thread, keeping the user interface responsive.",
            "hint": "Think about why a single-threaded language would need a way to handle operations that take time."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "Which of the following is NOT a way to handle asynchronous operations in JavaScript?",
            "options": [
            "Callbacks",
            "Promises",
            "Async/await",
            "For-await loops"
            ],
            "correctOptionIndex": 3,
            "correctOptionText": "For-await loops",
            "difficulty": "medium",
            "explanation": "While 'for-await-of' loops exist for iterating over async iterables, 'for-await loops' is not a standard pattern for handling asynchronous operations. The three main patterns are callbacks, promises, and async/await.",
            "hint": "Three options are common patterns for handling asynchronous code, one is not a standard term."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is a callback function in JavaScript?",
            "options": [
            "A function that calls itself recursively",
            "A function passed as an argument to another function to be executed later",
            "A function that returns another function",
            "A function that handles errors"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A function passed as an argument to another function to be executed later",
            "difficulty": "easy",
            "explanation": "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action, often after an asynchronous operation completes.",
            "hint": "It's called a 'callback' because it gets 'called back' at a later time."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is callback hell?",
            "options": [
            "When callbacks create memory leaks",
            "When callbacks throw uncaught exceptions",
            "When callbacks are deeply nested within each other, creating unreadable code",
            "When callbacks execute too slowly"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "When callbacks are deeply nested within each other, creating unreadable code",
            "difficulty": "medium",
            "explanation": "Callback hell (also known as 'pyramid of doom') refers to heavily nested callbacks that make code difficult to read and maintain. It occurs when multiple asynchronous operations depend on each other.",
            "hint": "It's a readability and maintainability problem with deeply nested code."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is a Promise in JavaScript?",
            "options": [
            "A guarantee that a function will execute successfully",
            "A placeholder for a future value that may be available asynchronously",
            "A way to make synchronous code run faster",
            "A special function that always returns a value"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A placeholder for a future value that may be available asynchronously",
            "difficulty": "easy",
            "explanation": "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It serves as a placeholder for a value not yet available but may be available in the future.",
            "hint": "It represents a value that isn't available yet but will be resolved at some point."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What are the possible states of a Promise?",
            "options": [
            "active, complete, failed",
            "running, finished, error",
            "pending, fulfilled, rejected",
            "waiting, resolved, unresolved"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "pending, fulfilled, rejected",
            "difficulty": "medium",
            "explanation": "A Promise can be in one of three states: pending (initial state, neither fulfilled nor rejected), fulfilled (operation completed successfully), or rejected (operation failed).",
            "hint": "These states reflect the lifecycle of an asynchronous operation from start to either success or failure."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "Which method is used to handle successful Promise resolution?",
            "options": [
            "Promise.success()",
            "Promise.then()",
            "Promise.resolve()",
            "Promise.done()"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Promise.then()",
            "difficulty": "easy",
            "explanation": "The then() method is used to schedule a callback to be executed when the Promise is successfully resolved (fulfilled).",
            "hint": "This method is part of the Promise chaining syntax."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "Which method is used to handle Promise rejection?",
            "options": [
            "Promise.error()",
            "Promise.fail()",
            "Promise.catch()",
            "Promise.reject()"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Promise.catch()",
            "difficulty": "easy",
            "explanation": "The catch() method is used to schedule a callback to be executed when the Promise is rejected (an error occurs).",
            "hint": "This method is commonly used to handle errors in Promise chains."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What does the Promise.all() method do?",
            "options": [
            "Waits for all promises to resolve and returns an array of their results",
            "Creates a new promise that resolves when any of the input promises resolves",
            "Waits for the first promise to resolve or reject",
            "Executes all promises simultaneously"
            ],
            "correctOptionIndex": 0,
            "correctOptionText": "Waits for all promises to resolve and returns an array of their results",
            "difficulty": "medium",
            "explanation": "Promise.all() takes an array of promises and returns a new promise that resolves when all input promises have resolved, with an array of their results. If any promise rejects, the returned promise rejects immediately.",
            "hint": "It's useful when you need results from multiple asynchronous operations before proceeding."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What does the Promise.race() method do?",
            "options": [
            "Runs promises in parallel and returns all results",
            "Returns a promise that resolves or rejects as soon as one of the input promises resolves or rejects",
            "Executes promises in sequence",
            "Compares the execution speed of multiple promises"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Returns a promise that resolves or rejects as soon as one of the input promises resolves or rejects",
            "difficulty": "medium",
            "explanation": "Promise.race() takes an array of promises and returns a new promise that resolves or rejects as soon as one of the input promises resolves or rejects, with the value or reason from that promise.",
            "hint": "As the name suggests, it's like a race where only the first one to finish matters."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the purpose of the async keyword in JavaScript?",
            "options": [
            "To make a function run in a separate thread",
            "To mark a function as asynchronous and ensure it returns a Promise",
            "To improve performance of synchronous code",
            "To prevent functions from being called simultaneously"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "To mark a function as asynchronous and ensure it returns a Promise",
            "difficulty": "medium",
            "explanation": "The async keyword is used to declare an asynchronous function. It automatically ensures that the function returns a Promise, and allows the use of await inside the function.",
            "hint": "It's a way to define functions that work with Promises in a more straightforward syntax."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What does the await keyword do in an async function?",
            "options": [
            "Pauses the execution of the entire program until the Promise resolves",
            "Pauses the execution of the async function until the Promise resolves",
            "Speeds up the execution of asynchronous code",
            "Forces synchronous execution of all code"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Pauses the execution of the async function until the Promise resolves",
            "difficulty": "medium",
            "explanation": "The await keyword pauses the execution of an async function until the Promise is resolved or rejected, and returns the resolved value. It only affects the execution within the async function, not the entire program.",
            "hint": "It makes asynchronous code look and behave more like synchronous code within the async function."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What happens if you use await outside of an async function?",
            "options": [
            "It works the same as inside an async function",
            "It causes a syntax error",
            "It's ignored and the code continues executing",
            "It creates an implicit async function"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "It causes a syntax error",
            "difficulty": "medium",
            "explanation": "Using await outside of an async function will cause a syntax error. The await keyword can only be used inside functions declared with the async keyword (except in JavaScript modules where top-level await is supported).",
            "hint": "await and async are designed to work together - you can't use one without the other."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the main advantage of using async/await over Promise chains?",
            "options": [
            "It's faster",
            "It uses less memory",
            "It makes asynchronous code look more like synchronous code, improving readability",
            "It allows handling multiple promises simultaneously"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "It makes asynchronous code look more like synchronous code, improving readability",
            "difficulty": "medium",
            "explanation": "The main advantage of async/await is improved readability and cleaner code. It allows asynchronous code to be written in a way that looks similar to synchronous code, making it easier to understand the flow of execution.",
            "hint": "Think about how error handling and code structure look with async/await compared to promise chains."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "How do you handle errors with async/await?",
            "options": [
            "Using Promise.catch()",
            "Using try/catch blocks",
            "Using if/else statements",
            "Using error events"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Using try/catch blocks",
            "difficulty": "medium",
            "explanation": "With async/await, you can handle errors using traditional try/catch blocks. If a promise rejects, the await expression throws an exception that can be caught with try/catch.",
            "hint": "This is one of the advantages of async/await - it allows using familiar error handling patterns."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the Event Loop in JavaScript?",
            "options": [
            "A data structure that stores all events",
            "A mechanism that executes code in parallel",
            "A mechanism that monitors the Call Stack and executes queued asynchronous operations when the stack is empty",
            "A loop that continuously checks for user interaction"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "A mechanism that monitors the Call Stack and executes queued asynchronous operations when the stack is empty",
            "difficulty": "hard",
            "explanation": "The Event Loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It monitors the Call Stack and, when it's empty, takes the first event from the queue and pushes it onto the Call Stack, which effectively runs it.",
            "hint": "It's what allows JavaScript to handle asynchronous operations in a single-threaded environment."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the purpose of setTimeout()?",
            "options": [
            "To pause code execution for a specified time",
            "To schedule a function to run after a minimum delay",
            "To set a maximum execution time for a function",
            "To improve performance of slow functions"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "To schedule a function to run after a minimum delay",
            "difficulty": "easy",
            "explanation": "setTimeout() schedules a function to run after a minimum delay (in milliseconds). It doesn't guarantee that the function will run exactly after the specified delay, but rather that it won't run before that time has elapsed.",
            "hint": "It adds a task to be executed after a specified amount of time has passed."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What would happen if you call setTimeout(fn, 0)?",
            "options": [
            "The function fn would execute immediately",
            "The function fn would never execute",
            "The function fn would be scheduled to run as soon as the Call Stack is empty",
            "The function fn would cause an error"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "The function fn would be scheduled to run as soon as the Call Stack is empty",
            "difficulty": "hard",
            "explanation": "setTimeout(fn, 0) schedules the function to run as soon as possible, but only after the current execution context has finished and the Call Stack is empty. It effectively defers the execution until the next event cycle.",
            "hint": "Even with a delay of 0, the function still goes through the event queue."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the fetch API used for?",
            "options": [
            "To fetch data from local storage",
            "To fetch elements from the DOM",
            "To make HTTP requests to servers",
            "To fetch data from databases"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "To make HTTP requests to servers",
            "difficulty": "easy",
            "explanation": "The fetch API is used to make HTTP requests to servers. It provides a more powerful and flexible feature set than older APIs like XMLHttpRequest.",
            "hint": "It's a modern way to make network requests in JavaScript."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What does the fetch API return?",
            "options": [
            "The requested data",
            "A Promise",
            "An HTTP response object",
            "A callback function"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A Promise",
            "difficulty": "medium",
            "explanation": "The fetch API returns a Promise that resolves to the Response object representing the response to the request. To get the actual data, you need to call methods like json() or text() on the Response object, which also return Promises.",
            "hint": "It uses JavaScript's Promise-based asynchronous pattern."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the difference between setTimeout and setInterval?",
            "options": [
            "setTimeout executes once, setInterval executes repeatedly",
            "setTimeout is synchronous, setInterval is asynchronous",
            "setTimeout has a delay, setInterval doesn't",
            "setTimeout is for functions, setInterval is for methods"
            ],
            "correctOptionIndex": 0,
            "correctOptionText": "setTimeout executes once, setInterval executes repeatedly",
            "difficulty": "easy",
            "explanation": "setTimeout schedules a function to run once after a delay, while setInterval schedules a function to run repeatedly at specified intervals until cleared.",
            "hint": "One is for a single delayed execution, the other for repeated executions."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the main purpose of the Promise.allSettled() method?",
            "options": [
            "To wait for all promises to resolve successfully",
            "To wait for all promises to complete (either resolve or reject) and get their results",
            "To wait for the first promise to resolve",
            "To settle disputes between competing promises"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "To wait for all promises to complete (either resolve or reject) and get their results",
            "difficulty": "hard",
            "explanation": "Promise.allSettled() takes an array of promises and returns a new promise that resolves when all input promises have settled (either resolved or rejected). The result is an array of objects describing the outcome of each promise.",
            "hint": "Unlike Promise.all(), it doesn't reject if some promises fail - it waits for all to finish in any state."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What does the Promise.any() method do?",
            "options": [
            "Returns a promise that resolves as soon as any of the input promises resolves",
            "Returns a promise that resolves if any of the input promises resolves, otherwise rejects",
            "Returns a promise that resolves if all input promises resolve",
            "Returns the first promise in the input array"
            ],
            "correctOptionIndex": 0,
            "correctOptionText": "Returns a promise that resolves as soon as any of the input promises resolves",
            "difficulty": "hard",
            "explanation": "Promise.any() takes an array of promises and returns a new promise that resolves as soon as one of the input promises resolves, with the value from that promise. If all promises reject, it rejects with an AggregateError.",
            "hint": "It's useful when you need a result from any successful promise and don't care which one."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the main difference between Promise.race() and Promise.any()?",
            "options": [
            "Promise.race() considers both resolutions and rejections, Promise.any() only considers resolutions",
            "Promise.race() waits for all promises, Promise.any() waits for the first one",
            "Promise.race() is faster than Promise.any()",
            "Promise.race() works with any iterable, Promise.any() only works with arrays"
            ],
            "correctOptionIndex": 0,
            "correctOptionText": "Promise.race() considers both resolutions and rejections, Promise.any() only considers resolutions",
            "difficulty": "hard",
            "explanation": "Promise.race() settles as soon as any promise settles, whether it's resolved or rejected. Promise.any() resolves as soon as any promise resolves, ignoring rejections unless all promises reject.",
            "hint": "One reacts to the first settlement of any kind, the other only cares about successful resolutions."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the microtask queue in JavaScript?",
            "options": [
            "A queue for small, unimportant tasks",
            "A queue for Promise callbacks that has higher priority than the task queue",
            "A queue for setTimeout and setInterval callbacks",
            "A queue for browser rendering tasks"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A queue for Promise callbacks that has higher priority than the task queue",
            "difficulty": "hard",
            "explanation": "The microtask queue is a queue that holds microtasks (like Promise callbacks) that should be executed after the current task completes but before the next task from the task queue is processed. It has higher priority than the task queue (macrotask queue).",
            "hint": "It's where Promise resolution callbacks are queued, with higher priority than setTimeout callbacks."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What's the difference between synchronous and asynchronous code?",
            "options": [
            "Synchronous code runs faster than asynchronous code",
            "Synchronous code executes line by line, while asynchronous code can defer execution",
            "Synchronous code uses less memory than asynchronous code",
            "Synchronous code is more modern than asynchronous code"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Synchronous code executes line by line, while asynchronous code can defer execution",
            "difficulty": "easy",
            "explanation": "Synchronous code executes sequentially, line by line, blocking further execution until the current line completes. Asynchronous code allows operations to be scheduled for later execution, enabling the program to continue running without waiting for the operation to complete.",
            "hint": "One blocks execution while waiting, the other allows other code to run during waiting periods."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the purpose of the finally() method in a Promise chain?",
            "options": [
            "To handle the final value of a promise",
            "To execute code regardless of whether the promise was resolved or rejected",
            "To finalize the promise and prevent further chaining",
            "To optimize the performance of the promise chain"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "To execute code regardless of whether the promise was resolved or rejected",
            "difficulty": "medium",
            "explanation": "The finally() method is used to specify a callback function that will be executed when the Promise is settled, regardless of whether it was fulfilled or rejected. It's useful for cleanup operations that should be performed in either case.",
            "hint": "It's similar to the finally block in try/catch/finally."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the purpose of the AbortController in fetch requests?",
            "options": [
            "To abort the program if a fetch request fails",
            "To automatically retry failed fetch requests",
            "To provide a way to cancel fetch requests",
            "To control the timeout of fetch requests"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "To provide a way to cancel fetch requests",
            "difficulty": "hard",
            "explanation": "The AbortController interface allows you to abort fetch requests when they are no longer needed. It's useful for canceling requests when a user navigates away from a page or when the data is no longer required.",
            "hint": "It provides a mechanism to cancel in-flight network requests."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What is the purpose of async generators and the for-await-of loop?",
            "options": [
            "To create synchronous code that looks asynchronous",
            "To iterate over promises in a sequential manner",
            "To iterate over asynchronously generated values",
            "To create infinite loops without blocking the main thread"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "To iterate over asynchronously generated values",
            "difficulty": "hard",
            "explanation": "Async generators (functions declared with async function* syntax) produce promises for yielded values. The for-await-of loop allows you to iterate over these asynchronously generated values or other async iterables, waiting for each promise to resolve before proceeding to the next iteration.",
            "hint": "They allow for asynchronous iteration with a syntax similar to synchronous iteration."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What happens if an error is thrown in an async function without a try/catch block?",
            "options": [
            "The function returns undefined",
            "The function continues executing from the next line",
            "The returned promise is rejected with the thrown error",
            "The error is silently ignored"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "The returned promise is rejected with the thrown error",
            "difficulty": "medium",
            "explanation": "If an error is thrown in an async function and not caught with a try/catch block, the promise returned by the async function will be rejected with the thrown error. This allows errors to be handled with catch() in promise chains or with try/catch when using await.",
            "hint": "Errors in async functions are propagated through the promise system."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Asynchronous JavaScript",
            "questionText": "What does the statement 'JavaScript is single-threaded' mean?",
            "options": [
            "JavaScript can only run one process at a time",
            "JavaScript can only execute one statement at a time on a single call stack",
            "JavaScript can only run in one browser tab at a time",
            "JavaScript applications can only use a single CPU core"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "JavaScript can only execute one statement at a time on a single call stack",
            "difficulty": "medium",
            "explanation": "JavaScript is single-threaded means that it has a single call stack and can only execute one piece of code at a time. This is why asynchronous programming patterns are important - they allow operations to be scheduled for later execution without blocking the main thread.",
            "hint": "It's about how JavaScript executes code, not about processes or applications."
        },
        // JavaScript Object-Oriented Programming
        
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the syntax for creating a constructor function in JavaScript?",
            "options": ["function MyClass() {}", "class MyClass {}", "const MyClass = function() {}", "new Function('MyClass')"],
            "correctOptionIndex": 0,
            "correctOptionText": "function MyClass() {}",
            "difficulty": "easy",
            "explanation": "Constructor functions in JavaScript traditionally use the function keyword with PascalCase naming convention.",
            "hint": "Think about traditional function declarations with a capital letter naming convention."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "How do you create an instance of a class in JavaScript?",
            "options": ["class.create()", "new class()", "instance(class)", "class.instance()"],
            "correctOptionIndex": 1,
            "correctOptionText": "new class()",
            "difficulty": "easy",
            "explanation": "The 'new' keyword is used to create instances of both classes and constructor functions in JavaScript.",
            "hint": "Which keyword instantiates objects from a class blueprint?"
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the purpose of the 'prototype' property in JavaScript?",
            "options": ["To create private variables", "To share methods and properties among instances", "To define static methods", "To implement interfaces"],
            "correctOptionIndex": 1,
            "correctOptionText": "To share methods and properties among instances",
            "difficulty": "medium",
            "explanation": "The prototype property allows objects to inherit methods and properties from other objects, enabling method sharing across instances.",
            "hint": "It helps with inheritance and memory efficiency by allowing objects to share functionality."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the 'this' keyword referring to in a JavaScript class method?",
            "options": ["The class itself", "The method function", "The instance of the class", "The global window object"],
            "correctOptionIndex": 2,
            "correctOptionText": "The instance of the class",
            "difficulty": "medium",
            "explanation": "In a class method, 'this' refers to the instance of the class that the method is called on.",
            "hint": "It refers to the object that is executing the current function."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "Which of the following is NOT a valid way to create an object in JavaScript?",
            "options": ["Object literal: {}", "Constructor function with new", "Object.create()", "Object.instance()"],
            "correctOptionIndex": 3,
            "correctOptionText": "Object.instance()",
            "difficulty": "easy",
            "explanation": "Object.instance() is not a valid JavaScript method. Valid ways include object literals, constructor functions with 'new', and Object.create().",
            "hint": "Look for the method that doesn't exist in JavaScript's object creation mechanisms."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the proper way to implement inheritance with ES6 classes?",
            "options": ["class Child inherits Parent {}", "class Child implements Parent {}", "class Child extends Parent {}", "class Child : Parent {}"],
            "correctOptionIndex": 2,
            "correctOptionText": "class Child extends Parent {}",
            "difficulty": "medium",
            "explanation": "The 'extends' keyword is used in ES6 classes to create a child class that inherits from a parent class.",
            "hint": "Which keyword establishes a parent-child relationship between classes?"
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the purpose of the 'super' keyword in a JavaScript class?",
            "options": ["To access static methods", "To call the parent class constructor and methods", "To create super-powered methods", "To override parent methods"],
            "correctOptionIndex": 1,
            "correctOptionText": "To call the parent class constructor and methods",
            "difficulty": "medium",
            "explanation": "The 'super' keyword is used to call corresponding methods or the constructor of the parent class.",
            "hint": "It's used to access and call functions on an object's parent."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "Which method is automatically called when an object is created from a class?",
            "options": ["init()", "constructor()", "create()", "build()"],
            "correctOptionIndex": 1,
            "correctOptionText": "constructor()",
            "difficulty": "easy",
            "explanation": "The constructor() method is automatically called when a new instance of a class is created.",
            "hint": "This special method initializes properties when an object is instantiated."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the difference between 'Object.create()' and the 'new' operator?",
            "options": ["They are exactly the same", "Object.create() allows specifying property descriptors", "new is only for ES6 classes", "Object.create() doesn't use prototypes"],
            "correctOptionIndex": 1,
            "correctOptionText": "Object.create() allows specifying property descriptors",
            "difficulty": "hard",
            "explanation": "Object.create() creates a new object with the specified prototype object and can optionally contain specified property descriptors. The 'new' operator doesn't allow this level of customization.",
            "hint": "One method provides more granular control over object properties than the other."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "How do you check if an object is an instance of a particular class?",
            "options": ["object.isInstanceOf(Class)", "object === Class", "object instanceof Class", "Class.hasInstance(object)"],
            "correctOptionIndex": 2,
            "correctOptionText": "object instanceof Class",
            "difficulty": "medium",
            "explanation": "The 'instanceof' operator tests whether an object has in its prototype chain the prototype property of the specified constructor.",
            "hint": "There's a specific operator for checking the prototype chain relationship."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the output of: 'function Person() {}; Person.prototype.name = \"John\"; var p = new Person(); console.log(p.name);'?",
            "options": ["undefined", "null", "\"John\"", "Error"],
            "correctOptionIndex": 2,
            "correctOptionText": "\"John\"",
            "difficulty": "medium",
            "explanation": "The property 'name' is defined on the Person prototype, so all instances of Person will inherit this property with the value \"John\".",
            "hint": "Properties defined on the prototype are shared among all instances."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What are static methods in JavaScript classes?",
            "options": ["Methods that can't be changed", "Methods that are called on the class itself, not on instances", "Methods that are defined outside the class", "Methods that only run once"],
            "correctOptionIndex": 1,
            "correctOptionText": "Methods that are called on the class itself, not on instances",
            "difficulty": "medium",
            "explanation": "Static methods are defined on the class itself and not on instances. They are called using the class name rather than on instances.",
            "hint": "These methods belong to the class template, not to individual objects created from the class."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the correct way to define a private field in a JavaScript class (ES2022)?",
            "options": ["private fieldName;", "let fieldName;", "#fieldName;", "this._fieldName;"],
            "correctOptionIndex": 2,
            "correctOptionText": "#fieldName;",
            "difficulty": "hard",
            "explanation": "In modern JavaScript (ES2022), private fields are defined using the # prefix, making them truly private and not accessible outside the class.",
            "hint": "The newest JavaScript standard introduced a special syntax for truly private fields."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the result of 'Object.getPrototypeOf({})'?",
            "options": ["null", "undefined", "Object.prototype", "{}"],
            "correctOptionIndex": 2,
            "correctOptionText": "Object.prototype",
            "difficulty": "medium",
            "explanation": "Object.getPrototypeOf({}) returns the prototype of an empty object, which is Object.prototype.",
            "hint": "Every object created with literal notation has a built-in prototype."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the main difference between classical inheritance and prototypal inheritance?",
            "options": ["Classical inheritance uses 'extends', prototypal uses 'prototype'", "Classical inheritance is class-based, prototypal is object-based", "Classical inheritance is in JavaScript, prototypal is in Java", "There is no difference"],
            "correctOptionIndex": 1,
            "correctOptionText": "Classical inheritance is class-based, prototypal is object-based",
            "difficulty": "hard",
            "explanation": "Classical inheritance is class-based where classes inherit from other classes. Prototypal inheritance is object-based where objects inherit directly from other objects.",
            "hint": "Think about what the core building block is in each inheritance model."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the purpose of the 'get' and 'set' keywords in JavaScript classes?",
            "options": ["To make properties private", "To define getter and setter methods", "To restrict property access", "To optimize performance"],
            "correctOptionIndex": 1,
            "correctOptionText": "To define getter and setter methods",
            "difficulty": "medium",
            "explanation": "The 'get' and 'set' keywords define getter and setter methods that allow you to control access to a class property.",
            "hint": "They allow you to execute code when property values are accessed or modified."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What pattern is used to implement private variables in pre-ES2022 JavaScript?",
            "options": ["Module pattern", "Singleton pattern", "Factory pattern", "Closure pattern"],
            "correctOptionIndex": 0,
            "correctOptionText": "Module pattern",
            "difficulty": "hard",
            "explanation": "The Module pattern uses closures to encapsulate private variables and methods, allowing controlled access through public methods.",
            "hint": "This pattern encapsulates functionality and creates a private scope."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the correct way to call a parent class's constructor from a child class?",
            "options": ["this.parent()", "Parent.call(this)", "super()", "this.super()"],
            "correctOptionIndex": 2,
            "correctOptionText": "super()",
            "difficulty": "medium",
            "explanation": "In ES6 classes, 'super()' is used in the constructor of a child class to call the constructor of the parent class.",
            "hint": "ES6 introduced a specific keyword for this purpose."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the main purpose of the 'Object.freeze()' method?",
            "options": ["To prevent an object from being garbage collected", "To make an object immutable", "To store an object in memory", "To optimize object performance"],
            "correctOptionIndex": 1,
            "correctOptionText": "To make an object immutable",
            "difficulty": "medium",
            "explanation": "Object.freeze() makes an object immutable, preventing new properties from being added and existing properties from being modified or removed.",
            "hint": "It's related to preventing changes to an object's state."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "Which of the following is NOT a principle of Object-Oriented Programming?",
            "options": ["Encapsulation", "Inheritance", "Polymorphism", "Concatenation"],
            "correctOptionIndex": 3,
            "correctOptionText": "Concatenation",
            "difficulty": "easy",
            "explanation": "Concatenation is not a principle of Object-Oriented Programming. The main principles are Encapsulation, Inheritance, Polymorphism, and Abstraction.",
            "hint": "Look for the term that doesn't belong with the core OOP concepts."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What design pattern is used when you need only one instance of a class throughout the application?",
            "options": ["Factory pattern", "Singleton pattern", "Observer pattern", "Decorator pattern"],
            "correctOptionIndex": 1,
            "correctOptionText": "Singleton pattern",
            "difficulty": "medium",
            "explanation": "The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.",
            "hint": "This pattern restricts instantiation to a single instance."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the output of: 'let obj = {}; Object.setPrototypeOf(obj, null); console.log(obj.toString());'?",
            "options": ["\"[object Object]\"", "undefined", "\"\"", "TypeError"],
            "correctOptionIndex": 3,
            "correctOptionText": "TypeError",
            "difficulty": "hard",
            "explanation": "Setting the prototype to null removes all inherited methods, including toString(). Trying to call toString() on an object with no prototype will throw a TypeError.",
            "hint": "When you remove the prototype chain, what happens to inherited methods?"
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is 'Composition' in JavaScript?",
            "options": ["Creating objects from multiple classes", "Inheriting from multiple classes", "Building complex objects by combining simpler objects", "Using the 'compose' keyword"],
            "correctOptionIndex": 2,
            "correctOptionText": "Building complex objects by combining simpler objects",
            "difficulty": "hard",
            "explanation": "Composition is a design principle where complex objects are built by combining simpler objects or behaviors, rather than through inheritance.",
            "hint": "Think about building functionality by combining smaller, focused parts."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the output of: 'console.log(typeof Object.prototype);'?",
            "options": ["\"prototype\"", "\"object\"", "\"function\"", "\"class\""],
            "correctOptionIndex": 1,
            "correctOptionText": "\"object\"",
            "difficulty": "medium",
            "explanation": "Object.prototype is an object that serves as the base prototype for all JavaScript objects.",
            "hint": "What is the fundamental type of all prototypes in JavaScript?"
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the 'instanceof' operator used for?",
            "options": ["Checking if an object is an instance of a class", "Creating new instances", "Checking if a property exists", "Comparing two objects"],
            "correctOptionIndex": 0,
            "correctOptionText": "Checking if an object is an instance of a class",
            "difficulty": "easy",
            "explanation": "The 'instanceof' operator tests whether an object has in its prototype chain the prototype property of a constructor.",
            "hint": "It verifies the relationship between an object and a constructor function."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the purpose of the 'Object.defineProperty()' method?",
            "options": ["To create a new object", "To define a new property or modify an existing one with precise control", "To delete a property", "To list all properties of an object"],
            "correctOptionIndex": 1,
            "correctOptionText": "To define a new property or modify an existing one with precise control",
            "difficulty": "medium",
            "explanation": "Object.defineProperty() allows defining a new property or modifying an existing one with detailed control over its behavior, including configurability, enumerability, and writability.",
            "hint": "It provides granular control over property attributes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the correct way to implement a method in an ES6 class?",
            "options": ["myMethod = function() {}", "function myMethod() {}", "myMethod() {}", "var myMethod = () => {}"],
            "correctOptionIndex": 2,
            "correctOptionText": "myMethod() {}",
            "difficulty": "easy",
            "explanation": "In ES6 classes, methods are defined using the concise method syntax: methodName() {}.",
            "hint": "ES6 classes use a shorter syntax for defining methods than traditional function expressions."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the main purpose of the 'Object.assign()' method?",
            "options": ["To create a deep copy of an object", "To copy enumerable properties from source objects to a target object", "To assign a new prototype to an object", "To create a new class"],
            "correctOptionIndex": 1,
            "correctOptionText": "To copy enumerable properties from source objects to a target object",
            "difficulty": "medium",
            "explanation": "Object.assign() copies all enumerable own properties from one or more source objects to a target object and returns the modified target object.",
            "hint": "It's commonly used for merging objects or creating shallow copies."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the output of: 'function Person() {} Person.prototype = { name: \"John\" }; var p = new Person(); console.log(p.constructor === Person);'?",
            "options": ["true", "false", "undefined", "Error"],
            "correctOptionIndex": 1,
            "correctOptionText": "false",
            "difficulty": "hard",
            "explanation": "By overwriting the prototype completely, the constructor property is lost and no longer points to Person. It now points to Object instead.",
            "hint": "Think about what happens to the constructor property when you completely replace the prototype object."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Object-Oriented Programming",
            "questionText": "What is the main difference between JavaScript's prototypal inheritance and classical inheritance found in languages like Java?",
            "options": ["JavaScript uses 'extends', Java uses 'implements'", "JavaScript inherits from objects, while classical languages inherit from classes", "JavaScript doesn't support inheritance", "There is no difference"],
            "correctOptionIndex": 1,
            "correctOptionText": "JavaScript inherits from objects, while classical languages inherit from classes",
            "difficulty": "hard",
            "explanation": "JavaScript uses prototypal inheritance where objects inherit directly from other objects. Classical inheritance in languages like Java is class-based, where classes inherit from other classes.",
            "hint": "Consider the fundamental building blocks in each inheritance model."
        }
        
          
        
        
              

      ]


  export default JSQuestions;
