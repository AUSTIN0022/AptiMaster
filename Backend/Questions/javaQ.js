const JavaQuestions = [
    // Java Fundamentals
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the correct way to declare a variable of type integer in Java?",
      "options": ["var x = 10;", "integer x = 10;", "int x = 10;", "Integer x = 10;"],
      "correctOptionIndex": 2,
      "correctOptionText": "int x = 10;",
      "difficulty": "easy",
      "explanation": "In Java, the primitive data type for integers is 'int'. The syntax for variable declaration is: dataType variableName = value;",
      "hint": "Java has 8 primitive data types, including one specifically for integers."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which of the following is the correct main method signature in Java?",
      "options": ["public void main(String[] args)", "public static void main()", "static void main(String[] args)", "public static void main(String[] args)"],
      "correctOptionIndex": 3,
      "correctOptionText": "public static void main(String[] args)",
      "difficulty": "easy",
      "explanation": "The main method in Java must be declared as public static void main(String[] args). This exact signature is required for the JVM to recognize it as the entry point of the program.",
      "hint": "The main method needs specific modifiers and parameters to be recognized by the JVM."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the output of: System.out.println(10 + 20 + \"Java\");",
      "options": ["Java1020", "30Java", "10 + 20 + Java", "Error"],
      "correctOptionIndex": 1,
      "correctOptionText": "30Java",
      "difficulty": "easy",
      "explanation": "Java evaluates expressions from left to right. In this case, it adds 10 and 20 to get 30, then concatenates the string \"Java\" to get \"30Java\".",
      "hint": "Consider the order of operations and how + operator works with different types."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which Java keyword is used to define a class?",
      "options": ["define", "class", "struct", "type"],
      "correctOptionIndex": 1,
      "correctOptionText": "class",
      "difficulty": "easy",
      "explanation": "The 'class' keyword is used to define a class in Java. Example: public class MyClass { }",
      "hint": "This keyword is used to create a blueprint for objects."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the default value of a boolean primitive data type in Java?",
      "options": ["true", "false", "null", "0"],
      "correctOptionIndex": 1,
      "correctOptionText": "false",
      "difficulty": "easy",
      "explanation": "The default value of a boolean primitive in Java is 'false'. This applies when booleans are declared as class or instance variables.",
      "hint": "Primitive types have specific default values when not explicitly initialized."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which of the following is not a primitive data type in Java?",
      "options": ["int", "float", "String", "char"],
      "correctOptionIndex": 2,
      "correctOptionText": "String",
      "difficulty": "easy",
      "explanation": "String is not a primitive data type in Java. It's a class in the java.lang package. The eight primitive data types are: byte, short, int, long, float, double, char, and boolean.",
      "hint": "Primitive types store simple values, while non-primitives are reference types."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What will be the output of: int x = 5; System.out.println(x++);",
      "options": ["5", "6", "4", "Error"],
      "correctOptionIndex": 0,
      "correctOptionText": "5",
      "difficulty": "medium",
      "explanation": "The post-increment operator (x++) increments the value after it is used in the expression. So, the value of x is printed first (5) and then incremented to 6.",
      "hint": "Consider the difference between post-increment (x++) and pre-increment (++x) operators."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which statement is used to create a single-line comment in Java?",
      "options": ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
      "correctOptionIndex": 1,
      "correctOptionText": "// comment",
      "difficulty": "easy",
      "explanation": "In Java, single-line comments are created using two forward slashes (//). Everything after // on that line is treated as a comment and ignored by the compiler.",
      "hint": "Java has two types of comments: single-line and multi-line."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the result of 5 / 2 in Java?",
      "options": ["2.5", "2", "2.0", "3"],
      "correctOptionIndex": 1,
      "correctOptionText": "2",
      "difficulty": "easy",
      "explanation": "In Java, when both operands of division are integers, the result is an integer with the fractional part truncated. 5 / 2 = 2.5, but the fractional part (0.5) is truncated, resulting in 2.",
      "hint": "Consider how Java handles division between two integer types."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which operator is used to compare two values for equality in Java?",
      "options": ["=", "==", "===", "equals()"],
      "correctOptionIndex": 1,
      "correctOptionText": "==",
      "difficulty": "easy",
      "explanation": "The double equals operator (==) is used to compare two values for equality. For primitive types, it compares the actual values. For objects, it compares references (memory addresses).",
      "hint": "There are different ways to compare equality in Java, depending on whether you're working with primitives or objects."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the correct way to create an array of 5 integers in Java?",
      "options": ["int[5] array;", "int array[5];", "int[] array = new int[5];", "array int[5] = new array();"],
      "correctOptionIndex": 2,
      "correctOptionText": "int[] array = new int[5];",
      "difficulty": "medium",
      "explanation": "To create an array in Java, you declare the array type followed by the variable name, then use the 'new' keyword with the array type and size in square brackets.",
      "hint": "Java arrays are objects that need to be instantiated with the 'new' keyword."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which Java statement is used to exit a loop prematurely?",
      "options": ["exit;", "break;", "continue;", "return;"],
      "correctOptionIndex": 1,
      "correctOptionText": "break;",
      "difficulty": "easy",
      "explanation": "The 'break' statement is used to exit a loop prematurely. When encountered inside a loop, it immediately terminates the loop and continues execution after the loop.",
      "hint": "This statement completely terminates the current loop."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What happens when you try to access an array element with an index that is out of bounds?",
      "options": ["The program returns null", "The element is automatically created", "An ArrayIndexOutOfBoundsException is thrown", "The program ignores the command"],
      "correctOptionIndex": 2,
      "correctOptionText": "An ArrayIndexOutOfBoundsException is thrown",
      "difficulty": "medium",
      "explanation": "In Java, attempting to access an array element with an index that is negative or equal to or greater than the array's length results in an ArrayIndexOutOfBoundsException being thrown at runtime.",
      "hint": "Java performs runtime checking for array access."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which of the following correctly declares a constant in Java?",
      "options": ["constant int MAX_VALUE = 100;", "int constant MAX_VALUE = 100;", "final int MAX_VALUE = 100;", "static MAX_VALUE = 100;"],
      "correctOptionIndex": 2,
      "correctOptionText": "final int MAX_VALUE = 100;",
      "difficulty": "medium",
      "explanation": "In Java, constants are declared using the 'final' keyword. Once a final variable is assigned a value, it cannot be changed. Constants are typically declared with uppercase letters and underscores.",
      "hint": "Which keyword prevents a variable from being modified after initialization?"
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the output of: System.out.println(\"5\" + 2);",
      "options": ["7", "52", "\"52\"", "Error"],
      "correctOptionIndex": 1,
      "correctOptionText": "52",
      "difficulty": "easy",
      "explanation": "When a string is concatenated with any other data type in Java using the + operator, the other data type is converted to a string and concatenation is performed. So \"5\" + 2 results in \"52\".",
      "hint": "The + operator has different behavior when one operand is a String."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which of the following is the correct way to import a specific class in Java?",
      "options": ["include java.util.Scanner;", "import java.util.*;", "import java.util.Scanner;", "using java.util.Scanner;"],
      "correctOptionIndex": 2,
      "correctOptionText": "import java.util.Scanner;",
      "difficulty": "easy",
      "explanation": "The correct syntax to import a specific class in Java is 'import package.ClassName;'. This makes the specified class available in your code without requiring fully qualified names.",
      "hint": "Java requires a specific keyword to make classes from other packages available."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the result of the following operation in Java: 15 % 4?",
      "options": ["3", "3.75", "4", "1"],
      "correctOptionIndex": 0,
      "correctOptionText": "3",
      "difficulty": "easy",
      "explanation": "The modulus operator (%) returns the remainder of a division operation. 15 divided by 4 equals 3 with a remainder of 3. So 15 % 4 equals 3.",
      "hint": "The modulus operator gives the remainder after division."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which statement correctly describes Java's variable scope?",
      "options": [
        "All variables in Java have global scope",
        "Variables declared inside a block are accessible outside that block",
        "Variables declared inside a method are accessible only within that method",
        "Java doesn't have scope rules"
      ],
      "correctOptionIndex": 2,
      "correctOptionText": "Variables declared inside a method are accessible only within that method",
      "difficulty": "medium",
      "explanation": "In Java, variables declared inside a method (local variables) are only accessible within that method. This is an example of method-level scope. Variables declared inside a block (like within if statements or loops) are only accessible within that block.",
      "hint": "Think about the visibility and lifetime of variables depending on where they are declared."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the output of the following code?\nint a = 10;\nint b = 5;\nSystem.out.println(a > b ? \"Greater\" : \"Lesser\");",
      "options": ["10", "5", "Greater", "Lesser"],
      "correctOptionIndex": 2,
      "correctOptionText": "Greater",
      "difficulty": "medium",
      "explanation": "This code uses the ternary operator (?:), which evaluates a condition and returns one of two values depending on whether the condition is true or false. Since a (10) is greater than b (5), the condition (a > b) is true, so \"Greater\" is printed.",
      "hint": "The ternary operator evaluates a condition and returns one of two values."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which access modifier in Java provides the most restrictive access?",
      "options": ["public", "protected", "default (no modifier)", "private"],
      "correctOptionIndex": 3,
      "correctOptionText": "private",
      "difficulty": "medium",
      "explanation": "Private is the most restrictive access modifier in Java. Private members are only accessible within the same class. They cannot be accessed from outside the class, not even from subclasses.",
      "hint": "Think about which modifier limits visibility to just the declaring class."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the output of the following code?\nint x = 10;\nSystem.out.println(x == 10 ? \"A\" : \"B\");\nSystem.out.println(x == 5 ? \"C\" : \"D\");",
      "options": ["A C", "A D", "B C", "B D"],
      "correctOptionIndex": 1,
      "correctOptionText": "A D",
      "difficulty": "medium",
      "explanation": "The first ternary condition (x == 10) is true since x equals 10, so it prints \"A\". The second condition (x == 5) is false since x equals 10, not 5, so it prints \"D\".",
      "hint": "Evaluate each ternary expression separately, checking if the condition is true or false."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the correct way to cast an int to a double in Java?",
      "options": ["int_value.toDouble()", "double(int_value)", "(double)int_value", "Double.valueOf(int_value)"],
      "correctOptionIndex": 2,
      "correctOptionText": "(double)int_value",
      "difficulty": "medium",
      "explanation": "In Java, you can explicitly cast a value from one type to another using the casting operator (type). For casting an int to a double, you would use (double) before the int value. Note that casting from int to double is actually an implicit conversion and doesn't require explicit casting, but the syntax is still valid.",
      "hint": "Java uses parentheses for explicit type casting."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the output of: System.out.println(1 + 2 + \"3\" + 4 + 5);",
      "options": ["3345", "33345", "12345", "15"],
      "correctOptionIndex": 1,
      "correctOptionText": "33345",
      "difficulty": "medium",
      "explanation": "Java evaluates expressions from left to right. First, 1 + 2 equals 3 (numeric addition). Then 3 + \"3\" results in \"33\" (string concatenation). Next, \"33\" + 4 gives \"334\", and finally \"334\" + 5 produces \"3345\".",
      "hint": "Consider how the + operator behaves differently with numeric values versus strings, and how type conversion occurs."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which of the following is not a valid identifier in Java?",
      "options": ["_variable", "$money", "123data", "camelCase"],
      "correctOptionIndex": 2,
      "correctOptionText": "123data",
      "difficulty": "medium",
      "explanation": "In Java, identifiers (names for variables, methods, classes, etc.) cannot start with a digit. They must begin with a letter, underscore (_), or dollar sign ($). So '123data' is not a valid identifier because it starts with digits.",
      "hint": "Java has specific rules about which characters can start an identifier."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What happens when you try to compile and run this code?\npublic class Test {\n    public static void main(String[] args) {\n        final int x = 10;\n        x = 20;\n        System.out.println(x);\n    }\n}",
      "options": ["Prints 10", "Prints 20", "Runtime exception", "Compilation error"],
      "correctOptionIndex": 3,
      "correctOptionText": "Compilation error",
      "difficulty": "medium",
      "explanation": "The code will not compile because it attempts to reassign a value to a final variable. Once a final variable is assigned a value, it cannot be changed. The line 'x = 20;' causes a compilation error: 'cannot assign a value to final variable x'.",
      "hint": "Consider what happens when you try to modify a constant variable."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the size of the char data type in Java?",
      "options": ["8 bits", "16 bits", "32 bits", "64 bits"],
      "correctOptionIndex": 1,
      "correctOptionText": "16 bits",
      "difficulty": "medium",
      "explanation": "In Java, the char data type is 16 bits (2 bytes) in size. Unlike some other programming languages, Java uses Unicode to represent characters, which requires 16 bits to accommodate the larger character set.",
      "hint": "Java represents characters using Unicode, which requires more bits than ASCII."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the output of the following code?\nint a = 5;\nint b = 3;\nSystem.out.println(a % b * ++a);",
      "options": ["12", "18", "6", "2"],
      "correctOptionIndex": 0,
      "correctOptionText": "12",
      "difficulty": "hard",
      "explanation": "First, a % b is calculated: 5 % 3 = 2. Then, ++a increments a to 6 (pre-increment). Finally, 2 * 6 = 12. The evaluation happens from left to right, with the pre-increment happening before the multiplication.",
      "hint": "Pay attention to the order of operations and the effect of the pre-increment operator."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which of the following statements about Java packages is true?",
      "options": [
        "Package declaration must be the last statement in a Java file",
        "A Java file can have multiple package declarations",
        "The package statement must be the first statement in a Java file",
        "Packages are optional in Java"
      ],
      "correctOptionIndex": 2,
      "correctOptionText": "The package statement must be the first statement in a Java file",
      "difficulty": "hard",
      "explanation": "In Java, if a package statement is present, it must be the first statement in the source file, before any import statements or class declarations. Only comments and blank lines can appear before the package statement.",
      "hint": "Think about the ordering requirements for different elements in a Java source file."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What will be the result of compiling and running the following code?\npublic class Test {\n    public static void main(String[] args) {\n        byte b = 127;\n        b++;\n        System.out.println(b);\n    }\n}",
      "options": ["127", "128", "-128", "Compilation error"],
      "correctOptionIndex": 2,
      "correctOptionText": "-128",
      "difficulty": "hard",
      "explanation": "The byte data type in Java can hold values from -128 to 127. When b is incremented from 127 (the maximum value), it overflows and wraps around to -128 (the minimum value), similar to how an odometer works.",
      "hint": "Consider the range limitation of the byte data type and what happens when you exceed it."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "Which of the following is true about the switch statement in Java?",
      "options": [
        "Switch can be used with boolean values",
        "Default case is mandatory in a switch statement",
        "Fall-through is not allowed in switch cases",
        "Multiple case labels can be associated with the same block of code"
      ],
      "correctOptionIndex": 3,
      "correctOptionText": "Multiple case labels can be associated with the same block of code",
      "difficulty": "hard",
      "explanation": "In Java, multiple case labels can share the same block of code. For example: case 1: case 2: System.out.println(\"Same code for cases 1 and 2\"); break; This is a valid syntax and both cases will execute the same code.",
      "hint": "Think about how multiple cases might execute the same set of statements."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad83",
      "module": "Java Fundamentals",
      "questionText": "What is the output of the following code?\npublic class Test {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int sum = 0;\n        for(int i = 0; i < arr.length; i++) {\n            if(i % 2 == 0) continue;\n            sum += arr[i];\n        }\n        System.out.println(sum);\n    }\n}",
      "options": ["9", "6", "15", "8"],
      "correctOptionIndex": 0,
      "correctOptionText": "9",
      "difficulty": "hard",
      "explanation": "The loop iterates through all indices of the array. The 'continue' statement skips iterations where i is even (i % 2 == 0). So, only elements at odd indices (arr[1] = 2 and arr[3] = 4) contribute to the sum. 2 + 7 = 9.",
      "hint": "The continue statement skips the current iteration and proceeds to the next one."
    },

    // Object-Oriented Programming
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which of the following is a core principle of object-oriented programming?",
        "options": ["Procedural coding", "Sequential execution", "Encapsulation", "Functional decomposition"],
        "correctOptionIndex": 2,
        "correctOptionText": "Encapsulation",
        "difficulty": "easy",
        "explanation": "Encapsulation is one of the four core principles of object-oriented programming, along with inheritance, polymorphism, and abstraction. It refers to the bundling of data and methods that operate on that data within a single unit (class).",
        "hint": "Think about the concept that involves hiding the internal state and requiring interaction through well-defined interfaces."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What keyword is used to create an instance of a class in Java?",
        "options": ["class", "this", "new", "instance"],
        "correctOptionIndex": 2,
        "correctOptionText": "new",
        "difficulty": "easy",
        "explanation": "The 'new' keyword is used to create instances (objects) of a class in Java. For example: MyClass obj = new MyClass();",
        "hint": "This keyword allocates memory for an object and returns a reference to it."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What does the 'this' keyword refer to in Java?",
        "options": ["The current class", "The current object", "The parent class", "The main method"],
        "correctOptionIndex": 1,
        "correctOptionText": "The current object",
        "difficulty": "easy",
        "explanation": "In Java, the 'this' keyword refers to the current object instance. It is used to differentiate between instance variables and parameters with the same name, or to call another constructor of the same class.",
        "hint": "Which option represents the instance that is currently executing a method?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is a constructor in Java?",
        "options": [
        "A method that returns a value",
        "A special method used to initialize objects",
        "A method that constructs the class hierarchy",
        "A variable that holds the object reference"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A special method used to initialize objects",
        "difficulty": "easy",
        "explanation": "A constructor is a special method that is called when an object is instantiated. It has the same name as the class and is used to initialize the object's state. Constructors don't have return types, not even void.",
        "hint": "This special method runs automatically when you create a new object with the 'new' keyword."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which keyword is used to inherit a class in Java?",
        "options": ["extends", "implements", "inherits", "super"],
        "correctOptionIndex": 0,
        "correctOptionText": "extends",
        "difficulty": "easy",
        "explanation": "In Java, the 'extends' keyword is used to inherit a class. For example: class Child extends Parent { }. This establishes an 'is-a' relationship between the child and parent classes.",
        "hint": "This keyword is used to create a subclass that inherits from another class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which of the following is true about method overloading in Java?",
        "options": [
        "It occurs when a subclass provides a specific implementation of a method declared in its parent class",
        "It allows a class to have multiple methods with the same name but different parameters",
        "It is a form of dynamic binding",
        "It requires the 'override' keyword"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It allows a class to have multiple methods with the same name but different parameters",
        "difficulty": "easy",
        "explanation": "Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameters (different number or types of parameters). It is a form of compile-time polymorphism.",
        "hint": "Think about having multiple methods with identical names but distinguishable through their parameter lists."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the purpose of the 'super' keyword in Java?",
        "options": [
        "To call the superclass constructor",
        "To create an instance of the parent class",
        "To declare a class as a superclass",
        "To access private members of the parent class"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To call the superclass constructor",
        "difficulty": "easy",
        "explanation": "The 'super' keyword in Java is used to refer to the parent class. It can be used to call the parent class constructor, access parent class methods, or access parent class fields that are hidden by subclass fields of the same name.",
        "hint": "This keyword helps initialize the parent portion of an object when creating a subclass instance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the default access modifier for classes, methods, and variables in Java?",
        "options": ["public", "private", "protected", "package-private (default)"],
        "correctOptionIndex": 3,
        "correctOptionText": "package-private (default)",
        "difficulty": "medium",
        "explanation": "If no access modifier is specified for a class, method, or variable, it gets 'package-private' (also called default) access. This means it's only accessible within the same package.",
        "hint": "When no explicit access modifier is provided, Java assigns an implicit one that restricts access to the same package."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which statement is true about overriding methods in Java?",
        "options": [
        "An overriding method can have a different return type than the overridden method",
        "An overriding method can throw broader exceptions than the overridden method",
        "An overriding method must have the same name, parameters, and return type as the overridden method",
        "An overriding method can have more restrictive access than the overridden method"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An overriding method must have the same name, parameters, and return type as the overridden method",
        "difficulty": "medium",
        "explanation": "When overriding a method in Java, the overriding method must have the same name, parameter list, and return type as the overridden method. Since Java 5, the return type can be a subtype of the original return type (covariant return type).",
        "hint": "Method overriding requires the subclass method to match specific characteristics of the superclass method."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is an abstract class in Java?",
        "options": [
        "A class that cannot be instantiated and may contain abstract methods",
        "A class that has only static methods",
        "A class that is hidden from other classes",
        "A class with all private constructors"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A class that cannot be instantiated and may contain abstract methods",
        "difficulty": "medium",
        "explanation": "An abstract class in Java is a class that cannot be instantiated directly. It may contain abstract methods (methods without a body) that must be implemented by subclasses. Abstract classes are declared with the 'abstract' keyword.",
        "hint": "This type of class represents an incomplete implementation that serves as a base for other classes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which of the following is true about Java interfaces?",
        "options": [
        "Interfaces can contain implemented methods without the default keyword",
        "Interfaces can contain instance variables",
        "Interfaces can be instantiated",
        "All methods declared in an interface are implicitly public and abstract"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "All methods declared in an interface are implicitly public and abstract",
        "difficulty": "medium",
        "explanation": "In Java, all methods declared in an interface are implicitly public and abstract (until Java 8, which introduced default and static methods). You don't need to use these keywords explicitly, though you can if you want to.",
        "hint": "Interfaces define a contract, and methods in this contract have specific implicit modifiers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the output of this code?\nclass A {\n    int x = 10;\n    \n    void print() {\n        System.out.println(\"A: \" + x);\n    }\n}\n\nclass B extends A {\n    int x = 20;\n    \n    void print() {\n        System.out.println(\"B: \" + x);\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        A a = new B();\n        a.print();\n        System.out.println(a.x);\n    }\n}",
        "options": ["B: 20\\n20", "B: 20\\n10", "A: 10\\n10", "A: 10\\n20"],
        "correctOptionIndex": 1,
        "correctOptionText": "B: 20\\n10",
        "difficulty": "hard",
        "explanation": "In this code, we have method overriding and variable hiding. For 'a.print()', the method from class B is called because methods are resolved at runtime (dynamic binding). For 'a.x', the variable from class A is accessed because variables are resolved at compile time (static binding) based on the reference type (A).",
        "hint": "Consider how Java handles methods versus variables when using polymorphism."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the difference between method overloading and method overriding in Java?",
        "options": [
        "Overloading occurs in the same class, overriding occurs in a subclass",
        "Overloading involves different return types, overriding must have the same return type",
        "Overloading must have the same parameters, overriding must have different parameters",
        "Overloading is a compile-time feature, overriding is a run-time feature"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Overloading occurs in the same class, overriding occurs in a subclass",
        "difficulty": "medium",
        "explanation": "Method overloading occurs within the same class when multiple methods have the same name but different parameters. Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. Overloading is resolved at compile time, while overriding is resolved at runtime.",
        "hint": "Think about where these two mechanisms take place in the class hierarchy."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What happens if a class implements two interfaces that have methods with the same signature?",
        "options": [
        "The class must provide a single implementation that satisfies both interfaces",
        "The class must implement both methods separately",
        "A compilation error occurs",
        "The class inherits both implementations automatically"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The class must provide a single implementation that satisfies both interfaces",
        "difficulty": "medium",
        "explanation": "When a class implements two interfaces that have methods with the same signature, the class needs to provide only one implementation of the method that satisfies both interfaces. This is possible because interface methods are just contracts without implementation (prior to Java 8 default methods).",
        "hint": "Consider that interfaces traditionally provide only method declarations, not implementations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the purpose of the 'final' keyword when applied to a class in Java?",
        "options": [
        "The class can't be instantiated",
        "The class can't be extended (inherited)",
        "The class's methods can't be overridden",
        "The class is loaded only when needed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The class can't be extended (inherited)",
        "difficulty": "medium",
        "explanation": "When the 'final' keyword is applied to a class in Java, it means that the class cannot be extended or subclassed. This is often done for security reasons or to ensure that the behavior of the class is not changed by subclasses.",
        "hint": "This modifier prevents other classes from deriving from the marked class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which of the following is a characteristic of a static method in Java?",
        "options": [
        "It can access instance variables directly",
        "It can be overridden in a subclass",
        "It can be called using an object reference",
        "It can't access non-static methods or variables directly"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "It can't access non-static methods or variables directly",
        "difficulty": "medium",
        "explanation": "Static methods in Java belong to the class rather than instances. They cannot directly access instance variables or methods because there's no implicit 'this' reference. They can only access static members of the class. Static methods can be called using the class name without creating an instance.",
        "hint": "Since static methods belong to the class rather than instances, what restriction does this impose on what they can access?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the output of this code?\npublic class Test {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.makeSound();\n    }\n}\n\nclass Animal {\n    public void makeSound() {\n        System.out.print(\"Animal sound \");\n    }\n}\n\nclass Dog extends Animal {\n    public void makeSound() {\n        super.makeSound();\n        System.out.print(\"Bark\");\n    }\n}",
        "options": ["Animal sound", "Bark", "Animal sound Bark", "No output"],
        "correctOptionIndex": 2,
        "correctOptionText": "Animal sound Bark",
        "difficulty": "medium",
        "explanation": "The Dog class overrides the makeSound() method but also calls the parent class's implementation using super.makeSound(). When d.makeSound() is called, it first executes the Animal's makeSound() method (printing 'Animal sound '), then continues with the Dog's implementation (printing 'Bark').",
        "hint": "Look at how the overriding method interacts with the overridden method using the super keyword."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the result of the following code?\npublic class Test {\n    public static void main(String[] args) {\n        Base b = new Derived();\n        b.show();\n    }\n}\n\nclass Base {\n    public static void show() {\n        System.out.println(\"Base\");\n    }\n}\n\nclass Derived extends Base {\n    public static void show() {\n        System.out.println(\"Derived\");\n    }\n}",
        "options": ["Base", "Derived", "Base Derived", "Compilation error"],
        "correctOptionIndex": 0,
        "correctOptionText": "Base",
        "difficulty": "hard",
        "explanation": "This code demonstrates that static methods cannot be overridden in Java; they can only be hidden. Static methods are resolved at compile time based on the reference type, not the object type. Since the reference type is Base, the Base.show() method is called, printing 'Base'.",
        "hint": "Static methods belong to the class, not objects, which affects how method calls are resolved."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which statement correctly describes the relationship between an interface and an abstract class in Java?",
        "options": [
        "Interfaces can have constructors, abstract classes cannot",
        "A class can implement multiple interfaces but extend only one abstract class",
        "Abstract classes can have final methods, interfaces cannot",
        "Interfaces can contain private methods, abstract classes cannot"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A class can implement multiple interfaces but extend only one abstract class",
        "difficulty": "medium",
        "explanation": "In Java, a class can implement multiple interfaces but can extend only one class (abstract or concrete). This is because Java supports multiple interface inheritance but not multiple class inheritance. This allows for greater flexibility in design while avoiding the complications of multiple inheritance.",
        "hint": "Think about Java's approach to multiple inheritance and how it differs for classes versus interfaces."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the result of this code?\npublic class Test {\n    public static void main(String[] args) {\n        A a = new A();\n    }\n}\n\nclass A {\n    { System.out.print(\"1 \"); }\n    static { System.out.print(\"2 \"); }\n    public A() { System.out.print(\"3 \"); }\n}",
        "options": ["1 2 3", "2 1 3", "3 1 2", "2 3 1"],
        "correctOptionIndex": 1,
        "correctOptionText": "2 1 3",
        "difficulty": "hard",
        "explanation": "This code demonstrates initialization blocks in Java. The execution order is: 1) Static initialization blocks run when the class is loaded, 2) Instance initialization blocks run when an instance is created, before the constructor, 3) Constructor runs. So the output is '2' (static block), '1' (instance block), '3' (constructor).",
        "hint": "Consider the execution order of different initialization components in a Java class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which of the following is true about the 'final' keyword when applied to a method parameter in Java?",
        "options": [
        "The parameter must be assigned a value when declared",
        "The parameter's value cannot be changed within the method",
        "The parameter must be a primitive type",
        "The parameter cannot be passed to other methods"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The parameter's value cannot be changed within the method",
        "difficulty": "medium",
        "explanation": "When a method parameter is declared as 'final' in Java, it means that the parameter's value cannot be changed within the method body. This is used to enforce immutability of the parameter within the method. For reference types, the reference cannot be changed, but the object's state can still be modified if the object is mutable.",
        "hint": "This keyword prevents reassignment of the parameter variable within the method scope."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the output of this code?\npublic class Test {\n    public static void main(String[] args) {\n        Child c = new Child();\n    }\n}\n\nclass Parent {\n    public Parent() {\n        System.out.print(\"Parent \");\n    }\n}\n\nclass Child extends Parent {\n    public Child() {\n        System.out.print(\"Child \");\n    }\n}",
        "options": ["Parent", "Child", "Parent Child", "Child Parent"],
        "correctOptionIndex": 2,
        "correctOptionText": "Parent Child",
        "difficulty": "medium",
        "explanation": "When a Child object is instantiated, the Parent constructor is called first (implicitly via an implicit 'super()' call at the beginning of the Child constructor), followed by the Child constructor. So the output is 'Parent ' followed by 'Child '.",
        "hint": "In Java, when a subclass object is created, the superclass constructor is always called first."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is polymorphism in Java?",
        "options": [
        "The ability to define multiple methods with the same name but different parameters",
        "The ability of a class to implement multiple interfaces",
        "The ability of an object to take on many forms",
        "The ability to declare variables of different types"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The ability of an object to take on many forms",
        "difficulty": "easy",
        "explanation": "Polymorphism in Java is the ability of an object to take on many forms. The most common use of polymorphism is when a parent class reference is used to refer to a child class object. This allows methods to be called based on the object's actual type rather than the reference type.",
        "hint": "This OOP concept relates to how objects of different types can be treated as objects of a common supertype."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the output of this code?\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        obj.display();\n    }\n}\n\nclass A {\n    protected void display() {\n        System.out.println(\"A\");\n    }\n}\n\nclass B extends A {\n    public void display() {\n        System.out.println(\"B\");\n    }\n}",
        "options": ["A", "B", "Compilation error", "Runtime error"],
        "correctOptionIndex": 1,
        "correctOptionText": "B",
        "difficulty": "medium",
        "explanation": "This code demonstrates method overriding and polymorphism. Although the reference type is A, the actual object is of type B. When obj.display() is called, it invokes B's implementation of the display method due to runtime polymorphism, printing 'B'.",
        "hint": "Java uses dynamic method dispatch to determine which method to call at runtime based on the actual object type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which of the following is a correct example of a singleton class in Java?",
        "options": [
        "public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if(instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}",
        "public class Singleton {\n    private Singleton() {}\n    public static Singleton getInstance() {\n        return new Singleton();\n    }\n}",
        "public class Singleton {\n    private static Singleton instance = new Singleton();\n    public Singleton() {}\n    public static Singleton getInstance() {\n        return instance;\n    }\n}",
        "public class Singleton {\n    private Singleton() {}\n    public Singleton getInstance() {\n        return this;\n    }\n}"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if(instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}",
        "difficulty": "hard",
        "explanation": "A singleton class ensures that only one instance of the class can be created. The correct implementation includes: 1) A private static instance variable, 2) A private constructor to prevent external instantiation, 3) A public static method that creates the instance if it doesn't exist and returns it. This lazy initialization approach creates the instance only when needed.",
        "hint": "A singleton pattern restricts instantiation to a single instance and provides global access to it."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the difference between 'String' and 'StringBuilder' in Java?",
        "options": [
        "String is mutable, StringBuilder is immutable",
        "String is immutable, StringBuilder is mutable",
        "String is thread-safe, StringBuilder is not",
        "Both A and C"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "String is immutable, StringBuilder is mutable",
        "difficulty": "medium",
        "explanation": "In Java, String objects are immutable, meaning once created, their values cannot be changed. StringBuilder, on the other hand, is mutable, allowing modifications to its contents without creating new objects. This makes StringBuilder more efficient for string manipulations.",
        "hint": "Consider which class allows you to modify its content after creation versus which creates a new object for every modification."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is composition in Java?",
        "options": [
        "A relationship where one class inherits from another",
        "A relationship where a class uses functionality of another class through inheritance",
        "A relationship where a class contains objects of other classes as members",
        "A relationship where multiple classes implement the same interface"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A relationship where a class contains objects of other classes as members",
        "difficulty": "medium",
        "explanation": "Composition is a design principle in OOP where a class contains objects of other classes as its instance variables. This establishes a 'has-a' relationship rather than an 'is-a' relationship (which is inheritance). Composition provides better encapsulation and flexibility than inheritance in many cases.",
        "hint": "This relationship can be described as a 'has-a' relationship, as opposed to inheritance's 'is-a' relationship."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the purpose of Java's 'finalize()' method?",
        "options": [
        "To clean up resources before an object is garbage collected",
        "To ensure all objects are properly destroyed",
        "To terminate the Java application",
        "To finalize the state of an object so it cannot be changed"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To clean up resources before an object is garbage collected",
        "difficulty": "medium",
        "explanation": "The finalize() method in Java is called by the garbage collector before reclaiming the memory occupied by an object. It gives the object a last chance to clean up resources (like closing files or network connections) before it's garbage collected. However, its use is discouraged in modern Java due to unpredictability and performance issues.",
        "hint": "This method is related to the garbage collection process and resource management."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "Which of the following correctly describes the 'IS-A' relationship in Java?",
        "options": [
        "When a class implements an interface",
        "When a class extends another class",
        "When a class contains objects of another class",
        "Both A and B"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Both A and B",
        "difficulty": "medium",
        "explanation": "The 'IS-A' relationship in Java is established through inheritance and interface implementation. When class B extends class A, B IS-A A. Similarly, when class C implements interface I, C IS-A I. This relationship enables polymorphism, allowing objects to be used interchangeably with their supertypes.",
        "hint": "This relationship is established when one type can be substituted for another in code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Object-Oriented Programming",
        "questionText": "What is the output of this code?\npublic class Test {\n    public static void main(String[] args) {\n        Base obj = new Derived();\n        obj.method();\n    }\n}\n\nclass Base {\n    public void method() {\n        System.out.println(\"Base\");\n        this.anotherMethod();\n    }\n    \n    public void anotherMethod() {\n        System.out.println(\"Base another\");\n    }\n}\n\nclass Derived extends Base {\n    public void anotherMethod() {\n        System.out.println(\"Derived another\");\n    }\n}",
        "options": [
        "Base\\nBase another",
        "Base\\nDerived another",
        "Derived\\nDerived another",
        "Derived\\nBase another"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Base\\nDerived another",
        "difficulty": "hard",
        "explanation": "This code demonstrates method overriding and the 'this' reference in Java. When obj.method() is called, it executes Base's method() since it's not overridden. Inside method(), 'this' refers to the actual object, which is of type Derived. So this.anotherMethod() calls Derived's anotherMethod(), not Base's. The output is 'Base' followed by 'Derived another'.",
        "hint": "When a method uses 'this' to call another method, it uses the actual object's implementation, not the reference type's."
    },

    // Java Arrays & Strings
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "Which of the following declarations creates an array of integers in Java?",
        "options": ["int numbers = new int[5];", "int[] numbers = new int[5];", "int numbers[] = {1, 2, 3, 4, 5};", "integers[] numbers = new integers[5];"],
        "correctOptionIndex": 1,
        "correctOptionText": "int[] numbers = new int[5];",
        "difficulty": "easy",
        "explanation": "In Java, arrays are declared using square brackets either after the type or after the variable name. The correct syntax to create an array of 5 integers is 'int[] numbers = new int[5];'.",
        "hint": "Look for the correct syntax for array declaration in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the output of the following code?\n```java\nString str = \"Hello\";\nSystem.out.println(str.charAt(0));\n```",
        "options": ["Hello", "H", "e", "0"],
        "correctOptionIndex": 1,
        "correctOptionText": "H",
        "difficulty": "easy",
        "explanation": "The charAt(0) method returns the character at index 0 in the string, which is 'H' in 'Hello'.",
        "hint": "Remember that string indices start at 0 in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the length of the array after executing the following code?\n```java\nint[] numbers = {1, 2, 3, 4, 5};\n```",
        "options": ["0", "4", "5", "6"],
        "correctOptionIndex": 2,
        "correctOptionText": "5",
        "difficulty": "easy",
        "explanation": "The array is initialized with 5 elements (1, 2, 3, 4, 5), so its length is 5.",
        "hint": "Count the number of elements in the array initialization."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the output of the following code?\n```java\nString s1 = \"Java\";\nString s2 = \"Java\";\nSystem.out.println(s1 == s2);\n```",
        "options": ["true", "false", "error", "Java"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "medium",
        "explanation": "String literals in Java are stored in the String pool. When two String variables are assigned the same literal, they reference the same object in memory, making the == comparison return true.",
        "hint": "Consider how String literals are stored in memory in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "Which method is used to find the position of a character or substring within a string?",
        "options": ["position()", "locate()", "indexOf()", "find()"],
        "correctOptionIndex": 2,
        "correctOptionText": "indexOf()",
        "difficulty": "easy",
        "explanation": "The indexOf() method in Java's String class is used to find the position of a character or substring within a string.",
        "hint": "This is one of the most commonly used string search methods in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What will be the output of the following code?\n```java\nint[] arr = new int[5];\nSystem.out.println(arr[0]);\n```",
        "options": ["null", "0", "1", "undefined"],
        "correctOptionIndex": 1,
        "correctOptionText": "0",
        "difficulty": "easy",
        "explanation": "In Java, when an integer array is created, all elements are initialized to 0 by default.",
        "hint": "Think about the default values for primitive types in Java arrays."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the result of the following code?\n```java\nString text = \"Java Programming\";\nString result = text.substring(5, 10);\nSystem.out.println(result);\n```",
        "options": ["Java", "Progr", "Progra", "Programming"],
        "correctOptionIndex": 2,
        "correctOptionText": "Progra",
        "difficulty": "medium",
        "explanation": "The substring(5, 10) method returns a substring starting at index 5 (inclusive) and ending at index 10 (exclusive). In 'Java Programming', this corresponds to 'Progra'.",
        "hint": "Remember that substring(start, end) includes the character at start index but not the character at end index."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What happens when you try to access an array element outside its bounds in Java?",
        "options": ["The program returns null", "The program continues with unpredictable values", "An ArrayIndexOutOfBoundsException is thrown", "The program terminates without an error"],
        "correctOptionIndex": 2,
        "correctOptionText": "An ArrayIndexOutOfBoundsException is thrown",
        "difficulty": "easy",
        "explanation": "Java performs runtime checking of array bounds. If you try to access an element outside the array's bounds, it throws an ArrayIndexOutOfBoundsException.",
        "hint": "Java enforces strict array bounds checking at runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "Which of the following methods can be used to convert a string to lowercase in Java?",
        "options": ["toLower()", "lowercase()", "toLowerCase()", "convertToLower()"],
        "correctOptionIndex": 2,
        "correctOptionText": "toLowerCase()",
        "difficulty": "easy",
        "explanation": "The toLowerCase() method in Java's String class is used to convert all characters in a string to lowercase.",
        "hint": "This is a standard method in the String class for case conversion."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What will be the output of the following code?\n```java\nString str1 = new String(\"Hello\");\nString str2 = new String(\"Hello\");\nSystem.out.println(str1.equals(str2));\n```",
        "options": ["true", "false", "error", "Hello"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "medium",
        "explanation": "The equals() method in the String class compares the content of strings, not their references. Since both strings contain 'Hello', the equals() method returns true.",
        "hint": "Consider what the equals() method compares in strings, as opposed to the == operator."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "How do you create a two-dimensional array in Java?",
        "options": ["int matrix = new int[3][3];", "int[][] matrix = new int[3][3];", "int[3][3] matrix = new int;", "int matrix[3][3] = new int;"],
        "correctOptionIndex": 1,
        "correctOptionText": "int[][] matrix = new int[3][3];",
        "difficulty": "medium",
        "explanation": "A two-dimensional array in Java is declared using double square brackets. The correct syntax is 'int[][] matrix = new int[3][3];' which creates a 3x3 matrix.",
        "hint": "Look for the correct syntax for multi-dimensional array declaration."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What does the split() method do in Java's String class?",
        "options": ["Joins multiple strings together", "Divides a string into substrings based on a delimiter", "Removes whitespace from both ends of a string", "Splits a string into individual characters"],
        "correctOptionIndex": 1,
        "correctOptionText": "Divides a string into substrings based on a delimiter",
        "difficulty": "easy",
        "explanation": "The split() method in Java's String class divides a string into substrings based on a regular expression delimiter and returns an array of these substrings.",
        "hint": "This method is useful for parsing comma-separated values or space-delimited text."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the output of the following code?\n```java\nString[] fruits = {\"Apple\", \"Banana\", \"Orange\"};\nSystem.out.println(fruits.length);\n```",
        "options": ["2", "3", "4", "Error: length is not a property of arrays"],
        "correctOptionIndex": 1,
        "correctOptionText": "3",
        "difficulty": "easy",
        "explanation": "The array contains 3 elements (\"Apple\", \"Banana\", \"Orange\"), so its length is 3.",
        "hint": "Count the number of elements in the array initialization."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What will happen when you run this code?\n```java\nint[] numbers = {1, 2, 3};\nnumbers[3] = 4;\n```",
        "options": ["The array will be resized automatically", "The number 4 will be added to the array", "An ArrayIndexOutOfBoundsException will be thrown", "The last element will be replaced with 4"],
        "correctOptionIndex": 2,
        "correctOptionText": "An ArrayIndexOutOfBoundsException will be thrown",
        "difficulty": "medium",
        "explanation": "The array has indices 0, 1, and 2. Trying to access index 3 is outside the bounds of the array, which will throw an ArrayIndexOutOfBoundsException.",
        "hint": "Remember that array indices in Java start at 0, so an array of length 3 has valid indices 0, 1, and 2."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What method would you use to determine if a string ends with a specific suffix?",
        "options": ["endsWith()", "hasSuffix()", "contains()", "matches()"],
        "correctOptionIndex": 0,
        "correctOptionText": "endsWith()",
        "difficulty": "easy",
        "explanation": "The endsWith() method in Java's String class tests if the string ends with the specified suffix.",
        "hint": "The method name is very intuitive for its purpose."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the result of the following code?\n```java\nString s1 = \"Hello\";\nString s2 = \"hello\";\nSystem.out.println(s1.equalsIgnoreCase(s2));\n```",
        "options": ["true", "false", "error", "Hello"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "easy",
        "explanation": "The equalsIgnoreCase() method compares two strings irrespective of case. Since 'Hello' and 'hello' are the same except for the case of the first letter, the method returns true.",
        "hint": "Think about what 'IgnoreCase' in the method name suggests."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "Which of the following correctly copies elements from one array to another in Java?",
        "options": ["Arrays.copy(source, destination);", "destination = source;", "System.arraycopy(source, 0, destination, 0, source.length);", "destination.copyFrom(source);"],
        "correctOptionIndex": 2,
        "correctOptionText": "System.arraycopy(source, 0, destination, 0, source.length);",
        "difficulty": "medium",
        "explanation": "System.arraycopy() is a native method that efficiently copies array elements from one array to another. The parameters are: source array, starting position in source, destination array, starting position in destination, and number of elements to copy.",
        "hint": "This is the most efficient way to copy arrays in Java, though Arrays.copyOf() is also commonly used."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the output of the following code?\n```java\nString str = \"Java\";\nSystem.out.println(str.length());\n```",
        "options": ["3", "4", "5", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "4",
        "difficulty": "easy",
        "explanation": "The length() method returns the number of characters in a string. The string \"Java\" has 4 characters, so the output is 4.",
        "hint": "Count the number of characters in the string."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "Which of the following correctly sorts an array of integers in Java?",
        "options": ["sort(numbers);", "numbers.sort();", "Arrays.sort(numbers);", "Collections.sort(numbers);"],
        "correctOptionIndex": 2,
        "correctOptionText": "Arrays.sort(numbers);",
        "difficulty": "medium",
        "explanation": "The Arrays.sort() method in the java.util package is used to sort arrays in Java. For an array of integers, it sorts in ascending order.",
        "hint": "Look for the utility class specifically designed for array operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the output of the following code?\n```java\nString text = \"Java Programming\";\nSystem.out.println(text.replace('a', 'o'));\n```",
        "options": ["Java Programming", "Jovo Programming", "Java Progrommong", "Jovo Progromming"],
        "correctOptionIndex": 3,
        "correctOptionText": "Jovo Progromming",
        "difficulty": "medium",
        "explanation": "The replace() method replaces all occurrences of a specified character with another character. In this case, all 'a' characters are replaced with 'o', resulting in 'Jovo Progromming'.",
        "hint": "The replace method affects all instances of the specified character in the string."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What will be the output of the following code?\n```java\nString str = \"Hello\";\nstr.concat(\" World\");\nSystem.out.println(str);\n```",
        "options": ["Hello World", "Hello", "World", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "Hello",
        "difficulty": "medium",
        "explanation": "Strings in Java are immutable. The concat() method creates a new string but doesn't modify the original string. Since the result of concat() is not assigned to any variable, the original string 'str' remains unchanged, so the output is 'Hello'.",
        "hint": "Consider the immutability of strings in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "Which of the following creates a jagged array in Java?",
        "options": ["int[][] arr = new int[3][3];", "int[] arr = {1, 2, 3, 4, 5};", "int[][] arr = new int[3][];", "int[] arr = new int[3][5];"],
        "correctOptionIndex": 2,
        "correctOptionText": "int[][] arr = new int[3][];",
        "difficulty": "hard",
        "explanation": "A jagged array is a multi-dimensional array where the length of each row can differ. By specifying only the first dimension (int[3][]), you can later initialize each row with a different length.",
        "hint": "In a jagged array, each row can have a different number of elements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the output of the following code?\n```java\nString s = \"Java\";\nSystem.out.println(s.indexOf('a'));\n```",
        "options": ["0", "1", "2", "-1"],
        "correctOptionIndex": 1,
        "correctOptionText": "1",
        "difficulty": "medium",
        "explanation": "The indexOf() method returns the index of the first occurrence of the specified character in the string. In 'Java', the first 'a' is at index 1.",
        "hint": "Remember that string indices start at 0 in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What does the following code print?\n```java\nString s = \"Hello World\";\nSystem.out.println(s.substring(6));\n```",
        "options": ["Hello", "World", "lo World", "Hello W"],
        "correctOptionIndex": 1,
        "correctOptionText": "World",
        "difficulty": "medium",
        "explanation": "The substring(6) method returns a substring starting at index 6 until the end of the string. In 'Hello World', index 6 is 'W', so the output is 'World'.",
        "hint": "When substring() is called with a single parameter, it returns everything from that index to the end of the string."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the output of the following code?\n```java\nString str = \"Java\";\nStringBuilder sb = new StringBuilder(str);\nsb.reverse();\nSystem.out.println(sb.toString());\n```",
        "options": ["Java", "avaJ", "JAVA", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "avaJ",
        "difficulty": "medium",
        "explanation": "The StringBuilder's reverse() method reverses the sequence of characters. When applied to 'Java', it becomes 'avaJ'.",
        "hint": "The StringBuilder class provides methods to modify character sequences, unlike the immutable String class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the result of the following code?\n```java\nchar[] chars = {'J', 'a', 'v', 'a'};\nString s = new String(chars);\nSystem.out.println(s);\n```",
        "options": ["J,a,v,a", "[J, a, v, a]", "Java", "Error"],
        "correctOptionIndex": 2,
        "correctOptionText": "Java",
        "difficulty": "medium",
        "explanation": "The String constructor can take a character array as a parameter. It creates a new string containing the characters from the array, resulting in 'Java'.",
        "hint": "This is one way to convert a character array to a string in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the result of the following code?\n```java\nint[][] matrix = new int[3][];\nmatrix[0] = new int[1];\nmatrix[1] = new int[2];\nmatrix[2] = new int[3];\nSystem.out.println(matrix[1].length);\n```",
        "options": ["1", "2", "3", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "2",
        "difficulty": "hard",
        "explanation": "This code creates a jagged array where the first row has 1 element, the second row has 2 elements, and the third row has 3 elements. matrix[1] refers to the second row, which has a length of 2.",
        "hint": "Each row in this jagged array has a different length, specified during initialization."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the output of the following code?\n```java\nString text = \"Java,Python,C++\";\nString[] languages = text.split(\",\");\nSystem.out.println(languages[1]);\n```",
        "options": ["Java", "Python", "C++", "Java,Python,C++"],
        "correctOptionIndex": 1,
        "correctOptionText": "Python",
        "difficulty": "medium",
        "explanation": "The split(\",\") method splits the string at each comma, resulting in an array [\"Java\", \"Python\", \"C++\"]. languages[1] refers to the second element, which is \"Python\".",
        "hint": "Remember that array indices start at 0 in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What does the following code do?\n```java\nString str = \"Hello\";\nchar[] chars = str.toCharArray();\n```",
        "options": ["Converts each character to its ASCII value", "Creates an array of String objects", "Converts the string to a character array", "Throws an error"],
        "correctOptionIndex": 2,
        "correctOptionText": "Converts the string to a character array",
        "difficulty": "medium",
        "explanation": "The toCharArray() method converts a string to a new character array, containing each character in the string in sequence.",
        "hint": "This method is useful when you need to manipulate individual characters in a string."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Arrays & Strings",
        "questionText": "What is the result of the following code?\n```java\nchar[] chars = {'H', 'e', 'l', 'l', 'o'};\nString str = String.valueOf(chars);\nSystem.out.println(str.length());\n```",
        "options": ["4", "5", "6", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "5",
        "difficulty": "medium",
        "explanation": "String.valueOf(chars) creates a new string containing the characters from the array. The array has 5 characters, so the resulting string has a length of 5.",
        "hint": "Count the number of characters in the array."
    },

    // Exception Handling
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following is the parent class for all exceptions in Java?",
        "options": ["Error", "RuntimeException", "Exception", "Throwable"],
        "correctOptionIndex": 3,
        "correctOptionText": "Throwable",
        "difficulty": "medium",
        "explanation": "In Java, Throwable is the parent class of all errors and exceptions. Both Exception and Error classes inherit from Throwable, making it the root of the exception hierarchy.",
        "hint": "Look for the class at the top of Java's exception hierarchy."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is the difference between checked and unchecked exceptions in Java?",
        "options": [
        "Checked exceptions are caught at compile time, unchecked at runtime",
        "Checked exceptions extend RuntimeException, unchecked extend Exception",
        "Checked exceptions must be handled explicitly, unchecked don't require explicit handling",
        "Checked exceptions occur during normal program execution, unchecked during abnormal conditions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Checked exceptions must be handled explicitly, unchecked don't require explicit handling",
        "difficulty": "medium",
        "explanation": "Checked exceptions must be either caught in a try-catch block or declared in the method's throws clause. Unchecked exceptions (subclasses of RuntimeException or Error) don't require explicit handling, though they can be caught if needed.",
        "hint": "Think about which exceptions the compiler forces you to address."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which exception is thrown when you try to access an array element with an index that is out of bounds?",
        "options": ["IndexOutOfBoundsException", "ArrayIndexOutOfBoundsException", "IllegalArgumentException", "InvalidIndexException"],
        "correctOptionIndex": 1,
        "correctOptionText": "ArrayIndexOutOfBoundsException",
        "difficulty": "easy",
        "explanation": "ArrayIndexOutOfBoundsException is thrown when an array is accessed with an illegal index. The index is either negative or greater than or equal to the size of the array.",
        "hint": "This is a specific subclass of IndexOutOfBoundsException for array operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What will be the output of the following code?\n```java\ntry {\n    int[] numbers = {1, 2, 3};\n    System.out.println(numbers[5]);\n} catch (Exception e) {\n    System.out.println(\"Exception caught\");\n} finally {\n    System.out.println(\"Finally block executed\");\n}\n```",
        "options": [
        "Exception caught",
        "Finally block executed",
        "Exception caught\nFinally block executed",
        "ArrayIndexOutOfBoundsException"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Exception caught\nFinally block executed",
        "difficulty": "easy",
        "explanation": "When the code tries to access numbers[5], it throws an ArrayIndexOutOfBoundsException, which is caught by the catch block that prints 'Exception caught'. The finally block always executes, regardless of whether an exception is thrown, so it prints 'Finally block executed' afterward.",
        "hint": "Consider the order of execution in a try-catch-finally block when an exception occurs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following is a checked exception in Java?",
        "options": ["NullPointerException", "ArrayIndexOutOfBoundsException", "IOException", "ArithmeticException"],
        "correctOptionIndex": 2,
        "correctOptionText": "IOException",
        "difficulty": "medium",
        "explanation": "IOException is a checked exception, meaning it must be either caught or declared. The other options (NullPointerException, ArrayIndexOutOfBoundsException, and ArithmeticException) are all unchecked exceptions that extend RuntimeException.",
        "hint": "Look for the exception that doesn't extend RuntimeException."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is the purpose of the 'finally' block in Java exception handling?",
        "options": [
        "To handle exceptions that weren't caught in the catch block",
        "To ensure certain code is always executed, regardless of whether an exception occurs",
        "To finalize object cleanup for garbage collection",
        "To terminate the program after exception handling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To ensure certain code is always executed, regardless of whether an exception occurs",
        "difficulty": "easy",
        "explanation": "The finally block in Java is used to execute code that must happen regardless of whether an exception is thrown or caught. It's commonly used for cleanup operations like closing resources that should occur no matter what.",
        "hint": "The finally block executes even if an exception is thrown and not caught or if a return statement is executed in the try or catch block."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What happens if an exception occurs in the 'finally' block?",
        "options": [
        "It is automatically caught and suppressed",
        "It overrides any exception that was thrown in the try block",
        "It is added to a suppressed exceptions list of the original exception",
        "It propagates up the call stack and any exception from the try block is lost"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "It propagates up the call stack and any exception from the try block is lost",
        "difficulty": "hard",
        "explanation": "If an exception is thrown in the finally block, it will propagate up the call stack. If there was an exception thrown in the try block that was to be propagated, it gets lost, and only the exception from the finally block propagates up.",
        "hint": "When two exceptions occur (one in try and one in finally), only one can propagate."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What will be output when this code is executed?\n```java\ntry {\n    System.out.println(\"Try block\");\n    return;\n} catch (Exception e) {\n    System.out.println(\"Catch block\");\n} finally {\n    System.out.println(\"Finally block\");\n}\n```",
        "options": [
        "Try block",
        "Try block\nCatch block",
        "Try block\nFinally block",
        "Try block\nCatch block\nFinally block"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Try block\nFinally block",
        "difficulty": "medium",
        "explanation": "The try block executes and prints 'Try block'. Then it hits the return statement, but before returning, the finally block executes and prints 'Finally block'. The catch block is not executed because no exception was thrown.",
        "hint": "The finally block executes even if a return statement is encountered in the try block."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following is correct about the 'throws' clause in Java?",
        "options": [
        "It is used to manually throw an exception",
        "It declares the exceptions that a method might throw",
        "It must be followed by a catch block",
        "It handles exceptions thrown by the method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It declares the exceptions that a method might throw",
        "difficulty": "easy",
        "explanation": "The 'throws' clause in a method declaration lists the exceptions that the method might throw. It doesn't handle these exceptions; it simply declares that the method might throw them, and callers need to handle them.",
        "hint": "Think about the difference between 'throws' and 'throw' keywords."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is the output of the following code?\n```java\ntry {\n    int result = 10 / 0;\n    System.out.println(\"Result: \" + result);\n} catch (ArithmeticException e) {\n    System.out.println(\"Arithmetic Exception\");\n} catch (Exception e) {\n    System.out.println(\"Exception\");\n}\n```",
        "options": [
        "Result: Infinity",
        "Arithmetic Exception",
        "Exception",
        "Error: Division by zero"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Arithmetic Exception",
        "difficulty": "easy",
        "explanation": "Dividing by zero in Java throws an ArithmeticException. Since this specific exception is caught in the first catch block, 'Arithmetic Exception' is printed. The second catch block is not executed since the exception has already been caught.",
        "hint": "When multiple catch blocks are present, they are checked in order, and the first matching one is executed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is the correct way to manually throw an exception in Java?",
        "options": [
        "throws new Exception();",
        "throw Exception();",
        "throw new Exception();",
        "throws Exception();"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "throw new Exception();",
        "difficulty": "easy",
        "explanation": "To throw an exception manually in Java, you use the 'throw' keyword followed by a new instance of an exception class. The correct syntax is 'throw new Exception();'.",
        "hint": "The 'throw' keyword is used to throw an exception, while 'throws' is used in method declarations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following exception types should be avoided in custom exception classes according to best practices?",
        "options": [
        "Checked exceptions",
        "Unchecked exceptions",
        "Runtime exceptions",
        "None of the above"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Checked exceptions",
        "difficulty": "hard",
        "explanation": "According to modern Java best practices, checked exceptions should generally be avoided in custom exception classes because they force callers to handle or declare exceptions, which can lead to bloated code and exception catching without proper handling. Unchecked exceptions (subclasses of RuntimeException) are preferred for most application-specific exceptions.",
        "hint": "Consider which type of exception requires explicit handling and how that affects code maintainability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is the primary difference between Error and Exception in Java?",
        "options": [
        "Errors occur at compile time, exceptions occur at runtime",
        "Errors are checked, exceptions are unchecked",
        "Errors represent conditions that should not be caught, exceptions represent conditions that might be caught",
        "Errors can't be caught in try-catch blocks, exceptions can"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Errors represent conditions that should not be caught, exceptions represent conditions that might be caught",
        "difficulty": "medium",
        "explanation": "In Java, Error represents serious, typically unrecoverable conditions like OutOfMemoryError that should not normally be caught and handled by applications. Exceptions, on the other hand, represent conditions that applications might want to catch and handle, such as IOException or NullPointerException.",
        "hint": "Think about the intended usage of Error versus Exception in application code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which statement about the Java try-with-resources statement is correct?",
        "options": [
        "It automatically closes resources even if they're not AutoCloseable",
        "It replaces the need for catch blocks completely",
        "It automatically closes resources that implement the AutoCloseable interface",
        "It must be followed by a finally block"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It automatically closes resources that implement the AutoCloseable interface",
        "difficulty": "medium",
        "explanation": "The try-with-resources statement in Java automatically closes resources that implement the AutoCloseable or Closeable interface when they go out of scope. This eliminates the need for explicit resource closing in finally blocks, reducing boilerplate code and ensuring resources are properly closed.",
        "hint": "The resources in a try-with-resources statement must implement a specific interface to be automatically closeable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What will be the output of the following code?\n```java\ntry {\n    try {\n        throw new ArithmeticException(\"Inner\");\n    } finally {\n        System.out.println(\"Inner finally\");\n    }\n} catch (Exception e) {\n    System.out.println(\"Outer catch\");\n} finally {\n    System.out.println(\"Outer finally\");\n}\n```",
        "options": [
        "Inner finally",
        "Inner finally\nOuter catch\nOuter finally",
        "Outer catch\nOuter finally",
        "Inner finally\nOuter finally"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Inner finally\nOuter catch\nOuter finally",
        "difficulty": "hard",
        "explanation": "The inner try block throws an ArithmeticException. Before this exception propagates up, the inner finally block executes, printing 'Inner finally'. Then the exception is caught by the outer catch block, which prints 'Outer catch'. Finally, the outer finally block executes, printing 'Outer finally'.",
        "hint": "Follow the flow of execution with nested try-catch-finally blocks when an exception is thrown."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following is true about the multi-catch feature introduced in Java 7?",
        "options": [
        "It allows catching multiple exception types in a single catch block with different handlers",
        "It allows catching multiple exception types in a single catch block with the same handler",
        "It allows nesting multiple catch blocks within each other",
        "It automatically handles all exceptions without explicit catch blocks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It allows catching multiple exception types in a single catch block with the same handler",
        "difficulty": "medium",
        "explanation": "The multi-catch feature introduced in Java 7 allows catching multiple exception types in a single catch block with the same handler, reducing code duplication. The syntax is 'catch (ExceptionType1 | ExceptionType2 | ... e)'.",
        "hint": "This feature is useful when you want to perform the same recovery action for different types of exceptions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is the output of the following code?\n```java\ntry {\n    String str = null;\n    System.out.println(str.length());\n} catch (NullPointerException e) {\n    System.out.println(\"A\");\n} catch (RuntimeException e) {\n    System.out.println(\"B\");\n} catch (Exception e) {\n    System.out.println(\"C\");\n}\n```",
        "options": ["A", "B", "C", "Compilation error"],
        "correctOptionIndex": 0,
        "correctOptionText": "A",
        "difficulty": "medium",
        "explanation": "Trying to call a method on a null object (str.length()) throws a NullPointerException, which is caught by the first catch block that prints 'A'. Although NullPointerException is also a RuntimeException and an Exception, only the first matching catch block is executed.",
        "hint": "In multiple catch blocks, the order matters. The most specific exception types should come first."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following is NOT a method of the Throwable class in Java?",
        "options": ["getMessage()", "printStackTrace()", "getStackTrace()", "throwAgain()"],
        "correctOptionIndex": 3,
        "correctOptionText": "throwAgain()",
        "difficulty": "medium",
        "explanation": "The Throwable class provides methods like getMessage() to get the detail message, printStackTrace() to print the stack trace, and getStackTrace() to get the stack trace as an array of StackTraceElement objects. There is no method called throwAgain() in the Throwable class.",
        "hint": "Look for the method that doesn't exist in the standard Java exception handling API."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What will happen if you don't catch a checked exception or declare it in the throws clause?",
        "options": [
        "The code will run but might throw a runtime exception",
        "The code will run without issues",
        "The code will not compile",
        "The JVM will automatically handle the exception"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The code will not compile",
        "difficulty": "easy",
        "explanation": "In Java, checked exceptions must be either caught in a try-catch block or declared in the method's throws clause. If you do neither, the code will not compile. This is a compile-time enforcement mechanism to ensure that potential exceptions are handled appropriately.",
        "hint": "Checked exceptions in Java are verified at compile time, not at runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is the advantage of using a custom exception in Java?",
        "options": [
        "It always performs better than standard exceptions",
        "It provides more meaningful information about the error specific to your application",
        "It automatically handles resource cleanup",
        "It bypasses the need for try-catch blocks"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It provides more meaningful information about the error specific to your application",
        "difficulty": "medium",
        "explanation": "Custom exceptions in Java allow you to create exception types that are specific to your application domain, providing more meaningful error reporting. They can carry additional context information about the error and make exception handling more descriptive and precise.",
        "hint": "Think about how domain-specific exceptions can improve code readability and error diagnosis."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What's wrong with the following exception handling code?\n```java\ntry {\n    // Some code that might throw exceptions\n} catch (Exception e) {\n    // Handle exception\n} catch (IOException e) {\n    // Handle IO exception\n}\n```",
        "options": [
        "You cannot have multiple catch blocks",
        "The catch blocks should be in the opposite order",
        "The more specific exception (IOException) is unreachable because it comes after the more general Exception",
        "The code will throw a RuntimeException at execution"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The more specific exception (IOException) is unreachable because it comes after the more general Exception",
        "difficulty": "medium",
        "explanation": "In Java, catch blocks are evaluated in order. Since IOException is a subclass of Exception, the first catch block (catching Exception) will catch all IOExceptions before the second catch block has a chance to execute. This makes the second catch block unreachable, resulting in a compilation error.",
        "hint": "Order matters in catch blocks. More specific exceptions should come before more general ones."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following exception handling features was introduced in Java 7?",
        "options": [
        "The try-finally block",
        "The try-with-resources statement",
        "The multi-level catch block",
        "The checked exceptions concept"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The try-with-resources statement",
        "difficulty": "medium",
        "explanation": "The try-with-resources statement was introduced in Java 7. It provides a cleaner way to handle resources that need to be closed after use, such as file streams or database connections. Resources declared in the try statement are automatically closed at the end of the statement.",
        "hint": "This feature helps prevent resource leaks by automatically closing resources that implement AutoCloseable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What happens when an exception is thrown from a catch block in Java?",
        "options": [
        "It is automatically suppressed",
        "It is caught by the same catch block recursively",
        "It propagates up the call stack",
        "The program terminates immediately"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It propagates up the call stack",
        "difficulty": "medium",
        "explanation": "If an exception is thrown from within a catch block, it propagates up the call stack just like any other exception. It's not caught by the catch block that threw it, as that would create an infinite loop. If there's a finally block, it will execute before the exception propagates.",
        "hint": "Exceptions thrown in catch blocks behave just like exceptions thrown anywhere else in your code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What does the following code print?\n```java\ntry {\n    try {\n        throw new Exception(\"Inner\");\n    } catch (Exception e) {\n        System.out.println(\"Inner catch\");\n        throw e;\n    }\n} catch (Exception e) {\n    System.out.println(\"Outer catch\");\n}\n```",
        "options": [
        "Inner catch",
        "Outer catch",
        "Inner catch\nOuter catch",
        "Compilation error"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Inner catch\nOuter catch",
        "difficulty": "hard",
        "explanation": "The inner try block throws an Exception, which is caught by its catch block that prints 'Inner catch'. Then, the caught exception is re-thrown with 'throw e;', which is then caught by the outer catch block that prints 'Outer catch'.",
        "hint": "Follow the exception as it's caught, re-thrown, and caught again."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is exception chaining in Java?",
        "options": [
        "Catching multiple exceptions in a chain of catch blocks",
        "Handling exceptions in multiple threads simultaneously",
        "Wrapping a lower-level exception in a higher-level exception to preserve the stack trace",
        "Creating a custom chain of exception handling methods"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Wrapping a lower-level exception in a higher-level exception to preserve the stack trace",
        "difficulty": "hard",
        "explanation": "Exception chaining in Java involves wrapping a lower-level exception (the cause) inside a higher-level exception that provides more context. This preserves the original stack trace and exception information while allowing you to throw an exception that's more appropriate for your abstraction level. It's done using constructors that take a 'cause' parameter or the initCause() method.",
        "hint": "This technique helps maintain the full context of what went wrong while presenting exceptions at the appropriate abstraction level."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following statements about the 'throws' and 'throw' keywords is correct?",
        "options": [
        "They are interchangeable and can be used for the same purpose",
        "'throws' is used at method level to declare exceptions, 'throw' is used to actually throw an exception",
        "'throws' is used to throw exceptions, 'throw' is used to catch exceptions",
        "'throws' is for checked exceptions, 'throw' is for unchecked exceptions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "'throws' is used at method level to declare exceptions, 'throw' is used to actually throw an exception",
        "difficulty": "easy",
        "explanation": "In Java, the 'throws' keyword is used in method declarations to specify which exceptions the method might throw, allowing callers to prepare for them. The 'throw' keyword is used inside a method to actually throw an exception when an error condition is detected.",
        "hint": "One is used in method signatures, the other is used in the method body."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What will be the result of trying to compile and run the following code?\n```java\npublic class ExceptionTest {\n    public static void main(String[] args) {\n        try {\n            throw new Exception();\n        } finally {\n            System.out.println(\"Finally block\");\n        }\n    }\n}\n```",
        "options": [
        "It will compile and print 'Finally block'",
        "It will not compile because the exception is not caught",
        "It will compile but throw an uncaught exception after printing 'Finally block'",
        "It will compile but not print anything"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It will not compile because the exception is not caught",
        "difficulty": "medium",
        "explanation": "This code will not compile because it throws a checked exception (Exception) without either catching it or declaring it in the method's throws clause. The finally block alone is not sufficient; you must either add a catch block or add 'throws Exception' to the main method declaration.",
        "hint": "Remember that checked exceptions must be either caught or declared."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What is the correct way to implement a custom checked exception in Java?",
        "options": [
        "public class MyException implements Exception { }",
        "public class MyException { }",
        "public class MyException extends RuntimeException { }",
        "public class MyException extends Exception { }"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "public class MyException extends Exception { }",
        "difficulty": "medium",
        "explanation": "To create a custom checked exception in Java, you should extend the Exception class. This will create an exception that must be either caught or declared in the throws clause. Extending RuntimeException would create an unchecked exception, which doesn't require explicit handling.",
        "hint": "Checked exceptions all derive from Exception (but not RuntimeException)."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "Which of the following is NOT a benefit of using the try-with-resources statement?",
        "options": [
        "Automatic resource closing",
        "Cleaner code with less boilerplate",
        "Proper handling of exceptions during resource closing",
        "Ability to catch exceptions that occur in other catch blocks"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Ability to catch exceptions that occur in other catch blocks",
        "difficulty": "hard",
        "explanation": "The try-with-resources statement provides automatic resource closing, reduces boilerplate code, and properly handles exceptions that might occur during resource closing (by suppressing them if a primary exception was thrown). However, it doesn't provide any special ability to catch exceptions from other catch blocks; that's not its purpose.",
        "hint": "Think about what problem try-with-resources was specifically designed to solve."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What does the 'getSuppressed()' method introduced in Java 7 do?",
        "options": [
        "Returns exceptions that were suppressed by the programmer",
        "Returns exceptions that were specifically ignored in the code",
        "Returns exceptions that occurred in a try-with-resources statement while closing resources",
        "Returns exceptions that were caught but not properly handled"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Returns exceptions that occurred in a try-with-resources statement while closing resources",
        "difficulty": "hard",
        "explanation": "The getSuppressed() method, added to Throwable in Java 7, returns an array of exceptions that were suppressed in order to deliver the primary exception. This typically happens in a try-with-resources statement when an exception is thrown in the try block and another exception is thrown while closing resources. The primary exception is thrown, and the additional exceptions are 'suppressed' but accessible via this method.",
        "hint": "This feature is primarily used with the try-with-resources statement to preserve information about all exceptions that occurred."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Exception Handling",
        "questionText": "What will be the output of the following code?\n```java\ntry {\n    System.out.println(\"A\");\n    System.exit(0);\n} finally {\n    System.out.println(\"B\");\n}\n```",
        "options": ["A", "B", "A followed by B", "Nothing, the program terminates before printing"],
        "correctOptionIndex": 0,
        "correctOptionText": "A",
        "difficulty": "medium",
        "explanation": "This code will print 'A' and then terminate immediately because of System.exit(0), which shuts down the JVM. The finally block will not execute in this case, as System.exit() terminates the program immediately without allowing any further code execution, including finally blocks.",
        "hint": "System.exit() is a special case that bypasses normal exception handling rules."
    },

    // Java Collections Framework

    // Multithreading

    // File I/O

    // Java GUI Programming

    // JDBC & Database Connectivity

    // Java Generics

    // Lambda Expressions & Streams

    // Java Networking
    
    // Java APIs & Libraries

    // Web Development with Java
  ]

export default JavaQuestions;