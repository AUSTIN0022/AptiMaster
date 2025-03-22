const SQLQuestions = [
    // SQL Basics
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What does SQL stand for?",
      "options": ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
      "correctOptionIndex": 0,
      "correctOptionText": "Structured Query Language",
      "difficulty": "easy",
      "explanation": "SQL stands for Structured Query Language, which is a language designed for managing data in relational database management systems.",
      "hint": "It's a language specifically structured for querying databases."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which SQL statement is used to retrieve data from a database?",
      "options": ["SELECT", "FETCH", "GET", "RETRIEVE"],
      "correctOptionIndex": 0,
      "correctOptionText": "SELECT",
      "difficulty": "easy",
      "explanation": "The SELECT statement is used to query or retrieve data from a database table.",
      "hint": "This is the most fundamental command for data retrieval in SQL."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which clause is used to filter records in a SQL query?",
      "options": ["WHERE", "HAVING", "FILTER", "GROUP BY"],
      "correctOptionIndex": 0,
      "correctOptionText": "WHERE",
      "difficulty": "easy",
      "explanation": "The WHERE clause is used to filter records and extract only those that fulfill a specified condition.",
      "hint": "This clause comes after the table name in a SELECT statement to specify conditions."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which SQL keyword is used to sort the result set?",
      "options": ["ORDER BY", "SORT BY", "ARRANGE BY", "GROUP BY"],
      "correctOptionIndex": 0,
      "correctOptionText": "ORDER BY",
      "difficulty": "easy",
      "explanation": "The ORDER BY keyword is used to sort the result set in ascending or descending order based on one or more columns.",
      "hint": "This clause comes typically at the end of a query to arrange the results."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What is the correct SQL statement to select all columns from a table named 'Employees'?",
      "options": ["SELECT * FROM Employees;", "SELECT ALL FROM Employees;", "SELECT Employees;", "SELECT [ALL] FROM Employees;"],
      "correctOptionIndex": 0,
      "correctOptionText": "SELECT * FROM Employees;",
      "difficulty": "easy",
      "explanation": "The asterisk (*) is used as a wildcard to select all columns from a table. Combined with 'FROM Employees', this query returns all data from the Employees table.",
      "hint": "The wildcard symbol is commonly used to represent 'all columns'."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which SQL operator is used to compare a value to a list of values?",
      "options": ["IN", "BETWEEN", "LIKE", "EXISTS"],
      "correctOptionIndex": 0,
      "correctOptionText": "IN",
      "difficulty": "medium",
      "explanation": "The IN operator allows you to specify multiple values in a WHERE clause, making it easier to compare a column with a list of values.",
      "hint": "This operator checks if a value matches any value in a list."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What is the purpose of a NULL value in SQL?",
      "options": ["Represents a missing or unknown value", "Represents zero", "Represents an empty string", "Represents a default value"],
      "correctOptionIndex": 0,
      "correctOptionText": "Represents a missing or unknown value",
      "difficulty": "medium",
      "explanation": "In SQL, NULL represents a missing or unknown value. It's different from zero or an empty string and requires special handling in queries.",
      "hint": "Think about what happens when data is not provided for an optional field."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which SQL clause is used to limit the number of rows returned in a query result?",
      "options": ["LIMIT", "RESTRICT", "TOP", "ROW"],
      "correctOptionIndex": 0,
      "correctOptionText": "LIMIT",
      "difficulty": "medium",
      "explanation": "The LIMIT clause is used to restrict the number of rows returned in a query result. Note that in SQL Server, TOP is used instead.",
      "hint": "This clause typically appears at the end of a query to control result size."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which SQL operator is used to search for a specified pattern in a column?",
      "options": ["LIKE", "MATCH", "PATTERN", "SEARCH"],
      "correctOptionIndex": 0,
      "correctOptionText": "LIKE",
      "difficulty": "medium",
      "explanation": "The LIKE operator is used in a WHERE clause to search for a specified pattern in a column. It works with wildcards such as % and _.",
      "hint": "This operator is commonly used with wildcards for pattern matching in text."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What is the correct way to select distinct values from a column named 'Country' in a table called 'Customers'?",
      "options": ["SELECT DISTINCT Country FROM Customers;", "SELECT UNIQUE Country FROM Customers;", "SELECT Country FROM Customers GROUP BY Country;", "SELECT Country FROM Customers WHERE DISTINCT;"],
      "correctOptionIndex": 0,
      "correctOptionText": "SELECT DISTINCT Country FROM Customers;",
      "difficulty": "medium",
      "explanation": "The DISTINCT keyword is used to return only distinct (different) values. It eliminates duplicate values from the result set.",
      "hint": "This keyword comes immediately after SELECT and before the column name."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which wildcard character in SQL represents any single character?",
      "options": ["_", "%", "?", "*"],
      "correctOptionIndex": 0,
      "correctOptionText": "_",
      "difficulty": "medium",
      "explanation": "The underscore (_) wildcard represents exactly one character in SQL pattern matching with the LIKE operator.",
      "hint": "While one wildcard matches multiple characters, another matches exactly one character."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What operator would you use to test if a value falls within a range?",
      "options": ["BETWEEN", "RANGE", "IN", "WITHIN"],
      "correctOptionIndex": 0,
      "correctOptionText": "BETWEEN",
      "difficulty": "medium",
      "explanation": "The BETWEEN operator is used to select values within a given range. It's inclusive, meaning it includes the boundary values.",
      "hint": "This operator tests if a value is within two specified values, including those values."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "How do you comment a single line in SQL?",
      "options": ["-- comment", "// comment", "# comment", "/* comment */"],
      "correctOptionIndex": 0,
      "correctOptionText": "-- comment",
      "difficulty": "easy",
      "explanation": "In most SQL variants, two consecutive hyphens (--) are used to indicate a single-line comment. Everything after -- on that line is ignored by the SQL interpreter.",
      "hint": "Different programming languages use different symbols for comments."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which function returns the current date and time in SQL?",
      "options": ["NOW()", "CURRENT_TIMESTAMP()", "GETDATE()", "All of the above"],
      "correctOptionIndex": 3,
      "correctOptionText": "All of the above",
      "difficulty": "medium",
      "explanation": "NOW(), CURRENT_TIMESTAMP(), and GETDATE() are all valid functions to return the current date and time, though availability varies by database system. NOW() and CURRENT_TIMESTAMP() are standard SQL, while GETDATE() is used in SQL Server.",
      "hint": "Different database systems may have different functions for the same purpose."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "How would you select all employees with a salary greater than 50000 from an 'Employees' table?",
      "options": ["SELECT * FROM Employees WHERE salary > 50000;", "SELECT * FROM Employees WHERE salary >= 50000;", "SELECT * FROM Employees HAVING salary > 50000;", "SELECT * FROM Employees FILTER BY salary > 50000;"],
      "correctOptionIndex": 0,
      "correctOptionText": "SELECT * FROM Employees WHERE salary > 50000;",
      "difficulty": "easy",
      "explanation": "The WHERE clause with the greater than (>) operator filters the rows to only include employees with a salary strictly greater than 50000.",
      "hint": "You need to use a comparison operator with a WHERE clause to filter records."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which SQL keyword is used to combine rows from two or more tables based on a related column?",
      "options": ["JOIN", "MERGE", "COMBINE", "UNION"],
      "correctOptionIndex": 0,
      "correctOptionText": "JOIN",
      "difficulty": "medium",
      "explanation": "The JOIN keyword is used to combine rows from two or more tables based on a related column between them. There are different types of JOINs like INNER JOIN, LEFT JOIN, etc.",
      "hint": "This operation connects tables based on common fields."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What does the COALESCE function do in SQL?",
      "options": ["Returns the first non-NULL expression among its arguments", "Combines multiple columns into one", "Counts the number of NULL values", "Converts NULL to a specified value"],
      "correctOptionIndex": 0,
      "correctOptionText": "Returns the first non-NULL expression among its arguments",
      "difficulty": "hard",
      "explanation": "The COALESCE function returns the first non-NULL expression among its arguments. It's often used to substitute a default value for NULL values.",
      "hint": "This function helps handle NULL values by providing alternatives."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which SQL operator is used to test for the existence of records in a subquery?",
      "options": ["EXISTS", "IN", "ANY", "ALL"],
      "correctOptionIndex": 0,
      "correctOptionText": "EXISTS",
      "difficulty": "hard",
      "explanation": "The EXISTS operator is used to test for the existence of any records in a subquery. It returns TRUE if the subquery returns one or more records.",
      "hint": "This operator checks whether a subquery returns any rows at all, rather than comparing values."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What's the difference between '=' and 'LIKE' when comparing strings?",
      "options": ["'=' requires an exact match while 'LIKE' allows pattern matching", "'=' is case-sensitive while 'LIKE' is not", "'=' works with numbers while 'LIKE' works with strings", "'=' is faster while 'LIKE' is more thorough"],
      "correctOptionIndex": 0,
      "correctOptionText": "'=' requires an exact match while 'LIKE' allows pattern matching",
      "difficulty": "medium",
      "explanation": "The equals operator (=) tests for an exact match between values. The LIKE operator allows for pattern matching using wildcards like % and _.",
      "hint": "One is for exact comparison, while the other allows for partial matches using special characters."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What will the following SQL statement return? SELECT 10 % 3;",
      "options": ["1", "3", "3.33", "0"],
      "correctOptionIndex": 0,
      "correctOptionText": "1",
      "difficulty": "medium",
      "explanation": "The % operator in SQL calculates the remainder after division. 10 divided by 3 is 3 with a remainder of 1, so the result is 1.",
      "hint": "This arithmetic operator calculates what's left after division."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which SQL logical operator returns TRUE if both operands are TRUE?",
      "options": ["AND", "OR", "NOT", "XOR"],
      "correctOptionIndex": 0,
      "correctOptionText": "AND",
      "difficulty": "easy",
      "explanation": "The AND operator returns TRUE only if both conditions on either side of it are TRUE. Otherwise, it returns FALSE.",
      "hint": "This operator requires both conditions to be true for the overall result to be true."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What is the result of the following SQL expression? SELECT 2 + 2 * 3;",
      "options": ["8", "12", "10", "6"],
      "correctOptionIndex": 0,
      "correctOptionText": "8",
      "difficulty": "medium",
      "explanation": "SQL follows standard mathematical order of operations (PEMDAS). Multiplication happens before addition, so 2 * 3 = 6, then 2 + 6 = 8.",
      "hint": "Remember the order of operations from mathematics."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What is the purpose of the SQL AS keyword?",
      "options": ["To create an alias for a column or table", "To define a subquery", "To join tables", "To filter results"],
      "correctOptionIndex": 0,
      "correctOptionText": "To create an alias for a column or table",
      "difficulty": "easy",
      "explanation": "The AS keyword is used to temporarily rename a column or table in a query result. This is particularly useful when working with complex queries or when the original column names are not descriptive.",
      "hint": "It helps make query results more readable by providing alternate names."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "In SQL, which operator would you use to combine the result sets of two SELECT statements?",
      "options": ["UNION", "JOIN", "MERGE", "CONNECT"],
      "correctOptionIndex": 0,
      "correctOptionText": "UNION",
      "difficulty": "medium",
      "explanation": "The UNION operator combines the result sets of two or more SELECT statements into a single result set. By default, it removes duplicate rows.",
      "hint": "This operator stacks results vertically rather than joining them horizontally."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What is the default sorting order when using ORDER BY in SQL?",
      "options": ["Ascending (ASC)", "Descending (DESC)", "No default order", "Depends on the database"],
      "correctOptionIndex": 0,
      "correctOptionText": "Ascending (ASC)",
      "difficulty": "easy",
      "explanation": "If you don't specify ASC or DESC after the ORDER BY clause, SQL assumes ASC (ascending order) by default.",
      "hint": "If not specified, SQL sorts from smallest to largest or A to Z."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What is the result of comparing any value with NULL using the = operator?",
      "options": ["NULL", "FALSE", "TRUE", "Depends on the value"],
      "correctOptionIndex": 0,
      "correctOptionText": "NULL",
      "difficulty": "hard",
      "explanation": "In SQL, comparing any value with NULL using the = operator results in NULL, not TRUE or FALSE. This is because NULL represents an unknown value, and the result of any comparison with an unknown value is also unknown (NULL).",
      "hint": "NULL represents an unknown value, which affects comparison operations."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which operator should you use to test if a column contains NULL?",
      "options": ["IS NULL", "= NULL", "NULL", "EQUALS NULL"],
      "correctOptionIndex": 0,
      "correctOptionText": "IS NULL",
      "difficulty": "medium",
      "explanation": "The IS NULL operator is specifically designed to test if a value is NULL. Using = NULL will not work because any comparison with NULL using standard operators results in NULL, not TRUE or FALSE.",
      "hint": "Special syntax is required for NULL comparisons because of NULL's unique properties."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What does the SQL keyword DISTINCT do?",
      "options": ["Removes duplicate values from the result set", "Sorts values in ascending order", "Filters records based on a condition", "Joins tables based on common fields"],
      "correctOptionIndex": 0,
      "correctOptionText": "Removes duplicate values from the result set",
      "difficulty": "easy",
      "explanation": "The DISTINCT keyword eliminates duplicate values from the result set, ensuring that each combination of values appears only once in the output.",
      "hint": "This keyword helps when you want unique values rather than all occurrences."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What will the following query return? SELECT CONCAT('Hello', ' ', 'World');",
      "options": ["'Hello World'", "'HelloWorld'", "'Hello,World'", "Syntax error"],
      "correctOptionIndex": 0,
      "correctOptionText": "'Hello World'",
      "difficulty": "medium",
      "explanation": "The CONCAT function joins two or more strings together. In this case, it combines 'Hello', a space character, and 'World' to create 'Hello World'.",
      "hint": "This function merges text values together in the order specified."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "What is the purpose of the SQL keyword CASE?",
      "options": ["To provide conditional logic within a query", "To convert data types", "To sort results", "To group related data"],
      "correctOptionIndex": 0,
      "correctOptionText": "To provide conditional logic within a query",
      "difficulty": "hard",
      "explanation": "The CASE expression allows you to add conditional logic to your SQL queries. It evaluates conditions and returns a value when the first condition is met, similar to an IF-THEN-ELSE statement in other programming languages.",
      "hint": "This construct lets you perform different actions based on different conditions."
    },
    {
      "topic": "67d6b45a953bd3a26da2ad87",
      "module": "SQL Basics",
      "questionText": "Which of the following is NOT a valid SQL data type?",
      "options": ["ARRAY", "VARCHAR", "DATETIME", "DECIMAL"],
      "correctOptionIndex": 0,
      "correctOptionText": "ARRAY",
      "difficulty": "hard",
      "explanation": "While some database systems support ARRAY types (like PostgreSQL), it is not a standard SQL data type across all database management systems. VARCHAR, DATETIME, and DECIMAL are widely supported across different SQL implementations.",
      "hint": "Think about which type might be specific to certain database systems rather than standard SQL."
    },

    // Data Definition Language (DDL)


    // Data Manipulation Language (DML)
    

    // Data Query Language (DQL)

    
    // Joins & Relationships


    // Aggregate Functions


    // Subqueries & Common Table Expressions

    
    // Views

    
    // Stored Procedures & Functions


    // Triggers & Events

    
    // Transaction Control
    
    
    // Indexes & Query Optimization

    
    // SQL Security


  ];

  export default SQLQuestions;