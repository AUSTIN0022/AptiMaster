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
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which interface is the root of the collection hierarchy in Java?",
        "options": ["List", "Collection", "Set", "Map"],
        "correctOptionIndex": 1,
        "correctOptionText": "Collection",
        "difficulty": "easy",
        "explanation": "The Collection interface is the root interface of the Java collections framework hierarchy (with the exception of Map). All collection classes either directly or indirectly implement this interface.",
        "hint": "Think about the most basic interface that other collection types extend."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which of the following does NOT implement the List interface?",
        "options": ["ArrayList", "LinkedList", "Vector", "HashSet"],
        "correctOptionIndex": 3,
        "correctOptionText": "HashSet",
        "difficulty": "easy",
        "explanation": "HashSet is an implementation of the Set interface, not the List interface. ArrayList, LinkedList, and Vector all implement the List interface.",
        "hint": "Consider which collection type doesn't maintain insertion order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which collection type allows duplicate elements and maintains insertion order?",
        "options": ["HashSet", "TreeSet", "ArrayList", "HashMap"],
        "correctOptionIndex": 2,
        "correctOptionText": "ArrayList",
        "difficulty": "easy",
        "explanation": "ArrayList implements the List interface, which allows duplicate elements and maintains insertion order. HashSet and TreeSet implement Set, which doesn't allow duplicates, and HashMap is a Map implementation that doesn't maintain insertion order.",
        "hint": "Think about which data structure is ordered by index and can have the same element multiple times."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the time complexity of adding an element to an ArrayList?",
        "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        "correctOptionIndex": 0,
        "correctOptionText": "O(1)",
        "difficulty": "medium",
        "explanation": "Adding an element to the end of an ArrayList has an amortized time complexity of O(1). However, if the internal array needs to be resized or if the element is added at a specific position, it can be O(n).",
        "hint": "Consider the normal case of adding to the end of an ArrayList without resizing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which of the following collections maintains its elements in sorted order?",
        "options": ["ArrayList", "HashSet", "LinkedHashSet", "TreeSet"],
        "correctOptionIndex": 3,
        "correctOptionText": "TreeSet",
        "difficulty": "easy",
        "explanation": "TreeSet uses a Red-Black tree implementation and maintains its elements in natural ordering or according to a provided Comparator.",
        "hint": "The name of this collection indicates its tree-based structure, which naturally sorts elements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which method is used to get the number of elements in a collection?",
        "options": ["length()", "count()", "size()", "capacity()"],
        "correctOptionIndex": 2,
        "correctOptionText": "size()",
        "difficulty": "easy",
        "explanation": "The size() method is defined in the Collection interface and returns the number of elements in the collection.",
        "hint": "This method is common across all Collection implementations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What interface must a class implement to be used as a key in a HashMap?",
        "options": ["Comparable", "Serializable", "Cloneable", "None of these"],
        "correctOptionIndex": 3,
        "correctOptionText": "None of these",
        "difficulty": "medium",
        "explanation": "A class doesn't need to implement any special interface to be used as a key in a HashMap, but it should properly override the hashCode() and equals() methods from Object class for correct behavior.",
        "hint": "Think about what methods are important when using an object as a key in a hash-based structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which collection implementation is best for frequent insertions and deletions in the middle of the list?",
        "options": ["ArrayList", "LinkedList", "Vector", "CopyOnWriteArrayList"],
        "correctOptionIndex": 1,
        "correctOptionText": "LinkedList",
        "difficulty": "medium",
        "explanation": "LinkedList is implemented as a doubly linked list, making insertions and deletions in the middle of the list more efficient (O(1) once the position is found) compared to ArrayList which requires shifting elements.",
        "hint": "Consider which data structure doesn't need to shift elements when inserting or removing from the middle."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What collection would be most appropriate for implementing a FIFO (First-In-First-Out) data structure?",
        "options": ["Stack", "TreeSet", "PriorityQueue", "LinkedList"],
        "correctOptionIndex": 3,
        "correctOptionText": "LinkedList",
        "difficulty": "medium",
        "explanation": "LinkedList can be used to implement a Queue (FIFO) as it implements the Queue interface, offering methods like offer(), poll(), and peek() for queue operations.",
        "hint": "This collection implements both List and Queue interfaces."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which of the following is NOT a method in the Map interface?",
        "options": ["put()", "get()", "remove()", "add()"],
        "correctOptionIndex": 3,
        "correctOptionText": "add()",
        "difficulty": "easy",
        "explanation": "The add() method is not part of the Map interface. Maps use put() to add key-value pairs. The add() method is found in the Collection interface.",
        "hint": "Consider how elements are inserted into a Map versus a Collection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which collection implementation is synchronized by default?",
        "options": ["ArrayList", "HashMap", "HashSet", "Vector"],
        "correctOptionIndex": 3,
        "correctOptionText": "Vector",
        "difficulty": "medium",
        "explanation": "Vector is a legacy class that is synchronized by default, making it thread-safe but potentially less efficient than ArrayList in single-threaded scenarios.",
        "hint": "This is one of the original collection classes from Java 1.0, before the Collections Framework was introduced."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is returned by the put() method in Map when adding a new key-value pair?",
        "options": ["The new value", "The key", "null", "The previous value associated with the key"],
        "correctOptionIndex": 3,
        "correctOptionText": "The previous value associated with the key",
        "difficulty": "medium",
        "explanation": "The put() method returns the previous value associated with the key, or null if there was no mapping for the key.",
        "hint": "Consider what information might be useful to return when replacing an existing value."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which collection type should be used to eliminate duplicate elements and maintain insertion order?",
        "options": ["ArrayList", "HashSet", "LinkedHashSet", "TreeSet"],
        "correctOptionIndex": 2,
        "correctOptionText": "LinkedHashSet",
        "difficulty": "medium",
        "explanation": "LinkedHashSet combines the features of HashSet (no duplicates) with a linked list to maintain insertion order.",
        "hint": "This collection combines properties of a hash table with linked list functionality."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What class provides static utility methods for collections, such as sorting and searching?",
        "options": ["Collections", "Collection", "Arrays", "CollectionUtils"],
        "correctOptionIndex": 0,
        "correctOptionText": "Collections",
        "difficulty": "easy",
        "explanation": "The Collections class provides static methods for operating on collections, such as sort(), binarySearch(), shuffle(), etc.",
        "hint": "This utility class has a plural name, similar to Arrays for array operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which interface defines the functionality of a data structure that can be processed in LIFO (Last-In-First-Out) order?",
        "options": ["Queue", "Deque", "Stack", "List"],
        "correctOptionIndex": 1,
        "correctOptionText": "Deque",
        "difficulty": "medium",
        "explanation": "While Stack is a class that implements LIFO functionality, the modern approach is to use the Deque interface (often with ArrayDeque implementation), which provides methods like push(), pop(), and peek() for stack operations.",
        "hint": "This interface supports both stack and queue operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What happens when you try to add null to a TreeSet?",
        "options": ["It's added like any other element", "It's ignored", "NullPointerException is thrown", "ClassCastException is thrown"],
        "correctOptionIndex": 2,
        "correctOptionText": "NullPointerException is thrown",
        "difficulty": "medium",
        "explanation": "TreeSet doesn't allow null elements because it needs to compare elements for ordering using compareTo() or a Comparator, which would cause a NullPointerException.",
        "hint": "Think about how the TreeSet orders its elements and what happens when comparing with null."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which collection provides the highest performance for traversal operations?",
        "options": ["LinkedList", "ArrayList", "HashSet", "TreeSet"],
        "correctOptionIndex": 1,
        "correctOptionText": "ArrayList",
        "difficulty": "medium",
        "explanation": "ArrayList provides the highest performance for traversal operations because it offers direct access to elements via index and has excellent memory locality due to its array-based implementation.",
        "hint": "Think about which data structure provides sequential memory access for better cache performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which of the following allows you to convert a Collection to an array?",
        "options": ["toArray()", "asArray()", "convertToArray()", "arrayFrom()"],
        "correctOptionIndex": 0,
        "correctOptionText": "toArray()",
        "difficulty": "easy",
        "explanation": "The toArray() method is defined in the Collection interface and returns an array containing all of the elements in the collection.",
        "hint": "This method can be used with or without an argument to specify the array type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the primary advantage of ConcurrentHashMap over HashMap?",
        "options": ["It's faster for all operations", "It allows null keys", "It's thread-safe", "It maintains insertion order"],
        "correctOptionIndex": 2,
        "correctOptionText": "It's thread-safe",
        "difficulty": "medium",
        "explanation": "ConcurrentHashMap is designed for concurrent access from multiple threads, providing thread safety without locking the entire map when being accessed.",
        "hint": "Think about what 'Concurrent' in the name suggests about its intended use."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the difference between the Iterator and ListIterator interfaces?",
        "options": ["There is no difference", "ListIterator can only be used with List implementations", "Iterator allows forward traversal only, while ListIterator allows bidirectional traversal", "Iterator is thread-safe, ListIterator is not"],
        "correctOptionIndex": 2,
        "correctOptionText": "Iterator allows forward traversal only, while ListIterator allows bidirectional traversal",
        "difficulty": "medium",
        "explanation": "Iterator only provides forward traversal with methods like hasNext(), next(), and remove(). ListIterator extends Iterator and adds methods for bidirectional traversal like hasPrevious(), previous(), and also adds methods for adding and replacing elements.",
        "hint": "Consider what additional functionality might be useful when iterating specifically over a List."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which method is used to obtain a synchronized version of a collection?",
        "options": ["Collection.synchronize()", "Collections.synchronizedCollection()", "Collection.makeSynchronized()", "Collections.makeThreadSafe()"],
        "correctOptionIndex": 1,
        "correctOptionText": "Collections.synchronizedCollection()",
        "difficulty": "medium",
        "explanation": "The Collections utility class provides methods like synchronizedCollection(), synchronizedList(), synchronizedSet(), etc., to obtain synchronized (thread-safe) wrappers of collections.",
        "hint": "This is a static method in the utility class that provides various operations on collections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What happens if you try to add an element to an ArrayList beyond its capacity?",
        "options": ["An exception is thrown", "The element is not added", "The capacity is automatically increased", "The oldest element is removed"],
        "correctOptionIndex": 2,
        "correctOptionText": "The capacity is automatically increased",
        "difficulty": "easy",
        "explanation": "If an ArrayList reaches its capacity when adding a new element, it automatically increases its capacity (typically by 50%) by creating a new, larger internal array and copying the elements.",
        "hint": "Consider the dynamic nature of ArrayLists compared to regular arrays."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which of the following correctly creates an immutable List in Java?",
        "options": ["new ImmutableList<>()", "Collections.immutableList()", "List.of(1, 2, 3)", "new ConstantList<>()"],
        "correctOptionIndex": 2,
        "correctOptionText": "List.of(1, 2, 3)",
        "difficulty": "medium",
        "explanation": "Since Java 9, the List interface has factory methods like List.of() that create immutable lists. Attempting to modify these lists will result in an UnsupportedOperationException.",
        "hint": "This is a factory method introduced in Java 9 as part of the Collection interface enhancements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the purpose of the Collections.unmodifiableList() method?",
        "options": ["To prevent the list from growing", "To make the list thread-safe", "To create a read-only view of the list", "To improve performance"],
        "correctOptionIndex": 2,
        "correctOptionText": "To create a read-only view of the list",
        "difficulty": "medium",
        "explanation": "Collections.unmodifiableList() returns a read-only view of the specified list. Any attempt to modify the list through this view will throw an UnsupportedOperationException. However, changes to the underlying list will still be visible through the unmodifiable view.",
        "hint": "This method creates a wrapper that doesn't allow modifications but still reflects changes to the original list."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which map implementation maintains its entries in the order they were last accessed?",
        "options": ["HashMap", "TreeMap", "LinkedHashMap", "IdentityHashMap"],
        "correctOptionIndex": 2,
        "correctOptionText": "LinkedHashMap",
        "difficulty": "medium",
        "explanation": "LinkedHashMap can be configured with an access-order constructor parameter (true) to maintain entries in the order they were last accessed, making it suitable for implementing LRU (Least Recently Used) caches.",
        "hint": "This map has a special constructor parameter that allows it to reorder elements based on access patterns."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the time complexity of the contains() method in HashSet?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        "correctOptionIndex": 0,
        "correctOptionText": "O(1)",
        "difficulty": "medium",
        "explanation": "HashSet uses a hash table implementation, so the contains() method has an average time complexity of O(1) (constant time). In the worst case (many hash collisions), it could degrade to O(n).",
        "hint": "Consider the data structure behind HashSet and how elements are located."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which collection type is most suitable for implementing a priority-based task scheduler?",
        "options": ["ArrayList", "LinkedList", "PriorityQueue", "HashSet"],
        "correctOptionIndex": 2,
        "correctOptionText": "PriorityQueue",
        "difficulty": "medium",
        "explanation": "PriorityQueue is a queue implementation that orders elements according to their natural ordering or a provided Comparator. It's ideal for scenarios where you need to process elements based on priority.",
        "hint": "This queue automatically orders elements based on priority rather than insertion order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the key difference between HashMap and Hashtable?",
        "options": ["HashMap allows null keys and values, Hashtable doesn't", "HashMap is faster than Hashtable", "Hashtable is part of the Collections Framework, HashMap isn't", "There is no difference"],
        "correctOptionIndex": 0,
        "correctOptionText": "HashMap allows null keys and values, Hashtable doesn't",
        "difficulty": "medium",
        "explanation": "HashMap allows one null key and multiple null values, while Hashtable doesn't allow any null keys or values. Additionally, Hashtable is synchronized (thread-safe), while HashMap is not. Hashtable is considered legacy, with ConcurrentHashMap being the preferred choice for thread-safe operations.",
        "hint": "Consider the behavior when attempting to store null values in these collections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the output of the following code?\n```java\nArrayList<String> list = new ArrayList<>();\nlist.add(\"A\");\nlist.add(\"B\");\nlist.add(1, \"C\");\nSystem.out.println(list);\n```",
        "options": ["[A, B, C]", "[A, C, B]", "[C, A, B]", "Compilation error"],
        "correctOptionIndex": 1,
        "correctOptionText": "[A, C, B]",
        "difficulty": "medium",
        "explanation": "The add(int index, E element) method inserts the element at the specified position, shifting the subsequent elements to the right. In this case, 'C' is inserted at index 1 (between 'A' and 'B'), resulting in [A, C, B].",
        "hint": "Think about what happens when you insert an element at a specific index in a list."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which method would you use to remove all elements from a collection?",
        "options": ["deleteAll()", "removeAll()", "clear()", "empty()"],
        "correctOptionIndex": 2,
        "correctOptionText": "clear()",
        "difficulty": "easy",
        "explanation": "The clear() method removes all elements from a collection. It's defined in the Collection interface and implemented by all collection classes.",
        "hint": "This is a simple, commonly used method to empty a collection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What interface must a class implement to be used with TreeSet/TreeMap if no Comparator is provided?",
        "options": ["Comparable", "Comparator", "Serializable", "Cloneable"],
        "correctOptionIndex": 0,
        "correctOptionText": "Comparable",
        "difficulty": "medium",
        "explanation": "If no Comparator is provided when creating a TreeSet or TreeMap, the elements must implement the Comparable interface to establish a natural ordering. The compareTo() method is used to determine the order of elements.",
        "hint": "This interface defines a method for an object to compare itself with another object."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the purpose of the NavigableMap interface in Java?",
        "options": ["To provide GPS navigation functionality", "To retrieve the closest matches for given search targets", "To provide methods for navigating through GUI components", "To navigate hierarchical data structures"],
        "correctOptionIndex": 1,
        "correctOptionText": "To retrieve the closest matches for given search targets",
        "difficulty": "hard",
        "explanation": "NavigableMap is an extension of SortedMap that provides navigation methods for retrieving keys and entries closest to a target search key, such as lowerEntry(), floorEntry(), ceilingEntry(), and higherEntry().",
        "hint": "This interface enhances SortedMap with methods for finding the closest matches to a given key."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the default initial capacity of a HashMap?",
        "options": ["8", "10", "16", "32"],
        "correctOptionIndex": 2,
        "correctOptionText": "16",
        "difficulty": "medium",
        "explanation": "The default initial capacity of a HashMap is 16 entries. This can be overridden using a constructor that accepts a capacity parameter.",
        "hint": "This is a power of 2, which is important for the hash table implementation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which collection allows you to efficiently find the k-th largest element without fully sorting the data?",
        "options": ["TreeSet", "PriorityQueue", "ArrayList", "LinkedList"],
        "correctOptionIndex": 1,
        "correctOptionText": "PriorityQueue",
        "difficulty": "hard",
        "explanation": "PriorityQueue can be used to efficiently find the k-th largest element by creating a min-heap of size k. After processing all elements, the head of the queue will be the k-th largest element.",
        "hint": "This data structure maintains a partial ordering that's sufficient for finding extremal elements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What will happen if you try to add an element to a fixed-size list created with Arrays.asList()?",
        "options": ["The element will be added successfully", "The list will resize automatically", "UnsupportedOperationException will be thrown", "NullPointerException will be thrown"],
        "correctOptionIndex": 2,
        "correctOptionText": "UnsupportedOperationException will be thrown",
        "difficulty": "medium",
        "explanation": "Arrays.asList() returns a fixed-size list backed by the specified array. The returned list does not support add or remove operations; these operations will throw an UnsupportedOperationException.",
        "hint": "Think about the relationship between the returned list and the underlying array."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the fail-fast behavior in Java collections?",
        "options": ["Immediately stopping execution if an exception occurs", "Throwing an exception if a collection is modified during iteration", "Failing immediately on invalid input", "Preventing concurrent modifications"],
        "correctOptionIndex": 1,
        "correctOptionText": "Throwing an exception if a collection is modified during iteration",
        "difficulty": "medium",
        "explanation": "Fail-fast iterators throw a ConcurrentModificationException if the collection is modified during iteration, except through the iterator's own remove() method. This behavior is not guaranteed to occur but serves as an early warning system for concurrent modification issues.",
        "hint": "This behavior helps detect programming errors when using iterators."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the primary difference between LinkedHashSet and HashSet?",
        "options": ["LinkedHashSet allows duplicates, HashSet doesn't", "LinkedHashSet is thread-safe, HashSet isn't", "LinkedHashSet maintains insertion order, HashSet doesn't", "LinkedHashSet is faster for all operations"],
        "correctOptionIndex": 2,
        "correctOptionText": "LinkedHashSet maintains insertion order, HashSet doesn't",
        "difficulty": "medium",
        "explanation": "LinkedHashSet maintains the insertion order of elements using a linked list, while HashSet doesn't guarantee any specific order. Both are implementations of the Set interface and don't allow duplicates.",
        "hint": "Think about what the 'Linked' part of the name implies about this implementation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What does the following code output?\n```java\nSet<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3));\nSet<Integer> s2 = new HashSet<>(Arrays.asList(3, 4, 5));\ns1.retainAll(s2);\nSystem.out.println(s1);\n```",
        "options": ["[1, 2, 3]", "[3, 4, 5]", "[1, 2, 3, 4, 5]", "[3]"],
        "correctOptionIndex": 3,
        "correctOptionText": "[3]",
        "difficulty": "medium",
        "explanation": "The retainAll() method modifies the set s1 to retain only elements that are contained in the specified collection s2. In this case, the only common element between s1 and s2 is 3, so s1 becomes [3].",
        "hint": "This method implements the mathematical set intersection operation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "Which method can be used to replace all elements of a list with a specified value?",
        "options": ["replaceAll()", "fill()", "Collections.fill()", "Arrays.fill()"],
        "correctOptionIndex": 2,
        "correctOptionText": "Collections.fill()",
        "difficulty": "medium",
        "explanation": "The Collections.fill(List<? super T> list, T obj) method replaces all elements of the specified list with the specified element. It's a static utility method in the Collections class.",
        "hint": "This is a static utility method similar to Arrays.fill() but for collections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the load factor in HashMap?",
        "options": ["The maximum number of entries", "The ratio of entries to capacity", "The minimum capacity", "The growth rate"],
        "correctOptionIndex": 1,
        "correctOptionText": "The ratio of entries to capacity",
        "difficulty": "hard",
        "explanation": "The load factor is a measure of how full the hash table is allowed to get before its capacity is automatically increased. The default load factor is 0.75, meaning that when the number of entries reaches 75% of the capacity, the capacity is doubled.",
        "hint": "This parameter affects when the hash table is resized and its space-time tradeoffs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the implementation used by EnumSet for enum types with more than 64 constants?",
        "options": ["HashSet", "TreeSet", "JumboEnumSet", "RegularEnumSet"],
        "correctOptionIndex": 2,
        "correctOptionText": "JumboEnumSet",
        "difficulty": "hard",
        "explanation": "EnumSet uses RegularEnumSet for enum types with 64 or fewer constants (using a single long as a bit vector) and JumboEnumSet for enum types with more than 64 constants (using an array of longs as bit vectors).",
        "hint": "This implementation needs to handle a larger number of possible values than can fit in a single long."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Collections Framework",
        "questionText": "What is the purpose of the identity hash map in Java?",
        "options": ["To store user identities", "To use reference equality instead of object equality", "To provide unique identifiers for objects", "To map objects to their memory addresses"],
        "correctOptionIndex": 1,
        "correctOptionText": "To use reference equality instead of object equality",
        "difficulty": "hard",
        "explanation": "IdentityHashMap is a Map implementation that uses reference equality (==) instead of object equality (equals()) when comparing keys and values. This makes it useful for topology-preserving object graph transformations, like serialization or deep copying.",
        "hint": "This map implementation uses a different notion of equality than most other collections."
    },

    // Multithreading
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which of the following is the correct way to create a thread in Java?",
        "options": [
        "new Thread().start()",
        "new Thread().run()",
        "new Thread().execute()",
        "new Thread().begin()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "new Thread().start()",
        "difficulty": "easy",
        "explanation": "To create and start a thread in Java, you need to instantiate a Thread object and call its start() method. The start() method initiates the thread's execution, causing the JVM to call the thread's run() method.",
        "hint": "Remember that creating a thread and executing it are separate operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the difference between the start() and run() methods of the Thread class?",
        "options": [
        "start() creates a new thread, run() executes in the current thread",
        "run() creates a new thread, start() executes in the current thread",
        "start() and run() both create new threads",
        "There is no difference"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "start() creates a new thread, run() executes in the current thread",
        "difficulty": "easy",
        "explanation": "The start() method creates a new thread and calls the run() method in that new thread. If you call the run() method directly, it will execute in the current thread without creating a new one.",
        "hint": "Think about which method actually spawns a new thread of execution."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which of the following are ways to create a thread in Java?",
        "options": [
        "Extending the Thread class only",
        "Implementing the Runnable interface only",
        "Both extending Thread class and implementing Runnable interface",
        "Implementing the Callable interface only"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Both extending Thread class and implementing Runnable interface",
        "difficulty": "easy",
        "explanation": "In Java, you can create a thread either by extending the Thread class or by implementing the Runnable interface and passing it to a Thread constructor.",
        "hint": "Java offers multiple ways to define thread behavior."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the purpose of the synchronized keyword in Java?",
        "options": [
        "To increase thread execution speed",
        "To prevent multiple threads from simultaneously accessing a resource",
        "To force threads to execute in sequence",
        "To terminate thread execution"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To prevent multiple threads from simultaneously accessing a resource",
        "difficulty": "easy",
        "explanation": "The synchronized keyword in Java is used to control access to critical sections of code or shared resources. It ensures that only one thread can execute a synchronized method or block at a time, preventing race conditions.",
        "hint": "Think about thread safety and protecting shared resources."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What state is a thread in immediately after the start() method is called?",
        "options": [
        "Running",
        "Ready",
        "Waiting",
        "New"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ready",
        "difficulty": "medium",
        "explanation": "After calling start(), a thread moves from the New state to the Ready (or Runnable) state. In this state, the thread is ready to run but may not yet be running as it waits for the thread scheduler to select it for execution.",
        "hint": "Consider the thread lifecycle stages and what happens after a thread is started but before it gets CPU time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which method causes the currently executing thread to pause its execution for a specified period?",
        "options": [
        "wait()",
        "yield()",
        "sleep()",
        "join()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "sleep()",
        "difficulty": "easy",
        "explanation": "The Thread.sleep() method causes the currently executing thread to pause for a specified number of milliseconds, allowing other threads to execute. Unlike wait(), it doesn't release any locks the thread might hold.",
        "hint": "This method takes a time parameter in milliseconds."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is a race condition in multithreaded programming?",
        "options": [
        "When multiple threads compete to finish execution first",
        "When two or more threads access and modify shared data simultaneously",
        "When a thread runs faster than expected",
        "When threads are scheduled in a specific order"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "When two or more threads access and modify shared data simultaneously",
        "difficulty": "medium",
        "explanation": "A race condition occurs when multiple threads access and manipulate the same data concurrently, and the outcome depends on the relative timing of their execution. This can lead to unexpected and incorrect results if proper synchronization is not used.",
        "hint": "Think about what happens when threads compete for the same resource."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is a deadlock in Java multithreading?",
        "options": [
        "When a thread is waiting for a resource that will never be available",
        "When a thread enters an infinite loop",
        "When two or more threads are blocked forever, each waiting for the other to release a lock",
        "When a thread consumes too much CPU time"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "When two or more threads are blocked forever, each waiting for the other to release a lock",
        "difficulty": "medium",
        "explanation": "A deadlock occurs when two or more threads are blocked forever, waiting for each other to release locks. For example, if Thread A holds Resource 1 and waits for Resource 2, while Thread B holds Resource 2 and waits for Resource 1, neither can proceed.",
        "hint": "Think about a circular waiting condition between threads."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which of the following methods belongs to the Object class and is used for thread synchronization?",
        "options": [
        "sleep()",
        "notify()",
        "start()",
        "join()"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "notify()",
        "difficulty": "medium",
        "explanation": "The notify() method belongs to the Object class, not the Thread class. It's used to wake up a single thread that's waiting on the object's monitor. Other thread synchronization methods from the Object class include wait() and notifyAll().",
        "hint": "This method is used to signal waiting threads from within a synchronized context."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What does the join() method do in Java threading?",
        "options": [
        "Combines two threads into one",
        "Makes two threads share the same resources",
        "Makes the current thread wait until the thread it is called on completes",
        "Adds a thread to a thread group"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Makes the current thread wait until the thread it is called on completes",
        "difficulty": "medium",
        "explanation": "The join() method causes the current thread to pause its execution until the thread it is called on completes. This is useful when you need to ensure that one thread finishes before another thread proceeds.",
        "hint": "Think about waiting for another thread's completion."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the difference between a daemon thread and a user thread in Java?",
        "options": [
        "Daemon threads have higher priority than user threads",
        "User threads always execute before daemon threads",
        "The JVM exits when all user threads complete, regardless of daemon threads",
        "Daemon threads cannot be interrupted"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The JVM exits when all user threads complete, regardless of daemon threads",
        "difficulty": "medium",
        "explanation": "The main difference between daemon and user threads is that the JVM will exit when all user threads have completed, even if daemon threads are still running. Daemon threads are typically used for background tasks that should not prevent the application from terminating.",
        "hint": "Think about the behavior of the JVM when it's shutting down."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "How do you mark a thread as a daemon thread in Java?",
        "options": [
        "thread.setDaemon(false);",
        "thread.makeDaemon();",
        "thread.setDaemon(true);",
        "Thread.currentThread().setDaemon(true);"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "thread.setDaemon(true);",
        "difficulty": "easy",
        "explanation": "To mark a thread as a daemon thread, call setDaemon(true) on the Thread object before starting it. Once a thread is started, you cannot change its daemon status.",
        "hint": "This method must be called before the thread is started."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which of the following correctly describes the volatile keyword in Java?",
        "options": [
        "It makes a variable immutable",
        "It ensures that a variable is stored in main memory, not in CPU cache",
        "It creates thread-local variables",
        "It prevents a variable from being garbage collected"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It ensures that a variable is stored in main memory, not in CPU cache",
        "difficulty": "medium",
        "explanation": "The volatile keyword in Java ensures that a variable is always read from and written to main memory, not from thread-local CPU caches. This guarantees visibility of changes to the variable across threads but does not provide atomicity for operations.",
        "hint": "Think about memory visibility between threads."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What can happen if you call wait() without holding the object's lock?",
        "options": [
        "Nothing, it works fine",
        "The thread will wait indefinitely",
        "An IllegalMonitorStateException will be thrown",
        "The thread will be terminated"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An IllegalMonitorStateException will be thrown",
        "difficulty": "medium",
        "explanation": "Calling wait(), notify(), or notifyAll() without holding the lock on the object will result in an IllegalMonitorStateException. These methods must be called from within a synchronized block or method that synchronizes on the same object.",
        "hint": "These methods require the calling thread to own the object's monitor."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which of the following is NOT a valid thread state in Java?",
        "options": [
        "NEW",
        "EXECUTING",
        "WAITING",
        "BLOCKED"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "EXECUTING",
        "difficulty": "medium",
        "explanation": "In Java, the valid thread states are NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, and TERMINATED. There is no state called EXECUTING. The RUNNABLE state indicates that a thread is either running or ready to run.",
        "hint": "Check the constants in the Thread.State enum."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is thread starvation in Java?",
        "options": [
        "When a thread uses too much memory",
        "When a thread runs out of resources",
        "When a thread is unable to gain regular access to shared resources",
        "When a thread performs too many operations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "When a thread is unable to gain regular access to shared resources",
        "difficulty": "hard",
        "explanation": "Thread starvation occurs when a thread is unable to gain regular access to shared resources and is unable to make progress. This can happen when other threads hog a resource, perhaps due to scheduling or priority issues.",
        "hint": "Think about what happens when a thread can't get the resources it needs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the purpose of the ThreadLocal class in Java?",
        "options": [
        "To create thread-safe collections",
        "To provide thread-specific variables",
        "To manage thread pools",
        "To set thread priorities"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide thread-specific variables",
        "difficulty": "medium",
        "explanation": "ThreadLocal provides thread-local variables, which are variables that are local to each thread that accesses them. Each thread has its own, independently initialized copy of the variable, which is not shared between threads.",
        "hint": "Think about having separate instances of a variable for each thread."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the ExecutorService in Java?",
        "options": [
        "A class that manages thread execution in the background",
        "An interface that provides methods for managing thread termination",
        "A framework for asynchronous task execution",
        "A class that handles thread synchronization"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A framework for asynchronous task execution",
        "difficulty": "medium",
        "explanation": "ExecutorService is an interface in the java.util.concurrent package that provides methods for managing thread pools and executing asynchronous tasks. It separates the task submission from the mechanics of how each task will be run.",
        "hint": "This is part of the higher-level concurrency utilities in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which method is used to check if a thread is currently alive?",
        "options": [
        "thread.isActive()",
        "thread.isRunning()",
        "thread.isAlive()",
        "thread.status()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "thread.isAlive()",
        "difficulty": "easy",
        "explanation": "The isAlive() method of the Thread class tests if a thread is alive. A thread is alive if it has been started and has not yet died. It returns a boolean value: true if the thread is alive, false otherwise.",
        "hint": "This method returns true if the thread has started and hasn't yet terminated."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the Callable interface in Java multithreading?",
        "options": [
        "An interface similar to Runnable but can return results and throw exceptions",
        "An interface that defines methods for thread synchronization",
        "An interface for creating thread pools",
        "An interface that defines methods for thread interruption"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "An interface similar to Runnable but can return results and throw exceptions",
        "difficulty": "medium",
        "explanation": "The Callable interface is similar to Runnable, but its call() method can return a result and throw checked exceptions. Unlike Runnable's run() method which returns void, Callable's call() method returns a value of a specified type.",
        "hint": "Think about the limitations of Runnable and how Callable addresses them."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the difference between the CountDownLatch and CyclicBarrier classes?",
        "options": [
        "CountDownLatch can be reset, CyclicBarrier cannot",
        "CyclicBarrier can be reset, CountDownLatch cannot",
        "CountDownLatch is for multiple threads, CyclicBarrier is for a single thread",
        "There is no difference"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "CyclicBarrier can be reset, CountDownLatch cannot",
        "difficulty": "hard",
        "explanation": "The main difference is that CountDownLatch is a one-shot mechanism - once the count reaches zero, it cannot be reset. CyclicBarrier, on the other hand, can be reused after the waiting threads are released. It automatically resets once all parties have reached the barrier.",
        "hint": "Think about which one can be reused after all threads meet at the synchronization point."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What happens if you call the run() method directly instead of the start() method on a Thread object?",
        "options": [
        "It works the same as start()",
        "It executes in the current thread, not in a new thread",
        "It throws a RuntimeException",
        "The thread starts but with lower priority"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It executes in the current thread, not in a new thread",
        "difficulty": "easy",
        "explanation": "If you call run() directly on a Thread object, it will execute the run method in the current thread, not in a new thread. It will behave like a normal method call, not creating a new thread of execution.",
        "hint": "Consider which method actually creates a new thread context for execution."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is a thread pool in Java?",
        "options": [
        "A collection of Thread objects",
        "A group of threads that are executed sequentially",
        "A collection of reusable threads for executing tasks",
        "A synchronized data structure for threads"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A collection of reusable threads for executing tasks",
        "difficulty": "medium",
        "explanation": "A thread pool is a collection of worker threads that efficiently execute asynchronous tasks. Instead of creating a new thread for each task, tasks are submitted to the pool and executed by one of the available worker threads. This improves performance by reducing the overhead of thread creation.",
        "hint": "Think about resource reuse in multithreaded applications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which class should you use to create a thread pool in Java?",
        "options": [
        "ThreadPoolExecutor",
        "ThreadGroup",
        "Executors",
        "ThreadFactory"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Executors",
        "difficulty": "medium",
        "explanation": "The Executors class provides factory methods for creating different types of thread pools, such as fixed thread pools, cached thread pools, and scheduled thread pools. It's the most common way to create thread pools in Java.",
        "hint": "This utility class offers static factory methods for creating executor services."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the purpose of the wait() and notify() methods in Java?",
        "options": [
        "For thread termination",
        "For thread prioritization",
        "For thread synchronization and communication",
        "For thread grouping"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "For thread synchronization and communication",
        "difficulty": "medium",
        "explanation": "The wait() and notify() methods are used for thread synchronization and communication. The wait() method causes a thread to release the object's lock and wait until another thread calls notify() or notifyAll() on the same object. These methods are essential for implementing producer-consumer patterns.",
        "hint": "These methods allow threads to coordinate their actions by sending signals to each other."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is the difference between synchronized methods and synchronized blocks in Java?",
        "options": [
        "There is no difference",
        "Synchronized blocks are faster than synchronized methods",
        "Synchronized methods lock the entire object, while synchronized blocks can lock specific objects",
        "Synchronized blocks can only be used inside synchronized methods"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Synchronized methods lock the entire object, while synchronized blocks can lock specific objects",
        "difficulty": "hard",
        "explanation": "Synchronized methods implicitly lock the entire object (this reference for instance methods or the Class object for static methods). Synchronized blocks, on the other hand, allow you to specify exactly which object should be locked, providing more fine-grained locking control.",
        "hint": "Think about the granularity of the lock acquisition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is a CompletableFuture in Java?",
        "options": [
        "A thread scheduler",
        "A thread-safe data structure",
        "A class for asynchronous computation that can be composed with callbacks",
        "A type of thread pool"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A class for asynchronous computation that can be composed with callbacks",
        "difficulty": "hard",
        "explanation": "CompletableFuture is a class introduced in Java 8 that represents a future result of an asynchronous computation. Unlike Future, it can be explicitly completed and supports functional programming style with methods for composition, combining, and exception handling.",
        "hint": "Think about modern asynchronous programming paradigms in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What is a ReentrantLock in Java concurrency?",
        "options": [
        "A type of monitor that allows only one thread to enter",
        "A lock that automatically releases after a timeout",
        "A lock that can be acquired by the same thread multiple times",
        "A lock that cannot be interrupted"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A lock that can be acquired by the same thread multiple times",
        "difficulty": "hard",
        "explanation": "A ReentrantLock is a mutually exclusive lock with the same basic behavior as the implicit monitor lock accessed using synchronized code, but with extended capabilities. It can be acquired multiple times by the same thread (reentrant) and offers features like timed lock waits, interruptible lock waits, and fairness policies.",
        "hint": "The key is in the name - think about what 'reentrant' means."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "What does the AtomicInteger class provide in Java multithreading?",
        "options": [
        "A thread-safe way to share integer values between threads",
        "A way to make integers immutable",
        "A way to count the number of active threads",
        "A way to set thread priorities using integers"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A thread-safe way to share integer values between threads",
        "difficulty": "medium",
        "explanation": "AtomicInteger is a class that provides atomic operations on integer values, ensuring thread-safety without using synchronization. It uses compare-and-swap (CAS) operations for high-performance concurrent access and modification of the integer value.",
        "hint": "Think about operations that can be performed as a single, uninterruptible unit."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Multithreading",
        "questionText": "Which of the following is an example of a thread-safe collection in Java?",
        "options": [
        "ArrayList",
        "HashMap",
        "ConcurrentHashMap",
        "LinkedList"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "ConcurrentHashMap",
        "difficulty": "medium",
        "explanation": "ConcurrentHashMap is specifically designed to be thread-safe for concurrent access by multiple threads. Unlike Collections.synchronizedMap(), it achieves higher concurrency by using lock striping, allowing multiple threads to access different parts of the map simultaneously.",
        "hint": "Look for collections designed specifically for concurrent access."
    },

    // File I/O
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which class is used to create a file in Java?",
        "options": [
        "FileWriter",
        "File",
        "FileOutputStream",
        "BufferedWriter"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "File",
        "difficulty": "easy",
        "explanation": "The File class in Java represents a file or directory pathname. To create a new file, you can use the createNewFile() method of the File class. Note that this class doesn't handle the actual reading or writing of data to the file.",
        "hint": "This class represents abstract pathnames but doesn't handle reading/writing operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which of the following can be used to read data from a text file character by character?",
        "options": [
        "FileInputStream",
        "BufferedOutputStream",
        "FileReader",
        "DataInputStream"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "FileReader",
        "difficulty": "easy",
        "explanation": "FileReader is a character stream class used to read text from a file. It reads data character by character, which makes it suitable for reading text files. It's a convenience class for reading character files.",
        "hint": "Think about the different types of streams in Java - byte streams vs. character streams."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which of the following is NOT a valid file mode when opening a file using FileOutputStream?",
        "options": [
        "\"r\"",
        "\"w\"",
        "\"a\"",
        "None of the above"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "\"r\"",
        "difficulty": "medium",
        "explanation": "In Java, FileOutputStream doesn't use string mode parameters like \"r\", \"w\", or \"a\". Instead, it uses boolean parameters to specify if data should be appended to the file. The modes \"r\", \"w\", \"a\" are typically used in other programming languages or in higher-level Java classes like RandomAccessFile.",
        "hint": "Consider how Java specifies whether to append to a file or overwrite it when using FileOutputStream."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is the difference between FileInputStream and FileReader?",
        "options": [
        "FileInputStream is faster than FileReader",
        "FileInputStream reads bytes, FileReader reads characters",
        "FileInputStream can read any file, FileReader only reads text files",
        "There is no difference"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "FileInputStream reads bytes, FileReader reads characters",
        "difficulty": "medium",
        "explanation": "The main difference between FileInputStream and FileReader is that FileInputStream reads data as bytes (8-bit), while FileReader reads data as characters (16-bit Unicode). FileReader is essentially a bridge from byte streams to character streams using the default character encoding.",
        "hint": "Consider the fundamental difference between byte streams and character streams."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which of the following exception is thrown when you try to access a file that doesn't exist?",
        "options": [
        "IOException",
        "FileNotFoundException",
        "FileAccessException",
        "NoSuchFileException"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "FileNotFoundException",
        "difficulty": "easy",
        "explanation": "When trying to access a file that doesn't exist using classes like FileInputStream, FileReader, etc., a FileNotFoundException is thrown. This is a subclass of IOException that specifically indicates that a file with the specified pathname does not exist.",
        "hint": "This is a specific subclass of IOException used when files can't be located."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is the purpose of the BufferedReader class?",
        "options": [
        "To write text to a character-output stream",
        "To read text from a character-input stream with efficient buffering",
        "To read binary data from a file",
        "To create temporary files"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To read text from a character-input stream with efficient buffering",
        "difficulty": "easy",
        "explanation": "BufferedReader reads text from a character-input stream, buffering characters to provide efficient reading of characters, arrays, and lines. The buffering mechanism improves performance by reducing the number of I/O operations needed to read data from the file.",
        "hint": "Think about how buffering can improve the performance of reading operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which method can be used to read a line of text from a BufferedReader?",
        "options": [
        "readLine()",
        "read()",
        "getLine()",
        "nextLine()"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "readLine()",
        "difficulty": "easy",
        "explanation": "The readLine() method of BufferedReader reads a line of text. A line is considered to be terminated by a line feed ('\\n'), carriage return ('\\r'), or carriage return followed by a line feed. It returns a String containing the contents of the line, not including any line-termination characters, or null if the end of the stream has been reached.",
        "hint": "This method returns a complete line of text up to but not including the line terminator."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which of the following is true about the try-with-resources statement in Java?",
        "options": [
        "It automatically closes resources at the end of the statement",
        "It is only used for file operations",
        "It replaces the need for catch blocks",
        "It was introduced in Java 11"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It automatically closes resources at the end of the statement",
        "difficulty": "medium",
        "explanation": "The try-with-resources statement is a try statement that declares one or more resources. A resource is an object that must be closed after the program is finished with it. The try-with-resources statement ensures that each resource is closed at the end of the statement, which eliminates the need for finally blocks with explicit close() calls.",
        "hint": "This feature helps prevent resource leaks by ensuring proper cleanup."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is the output of the following code?\n```java\nFile file = new File(\"test.txt\");\nSystem.out.println(file.exists());\n```",
        "options": [
        "true",
        "false",
        "It depends on whether the file exists in the current directory",
        "Compilation error"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It depends on whether the file exists in the current directory",
        "difficulty": "easy",
        "explanation": "The exists() method of the File class returns true if the file or directory denoted by the abstract pathname exists, and false otherwise. In this case, the output will be true if a file named \"test.txt\" exists in the current working directory, and false if it doesn't exist.",
        "hint": "The code is checking if a specific file exists, and the result depends on the actual file system state."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which class would you use to write binary data to a file?",
        "options": [
        "FileWriter",
        "PrintWriter",
        "FileOutputStream",
        "BufferedWriter"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "FileOutputStream",
        "difficulty": "medium",
        "explanation": "FileOutputStream is a byte stream class used to write binary data to a file. It writes data as bytes rather than characters, making it suitable for writing binary files (images, audio, etc.) or any data in its raw form.",
        "hint": "Consider whether you need a byte stream or a character stream for binary data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What does the following code do?\n```java\nFile file = new File(\"data.txt\");\nboolean result = file.delete();\n```",
        "options": [
        "Deletes the content of the file but keeps the file",
        "Deletes the file if it exists and returns true, otherwise returns false",
        "Moves the file to the recycle bin",
        "Throws an exception if the file doesn't exist"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Deletes the file if it exists and returns true, otherwise returns false",
        "difficulty": "medium",
        "explanation": "The delete() method of the File class deletes the file or directory denoted by the abstract pathname. It returns true if the deletion succeeds, and false if the deletion fails. If the file doesn't exist, the method will return false, but won't throw an exception.",
        "hint": "This method attempts to remove the file and returns a boolean indicating the result."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is a RandomAccessFile in Java?",
        "options": [
        "A file that can only be accessed in a random order",
        "A file that can be read and written in any order",
        "A file that is created at a random location on disk",
        "A file that can only store random numbers"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A file that can be read and written in any order",
        "difficulty": "medium",
        "explanation": "RandomAccessFile in Java provides the ability to read from and write to any location in a file. It maintains a file pointer that indicates the position in the file where the next read or write will occur. Methods like seek() allow you to move this pointer to any position in the file.",
        "hint": "This class allows both reading and writing, and lets you control exactly where in the file you access data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which class would you use to read a ZIP file in Java?",
        "options": [
        "ZipFile",
        "FileZipper",
        "ZipInputStream",
        "ZipReader"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "ZipFile",
        "difficulty": "medium",
        "explanation": "The ZipFile class is used to read entries from a ZIP file. It provides methods like entries() to get an enumeration of all ZIP file entries, and getInputStream() to get an input stream for reading a specific entry in the ZIP file.",
        "hint": "This class represents a ZIP file and allows you to access its entries."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is serialization in Java?",
        "options": [
        "The process of converting objects into a byte stream",
        "The process of compressing files",
        "The process of encrypting data before writing to a file",
        "The process of converting a file into a database"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The process of converting objects into a byte stream",
        "difficulty": "easy",
        "explanation": "Serialization in Java is the process of converting an object into a byte stream so that it can be saved to a file, sent over a network, or stored in a database. The serialized object can later be deserialized (reconstructed) to create an object that is a copy of the original.",
        "hint": "This process allows objects to be persistently stored or transmitted."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which interface must a class implement to be serializable?",
        "options": [
        "Serializer",
        "Serializable",
        "Externalization",
        "ObjectStream"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Serializable",
        "difficulty": "easy",
        "explanation": "To make a class serializable in Java, it must implement the Serializable interface. This is a marker interface (it has no methods) that tells the JVM that the class can be serialized. Without implementing this interface, attempting to serialize an object will throw a NotSerializableException.",
        "hint": "This is a marker interface that indicates a class can be converted into a byte stream."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which of the following is NOT a valid method of the Path interface in Java?",
        "options": [
        "toAbsolutePath()",
        "getParent()",
        "createFile()",
        "normalize()"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "createFile()",
        "difficulty": "medium",
        "explanation": "The createFile() method is not part of the Path interface. To create a file in Java's NIO.2 API, you would use the Files.createFile(Path) static method. The Path interface represents a path in the file system but doesn't provide methods for file operations - those are handled by the Files utility class.",
        "hint": "Path objects represent locations in the file system, but file operations are typically performed using the Files class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is the purpose of the transient keyword in Java serialization?",
        "options": [
        "To make a variable thread-safe during serialization",
        "To speed up the serialization process",
        "To exclude a variable from being serialized",
        "To encrypt the variable during serialization"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To exclude a variable from being serialized",
        "difficulty": "medium",
        "explanation": "The transient keyword in Java is used to indicate that a field should not be part of the serialized form of an object. When an object is serialized, the values of its transient fields are not saved as part of the serialized object. This is useful for fields that don't need to be saved, such as derived fields or fields with sensitive information.",
        "hint": "This keyword indicates that a field should be skipped during the serialization process."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which class would you use to read primitive data types from a binary file in Java?",
        "options": [
        "FileReader",
        "DataInputStream",
        "BufferedReader",
        "Scanner"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "DataInputStream",
        "difficulty": "medium",
        "explanation": "DataInputStream allows you to read primitive Java data types from an input stream in a machine-independent way. It provides methods like readInt(), readDouble(), readBoolean(), etc., to read primitive data types directly from a binary file or other input source.",
        "hint": "This class provides methods specifically for reading primitive data types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is the main advantage of using NIO (New I/O) over traditional I/O in Java?",
        "options": [
        "It provides more methods for file manipulation",
        "It is easier to use",
        "It provides better performance through features like memory-mapped files and non-blocking I/O",
        "It has better exception handling"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It provides better performance through features like memory-mapped files and non-blocking I/O",
        "difficulty": "hard",
        "explanation": "Java NIO (New I/O) was introduced to overcome limitations of the traditional I/O model. Its main advantages include non-blocking I/O operations, memory-mapped files, and channel-based I/O which can provide significant performance improvements for certain types of applications, especially those dealing with high-volume I/O or many simultaneous connections.",
        "hint": "Think about features that could improve I/O throughput or responsiveness."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What does the following code do?\n```java\nFiles.lines(Paths.get(\"data.txt\"))\n     .filter(line -> line.contains(\"important\"))\n     .forEach(System.out::println);\n```",
        "options": [
        "Prints all lines of the file",
        "Prints only lines containing the word \"important\"",
        "Throws a compilation error",
        "Replaces \"important\" with an empty string in the file"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Prints only lines containing the word \"important\"",
        "difficulty": "medium",
        "explanation": "This code uses the Files.lines() method from Java NIO.2 to read all lines from the file as a Stream. It then uses the Stream API to filter lines that contain the word \"important\" and finally prints each matching line to the console. This is a compact way to search through a file using modern Java features.",
        "hint": "The code is using Java Stream operations to process file contents."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "How can you check if a path in Java represents a directory?",
        "options": [
        "path.isDirectory()",
        "Files.isDirectory(path)",
        "path.getAttributes().isDirectory()",
        "DirectoryUtils.isDirectory(path)"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Files.isDirectory(path)",
        "difficulty": "easy",
        "explanation": "In Java NIO.2, you use the static method Files.isDirectory(Path) to check if a path represents a directory. This method returns true if the path exists and is a directory, and false otherwise. It takes a Path object as an argument and may require appropriate file system permissions to check.",
        "hint": "In Java NIO.2, most file operations are performed using static methods from the Files class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which of the following code snippets correctly writes a string to a file using Java NIO.2?",
        "options": [
        "Files.write(Paths.get(\"file.txt\"), \"Hello, World!\");",
        "Files.write(Paths.get(\"file.txt\"), \"Hello, World!\".getBytes());",
        "Files.writeString(\"file.txt\", \"Hello, World!\");",
        "new FileWriter(\"file.txt\").write(\"Hello, World!\");"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Files.write(Paths.get(\"file.txt\"), \"Hello, World!\".getBytes());",
        "difficulty": "medium",
        "explanation": "The Files.write() method in Java NIO.2 takes a Path object and a byte array (or other Iterable<? extends CharSequence>). When writing a string, you need to convert it to bytes using getBytes(). This method creates or overwrites the file with the provided content in a single operation.",
        "hint": "Remember that Files.write() needs bytes or an Iterable of text lines."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What would happen if you try to serialize an object whose class implements Serializable but contains a reference to another object whose class does not implement Serializable?",
        "options": [
        "Only the serializable parts will be saved",
        "A NotSerializableException will be thrown",
        "The non-serializable object will be replaced with null",
        "The program will compile but fail at runtime"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A NotSerializableException will be thrown",
        "difficulty": "hard",
        "explanation": "If a serializable object contains a reference to a non-serializable object, a NotSerializableException will be thrown when trying to serialize the object. The entire object graph must be serializable for the serialization process to succeed, unless the non-serializable fields are marked as transient.",
        "hint": "Serialization requires the entire object graph to be serializable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is the difference between the readObject() method in ObjectInputStream and the read() method in FileInputStream?",
        "options": [
        "readObject() can read only Serializable objects, read() can read any type of data",
        "readObject() reads an entire serialized object, read() reads a single byte",
        "readObject() is faster than read()",
        "There is no difference, they are aliases of the same method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "readObject() reads an entire serialized object, read() reads a single byte",
        "difficulty": "medium",
        "explanation": "The readObject() method of ObjectInputStream reads an entire serialized object from the input stream and returns it as an Object reference, which typically needs to be cast to the appropriate type. In contrast, the read() method of FileInputStream reads a single byte from the input stream and returns it as an int value (or -1 if the end of the stream is reached).",
        "hint": "Consider the level of abstraction each method operates at."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What happens when you use the Files.copy() method to copy a file to a destination that already exists?",
        "options": [
        "It overwrites the existing file by default",
        "It appends the content to the existing file",
        "It throws a FileAlreadyExistsException",
        "It creates a backup of the existing file before overwriting it"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It throws a FileAlreadyExistsException",
        "difficulty": "medium",
        "explanation": "By default, the Files.copy() method will throw a FileAlreadyExistsException if the target file already exists. To overwrite the existing file, you need to pass the StandardCopyOption.REPLACE_EXISTING option as an additional parameter to the copy() method.",
        "hint": "Consider the safe default behavior for file operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which of the following is an example of using the Java NIO Path interface correctly?",
        "options": [
        "Path path = new Path(\"file.txt\");",
        "Path path = Path.get(\"file.txt\");",
        "Path path = Paths.get(\"file.txt\");",
        "Path path = new File(\"file.txt\").getPath();"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Path path = Paths.get(\"file.txt\");",
        "difficulty": "easy",
        "explanation": "In Java NIO.2, you create a Path object using the static factory method Paths.get(), which takes a string representing the path. The Path interface can't be instantiated directly because it's an interface. The Paths utility class provides factory methods for creating Path objects.",
        "hint": "Remember that interfaces can't be directly instantiated with 'new'."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is the purpose of the java.nio.channels.FileChannel class?",
        "options": [
        "To create file locks",
        "To perform memory-mapped file operations",
        "To provide a channel for reading, writing, mapping, and manipulating a file",
        "To route file I/O through different channels"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To provide a channel for reading, writing, mapping, and manipulating a file",
        "difficulty": "hard",
        "explanation": "FileChannel is a channel for reading, writing, mapping, and manipulating a file. It provides methods for reading and writing bytes at a specific position in the file, memory-mapping files, locking regions of a file, and transferring data directly to and from other channels. It offers more control and potentially better performance than traditional I/O streams.",
        "hint": "Think about the capabilities offered by channels in the NIO framework."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which interface must a class implement to control its own serialization and deserialization process?",
        "options": [
        "Serializable",
        "Externalizable",
        "CustomSerializable",
        "SerializationControl"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Externalizable",
        "difficulty": "hard",
        "explanation": "The Externalizable interface extends Serializable and allows a class to completely control its own serialization and deserialization process. A class that implements Externalizable must provide implementations for the writeExternal() and readExternal() methods, which are responsible for writing and reading the object's state.",
        "hint": "This interface provides more control than just implementing Serializable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is the purpose of the serialVersionUID in serializable classes?",
        "options": [
        "It identifies the version of the class during serialization and deserialization",
        "It specifies the maximum size of the serialized object",
        "It controls the encryption level for serialization",
        "It determines if a class can be serialized"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "It identifies the version of the class during serialization and deserialization",
        "difficulty": "medium",
        "explanation": "The serialVersionUID is a unique identifier for each serializable class. It's used during deserialization to ensure that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to serialization. If a serialized object's class has a different serialVersionUID than the one it was serialized with, deserialization will fail with an InvalidClassException.",
        "hint": "This field helps maintain compatibility between different versions of a class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "What is a memory-mapped file in Java NIO?",
        "options": [
        "A file that is completely loaded into memory",
        "A region of a file that is mapped directly into memory",
        "A file that contains memory addresses",
        "A file that is stored in RAM instead of on disk"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A region of a file that is mapped directly into memory",
        "difficulty": "hard",
        "explanation": "A memory-mapped file in Java NIO is a mechanism that maps a portion of a file directly into memory. This allows you to access and modify the file as if it were an in-memory array, potentially improving performance for certain operations. The operating system manages the actual reading and writing to the file as needed, which can be more efficient than explicit read/write operations.",
        "hint": "This technique allows file I/O to be treated as memory access, which can offer performance advantages."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "File I/O",
        "questionText": "Which method would you use to get all entries in a directory using Java NIO.2?",
        "options": [
        "Files.list(Path)",
        "Files.listDirectory(Path)",
        "Files.getEntries(Path)",
        "Files.walk(Path)"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Files.list(Path)",
        "difficulty": "medium",
        "explanation": "Files.list(Path) returns a Stream of Path objects representing the entries in a directory. This method only lists the direct entries in the directory and does not recursively traverse subdirectories. The stream must be closed when processing is complete or another I/O error occurs.",
        "hint": "This method provides a non-recursive listing of directory entries as a Stream."
    },

    // Java GUI Programming
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which class is the main container in a Swing GUI application?",
        "options": ["JPanel", "JFrame", "JContainer", "JWindow"],
        "correctOptionIndex": 1,
        "correctOptionText": "JFrame",
        "difficulty": "easy",
        "explanation": "JFrame is the main container in Swing applications. It represents a window with a title bar and borders that can hold other Swing components.",
        "hint": "Think about the class that represents a complete window with a title bar."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What method must be called to make a Swing window visible?",
        "options": ["show()", "setVisible(true)", "display()", "open()"],
        "correctOptionIndex": 1,
        "correctOptionText": "setVisible(true)",
        "difficulty": "easy",
        "explanation": "The setVisible(true) method must be called to make a Swing window (such as a JFrame) appear on the screen.",
        "hint": "This method accepts a boolean parameter to control component visibility."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which layout manager places components in rows of equal height?",
        "options": ["BorderLayout", "FlowLayout", "GridLayout", "BoxLayout"],
        "correctOptionIndex": 2,
        "correctOptionText": "GridLayout",
        "difficulty": "medium",
        "explanation": "GridLayout arranges components in a grid of equally sized cells, organized in rows and columns. All components in a GridLayout have the same size.",
        "hint": "This layout manager organizes components in a matrix-like arrangement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the default layout manager for a JPanel?",
        "options": ["BorderLayout", "FlowLayout", "GridLayout", "CardLayout"],
        "correctOptionIndex": 1,
        "correctOptionText": "FlowLayout",
        "difficulty": "easy",
        "explanation": "FlowLayout is the default layout manager for a JPanel. It arranges components in a row, wrapping to a new row when there isn't enough space.",
        "hint": "This layout places components left to right, similar to text flow in a paragraph."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which method is invoked when a button is clicked in a Java Swing application?",
        "options": ["onClick()", "actionPerformed()", "buttonClicked()", "performAction()"],
        "correctOptionIndex": 1,
        "correctOptionText": "actionPerformed()",
        "difficulty": "medium",
        "explanation": "The actionPerformed() method from the ActionListener interface is called when a button is clicked. This method needs to be implemented to handle button click events.",
        "hint": "This method is defined in the ActionListener interface."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the purpose of the JPanel class in Swing?",
        "options": ["To represent the main application window", "To provide a container for organizing components", "To handle text input", "To create dialog boxes"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide a container for organizing components",
        "difficulty": "easy",
        "explanation": "JPanel is a general-purpose container used to group and organize related components. It's often used to create logical sections within a larger GUI.",
        "hint": "Think of it as a rectangular area that can hold multiple components."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which class is used to create a drop-down list in Swing?",
        "options": ["JDropDown", "JList", "JComboBox", "JChoice"],
        "correctOptionIndex": 2,
        "correctOptionText": "JComboBox",
        "difficulty": "easy",
        "explanation": "JComboBox is used to create a drop-down list that allows users to select one item from a list of options.",
        "hint": "This component combines a text field with a drop-down list."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the correct way to add a component to a JFrame in Swing?",
        "options": ["jframe.addComponent(component)", "jframe.add(component)", "jframe.insert(component)", "jframe.place(component)"],
        "correctOptionIndex": 1,
        "correctOptionText": "jframe.add(component)",
        "difficulty": "easy",
        "explanation": "The add() method is used to add components to a JFrame or any other container in Swing.",
        "hint": "This is a method inherited from the Container class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "In BorderLayout, which position places a component at the top of the container?",
        "options": ["BorderLayout.TOP", "BorderLayout.NORTH", "BorderLayout.UPPER", "BorderLayout.PAGE_START"],
        "correctOptionIndex": 1,
        "correctOptionText": "BorderLayout.NORTH",
        "difficulty": "medium",
        "explanation": "In BorderLayout, BorderLayout.NORTH places a component at the top of the container. BorderLayout.PAGE_START is also valid in newer versions of Java as an alternative.",
        "hint": "Think of compass directions for this layout manager."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which event listener would you implement to respond to mouse clicks?",
        "options": ["ClickListener", "MouseListener", "ButtonListener", "ActionListener"],
        "correctOptionIndex": 1,
        "correctOptionText": "MouseListener",
        "difficulty": "medium",
        "explanation": "MouseListener is the interface used to handle mouse events including clicks, presses, releases, enters, and exits.",
        "hint": "This interface has methods like mouseClicked(), mousePressed(), and mouseReleased()."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What happens when you call pack() on a JFrame?",
        "options": ["It compresses all components to their minimum size", "It sizes the frame to fit the preferred size of its components", "It removes all components from the frame", "It applies padding around all components"],
        "correctOptionIndex": 1,
        "correctOptionText": "It sizes the frame to fit the preferred size of its components",
        "difficulty": "medium",
        "explanation": "The pack() method sizes the frame so that all its contents are at or above their preferred sizes. It's often called right before making the frame visible.",
        "hint": "This method adjusts the frame size based on what's inside it."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the main difference between AWT and Swing components?",
        "options": ["AWT components are faster", "Swing components are platform-independent, while AWT components are platform-dependent", "AWT supports more features than Swing", "Swing is deprecated in newer Java versions"],
        "correctOptionIndex": 1,
        "correctOptionText": "Swing components are platform-independent, while AWT components are platform-dependent",
        "difficulty": "medium",
        "explanation": "AWT components are platform-dependent, meaning they use the native GUI components of the operating system. Swing components are written entirely in Java and maintain a consistent look across platforms (though they can be set to mimic the native look and feel).",
        "hint": "Consider how each toolkit renders its components across different operating systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which method would you override to customize the painting of a Swing component?",
        "options": ["draw()", "render()", "paintComponent()", "display()"],
        "correctOptionIndex": 2,
        "correctOptionText": "paintComponent()",
        "difficulty": "medium",
        "explanation": "The paintComponent() method is overridden to perform custom drawing on Swing components. This method provides a Graphics object that can be used to draw shapes, text, and images.",
        "hint": "This is the proper method to override for custom rendering in Swing components."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the proper way to exit a Java Swing application?",
        "options": ["System.exit(0)", "app.close()", "JFrame.exit()", "WindowUtilities.closeApplication()"],
        "correctOptionIndex": 0,
        "correctOptionText": "System.exit(0)",
        "difficulty": "easy",
        "explanation": "System.exit(0) is commonly used to terminate a Java application. The parameter 0 indicates successful termination. This method should be used carefully, as it immediately terminates the JVM.",
        "hint": "This method takes an integer parameter representing the exit status."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which class is used to create a file dialog in Swing?",
        "options": ["JFileDialog", "FileChooser", "JFileChooser", "SwingFileDialog"],
        "correctOptionIndex": 2,
        "correctOptionText": "JFileChooser",
        "difficulty": "easy",
        "explanation": "JFileChooser provides a simple mechanism for the user to choose a file from the file system. It can be configured to select files or directories and to filter the types of files that can be selected.",
        "hint": "This component presents a dialog that lets users navigate through the file system."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the purpose of the SwingUtilities.invokeLater() method?",
        "options": ["To delay execution of a task", "To run code on the Event Dispatch Thread", "To improve application performance", "To schedule periodic tasks"],
        "correctOptionIndex": 1,
        "correctOptionText": "To run code on the Event Dispatch Thread",
        "difficulty": "hard",
        "explanation": "SwingUtilities.invokeLater() is used to ensure that Swing UI code runs on the Event Dispatch Thread (EDT). All updates to the UI should be performed on this thread to avoid thread-related issues.",
        "hint": "This method helps prevent thread interference and memory consistency errors when working with Swing components."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which of the following is NOT a Swing component?",
        "options": ["JButton", "JLabel", "Component", "JTextField"],
        "correctOptionIndex": 2,
        "correctOptionText": "Component",
        "difficulty": "medium",
        "explanation": "Component is an AWT class, not a Swing component. Swing components typically have names starting with 'J', like JButton, JLabel, and JTextField.",
        "hint": "Look for the naming convention used by Swing components."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What layout manager would be best for creating a form with labels and fields aligned in two columns?",
        "options": ["FlowLayout", "BorderLayout", "GridLayout", "GridBagLayout"],
        "correctOptionIndex": 3,
        "correctOptionText": "GridBagLayout",
        "difficulty": "hard",
        "explanation": "GridBagLayout is the most flexible layout manager and is well-suited for creating forms with aligned labels and fields. It allows precise control over how components are positioned and sized.",
        "hint": "This layout manager provides the most control over component positioning but is more complex to use."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the preferred way to handle long-running tasks in a Swing application?",
        "options": ["Run them directly in the event handler", "Use Thread.sleep()", "Use SwingWorker", "Disable the UI until the task completes"],
        "correctOptionIndex": 2,
        "correctOptionText": "Use SwingWorker",
        "difficulty": "hard",
        "explanation": "SwingWorker provides a convenient way to perform time-consuming tasks in the background while keeping the UI responsive. It handles the threading details and provides methods to update the UI when the task completes.",
        "hint": "This class helps separate background processing from UI updates."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which method is called when a window is being closed in a WindowListener implementation?",
        "options": ["windowClosing()", "windowClosed()", "closeWindow()", "onWindowClose()"],
        "correctOptionIndex": 0,
        "correctOptionText": "windowClosing()",
        "difficulty": "medium",
        "explanation": "The windowClosing() method is called when the user attempts to close the window. This is where you would typically ask for confirmation or perform cleanup before allowing the window to close.",
        "hint": "This method is called before the window actually closes, giving you a chance to veto the close operation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "How can you change the look and feel of a Swing application?",
        "options": ["By modifying system settings", "By using CSS stylesheets", "By calling UIManager.setLookAndFeel()", "It cannot be changed at runtime"],
        "correctOptionIndex": 2,
        "correctOptionText": "By calling UIManager.setLookAndFeel()",
        "difficulty": "medium",
        "explanation": "The UIManager.setLookAndFeel() method allows you to change the appearance of a Swing application. Java provides several built-in look and feels, including the system look and feel, Metal, Nimbus, and more.",
        "hint": "This approach allows switching between different visual styles like Metal, Nimbus, or the system's native look."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which component would you use to display a tree structure in Swing?",
        "options": ["JList", "JTable", "JTree", "JHierarchy"],
        "correctOptionIndex": 2,
        "correctOptionText": "JTree",
        "difficulty": "medium",
        "explanation": "JTree is used to display hierarchical data structures. It shows data in a collapsible/expandable tree format, similar to file explorers that show folders and files.",
        "hint": "This component displays data with parent-child relationships that can be expanded or collapsed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the main class used for drawing graphics in Swing?",
        "options": ["Graphics", "Draw", "GraphicsContext", "Painter"],
        "correctOptionIndex": 0,
        "correctOptionText": "Graphics",
        "difficulty": "medium",
        "explanation": "The Graphics class provides the basic methods needed for drawing in Swing. When overriding paintComponent(), you receive a Graphics object that can be used to draw shapes, text, and images.",
        "hint": "This class provides methods like drawLine(), drawRect(), and drawString()."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which method should be called after changing the contents of a JTable to refresh its display?",
        "options": ["refresh()", "repaint()", "reload()", "fireTableDataChanged()"],
        "correctOptionIndex": 3,
        "correctOptionText": "fireTableDataChanged()",
        "difficulty": "hard",
        "explanation": "The fireTableDataChanged() method should be called on the table's model (which implements TableModel) when the underlying data changes. This notifies the JTable that it needs to redraw itself to reflect the new data.",
        "hint": "This method is called on the table model, not on the JTable itself."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What does the setDefaultCloseOperation() method do when applied to a JFrame?",
        "options": ["Sets how the application should handle window closing events", "Defines a custom animation when closing", "Specifies which component receives focus when the window closes", "Determines if a confirmation dialog appears on close"],
        "correctOptionIndex": 0,
        "correctOptionText": "Sets how the application should handle window closing events",
        "difficulty": "medium",
        "explanation": "The setDefaultCloseOperation() method defines what happens when the user closes the window. Common options include JFrame.EXIT_ON_CLOSE (terminate the application), JFrame.DISPOSE_ON_CLOSE (close the window but keep the application running), and JFrame.DO_NOTHING_ON_CLOSE (ignore the close request).",
        "hint": "This method takes parameters like EXIT_ON_CLOSE or DISPOSE_ON_CLOSE."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "Which component in JavaFX serves a similar purpose to JFrame in Swing?",
        "options": ["Window", "Scene", "Stage", "Frame"],
        "correctOptionIndex": 2,
        "correctOptionText": "Stage",
        "difficulty": "hard",
        "explanation": "In JavaFX, Stage is the top-level container similar to JFrame in Swing. It represents the main window of the application and can contain a Scene, which holds the actual UI components.",
        "hint": "Think of a theatrical metaphor, where this component represents the physical space where scenes are presented."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the main difference between heavyweight and lightweight components in Java GUI programming?",
        "options": ["Heavyweight components use more memory", "Lightweight components are faster", "Heavyweight components use native OS components while lightweight ones are pure Java", "Lightweight components can only be used in newer Java versions"],
        "correctOptionIndex": 2,
        "correctOptionText": "Heavyweight components use native OS components while lightweight ones are pure Java",
        "difficulty": "hard",
        "explanation": "Heavyweight components (primarily in AWT) are backed by native peers provided by the operating system. Lightweight components (primarily in Swing) are rendered entirely in Java without native peers, allowing for more flexibility and consistent cross-platform behavior.",
        "hint": "This distinction relates to how the components are rendered on screen and their relationship with the host operating system."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is a CardLayout used for in Swing?",
        "options": ["To arrange components in a grid of cards", "To display playing cards in a game", "To show only one component at a time from a group", "To create business card layouts"],
        "correctOptionIndex": 2,
        "correctOptionText": "To show only one component at a time from a group",
        "difficulty": "medium",
        "explanation": "CardLayout manages a group of components (cards) but displays only one at a time. It's often used for wizards, settings pages with multiple tabs, or any interface where only one panel needs to be visible at a time.",
        "hint": "Think of a stack of cards where only the top card is visible."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "In JavaFX, what is the equivalent of Swing's paintComponent() method?",
        "options": ["onDraw()", "render()", "start()", "handle()"],
        "correctOptionIndex": 1,
        "correctOptionText": "render()",
        "difficulty": "hard",
        "explanation": "In JavaFX, custom drawing is typically done by overriding the render() method when extending Node classes. Unlike Swing's paintComponent(), JavaFX uses a retained mode graphics system where nodes are part of a scene graph.",
        "hint": "This method is called when the node needs to be drawn to the screen."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java GUI Programming",
        "questionText": "What is the primary purpose of the Model-View-Controller (MVC) pattern in GUI applications?",
        "options": ["To improve application speed", "To separate the GUI from the data and application logic", "To reduce memory usage", "To enable multiple programmers to work simultaneously"],
        "correctOptionIndex": 1,
        "correctOptionText": "To separate the GUI from the data and application logic",
        "difficulty": "hard",
        "explanation": "The MVC pattern separates an application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input and updates the model). This separation makes the code more maintainable, testable, and allows changes to one part without affecting others.",
        "hint": "This architectural pattern organizes code by responsibility and promotes loose coupling between components."
    },

    // JDBC & Database Connectivity
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What does JDBC stand for?",
        "options": ["Java Database Connection", "Java Database Connectivity", "Java DB Connector", "Java Data Bridge Connection"],
        "correctOptionIndex": 1,
        "correctOptionText": "Java Database Connectivity",
        "difficulty": "easy",
        "explanation": "JDBC stands for Java Database Connectivity. It's an API for connecting and executing queries with a database that provides methods for querying and updating data.",
        "hint": "It's a standard Java API for database-independent connectivity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which of the following is the correct way to load a JDBC driver?",
        "options": ["Driver.load(\"com.mysql.jdbc.Driver\");", "DriverLoader.load(\"com.mysql.jdbc.Driver\");", "Class.forName(\"com.mysql.jdbc.Driver\");", "Database.loadDriver(\"com.mysql.jdbc.Driver\");"],
        "correctOptionIndex": 2,
        "correctOptionText": "Class.forName(\"com.mysql.jdbc.Driver\");",
        "difficulty": "easy",
        "explanation": "Class.forName() is used to dynamically load a class at runtime. When used with a JDBC driver class name, it loads and registers the driver with the DriverManager, making it available for database connections.",
        "hint": "This method loads a class dynamically at runtime, triggering the driver's static initialization block."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which JDBC interface is used to execute SQL queries?",
        "options": ["Connection", "Statement", "ResultSet", "DriverManager"],
        "correctOptionIndex": 1,
        "correctOptionText": "Statement",
        "difficulty": "easy",
        "explanation": "The Statement interface provides methods for executing SQL queries. It's created from a Connection object and allows you to send SQL statements to the database.",
        "hint": "This interface has methods like executeQuery(), executeUpdate(), and execute()."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the correct sequence of steps for JDBC database access?",
        "options": ["Create Connection, Load Driver, Execute Query, Process Results", "Load Driver, Create Connection, Process Results, Execute Query", "Create Connection, Execute Query, Load Driver, Process Results", "Load Driver, Create Connection, Execute Query, Process Results"],
        "correctOptionIndex": 3,
        "correctOptionText": "Load Driver, Create Connection, Execute Query, Process Results",
        "difficulty": "medium",
        "explanation": "The correct sequence is: 1) Load the JDBC driver using Class.forName(), 2) Establish a connection using DriverManager.getConnection(), 3) Create and execute a query using Statement or PreparedStatement, 4) Process the results using ResultSet.",
        "hint": "Think about the logical order of operations needed to interact with a database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which method of ResultSet is used to move to the next row of results?",
        "options": ["moveNext()", "next()", "getNext()", "fetchNext()"],
        "correctOptionIndex": 1,
        "correctOptionText": "next()",
        "difficulty": "easy",
        "explanation": "The next() method of ResultSet moves the cursor to the next row. It returns true if there is another row, and false if there are no more rows.",
        "hint": "This method returns a boolean indicating whether there are more rows."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the difference between executeQuery() and executeUpdate() methods?",
        "options": ["executeQuery() is faster than executeUpdate()", "executeQuery() is for SELECT statements, executeUpdate() is for INSERT, UPDATE, or DELETE", "executeQuery() can modify data, executeUpdate() cannot", "executeUpdate() returns a ResultSet, executeQuery() returns an int"],
        "correctOptionIndex": 1,
        "correctOptionText": "executeQuery() is for SELECT statements, executeUpdate() is for INSERT, UPDATE, or DELETE",
        "difficulty": "medium",
        "explanation": "executeQuery() is used for SQL statements that return data (typically SELECT statements) and returns a ResultSet. executeUpdate() is used for SQL statements that modify data (INSERT, UPDATE, DELETE) and returns an integer representing the number of rows affected.",
        "hint": "Consider what each method returns and the types of SQL operations they're designed for."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the purpose of the PreparedStatement interface?",
        "options": ["To improve SQL syntax checking", "To pre-compile SQL statements for better performance and security", "To handle large result sets more efficiently", "To connect to multiple databases simultaneously"],
        "correctOptionIndex": 1,
        "correctOptionText": "To pre-compile SQL statements for better performance and security",
        "difficulty": "medium",
        "explanation": "PreparedStatement is a precompiled SQL statement that can be executed multiple times with different parameters. It offers better performance for repeated executions and protects against SQL injection by properly escaping parameters.",
        "hint": "This interface allows for parameterized queries using question marks as placeholders."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "How do you set a String parameter in a PreparedStatement?",
        "options": ["preparedStatement.setString(1, \"value\");", "preparedStatement.setParam(1, \"value\");", "preparedStatement.setStringParam(1, \"value\");", "preparedStatement.set(1, \"value\");"],
        "correctOptionIndex": 0,
        "correctOptionText": "preparedStatement.setString(1, \"value\");",
        "difficulty": "easy",
        "explanation": "The setString() method is used to set a String parameter in a PreparedStatement. The first argument is the parameter index (starting from 1), and the second argument is the String value.",
        "hint": "The method name reflects the data type being set, and the first parameter is the position index."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which of the following is NOT a valid JDBC driver type?",
        "options": ["Type 1: JDBC-ODBC Bridge driver", "Type 2: Native-API driver", "Type 3: Network Protocol driver", "Type 5: Direct Database driver"],
        "correctOptionIndex": 3,
        "correctOptionText": "Type 5: Direct Database driver",
        "difficulty": "medium",
        "explanation": "There are only four types of JDBC drivers: Type 1 (JDBC-ODBC Bridge), Type 2 (Native-API), Type 3 (Network Protocol), and Type 4 (Pure Java/Thin driver). There is no Type 5 driver in the JDBC specification.",
        "hint": "JDBC defines a specific number of driver types, each serving different purposes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the purpose of Connection.setAutoCommit(false)?",
        "options": ["To prevent any SQL statements from executing", "To manually handle transaction commits and rollbacks", "To improve connection performance", "To disable the connection when not in use"],
        "correctOptionIndex": 1,
        "correctOptionText": "To manually handle transaction commits and rollbacks",
        "difficulty": "medium",
        "explanation": "Setting autoCommit to false disables the automatic committing of SQL statements. This allows you to group multiple statements into a single transaction that can be committed or rolled back as a unit, ensuring data integrity.",
        "hint": "This setting relates to database transaction management."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which method would you use to get a specific column value as an integer from a ResultSet?",
        "options": ["getInteger()", "getInt()", "fetchInt()", "readInt()"],
        "correctOptionIndex": 1,
        "correctOptionText": "getInt()",
        "difficulty": "easy",
        "explanation": "The getInt() method is used to retrieve the value of a specified column as an int in the current row of the ResultSet. It can be called with either a column index or a column name.",
        "hint": "ResultSet has type-specific getter methods following a consistent naming pattern."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What does the following URL represent: jdbc:mysql://localhost:3306/mydb",
        "options": ["A connection to a MySQL database named 'mydb' on the local machine using port 3306", "A connection to a MySQL server with the database located at /mydb", "A file-based MySQL database in the mydb directory", "A connection to the default MySQL database with mydb username"],
        "correctOptionIndex": 0,
        "correctOptionText": "A connection to a MySQL database named 'mydb' on the local machine using port 3306",
        "difficulty": "medium",
        "explanation": "This JDBC URL specifies a MySQL connection to 'localhost' (the local machine) on port 3306 (MySQL's default port) connecting to a database named 'mydb'. The format follows the JDBC URL structure: jdbc:subprotocol:subname.",
        "hint": "JDBC URLs typically follow the pattern jdbc:[database_type]://[host]:[port]/[database_name]."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the main advantage of a connection pool?",
        "options": ["It automatically optimizes SQL queries", "It reduces database connection overhead by reusing connections", "It provides better security through encrypted connections", "It allows direct access to database tables without SQL"],
        "correctOptionIndex": 1,
        "correctOptionText": "It reduces database connection overhead by reusing connections",
        "difficulty": "medium",
        "explanation": "A connection pool maintains a cache of database connections that can be reused, eliminating the overhead of establishing a new connection for each database operation. This improves performance in applications that frequently connect to a database.",
        "hint": "Think about the performance cost of creating new connections versus reusing existing ones."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the purpose of the JDBC DriverManager class?",
        "options": ["To manage database driver updates", "To provide driver connection factories and connection management", "To handle SQL query execution", "To monitor database performance"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide driver connection factories and connection management",
        "difficulty": "medium",
        "explanation": "The DriverManager class manages the registered JDBC drivers and provides factory methods for creating connections. It acts as a bridge between Java applications and JDBC drivers, helping locate the appropriate driver and establish connections.",
        "hint": "This class is primarily responsible for connecting your application to the database through the appropriate driver."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which interface would you use to execute a stored procedure that returns multiple result sets?",
        "options": ["PreparedStatement", "Statement", "CallableStatement", "StoredProcedure"],
        "correctOptionIndex": 2,
        "correctOptionText": "CallableStatement",
        "difficulty": "hard",
        "explanation": "CallableStatement is specifically designed for executing stored procedures and functions. It extends PreparedStatement and provides methods for handling OUT and INOUT parameters, as well as managing multiple result sets returned by stored procedures.",
        "hint": "This specialized statement type is used for database procedures that can have input and output parameters."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the correct syntax to register an OUT parameter in a CallableStatement?",
        "options": ["callableStatement.registerReturnParameter(1, java.sql.Types.INTEGER);", "callableStatement.setOutParameter(1, java.sql.Types.INTEGER);", "callableStatement.registerOutParameter(1, java.sql.Types.INTEGER);", "callableStatement.setReturnType(1, java.sql.Types.INTEGER);"],
        "correctOptionIndex": 2,
        "correctOptionText": "callableStatement.registerOutParameter(1, java.sql.Types.INTEGER);",
        "difficulty": "hard",
        "explanation": "The registerOutParameter() method is used to declare a parameter as an OUT parameter in a CallableStatement. It takes the parameter index and SQL type (from java.sql.Types) as arguments.",
        "hint": "This method needs to be called before executing the stored procedure to specify which parameters will return values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What happens if you don't close JDBC resources like Connection, Statement, and ResultSet?",
        "options": ["Nothing, Java automatically closes them", "They remain open until garbage collection, potentially causing memory leaks and connection pool exhaustion", "The database automatically closes them after a timeout", "The application will crash immediately"],
        "correctOptionIndex": 1,
        "correctOptionText": "They remain open until garbage collection, potentially causing memory leaks and connection pool exhaustion",
        "difficulty": "medium",
        "explanation": "JDBC resources need to be explicitly closed when no longer needed. If not closed, they consume memory and database resources, potentially leading to memory leaks. In connection pooling environments, this can exhaust the available connections, preventing new connections from being established.",
        "hint": "Consider what happens to system resources when they're not properly released in Java applications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the best way to handle JDBC resources to ensure they are properly closed?",
        "options": ["Let the garbage collector handle it", "Close them in a finally block or use try-with-resources", "Restart the application when done", "Use a static close() method"],
        "correctOptionIndex": 1,
        "correctOptionText": "Close them in a finally block or use try-with-resources",
        "difficulty": "medium",
        "explanation": "The best practice is to close JDBC resources in a finally block to ensure they're closed even if exceptions occur, or better yet, use the try-with-resources statement (available since Java 7), which automatically closes resources that implement the AutoCloseable interface.",
        "hint": "Consider which Java constructs guarantee cleanup code execution even when exceptions occur."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the main difference between Statement and PreparedStatement?",
        "options": ["Statement can only execute SELECT queries", "PreparedStatement allows parameters in SQL statements", "Statement is faster for all types of queries", "PreparedStatement can only be used with specific databases"],
        "correctOptionIndex": 1,
        "correctOptionText": "PreparedStatement allows parameters in SQL statements",
        "difficulty": "medium",
        "explanation": "The main difference is that PreparedStatement supports parameterized queries with placeholders (?) that can be filled with values using setter methods. Statement only executes static SQL strings. PreparedStatement also offers better performance for repeated executions and protection against SQL injection.",
        "hint": "One interface handles fixed SQL strings while the other allows for dynamic values to be inserted safely."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is SQL injection and how does PreparedStatement help prevent it?",
        "options": ["A database optimization technique; PreparedStatement makes it more efficient", "When a database injects data into the application; PreparedStatement filters it", "A security vulnerability where malicious SQL code is inserted; PreparedStatement parameterizes and properly escapes inputs", "A method of injecting large datasets; PreparedStatement handles memory allocation"],
        "correctOptionIndex": 2,
        "correctOptionText": "A security vulnerability where malicious SQL code is inserted; PreparedStatement parameterizes and properly escapes inputs",
        "difficulty": "hard",
        "explanation": "SQL injection is a code injection technique where attackers insert malicious SQL code into input fields to manipulate a database. PreparedStatement prevents this by separating SQL code from data - it parameterizes the query and properly escapes special characters in the input data, ensuring they're treated as literal values, not executable code.",
        "hint": "This security vulnerability occurs when user input is directly concatenated into SQL strings without proper validation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which ResultSet type allows you to move the cursor both forward and backward?",
        "options": ["ResultSet.TYPE_FORWARD_ONLY", "ResultSet.TYPE_SCROLL_INSENSITIVE", "ResultSet.TYPE_DYNAMIC", "ResultSet.TYPE_BIDIRECTIONAL"],
        "correctOptionIndex": 1,
        "correctOptionText": "ResultSet.TYPE_SCROLL_INSENSITIVE",
        "difficulty": "hard",
        "explanation": "ResultSet.TYPE_SCROLL_INSENSITIVE creates a scrollable ResultSet that allows the cursor to move both forward and backward. The 'insensitive' part means the ResultSet is generally not sensitive to changes made to the database while the ResultSet is open.",
        "hint": "JDBC defines specific constants for different types of cursor movement capabilities."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which method would you use to commit a transaction in JDBC?",
        "options": ["transaction.commit()", "connection.commitTransaction()", "connection.commit()", "stmt.executeCommit()"],
        "correctOptionIndex": 2,
        "correctOptionText": "connection.commit()",
        "difficulty": "medium",
        "explanation": "The commit() method of the Connection interface is used to commit the current transaction. When auto-commit is disabled (connection.setAutoCommit(false)), changes are not saved to the database until explicitly committed with this method.",
        "hint": "Transactions are managed at the connection level in JDBC."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the purpose of the java.sql.Types class?",
        "options": ["To convert Java types to SQL types", "To provide constants representing SQL data types", "To handle type casting in JDBC", "To enforce type safety in database operations"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide constants representing SQL data types",
        "difficulty": "medium",
        "explanation": "The java.sql.Types class defines constants that represent SQL data types. These constants are used with methods like PreparedStatement.setNull() and CallableStatement.registerOutParameter() to specify the SQL data type of parameters.",
        "hint": "This class contains static final fields like INTEGER, VARCHAR, DATE, etc."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is a database transaction?",
        "options": ["A fee charged by the database for each query", "The process of transferring data between tables", "A unit of work that is either completely applied or completely rolled back", "A method of optimizing database performance"],
        "correctOptionIndex": 2,
        "correctOptionText": "A unit of work that is either completely applied or completely rolled back",
        "difficulty": "easy",
        "explanation": "A database transaction is a sequence of operations performed as a single logical unit of work. It must exhibit ACID properties (Atomicity, Consistency, Isolation, Durability), meaning all operations in the transaction must succeed or they all must be reversed, maintaining data integrity.",
        "hint": "This concept ensures database operations are applied in an all-or-nothing manner."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the difference between a Statement's execute(), executeQuery(), and executeUpdate() methods?",
        "options": ["They all do the same thing but with different performance characteristics", "execute() can run any SQL, executeQuery() is for SELECT, executeUpdate() is for INSERT/UPDATE/DELETE", "execute() is deprecated, while the others are current methods", "executeQuery() and executeUpdate() are for simple queries, execute() is for complex ones"],
        "correctOptionIndex": 1,
        "correctOptionText": "execute() can run any SQL, executeQuery() is for SELECT, executeUpdate() is for INSERT/UPDATE/DELETE",
        "difficulty": "hard",
        "explanation": "execute() can execute any SQL statement and returns a boolean indicating whether the result is a ResultSet. executeQuery() is specifically for SELECT statements and returns a ResultSet. executeUpdate() is for statements that modify data (INSERT, UPDATE, DELETE) and returns the count of affected rows.",
        "hint": "These methods differ in what types of SQL statements they're designed for and what they return."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the purpose of the DatabaseMetaData interface in JDBC?",
        "options": ["To store metadata about the database in Java objects", "To create and manage database schemas", "To provide information about the database and its capabilities", "To log database operations for auditing"],
        "correctOptionIndex": 2,
        "correctOptionText": "To provide information about the database and its capabilities",
        "difficulty": "hard",
        "explanation": "The DatabaseMetaData interface provides comprehensive information about the database as a whole, including its capabilities, supported SQL features, tables, views, stored procedures, data types, and more. It's useful for writing database-independent code that can adapt to different database systems.",
        "hint": "This interface allows you to introspect the database system at runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What would be the correct way to retrieve an auto-generated key after inserting a row?",
        "options": ["Use Statement.getGeneratedKey()", "Query the database again with a SELECT statement", "Use Statement.executeUpdate() with Statement.RETURN_GENERATED_KEYS flag", "Use the getLastInsertId() method"],
        "correctOptionIndex": 2,
        "correctOptionText": "Use Statement.executeUpdate() with Statement.RETURN_GENERATED_KEYS flag",
        "difficulty": "hard",
        "explanation": "To retrieve auto-generated keys, you need to: 1) Use Statement.executeUpdate(sql, Statement.RETURN_GENERATED_KEYS) or PreparedStatement with the RETURN_GENERATED_KEYS flag, 2) Call getGeneratedKeys() on the statement to get a ResultSet containing the generated keys, 3) Retrieve the key values from this ResultSet.",
        "hint": "This requires a special flag when executing the statement and a method to retrieve the generated values afterward."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is connection pooling in JDBC?",
        "options": ["A technique to combine multiple database connections into one", "A method to limit the number of concurrent users", "A way to manage and reuse database connections efficiently", "A security feature that isolates connections from each other"],
        "correctOptionIndex": 2,
        "correctOptionText": "A way to manage and reuse database connections efficiently",
        "difficulty": "medium",
        "explanation": "Connection pooling is a technique used to maintain a cache of database connections that can be reused when future requests to the database are required. It improves performance by avoiding the overhead of establishing a new connection for each database operation. Frameworks like HikariCP, C3P0, and DBCP provide connection pooling implementations.",
        "hint": "This technique addresses the performance cost of constantly creating and closing database connections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the purpose of batch updates in JDBC?",
        "options": ["To update multiple tables simultaneously", "To apply the same update to all rows in a table", "To send multiple SQL statements to the database in a single call", "To schedule database updates for later execution"],
        "correctOptionIndex": 2,
        "correctOptionText": "To send multiple SQL statements to the database in a single call",
        "difficulty": "hard",
        "explanation": "Batch updates allow multiple SQL statements to be sent to the database as a single unit, reducing network traffic and improving performance. With methods like addBatch() and executeBatch(), you can add multiple statements to a batch and execute them all at once, which is much more efficient than executing them individually.",
        "hint": "This feature improves performance when you need to execute many similar operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "Which of the following is NOT a standard isolation level in JDBC?",
        "options": ["TRANSACTION_READ_UNCOMMITTED", "TRANSACTION_READ_COMMITTED", "TRANSACTION_SERIALIZABLE", "TRANSACTION_GUARANTEED"],
        "correctOptionIndex": 3,
        "correctOptionText": "TRANSACTION_GUARANTEED",
        "difficulty": "hard",
        "explanation": "TRANSACTION_GUARANTEED is not a standard isolation level in JDBC. The standard levels are TRANSACTION_NONE, TRANSACTION_READ_UNCOMMITTED, TRANSACTION_READ_COMMITTED, TRANSACTION_REPEATABLE_READ, and TRANSACTION_SERIALIZABLE, defined as constants in the Connection interface.",
        "hint": "JDBC defines specific isolation levels based on the SQL standard."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "JDBC & Database Connectivity",
        "questionText": "What is the most significant difference between JDBC 3.0 and JDBC 4.0?",
        "options": ["Support for XML data types", "Auto-loading of JDBC drivers", "Improved security features", "Support for NoSQL databases"],
        "correctOptionIndex": 1,
        "correctOptionText": "Auto-loading of JDBC drivers",
        "difficulty": "hard",
        "explanation": "One of the most significant improvements in JDBC 4.0 (introduced in Java 6) was automatic driver discovery and loading. In JDBC 4.0 and later, drivers that include the file META-INF/services/java.sql.Driver are automatically loaded at initialization time, eliminating the need for Class.forName() to load drivers manually.",
        "hint": "This feature simplified the code needed to establish database connections by removing an explicit step."
    },

    // Java Generics
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the main purpose of using generics in Java?",
        "options": ["To increase performance", "To provide type safety at compile time", "To reduce the size of compiled code", "To enable multithreading"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide type safety at compile time",
        "difficulty": "easy",
        "explanation": "Java generics were introduced to provide compile-time type safety and eliminate the need for explicit casting when working with collections and other data structures. This helps catch type errors during compilation rather than at runtime.",
        "hint": "Think about what problem generics solve regarding type checking."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Which symbol is used to declare a generic type parameter?",
        "options": ["@", "#", "<>", "$"],
        "correctOptionIndex": 2,
        "correctOptionText": "<>",
        "difficulty": "easy",
        "explanation": "In Java, angle brackets <> are used to declare generic type parameters. For example, ArrayList<String> declares an ArrayList that can only contain String objects.",
        "hint": "Look at how collections are declared with specific types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is type erasure in Java generics?",
        "options": ["Removing unused types from the codebase", "Compiler removing generic type information at runtime", "Converting primitive types to object types", "Removing duplicate type declarations"],
        "correctOptionIndex": 1,
        "correctOptionText": "Compiler removing generic type information at runtime",
        "difficulty": "medium",
        "explanation": "Type erasure is a process where the Java compiler removes all generic type information after compile-time. At runtime, generic types are replaced with their bounds or with Object if unbounded. This was implemented for backward compatibility with pre-generic Java code.",
        "hint": "Consider what happens to generic type information after compilation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Which of the following is a valid generic class declaration?",
        "options": ["class Box[T] {}", "class Box(T) {}", "class Box<T> {}", "class Box{T} {}"],
        "correctOptionIndex": 2,
        "correctOptionText": "class Box<T> {}",
        "difficulty": "easy",
        "explanation": "In Java, generic classes are declared using angle brackets. The correct syntax is 'class Box<T> {}' where T is a type parameter that can be replaced with an actual type when the class is instantiated.",
        "hint": "Recall the syntax for declaring generic class parameters."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What will happen when you try to instantiate a generic type with a primitive type like 'ArrayList<int>'?",
        "options": ["It will work fine", "Compiler error", "Runtime exception", "The primitive will be auto-boxed to its wrapper class"],
        "correctOptionIndex": 1,
        "correctOptionText": "Compiler error",
        "difficulty": "easy",
        "explanation": "In Java, generic types can only be instantiated with reference types, not primitive types. Attempting to use a primitive type like 'int' in a generic declaration will result in a compiler error. Instead, you must use the corresponding wrapper class (Integer).",
        "hint": "Consider whether primitives can be used directly with generics."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What does the wildcard symbol (?) represent in Java generics?",
        "options": ["An unknown type", "Any primitive type", "Null values only", "A placeholder for a method name"],
        "correctOptionIndex": 0,
        "correctOptionText": "An unknown type",
        "difficulty": "medium",
        "explanation": "In Java generics, the wildcard symbol (?) represents an unknown type. It's often used in situations where the exact generic type doesn't matter or when you want to work with objects of various types.",
        "hint": "Think about what '?' allows you to express in a generic type parameter."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Which of the following correctly declares a method with a generic return type?",
        "options": ["public <T> void get() { return new T(); }", "public <T> T get() { return new T(); }", "public T<> get() { return new T(); }", "public T get<>() { return new T(); }"],
        "correctOptionIndex": 1,
        "correctOptionText": "public <T> T get() { return new T(); }",
        "difficulty": "medium",
        "explanation": "The correct syntax for declaring a method with a generic return type is 'public <T> T methodName()'. The type parameter <T> is declared before the return type, and then used as the return type. Note that while this syntax is correct, the implementation 'return new T()' would not compile due to type erasure.",
        "hint": "Look at the placement of the type parameter declaration in relation to the return type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the significance of the 'extends' keyword in a bounded type parameter like '<T extends Number>'?",
        "options": ["It indicates inheritance only", "It indicates that T can be Number or any of its subclasses", "It means T extends the functionality of Number", "It means T must implement Number"],
        "correctOptionIndex": 1,
        "correctOptionText": "It indicates that T can be Number or any of its subclasses",
        "difficulty": "medium",
        "explanation": "In the context of a bounded type parameter, '<T extends Number>' means that T can be either the Number class itself or any of its subclasses (like Integer, Double, etc.). This upper bound restricts the types that can be used as type arguments.",
        "hint": "Consider what types would be valid for T with this constraint."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the key difference between 'List<? extends Number>' and 'List<? super Number>'?",
        "options": ["No difference, they are equivalent", "The first allows reading Numbers, the second allows adding Numbers", "The first allows any list, the second only Number lists", "The first is for abstract classes, the second for interfaces"],
        "correctOptionIndex": 1,
        "correctOptionText": "The first allows reading Numbers, the second allows adding Numbers",
        "difficulty": "hard",
        "explanation": "With 'List<? extends Number>', you can read elements as Number but cannot add elements (except null) due to type safety concerns. With 'List<? super Number>', you can add Number objects or its subclasses, but when reading elements, you can only treat them as Objects. This illustrates the PECS principle (Producer Extends, Consumer Super).",
        "hint": "Think about the Get-Put principle in relation to upper and lower bounded wildcards."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Why can't you create an array of a generic type like 'T[] array = new T[10]'?",
        "options": ["Arrays don't support generics", "Due to type erasure", "Generic arrays are inefficient", "Java syntax doesn't allow it"],
        "correctOptionIndex": 1,
        "correctOptionText": "Due to type erasure",
        "difficulty": "medium",
        "explanation": "You cannot create an array of a generic type parameter directly because of type erasure. Since generic type information is erased at runtime, the JVM wouldn't know the actual type to create the array with. Instead, you would typically use ArrayList<T> or create an Object array and cast it.",
        "hint": "Consider what happens to type parameters at runtime in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What will be the output of the following code?\n```java\nArrayList<Integer> list = new ArrayList<>();\nlist.add(1);\nlist.add(2);\nArrayList<?> wildList = list;\nwildList.add(null);\n//wildList.add(3); // This line would cause compiler error\nSystem.out.println(list.size());\n```",
        "options": ["1", "2", "3", "Compiler error"],
        "correctOptionIndex": 2,
        "correctOptionText": "3",
        "difficulty": "hard",
        "explanation": "The code will print '3'. When using a wildcard (?) as a type parameter, you can assign any generic instance to that reference. However, you can only add null to such a collection, not other elements (due to type safety). The commented line would cause a compiler error, but the line adding null succeeds, resulting in a list size of 3.",
        "hint": "Count the elements after each successful add operation, noting that null is a valid element for any reference type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Which of the following is a valid way to invoke a generic method?",
        "options": ["Utils.<String>sort(stringList);", "Utils<String>.sort(stringList);", "Utils.sort<String>(stringList);", "<String>Utils.sort(stringList);"],
        "correctOptionIndex": 0,
        "correctOptionText": "Utils.<String>sort(stringList);",
        "difficulty": "medium",
        "explanation": "The correct way to explicitly invoke a generic method is to specify the type parameter before the method name, as in 'Utils.<String>sort(stringList);'. However, in most cases, the compiler can infer the type parameter from the arguments, so you can simply write 'Utils.sort(stringList);'.",
        "hint": "Look at the placement of the type parameter in relation to the class and method names."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the PECS principle in Java generics?",
        "options": ["Performance, Encapsulation, Concurrency, Serialization", "Producer Extends, Consumer Super", "Polymorphism, Extension, Composition, Substitution", "Parameter Evaluation, Casting, Subtyping"],
        "correctOptionIndex": 1,
        "correctOptionText": "Producer Extends, Consumer Super",
        "difficulty": "hard",
        "explanation": "PECS stands for 'Producer Extends, Consumer Super'. It's a mnemonic to remember when to use bounded wildcards. If your structure produces values (you read from it), use 'extends'. If it consumes values (you write to it), use 'super'. This principle helps maximize API flexibility.",
        "hint": "Think about the relationship between get (read) operations and 'extends', and put (write) operations and 'super'."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What happens when you try to check if an object is an instance of a generic type at runtime?",
        "options": ["It works correctly", "Compiler error", "Always returns false", "Runtime exception"],
        "correctOptionIndex": 1,
        "correctOptionText": "Compiler error",
        "difficulty": "medium",
        "explanation": "You cannot use the instanceof operator with a generic type parameter. For example, 'obj instanceof T' or 'obj instanceof List<String>' will result in a compiler error. This is due to type erasure - at runtime, the JVM doesn't have information about generic types.",
        "hint": "Consider the implications of type erasure on runtime type checking."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Which of the following is NOT a valid way to declare a generic interface?",
        "options": ["interface Parser<T> {}", "interface Parser<T, U> {}", "interface Parser<> {}", "interface Parser<? extends Number> {}"],
        "correctOptionIndex": 3,
        "correctOptionText": "interface Parser<? extends Number> {}",
        "difficulty": "medium",
        "explanation": "A generic interface cannot use a wildcard (?) as a type parameter in its declaration. Wildcards are only used when referencing generic types, not when declaring them. The correct approach would be to use a bounded type parameter like 'interface Parser<T extends Number> {}'.",
        "hint": "Consider where wildcards can be used in relation to type parameter declarations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What will be the output of the following code?\n```java\nList<String> list = new ArrayList<>();\nlist.add(\"A\");\nlist.add(\"B\");\nList<?> wildList = list;\nString s = (String) wildList.get(0);\nSystem.out.println(s);\n```",
        "options": ["A", "Compiler error", "Runtime exception", "null"],
        "correctOptionIndex": 0,
        "correctOptionText": "A",
        "difficulty": "medium",
        "explanation": "The code will print 'A'. When using a wildcard (?) as a type parameter, you can assign any generic instance to that reference. Though the compiler doesn't know the specific type, it knows it's some type of object. Therefore, you can cast the retrieved object back to its actual type, which in this case is String.",
        "hint": "Follow the code execution and note what the actual object types are at runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "In the context of Java generics, what is heap pollution?",
        "options": ["When an application uses too much memory", "When a runtime error occurs due to an invalid cast", "When a parametrized type refers to an object that is not of that parametrized type", "When generic and non-generic code are mixed"],
        "correctOptionIndex": 2,
        "correctOptionText": "When a parametrized type refers to an object that is not of that parametrized type",
        "difficulty": "hard",
        "explanation": "Heap pollution occurs when a variable of a parameterized type refers to an object that is not of that parameterized type. This can happen when mixing raw types with generic code or through unchecked warnings. It compromises type safety and can lead to ClassCastExceptions at runtime.",
        "hint": "Think about scenarios where the actual type of an object doesn't match its declared generic type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Which of the following is a valid use of a generic method with multiple type parameters?",
        "options": ["public <T, U> T convert(U input) {}", "public T, U convert<T, U>(U input) {}", "public <T, U> convert(U input) {}", "public T<U> convert(U input) {}"],
        "correctOptionIndex": 0,
        "correctOptionText": "public <T, U> T convert(U input) {}",
        "difficulty": "medium",
        "explanation": "The correct syntax for a generic method with multiple type parameters is 'public <T, U> T methodName(U input)'. The type parameters are declared in angle brackets before the return type, and can then be used in the method's return type and parameter types.",
        "hint": "Look at where the type parameters are declared in relation to the method signature."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the difference between List<Object> and List<?>?",
        "options": ["They are equivalent", "List<Object> can only hold Objects, List<?> can hold any type", "List<Object> can have elements added to it, List<?> is read-only", "List<Object> is a raw type, List<?> is a generic type"],
        "correctOptionIndex": 2,
        "correctOptionText": "List<Object> can have elements added to it, List<?> is read-only",
        "difficulty": "hard",
        "explanation": "While both can reference a list of any type, List<Object> can only directly hold Object instances (or any object, since all classes extend Object). However, you can add elements to it. List<?> is a wildcard type that makes the list effectively read-only - you cannot add elements to it (except null) because the compiler cannot guarantee type safety.",
        "hint": "Consider what operations are allowed on each type of list."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Given a method signature 'public <T extends Comparable<? super T>> void sort(List<T> list)', what does this complex bound mean?",
        "options": ["T must implement Comparable", "T must extend Comparable and implement a super interface", "T must be comparable to itself or any of its superclasses", "T must be a superclass of Comparable"],
        "correctOptionIndex": 2,
        "correctOptionText": "T must be comparable to itself or any of its superclasses",
        "difficulty": "hard",
        "explanation": "This complex bound specifies that T must implement Comparable<S> where S is either T itself or a superclass of T. This allows for scenarios where a class might be comparable to its superclass but not to itself directly. This pattern is used in Java's Collections.sort() to ensure maximum flexibility while maintaining type safety.",
        "hint": "Break down the bound into parts and analyze what '? super T' means in this context."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the result of the following code?\n```java\nclass Box<T> {\n    private T value;\n    \n    public Box(T value) {\n        this.value = value;\n    }\n    \n    public boolean equals(Box<T> other) {\n        return value.equals(other.value);\n    }\n}\n\nBox<Integer> box1 = new Box<>(1);\nBox<Integer> box2 = new Box<>(1);\nSystem.out.println(box1.equals(box2));\n```",
        "options": ["true", "false", "Compiler error", "Runtime exception"],
        "correctOptionIndex": 0,
        "correctOptionText": "true",
        "difficulty": "hard",
        "explanation": "The code will print 'true'. The equals method in Box compares the values inside the boxes. Since both box1 and box2 contain the Integer value 1, and the Integer class properly implements equals(), the comparison returns true. Note that this implementation of equals() doesn't properly override Object.equals() which would take Object as parameter, not Box<T>.",
        "hint": "Trace through the method call and see what values are being compared."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is reification in the context of Java generics?",
        "options": ["The process of implementing interfaces", "Making generic type information available at runtime", "Converting primitive types to objects", "Simplifying complex type hierarchies"],
        "correctOptionIndex": 1,
        "correctOptionText": "Making generic type information available at runtime",
        "difficulty": "hard",
        "explanation": "Reification means making something real. In the context of Java generics, it refers to making generic type information available at runtime. Java generics are not reified - due to type erasure, generic type information is not available at runtime. This is unlike C# where generics are reified.",
        "hint": "Consider whether Java actually preserves generic type information at runtime."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Which of the following declarations correctly uses a lower bounded wildcard?",
        "options": ["List<? implements Number>", "List<? extends Number>", "List<? super Number>", "List<Number super ?>"],
        "correctOptionIndex": 2,
        "correctOptionText": "List<? super Number>",
        "difficulty": "medium",
        "explanation": "A lower bounded wildcard is specified using the 'super' keyword. The declaration 'List<? super Number>' means a List of any type that is a superclass of Number (including Number itself). This is useful when you want to write Number instances (or its subclasses) to a collection.",
        "hint": "Remember which keyword is used to specify lower bounds in wildcards."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What will be the output of the following code?\n```java\nclass Box<T> {\n    private T value;\n    \n    public Box(T value) {\n        this.value = value;\n    }\n    \n    public T getValue() {\n        return value;\n    }\n}\n\nBox<Number> numberBox = new Box<>(new Integer(10));\nInteger i = (Integer) numberBox.getValue();\nSystem.out.println(i);\n```",
        "options": ["10", "Compiler error", "Runtime exception", "0"],
        "correctOptionIndex": 0,
        "correctOptionText": "10",
        "difficulty": "medium",
        "explanation": "The code will print '10'. Even though numberBox is declared as Box<Number>, it can hold an Integer since Integer is a subclass of Number. When getValue() is called, it returns a Number reference, which needs to be cast to Integer. This cast is valid because the actual object is an Integer, so no exception occurs.",
        "hint": "Consider the relationship between Number and Integer, and what the actual runtime type of the object is."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the correct way to define a generic method that takes an array of any type and returns its first element?",
        "options": ["public T getFirst(T[] array) {}", "public <T> T getFirst(T[] array) {}", "public T<> getFirst(T[] array) {}", "public T getFirst<T>(T[] array) {}"],
        "correctOptionIndex": 1,
        "correctOptionText": "public <T> T getFirst(T[] array) {}",
        "difficulty": "medium",
        "explanation": "The correct way to define a generic method is to declare the type parameter before the return type. For this method, 'public <T> T getFirst(T[] array)' correctly defines a method that can accept an array of any type and return its first element as that same type.",
        "hint": "Look at where the type parameter declaration should be placed in a generic method."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "In Java generics, which statement is true about the relationship between List<Integer> and List<Number>?",
        "options": ["List<Integer> is a subtype of List<Number>", "List<Number> is a subtype of List<Integer>", "They are the same type", "There is no subtype relationship between them"],
        "correctOptionIndex": 3,
        "correctOptionText": "There is no subtype relationship between them",
        "difficulty": "hard",
        "explanation": "In Java generics, even though Integer is a subtype of Number, List<Integer> is NOT a subtype of List<Number>. This is known as invariance. If such a relationship existed, it would break type safety because you could add a Double to a List<Number> reference that actually points to a List<Integer>.",
        "hint": "Consider what would happen if you could assign a List<Integer> to a List<Number> reference and then add a Double to it."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is a raw type in Java?",
        "options": ["A primitive type like int or double", "A generic type used without type parameters", "An uncompiled Java type", "A type that hasn't been processed by the JVM"],
        "correctOptionIndex": 1,
        "correctOptionText": "A generic type used without type parameters",
        "difficulty": "medium",
        "explanation": "A raw type in Java is a generic class or interface used without specifying its type parameters. For example, using 'List' instead of 'List<String>'. Raw types exist for compatibility with pre-generics code but should be avoided in new code as they bypass generic type safety.",
        "hint": "Think about how collections were used before generics were introduced in Java 5."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "Which of the following cannot be used as a generic type parameter?",
        "options": ["User-defined classes", "Interfaces", "Primitive types", "Arrays"],
        "correctOptionIndex": 2,
        "correctOptionText": "Primitive types",
        "difficulty": "easy",
        "explanation": "In Java, primitive types (like int, double, boolean) cannot be used as generic type parameters. Only reference types can be used with generics. If you need to use primitives, you must use their corresponding wrapper classes (Integer, Double, Boolean).",
        "hint": "Think about which types in Java cannot be directly assigned to Object references."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the purpose of the 'Class<T>' type in Java?",
        "options": ["To create instances of generic types", "To represent the runtime class of T", "To implement interfaces generically", "To define abstract generic classes"],
        "correctOptionIndex": 1,
        "correctOptionText": "To represent the runtime class of T",
        "difficulty": "hard",
        "explanation": "The Class<T> type in Java represents the runtime class of T. It provides a way to work with type tokens and perform operations related to reflection. For example, Class<String> represents the String class, and you can use methods like newInstance() to create instances of that class.",
        "hint": "Consider how Class objects are used in relation to reflection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What does the 'Diamond Operator' (<>) do in Java generics?",
        "options": ["Creates a new generic type", "Indicates multiple inheritance", "Enables type inference for generic instance creation", "Represents an empty generic type"],
        "correctOptionIndex": 2,
        "correctOptionText": "Enables type inference for generic instance creation",
        "difficulty": "easy",
        "explanation": "The diamond operator (<>) was introduced in Java 7 to reduce verbosity in generic code. It enables type inference when creating generic instances. For example, instead of writing 'Map<String, List<Integer>> map = new HashMap<String, List<Integer>>()', you can write 'Map<String, List<Integer>> map = new HashMap<>()'.",
        "hint": "Think about how the diamond operator helps reduce code duplication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Generics",
        "questionText": "What is the difference between 'E', 'T', 'K', 'V' in generic type parameters?",
        "options": ["They represent different memory allocation strategies", "They have different scoping rules", "There is no difference; they are just naming conventions", "They represent different categories of types in the Java type system"],
        "correctOptionIndex": 2,
        "correctOptionText": "There is no difference; they are just naming conventions",
        "difficulty": "easy",
        "explanation": "In Java generics, 'E', 'T', 'K', 'V', etc. are just naming conventions with no intrinsic differences. They are typically used to make code more readable: 'E' for element (in collections), 'T' for type, 'K' for key, 'V' for value (in maps), 'N' for number, etc.",
        "hint": "Consider whether the Java language specification assigns special meanings to these letters."
    },

    // Lambda Expressions & Streams
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which of the following is the correct syntax for a lambda expression that takes no parameters and returns void?",
        "options": ["() -> {}", "() => {}", "-> {}", "() >>= {}"],
        "correctOptionIndex": 0,
        "correctOptionText": "() -> {}",
        "difficulty": "easy",
        "explanation": "The correct syntax for a lambda expression with no parameters in Java is using empty parentheses followed by the arrow operator and then curly braces for the body: '() -> {}'.",
        "hint": "Lambda expressions use the arrow operator (->) between parameters and body."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which functional interface is typically used for lambda expressions that take one argument and return a boolean?",
        "options": ["Consumer<T>", "Supplier<T>", "Predicate<T>", "Function<T, R>"],
        "correctOptionIndex": 2,
        "correctOptionText": "Predicate<T>",
        "difficulty": "easy",
        "explanation": "Predicate<T> is a functional interface that takes an object of type T and returns a boolean value. It's commonly used for filtering operations in streams.",
        "hint": "Think about which interface is used to test a condition and return true or false."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What is the purpose of the 'forEach' method in the Stream API?",
        "options": ["To filter elements in a stream", "To perform an action on each element of the stream", "To sort the elements of a stream", "To reduce the stream to a single value"],
        "correctOptionIndex": 1,
        "correctOptionText": "To perform an action on each element of the stream",
        "difficulty": "easy",
        "explanation": "The forEach method in the Stream API is a terminal operation that applies a specified action to each element of the stream without returning any result.",
        "hint": "Consider what happens when you want to process every element in a collection one by one."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which method is used to convert a collection to a stream in Java?",
        "options": [".toStream()", ".asStream()", ".stream()", ".convertToStream()"],
        "correctOptionIndex": 2,
        "correctOptionText": ".stream()",
        "difficulty": "easy",
        "explanation": "The stream() method is used to convert a collection to a stream in Java. It is available on all Collection classes since Java 8.",
        "hint": "This is a standard method available on all Collection implementations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which functional interface represents an operation that accepts a single input argument and returns no result?",
        "options": ["Function<T, R>", "Consumer<T>", "Supplier<T>", "Predicate<T>"],
        "correctOptionIndex": 1,
        "correctOptionText": "Consumer<T>",
        "difficulty": "easy",
        "explanation": "Consumer<T> is a functional interface that accepts a single input of type T and returns no result. It's commonly used in forEach operations.",
        "hint": "Think about an interface that 'consumes' data without producing any output."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What will be the output of the following code?\n```java\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nlong count = numbers.stream().filter(n -> n % 2 == 0).count();\nSystem.out.println(count);\n```",
        "options": ["1", "2", "3", "5"],
        "correctOptionIndex": 1,
        "correctOptionText": "2",
        "difficulty": "medium",
        "explanation": "The code filters the stream to include only even numbers (n % 2 == 0) from the list [1, 2, 3, 4, 5]. Only 2 and 4 satisfy this condition, so count() returns 2.",
        "hint": "The filter checks for even numbers using the modulo operator. Count how many elements in the list satisfy this condition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which of the following is NOT a terminal operation in the Stream API?",
        "options": ["collect()", "count()", "map()", "forEach()"],
        "correctOptionIndex": 2,
        "correctOptionText": "map()",
        "difficulty": "medium",
        "explanation": "map() is an intermediate operation in the Stream API that transforms each element of the stream using a given function. Terminal operations like collect(), count(), and forEach() consume the stream and produce a result or side effect.",
        "hint": "Terminal operations close the stream, while intermediate operations transform it and return another stream."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What is the purpose of the 'reduce' operation in the Stream API?",
        "options": ["To filter elements in a stream", "To transform elements in a stream", "To combine stream elements into a single result", "To sort the elements of a stream"],
        "correctOptionIndex": 2,
        "correctOptionText": "To combine stream elements into a single result",
        "difficulty": "medium",
        "explanation": "The reduce operation in the Stream API is used to combine stream elements into a single result by repeatedly applying a combining operation. It's often used for operations like summing, finding maximum values, or concatenating strings.",
        "hint": "Think about operations that combine all elements into one result, like summing numbers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which functional interface would you use to implement a lambda that generates a random value without taking any input?",
        "options": ["Consumer<T>", "Supplier<T>", "Predicate<T>", "Function<T, R>"],
        "correctOptionIndex": 1,
        "correctOptionText": "Supplier<T>",
        "difficulty": "medium",
        "explanation": "Supplier<T> is a functional interface that takes no arguments and returns a result of type T. It's commonly used for lazy generation of values or when you need a factory method.",
        "hint": "Consider which interface would 'supply' a value without needing any input."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What will be the output of the following code?\n```java\nList<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\nString result = names.stream().map(String::toUpperCase).collect(Collectors.joining(\", \"));\nSystem.out.println(result);\n```",
        "options": ["Alice, Bob, Charlie", "ALICE, BOB, CHARLIE", "alice, bob, charlie", "ALICE,BOB,CHARLIE"],
        "correctOptionIndex": 1,
        "correctOptionText": "ALICE, BOB, CHARLIE",
        "difficulty": "medium",
        "explanation": "The code converts each name to uppercase using the map operation with a method reference (String::toUpperCase), then joins them with a comma and space using the Collectors.joining(\", \") collector.",
        "hint": "The map operation transforms each element, and the collect operation with joining combines them with the specified delimiter."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which method reference type is represented by 'String::new'?",
        "options": ["Static method reference", "Instance method reference of a particular object", "Instance method reference of an arbitrary object of a particular type", "Constructor reference"],
        "correctOptionIndex": 3,
        "correctOptionText": "Constructor reference",
        "difficulty": "medium",
        "explanation": "String::new is a constructor reference that refers to the constructor of the String class. It can be used as a method reference in places where a functional interface expects a function that creates a new object.",
        "hint": "This syntax refers to the way of creating a new instance of a class."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What is the primary difference between map() and flatMap() in the Stream API?",
        "options": ["map() can transform elements while flatMap() cannot", "map() produces a single output for each input while flatMap() can produce multiple outputs or none", "flatMap() is faster than map()", "map() is for primitives while flatMap() is for objects"],
        "correctOptionIndex": 1,
        "correctOptionText": "map() produces a single output for each input while flatMap() can produce multiple outputs or none",
        "difficulty": "medium",
        "explanation": "map() transforms each element into exactly one output element, while flatMap() transforms each element into zero or more output elements and flattens the results into a single stream. flatMap() is particularly useful when dealing with nested collections or operations that return streams.",
        "hint": "Consider what happens when you have a stream of collections and want to process each element in those collections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What will be the result of the following code?\n```java\nOptional<Integer> result = Stream.of(1, 2, 3, 4, 5)\n    .filter(n -> n > 10)\n    .findFirst();\nSystem.out.println(result.orElse(-1));\n```",
        "options": ["1", "5", "-1", "NoSuchElementException"],
        "correctOptionIndex": 2,
        "correctOptionText": "-1",
        "difficulty": "medium",
        "explanation": "The filter condition 'n > 10' is not satisfied by any element in the stream, so findFirst() returns an empty Optional. The orElse(-1) method then returns -1 as the default value when the Optional is empty.",
        "hint": "Check if any elements pass the filter condition. If none do, consider what orElse does with an empty Optional."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which of the following is a valid lambda expression for a BiConsumer<String, Integer>?",
        "options": ["(s, i) -> System.out.println(s + i)", "(String s) -> s.length()", "() -> \"Hello\"", "s -> s.toUpperCase()"],
        "correctOptionIndex": 0,
        "correctOptionText": "(s, i) -> System.out.println(s + i)",
        "difficulty": "medium",
        "explanation": "A BiConsumer<String, Integer> accepts two arguments (a String and an Integer) and returns no result. The lambda expression (s, i) -> System.out.println(s + i) matches this signature, as it takes a String s and an Integer i and just prints their concatenation without returning anything.",
        "hint": "BiConsumer requires two input parameters and no return value."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What does the Collectors.partitioningBy collector do?",
        "options": ["Divides elements into groups based on a classification function", "Sorts the elements of a stream", "Divides elements into exactly two groups based on a predicate", "Counts the number of elements in different categories"],
        "correctOptionIndex": 2,
        "correctOptionText": "Divides elements into exactly two groups based on a predicate",
        "difficulty": "hard",
        "explanation": "Collectors.partitioningBy takes a Predicate and divides the elements of a stream into exactly two groups: those that satisfy the predicate (mapped to Boolean.TRUE) and those that don't (mapped to Boolean.FALSE). The result is a Map<Boolean, List<T>>.",
        "hint": "This collector creates a binary classification based on a true/false condition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which operation would you use to ensure that a stream has no duplicate elements?",
        "options": ["distinct()", "unique()", "filter()", "separate()"],
        "correctOptionIndex": 0,
        "correctOptionText": "distinct()",
        "difficulty": "medium",
        "explanation": "The distinct() method is an intermediate operation in the Stream API that returns a stream consisting of the distinct elements (according to equals()) of the original stream. It eliminates duplicates.",
        "hint": "This operation works similarly to a Set, eliminating duplicates from the stream."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What will be the output of the following code?\n```java\nIntStream.rangeClosed(1, 5)\n    .mapToObj(i -> i * i)\n    .filter(i -> i % 2 == 0)\n    .forEach(System.out::println);\n```",
        "options": ["2, 4", "4, 16", "1, 4, 9, 16, 25", "2, 8, 18, 32, 50"],
        "correctOptionIndex": 1,
        "correctOptionText": "4, 16",
        "difficulty": "medium",
        "explanation": "The code creates a stream of integers from 1 to 5 inclusive, squares each number (giving 1, 4, 9, 16, 25), filters for even numbers (leaving 4, 16), and then prints each remaining number.",
        "hint": "First track the sequence of transformations, then check which of the resulting values meet the filter condition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which lambda expression would correctly implement a Comparator<String> that sorts strings by length in ascending order?",
        "options": ["(s1, s2) -> s1.length() - s2.length()", "(s1, s2) -> s2.length() - s1.length()", "(s1, s2) -> s1.compareTo(s2)", "(s1, s2) -> s1.length().compareTo(s2.length())"],
        "correctOptionIndex": 0,
        "correctOptionText": "(s1, s2) -> s1.length() - s2.length()",
        "difficulty": "medium",
        "explanation": "A Comparator<String> for sorting strings by length in ascending order should return a negative number when the first string is shorter, zero when they have the same length, and a positive number when the first string is longer. The expression (s1, s2) -> s1.length() - s2.length() correctly implements this logic.",
        "hint": "A Comparator should return a negative value if the first object should come before the second, zero if they're equal, and a positive value if the first object should come after the second."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What is the result of the following stream operation?\n```java\nint sum = Stream.of(1, 2, 3, 4, 5)\n    .parallel()\n    .reduce(0, (a, b) -> a + b);\n```",
        "options": ["10", "15", "0", "It depends on the execution order"],
        "correctOptionIndex": 1,
        "correctOptionText": "15",
        "difficulty": "hard",
        "explanation": "The code computes the sum of the stream elements [1, 2, 3, 4, 5] using a parallel stream and reduce operation. The initial value is 0, and the accumulator function adds each element to the running total. The correct sum is 1+2+3+4+5 = 15. The use of parallel() doesn't affect the result because addition is associative.",
        "hint": "The reduce operation combines all elements of the stream using the given function. Check if the operation is commutative and associative."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which method would you use to ensure that a stream is executed in a sequential rather than parallel manner?",
        "options": ["sequential()", "ordered()", "synchronize()", "serial()"],
        "correctOptionIndex": 0,
        "correctOptionText": "sequential()",
        "difficulty": "medium",
        "explanation": "The sequential() method is used to create a sequential stream (or to convert a parallel stream to a sequential one). Operations on a sequential stream are performed in a single thread, unlike parallel streams which may use multiple threads.",
        "hint": "This method specifies that operations should be performed one at a time, in sequence."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What's the difference between findFirst() and findAny() in the Stream API?",
        "options": ["findFirst() returns the first element, while findAny() returns a random element", "findFirst() works on ordered streams, while findAny() may return any element in parallel streams", "findFirst() returns Optional, while findAny() returns the raw element", "There is no difference, they are aliases"],
        "correctOptionIndex": 1,
        "correctOptionText": "findFirst() works on ordered streams, while findAny() may return any element in parallel streams",
        "difficulty": "hard",
        "explanation": "Both findFirst() and findAny() return an Optional containing a stream element if one exists. The difference is that findFirst() respects encounter order and will always return the first element, while findAny() is optimization-friendly in parallel streams and may return any matching element. In a sequential stream, they often behave the same way.",
        "hint": "Consider how these operations might behave differently when a stream is processed in parallel."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What will the following code print?\n```java\nList<String> list = Arrays.asList(\"a\", \"b\", \"c\");\nString result = list.stream()\n    .collect(Collectors.reducing(\"\", (s1, s2) -> s1 + s2));\nSystem.out.println(result);\n```",
        "options": ["\"\"", "\"abc\"", "\"a\"", "Compilation error"],
        "correctOptionIndex": 1,
        "correctOptionText": "\"abc\"",
        "difficulty": "hard",
        "explanation": "The code uses the reducing collector to concatenate all strings in the list. The first parameter \"\" is the identity value (starting point), and the second parameter is a BinaryOperator that concatenates two strings. The result is the concatenation of all elements: \"abc\".",
        "hint": "The reducing collector applies a reduction operation on the elements of the stream. Track how the binary operator combines the elements one by one."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which of the following is a characteristic of a stateful intermediate operation in the Stream API?",
        "options": ["It must be the last operation in the pipeline", "Its result depends on the state of previous elements in the stream", "It always returns the same type as the input", "It can only be used with sequential streams"],
        "correctOptionIndex": 1,
        "correctOptionText": "Its result depends on the state of previous elements in the stream",
        "difficulty": "hard",
        "explanation": "Stateful intermediate operations in the Stream API (like sorted(), distinct(), limit(), and skip()) are operations whose result for each element depends on the state accumulated from processing previous elements. This is in contrast to stateless operations (like filter() and map()) which process each element independently.",
        "hint": "Consider operations that need to \"remember\" something about the elements they've seen so far."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What is the purpose of the 'peek' operation in the Stream API?",
        "options": ["To extract the first element from a stream", "To perform an action on each element without modifying the stream", "To check if a stream contains a specific element", "To transform elements in the stream"],
        "correctOptionIndex": 1,
        "correctOptionText": "To perform an action on each element without modifying the stream",
        "difficulty": "hard",
        "explanation": "The peek() method in the Stream API is an intermediate operation that performs an action on each element of the stream without modifying it. It's primarily used for debugging to see the elements as they flow through different parts of a stream pipeline.",
        "hint": "This operation is often used for debugging or side effects like logging."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What will the following code return?\n```java\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nOptional<Integer> result = numbers.stream()\n    .filter(n -> n > 10)\n    .max(Integer::compareTo);\nreturn result.isPresent();\n```",
        "options": ["true", "false", "Compilation error", "Runtime exception"],
        "correctOptionIndex": 1,
        "correctOptionText": "false",
        "difficulty": "hard",
        "explanation": "The filter condition 'n > 10' is not satisfied by any element in the stream, resulting in an empty stream. The max operation on an empty stream returns an empty Optional. The isPresent() method on an empty Optional returns false.",
        "hint": "Check if any elements pass the filter. If the stream is empty after filtering, what would max return?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What's the correct way to use method reference syntax to transform a stream of strings to their lengths?",
        "options": ["map(String::length)", "map(s -> length())", "map(String::getLength)", "map(String.length)"],
        "correctOptionIndex": 0,
        "correctOptionText": "map(String::length)",
        "difficulty": "hard",
        "explanation": "The method reference String::length refers to the length() method of the String class. In the context of a map operation on a stream of strings, it will be called on each string element, returning its length.",
        "hint": "Method references use the syntax ClassName::methodName or instance::methodName."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What will the following code print?\n```java\nMap<Boolean, List<Integer>> result = Stream.of(1, 2, 3, 4, 5, 6)\n    .collect(Collectors.partitioningBy(n -> n % 2 == 0));\nSystem.out.println(result);\n```",
        "options": ["{false=[1, 3, 5], true=[2, 4, 6]}", "{true=[1, 3, 5], false=[2, 4, 6]}", "{odd=[1, 3, 5], even=[2, 4, 6]}", "Compilation error"],
        "correctOptionIndex": 0,
        "correctOptionText": "{false=[1, 3, 5], true=[2, 4, 6]}",
        "difficulty": "hard",
        "explanation": "The partitioningBy collector divides elements into two groups based on a predicate. Here, the predicate n -> n % 2 == 0 checks if a number is even. This creates a Map with two keys: true (containing even numbers [2, 4, 6]) and false (containing odd numbers [1, 3, 5]).",
        "hint": "The partitioningBy collector creates a Map<Boolean, List<T>> where the key is the result of applying the predicate to each element."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "Which of the following functional interfaces is NOT included in the java.util.function package?",
        "options": ["Predicate<T>", "BiFunction<T,U,R>", "Consumer<T>", "Transformer<T,R>"],
        "correctOptionIndex": 3,
        "correctOptionText": "Transformer<T,R>",
        "difficulty": "hard",
        "explanation": "The java.util.function package includes Predicate<T>, BiFunction<T,U,R>, and Consumer<T>, but there is no standard functional interface called Transformer<T,R>. The functionality you might expect from a Transformer would typically be handled by Function<T,R>.",
        "hint": "Consider which standard functional interfaces are commonly used in Java's Stream API and lambda operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What happens when you call collect() twice on the same stream?",
        "options": ["The second collect() operation will produce the same result as the first", "The second collect() operation will produce an empty result", "A runtime exception is thrown", "The code won't compile"],
        "correctOptionIndex": 2,
        "correctOptionText": "A runtime exception is thrown",
        "difficulty": "hard",
        "explanation": "Streams in Java can only be traversed once. After a terminal operation like collect() is called on a stream, the stream is considered 'consumed' and any attempt to use it again will result in an IllegalStateException with a message like 'stream has already been operated upon or closed'.",
        "hint": "Consider the lifecycle of a Stream object and what happens after terminal operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Lambda Expressions & Streams",
        "questionText": "What is the main benefit of parallel streams over sequential streams?",
        "options": ["Parallel streams always produce more accurate results", "Parallel streams can improve performance for computationally intensive operations on large datasets", "Parallel streams guarantee order of execution", "Parallel streams use less memory"],
        "correctOptionIndex": 1,
        "correctOptionText": "Parallel streams can improve performance for computationally intensive operations on large datasets",
        "difficulty": "hard",
        "explanation": "The main benefit of parallel streams is potential performance improvement for computationally intensive operations on large datasets by utilizing multiple processor cores. However, this comes with the trade-off of potential thread synchronization overhead and non-deterministic processing order. Parallel streams are not always faster and should be benchmarked for specific use cases.",
        "hint": "Think about the main advantage of parallel processing in general computing."
    },

    // Java Networking
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which class is used to represent an IP address in Java?",
        "options": ["IPAddress", "InetAddress", "NetworkAddress", "SocketAddress"],
        "correctOptionIndex": 1,
        "correctOptionText": "InetAddress",
        "difficulty": "easy",
        "explanation": "In Java, the InetAddress class is used to represent an IP address. It provides methods for working with IP addresses, including resolving hostnames to IP addresses and vice versa.",
        "hint": "This class is part of the java.net package and serves as the Java representation of an IP address."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which of the following methods can be used to create a TCP socket connection in Java?",
        "options": ["new WebSocket(host, port)", "new TCPSocket(host, port)", "new Socket(host, port)", "new Connection(host, port)"],
        "correctOptionIndex": 2,
        "correctOptionText": "new Socket(host, port)",
        "difficulty": "easy",
        "explanation": "The Socket class in Java is used to create a TCP socket connection. The constructor Socket(host, port) takes a host (either as a string hostname or an InetAddress) and a port number to establish a connection to a server.",
        "hint": "This class is the basic building block for client-side TCP network communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which class is used to create a server socket that waits for incoming connections?",
        "options": ["Socket", "ServerSocket", "NetworkServer", "SocketServer"],
        "correctOptionIndex": 1,
        "correctOptionText": "ServerSocket",
        "difficulty": "easy",
        "explanation": "The ServerSocket class in Java is used to create a server socket that waits for incoming client connections. When a client connects, the ServerSocket.accept() method returns a Socket object representing the connection to that client.",
        "hint": "This class is specifically designed for the server side of TCP connections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which method of ServerSocket is used to wait for and accept an incoming connection?",
        "options": ["connect()", "accept()", "receive()", "waitForClient()"],
        "correctOptionIndex": 1,
        "correctOptionText": "accept()",
        "difficulty": "easy",
        "explanation": "The accept() method of ServerSocket is used to wait for and accept an incoming client connection. This method blocks until a client connects, and then returns a Socket object representing the connection to that client.",
        "hint": "This method blocks until a client initiates a connection to the server."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which of the following is the correct way to create a UDP socket in Java?",
        "options": ["new UDPSocket()", "new Socket(\"UDP\")", "new DatagramSocket()", "new PacketSocket()"],
        "correctOptionIndex": 2,
        "correctOptionText": "new DatagramSocket()",
        "difficulty": "easy",
        "explanation": "The DatagramSocket class is used for UDP communication in Java. It can be created using the default constructor new DatagramSocket() or with a specific port number new DatagramSocket(port).",
        "hint": "UDP communication in Java uses a different socket class than TCP communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which class is used to represent data packets in UDP communication?",
        "options": ["UDPPacket", "Packet", "DatagramPacket", "SocketPacket"],
        "correctOptionIndex": 2,
        "correctOptionText": "DatagramPacket",
        "difficulty": "easy",
        "explanation": "In Java, the DatagramPacket class is used to represent data packets in UDP communication. It contains both the data to be sent and the address information about where the packet should be sent or where it came from.",
        "hint": "This class works together with DatagramSocket for UDP communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which Java class is commonly used to connect to and interact with URLs?",
        "options": ["WebConnection", "URLConnection", "HttpConnection", "NetworkURL"],
        "correctOptionIndex": 1,
        "correctOptionText": "URLConnection",
        "difficulty": "easy",
        "explanation": "The URLConnection class is used to connect to and interact with URLs in Java. It provides methods for examining the headers and content of a URL, and can be used for both reading from and writing to the URL connection.",
        "hint": "This class is obtained from a URL object and provides general connection capabilities."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What does the following code do?\n```java\nURL url = new URL(\"https://example.com\");\nURLConnection conn = url.openConnection();\nInputStream is = conn.getInputStream();\n```",
        "options": ["Uploads data to example.com", "Downloads the content from example.com", "Creates a TCP server at example.com", "Sends an email to example.com"],
        "correctOptionIndex": 1,
        "correctOptionText": "Downloads the content from example.com",
        "difficulty": "medium",
        "explanation": "This code creates a URL object for 'https://example.com', opens a connection to that URL, and then gets an InputStream to read the content from the URL. This effectively downloads the content from the specified website.",
        "hint": "The getInputStream() method obtains a stream for reading data from a connection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which of the following is NOT a valid method of the InetAddress class?",
        "options": ["getHostName()", "getHostAddress()", "isReachable()", "connect()"],
        "correctOptionIndex": 3,
        "correctOptionText": "connect()",
        "difficulty": "medium",
        "explanation": "The InetAddress class does not have a connect() method. InetAddress represents an IP address and provides methods for host name resolution, but it doesn't provide connection functionality itself. To establish a connection, you would typically use this address with a Socket or another connection class.",
        "hint": "InetAddress represents an address but doesn't establish connections directly."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the purpose of the MulticastSocket class in Java?",
        "options": ["To connect to multiple servers simultaneously", "To allow a socket to join multicast groups for group communication", "To create multiple socket connections in a thread pool", "To broadcast messages to all devices on a network"],
        "correctOptionIndex": 1,
        "correctOptionText": "To allow a socket to join multicast groups for group communication",
        "difficulty": "medium",
        "explanation": "The MulticastSocket class in Java extends DatagramSocket to support IP multicast, allowing a socket to join multicast groups. This enables group communication where a single message can be sent to multiple recipients who have joined the same multicast group.",
        "hint": "Multicast is a form of IP communication where data is sent to multiple receivers simultaneously."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which method is used to join a multicast group in Java?",
        "options": ["join(InetAddress)", "joinGroup(InetAddress)", "addToGroup(InetAddress)", "connectToGroup(InetAddress)"],
        "correctOptionIndex": 1,
        "correctOptionText": "joinGroup(InetAddress)",
        "difficulty": "medium",
        "explanation": "The joinGroup(InetAddress) method of the MulticastSocket class is used to join a multicast group. The InetAddress parameter specifies the multicast address of the group to join.",
        "hint": "This method allows a socket to receive datagrams sent to a specific multicast address."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the purpose of the java.net.HttpURLConnection class?",
        "options": ["To create HTTP servers", "To provide HTTP-specific features for URL connections", "To parse HTTP requests", "To manage HTTP sessions"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide HTTP-specific features for URL connections",
        "difficulty": "medium",
        "explanation": "The HttpURLConnection class extends URLConnection and provides HTTP-specific features for URL connections. It offers methods for setting HTTP request methods, handling HTTP response codes, working with HTTP headers, and more.",
        "hint": "This class specializes URLConnection for HTTP protocol operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the default timeout value for a socket connection in Java?",
        "options": ["0 (no timeout)", "30 seconds", "60 seconds", "Infinity"],
        "correctOptionIndex": 0,
        "correctOptionText": "0 (no timeout)",
        "difficulty": "medium",
        "explanation": "By default, socket connections in Java have no timeout (0), which means they can block indefinitely. You can set a timeout using the setSoTimeout() method to specify how long a read operation should block before throwing an exception.",
        "hint": "Without explicitly setting a timeout, socket operations may block indefinitely."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which of the following is true about Java's non-blocking I/O (NIO) for networking?",
        "options": ["It uses the same classes as traditional blocking I/O", "It provides synchronous channel interfaces for networking", "It's only available for TCP connections, not UDP", "It enables a single thread to manage multiple connections efficiently"],
        "correctOptionIndex": 3,
        "correctOptionText": "It enables a single thread to manage multiple connections efficiently",
        "difficulty": "medium",
        "explanation": "Java's non-blocking I/O (NIO) enables a single thread to manage multiple connections efficiently through selectors and channels. This is in contrast to traditional blocking I/O where each connection typically requires its own thread. NIO is particularly useful for high-load applications with many concurrent connections.",
        "hint": "NIO's key advantage is handling many connections without dedicating a thread to each one."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which of the following Java classes is used for working with network proxies?",
        "options": ["NetworkProxy", "ProxyServer", "Proxy", "ProxySocket"],
        "correctOptionIndex": 2,
        "correctOptionText": "Proxy",
        "difficulty": "medium",
        "explanation": "The java.net.Proxy class is used for working with network proxies. It represents a proxy setting and can be used with socket connections or URL connections to route network traffic through the specified proxy server.",
        "hint": "This class encapsulates proxy server information and type (HTTP, SOCKS)."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the purpose of the SSLSocket class in Java?",
        "options": ["To create secure local sockets", "To establish encrypted socket connections using SSL/TLS", "To verify socket connections", "To create socket connections that bypass firewalls"],
        "correctOptionIndex": 1,
        "correctOptionText": "To establish encrypted socket connections using SSL/TLS",
        "difficulty": "medium",
        "explanation": "The SSLSocket class in Java is used to establish socket connections that are secured using the SSL (Secure Sockets Layer) or TLS (Transport Layer Security) protocols. These protocols provide encryption, authentication, and data integrity for network communications.",
        "hint": "This class is part of the javax.net.ssl package and provides secure communication capabilities."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "In Java NIO, which component is used to determine when I/O operations are possible on channels?",
        "options": ["Selector", "Buffer", "Pipe", "ServerSocketChannel"],
        "correctOptionIndex": 0,
        "correctOptionText": "Selector",
        "difficulty": "hard",
        "explanation": "In Java NIO, a Selector is used to determine which registered channels are ready for I/O operations like reading or writing. It allows a single thread to monitor multiple channels, making non-blocking I/O possible and efficient for applications with many connections.",
        "hint": "This component allows multiplexed I/O operations across multiple channels."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the purpose of the setTcpNoDelay(true) method on a Socket object?",
        "options": ["To disable socket timeouts", "To prevent the socket from being closed", "To disable Nagle's algorithm and send packets immediately", "To increase the socket's buffer size"],
        "correctOptionIndex": 2,
        "correctOptionText": "To disable Nagle's algorithm and send packets immediately",
        "difficulty": "hard",
        "explanation": "The setTcpNoDelay(true) method disables Nagle's algorithm, which normally buffers small packets and combines them before sending to improve network efficiency. When set to true, packets are sent immediately without this buffering, which can reduce latency at the cost of increased bandwidth usage.",
        "hint": "This setting affects how quickly small amounts of data are transmitted over the network."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the purpose of the ServerSocketChannel class in Java NIO?",
        "options": ["To create blocking server sockets only", "To listen for incoming TCP connections and create channel-based connections", "To manage UDP server connections", "To create secure server connections"],
        "correctOptionIndex": 1,
        "correctOptionText": "To listen for incoming TCP connections and create channel-based connections",
        "difficulty": "hard",
        "explanation": "ServerSocketChannel is the NIO equivalent of ServerSocket. It listens for incoming TCP connections and can operate in either blocking or non-blocking mode. When a connection is accepted, it returns a SocketChannel representing the connection to the client, allowing channel-based I/O operations.",
        "hint": "This class is the non-blocking alternative to traditional ServerSocket."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which of the following is TRUE about DatagramChannel in Java NIO?",
        "options": ["It can only be used in blocking mode", "It cannot be registered with a Selector", "It provides channel-based UDP packet communication", "It is only used for multicast communication"],
        "correctOptionIndex": 2,
        "correctOptionText": "It provides channel-based UDP packet communication",
        "difficulty": "hard",
        "explanation": "DatagramChannel in Java NIO provides channel-based UDP packet communication. It can operate in either blocking or non-blocking mode, can be registered with a Selector for efficient I/O multiplexing, and supports both unicast and multicast communication.",
        "hint": "This class is the NIO equivalent to DatagramSocket."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the purpose of the NetworkInterface class in Java?",
        "options": ["To create virtual network interfaces", "To discover and query information about the network interfaces available on the machine", "To configure network routing tables", "To establish connections between different networks"],
        "correctOptionIndex": 1,
        "correctOptionText": "To discover and query information about the network interfaces available on the machine",
        "difficulty": "hard",
        "explanation": "The NetworkInterface class in Java provides methods to discover and query information about the network interfaces (such as Ethernet, Wi-Fi, loopback) available on the machine. It allows you to get details like interface names, IP addresses associated with each interface, MAC addresses, and other network configuration information.",
        "hint": "This class helps identify and work with the physical or virtual network adapters on a computer."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What will happen if you try to create a ServerSocket with a port number that is already in use?",
        "options": ["The existing server will be shut down", "The new ServerSocket will take over the port", "A BindException will be thrown", "The ServerSocket will automatically choose a different port"],
        "correctOptionIndex": 2,
        "correctOptionText": "A BindException will be thrown",
        "difficulty": "hard",
        "explanation": "When you attempt to create a ServerSocket with a port number that is already in use by another application, Java will throw a java.net.BindException with a message like 'Address already in use'. This is because only one process can bind to a specific port at a time on a given IP address.",
        "hint": "Operating systems don't allow multiple processes to listen on the same port and address combination."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "In the Java HTTP Client API (introduced in Java 11), which class is used to build and send HTTP requests?",
        "options": ["HttpRequest", "HttpClient", "HttpConnection", "HttpSender"],
        "correctOptionIndex": 1,
        "correctOptionText": "HttpClient",
        "difficulty": "hard",
        "explanation": "In the Java HTTP Client API (java.net.http), HttpClient is the main class used to build and send HTTP requests. You create an HttpClient instance, build an HttpRequest, and then use the client's send method to execute the request and receive an HttpResponse.",
        "hint": "This class is the main entry point for the modern HTTP client API in Java 11+."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What does the following code snippet achieve?\n```java\nServerSocket serverSocket = new ServerSocket(0);\nint port = serverSocket.getLocalPort();\n```",
        "options": ["Creates a server socket on the default port", "Creates a server socket and explicitly sets it to port 0", "Creates a server socket on a random available port and retrieves that port number", "Creates a server socket but leaves it unbound to any port"],
        "correctOptionIndex": 2,
        "correctOptionText": "Creates a server socket on a random available port and retrieves that port number",
        "difficulty": "hard",
        "explanation": "When you create a ServerSocket with port 0, Java will automatically assign a free ephemeral port to the socket. The getLocalPort() method then returns the actual port number that was assigned. This technique is useful when you don't need a specific port and want to avoid port conflicts.",
        "hint": "Port 0 has a special meaning when creating server sockets in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the default character encoding used by the URLEncoder class in Java?",
        "options": ["UTF-8", "ISO-8859-1", "US-ASCII", "UTF-16"],
        "correctOptionIndex": 0,
        "correctOptionText": "UTF-8",
        "difficulty": "hard",
        "explanation": "Starting from Java 10, the default character encoding used by the URLEncoder class is UTF-8. In earlier versions (before Java 10), it was the platform's default encoding. The encode method can also take an explicit charset parameter to specify a different encoding.",
        "hint": "This encoding is the standard for URLs in modern web applications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "Which method would you use to set request headers when using the HttpURLConnection class?",
        "options": ["setHeader(String name, String value)", "addHeader(String name, String value)", "setRequestHeader(String name, String value)", "setRequestProperty(String key, String value)"],
        "correctOptionIndex": 3,
        "correctOptionText": "setRequestProperty(String key, String value)",
        "difficulty": "hard",
        "explanation": "The setRequestProperty(String key, String value) method is used to set request headers when using the HttpURLConnection class. This method sets the value of the specified request header, allowing you to customize the HTTP request with headers such as Content-Type, Authorization, or User-Agent.",
        "hint": "This method allows you to add or modify HTTP headers in the request."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the purpose of the AsynchronousSocketChannel class in Java NIO.2?",
        "options": ["To provide blocking socket operations", "To provide non-blocking socket operations with event callbacks", "To create secure socket connections", "To manage multiple socket connections in a thread pool"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide non-blocking socket operations with event callbacks",
        "difficulty": "hard",
        "explanation": "AsynchronousSocketChannel is part of the Java NIO.2 (java.nio.channels) package and provides asynchronous (non-blocking) socket operations. It allows you to perform I/O operations that return immediately and provide notifications through callbacks (CompletionHandlers) or Future objects when the operations complete.",
        "hint": "This class is designed for event-driven programming models with completion notifications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is a potential issue with the following code?\n```java\nSocket socket = new Socket(\"example.com\", 80);\nSocket socket2 = new Socket(\"example.com\", 80);\nsocket.close();\nsocket2.close();\n```",
        "options": ["It will throw a DuplicateSocketException", "It could leak network resources if an exception occurs", "It will overwrite the first socket with the second", "There are no issues with this code"],
        "correctOptionIndex": 1,
        "correctOptionText": "It could leak network resources if an exception occurs",
        "difficulty": "hard",
        "explanation": "If an exception occurs after creating the first socket but before closing it (for example, if the second socket creation fails), the first socket won't be closed properly, leading to a resource leak. This code should use try-with-resources or a finally block to ensure sockets are always closed, even if exceptions occur.",
        "hint": "Consider what happens if an exception is thrown between socket creation and closing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the purpose of the StandardSocketOptions.SO_REUSEADDR option in Java NIO?",
        "options": ["To allow a socket to bind to a port even if it's in TIME_WAIT state", "To allow multiple sockets to bind to the same port", "To reuse socket objects across different connections", "To enable address translation for IPv4/IPv6 compatibility"],
        "correctOptionIndex": 0,
        "correctOptionText": "To allow a socket to bind to a port even if it's in TIME_WAIT state",
        "difficulty": "hard",
        "explanation": "The StandardSocketOptions.SO_REUSEADDR option allows a socket to bind to a port even if another socket recently used that port and is in the TIME_WAIT state. This is useful for server applications that need to restart quickly after shutdown, avoiding the 'Address already in use' error that would otherwise occur.",
        "hint": "This option helps overcome a common issue when restarting server applications quickly."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java Networking",
        "questionText": "What is the main difference between the traditional HttpURLConnection and the newer HttpClient (Java 11+) API?",
        "options": ["HttpURLConnection is more feature-rich than HttpClient", "HttpURLConnection supports HTTP/2 while HttpClient doesn't", "HttpClient provides a modern, fluent API with better defaults and support for HTTP/2", "HttpClient is for synchronous requests only, while HttpURLConnection supports asynchronous operations"],
        "correctOptionIndex": 2,
        "correctOptionText": "HttpClient provides a modern, fluent API with better defaults and support for HTTP/2",
        "difficulty": "hard",
        "explanation": "The HttpClient API introduced in Java 11 provides a modern, fluent API with better defaults, built-in support for HTTP/2, asynchronous operations, and generally improved usability compared to the older HttpURLConnection. HttpURLConnection is more verbose, has some design limitations, and lacks support for newer HTTP features.",
        "hint": "Consider the design improvements and additional features that would be expected in a modern replacement API."
    },
    
    // Java APIs & Libraries
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which class in the java.util package is used to generate random numbers?",
        "options": ["Math", "Random", "NumberGenerator", "Generator"],
        "correctOptionIndex": 1,
        "correctOptionText": "Random",
        "difficulty": "easy",
        "explanation": "The Random class from the java.util package provides methods for generating random numbers of various types including integers, longs, floats, and doubles.",
        "hint": "This class has methods like nextInt(), nextDouble(), etc."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which method of the Math class returns the largest (closest to positive infinity) double value that is less than or equal to the argument and is equal to a mathematical integer?",
        "options": ["Math.round()", "Math.ceil()", "Math.floor()", "Math.trunc()"],
        "correctOptionIndex": 2,
        "correctOptionText": "Math.floor()",
        "difficulty": "medium",
        "explanation": "Math.floor() returns the largest double value that is less than or equal to the argument and is equal to a mathematical integer. For example, Math.floor(3.7) returns 3.0.",
        "hint": "Think of this method as rounding down to the nearest integer."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which class introduced in Java 8 represents a specific date without time information?",
        "options": ["Date", "Calendar", "LocalDate", "ZonedDateTime"],
        "correctOptionIndex": 2,
        "correctOptionText": "LocalDate",
        "difficulty": "easy",
        "explanation": "LocalDate is part of the java.time package introduced in Java 8 and represents a date without time, such as 2023-10-15. It does not contain time or timezone information.",
        "hint": "This class is part of the new Date-Time API in Java 8."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What is the primary use of the java.util.Scanner class?",
        "options": ["Reading files", "Reading user input", "Scanning for patterns", "All of the above"],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above",
        "difficulty": "easy",
        "explanation": "The Scanner class can be used for reading user input from the console, reading data from files, and scanning strings for patterns or tokens using regular expressions.",
        "hint": "This versatile class has multiple uses for parsing different types of input."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which method is used to format a LocalDateTime object into a string using a specified pattern?",
        "options": ["format()", "parse()", "toString()", "convert()"],
        "correctOptionIndex": 0,
        "correctOptionText": "format()",
        "difficulty": "medium",
        "explanation": "The format() method is used with a DateTimeFormatter to convert a LocalDateTime object into a formatted string according to a specified pattern.",
        "hint": "This method works with DateTimeFormatter to create custom string representations of dates and times."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which of the following is NOT a class in the java.util.concurrent package?",
        "options": ["ConcurrentHashMap", "CompletableFuture", "ThreadLocal", "CyclicBarrier"],
        "correctOptionIndex": 2,
        "correctOptionText": "ThreadLocal",
        "difficulty": "hard",
        "explanation": "ThreadLocal is part of the java.lang package, not java.util.concurrent. It provides thread-local variables where each thread has its own independently initialized copy of the variable.",
        "hint": "Look for the class that doesn't directly deal with concurrent collections or executors."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which class provides functionality for encoding and decoding Base64 data in Java 8 and later?",
        "options": ["Base64", "Encoder", "Codec", "Crypt"],
        "correctOptionIndex": 0,
        "correctOptionText": "Base64",
        "difficulty": "medium",
        "explanation": "The Base64 class in the java.util package provides static methods for encoding and decoding base64 data, which was introduced in Java 8.",
        "hint": "This class is part of the java.util package and its name directly corresponds to the encoding scheme it implements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What is the return type of the Stream.collect() method?",
        "options": ["Stream", "List", "Collection", "Depends on the collector used"],
        "correctOptionIndex": 3,
        "correctOptionText": "Depends on the collector used",
        "difficulty": "medium",
        "explanation": "The return type of Stream.collect() depends on the Collector implementation passed to it. For example, with Collectors.toList(), it returns a List, and with Collectors.toMap(), it returns a Map.",
        "hint": "The collector determines what type of result will be produced from the stream elements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which of the following Duration methods calculates the time difference between two temporal objects?",
        "options": ["Duration.between()", "Duration.diff()", "Duration.subtract()", "Duration.elapsed()"],
        "correctOptionIndex": 0,
        "correctOptionText": "Duration.between()",
        "difficulty": "easy",
        "explanation": "Duration.between() is a static method that calculates the duration between two temporal objects, such as LocalDateTime or Instant instances.",
        "hint": "This method takes two temporal objects as parameters and returns the time duration between them."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which collection implementation would be most appropriate for storing a large number of elements with no duplicates and fast lookup times?",
        "options": ["ArrayList", "LinkedList", "HashSet", "TreeMap"],
        "correctOptionIndex": 2,
        "correctOptionText": "HashSet",
        "difficulty": "medium",
        "explanation": "HashSet is ideal for storing large datasets without duplicates and provides O(1) average-case complexity for add, remove, and contains operations.",
        "hint": "You need a collection that doesn't allow duplicates and provides fast access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What does the Optional.orElseThrow() method do if the Optional is empty?",
        "options": ["Returns null", "Returns a default value", "Throws a NoSuchElementException", "Throws an exception supplied by the parameter"],
        "correctOptionIndex": 3,
        "correctOptionText": "Throws an exception supplied by the parameter",
        "difficulty": "hard",
        "explanation": "The orElseThrow() method takes a Supplier<? extends X> parameter. If the Optional is empty, it throws the exception created by the supplier; otherwise, it returns the value.",
        "hint": "This method allows custom exception handling for empty Optional objects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which utility class provides methods for working with arrays, such as sorting and searching?",
        "options": ["ArrayUtils", "Collections", "Arrays", "List"],
        "correctOptionIndex": 2,
        "correctOptionText": "Arrays",
        "difficulty": "easy",
        "explanation": "The Arrays class in the java.util package provides static methods for manipulating arrays, including sorting, searching, comparing, and filling operations.",
        "hint": "This utility class has the same name as the data structure it works with, pluralized."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which interface in the java.util.function package represents a function that accepts one argument and produces a result?",
        "options": ["Predicate", "Consumer", "Function", "Supplier"],
        "correctOptionIndex": 2,
        "correctOptionText": "Function",
        "difficulty": "medium",
        "explanation": "The Function<T,R> interface represents a function that accepts one argument of type T and produces a result of type R. It defines the apply() method for transforming an input into an output.",
        "hint": "The name of this interface directly corresponds to its mathematical concept."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which class should be used to efficiently build strings by appending multiple values?",
        "options": ["String", "StringBuffer", "StringBuilder", "StringJoiner"],
        "correctOptionIndex": 2,
        "correctOptionText": "StringBuilder",
        "difficulty": "easy",
        "explanation": "StringBuilder provides an efficient way to concatenate strings without creating multiple String objects. It's not synchronized like StringBuffer, making it faster in single-threaded scenarios.",
        "hint": "This mutable class offers better performance than regular string concatenation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What is the purpose of the java.util.UUID class?",
        "options": ["To generate unique identifiers", "To validate user input", "To encrypt data", "To parse URLs"],
        "correctOptionIndex": 0,
        "correctOptionText": "To generate unique identifiers",
        "difficulty": "medium",
        "explanation": "The UUID (Universally Unique Identifier) class is used to generate 128-bit values that can be used as unique identifiers with an extremely low probability of collision.",
        "hint": "This class is commonly used when you need to create identifier strings that are guaranteed to be unique."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What method would you use to parse a string into a LocalDate object?",
        "options": ["LocalDate.parse()", "LocalDate.valueOf()", "LocalDate.from()", "LocalDate.convert()"],
        "correctOptionIndex": 0,
        "correctOptionText": "LocalDate.parse()",
        "difficulty": "easy",
        "explanation": "LocalDate.parse() is used to parse a string such as '2023-10-15' into a LocalDate object. It can use the ISO date formatter by default or a custom DateTimeFormatter.",
        "hint": "This method converts a textual representation of a date into a LocalDate object."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which class provides cryptographically strong random number generation in Java?",
        "options": ["Random", "Math", "SecureRandom", "ThreadLocalRandom"],
        "correctOptionIndex": 2,
        "correctOptionText": "SecureRandom",
        "difficulty": "medium",
        "explanation": "SecureRandom, from the java.security package, provides cryptographically strong random number generation suitable for security-sensitive applications, like generating session tokens or cryptographic keys.",
        "hint": "This class is designed for applications where unpredictability of random numbers is critical for security."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What feature introduced in Java 9 allows creating unmodifiable collections with convenient factory methods?",
        "options": ["Immutable Collections", "Collection Factories", "Static Collection Methods", "Fixed Collections"],
        "correctOptionIndex": 2,
        "correctOptionText": "Static Collection Methods",
        "difficulty": "hard",
        "explanation": "Java 9 introduced static factory methods in collection interfaces (List, Set, Map) like List.of(), Set.of(), and Map.of() that create unmodifiable collections conveniently without using builders or constructors.",
        "hint": "These methods let you create collections in a single expression instead of multiple add() calls."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which method in the java.nio.file.Files class is used to read all lines from a file into a List<String>?",
        "options": ["readAllBytes()", "readAllLines()", "readLines()", "read()"],
        "correctOptionIndex": 1,
        "correctOptionText": "readAllLines()",
        "difficulty": "medium",
        "explanation": "The Files.readAllLines() method reads all lines from a file as a List<String>. Each line from the file becomes an element in the resulting list.",
        "hint": "This method's name directly describes its purpose - reading all lines from a file."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What is the primary difference between the java.util.Date and java.time.LocalDateTime classes?",
        "options": ["Date is immutable while LocalDateTime is mutable", "Date includes timezone information while LocalDateTime doesn't", "LocalDateTime is immutable while Date is mutable", "There is no difference except naming conventions"],
        "correctOptionIndex": 2,
        "correctOptionText": "LocalDateTime is immutable while Date is mutable",
        "difficulty": "hard",
        "explanation": "LocalDateTime objects are immutable, meaning their state cannot be changed after creation, while Date objects are mutable. Additionally, LocalDateTime is part of the newer Java 8 Date-Time API with improved design and functionality.",
        "hint": "Think about thread-safety and what happens when you modify each type of object."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which method in the java.lang.System class is used to get the current time in milliseconds?",
        "options": ["getTime()", "currentTimeMillis()", "now()", "clock()"],
        "correctOptionIndex": 1,
        "correctOptionText": "currentTimeMillis()",
        "difficulty": "easy",
        "explanation": "System.currentTimeMillis() returns the current time in milliseconds as a long value, representing the number of milliseconds since the epoch (January 1, 1970, 00:00:00 GMT).",
        "hint": "This method is commonly used for timing operations or generating timestamps."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which class would you use to create a deep copy of an object that implements the Serializable interface?",
        "options": ["Clone", "ObjectOutputStream and ObjectInputStream", "DeepCopy", "Duplicator"],
        "correctOptionIndex": 1,
        "correctOptionText": "ObjectOutputStream and ObjectInputStream",
        "difficulty": "hard",
        "explanation": "To create a deep copy of a Serializable object, you can use ObjectOutputStream to write the object to a ByteArrayOutputStream and then use ObjectInputStream to read it back, creating a completely separate copy.",
        "hint": "This technique is called serialization and deserialization, which effectively creates a new instance with the same state."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What is the purpose of the java.util.Properties class?",
        "options": ["To manage application settings", "To handle property animations", "To calculate mathematical properties", "To configure JVM properties only"],
        "correctOptionIndex": 0,
        "correctOptionText": "To manage application settings",
        "difficulty": "medium",
        "explanation": "The Properties class is a specialized Hashtable for string-based key-value pairs, typically used to manage application configuration settings that can be loaded from or stored to a stream (like a file).",
        "hint": "This class is commonly used for storing configuration information, especially from .properties files."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which method would you use to combine two CompletableFuture objects to execute one after the other?",
        "options": ["join()", "combine()", "thenCompose()", "chain()"],
        "correctOptionIndex": 2,
        "correctOptionText": "thenCompose()",
        "difficulty": "hard",
        "explanation": "The thenCompose() method is used to chain CompletableFuture instances sequentially, where the second operation depends on the result of the first. It's similar to flatMap in stream operations.",
        "hint": "This method allows you to create a pipeline of asynchronous operations that depend on previous results."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What does the java.util.Objects.requireNonNull() method do?",
        "options": ["Checks if the reference is null and throws NullPointerException if it is", "Returns a non-null default value if the reference is null", "Converts null references to empty strings", "Creates a new instance if the reference is null"],
        "correctOptionIndex": 0,
        "correctOptionText": "Checks if the reference is null and throws NullPointerException if it is",
        "difficulty": "medium",
        "explanation": "Objects.requireNonNull() checks if the specified object reference is null and throws a NullPointerException if it is. It's commonly used for parameter validation in method implementations.",
        "hint": "This utility method helps with defensive programming and early detection of programming errors."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which enum in java.time represents months of the year?",
        "options": ["Month", "MonthOfYear", "MonthEnum", "Calendar.MONTH"],
        "correctOptionIndex": 0,
        "correctOptionText": "Month",
        "difficulty": "easy",
        "explanation": "The Month enum in the java.time package represents months of the year (JANUARY through DECEMBER) with various useful methods for working with month-related operations.",
        "hint": "This enum has a straightforward name directly representing what it models."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which class would you use to generate a hash-based message authentication code (HMAC) in Java?",
        "options": ["MessageDigest", "Mac", "Cipher", "Hash"],
        "correctOptionIndex": 1,
        "correctOptionText": "Mac",
        "difficulty": "hard",
        "explanation": "The javax.crypto.Mac class provides the functionality for generating message authentication codes, which are used to authenticate messages using a shared secret key.",
        "hint": "This class is part of the javax.crypto package and its name is an acronym for Message Authentication Code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What is the purpose of the java.util.StringJoiner class?",
        "options": ["To split strings", "To join multiple strings with a delimiter", "To replace characters in strings", "To compare strings lexicographically"],
        "correctOptionIndex": 1,
        "correctOptionText": "To join multiple strings with a delimiter",
        "difficulty": "medium",
        "explanation": "StringJoiner is used to construct a sequence of characters separated by a delimiter. It can also add a prefix and suffix to the result, making it useful for creating comma-separated lists, for example.",
        "hint": "This class is particularly useful when building strings like CSV data or SQL IN clauses."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "What does the Duration.toMinutes() method return?",
        "options": ["The total duration in minutes as a long", "The minutes part of the duration as an int", "A string representation of minutes", "A LocalTime object with only minutes"],
        "correctOptionIndex": 0,
        "correctOptionText": "The total duration in minutes as a long",
        "difficulty": "medium",
        "explanation": "Duration.toMinutes() converts the duration to the total number of minutes (truncating any remaining seconds or milliseconds) and returns this value as a long.",
        "hint": "This method converts the entire duration to a single unit of time measurement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Java APIs & Libraries",
        "questionText": "Which pattern does the java.util.Observable and java.util.Observer implement?",
        "options": ["Factory Pattern", "Singleton Pattern", "Observer Pattern", "Strategy Pattern"],
        "correctOptionIndex": 2,
        "correctOptionText": "Observer Pattern",
        "difficulty": "easy",
        "explanation": "The Observable class and Observer interface implement the Observer design pattern, which defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically.",
        "hint": "The names of these classes directly indicate the design pattern they implement."
    },

    // Web Development with Java
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which Java technology is primarily used to create dynamic web content within HTML pages?",
        "options": ["Servlets", "JSP", "JDBC", "EJB"],
        "correctOptionIndex": 1,
        "correctOptionText": "JSP",
        "difficulty": "easy",
        "explanation": "JavaServer Pages (JSP) is a technology that helps developers create dynamically generated web pages based on HTML, XML, or other document types. JSP allows Java code and certain pre-defined actions to be embedded into static content.",
        "hint": "Think about which technology lets you mix Java code directly with HTML markup."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the base class that all servlets must extend or implement?",
        "options": ["HttpServlet", "GenericServlet", "WebServlet", "Servlet"],
        "correctOptionIndex": 3,
        "correctOptionText": "Servlet",
        "difficulty": "medium",
        "explanation": "The Servlet interface is the base that all servlets must implement, either directly or by extending classes that implement it (like GenericServlet or HttpServlet). It defines the lifecycle methods that all servlets must provide.",
        "hint": "This is the root interface in the servlet hierarchy."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which HTTP method is typically used to submit form data to a server in a way that's not visible in the URL?",
        "options": ["GET", "POST", "PUT", "DELETE"],
        "correctOptionIndex": 1,
        "correctOptionText": "POST",
        "difficulty": "easy",
        "explanation": "The POST method submits data to the server in the HTTP request body rather than appending it to the URL as query parameters, making it not visible in the URL. It's commonly used for form submissions, especially when dealing with sensitive or large amounts of data.",
        "hint": "This method sends data in the request body instead of the URL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which JSP directive is used to import Java classes into a JSP page?",
        "options": ["<%@ include %>", "<%@ page %>", "<%@ taglib %>", "<%@ import %>"],
        "correctOptionIndex": 1,
        "correctOptionText": "<%@ page %>",
        "difficulty": "medium",
        "explanation": "The page directive with the import attribute (<%@ page import=\"package.class\" %>) is used to import Java classes into a JSP page. This allows the JSP page to use these classes without specifying their fully qualified names.",
        "hint": "This directive can specify various page attributes including the import attribute."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the purpose of the web.xml file in a Java web application?",
        "options": ["To define CSS styles", "To configure the deployment descriptor", "To store JavaScript code", "To define database connections"],
        "correctOptionIndex": 1,
        "correctOptionText": "To configure the deployment descriptor",
        "difficulty": "easy",
        "explanation": "The web.xml file serves as the deployment descriptor for a Java web application. It configures how the web application should be deployed, including servlet mappings, filter configurations, security constraints, and other web application settings.",
        "hint": "This XML file contains configuration information for the web application container."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which of the following is a Java-based MVC framework for building enterprise web applications?",
        "options": ["Node.js", "Spring MVC", "Django", "Express"],
        "correctOptionIndex": 1,
        "correctOptionText": "Spring MVC",
        "difficulty": "easy",
        "explanation": "Spring MVC is a Java-based framework that implements the Model-View-Controller pattern for building web applications. It's part of the larger Spring Framework and provides a robust architecture for developing enterprise web applications.",
        "hint": "This framework is part of a popular Java ecosystem that includes dependency injection and other enterprise features."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which servlet method is called by the container to handle HTTP GET requests?",
        "options": ["doGet()", "handleGet()", "processGet()", "serviceGet()"],
        "correctOptionIndex": 0,
        "correctOptionText": "doGet()",
        "difficulty": "easy",
        "explanation": "The doGet() method in HttpServlet is called by the servlet container to handle HTTP GET requests. This method takes HttpServletRequest and HttpServletResponse parameters and is where you implement the logic to handle GET requests.",
        "hint": "This method is specifically designed to handle one HTTP verb."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What annotation can be used to map web requests to specific handler methods in Spring MVC?",
        "options": ["@WebServlet", "@Controller", "@RequestMapping", "@PathVariable"],
        "correctOptionIndex": 2,
        "correctOptionText": "@RequestMapping",
        "difficulty": "medium",
        "explanation": "The @RequestMapping annotation is used in Spring MVC to map web requests to specific handler methods. It can specify the URL pattern, HTTP method, produces/consumes content types, and other attributes for mapping requests to controllers.",
        "hint": "This annotation helps direct incoming HTTP requests to the appropriate controller methods."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which lifecycle method is called once when a servlet is first created and loaded?",
        "options": ["service()", "init()", "doGet()", "destroy()"],
        "correctOptionIndex": 1,
        "correctOptionText": "init()",
        "difficulty": "easy",
        "explanation": "The init() method is called once when a servlet is first created and loaded by the servlet container. This method is used for one-time initialization of resources that will be used throughout the servlet's lifecycle.",
        "hint": "This method is used for initializing the servlet before it starts handling requests."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which JSP tag is used to include content from another file at request time?",
        "options": ["<jsp:include>", "<jsp:forward>", "<jsp:useBean>", "<jsp:import>"],
        "correctOptionIndex": 0,
        "correctOptionText": "<jsp:include>",
        "difficulty": "medium",
        "explanation": "The <jsp:include> action tag is used to include content from another file at request time. Unlike the <%@ include %> directive which includes content at translation time, <jsp:include> includes content dynamically when the request is processed.",
        "hint": "This action tag performs dynamic inclusion of another resource during request processing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the purpose of the HttpSession interface in Java web applications?",
        "options": ["To manage session state between client requests", "To handle HTTP responses", "To process form submissions", "To create database connections"],
        "correctOptionIndex": 0,
        "correctOptionText": "To manage session state between client requests",
        "difficulty": "easy",
        "explanation": "The HttpSession interface provides a way to identify a user across multiple page requests or visits to a website and to store information about that user. It helps maintain state information between different HTTP requests from the same client.",
        "hint": "This interface helps track a user's interaction with a web application across multiple requests."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which of the following is NOT a valid scope in JSP?",
        "options": ["page", "request", "session", "global"],
        "correctOptionIndex": 3,
        "correctOptionText": "global",
        "difficulty": "medium",
        "explanation": "There is no 'global' scope in JSP. The valid scopes are page (variables accessible only within the page), request (variables accessible for the duration of the request), session (variables accessible across multiple requests from the same client), and application (variables accessible to all clients and requests).",
        "hint": "JSP has four standard scopes, and one of these options doesn't belong."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which technology provides a standardized way to access databases from Java web applications?",
        "options": ["JPA", "JAXB", "JDBC", "JMS"],
        "correctOptionIndex": 2,
        "correctOptionText": "JDBC",
        "difficulty": "easy",
        "explanation": "Java Database Connectivity (JDBC) is an API that provides a standard way to access relational databases from Java applications, including web applications. It allows Java code to execute SQL statements and interact with various database systems.",
        "hint": "This API is specifically designed for database connectivity in Java applications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the primary purpose of a Filter in Java web applications?",
        "options": ["To transform the response data", "To intercept requests and responses for preprocessing or postprocessing", "To create database connections", "To cache static content"],
        "correctOptionIndex": 1,
        "correctOptionText": "To intercept requests and responses for preprocessing or postprocessing",
        "difficulty": "medium",
        "explanation": "Filters in Java web applications intercept requests to and responses from resources (such as servlets or JSP pages). They can perform preprocessing on requests before they reach the resource and postprocessing on responses before they're sent back to the client.",
        "hint": "These components sit in the request/response pipeline and can modify or process data flowing through them."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which annotation is used to configure a servlet in Java EE 6 and later without using web.xml?",
        "options": ["@Servlet", "@WebServlet", "@HttpServlet", "@ServletConfig"],
        "correctOptionIndex": 1,
        "correctOptionText": "@WebServlet",
        "difficulty": "medium",
        "explanation": "The @WebServlet annotation is used to define a servlet component in a Java web application without using the web.xml deployment descriptor. It was introduced in Java EE 6 and simplifies servlet configuration.",
        "hint": "This annotation is part of the annotation-based configuration approach in modern Java EE versions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What does RESTful web service stand for?",
        "options": ["Reliable Entity State Transfer", "Representational State Transfer", "Remote Entity Service Technology", "Responsive Endpoint State Technology"],
        "correctOptionIndex": 1,
        "correctOptionText": "Representational State Transfer",
        "difficulty": "easy",
        "explanation": "REST stands for Representational State Transfer. It's an architectural style for designing networked applications, typically using HTTP as the transport protocol. RESTful web services provide interoperability between computer systems on the internet.",
        "hint": "This architectural style focuses on how states of resources are represented and transferred over HTTP."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which Java API is used for creating RESTful web services?",
        "options": ["JAXB", "JAX-RS", "JNDI", "JPA"],
        "correctOptionIndex": 1,
        "correctOptionText": "JAX-RS",
        "difficulty": "medium",
        "explanation": "JAX-RS (Java API for RESTful Web Services) provides support for creating RESTful web services in Java. It uses annotations to simplify the development of RESTful web services and clients that communicate using HTTP.",
        "hint": "This API specifically targets REST-based architectures in Java."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the purpose of the Expression Language (EL) in JSP?",
        "options": ["To define CSS styles", "To create JavaScript functions", "To access and manipulate Java objects", "To configure the web server"],
        "correctOptionIndex": 2,
        "correctOptionText": "To access and manipulate Java objects",
        "difficulty": "medium",
        "explanation": "The Expression Language (EL) provides a way to access and manipulate Java objects in a JSP page without using explicit Java code. It simplifies the syntax for accessing data stored in JavaBeans, request/session/application attributes, and other objects.",
        "hint": "This language helps separate Java code from the presentation layer in JSP pages."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which HTTP status code indicates a successful request in RESTful web services?",
        "options": ["200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"],
        "correctOptionIndex": 0,
        "correctOptionText": "200 OK",
        "difficulty": "easy",
        "explanation": "The HTTP status code 200 OK indicates that the request has succeeded. In RESTful web services, this is typically returned when a GET request is successful, a resource is successfully retrieved, or a POST/PUT operation completes successfully.",
        "hint": "This is the standard code for successful HTTP requests."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which method in a servlet is responsible for handling all types of HTTP requests?",
        "options": ["process()", "service()", "handleRequest()", "doRequest()"],
        "correctOptionIndex": 1,
        "correctOptionText": "service()",
        "difficulty": "medium",
        "explanation": "The service() method in a servlet is responsible for handling all types of HTTP requests. It dispatches the request to the appropriate doXXX() method (like doGet() or doPost()) based on the HTTP method used in the request.",
        "hint": "This method acts as a dispatcher for various HTTP methods in a servlet."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the correct syntax for a JSP expression?",
        "options": ["<% expression %>", "<%= expression %>", "{% expression %}", "{{ expression }}"],
        "correctOptionIndex": 1,
        "correctOptionText": "<%= expression %>",
        "difficulty": "easy",
        "explanation": "A JSP expression is written as <%= expression %>. It evaluates the Java expression and converts the result to a String which is then inserted into the page output. Unlike a scriptlet (<% %>), an expression doesn't need a semicolon.",
        "hint": "This syntax evaluates an expression and outputs its result directly into the HTML response."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which interface must be implemented to create a custom tag in JSP?",
        "options": ["Tag", "TagHandler", "CustomTag", "TagSupport"],
        "correctOptionIndex": 0,
        "correctOptionText": "Tag",
        "difficulty": "hard",
        "explanation": "The Tag interface from the javax.servlet.jsp.tagext package is the base interface that must be implemented to create a custom tag in JSP. More commonly, developers extend TagSupport or BodyTagSupport, which implement the Tag interface.",
        "hint": "This is the root interface in the JSP tag extension API."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which component is primarily responsible for determining which pages to display based on the request in a Java web application?",
        "options": ["Model", "View", "Controller", "Repository"],
        "correctOptionIndex": 2,
        "correctOptionText": "Controller",
        "difficulty": "easy",
        "explanation": "In the MVC (Model-View-Controller) architecture commonly used in Java web applications, the Controller is responsible for handling the user request, determining which pages to display, and coordinating with the Model to prepare data for the View.",
        "hint": "This component handles the flow of the application and directs the request to the appropriate handlers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the purpose of the JSTL (JavaServer Pages Standard Tag Library)?",
        "options": ["To compile JSP pages", "To provide common functionality through tags", "To connect to databases", "To manage user authentication"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide common functionality through tags",
        "difficulty": "medium",
        "explanation": "The JavaServer Pages Standard Tag Library (JSTL) provides a collection of tag libraries that implement common web development functionality, such as iteration, conditional logic, XML processing, and SQL operations. It helps reduce the amount of scriptlet code in JSP pages.",
        "hint": "This library encapsulates common JSP functionality into reusable tags."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which annotation is used to map a method to HTTP POST requests in Spring MVC?",
        "options": ["@PostMapping", "@RequestPost", "@HttpPost", "@Post"],
        "correctOptionIndex": 0,
        "correctOptionText": "@PostMapping",
        "difficulty": "medium",
        "explanation": "The @PostMapping annotation in Spring MVC is a composed annotation that acts as a shortcut for @RequestMapping(method = RequestMethod.POST). It specifically maps HTTP POST requests to handler methods.",
        "hint": "This is a specialized version of @RequestMapping focused on one HTTP method."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the default session timeout for a Java web application?",
        "options": ["15 minutes", "30 minutes", "1 hour", "No timeout by default"],
        "correctOptionIndex": 1,
        "correctOptionText": "30 minutes",
        "difficulty": "medium",
        "explanation": "The default session timeout for a Java web application is 30 minutes. This is the time after which an inactive session will expire. This value can be configured in the web.xml file or programmatically using the setMaxInactiveInterval() method.",
        "hint": "This is the standard inactive period after which a session is considered expired if not explicitly configured."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which method is used to get a parameter value from an HTTP request in servlets?",
        "options": ["request.getAttribute()", "request.getParameter()", "request.getValue()", "request.fetchParameter()"],
        "correctOptionIndex": 1,
        "correctOptionText": "request.getParameter()",
        "difficulty": "easy",
        "explanation": "The getParameter() method of the HttpServletRequest interface is used to retrieve a parameter value from an HTTP request. This method returns the value of the specified parameter as a String, or null if the parameter does not exist.",
        "hint": "This method retrieves form data or query string parameters from client requests."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which Java web application deployment structure is correct?",
        "options": ["WEB-INF contains web.xml and classes directory", "META-INF contains web.xml and lib directory", "ROOT contains WEB-INF and classes directory", "SRC contains WEB-INF and META-INF"],
        "correctOptionIndex": 0,
        "correctOptionText": "WEB-INF contains web.xml and classes directory",
        "difficulty": "medium",
        "explanation": "In a Java web application, the WEB-INF directory is not accessible directly from the browser and contains the web.xml deployment descriptor, the classes directory (for compiled Java classes), and the lib directory (for JAR dependencies).",
        "hint": "This directory structure is defined by the Java Servlet specification."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What does the JAX-WS API provide in Java web development?",
        "options": ["XML binding", "SOAP web services", "Database connectivity", "HTTP client functionality"],
        "correctOptionIndex": 1,
        "correctOptionText": "SOAP web services",
        "difficulty": "hard",
        "explanation": "JAX-WS (Java API for XML Web Services) provides support for creating SOAP-based web services in Java. It uses annotations to simplify the development of web services and clients, handling the XML/SOAP processing details.",
        "hint": "This API deals with a specific protocol for web services that uses XML messages."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "Which component in Java EE handles object-relational mapping?",
        "options": ["JPA", "JSF", "CDI", "EJB"],
        "correctOptionIndex": 0,
        "correctOptionText": "JPA",
        "difficulty": "medium",
        "explanation": "The Java Persistence API (JPA) handles object-relational mapping in Java EE applications. It provides a framework for managing relational data in Java applications, mapping Java objects to database tables and handling database operations.",
        "hint": "This API focuses on persisting Java objects to relational databases."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad83",
        "module": "Web Development with Java",
        "questionText": "What is the purpose of the Jakarta Server Faces (JSF) framework?",
        "options": ["Database access", "Component-based UI development", "Web service creation", "Server configuration"],
        "correctOptionIndex": 1,
        "correctOptionText": "Component-based UI development",
        "difficulty": "hard",
        "explanation": "Jakarta Server Faces (JSF), formerly JavaServer Faces, is a component-based user interface framework for Java web applications. It provides a set of pre-built UI components, manages the UI component state, handles event processing, and simplifies building web interfaces.",
        "hint": "This framework focuses on building reusable UI components and managing their lifecycle."
    },
  ]

export default JavaQuestions;