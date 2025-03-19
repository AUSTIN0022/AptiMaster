const JSQuestions = [
    // JavaScript Basics
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of `typeof NaN`?",
          "options": ["Number", "NaN", "Undefined", "String"],
          "correctOption": "A",
          "difficulty": "medium",
          "explanation": "`NaN` stands for Not-a-Number, but its type is `number`.",
          "hint": "JavaScript treats `NaN` as a special number type."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which of the following is NOT a primitive data type in JavaScript?",
          "options": ["String", "Number", "Boolean", "Array"],
          "correctOption": "D",
          "difficulty": "easy",
          "explanation": "Array is a reference type, not a primitive type. The primitive types in JavaScript are String, Number, Boolean, null, undefined, Symbol, and BigInt.",
          "hint": "Primitive types represent single values, while non-primitive types can contain multiple values."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the output of `console.log(3 + '3')`?",
          "options": ["6", "33", "Error", "undefined"],
          "correctOption": "B",
          "difficulty": "easy",
          "explanation": "When adding a number and a string, JavaScript converts the number to a string and performs string concatenation.",
          "hint": "JavaScript performs type coercion when operators are used with different types."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which operator is used for strict equality comparison in JavaScript?",
          "options": ["==", "===", "=", "!="],
          "correctOption": "B",
          "difficulty": "easy",
          "explanation": "The `===` operator checks for both value and type equality without type coercion.",
          "hint": "The strict equality operator has three equal signs."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of `console.log(typeof undefined)`?",
          "options": ["undefined", "null", "object", "string"],
          "correctOption": "A",
          "difficulty": "easy",
          "explanation": "The `typeof` operator returns 'undefined' when used with the undefined value.",
          "hint": "The `typeof` operator returns a string representing the data type."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of `console.log(typeof null)`?",
          "options": ["null", "undefined", "object", "number"],
          "correctOption": "C",
          "difficulty": "medium",
          "explanation": "Due to a historical bug in JavaScript, `typeof null` returns 'object' instead of 'null'.",
          "hint": "This is a well-known quirk in JavaScript's type system."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which keyword is used to declare a variable that cannot be reassigned?",
          "options": ["var", "let", "const", "static"],
          "correctOption": "C",
          "difficulty": "easy",
          "explanation": "The `const` keyword declares a constant variable that cannot be reassigned after initialization.",
          "hint": "Think about which keyword is used for constant values."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the scope of a variable declared with `var` inside a function?",
          "options": ["Global scope", "Function scope", "Block scope", "Module scope"],
          "correctOption": "B",
          "difficulty": "medium",
          "explanation": "Variables declared with `var` inside a function are function-scoped, meaning they are only accessible within that function.",
          "hint": "Think about where a `var` variable can be accessed when declared inside a function."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of `console.log(0.1 + 0.2 === 0.3)`?",
          "options": ["true", "false", "undefined", "Error"],
          "correctOption": "B",
          "difficulty": "medium",
          "explanation": "Due to floating-point precision issues in JavaScript, 0.1 + 0.2 actually equals 0.30000000000000004, not exactly 0.3.",
          "hint": "JavaScript uses IEEE 754 floating-point arithmetic which can lead to precision issues."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which statement correctly declares a variable and assigns it a value?",
          "options": ["variable x = 5;", "var x : 5;", "var x = 5;", "x := 5;"],
          "correctOption": "C",
          "difficulty": "easy",
          "explanation": "In JavaScript, you declare variables using keywords like `var`, `let`, or `const`, followed by the variable name, then an assignment operator and a value.",
          "hint": "The correct syntax is: keyword variableName = value;"
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the output of `console.log(5 + '5' - 2)`?",
          "options": ["8", "53", "3", "NaN"],
          "correctOption": "B",
          "difficulty": "medium",
          "explanation": "First, `5 + '5'` results in string concatenation, giving '55'. Then, '55' - 2 triggers numeric conversion, resulting in 53.",
          "hint": "JavaScript performs different type conversions depending on the operators used."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which of the following statements is true about `let` and `const`?",
          "options": ["Both are function-scoped", "Both are block-scoped", "let is function-scoped, const is block-scoped", "let is block-scoped, const is function-scoped"],
          "correctOption": "B",
          "difficulty": "medium",
          "explanation": "Both `let` and `const` are block-scoped, meaning they are only accessible within the block they are declared in.",
          "hint": "Block scope means the variable is only accessible within the curly braces {}."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What will `console.log(Boolean(0))` output?",
          "options": ["true", "false", "0", "Error"],
          "correctOption": "B",
          "difficulty": "easy",
          "explanation": "The Boolean() function converts 0 to false, as 0 is considered a falsy value in JavaScript.",
          "hint": "In JavaScript, certain values are considered 'falsy' when converted to boolean."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which of the following is NOT a valid way to declare a variable in JavaScript?",
          "options": ["var x = 10;", "let x = 10;", "const x = 10;", "int x = 10;"],
          "correctOption": "D",
          "difficulty": "easy",
          "explanation": "JavaScript does not use type declarations like `int`. Valid variable declarations use var, let, or const.",
          "hint": "JavaScript is dynamically typed and doesn't require type declarations."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What does the following code return? `console.log(typeof typeof 1)`",
          "options": ["number", "string", "undefined", "NaN"],
          "correctOption": "B",
          "difficulty": "hard",
          "explanation": "`typeof 1` returns 'number', and then `typeof 'number'` returns 'string', because the result of any typeof operation is always a string.",
          "hint": "The `typeof` operator always returns a string representing the type."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of `console.log('5' - 3)`?",
          "options": ["2", "'5-3'", "8", "NaN"],
          "correctOption": "A",
          "difficulty": "medium",
          "explanation": "When using the subtraction operator (-), JavaScript converts the string '5' to a number and performs the subtraction.",
          "hint": "Unlike addition, subtraction always tries to convert operands to numbers."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which operator is used for exponentiation in JavaScript?",
          "options": ["^", "*", "**", "^^"],
          "correctOption": "C",
          "difficulty": "medium",
          "explanation": "The ** operator is used for exponentiation in JavaScript (e.g., 2 ** 3 equals 8).",
          "hint": "This operator was introduced in ES2016 (ES7)."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of `10 % 3`?",
          "options": ["3.33", "1", "0", "3"],
          "correctOption": "B",
          "difficulty": "easy",
          "explanation": "The modulo operator (%) returns the remainder of a division. 10 divided by 3 is 3 with a remainder of 1.",
          "hint": "Think about what remains after dividing 10 by 3 as many times as possible."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of the expression `'b' + 'a' + + 'a' + 'a'`?",
          "options": ["baa", "ba+aa", "baNaNa", "baaa"],
          "correctOption": "C",
          "difficulty": "hard",
          "explanation": "'b' + 'a' gives 'ba'. Then, + 'a' attempts to convert 'a' to a number, which results in NaN. So, 'ba' + NaN + 'a' becomes 'baNaNa'.",
          "hint": "Pay attention to the unary plus operator before the second 'a'."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which of the following is NOT a valid comment in JavaScript?",
          "options": ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "/** This is a comment */"],
          "correctOption": "C",
          "difficulty": "easy",
          "explanation": "<!-- --> is HTML comment syntax, not JavaScript. JavaScript comments use // for single-line and /* */ for multi-line comments.",
          "hint": "JavaScript and HTML have different comment syntaxes."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the output of `console.log(1 + true)`?",
          "options": ["1true", "true1", "2", "Error"],
          "correctOption": "C",
          "difficulty": "medium",
          "explanation": "In JavaScript, true is converted to 1 when used in arithmetic operations, so 1 + true equals 2.",
          "hint": "JavaScript performs type coercion when operators are used with different types."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of `console.log(\"5\" > \"10\")`?",
          "options": ["true", "false", "undefined", "Error"],
          "correctOption": "A",
          "difficulty": "medium",
          "explanation": "When comparing strings, JavaScript compares them lexicographically (character by character). Since '5' comes after '1' in the character set, '5' is greater than '10'.",
          "hint": "String comparison in JavaScript works differently than numeric comparison."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the output of `console.log(undefined == null)`?",
          "options": ["true", "false", "undefined", "Error"],
          "correctOption": "A",
          "difficulty": "medium",
          "explanation": "Using loose equality (==), undefined and null are considered equal. However, with strict equality (===), they are not equal.",
          "hint": "The == operator performs type coercion, which affects how null and undefined compare."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which of the following variable names is NOT valid in JavaScript?",
          "options": ["myVariable", "_value", "123test", "$price"],
          "correctOption": "C",
          "difficulty": "easy",
          "explanation": "Variable names in JavaScript cannot start with a number. They must start with a letter, underscore (_), or dollar sign ($).",
          "hint": "Think about the rules for naming variables in JavaScript."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the result of `console.log(\"Hello\" - \"World\")`?",
          "options": ["NaN", "\"HelloWorld\"", "0", "Error"],
          "correctOption": "A",
          "difficulty": "medium",
          "explanation": "The subtraction operator attempts to convert both strings to numbers. Since neither can be converted to a number, the result is NaN (Not a Number).",
          "hint": "Subtraction in JavaScript always tries to convert operands to numbers."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What will `console.log(\"5\" + + \"5\")` output?",
          "options": ["10", "55", "5+5", "510"],
          "correctOption": "A",
          "difficulty": "hard",
          "explanation": "The unary plus operator (+ before the second \"5\") converts the string to a number. So, \"5\" + + \"5\" becomes \"5\" + 5, which evaluates to 10 (not \"55\").",
          "hint": "Pay attention to the unary plus operator and how it affects the type conversion."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the value of `Math.max()`?",
          "options": ["0", "undefined", "-Infinity", "Infinity"],
          "correctOption": "C",
          "difficulty": "hard",
          "explanation": "When called with no arguments, `Math.max()` returns -Infinity, which is the smallest possible number in JavaScript.",
          "hint": "Think about what would be the initial value for finding the maximum number."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "Which of the following is a valid way to check if a variable is undefined?",
          "options": ["if (variable === undefined)", "if (typeof variable === 'undefined')", "if (variable == null)", "All of the above"],
          "correctOption": "D",
          "difficulty": "medium",
          "explanation": "All three options are valid ways to check if a variable is undefined. However, the second option is safest as it works even if the variable is not declared.",
          "hint": "Consider what happens when a variable doesn't exist at all."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What is the output of `console.log(\"2\" + 2 - \"1\")`?",
          "options": ["21", "1", "3", "NaN"],
          "correctOption": "A",
          "difficulty": "hard",
          "explanation": "First, \"2\" + 2 performs string concatenation, resulting in \"22\". Then, \"22\" - \"1\" performs numeric subtraction, converting both strings to numbers, resulting in 21.",
          "hint": "JavaScript handles + and - operations differently with strings and numbers."
        },
        {
          "topic": "67d6b45a953bd3a26da2ad84",
          "module": "JavaScript Basics",
          "questionText": "What will `console.log(Boolean([]));` output?",
          "options": ["true", "false", "undefined", "Error"],
          "correctOption": "A",
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
              "correctOption": "B",
              "difficulty": "easy",
              "explanation": "`break` exits a loop immediately, terminating the loop's execution.",
              "hint": "Which keyword exits the loop entirely?"
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What does the `continue` statement do in a loop?",
              "options": ["Stops the loop completely", "Skips the current iteration and continues with the next one", "Pauses the loop for one second", "Restarts the loop from the beginning"],
              "correctOption": "B",
              "difficulty": "easy",
              "explanation": "`continue` skips the remaining code within the current iteration and jumps to the next iteration of the loop.",
              "hint": "It allows you to skip parts of a loop without terminating it completely."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "Which of the following is NOT a looping structure in JavaScript?",
              "options": ["for", "while", "do-while", "foreach"],
              "correctOption": "D",
              "difficulty": "easy",
              "explanation": "JavaScript does not have a native `foreach` loop. It has `for`, `while`, `do-while`, and the `forEach` method for arrays (note the camelCase).",
              "hint": "Look for syntax that doesn't exist in JavaScript's core language features."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the result of `(true && false) || true`?",
              "options": ["true", "false", "undefined", "null"],
              "correctOption": "A",
              "difficulty": "medium",
              "explanation": "First, `true && false` evaluates to `false`. Then, `false || true` evaluates to `true` because logical OR returns `true` if either operand is `true`.",
              "hint": "Remember the order of operations: AND (&&) executes before OR (||)."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "How do you declare a function expression in JavaScript?",
              "options": ["function myFunction() {}", "let myFunction = function() {};", "function = myFunction() {}", "def myFunction() {}"],
              "correctOption": "B",
              "difficulty": "medium",
              "explanation": "A function expression assigns an anonymous function to a variable: `let myFunction = function() {};`",
              "hint": "Function expressions involve assigning a function to a variable."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What's the difference between `==` and `===` operators?",
              "options": ["No difference, they're identical", "`==` compares values, `===` compares values and types", "`==` is faster than `===`", "`===` allows more type coercion than `==`"],
              "correctOption": "B",
              "difficulty": "easy",
              "explanation": "The `==` operator compares values with type coercion, while `===` compares both values and types without coercion.",
              "hint": "One performs type conversion before comparison, the other doesn't."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What will be logged by `console.log(hoistedFunction()); function hoistedFunction() { return 'I am hoisted!'; }`?",
              "options": ["undefined", "Reference Error", "I am hoisted!", "null"],
              "correctOption": "C",
              "difficulty": "medium",
              "explanation": "Function declarations are hoisted entirely in JavaScript, meaning they can be called before they are defined in the code.",
              "hint": "Function declarations and function expressions behave differently regarding hoisting."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the output of the following code? `for(var i=0; i<3; i++) {} console.log(i);`",
              "options": ["0", "2", "3", "undefined"],
              "correctOption": "C",
              "difficulty": "medium",
              "explanation": "After the loop completes, `i` is 3 because that's when the condition `i<3` becomes false. Since `var` has function scope, `i` is still accessible after the loop.",
              "hint": "Think about what value of `i` causes the loop condition to evaluate to false."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What does the `return` statement do in a function?",
              "options": ["Prints a value to the console", "Exits the function and specifies a value to be returned", "Creates a new variable", "Resets the function to its initial state"],
              "correctOption": "B",
              "difficulty": "easy",
              "explanation": "The `return` statement exits a function and returns a specified value to the caller.",
              "hint": "It determines what the function call evaluates to when used in an expression."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the result of `let f = function g() { return 23; }; typeof g;`?",
              "options": ["'function'", "'number'", "'undefined'", "Error"],
              "correctOption": "C",
              "difficulty": "hard",
              "explanation": "In a named function expression, the function name (`g` in this case) is only available within the function's scope, not outside. So `typeof g` returns 'undefined'.",
              "hint": "Consider the scope of the function name in a named function expression."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "Which of the following is a correct if-else statement in JavaScript?",
              "options": ["if x > 10 then console.log('Greater');", "if (x > 10) console.log('Greater');", "if x > 10: console.log('Greater');", "if x > 10 { console.log('Greater'); }"],
              "correctOption": "B",
              "difficulty": "easy",
              "explanation": "The correct syntax for an if statement in JavaScript requires parentheses around the condition. For a single statement, curly braces are optional.",
              "hint": "JavaScript's if statement syntax requires certain punctuation."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What will be the output of `const add = (a, b) => a + b; console.log(add(2, 3));`?",
              "options": ["undefined", "Error", "5", "2,3"],
              "correctOption": "C",
              "difficulty": "easy",
              "explanation": "This code defines an arrow function that adds two parameters and returns the result. Calling add(2, 3) returns 5.",
              "hint": "Arrow functions with a single expression implicitly return the result of that expression."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What happens if a function is called with fewer arguments than parameters?",
              "options": ["Error is thrown", "Extra parameters are undefined", "Extra parameters are null", "Extra parameters are 0"],
              "correctOption": "B",
              "difficulty": "medium",
              "explanation": "When a function is called with fewer arguments than declared parameters, the missing arguments are assigned the value `undefined`.",
              "hint": "JavaScript doesn't enforce parameter count matching."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "Which statement about default parameters is true?",
              "options": ["Default parameters can't be used with arrow functions", "Default parameters are evaluated from left to right", "Default parameters can't be expressions", "Default parameters were introduced in ES5"],
              "correctOption": "B",
              "difficulty": "medium",
              "explanation": "Default parameters are evaluated from left to right when the function is called. This means a default parameter can use the value of a previous parameter.",
              "hint": "Consider the order of parameter evaluation when default values are involved."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the output of `(function() { return typeof arguments; })()`?",
              "options": ["'array'", "'object'", "'function'", "'undefined'"],
              "correctOption": "B",
              "difficulty": "medium",
              "explanation": "The `arguments` object in JavaScript is an array-like object, so `typeof arguments` returns 'object', not 'array'.",
              "hint": "Despite looking like an array, `arguments` has a different underlying type."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the output of `console.log(1 < 2 < 3)` and `console.log(3 > 2 > 1)`?",
              "options": ["true, true", "false, false", "true, false", "false, true"],
              "correctOption": "C",
              "difficulty": "hard",
              "explanation": "`1 < 2 < 3` evaluates as `(1 < 2) < 3` which is `true < 3`. Since `true` is converted to 1, it becomes `1 < 3`, which is `true`. Conversely, `3 > 2 > 1` evaluates as `(3 > 2) > 1` which is `true > 1`. This becomes `1 > 1`, which is `false`.",
              "hint": "Comparison operators are evaluated left to right with type coercion."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the value of `this` inside an arrow function?",
              "options": ["The global object", "The object that the arrow function is a method of", "The value of `this` in the enclosing lexical context", "undefined"],
              "correctOption": "C",
              "difficulty": "hard",
              "explanation": "Arrow functions don't have their own `this` context. They inherit `this` from the enclosing lexical context (where the arrow function is defined).",
              "hint": "Arrow functions handle `this` differently from regular functions."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "Which of the following is true about the ternary operator?",
              "options": ["It only works with numbers", "It can only be used once per statement", "It can be nested", "It requires at least two conditions"],
              "correctOption": "C",
              "difficulty": "medium",
              "explanation": "The ternary operator (`condition ? valueIfTrue : valueIfFalse`) can be nested inside another ternary operator, though this can reduce readability.",
              "hint": "Consider how conditional expressions can be composed."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What does the `switch` statement compare using?",
              "options": ["Loose equality (==)", "Strict equality (===)", "Greater than (>)", "Less than (<)"],
              "correctOption": "B",
              "difficulty": "medium",
              "explanation": "The `switch` statement uses strict equality (===) when comparing the expression value with case values.",
              "hint": "Think about whether type coercion happens during case matching."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the output of the following? `function sum(a, b) { return a + b; } console.log(sum(1, '2'));`",
              "options": ["3", "'12'", "TypeError", "NaN"],
              "correctOption": "B",
              "difficulty": "medium",
              "explanation": "When adding a number and a string with the + operator, JavaScript converts the number to a string and performs string concatenation. So, `1 + '2'` results in the string `'12'`.",
              "hint": "Consider how the + operator behaves with mixed types."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "In JavaScript, what does a recursive function do?",
              "options": ["Calls external libraries", "Calls a different function", "Calls itself", "None of the above"],
              "correctOption": "C",
              "difficulty": "easy",
              "explanation": "A recursive function is one that calls itself during its execution, usually with modified parameters until a base case is reached.",
              "hint": "Think about functions that solve problems by breaking them into smaller instances of the same problem."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the output of `function test(a) { arguments[0] = 2; return a; } console.log(test(1));`?",
              "options": ["1", "2", "undefined", "Error"],
              "correctOption": "B",
              "difficulty": "hard",
              "explanation": "The `arguments` object in non-strict mode is linked to the named parameters. Changing `arguments[0]` also changes the value of `a`.",
              "hint": "Consider how parameters and the arguments object relate in non-strict mode."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What's the main difference between a for-in loop and a for-of loop?",
              "options": ["for-in loops through object properties, for-of loops through iterable values", "for-in loops through arrays, for-of loops through objects", "There is no difference", "for-in is deprecated, for-of is recommended"],
              "correctOption": "A",
              "difficulty": "medium",
              "explanation": "A for-in loop iterates over the enumerable properties of an object, while a for-of loop iterates over the values of iterable objects like arrays, strings, Maps, Sets, etc.",
              "hint": "Think about what kind of elements each loop accesses."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What will be the output of `let result = 0; for (let i = 0; i < 5; i++) { if (i % 2 === 0) continue; result += i; } console.log(result);`?",
              "options": ["0", "4", "6", "8"],
              "correctOption": "C",
              "difficulty": "medium",
              "explanation": "The loop runs for i = 0 to 4. The continue statement skips even numbers (0, 2, 4). So only odd numbers (1, 3) are added to result: 1 + 3 = 4.",
              "hint": "The continue statement skips the current iteration and moves to the next one."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the output of `function add(a, b = 1) { return a + b; } console.log(add(5));`?",
              "options": ["5", "6", "undefined", "Error"],
              "correctOption": "B",
              "difficulty": "easy",
              "explanation": "The function has a default parameter `b = 1`. When called with only one argument, `b` takes its default value, so the result is 5 + 1 = 6.",
              "hint": "Default parameters provide values when arguments are not passed."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What will this code print? `let x = 5; if (x = 0) { console.log('Zero'); } else { console.log('Not zero'); }`",
              "options": ["Zero", "Not zero", "5", "Error"],
              "correctOption": "A",
              "difficulty": "hard",
              "explanation": "The condition uses assignment (`=`) instead of comparison (`==`). So `x = 0` assigns 0 to x and returns 0. Since 0 is falsy, the 'Zero' branch executes.",
              "hint": "Be careful about the difference between = (assignment) and == (comparison)."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is a pure function?",
              "options": ["A function that only uses pure JavaScript syntax", "A function that always returns the same output for the same input and has no side effects", "A function that only works with primitive data types", "A function declared with the 'pure' keyword"],
              "correctOption": "B",
              "difficulty": "medium",
              "explanation": "A pure function always produces the same output for the same inputs and has no side effects (doesn't modify external state or variables).",
              "hint": "This concept is important in functional programming."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What will the following code output? `let f = function factorial(n) { return n <= 1 ? 1 : n * factorial(n-1); }; console.log(f(5));`",
              "options": ["5", "24", "120", "Error"],
              "correctOption": "C",
              "difficulty": "hard",
              "explanation": "This is a recursive factorial function. For n=5, it calculates 5! = 5×4×3×2×1 = 120.",
              "hint": "Recursive functions call themselves with modified parameters until a base case is reached."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What is the output of `let a = 10; if (a > 5) { let a = 5; } console.log(a);`?",
              "options": ["5", "10", "undefined", "Error"],
              "correctOption": "B",
              "difficulty": "medium",
              "explanation": "The `let a = 5` inside the if block creates a new variable `a` that only exists within that block (due to block scoping). The console.log accesses the outer `a`, which is still 10.",
              "hint": "Remember that `let` declarations are block-scoped."
            },
            {
              "topic": "67d6b45a953bd3a26da2ad84",
              "module": "Control Flow & Functions",
              "questionText": "What will be the output of `function outer() { const x = 10; function inner() { console.log(x); } return inner; } const closureFn = outer(); closureFn();`?",
              "options": ["undefined", "null", "10", "Error"],
              "correctOption": "C",
              "difficulty": "hard",
              "explanation": "This demonstrates a closure. The inner function maintains access to the variables from its outer scope even after the outer function has completed execution. So `x` is still accessible when `closureFn()` is called.",
              "hint": "Closures remember the environment they were created in."
            },
    
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "Which method adds one or more elements to the end of an array?",
                  "options": ["push()", "unshift()", "pop()", "shift()"],
                  "correctOption": "A",
                  "difficulty": "easy",
                  "explanation": "The `push()` method adds one or more elements to the end of an array and returns the new length of the array.",
                  "hint": "Think about 'pushing' something onto the end of a stack."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "Which method removes the last element from an array?",
                  "options": ["pop()", "shift()", "delete()", "remove()"],
                  "correctOption": "A",
                  "difficulty": "easy",
                  "explanation": "The `pop()` method removes the last element from an array and returns that element.",
                  "hint": "Think about 'popping' something off the top of a stack."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "How do you access the first element of an array called 'fruits'?",
                  "options": ["fruits[0]", "fruits[1]", "fruits.first()", "fruits.get(0)"],
                  "correctOption": "A",
                  "difficulty": "easy",
                  "explanation": "Arrays in JavaScript are zero-indexed, so the first element is at index 0.",
                  "hint": "JavaScript arrays start indexing at what number?"
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "Which method can be used to transform all elements in an array?",
                  "options": ["find()", "forEach()", "map()", "filter()"],
                  "correctOption": "C",
                  "difficulty": "medium",
                  "explanation": "The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.",
                  "hint": "This method returns a new array where each element has been transformed."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "Which method is used to select elements from an array based on a condition?",
                  "options": ["find()", "forEach()", "map()", "filter()"],
                  "correctOption": "D",
                  "difficulty": "medium",
                  "explanation": "The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.",
                  "hint": "This method returns a new array containing only the elements that satisfy a condition."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `['a', 'b', 'c', 'd'].slice(1, 3)`?",
                  "options": ["['a', 'b', 'c']", "['b', 'c']", "['b', 'c', 'd']", "['a', 'b']"],
                  "correctOption": "B",
                  "difficulty": "medium",
                  "explanation": "The `slice()` method returns a shallow copy of a portion of an array into a new array object. It extracts elements from the start index up to (but not including) the end index.",
                  "hint": "The slice method takes start and end indices, where the end index is exclusive."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "How do you create an empty object in JavaScript?",
                  "options": ["let obj = {}", "let obj = new Object()", "let obj = Object.create(null)", "All of the above"],
                  "correctOption": "D",
                  "difficulty": "medium",
                  "explanation": "In JavaScript, you can create an empty object using object literal notation `{}`, the `Object` constructor, or `Object.create(null)`. All are valid ways to create an object.",
                  "hint": "There are multiple ways to create objects in JavaScript."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)`?",
                  "options": ["10", "24", "0", "Error"],
                  "correctOption": "A",
                  "difficulty": "medium",
                  "explanation": "The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value. In this case, it's summing all elements: 1 + 2 + 3 + 4 = 10.",
                  "hint": "The reducer function accumulates values from left to right across the array."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "How do you check if an object has a specific property?",
                  "options": ["obj.hasProperty('prop')", "obj.includes('prop')", "obj.hasOwnProperty('prop')", "'prop' in obj"],
                  "correctOption": "C",
                  "difficulty": "medium",
                  "explanation": "The `hasOwnProperty()` method returns a boolean indicating whether the object has the specified property as its own property (not inherited).",
                  "hint": "This method checks if a property exists directly on an object, not in its prototype chain."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `typeof [1, 2, 3]`?",
                  "options": ["'array'", "'object'", "'Array'", "'list'"],
                  "correctOption": "B",
                  "difficulty": "medium",
                  "explanation": "In JavaScript, arrays are objects, so `typeof [1, 2, 3]` returns 'object'.",
                  "hint": "Arrays are actually a special type of object in JavaScript."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "How do you merge two arrays in JavaScript?",
                  "options": ["array1.concat(array2)", "array1.push(array2)", "array1.merge(array2)", "[...array1, ...array2]"],
                  "correctOption": "D",
                  "difficulty": "medium",
                  "explanation": "The spread operator `...` can be used to merge arrays by spreading their elements into a new array: `[...array1, ...array2]`. The `concat()` method is also correct but wasn't listed as an option.",
                  "hint": "The spread operator is a modern way to combine arrays."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What method is used to convert an array to a string with a specified separator?",
                  "options": ["concat()", "split()", "join()", "toString()"],
                  "correctOption": "C",
                  "difficulty": "easy",
                  "explanation": "The `join()` method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator.",
                  "hint": "This method lets you specify what character should appear between each array element in the resulting string."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `Object.keys({a: 1, b: 2, c: 3})`?",
                  "options": ["[1, 2, 3]", "['a', 'b', 'c']", "['a: 1', 'b: 2', 'c: 3']", "{a: 1, b: 2, c: 3}"],
                  "correctOption": "B",
                  "difficulty": "medium",
                  "explanation": "The `Object.keys()` method returns an array of a given object's own enumerable property names.",
                  "hint": "This method returns just the property names, not their values."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "Which method is used to find the first element in an array that satisfies a condition?",
                  "options": ["filter()", "find()", "forEach()", "some()"],
                  "correctOption": "B",
                  "difficulty": "medium",
                  "explanation": "The `find()` method returns the value of the first element in the array that satisfies the provided testing function.",
                  "hint": "Unlike filter(), this method returns only one element (not an array)."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, 2, 3].indexOf(4)`?",
                  "options": ["3", "4", "-1", "undefined"],
                  "correctOption": "C",
                  "difficulty": "easy",
                  "explanation": "The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
                  "hint": "This method returns a special value when the element is not found."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "How do you check if an object is an array?",
                  "options": ["obj.isArray()", "typeof obj === 'array'", "obj instanceof Array", "Array.isArray(obj)"],
                  "correctOption": "D",
                  "difficulty": "medium",
                  "explanation": "The `Array.isArray()` method determines whether the passed value is an Array.",
                  "hint": "This is a static method of the Array object."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is destructuring in JavaScript?",
                  "options": ["A way to destroy objects", "A technique to copy objects", "A syntax for extracting values from objects or arrays", "A method to merge objects"],
                  "correctOption": "C",
                  "difficulty": "medium",
                  "explanation": "Destructuring is a JavaScript syntax that allows you to extract data from arrays or objects into distinct variables.",
                  "hint": "It's a way to unpack values from data structures into separate variables."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `['a', 'b', 'c'].includes('b')`?",
                  "options": ["0", "1", "true", "false"],
                  "correctOption": "C",
                  "difficulty": "easy",
                  "explanation": "The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
                  "hint": "This method checks for the presence of an element and returns a boolean."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, 2, 3].map(x => x * 2)`?",
                  "options": ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "[3, 6, 9]"],
                  "correctOption": "B",
                  "difficulty": "medium",
                  "explanation": "The `map()` method creates a new array with the results of calling a provided function on every element. Here, each element is multiplied by 2.",
                  "hint": "Each element in the original array is transformed by the provided function."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, 2, 3, 4].filter(x => x % 2 === 0)`?",
                  "options": ["[1, 3]", "[2, 4]", "[1, 2, 3, 4]", "[]"],
                  "correctOption": "B",
                  "difficulty": "medium",
                  "explanation": "The `filter()` method creates a new array with all elements that pass the test. Here, it returns all even numbers.",
                  "hint": "The condition is checking if a number is even (divisible by 2 with no remainder)."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "How do you clone an object in JavaScript?",
                  "options": ["let clone = obj", "let clone = Object.clone(obj)", "let clone = {...obj}", "let clone = Object.copy(obj)"],
                  "correctOption": "C",
                  "difficulty": "medium",
                  "explanation": "The spread operator `{...obj}` creates a shallow copy of an object, copying its own enumerable properties.",
                  "hint": "The spread operator provides a concise way to create a new object with the same properties."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, [2, 3]].flat()`?",
                  "options": ["[1, 2, 3]", "[[1, 2, 3]]", "[1, [2, 3]]", "Error"],
                  "correctOption": "A",
                  "difficulty": "medium",
                  "explanation": "The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth (default is 1).",
                  "hint": "This method flattens nested arrays by one level by default."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "Which method adds one or more elements to the beginning of an array?",
                  "options": ["push()", "unshift()", "pop()", "shift()"],
                  "correctOption": "B",
                  "difficulty": "easy",
                  "explanation": "The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.",
                  "hint": "Think of 'shifting' elements to make room for new ones at the start."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `Object.values({a: 1, b: 2, c: 3})`?",
                  "options": ["['a', 'b', 'c']", "[1, 2, 3]", "['a:1', 'b:2', 'c:3']", "{1, 2, 3}"],
                  "correctOption": "B",
                  "difficulty": "medium",
                  "explanation": "The `Object.values()` method returns an array of a given object's own enumerable property values.",
                  "hint": "This method returns just the values, not the keys."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "How do you remove a property from an object?",
                  "options": ["delete obj.property", "obj.property = undefined", "obj.remove('property')", "obj.delete('property')"],
                  "correctOption": "A",
                  "difficulty": "easy",
                  "explanation": "The `delete` operator removes a property from an object.",
                  "hint": "This operator completely removes the property, rather than just setting its value to undefined."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, 2, 3].some(x => x > 2)`?",
                  "options": ["true", "false", "3", "[3]"],
                  "correctOption": "A",
                  "difficulty": "medium",
                  "explanation": "The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. Here, it checks if any element is greater than 2.",
                  "hint": "This method returns true if the condition is true for at least one element."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, 2, 3].every(x => x > 0)`?",
                  "options": ["true", "false", "[1, 2, 3]", "3"],
                  "correctOption": "A",
                  "difficulty": "medium",
                  "explanation": "The `every()` method tests whether all elements in the array pass the test implemented by the provided function. Here, it checks if all elements are greater than 0.",
                  "hint": "This method returns true only if the condition is true for all elements."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `Array.from('hello')`?",
                  "options": ["['hello']", "['h', 'e', 'l', 'l', 'o']", "[104, 101, 108, 108, 111]", "Error"],
                  "correctOption": "B",
                  "difficulty": "medium",
                  "explanation": "The `Array.from()` method creates a new Array instance from an array-like or iterable object. When applied to a string, it creates an array of the string's characters.",
                  "hint": "This method can convert a string into an array of its individual characters."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, 2, 3].reverse()`?",
                  "options": ["[3, 2, 1]", "[1, 2, 3]", "3", "Error"],
                  "correctOption": "A",
                  "difficulty": "easy",
                  "explanation": "The `reverse()` method reverses an array in place and returns the reference to the same array.",
                  "hint": "This method modifies the original array and returns it."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "What is the output of `[1, 2, 3].splice(1, 1, 'a', 'b')`?",
                  "options": ["[1, 'a', 'b', 3]", "[1, 'a', 'b', 2, 3]", "[2]", "[1, 2, 3, 'a', 'b']"],
                  "correctOption": "C",
                  "difficulty": "hard",
                  "explanation": "The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements. It returns the removed elements. Here, it removes 1 element at index 1 (which is 2) and inserts 'a' and 'b' at that position.",
                  "hint": "This method returns the removed elements, not the modified array."
                },
                {
                  "topic": "67d6b45a953bd3a26da2ad84",
                  "module": "Arrays & Objects",
                  "questionText": "After the operation `[1, 2, 3].splice(1, 1, 'a', 'b')`, what will the original array look like?",
                  "options": ["[1, 'a', 'b', 3]", "[1, 'a', 'b', 2, 3]", "[2]", "[1, 2, 3, 'a', 'b']"],
                  "correctOption": "A",
                  "difficulty": "hard",
                  "explanation": "The `splice()` method modifies the original array. In this case, it removes 1 element at index 1 (which is 2) and inserts 'a' and 'b' at that position, resulting in [1, 'a', 'b', 3].",
                  "hint": "The splice method modifies the original array in place."
                }
              

      ]


  export default JSQuestions;
