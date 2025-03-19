const JSQuestions = [
    // JavaScript Basics
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "JavaScript Basics",
      "questionText": "What is the output of `console.log(typeof null)`?",
      "options": ["null", "undefined", "object", "string"],
      "correctOption": "C",
      "difficulty": "easy",
      "explanation": "In JavaScript, `typeof null` returns 'object' due to a historical bug.",
      "hint": "Check the JavaScript `typeof` operator."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "JavaScript Basics",
      "questionText": "Which keyword is used to declare a variable in ES6?",
      "options": ["var", "let", "const", "All of the above"],
      "correctOption": "D",
      "difficulty": "easy",
      "explanation": "ES6 introduced `let` and `const`, but `var` is still valid.",
      "hint": "Consider block-scoping and reassignability."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "JavaScript Basics",
      "questionText": "What will be logged? `console.log(2 + '2' - 1)`",
      "options": ["21", "3", "22", "NaN"],
      "correctOption": "A",
      "difficulty": "medium",
      "explanation": "`2 + '2'` results in '22' (string concatenation). `'22' - 1` converts '22' to a number, yielding 21.",
      "hint": "Check how JavaScript handles type coercion."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "JavaScript Basics",
      "questionText": "Which of the following is NOT a JavaScript data type?",
      "options": ["Boolean", "Number", "Character", "Object"],
      "correctOption": "C",
      "difficulty": "easy",
      "explanation": "JavaScript does not have a `Character` data type.",
      "hint": "JavaScript strings are used to represent characters."
    },
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
  
    // Control Flow & Functions
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "Control Flow & Functions",
      "questionText": "Which statement is used to stop a loop immediately?",
      "options": ["continue", "break", "exit", "return"],
      "correctOption": "B",
      "difficulty": "easy",
      "explanation": "`break` exits a loop immediately.",
      "hint": "Which keyword exits the loop entirely?"
    },
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "Control Flow & Functions",
      "questionText": "What is the difference between `==` and `===` in JavaScript?",
      "options": ["No difference", "== checks type, === checks value", "== checks value, === checks type and value", "=== is used for objects only"],
      "correctOption": "C",
      "difficulty": "medium",
      "explanation": "`==` allows type coercion, whereas `===` requires both type and value to be the same.",
      "hint": "Strict vs. loose comparison."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "Control Flow & Functions",
      "questionText": "What is an Immediately Invoked Function Expression (IIFE)?",
      "options": ["A function that runs only when called", "A function that runs immediately after definition", "A function that is defined inside another function", "A function that must be assigned to a variable"],
      "correctOption": "B",
      "difficulty": "hard",
      "explanation": "An IIFE runs immediately after being defined: `(function() { console.log('IIFE') })();`.",
      "hint": "It runs without explicit function calls."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "Control Flow & Functions",
      "questionText": "Which loop guarantees at least one execution?",
      "options": ["for", "while", "do...while", "None"],
      "correctOption": "C",
      "difficulty": "easy",
      "explanation": "The `do...while` loop executes at least once before checking the condition.",
      "hint": "This loop checks the condition at the end."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad84",
      "module": "Control Flow & Functions",
      "questionText": "What does the `return` statement do in a function?",
      "options": ["Stops function execution", "Returns a value", "Both A & B", "None"],
      "correctOption": "C",
      "difficulty": "easy",
      "explanation": "`return` stops execution and sends back a value.",
      "hint": "Think about function output."
    }
  ];
  

  export default JSQuestions;
