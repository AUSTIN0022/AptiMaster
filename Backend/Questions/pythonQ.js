const pythonQuestions = [
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "Which of the following is the correct way to assign a value to a variable in Python?",
      "options": ["x := 5", "x = 5", "x == 5", "x <- 5"],
      "correctOptionIndex": 1,
      "correctOptionText": "x = 5",
      "difficulty": "easy",
      "explanation": "In Python, the equals sign (=) is used for variable assignment. The other options are either invalid syntax or used for different purposes.",
      "hint": "Look for the standard assignment operator in Python."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of the following code: `print(type(10))`?",
      "options": ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"],
      "correctOptionIndex": 0,
      "correctOptionText": "<class 'int'>",
      "difficulty": "easy",
      "explanation": "The `type()` function returns the data type of an object. Since 10 is an integer, `type(10)` returns `<class 'int'>`.",
      "hint": "What data type is a number without a decimal point?"
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the result of `3 * 'abc'` in Python?",
      "options": ["9", "abcabcabc", "abc3", "Error"],
      "correctOptionIndex": 1,
      "correctOptionText": "abcabcabc",
      "difficulty": "easy",
      "explanation": "In Python, multiplying a string by an integer results in the string being repeated that many times. So `3 * 'abc'` repeats 'abc' three times, resulting in 'abcabcabc'.",
      "hint": "Think about string repetition in Python."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "Which of the following is a valid comment in Python?",
      "options": ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
      "correctOptionIndex": 2,
      "correctOptionText": "# This is a comment",
      "difficulty": "easy",
      "explanation": "In Python, comments start with the hash symbol (#). The other options are comment styles from other programming languages like C/C++, Java, or HTML.",
      "hint": "Python uses a single character to start comments."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What does the `len()` function return when applied to the string 'Python'?",
      "options": ["5", "6", "7", "Error"],
      "correctOptionIndex": 1,
      "correctOptionText": "6",
      "difficulty": "easy",
      "explanation": "The `len()` function returns the number of characters in a string. 'Python' has 6 characters, so `len('Python')` returns 6.",
      "hint": "Count the number of characters in the word 'Python'."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the result of `7 / 2` in Python 3?",
      "options": ["3", "3.5", "3.0", "2"],
      "correctOptionIndex": 1,
      "correctOptionText": "3.5",
      "difficulty": "easy",
      "explanation": "In Python 3, the forward slash (/) performs floating-point division, which means it returns a float even when dividing two integers. So `7 / 2` returns `3.5`.",
      "hint": "Python 3 uses true division with the / operator."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(10 + 5 * 2)`?",
      "options": ["30", "20", "15", "25"],
      "correctOptionIndex": 2,
      "correctOptionText": "15",
      "difficulty": "easy",
      "explanation": "Python follows the standard order of operations (PEMDAS). Multiplication is performed before addition, so `5 * 2` is evaluated first (resulting in 10), then 10 is added to 10, resulting in 20.",
      "hint": "Remember the order of operations in mathematics: multiplication has higher precedence than addition."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "Which of the following is a valid way to define a multi-line string in Python?",
      "options": ["'This is a\\nmulti-line string'", "\"\"\"This is a\nmulti-line string\"\"\"", "'This is a\nmulti-line string'", "All of the above"],
      "correctOptionIndex": 3,
      "correctOptionText": "All of the above",
      "difficulty": "medium",
      "explanation": "Python allows multi-line strings to be defined using newline escape sequences (\\n) within single or double quotes, or by using triple quotes (''' or \"\"\") which can span multiple lines directly.",
      "hint": "Python provides multiple ways to represent strings that contain line breaks."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(bool(0), bool(1), bool(-1))`?",
      "options": ["False True True", "True True True", "False True False", "True False True"],
      "correctOptionIndex": 0,
      "correctOptionText": "False True True",
      "difficulty": "medium",
      "explanation": "In Python, `bool(0)` returns `False` as 0 is considered falsy. Any non-zero number, like 1 or -1, is considered truthy, so `bool(1)` and `bool(-1)` both return `True`.",
      "hint": "Only zero is considered False when converting numbers to boolean values."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the result of `round(2.5)` in Python?",
      "options": ["2", "3", "2.5", "Error"],
      "correctOptionIndex": 1,
      "correctOptionText": "3",
      "difficulty": "medium",
      "explanation": "Python's `round()` function uses banker's rounding, rounding to the nearest even number in case of a tie. However, for 2.5, it rounds up to 3.",
      "hint": "When a number is exactly halfway between two integers, Python rounds to the nearest even integer."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What will be the value of `x` after running the code: `x = 10; x += 5`?",
      "options": ["10", "5", "15", "50"],
      "correctOptionIndex": 2,
      "correctOptionText": "15",
      "difficulty": "easy",
      "explanation": "The `+=` operator adds the right operand to the left operand and assigns the result to the left operand. So `x += 5` is equivalent to `x = x + 5`. Since `x` starts with a value of 10, after `x += 5`, the value of `x` becomes 15.",
      "hint": "The += operator adds the right value to the variable and then assigns the result back to the variable."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print('Python'[1:4])`?",
      "options": ["Pyt", "yth", "ytho", "Python"],
      "correctOptionIndex": 1,
      "correctOptionText": "yth",
      "difficulty": "medium",
      "explanation": "String slicing in Python uses the syntax `string[start:end]`, where start is inclusive and end is exclusive. So, `'Python'[1:4]` extracts characters from index 1 (which is 'y') up to but not including index 4 (which is 'o'), resulting in 'yth'.",
      "hint": "In string slicing, the start index is included but the end index is excluded."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(2 ** 3)`?",
      "options": ["5", "6", "8", "Error"],
      "correctOptionIndex": 2,
      "correctOptionText": "8",
      "difficulty": "easy",
      "explanation": "In Python, the `**` operator is used for exponentiation. So `2 ** 3` calculates 2 raised to the power of 3, which is 2 * 2 * 2 = 8.",
      "hint": "The ** operator in Python is used for exponentiation."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the result of `type(1 + 2.0)`?",
      "options": ["<class 'int'>", "<class 'float'>", "<class 'complex'>", "<class 'number'>"],
      "correctOptionIndex": 1,
      "correctOptionText": "<class 'float'>",
      "difficulty": "medium",
      "explanation": "When an integer and a float are used in an arithmetic operation, Python converts the integer to a float and returns a float result. So `1 + 2.0` returns `3.0`, which is a float.",
      "hint": "When operations involve different numeric types, Python usually converts to the more complex type."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print('Hello'.lower())`?",
      "options": ["hello", "HELLO", "Hello", "Error"],
      "correctOptionIndex": 0,
      "correctOptionText": "hello",
      "difficulty": "easy",
      "explanation": "The `lower()` method returns a copy of the string with all uppercase characters converted to lowercase. So `'Hello'.lower()` returns `'hello'`.",
      "hint": "The lower() method converts all characters in a string to lowercase."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(10 // 3)`?",
      "options": ["3", "3.0", "3.33", "3.333"],
      "correctOptionIndex": 0,
      "correctOptionText": "3",
      "difficulty": "medium",
      "explanation": "The `//` operator performs integer division, which means it divides the left operand by the right operand and rounds down to the nearest integer. So `10 // 3` results in `3`.",
      "hint": "The // operator performs floor division (division that rounds down to the nearest integer)."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(bool([]), bool([1, 2]))`?",
      "options": ["True True", "False True", "True False", "False False"],
      "correctOptionIndex": 1,
      "correctOptionText": "False True",
      "difficulty": "medium",
      "explanation": "In Python, empty collections (like empty lists) are considered falsy, so `bool([])` returns `False`. Non-empty collections are considered truthy, so `bool([1, 2])` returns `True`.",
      "hint": "Empty collections evaluate to False in a boolean context, while non-empty collections evaluate to True."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What will be the output of `print(5 > 3 and 6 < 8)`?",
      "options": ["True", "False", "5", "Error"],
      "correctOptionIndex": 0,
      "correctOptionText": "True",
      "difficulty": "easy",
      "explanation": "The `and` operator returns `True` if both operands are `True`. Since `5 > 3` is `True` and `6 < 8` is also `True`, the expression `5 > 3 and 6 < 8` evaluates to `True`.",
      "hint": "The 'and' operator returns True only if both conditions are True."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(isinstance(5, int))`?",
      "options": ["True", "False", "5", "Error"],
      "correctOptionIndex": 0,
      "correctOptionText": "True",
      "difficulty": "medium",
      "explanation": "The `isinstance()` function checks if an object is an instance of a specific class or a subclass thereof. Since 5 is an integer, `isinstance(5, int)` returns `True`.",
      "hint": "The isinstance() function checks if an object belongs to a specified class or type."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(7 % 3)`?",
      "options": ["1", "2", "3", "4"],
      "correctOptionIndex": 1,
      "correctOptionText": "2",
      "difficulty": "easy",
      "explanation": "The modulo operator (`%`) returns the remainder of dividing the left operand by the right operand. When dividing 7 by 3, the quotient is 2 with a remainder of 1. So `7 % 3` returns `1`.",
      "hint": "The modulo operator (%) returns the remainder after division."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print('Hello' + 'World')`?",
      "options": ["HelloWorld", "Hello World", "Hello+World", "Error"],
      "correctOptionIndex": 0,
      "correctOptionText": "HelloWorld",
      "difficulty": "easy",
      "explanation": "In Python, the `+` operator, when used with strings, concatenates them. So `'Hello' + 'World'` results in `'HelloWorld'`.",
      "hint": "The + operator concatenates strings in Python without adding any spaces."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "Which function would you use to convert an integer to a string in Python?",
      "options": ["int()", "string()", "str()", "convert()"],
      "correctOptionIndex": 2,
      "correctOptionText": "str()",
      "difficulty": "easy",
      "explanation": "The `str()` function is used to convert objects to strings. To convert an integer to a string, you would use `str(integer_value)`.",
      "hint": "Look for a function that starts with the same three letters as 'string'."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(False or True)`?",
      "options": ["False", "True", "0", "1"],
      "correctOptionIndex": 1,
      "correctOptionText": "True",
      "difficulty": "medium",
      "explanation": "The `or` operator returns `True` if at least one of the operands is `True`. Since `True` is `True`, the expression `False or True` evaluates to `True`.",
      "hint": "The 'or' operator returns True if at least one of the conditions is True."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the result of `int('101', 2)`?",
      "options": ["101", "5", "7", "Error"],
      "correctOptionIndex": 1,
      "correctOptionText": "5",
      "difficulty": "hard",
      "explanation": "The `int()` function can take a base as a second argument. When `int('101', 2)` is called, it interprets '101' as a binary number and converts it to its decimal equivalent, which is 5 (1*2^2 + 0*2^1 + 1*2^0 = 4 + 0 + 1 = 5).",
      "hint": "The second argument to int() specifies the base of the number system."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What does the following code output? `print(4 + 3 // 2 * 3)`",
      "options": ["5.5", "6", "7", "10"],
      "correctOptionIndex": 2,
      "correctOptionText": "7",
      "difficulty": "medium",
      "explanation": "Following the order of operations (PEMDAS), first `3 // 2` is evaluated to `1` (integer division), then `1 * 3` is evaluated to `3`, and finally `4 + 3` is evaluated to `7`.",
      "hint": "Follow the order of operations: division and multiplication before addition."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the result of `type(1j)`?",
      "options": ["<class 'int'>", "<class 'float'>", "<class 'complex'>", "<class 'imaginary'>"],
      "correctOptionIndex": 2,
      "correctOptionText": "<class 'complex'>",
      "difficulty": "hard",
      "explanation": "In Python, the suffix `j` or `J` is used to denote the imaginary part of a complex number. So `1j` is a complex number with a zero real part and an imaginary part of 1, and its type is complex.",
      "hint": "In Python, numbers with 'j' as a suffix represent a specific type of number used in mathematics."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the output of `print(True + True + True)`?",
      "options": ["3", "True", "6", "Error"],
      "correctOptionIndex": 0,
      "correctOptionText": "3",
      "difficulty": "medium",
      "explanation": "In Python, `True` has a numeric value of 1 when used in arithmetic operations. So `True + True + True` is equivalent to `1 + 1 + 1`, which equals `3`.",
      "hint": "Boolean values can be used in arithmetic operations in Python, with True having a numeric value."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What is the result of `hex(16)`?",
      "options": ["'0x10'", "'10'", "'16'", "'0x16'"],
      "correctOptionIndex": 0,
      "correctOptionText": "'0x10'",
      "difficulty": "hard",
      "explanation": "The `hex()` function converts an integer to a hexadecimal string prefixed with '0x'. 16 in decimal is 10 in hexadecimal, so `hex(16)` returns `'0x10'`.",
      "hint": "The hex() function converts a number to its hexadecimal representation."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What does the `id()` function return in Python?",
      "options": ["The hash of an object", "The memory address of an object", "The index of an object in a collection", "The unique identifier of an object"],
      "correctOptionIndex": 3,
      "correctOptionText": "The unique identifier of an object",
      "difficulty": "hard",
      "explanation": "The `id()` function returns the identity (unique identifier) of an object, which is guaranteed to be unique and constant during the lifetime of the object. In CPython implementation, this is the memory address of the object.",
      "hint": "Every object in Python has a unique number associated with it."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad85",
      "module": "Python Basics",
      "questionText": "What will be the output of `print(f\"{12.3456:.2f}\")`?",
      "options": ["12.34", "12.35", "12.34.56", "Error"],
      "correctOptionIndex": 0,
      "correctOptionText": "12.34",
      "difficulty": "hard",
      "explanation": "The f-string format specifier `.2f` formats a floating-point number to have 2 decimal places. So `f\"{12.3456:.2f}\"` formats `12.3456` to have 2 decimal places, resulting in `12.35` due to rounding.",
      "hint": "The .2f format specifier in an f-string rounds a number to 2 decimal places."
    },

    // Control Structures
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "Which of the following is the correct syntax for an if statement in Python?",
        "options": ["if (x > 5) { print('Greater') }", "if x > 5: print('Greater')", "if x > 5 then print('Greater')", "if x > 5 print('Greater')"],
        "correctOptionIndex": 1,
        "correctOptionText": "if x > 5: print('Greater')",
        "difficulty": "easy",
        "explanation": "In Python, the correct syntax for an if statement uses a colon after the condition and doesn't require parentheses or curly braces. Indentation is used to define the block of code to be executed if the condition is true.",
        "hint": "Python uses colons and indentation for control structures, not curly braces."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nx = 5\nif x > 10:\n    print('Greater than 10')\nelif x > 0:\n    print('Greater than 0')\nelse:\n    print('Less than or equal to 0')\n```",
        "options": ["Greater than 10", "Greater than 0", "Less than or equal to 0", "No output"],
        "correctOptionIndex": 1,
        "correctOptionText": "Greater than 0",
        "difficulty": "easy",
        "explanation": "Since x is 5, the first condition (x > 10) is False, so it moves to the next condition (x > 0). This condition is True because 5 is greater than 0, so it prints 'Greater than 0' and exits the if-elif-else structure.",
        "hint": "Check the value of x against each condition in order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What statement is used to immediately terminate a loop in Python?",
        "options": ["exit", "stop", "break", "end"],
        "correctOptionIndex": 2,
        "correctOptionText": "break",
        "difficulty": "easy",
        "explanation": "The 'break' statement is used to exit a loop immediately, terminating the loop completely. Once encountered, the program continues with the next statement after the loop.",
        "hint": "This keyword forcefully exits the entire loop at the point it's encountered."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nfor i in range(5):\n    print(i, end=' ')\n```",
        "options": ["0 1 2 3 4 5", "0 1 2 3 4", "1 2 3 4 5", "5 4 3 2 1"],
        "correctOptionIndex": 1,
        "correctOptionText": "0 1 2 3 4",
        "difficulty": "easy",
        "explanation": "The range(5) function generates numbers from 0 to 4 (5 not included). The loop iterates through these numbers, printing each one followed by a space using the end=' ' parameter.",
        "hint": "range(n) generates numbers from 0 to n-1."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "Which statement is used to skip the current iteration of a loop and move to the next iteration?",
        "options": ["pass", "skip", "continue", "next"],
        "correctOptionIndex": 2,
        "correctOptionText": "continue",
        "difficulty": "easy",
        "explanation": "The 'continue' statement skips the remaining code in the current iteration of a loop and jumps to the next iteration. Unlike 'break', it doesn't terminate the loop entirely.",
        "hint": "This keyword jumps to the next iteration without executing the remaining code in the current iteration."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i, end=' ')\n```",
        "options": ["1 2 3 4 5", "1 2 4 5", "1 2", "1 2 3"],
        "correctOptionIndex": 1,
        "correctOptionText": "1 2 4 5",
        "difficulty": "medium",
        "explanation": "The loop iterates through numbers 1 to 5. When i equals 3, the continue statement skips the rest of that iteration, so 3 is not printed. The numbers 1, 2, 4, and 5 are printed with a space between them.",
        "hint": "The continue statement causes the loop to skip printing when i is 3."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\ncount = 0\nwhile count < 5:\n    count += 1\n    if count == 3:\n        break\n    print(count, end=' ')\n```",
        "options": ["1 2", "1 2 3", "1 2 3 4 5", "1 2 4 5"],
        "correctOptionIndex": 0,
        "correctOptionText": "1 2",
        "difficulty": "medium",
        "explanation": "The loop increments count from 0. When count is 1, it prints 1. When count is 2, it prints 2. When count becomes 3, the break statement terminates the loop before printing 3. Therefore, only 1 and 2 are printed.",
        "hint": "The break statement terminates the loop immediately, so no further iterations occur."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What is the purpose of the 'pass' statement in Python?",
        "options": ["To skip the current iteration of a loop", "To exit a loop", "To indicate an empty block of code", "To bypass error checking"],
        "correctOptionIndex": 2,
        "correctOptionText": "To indicate an empty block of code",
        "difficulty": "medium",
        "explanation": "The 'pass' statement is a null operation in Python - it doesn't do anything. It's used as a placeholder when syntactically a statement is required but no action is needed. It's commonly used in empty function definitions, classes, or as a placeholder in control structures.",
        "hint": "This keyword is used when you need to have a statement syntactically but don't want any action to be performed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nnums = [1, 2, 3, 4, 5]\nfor num in nums:\n    if num % 2 == 0:\n        print(num, end=' ')\n```",
        "options": ["1 3 5", "2 4", "1 2 3 4 5", "No output"],
        "correctOptionIndex": 1,
        "correctOptionText": "2 4",
        "difficulty": "easy",
        "explanation": "The code iterates through the list [1, 2, 3, 4, 5] and checks if each number is even (divisible by 2 with no remainder). It prints only the even numbers, which are 2 and 4.",
        "hint": "The condition num % 2 == 0 checks if a number is even."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "How many times will the following loop execute?\n```python\nfor i in range(2, 10, 3):\n    print(i)\n```",
        "options": ["8", "3", "4", "5"],
        "correctOptionIndex": 1,
        "correctOptionText": "3",
        "difficulty": "medium",
        "explanation": "The range(2, 10, 3) generates a sequence starting at 2, ending before 10, with a step of 3. This creates the sequence [2, 5, 8]. Therefore, the loop will execute 3 times.",
        "hint": "range(start, stop, step) generates numbers from start to stop-1 with the given step size."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nfor i in range(3):\n    for j in range(2):\n        print(f\"({i},{j})\", end=' ')\n```",
        "options": ["(0,0) (0,1) (1,0) (1,1) (2,0) (2,1)", "(0,0) (1,0) (2,0) (0,1) (1,1) (2,1)", "(0,0) (0,1) (0,2) (1,0) (1,1) (1,2)", "No output"],
        "correctOptionIndex": 0,
        "correctOptionText": "(0,0) (0,1) (1,0) (1,1) (2,0) (2,1)",
        "difficulty": "medium",
        "explanation": "This is a nested loop where the outer loop runs 3 times (i=0,1,2) and for each iteration of the outer loop, the inner loop runs 2 times (j=0,1). The code prints all combinations of (i,j) in the order of increasing i and, for each i, increasing j.",
        "hint": "In nested loops, the inner loop completes all its iterations for each iteration of the outer loop."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nx = 10\nwhile x > 0:\n    x -= 2\nprint(x)\n```",
        "options": ["0", "-2", "2", "10"],
        "correctOptionIndex": 1,
        "correctOptionText": "-2",
        "difficulty": "medium",
        "explanation": "The loop starts with x=10 and decreases it by 2 in each iteration. The loop continues as long as x > 0. The iterations are x=10→8→6→4→2→0→-2. When x becomes -2, the condition x > 0 is False, so the loop terminates and -2 is printed.",
        "hint": "The loop stops when x is no longer greater than 0, but one more subtraction occurs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nfor i in range(3):\n    print(i)\nelse:\n    print('Done')\n```",
        "options": ["0 1 2", "0 1 2 Done", "Done", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "0 1 2 Done",
        "difficulty": "medium",
        "explanation": "In Python, loops can have an optional else clause that executes when the loop completes normally (without encountering a break statement). Here, the for loop prints 0, 1, 2 and then the else clause prints 'Done'.",
        "hint": "Python's for and while loops can have an else clause that executes after the loop completes normally."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nfor i in range(3):\n    if i == 1:\n        break\n    print(i)\nelse:\n    print('Done')\n```",
        "options": ["0", "0 Done", "0 1 2 Done", "0 1 2"],
        "correctOptionIndex": 0,
        "correctOptionText": "0",
        "difficulty": "hard",
        "explanation": "The loop starts with i=0 and prints 0. Then i becomes 1, triggering the break statement, which terminates the loop. The else clause doesn't execute because the loop didn't complete normally. Therefore, only 0 is printed.",
        "hint": "The else clause in a loop doesn't execute if the loop is terminated by a break statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nfor i in []:\n    print(i)\nelse:\n    print('Empty')\n```",
        "options": ["No output", "Empty", "Error", "None"],
        "correctOptionIndex": 1,
        "correctOptionText": "Empty",
        "difficulty": "hard",
        "explanation": "When iterating over an empty sequence, the loop body doesn't execute at all, but the loop is considered to have completed normally. Therefore, the else clause executes and 'Empty' is printed.",
        "hint": "The else clause in a for loop executes even if the loop iterates zero times (as long as it's not terminated by a break)."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What is the purpose of the 'elif' statement in Python?",
        "options": ["To provide an alternative condition if the previous 'if' or 'elif' is False", "To provide a condition that must be True along with the 'if' condition", "To end an if-else block", "To provide a condition that is checked only if the previous condition is True"],
        "correctOptionIndex": 0,
        "correctOptionText": "To provide an alternative condition if the previous 'if' or 'elif' is False",
        "difficulty": "easy",
        "explanation": "The 'elif' (short for 'else if') statement allows you to check multiple expressions for True and execute a block of code as soon as one of the conditions evaluates to True. It's used after an 'if' statement and before an optional 'else' statement.",
        "hint": "elif is short for 'else if' and provides another condition to check after a previous condition fails."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nwhile True:\n    print('Hello')\n    break\n```",
        "options": ["Hello (printed infinitely)", "Hello (printed once)", "No output", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "Hello (printed once)",
        "difficulty": "easy",
        "explanation": "This is a while loop with a condition that is always True, which would normally create an infinite loop. However, inside the loop, there's a break statement after printing 'Hello'. This causes the loop to terminate after the first iteration, so 'Hello' is printed only once.",
        "hint": "The break statement terminates the loop immediately after executing the first iteration."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "In a nested loop structure, what happens when a 'break' statement is encountered?",
        "options": ["It terminates all loops", "It terminates only the innermost loop", "It terminates the current iteration of the innermost loop", "It causes a syntax error"],
        "correctOptionIndex": 1,
        "correctOptionText": "It terminates only the innermost loop",
        "difficulty": "medium",
        "explanation": "When a 'break' statement is encountered in a nested loop, it terminates only the innermost loop that contains it. The outer loop continues its execution normally.",
        "hint": "The break statement only affects the loop in which it is directly contained."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\ni = 0\nwhile i < 5:\n    i += 1\n    if i == 3:\n        continue\n    print(i, end=' ')\n```",
        "options": ["1 2 3 4 5", "0 1 2 4 5", "1 2 4 5", "0 1 2 3 4"],
        "correctOptionIndex": 2,
        "correctOptionText": "1 2 4 5",
        "difficulty": "medium",
        "explanation": "The loop starts with i=0 and increments it first. When i is 1, it's printed. Similarly, i becomes 2 and is printed. When i becomes 3, the continue statement skips the print statement. When i becomes 4 and 5, they are printed. The loop then terminates as i=5 is not less than 5. So, the output is '1 2 4 5'.",
        "hint": "The continue statement causes the loop to skip printing when i is 3."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What is the main difference between a 'while' loop and a 'for' loop in Python?",
        "options": ["While loops are faster than for loops", "For loops can only iterate over sequences, while while loops can continue until a condition is False", "While loops must use break to terminate, for loops terminate automatically", "For loops can only use integers for iteration"],
        "correctOptionIndex": 1,
        "correctOptionText": "For loops can only iterate over sequences, while while loops can continue until a condition is False",
        "difficulty": "medium",
        "explanation": "A for loop is typically used for iterating over a sequence (like a list, tuple, dictionary, string, etc.) and automatically terminates when it reaches the end of the sequence. A while loop, on the other hand, continues execution as long as a condition remains True, which can be used in more general situations where you don't have a predetermined sequence to iterate over.",
        "hint": "Consider the primary use case for each type of loop and what determines when they stop running."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nnums = [1, 2, 3, 4, 5]\nfor num in nums:\n    if num == 3:\n        nums.remove(num)\nprint(nums)\n```",
        "options": ["[1, 2, 4, 5]", "[1, 2, 3, 4, 5]", "[1, 2, 4]", "Error"],
        "correctOptionIndex": 0,
        "correctOptionText": "[1, 2, 4, 5]",
        "difficulty": "hard",
        "explanation": "The code iterates through the list and when num equals 3, it removes 3 from the list. After the loop completes, the list becomes [1, 2, 4, 5]. Note that modifying a list while iterating through it can lead to unexpected behavior, but in this simple case with a single removal, it works as expected.",
        "hint": "The code removes the number 3 from the list during iteration."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What is a ternary conditional operator in Python?",
        "options": ["An operator that requires three operands", "A shorthand way to write an if-else statement", "An operator that compares three values", "Python doesn't have ternary operators"],
        "correctOptionIndex": 1,
        "correctOptionText": "A shorthand way to write an if-else statement",
        "difficulty": "medium",
        "explanation": "A ternary conditional operator in Python is a one-line shorthand for an if-else statement. It has the form 'value_if_true if condition else value_if_false'. It returns one value if the condition is True and another value if the condition is False.",
        "hint": "This allows you to write simple conditional expressions in a more compact way."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nprint('Even' if 4 % 2 == 0 else 'Odd')\n```",
        "options": ["Even", "Odd", "True", "False"],
        "correctOptionIndex": 0,
        "correctOptionText": "Even",
        "difficulty": "medium",
        "explanation": "This code uses a ternary operator to check if 4 is even. The condition 4 % 2 == 0 evaluates to True (since 4 is divisible by 2 with no remainder), so the value 'Even' is returned and printed.",
        "hint": "The ternary operator returns the first value if the condition is True, otherwise the second value."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What happens if you use a 'return' statement inside a loop in a function?",
        "options": ["The loop completes and then the function returns", "The loop and function terminate immediately, returning the specified value", "It causes a syntax error", "The loop terminates, but the function continues"],
        "correctOptionIndex": 1,
        "correctOptionText": "The loop and function terminate immediately, returning the specified value",
        "difficulty": "medium",
        "explanation": "When a 'return' statement is encountered inside a loop in a function, both the loop and the function terminate immediately. The specified value is returned from the function, and no further iterations of the loop occur.",
        "hint": "The return statement causes immediate exit from both the loop and the function."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\ndef find_even(nums):\n    for num in nums:\n        if num % 2 == 0:\n            return num\n    return -1\n\nprint(find_even([1, 3, 5, 6, 7]))\n```",
        "options": ["[2, 4, 6]", "6", "2", "Error"],
        "correctOptionIndex": 1,
        "correctOptionText": "6",
        "difficulty": "hard",
        "explanation": "The function iterates through the list and as soon as it finds an even number (divisible by 2 with no remainder), it returns that number and exits the function. In the list [1, 3, 5, 6, 7], the first even number is 6, so the function returns 6.",
        "hint": "The function returns the first even number it finds in the list."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\nfor char in 'Python':\n    if char == 'h':\n        break\n    print(char, end=' ')\nelse:\n    print('Done')\n```",
        "options": ["P y t", "P y t Done", "P y t o n Done", "P y t o n"],
        "correctOptionIndex": 0,
        "correctOptionText": "P y t",
        "difficulty": "hard",
        "explanation": "The loop iterates through each character in 'Python'. It prints each character until it encounters 'h', at which point the break statement terminates the loop. Since the loop was terminated by a break, the else clause doesn't execute. Therefore, only 'P y t' is printed.",
        "hint": "The else clause in a loop doesn't execute if the loop is terminated by a break statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following code?\n```python\ni = 0\nwhile i < 3:\n    print(i, end=' ')\n    i += 1\nelse:\n    print('Done')\n```",
        "options": ["0 1 2", "0 1 2 Done", "0 1 2 3", "0 1 2 3 Done"],
        "correctOptionIndex": 1,
        "correctOptionText": "0 1 2 Done",
        "difficulty": "medium",
        "explanation": "The while loop continues as long as i < 3. It prints i and increments it on each iteration. When i becomes 3, the condition i < 3 is False, so the loop terminates. Since the loop completed normally (without a break), the else clause executes and 'Done' is printed. Therefore, the output is '0 1 2 Done'.",
        "hint": "The else clause in a while loop executes when the loop condition becomes False."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What will be the output of the following nested if statement?\n```python\nx = 10\nif x > 0:\n    if x < 5:\n        print('Small positive')\n    else:\n        print('Large positive')\nelse:\n    print('Non-positive')\n```",
        "options": ["Small positive", "Large positive", "Non-positive", "No output"],
        "correctOptionIndex": 1,
        "correctOptionText": "Large positive",
        "difficulty": "medium",
        "explanation": "First, the condition x > 0 is checked, which is True for x=10. Then, within the first if block, the condition x < 5 is checked, which is False for x=10. Therefore, the else clause associated with the inner if executes, printing 'Large positive'.",
        "hint": "Trace the code execution with x=10 through each condition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What is the output of this code that uses a for loop with an else clause?\n```python\nfor i in range(3):\n    if i > 5:\n        break\n    print(i, end=' ')\nelse:\n    print('Done')\n```",
        "options": ["0 1 2", "0 1 2 Done", "Done", "No output"],
        "correctOptionIndex": 1,
        "correctOptionText": "0 1 2 Done",
        "difficulty": "hard",
        "explanation": "The for loop iterates through the range(3), printing each number. The condition i > 5 is never True since i only takes values 0, 1, and 2, so the break statement is never executed. After the loop completes normally, the else clause executes, printing 'Done'. Therefore, the output is '0 1 2 Done'.",
        "hint": "Since the break condition is never met, the loop completes normally and the else clause executes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What does the enumerate() function do in a for loop?",
        "options": ["It counts the number of items in an iterable", "It filters out non-enumerable items", "It returns both the index and the value for each item in an iterable", "It sorts the items in an iterable"],
        "correctOptionIndex": 2,
        "correctOptionText": "It returns both the index and the value for each item in an iterable",
        "difficulty": "medium",
        "explanation": "The enumerate() function adds a counter to an iterable and returns it in the form of an enumerate object. This enumerate object yields pairs containing the count (starting from 0 by default) and the values obtained from iterating over the original iterable.",
        "hint": "This function is useful when you need both the position and the value during iteration."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What is the output of the following code using enumerate()?\n```python\nfruits = ['apple', 'banana', 'cherry']\nfor i, fruit in enumerate(fruits, 1):\n    print(f\"{i}: {fruit}\", end=' ')\n```",
        "options": ["0: apple 1: banana 2: cherry", "1: apple 2: banana 3: cherry", "apple banana cherry", "1 apple 2 banana 3 cherry"],
        "correctOptionIndex": 1,
        "correctOptionText": "1: apple 2: banana 3: cherry",
        "difficulty": "hard",
        "explanation": "The enumerate() function with a second argument of 1 starts counting from 1 instead of the default 0. It returns pairs of (count, value) which are unpacked into i and fruit. The loop prints each pair in the format 'count: value', resulting in '1: apple 2: banana 3: cherry'.",
        "hint": "The second argument to enumerate() specifies the starting count."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad85",
        "module": "Control Structures",
        "questionText": "What is the correct way to create an infinite loop in Python?",
        "options": ["for i in inf:", "while 1:", "while infinite:", "loop:"],
        "correctOptionIndex": 1,
        "correctOptionText": "while 1:",
        "difficulty": "medium",
        "explanation": "An infinite loop in Python can be created using a while loop with a condition that is always True. In Python, any non-zero number, including 1, is considered True. Therefore, 'while 1:' creates an infinite loop. Another common way is 'while True:'.",
        "hint": "You need a loop condition that always evaluates to True."
    },
    // Data Structures

    // Functions
    
    // Object-Oriented Programming

    // File Handling

    // Modules & Packages

    // Error Handling

    // Regular Expressions

    // Database Operations

    // Data Analysis with NumPy & Pandas
    
    // Data Visualization

    // Web Development with Python

    // Python for Machine Learning

  ]

export default pythonQuestions;