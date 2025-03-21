const typeScriptQuestions = [
    // TypeScript Basics
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is TypeScript primarily a superset of?",
        "options": ["JavaScript", "Python", "Java", "C#"],
        "correctOptionIndex": 0,
        "correctOptionText": "JavaScript",
        "difficulty": "easy",
        "explanation": "TypeScript is a superset of JavaScript, meaning it extends JavaScript with additional features like static typing.",
        "hint": "TypeScript builds on top of a popular scripting language."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is NOT a TypeScript primitive type?",
        "options": ["string", "number", "boolean", "array"],
        "correctOptionIndex": 3,
        "correctOptionText": "array",
        "difficulty": "easy",
        "explanation": "TypeScript primitive types include `string`, `number`, and `boolean`. `array` is not a primitive type.",
        "hint": "Primitive types are basic building blocks in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the result of `typeof NaN` in TypeScript?",
        "options": ["number", "NaN", "undefined", "string"],
        "correctOptionIndex": 0,
        "correctOptionText": "number",
        "difficulty": "medium",
        "explanation": "`NaN` stands for 'Not-a-Number', but its type is `number` in TypeScript and JavaScript.",
        "hint": "Think about how JavaScript treats `NaN`."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which keyword is used to declare a variable with block scope in TypeScript?",
        "options": ["var", "let", "const", "function"],
        "correctOptionIndex": 1,
        "correctOptionText": "let",
        "difficulty": "easy",
        "explanation": "`let` is used to declare a variable with block scope, unlike `var` which has function scope.",
        "hint": "ES6 introduced block-scoped variables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the output of `console.log(10 + '10')` in TypeScript?",
        "options": ["20", "1010", "NaN", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "1010",
        "difficulty": "medium",
        "explanation": "In TypeScript (and JavaScript), adding a number and a string results in string concatenation.",
        "hint": "Type coercion happens when combining numbers and strings."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid TypeScript type annotation for a function parameter?",
        "options": ["param: string", "param => string", "param -> string", "param :: string"],
        "correctOptionIndex": 0,
        "correctOptionText": "param: string",
        "difficulty": "easy",
        "explanation": "TypeScript uses a colon (`:`) to annotate types for variables and function parameters.",
        "hint": "Type annotations follow the variable or parameter name."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the purpose of the `unknown` type in TypeScript?",
        "options": [
            "To represent a value that can be any type, but must be type-checked before use",
            "To represent a value that is always null",
            "To represent a value that is always undefined",
            "To represent a value that is a number"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To represent a value that can be any type, but must be type-checked before use",
        "difficulty": "medium",
        "explanation": "The `unknown` type is a safer alternative to `any` because it requires type checking before use.",
        "hint": "`unknown` is stricter than `any`."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define a tuple in TypeScript?",
        "options": [
            "let tuple: [number, string] = [1, 'hello'];",
            "let tuple: {number, string} = [1, 'hello'];",
            "let tuple: Array<number, string> = [1, 'hello'];",
            "let tuple: (number, string) = [1, 'hello'];"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "let tuple: [number, string] = [1, 'hello'];",
        "difficulty": "medium",
        "explanation": "Tuples in TypeScript are defined using square brackets with type annotations for each element.",
        "hint": "Tuples are fixed-length arrays with specific types for each element."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the output of `console.log(typeof null)` in TypeScript?",
        "options": ["null", "object", "undefined", "string"],
        "correctOptionIndex": 1,
        "correctOptionText": "object",
        "difficulty": "medium",
        "explanation": "In TypeScript (and JavaScript), `typeof null` returns `object`, which is a historical quirk.",
        "hint": "This is a well-known JavaScript quirk."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the purpose of the `readonly` modifier in TypeScript?",
        "options": [
            "To make a property immutable after initialization",
            "To make a property optional",
            "To make a property private",
            "To make a property nullable"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To make a property immutable after initialization",
        "difficulty": "medium",
        "explanation": "The `readonly` modifier ensures that a property cannot be modified after it is initialized.",
        "hint": "Think about immutability in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define an array of numbers in TypeScript?",
        "options": [
            "let numbers: number[] = [1, 2, 3];",
            "let numbers: Array<number> = [1, 2, 3];",
            "let numbers: [number] = [1, 2, 3];",
            "Both A and B"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both A and B",
        "difficulty": "easy",
        "explanation": "Both `number[]` and `Array<number>` are valid ways to define an array of numbers in TypeScript.",
        "hint": "TypeScript supports multiple syntaxes for arrays."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the purpose of the `never` type in TypeScript?",
        "options": [
            "To represent a value that will never occur",
            "To represent a value that is always null",
            "To represent a value that is always undefined",
            "To represent a value that is a number"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To represent a value that will never occur",
        "difficulty": "hard",
        "explanation": "The `never` type is used to represent values that will never occur, such as in functions that always throw an error or have infinite loops.",
        "hint": "Think about functions that never return."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the output of `console.log(0 == '0')` in TypeScript?",
        "options": ["true", "false", "Error", "undefined"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "medium",
        "explanation": "In TypeScript (and JavaScript), `0 == '0'` returns `true` due to type coercion.",
        "hint": "Loose equality (`==`) performs type coercion."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define an optional parameter in a TypeScript function?",
        "options": [
            "function greet(name?: string) {}",
            "function greet(name: string?) {}",
            "function greet(name: optional string) {}",
            "function greet(name: string = '') {}"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function greet(name?: string) {}",
        "difficulty": "easy",
        "explanation": "In TypeScript, a parameter can be made optional by adding a `?` after its name.",
        "hint": "Optional parameters are denoted by a specific symbol."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the purpose of the `as` keyword in TypeScript?",
        "options": [
            "To perform type assertion",
            "To define a new type",
            "To create an alias for a type",
            "To declare a variable"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To perform type assertion",
        "difficulty": "medium",
        "explanation": "The `as` keyword is used for type assertion, allowing you to tell the compiler to treat a value as a specific type.",
        "hint": "Type assertion is like casting in other languages."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the output of `console.log([] == ![])` in TypeScript?",
        "options": ["true", "false", "Error", "undefined"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "hard",
        "explanation": "In TypeScript (and JavaScript), `[] == ![]` evaluates to `true` due to type coercion and falsy values.",
        "hint": "Empty arrays are truthy, but `![]` is falsy."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define a function type in TypeScript?",
        "options": [
            "type Func = (a: number, b: number) => number;",
            "type Func = function(a: number, b: number): number;",
            "type Func = (a: number, b: number) -> number;",
            "type Func = (a: number, b: number) :: number;"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "type Func = (a: number, b: number) => number;",
        "difficulty": "medium",
        "explanation": "Function types in TypeScript are defined using the `=>` syntax.",
        "hint": "Arrow functions are used to define function types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the purpose of the `void` type in TypeScript?",
        "options": [
            "To represent the absence of a value",
            "To represent a value that is null",
            "To represent a value that is undefined",
            "To represent a value that is a number"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To represent the absence of a value",
        "difficulty": "easy",
        "explanation": "The `void` type is used to indicate that a function does not return a value.",
        "hint": "Think about functions that don't return anything."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define an enum in TypeScript?",
        "options": [
            "enum Colors { Red, Green, Blue }",
            "enum Colors = { Red, Green, Blue }",
            "enum Colors => { Red, Green, Blue }",
            "enum Colors :: { Red, Green, Blue }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "enum Colors { Red, Green, Blue }",
        "difficulty": "easy",
        "explanation": "Enums in TypeScript are defined using the `enum` keyword followed by the enum name and its members.",
        "hint": "Enums are a way to define named constants."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the output of `console.log(typeof undefined)` in TypeScript?",
        "options": ["undefined", "object", "null", "string"],
        "correctOptionIndex": 0,
        "correctOptionText": "undefined",
        "difficulty": "easy",
        "explanation": "In TypeScript (and JavaScript), `typeof undefined` returns `undefined`.",
        "hint": "`undefined` is a primitive type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define a union type in TypeScript?",
        "options": [
            "let value: number | string;",
            "let value: number || string;",
            "let value: number && string;",
            "let value: number, string;"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "let value: number | string;",
        "difficulty": "medium",
        "explanation": "Union types in TypeScript are defined using the `|` operator to allow a value to be one of multiple types.",
        "hint": "Union types allow flexibility in type definitions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the purpose of the `keyof` operator in TypeScript?",
        "options": [
            "To get the keys of an object type",
            "To get the values of an object type",
            "To create a new object type",
            "To define a union type"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To get the keys of an object type",
        "difficulty": "hard",
        "explanation": "The `keyof` operator is used to get the keys of an object type as a union of string literals.",
        "hint": "Think about extracting property names from an object type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the output of `console.log(1 + +'1')` in TypeScript?",
        "options": ["2", "11", "NaN", "Error"],
        "correctOptionIndex": 0,
        "correctOptionText": "2",
        "difficulty": "medium",
        "explanation": "The `+` before the string `'1'` converts it to a number, so `1 + 1` equals `2`.",
        "hint": "Unary `+` can convert strings to numbers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define a type alias in TypeScript?",
        "options": [
            "type Person = { name: string; age: number; };",
            "type Person => { name: string; age: number; };",
            "type Person :: { name: string; age: number; };",
            "type Person -> { name: string; age: number; };"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "type Person = { name: string; age: number; };",
        "difficulty": "easy",
        "explanation": "Type aliases in TypeScript are defined using the `type` keyword followed by the alias name and the type definition.",
        "hint": "Type aliases are used to create custom types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the purpose of the `in` operator in TypeScript?",
        "options": [
            "To check if a property exists in an object",
            "To iterate over the keys of an object",
            "To define a new property in an object",
            "To check if a value is in an array"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To check if a property exists in an object",
        "difficulty": "medium",
        "explanation": "The `in` operator is used to check if a property exists in an object.",
        "hint": "Think about checking for the existence of a key in an object."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the output of `console.log(typeof [])` in TypeScript?",
        "options": ["array", "object", "undefined", "string"],
        "correctOptionIndex": 1,
        "correctOptionText": "object",
        "difficulty": "medium",
        "explanation": "In TypeScript (and JavaScript), `typeof []` returns `object` because arrays are a type of object.",
        "hint": "Arrays are objects in JavaScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define a function with a default parameter in TypeScript?",
        "options": [
            "function greet(name: string = 'World') {}",
            "function greet(name = 'World': string) {}",
            "function greet(name: string => 'World') {}",
            "function greet(name: string :: 'World') {}"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function greet(name: string = 'World') {}",
        "difficulty": "easy",
        "explanation": "Default parameters in TypeScript are defined using the `=` operator in the function signature.",
        "hint": "Default values are assigned directly in the parameter list."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the purpose of the `extends` keyword in TypeScript?",
        "options": [
            "To create a class inheritance relationship",
            "To define a new type",
            "To create a union type",
            "To define a function type"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To create a class inheritance relationship",
        "difficulty": "medium",
        "explanation": "The `extends` keyword is used to create a class inheritance relationship in TypeScript.",
        "hint": "Think about object-oriented programming concepts."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "What is the output of `console.log(!!0)` in TypeScript?",
        "options": ["true", "false", "0", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "false",
        "difficulty": "easy",
        "explanation": "In TypeScript (and JavaScript), `!!0` evaluates to `false` because `0` is a falsy value.",
        "hint": "Double negation converts a value to a boolean."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Basics",
        "questionText": "Which of the following is a valid way to define a rest parameter in a TypeScript function?",
        "options": [
            "function sum(...numbers: number[]) {}",
            "function sum(numbers: ...number[]) {}",
            "function sum(numbers: number[]...) {}",
            "function sum(numbers: number[]) ... {}"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function sum(...numbers: number[]) {}",
        "difficulty": "medium",
        "explanation": "Rest parameters in TypeScript are defined using the `...` syntax before the parameter name.",
        "hint": "Rest parameters allow a function to accept an indefinite number of arguments."
    },
    
    // Type System
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the purpose of the 'unknown' type in TypeScript?",
        "options": [
        "It's the same as 'any' but with no type checking",
        "It represents a value that could be anything, but requires type checking before use",
        "It's used for variables that will never have a value",
        "It represents nullable types only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It represents a value that could be anything, but requires type checking before use",
        "difficulty": "medium",
        "explanation": "The 'unknown' type is a type-safe counterpart of 'any'. Anything is assignable to 'unknown', but 'unknown' isn't assignable to anything without a type check or assertion.",
        "hint": "Think about how 'unknown' relates to type safety compared to the 'any' type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is a Union Type in TypeScript?",
        "options": [
        "A type that can accept multiple types of values",
        "A type that combines properties of two types",
        "A type that represents the common properties between two types",
        "A type that can only be used in functions"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A type that can accept multiple types of values",
        "difficulty": "easy",
        "explanation": "Union types allow a variable to hold values of different types. They are declared using the pipe symbol (|) between types, such as 'string | number'.",
        "hint": "Think about how you might declare a variable that could be either a string or a number."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the result of the intersection type 'type Combined = { a: number } & { b: string }'?",
        "options": [
        "An object that must have both 'a' as a number and 'b' as a string",
        "An object that can have either 'a' as a number or 'b' as a string",
        "A union type that creates a new type with either property",
        "A compiler error since objects can't be intersected"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "An object that must have both 'a' as a number and 'b' as a string",
        "difficulty": "medium",
        "explanation": "Intersection types combine multiple types into one. The resulting type has all properties from each intersected type, so a variable of type 'Combined' must have both 'a' (number) and 'b' (string).",
        "hint": "Think about what happens when you combine the requirements of two different object types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What does the 'never' type represent in TypeScript?",
        "options": [
        "The type of variables that are never used",
        "The same as 'void' but for arrow functions",
        "The type of values that never occur",
        "A placeholder type that must be replaced before compilation"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The type of values that never occur",
        "difficulty": "medium",
        "explanation": "The 'never' type represents values that never occur. It's used for functions that never return (e.g., they throw exceptions or have infinite loops) or for variables that can't possibly have a value due to type constraints.",
        "hint": "What type would you assign to a function that always throws an error?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "Which of the following correctly defines a type alias for a function that takes a string and returns a boolean?",
        "options": [
        "type StringBool = (input: string): boolean;",
        "type StringBool = (input: string) => boolean;",
        "type StringBool = function(string): boolean;",
        "type StringBool = string => boolean;"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "type StringBool = (input: string) => boolean;",
        "difficulty": "easy",
        "explanation": "Function type aliases use the arrow syntax to define parameter types and return types. The correct syntax is 'type Name = (parameters) => returnType'.",
        "hint": "Look for the correct arrow function type syntax."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the difference between 'undefined' and 'null' in TypeScript's type system?",
        "options": [
        "They are identical types with different names",
        "undefined means a variable has been declared but not assigned, while null is an explicit assignment of no value",
        "null is used for numbers, undefined is used for strings",
        "undefined is a subtype of all types, but null isn't"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "undefined means a variable has been declared but not assigned, while null is an explicit assignment of no value",
        "difficulty": "easy",
        "explanation": "'undefined' represents a variable that has been declared but not yet assigned a value, whereas 'null' represents an intentional absence of any object value. They are distinct types in TypeScript.",
        "hint": "Think about what each value represents semantically in JavaScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is a Discriminated Union (or Tagged Union) in TypeScript?",
        "options": [
        "A union type that uses a common property to determine which type to use",
        "A way to create random types at runtime",
        "A type that allows any property to be added to an object",
        "A union type limited to only primitive values"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A union type that uses a common property to determine which type to use",
        "difficulty": "hard",
        "explanation": "A discriminated union is a pattern where each type in a union contains a common property (the discriminant) with literal types that can be used to narrow down the specific type within the union.",
        "hint": "It's a design pattern for handling unions that makes type checking easier and more predictable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is type narrowing in TypeScript?",
        "options": [
        "Restricting a type by using generics",
        "The process of converting a union type to a more specific type",
        "Creating smaller types with fewer properties",
        "A compiler feature that removes unused types"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The process of converting a union type to a more specific type",
        "difficulty": "medium",
        "explanation": "Type narrowing is the process of refining types to more specific types than declared. This is often done through control flow analysis, type guards, or discriminated unions.",
        "hint": "Think about how you might check if a variable of type 'string | number' is specifically a string."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the type of 'x' in the following code? `let x = [1, 'two', 3];`",
        "options": [
        "array",
        "(number | string)[]",
        "any[]",
        "[number, string, number]"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "(number | string)[]",
        "difficulty": "medium",
        "explanation": "TypeScript infers 'x' as an array that can contain both numbers and strings. This is represented as a union type within an array: (number | string)[].",
        "hint": "TypeScript will infer the best common type that fits all the array elements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is a type assertion in TypeScript?",
        "options": [
        "A way to enforce that a variable must be of a specific type",
        "A way to tell the compiler to treat a value as a specific type",
        "A method to validate types at runtime",
        "A technique for creating new types from existing ones"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A way to tell the compiler to treat a value as a specific type",
        "difficulty": "easy",
        "explanation": "Type assertions are a way to tell the TypeScript compiler to treat a value as a specific type, regardless of what the compiler might infer. They use the 'as' keyword or angle bracket syntax.",
        "hint": "It's like saying, 'Trust me, I know what type this is.'"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the correct way to define a type that represents either a string or null?",
        "options": [
        "type StringOrNull = string & null;",
        "type StringOrNull = string || null;",
        "type StringOrNull = string | null;",
        "type StringOrNull = string + null;"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "type StringOrNull = string | null;",
        "difficulty": "easy",
        "explanation": "Union types in TypeScript are defined using the pipe symbol (|). The type 'string | null' represents a value that can be either a string or null.",
        "hint": "Look for the correct operator for TypeScript union types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What does the 'keyof' operator do in TypeScript?",
        "options": [
        "Retrieves the name of a type",
        "Creates a union type of all property names from a given type",
        "Gets the type of a specific property in an object",
        "Checks if a key exists in an object at runtime"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a union type of all property names from a given type",
        "difficulty": "medium",
        "explanation": "The 'keyof' operator produces a union type of all property names (as literal string types) from a given object type. For example, 'keyof {x: number, y: string}' would be 'x' | 'y'.",
        "hint": "It's useful for creating types that are constrained to the keys of another type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the difference between 'any' and 'unknown' types?",
        "options": [
        "There is no difference, they are aliases",
        "'any' allows all operations without checking, while 'unknown' requires type checking before operations",
        "'unknown' can only be used for function parameters, 'any' can be used anywhere",
        "'any' is only for legacy code, 'unknown' is the modern replacement"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "'any' allows all operations without checking, while 'unknown' requires type checking before operations",
        "difficulty": "medium",
        "explanation": "'any' bypasses type checking, allowing any operations. 'unknown' is more restrictive: while anything can be assigned to 'unknown', you must perform type checking or assertion before performing operations on an 'unknown' value.",
        "hint": "One type allows all operations, the other requires verification first."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is a type guard in TypeScript?",
        "options": [
        "A compiler security feature that prevents type errors",
        "A runtime check that guarantees a value's type",
        "A function or expression that performs a runtime check to guarantee a type within its scope",
        "A TypeScript plugin for static code analysis"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A function or expression that performs a runtime check to guarantee a type within its scope",
        "difficulty": "medium",
        "explanation": "A type guard is a runtime check that guarantees a type within a conditional block. Common type guards include 'typeof', 'instanceof', and custom user-defined type predicates that return boolean values.",
        "hint": "It helps TypeScript narrow down types in conditional blocks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the correct syntax for a user-defined type guard?",
        "options": [
        "function isString(x: any): boolean { return typeof x === 'string'; }",
        "function isString(x: any): x is string { return typeof x === 'string'; }",
        "function isString(x: any): guard string { return typeof x === 'string'; }",
        "function isString(x: any): typeof string { return typeof x === 'string'; }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "function isString(x: any): x is string { return typeof x === 'string'; }",
        "difficulty": "hard",
        "explanation": "A user-defined type guard uses the special return type syntax 'paramName is Type'. When this function returns true, TypeScript knows that the parameter is of the specified type within that scope.",
        "hint": "Look for the special syntax that tells TypeScript about the relationship between the return value and the parameter type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What does the 'typeof' operator return when used with an array in TypeScript?",
        "options": [
        "'array'",
        "'object'",
        "'Array'",
        "'undefined'"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "'object'",
        "difficulty": "medium",
        "explanation": "In JavaScript (and therefore TypeScript), the 'typeof' operator returns 'object' when used with arrays. Arrays are a special kind of object in JavaScript.",
        "hint": "Consider the underlying JavaScript behavior, not TypeScript-specific features."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "Which of the following is NOT a valid type guard in TypeScript?",
        "options": [
        "typeof x === 'string'",
        "x instanceof Array",
        "Array.isArray(x)",
        "x.hasType('string')"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "x.hasType('string')",
        "difficulty": "easy",
        "explanation": "'x.hasType('string')' is not a valid type guard in TypeScript. Valid type guards include typeof checks, instanceof checks, Array.isArray(), and custom user-defined type predicates.",
        "hint": "Look for the option that isn't a standard JavaScript check or TypeScript construct."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the 'readonly' modifier used for in TypeScript?",
        "options": [
        "To mark a class as non-extendable",
        "To prevent properties from being changed after initialization",
        "To make variables visible only within a module",
        "To prevent a type from being used in union types"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To prevent properties from being changed after initialization",
        "difficulty": "easy",
        "explanation": "The 'readonly' modifier in TypeScript prevents properties from being changed after they are initialized. It's used to create immutable properties in interfaces, types, and classes.",
        "hint": "It's similar to the 'const' keyword, but for object properties."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is a literal type in TypeScript?",
        "options": [
        "A type that only allows specific primitive values",
        "A type that can only be assigned string values",
        "A type that must be explicitly declared",
        "A type that can't be inferred by the compiler"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A type that only allows specific primitive values",
        "difficulty": "medium",
        "explanation": "Literal types in TypeScript are types that represent exact values, not just a general category like 'string' or 'number'. For example, the type '\"error\"' is a string literal type that only allows the exact string 'error'.",
        "hint": "Think about how you might define a type that can only be specific values, like the days of the week."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "How would you define a string literal type that can only be 'success', 'warning', or 'error'?",
        "options": [
        "type Status = string('success' | 'warning' | 'error');",
        "type Status = 'success' & 'warning' & 'error';",
        "type Status = 'success' | 'warning' | 'error';",
        "type Status = typeof('success' | 'warning' | 'error');"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "type Status = 'success' | 'warning' | 'error';",
        "difficulty": "easy",
        "explanation": "String literal types are defined using union types of the specific string values. The type 'Status' will only allow the exact strings 'success', 'warning', or 'error'.",
        "hint": "Look for the syntax that combines specific string values into a union type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What does the 'non-null assertion operator' (!) do in TypeScript?",
        "options": [
        "Checks if a value is not null at runtime",
        "Converts null values to undefined",
        "Tells the compiler that a value is not null or undefined, even if it might be",
        "Throws an error if a value is null"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Tells the compiler that a value is not null or undefined, even if it might be",
        "difficulty": "medium",
        "explanation": "The non-null assertion operator (!) tells the TypeScript compiler to remove null and undefined from the type of an expression, asserting that the value will not be null or undefined at runtime.",
        "hint": "It's a way to override TypeScript's strictness about possibly null/undefined values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the 'as const' assertion used for in TypeScript?",
        "options": [
        "To convert a variable to a constant",
        "To make all properties in an object readonly and convert arrays to readonly tuples",
        "To assert that a value is a constant expression",
        "To prevent type widening for primitive values only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To make all properties in an object readonly and convert arrays to readonly tuples",
        "difficulty": "hard",
        "explanation": "The 'as const' assertion creates a deeply readonly type with literal types instead of wider primitive types. It converts arrays to readonly tuples and object properties to readonly literal types.",
        "hint": "It's a way to preserve the exact structure and values of an object or array in the type system."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the difference between 'type' and 'interface' in TypeScript?",
        "options": [
        "Types are faster, interfaces are more flexible",
        "Types can use union operators, interfaces cannot",
        "Interfaces can be extended, types cannot",
        "Interfaces can be merged through declaration merging, types cannot"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Interfaces can be merged through declaration merging, types cannot",
        "difficulty": "medium",
        "explanation": "While both types and interfaces are similar, one key difference is that interfaces support declaration merging (defining the same interface multiple times to add properties), whereas type aliases do not.",
        "hint": "Think about what happens when you declare the same interface twice in a program."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is type 'widening' in TypeScript?",
        "options": [
        "Converting a specific type to a more general one",
        "Increasing the memory allocation for a type",
        "Adding more properties to an interface",
        "Converting runtime types to compile-time types"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Converting a specific type to a more general one",
        "difficulty": "hard",
        "explanation": "Type widening is when TypeScript converts a narrow type (like a literal) to a more general type. For example, 'const x = 'hello'' has type 'hello' (literal), but 'let y = 'hello'' has type 'string' (widened).",
        "hint": "It's related to how TypeScript treats values when they can be reassigned versus when they can't."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is 'index signature' in TypeScript?",
        "options": [
        "A way to specify the return type of array methods",
        "A way to define the type of properties in an object that aren't known in advance",
        "A technique for sorting object properties by their names",
        "A method to access the memory address of a variable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A way to define the type of properties in an object that aren't known in advance",
        "difficulty": "medium",
        "explanation": "An index signature defines a type for properties in an object without specifying their exact names. For example, '{ [key: string]: number }' describes an object where all string keys must have number values.",
        "hint": "It's useful when you don't know all property names at design time, but you know their value types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the 'infer' keyword used for in TypeScript?",
        "options": [
        "To force TypeScript to infer a type automatically",
        "To declare a variable without specifying its type",
        "To extract and name a type within a conditional type",
        "To mark a function as using type inference"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To extract and name a type within a conditional type",
        "difficulty": "hard",
        "explanation": "The 'infer' keyword is used within conditional types to extract and name a part of a type pattern. It enables capturing types for later use in complex type manipulations.",
        "hint": "It's often used in utility types to extract types from functions, promises, arrays, etc."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What happens when you assign the value 'null' to a variable with no explicit type annotation in TypeScript with strictNullChecks enabled?",
        "options": [
        "The variable gets the type 'null'",
        "The variable gets the type 'any'",
        "TypeScript raises a compilation error",
        "The variable gets the type 'undefined'"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The variable gets the type 'null'",
        "difficulty": "medium",
        "explanation": "With strictNullChecks enabled, when you assign 'null' to a variable with no explicit type annotation, TypeScript infers the type as 'null'. This means the variable can only hold the value 'null'.",
        "hint": "TypeScript tries to infer the most specific type possible based on the initial value."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is the 'satisfies' operator in TypeScript?",
        "options": [
        "An operator to check if a value implements an interface",
        "A way to verify that a value meets certain conditions at runtime",
        "An operator that validates a value against a type without changing the inferred type",
        "A keyword used in comparison expressions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An operator that validates a value against a type without changing the inferred type",
        "difficulty": "hard",
        "explanation": "The 'satisfies' operator (added in TypeScript 4.9) validates that an expression matches a type, but doesn't change the inferred type of the expression. It provides validation without widening or narrowing the type.",
        "hint": "It's useful when you want to check that a value matches a type but retain the more specific inferred type for better type checking."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "Which TypeScript utility type would you use to make all properties in a type optional?",
        "options": [
        "Readonly<T>",
        "Partial<T>",
        "Optional<T>",
        "Required<T>"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Partial<T>",
        "difficulty": "easy",
        "explanation": "The 'Partial<T>' utility type makes all properties in a type optional by adding '?' to each property. For example, Partial<{ x: number, y: string }> becomes { x?: number, y?: string }.",
        "hint": "Think about which built-in utility type adds '?' to all properties."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Type System",
        "questionText": "What is a 'tuple type' in TypeScript?",
        "options": [
        "A type that represents a fixed-size array with elements of specific types in a specific order",
        "A special type that can only hold two elements",
        "A type for representing key-value pairs only",
        "An array that can only hold primitive values"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A type that represents a fixed-size array with elements of specific types in a specific order",
        "difficulty": "medium",
        "explanation": "A tuple type represents an array with a fixed number of elements, where each element may have a different type. The types of each element are specified in order. For example: [string, number, boolean].",
        "hint": "Think about how it differs from a regular array type like string[]."
    },

    // Interfaces & Types
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is the primary difference between an interface and a type alias in TypeScript?",
        "options": [
        "Interfaces can only be used with classes, types can be used anywhere",
        "Types can represent primitive values directly, interfaces cannot",
        "Interfaces support declaration merging, types do not",
        "Types are checked at runtime, interfaces are only checked at compile time"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Interfaces support declaration merging, types do not",
        "difficulty": "medium",
        "explanation": "The key difference is that interfaces can be extended through declaration merging (declaring the same interface multiple times to add properties), while type aliases cannot be changed after declaration.",
        "hint": "Think about what happens when you declare the same interface or type multiple times in your code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "Which of the following is NOT a valid way to define an optional property in an interface?",
        "options": [
        "interface User { name?: string; }",
        "interface User { name: string | undefined; }",
        "interface User { optional name: string; }",
        "interface User { readonly name?: string; }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "interface User { optional name: string; }",
        "difficulty": "easy",
        "explanation": "In TypeScript, optional properties are defined using the question mark (?) after the property name. Using the 'optional' keyword is not valid syntax.",
        "hint": "Look for syntax that doesn't match TypeScript's way of defining optional properties."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How do you define a read-only property in an interface?",
        "options": [
        "interface Point { const x: number; }",
        "interface Point { readonly x: number; }",
        "interface Point { immutable x: number; }",
        "interface Point { x: readonly number; }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "interface Point { readonly x: number; }",
        "difficulty": "easy",
        "explanation": "The 'readonly' modifier is used before the property name to indicate that a property cannot be modified after initialization.",
        "hint": "Which modifier prevents reassignment of a property?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is an index signature in TypeScript?",
        "options": [
        "A way to access elements in an array using numeric indices",
        "A special method that returns the index of an element in a collection",
        "A way to define the type of properties in an object whose names aren't known in advance",
        "A signature that verifies the integrity of a TypeScript file"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A way to define the type of properties in an object whose names aren't known in advance",
        "difficulty": "medium",
        "explanation": "An index signature defines the type of properties that an object can have without specifying their exact names. For example, { [key: string]: number } allows any string key with number values.",
        "hint": "It's useful when you don't know all property names at design time, but you know their value types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What does extending an interface do in TypeScript?",
        "options": [
        "Creates a new interface with the same properties",
        "Creates a copy of the interface that can be modified independently",
        "Creates a new interface that includes all properties from the original interface",
        "Converts an interface to a class"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Creates a new interface that includes all properties from the original interface",
        "difficulty": "easy",
        "explanation": "Extending an interface creates a new interface that inherits all properties from the original interface. The new interface can also define additional properties.",
        "hint": "Think about inheritance and how it works in object-oriented programming."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How can you make a property in an interface required only when another property has a specific value?",
        "options": [
        "Use conditional properties with the ? operator",
        "Use the 'required' keyword with a condition",
        "Use mapped types with conditional types",
        "This is not possible with interfaces"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use mapped types with conditional types",
        "difficulty": "hard",
        "explanation": "To make properties conditionally required, you need to use mapped types with conditional types. This often involves creating a type (not an interface) that uses conditional logic to determine which properties are required.",
        "hint": "Think about advanced type features that allow you to transform types based on conditions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is the correct way to define an interface for a function type?",
        "options": [
        "interface Greeter { (name: string): string; }",
        "interface Greeter { function(name: string): string; }",
        "interface Greeter { return (name: string) => string; }",
        "interface Greeter { name: string => string; }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "interface Greeter { (name: string): string; }",
        "difficulty": "medium",
        "explanation": "To define a function type in an interface, you use a call signature with parameters in parentheses followed by a return type. This defines an interface that any function with a matching signature can implement.",
        "hint": "Look for the syntax that uses parentheses for parameters and a colon for the return type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is a 'dictionary' type in TypeScript and how would you define it?",
        "options": [
        "A built-in type that maps strings to definitions",
        "An object type with an index signature like { [key: string]: ValueType }",
        "A special array type that maps keys to values",
        "A type alias for the Map object"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An object type with an index signature like { [key: string]: ValueType }",
        "difficulty": "medium",
        "explanation": "A 'dictionary' in TypeScript is typically implemented as an object with an index signature. The syntax { [key: string]: ValueType } allows any string key with values of the specified type.",
        "hint": "Think about how you would define an object that can have any string key with values of a specific type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How do you define an interface that extends multiple other interfaces?",
        "options": [
        "interface Child extends Parent1, Parent2 {}",
        "interface Child extends [Parent1, Parent2] {}",
        "interface Child extends Parent1 & Parent2 {}",
        "interface Child implements Parent1, Parent2 {}"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "interface Child extends Parent1, Parent2 {}",
        "difficulty": "easy",
        "explanation": "To extend multiple interfaces, list them after the 'extends' keyword separated by commas. The new interface will include all properties from all parent interfaces.",
        "hint": "Look for syntax similar to how classes extend other classes in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is the purpose of the 'implements' keyword when used with interfaces?",
        "options": [
        "To create a new interface based on an existing one",
        "To define that a class satisfies the contract defined by an interface",
        "To merge multiple interfaces into one",
        "To implement interface methods directly in TypeScript"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define that a class satisfies the contract defined by an interface",
        "difficulty": "easy",
        "explanation": "The 'implements' keyword is used when a class declares that it satisfies the contract defined by an interface. The class must provide implementations for all the properties and methods defined in the interface.",
        "hint": "Think about the relationship between classes and interfaces in object-oriented programming."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is the difference between type aliases and interfaces for object types?",
        "options": [
        "Type aliases are faster to compile",
        "Interfaces can extend other interfaces, type aliases cannot extend types",
        "Type aliases can use union types, interfaces cannot",
        "Interfaces can be augmented after declaration, type aliases cannot"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Interfaces can be augmented after declaration, type aliases cannot",
        "difficulty": "medium",
        "explanation": "While both can represent object types, interfaces can be augmented through declaration merging (declaring the same interface multiple times), whereas type aliases cannot be changed after they are defined.",
        "hint": "Think about which one allows you to add more properties after the initial definition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is a 'mapped type' in TypeScript?",
        "options": [
        "A type that converts one type to another",
        "A type created by mapping over the properties of an existing type",
        "A type that maps JavaScript types to TypeScript types",
        "A special interface that implements a Map"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type created by mapping over the properties of an existing type",
        "difficulty": "hard",
        "explanation": "A mapped type creates a new type by transforming the properties of an existing type. It uses the syntax { [P in keyof T]: ... } to iterate over the keys of type T and create a new type with transformed properties.",
        "hint": "It's similar to how array.map() works, but for types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How do you define a method in an interface?",
        "options": [
        "interface Calculator { add(x: number, y: number) => number; }",
        "interface Calculator { add: function(x: number, y: number): number; }",
        "interface Calculator { add(x: number, y: number): number; }",
        "interface Calculator { method add(x: number, y: number): number; }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "interface Calculator { add(x: number, y: number): number; }",
        "difficulty": "easy",
        "explanation": "Methods in interfaces are defined using the method name followed by parameters in parentheses and a return type after a colon. This syntax is similar to how methods are defined in classes.",
        "hint": "It looks similar to method declarations in classes but without the implementation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is the 'Readonly' utility type used for?",
        "options": [
        "To create a type where all properties are optional",
        "To create a type where all properties are public",
        "To create a type where all properties are read-only",
        "To create a type where all properties are static"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To create a type where all properties are read-only",
        "difficulty": "medium",
        "explanation": "The 'Readonly<T>' utility type creates a new type with all properties of T set to readonly, meaning they cannot be modified after initialization. It's similar to adding the 'readonly' modifier to every property.",
        "hint": "Think about what happens when you want to make every property in an object immutable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How do you define an interface for an object with numeric indices (like an array)?",
        "options": [
        "interface NumberArray { [i: number]: string; }",
        "interface NumberArray { (i: number): string; }",
        "interface NumberArray { i[number]: string; }",
        "interface NumberArray { [number]: string; }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "interface NumberArray { [i: number]: string; }",
        "difficulty": "medium",
        "explanation": "To define an interface for objects with numeric indices, you use an index signature with a number index type. This allows access using bracket notation with numbers, similar to arrays.",
        "hint": "It's similar to string index signatures, but uses number as the index type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What happens if a class implements an interface but doesn't provide all the required properties?",
        "options": [
        "The code will run but throw a runtime error",
        "TypeScript will auto-generate missing properties with default values",
        "TypeScript will raise a compilation error",
        "The class will inherit default implementations from the interface"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "TypeScript will raise a compilation error",
        "difficulty": "easy",
        "explanation": "If a class implements an interface but doesn't provide all required properties, TypeScript will raise a compilation error. Interfaces define a contract that implementing classes must fulfill completely.",
        "hint": "Think about how strictly TypeScript enforces interface contracts."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is the main difference between an interface and an abstract class in TypeScript?",
        "options": [
        "Abstract classes can contain implementations, interfaces cannot",
        "Interfaces can be extended, abstract classes cannot",
        "Abstract classes must be used with the 'new' keyword, interfaces cannot",
        "Interfaces are compiled to JavaScript, abstract classes are not"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Abstract classes can contain implementations, interfaces cannot",
        "difficulty": "medium",
        "explanation": "The key difference is that abstract classes can contain implementations for some methods, while interfaces only define the shape of an object without any implementation details.",
        "hint": "Think about which one can include actual code versus just method signatures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How do you create a type alias that represents either a string or a number?",
        "options": [
        "type StringOrNumber = string + number;",
        "type StringOrNumber = string || number;",
        "type StringOrNumber = string | number;",
        "type StringOrNumber = string && number;"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "type StringOrNumber = string | number;",
        "difficulty": "easy",
        "explanation": "Union types in TypeScript are created using the pipe symbol (|). The type 'string | number' represents a value that can be either a string or a number.",
        "hint": "Look for the symbol that represents 'or' in TypeScript type definitions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What does the 'Record' utility type do?",
        "options": [
        "Creates a type for audio recording functions",
        "Creates a type with properties from a string literal union as keys and a specified type as values",
        "Records all runtime type information for debugging",
        "Creates a readonly version of a type"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a type with properties from a string literal union as keys and a specified type as values",
        "difficulty": "medium",
        "explanation": "The 'Record<K, T>' utility type constructs an object type with properties of keys K and values of type T. For example, Record<'a' | 'b', number> creates the type { a: number, b: number }.",
        "hint": "It's useful when you want to create an object type with specific keys and uniform value types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is 'declaration merging' in TypeScript?",
        "options": [
        "Combining multiple .d.ts files into one",
        "When the compiler merges two TypeScript files that declare the same variables",
        "When TypeScript merges declarations with the same name into a single definition",
        "The process of merging interface and class declarations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "When TypeScript merges declarations with the same name into a single definition",
        "difficulty": "medium",
        "explanation": "Declaration merging is a feature where the TypeScript compiler merges multiple declarations with the same name into a single definition. This primarily applies to interfaces, where declaring the same interface multiple times adds properties rather than causing an error.",
        "hint": "It's particularly relevant for how interfaces behave when declared multiple times."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How can you define a type that represents a tuple of exactly two elements: a string and a number?",
        "options": [
        "type Pair = (string, number);",
        "type Pair = [string, number];",
        "type Pair = string + number;",
        "type Pair = Tuple<string, number>;"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "type Pair = [string, number];",
        "difficulty": "easy",
        "explanation": "Tuple types in TypeScript are defined using square brackets with the types of the elements listed inside. The type [string, number] represents an array with exactly two elements: a string at index 0 and a number at index 1.",
        "hint": "Look for the syntax that defines an array with elements of specific types in a specific order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "Which of the following is true about interfaces in TypeScript?",
        "options": [
        "Interfaces are converted to JavaScript code when compiled",
        "Interfaces can only be used to type check objects",
        "Interfaces exist only at compile time and are erased in the emitted JavaScript",
        "Interfaces must have at least one property defined"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Interfaces exist only at compile time and are erased in the emitted JavaScript",
        "difficulty": "easy",
        "explanation": "Interfaces in TypeScript are a compile-time construct only. They are used for type checking during development but are completely erased when TypeScript is compiled to JavaScript.",
        "hint": "Think about what happens to TypeScript-specific features when code is compiled to JavaScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How can you create a type that makes all properties of an existing type optional?",
        "options": [
        "Use the Optional<T> utility type",
        "Use the Partial<T> utility type",
        "Add ? to each property manually",
        "Use the MakeOptional<T> utility type"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Use the Partial<T> utility type",
        "difficulty": "medium",
        "explanation": "The 'Partial<T>' utility type creates a new type with all properties of T made optional. For example, Partial<{ x: number, y: string }> results in { x?: number, y?: string }.",
        "hint": "Look for a built-in TypeScript utility type that adds ? to all properties."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is structural typing in TypeScript?",
        "options": [
        "A requirement that objects must have exactly the same structure to be compatible",
        "Type checking based on the presence of required properties, not the object's declared type",
        "A way to enforce strict type hierarchies through class inheritance",
        "The use of interfaces to define the structure of objects"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Type checking based on the presence of required properties, not the object's declared type",
        "difficulty": "medium",
        "explanation": "Structural typing means that type compatibility is determined by the object's structure (its properties and methods), not by its declared type or inheritance. If an object has all the required properties of a type, it is compatible with that type.",
        "hint": "It's sometimes called 'duck typing' - if it looks like a duck and quacks like a duck, it's a duck."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is a type guard in TypeScript?",
        "options": [
        "A security feature that prevents unauthorized type access",
        "A function that returns a boolean indicating if an object is of a specific type",
        "A compiler flag that enforces strict type checking",
        "A special comment that tells TypeScript to ignore type errors"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A function that returns a boolean indicating if an object is of a specific type",
        "difficulty": "medium",
        "explanation": "A type guard is a function that performs a runtime check to determine if an object is of a specific type. TypeScript can use this information to narrow the type within a conditional block, enabling safer type operations.",
        "hint": "It helps TypeScript understand the type of a variable within conditional blocks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is the 'Pick' utility type used for?",
        "options": [
        "To randomly select properties from a type",
        "To create a type with only specified properties from another type",
        "To select a type at runtime based on conditions",
        "To pick the most specific type from a union"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create a type with only specified properties from another type",
        "difficulty": "medium",
        "explanation": "The 'Pick<T, K>' utility type creates a new type by picking only the specified properties K from the type T. For example, Pick<{ a: number, b: string, c: boolean }, 'a' | 'c'> results in { a: number, c: boolean }.",
        "hint": "It's useful when you want to create a subset of an existing type with only certain properties."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is an intersection type in TypeScript?",
        "options": [
        "A type that represents the common properties between two types",
        "A type that combines all properties from multiple types",
        "A type that represents values that are present in the intersection of two arrays",
        "A special type used for database joins"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type that combines all properties from multiple types",
        "difficulty": "medium",
        "explanation": "An intersection type combines multiple types into one. The resulting type has all properties from each intersected type. It's created using the & operator, like 'type Combined = Type1 & Type2'.",
        "hint": "Think about what happens when you combine the requirements of two different types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How do you make a property in an interface required only when another property is present?",
        "options": [
        "Use conditional types with mapped types",
        "Use the 'required-if' modifier",
        "Use the 'dependsOn' attribute",
        "This is not possible with TypeScript interfaces"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Use conditional types with mapped types",
        "difficulty": "hard",
        "explanation": "To make properties conditionally required, you need to use conditional types with mapped types. This usually involves creating a more complex type (not just a simple interface) that uses the 'extends' keyword to check conditions.",
        "hint": "It requires using advanced TypeScript features that allow transforming types based on conditions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What does the 'Omit' utility type do?",
        "options": [
        "Removes a property from an object at runtime",
        "Creates a type with all properties except those specified",
        "Flags properties that should be ignored by TypeScript",
        "Omits type checking for certain variables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a type with all properties except those specified",
        "difficulty": "medium",
        "explanation": "The 'Omit<T, K>' utility type creates a new type by taking all properties from T except those specified in K. For example, Omit<{ a: number, b: string, c: boolean }, 'a'> results in { b: string, c: boolean }.",
        "hint": "It's like the opposite of the 'Pick' utility type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "What is the 'keyof' operator used for in TypeScript?",
        "options": [
        "To retrieve the keys of an object at runtime",
        "To create a union type of all property names from a given type",
        "To check if a key exists in an object",
        "To force TypeScript to use only certain keys from an object"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create a union type of all property names from a given type",
        "difficulty": "medium",
        "explanation": "The 'keyof' operator creates a union type of all property names (as string literal types) from a given object type. For example, 'keyof { x: number, y: string }' would be 'x' | 'y'.",
        "hint": "It's useful for creating types that are constrained to the property names of another type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "When using index signatures in interfaces, what restriction applies to other property declarations?",
        "options": [
        "You cannot have more than one index signature",
        "You cannot use numeric index signatures",
        "All explicit property types must be subtypes of the index signature type",
        "Index signatures cannot be used with generics"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "All explicit property types must be subtypes of the index signature type",
        "difficulty": "hard",
        "explanation": "When using an index signature in an interface, all explicit property types must be subtypes of the index signature type. This ensures type safety by preventing properties with incompatible types.",
        "hint": "This restriction ensures that any property access through an index will be type-compatible."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Interfaces & Types",
        "questionText": "How can you define a method in an interface that accepts any number of arguments of any type?",
        "options": [
        "method(...args): any;",
        "method(...args: any): void;",
        "method(...args: any[]): void;",
        "method(args: ...any): void;"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "method(...args: any[]): void;",
        "difficulty": "medium",
        "explanation": "To define a method that accepts any number of arguments of any type, you use the rest parameter syntax with the 'any[]' type. This creates a method that can be called with zero or more arguments of any type.",
        "hint": "Look for the syntax that uses the spread operator with a type annotation."
    },

    // Functions in TypeScript
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is the correct way to define a function with parameters in TypeScript?",
        "options": [
        "function add(a: number, b: number): number { return a + b; }",
        "function add(a, b): number { return a + b; }",
        "function add(a: number, b: number) { return a + b; }",
        "function add<number>(a, b) { return a + b; }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function add(a: number, b: number): number { return a + b; }",
        "difficulty": "easy",
        "explanation": "In TypeScript, you can specify both parameter types and return type. The correct approach is to annotate parameters with their types and specify the return type after the parameter list.",
        "hint": "Look for the syntax that specifies both parameter types and return type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What does `void` specify as a return type in TypeScript?",
        "options": [
        "Function returns undefined",
        "Function returns null",
        "Function doesn't return any value",
        "Function can return any type"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Function doesn't return any value",
        "difficulty": "easy",
        "explanation": "The `void` return type indicates that a function doesn't return any value. It's typically used for functions that perform actions but don't produce a result.",
        "hint": "Think about what happens when a function executes but doesn't have a return statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "Which is the correct way to define optional parameters in TypeScript functions?",
        "options": [
        "function greet(name?: string) { }",
        "function greet(name: string | undefined) { }",
        "function greet(name: optional string) { }",
        "function greet([name]: string) { }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function greet(name?: string) { }",
        "difficulty": "easy",
        "explanation": "In TypeScript, optional parameters are indicated with a question mark (?) after the parameter name. This allows the parameter to be either the specified type or undefined.",
        "hint": "Which syntax uses a special character to indicate optionality?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What's the TypeScript way to define a function that can accept any number of parameters?",
        "options": [
        "function sum(...numbers: number[]): number { }",
        "function sum(numbers: number...): number { }",
        "function sum(numbers: array<number>): number { }",
        "function sum(*numbers: number[]): number { }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function sum(...numbers: number[]): number { }",
        "difficulty": "easy",
        "explanation": "TypeScript uses rest parameters (indicated by `...`) to collect multiple arguments into a single array parameter. This allows functions to accept any number of arguments of the specified type.",
        "hint": "Look for the syntax that uses the spread/rest operator."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "How do you specify default parameter values in TypeScript functions?",
        "options": [
        "function greet(name: string = 'World') { }",
        "function greet(name: string || 'World') { }",
        "function greet(name: string | default 'World') { }",
        "function greet(name: string default = 'World') { }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function greet(name: string = 'World') { }",
        "difficulty": "easy",
        "explanation": "In TypeScript, default parameter values are specified using the assignment operator (=) after the type annotation. If the parameter is not provided when calling the function, the default value will be used.",
        "hint": "The syntax is similar to how default parameters work in JavaScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is a function signature in TypeScript?",
        "options": [
        "A unique identifier for a function",
        "The combination of parameter types and return type that defines a function's interface",
        "A special comment that documents a function's behavior",
        "A hash value that TypeScript assigns to each function"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The combination of parameter types and return type that defines a function's interface",
        "difficulty": "medium",
        "explanation": "A function signature in TypeScript defines the types of parameters the function accepts and the type it returns, essentially describing the function's interface without its implementation.",
        "hint": "Think about what information you need to know to use a function correctly without seeing its implementation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is the purpose of the `this` parameter annotation in TypeScript functions?",
        "options": [
        "It automatically binds the function to a specific context",
        "It specifies the type of the function's parent object",
        "It checks the type of `this` during compilation for correctness",
        "It defines a new local variable named `this`"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It checks the type of `this` during compilation for correctness",
        "difficulty": "medium",
        "explanation": "TypeScript allows you to specify the type of `this` as the first parameter of a function (which is removed during compilation). This helps catch errors when `this` is used incorrectly within the function body.",
        "hint": "The `this` parameter is a compile-time feature that helps prevent runtime errors."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What will be the output of this code?\n```typescript\nfunction example(x: number, y = 10) {\n  return x + y;\n}\nconsole.log(example(5));\n```",
        "options": ["5", "10", "15", "Error"],
        "correctOptionIndex": 2,
        "correctOptionText": "15",
        "difficulty": "easy",
        "explanation": "The function `example` takes two parameters: `x` which is required and `y` which has a default value of 10. When called with only one argument (5), the default value of `y` (10) is used, resulting in 5 + 10 = 15.",
        "hint": "Pay attention to the default parameter value and how it's used when the second argument is omitted."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "How do you type a function that takes a callback function as a parameter?",
        "options": [
        "function fetchData(callback: (data: any) => void): void { }",
        "function fetchData(callback: function(data: any)): void { }",
        "function fetchData(callback: Function): void { }",
        "function fetchData(callback(data: any)): void { }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function fetchData(callback: (data: any) => void): void { }",
        "difficulty": "medium",
        "explanation": "In TypeScript, function types are specified using arrow function notation. This allows you to define the parameter types and return type of the callback function that your function accepts.",
        "hint": "Look for the syntax that uses arrow function notation to define the callback's signature."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What's the difference between `never` and `void` as return types?",
        "options": [
        "They are identical and can be used interchangeably",
        "`void` means the function returns undefined, while `never` means it doesn't return at all",
        "`never` means the function returns null, while `void` means it returns undefined",
        "`void` is for async functions, while `never` is for synchronous functions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "`void` means the function returns undefined, while `never` means it doesn't return at all",
        "difficulty": "medium",
        "explanation": "A function that returns `void` can complete and return (implicitly returning `undefined`). A function that returns `never` doesn't complete normally - it either throws an exception, enters an infinite loop, or terminates the program.",
        "hint": "Think about functions that never finish executing normally versus functions that complete but don't return a value."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What's wrong with this function declaration?\n```typescript\nfunction combine(a: number, b?: number, c: string): number {\n  return a + (b || 0);\n}\n```",
        "options": [
        "Optional parameters must be last in the parameter list",
        "The function ignores parameter c",
        "The return type should be number | string",
        "There should be no default value for b"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Optional parameters must be last in the parameter list",
        "difficulty": "medium",
        "explanation": "In TypeScript, optional parameters must come after all required parameters. In this example, parameter `c` is required but comes after the optional parameter `b`, which is not allowed.",
        "hint": "Think about the order of parameters and how TypeScript matches arguments to parameters."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is function overloading in TypeScript?",
        "options": [
        "Creating multiple functions with the same name but different implementations",
        "Specifying multiple call signatures for the same function",
        "Adding too many parameters to a function",
        "Extending a function's behavior through inheritance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Specifying multiple call signatures for the same function",
        "difficulty": "medium",
        "explanation": "Function overloading in TypeScript allows a function to be called in multiple ways by specifying different parameter types and return types. This is achieved by declaring multiple function signatures followed by a single implementation that handles all cases.",
        "hint": "It's about providing different ways to call the same function based on the types of arguments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "Which syntax correctly declares a function type for a variable?",
        "options": [
        "let calculate: (x: number, y: number) => number;",
        "let calculate: function(x: number, y: number): number;",
        "let calculate: Function<number, number, number>;",
        "let calculate: (number, number) -> number;"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "let calculate: (x: number, y: number) => number;",
        "difficulty": "medium",
        "explanation": "In TypeScript, function types are declared using the arrow syntax. This syntax specifies the parameter types and the return type, creating a type that any compatible function can be assigned to.",
        "hint": "Look for the syntax that uses arrow notation to define the function's type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is the output of this code?\n```typescript\nfunction multiply(a: number, b: number = 2, c?: number): number {\n  return a * b * (c || 1);\n}\nconsole.log(multiply(5));\n```",
        "options": ["5", "10", "15", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "10",
        "difficulty": "medium",
        "explanation": "The function `multiply` takes three parameters: `a` (required), `b` (default value of 2), and `c` (optional with no default). When called with only one argument (5), `b` uses its default value of 2, and `c` is undefined, so `c || 1` evaluates to 1. The result is 5 * 2 * 1 = 10.",
        "hint": "Pay attention to both the default parameter value and the optional parameter with the logical OR operation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is destructuring in function parameters?",
        "options": [
        "Breaking down complex objects or arrays into simpler variables",
        "Removing unnecessary parameters from function calls",
        "Converting function parameters to string values",
        "Resetting parameters to their default values"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Breaking down complex objects or arrays into simpler variables",
        "difficulty": "medium",
        "explanation": "Parameter destructuring allows you to extract properties from objects or elements from arrays passed as arguments, directly in the function parameter list. It's a convenient way to work with specific parts of complex data structures.",
        "hint": "It's a feature that helps extract values from objects or arrays passed to functions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What does the `readonly` modifier do when used with parameters?",
        "options": [
        "Makes the parameter value unchangeable within the function",
        "Prevents the parameter from being reassigned outside the function",
        "Requires the argument to be a constant value",
        "Ensures the parameter is passed by value, not reference"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Makes the parameter value unchangeable within the function",
        "difficulty": "medium",
        "explanation": "The `readonly` modifier, when used with parameters, ensures that the parameter cannot be modified within the function body. It's particularly useful for preventing accidental modifications to objects or arrays passed as arguments.",
        "hint": "It's about what you can or cannot do with the parameter inside the function."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What are contextual typed function expressions?",
        "options": [
        "Functions that infer their parameter types from context",
        "Functions that change their behavior based on the calling context",
        "Functions that can only be used in specific contexts",
        "Functions with explicit this parameter types"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Functions that infer their parameter types from context",
        "difficulty": "hard",
        "explanation": "Contextual typing occurs when TypeScript infers the types of a function's parameters based on the context where the function is used. For example, when passing a function to a method like `map` that expects a specific function signature, TypeScript can infer the parameter types without explicit annotations.",
        "hint": "It's related to TypeScript's ability to determine types based on how a function is used."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is the correct way to define a function that can be called with or without `new`?",
        "options": [
        "function construct(): void & { new(): object; }",
        "function construct(): any { }",
        "function construct(): object | new() => object",
        "interface CallOrConstruct { (): void; new(): object; }"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "interface CallOrConstruct { (): void; new(): object; }",
        "difficulty": "hard",
        "explanation": "To define a function that can be both called normally and used as a constructor with `new`, you need to use an interface with call and construct signatures. This defines a type that works in both contexts.",
        "hint": "Look for the option that defines both a call signature and a constructor signature."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is the type of the parameter `p` in this function?\n```typescript\nfunction process<T extends { length: number }>(p: T): T {\n  console.log(p.length);\n  return p;\n}\n```",
        "options": [
        "Any type that has a length property of type number",
        "Only arrays or strings",
        "An object with exactly one property called length",
        "A generic type with no constraints"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Any type that has a length property of type number",
        "difficulty": "hard",
        "explanation": "The function uses a generic type `T` with a constraint `extends { length: number }`. This means `T` can be any type that has a `length` property of type `number`, which includes arrays, strings, and any custom objects with that property.",
        "hint": "Pay attention to the generic type constraint and what it requires of the type parameter."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is an index signature parameter in TypeScript?",
        "options": [
        "A parameter in array index notation",
        "A special parameter that accesses object properties dynamically",
        "A parameter that defines how an object can be indexed with strings or numbers",
        "A parameter that automatically increments with each function call"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A parameter that defines how an object can be indexed with strings or numbers",
        "difficulty": "hard",
        "explanation": "An index signature parameter defines the types of keys that can be used to index into an object and the types of values that can be returned. It allows you to create objects that can have an arbitrary number of properties with names that aren't known in advance.",
        "hint": "It's related to how you can access properties on objects using dynamic keys."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What does this function do?\n```typescript\nfunction example<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n```",
        "options": [
        "Returns a copy of the object with the specified key removed",
        "Returns the value of the specified property from the object with type safety",
        "Assigns a new value to the specified property on the object",
        "Checks if the object has the specified property"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Returns the value of the specified property from the object with type safety",
        "difficulty": "hard",
        "explanation": "This function uses generics with the `keyof` operator to create a type-safe property accessor. It takes an object of type `T` and a key of type `K` (which must be a key of `T`), and returns the value at that key with the correct type `T[K]`.",
        "hint": "Look at how the function uses generics and the `keyof` operator to provide type safety."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is method shorthand notation in object literals?",
        "options": [
        "Using arrow functions for methods",
        "Omitting the function keyword and colon for method definitions",
        "Using computed property names for methods",
        "Inheriting methods from a prototype"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Omitting the function keyword and colon for method definitions",
        "difficulty": "medium",
        "explanation": "Method shorthand notation allows you to define methods in object literals without using the `function` keyword or colon. For example, instead of `{ method: function() {} }`, you can write `{ method() {} }`.",
        "hint": "It's a more concise way to define methods in object literals."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is a tuple type in TypeScript?",
        "options": [
        "An array with a fixed number of elements of specified types",
        "A special function type that can be called with varying arguments",
        "A type that represents a pair of values",
        "A type that combines multiple function signatures"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "An array with a fixed number of elements of specified types",
        "difficulty": "medium",
        "explanation": "A tuple type in TypeScript represents an array with a fixed number of elements, where each element may have a different type. Tuples are useful when you have a function that returns multiple values of different types.",
        "hint": "Think about how TypeScript can represent arrays where the position of each element has meaning."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "How does the `noImplicitThis` compiler option affect functions?",
        "options": [
        "It requires all functions to have an explicit return type",
        "It prevents the use of arrow functions",
        "It requires explicit type annotations for `this` when used in functions",
        "It disables the automatic binding of `this` in class methods"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It requires explicit type annotations for `this` when used in functions",
        "difficulty": "hard",
        "explanation": "The `noImplicitThis` compiler option raises an error when `this` is used in a function without an explicit type annotation. This helps catch errors where `this` might be used incorrectly due to JavaScript's dynamic binding behavior.",
        "hint": "It's related to how TypeScript helps prevent errors with the `this` context in functions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What's the difference between function declaration and function expression in TypeScript?",
        "options": [
        "Function declarations are hoisted, while function expressions are not",
        "Function expressions can have type parameters, while declarations cannot",
        "Function declarations are always anonymous",
        "Function expressions can only be arrow functions"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Function declarations are hoisted, while function expressions are not",
        "difficulty": "medium",
        "explanation": "Function declarations (using the `function` keyword at the statement level) are hoisted, meaning they're available throughout their scope even before they're defined. Function expressions (assigning a function to a variable) are not hoisted and are only available after the assignment.",
        "hint": "Think about when each type of function becomes available within its scope."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is the purpose of declaring a function as `async` in TypeScript?",
        "options": [
        "To make the function run in a separate thread",
        "To ensure the function is called asynchronously",
        "To indicate the function returns a Promise",
        "To prevent other code from executing until the function completes"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To indicate the function returns a Promise",
        "difficulty": "medium",
        "explanation": "Declaring a function as `async` automatically makes it return a Promise. It also allows the use of the `await` keyword within the function to wait for other Promises to resolve without blocking the main thread.",
        "hint": "It affects the function's return type and enables certain syntax within the function body."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What type would TypeScript infer for the return value of this function?\n```typescript\nfunction createPair<S, T>(first: S, second: T) {\n  return [first, second];\n}\n```",
        "options": [
        "Array<S | T>",
        "[S, T]",
        "S & T[]",
        "any[]"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "[S, T]",
        "difficulty": "hard",
        "explanation": "TypeScript would infer a tuple type `[S, T]` for the return value. This is because the function clearly returns an array with exactly two elements: the first of type S and the second of type T.",
        "hint": "Consider how TypeScript handles arrays with fixed structures and differing element types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is the correct way to define a function that accepts a callback with a specific signature?",
        "options": [
        "function process(data: string, callback: (result: boolean) => void): void { }",
        "function process(data: string, callback: function(result: boolean)): void { }",
        "function process(data: string, callback: Callback<boolean>): void { }",
        "function process(data: string, (result: boolean) => void callback): void { }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function process(data: string, callback: (result: boolean) => void): void { }",
        "difficulty": "medium",
        "explanation": "To define a function that accepts a callback with a specific signature, you use the arrow function type syntax for the callback parameter. This specifies both the parameter types and return type that the callback must have.",
        "hint": "Look for the syntax that clearly defines what parameters the callback receives and what it returns."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What's a higher-order function in TypeScript?",
        "options": [
        "A function that runs with higher priority in the execution queue",
        "A function that takes one or more functions as arguments or returns a function",
        "A function defined with a higher level of access control",
        "A function that executes at compile-time instead of runtime"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A function that takes one or more functions as arguments or returns a function",
        "difficulty": "medium",
        "explanation": "Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. They're a fundamental concept in functional programming and are well-supported in TypeScript.",
        "hint": "Think about functions that manipulate or use other functions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "How do you annotate a function parameter to accept only functions that take a string and return a number?",
        "options": [
        "param: (s: string) => number",
        "param: Function<string, number>",
        "param: (string) -> number",
        "param: function(s: string): number"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "param: (s: string) => number",
        "difficulty": "medium",
        "explanation": "To annotate a function parameter to accept only functions with a specific signature, you use the arrow function type syntax. In this case, `(s: string) => number` specifies a function that takes a string parameter and returns a number.",
        "hint": "Look for the standard TypeScript syntax for function types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What is type narrowing in the context of TypeScript functions?",
        "options": [
        "Making function parameters more restrictive over time",
        "Reducing the scope of variables within functions",
        "The process of refining types within conditional blocks based on type guards",
        "Optimizing function compilation by reducing the number of possible types"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The process of refining types within conditional blocks based on type guards",
        "difficulty": "hard",
        "explanation": "Type narrowing is the process by which TypeScript refines types within conditional blocks based on type guards like `typeof`, `instanceof`, or custom type predicates. This allows you to work with more specific types in different branches of your code.",
        "hint": "It's about how TypeScript can determine more specific types within certain code paths."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Functions in TypeScript",
        "questionText": "What are user-defined type guards in TypeScript?",
        "options": [
        "Special interfaces that validate types at runtime",
        "Functions that help TypeScript narrow down types based on their return value",
        "Compiler directives that enforce strict type checking",
        "Classes that implement the TypeGuard interface"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Functions that help TypeScript narrow down types based on their return value",
        "difficulty": "hard",
        "explanation": "User-defined type guards are functions that return a type predicate (e.g., `arg is SomeType`). They help TypeScript narrow down types in conditional blocks by providing custom logic for determining if a value is of a specific type.",
        "hint": "They allow you to create custom functions that TypeScript can use for type narrowing."
    },

    // Classes & OOP
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "How do you declare a class property in TypeScript?",
        "options": [
        "class Person { name: string; }",
        "class Person { var name: string; }",
        "class Person { string name; }",
        "class Person { property name: string; }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "class Person { name: string; }",
        "difficulty": "easy",
        "explanation": "In TypeScript, class properties are declared by specifying the property name followed by a type annotation. No special keyword (like 'var' or 'property') is needed.",
        "hint": "Look for the syntax that uses just the name and type without additional keywords."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the correct way to create a private property in a TypeScript class?",
        "options": [
        "class Person { private name: string; }",
        "class Person { #name: string; }",
        "class Person { name: string private; }",
        "class Person { @private name: string; }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "class Person { private name: string; }",
        "difficulty": "easy",
        "explanation": "TypeScript uses the 'private' access modifier keyword before the property name to declare a private property. This prevents access to the property from outside the class.",
        "hint": "Look for the syntax that uses an access modifier keyword."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "How do you implement inheritance in TypeScript?",
        "options": [
        "class Child inherits Parent { }",
        "class Child : Parent { }",
        "class Child extends Parent { }",
        "class Child implements Parent { }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "class Child extends Parent { }",
        "difficulty": "easy",
        "explanation": "In TypeScript, class inheritance is implemented using the 'extends' keyword. This allows the child class to inherit properties and methods from the parent class.",
        "hint": "TypeScript follows JavaScript's inheritance syntax."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the purpose of the 'protected' access modifier in TypeScript?",
        "options": [
        "It makes properties accessible only within the class itself",
        "It makes properties accessible within the class and its subclasses",
        "It makes properties accessible only in the same module",
        "It makes properties read-only"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It makes properties accessible within the class and its subclasses",
        "difficulty": "medium",
        "explanation": "The 'protected' access modifier allows access to properties and methods within the class where they are defined and in any classes that inherit from that class. This is different from 'private' (class-only) and 'public' (everywhere).",
        "hint": "Think about the level of access that sits between private and public in terms of inheritance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What's the difference between 'interfaces' and 'abstract classes' in TypeScript?",
        "options": [
        "Interfaces can contain method implementations while abstract classes cannot",
        "Abstract classes can be instantiated while interfaces cannot",
        "Interfaces can only describe object shapes while abstract classes can also provide implementation details",
        "There is no difference; the terms are interchangeable in TypeScript"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Interfaces can only describe object shapes while abstract classes can also provide implementation details",
        "difficulty": "medium",
        "explanation": "Interfaces in TypeScript are purely for describing shapes/contracts without implementation. Abstract classes can include both abstract methods (without implementation) and concrete methods (with implementation). Additionally, abstract classes can maintain state through properties.",
        "hint": "Consider which one can contain actual code versus just type definitions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What does the 'readonly' modifier do when applied to a class property?",
        "options": [
        "It makes the property immutable after initialization",
        "It prevents the property from being inherited by subclasses",
        "It hides the property from type checking",
        "It makes the property accessible only through getter methods"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It makes the property immutable after initialization",
        "difficulty": "medium",
        "explanation": "The 'readonly' modifier prevents a property from being changed after it's initialized. The property can be set either in the declaration or in the constructor, but nowhere else.",
        "hint": "It's related to when and how often a property's value can be modified."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the purpose of a constructor parameter property in TypeScript?",
        "options": [
        "To validate constructor parameters before assignment",
        "To automatically create and initialize class properties from constructor parameters",
        "To enforce required parameters in the constructor",
        "To prevent modification of constructor parameters"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To automatically create and initialize class properties from constructor parameters",
        "difficulty": "medium",
        "explanation": "Constructor parameter properties are a TypeScript shorthand that allows you to create and initialize class properties in a single line. By adding an access modifier (public, private, protected) to a constructor parameter, TypeScript automatically creates a property with that name and assigns the parameter value to it.",
        "hint": "It's a concise syntax that reduces boilerplate when defining and initializing class properties."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What will be the output of this code?\n```typescript\nclass Counter {\n  static count: number = 0;\n  \n  increment() {\n    Counter.count++;\n  }\n}\n\nconst c1 = new Counter();\nconst c2 = new Counter();\nc1.increment();\nc2.increment();\nconsole.log(Counter.count);\n```",
        "options": ["0", "1", "2", "Error"],
        "correctOptionIndex": 2,
        "correctOptionText": "2",
        "difficulty": "medium",
        "explanation": "The 'static' keyword creates a property that belongs to the class itself, not to instances. Therefore, all instances of the class share the same static property. In this code, both c1 and c2 increment the same Counter.count property, resulting in a value of 2.",
        "hint": "Pay attention to how static properties are shared across all instances of a class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is method overriding in TypeScript?",
        "options": [
        "Creating multiple methods with the same name but different parameters",
        "Preventing a method from being called outside the class",
        "Redefining a method in a subclass that was already defined in the parent class",
        "Creating a method that can accept variable number of arguments"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Redefining a method in a subclass that was already defined in the parent class",
        "difficulty": "medium",
        "explanation": "Method overriding is an OOP concept where a subclass provides a specific implementation for a method that was already defined in its parent class. In TypeScript, this is done by defining a method in the child class with the same name, parameters, and return type as in the parent class.",
        "hint": "Think about how inheritance allows specialized behavior in derived classes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "How do you implement multiple interfaces in TypeScript?",
        "options": [
        "class MyClass extends Interface1, Interface2 {}",
        "class MyClass implements Interface1, Interface2 {}",
        "class MyClass implements Interface1 & Interface2 {}",
        "class MyClass extends Interface1 implements Interface2 {}"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "class MyClass implements Interface1, Interface2 {}",
        "difficulty": "medium",
        "explanation": "In TypeScript, a class can implement multiple interfaces by listing them separated by commas after the 'implements' keyword. This means the class must include all the properties and methods defined in all the listed interfaces.",
        "hint": "Look for the syntax that allows a class to fulfill the contracts of multiple interfaces."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What are access modifiers in TypeScript?",
        "options": [
        "Keywords that control how class properties and methods can be accessed",
        "Methods that modify the access patterns of a class",
        "Interfaces that restrict access to certain properties",
        "Design patterns for controlling object creation"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Keywords that control how class properties and methods can be accessed",
        "difficulty": "easy",
        "explanation": "Access modifiers are keywords (public, private, protected) that define the visibility and accessibility of class members (properties and methods). They control where these members can be accessed from.",
        "hint": "They're related to encapsulation, one of the core principles of OOP."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What's the purpose of the 'super' keyword in TypeScript classes?",
        "options": [
        "To access static properties of the class",
        "To call methods defined in an interface",
        "To refer to the parent class and call its methods or constructor",
        "To extend the functionality of the current method"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To refer to the parent class and call its methods or constructor",
        "difficulty": "easy",
        "explanation": "The 'super' keyword is used to call methods on the parent class or to call the parent class constructor. This is particularly useful when overriding methods or when you need to initialize the parent class properties in the child class constructor.",
        "hint": "It's used when a subclass needs to interact with its parent class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the 'this' keyword in the context of TypeScript classes?",
        "options": [
        "A reference to the current module",
        "A reference to the parent class",
        "A reference to the current instance of the class",
        "A reference to the TypeScript compiler"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A reference to the current instance of the class",
        "difficulty": "easy",
        "explanation": "In TypeScript classes, 'this' refers to the current instance of the class. It's used to access the properties and methods of the current object from within the class definition.",
        "hint": "Think about what 'this' typically refers to in object-oriented programming."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is method overloading in TypeScript classes?",
        "options": [
        "Creating multiple methods with different names in the same class",
        "Creating multiple methods with the same name but different parameter types or count",
        "Overriding a method from a parent class",
        "Creating a method that performs multiple operations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creating multiple methods with the same name but different parameter types or count",
        "difficulty": "medium",
        "explanation": "Method overloading in TypeScript allows a class to have multiple methods with the same name but different parameter types or parameter counts. This provides flexibility in how a method can be called. In TypeScript, this is implemented by defining multiple function signatures followed by a single implementation that handles all cases.",
        "hint": "It's about providing different ways to call the same method based on the arguments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What are getter and setter methods in TypeScript?",
        "options": [
        "Methods that validate class properties",
        "Methods that allow controlled access to private properties",
        "Methods that are automatically called when a class is instantiated",
        "Methods that convert properties to different types"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Methods that allow controlled access to private properties",
        "difficulty": "medium",
        "explanation": "Getter and setter methods (defined using 'get' and 'set' keywords) provide a way to control access to class properties. They allow you to execute code when a property is accessed (get) or modified (set), enabling validation, computation, or other logic to run when interacting with properties.",
        "hint": "They're special methods that look like properties when being used from outside the class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "Which of the following is true about abstract classes in TypeScript?",
        "options": [
        "Abstract classes can be instantiated directly",
        "Abstract classes can contain concrete (implemented) methods",
        "Abstract classes must implement all methods from interfaces they implement",
        "Abstract classes cannot be extended by other classes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Abstract classes can contain concrete (implemented) methods",
        "difficulty": "hard",
        "explanation": "Abstract classes can contain a mix of abstract methods (without implementation) and concrete methods (with implementation). This is one of the key differences between abstract classes and interfaces. Abstract classes provide a partial implementation that subclasses can build upon.",
        "hint": "Think about what makes abstract classes different from interfaces in terms of implementation details."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the purpose of the 'private' constructor pattern in TypeScript?",
        "options": [
        "To prevent the class from being extended",
        "To create a secure way to initialize properties",
        "To ensure that a class can only be instantiated in specific ways (e.g., singletons)",
        "To hide implementation details from TypeScript's type checker"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To ensure that a class can only be instantiated in specific ways (e.g., singletons)",
        "difficulty": "hard",
        "explanation": "A private constructor prevents direct instantiation of a class using the 'new' keyword from outside the class. This pattern is commonly used to implement singleton classes (where only one instance should exist) or factory methods (where instance creation is controlled through static methods).",
        "hint": "It's often used in design patterns where you want to control how instances are created."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is polymorphism in TypeScript?",
        "options": [
        "The ability to create multiple classes with the same name",
        "The ability to create multiple instances of the same class",
        "The ability to have different classes with methods of the same name and signature",
        "The ability to define classes with varying numbers of properties"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The ability to have different classes with methods of the same name and signature",
        "difficulty": "hard",
        "explanation": "Polymorphism is an OOP concept that allows objects of different classes to be treated as objects of a common superclass. In practice, this means you can have different classes that implement methods with the same name and signature, and the appropriate method will be called based on the actual object type at runtime.",
        "hint": "It's about treating different things in a uniform way through a common interface or base class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What will this code output?\n```typescript\nclass Animal {\n  constructor(private name: string) {}\n  speak() { return `${this.name} makes a noise`; }\n}\n\nclass Dog extends Animal {\n  speak() { return `${this.name} barks`; }\n}\n\nconst dog = new Dog('Rex');\nconsole.log(dog.speak());\n```",
        "options": [
        "Rex barks",
        "Rex makes a noise",
        "undefined barks",
        "Error: Property 'name' is private and only accessible within class 'Animal'"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Error: Property 'name' is private and only accessible within class 'Animal'",
        "difficulty": "hard",
        "explanation": "The 'name' property is declared as private in the Animal class, which means it's only accessible within that class. Even though Dog extends Animal, it cannot access the private members of its parent class. Therefore, trying to access 'this.name' in the Dog class will result in a compilation error.",
        "hint": "Pay attention to the access modifier used for the 'name' property and where it's being accessed from."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the 'implements' keyword used for in TypeScript?",
        "options": [
        "To extend a class",
        "To implement interface requirements in a class",
        "To implement a private method",
        "To import functionality from modules"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To implement interface requirements in a class",
        "difficulty": "easy",
        "explanation": "The 'implements' keyword is used to declare that a class fulfills the contract defined by an interface. The class must implement all properties and methods specified by the interface, or it will result in a compilation error.",
        "hint": "It's about ensuring a class meets certain structural requirements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is encapsulation in OOP?",
        "options": [
        "The practice of bundling data and methods that operate on that data within a single unit",
        "The ability to create multiple objects from a single class definition",
        "The process of creating subclasses from a parent class",
        "The technique of converting class instances to JSON objects"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The practice of bundling data and methods that operate on that data within a single unit",
        "difficulty": "medium",
        "explanation": "Encapsulation is one of the four fundamental OOP principles. It refers to the bundling of data (properties) and methods that operate on that data within a single unit (class), and restricting access to some of the object's components. This is typically implemented using access modifiers like public, private, and protected.",
        "hint": "It's about organizing related data and functionality together and controlling access to internal state."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the difference between an abstract method and a normal method in TypeScript?",
        "options": [
        "Abstract methods have no body and must be implemented in derived classes",
        "Abstract methods can only be called from other abstract methods",
        "Abstract methods automatically become static methods",
        "Abstract methods cannot have parameters"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Abstract methods have no body and must be implemented in derived classes",
        "difficulty": "hard",
        "explanation": "An abstract method is declared without an implementation (no method body) and must be implemented by any concrete (non-abstract) derived class. Abstract methods can only be defined within an abstract class and serve as a contract that subclasses must fulfill.",
        "hint": "Think about what makes a method 'abstract' in terms of its implementation status."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the purpose of the 'instanceof' operator in TypeScript?",
        "options": [
        "To check if a property exists on an object",
        "To check if a class implements a specific interface",
        "To check if an object is an instance of a specific class",
        "To create new instances of a class"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To check if an object is an instance of a specific class",
        "difficulty": "medium",
        "explanation": "The 'instanceof' operator tests if an object is an instance of a specific class or a class that extends from it. It returns a boolean value indicating whether the object was created by the specified constructor or a constructor that inherits from it.",
        "hint": "It's used for runtime type checking of objects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the effect of the 'readonly' modifier versus private in TypeScript?",
        "options": [
        "readonly properties can only be set in the constructor, while private properties can be modified anywhere in the class",
        "readonly properties can be accessed from outside the class but not modified, while private properties cannot be accessed from outside the class",
        "readonly properties cannot be inherited by subclasses, while private properties can be",
        "There's no difference; the terms are interchangeable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "readonly properties can be accessed from outside the class but not modified, while private properties cannot be accessed from outside the class",
        "difficulty": "hard",
        "explanation": "The 'readonly' modifier and 'private' access modifier serve different purposes: readonly controls when a property can be modified (only at declaration or in the constructor), while private controls where a property can be accessed from (only within the declaring class). A property can be both readonly and private.",
        "hint": "One controls accessibility (who can access), the other controls mutability (whether it can change)."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the purpose of the 'static' keyword in TypeScript classes?",
        "options": [
        "To prevent a class from being instantiated",
        "To mark a class as immutable",
        "To create class members that belong to the class itself rather than instances",
        "To create private members that can't be accessed outside the class"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To create class members that belong to the class itself rather than instances",
        "difficulty": "medium",
        "explanation": "Static members (properties and methods) belong to the class itself rather than to instances of the class. They can be accessed using the class name without creating an instance. Static members are useful for functionality that doesn't depend on instance-specific data or for properties that should be shared across all instances.",
        "hint": "Think about members that don't require an instance of the class to be used."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the purpose of 'interface' in TypeScript?",
        "options": [
        "To create reusable UI components",
        "To define contracts that classes must adhere to",
        "To optimize performance of TypeScript code",
        "To create private methods in classes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define contracts that classes must adhere to",
        "difficulty": "easy",
        "explanation": "Interfaces in TypeScript define contracts or shapes that classes (or objects) must adhere to. They specify what properties and methods an object should have without providing implementations. When a class implements an interface, it must include all the properties and methods defined by that interface.",
        "hint": "Interfaces are about specifying what something should have, not how it works."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What are index signatures in class types?",
        "options": [
        "A way to quickly search for properties in a class",
        "A method to add metadata to class properties",
        "A way to define a class that allows additional properties of a specific type",
        "A technique to optimize property access in large classes"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A way to define a class that allows additional properties of a specific type",
        "difficulty": "hard",
        "explanation": "Index signatures in TypeScript classes allow you to define a type for properties that aren't explicitly declared. For example, `[key: string]: number` means the class can have any number of string properties, all with number values. This is useful when a class needs to support dynamically added properties.",
        "hint": "It's about accommodating properties that aren't known at design time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What will this code output?\n```typescript\nclass Counter {\n  #count = 0;\n  \n  increment() {\n    this.#count++;\n  }\n  \n  getCount() {\n    return this.#count;\n  }\n}\n\nconst counter = new Counter();\ncounter.increment();\ncounter.increment();\nconsole.log(counter.getCount());\n```",
        "options": ["0", "1", "2", "Error"],
        "correctOptionIndex": 2,
        "correctOptionText": "2",
        "difficulty": "medium",
        "explanation": "The code uses JavaScript's private field syntax (`#count`), which TypeScript supports. The private field can only be accessed within the class. The counter is incremented twice by calling the increment() method, and then getCount() returns the current value, which is 2.",
        "hint": "The # syntax is a JavaScript feature for truly private fields, which TypeScript supports."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the correct way to define a constructor in a TypeScript class?",
        "options": [
        "class Person { init(name: string) { this.name = name; } }",
        "class Person { constructor(name: string) { this.name = name; } }",
        "class Person { new(name: string) { this.name = name; } }",
        "class Person { Person(name: string) { this.name = name; } }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "class Person { constructor(name: string) { this.name = name; } }",
        "difficulty": "easy",
        "explanation": "In TypeScript, constructors are defined using the 'constructor' keyword within a class. The constructor is a special method that is called when an instance of the class is created, and it's used to initialize the class properties.",
        "hint": "Look for the standard function name used to initialize objects in many OOP languages."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What does the 'extends' keyword do in TypeScript?",
        "options": [
        "Adds new functionality to an existing class without modifying it",
        "Creates a new class that inherits properties and methods from a parent class",
        "Extends the interface of a class by adding new methods",
        "Adds static methods to a class"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a new class that inherits properties and methods from a parent class",
        "difficulty": "easy",
        "explanation": "The 'extends' keyword is used for class inheritance in TypeScript. A class that extends another class (the parent or base class) inherits all the properties and methods of the parent class. This allows for code reuse and establishing hierarchical relationships between classes.",
        "hint": "It's about establishing a parent-child relationship between classes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Classes & OOP",
        "questionText": "What is the 'as' keyword used for in TypeScript classes?",
        "options": [
        "To rename properties during inheritance",
        "To create aliases for class methods",
        "To perform type assertions or type casting",
        "To implement multiple interfaces simultaneously"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To perform type assertions or type casting",
        "difficulty": "medium",
        "explanation": "The 'as' keyword in TypeScript is used for type assertions, also known as type casting. It tells the compiler to treat a value as a specific type that you know it is, even if TypeScript can't verify it. In the context of classes, it might be used to assert that an object is an instance of a particular class.",
        "hint": "It's about manually specifying the type of a value when TypeScript can't infer it correctly."
    },

    // Generics
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is the primary purpose of generics in TypeScript?",
        "options": [
        "To make code run faster",
        "To create reusable components that work with a variety of types",
        "To reduce the file size of compiled JavaScript",
        "To eliminate the need for interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create reusable components that work with a variety of types",
        "difficulty": "easy",
        "explanation": "Generics allow you to create reusable components that can work with a variety of types rather than a single one, providing type safety while maintaining flexibility.",
        "hint": "Think about how generics help with code reusability while maintaining type safety."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What symbol is used to denote a generic type parameter in TypeScript?",
        "options": [
        "<>",
        "{}",
        "()",
        "[]"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "<>",
        "difficulty": "easy",
        "explanation": "Angle brackets (<>) are used to denote generic type parameters in TypeScript, such as in Array<string> or function declarations like function identity<T>(arg: T): T.",
        "hint": "These are the same symbols used in many other languages to denote generics."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What does the following TypeScript code do? function identity<T>(arg: T): T { return arg; }",
        "options": [
        "Creates a function that only accepts numbers",
        "Creates a function that returns the identity matrix",
        "Creates a generic function that returns whatever is passed to it",
        "Creates a function that converts any type to a string"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Creates a generic function that returns whatever is passed to it",
        "difficulty": "easy",
        "explanation": "This is the classic identity function that takes an argument of any type T and returns the same value with the same type T.",
        "hint": "Look at the return type and function body to understand what happens to the input argument."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "Which of the following is a valid way to call a generic function in TypeScript?",
        "options": [
        "genericFunction[string](argument)",
        "genericFunction<string>(argument)",
        "genericFunction(string)(argument)",
        "genericFunction(argument)<string>"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "genericFunction<string>(argument)",
        "difficulty": "easy",
        "explanation": "When calling a generic function, you can explicitly specify the type using angle brackets before the function arguments: genericFunction<string>(argument).",
        "hint": "The type parameter goes between angle brackets before the function's regular parameters."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is the output of the following code?\n\nfunction firstElement<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconsole.log(firstElement([1, 2, 3]));",
        "options": [
        "undefined",
        "1",
        "[1, 2, 3]",
        "Error"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "1",
        "difficulty": "easy",
        "explanation": "The firstElement function returns the first element of an array. When called with [1, 2, 3], it returns 1.",
        "hint": "The function is accessing the element at index 0 of the array."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is a generic constraint in TypeScript?",
        "options": [
        "A limitation on how many generic parameters you can use",
        "A way to restrict the types that can be used with a generic",
        "A rule that generics must follow at runtime",
        "A performance optimization for generic code"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A way to restrict the types that can be used with a generic",
        "difficulty": "medium",
        "explanation": "Generic constraints allow you to restrict the types that can be used with a generic by specifying that the type must satisfy certain requirements, typically by extending an interface or type.",
        "hint": "It's a way to set boundaries on what types can be used with your generic code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "How do you constrain a generic type parameter to only accept types that have a 'length' property?",
        "options": [
        "<T extends { length: number }>",
        "<T implements Lengthwise>",
        "<T where T.length exists>",
        "<T has length>"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "<T extends { length: number }>",
        "difficulty": "medium",
        "explanation": "You can constrain a generic type to only accept types with a length property by using the 'extends' keyword with an object type that has a length property: <T extends { length: number }>.",
        "hint": "The 'extends' keyword is used to create constraints on generic type parameters."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What's wrong with this generic function?\nfunction getProperty<T, K>(obj: T, key: K): T[K] {\n  return obj[key];\n}",
        "options": [
        "The function name should start with a capital letter",
        "There's no constraint on K to ensure it's a valid key of T",
        "Generic functions cannot have multiple type parameters",
        "The return type should be optional with T[K] | undefined"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "There's no constraint on K to ensure it's a valid key of T",
        "difficulty": "medium",
        "explanation": "The type K needs to be constrained to ensure it's a valid key of object T, otherwise TypeScript can't guarantee that obj[key] is valid. The correct implementation would be: function getProperty<T, K extends keyof T>(obj: T, key: K): T[K].",
        "hint": "Without constraints, K could be any type, but we need it to be a key of T for the function to work safely."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What does the 'keyof' operator do when used with generics?",
        "options": [
        "It returns all methods of a generic type",
        "It produces a union type of all property names of a type",
        "It creates a new key for a generic object",
        "It filters out non-string keys from an object type"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It produces a union type of all property names of a type",
        "difficulty": "medium",
        "explanation": "The 'keyof' operator, when applied to a type, produces a union type of all the property names (keys) of that type. For example, keyof {x: number, y: string} results in the type 'x' | 'y'.",
        "hint": "Think about what information you would need to safely access properties of a generic type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is a generic interface in TypeScript?",
        "options": [
        "An interface that works with any data type",
        "An interface with type parameters that can be specified when the interface is used",
        "An interface that automatically converts between types",
        "An interface that can only be implemented by classes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An interface with type parameters that can be specified when the interface is used",
        "difficulty": "medium",
        "explanation": "A generic interface in TypeScript is an interface that has one or more type parameters, allowing the interface to be used with different types specified at the time it's referenced or implemented.",
        "hint": "It follows the same principle as generic functions, but applies to interface definitions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is the correct way to define a generic interface for a key-value store?",
        "options": [
        "interface KeyValueStore { key: any, value: any }",
        "interface KeyValueStore<K, V> { [key: K]: V }",
        "interface KeyValueStore<K, V> { [key: string]: V }",
        "interface KeyValueStore<K extends string | number | symbol, V> { [key: K]: V }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "interface KeyValueStore<K, V> { [key: string]: V }",
        "difficulty": "medium",
        "explanation": "A generic key-value store interface would define an index signature with string keys and values of the generic type V. In TypeScript, index signature keys must be either string or number types, so we use [key: string]: V rather than [key: K]: V.",
        "hint": "Consider the syntax for index signatures in TypeScript and what types are allowed as index signature parameter types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "How would you create a generic class that maintains a queue of items?",
        "options": [
        "class Queue { items: any[] = []; }",
        "class Queue<T> { items: T[] = []; }",
        "class Queue(T) { items: T[] = []; }",
        "class Queue[T] { items: T[] = []; }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "class Queue<T> { items: T[] = []; }",
        "difficulty": "medium",
        "explanation": "To create a generic class in TypeScript, place the type parameter in angle brackets after the class name: class Queue<T>. This allows you to use the type parameter T throughout the class definition, as in the items property of type T[].",
        "hint": "The syntax for generic classes follows the same pattern as generic functions and interfaces."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What's the purpose of the default type parameter in TypeScript generics?",
        "options": [
        "To provide a fallback type when none is specified",
        "To ensure backward compatibility with JavaScript",
        "To optimize the performance of generic code",
        "To provide a base class for inheritance"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To provide a fallback type when none is specified",
        "difficulty": "medium",
        "explanation": "Default type parameters in TypeScript provide fallback types that are used when a type argument isn't explicitly provided. For example, in <T = string>, string is the default type for T if none is specified.",
        "hint": "It's similar to default function parameters, but for types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "How would you specify a default type parameter in a generic function?",
        "options": [
        "function example<T: string>(arg: T): T",
        "function example<T default string>(arg: T): T",
        "function example<T = string>(arg: T): T",
        "function example<T || string>(arg: T): T"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "function example<T = string>(arg: T): T",
        "difficulty": "medium",
        "explanation": "Default type parameters are specified using the equals sign (=) followed by the default type. In this case, if no type is provided when calling the function, T will default to string.",
        "hint": "The syntax is similar to how you provide default values for function parameters."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is the correct way to use multiple generic type parameters in a single function?",
        "options": [
        "function pair<T, U>(first: T, second: U): [T, U]",
        "function pair<T><U>(first: T, second: U): [T, U]",
        "function pair<T and U>(first: T, second: U): [T, U]",
        "function pair<T; U>(first: T, second: U): [T, U]"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function pair<T, U>(first: T, second: U): [T, U]",
        "difficulty": "medium",
        "explanation": "Multiple generic type parameters are specified as a comma-separated list within a single set of angle brackets. This allows you to use different type parameters for different arguments or parts of your function.",
        "hint": "Think about how you would list multiple arguments in a function parameter list."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is a generic type alias in TypeScript?",
        "options": [
        "A way to rename existing types",
        "A type definition that can work with any data type",
        "A type definition with type parameters that can be specified when the type is used",
        "A special syntax for defining union types"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A type definition with type parameters that can be specified when the type is used",
        "difficulty": "medium",
        "explanation": "A generic type alias in TypeScript is a type definition that includes type parameters, allowing the type to be customized with specific types when it's used, similar to generic interfaces and classes.",
        "hint": "Type aliases (defined with the 'type' keyword) can also take advantage of generics."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "Which of the following is a correct generic type alias for a function that takes an argument and returns a value of the same type?",
        "options": [
        "type IdentityFn = (x: any) => any;",
        "type IdentityFn<T> = (x: T) => any;",
        "type IdentityFn<T> = (x: T) => T;",
        "type IdentityFn = <T>(x: T) => T;"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "type IdentityFn = <T>(x: T) => T;",
        "difficulty": "medium",
        "explanation": "For a generic function type alias where the type parameter is scoped to the function signature, the correct syntax is 'type IdentityFn = <T>(x: T) => T;'. This defines a function type that takes an argument of any type T and returns a value of the same type T.",
        "hint": "Consider where the generic type parameter should be scoped - to the type alias itself or to the function signature?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is the difference between these two generic type aliases?\ntype Box1<T> = { value: T };\ntype Box2 = <T>{ value: T };",
        "options": [
        "They are identical in functionality",
        "Box1 is correct TypeScript syntax, while Box2 is invalid",
        "Box1 defines a generic object type, while Box2 defines a generic function type",
        "Box1 can only be used with primitive types, while Box2 works with any type"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Box1 is correct TypeScript syntax, while Box2 is invalid",
        "difficulty": "hard",
        "explanation": "Box1<T> is valid TypeScript syntax for a generic type alias. Box2 is invalid because type parameters for object types must be declared with the type name, not with the object literal.",
        "hint": "Consider the placement of the generic type parameter and which syntax is valid in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is wrong with this generic function?\nfunction processValue<T>(value: T): T extends string ? string : number {\n  return typeof value === 'string' ? value.toUpperCase() : value.toFixed(2);\n}",
        "options": [
        "Nothing is wrong with this function",
        "The conditional type in the return type is not correctly implemented",
        "TypeScript doesn't support conditional types in return types",
        "The function has a syntax error in the conditional check"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The conditional type in the return type is not correctly implemented",
        "difficulty": "hard",
        "explanation": "The function tries to use a conditional type in the return type, but there's a mismatch between the conditional type and the actual return values. The 'T extends string ? string : number' is used in a way that suggests it's a runtime check, but it's actually a compile-time type construct. The correct approach would be to use function overloads or a generic return type with type predicates.",
        "hint": "Conditional types are evaluated at compile time, not runtime. How does this affect the function implementation?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What's the output of this code?\nfunction identity<T>(arg: T): T {\n  return arg;\n}\nconst result = identity('hello');\nconsole.log(typeof result);",
        "options": [
        "T",
        "string",
        "object",
        "function"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "string",
        "difficulty": "medium",
        "explanation": "The identity function returns the same value it receives. When called with the string 'hello', it returns that string. typeof then returns 'string', since result is a string value.",
        "hint": "Generic type parameters in TypeScript are compile-time constructs and don't exist at runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "Which of the following is NOT a valid way to use generics with arrow functions in TypeScript?",
        "options": [
        "const identity = <T>(arg: T): T => arg;",
        "const identity = <T,>(arg: T): T => arg;",
        "const identity: <T>(arg: T) => T = arg => arg;",
        "const identity = <T extends {}>(arg: T): T => arg;"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "const identity = <T>(arg: T): T => arg;",
        "difficulty": "hard",
        "explanation": "While this syntax looks valid, it can cause issues in .tsx files because the <T> looks like an HTML tag. To avoid this ambiguity, TypeScript requires either a trailing comma (<T,>) or a constraint (<T extends {}>) when using generic type parameters with arrow functions.",
        "hint": "Consider potential parsing issues in JSX/TSX files when using generics with arrow functions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What does the 'infer' keyword do in TypeScript generics?",
        "options": [
        "It extracts type information from function parameters",
        "It allows TypeScript to infer generic types automatically",
        "It introduces a new type variable within a conditional type",
        "It forces TypeScript to use a specific type for a generic parameter"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It introduces a new type variable within a conditional type",
        "difficulty": "hard",
        "explanation": "The 'infer' keyword is used within conditional types to introduce a new type variable that represents a type to be inferred. It's commonly used in advanced type manipulation scenarios like extracting return types or parameter types from functions.",
        "hint": "It's a way to capture and use types that are part of other types, particularly within conditional type expressions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What does this type do? type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;",
        "options": [
        "It returns the type T if T is a function, otherwise any",
        "It extracts the return type of a function type",
        "It converts any type to a function type",
        "It creates a union type of all possible return values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It extracts the return type of a function type",
        "difficulty": "hard",
        "explanation": "ReturnType<T> is a conditional type that checks if T extends a function type. If it does, it uses 'infer R' to capture the return type of that function in the type variable R, and returns R. Otherwise, it returns any. This allows you to extract the return type of any function type.",
        "hint": "The 'infer' keyword is capturing a specific part of the function type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is a mapped type in TypeScript and how does it relate to generics?",
        "options": [
        "A mapped type creates a new object type by transforming properties of an existing type, and often uses generics to define the transformation",
        "A mapped type is a way to map JavaScript types to TypeScript types using generics",
        "A mapped type automatically maps all properties of a type to any other type without using generics",
        "A mapped type is a special case of generics that only works with primitive types"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A mapped type creates a new object type by transforming properties of an existing type, and often uses generics to define the transformation",
        "difficulty": "hard",
        "explanation": "Mapped types in TypeScript allow you to create new types by transforming each property in an existing type according to a rule. They typically use generics to accept the source type and often use the keyof operator to iterate over its keys. A common example is Partial<T> which makes all properties of T optional.",
        "hint": "Think about utility types like Partial<T>, Required<T>, or Readonly<T> and how they transform existing types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What does this mapped type do? type Readonly<T> = { readonly [P in keyof T]: T[P] };",
        "options": [
        "It creates a type with all properties of T set to readonly",
        "It extracts only the readonly properties from type T",
        "It removes readonly modifiers from all properties of T",
        "It creates a type where some properties of T are readonly"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It creates a type with all properties of T set to readonly",
        "difficulty": "hard",
        "explanation": "The Readonly<T> mapped type creates a new type where all properties of the original type T are marked as readonly, meaning they cannot be reassigned after initialization. This is done using a mapped type with the readonly modifier.",
        "hint": "Look at the 'readonly' keyword in the type definition and how it's applied to each property."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is wrong with this generic constraint? function getProp<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }",
        "options": [
        "The constraint should be K extends string | number | symbol",
        "Nothing is wrong with this constraint",
        "The constraint should be K in keyof T instead of K extends keyof T",
        "The generic parameters should be in reverse order: <K extends keyof T, T>"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Nothing is wrong with this constraint",
        "difficulty": "hard",
        "explanation": "This function correctly uses a generic constraint to ensure that K is a key of T. This allows TypeScript to know that obj[key] is valid and that the return type should be T[K]. The constraint K extends keyof T is the proper way to restrict K to only valid keys of T.",
        "hint": "The keyof operator produces a union of all property names of a type, and extends is used to create a constraint."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What happens when you use a generic type without specifying type arguments in TypeScript?",
        "options": [
        "It causes a compilation error",
        "TypeScript uses the 'any' type for all type parameters",
        "TypeScript attempts to infer the type arguments from context",
        "It uses the first type argument it finds in the codebase"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "TypeScript attempts to infer the type arguments from context",
        "difficulty": "medium",
        "explanation": "When you use a generic type without explicitly providing type arguments, TypeScript will try to infer the type arguments from the context, such as from the types of arguments passed to a generic function.",
        "hint": "TypeScript's type inference capabilities extend to generics as well."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What does this generic function do? function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] { return items.map(item => item[key]); }",
        "options": [
        "It removes elements from an array based on a key",
        "It extracts a specific property from each object in an array",
        "It filters an array to only include objects with a certain key",
        "It sorts an array based on the values of a specific property"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It extracts a specific property from each object in an array",
        "difficulty": "hard",
        "explanation": "The pluck function takes an array of objects of type T and a key K of T, then returns an array containing the value of property K from each object in the original array. It uses map to transform each item by extracting the specified property.",
        "hint": "Think about what happens when you call map with a function that extracts a single property from each object."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is a generic parameter constraint that ensures a type has a constructor?",
        "options": [
        "T extends new () => any",
        "T extends ConstructorType",
        "T extends { constructor: Function }",
        "T extends { new(...args: any[]): any }"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "T extends { new(...args: any[]): any }",
        "difficulty": "hard",
        "explanation": "To constrain a generic type parameter to only accept types that have a constructor, you use the syntax T extends { new(...args: any[]): any }. This ensures that T is a constructable type (a class or constructor function).",
        "hint": "The constraint needs to describe the shape of a constructor function in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What does the 'extends' keyword mean in this context: function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U",
        "options": [
        "It indicates that T and U must be subclasses of the object class",
        "It specifies that T and U must implement the object interface",
        "It constrains T and U to be object types (non-primitive)",
        "It means that the result inherits from both T and U"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It constrains T and U to be object types (non-primitive)",
        "difficulty": "medium",
        "explanation": "In this context, 'extends object' is a generic constraint that restricts the type parameters T and U to only accept types that are compatible with object, which means any non-primitive type. This ensures you're not trying to merge primitives like strings or numbers.",
        "hint": "The extends keyword in generic constraints limits what types can be used for the type parameter."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Generics",
        "questionText": "What is the difference between these two generic interfaces?\ninterface Box<T> { value: T; }\ninterface ValueBox { <T>(value: T): { value: T }; }",
        "options": [
        "They are different ways of writing the same interface",
        "Box<T> is a generic interface for an object, while ValueBox is an interface for a generic function",
        "Box<T> can only be used with classes, while ValueBox can be used with functions",
        "Box<T> is a valid TypeScript interface, while ValueBox has incorrect syntax"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Box<T> is a generic interface for an object, while ValueBox is an interface for a generic function",
        "difficulty": "hard",
        "explanation": "Box<T> is a generic interface that describes an object with a value property of type T. ValueBox, on the other hand, describes a function that takes a value of type T and returns an object with a value property of that same type T. One is a generic object interface, the other is a function interface with a generic method signature.",
        "hint": "Look at the syntax carefully - one has the generic parameter at the interface level, the other at the method level."
    },

    // Advanced Types
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a union type in TypeScript?",
        "options": [
        "A type that combines two objects into one",
        "A type that can be one of several types",
        "A type that is created by joining arrays",
        "A type that must implement multiple interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type that can be one of several types",
        "difficulty": "easy",
        "explanation": "A union type in TypeScript allows a value to be one of several types. It's written with a vertical bar (|) between the types, such as string | number.",
        "hint": "Think of the '|' operator as meaning 'or' between different possible types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is an intersection type in TypeScript?",
        "options": [
        "A type that must have properties from all constituent types",
        "A type that represents the overlap between arrays",
        "A type that can be assigned values of any primitive type",
        "A type that selects common properties between two types"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A type that must have properties from all constituent types",
        "difficulty": "easy",
        "explanation": "An intersection type combines multiple types into one, requiring an object to fulfill all the requirements of each constituent type. It's written with an ampersand (&) between types, such as A & B.",
        "hint": "Think of the '&' operator as meaning 'and' between different type requirements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a type guard in TypeScript?",
        "options": [
        "A compile-time error that prevents incorrect type usage",
        "A runtime check that guarantees type safety",
        "A function that performs a runtime check and guarantees a specific type within its scope",
        "A TypeScript feature that prevents type casting"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A function that performs a runtime check and guarantees a specific type within its scope",
        "difficulty": "medium",
        "explanation": "A type guard is a function or expression that performs a runtime check to guarantee the type of a variable within a certain scope. Common examples include the 'typeof' operator for primitive types or 'instanceof' for classes.",
        "hint": "Think about how you can narrow down the type of a variable within a conditional block."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "Which of the following is a valid user-defined type guard in TypeScript?",
        "options": [
        "function isString(x: any): boolean { return typeof x === 'string'; }",
        "function isString(x: any): x is string { return typeof x === 'string'; }",
        "function isString(x: any): typeOf<string> { return typeof x === 'string'; }",
        "function isString<T>(x: T): T is string { typeof x === 'string'; }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "function isString(x: any): x is string { return typeof x === 'string'; }",
        "difficulty": "medium",
        "explanation": "A user-defined type guard is a function that returns a type predicate using the 'is' keyword in its return type. The syntax 'x is string' tells TypeScript that if the function returns true, the variable x is of type string in the calling scope.",
        "hint": "Look for the special 'is' keyword in the return type, which is essential for user-defined type guards."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a discriminated union in TypeScript?",
        "options": [
        "A union type that TypeScript can automatically distinguish between its members",
        "A union type where all members share a common property with different literal values",
        "A union type that only allows discrimination based on the 'type' property",
        "A union type that requires explicit type casting to use"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A union type where all members share a common property with different literal values",
        "difficulty": "medium",
        "explanation": "A discriminated union (also called tagged union) is a union type where each member has a common property (the discriminant) with a different literal type value. This allows TypeScript to determine which specific type is being used based on the value of the discriminant property.",
        "hint": "It's a pattern that makes working with union types safer by adding a 'tag' to differentiate between the variants."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "Given the following code, what is the type of variable 'result'?\ntype Shape = { kind: 'circle', radius: number } | { kind: 'rectangle', width: number, height: number };\nconst shape: Shape = { kind: 'circle', radius: 5 };\nconst result = shape.kind;",
        "options": [
        "string",
        "'circle' | 'rectangle'",
        "any",
        "Object"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "'circle' | 'rectangle'",
        "difficulty": "medium",
        "explanation": "In this discriminated union, the 'kind' property is the discriminant with literal types 'circle' and 'rectangle'. When accessing this property, TypeScript knows it must be one of these two specific string literals, so the type of 'result' is the union of these literals: 'circle' | 'rectangle'.",
        "hint": "TypeScript tracks the possible literal values that can be assigned to the discriminant property."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a type assertion in TypeScript?",
        "options": [
        "A way to enforce that a variable must be of a specific type",
        "A way to tell the compiler to treat a value as a specific type",
        "A feature that verifies types at runtime",
        "A method to create new types from existing ones"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A way to tell the compiler to treat a value as a specific type",
        "difficulty": "easy",
        "explanation": "A type assertion is a way to tell the TypeScript compiler to treat a value as a specific type, regardless of what the compiler might infer. It doesn't actually change the type at runtime or perform any checking - it's purely a compile-time construct.",
        "hint": "Type assertions are used when you have more knowledge about a value's type than TypeScript can infer."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "Which of the following is a valid type assertion in TypeScript?",
        "options": [
        "const len = (input as string).length;",
        "const len = (input typeof string).length;",
        "const len = (input is string).length;",
        "const len = (input cast string).length;"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "const len = (input as string).length;",
        "difficulty": "easy",
        "explanation": "The 'as' keyword is used for type assertions in TypeScript. The syntax 'input as string' tells the compiler to treat the value 'input' as a string, allowing access to string properties like 'length'.",
        "hint": "TypeScript supports two syntaxes for type assertions: 'as' syntax and angle bracket syntax, but 'as' is more commonly used."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is the 'never' type in TypeScript?",
        "options": [
        "A type that can hold any value except null and undefined",
        "A type that represents a value that will never occur",
        "A placeholder type that must be replaced before compilation",
        "A type that indicates an empty array"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type that represents a value that will never occur",
        "difficulty": "medium",
        "explanation": "The 'never' type represents values that never occur. It's used for functions that never return (like functions that always throw exceptions or have infinite loops) or for variables that can never have a valid value due to type constraints.",
        "hint": "Think about situations where a function doesn't complete normally or a variable can't possibly have any value."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "Which of the following functions returns the 'never' type?",
        "options": [
        "function example(): never { while(true) {} }",
        "function example(): never { return null; }",
        "function example(): never { return undefined; }",
        "function example(): never { return; }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function example(): never { while(true) {} }",
        "difficulty": "medium",
        "explanation": "A function that contains an infinite loop and doesn't have a reachable end point returns the 'never' type because it never completes normally. Functions with infinite loops, functions that always throw exceptions, and functions that have unreachable end points all return 'never'.",
        "hint": "The 'never' type is assigned to values that never occur, like functions that don't complete normally."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What are literal types in TypeScript?",
        "options": [
        "Types that can only contain string literals",
        "Types that represent exact values rather than sets of values",
        "Types that must be defined with const declarations",
        "Types that cannot be assigned to variables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Types that represent exact values rather than sets of values",
        "difficulty": "medium",
        "explanation": "Literal types in TypeScript represent specific, exact values rather than general sets of values. Examples include string literals like 'error', number literals like 42, or boolean literals like true. They allow more precise type specifications than general types.",
        "hint": "Think about specifying a type to be exactly one specific value, rather than any value of a broader type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "Which of the following is a valid literal type in TypeScript?",
        "options": [
        "type Status = 'loading' | 'success' | 'error';",
        "type Status = literal('loading', 'success', 'error');",
        "type Status = literal<'loading' | 'success' | 'error'>;",
        "type Status = enum { 'loading', 'success', 'error' };"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "type Status = 'loading' | 'success' | 'error';",
        "difficulty": "medium",
        "explanation": "A union of string literals creates a type that can only be one of those specific strings. This example creates a type 'Status' that can only have the values 'loading', 'success', or 'error', and no other strings.",
        "hint": "String literal types are specific string values in quotes, and they can be combined with union types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is the 'unknown' type in TypeScript?",
        "options": [
        "A type that is the same as 'any'",
        "A type that represents values of unknown origin that must be checked before use",
        "A type for variables that haven't been initialized yet",
        "A type that can only be used with type guards"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type that represents values of unknown origin that must be checked before use",
        "difficulty": "medium",
        "explanation": "The 'unknown' type is the type-safe counterpart of 'any'. While variables of type 'any' can be used freely, variables of type 'unknown' cannot be used or accessed until they've been narrowed to a more specific type through type checking or type assertions.",
        "hint": "Think of 'unknown' as a more cautious version of 'any' that requires explicit type checking before use."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is the difference between 'any' and 'unknown' in TypeScript?",
        "options": [
        "There is no difference; they are aliases for the same type",
        "'any' allows any operations without type checking, while 'unknown' requires type checking before operations",
        "'any' is only for legacy code, while 'unknown' is the modern replacement",
        "'any' is for simple types, while 'unknown' is for complex objects"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "'any' allows any operations without type checking, while 'unknown' requires type checking before operations",
        "difficulty": "medium",
        "explanation": "Both 'any' and 'unknown' can hold values of any type, but they differ in how they can be used. Variables of type 'any' can be used freely without type checking, effectively bypassing TypeScript's type system. Variables of type 'unknown' are more restrictive - you must perform type checking before performing operations on them.",
        "hint": "'unknown' is safer than 'any' because it forces you to verify the type before using it."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a conditional type in TypeScript?",
        "options": [
        "A type that depends on a runtime condition",
        "A type that is determined based on another type using a ternary-like syntax",
        "A type that only exists if a certain condition is met",
        "A type that requires a conditional statement to access"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type that is determined based on another type using a ternary-like syntax",
        "difficulty": "hard",
        "explanation": "Conditional types in TypeScript allow you to select between two possible types based on whether a type relationship is satisfied. They use a syntax similar to ternary expressions: T extends U ? X : Y. If T is assignable to U, the type is X, otherwise it's Y.",
        "hint": "Conditional types select between two types based on a type relationship, using a syntax that resembles JavaScript's conditional operator."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What does this conditional type do? type NonNullable<T> = T extends null | undefined ? never : T;",
        "options": [
        "It creates a type that is either null or undefined",
        "It creates a type that can never be null or undefined",
        "It removes null and undefined from the set of possible values for a type",
        "It validates that a type is not null at runtime"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It removes null and undefined from the set of possible values for a type",
        "difficulty": "hard",
        "explanation": "NonNullable<T> is a conditional type that removes null and undefined from the possible values of T. If T extends null or undefined, the result is never (meaning that value is excluded); otherwise, the result is T itself. This is useful for creating types that don't allow null or undefined values.",
        "hint": "The conditional is checking if T is compatible with null or undefined, and if so, it replaces that possibility with 'never'."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is the 'infer' keyword used for in TypeScript?",
        "options": [
        "To tell TypeScript to infer the type of a variable automatically",
        "To create a placeholder for a type that TypeScript should infer",
        "To force TypeScript to use type inference instead of explicit typing",
        "To declare that a function returns an inferred type"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To create a placeholder for a type that TypeScript should infer",
        "difficulty": "hard",
        "explanation": "The 'infer' keyword is used in conditional types to create a placeholder for a type that TypeScript should try to infer from the condition. It allows you to extract and reference parts of a type that you'd otherwise have no way to name or reference.",
        "hint": "Think of 'infer' as a way to 'capture' part of a type within a conditional type expression."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What does this conditional type do? type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;",
        "options": [
        "It creates a type that can be any function return type",
        "It extracts the return type of a function type",
        "It infers the return type of a function at runtime",
        "It creates a function that returns type R"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It extracts the return type of a function type",
        "difficulty": "hard",
        "explanation": "ReturnType<T> is a conditional type that extracts the return type of a function type. It uses 'infer R' to capture the return type in the type variable R if T is a function type, and then returns R. If T is not a function type, it returns 'any'.",
        "hint": "The 'infer R' is creating a type variable that captures the return type position in the function type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a mapped type in TypeScript?",
        "options": [
        "A type that maps JavaScript primitive types to TypeScript types",
        "A type that creates a new type by transforming each property in an existing type",
        "A type that maps interface methods to implementation functions",
        "A type that converts between compatible types automatically"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type that creates a new type by transforming each property in an existing type",
        "difficulty": "hard",
        "explanation": "A mapped type in TypeScript creates a new type by iterating through the keys of an existing type and applying a transformation to each property. It's similar to how array map() transforms each element in an array. This allows for powerful type transformations like making all properties optional or readonly.",
        "hint": "Mapped types allow you to create new types by applying transformations to all properties of an existing type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What does this mapped type do? type Optional<T> = { [P in keyof T]?: T[P] };",
        "options": [
        "It makes all properties of T required",
        "It makes all properties of T optional",
        "It keeps only the optional properties from T",
        "It creates a new type where properties of T can be undefined"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It makes all properties of T optional",
        "difficulty": "hard",
        "explanation": "This mapped type (also known as Partial<T> in TypeScript's standard library) creates a new type by taking all properties from type T and making them optional by adding the ? modifier. This is useful when you want to accept an object that might not have all properties of a required interface.",
        "hint": "Look at the question mark (?) after the property name in the mapped type definition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What does the 'keyof' operator do in TypeScript?",
        "options": [
        "It returns all enumerable property names of an object at runtime",
        "It creates a union type of all property names of a type",
        "It returns the key type of a Map or object",
        "It extracts the key type from a key-value pair"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It creates a union type of all property names of a type",
        "difficulty": "medium",
        "explanation": "The 'keyof' operator in TypeScript creates a union type of all property names (keys) of a given type. For example, keyof {x: number, y: string} results in the type 'x' | 'y'. This is useful for creating types that refer to property names of other types.",
        "hint": "It's a way to get all possible keys of an object type as a type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is the result of 'keyof any' in TypeScript?",
        "options": [
        "string | number | symbol",
        "string",
        "any",
        "never"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "string | number | symbol",
        "difficulty": "hard",
        "explanation": "In TypeScript, 'keyof any' produces the type 'string | number | symbol', which represents all possible property key types in JavaScript. This is because object keys in JavaScript can be strings, numbers, or symbols.",
        "hint": "Think about all the valid key types that can be used to index into objects in JavaScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What are index types in TypeScript?",
        "options": [
        "Types that define how arrays should be indexed",
        "Types that can be used as object property names",
        "Types that allow you to query and use property names from other types",
        "Types that specify the structure of object indices"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Types that allow you to query and use property names from other types",
        "difficulty": "medium",
        "explanation": "Index types in TypeScript allow you to query and use property names from other types, ensuring type safety when accessing properties dynamically. They typically involve the 'keyof' operator and indexed access types (T[K]).",
        "hint": "Index types help maintain type safety when working with properties whose names aren't known until runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is the purpose of the 'typeof' operator in TypeScript (as distinct from JavaScript's typeof)?",
        "options": [
        "It returns a string representing the runtime type of a value",
        "It creates a type based on the structure of a value or variable",
        "It checks if a variable is defined",
        "It enforces type checking on an expression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It creates a type based on the structure of a value or variable",
        "difficulty": "medium",
        "explanation": "In TypeScript, the 'typeof' operator (when used in a type context) creates a type that represents the type of a value or variable. This is different from JavaScript's typeof, which returns a string at runtime. TypeScript's typeof allows you to capture the type of a variable or expression as a type.",
        "hint": "TypeScript's typeof is used in type contexts to reference the type of a value, not to check types at runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What will be the type of 'T' in this example?\nconst person = { name: 'John', age: 30 };\ntype T = typeof person;",
        "options": [
        "any",
        "object",
        "{ name: string, age: number }",
        "typeof Object"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "{ name: string, age: number }",
        "difficulty": "medium",
        "explanation": "When 'typeof' is used in a type context on an object literal, it creates an object type that matches the structure of that object. In this case, 'T' becomes the type '{ name: string, age: number }', capturing the exact shape of the 'person' object.",
        "hint": "TypeScript's typeof captures the full structural type of the value, including property names and their types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a type alias in TypeScript?",
        "options": [
        "A way to rename imported types to avoid naming conflicts",
        "A name for any type, which can be primitive, union, intersection, or any other type expression",
        "A feature that allows types to be automatically converted to compatible types",
        "A way to create shorthand names for complex type assertions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A name for any type, which can be primitive, union, intersection, or any other type expression",
        "difficulty": "easy",
        "explanation": "A type alias in TypeScript creates a new name for a type. The type can be simple (like primitive types) or complex (like unions, intersections, or object types). Type aliases are created using the 'type' keyword and can make complex type expressions more readable and reusable.",
        "hint": "Type aliases don't create new types - they create new names for existing types or type expressions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is the difference between an interface and a type alias in TypeScript?",
        "options": [
        "Interfaces can be extended, while type aliases cannot",
        "Interfaces can only describe object types, while type aliases can describe any type",
        "Type aliases are faster at compile time than interfaces",
        "There is no difference; they are completely interchangeable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Interfaces can only describe object types, while type aliases can describe any type",
        "difficulty": "medium",
        "explanation": "While interfaces and type aliases are similar in many ways, a key difference is that interfaces can only describe object types (including functions and classes), whereas type aliases can describe any type, including primitives, unions, and intersections. Additionally, interfaces can be extended and merged, which creates unique use cases for each.",
        "hint": "Think about the kinds of types each can represent, not just how they're used with objects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a template literal type in TypeScript?",
        "options": [
        "A type that matches the structure of template literals in JavaScript",
        "A type that can only contain string literals",
        "A type constructed from string literal types using template literal syntax",
        "A type used to validate template strings at runtime"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A type constructed from string literal types using template literal syntax",
        "difficulty": "hard",
        "explanation": "Template literal types in TypeScript allow you to create new string literal types by combining existing string literal types using template literal syntax. They enable powerful string manipulation at the type level, like creating types that represent string patterns or combinations.",
        "hint": "They use the same backtick syntax as template literals in JavaScript, but operate on types rather than values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What will be the resulting type of 'EventName' in this code?\ntype BaseEvent = 'click' | 'focus';\ntype EventName = `on${BaseEvent}`;",
        "options": [
        "'onclick' | 'onfocus'",
        "BaseEvent",
        "string",
        "`on${string}`"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "'onclick' | 'onfocus'",
        "difficulty": "hard",
        "explanation": "The template literal type creates a new union type by prepending 'on' to each member of the BaseEvent union. So 'click' becomes 'onclick' and 'focus' becomes 'onfocus', making the resulting type 'onclick' | 'onfocus'.",
        "hint": "Template literal types apply the template transformation to each member of a union type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a recursive type in TypeScript?",
        "options": [
        "A type that requires recursive functions to use",
        "A type that references itself in its definition",
        "A type that can only be used in recursive functions",
        "A type that TypeScript processes recursively at compile time"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type that references itself in its definition",
        "difficulty": "hard",
        "explanation": "A recursive type in TypeScript is a type that refers to itself within its own definition. This is useful for defining types for tree-like structures, nested data, or data with indefinite depth. A common example is a file system node that can contain child nodes of the same type.",
        "hint": "Recursive types are necessary for representing hierarchical or nested data structures of arbitrary depth."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a recursive type definition for a JSON value?",
        "options": [
        "type JSON = string | number | boolean | null | JSON[] | { [key: string]: JSON };",
        "type JSON = string | number | boolean | null | Array<any> | Object;",
        "type JSON = RecursiveType<string | number | boolean | null | any[] | object>;",
        "type JSON = any;"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "type JSON = string | number | boolean | null | JSON[] | { [key: string]: JSON };",
        "difficulty": "hard",
        "explanation": "A proper recursive type for JSON values defines that a JSON value can be a primitive (string, number, boolean, null), an array of JSON values, or an object with string keys and JSON values. The recursion comes from using the type being defined (JSON) within its own definition for array elements and object property values.",
        "hint": "A JSON value can contain other JSON values in arrays or as object properties, creating a recursive structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Advanced Types",
        "questionText": "What is a utility type in TypeScript?",
        "options": [
            "A built-in type that provides faster type checking",
            "A type that helps with common conversions between primitive types",
            "A pre-defined type that helps with common type transformations",
            "A utility function that generates types at runtime"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A pre-defined type that helps with common type transformations",
        "difficulty": "hard",
        "explanation": "Utility types are built-in generic types that enable type transformation operations. Examples include Partial<T> to make all properties optional, Readonly<T> to make properties immutable, and Pick<T,K> to select specific properties from a type.",
        "hint": "Common examples include Partial, Required, and Pick - used to modify existing type structures rather than create new ones from scratch."
    },
          

    // Modules & Namespaces
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which keyword is used to export functionality from a TypeScript module?",
        "options": ["public", "export", "expose", "publish"],
        "correctOptionIndex": 1,
        "correctOptionText": "export",
        "difficulty": "easy",
        "explanation": "The `export` keyword is used to make functions, classes, interfaces, and variables accessible outside their module.",
        "hint": "Think about which keyword makes components available to other modules."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which statement correctly imports a specific function named 'calculate' from a module?",
        "options": ["import calculate from './math';", "import { calculate } from './math';", "import * as calculate from './math';", "require('./math').calculate;"],
        "correctOptionIndex": 1,
        "correctOptionText": "import { calculate } from './math';",
        "difficulty": "easy",
        "explanation": "The curly braces syntax `import { calculate }` is used to import a specific named export from a module.",
        "hint": "Named imports use a specific syntax that involves curly braces."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the purpose of the 'namespace' keyword in TypeScript?",
        "options": ["To create a new JavaScript file", "To group related functionality under a single name", "To import external modules", "To export multiple values at once"],
        "correctOptionIndex": 1,
        "correctOptionText": "To group related functionality under a single name",
        "difficulty": "easy",
        "explanation": "Namespaces are used to group related code under a single name, helping to prevent naming collisions in the global scope.",
        "hint": "Namespaces provide a way to organize code logically."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "How do you import everything from a module into a single variable?",
        "options": ["import * as Utils from './utils';", "import Utils from './utils';", "import { * } from './utils';", "import all as Utils from './utils';"],
        "correctOptionIndex": 0,
        "correctOptionText": "import * as Utils from './utils';",
        "difficulty": "easy",
        "explanation": "The `import * as` syntax is used to import all exports from a module and bind them to a single namespace object.",
        "hint": "The wildcard (*) character has a special meaning in import statements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the difference between a namespace and a module in TypeScript?",
        "options": ["There is no difference", "Namespaces are internal to a file, modules span across files", "Modules use 'import/export', namespaces use 'namespace' keyword", "Namespaces are deprecated, modules are the modern approach"],
        "correctOptionIndex": 2,
        "correctOptionText": "Modules use 'import/export', namespaces use 'namespace' keyword",
        "difficulty": "medium",
        "explanation": "Modules use the ES6 import/export syntax for code organization, while namespaces use the TypeScript-specific 'namespace' keyword to group related code.",
        "hint": "Consider the different syntax used for each approach."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "How do you export a default value from a TypeScript module?",
        "options": ["export main = function() {};", "export { default } function() {};", "export default function() {};", "default export function() {};"],
        "correctOptionIndex": 2,
        "correctOptionText": "export default function() {};",
        "difficulty": "easy",
        "explanation": "The 'export default' syntax is used to export a single default value from a module, which can then be imported without using curly braces.",
        "hint": "A module can have only one default export."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which statement correctly imports a default export from a module?",
        "options": ["import { default } from './module';", "import default from './module';", "import * as default from './module';", "import MyClass from './module';"],
        "correctOptionIndex": 3,
        "correctOptionText": "import MyClass from './module';",
        "difficulty": "easy",
        "explanation": "Default exports are imported without curly braces and can be named anything by the importing module.",
        "hint": "Default imports use a different syntax than named imports."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What happens when you export the same name from multiple files and import them?",
        "options": ["It causes a compilation error", "The last import overwrites previous ones", "You must use namespace qualifiers to access them", "You must alias the imports to avoid conflicts"],
        "correctOptionIndex": 3,
        "correctOptionText": "You must alias the imports to avoid conflicts",
        "difficulty": "medium",
        "explanation": "When importing the same exported name from different modules, you need to use import aliases to avoid naming conflicts.",
        "hint": "Consider what happens when two different imports try to use the same name in the same scope."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "How do you re-export functionality from another module?",
        "options": ["import then export", "export from", "export * from './other-module';", "re-export './other-module';"],
        "correctOptionIndex": 2,
        "correctOptionText": "export * from './other-module';",
        "difficulty": "medium",
        "explanation": "The 'export * from' syntax allows you to re-export all named exports from another module, essentially passing them through the current module.",
        "hint": "You can export from another module without explicitly importing it first."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which statement would make the interface 'User' accessible outside its namespace?",
        "options": ["public interface User {}", "namespace Users { interface User {} }", "namespace Users { export interface User {} }", "export namespace Users { interface User {} }"],
        "correctOptionIndex": 2,
        "correctOptionText": "namespace Users { export interface User {} }",
        "difficulty": "medium",
        "explanation": "To make an interface accessible outside its namespace, you need to export it using the 'export' keyword within the namespace.",
        "hint": "Think about which component needs the 'export' keyword in this context."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the TypeScript compiler option that determines the module system used for the generated JavaScript?",
        "options": ["moduleSystem", "target", "module", "moduleType"],
        "correctOptionIndex": 2,
        "correctOptionText": "module",
        "difficulty": "medium",
        "explanation": "The 'module' compiler option in tsconfig.json specifies which module system the generated JavaScript will use (e.g., 'CommonJS', 'AMD', 'ESNext').",
        "hint": "This compiler option determines whether your imports/exports become require calls or ES modules."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which approach is generally recommended by the TypeScript team for organizing code?",
        "options": ["Always use namespaces", "Always use modules", "Use both equally", "Use namespaces for small projects, modules for large ones"],
        "correctOptionIndex": 1,
        "correctOptionText": "Always use modules",
        "difficulty": "easy",
        "explanation": "The TypeScript team recommends using modules over namespaces for most code organization, as modules align better with ECMAScript standards and modern tooling.",
        "hint": "Consider which approach aligns better with JavaScript's native module system."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the effect of the 'export =' syntax in TypeScript?",
        "options": ["It exports all variables", "It creates a default export", "It exports a namespace as a module", "It makes a module compatible with CommonJS/AMD require"],
        "correctOptionIndex": 3,
        "correctOptionText": "It makes a module compatible with CommonJS/AMD require",
        "difficulty": "hard",
        "explanation": "The 'export =' syntax is used to provide compatibility with CommonJS and AMD module systems, where modules export a single object.",
        "hint": "This is related to interoperability with non-ES module systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which approach allows for automatic merging of declarations across multiple files?",
        "options": ["ES Modules", "TypeScript Modules", "Namespaces", "Export statements"],
        "correctOptionIndex": 2,
        "correctOptionText": "Namespaces",
        "difficulty": "medium",
        "explanation": "TypeScript namespaces with the same name will automatically merge their declarations even across multiple files, a feature not available with ES modules.",
        "hint": "This approach predates ES modules and allows for distributed definition of a single logical unit."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "How do you access a type exported from a namespace in another file?",
        "options": ["import { Type } from 'Namespace';", "import Type = Namespace.Type;", "import Namespace.Type;", "import * as Namespace; then use Namespace.Type"],
        "correctOptionIndex": 1,
        "correctOptionText": "import Type = Namespace.Type;",
        "difficulty": "medium",
        "explanation": "To import a type from a namespace, you use the 'import Type = Namespace.Type;' syntax, which creates a local alias for the namespace-qualified type.",
        "hint": "This syntax is specific to namespace imports and different from ES module imports."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What happens when you have a circular dependency between TypeScript modules?",
        "options": ["TypeScript compiler fails", "It works correctly with no issues", "It may work but with potential runtime issues", "It's automatically resolved by the compiler"],
        "correctOptionIndex": 2,
        "correctOptionText": "It may work but with potential runtime issues",
        "difficulty": "hard",
        "explanation": "Circular dependencies between modules may compile but can lead to runtime issues like undefined objects if not handled carefully, especially with certain module systems.",
        "hint": "The order of evaluation becomes important when modules depend on each other."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which statement correctly imports a type only (without including it in the JavaScript output)?",
        "options": ["import type { User } from './types';", "import { type User } from './types';", "import User from './types' as type;", "type import { User } from './types';"],
        "correctOptionIndex": 0,
        "correctOptionText": "import type { User } from './types';",
        "difficulty": "medium",
        "explanation": "The 'import type' syntax imports a type for use in TypeScript type annotations without including it in the generated JavaScript output.",
        "hint": "This is useful for optimizing bundle size by excluding type information at runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the main advantage of using barrel files (index.ts that re-exports) in TypeScript projects?",
        "options": ["They reduce compilation time", "They simplify import statements", "They reduce the final bundle size", "They enable automatic type inference"],
        "correctOptionIndex": 1,
        "correctOptionText": "They simplify import statements",
        "difficulty": "medium",
        "explanation": "Barrel files (index.ts files that re-export from multiple modules) allow for simplified imports by providing a single entry point for multiple related exports.",
        "hint": "Consider how they affect the way consumers import functionality from your module."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What happens when you use 'export default' and named exports in the same module?",
        "options": ["It causes a compiler error", "Only the default export is accessible", "Only named exports are accessible", "Both default and named exports are accessible"],
        "correctOptionIndex": 3,
        "correctOptionText": "Both default and named exports are accessible",
        "difficulty": "easy",
        "explanation": "A module can have both a default export and multiple named exports, which can be imported separately or together using different import syntaxes.",
        "hint": "This is a common pattern in JavaScript modules."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which statement correctly creates a namespace augmentation?",
        "options": ["extend namespace MyNamespace {}", "namespace MyNamespace.SubNamespace {}", "augment namespace MyNamespace {}", "namespace MyNamespace {}"],
        "correctOptionIndex": 3,
        "correctOptionText": "namespace MyNamespace {}",
        "difficulty": "hard",
        "explanation": "To augment an existing namespace, you declare another namespace block with the same name. TypeScript will merge them automatically.",
        "hint": "You don't need a special keyword, just the same namespace name."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the correct way to import a JSON file in TypeScript?",
        "options": ["import data from './data.json';", "import * as data from './data.json';", "const data = require('./data.json');", "All of the above depending on configuration"],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above depending on configuration",
        "difficulty": "medium",
        "explanation": "The correct way to import JSON depends on your TypeScript configuration. With 'resolveJsonModule' enabled, you can use ES imports. Otherwise, require() is often used.",
        "hint": "The tsconfig.json settings affect how JSON imports work."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "How do you create a nested namespace in TypeScript?",
        "options": ["namespace Parent.Child {}", "namespace Parent { namespace Child {} }", "Parent.namespace Child {}", "Both A and B are valid"],
        "correctOptionIndex": 3,
        "correctOptionText": "Both A and B are valid",
        "difficulty": "medium",
        "explanation": "TypeScript supports both dot notation (namespace Parent.Child {}) and nested declaration (namespace Parent { namespace Child {} }) to create nested namespaces.",
        "hint": "TypeScript offers multiple syntaxes for this concept."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which module resolution strategy looks for 'index.js' in directories?",
        "options": ["Classic", "Node", "AMD", "ES2015"],
        "correctOptionIndex": 1,
        "correctOptionText": "Node",
        "difficulty": "medium",
        "explanation": "The Node module resolution strategy, based on Node.js, looks for 'index.js' files when a directory is imported, mimicking Node.js's module resolution behavior.",
        "hint": "This matches the behavior of a popular JavaScript runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the purpose of the 'paths' compiler option in tsconfig.json?",
        "options": ["To specify where to output compiled files", "To define module path aliases for imports", "To set the source file locations", "To exclude specific paths from compilation"],
        "correctOptionIndex": 1,
        "correctOptionText": "To define module path aliases for imports",
        "difficulty": "medium",
        "explanation": "The 'paths' option in tsconfig.json allows you to define aliases for module paths, enabling shorthand imports (e.g., '@app/shared' instead of '../../shared').",
        "hint": "This is useful for avoiding deep relative import paths."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What happens to namespace declarations in the compiled JavaScript output?",
        "options": ["They become ES6 modules", "They become objects or IIFEs", "They are removed entirely", "They become TypeScript-specific runtime constructs"],
        "correctOptionIndex": 1,
        "correctOptionText": "They become objects or IIFEs",
        "difficulty": "hard",
        "explanation": "Namespaces are compiled to JavaScript as either objects or immediately-invoked function expressions (IIFEs) that create objects with the exported members.",
        "hint": "Think about how scope would be maintained in JavaScript before ES modules."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which statement correctly imports a specific export and renames it locally?",
        "options": ["import { original as renamed } from './module';", "import { renamed: original } from './module';", "import original as renamed from './module';", "import renamed = original from './module';"],
        "correctOptionIndex": 0,
        "correctOptionText": "import { original as renamed } from './module';",
        "difficulty": "easy",
        "explanation": "The 'as' keyword is used within curly braces to rename imported exports, allowing you to avoid naming conflicts or provide more descriptive names.",
        "hint": "This syntax follows the pattern of 'original name as local name'."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the purpose of the 'declare global' block in TypeScript?",
        "options": ["To create a new global variable", "To augment the global namespace", "To declare a global module", "To make a namespace globally available"],
        "correctOptionIndex": 1,
        "correctOptionText": "To augment the global namespace",
        "difficulty": "hard",
        "explanation": "The 'declare global' block allows you to add declarations to the global scope from within a module, useful for augmenting built-in types like Window or adding custom globals.",
        "hint": "This is often used in declaration files (.d.ts) to modify existing global types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the difference between 'import foo = require(\"foo\")' and 'import * as foo from \"foo\"'?",
        "options": ["No difference, they are equivalent", "The first works with CommonJS/AMD modules, the second with ES modules", "The first imports types only, the second imports values", "The first is deprecated in newer TypeScript versions"],
        "correctOptionIndex": 1,
        "correctOptionText": "The first works with CommonJS/AMD modules, the second with ES modules",
        "difficulty": "hard",
        "explanation": "The 'import = require()' syntax is specific to TypeScript and provides interoperability with CommonJS/AMD modules, while 'import * as' is the standard ES modules syntax.",
        "hint": "One is TypeScript-specific syntax, the other is from the ECMAScript standard."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "Which feature allows you to use a JavaScript file as a module without type declarations?",
        "options": ["allowJs", "noImplicitAny", "moduleResolution", "allowSyntheticDefaultImports"],
        "correctOptionIndex": 0,
        "correctOptionText": "allowJs",
        "difficulty": "medium",
        "explanation": "The 'allowJs' compiler option enables TypeScript to process JavaScript files as part of the program, allowing you to import them as modules.",
        "hint": "This option is often used when gradually migrating JavaScript codebases to TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Modules & Namespaces",
        "questionText": "What is the primary purpose of ambient modules (declared with 'declare module')?",
        "options": ["To create new module implementations", "To provide type information for existing JavaScript modules", "To replace namespace declarations", "To optimize module loading"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide type information for existing JavaScript modules",
        "difficulty": "hard",
        "explanation": "Ambient module declarations using 'declare module' provide TypeScript with type information for existing JavaScript modules that don't have TypeScript definitions.",
        "hint": "They're commonly found in .d.ts declaration files and don't generate runtime code."
    },

    // Decorators
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is a decorator in TypeScript?",
        "options": [
        "A special kind of interface",
        "A special kind of declaration that can be attached to a class, method, property, or parameter",
        "A way to import external modules",
        "A type of generic function"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A special kind of declaration that can be attached to a class, method, property, or parameter",
        "difficulty": "easy",
        "explanation": "Decorators are a special kind of declaration attached to classes, methods, properties, or parameters to modify their behavior or add metadata.",
        "hint": "Think about what decorators are used for in the context of annotations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which experimental flag must be enabled in tsconfig.json to use decorators?",
        "options": [
        "experimentalDecorators",
        "enableDecorators",
        "useDecorators",
        "allowDecorators"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "experimentalDecorators",
        "difficulty": "easy",
        "explanation": "The 'experimentalDecorators' flag must be enabled in tsconfig.json to use decorators in TypeScript.",
        "hint": "The name combines 'experimental' with 'decorators'."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "When is a decorator function executed?",
        "options": [
        "At runtime when the decorated method is called",
        "At compile time",
        "During class instantiation",
        "When the declaration is evaluated at runtime"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "When the declaration is evaluated at runtime",
        "difficulty": "medium",
        "explanation": "Decorators are executed when the declaration they are attached to is evaluated at runtime, not when methods are called or when objects are instantiated.",
        "hint": "Think about when JavaScript evaluates class and method declarations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which of the following is NOT a valid decorator target in TypeScript?",
        "options": [
        "Class",
        "Method",
        "Variable declaration",
        "Property"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Variable declaration",
        "difficulty": "easy",
        "explanation": "TypeScript decorators can be applied to classes, methods, properties, and parameters, but not to variable declarations outside of classes.",
        "hint": "Consider where decorators can be applied in a TypeScript program."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is the correct order of decorator execution when multiple decorators are applied to a single declaration?",
        "options": [
        "Top to bottom",
        "Bottom to top",
        "Random order",
        "Alphabetical order"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Bottom to top",
        "difficulty": "medium",
        "explanation": "When multiple decorators are applied to a declaration, their evaluation is done from bottom to top (the reverse of how they appear in code).",
        "hint": "The execution order is the opposite of how they are written in the code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is the primary purpose of a class decorator?",
        "options": [
        "To modify the constructor function or class definition",
        "To add new methods to the class",
        "To make the class abstract",
        "To prevent class extension"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To modify the constructor function or class definition",
        "difficulty": "easy",
        "explanation": "Class decorators are applied to the constructor of the class and can be used to observe, modify, or replace a class definition.",
        "hint": "Think about what happens when you apply a decorator to a class declaration."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is the signature of a method decorator function?",
        "options": [
        "(target: any, propertyKey: string, descriptor: PropertyDescriptor) => void",
        "(target: any, propertyKey: string) => void",
        "(target: any) => void",
        "(descriptor: PropertyDescriptor) => PropertyDescriptor"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "(target: any, propertyKey: string, descriptor: PropertyDescriptor) => void",
        "difficulty": "medium",
        "explanation": "A method decorator has three parameters: the target object, the name of the method (propertyKey), and the property descriptor of the method.",
        "hint": "Method decorators need access to the method's property descriptor."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which of the following is NOT a parameter received by a property decorator?",
        "options": [
        "target",
        "propertyKey",
        "descriptor",
        "All of these are received by property decorators"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "descriptor",
        "difficulty": "medium",
        "explanation": "Property decorators receive only the target object and the property name (propertyKey). Unlike method decorators, they do not receive a property descriptor.",
        "hint": "Property decorators have fewer parameters than method decorators."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "How do you create a decorator factory in TypeScript?",
        "options": [
        "By returning a function from the decorator",
        "By declaring the decorator with the 'factory' keyword",
        "By using generics in the decorator",
        "By importing from '@typescript/decorator-factory'"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "By returning a function from the decorator",
        "difficulty": "medium",
        "explanation": "A decorator factory is a function that returns a decorator function. This allows you to customize the decorator with parameters.",
        "hint": "Think about how you would create a configurable decorator."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What happens if a class decorator returns a value?",
        "options": [
        "It causes a compilation error",
        "The return value is ignored",
        "The return value replaces the decorated class",
        "The return value is used as a mixin"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The return value replaces the decorated class",
        "difficulty": "medium",
        "explanation": "If a class decorator returns a value, it will replace the class declaration with the provided constructor function or class.",
        "hint": "Class decorators can transform the class they decorate."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which decorator type would you use to validate a function parameter?",
        "options": [
        "Class decorator",
        "Method decorator",
        "Property decorator",
        "Parameter decorator"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Parameter decorator",
        "difficulty": "easy",
        "explanation": "Parameter decorators are specifically designed to be applied to parameters of methods, constructors, or functions, making them ideal for parameter validation.",
        "hint": "Which decorator type directly targets function inputs?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is the main limitation of parameter decorators in TypeScript?",
        "options": [
        "They can only be used on optional parameters",
        "They can only be used on primitive types",
        "They can only observe the parameter, not modify it directly",
        "They cannot be used with async functions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "They can only observe the parameter, not modify it directly",
        "difficulty": "hard",
        "explanation": "Parameter decorators can only observe a parameter declaration but cannot modify it directly. They are primarily used for metadata collection.",
        "hint": "Think about what you can actually do inside a parameter decorator function."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which tsconfig.json option is needed to retain decorator metadata?",
        "options": [
        "saveMetadata",
        "emitDecoratorMetadata",
        "preserveDecoratorMetadata",
        "reflectMetadata"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "emitDecoratorMetadata",
        "difficulty": "medium",
        "explanation": "The 'emitDecoratorMetadata' compiler option is needed to emit type metadata for decorated declarations in the output JavaScript files.",
        "hint": "This option works with the reflect-metadata library."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What external library is commonly used with TypeScript decorators for metadata reflection?",
        "options": [
        "ts-reflect",
        "metadata-js",
        "reflect-metadata",
        "ts-metadata"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "reflect-metadata",
        "difficulty": "medium",
        "explanation": "The 'reflect-metadata' library is commonly used with TypeScript decorators to enable runtime reflection of types and metadata.",
        "hint": "This library implements the Metadata Reflection API proposed for ECMAScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which of the following frameworks heavily uses TypeScript decorators?",
        "options": [
        "React",
        "Vue",
        "Angular",
        "Svelte"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Angular",
        "difficulty": "easy",
        "explanation": "Angular extensively uses TypeScript decorators like @Component, @NgModule, @Input, and @Output to define components, modules, and other building blocks.",
        "hint": "Which major JavaScript framework was built with TypeScript from the start?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What do method decorators commonly modify?",
        "options": [
        "The method's parameters",
        "The method's return type",
        "The property descriptor of the method",
        "The class prototype"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The property descriptor of the method",
        "difficulty": "medium",
        "explanation": "Method decorators commonly modify the property descriptor of the method, which allows them to change the behavior, add logging, implement caching, etc.",
        "hint": "Method decorators receive a PropertyDescriptor object as their third parameter."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is the correct type for the first parameter of a class decorator?",
        "options": [
        "Object",
        "Function",
        "Class",
        "Constructor function"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Constructor function",
        "difficulty": "medium",
        "explanation": "The first and only parameter of a class decorator is the constructor function of the decorated class.",
        "hint": "What represents a class at runtime in JavaScript?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What does the following decorator do? `@log`",
        "options": [
        "It logs the class name",
        "It logs method calls",
        "It depends on the implementation of the `log` function",
        "It adds logging functionality to a property"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It depends on the implementation of the `log` function",
        "difficulty": "easy",
        "explanation": "Without seeing the implementation of the `log` function, we cannot determine what the decorator does. The behavior of a decorator is determined by its implementation.",
        "hint": "The syntax only tells us the name of the decorator, not its behavior."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which is the correct way to apply a decorator with parameters?",
        "options": [
        "@decorator(param1, param2) class MyClass {}",
        "@decorator.params(param1, param2) class MyClass {}",
        "@decorator.with(param1, param2) class MyClass {}",
        "@decorator{param1, param2} class MyClass {}"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "@decorator(param1, param2) class MyClass {}",
        "difficulty": "easy",
        "explanation": "To apply a decorator with parameters, you use the function call syntax with parentheses: @decorator(param1, param2).",
        "hint": "Think about how you would call a function that returns another function."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is the purpose of the @sealed decorator in this example?\n```typescript\n@sealed\nclass BugReport {\n  type = \"report\";\n  title: string;\n}\n```",
        "options": [
        "To prevent the class from being extended",
        "To hide the class from type checking",
        "To add encryption to the class properties",
        "To compress the class when compiled"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To prevent the class from being extended",
        "difficulty": "medium",
        "explanation": "The @sealed decorator typically prevents a class from being extended/subclassed by other classes, effectively sealing its behavior.",
        "hint": "Think about what 'sealed' means in the context of object-oriented programming."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "In TypeScript, what is the correct order of execution for different types of decorators on a class?",
        "options": [
        "Parameter, Method, Property, Class",
        "Class, Method, Property, Parameter",
        "Class, Property, Method, Parameter",
        "Parameter, Property, Method, Class"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Parameter, Method, Property, Class",
        "difficulty": "hard",
        "explanation": "The order of decorator execution is: 1) Parameter decorators, 2) Method decorators, 3) Property decorators, and finally 4) Class decorators.",
        "hint": "Decorators are executed from the most specific (parameters) to the most general (class)."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is the result of using a property decorator that tries to directly replace the property?",
        "options": [
        "The property will be replaced successfully",
        "It will cause a runtime error",
        "The replacement has no effect",
        "It depends on the TypeScript version"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The replacement has no effect",
        "difficulty": "hard",
        "explanation": "Property decorators cannot directly replace or modify the property value. They can only observe the property or use metadata reflection to influence how the property is used.",
        "hint": "Property decorators don't receive a property descriptor, unlike method decorators."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is a common use case for accessor decorators in TypeScript?",
        "options": [
        "Validating method parameters",
        "Adding logging to property access",
        "Implementing dependency injection",
        "Creating singleton classes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Adding logging to property access",
        "difficulty": "medium",
        "explanation": "Accessor decorators are commonly used to add behaviors like logging, validation, or transformation when properties are accessed or modified via getters and setters.",
        "hint": "Think about what you can do by intercepting property access and modification."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which of the following is a valid parameter decorator signature?",
        "options": [
        "(target: any, propertyKey: string, parameterIndex: number) => void",
        "(target: any, propertyKey: string, descriptor: PropertyDescriptor) => void",
        "(target: any, propertyKey: string) => void",
        "(target: any) => void"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "(target: any, propertyKey: string, parameterIndex: number) => void",
        "difficulty": "hard",
        "explanation": "A parameter decorator function receives three arguments: the target object, the name of the method (propertyKey), and the ordinal index of the parameter in the method's parameter list (parameterIndex).",
        "hint": "Parameter decorators need to know which parameter they are decorating."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is Metadata Reflection API used for in the context of TypeScript decorators?",
        "options": [
        "To generate documentation automatically",
        "To validate class definitions at compile time",
        "To access and modify type information at runtime",
        "To optimize decorator performance"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To access and modify type information at runtime",
        "difficulty": "hard",
        "explanation": "The Metadata Reflection API (via the reflect-metadata library) allows decorators to access and modify type information and other metadata at runtime, which is not normally available in JavaScript.",
        "hint": "Think about what type information is typically lost during TypeScript compilation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which of the following examples demonstrates a decorator factory?",
        "options": [
        "function log(target) { console.log(target); }",
        "function log(message) { return function(target) { console.log(message, target); }; }",
        "@log class MyClass {}",
        "class MyClass { @log method() {} }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "function log(message) { return function(target) { console.log(message, target); }; }",
        "difficulty": "medium",
        "explanation": "A decorator factory is a function that returns a decorator function. The example shows a function 'log' that takes a parameter 'message' and returns a decorator function that uses this message.",
        "hint": "Look for a function that returns another function (a decorator)."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is a potential issue with modifying the prototype directly in a class decorator?",
        "options": [
        "It can cause memory leaks",
        "It affects all instances of the class",
        "It doesn't persist after compilation",
        "It can only add new properties, not modify existing ones"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It affects all instances of the class",
        "difficulty": "hard",
        "explanation": "When you modify the prototype directly in a class decorator, the changes affect all instances of the class, not just the specific instance being created, which might lead to unexpected behavior.",
        "hint": "Think about how prototypal inheritance works in JavaScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What is the difference between the Stage 2 ECMAScript decorator proposal and TypeScript's current decorator implementation?",
        "options": [
        "There are no significant differences",
        "ECMAScript decorators can only be used on classes",
        "TypeScript decorators are more powerful and flexible",
        "TypeScript's implementation is based on an older proposal with different syntax and semantics"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "TypeScript's implementation is based on an older proposal with different syntax and semantics",
        "difficulty": "hard",
        "explanation": "TypeScript's current decorator implementation is based on an older Stage 1 proposal. The newer Stage 2 ECMAScript decorator proposal has different syntax and semantics.",
        "hint": "TypeScript's decorator implementation predates the current ECMAScript proposal."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "Which pattern do TypeScript decorators enable in code?",
        "options": [
        "Object pooling",
        "Aspect-oriented programming",
        "Event sourcing",
        "Prototype-based inheritance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Aspect-oriented programming",
        "difficulty": "medium",
        "explanation": "TypeScript decorators enable aspect-oriented programming by allowing you to separate cross-cutting concerns (like logging, validation, or authentication) from the main business logic.",
        "hint": "Think about programming paradigms that deal with cross-cutting concerns."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "Decorators",
        "questionText": "What would be the effect of this decorator? \n```typescript\nfunction override(target: any, propertyKey: string) {\n  // implementation\n}\n```",
        "options": [
        "It would make the method final (not overridable)",
        "It would ensure the method overrides a parent class method",
        "It would make the property read-only",
        "It has no effect as implemented"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "It has no effect as implemented",
        "difficulty": "hard",
        "explanation": "As shown, the decorator doesn't have any implementation, so it would have no effect. To make it check for method overriding, it would need to examine the prototype chain of the target.",
        "hint": "Look at what the decorator implementation actually does (or doesn't do)."
    },

    // TypeScript Configuration
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What is the name of TypeScript's configuration file?",
        "options": [
        "tsconfig.json",
        "typescript.json",
        "ts.config.json",
        "tsc.json"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "tsconfig.json",
        "difficulty": "easy",
        "explanation": "TypeScript uses 'tsconfig.json' as its configuration file to specify compiler options and project settings.",
        "hint": "The filename starts with 'ts' followed by a common configuration file name."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option enables strict type checking in TypeScript?",
        "options": [
        "enableStrict",
        "strictMode",
        "strict",
        "typeCheck"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "strict",
        "difficulty": "easy",
        "explanation": "The 'strict' compiler option enables all strict type checking options, such as strictNullChecks, strictFunctionTypes, and others.",
        "hint": "This is a simple boolean option that enables several strict type checking features at once."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which tsconfig.json property specifies the JavaScript target version for compiled code?",
        "options": [
        "jsVersion",
        "target",
        "ecmaVersion",
        "jsTarget"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "target",
        "difficulty": "easy",
        "explanation": "The 'target' compiler option specifies the ECMAScript target version for the compiled JavaScript code, such as 'ES5', 'ES2015', 'ES2020', etc.",
        "hint": "This option defines what JavaScript features can be used in the output code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which command generates a basic tsconfig.json file?",
        "options": [
        "npm init typescript",
        "tsc --init",
        "typescript --config",
        "ts --create-config"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "tsc --init",
        "difficulty": "easy",
        "explanation": "Running 'tsc --init' command in a project generates a new tsconfig.json file with default compiler options.",
        "hint": "This is a command using the TypeScript compiler (tsc) with a specific flag."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does the 'include' property in tsconfig.json do?",
        "options": [
        "Imports external modules",
        "Specifies which files should be compiled",
        "Includes additional TypeScript declarations",
        "Enables specific TypeScript features"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Specifies which files should be compiled",
        "difficulty": "easy",
        "explanation": "The 'include' property specifies an array of file patterns that should be included in the compilation, like ['src/**/*.ts'].",
        "hint": "This property helps define the scope of compilation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What is the purpose of the 'outDir' compiler option?",
        "options": [
        "Defines where TypeScript looks for declaration files",
        "Specifies where to emit compiled JavaScript files",
        "Points to external library directories",
        "Sets the output format of the TypeScript compiler"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Specifies where to emit compiled JavaScript files",
        "difficulty": "easy",
        "explanation": "The 'outDir' option specifies the output directory for compiled JavaScript files, separating them from the TypeScript source files.",
        "hint": "Think about where the compiled output goes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option is required to use decorators in TypeScript?",
        "options": [
        "enableDecorators",
        "useDecorators",
        "experimentalDecorators",
        "allowDecorators"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "experimentalDecorators",
        "difficulty": "medium",
        "explanation": "The 'experimentalDecorators' compiler option must be enabled to use decorators in TypeScript, as decorators are still an experimental feature.",
        "hint": "Decorators are an experimental feature in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does the 'strictNullChecks' compiler option do?",
        "options": [
        "Prevents variables from being explicitly set to null",
        "Makes null a valid value for any type",
        "Ensures null and undefined are distinct types separate from other types",
        "Automatically inserts null checks in the compiled JavaScript code"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Ensures null and undefined are distinct types separate from other types",
        "difficulty": "medium",
        "explanation": "When 'strictNullChecks' is enabled, null and undefined are not assignable to other types unless explicitly allowed, preventing common null reference errors.",
        "hint": "This option helps catch errors related to null/undefined values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What's the difference between 'exclude' and 'include' properties in tsconfig.json?",
        "options": [
        "'exclude' specifies compiler settings, 'include' defines target paths",
        "'exclude' filters out files from compilation, 'include' specifies which files to compile",
        "'exclude' is for runtime dependencies, 'include' is for development dependencies",
        "'exclude' removes TypeScript features, 'include' adds features"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "'exclude' filters out files from compilation, 'include' specifies which files to compile",
        "difficulty": "medium",
        "explanation": "'include' specifies which files to include in compilation, while 'exclude' specifies files to exclude from those that would be included.",
        "hint": "Both properties affect which files get compiled, but in opposite ways."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option enables source maps generation?",
        "options": [
        "enableSourceMaps",
        "sourceMap",
        "generateMaps",
        "mapSources"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "sourceMap",
        "difficulty": "medium",
        "explanation": "The 'sourceMap' compiler option, when set to true, generates source map files (.map) that enable debugging of the original TypeScript code in browsers and IDEs.",
        "hint": "This option helps with debugging by mapping compiled JS back to TS source code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does the 'paths' compiler option do?",
        "options": [
        "Defines path aliases for easier imports",
        "Specifies the path to the TypeScript compiler",
        "Sets output paths for different file types",
        "Configures file system paths for external libraries"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Defines path aliases for easier imports",
        "difficulty": "medium",
        "explanation": "The 'paths' option defines path mappings for module names, allowing you to create shortcuts or aliases for imports, like '@app/*' mapping to './src/app/*'.",
        "hint": "This option helps simplify import statements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What is the purpose of the 'lib' compiler option?",
        "options": [
        "Specifies additional libraries to install",
        "Defines which JavaScript libraries to include in compilation",
        "Specifies which built-in TypeScript type definitions to include",
        "Links external library dependencies"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Specifies which built-in TypeScript type definitions to include",
        "difficulty": "medium",
        "explanation": "The 'lib' compiler option specifies which built-in TypeScript library files (type definitions for built-in JavaScript APIs) to include in the compilation.",
        "hint": "This option controls which environment APIs TypeScript knows about."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option should be enabled to ensure all files are checked, even if they're not imported?",
        "options": [
        "checkAllFiles",
        "noUnusedFiles",
        "checkGlobalTypes",
        "noEmitOnError"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "checkAllFiles",
        "difficulty": "medium",
        "explanation": "The 'checkAllFiles' option ensures that all TypeScript files in the project are type-checked, even if they're not imported by other files.",
        "hint": "This option ensures global type safety across all project files."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does the 'module' compiler option specify?",
        "options": [
        "The location of external modules",
        "Which module system to use for the compiled JavaScript",
        "Whether to enable TypeScript modules",
        "The format of module declarations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Which module system to use for the compiled JavaScript",
        "difficulty": "medium",
        "explanation": "The 'module' compiler option specifies which module system the compiled JavaScript should use: 'CommonJS', 'AMD', 'ES2015', 'ESNext', etc.",
        "hint": "This option affects how import/export statements are translated."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What is the purpose of the 'extends' property in tsconfig.json?",
        "options": [
        "To inherit configuration from another tsconfig file",
        "To extend TypeScript with custom features",
        "To add inheritance to all TypeScript classes",
        "To extend the JavaScript target version"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To inherit configuration from another tsconfig file",
        "difficulty": "medium",
        "explanation": "The 'extends' property allows a tsconfig.json file to inherit settings from another configuration file, enabling configuration sharing and hierarchies.",
        "hint": "This property enables configuration inheritance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option enforces using the 'import type' syntax for type-only imports?",
        "options": [
        "enforceTypeImports",
        "useTypeImports",
        "importsNotUsedAsValues",
        "typeImports"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "importsNotUsedAsValues",
        "difficulty": "hard",
        "explanation": "The 'importsNotUsedAsValues' option controls how imports are handled when they're only used for type information, enforcing the use of 'import type' syntax.",
        "hint": "This option ensures clear separation between value imports and type imports."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does setting 'noEmitOnError' to true do?",
        "options": [
        "Prevents TypeScript from reporting errors",
        "Prevents generating JavaScript files if there are compilation errors",
        "Disables error messages in the console output",
        "Suppresses type errors in the output files"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Prevents generating JavaScript files if there are compilation errors",
        "difficulty": "medium",
        "explanation": "When 'noEmitOnError' is set to true, the TypeScript compiler will not generate any JavaScript output files if compilation errors are found.",
        "hint": "This option controls whether output is generated when errors occur."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which tsconfig.json property is used to specify project references?",
        "options": [
        "projects",
        "references",
        "dependencies",
        "projectRefs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "references",
        "difficulty": "hard",
        "explanation": "The 'references' property is used to specify project references in a composite TypeScript project, enabling you to break up a large project into smaller pieces.",
        "hint": "This property is used in multi-project TypeScript setups."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does the 'declaration' compiler option do?",
        "options": [
        "Declares variables at the top of the file",
        "Generates .d.ts declaration files",
        "Adds JSDoc comments to declarations",
        "Makes all declarations public"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Generates .d.ts declaration files",
        "difficulty": "medium",
        "explanation": "The 'declaration' compiler option, when enabled, generates .d.ts files containing type declarations for the compiled JavaScript files, useful for creating libraries.",
        "hint": "This option generates files that describe the public API of your code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What is the purpose of the 'baseUrl' compiler option?",
        "options": [
        "Sets the base URL for the documentation website",
        "Specifies the root URL for the TypeScript server",
        "Defines the base directory for resolving non-relative module names",
        "Sets the URL where TypeScript definitions are downloaded from"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Defines the base directory for resolving non-relative module names",
        "difficulty": "medium",
        "explanation": "The 'baseUrl' compiler option sets the base directory for resolving non-relative module names, allowing you to use absolute paths instead of relative paths in imports.",
        "hint": "This option helps with module resolution in larger projects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option enables ESLint-compatible error reporting?",
        "options": [
        "eslintCompatible",
        "useEslint",
        "eslintReport",
        "pretty"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "pretty",
        "difficulty": "hard",
        "explanation": "The 'pretty' compiler option formats TypeScript errors in a colorful, readable format that's compatible with ESLint and other tools.",
        "hint": "This option affects how error messages are displayed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What is the purpose of the 'rootDir' compiler option?",
        "options": [
        "Specifies the root directory of the project",
        "Sets the root directory of all source files to calculate output paths",
        "Defines the root directory for declaration files",
        "Specifies where node_modules is located"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Sets the root directory of all source files to calculate output paths",
        "difficulty": "medium",
        "explanation": "The 'rootDir' option specifies the root directory of input files, which is used to control the output directory structure when using the 'outDir' option.",
        "hint": "This option works with 'outDir' to maintain directory structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does the 'skipLibCheck' compiler option do?",
        "options": [
        "Skips type checking of node_modules directory",
        "Bypasses checking if libraries exist before importing",
        "Skips type checking of declaration files in libraries",
        "Prevents loading the TypeScript standard library"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Skips type checking of declaration files in libraries",
        "difficulty": "hard",
        "explanation": "The 'skipLibCheck' option, when enabled, skips type checking of declaration files (.d.ts) found in external libraries, which can significantly improve compilation performance.",
        "hint": "This option can improve compilation speed in large projects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option controls whether TypeScript reports unused local variables?",
        "options": [
        "reportUnusedVariables",
        "noUnusedVars",
        "noUnusedLocals",
        "checkUnusedVariables"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "noUnusedLocals",
        "difficulty": "medium",
        "explanation": "The 'noUnusedLocals' compiler option, when enabled, reports errors for variables that are declared but never used within a function.",
        "hint": "This option helps keep your code clean by identifying unused variables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does the 'composite' compiler option enable?",
        "options": [
        "Creation of composite UI components",
        "Merging of multiple TypeScript files into one",
        "Project references and incremental builds",
        "Composition of multiple tsconfig.json files"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Project references and incremental builds",
        "difficulty": "hard",
        "explanation": "The 'composite' compiler option enables TypeScript's project references feature, allowing you to divide your project into smaller sub-projects for faster incremental builds.",
        "hint": "This option is used in larger TypeScript projects to improve build performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What is the purpose of the 'preserveConstEnums' compiler option?",
        "options": [
        "Keeps const enum values in the compiled JavaScript",
        "Prevents const variables from being modified",
        "Preserves enum types in declaration files",
        "Ensures enums are compiled as constants"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Keeps const enum values in the compiled JavaScript",
        "difficulty": "hard",
        "explanation": "The 'preserveConstEnums' compiler option prevents const enums from being completely removed during compilation, keeping the enum declaration in the generated JavaScript output.",
        "hint": "Normally, const enums are inlined and removed from the output code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option forces consistent casing in file names?",
        "options": [
        "forceCasing",
        "caseSensitive",
        "forceConsistentCasingInFileNames",
        "strictFileNames"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "forceConsistentCasingInFileNames",
        "difficulty": "medium",
        "explanation": "The 'forceConsistentCasingInFileNames' option ensures that references to import files are done with the correct casing, which is important for case-sensitive file systems.",
        "hint": "This option helps prevent issues when deploying to case-sensitive environments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What does the 'esModuleInterop' compiler option enable?",
        "options": [
        "ES modules in Node.js environments",
        "Interoperability between CommonJS and ES modules",
        "Extended support for ES module syntax",
        "Module bundling for browser environments"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Interoperability between CommonJS and ES modules",
        "difficulty": "hard",
        "explanation": "The 'esModuleInterop' option enables better interoperability between CommonJS and ES modules by adding namespace objects for imported CommonJS modules and enabling cleaner default imports.",
        "hint": "This option helps when mixing different module systems in the same project."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which compiler option is needed to use the 'import.meta' syntax in TypeScript?",
        "options": [
        "moduleMetadata",
        "importMeta",
        "allowImportMeta",
        "enableImportMeta"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "allowImportMeta",
        "difficulty": "hard",
        "explanation": "The 'allowImportMeta' compiler option enables the use of the 'import.meta' property, which provides metadata about the current module.",
        "hint": "This option enables a specific ECMAScript feature used for module metadata."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "What is the purpose of the 'typeRoots' compiler option?",
        "options": [
        "Specifies directories that contain type definitions",
        "Defines the root directory for TypeScript files",
        "Sets the location for generated type declaration files",
        "Lists packages that provide types"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Specifies directories that contain type definitions",
        "difficulty": "hard",
        "explanation": "The 'typeRoots' option specifies directories that contain type definitions (.d.ts files) to be included in compilation, overriding the default of including all @types packages.",
        "hint": "This option helps control which type definitions are included in your project."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript Configuration",
        "questionText": "Which JSON Schema can be used to validate a tsconfig.json file?",
        "options": [
        "http://json.schemastore.org/tsconfig",
        "http://typescript.org/schema/tsconfig",
        "http://microsoft.github.io/schemas/tsconfig",
        "http://typescriptlang.org/schemas/tsconfig"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "http://json.schemastore.org/tsconfig",
        "difficulty": "hard",
        "explanation": "The JSON Schema at 'http://json.schemastore.org/tsconfig' can be used to validate a tsconfig.json file and provide autocomplete in compatible editors.",
        "hint": "This schema is hosted at a common repository for JSON schemas."
    },

    // TypeScript with React
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the correct type annotation for React component props?",
        "options": [
        "interface Props { ... }",
        "type Props = { ... }",
        "Both A and B are correct",
        "class Props { ... }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Both A and B are correct",
        "difficulty": "easy",
        "explanation": "In TypeScript with React, you can use either interfaces or type aliases to define the shape of component props. Both approaches are valid and have similar functionality in this context.",
        "hint": "Consider the two main ways to define custom types in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How do you type a functional React component that doesn't receive any props?",
        "options": [
        "const Component = (): JSX.Element => { ... }",
        "const Component: React.FC = () => { ... }",
        "const Component = (): void => { ... }",
        "Both A and B are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both A and B are correct",
        "difficulty": "easy",
        "explanation": "You can type a functional component either by explicitly specifying the return type as JSX.Element or by using the React.FC (FunctionComponent) type. Both approaches are valid for components that don't receive props.",
        "hint": "There are multiple correct ways to type a React component's return value."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the correct way to define a type for a React component's state in a class component?",
        "options": [
        "class MyComponent extends React.Component<Props, State> { ... }",
        "class MyComponent extends React.Component<State> { ... }",
        "class MyComponent<State> extends React.Component { ... }",
        "class MyComponent extends React.Component implements State { ... }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "class MyComponent extends React.Component<Props, State> { ... }",
        "difficulty": "easy",
        "explanation": "In a class component, the state type is specified as the second type parameter in React.Component<Props, State>. The first type parameter is for props, and the second is for state.",
        "hint": "React.Component is a generic class that accepts type parameters."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How do you type an event handler for an input element in React with TypeScript?",
        "options": [
        "const handleChange = (e: Event) => { ... }",
        "const handleChange = (e: InputEvent) => { ... }",
        "const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... }",
        "const handleChange = (e: React.InputEvent) => { ... }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... }",
        "difficulty": "medium",
        "explanation": "React provides specific event types for different HTML elements. For input change events, you should use React.ChangeEvent<HTMLInputElement> to properly type the event object.",
        "hint": "React has its own type definitions for DOM events that are generic over the element type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the correct type for the children prop in a React component?",
        "options": [
        "children: JSX.Element",
        "children: JSX.Element[]",
        "children: React.ReactNode",
        "children: React.ReactElement"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "children: React.ReactNode",
        "difficulty": "medium",
        "explanation": "React.ReactNode is the most flexible and correct type for children as it can represent any valid React child, including JSX elements, strings, numbers, arrays, null, undefined, and boolean values.",
        "hint": "Children can be more than just JSX elements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "Which hook requires a type parameter in TypeScript?",
        "options": [
        "useEffect",
        "useState",
        "useCallback",
        "useRef"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "useState",
        "difficulty": "easy",
        "explanation": "The useState hook often needs a type parameter to specify the type of state being stored, especially when initialized with null or an empty array/object. For example: useState<string[]>([]).",
        "hint": "Think about which hook manages data with a specific type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the correct type for a ref to an HTML div element?",
        "options": [
        "React.RefObject<HTMLDivElement>",
        "React.Ref<HTMLDivElement>",
        "React.MutableRefObject<HTMLDivElement>",
        "React.ElementRef<'div'>"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "React.RefObject<HTMLDivElement>",
        "difficulty": "medium",
        "explanation": "When using createRef() or useRef() with an initial value of null, React.RefObject<HTMLDivElement> is the correct type. It represents a ref object whose current property is read-only and can point to an HTMLDivElement.",
        "hint": "Consider the difference between mutable and immutable refs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How do you correctly type a custom hook that returns an array with a value and a setter function?",
        "options": [
        "function useCustomHook<T>(): [T, (value: T) => void] { ... }",
        "function useCustomHook<T>(): Array<T | Function> { ... }",
        "function useCustomHook<T>(): {value: T, setter: (value: T) => void} { ... }",
        "function useCustomHook(type: T): [T, (value: T) => void] { ... }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "function useCustomHook<T>(): [T, (value: T) => void] { ... }",
        "difficulty": "medium",
        "explanation": "Custom hooks that mimic useState should return a tuple with a generic type T for the value and a function that accepts a value of type T. This pattern matches React's useState hook.",
        "hint": "Consider the return type pattern of React's built-in useState hook."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What's the correct way to type a context value in React with TypeScript?",
        "options": [
        "const MyContext = React.createContext<MyContextType | null>(null);",
        "const MyContext = React.createContext<MyContextType>({} as MyContextType);",
        "const MyContext = React.createContext(null as MyContextType);",
        "const MyContext = React.createContext<Partial<MyContextType>>({});"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "const MyContext = React.createContext<MyContextType | null>(null);",
        "difficulty": "medium",
        "explanation": "The safest way to type a context is to make it nullable (MyContextType | null) and initialize with null. This enforces that consumers check for null or use a provider. The type assertion approach (option B) can hide potential issues.",
        "hint": "Consider type safety and initialization requirements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "When using the useReducer hook with TypeScript, where should you define the action types?",
        "options": [
        "As a union type of string literals",
        "As an enum",
        "As a discriminated union of action objects",
        "Any of the above are valid approaches"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Any of the above are valid approaches",
        "difficulty": "medium",
        "explanation": "Actions can be typed in multiple ways: as string literal unions, as enums, or as discriminated unions of action objects. Each approach has its advantages, and the choice depends on the complexity of your actions and personal preference.",
        "hint": "There are multiple valid patterns for typing reducer actions in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the correct way to type a component that renders different elements based on an 'as' prop?",
        "options": [
        "type Props<T extends React.ElementType> = { as?: T; } & React.ComponentPropsWithoutRef<T>;",
        "type Props = { as: keyof JSX.IntrinsicElements; };",
        "type Props = { as: string; } & React.HTMLAttributes<HTMLElement>;",
        "type Props = { as: React.ComponentType; };"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "type Props<T extends React.ElementType> = { as?: T; } & React.ComponentPropsWithoutRef<T>;",
        "difficulty": "hard",
        "explanation": "For polymorphic components, you need generic props where T extends React.ElementType, and you merge your props with React.ComponentPropsWithoutRef<T> to include all the props of the specified element type.",
        "hint": "The solution involves generics and merging props from the specified element type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How do you correctly type defaultProps in a functional component?",
        "options": [
        "Use ES6 default parameters: const Component = ({ prop = defaultValue }: Props) => { ... }",
        "Define Component.defaultProps = { prop: defaultValue };",
        "Use the Default type: type Props = Default<{ prop: string }, { prop: 'defaultValue' }>;",
        "Both A and B are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both A and B are correct",
        "difficulty": "medium",
        "explanation": "For functional components, you can use either ES6 default parameters or the Component.defaultProps static property. Both approaches work, though default parameters are more common in modern React with hooks.",
        "hint": "There are multiple valid ways to provide default values for props."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What's the correct way to type forwardRef in React with TypeScript?",
        "options": [
        "React.forwardRef<HTMLDivElement>((props, ref) => { ... });",
        "React.forwardRef<HTMLDivElement, Props>((props, ref) => { ... });",
        "React.forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => { ... });",
        "React.forwardRef<Props>((props, ref: React.Ref<HTMLDivElement>) => { ... });"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "React.forwardRef<HTMLDivElement, Props>((props, ref) => { ... });",
        "difficulty": "hard",
        "explanation": "The correct syntax for forwardRef provides two type arguments: the first is the element type being forwarded to, and the second is the props type. This ensures both the ref and the props are properly typed.",
        "hint": "forwardRef is a generic function that can take two type arguments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What TypeScript feature is useful for extracting prop types from an existing component?",
        "options": [
        "typeof Component",
        "ReturnType<typeof Component>",
        "React.ComponentProps<typeof Component>",
        "React.ComponentType<typeof Component>"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "React.ComponentProps<typeof Component>",
        "difficulty": "medium",
        "explanation": "React.ComponentProps is a utility type that extracts the props type from a component type. It works with both class and function components, making it useful for reusing prop types.",
        "hint": "Look for a utility type specifically designed to extract prop types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the correct way to type the dispatch function from useReducer?",
        "options": [
        "type Dispatch = (action: Action) => void;",
        "type Dispatch = React.Dispatch<Action>;",
        "type Dispatch = (action: Action) => Promise<void>;",
        "type Dispatch = React.DispatchAction<Action>;"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "type Dispatch = React.Dispatch<Action>;",
        "difficulty": "medium",
        "explanation": "React.Dispatch is a generic type defined by React specifically for typing dispatch functions. It takes the action type as a type parameter and properly represents the dispatch function's signature.",
        "hint": "React provides a specific type for dispatch functions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How do you correctly type the state in useState when it might be undefined initially?",
        "options": [
        "useState(undefined as string | undefined)",
        "useState<string | undefined>(undefined)",
        "useState<string>()",
        "useState<Partial<string>>(undefined)"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "useState<string | undefined>(undefined)",
        "difficulty": "medium",
        "explanation": "When state might be undefined initially, you should explicitly specify the type as a union of the desired type and undefined: useState<string | undefined>(undefined). This ensures type safety while allowing for the undefined state.",
        "hint": "The type needs to reflect that the value can be undefined."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What's the best practice for typing an async function that fetches data in a React component?",
        "options": [
        "async function fetchData(): Promise<void> { ... }",
        "async function fetchData(): Promise<any> { ... }",
        "async function fetchData(): Promise<Data> { ... }",
        "function fetchData(): void { ... }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "async function fetchData(): Promise<void> { ... }",
        "difficulty": "medium",
        "explanation": "For event handlers and effect callbacks that fetch data but update state through setState, Promise<void> is the appropriate return type since these functions don't return the data directly but rather update state via side effects.",
        "hint": "Consider what these functions actually return versus their side effects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How should you type a custom event in React with TypeScript?",
        "options": [
        "interface CustomEvent extends Event { detail: CustomDetail; }",
        "type CustomEvent = { detail: CustomDetail; } & Event;",
        "interface CustomEvent<T> extends React.SyntheticEvent { detail: T; }",
        "type CustomEvent<T = any> = React.SyntheticEvent & { detail: T; };"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "type CustomEvent<T = any> = React.SyntheticEvent & { detail: T; };",
        "difficulty": "hard",
        "explanation": "Custom events in React should extend React.SyntheticEvent (not the DOM Event interface). Using an intersection type with a generic parameter for detail provides flexibility for different event data structures.",
        "hint": "Custom events should be based on React's event system, not the DOM event interface."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the correct way to type a component that conditionally renders children based on a prop?",
        "options": [
        "type Props = { condition: boolean; children: React.ReactNode; };",
        "type Props = { condition: boolean; children: React.ReactNode | (() => React.ReactNode); };",
        "type Props = { condition: boolean; children: (condition: boolean) => React.ReactNode; };",
        "type Props = { condition: boolean; trueChildren: React.ReactNode; falseChildren: React.ReactNode; };"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "type Props = { condition: boolean; children: (condition: boolean) => React.ReactNode; };",
        "difficulty": "hard",
        "explanation": "For render props pattern where children is a function that receives the condition value, type children as a function that takes the condition value as a parameter and returns React.ReactNode.",
        "hint": "This is about the render props pattern using a function as children."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the appropriate return type for a useMemo hook that calculates a filtered list?",
        "options": [
        "useMemo<T[]>(() => { ... }, [dependencies])",
        "useMemo(() => { ... }, [dependencies]) as T[]",
        "useMemo<T[]>(() => { ... } as T[], [dependencies])",
        "useMemo(): T[] => { ... }, [dependencies]"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "useMemo<T[]>(() => { ... }, [dependencies])",
        "difficulty": "medium",
        "explanation": "useMemo is a generic function that should be provided with the return type as a type parameter. The correct syntax is useMemo<ReturnType>(() => computation, dependencies).",
        "hint": "useMemo is a generic function that can take the expected return type as a type parameter."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the TypeScript utility type used to make all properties in a component's props optional?",
        "options": [
        "Optional<Props>",
        "Props?",
        "Partial<Props>",
        "Maybe<Props>"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Partial<Props>",
        "difficulty": "easy",
        "explanation": "Partial<T> is a built-in TypeScript utility type that makes all properties in T optional. It's useful when you want to define a subset of props, like for default props or incomplete states.",
        "hint": "Look for a standard TypeScript utility type that makes properties optional."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How do you type a form submission handler in React with TypeScript?",
        "options": [
        "const handleSubmit = (e: Event) => { ... }",
        "const handleSubmit = (e: FormEvent) => { ... }",
        "const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { ... }",
        "const handleSubmit = (e: React.SyntheticEvent) => { ... }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { ... }",
        "difficulty": "medium",
        "explanation": "Form submission handlers should use React.FormEvent<HTMLFormElement> to properly type the event object. This provides type safety and access to form-specific properties while specifying the element type.",
        "hint": "React has specific event types for different HTML elements and event types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What TypeScript feature is best for typing the props of a component that can accept any HTML attributes?",
        "options": [
        "React.AllHTMLAttributes<HTMLElement>",
        "React.ComponentPropsWithoutRef<'div'>",
        "JSX.IntrinsicElements['div']",
        "React.HTMLAttributes<HTMLElement>"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "React.HTMLAttributes<HTMLElement>",
        "difficulty": "medium",
        "explanation": "React.HTMLAttributes<HTMLElement> provides types for the common HTML attributes that can be applied to any HTML element. It's ideal for components that need to accept and forward general HTML attributes.",
        "hint": "Look for a type that represents common HTML attributes that can be applied to any element."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How do you correctly type a higher-order component (HOC) in TypeScript?",
        "options": [
        "function withHOC<P>(Component: React.ComponentType<P>): React.FC<P>;",
        "function withHOC(Component: React.ComponentType): React.FC;",
        "function withHOC<P>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, 'extraProp'>>;",
        "function withHOC<P extends object>(Component: React.ComponentType<P>): React.FC<P & ExtraProps>;"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "function withHOC<P extends object>(Component: React.ComponentType<P>): React.FC<P & ExtraProps>;",
        "difficulty": "hard",
        "explanation": "HOCs typically add props to a component. The correct typing uses generics to preserve the original component's prop types and extends them with additional props the HOC provides, using an intersection type (P & ExtraProps).",
        "hint": "HOCs often add additional props to the wrapped component."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What's the correct way to type a component's props when they include optional children?",
        "options": [
        "interface Props { children?: React.ReactNode; }",
        "interface Props { children: React.ReactNode | undefined; }",
        "interface Props { children: Optional<React.ReactNode>; }",
        "interface Props { children?: JSX.Element | JSX.Element[]; }"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "interface Props { children?: React.ReactNode; }",
        "difficulty": "easy",
        "explanation": "For optional children, use the optional property syntax (children?) with React.ReactNode as the type. This correctly represents that children might not be provided while allowing any valid React child when it is provided.",
        "hint": "Use the TypeScript optional property syntax with the most flexible React child type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "How do you properly type the useRef hook for a mutable value that isn't a DOM element?",
        "options": [
        "const valueRef = useRef<number>();",
        "const valueRef = useRef<number>(0);",
        "const valueRef = useRef<number | null>(null);",
        "const valueRef: React.MutableRefObject<number> = useRef(0);"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "const valueRef = useRef<number>(0);",
        "difficulty": "medium",
        "explanation": "For mutable refs that aren't DOM elements, provide both the type parameter and an initial value. This creates a MutableRefObject<number> where valueRef.current is of type number and can be modified.",
        "hint": "For non-element refs, you need to specify both the type and an initial value."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "When using useEffect with async operations, what is the correct approach?",
        "options": [
        "useEffect(async () => { await fetchData(); }, []);",
        "useEffect(() => { const fetchDataAsync = async () => { await fetchData(); }; fetchDataAsync(); }, []);",
        "useEffect(() => fetchData().then(...).catch(...), []);",
        "Both B and C are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are correct",
        "difficulty": "medium",
        "explanation": "The effect callback cannot be async directly (option A is incorrect). You can either define an async function inside the effect and call it immediately (option B) or use promises with then/catch (option C). Both B and C are valid approaches.",
        "hint": "React's useEffect cannot directly accept an async function as its callback."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What is the correct way to define prop types for a component that takes a render prop?",
        "options": [
        "interface Props { render: () => JSX.Element; }",
        "interface Props { render: (data: Data) => React.ReactNode; }",
        "interface Props { render: Function; }",
        "interface Props { render: React.ReactNode; }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "interface Props { render: (data: Data) => React.ReactNode; }",
        "difficulty": "medium",
        "explanation": "Render props should be typed as functions that may receive data and return React.ReactNode. The function parameters should be explicitly typed, and React.ReactNode is the most flexible return type that allows any renderable content.",
        "hint": "A render prop is a function that returns something React can render."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What's the correct way to type an error boundary component in React with TypeScript?",
        "options": [
        "class ErrorBoundary extends React.Component<{}, { hasError: boolean }>",
        "class ErrorBoundary extends React.Component<{ fallback: React.ReactNode }, { error: Error | null }>",
        "class ErrorBoundary extends React.PureComponent<React.PropsWithChildren<{ fallback: React.ReactNode }>, { error: Error | null }>",
        "class ErrorBoundary extends React.Component<React.PropsWithChildren<object>, { hasError: boolean, error: Error | null }>"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "class ErrorBoundary extends React.Component<React.PropsWithChildren<object>, { hasError: boolean, error: Error | null }>",
        "difficulty": "hard",
        "explanation": "Error boundaries need state to track errors and typically accept children. The correct approach uses React.PropsWithChildren to include the children prop, and state that tracks both the error object and a boolean flag.",
        "hint": "Error boundaries need to track error state and typically accept children as props."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with React",
        "questionText": "What TypeScript feature allows you to create a union type of all string keys in a Props interface?",
        "options": [
        "typeof Props",
        "keyof Props",
        "Extract<keyof Props, string>",
        "Props[keyof Props]"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Extract<keyof Props, string>",
        "difficulty": "hard",
        "explanation": "Extract<keyof Props, string> creates a union type of all keys in Props that are assignable to string. This excludes symbol and number keys, giving you only the string property names.",
        "hint": "You need to use a utility type that can filter the keys to include only string keys."
    },

    // TypeScript with Node.js
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the recommended way to install TypeScript in a Node.js project?",
        "options": [
        "npm install typescript",
        "npm install --save typescript",
        "npm install --save-dev typescript",
        "npm install -g typescript"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "npm install --save-dev typescript",
        "difficulty": "easy",
        "explanation": "TypeScript should be installed as a development dependency in a Node.js project using '--save-dev' or '-D' flag. This adds it to your package.json's devDependencies, which is appropriate since TypeScript is a build-time tool rather than a runtime dependency.",
        "hint": "Consider whether TypeScript is needed at runtime or only during development."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you properly type a callback function for Node.js's fs.readFile?",
        "options": [
        "callback: (err: Error, data: Buffer) => void",
        "callback: (err: Error | null, data: Buffer) => void",
        "callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void",
        "callback: (err?: Error, data?: Buffer) => void"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void",
        "difficulty": "medium",
        "explanation": "Node.js callbacks follow the error-first pattern. The correct type for fs.readFile callbacks uses NodeJS.ErrnoException, which is a specialized error type with additional properties like 'code', 'errno', and 'syscall'. The error is null when the operation succeeds.",
        "hint": "Node.js has a specific error type for filesystem operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "Which TypeScript configuration is necessary for Node.js projects to enable modern ECMAScript module imports?",
        "options": [
        "{ \"module\": \"commonjs\" }",
        "{ \"module\": \"NodeNext\" }",
        "{ \"module\": \"ESNext\" }",
        "{ \"module\": \"esnext\", \"moduleResolution\": \"node\" }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "{ \"module\": \"NodeNext\" }",
        "difficulty": "medium",
        "explanation": "The 'NodeNext' module setting is designed specifically for Node.js projects that use ECMAScript modules. It respects the Node.js module resolution rules based on package.json 'type' field, supporting both ESM and CommonJS modules appropriately.",
        "hint": "There's a specific module setting designed for modern Node.js module resolution."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you correctly type a Node.js HTTP server request?",
        "options": [
        "req: Request",
        "req: http.Request",
        "req: IncomingMessage",
        "req: http.IncomingMessage"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "req: http.IncomingMessage",
        "difficulty": "medium",
        "explanation": "In Node.js HTTP servers, request objects are instances of http.IncomingMessage. This type is imported from the 'http' module with import { IncomingMessage } from 'http' or using namespace import * as http from 'http'.",
        "hint": "Consider which module the request object type comes from and its full name."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the correct way to type process.env variables in a Node.js TypeScript project?",
        "options": [
        "declare const process: { env: { [key: string]: string } };",
        "declare namespace NodeJS { interface ProcessEnv { NODE_ENV: 'development' | 'production'; } }",
        "interface ProcessEnv { NODE_ENV: string; }",
        "type ProcessEnv = Record<string, string>;"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "declare namespace NodeJS { interface ProcessEnv { NODE_ENV: 'development' | 'production'; } }",
        "difficulty": "hard",
        "explanation": "The correct way to type environment variables is by extending the NodeJS.ProcessEnv interface via declaration merging. This approach preserves the existing type definitions while adding your custom environment variables with specific types.",
        "hint": "You need to extend an existing interface in the NodeJS namespace."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "Which of the following correctly imports the type definitions for Express?",
        "options": [
        "import express from 'express';",
        "import * as express from 'express';",
        "import express, { Request, Response } from 'express';",
        "import { Express, Request, Response } from 'express';"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "import express, { Request, Response } from 'express';",
        "difficulty": "medium",
        "explanation": "The express package has a default export for the main function and named exports for types like Request and Response. The correct way to import both is using the default import syntax for the express function along with destructuring for the specific types.",
        "hint": "Express has both a default export and named type exports."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you properly type a JSON response from an external API in a Node.js application?",
        "options": [
        "const response = await fetch(url) as ApiResponse;",
        "const response: ApiResponse = await fetch(url);",
        "const response = await fetch(url); const data: ApiResponse = await response.json();",
        "const response = await fetch(url); const data = await response.json() as ApiResponse;"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "const response = await fetch(url); const data = await response.json() as ApiResponse;",
        "difficulty": "medium",
        "explanation": "The fetch API returns a Response object, not the JSON data directly. The correct approach is to await the response.json() method call and then use a type assertion (as ApiResponse) to type the parsed JSON data.",
        "hint": "Consider the sequence of operations needed to get from a fetch call to typed JSON data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What's the proper way to type a middleware function in an Express application?",
        "options": [
        "function middleware(req: Request, res: Response, next: Function): void",
        "function middleware(req: Request, res: Response, next: NextFunction): void",
        "function middleware(req: express.Request, res: express.Response, next: express.NextFunction): void",
        "Both B and C are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are correct",
        "difficulty": "medium",
        "explanation": "Express middleware can be typed either using the imported types (Request, Response, NextFunction) or using the namespaced approach (express.Request, etc.). Both approaches are valid and depend on how you imported the types.",
        "hint": "There are multiple valid ways to import and use Express types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you correctly set up TypeScript to run your Node.js application during development?",
        "options": [
        "Use ts-node directly: 'ts-node src/index.ts'",
        "Compile and run: 'tsc && node dist/index.js'",
        "Use nodemon with ts-node: 'nodemon --exec ts-node src/index.ts'",
        "All of the above are valid approaches"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above are valid approaches",
        "difficulty": "easy",
        "explanation": "All three approaches are valid ways to run TypeScript Node.js applications during development. The choice depends on whether you need automatic restarting (nodemon), prefer direct execution without compilation (ts-node), or want the compiled JavaScript files (tsc && node).",
        "hint": "There are multiple development workflows for TypeScript Node.js projects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the correct way to type custom properties added to Express request objects?",
        "options": [
        "app.use((req: Request & { user: User }, res, next) => { ... })",
        "interface CustomRequest extends Request { user: User } app.use((req: CustomRequest, res, next) => { ... })",
        "declare namespace Express { interface Request { user: User } }",
        "Both B and C are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are correct",
        "difficulty": "hard",
        "explanation": "You can extend Express request objects either by creating a custom interface that extends Request (option B) or by using declaration merging with the Express namespace (option C). Both approaches are valid, with declaration merging being more global and the custom interface being more localized.",
        "hint": "There are multiple ways to extend existing types in TypeScript."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you properly type asynchronous route handlers in Express with TypeScript?",
        "options": [
        "async function handler(req: Request, res: Response): Promise<void> { ... }",
        "async function handler(req: Request, res: Response, next: NextFunction): Promise<void> { ... }",
        "function handler(req: Request, res: Response): Promise<void> { ... }",
        "Both A and B are correct approaches"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "async function handler(req: Request, res: Response, next: NextFunction): Promise<void> { ... }",
        "difficulty": "medium",
        "explanation": "Async route handlers in Express should include the next parameter to properly handle rejected promises, even if you don't explicitly call next(). Express 5+ can automatically catch errors from rejected promises only if the next parameter is included in the function signature.",
        "hint": "Consider how Express handles errors from rejected promises in async functions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the correct type for Node.js's Buffer in TypeScript?",
        "options": [
        "ArrayBuffer",
        "Uint8Array",
        "Buffer",
        "NodeJS.Buffer"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Buffer",
        "difficulty": "easy",
        "explanation": "In TypeScript Node.js projects, the Buffer type is available globally without imports. It represents Node.js's binary data type, which is an extension of JavaScript's Uint8Array.",
        "hint": "The Buffer type is globally available in Node.js environments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you type event emitters in a Node.js TypeScript application?",
        "options": [
        "class MyEmitter extends EventEmitter { emit(event: string, ...args: any[]): boolean { ... } }",
        "class MyEmitter extends EventEmitter<string, any> { ... }",
        "class MyEmitter extends EventEmitter { emit(event: 'data', data: Buffer): boolean; emit(event: 'error', error: Error): boolean; }",
        "class MyEmitter implements NodeJS.EventEmitter { ... }"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "class MyEmitter extends EventEmitter { emit(event: 'data', data: Buffer): boolean; emit(event: 'error', error: Error): boolean; }",
        "difficulty": "hard",
        "explanation": "The safest way to type EventEmitters is to use method overloading to define the allowed events and their associated data types. This provides strong typing for both emit() and on() methods, ensuring type safety across event handling.",
        "hint": "Method overloading can provide precise typing for different events and their payloads."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What's the correct way to type a configuration object from a JSON file in a Node.js application?",
        "options": [
        "const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));",
        "const config = JSON.parse(fs.readFileSync('./config.json', 'utf8')) as Config;",
        "const config: Config = require('./config.json');",
        "Both B and C are correct"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are correct",
        "difficulty": "medium",
        "explanation": "Both options B and C are valid approaches. Option B uses the file system API with a type assertion, while option C uses require() with a type annotation. The choice depends on whether you need dynamic loading (fs) or if the static require() approach is sufficient.",
        "hint": "There are multiple valid ways to load and type JSON configuration files in Node.js."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you correctly handle error typing in an async/await Express route handler?",
        "options": [
        "try/catch with error: any",
        "try/catch with error: Error",
        "try/catch with error: unknown",
        "try/catch with error: NodeJS.ErrnoException"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "try/catch with error: unknown",
        "difficulty": "medium",
        "explanation": "Using 'unknown' for caught errors is the safest approach in TypeScript. It requires error validation/type narrowing before using error properties, preventing runtime errors from incorrect assumptions about the error structure.",
        "hint": "Consider type-safety when catching errors of uncertain origin."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the proper way to import type definitions for a Node.js module that doesn't include its own types?",
        "options": [
        "npm install --save-dev @types/module-name",
        "import { types } from 'module-name'",
        "declare module 'module-name';",
        "/// <reference types=\"module-name\" />"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "npm install --save-dev @types/module-name",
        "difficulty": "easy",
        "explanation": "For Node.js modules that don't include built-in TypeScript definitions, you should install the corresponding @types package from DefinitelyTyped. These packages provide type definitions maintained by the community.",
        "hint": "There's a centralized repository for community-maintained type definitions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you properly type a MongoDB model in a Node.js application using Mongoose and TypeScript?",
        "options": [
        "const UserModel = mongoose.model('User', UserSchema);",
        "const UserModel = mongoose.model<UserDocument>('User', UserSchema);",
        "const UserModel: Model<UserDocument> = mongoose.model('User', UserSchema);",
        "Both B and C are correct approaches"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are correct approaches",
        "difficulty": "hard",
        "explanation": "With Mongoose and TypeScript, you can type models either by providing a generic type parameter to mongoose.model<T> (option B) or by explicitly typing the returned value using Model<T> (option C). Both approaches ensure proper typing for document operations.",
        "hint": "Consider both the input and output typing options when creating a Mongoose model."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the recommended way to add types to a Node.js project that uses native ESM modules?",
        "options": [
        "Create .d.ts files alongside your .js files",
        "Use JSDoc comments with @type annotations",
        "Configure tsconfig.json with \"allowJs\": true and \"checkJs\": true",
        "All of the above are valid approaches"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above are valid approaches",
        "difficulty": "medium",
        "explanation": "For Node.js projects using ESM that want to add TypeScript types without full conversion, all three approaches are valid: separate declaration files, JSDoc type annotations, or TypeScript checking of JavaScript files. The choice depends on project needs and team preferences.",
        "hint": "TypeScript offers multiple ways to add typing to JavaScript projects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you correctly type a Stream in a Node.js TypeScript application?",
        "options": [
        "stream: Stream",
        "stream: NodeJS.ReadableStream",
        "stream: fs.ReadStream",
        "The correct type depends on the specific stream being used"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "The correct type depends on the specific stream being used",
        "difficulty": "medium",
        "explanation": "Node.js has different stream types (Readable, Writable, Duplex, Transform) with different APIs. The correct type depends on the specific stream and its capabilities. For example, fs.ReadStream, process.stdout (WritableStream), or stream.Duplex.",
        "hint": "Node.js has a variety of stream types with different capabilities."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the correct way to define module augmentation for expressing in TypeScript?",
        "options": [
        "declare module 'express' { interface Request { user: User } }",
        "declare namespace Express { interface Request { user: User } }",
        "import { Request } from 'express'; interface CustomRequest extends Request { user: User }",
        "import * as express from 'express'; type RequestWithUser = express.Request & { user: User }"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "declare namespace Express { interface Request { user: User } }",
        "difficulty": "hard",
        "explanation": "To globally extend Express types, use the declaration merging pattern with 'declare namespace Express'. This approach affects all Express Request objects throughout your application, ensuring consistency for middleware that adds properties.",
        "hint": "Look for a solution that uses declaration merging with the correct namespace."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What's the best practice for organizing TypeScript types in a large Node.js project?",
        "options": [
        "Define all types in a single types.ts file",
        "Define types in the same file as their implementation",
        "Use a src/types directory with domain-specific type files",
        "Both B and C depending on the scope and reusability of the types"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C depending on the scope and reusability of the types",
        "difficulty": "medium",
        "explanation": "The best approach combines both strategies: define component-specific types alongside their implementation for better encapsulation, and use dedicated type files in a types directory for shared, reusable types that cross component boundaries.",
        "hint": "Consider both encapsulation and reusability when organizing types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "Which TypeScript configuration is best for a production Node.js application?",
        "options": [
        "{\"target\": \"ES2015\", \"module\": \"CommonJS\"}",
        "{\"target\": \"ES2022\", \"module\": \"NodeNext\"}",
        "{\"target\": \"ES2022\", \"module\": \"CommonJS\"}",
        "It depends on the minimum Node.js version supported by the application"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "It depends on the minimum Node.js version supported by the application",
        "difficulty": "hard",
        "explanation": "The optimal TypeScript configuration depends on your minimum supported Node.js version. For newer Node.js versions (16+), ES2022 with NodeNext is better for features and performance. For older versions or maximum compatibility, ES2015/ES2018 with CommonJS may be more appropriate.",
        "hint": "Different Node.js versions support different ECMAScript features."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you properly type child process execution in a Node.js application?",
        "options": [
        "const child = exec(command); child.on('exit', (code: number) => {...});",
        "const child = exec(command) as ChildProcess; child.on('exit', (code: number) => {...});",
        "import { exec, ChildProcess } from 'child_process'; const child: ChildProcess = exec(command);",
        "exec(command, (error: Error | null, stdout: string, stderr: string) => {...});"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "exec(command, (error: Error | null, stdout: string, stderr: string) => {...});",
        "difficulty": "medium",
        "explanation": "The child_process.exec function can be used with a callback that receives error, stdout, and stderr parameters. This is the most straightforward way to handle the result of a command execution with proper typing.",
        "hint": "The exec function can take a callback with specific parameter types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you correctly use path mapping in a Node.js TypeScript project?",
        "options": [
        "Add \"paths\": {\"@/*\": [\"./src/*\"]} to tsconfig.json",
        "Add \"paths\": {\"@/*\": [\"./src/*\"]} to tsconfig.json and use a module like \"module-alias\"",
        "Add \"baseUrl\": \".\", \"paths\": {\"@/*\": [\"./src/*\"]} to tsconfig.json",
        "Add \"baseUrl\": \".\", \"paths\": {\"@/*\": [\"./src/*\"]} to tsconfig.json and use ts-node or a package like tsconfig-paths"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Add \"baseUrl\": \".\", \"paths\": {\"@/*\": [\"./src/*\"]} to tsconfig.json and use ts-node or a package like tsconfig-paths",
        "difficulty": "hard",
        "explanation": "Path mapping requires both 'baseUrl' and 'paths' in tsconfig.json, plus runtime support. For development, ts-node has a --require tsconfig-paths/register flag. For production, either tsconfig-paths/register or tools like module-alias are needed to resolve the aliases.",
        "hint": "Path mapping needs both compile-time configuration and runtime resolution."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the proper way to type the result of a JSON.parse operation in a Node.js application?",
        "options": [
        "const data = JSON.parse(json) as MyType;",
        "const data: MyType = JSON.parse(json);",
        "const data = <MyType>JSON.parse(json);",
        "All of the above are valid approaches"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above are valid approaches",
        "difficulty": "easy",
        "explanation": "All three approaches are valid in TypeScript: type assertion with 'as', type annotation with a colon, or the angle bracket syntax. They all tell the compiler to treat the result as a specific type. The 'as' syntax is generally preferred in modern TypeScript.",
        "hint": "TypeScript offers multiple syntaxes for type assertions/annotations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you properly handle command line arguments in a TypeScript Node.js application?",
        "options": [
        "const args: string[] = process.argv;",
        "const args: string[] = process.argv.slice(2);",
        "import yargs from 'yargs'; const args = yargs.parse();",
        "Both B and C are valid approaches depending on complexity"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are valid approaches depending on complexity",
        "difficulty": "medium",
        "explanation": "For simple cases, process.argv.slice(2) with manual parsing is sufficient. For complex CLI applications, libraries like yargs, commander, or minimist provide better argument parsing with built-in TypeScript support. The choice depends on your application's needs.",
        "hint": "Consider both built-in Node.js facilities and specialized libraries."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the correct approach for typing dynamic imports in a Node.js TypeScript application?",
        "options": [
        "const module = await import('./module');",
        "const module = await import<ModuleType>('./module');",
        "const module: ModuleType = await import('./module');",
        "const { default: module } = await import<{default: ModuleType}>('./module');"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "const module: ModuleType = await import('./module');",
        "difficulty": "medium",
        "explanation": "The best practice is to use a type annotation for the entire import result. Dynamic imports return a module namespace object containing all exports. If you need specific exports, you can destructure them with appropriate typing.",
        "hint": "Dynamic imports return a promise resolving to a module namespace object."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "How do you correctly type a custom error class in a Node.js application?",
        "options": [
        "class CustomError { message: string; constructor(message: string) { this.message = message; } }",
        "class CustomError implements Error { message: string; name: string; constructor(message: string) { this.message = message; this.name = 'CustomError'; } }",
        "class CustomError extends Error { constructor(message: string) { super(message); this.name = 'CustomError'; } }",
        "class CustomError extends Error { constructor(message: string) { super(message); this.name = 'CustomError'; Object.setPrototypeOf(this, CustomError.prototype); } }"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "class CustomError extends Error { constructor(message: string) { super(message); this.name = 'CustomError'; Object.setPrototypeOf(this, CustomError.prototype); } }",
        "difficulty": "hard",
        "explanation": "When extending Error in TypeScript, you need to add Object.setPrototypeOf(this, CustomError.prototype) to ensure proper instanceof behavior. This is due to how built-in classes like Error work with inheritance in JavaScript transpiled from TypeScript.",
        "hint": "Proper error extension in TypeScript requires special handling for prototype chains."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What is the correct way to type async database operations in a Node.js ORM like Prisma?",
        "options": [
        "const user = await prisma.user.findUnique({ where: { id } });",
        "const user = await prisma.user.findUnique({ where: { id } }) as User;",
        "const user: User | null = await prisma.user.findUnique({ where: { id } });",
        "No explicit typing is needed as Prisma provides proper return types"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "No explicit typing is needed as Prisma provides proper return types",
        "difficulty": "medium",
        "explanation": "Modern ORMs like Prisma are designed with TypeScript in mind and provide precise return types based on your schema definition. Manual type assertions or annotations are unnecessary and can actually hide type errors.",
        "hint": "Consider whether the library already provides proper TypeScript integration."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad86",
        "module": "TypeScript with Node.js",
        "questionText": "What's the best way to handle WebSocket connections in a TypeScript Node.js application?",
        "options": [
        "Use the 'ws' package and type connections as WebSocket",
        "Use the 'ws' package and type connections as WebSocket.WebSocket",
        "Use the 'ws' package with '@types/ws' and type servers as WebSocket.Server<WebSocket.WebSocket>",
        "Use Socket.IO with its built-in TypeScript support"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Use the 'ws' package with '@types/ws' and type servers as WebSocket.Server<WebSocket.WebSocket>",
        "difficulty": "hard",
        "explanation": "For low-level WebSocket implementation, the 'ws' package with @types/ws is commonly used. The server is properly typed as WebSocket.Server<WebSocket.WebSocket> to indicate both the server type and the type of connection instances it manages.",
        "hint": "Consider both server and connection typing with the correct namespace."
    },


]


export default typeScriptQuestions;