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
        },
        // ES6+ Fearures
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the correct syntax for an arrow function in JavaScript?",
            "options": ["function() => {}", "() => {}", "=> () {}", "function => (){}"],
            "correctOptionIndex": 1,
            "correctOptionText": "() => {}",
            "difficulty": "easy",
            "explanation": "Arrow functions are written as `(parameters) => { statements }` or `(parameters) => expression` for implicit returns.",
            "hint": "Arrow functions provide a concise syntax compared to traditional function expressions."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "Which ES6 feature allows you to extract values from objects and arrays?",
            "options": ["Spreading", "Destructuring", "Template literals", "Rest parameters"],
            "correctOptionIndex": 1,
            "correctOptionText": "Destructuring",
            "difficulty": "easy",
            "explanation": "Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.",
            "hint": "It provides a way to extract multiple values from data stored in objects and arrays with a single assignment."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What does the spread operator (`...`) do when used with an array?",
            "options": ["Joins arrays together", "Expands an array into individual elements", "Creates a copy of the array", "All of the above"],
            "correctOptionIndex": 3,
            "correctOptionText": "All of the above",
            "difficulty": "medium",
            "explanation": "The spread operator can be used to expand arrays into individual elements, create copies of arrays, and join multiple arrays together.",
            "hint": "Think about how the spread operator 'spreads out' the contents of an array."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "Which ES6 declaration creates a constant whose value cannot be reassigned?",
            "options": ["var", "let", "const", "def"],
            "correctOptionIndex": 2,
            "correctOptionText": "const",
            "difficulty": "easy",
            "explanation": "`const` declares variables with a constant reference, meaning once assigned, the variable identifier cannot be reassigned.",
            "hint": "While the reference cannot change, the contents of objects and arrays declared with this keyword can still be modified."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What's the output of: `const [a, ...rest] = [1, 2, 3, 4]`; `console.log(rest);`?",
            "options": ["[1]", "[2, 3, 4]", "2", "Error"],
            "correctOptionIndex": 1,
            "correctOptionText": "[2, 3, 4]",
            "difficulty": "medium",
            "explanation": "The rest parameter syntax collects all remaining elements into a new array. Here, `a` gets assigned the value 1, and `rest` collects the remaining values [2, 3, 4].",
            "hint": "The rest operator gathers the 'rest' of the elements after destructuring assignment."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the main benefit of using template literals in JavaScript?",
            "options": ["They run faster than string concatenation", "They allow for multiline strings and easy string interpolation", "They automatically escape HTML", "They convert all variables to strings"],
            "correctOptionIndex": 1,
            "correctOptionText": "They allow for multiline strings and easy string interpolation",
            "difficulty": "easy",
            "explanation": "Template literals make it easier to create multiline strings and to include variables directly within a string using `${variable}` syntax.",
            "hint": "Template literals are enclosed by backticks (`) instead of quotes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "Which ES6 feature allows us to define function parameters with default values?",
            "options": ["Optional parameters", "Default parameters", "Fallback parameters", "Auto-assign parameters"],
            "correctOptionIndex": 1,
            "correctOptionText": "Default parameters",
            "difficulty": "easy",
            "explanation": "Default parameters allow function parameters to be initialized with default values if no value or `undefined` is passed.",
            "hint": "This feature helps avoid manually checking for undefined values inside the function body."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "How do you create a class in ES6?",
            "options": ["Using the `prototype` keyword", "Using the `class` keyword", "Using the `object` keyword", "Using the `function` keyword with `new`"],
            "correctOptionIndex": 1,
            "correctOptionText": "Using the `class` keyword",
            "difficulty": "easy",
            "explanation": "ES6 introduced the `class` keyword as syntactic sugar over JavaScript's existing prototype-based inheritance.",
            "hint": "This feature makes object-oriented programming in JavaScript more intuitive for developers coming from class-based languages."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the purpose of the `Map` object introduced in ES6?",
            "options": ["To transform arrays with a callback function", "To store key-value pairs where keys can be of any type", "To apply the same function to all elements of an array", "To map DOM elements to event handlers"],
            "correctOptionIndex": 1,
            "correctOptionText": "To store key-value pairs where keys can be of any type",
            "difficulty": "medium",
            "explanation": "The `Map` object stores key-value pairs where keys can be any data type, unlike regular objects where keys are limited to strings and symbols.",
            "hint": "Map objects also maintain insertion order and provide methods like `get()`, `set()`, `has()`, and `delete()`."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the main advantage of using a `Set` object over an array?",
            "options": ["Sets are faster than arrays", "Sets automatically store values in sorted order", "Sets only store unique values", "Sets can hold more elements than arrays"],
            "correctOptionIndex": 2,
            "correctOptionText": "Sets only store unique values",
            "difficulty": "medium",
            "explanation": "A `Set` object stores unique values of any type. When adding a value that already exists in the set, it will not be added again.",
            "hint": "This makes Sets useful when you need to remove duplicate values from a collection."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What's the output of: `console.log([...'hello']);`?",
            "options": ["['hello']", "['h', 'e', 'l', 'l', 'o']", "TypeError", "'hello'"],
            "correctOptionIndex": 1,
            "correctOptionText": "['h', 'e', 'l', 'l', 'o']",
            "difficulty": "medium",
            "explanation": "The spread operator works on any iterable, including strings. It spreads each character of the string into an array element.",
            "hint": "Strings in JavaScript are iterable, meaning they can be used with features that expect iterables."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "In ES6, how do you export a function from a module?",
            "options": ["function myFunction() {} module.exports = myFunction;", "export function myFunction() {}", "export default = function myFunction() {}", "function myFunction() {} export = myFunction;"],
            "correctOptionIndex": 1,
            "correctOptionText": "export function myFunction() {}",
            "difficulty": "medium",
            "explanation": "ES6 modules use the `export` keyword to export functions, objects, or primitive values from a module.",
            "hint": "There are two export types: named exports (like this example) and default exports."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the correct way to import a default export from a module in ES6?",
            "options": ["import { default } from './module';", "import default from './module';", "import * as module from './module';", "import module from './module';"],
            "correctOptionIndex": 3,
            "correctOptionText": "import module from './module';",
            "difficulty": "medium",
            "explanation": "When importing a default export, you use the `import name from 'module'` syntax, where 'name' can be any identifier you choose.",
            "hint": "Default exports don't use curly braces during import, unlike named exports."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the purpose of the `Symbol` data type introduced in ES6?",
            "options": ["To create unique identifiers", "To represent mathematical symbols", "To enhance string formatting", "To define constants"],
            "correctOptionIndex": 0,
            "correctOptionText": "To create unique identifiers",
            "difficulty": "hard",
            "explanation": "Symbols are unique and immutable primitive values that can be used as object property keys to avoid naming conflicts.",
            "hint": "Every Symbol() call creates a completely unique value, regardless of the parameter passed."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What's the difference between `let` and `var` declarations?",
            "options": ["No difference, they're interchangeable", "`let` is block-scoped while `var` is function-scoped", "`let` can be redeclared in the same scope but `var` cannot", "`let` hoists to the top of the function while `var` doesn't"],
            "correctOptionIndex": 1,
            "correctOptionText": "`let` is block-scoped while `var` is function-scoped",
            "difficulty": "medium",
            "explanation": "`let` declarations are block-scoped, meaning they exist only within the block they are declared in. `var` declarations are function-scoped, meaning they exist throughout the function they are declared in.",
            "hint": "Block scope applies to `if` statements, `for` loops, and any code between curly braces."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What type of function doesn't create its own `this` context?",
            "options": ["Constructor functions", "Method functions", "Arrow functions", "Generator functions"],
            "correctOptionIndex": 2,
            "correctOptionText": "Arrow functions",
            "difficulty": "medium",
            "explanation": "Arrow functions don't have their own `this` context. Instead, they inherit `this` from the enclosing lexical scope.",
            "hint": "This makes arrow functions particularly useful in callback scenarios where you want to preserve the original `this` value."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What will `console.log(typeof new Set())` output?",
            "options": ["'set'", "'array'", "'object'", "'function'"],
            "correctOptionIndex": 2,
            "correctOptionText": "'object'",
            "difficulty": "medium",
            "explanation": "Although `Set` is a new data structure in ES6, the `typeof` operator returns 'object' for Set instances because they are objects.",
            "hint": "In JavaScript, the `typeof` operator returns 'object' for most non-primitive data types including arrays, dates, and ES6 collections."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "Which method would you use to find the first element in an array that satisfies a condition?",
            "options": ["Array.prototype.filter()", "Array.prototype.map()", "Array.prototype.find()", "Array.prototype.some()"],
            "correctOptionIndex": 2,
            "correctOptionText": "Array.prototype.find()",
            "difficulty": "easy",
            "explanation": "`find()` returns the first element in an array that satisfies a provided testing function. If no element satisfies the function, it returns `undefined`.",
            "hint": "Unlike `filter()` which returns all matching elements, this method stops once it finds a match."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is a generator function in JavaScript?",
            "options": ["A function that generates random numbers", "A factory function that creates other functions", "A function that can pause and resume execution", "A function with built-in error handling"],
            "correctOptionIndex": 2,
            "correctOptionText": "A function that can pause and resume execution",
            "difficulty": "hard",
            "explanation": "Generator functions are a special type of function that can be paused and resumed using the `yield` keyword. They produce a sequence of values and maintain their own state.",
            "hint": "Generator functions are defined using function* syntax and use yield to emit values."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What does the `Object.assign()` method do?",
            "options": ["Assigns property values from source objects to a target object", "Assigns a new prototype to an object", "Creates a deep copy of an object", "Assigns an object to a variable"],
            "correctOptionIndex": 0,
            "correctOptionText": "Assigns property values from source objects to a target object",
            "difficulty": "medium",
            "explanation": "`Object.assign()` copies all enumerable own properties from one or more source objects to a target object and returns the target object.",
            "hint": "It performs a shallow copy, meaning nested objects are copied by reference, not duplicated."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the purpose of the `for...of` loop introduced in ES6?",
            "options": ["To iterate over object properties", "To iterate over the values of an iterable object like an Array or String", "To iterate over all enumerable properties of an object", "To iterate over only numeric properties"],
            "correctOptionIndex": 1,
            "correctOptionText": "To iterate over the values of an iterable object like an Array or String",
            "difficulty": "easy",
            "explanation": "The `for...of` loop iterates over the values of iterable objects such as Arrays, Strings, Maps, Sets, and more. It's simpler than traditional for loops and provides direct access to values.",
            "hint": "Unlike `for...in` which works with object properties, `for...of` works with iterable values."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What's the output of: `const obj = { a: 1 }; const copy = { ...obj }; obj.a = 2; console.log(copy.a);`?",
            "options": ["1", "2", "undefined", "Error"],
            "correctOptionIndex": 0,
            "correctOptionText": "1",
            "difficulty": "medium",
            "explanation": "The spread operator creates a shallow copy of the object. When `obj.a` is changed to 2, it doesn't affect the copy since it's a separate object with its own copy of the primitive value.",
            "hint": "The spread operator creates a new object with properties copied from the original."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "In ES6, what is the purpose of the `static` keyword in a class?",
            "options": ["To prevent a class from being modified", "To define methods that are called on the class itself, not on instances", "To create private class methods", "To mark a class as unchangeable after instantiation"],
            "correctOptionIndex": 1,
            "correctOptionText": "To define methods that are called on the class itself, not on instances",
            "difficulty": "medium",
            "explanation": "Static methods are called on the class itself, not on instances of the class. They're often used for utility functions related to the class.",
            "hint": "Static methods cannot access instance-specific data using `this`."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What feature allows function calls to accept an arbitrary number of arguments as an array?",
            "options": ["Default parameters", "Spread operator", "Rest parameters", "Destructuring"],
            "correctOptionIndex": 2,
            "correctOptionText": "Rest parameters",
            "difficulty": "medium",
            "explanation": "Rest parameters allow a function to accept an indefinite number of arguments as an array. It's denoted by three dots (`...`) followed by a parameter name.",
            "hint": "It's like the opposite of the spread operator - instead of spreading out an array, it gathers arguments into an array."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the output of: `console.log(typeof BigInt(123));`?",
            "options": ["'number'", "'bigint'", "'object'", "'string'"],
            "correctOptionIndex": 1,
            "correctOptionText": "'bigint'",
            "difficulty": "medium",
            "explanation": "`BigInt` is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1. The `typeof` operator returns 'bigint' for BigInt values.",
            "hint": "BigInt was introduced to handle integers larger than the Number type can safely handle."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "Which ES feature allows property shorthand in object literals?",
            "options": ["Object composition", "Property shorthand", "Enhanced object literals", "Object destructuring"],
            "correctOptionIndex": 2,
            "correctOptionText": "Enhanced object literals",
            "difficulty": "medium",
            "explanation": "Enhanced object literals in ES6 allow you to use a shorthand syntax when the property name is the same as the variable name, such as `{ x }` instead of `{ x: x }`.",
            "hint": "This feature simplifies object creation when your properties have the same names as existing variables."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What will be logged? `const [a = 1, b = 2, c = 3] = [5, undefined]; console.log(a, b, c);`",
            "options": ["5, undefined, undefined", "5, 2, undefined", "5, 2, 3", "5, undefined, 3"],
            "correctOptionIndex": 2,
            "correctOptionText": "5, 2, 3",
            "difficulty": "hard",
            "explanation": "In array destructuring with default values, `a` gets 5 from the array, `b` gets `undefined` from the array but is then assigned its default value of 2, and `c` is missing from the array so it gets its default value of 3.",
            "hint": "Default values are used when the corresponding value from the array is `undefined` or doesn't exist."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What will be the output of the following code? `const promise = new Promise(res => res(1)); promise.then(v => console.log(v));`",
            "options": ["undefined", "1", "Promise {<fulfilled>: 1}", "Error"],
            "correctOptionIndex": 1,
            "correctOptionText": "1",
            "difficulty": "hard",
            "explanation": "This code creates a promise that immediately resolves with the value 1. The `then` callback then logs that resolved value to the console.",
            "hint": "Promises represent asynchronous operations that will eventually complete. The `then` method is used to handle the resolved value."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "What is the output of: `function* gen() { yield 1; yield 2; }; const g = gen(); console.log([...g]);`?",
            "options": ["[1]", "[1, 2]", "[Function]", "TypeError"],
            "correctOptionIndex": 1,
            "correctOptionText": "[1, 2]",
            "difficulty": "hard",
            "explanation": "Generator functions are iterable. When spreading a generator into an array, it consumes all values yielded by the generator. This generator yields 1 and 2, so the resulting array is [1, 2].",
            "hint": "The spread operator works with any iterable, including generators, and collects all yielded values into an array."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "ES6+ Features",
            "questionText": "Which ES6+ feature allows you to define private class fields?",
            "options": ["The `private` keyword", "Underscore prefix naming convention", "The `#` prefix", "The `protected` keyword"],
            "correctOptionIndex": 2,
            "correctOptionText": "The `#` prefix",
            "difficulty": "hard",
            "explanation": "Private class fields are declared with a # prefix. These fields are truly private and cannot be accessed from outside the class, unlike the underscore naming convention which is just a convention.",
            "hint": "This is part of the Class Fields proposal that reached Stage 3 in the TC39 process and is supported in modern browsers."
        },
        // Error Handling
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is the basic syntax for error handling in JavaScript?",
            "options": ["catch (error) { handle(); }", "handle(error) { try(); }", "try { code(); } catch (error) { handle(); }", "error { try(); } handle { catch(); }"],
            "correctOptionIndex": 2,
            "correctOptionText": "try { code(); } catch (error) { handle(); }",
            "difficulty": "easy",
            "explanation": "JavaScript uses try-catch blocks for error handling. The code in the try block is executed, and if any errors occur, execution is transferred to the catch block.",
            "hint": "This structure lets you attempt to execute code and provide fallback behavior if something goes wrong."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What happens when an exception is thrown in JavaScript?",
            "options": ["The program continues execution from the next line", "The program terminates immediately", "The program pauses until the error is fixed", "Execution jumps to the nearest catch block or terminates if none exists"],
            "correctOptionIndex": 3,
            "correctOptionText": "Execution jumps to the nearest catch block or terminates if none exists",
            "difficulty": "easy",
            "explanation": "When an exception is thrown, JavaScript stops normal execution and looks for exception handling code (catch blocks). If no handler is found, the program terminates with an error.",
            "hint": "This behavior allows errors to be caught and handled without completely stopping program execution."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "Which statement is used to throw an exception in JavaScript?",
            "options": ["throw", "catch", "error", "except"],
            "correctOptionIndex": 0,
            "correctOptionText": "throw",
            "difficulty": "easy",
            "explanation": "The `throw` statement is used to generate user-defined exceptions. You can throw any expression, not just Error objects.",
            "hint": "This statement allows you to create custom error conditions in your code."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is the purpose of the `finally` block in a try-catch statement?",
            "options": ["To specify a fallback value if an error occurs", "To execute code after try-catch, regardless of whether an exception was thrown", "To finalize variables before garbage collection", "To determine if the error was handled successfully"],
            "correctOptionIndex": 1,
            "correctOptionText": "To execute code after try-catch, regardless of whether an exception was thrown",
            "difficulty": "easy",
            "explanation": "The `finally` block contains code that will be executed regardless of whether an exception was thrown or caught. It's typically used for cleanup operations like closing files or network connections.",
            "hint": "This block is useful for code that must run in both success and failure scenarios."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "Which built-in error type should be used when a function receives invalid arguments?",
            "options": ["SyntaxError", "ReferenceError", "TypeError", "RangeError"],
            "correctOptionIndex": 2,
            "correctOptionText": "TypeError",
            "difficulty": "medium",
            "explanation": "TypeError is appropriate when a value is not of the expected type, such as when calling a method on an undefined variable or passing arguments of the wrong type to a function.",
            "hint": "This error is about the nature or type of the operand, not its value."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What will the following code log to the console? `try { throw new Error('Oops!'); } catch (err) { console.log(err.message); }`",
            "options": ["'Error'", "'Oops!'", "undefined", "It will throw an unhandled exception"],
            "correctOptionIndex": 1,
            "correctOptionText": "'Oops!'",
            "difficulty": "easy",
            "explanation": "The code throws an Error object with the message 'Oops!'. The catch block captures this error and logs its message property, which contains the string 'Oops!'.",
            "hint": "The `message` property of an Error object contains the text message provided when creating the error."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is the difference between Error.prototype.message and Error.prototype.stack?",
            "options": ["message is a string while stack is an array", "message contains the error description while stack contains the call stack trace", "message is for users while stack is for developers", "message is required while stack is optional"],
            "correctOptionIndex": 1,
            "correctOptionText": "message contains the error description while stack contains the call stack trace",
            "difficulty": "medium",
            "explanation": "The `message` property contains the error description provided when creating the error. The `stack` property contains a stack trace: information about the sequence of nested calls that led to the error being created.",
            "hint": "The stack trace is particularly useful for debugging as it shows where the error occurred and the path of function calls that led to it."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "Which built-in error type is thrown when code attempts to access a variable that doesn't exist?",
            "options": ["SyntaxError", "ReferenceError", "TypeError", "EvalError"],
            "correctOptionIndex": 1,
            "correctOptionText": "ReferenceError",
            "difficulty": "medium",
            "explanation": "ReferenceError is thrown when trying to access a variable that has not been declared or is out of scope. It indicates that the code is referring to something that doesn't exist.",
            "hint": "This error is about missing references, not about the type or value of existing variables."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What does the following code log? `try { console.log('A'); throw new Error(); console.log('B'); } catch (e) { console.log('C'); } finally { console.log('D'); }`",
            "options": ["A B C D", "A C D", "A D", "C D"],
            "correctOptionIndex": 1,
            "correctOptionText": "A C D",
            "difficulty": "medium",
            "explanation": "'A' is logged, then an error is thrown which prevents 'B' from being logged. The catch block executes and logs 'C'. Finally, the finally block executes and logs 'D'.",
            "hint": "Execution in the try block stops at the point where an exception is thrown, and any statements after that point are skipped."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "How do you create a custom error type in JavaScript?",
            "options": ["Use the Error.create() method", "Use a generator function with the Error symbol", "Extend the built-in Error class", "Use Object.createError()"],
            "correctOptionIndex": 2,
            "correctOptionText": "Extend the built-in Error class",
            "difficulty": "hard",
            "explanation": "Custom error types can be created by extending the built-in Error class or one of its subclasses. This allows you to add custom properties and methods while maintaining the Error prototype chain.",
            "hint": "This object-oriented approach lets you create domain-specific errors that include additional context relevant to your application."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What will be the output of: `try { setTimeout(() => { throw new Error('Async Error'); }, 1000); } catch (e) { console.log('Caught:', e.message); }`?",
            "options": ["'Caught: Async Error'", "The error will be uncaught and crash the program", "Nothing, the error is silently ignored", "undefined"],
            "correctOptionIndex": 1,
            "correctOptionText": "The error will be uncaught and crash the program",
            "difficulty": "hard",
            "explanation": "The try-catch block only catches errors that occur synchronously. The error in setTimeout is thrown asynchronously after the try-catch has already completed execution, so it won't be caught by this try-catch block.",
            "hint": "This is a common misconception - try-catch doesn't work for errors in callbacks or promises unless the try-catch is inside the callback itself."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is error bubbling in JavaScript?",
            "options": ["The process of grouping similar errors together", "When errors automatically disappear after a certain time", "When an uncaught exception propagates up through the call stack", "When errors are sent to the server for logging"],
            "correctOptionIndex": 2,
            "correctOptionText": "When an uncaught exception propagates up through the call stack",
            "difficulty": "medium",
            "explanation": "Error bubbling (propagation) happens when an exception isn't caught within a function. It 'bubbles up' to the calling function, and if not caught there, continues up the call stack until it reaches the global scope.",
            "hint": "This mechanism allows errors to be handled at different levels of your application."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is a proper use case for the `RangeError` built-in error type?",
            "options": ["When a variable is used out of scope", "When a value is not in an allowed range of values", "When array indices are invalid", "When a string is too long"],
            "correctOptionIndex": 1,
            "correctOptionText": "When a value is not in an allowed range of values",
            "difficulty": "medium",
            "explanation": "`RangeError` is thrown when a value is not within the allowed range. For example, setting an array's length to a negative number or using a number outside the valid numeric range.",
            "hint": "This error type is about values being out of their valid numerical ranges, not about array indices specifically."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "How should you handle errors in asynchronous code using promises?",
            "options": ["Using normal try-catch blocks", "Using the .catch() method or try-catch with async/await", "Errors in promises cannot be caught", "Using window.onerror"],
            "correctOptionIndex": 1,
            "correctOptionText": "Using the .catch() method or try-catch with async/await",
            "difficulty": "medium",
            "explanation": "Promise-based asynchronous code uses either the .catch() method to handle rejections, or try-catch blocks when using async/await syntax. Regular try-catch blocks alone won't catch errors in promise callbacks.",
            "hint": "Promises have their own error handling mechanism that works differently from synchronous try-catch."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What does the `window.onerror` event handler do?",
            "options": ["Prevents all errors from occurring", "Handles only syntax errors", "Provides a global error handler for uncaught exceptions", "Only works in IE browsers"],
            "correctOptionIndex": 2,
            "correctOptionText": "Provides a global error handler for uncaught exceptions",
            "difficulty": "hard",
            "explanation": "`window.onerror` is a global event handler that catches uncaught exceptions that bubble up to the window object. It allows you to log or handle errors that would otherwise cause the script to terminate.",
            "hint": "This is often used for global error logging and analytics in web applications."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is the best practice when handling errors in JavaScript?",
            "options": ["Catch all errors in a global try-catch block", "Ignore minor errors to improve performance", "Catch specific error types and handle them appropriately", "Always rethrow errors after logging them"],
            "correctOptionIndex": 2,
            "correctOptionText": "Catch specific error types and handle them appropriately",
            "difficulty": "medium",
            "explanation": "Best practice is to catch specific types of errors that you expect might occur and handle each appropriately. This allows for more precise error handling and recovery strategies based on the error type.",
            "hint": "This approach makes your code more robust by handling different error conditions in different ways."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What happens if an error is thrown in a `finally` block?",
            "options": ["It is automatically caught by the associated catch block", "It overrides any previous errors from the try or catch blocks", "It is ignored because finally blocks can't throw errors", "It is queued until the current error is handled"],
            "correctOptionIndex": 1,
            "correctOptionText": "It overrides any previous errors from the try or catch blocks",
            "difficulty": "hard",
            "explanation": "If a finally block throws an error, it will override any previous error from the try or catch blocks. This means the original error will be lost, and only the finally error will propagate upward.",
            "hint": "This is why it's generally not good practice to throw errors from finally blocks."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is the output of the following code? `try { throw new Error('Try'); } catch (e) { throw new Error('Catch'); } finally { console.log('Finally'); }`",
            "options": ["'Try' followed by an uncaught 'Catch' error", "'Catch' followed by 'Finally'", "'Finally' followed by an uncaught 'Catch' error", "Only 'Finally' is output"],
            "correctOptionIndex": 2,
            "correctOptionText": "'Finally' followed by an uncaught 'Catch' error",
            "difficulty": "hard",
            "explanation": "The try block throws an error which is caught. The catch block throws a new error. Before this new error propagates, the finally block executes and logs 'Finally'. Then the 'Catch' error propagates upward as an uncaught exception.",
            "hint": "The finally block always executes before the error propagates further, even if catch throws a new error."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "Which of the following is NOT a standard built-in JavaScript error type?",
            "options": ["TypeError", "RangeError", "ValidationError", "URIError"],
            "correctOptionIndex": 2,
            "correctOptionText": "ValidationError",
            "difficulty": "medium",
            "explanation": "`ValidationError` is not a standard built-in JavaScript error type. The standard error types include Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, and URIError.",
            "hint": "ValidationError is a common custom error type that developers create, but it's not part of the JavaScript language specification."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "How do you access the line number where an error occurred?",
            "options": ["error.line", "error.lineNumber", "error.location.line", "Extract it from the error.stack string"],
            "correctOptionIndex": 3,
            "correctOptionText": "Extract it from the error.stack string",
            "difficulty": "hard",
            "explanation": "JavaScript's standard Error objects don't have a direct property for the line number. The line number information is typically contained within the stack trace string (error.stack), which needs to be parsed to extract this information.",
            "hint": "The format of the stack property varies between browsers, making consistent extraction challenging."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What will the following code return? `function example() { try { return 1; } finally { return 2; } } console.log(example());`",
            "options": ["1", "2", "undefined", "Error"],
            "correctOptionIndex": 1,
            "correctOptionText": "2",
            "difficulty": "hard",
            "explanation": "When a return statement is encountered in both the try block and the finally block, the return value from the finally block overrides the return value from the try block. So example() returns 2.",
            "hint": "The finally block's execution takes precedence even over return statements from the try or catch blocks."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is error handling with async/await?",
            "options": ["Using .catch() on async functions", "Using throw inside async functions only", "Using try-catch blocks around await expressions", "Errors cannot be caught in async functions"],
            "correctOptionIndex": 2,
            "correctOptionText": "Using try-catch blocks around await expressions",
            "difficulty": "medium",
            "explanation": "With async/await, you can use traditional try-catch blocks to handle errors in asynchronous code. When a promise rejection occurs in an awaited expression, it's converted to a throw that can be caught by a surrounding try-catch.",
            "hint": "This makes error handling in asynchronous code look more like synchronous error handling."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What happens if you don't handle a rejected Promise?",
            "options": ["Nothing, it's silently ignored", "It throws a visible error immediately", "It causes an 'Unhandled promise rejection' warning", "The browser crashes"],
            "correctOptionIndex": 2,
            "correctOptionText": "It causes an 'Unhandled promise rejection' warning",
            "difficulty": "medium",
            "explanation": "Unhandled promise rejections result in a warning in the console. In newer JavaScript environments, these warnings may be upgraded to actual errors in the future. It's important to always handle promise rejections.",
            "hint": "Different environments handle these differently, but modern browsers show a warning in the console."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What's the difference between throw Error('message') and throw 'message'?",
            "options": ["No difference, they're equivalent", "The first creates an Error object with stack trace, the second just throws a string", "The first is syntax error, only strings can be thrown", "The second is more efficient for memory usage"],
            "correctOptionIndex": 1,
            "correctOptionText": "The first creates an Error object with stack trace, the second just throws a string",
            "difficulty": "medium",
            "explanation": "While you can throw any value in JavaScript, throwing an Error object provides additional information like a stack trace, which is crucial for debugging. Throwing a string provides only the message without any context about where the error occurred.",
            "hint": "The Error object contains properties like message, name, and stack that provide useful debugging information."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "How do you rethrow an error after logging it?",
            "options": ["log(error); throw error;", "console.error(error); return error;", "console.log(error.message); throw error.message;", "log(error); error.rethrow();"],
            "correctOptionIndex": 0,
            "correctOptionText": "log(error); throw error;",
            "difficulty": "medium",
            "explanation": "To rethrow an error after logging it, you simply log the error (or perform any other operation) and then use the throw statement with the same error object. This preserves the original error information including the stack trace.",
            "hint": "Rethrowing allows you to perform some action when an error occurs while still propagating it upward for higher-level handlers."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is the correct way to use try-catch with async/await?",
            "options": [
                "async function example() { try { await riskyOperation(); } catch { console.error(e); } }",
                "async function example() { try { await riskyOperation(); } catch(e) { console.error(e); } }",
                "function example() { try { async await riskyOperation(); } catch(e) { console.error(e); } }",
                "function example() { try { async () => await riskyOperation(); } catch(e) { console.error(e); } }"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "async function example() { try { await riskyOperation(); } catch(e) { console.error(e); } }",
            "difficulty": "medium",
            "explanation": "When using async/await, the correct pattern is to mark the function as async, use await inside a try block, and catch any errors in the catch block. This allows you to handle promise rejections using familiar synchronous error handling syntax.",
            "hint": "The function must be async to use await, and the error parameter in catch is needed to access the error object."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "Which error is thrown when JavaScript code is syntactically invalid?",
            "options": ["ReferenceError", "TypeError", "SyntaxError", "EvalError"],
            "correctOptionIndex": 2,
            "correctOptionText": "SyntaxError",
            "difficulty": "easy",
            "explanation": "SyntaxError is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language, such as missing parentheses or invalid escape sequences.",
            "hint": "These errors usually occur during parsing, before the code even starts to execute."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is defensive programming in the context of error handling?",
            "options": ["Writing code that attacks potential errors", "Using try-catch blocks everywhere", "Anticipating and handling potential errors before they occur", "Having backup servers for when errors crash your application"],
            "correctOptionIndex": 2,
            "correctOptionText": "Anticipating and handling potential errors before they occur",
            "difficulty": "hard",
            "explanation": "Defensive programming is a technique where you anticipate potential problems and handle them gracefully. This includes validating inputs, checking preconditions, and designing your code to degrade gracefully when errors occur rather than failing catastrophically.",
            "hint": "This approach focuses on preventing errors through careful coding rather than just catching them after they happen."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "What is the 'fail fast' principle in error handling?",
            "options": ["Letting errors crash your application to identify them quickly", "Detecting and reporting errors as soon as possible", "Using performance optimization to make error handling faster", "Running tests frequently to find errors"],
            "correctOptionIndex": 1,
            "correctOptionText": "Detecting and reporting errors as soon as possible",
            "difficulty": "hard",
            "explanation": "The 'fail fast' principle advocates detecting and reporting errors as early as possible in the process. This makes bugs easier to find and fix because they're closer to their source. It's better to fail immediately than to continue with invalid state that might cause harder-to-diagnose problems later.",
            "hint": "This principle is about error reporting timing, not about letting applications crash."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Error Handling",
            "questionText": "Which method is used to globally catch unhandled promise rejections in Node.js?",
            "options": ["window.onuncaughtpromise", "process.on('unhandledRejection', callback)", "global.promiseRejectionHandler", "Promise.onRejected(callback)"],
            "correctOptionIndex": 1,
            "correctOptionText": "process.on('unhandledRejection', callback)",
            "difficulty": "hard",
            "explanation": "In Node.js, you can listen for the 'unhandledRejection' event on the process object to globally catch any promise rejections that weren't handled with .catch() or try-catch with async/await.",
            "hint": "This is specific to Node.js environments and provides a last chance to log or handle otherwise unhandled promise rejections."
        },
        // Working with APIs
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What does API stand for?",
            "options": ["Application Programming Interface", "Advanced Program Integration", "Application Process Interface", "Automated Program Integration"],
            "correctOptionIndex": 0,
            "correctOptionText": "Application Programming Interface",
            "difficulty": "easy",
            "explanation": "API stands for Application Programming Interface, which defines the ways different software applications can communicate with each other.",
            "hint": "It's a common tech acronym that describes how applications interact with each other."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "Which of the following is NOT a common HTTP method used in RESTful APIs?",
            "options": ["GET", "POST", "FETCH", "DELETE"],
            "correctOptionIndex": 2,
            "correctOptionText": "FETCH",
            "difficulty": "easy",
            "explanation": "FETCH is not an HTTP method. The common HTTP methods are GET, POST, PUT, PATCH, and DELETE. FETCH is actually a JavaScript API used to make HTTP requests.",
            "hint": "One of these is a JavaScript function rather than an HTTP method."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What JavaScript function introduced in ES6 is commonly used to make API requests?",
            "options": ["ajax()", "request()", "fetch()", "axios()"],
            "correctOptionIndex": 2,
            "correctOptionText": "fetch()",
            "difficulty": "easy",
            "explanation": "The fetch() API was introduced in ES6 and provides a cleaner, promise-based mechanism for making HTTP requests compared to older methods like XMLHttpRequest.",
            "hint": "This modern function returns a Promise and is built into browsers."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is the primary advantage of using the Axios library over the native Fetch API?",
            "options": ["Automatic JSON parsing", "Better browser support", "Request cancellation support", "All of the above"],
            "correctOptionIndex": 3,
            "correctOptionText": "All of the above",
            "difficulty": "medium",
            "explanation": "Axios offers several advantages over the native Fetch API including automatic JSON data transformation, better browser compatibility including IE support, request/response interceptors, and built-in request cancellation support.",
            "hint": "Consider all the features Axios provides that require additional coding when using Fetch."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "Which HTTP status code range indicates a successful response?",
            "options": ["100-199", "200-299", "300-399", "400-499"],
            "correctOptionIndex": 1,
            "correctOptionText": "200-299",
            "difficulty": "easy",
            "explanation": "HTTP status codes in the 200-299 range indicate successful responses. For example, 200 OK means the request was successful, and 201 Created means a resource was successfully created.",
            "hint": "Success codes start with the digit 2."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "When using the Fetch API, how do you extract the JSON data from a response?",
            "options": [
            "response.json",
            "response.json()",
            "response.getJSON()",
            "response.text().toJSON()"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "response.json()",
            "difficulty": "easy",
            "explanation": "The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON.",
            "hint": "This method returns a Promise that resolves to the parsed JSON data."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What's the correct way to set request headers when using the Fetch API?",
            "options": [
            "fetch(url, { headers: { 'Content-Type': 'application/json' } })",
            "fetch(url, { header: 'Content-Type: application/json' })",
            "fetch(url).setHeader('Content-Type', 'application/json')",
            "fetch(url).headers('Content-Type', 'application/json')"
            ],
            "correctOptionIndex": 0,
            "correctOptionText": "fetch(url, { headers: { 'Content-Type': 'application/json' } })",
            "difficulty": "medium",
            "explanation": "When using the Fetch API, headers are set by passing an options object with a headers property, which is itself an object containing the header names and values.",
            "hint": "Headers are passed as part of the options object in the second parameter."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "Which of the following is NOT a common data format returned by APIs?",
            "options": ["JSON", "XML", "HTML", "CSV"],
            "correctOptionIndex": 2,
            "correctOptionText": "HTML",
            "difficulty": "medium",
            "explanation": "While APIs can technically return HTML, it's not a common data format for API responses. JSON, XML, and CSV are much more commonly used for structured data exchange between applications.",
            "hint": "Think about which format is primarily designed for human viewing rather than data interchange."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is CORS in the context of API requests?",
            "options": [
            "A JavaScript framework for API development",
            "A security feature that restricts cross-origin HTTP requests",
            "A protocol for encrypting API data",
            "A method for optimizing API response time"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A security feature that restricts cross-origin HTTP requests",
            "difficulty": "medium",
            "explanation": "CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the original page, unless the API explicitly allows it.",
            "hint": "This mechanism helps prevent malicious sites from accessing data from other domains without permission."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "How do you handle errors in a fetch() request using promises?",
            "options": [
            "fetch(url).error(handleError)",
            "fetch(url).then(handleResponse).catch(handleError)",
            "fetch(url).success(handleResponse).failure(handleError)",
            "fetch(url).try(handleResponse).except(handleError)"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "fetch(url).then(handleResponse).catch(handleError)",
            "difficulty": "medium",
            "explanation": "In fetch() and Promises, you chain a .then() method to handle the successful response and a .catch() method to handle any errors that occur during the request or processing.",
            "hint": "Promise chains use standard methods for success and failure handling."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is important to note about how fetch() handles HTTP error status codes?",
            "options": [
            "fetch() automatically throws an error for any non-200 status code",
            "fetch() only throws an error for 500-level server errors",
            "fetch() does NOT automatically reject on HTTP error status",
            "fetch() returns null for any error status code"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "fetch() does NOT automatically reject on HTTP error status",
            "difficulty": "medium",
            "explanation": "fetch() only rejects on network failures or if anything prevented the request from completing, not on HTTP error status codes. This means even 404 or 500 errors will be handled in the .then() part of the promise chain, not in .catch().",
            "hint": "You need to check response.ok or the status code manually in your .then() handler."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What does the 'OPTIONS' HTTP method primarily do in relation to APIs?",
            "options": [
            "It retrieves all configuration options for the API",
            "It's used to modify API settings",
            "It's used as a preflight request to determine if a cross-origin request is permitted",
            "It retrieves optional metadata about available API endpoints"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "It's used as a preflight request to determine if a cross-origin request is permitted",
            "difficulty": "hard",
            "explanation": "The OPTIONS method is often used by browsers in CORS (Cross-Origin Resource Sharing) scenarios as a preflight request to determine if the actual request is safe to send. It checks whether the server will permit the actual request based on origin, HTTP method, and headers.",
            "hint": "It's related to security checks before cross-origin requests."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "Which HTTP status code indicates that a request was successful but no content is being returned?",
            "options": ["200 OK", "201 Created", "204 No Content", "304 Not Modified"],
            "correctOptionIndex": 2,
            "correctOptionText": "204 No Content",
            "difficulty": "medium",
            "explanation": "The 204 No Content status code means that the server has successfully processed the request but is not returning any content in the response body. It's often used for DELETE operations or PUT/POST operations where updated content doesn't need to be returned.",
            "hint": "This status indicates success but tells the client not to expect any response body."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is the correct syntax for making a POST request with JSON data using fetch()?",
            "options": [
            "fetch(url, { type: 'POST', data: JSON.stringify(data) })",
            "fetch(url, { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} })",
            "fetch(url, 'POST', { json: data })",
            "fetch(url).post(JSON.stringify(data))"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "fetch(url, { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} })",
            "difficulty": "medium",
            "explanation": "When making a POST request with fetch(), you need to specify the method as 'POST', provide the data in the body property (typically after converting it to a string with JSON.stringify()), and set the appropriate Content-Type header to indicate you're sending JSON data.",
            "hint": "You need to specify three things: the HTTP method, the body content, and the Content-Type header."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is a JWT often used for in API interactions?",
            "options": [
            "Compressing API request data",
            "Authentication and authorization",
            "Encrypting sensitive API payload data",
            "Defining API endpoints"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Authentication and authorization",
            "difficulty": "medium",
            "explanation": "JWT (JSON Web Token) is commonly used for authentication and authorization in API interactions. It securely transmits information between parties as a JSON object, allowing servers to verify user identity and permissions without maintaining server-side sessions.",
            "hint": "It helps APIs know who is making the request and what they're allowed to do."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "When implementing pagination for API requests, which query parameter name is most commonly used to specify the page number?",
            "options": ["offset", "page", "start", "index"],
            "correctOptionIndex": 1,
            "correctOptionText": "page",
            "difficulty": "medium",
            "explanation": "While there's no universal standard, 'page' is the most commonly used query parameter name for specifying the page number in paginated API requests, often paired with a 'limit' or 'per_page' parameter to specify the number of items per page.",
            "hint": "This parameter typically starts at 1 and increases for subsequent result pages."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "How can you make a fetch request with a timeout that cancels the request if it takes too long?",
            "options": [
            "fetch(url, { timeout: 5000 })",
            "fetch(url, { signal: AbortController.timeout(5000) })",
            "Use Promise.race() with fetch and a timeout promise",
            "fetch(url).setTimeout(5000)"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Use Promise.race() with fetch and a timeout promise",
            "difficulty": "hard",
            "explanation": "The native fetch API doesn't support timeouts directly. You can implement a timeout by using Promise.race() to race the fetch promise against a timeout promise that rejects after a specified time. Alternatively, you could use the AbortController with a setTimeout, but that's not directly built into the AbortController as suggested in option 2.",
            "hint": "This approach uses a Promise combinator to compete between two promises."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What's a key difference between PUT and PATCH HTTP methods?",
            "options": [
            "PUT is for creating resources, PATCH is for updating resources",
            "PUT updates specific fields, PATCH updates entire resources",
            "PUT replaces an entire resource, PATCH updates part of a resource",
            "PUT is synchronous, PATCH is asynchronous"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "PUT replaces an entire resource, PATCH updates part of a resource",
            "difficulty": "medium",
            "explanation": "PUT is designed to completely replace a resource at a specific URL, while PATCH is designed to apply partial modifications to a resource. When using PUT, you must send the complete resource representation; with PATCH, you only need to send the fields that should be changed.",
            "hint": "Think about the scope of changes each method makes to the target resource."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "Which of the following is NOT a common strategy for API authentication?",
            "options": [
            "API Keys",
            "OAuth",
            "HTML Tokens",
            "Bearer Tokens"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "HTML Tokens",
            "difficulty": "medium",
            "explanation": "HTML Tokens is not a standard authentication method for APIs. Common authentication strategies include API Keys, OAuth, JWT (JSON Web Tokens), Bearer Tokens, and Basic Authentication, but not HTML Tokens.",
            "hint": "One of these terms combines a markup language with an authentication concept."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is rate limiting in the context of APIs?",
            "options": [
            "A technique to optimize API response times",
            "A restriction on how many API requests a client can make in a given time period",
            "A method to limit the amount of data returned by an API",
            "A way to prioritize API requests from different clients"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A restriction on how many API requests a client can make in a given time period",
            "difficulty": "medium",
            "explanation": "Rate limiting is a strategy used by API providers to restrict the number of API calls a client can make within a certain timeframe (e.g., 100 requests per minute). This prevents abuse of the API and ensures fair usage across all clients.",
            "hint": "This protects APIs from being overwhelmed by too many requests from a single source."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "When using async/await with fetch, what's the correct way to handle errors?",
            "options": [
            "let response = await fetch(url).onerror(handleError);",
            "let response = await fetch(url).catch(handleError);",
            "try { let response = await fetch(url); } catch (error) { handleError(error); }",
            "let response = await try { fetch(url) } except { handleError }"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "try { let response = await fetch(url); } catch (error) { handleError(error); }",
            "difficulty": "medium",
            "explanation": "When using async/await, you handle errors with traditional try/catch blocks. The await keyword pauses execution until the Promise resolves, and if the Promise rejects, it throws an exception that can be caught with catch.",
            "hint": "This follows standard JavaScript exception handling patterns."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What does the 'Accept' HTTP header specify in an API request?",
            "options": [
            "The authentication method being used",
            "The content type of the request body",
            "The preferred response format the client wants to receive",
            "Which API version to use"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "The preferred response format the client wants to receive",
            "difficulty": "medium",
            "explanation": "The Accept header is used by HTTP clients to specify which content types they are able to understand. It tells the server what format the client would prefer for the response data (e.g., 'application/json', 'application/xml', etc.).",
            "hint": "This header is about what the client wants to get back, not what it's sending."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What does the acronym REST stand for in the context of APIs?",
            "options": [
            "Reactive State Transfer",
            "Remote Endpoint Service Technology",
            "Representational State Transfer",
            "Resource Exchange System Technology"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Representational State Transfer",
            "difficulty": "easy",
            "explanation": "REST stands for Representational State Transfer. It's an architectural style for designing networked applications that relies on stateless, client-server communication, typically over HTTP.",
            "hint": "This term describes how resources are represented and transferred in web services."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is an API endpoint?",
            "options": [
            "The server where an API is hosted",
            "A specific URL where an API can be accessed",
            "The final step in an API request lifecycle",
            "The authentication system for an API"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A specific URL where an API can be accessed",
            "difficulty": "easy",
            "explanation": "An API endpoint is a specific URL within an API that represents a specific function or resource. Each endpoint performs a specific action, such as retrieving data, creating a new record, or updating an existing record.",
            "hint": "Think of it as an address that points to a specific functionality."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "Which of the following best describes GraphQL compared to REST?",
            "options": [
            "A more secure alternative to REST APIs",
            "A query language that allows clients to request exactly the data they need",
            "A faster protocol that always outperforms REST",
            "A graph-based database system for API data storage"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A query language that allows clients to request exactly the data they need",
            "difficulty": "hard",
            "explanation": "GraphQL is a query language for APIs that allows clients to define the structure of the data they want, which means they can retrieve all the data they need in a single request, avoid over-fetching, and prevent multiple round-trips to the server.",
            "hint": "It gives clients more control over what data they receive than traditional REST APIs."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is the primary purpose of using the AbortController with fetch?",
            "options": [
            "To automatically retry failed fetch requests",
            "To handle server errors in fetch responses",
            "To cancel pending fetch requests",
            "To batch multiple fetch requests together"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "To cancel pending fetch requests",
            "difficulty": "hard",
            "explanation": "The AbortController is used with fetch to create requests that can be aborted (canceled) if they're no longer needed. This is useful for scenarios like a user navigating away from a page or performing a new search before the previous one completes.",
            "hint": "It provides a way to stop an in-progress network request."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "How can you prevent unnecessary API requests when a component re-renders in React?",
            "options": [
            "Always place API calls in componentDidMount()",
            "Use useState() to store API results",
            "Use the useEffect() hook with a dependency array",
            "Create a custom hook for every API call"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Use the useEffect() hook with a dependency array",
            "difficulty": "hard",
            "explanation": "In React, you can control when API calls are made by using the useEffect() hook with a dependency array. By specifying which values the effect depends on, you can ensure the API call only happens when those specific values change, preventing unnecessary requests on every render.",
            "hint": "This approach lets you control exactly when your effect runs based on which values have changed."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "Which design pattern is most commonly used to handle multiple asynchronous API requests that need to be processed in parallel?",
            "options": [
            "Observer pattern",
            "Singleton pattern",
            "Promise.all()",
            "Factory pattern"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Promise.all()",
            "difficulty": "hard",
            "explanation": "Promise.all() is not technically a design pattern but a Promise method that takes an array of Promises and returns a new Promise that resolves when all input Promises have resolved, or rejects if any input Promise rejects. It's the standard way to handle multiple asynchronous operations that need to run in parallel.",
            "hint": "This method waits for all promises to resolve before continuing."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "What is an API gateway?",
            "options": [
            "A user interface for testing API endpoints",
            "A middleware that manages API requests, routing, and other concerns",
            "A security protocol for API authentication",
            "A database specifically designed for API data storage"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A middleware that manages API requests, routing, and other concerns",
            "difficulty": "hard",
            "explanation": "An API gateway is a server that acts as an intermediary between clients and services. It handles common tasks like request routing, composition, protocol translation, authentication, rate limiting, and load balancing. It provides a unified entry point for multiple backend services.",
            "hint": "It sits between clients and services, handling various cross-cutting concerns."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Working with APIs",
            "questionText": "When implementing infinite scroll in a web application, which API pattern is most appropriate?",
            "options": [
            "WebSocket for real-time updates",
            "GraphQL subscriptions",
            "Paginated REST endpoints",
            "Server-Sent Events (SSE)"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Paginated REST endpoints",
            "difficulty": "hard",
            "explanation": "Infinite scroll implementations typically use paginated REST endpoints where additional data is loaded as the user scrolls down. The client keeps track of the current page or cursor position and requests the next set of results when the user approaches the bottom of the current content.",
            "hint": "This approach retrieves data in chunks as needed rather than all at once."
        },
        // Local Storage & Session Storage
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What is the maximum storage capacity of localStorage in most browsers?",
            "options": ["1MB", "5MB", "10MB", "Unlimited"],
            "correctOptionIndex": 1,
            "correctOptionText": "5MB",
            "difficulty": "medium",
            "explanation": "Most modern browsers limit localStorage to approximately 5MB per domain. This limit is per origin (protocol + domain + port).",
            "hint": "It's enough for storing user preferences and small data, but not for large files or datasets."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What is the key difference between localStorage and sessionStorage?",
            "options": [
            "localStorage is encrypted, sessionStorage is not",
            "localStorage persists after browser close, sessionStorage does not",
            "localStorage has a larger storage capacity than sessionStorage",
            "localStorage is synchronous, sessionStorage is asynchronous"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "localStorage persists after browser close, sessionStorage does not",
            "difficulty": "easy",
            "explanation": "The main difference is persistence: localStorage data remains until explicitly cleared by code or the user clearing browser data, while sessionStorage data gets cleared when the browsing session ends (when the browser tab or window is closed).",
            "hint": "Think about which one retains data between browser sessions."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which method is used to add data to localStorage?",
            "options": [
            "localStorage.add(key, value)",
            "localStorage.setItem(key, value)",
            "localStorage.store(key, value)",
            "localStorage.push(key, value)"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "localStorage.setItem(key, value)",
            "difficulty": "easy",
            "explanation": "The setItem() method of the Storage interface takes a key and a value parameter and adds that key/value pair to the given Storage object.",
            "hint": "This method follows a 'set' verb pattern similar to many JavaScript setter methods."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What data type can be directly stored in localStorage?",
            "options": ["Strings only", "Strings and numbers", "Any JSON-serializable object", "Any JavaScript data type"],
            "correctOptionIndex": 0,
            "correctOptionText": "Strings only",
            "difficulty": "medium",
            "explanation": "localStorage and sessionStorage can only store string values. To store objects or arrays, you must first convert them to strings using JSON.stringify(), and then parse them back using JSON.parse() when retrieving.",
            "hint": "You need to do some conversion to store complex data types."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "How do you retrieve data from sessionStorage?",
            "options": [
            "sessionStorage.get(key)",
            "sessionStorage.retrieve(key)",
            "sessionStorage.getItem(key)",
            "sessionStorage.fetch(key)"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "sessionStorage.getItem(key)",
            "difficulty": "easy",
            "explanation": "The getItem() method of the Storage interface returns the value associated with the given key, or null if the key does not exist.",
            "hint": "This method follows the same naming pattern as its counterpart for storing data."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What happens when you try to store an object directly in localStorage without stringifying it first?",
            "options": [
            "It will throw an error",
            "The object will be automatically converted to a string representation",
            "Only the object's primitive properties will be stored",
            "The object will be stored as '[object Object]'"
            ],
            "correctOptionIndex": 3,
            "correctOptionText": "The object will be stored as '[object Object]'",
            "difficulty": "medium",
            "explanation": "When you try to store an object directly in localStorage, JavaScript implicitly calls the object's toString() method, which for plain objects returns '[object Object]'. This means the actual data structure and properties are lost.",
            "hint": "JavaScript performs an implicit type conversion that doesn't preserve the object's structure."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which of the following correctly saves an array to localStorage?",
            "options": [
            "localStorage.setItem('myArray', myArray)",
            "localStorage.setItem('myArray', JSON.stringify(myArray))",
            "localStorage.saveArray('myArray', myArray)",
            "localStorage.myArray = myArray"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "localStorage.setItem('myArray', JSON.stringify(myArray))",
            "difficulty": "medium",
            "explanation": "Arrays must be converted to strings before storing in localStorage. JSON.stringify() converts the array to a JSON string that preserves its structure and can later be parsed back into an array using JSON.parse().",
            "hint": "You need to serialize the array to properly store its structure and values."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "How do you remove a specific item from localStorage?",
            "options": [
            "localStorage.delete(key)",
            "localStorage.removeItem(key)",
            "localStorage.clear(key)",
            "delete localStorage[key]"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "localStorage.removeItem(key)",
            "difficulty": "easy",
            "explanation": "The removeItem() method of the Storage interface removes the key/value pair with the given key from the storage object.",
            "hint": "This method specifically targets a single item by its key."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "How do you clear all items from sessionStorage?",
            "options": [
            "sessionStorage.clearAll()",
            "sessionStorage.removeAll()",
            "sessionStorage.clear()",
            "sessionStorage.reset()"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "sessionStorage.clear()",
            "difficulty": "easy",
            "explanation": "The clear() method of the Storage interface removes all key/value pairs from the storage object.",
            "hint": "This method empties the entire storage without needing to specify individual keys."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "In which context is data stored in localStorage and sessionStorage accessible?",
            "options": [
            "Across all tabs and windows from any domain",
            "Only in the exact tab where it was set",
            "Same origin (domain, protocol, and port)",
            "Only in secure (HTTPS) contexts"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Same origin (domain, protocol, and port)",
            "difficulty": "medium",
            "explanation": "Web Storage (both localStorage and sessionStorage) follows the same-origin policy. This means data is accessible only to pages from the same origin (same domain, protocol, and port). This is a security feature to prevent cross-site scripting attacks.",
            "hint": "This follows the same security boundaries as many other web APIs."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which event is fired when localStorage or sessionStorage is modified?",
            "options": [
            "storagechange",
            "change",
            "storage",
            "update"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "storage",
            "difficulty": "medium",
            "explanation": "The 'storage' event is fired when a storage area (localStorage or sessionStorage) has been modified in the context of another document. This event is not fired within the same document that made the change.",
            "hint": "This event allows other tabs or windows to react to storage changes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What is the correct way to check if localStorage is supported in the browser?",
            "options": [
            "if (window.localStorage) { ... }",
            "if (typeof localStorage !== 'undefined') { ... }",
            "if (localStorage.isSupported()) { ... }",
            "Both A and B are correct"
            ],
            "correctOptionIndex": 3,
            "correctOptionText": "Both A and B are correct",
            "difficulty": "medium",
            "explanation": "Both checking if window.localStorage exists and using typeof to check if localStorage is undefined are valid ways to detect support. However, for full feature detection, you should also test if you can actually use it by trying to set and get an item in a try-catch block, as some browsers may have localStorage but have it disabled.",
            "hint": "Multiple approaches can work for basic feature detection."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which of the following is NOT a valid way to access a localStorage item?",
            "options": [
            "localStorage.getItem('key')",
            "localStorage['key']",
            "localStorage.key",
            "All of these are valid"
            ],
            "correctOptionIndex": 3,
            "correctOptionText": "All of these are valid",
            "difficulty": "medium",
            "explanation": "All three methods are valid ways to access localStorage items. The formal method is getItem(), but because localStorage implements the Storage interface which allows property access, you can also use square bracket notation or direct property access.",
            "hint": "JavaScript provides multiple syntaxes for accessing this type of storage."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What is the scope of sessionStorage data?",
            "options": [
            "Limited to the tab/window that created it",
            "Available across all tabs of the same origin",
            "Available only during the first 30 minutes of a session",
            "Limited to secure (HTTPS) connections only"
            ],
            "correctOptionIndex": 0,
            "correctOptionText": "Limited to the tab/window that created it",
            "difficulty": "medium",
            "explanation": "sessionStorage is scoped to the current browser tab or window. Each tab/window has its own separate sessionStorage instance, even if they're from the same origin. This is different from localStorage, which is shared across all tabs/windows from the same origin.",
            "hint": "This type of storage is more isolated than localStorage."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What happens to localStorage data when you use private/incognito browsing mode?",
            "options": [
            "It works the same as in regular browsing mode",
            "It's encrypted but otherwise works normally",
            "It's treated like sessionStorage and cleared when the private browsing session ends",
            "localStorage is completely disabled in private browsing"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "It's treated like sessionStorage and cleared when the private browsing session ends",
            "difficulty": "medium",
            "explanation": "In private/incognito browsing modes, browsers typically allow localStorage to be used, but they discard the data when the private browsing session ends. This means localStorage effectively behaves like sessionStorage in these modes, preserving the privacy expectations of incognito mode.",
            "hint": "This behavior supports the privacy guarantees of this browsing mode."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which method returns the name of the key at the specified index in localStorage?",
            "options": [
            "localStorage.getName(index)",
            "localStorage.keyName(index)",
            "localStorage.key(index)",
            "localStorage.getKeyAt(index)"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "localStorage.key(index)",
            "difficulty": "medium",
            "explanation": "The key() method of the Storage interface returns the name of the key at the specified index. This is useful for iterating through all keys in storage when you don't know their names in advance.",
            "hint": "This method allows you to enumerate all keys in the storage object."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "How can you determine the number of items stored in sessionStorage?",
            "options": [
            "sessionStorage.count",
            "sessionStorage.size",
            "sessionStorage.length",
            "sessionStorage.getSize()"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "sessionStorage.length",
            "difficulty": "medium",
            "explanation": "The length property of the Storage interface returns the number of key/value pairs currently present in the storage object.",
            "hint": "This property follows the same naming convention as for determining the size of arrays and other collections in JavaScript."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What happens when you exceed the storage limit for localStorage?",
            "options": [
            "Older items are automatically deleted to make room",
            "A QuotaExceededError is thrown",
            "The browser prompts the user to allow more storage",
            "The data is compressed automatically"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "A QuotaExceededError is thrown",
            "difficulty": "hard",
            "explanation": "When trying to add data that would exceed the localStorage quota (typically around 5MB), browsers throw a QuotaExceededError or a similar error. The operation fails, and it's up to the developer to handle this situation by clearing unnecessary data or informing the user.",
            "hint": "The browser doesn't automatically manage storage limits — this must be handled by your code."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which of the following data types will NOT be correctly restored after using JSON.stringify() and JSON.parse() with localStorage?",
            "options": [
            "Arrays",
            "Date objects",
            "Nested objects",
            "Numbers"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Date objects",
            "difficulty": "hard",
            "explanation": "Date objects are serialized to strings when using JSON.stringify(), but when deserialized with JSON.parse(), they remain as strings rather than being converted back to Date objects. This means you lose the Date methods and need to manually reconstruct Date objects from the strings.",
            "hint": "Some JavaScript objects lose their prototype and methods during the JSON serialization process."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "When using the storage event to detect changes to localStorage, in which scenario will the event NOT fire?",
            "options": [
            "When localStorage is modified in another tab",
            "When localStorage is modified in an iframe from the same origin",
            "When localStorage is modified in the same script that's listening for the event",
            "When localStorage is cleared entirely"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "When localStorage is modified in the same script that's listening for the event",
            "difficulty": "hard",
            "explanation": "The storage event is only triggered for localStorage or sessionStorage changes made in other documents/windows/tabs, not within the same document where the listener is set up. This prevents potential infinite loops and performance issues from self-triggered events.",
            "hint": "This event is primarily for cross-document communication rather than tracking your own changes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What information does the storage event object include?",
            "options": [
            "Only the key that was changed",
            "The key, old value, new value, and URL of the document that made the change",
            "Only the new value that was set",
            "Only a boolean indicating that storage changed"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "The key, old value, new value, and URL of the document that made the change",
            "difficulty": "hard",
            "explanation": "The storage event object includes several properties: key (the key that was changed), oldValue (the previous value), newValue (the new value), storageArea (the storage object that was modified), and url (the URL of the document that made the change).",
            "hint": "This event provides comprehensive information about what changed and where."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What's the best practice for storing sensitive user data like passwords or credit card information?",
            "options": [
            "Encrypt it before storing in localStorage",
            "Use sessionStorage instead of localStorage",
            "Never store sensitive data in browser storage",
            "Set an expiration time on the localStorage item"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "Never store sensitive data in browser storage",
            "difficulty": "medium",
            "explanation": "Web Storage (both localStorage and sessionStorage) is not secure for sensitive data as it's stored in plaintext and accessible to any JavaScript running on the page. Even with client-side encryption, the encryption keys would need to be stored somewhere accessible to JavaScript. Sensitive data should instead be handled server-side with proper security measures.",
            "hint": "Consider the security implications of client-side accessible storage."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What's the relationship between cookies and Web Storage (localStorage/sessionStorage)?",
            "options": [
            "They're the same technology with different names",
            "Cookies are automatically synchronized with localStorage",
            "They're separate storage mechanisms with different characteristics and use cases",
            "Web Storage is the newer version that replaced cookies"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "They're separate storage mechanisms with different characteristics and use cases",
            "difficulty": "medium",
            "explanation": "Cookies and Web Storage are separate technologies. Key differences: cookies are sent with every HTTP request while Web Storage stays in the browser; cookies have a smaller capacity (4KB vs 5MB); cookies can have expiration dates and be server or client set; Web Storage is JavaScript-only and has simpler APIs.",
            "hint": "Each technology has distinct features and limitations that make them suitable for different use cases."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which pattern is useful for working with complex data in localStorage?",
            "options": [
            "Using a prefix for related keys",
            "Storing everything in one large JSON object",
            "Creating multiple small storage objects",
            "All of the above can be valid depending on the use case"
            ],
            "correctOptionIndex": 3,
            "correctOptionText": "All of the above can be valid depending on the use case",
            "difficulty": "hard",
            "explanation": "Different patterns are suitable for different scenarios: key prefixes help organize related data (e.g., 'user:preferences', 'user:history'); a single large object might be simpler for small apps; multiple small objects can help avoid the 5MB limit. The best approach depends on data structure, update frequency, and performance needs.",
            "hint": "Data storage strategies should be chosen based on specific application requirements."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What happens to data in sessionStorage when a user refreshes the page?",
            "options": [
            "It's cleared completely",
            "It persists as long as the tab remains open",
            "It's transferred to localStorage automatically",
            "It's only retained if the refresh happens within 5 minutes"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "It persists as long as the tab remains open",
            "difficulty": "medium",
            "explanation": "sessionStorage data persists through page refreshes and restores as long as the browser tab remains open. The data is only cleared when the tab or window is closed. This makes it useful for preserving form data or application state through refreshes.",
            "hint": "The 'session' in sessionStorage refers to the browser tab session, not just a single page load."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What happens to localStorage data when the user clears their browser cache?",
            "options": [
            "localStorage data always remains intact when clearing cache",
            "Only localStorage data older than 30 days is cleared",
            "It depends on the browser and cache clearing options selected",
            "localStorage is always cleared along with the cache"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "It depends on the browser and cache clearing options selected",
            "difficulty": "medium",
            "explanation": "The behavior varies by browser and the specific options the user selects when clearing browsing data. Most browsers separate cache clearing from site data/localStorage clearing, but users may choose to clear both. Some 'clear everything' options will remove localStorage data along with cache.",
            "hint": "Browsers typically offer granular options for clearing different types of stored data."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which of the following is a valid alternative to localStorage when you need to store larger amounts of data?",
            "options": [
            "sessionStorage with compression",
            "WebSQL",
            "IndexedDB",
            "Browser cache API"
            ],
            "correctOptionIndex": 2,
            "correctOptionText": "IndexedDB",
            "difficulty": "hard",
            "explanation": "IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. It's the recommended solution when localStorage's 5MB limit is insufficient. WebSQL is deprecated, sessionStorage has the same limitations as localStorage, and the Cache API is primarily for response objects in service workers.",
            "hint": "This technology provides a more robust database-like storage system in the browser."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which statement about performance considerations for localStorage is true?",
            "options": [
            "localStorage operations are always asynchronous to prevent blocking the UI",
            "localStorage operations are synchronous and can block the main thread",
            "localStorage automatically uses Web Workers to prevent performance issues",
            "localStorage operations never impact performance regardless of data size"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "localStorage operations are synchronous and can block the main thread",
            "difficulty": "hard",
            "explanation": "localStorage operations are synchronous and run on the main thread. This means that large read/write operations can temporarily block UI updates and responsiveness. For performance-critical applications with large data operations, asynchronous alternatives like IndexedDB are recommended.",
            "hint": "This characteristic can affect user experience in apps that process large amounts of data."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What's the best way to store and retrieve a boolean value in localStorage?",
            "options": [
            "Store it directly: localStorage.setItem('key', value)",
            "Convert to string: localStorage.setItem('key', value.toString())",
            "Store as 0/1: localStorage.setItem('key', value ? 1 : 0)",
            "Store as string 'true'/'false' and compare with === 'true' when retrieving"
            ],
            "correctOptionIndex": 3,
            "correctOptionText": "Store as string 'true'/'false' and compare with === 'true' when retrieving",
            "difficulty": "medium",
            "explanation": "Since localStorage stores everything as strings, booleans need special handling. The most explicit approach is to store them as 'true'/'false' strings and then compare the retrieved value with === 'true'. This works because the string 'false' is truthy in JavaScript, so a simple Boolean() conversion would return true for both 'true' AND 'false' strings.",
            "hint": "Remember that all values from localStorage are returned as strings, which affects how you should compare them."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "Which of the following concepts is NOT related to Web Storage security?",
            "options": [
            "Same-origin policy",
            "XSS (Cross-Site Scripting) vulnerabilities",
            "Content Security Policy (CSP)",
            "OAuth authentication"
            ],
            "correctOptionIndex": 3,
            "correctOptionText": "OAuth authentication",
            "difficulty": "hard",
            "explanation": "OAuth is an authentication protocol used for secure authorization in API access, but it's not directly related to Web Storage security. The other options are relevant: same-origin policy restricts storage access between domains; XSS attacks can compromise stored data; and CSP can help prevent unauthorized script execution that might access storage.",
            "hint": "One of these is primarily about API authorization rather than browser storage security."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "Local Storage & Session Storage",
            "questionText": "What's a recommended pattern for versioning data stored in localStorage?",
            "options": [
            "Store each version separately with numeric suffixes",
            "Include a version field in your stored data objects",
            "Use timestamps as version indicators",
            "Update all users to the new version simultaneously"
            ],
            "correctOptionIndex": 1,
            "correctOptionText": "Include a version field in your stored data objects",
            "difficulty": "hard",
            "explanation": "Including a version field in your stored data objects allows your code to detect outdated data structures and migrate or update them as needed. This pattern helps manage schema changes and ensures backward compatibility when your application evolves.",
            "hint": "This approach lets your application code detect and handle different data structures over time."
        },
        // JavaScript Build Tools
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the primary purpose of webpack?",
            "options": ["To minify JavaScript files", "To bundle modules and assets", "To test JavaScript code", "To transpile ES6 to ES5"],
            "correctOptionIndex": 1,
            "correctOptionText": "To bundle modules and assets",
            "difficulty": "easy",
            "explanation": "Webpack is primarily a module bundler that can process and bundle JavaScript modules along with their dependencies and assets into static files.",
            "hint": "Think about what webpack does with multiple JS files and resources."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "Which tool is used to automatically restart a Node.js application when file changes are detected?",
            "options": ["Grunt", "Gulp", "Nodemon", "Babel"],
            "correctOptionIndex": 2,
            "correctOptionText": "Nodemon",
            "difficulty": "easy",
            "explanation": "Nodemon is a utility that monitors for changes in your Node.js application and automatically restarts the server, which is useful during development.",
            "hint": "This tool's name implies it monitors Node.js applications."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is Babel primarily used for in modern JavaScript development?",
            "options": ["Bundling modules", "Transpiling modern JavaScript to older versions", "Running tests", "Managing dependencies"],
            "correctOptionIndex": 1,
            "correctOptionText": "Transpiling modern JavaScript to older versions",
            "difficulty": "easy",
            "explanation": "Babel is a JavaScript compiler that allows developers to write code using the latest JavaScript features and then transforms (transpiles) it to older JavaScript that can run in environments that don't support those features.",
            "hint": "Babel helps with browser compatibility issues."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "Which file is typically used to configure npm packages and dependencies?",
            "options": ["package.json", "webpack.config.js", "babelrc.json", "npmrc.json"],
            "correctOptionIndex": 0,
            "correctOptionText": "package.json",
            "difficulty": "easy",
            "explanation": "The package.json file contains metadata about a JavaScript project, including the list of dependencies and scripts that can be run with the npm command.",
            "hint": "This is the main configuration file for npm projects."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the purpose of the 'npm run' command?",
            "options": ["To install all dependencies", "To execute scripts defined in package.json", "To update npm itself", "To create a new package.json file"],
            "correctOptionIndex": 1,
            "correctOptionText": "To execute scripts defined in package.json",
            "difficulty": "easy",
            "explanation": "The 'npm run' command executes scripts that are defined in the 'scripts' section of a project's package.json file.",
            "hint": "Look at the 'scripts' section in package.json to understand what this command does."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is a Webpack loader?",
            "options": ["A tool to load webpack itself", "A preprocessing function that transforms source files", "A plugin to optimize bundle size", "A server for development"],
            "correctOptionIndex": 1,
            "correctOptionText": "A preprocessing function that transforms source files",
            "difficulty": "medium",
            "explanation": "Webpack loaders are preprocessing functions that transform files before they're added to the dependency graph. They allow webpack to process different types of files beyond JavaScript.",
            "hint": "Loaders help webpack understand and process non-JavaScript files like CSS or images."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "Which of the following is NOT a JavaScript package manager?",
            "options": ["npm", "Yarn", "pnpm", "Grunt"],
            "correctOptionIndex": 3,
            "correctOptionText": "Grunt",
            "difficulty": "medium",
            "explanation": "Grunt is a JavaScript task runner, not a package manager. npm, Yarn, and pnpm are all package managers used to install and manage library dependencies.",
            "hint": "Three options help manage dependencies, but one is focused on automating tasks."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the primary difference between Gulp and Grunt?",
            "options": ["Gulp uses a streaming build system while Grunt is configuration-based", "Gulp is deprecated while Grunt is still maintained", "Gulp is for React projects while Grunt is for Angular", "There is no difference; they are the same tool"],
            "correctOptionIndex": 0,
            "correctOptionText": "Gulp uses a streaming build system while Grunt is configuration-based",
            "difficulty": "medium",
            "explanation": "The key difference is in how they approach build processes. Gulp uses code-over-configuration with a streaming approach (piping output between tasks), while Grunt is more configuration-focused with explicit temp files between tasks.",
            "hint": "Think about how data flows between tasks in these two task runners."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is tree shaking in JavaScript bundling?",
            "options": ["A technique to organize the folder structure", "A process to remove unused code from the bundle", "A method to add polyfills automatically", "A way to visualize dependency tree"],
            "correctOptionIndex": 1,
            "correctOptionText": "A process to remove unused code from the bundle",
            "difficulty": "medium",
            "explanation": "Tree shaking is an optimization technique in JavaScript bundling that eliminates dead code by removing exports that aren't imported by any module, resulting in smaller bundle sizes.",
            "hint": "It's related to optimizing bundle size by removing unnecessary parts."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "Which of the following tools is used for linting JavaScript code?",
            "options": ["Prettier", "Jest", "ESLint", "Mocha"],
            "correctOptionIndex": 2,
            "correctOptionText": "ESLint",
            "difficulty": "medium",
            "explanation": "ESLint is a static code analysis tool (linter) for JavaScript that identifies problematic patterns or code that doesn't adhere to certain style guidelines.",
            "hint": "This tool helps enforce coding standards and find potential errors before execution."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the main purpose of Webpack's HMR (Hot Module Replacement)?",
            "options": ["To improve compile time", "To update modules without a full page refresh", "To reduce bundle size", "To add TypeScript support"],
            "correctOptionIndex": 1,
            "correctOptionText": "To update modules without a full page refresh",
            "difficulty": "medium",
            "explanation": "Hot Module Replacement (HMR) is a webpack feature that allows modules to be updated at runtime without needing a full page refresh, which significantly improves the development experience.",
            "hint": "This feature is particularly useful during development to preserve application state while making changes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the purpose of the 'browserslist' configuration in web development projects?",
            "options": ["To list browsers that the application supports", "To automatically open browsers during development", "To test the application in multiple browsers", "To detect which browser a user is using"],
            "correctOptionIndex": 0,
            "correctOptionText": "To list browsers that the application supports",
            "difficulty": "medium",
            "explanation": "Browserslist is a configuration that specifies which browsers should be supported in your frontend app, which is used by tools like Autoprefixer, Babel and others to determine the JavaScript features to polyfill and CSS prefixes to add.",
            "hint": "This configuration helps tools like Babel and PostCSS know what transformations are needed."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "Which tool would you use to format your code automatically according to predefined rules?",
            "options": ["ESLint", "Webpack", "Prettier", "Babel"],
            "correctOptionIndex": 2,
            "correctOptionText": "Prettier",
            "difficulty": "medium",
            "explanation": "Prettier is an opinionated code formatter that automatically formats code according to a set of rules, ensuring consistent code style throughout a project.",
            "hint": "This tool focuses on making your code look consistent, not on finding bugs or bundling."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the difference between dependencies and devDependencies in package.json?",
            "options": ["There is no difference", "dependencies are required for production, devDependencies for development only", "dependencies are installed globally, devDependencies locally", "dependencies are for frontend, devDependencies for backend"],
            "correctOptionIndex": 1,
            "correctOptionText": "dependencies are required for production, devDependencies for development only",
            "difficulty": "medium",
            "explanation": "In package.json, dependencies are packages required by your application in production, while devDependencies are only needed for local development and testing.",
            "hint": "Think about which packages would be needed when deploying your application versus only when developing it."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is Rollup primarily optimized for?",
            "options": ["Full-stack applications", "Library and package development", "Single page applications", "Mobile applications"],
            "correctOptionIndex": 1,
            "correctOptionText": "Library and package development",
            "difficulty": "medium",
            "explanation": "Rollup is a module bundler that is particularly well-suited for library and package development because of its tree-shaking capabilities and ability to produce smaller, more efficient bundles for libraries.",
            "hint": "Consider what type of JavaScript project would benefit most from extremely efficient bundles."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What does the command 'npm ci' do?",
            "options": ["Checks for updates to installed packages", "Installs packages exactly as specified in package-lock.json", "Creates a new package.json file", "Removes unused dependencies"],
            "correctOptionIndex": 1,
            "correctOptionText": "Installs packages exactly as specified in package-lock.json",
            "difficulty": "medium",
            "explanation": "The 'npm ci' (clean install) command installs dependencies exactly as specified in the package-lock.json file, bypassing package.json. It's faster and more reliable for automated environments.",
            "hint": "This command is commonly used in CI/CD pipelines for consistent installations."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "Which of the following is a zero-configuration bundler designed for quick setup?",
            "options": ["Webpack", "Rollup", "Parcel", "Browserify"],
            "correctOptionIndex": 2,
            "correctOptionText": "Parcel",
            "difficulty": "medium",
            "explanation": "Parcel is a web application bundler that differentiates itself by requiring zero configuration, making it very easy to get started with compared to other bundlers like Webpack.",
            "hint": "This bundler focuses on simplicity and works out of the box without config files."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the purpose of source maps in JavaScript build tools?",
            "options": ["To create a map of all source files", "To map minified code back to original source for debugging", "To visualize dependencies between modules", "To improve load time of JavaScript files"],
            "correctOptionIndex": 1,
            "correctOptionText": "To map minified code back to original source for debugging",
            "difficulty": "medium",
            "explanation": "Source maps are files that map transpiled or bundled JavaScript back to their original source code, allowing developers to debug the original code even when running the processed version in the browser.",
            "hint": "Think about how you can still debug readable code when the browser is actually running minified code."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What does the 'esbuild' tool optimize for compared to other bundlers?",
            "options": ["File size", "Build speed", "Code quality", "Browser compatibility"],
            "correctOptionIndex": 1,
            "correctOptionText": "Build speed",
            "difficulty": "hard",
            "explanation": "esbuild is a JavaScript bundler that is significantly faster than other bundlers like Webpack or Rollup because it's written in Go and focuses on build performance, often completing builds 10-100x faster.",
            "hint": "This relatively newer bundler has gained popularity for one very specific advantage."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "Which pattern is being used in the following webpack configuration snippet? `{ test: /\\.css$/, use: ['style-loader', 'css-loader'] }`",
            "options": ["Plugin configuration", "Entry point definition", "Loader chain", "Output configuration"],
            "correctOptionIndex": 2,
            "correctOptionText": "Loader chain",
            "difficulty": "hard",
            "explanation": "This is a loader chain configuration where multiple loaders are applied to files matching the test pattern. In this case, CSS files are processed first by css-loader (which interprets @import and url()) and then by style-loader (which injects CSS into the DOM).",
            "hint": "Notice how multiple tools are being applied in sequence to process certain file types."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the difference between 'npm install' and 'npm update'?",
            "options": ["They are identical commands", "install adds new packages, update refreshes existing ones", "install is for development, update is for production", "install uses package.json, update uses package-lock.json"],
            "correctOptionIndex": 1,
            "correctOptionText": "install adds new packages, update refreshes existing ones",
            "difficulty": "hard",
            "explanation": "npm install installs packages according to package.json, while npm update updates packages to the latest version allowed by the version range specified in package.json while respecting semver.",
            "hint": "Think about what happens to already installed packages in each case."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the purpose of the 'sideEffects' property in package.json when using webpack?",
            "options": ["To list known bugs", "To enable experimental features", "To indicate which files have side effects for tree shaking", "To specify browser compatibility"],
            "correctOptionIndex": 2,
            "correctOptionText": "To indicate which files have side effects for tree shaking",
            "difficulty": "hard",
            "explanation": "The 'sideEffects' property in package.json is used with webpack to indicate which files in your package have side effects. This helps webpack's tree shaking feature safely eliminate unused exports.",
            "hint": "This property relates to optimizing bundle size by identifying pure and impure code."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "In the context of module bundlers, what is code splitting?",
            "options": ["Dividing code into smaller files for readability", "Breaking a monolithic build into multiple bundles that can be loaded on demand", "Separating frontend and backend code", "Dividing code by programming language"],
            "correctOptionIndex": 1,
            "correctOptionText": "Breaking a monolithic build into multiple bundles that can be loaded on demand",
            "difficulty": "hard",
            "explanation": "Code splitting is a technique used by bundlers like webpack to split your code into various bundles that can be loaded on demand or in parallel, reducing the initial load time of the application.",
            "hint": "This technique helps optimize initial page load by only loading what's needed."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What would be the result of using both Babel and TypeScript in a project's build chain?",
            "options": ["Configuration conflicts that break the build", "TypeScript would override Babel completely", "TypeScript would handle static typing while Babel would handle newer JavaScript features", "They serve the same purpose so it would be redundant"],
            "correctOptionIndex": 2,
            "correctOptionText": "TypeScript would handle static typing while Babel would handle newer JavaScript features",
            "difficulty": "hard",
            "explanation": "In a project using both, TypeScript would typically handle type checking and type-based transformations, while Babel would handle polyfilling and transpiling newer JavaScript features to target environments. They can work together in a complementary way.",
            "hint": "Consider the primary purpose of each tool and how they might complement each other."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the primary difference between npm and npx?",
            "options": ["npm installs packages, npx executes them without installing globally", "npm is older and deprecated, npx is the replacement", "npm is for Node.js packages, npx is for browser packages", "There is no difference; they are aliases of the same command"],
            "correctOptionIndex": 0,
            "correctOptionText": "npm installs packages, npx executes them without installing globally",
            "difficulty": "hard",
            "explanation": "npm (Node Package Manager) is used to install packages, while npx is a tool that comes with npm and allows you to execute packages without having to install them globally or manage path references.",
            "hint": "Think about running a package's binary directly versus having to install it first."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What does Webpack's 'DefinePlugin' primarily do?",
            "options": ["Defines new JavaScript syntax", "Allows environment variables to be used in the bundled code", "Creates IDE definitions for custom functions", "Enforces strict type definitions"],
            "correctOptionIndex": 1,
            "correctOptionText": "Allows environment variables to be used in the bundled code",
            "difficulty": "hard",
            "explanation": "Webpack's DefinePlugin allows you to create global constants that are resolved at compile time. This is commonly used to inject environment variables into your application bundle.",
            "hint": "This plugin helps with creating different builds for development vs. production environments."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is a key advantage of using Yarn's Plug'n'Play feature?",
            "options": ["It eliminates the need for a node_modules folder", "It improves security by scanning all packages", "It automatically updates packages", "It provides better TypeScript integration"],
            "correctOptionIndex": 0,
            "correctOptionText": "It eliminates the need for a node_modules folder",
            "difficulty": "hard",
            "explanation": "Yarn's Plug'n'Play feature eliminates the need for the node_modules directory by keeping track of dependencies in a single .pnp.js file, which improves installation speed and reliability.",
            "hint": "This feature changes how Node.js resolves dependencies, eliminating a traditionally large folder."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What is the purpose of the 'engines' field in package.json?",
            "options": ["To specify which browsers the code supports", "To define which Node.js/npm versions the package works with", "To enable hardware acceleration", "To configure which cloud platforms to deploy to"],
            "correctOptionIndex": 1,
            "correctOptionText": "To define which Node.js/npm versions the package works with",
            "difficulty": "hard",
            "explanation": "The 'engines' field in package.json allows you to specify which versions of Node.js, npm, or other engines your package is compatible with, which helps prevent installation in incompatible environments.",
            "hint": "This helps ensure developers are using compatible runtime environments."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "What does the 'tree' argument do when used with npm ls?",
            "options": ["Shows dependencies as a visual tree", "Limits the depth of dependencies shown", "Displays only production dependencies", "Creates a dependency graph file"],
            "correctOptionIndex": 1,
            "correctOptionText": "Limits the depth of dependencies shown",
            "difficulty": "hard",
            "explanation": "When used with npm ls, the 'tree' argument or --depth flag limits how many levels of dependency nesting are displayed, helping to make the output more manageable for projects with many dependencies.",
            "hint": "This helps control the verbosity of dependency listings in complex projects."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Build Tools",
            "questionText": "Which tool would you use to analyze the size and composition of your webpack bundle?",
            "options": ["webpack-dev-server", "webpack-bundle-analyzer", "webpack-hot-middleware", "html-webpack-plugin"],
            "correctOptionIndex": 1,
            "correctOptionText": "webpack-bundle-analyzer",
            "difficulty": "hard",
            "explanation": "webpack-bundle-analyzer is a plugin that generates an interactive treemap visualization of the content of your bundles, helping you identify large dependencies and optimize bundle size.",
            "hint": "This tool helps you visually understand what's contributing to your bundle size."
        },
    
        // JavaScript Testing
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the purpose of unit testing in JavaScript?",
            "options": ["To test the UI of an application", "To verify individual functions work correctly in isolation", "To check if an application works on different browsers", "To measure application performance"],
            "correctOptionIndex": 1,
            "correctOptionText": "To verify individual functions work correctly in isolation",
            "difficulty": "easy",
            "explanation": "Unit testing focuses on testing individual units of code (typically functions) in isolation to ensure they behave as expected regardless of the rest of the application.",
            "hint": "Think about testing the smallest parts of your code independently."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "Which of the following is a popular JavaScript testing framework?",
            "options": ["Express", "jQuery", "Jest", "Lodash"],
            "correctOptionIndex": 2,
            "correctOptionText": "Jest",
            "difficulty": "easy",
            "explanation": "Jest is a popular JavaScript testing framework developed by Facebook. It's widely used for testing JavaScript applications, particularly React applications.",
            "hint": "This testing framework is commonly used with React applications."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What does 'TDD' stand for in software development?",
            "options": ["Type-Driven Development", "Test-Driven Development", "Time-Dependent Debugging", "Technical Design Document"],
            "correctOptionIndex": 1,
            "correctOptionText": "Test-Driven Development",
            "difficulty": "easy",
            "explanation": "TDD (Test-Driven Development) is a development process where you write tests before writing the actual code. The process follows the cycle of writing a failing test, writing code to make it pass, and then refactoring.",
            "hint": "This approach involves writing tests before implementing functionality."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is an assertion in testing?",
            "options": ["A function that checks if a condition is true", "A variable declaration", "A way to mock external dependencies", "A testing framework"],
            "correctOptionIndex": 0,
            "correctOptionText": "A function that checks if a condition is true",
            "difficulty": "easy",
            "explanation": "An assertion is a statement that checks if a specific condition is true. If the condition is false, the assertion fails, indicating a problem with the code being tested.",
            "hint": "Think about how you verify expected outcomes in tests."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "Which function is commonly used to group related test cases in Jest?",
            "options": ["test()", "group()", "describe()", "suite()"],
            "correctOptionIndex": 2,
            "correctOptionText": "describe()",
            "difficulty": "easy",
            "explanation": "In Jest, the describe() function is used to group related test cases into a test suite, providing better organization and readability.",
            "hint": "This function helps organize tests into logical groups."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the purpose of a test runner?",
            "options": ["To write test cases", "To discover and execute tests", "To debug failing tests", "To generate test reports"],
            "correctOptionIndex": 1,
            "correctOptionText": "To discover and execute tests",
            "difficulty": "medium",
            "explanation": "A test runner is a tool that discovers tests in your codebase, executes them, and reports the results. It automates the process of running tests so you don't have to run each test manually.",
            "hint": "Think about what component handles finding and running your tests."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is a mock in the context of testing?",
            "options": ["A function that fails intentionally", "A simulated version of a function or module", "A debugging tool", "A type of test assertion"],
            "correctOptionIndex": 1,
            "correctOptionText": "A simulated version of a function or module",
            "difficulty": "medium",
            "explanation": "A mock is a simulated object or function that mimics the behavior of real components in controlled ways. Mocks are used to isolate the code being tested from its dependencies.",
            "hint": "This helps you test code that depends on external systems or complex objects."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the difference between beforeEach() and beforeAll() in Jest?",
            "options": ["There is no difference", "beforeEach() runs before each test, beforeAll() runs once before all tests", "beforeEach() is for synchronous setup, beforeAll() is for asynchronous", "beforeEach() is deprecated, beforeAll() is the recommended approach"],
            "correctOptionIndex": 1,
            "correctOptionText": "beforeEach() runs before each test, beforeAll() runs once before all tests",
            "difficulty": "medium",
            "explanation": "beforeEach() runs before each individual test case, allowing you to reset test conditions. beforeAll() runs once before any tests in a describe block, which is useful for one-time setup operations.",
            "hint": "Think about how many times each function runs during a test suite."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What type of testing focuses on testing the interaction between different units of code?",
            "options": ["Unit testing", "Integration testing", "End-to-end testing", "Smoke testing"],
            "correctOptionIndex": 1,
            "correctOptionText": "Integration testing",
            "difficulty": "medium",
            "explanation": "Integration testing focuses on testing how different units of code work together. It verifies that different components of the application integrate properly and function as expected when combined.",
            "hint": "This type of testing checks if modules work correctly when connected."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is code coverage in the context of testing?",
            "options": ["The percentage of code comments in a project", "A measure of how much of your code is executed during tests", "The number of test cases per function", "A metric of code complexity"],
            "correctOptionIndex": 1,
            "correctOptionText": "A measure of how much of your code is executed during tests",
            "difficulty": "medium",
            "explanation": "Code coverage is a metric that measures what percentage of your code is executed when your tests run. It helps identify parts of your code that aren't being tested.",
            "hint": "This metric helps identify untested parts of your codebase."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "Which library would you use for testing React components?",
            "options": ["Mocha", "Jasmine", "React-Test", "React Testing Library"],
            "correctOptionIndex": 3,
            "correctOptionText": "React Testing Library",
            "difficulty": "medium",
            "explanation": "React Testing Library is a set of utilities specifically designed for testing React components. It encourages testing components in a way that resembles how users would interact with them.",
            "hint": "This library focuses on testing React components from a user's perspective."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is a spy in testing frameworks like Jasmine or Jest?",
            "options": ["A function that reports bugs automatically", "A tool that monitors application performance", "A function that tracks calls to other functions", "A security testing tool"],
            "correctOptionIndex": 2,
            "correctOptionText": "A function that tracks calls to other functions",
            "difficulty": "medium",
            "explanation": "A spy is a function that allows you to track calls to another function, including arguments passed and return values, without affecting the function's actual behavior. It's useful for verifying that functions are called as expected.",
            "hint": "This testing feature lets you monitor function calls without changing their behavior."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is snapshot testing in Jest?",
            "options": ["Testing how fast components render", "Comparing the current UI with a saved 'snapshot' to detect changes", "Taking screenshots of failing tests", "Testing with multiple browser versions simultaneously"],
            "correctOptionIndex": 1,
            "correctOptionText": "Comparing the current UI with a saved 'snapshot' to detect changes",
            "difficulty": "medium",
            "explanation": "Snapshot testing in Jest involves capturing the output of a component and comparing it to a previously saved 'snapshot'. It helps detect unexpected changes in UI components.",
            "hint": "This testing approach helps detect unintended changes to component output."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "Which statement correctly creates an asynchronous test in Jest?",
            "options": ["test('async test', async function() {...})", "test.async('async test', function() {...})", "async.test('async test', function() {...})", "test('async test', function(async) {...})"],
            "correctOptionIndex": 0,
            "correctOptionText": "test('async test', async function() {...})",
            "difficulty": "medium",
            "explanation": "To create an asynchronous test in Jest, you use the standard test function but mark the test function as async. This allows you to use await within the test body.",
            "hint": "Think about how you normally write async functions in JavaScript."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the purpose of the 'expect' function in Jest?",
            "options": ["To define test cases", "To create assertion objects that can be matched with various matchers", "To mock external dependencies", "To run tests conditionally"],
            "correctOptionIndex": 1,
            "correctOptionText": "To create assertion objects that can be matched with various matchers",
            "difficulty": "medium",
            "explanation": "The 'expect' function in Jest returns an 'expectation' object, which can be used with various matcher functions (like .toBe(), .toEqual()) to make assertions about values in your tests.",
            "hint": "This function is used with matchers to verify expected outcomes."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the main difference between Mocha and Jest?",
            "options": ["Mocha is for Node.js, Jest is for browser testing only", "Jest is an all-in-one solution, Mocha requires additional libraries", "Mocha is newer than Jest", "Jest cannot test asynchronous code"],
            "correctOptionIndex": 1,
            "correctOptionText": "Jest is an all-in-one solution, Mocha requires additional libraries",
            "difficulty": "medium",
            "explanation": "The main difference is that Jest is an all-in-one testing solution that includes a test runner, assertion library, and mocking capabilities. Mocha provides only a test runner and requires additional libraries like Chai for assertions and Sinon for mocks.",
            "hint": "Think about what additional tools you need when using each framework."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What tool would you use for end-to-end testing of web applications?",
            "options": ["Jest", "Mocha", "Cypress", "Sinon"],
            "correctOptionIndex": 2,
            "correctOptionText": "Cypress",
            "difficulty": "medium",
            "explanation": "Cypress is a JavaScript end-to-end testing framework designed to test web applications as a user would interact with them in a real browser, testing the entire application stack from UI to backend.",
            "hint": "This tool specializes in testing complete user flows through your application."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the purpose of the 'test.only()' function in Jest?",
            "options": ["To mark a test as particularly important", "To run only that specific test and skip others", "To ensure the test runs last", "To run a test with increased timeouts"],
            "correctOptionIndex": 1,
            "correctOptionText": "To run only that specific test and skip others",
            "difficulty": "hard",
            "explanation": "test.only() (or it.only() in some frameworks) tells the test runner to run only this specific test and skip all other tests. It's useful for focusing on a specific failing test during debugging.",
            "hint": "This is helpful when debugging a specific test in a large test suite."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is a test fixture?",
            "options": ["A special type of assertion", "A fixed environment in which tests run", "A function that generates random test data", "A failing test that needs to be fixed"],
            "correctOptionIndex": 1,
            "correctOptionText": "A fixed environment in which tests run",
            "difficulty": "hard",
            "explanation": "A test fixture is a fixed state of the application or environment that ensures tests run reliably and consistently. Fixtures often include setup data, mock objects, or specific configurations needed for testing.",
            "hint": "This term refers to consistent test prerequisites or environment setup."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the difference between shallow rendering and full rendering in React testing?",
            "options": ["Shallow rendering uses less memory", "Shallow rendering only renders the component being tested without children, full rendering includes children", "Shallow rendering is faster but less accurate", "There is no difference; the terms are interchangeable"],
            "correctOptionIndex": 1,
            "correctOptionText": "Shallow rendering only renders the component being tested without children, full rendering includes children",
            "difficulty": "hard",
            "explanation": "Shallow rendering renders the component under test without rendering its child components (they remain as placeholders), while full rendering (mount) renders the component and all its children fully. Shallow rendering is useful for isolated unit tests of a component.",
            "hint": "Think about how much of the component tree is actually rendered in each case."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "In property-based testing, what does a generator do?",
            "options": ["Creates HTML for the test UI", "Produces random but valid inputs for tests", "Generates test reports", "Creates new test cases automatically"],
            "correctOptionIndex": 1,
            "correctOptionText": "Produces random but valid inputs for tests",
            "difficulty": "hard",
            "explanation": "In property-based testing, generators create random but valid inputs for test cases. The tests verify that certain properties hold true for all generated inputs, rather than testing with specific examples.",
            "hint": "This approach involves testing with many randomly generated values rather than a few specific ones."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the purpose of the 'act()' function in React Testing Library?",
            "options": ["To mock React components", "To ensure that UI updates are processed before making assertions", "To activate test coverage reporting", "To render components asynchronously"],
            "correctOptionIndex": 1,
            "correctOptionText": "To ensure that UI updates are processed before making assertions",
            "difficulty": "hard",
            "explanation": "The 'act()' function in React Testing Library ensures that all updates related to state changes, effects, and DOM updates are processed and applied before making assertions about the component. It helps make tests more reliable by mimicking how React works in the browser.",
            "hint": "This function helps tests wait for React's internal operations to complete."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is a stub in the context of testing?",
            "options": ["A function that always throws an error", "A function that validates inputs", "A simplified implementation that replaces a real component", "A test that is temporarily disabled"],
            "correctOptionIndex": 2,
            "correctOptionText": "A simplified implementation that replaces a real component",
            "difficulty": "hard",
            "explanation": "A stub is a simplified implementation that replaces a real function or module during testing. Unlike mocks, stubs don't typically assert how they were called—they simply provide canned responses to certain calls.",
            "hint": "This is similar to a mock but focused on providing predetermined responses."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the main purpose of mutation testing?",
            "options": ["To test if your code works with different data types", "To evaluate the quality of your test suite by introducing bugs", "To test database operations", "To generate random test cases"],
            "correctOptionIndex": 1,
            "correctOptionText": "To evaluate the quality of your test suite by introducing bugs",
            "difficulty": "hard",
            "explanation": "Mutation testing evaluates the effectiveness of your test suite by making small changes (mutations) to your code and checking if your tests catch these changes. If tests still pass after introducing a bug, it indicates a weakness in the test suite.",
            "hint": "This advanced testing technique involves deliberately inserting bugs to see if tests fail."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "Which of the following is NOT a common code coverage metric?",
            "options": ["Statement coverage", "Branch coverage", "Function coverage", "Complexity coverage"],
            "correctOptionIndex": 3,
            "correctOptionText": "Complexity coverage",
            "difficulty": "hard",
            "explanation": "While statement coverage, branch coverage, and function coverage are standard code coverage metrics, 'complexity coverage' is not a standard metric. The common metrics measure the percentage of statements, branches (if/else paths), and functions executed during tests.",
            "hint": "Three of these are standard ways to measure how thoroughly code is tested."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What does the concept of 'flaky tests' refer to?",
            "options": ["Tests that are poorly written", "Tests that sometimes pass and sometimes fail with the same code", "Tests that run very slowly", "Tests with too many assertions"],
            "correctOptionIndex": 1,
            "correctOptionText": "Tests that sometimes pass and sometimes fail with the same code",
            "difficulty": "hard",
            "explanation": "Flaky tests are tests that yield different results (sometimes passing, sometimes failing) even when the code being tested hasn't changed. They're usually caused by dependencies on external factors, race conditions, or timing issues.",
            "hint": "These tests are unreliable because they don't give consistent results."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "In BDD (Behavior-Driven Development), what is a common format for writing test scenarios?",
            "options": ["If-Then statements", "Given-When-Then", "Try-Catch blocks", "Arrange-Act-Assert"],
            "correctOptionIndex": 1,
            "correctOptionText": "Given-When-Then",
            "difficulty": "hard",
            "explanation": "In BDD, test scenarios are often written in the Given-When-Then format: 'Given' sets up the initial context, 'When' describes the action being taken, and 'Then' specifies the expected outcome.",
            "hint": "This format describes the precondition, action, and expected result."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is the main difference between a spy and a mock in testing?",
            "options": ["Spies are for synchronous functions, mocks for asynchronous", "Spies can only observe existing functions, mocks replace functionality", "Spies are used in unit tests, mocks in integration tests", "There is no difference; the terms are interchangeable"],
            "correctOptionIndex": 1,
            "correctOptionText": "Spies can only observe existing functions, mocks replace functionality",
            "difficulty": "hard",
            "explanation": "While both track function calls, spies typically just observe existing functions and record calls without changing behavior. Mocks, on the other hand, replace the actual implementation with a predefined behavior designed for testing.",
            "hint": "Think about whether the original function's behavior is preserved or replaced."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What testing approach does the following code represent: `expect(sum(2, 3)).toEqual(5)`?",
            "options": ["Property-based testing", "Snapshot testing", "Assertion-based testing", "Behavior-driven testing"],
            "correctOptionIndex": 2,
            "correctOptionText": "Assertion-based testing",
            "difficulty": "hard",
            "explanation": "This code represents assertion-based testing, where specific inputs are provided to a function and the output is compared against an expected value using assertions (in this case, `expect` and `toEqual`).",
            "hint": "Notice how the test makes a specific claim about the outcome of a function call."
        },
        {
            "topic": "67d6b45a953bd3a26da2ad84",
            "module": "JavaScript Testing",
            "questionText": "What is Test Doubles in the context of testing?",
            "options": ["When you run a test twice to verify consistency", "A general term for objects that replace real components in tests", "Testing on two different browsers", "When two developers write tests for the same code"],
            "correctOptionIndex": 1,
            "correctOptionText": "A general term for objects that replace real components in tests",
            "difficulty": "hard",
            "explanation": "Test Double is a general term for any object that replaces a real component for testing purposes. Test doubles include mocks, stubs, fakes, spies, and dummies, each serving a different testing purpose.",
            "hint": "This is an umbrella term covering several types of test replacements."
        }

      ]


  export default JSQuestions;
