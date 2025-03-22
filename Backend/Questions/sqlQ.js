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
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which SQL command is used to create a new database?",
        "options": ["CREATE DATABASE", "NEW DATABASE", "BUILD DATABASE", "GENERATE DATABASE"],
        "correctOptionIndex": 0,
        "correctOptionText": "CREATE DATABASE",
        "difficulty": "easy",
        "explanation": "The CREATE DATABASE statement is used to create a new database in SQL. This is a fundamental DDL command.",
        "hint": "This is the standard command to initialize a new database instance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which SQL statement is used to create a new table?",
        "options": ["CREATE TABLE", "BUILD TABLE", "CONSTRUCT TABLE", "MAKE TABLE"],
        "correctOptionIndex": 0,
        "correctOptionText": "CREATE TABLE",
        "difficulty": "easy",
        "explanation": "The CREATE TABLE statement is used to define a new table, including its name, columns, data types, and constraints.",
        "hint": "This is the basic command to add a new table structure to your database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which DDL command is used to completely remove a table from the database?",
        "options": ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"],
        "correctOptionIndex": 0,
        "correctOptionText": "DROP TABLE",
        "difficulty": "easy",
        "explanation": "The DROP TABLE statement is used to completely remove a table definition and all its data from the database. This operation cannot be undone unless you have a backup.",
        "hint": "This command eliminates the entire table structure and its data permanently."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which statement is used to modify the structure of an existing table?",
        "options": ["ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE", "UPDATE TABLE"],
        "correctOptionIndex": 0,
        "correctOptionText": "ALTER TABLE",
        "difficulty": "easy",
        "explanation": "The ALTER TABLE statement is used to add, delete, or modify columns and constraints in an existing table. It allows you to change the structure without recreating the entire table.",
        "hint": "This command lets you make structural changes to an existing table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which constraint ensures that a column cannot have NULL values?",
        "options": ["NOT NULL", "REQUIRED", "MANDATORY", "NO NULLS"],
        "correctOptionIndex": 0,
        "correctOptionText": "NOT NULL",
        "difficulty": "easy",
        "explanation": "The NOT NULL constraint enforces that a column cannot contain NULL values, meaning that you must provide a value for this column when inserting a new record.",
        "hint": "This constraint explicitly prevents empty or undefined values in a column."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which constraint is used to uniquely identify each record in a table?",
        "options": ["PRIMARY KEY", "UNIQUE", "IDENTITY", "DISTINCT"],
        "correctOptionIndex": 0,
        "correctOptionText": "PRIMARY KEY",
        "difficulty": "easy",
        "explanation": "The PRIMARY KEY constraint uniquely identifies each record in a table. It automatically implies NOT NULL and ensures that the values in the column(s) are unique across all rows.",
        "hint": "This is the main constraint used to ensure each row can be uniquely referenced."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which statement is correct about PRIMARY KEY constraints?",
        "options": ["A table can have only one PRIMARY KEY constraint", "A PRIMARY KEY cannot contain NULL values", "A PRIMARY KEY can consist of multiple columns", "All of the above"],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above",
        "difficulty": "medium",
        "explanation": "All statements are correct about PRIMARY KEY constraints. A table can have only one PRIMARY KEY, which cannot contain NULL values, and can be composed of multiple columns (composite key).",
        "hint": "Consider the fundamental properties of primary keys in relational databases."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which constraint creates a relationship between two tables?",
        "options": ["FOREIGN KEY", "REFERENCE KEY", "EXTERNAL KEY", "RELATION KEY"],
        "correctOptionIndex": 0,
        "correctOptionText": "FOREIGN KEY",
        "difficulty": "medium",
        "explanation": "The FOREIGN KEY constraint creates a link between two tables by referencing the PRIMARY KEY of another table. It enforces referential integrity, ensuring that values in the foreign key column match values in the referenced primary key.",
        "hint": "This constraint establishes relationships between tables in a relational database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What happens when you try to drop a table that has a foreign key relationship with another table?",
        "options": ["It will fail unless the foreign key constraint is removed first", "It will drop both tables", "It will drop the table and set NULL in the referencing table", "It will automatically remove the foreign key constraints"],
        "correctOptionIndex": 0,
        "correctOptionText": "It will fail unless the foreign key constraint is removed first",
        "difficulty": "medium",
        "explanation": "By default, you cannot drop a table that is referenced by a foreign key constraint. You must either drop the foreign key constraint first or use CASCADE options where supported.",
        "hint": "Database systems protect referential integrity by preventing operations that would break table relationships."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which constraint ensures that all values in a column are unique?",
        "options": ["UNIQUE", "DISTINCT", "DIFFERENT", "EXCLUSIVE"],
        "correctOptionIndex": 0,
        "correctOptionText": "UNIQUE",
        "difficulty": "easy",
        "explanation": "The UNIQUE constraint ensures that all values in a column are different. Unlike PRIMARY KEY, it allows for one NULL value (in most database systems) and you can have multiple UNIQUE constraints per table.",
        "hint": "This constraint prevents duplicate values in a column or combination of columns."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is the main difference between UNIQUE and PRIMARY KEY constraints?",
        "options": ["UNIQUE allows NULL values (in most databases) while PRIMARY KEY doesn't", "PRIMARY KEY creates an index while UNIQUE doesn't", "You can have multiple PRIMARY KEYs but only one UNIQUE constraint", "UNIQUE is for single columns while PRIMARY KEY can be composite"],
        "correctOptionIndex": 0,
        "correctOptionText": "UNIQUE allows NULL values (in most databases) while PRIMARY KEY doesn't",
        "difficulty": "medium",
        "explanation": "The main difference is that a UNIQUE constraint allows NULL values (and typically only one NULL, since NULL is not equal to anything, including another NULL) in most database systems, while a PRIMARY KEY constraint does not allow any NULL values.",
        "hint": "Both ensure uniqueness, but they differ in how they handle missing values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which DDL statement is used to rename a table?",
        "options": ["ALTER TABLE", "RENAME TABLE", "MODIFY TABLE", "CHANGE TABLE"],
        "correctOptionIndex": 0,
        "correctOptionText": "ALTER TABLE",
        "difficulty": "medium",
        "explanation": "In standard SQL, the ALTER TABLE statement with the RENAME clause is used to rename a table. However, the exact syntax varies between database systems (e.g., RENAME TABLE in MySQL, sp_rename in SQL Server).",
        "hint": "The same command used for modifying structure is also used for changing names in standard SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which constraint enforces a condition on the values in a column?",
        "options": ["CHECK", "VALIDATE", "CONDITION", "VERIFY"],
        "correctOptionIndex": 0,
        "correctOptionText": "CHECK",
        "difficulty": "medium",
        "explanation": "The CHECK constraint enforces domain integrity by limiting the values that can be placed in a column based on a specified condition or expression.",
        "hint": "This constraint allows you to define custom rules for valid column values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is the purpose of the DEFAULT constraint in a table definition?",
        "options": ["Provides a default value for a column when no value is specified", "Sets a column to its default data type", "Resets a column to its original value", "Creates a default index on the column"],
        "correctOptionIndex": 0,
        "correctOptionText": "Provides a default value for a column when no value is specified",
        "difficulty": "easy",
        "explanation": "The DEFAULT constraint provides a default value for a column when a new record is inserted without specifying a value for that column. It helps avoid NULL values and ensures data consistency.",
        "hint": "This constraint specifies what value should be used when none is provided during insertion."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is the purpose of the TRUNCATE TABLE statement?",
        "options": ["Removes all rows from a table without logging individual row deletions", "Removes the table structure from the database", "Reduces the physical size of table data", "Removes specific columns from a table"],
        "correctOptionIndex": 0,
        "correctOptionText": "Removes all rows from a table without logging individual row deletions",
        "difficulty": "medium",
        "explanation": "TRUNCATE TABLE quickly removes all records from a table without logging each row deletion. It's faster than DELETE for removing all rows because it typically deallocates the data pages instead of deleting each row. The table structure remains intact.",
        "hint": "This operation is a faster way to clear all data while keeping the structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is the difference between DROP TABLE and TRUNCATE TABLE?",
        "options": ["DROP TABLE removes the table structure and data; TRUNCATE TABLE removes only the data", "TRUNCATE TABLE is faster than DROP TABLE", "DROP TABLE can be rolled back; TRUNCATE TABLE cannot", "TRUNCATE TABLE requires a WHERE clause; DROP TABLE doesn't"],
        "correctOptionIndex": 0,
        "correctOptionText": "DROP TABLE removes the table structure and data; TRUNCATE TABLE removes only the data",
        "difficulty": "medium",
        "explanation": "DROP TABLE completely removes the table definition along with all its data, indexes, triggers, constraints, and permission specifications. TRUNCATE TABLE keeps the table structure intact but removes all rows, resetting the table to its empty state.",
        "hint": "Consider what remains in the database after each operation is performed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which statement would you use to add a new column to an existing table?",
        "options": ["ALTER TABLE table_name ADD column_name datatype;", "MODIFY TABLE table_name ADD column_name datatype;", "UPDATE TABLE table_name ADD column_name datatype;", "CREATE COLUMN column_name IN table_name;"],
        "correctOptionIndex": 0,
        "correctOptionText": "ALTER TABLE table_name ADD column_name datatype;",
        "difficulty": "easy",
        "explanation": "The ALTER TABLE statement with the ADD clause is used to add a new column to an existing table. You must specify the column name and its data type.",
        "hint": "This combines the table modification command with a specific action to perform."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which statement would you use to remove a column from an existing table?",
        "options": ["ALTER TABLE table_name DROP COLUMN column_name;", "ALTER TABLE table_name REMOVE COLUMN column_name;", "MODIFY TABLE table_name DROP COLUMN column_name;", "DELETE COLUMN column_name FROM table_name;"],
        "correctOptionIndex": 0,
        "correctOptionText": "ALTER TABLE table_name DROP COLUMN column_name;",
        "difficulty": "easy",
        "explanation": "The ALTER TABLE statement with the DROP COLUMN clause is used to remove a column from an existing table. This will delete the column and all its data permanently.",
        "hint": "This uses the table modification command combined with a specific action to remove a structural element."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "In SQL, which clause is used to specify a foreign key constraint when creating a table?",
        "options": ["FOREIGN KEY ... REFERENCES", "EXTERNAL KEY ... LINKS", "REFERENCE KEY ... POINTS TO", "RELATION ... CONNECTS"],
        "correctOptionIndex": 0,
        "correctOptionText": "FOREIGN KEY ... REFERENCES",
        "difficulty": "medium",
        "explanation": "When creating a table, the FOREIGN KEY clause followed by the REFERENCES clause is used to establish a foreign key relationship. The REFERENCES part specifies which table and column are being referenced.",
        "hint": "This syntax identifies both the local column and the target table and column it relates to."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What happens to the child records when a parent record is deleted, if the foreign key has ON DELETE CASCADE?",
        "options": ["Child records are also deleted", "Child records have their foreign key set to NULL", "Child records remain unchanged", "An error is raised preventing the deletion"],
        "correctOptionIndex": 0,
        "correctOptionText": "Child records are also deleted",
        "difficulty": "hard",
        "explanation": "The ON DELETE CASCADE option for a foreign key constraint specifies that when a parent record is deleted, all related child records will be automatically deleted as well. This maintains referential integrity but can lead to significant cascading deletions.",
        "hint": "This referential action propagates deletion operations down the relationship chain."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What does the ON DELETE SET NULL option do in a foreign key constraint?",
        "options": ["Sets the foreign key to NULL when the referenced record is deleted", "Prevents deletion if child records exist", "Deletes child records when parent is deleted", "Sets the primary key to NULL on deletion"],
        "correctOptionIndex": 0,
        "correctOptionText": "Sets the foreign key to NULL when the referenced record is deleted",
        "difficulty": "hard",
        "explanation": "The ON DELETE SET NULL option specifies that when a parent record is deleted, the foreign key values in related child records will be set to NULL. This requires that the foreign key column allows NULL values.",
        "hint": "This referential action maintains relationships by removing the connection rather than the data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is the purpose of the IDENTITY property in SQL Server (or AUTO_INCREMENT in MySQL)?",
        "options": ["Automatically generates sequential values for a column", "Identifies the primary key of a table", "Verifies the identity of users accessing the table", "Creates a unique index on the column"],
        "correctOptionIndex": 0,
        "correctOptionText": "Automatically generates sequential values for a column",
        "difficulty": "medium",
        "explanation": "The IDENTITY property (SQL Server) or AUTO_INCREMENT (MySQL) is used to automatically generate sequential numeric values for a column when new rows are inserted. It's commonly used for primary key columns.",
        "hint": "This feature helps create unique identifiers without manual value assignment."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is a composite key in a database table?",
        "options": ["A key that consists of two or more columns", "A key that references multiple tables", "A key that contains both text and numeric values", "A key that allows multiple NULL values"],
        "correctOptionIndex": 0,
        "correctOptionText": "A key that consists of two or more columns",
        "difficulty": "medium",
        "explanation": "A composite key (also called a compound key) is a key that consists of two or more columns that together uniquely identify each record in a table. It's used when no single column can uniquely identify records.",
        "hint": "This type of key combines multiple attributes to achieve uniqueness."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is the purpose of the CASCADE option in a DROP TABLE statement?",
        "options": ["Automatically drops related objects like indexes and constraints", "Deletes all data in the table before dropping it", "Drops all tables in the database", "Requires confirmation before dropping the table"],
        "correctOptionIndex": 0,
        "correctOptionText": "Automatically drops related objects like indexes and constraints",
        "difficulty": "hard",
        "explanation": "The CASCADE option in a DROP TABLE statement automatically drops all objects that depend on the table, such as views, triggers, constraints, and sometimes foreign key relationships, depending on the database system.",
        "hint": "This option affects dependent objects when removing database structures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What does the COMMENT ON statement do in SQL?",
        "options": ["Adds descriptive text to database objects", "Creates a comment within the SQL code", "Documents the SQL history of an object", "Marks objects for review"],
        "correctOptionIndex": 0,
        "correctOptionText": "Adds descriptive text to database objects",
        "difficulty": "medium",
        "explanation": "The COMMENT ON statement is used to add descriptive or documentary text to database objects like tables and columns. These comments are stored in the database and can be queried from the data dictionary.",
        "hint": "This helps document the purpose and usage of database structures for other developers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which DDL statement creates a virtual table based on the result of a SELECT statement?",
        "options": ["CREATE VIEW", "CREATE VIRTUAL TABLE", "CREATE DERIVED TABLE", "CREATE TABLE VIEW"],
        "correctOptionIndex": 0,
        "correctOptionText": "CREATE VIEW",
        "difficulty": "medium",
        "explanation": "The CREATE VIEW statement creates a virtual table based on the result set of a SELECT query. Views don't store data themselves but provide a way to look at, filter, and present data from one or more tables.",
        "hint": "This object looks like a table to queries but doesn't physically store data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is the purpose of the SCHEMA in SQL?",
        "options": ["Groups related database objects under a single name", "Defines the structure of a table", "Creates a graphical representation of the database", "Enforces relationship rules between tables"],
        "correctOptionIndex": 0,
        "correctOptionText": "Groups related database objects under a single name",
        "difficulty": "hard",
        "explanation": "A schema is a logical container or namespace that groups related database objects like tables, views, and procedures under a single name. It helps organize database objects and control access permissions at a broader level.",
        "hint": "This concept helps organize and categorize database objects for management purposes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which statement would you use to create a new schema in SQL?",
        "options": ["CREATE SCHEMA", "NEW SCHEMA", "ADD SCHEMA", "DEFINE SCHEMA"],
        "correctOptionIndex": 0,
        "correctOptionText": "CREATE SCHEMA",
        "difficulty": "medium",
        "explanation": "The CREATE SCHEMA statement is used to create a new schema in a database. This provides a namespace for organizing related database objects and can also be used to control permissions.",
        "hint": "This follows the same naming pattern as other creation commands in SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What is the purpose of the WITH CHECK OPTION in a view definition?",
        "options": ["Prevents changes through the view that would make rows disappear from the view", "Checks that the view definition is valid", "Verifies data integrity when querying the view", "Enables the view to be updated manually"],
        "correctOptionIndex": 0,
        "correctOptionText": "Prevents changes through the view that would make rows disappear from the view",
        "difficulty": "hard",
        "explanation": "The WITH CHECK OPTION clause in a view definition prevents modifications made through the view that would cause rows to no longer meet the view's defining WHERE condition, thus making them disappear from the view.",
        "hint": "This option enforces consistency between view criteria and update operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "Which of the following is NOT a valid data type in standard SQL?",
        "options": ["BOOLEAN", "INTEGER", "VARCHAR", "DATE"],
        "correctOptionIndex": 0,
        "correctOptionText": "BOOLEAN",
        "difficulty": "hard",
        "explanation": "In standard SQL, BOOLEAN is not a defined data type, although many database systems have implemented it. In standard SQL, boolean values are typically represented using BIT, CHAR(1), or small INTEGER types with 0 and 1 or by using vendor-specific types.",
        "hint": "Different database systems implement logical values in different ways."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Definition Language (DDL)",
        "questionText": "What does the SQL statement CREATE INDEX do?",
        "options": ["Creates a database index to speed up queries", "Creates a list of tables in the database", "Creates a template for new tables", "Creates a backup of the database"],
        "correctOptionIndex": 0,
        "correctOptionText": "Creates a database index to speed up queries",
        "difficulty": "easy",
        "explanation": "The CREATE INDEX statement creates an index on one or more columns of a table. Indexes are used to speed up the retrieval of rows by providing a faster path to the data.",
        "hint": "This structure improves query performance by providing quick lookup capabilities."
    },

    // Data Manipulation Language (DML)
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which SQL statement is used to add new records to a table?",
        "options": ["UPDATE", "INSERT", "ADD", "CREATE"],
        "correctOptionIndex": 1,
        "correctOptionText": "INSERT",
        "difficulty": "easy",
        "explanation": "The INSERT statement is used to add new records to a database table.",
        "hint": "Think about 'inserting' new data into a table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which SQL statement is used to modify existing records in a table?",
        "options": ["MODIFY", "ALTER", "CHANGE", "UPDATE"],
        "correctOptionIndex": 3,
        "correctOptionText": "UPDATE",
        "difficulty": "easy",
        "explanation": "The UPDATE statement is used to modify existing records in a database table.",
        "hint": "Which keyword is used to 'update' existing data?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which SQL statement is used to remove records from a table?",
        "options": ["REMOVE", "DELETE", "DROP", "ERASE"],
        "correctOptionIndex": 1,
        "correctOptionText": "DELETE",
        "difficulty": "easy",
        "explanation": "The DELETE statement is used to remove records from a database table.",
        "hint": "Which command permanently removes rows from a table?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What is the correct SQL syntax to insert a new record into a table named 'Employees'?",
        "options": [
        "INSERT VALUES ('John', 'Doe', 30) INTO Employees",
        "INSERT INTO Employees VALUES ('John', 'Doe', 30)",
        "ADD VALUES ('John', 'Doe', 30) INTO Employees",
        "INSERT ROW VALUES ('John', 'Doe', 30) TO Employees"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "INSERT INTO Employees VALUES ('John', 'Doe', 30)",
        "difficulty": "easy",
        "explanation": "The correct syntax is INSERT INTO table_name VALUES (value1, value2, value3, ...).",
        "hint": "The syntax follows: INSERT INTO [table] VALUES [values]."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which SQL clause is used with UPDATE to specify which records to modify?",
        "options": ["WHICH", "FIND", "WHERE", "HAVING"],
        "correctOptionIndex": 2,
        "correctOptionText": "WHERE",
        "difficulty": "easy",
        "explanation": "The WHERE clause is used with UPDATE to specify which records should be modified.",
        "hint": "This same clause is used to filter results in SELECT statements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What happens if you execute an UPDATE statement without a WHERE clause?",
        "options": [
        "It will update only the first row in the table",
        "It will update all rows in the table",
        "It will generate an error",
        "It will update no rows and return a warning"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It will update all rows in the table",
        "difficulty": "medium",
        "explanation": "Without a WHERE clause to limit which rows are affected, an UPDATE statement will modify all rows in the specified table.",
        "hint": "The WHERE clause acts as a filter. What happens when there's no filter?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which statement correctly inserts multiple rows in a single command?",
        "options": [
        "INSERT INTO Customers (Name, City) VALUES ('John', 'New York'), ('Mary', 'Boston')",
        "INSERT MULTIPLE INTO Customers (Name, City) VALUES ('John', 'New York'), ('Mary', 'Boston')",
        "INSERT INTO Customers (Name, City) VALUES ('John', 'New York'); INSERT INTO Customers (Name, City) VALUES ('Mary', 'Boston')",
        "MULTI-INSERT INTO Customers (Name, City) VALUES ('John', 'New York'), ('Mary', 'Boston')"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "INSERT INTO Customers (Name, City) VALUES ('John', 'New York'), ('Mary', 'Boston')",
        "difficulty": "medium",
        "explanation": "Multiple rows can be inserted in a single statement by separating the value sets with commas.",
        "hint": "Look for the syntax that allows multiple value sets separated by commas."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What is the correct syntax to delete all records from a table named 'Products' without deleting the table itself?",
        "options": [
        "DELETE * FROM Products",
        "DELETE FROM Products",
        "DROP FROM Products",
        "REMOVE DATA FROM Products"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "DELETE FROM Products",
        "difficulty": "easy",
        "explanation": "DELETE FROM table_name removes all rows from a table without deleting the table structure.",
        "hint": "Unlike DROP TABLE, this command keeps the table structure intact."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which SQL statement is used to insert the results of a SELECT query into another table?",
        "options": [
        "INSERT INTO table1 SELECT * FROM table2",
        "INSERT INTO table1 FROM table2 VALUES SELECT *",
        "INSERT INTO table1 (SELECT * FROM table2)",
        "SELECT * FROM table2 INTO table1"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "INSERT INTO table1 SELECT * FROM table2",
        "difficulty": "medium",
        "explanation": "You can insert the results of a SELECT query directly into another table using INSERT INTO table_name SELECT ... syntax.",
        "hint": "The INSERT INTO can be followed by either VALUES or a SELECT statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What is the difference between TRUNCATE TABLE and DELETE FROM?",
        "options": [
        "DELETE FROM can use a WHERE clause, while TRUNCATE TABLE cannot",
        "TRUNCATE TABLE is faster but cannot be rolled back, DELETE FROM is slower but can be rolled back",
        "TRUNCATE TABLE deletes the table structure, DELETE FROM only deletes data",
        "They are exactly the same with different syntax"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "TRUNCATE TABLE is faster but cannot be rolled back, DELETE FROM is slower but can be rolled back",
        "difficulty": "hard",
        "explanation": "TRUNCATE TABLE is a DDL command that's faster because it doesn't log individual row deletions, but it cannot be rolled back. DELETE FROM is a DML command that logs each row deletion, making it slower but allowing for transaction rollbacks.",
        "hint": "Think about how these commands handle logging and transactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which SQL statement can be used to update multiple columns in a single command?",
        "options": [
        "UPDATE table SET column1 = value1, column2 = value2 WHERE condition",
        "UPDATE table SET (column1, column2) = (value1, value2) WHERE condition",
        "UPDATE MULTIPLE table SET column1 = value1, column2 = value2 WHERE condition",
        "UPDATE table COLUMNS column1 = value1, column2 = value2 WHERE condition"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "UPDATE table SET column1 = value1, column2 = value2 WHERE condition",
        "difficulty": "medium",
        "explanation": "Multiple columns can be updated in a single UPDATE statement by separating column assignments with commas in the SET clause.",
        "hint": "Use commas to separate multiple column assignments in the SET clause."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which of the following is NOT a valid DML command in standard SQL?",
        "options": ["INSERT", "UPDATE", "DELETE", "ALTER"],
        "correctOptionIndex": 3,
        "correctOptionText": "ALTER",
        "difficulty": "medium",
        "explanation": "ALTER is a DDL (Data Definition Language) command used to modify the structure of database objects, not a DML command.",
        "hint": "DML commands manipulate data within tables, not the table structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What happens if you try to insert a row with duplicate values for a primary key column?",
        "options": [
        "The new row is inserted and the old row is deleted",
        "The new row is inserted and the old row is kept, creating duplicate primary keys",
        "The database returns an error and the insert fails",
        "The primary key is automatically incremented to make it unique"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The database returns an error and the insert fails",
        "difficulty": "medium",
        "explanation": "Primary keys must be unique. Attempting to insert a duplicate primary key value will result in a constraint violation error.",
        "hint": "Primary keys have a unique constraint - what happens when you violate constraints?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What does the following SQL statement do? INSERT INTO Customers (CustomerID, Name) VALUES (1, 'John') ON DUPLICATE KEY UPDATE Name = 'John Smith'",
        "options": [
        "It always inserts a new customer with ID 1 and name 'John'",
        "It always updates the existing customer with ID 1 to have name 'John Smith'",
        "It inserts a new customer unless ID 1 already exists, in which case it updates the name to 'John Smith'",
        "It produces a syntax error because ON DUPLICATE KEY is not valid SQL"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It inserts a new customer unless ID 1 already exists, in which case it updates the name to 'John Smith'",
        "difficulty": "hard",
        "explanation": "The ON DUPLICATE KEY UPDATE clause allows you to insert a new row or update an existing one if a unique constraint (like a primary key) would be violated.",
        "hint": "This is a MySQL feature that combines INSERT and UPDATE in a single statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which of the following correctly updates the 'Price' of a product with 'ProductID' equal to 5?",
        "options": [
        "UPDATE Price = 29.99 FROM Products WHERE ProductID = 5",
        "UPDATE Products WHERE ProductID = 5 SET Price = 29.99",
        "UPDATE Products SET Price = 29.99 WHERE ProductID = 5",
        "SET Price = 29.99 IN Products WHERE ProductID = 5"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "UPDATE Products SET Price = 29.99 WHERE ProductID = 5",
        "difficulty": "easy",
        "explanation": "The correct syntax for UPDATE is: UPDATE table_name SET column = value WHERE condition.",
        "hint": "The UPDATE syntax starts with the table name, followed by SET, then the WHERE clause."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What does the following SQL statement do? INSERT INTO Orders SELECT * FROM OldOrders WHERE Date < '2023-01-01'",
        "options": [
        "It creates a new table called Orders with data from OldOrders",
        "It inserts rows from OldOrders into Orders where the date is before 2023",
        "It replaces all data in Orders with data from OldOrders",
        "It produces an error because you cannot use SELECT with INSERT"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It inserts rows from OldOrders into Orders where the date is before 2023",
        "difficulty": "medium",
        "explanation": "This statement inserts records from OldOrders into Orders, but only those with Date values earlier than January 1, 2023.",
        "hint": "This is inserting data from one table to another based on a condition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What is the purpose of the RETURNING clause in some SQL implementations?",
        "options": [
        "To return control to the calling procedure after execution",
        "To return to a previous state if an error occurs",
        "To return the values of rows affected by an INSERT, UPDATE, or DELETE",
        "To return a success or failure message after execution"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To return the values of rows affected by an INSERT, UPDATE, or DELETE",
        "difficulty": "hard",
        "explanation": "The RETURNING clause (available in PostgreSQL, Oracle, and some other databases) allows DML statements to return the values of columns that were modified, inserted, or deleted.",
        "hint": "This feature lets you see the results of your modification without running a separate SELECT."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which of the following is NOT a valid way to specify columns in an INSERT statement?",
        "options": [
        "INSERT INTO Customers VALUES (1, 'John', 'NYC')",
        "INSERT INTO Customers (ID, Name, City) VALUES (1, 'John', 'NYC')",
        "INSERT INTO Customers SET ID = 1, Name = 'John', City = 'NYC'",
        "INSERT INTO Customers SELECT 1, 'John', 'NYC'"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "INSERT INTO Customers SET ID = 1, Name = 'John', City = 'NYC'",
        "difficulty": "medium",
        "explanation": "The SET keyword is used with UPDATE statements, not with standard INSERT statements. (Note: This syntax is actually valid in MySQL, but not in standard SQL or most other database systems.)",
        "hint": "Which option uses syntax that looks like it belongs to a different DML statement?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What will happen if you try to insert NULL into a column that has a NOT NULL constraint?",
        "options": [
        "The NULL will be converted to an empty string",
        "The NULL will be converted to 0 for numeric columns",
        "The database will return an error and the insert will fail",
        "The database will use the column's default value instead"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The database will return an error and the insert will fail",
        "difficulty": "medium",
        "explanation": "A NOT NULL constraint prevents NULL values from being stored in a column. Attempting to insert NULL into such a column will result in a constraint violation error.",
        "hint": "NOT NULL constraints are enforced by the database engine during data manipulation operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "How can you insert only specific columns in a table?",
        "options": [
        "By using the SPECIFIC keyword: INSERT SPECIFIC (column1, column2) INTO table VALUES (value1, value2)",
        "By listing the column names: INSERT INTO table (column1, column2) VALUES (value1, value2)",
        "By using column indexes: INSERT INTO table [1,2] VALUES (value1, value2)",
        "You must always insert values for all columns in a table"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "By listing the column names: INSERT INTO table (column1, column2) VALUES (value1, value2)",
        "difficulty": "easy",
        "explanation": "To insert values into specific columns, list the column names in parentheses after the table name in the INSERT statement.",
        "hint": "You need to explicitly name which columns will receive values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which of the following would correctly update the salary of all employees in the Sales department by increasing it by 10%?",
        "options": [
        "UPDATE Employees SET Salary = Salary + 10% WHERE Department = 'Sales'",
        "UPDATE Employees SET Salary = Salary * 1.1 WHERE Department = 'Sales'",
        "UPDATE Employees SET Salary += 10% WHERE Department = 'Sales'",
        "UPDATE Salary = Salary * 1.1 FROM Employees WHERE Department = 'Sales'"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "UPDATE Employees SET Salary = Salary * 1.1 WHERE Department = 'Sales'",
        "difficulty": "medium",
        "explanation": "To increase a value by a percentage, you multiply it by (1 + percentage/100). In this case, to increase by 10%, you multiply by 1.1.",
        "hint": "To increase a value by 10%, you multiply it by 1.1."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What does the MERGE statement do in SQL?",
        "options": [
        "It combines two tables into a new table",
        "It performs INSERT, UPDATE, or DELETE operations on a target table based on results of a join with a source table",
        "It merges multiple rows in a table into a single row",
        "It merges multiple columns in a table into a single column"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It performs INSERT, UPDATE, or DELETE operations on a target table based on results of a join with a source table",
        "difficulty": "hard",
        "explanation": "The MERGE statement (also called UPSERT in some systems) allows you to perform conditional INSERT, UPDATE, or DELETE operations on a target table based on joining it with a source table or dataset.",
        "hint": "This is used for 'upsert' operations - updating existing rows or inserting new ones in a single statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which statement would you use to delete customers who have not placed any orders?",
        "options": [
        "DELETE FROM Customers WHERE NOT EXISTS (SELECT * FROM Orders WHERE Orders.CustomerID = Customers.CustomerID)",
        "DELETE FROM Customers WHERE CustomerID NOT IN Orders.CustomerID",
        "DELETE Customers FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID WHERE Orders.CustomerID IS NULL",
        "DELETE FROM Customers WITH NO ORDERS"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "DELETE FROM Customers WHERE NOT EXISTS (SELECT * FROM Orders WHERE Orders.CustomerID = Customers.CustomerID)",
        "difficulty": "hard",
        "explanation": "This statement deletes customers for whom there are no matching orders in the Orders table, using a NOT EXISTS subquery to find customers without orders.",
        "hint": "The NOT EXISTS is used to find rows where a corresponding record doesn't exist in another table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What will happen with the following statement if the 'Address' column has a default value? INSERT INTO Customers (Name, City) VALUES ('John', 'NYC')",
        "options": [
        "The insert will fail because Address is not specified",
        "The Address column will be set to NULL",
        "The Address column will be set to its default value",
        "The Address column will be left empty, which is different from NULL"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The Address column will be set to its default value",
        "difficulty": "medium",
        "explanation": "When a column with a default value is omitted from an INSERT statement, the default value is used for that column.",
        "hint": "Default values are used when a column is not explicitly given a value in an INSERT."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What is a potential issue with the following statement? DELETE FROM Orders",
        "options": [
        "Syntax error: DELETE requires a WHERE clause",
        "It deletes all orders without warning or confirmation",
        "It deletes the Orders table structure",
        "It only deletes the first order in the table"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It deletes all orders without warning or confirmation",
        "difficulty": "medium",
        "explanation": "DELETE FROM without a WHERE clause will delete all rows from the specified table. This can be dangerous in production environments as it removes all data without confirmation.",
        "hint": "What happens when you run a DELETE statement with no filtering condition?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "How would you insert a row with an automatically generated primary key?",
        "options": [
        "INSERT INTO Customers (Name, Email) VALUES ('John', 'john@example.com')",
        "INSERT INTO Customers (ID, Name, Email) VALUES (AUTO_INCREMENT, 'John', 'john@example.com')",
        "INSERT INTO Customers (ID, Name, Email) VALUES (NULL, 'John', 'john@example.com')",
        "INSERT AUTO_ID INTO Customers (Name, Email) VALUES ('John', 'john@example.com')"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "INSERT INTO Customers (Name, Email) VALUES ('John', 'john@example.com')",
        "difficulty": "medium",
        "explanation": "For tables with auto-incrementing primary keys, you simply omit the primary key column from your INSERT statement, and the database will automatically generate the key value.",
        "hint": "With auto-increment columns, you typically don't need to specify them in your INSERT statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What is the difference between DELETE and DROP in SQL?",
        "options": [
        "DELETE removes data from a table, DROP removes the entire table",
        "DELETE is temporary, DROP is permanent",
        "DELETE is for tables, DROP is for databases",
        "DELETE removes one row, DROP removes multiple rows"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "DELETE removes data from a table, DROP removes the entire table",
        "difficulty": "easy",
        "explanation": "DELETE is a DML command that removes rows from a table but keeps the table structure. DROP is a DDL command that removes the entire table including its structure and data.",
        "hint": "One affects only the data in the table, the other affects the table itself."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which SQL statement would you use to modify 'Orders' by setting a 'Status' of 'Shipped' for all orders placed before a certain date?",
        "options": [
        "MODIFY Orders SET Status = 'Shipped' WHERE OrderDate < '2023-01-01'",
        "ALTER Orders SET Status = 'Shipped' WHERE OrderDate < '2023-01-01'",
        "UPDATE Orders SET Status = 'Shipped' WHERE OrderDate < '2023-01-01'",
        "CHANGE Orders SET Status = 'Shipped' WHERE OrderDate < '2023-01-01'"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "UPDATE Orders SET Status = 'Shipped' WHERE OrderDate < '2023-01-01'",
        "difficulty": "easy",
        "explanation": "UPDATE is the correct DML statement to modify existing data in a table. The WHERE clause filters which rows are updated.",
        "hint": "Which DML command changes values in existing rows?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "Which of the following is a valid use of the CASE expression in an UPDATE statement?",
        "options": [
        "UPDATE Products CASE WHEN Price > 100 THEN SET Discount = 10 ELSE SET Discount = 5 END",
        "UPDATE Products SET Discount = CASE WHEN Price > 100 THEN 10 ELSE 5 END",
        "UPDATE Products SET CASE: WHEN Price > 100 THEN Discount = 10 ELSE Discount = 5 END",
        "CASE UPDATE Products WHEN Price > 100 THEN SET Discount = 10 ELSE SET Discount = 5 END"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "UPDATE Products SET Discount = CASE WHEN Price > 100 THEN 10 ELSE 5 END",
        "difficulty": "hard",
        "explanation": "A CASE expression can be used in the SET clause of an UPDATE statement to assign different values based on conditions. The entire CASE expression evaluates to a single value.",
        "hint": "CASE is an expression that returns a value, not a statement that performs an action."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Manipulation Language (DML)",
        "questionText": "What happens when you run an INSERT statement with fewer values than columns?",
        "options": [
        "The database returns an error",
        "The missing columns are set to NULL or their default values",
        "The insert is ignored with a warning",
        "The database inserts partial rows"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The database returns an error",
        "difficulty": "medium",
        "explanation": "When using INSERT with VALUES, you must provide a value for each column listed or specify which columns you're inserting into. Providing fewer values than columns will result in an error.",
        "hint": "The number of values must match the number of columns specified."
    },
    

    // Data Query Language (DQL)
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL statement is used to retrieve data from a database?",
        "options": ["GET", "RETRIEVE", "SELECT", "FETCH"],
        "correctOptionIndex": 2,
        "correctOptionText": "SELECT",
        "difficulty": "easy",
        "explanation": "The SELECT statement is the standard SQL command used to retrieve data from one or more tables in a database.",
        "hint": "This is the most fundamental command in SQL for querying data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which clause is used to filter rows in a SELECT statement?",
        "options": ["FILTER", "HAVING", "WHERE", "CONDITION"],
        "correctOptionIndex": 2,
        "correctOptionText": "WHERE",
        "difficulty": "easy",
        "explanation": "The WHERE clause filters rows based on specified conditions, determining which rows will be included in the query results.",
        "hint": "This clause comes after the FROM clause in a SELECT statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL operator is used to match patterns in a WHERE clause?",
        "options": ["MATCHES", "LIKE", "SIMILAR", "PATTERN"],
        "correctOptionIndex": 1,
        "correctOptionText": "LIKE",
        "difficulty": "easy",
        "explanation": "The LIKE operator is used with the WHERE clause to search for a specified pattern in a column. It uses wildcards such as '%' and '_' for pattern matching.",
        "hint": "This operator is often used with '%' to match substrings."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL keyword is used to eliminate duplicate rows from a query result?",
        "options": ["UNIQUE", "DISTINCT", "DIFFERENT", "NODUPLICATE"],
        "correctOptionIndex": 1,
        "correctOptionText": "DISTINCT",
        "difficulty": "easy",
        "explanation": "The DISTINCT keyword is used in a SELECT statement to return only unique values, eliminating duplicate rows from the result set.",
        "hint": "This keyword comes immediately after SELECT in the query syntax."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which clause is used to sort the result set in a SELECT statement?",
        "options": ["SORT BY", "ORDER BY", "ARRANGE BY", "GROUP BY"],
        "correctOptionIndex": 1,
        "correctOptionText": "ORDER BY",
        "difficulty": "easy",
        "explanation": "The ORDER BY clause is used to sort the result set based on one or more columns, either in ascending (ASC) or descending (DESC) order.",
        "hint": "This clause typically appears at the end of a query."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What does the following SQL query return? SELECT * FROM Employees",
        "options": [
        "All columns but only one row from the Employees table",
        "All rows but only one column from the Employees table",
        "All rows and all columns from the Employees table",
        "The number of rows in the Employees table"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "All rows and all columns from the Employees table",
        "difficulty": "easy",
        "explanation": "The asterisk (*) is a wildcard that represents all columns, and without a WHERE clause, the query returns all rows from the Employees table.",
        "hint": "The asterisk (*) is a shorthand way to select all columns."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which operator would you use to check if a column value is between two specified values?",
        "options": ["IN", "BETWEEN", "AMONG", "RANGE"],
        "correctOptionIndex": 1,
        "correctOptionText": "BETWEEN",
        "difficulty": "easy",
        "explanation": "The BETWEEN operator selects values within a given range, inclusive of the boundary values. It's equivalent to using >= and <= conditions.",
        "hint": "This operator simplifies range checking in WHERE clauses."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL operator is used to check if a value matches any value in a list or subquery?",
        "options": ["WITHIN", "ANY", "IN", "MATCHES"],
        "correctOptionIndex": 2,
        "correctOptionText": "IN",
        "difficulty": "easy",
        "explanation": "The IN operator allows you to specify multiple values in a WHERE clause, checking if a value matches any value in a list or subquery result.",
        "hint": "This operator is an alternative to multiple OR conditions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What is the difference between WHERE and HAVING clauses in SQL?",
        "options": [
        "WHERE filters before grouping, HAVING filters after grouping",
        "WHERE is for numeric conditions, HAVING is for text conditions",
        "WHERE is for single tables, HAVING is for joined tables",
        "They are identical and can be used interchangeably"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "WHERE filters before grouping, HAVING filters after grouping",
        "difficulty": "medium",
        "explanation": "The WHERE clause filters records before grouping takes place, while the HAVING clause filters groups after the GROUP BY clause is applied, often based on aggregate functions.",
        "hint": "Think about the order of operations in SQL query processing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL clause is used to limit the number of rows returned by a query?",
        "options": ["LIMIT", "ROWNUM", "TOP", "MAX"],
        "correctOptionIndex": 0,
        "correctOptionText": "LIMIT",
        "difficulty": "medium",
        "explanation": "The LIMIT clause is used to constrain the number of rows returned by a query. It's commonly used for pagination or to get a sample of data.",
        "hint": "This clause is typically placed at the end of a query in MySQL and PostgreSQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What does the OFFSET keyword do when used with LIMIT?",
        "options": [
        "Skips a number of rows before starting to return rows",
        "Sets the starting position for column selection",
        "Offsets the column values by a specified amount",
        "Indicates the minimum number of rows to return"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Skips a number of rows before starting to return rows",
        "difficulty": "medium",
        "explanation": "OFFSET specifies the number of rows to skip before starting to return rows from the query. It's commonly used with LIMIT for pagination.",
        "hint": "This is useful for implementing paged results in applications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What will the following query return? SELECT TOP 5 * FROM Products ORDER BY Price DESC",
        "options": [
        "The 5 products with the lowest prices",
        "The 5 products with the highest prices",
        "The 5 most recently added products",
        "5 random products from the table"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The 5 products with the highest prices",
        "difficulty": "medium",
        "explanation": "This query selects the top 5 products ordered by price in descending order, which means it returns the 5 products with the highest prices.",
        "hint": "Consider the effect of DESC on the ordering of results."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which wildcard character in a LIKE pattern matches any single character?",
        "options": ["%", "_", "*", "?"],
        "correctOptionIndex": 1,
        "correctOptionText": "_",
        "difficulty": "medium",
        "explanation": "The underscore (_) wildcard character matches exactly one character in a LIKE pattern. For example, 'a_c' would match 'abc', 'adc', etc.",
        "hint": "This wildcard is used when you need to match strings with exactly the same length."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which wildcard character in a LIKE pattern matches zero or more characters?",
        "options": ["%", "_", "*", "?"],
        "correctOptionIndex": 0,
        "correctOptionText": "%",
        "difficulty": "medium",
        "explanation": "The percent sign (%) wildcard character matches zero or more characters in a LIKE pattern. For example, 'a%c' would match 'ac', 'abc', 'abdc', etc.",
        "hint": "This wildcard is used when you need to match strings of varying lengths."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL clause is used to combine rows from two or more tables based on a related column?",
        "options": ["COMBINE", "MERGE", "JOIN", "UNION"],
        "correctOptionIndex": 2,
        "correctOptionText": "JOIN",
        "difficulty": "medium",
        "explanation": "The JOIN clause is used to combine rows from two or more tables based on a related column between them, allowing you to query data from multiple tables in a single query.",
        "hint": "This is fundamental for querying relational databases with normalized tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What does the NULL keyword represent in SQL?",
        "options": [
        "An empty string",
        "The number zero",
        "A blank space",
        "The absence of a value"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "The absence of a value",
        "difficulty": "medium",
        "explanation": "NULL represents the absence of a value or an unknown value in a column. It's not equivalent to zero, an empty string, or a blank space.",
        "hint": "NULL is a special marker used to indicate that a data value does not exist."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which operator should you use to test for NULL values in SQL?",
        "options": ["=", "==", "IS", "EQUALS"],
        "correctOptionIndex": 2,
        "correctOptionText": "IS",
        "difficulty": "medium",
        "explanation": "The IS operator is used to test for NULL values, as in 'WHERE column_name IS NULL'. Using equality operators (= or ==) with NULL doesn't work as expected.",
        "hint": "NULL is not a value, so it can't be compared using standard equality operators."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which of the following is NOT a valid ORDER BY clause?",
        "options": [
        "ORDER BY LastName, FirstName",
        "ORDER BY 2, 1",
        "ORDER BY Salary DESC",
        "ORDER BY WHERE Salary > 50000"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "ORDER BY WHERE Salary > 50000",
        "difficulty": "medium",
        "explanation": "The WHERE keyword cannot be used within an ORDER BY clause. Filtering conditions should be in the WHERE clause before ORDER BY.",
        "hint": "The ORDER BY clause can reference columns, expressions, or positions, but cannot contain filtering conditions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What does the keyword AS do in SQL?",
        "options": [
        "It performs arithmetic operations",
        "It creates aliases for columns or tables",
        "It asserts a condition must be true",
        "It adds a comment to the query"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It creates aliases for columns or tables",
        "difficulty": "easy",
        "explanation": "The AS keyword is used to create aliases for columns or tables, giving them temporary, more readable names in the query results or for use elsewhere in the query.",
        "hint": "This is useful for making query results more readable or for working with complex calculations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which operator combines the results of two or more SELECT statements, eliminating duplicates?",
        "options": ["JOIN", "UNION", "INTERSECT", "MERGE"],
        "correctOptionIndex": 1,
        "correctOptionText": "UNION",
        "difficulty": "medium",
        "explanation": "The UNION operator combines the results of two or more SELECT statements into a single result set, automatically removing duplicate rows. Each SELECT statement must have the same number of columns with compatible data types.",
        "hint": "Think about set operations in mathematics."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What's the difference between UNION and UNION ALL?",
        "options": [
        "UNION ALL combines results vertically, UNION combines them horizontally",
        "UNION removes duplicates, UNION ALL keeps all rows including duplicates",
        "UNION works with different column counts, UNION ALL requires the same number of columns",
        "UNION is faster, UNION ALL is more accurate"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "UNION removes duplicates, UNION ALL keeps all rows including duplicates",
        "difficulty": "medium",
        "explanation": "UNION automatically eliminates duplicate rows, while UNION ALL includes all rows, even if there are duplicates. As a result, UNION ALL is typically faster since it doesn't need to perform the duplicate removal operation.",
        "hint": "One performs duplicate removal, the other doesn't."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL operator returns only the rows that appear in both result sets?",
        "options": ["UNION", "JOIN", "INTERSECT", "COMMON"],
        "correctOptionIndex": 2,
        "correctOptionText": "INTERSECT",
        "difficulty": "hard",
        "explanation": "The INTERSECT operator returns only the rows that appear in both result sets, functioning like the intersection operation in set theory.",
        "hint": "This is like the mathematical intersection of two sets."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What is the purpose of the SQL EXCEPT operator?",
        "options": [
        "To exclude specific columns from the results",
        "To return rows from the first query that don't appear in the second query",
        "To handle exceptions in SQL code",
        "To exclude NULL values from the result set"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To return rows from the first query that don't appear in the second query",
        "difficulty": "hard",
        "explanation": "The EXCEPT operator (also called MINUS in some databases) returns rows from the first query that do not appear in the second query, functioning like the set difference operation.",
        "hint": "This is like subtracting one set from another in mathematics."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL function would you use to get the current date?",
        "options": ["NOW()", "GETDATE()", "CURRENT_DATE()", "DATE()"],
        "correctOptionIndex": 2,
        "correctOptionText": "CURRENT_DATE()",
        "difficulty": "medium",
        "explanation": "CURRENT_DATE() returns the current date in standard SQL. Different database systems may have their own functions like GETDATE() in SQL Server or SYSDATE in Oracle.",
        "hint": "This is the standard SQL function for retrieving just the date portion without time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which SQL function returns the number of rows in a table or in a specific criteria?",
        "options": ["SUM()", "TALLY()", "ROWS()", "COUNT()"],
        "correctOptionIndex": 3,
        "correctOptionText": "COUNT()",
        "difficulty": "easy",
        "explanation": "The COUNT() function returns the number of rows that match a specified criteria. COUNT(*) counts all rows, while COUNT(column) counts non-NULL values in that column.",
        "hint": "This is one of the most basic aggregate functions in SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What does the CASE expression in SQL do?",
        "options": [
        "It converts text to uppercase",
        "It provides conditional logic within a SQL statement",
        "It checks for NULL values",
        "It defines the sensitivity of string comparisons"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It provides conditional logic within a SQL statement",
        "difficulty": "hard",
        "explanation": "The CASE expression allows for conditional logic in SQL, working like an IF-THEN-ELSE statement. It can be used in SELECT, WHERE, ORDER BY clauses to provide different values based on specified conditions.",
        "hint": "This is SQL's way of implementing if-then-else logic directly in queries."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "Which of the following queries would return products with prices greater than the average price?",
        "options": [
        "SELECT * FROM Products WHERE Price > AVG(Price)",
        "SELECT * FROM Products WHERE Price > (SELECT AVG(Price) FROM Products)",
        "SELECT * FROM Products HAVING Price > AVG(Price)",
        "SELECT * FROM Products WHERE Price > AVERAGE(Price)"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "SELECT * FROM Products WHERE Price > (SELECT AVG(Price) FROM Products)",
        "difficulty": "hard",
        "explanation": "Aggregate functions like AVG() cannot be used directly in a WHERE clause. Instead, a subquery is needed to calculate the average price first, and then the main query can compare individual prices to that calculated average.",
        "hint": "Aggregate functions require either a GROUP BY or a subquery when comparing to individual rows."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What is a correlated subquery in SQL?",
        "options": [
        "A subquery that uses parameters from the main query",
        "A subquery that returns multiple columns",
        "A subquery that connects two unrelated tables",
        "A subquery that executes faster than regular subqueries"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A subquery that uses parameters from the main query",
        "difficulty": "hard",
        "explanation": "A correlated subquery is a subquery that uses values from the outer query. It is evaluated once for each row processed by the outer query, making it dependent on the outer query.",
        "hint": "This type of subquery references columns from the outer query and cannot be executed independently."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What would the following SQL query return? SELECT Name FROM Employees WHERE DepartmentID NOT IN (SELECT DepartmentID FROM Departments WHERE Location = 'New York')",
        "options": [
        "Employees in New York departments",
        "Employees not in New York departments",
        "Departments not in New York",
        "All employees except those in New York"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Employees not in New York departments",
        "difficulty": "hard",
        "explanation": "This query first finds all department IDs for departments located in New York, then selects employee names for employees whose department ID is not in that list, effectively finding all employees who do not work in New York-based departments.",
        "hint": "The NOT IN operator excludes values that match the subquery results."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Data Query Language (DQL)",
        "questionText": "What is the purpose of the EXISTS operator in SQL?",
        "options": [
        "To check if a column exists in a table",
        "To check if a table exists in the database",
        "To check if a subquery returns any rows",
        "To verify a table has at least one record"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To check if a subquery returns any rows",
        "difficulty": "hard",
        "explanation": "The EXISTS operator is used to test for the existence of any record in a subquery. It returns TRUE if the subquery returns one or more records, and is often used with correlated subqueries.",
        "hint": "This operator only cares about the existence of results, not their actual values."
    },
    
    // Joins & Relationships
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "Which JOIN type returns rows from both tables only when there is a match?",
        "options": ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
        "correctOptionIndex": 2,
        "correctOptionText": "INNER JOIN",
        "difficulty": "easy",
        "explanation": "INNER JOIN returns only the rows where there is a match in both tables based on the join condition.",
        "hint": "Think about the most restrictive type of join that only shows data when both tables have matching values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the result of a LEFT JOIN when there are no matching rows in the right table?",
        "options": ["No rows are returned", "NULL values are returned for the right table's columns", "An error is generated", "The query is automatically converted to an INNER JOIN"],
        "correctOptionIndex": 1,
        "correctOptionText": "NULL values are returned for the right table's columns",
        "difficulty": "easy",
        "explanation": "In a LEFT JOIN, all rows from the left table are included regardless of matches. When there's no match in the right table, NULL values are returned for all columns from the right table.",
        "hint": "LEFT JOIN always keeps all rows from the left table, but what happens to the columns from the right table when there's no match?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "Which type of join includes all rows from both tables, regardless of whether there is a match?",
        "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        "correctOptionIndex": 3,
        "correctOptionText": "FULL OUTER JOIN",
        "difficulty": "easy",
        "explanation": "A FULL OUTER JOIN returns all rows from both tables, with NULL values in place of missing matches from either side.",
        "hint": "Think about the most inclusive type of join that keeps all rows from both the left and right tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "In a database with tables 'customers' and 'orders', which JOIN would you use to list all customers, including those who haven't placed any orders?",
        "options": ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
        "correctOptionIndex": 2,
        "correctOptionText": "LEFT JOIN",
        "difficulty": "easy",
        "explanation": "You would use a LEFT JOIN with 'customers' as the left table and 'orders' as the right table. This ensures all customers are listed, even those without orders (which would have NULL values for order columns).",
        "hint": "You want to keep all records from the customers table, regardless of whether they have matching orders."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is a CROSS JOIN used for?",
        "options": ["To join tables only where there are matching values", "To return unmatched rows from the left table", "To create a Cartesian product of two tables", "To find rows that exist in one table but not the other"],
        "correctOptionIndex": 2,
        "correctOptionText": "To create a Cartesian product of two tables",
        "difficulty": "medium",
        "explanation": "A CROSS JOIN produces a Cartesian product, combining each row from the first table with every row from the second table, resulting in all possible combinations.",
        "hint": "This join type doesn't use a join condition and produces all possible row combinations between tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "If table A has 10 rows and table B has 5 rows, how many rows will be returned by a CROSS JOIN between these tables?",
        "options": ["5", "10", "15", "50"],
        "correctOptionIndex": 3,
        "correctOptionText": "50",
        "difficulty": "medium",
        "explanation": "A CROSS JOIN returns the Cartesian product of the two tables, which is the number of rows in table A (10) multiplied by the number of rows in table B (5), resulting in 50 rows.",
        "hint": "The result set size is the product of the row counts from both tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "Which of the following is NOT a valid join type in standard SQL?",
        "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "NATURAL JOIN", "OUTER JOIN"],
        "correctOptionIndex": 4,
        "correctOptionText": "OUTER JOIN",
        "difficulty": "medium",
        "explanation": "OUTER JOIN by itself is not a valid join type in standard SQL. The valid types are INNER JOIN, LEFT [OUTER] JOIN, RIGHT [OUTER] JOIN, FULL [OUTER] JOIN, CROSS JOIN, and NATURAL JOIN. The word 'OUTER' is optional in LEFT, RIGHT, and FULL joins.",
        "hint": "Check which option needs additional keywords to be a valid join type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the difference between a LEFT JOIN and a RIGHT JOIN?",
        "options": ["They produce exactly the same results", "LEFT JOIN keeps all rows from the left table while RIGHT JOIN keeps all rows from the right table", "LEFT JOIN is more efficient than RIGHT JOIN", "RIGHT JOIN can only be used with indexed columns"],
        "correctOptionIndex": 1,
        "correctOptionText": "LEFT JOIN keeps all rows from the left table while RIGHT JOIN keeps all rows from the right table",
        "difficulty": "medium",
        "explanation": "A LEFT JOIN keeps all rows from the left (first) table and matches them with rows from the right table. A RIGHT JOIN does the opposite, keeping all rows from the right (second) table instead.",
        "hint": "The terms 'LEFT' and 'RIGHT' refer to which table's rows are all preserved in the result set."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What will be the outcome if you perform a NATURAL JOIN between two tables that have no column names in common?",
        "options": ["An error will be generated", "A cross join result will be returned", "No rows will be returned", "All rows from the left table will be returned"],
        "correctOptionIndex": 1,
        "correctOptionText": "A cross join result will be returned",
        "difficulty": "medium",
        "explanation": "When two tables in a NATURAL JOIN have no common column names, the join behaves like a CROSS JOIN, returning the Cartesian product of the two tables.",
        "hint": "NATURAL JOIN automatically joins on columns with the same name. What happens when there are no such columns?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "Which of the following is true about a NATURAL JOIN?",
        "options": ["It always requires an explicit ON clause", "It joins tables based on all columns with the same name", "It is a type of CROSS JOIN", "It can only be used with primary and foreign keys"],
        "correctOptionIndex": 1,
        "correctOptionText": "It joins tables based on all columns with the same name",
        "difficulty": "medium",
        "explanation": "A NATURAL JOIN automatically joins tables based on all columns that have the same name in both tables. It does not require an explicit join condition in an ON clause.",
        "hint": "Think about what makes NATURAL JOIN 'natural' - how does it automatically determine which columns to join on?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "How would you find all customers who have never placed an order?",
        "options": ["SELECT * FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id", "SELECT * FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL", "SELECT * FROM customers c RIGHT JOIN orders o ON c.customer_id = o.customer_id WHERE o.customer_id IS NULL", "SELECT * FROM customers c FULL JOIN orders o ON c.customer_id = o.customer_id"],
        "correctOptionIndex": 1,
        "correctOptionText": "SELECT * FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL",
        "difficulty": "medium",
        "explanation": "To find customers without orders, you need a LEFT JOIN from customers to orders, then filter for rows where the order_id is NULL. This returns only the customers that don't have corresponding records in the orders table.",
        "hint": "You need to keep all customers, then filter for those without a matching order record."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the purpose of a self-join?",
        "options": ["To join a table with itself using different join conditions", "To combine rows within the same table", "To create recursive queries", "To compare rows within the same table"],
        "correctOptionIndex": 3,
        "correctOptionText": "To compare rows within the same table",
        "difficulty": "medium",
        "explanation": "A self-join is used when you need to compare rows within the same table. It involves joining a table to itself, typically with aliases to distinguish between different instances of the same table.",
        "hint": "Think about what happens when you need to relate data points that exist in different rows of the same table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "Which SQL JOIN can be used to find rows that exist in one table but not in another?",
        "options": ["INNER JOIN", "FULL OUTER JOIN with WHERE clause", "CROSS JOIN", "SELF JOIN"],
        "correctOptionIndex": 1,
        "correctOptionText": "FULL OUTER JOIN with WHERE clause",
        "difficulty": "medium",
        "explanation": "To find rows that exist in one table but not in another (a set difference), you can use a FULL OUTER JOIN combined with a WHERE clause that filters for NULL values on one side or the other.",
        "hint": "You need a join that includes all rows from both tables, then filter to show only the non-matching ones."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "In a database that tracks employees and departments, how would you list all departments, including those with no employees?",
        "options": ["SELECT * FROM employees e INNER JOIN departments d ON e.dept_id = d.dept_id", "SELECT * FROM departments d LEFT JOIN employees e ON d.dept_id = e.dept_id", "SELECT * FROM employees e RIGHT JOIN departments d ON e.dept_id = d.dept_id", "Both B and C are correct"],
        "correctOptionIndex": 3,
        "correctOptionText": "Both B and C are correct",
        "difficulty": "medium",
        "explanation": "Both a LEFT JOIN from departments to employees and a RIGHT JOIN from employees to departments will produce the same result: all departments including those without employees. The order of tables is reversed between the two options, but the effect is the same.",
        "hint": "Consider which table needs to have all its rows included and how that can be achieved with different join types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What will the following query return: SELECT * FROM students s JOIN enrollments e ON s.student_id = e.student_id;",
        "options": ["All students, whether or not they are enrolled in any courses", "All enrollments, whether or not they have a corresponding student", "Only students who are enrolled in at least one course", "All students and all enrollments, with NULL values for non-matches"],
        "correctOptionIndex": 2,
        "correctOptionText": "Only students who are enrolled in at least one course",
        "difficulty": "easy",
        "explanation": "This query uses JOIN (which is equivalent to INNER JOIN) and will return only the rows where there is a match between the students and enrollments tables based on student_id. Students without enrollments will not appear in the results.",
        "hint": "When no specific join type is specified, SQL defaults to which type of join?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "Which join type is most appropriate when you want to find matching rows between two tables?",
        "options": ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
        "correctOptionIndex": 2,
        "correctOptionText": "INNER JOIN",
        "difficulty": "easy",
        "explanation": "An INNER JOIN is most appropriate when you only want to find matching rows between two tables, as it returns only the rows where there is a match based on the join condition.",
        "hint": "Which join type excludes all non-matching rows from both tables?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "If a query contains a LEFT JOIN followed by a WHERE clause that filters for NULL values in the right table's primary key, what is the result?",
        "options": ["All rows from the left table", "Only rows from the left table that have matches in the right table", "Only rows from the left table that do not have matches in the right table", "An error because NULL values cannot be filtered in a LEFT JOIN"],
        "correctOptionIndex": 2,
        "correctOptionText": "Only rows from the left table that do not have matches in the right table",
        "difficulty": "hard",
        "explanation": "This query pattern (LEFT JOIN combined with a WHERE clause checking for NULL in the right table's columns) effectively finds all rows in the left table that don't have a matching row in the right table. It's a common way to implement a NOT IN or NOT EXISTS operation.",
        "hint": "In a LEFT JOIN, what value appears in the right table's columns when there's no match?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the result of the following query: SELECT * FROM A NATURAL JOIN B NATURAL JOIN C?",
        "options": ["Rows where all columns with the same name in A, B, and C have matching values", "Rows from A joined with B, then the result joined with C", "A cross join between all three tables", "This is not valid SQL syntax"],
        "correctOptionIndex": 0,
        "correctOptionText": "Rows where all columns with the same name in A, B, and C have matching values",
        "difficulty": "hard",
        "explanation": "When multiple NATURAL JOINs are chained, the query returns rows where all columns with the same name across all tables have matching values. Each NATURAL JOIN automatically joins on all columns with the same name.",
        "hint": "NATURAL JOIN works on columns with the same name. How does this extend to multiple tables in sequence?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the difference between the USING clause and the ON clause in a JOIN?",
        "options": ["USING is faster than ON for large tables", "USING allows for complex join conditions while ON doesn't", "USING joins on columns with the same name in both tables, while ON allows different column names", "There is no difference; they are interchangeable"],
        "correctOptionIndex": 2,
        "correctOptionText": "USING joins on columns with the same name in both tables, while ON allows different column names",
        "difficulty": "medium",
        "explanation": "The USING clause is a shorthand for joining tables on columns that have the same name in both tables. The ON clause is more flexible, allowing you to join on columns with different names or to specify more complex join conditions.",
        "hint": "Consider the syntax differences between JOIN...USING(column_name) and JOIN...ON table1.column = table2.column."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "In a database with tables 'products', 'categories', and 'product_categories' (a junction table), which join approach would you use to list all products with their categories?",
        "options": ["One INNER JOIN between products and categories", "A NATURAL JOIN between all three tables", "Two INNER JOINs: first products to product_categories, then to categories", "A CROSS JOIN followed by a WHERE clause"],
        "correctOptionIndex": 2,
        "correctOptionText": "Two INNER JOINs: first products to product_categories, then to categories",
        "difficulty": "medium",
        "explanation": "To navigate a many-to-many relationship implemented with a junction table, you need two INNER JOINs: first joining the products table to the product_categories junction table, then joining that result to the categories table.",
        "hint": "Many-to-many relationships typically use an intermediate junction table. How would you navigate through it to connect the main tables?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the purpose of a junction table (also called a bridge or link table)?",
        "options": ["To increase query performance", "To implement a one-to-one relationship", "To implement a many-to-many relationship", "To reduce database size by normalizing data"],
        "correctOptionIndex": 2,
        "correctOptionText": "To implement a many-to-many relationship",
        "difficulty": "medium",
        "explanation": "A junction table is used to implement a many-to-many relationship between two entities. It contains foreign keys to both related tables, allowing each record in one table to be associated with multiple records in the other table and vice versa.",
        "hint": "Think about what happens when each record in table A can be related to multiple records in table B, and each record in B can be related to multiple records in A."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What would be the result of this query: SELECT * FROM employees e LEFT JOIN departments d ON e.dept_id = d.dept_id LEFT JOIN locations l ON d.location_id = l.location_id?",
        "options": ["All employees with their departments and locations, including employees without departments", "Only employees who have both a department and a location", "All employees with their departments, but only locations that exist", "An error because you cannot chain LEFT JOINs"],
        "correctOptionIndex": 0,
        "correctOptionText": "All employees with their departments and locations, including employees without departments",
        "difficulty": "hard",
        "explanation": "This query returns all employees, along with their department and location information if available. Since both joins are LEFT JOINs, all employees will be included, even those without departments (who will have NULL for department and location fields) and those with departments but no location (who will have NULL only for location fields).",
        "hint": "In a chain of LEFT JOINs, how does each join affect the rows already selected by previous joins?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "Which join would produce the same result as this query: SELECT * FROM A LEFT JOIN B ON A.id = B.a_id?",
        "options": ["SELECT * FROM B RIGHT JOIN A ON B.a_id = A.id", "SELECT * FROM A INNER JOIN B ON A.id = B.a_id", "SELECT * FROM B LEFT JOIN A ON B.a_id = A.id", "SELECT * FROM A FULL JOIN B ON A.id = B.a_id"],
        "correctOptionIndex": 0,
        "correctOptionText": "SELECT * FROM B RIGHT JOIN A ON B.a_id = A.id",
        "difficulty": "medium",
        "explanation": "A LEFT JOIN and a RIGHT JOIN produce the same result when the table order and join conditions are reversed. In this case, the RIGHT JOIN from B to A (with reversed column references) is equivalent to the LEFT JOIN from A to B.",
        "hint": "If you swap the table order and join type (LEFT to RIGHT or vice versa), what condition would make the results equivalent?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is a non-equi join?",
        "options": ["A join that uses operators other than equality (=) in its join condition", "A join between tables with no common columns", "A join that doesn't require a join condition", "A join between more than two tables"],
        "correctOptionIndex": 0,
        "correctOptionText": "A join that uses operators other than equality (=) in its join condition",
        "difficulty": "hard",
        "explanation": "A non-equi join is a join that uses comparison operators other than equality (such as >, <, >=, <=, BETWEEN, etc.) in its join condition. This allows for more complex relationships between tables.",
        "hint": "Most joins match rows where values are equal, but sometimes you need other types of comparisons."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What's the main difference between FULL OUTER JOIN and UNION ALL when combining data from two tables?",
        "options": ["FULL OUTER JOIN keeps all columns from both tables, while UNION ALL combines only matching columns", "FULL OUTER JOIN requires a join condition, while UNION ALL doesn't", "FULL OUTER JOIN produces a single result set with columns from both tables, while UNION ALL stacks rows from similar tables", "There is no difference, they produce identical results"],
        "correctOptionIndex": 2,
        "correctOptionText": "FULL OUTER JOIN produces a single result set with columns from both tables, while UNION ALL stacks rows from similar tables",
        "difficulty": "hard",
        "explanation": "A FULL OUTER JOIN combines tables horizontally, producing a single result set with all columns from both tables and matching rows based on a join condition. UNION ALL combines tables vertically, stacking rows from tables that have the same structure (column count and compatible data types).",
        "hint": "Consider the direction in which data is combined: are rows placed side by side (more columns) or one after another (more rows)?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "Which of the following correctly describes a cartesian product in SQL?",
        "options": ["The result of an INNER JOIN", "The result of a LEFT JOIN", "The result of a CROSS JOIN", "The result of a NATURAL JOIN"],
        "correctOptionIndex": 2,
        "correctOptionText": "The result of a CROSS JOIN",
        "difficulty": "easy",
        "explanation": "A cartesian product in SQL is the result of a CROSS JOIN, which combines each row from the first table with every row from the second table, resulting in all possible combinations without any join condition.",
        "hint": "Which join type doesn't use a join condition and produces all possible combinations?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the correct SQL syntax to join tables 'orders' and 'customers' on the customer_id column that exists in both tables?",
        "options": ["SELECT * FROM orders, customers WHERE orders.customer_id = customers.customer_id", "SELECT * FROM orders JOIN customers USING (customer_id)", "SELECT * FROM orders JOIN customers ON orders.customer_id = customers.customer_id", "All of the above are correct"],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above are correct",
        "difficulty": "medium",
        "explanation": "All three syntaxes are valid in SQL and will produce the same result: A) uses the older comma-separated syntax with a WHERE clause, B) uses the USING clause for columns with the same name, and C) uses the explicit ON clause. Option C is the most common modern syntax.",
        "hint": "SQL offers multiple syntaxes for joining tables. Consider which ones would correctly match records based on customer_id."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "In a database with three tables - 'students', 'courses', and 'enrollments' (with student_id and course_id) - which query would list all students with their enrolled courses, including students who aren't enrolled in any courses?",
        "options": ["SELECT * FROM students s INNER JOIN enrollments e ON s.id = e.student_id INNER JOIN courses c ON e.course_id = c.id", "SELECT * FROM students s LEFT JOIN enrollments e ON s.id = e.student_id LEFT JOIN courses c ON e.course_id = c.id", "SELECT * FROM students s LEFT JOIN enrollments e ON s.id = e.student_id INNER JOIN courses c ON e.course_id = c.id", "SELECT * FROM students s CROSS JOIN courses c LEFT JOIN enrollments e ON s.id = e.student_id AND c.id = e.course_id"],
        "correctOptionIndex": 1,
        "correctOptionText": "SELECT * FROM students s LEFT JOIN enrollments e ON s.id = e.student_id LEFT JOIN courses c ON e.course_id = c.id",
        "difficulty": "hard",
        "explanation": "To include all students, even those without enrollments, you need to use LEFT JOIN from students to enrollments. Then, to include course details for the enrollments, you use another LEFT JOIN to the courses table. This query will show all students, with NULL values for enrollments and courses when a student isn't enrolled in any course.",
        "hint": "You need to keep all students regardless of enrollments, then include course information when available."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the result of using NATURAL JOIN between two tables that have multiple columns with identical names?",
        "options": ["An error occurs because NATURAL JOIN can only work with one common column", "The join condition becomes an OR condition for any matching column", "The join condition becomes an AND condition for all matching columns", "Only the primary key columns are used for joining"],
        "correctOptionIndex": 2,
        "correctOptionText": "The join condition becomes an AND condition for all matching columns",
        "difficulty": "hard",
        "explanation": "When NATURAL JOIN is used between tables with multiple columns sharing the same name, the join condition automatically becomes an AND condition across all matching columns. For a row to be included in the result, all columns with the same name must have matching values.",
        "hint": "NATURAL JOIN automatically joins on all columns with the same name. How would this work if multiple columns have the same name?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "What is the primary difference between a one-to-many and a many-to-many relationship in database design?",
        "options": ["One-to-many uses foreign keys while many-to-many uses indexes", "One-to-many can be implemented directly with a foreign key, while many-to-many requires a junction table", "One-to-many relationships can only be queried with LEFT JOINs, while many-to-many requires INNER JOINs", "There is no difference in implementation, only in conceptual design"],
        "correctOptionIndex": 1,
        "correctOptionText": "One-to-many can be implemented directly with a foreign key, while many-to-many requires a junction table",
        "difficulty": "medium",
        "explanation": "A one-to-many relationship can be implemented directly by placing a foreign key in the 'many' table that references the primary key of the 'one' table. In contrast, a many-to-many relationship requires a junction (or bridge) table containing foreign keys to both related tables.",
        "hint": "Think about how database tables physically store relationships between entities and what's needed when each record can be related to multiple records on both sides."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Joins & Relationships",
        "questionText": "In a query with an ON clause like 'ON a.id = b.a_id AND b.status = 'Active'', where does the filter for 'Active' status apply?",
        "options": ["Only to the rows from table B before the join", "Only to the rows from table A before the join", "To the final result set after the join", "It depends on the specific join type"],
        "correctOptionIndex": 3,
        "correctOptionText": "It depends on the specific join type",
        "difficulty": "hard",
        "explanation": "The behavior of additional conditions in the ON clause depends on the join type. In an INNER JOIN, it's functionally equivalent to a WHERE clause. In outer joins (LEFT/RIGHT/FULL), it affects which rows are considered matches, but doesn't filter out unmatched rows from the preserved table, which would still appear with NULLs.",
        "hint": "Consider how different join types handle unmatched rows and how the additional condition affects the matching process."
    },


    // Aggregate Functions
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which aggregate function calculates the arithmetic mean of a set of values?",
        "options": ["SUM", "COUNT", "AVG", "MAX"],
        "correctOptionIndex": 2,
        "correctOptionText": "AVG",
        "difficulty": "easy",
        "explanation": "The AVG function calculates the arithmetic mean (average) of a set of values by summing all values and dividing by the count of non-NULL values.",
        "hint": "Think about which function would calculate the average value of a column."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What does the COUNT(*) function return?",
        "options": ["The number of non-NULL values in a specified column", "The number of distinct values in a specified column", "The number of rows in the result set", "The number of columns in the table"],
        "correctOptionIndex": 2,
        "correctOptionText": "The number of rows in the result set",
        "difficulty": "easy",
        "explanation": "COUNT(*) returns the number of rows in the result set, including rows with NULL values. It counts all rows that match the query conditions.",
        "hint": "The asterisk (*) in SQL represents all columns, so what would counting all columns actually count?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What's the difference between COUNT(*) and COUNT(column_name)?",
        "options": ["COUNT(*) is faster than COUNT(column_name)", "COUNT(*) includes NULL values while COUNT(column_name) excludes NULL values", "COUNT(*) counts all rows while COUNT(column_name) counts only distinct values", "There is no difference; they are functionally equivalent"],
        "correctOptionIndex": 1,
        "correctOptionText": "COUNT(*) includes NULL values while COUNT(column_name) excludes NULL values",
        "difficulty": "medium",
        "explanation": "COUNT(*) counts all rows in the result set regardless of NULL values, while COUNT(column_name) counts only the non-NULL values in the specified column.",
        "hint": "How does each expression handle rows where the specified column contains NULL?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which function would you use to find the highest value in a column?",
        "options": ["AVG", "TOP", "MAX", "SUM"],
        "correctOptionIndex": 2,
        "correctOptionText": "MAX",
        "difficulty": "easy",
        "explanation": "The MAX function returns the highest value among all non-NULL values in the specified column.",
        "hint": "Which function would return the maximum value from a set of numbers?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What happens if you apply the SUM function to a column that contains NULL values?",
        "options": ["The query returns NULL", "NULL values are counted as zero", "NULL values are ignored in the calculation", "An error is generated"],
        "correctOptionIndex": 2,
        "correctOptionText": "NULL values are ignored in the calculation",
        "difficulty": "medium",
        "explanation": "When using aggregate functions like SUM, NULL values are ignored in the calculation. The function operates only on the non-NULL values in the column.",
        "hint": "How do SQL aggregate functions typically handle NULL values during calculations?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What does the GROUP BY clause do in a SQL query?",
        "options": ["Sorts the result set by the specified column", "Filters rows based on group conditions", "Divides the result set into groups based on column values", "Joins tables based on the specified columns"],
        "correctOptionIndex": 2,
        "correctOptionText": "Divides the result set into groups based on column values",
        "difficulty": "easy",
        "explanation": "The GROUP BY clause divides the rows in a result set into groups based on the values in the specified column(s). Aggregate functions are then applied to each group separately.",
        "hint": "When you want to calculate aggregate values for different categories, what clause would you use?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which clause is used to filter groups after they've been created by a GROUP BY clause?",
        "options": ["WHERE", "HAVING", "FILTER", "GROUP FILTER"],
        "correctOptionIndex": 1,
        "correctOptionText": "HAVING",
        "difficulty": "medium",
        "explanation": "The HAVING clause filters groups after they've been created by a GROUP BY clause. It's analogous to the WHERE clause, but it operates on grouped results and can include aggregate functions in its conditions.",
        "hint": "You need to filter results after grouping, based on the result of an aggregate function."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What is the key difference between WHERE and HAVING clauses?",
        "options": ["WHERE filters rows before grouping, HAVING filters groups after grouping", "WHERE works with any query, HAVING only works with JOIN operations", "WHERE is for filtering numeric values, HAVING is for filtering text", "There is no difference; they are interchangeable"],
        "correctOptionIndex": 0,
        "correctOptionText": "WHERE filters rows before grouping, HAVING filters groups after grouping",
        "difficulty": "medium",
        "explanation": "The WHERE clause filters individual rows before they are grouped by the GROUP BY clause, while the HAVING clause filters groups after they've been created. Additionally, HAVING can use aggregate functions in its conditions, while WHERE cannot.",
        "hint": "Consider the order of operations in SQL query processing and where each clause fits in that sequence."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What does COUNT(DISTINCT column_name) do?",
        "options": ["Counts the total number of rows", "Counts the number of non-NULL values", "Counts the number of unique values in the column", "Counts only rows that have duplicate values"],
        "correctOptionIndex": 2,
        "correctOptionText": "Counts the number of unique values in the column",
        "difficulty": "medium",
        "explanation": "COUNT(DISTINCT column_name) counts the number of unique, non-NULL values in the specified column. Each distinct value is counted only once, regardless of how many times it appears.",
        "hint": "The DISTINCT keyword eliminates duplicates, so what would counting distinct values tell you?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which of the following is NOT a standard SQL aggregate function?",
        "options": ["COUNT", "SUM", "AVG", "MEDIAN"],
        "correctOptionIndex": 3,
        "correctOptionText": "MEDIAN",
        "difficulty": "medium",
        "explanation": "MEDIAN is not a standard SQL aggregate function in most SQL implementations. The standard aggregate functions include COUNT, SUM, AVG, MIN, and MAX. Some database systems provide MEDIAN as an extension or through other functions like percentile calculations.",
        "hint": "Which function isn't universally available across major SQL database systems as a built-in feature?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What happens if you include a non-aggregated column in the SELECT list of a query with GROUP BY?",
        "options": ["The query will always return an error", "The column must be included in the GROUP BY clause", "The database will automatically choose a random value from each group", "The query will return the first value it encounters in each group"],
        "correctOptionIndex": 1,
        "correctOptionText": "The column must be included in the GROUP BY clause",
        "difficulty": "medium",
        "explanation": "When using GROUP BY, any non-aggregated column in the SELECT list must also be included in the GROUP BY clause. This ensures that each group has a single, deterministic value for that column. Otherwise, the query will typically generate an error.",
        "hint": "What's the rule about columns in the SELECT clause when using GROUP BY?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What is the result of applying the MIN function to a column containing the values: 10, 15, NULL, 5, 20?",
        "options": ["NULL", "0", "5", "10"],
        "correctOptionIndex": 2,
        "correctOptionText": "5",
        "difficulty": "easy",
        "explanation": "The MIN function returns the smallest value among all non-NULL values in the column. In this case, it's 5. NULL values are ignored in the calculation.",
        "hint": "NULL values are ignored by aggregate functions. So what's the smallest actual value in the set?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "If a table has no rows that match a WHERE condition, what will SUM(column_name) return?",
        "options": ["0", "NULL", "An error", "The sum of all values in the column"],
        "correctOptionIndex": 1,
        "correctOptionText": "NULL",
        "difficulty": "medium",
        "explanation": "When SUM (or most other aggregate functions) is applied to an empty set of rows, it returns NULL, not zero. This is because there are no values to sum. An exception is COUNT(), which returns 0 for an empty set.",
        "hint": "What happens when you ask for a calculation on a completely empty set of data?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What will the following query return: SELECT COUNT(*), AVG(salary) FROM employees WHERE department_id = 999;",
        "options": ["NULL, NULL", "0, NULL", "0, 0", "An error"],
        "correctOptionIndex": 1,
        "correctOptionText": "0, NULL",
        "difficulty": "medium",
        "explanation": "If no rows match the WHERE condition, COUNT(*) returns 0 because there are zero rows to count. However, AVG(salary) returns NULL because there are no values to average. COUNT is unique among aggregate functions in returning 0 rather than NULL for an empty set.",
        "hint": "Different aggregate functions behave differently when applied to an empty result set. How does COUNT differ from other aggregates?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which of the following queries would return the number of departments with average salary greater than $50,000?",
        "options": ["SELECT COUNT(*) FROM departments WHERE AVG(salary) > 50000", "SELECT COUNT(*) FROM departments GROUP BY dept_id HAVING AVG(salary) > 50000", "SELECT COUNT(dept_id) FROM employees GROUP BY dept_id HAVING AVG(salary) > 50000", "SELECT COUNT(*) FROM (SELECT dept_id FROM employees GROUP BY dept_id HAVING AVG(salary) > 50000)"],
        "correctOptionIndex": 3,
        "correctOptionText": "SELECT COUNT(*) FROM (SELECT dept_id FROM employees GROUP BY dept_id HAVING AVG(salary) > 50000)",
        "difficulty": "hard",
        "explanation": "To count departments with average salary > $50,000, you need a nested query: first group by department and filter for those with average salary > $50,000, then count the resulting departments. Option A is incorrect because aggregate functions can't be used in WHERE. Option B counts each department separately but doesn't give a total count. Option C counts employees in each qualifying department, not the number of departments.",
        "hint": "You need to first identify departments that meet the criteria, then count how many departments qualify. This requires multiple steps."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What is the purpose of the ROLLUP operator in SQL?",
        "options": ["To sort data in a specific order", "To create cumulative sums in a result set", "To generate subtotals and grand totals in a result set", "To remove duplicate rows from a grouped query"],
        "correctOptionIndex": 2,
        "correctOptionText": "To generate subtotals and grand totals in a result set",
        "difficulty": "hard",
        "explanation": "The ROLLUP operator is used with GROUP BY to generate multiple levels of subtotals and a grand total in a result set. It creates a hierarchy of grouping sets that include combinations of the specified columns, plus a final row for the overall total.",
        "hint": "Think about what operation would help generate summary data at multiple levels of aggregation in a single query."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which SQL function would you use to concatenate values from multiple rows into a single string?",
        "options": ["CONCAT", "JOIN", "GROUP_CONCAT (MySQL) or STRING_AGG (SQL Server) or LISTAGG (Oracle)", "COLLECT"],
        "correctOptionIndex": 2,
        "correctOptionText": "GROUP_CONCAT (MySQL) or STRING_AGG (SQL Server) or LISTAGG (Oracle)",
        "difficulty": "hard",
        "explanation": "To concatenate values from multiple rows into a single string as part of an aggregation, you would use database-specific functions: GROUP_CONCAT in MySQL, STRING_AGG in SQL Server, or LISTAGG in Oracle. These functions aggregate string values from multiple rows, whereas CONCAT combines strings within a single row.",
        "hint": "Regular string functions work on individual rows. What special aggregate function would combine strings across multiple rows?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which query will give the correct average salary per department?",
        "options": ["SELECT dept_id, AVG(salary) FROM employees", "SELECT dept_id, AVG(salary) FROM employees GROUP BY salary", "SELECT dept_id, AVG(salary) FROM employees GROUP BY dept_id", "SELECT AVG(salary) FROM employees HAVING dept_id"],
        "correctOptionIndex": 2,
        "correctOptionText": "SELECT dept_id, AVG(salary) FROM employees GROUP BY dept_id",
        "difficulty": "medium",
        "explanation": "To calculate the average salary per department, you need to group the data by department (GROUP BY dept_id) and then apply the AVG function to the salary column for each group. Option A is missing the GROUP BY clause. Option B groups by the wrong column. Option D doesn't return department IDs and incorrectly uses HAVING.",
        "hint": "You need to group the data by the attribute you want to calculate averages for (departments)."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What does the following query return: SELECT COUNT(DISTINCT country) FROM customers?",
        "options": ["The total number of customers", "The number of customers with a country specified", "The number of different countries represented in the customer table", "The number of duplicate country entries"],
        "correctOptionIndex": 2,
        "correctOptionText": "The number of different countries represented in the customer table",
        "difficulty": "easy",
        "explanation": "COUNT(DISTINCT country) counts the number of unique, non-NULL country values in the customers table. This tells you how many different countries are represented among your customers.",
        "hint": "The DISTINCT keyword eliminates duplicates, and the COUNT function counts the remaining unique values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "If column 'rating' contains values (5, 3, NULL, 4, 5), what will AVG(rating) return?",
        "options": ["3.4", "4.25", "NULL", "3.0"],
        "correctOptionIndex": 1,
        "correctOptionText": "4.25",
        "difficulty": "medium",
        "explanation": "AVG(rating) calculates the average of non-NULL values: (5 + 3 + 4 + 5) ÷ 4 = 17 ÷ 4 = 4.25. The NULL value is ignored both in the sum and in the count of values.",
        "hint": "Remember that aggregate functions ignore NULL values in their calculations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which query correctly finds departments where the average salary is greater than $50,000?",
        "options": ["SELECT dept_id FROM employees WHERE AVG(salary) > 50000", "SELECT dept_id FROM employees GROUP BY dept_id HAVING AVG(salary) > 50000", "SELECT dept_id FROM employees WHERE salary > 50000 GROUP BY dept_id", "SELECT dept_id FROM employees GROUP BY dept_id WHERE AVG(salary) > 50000"],
        "correctOptionIndex": 1,
        "correctOptionText": "SELECT dept_id FROM employees GROUP BY dept_id HAVING AVG(salary) > 50000",
        "difficulty": "medium",
        "explanation": "To filter results based on an aggregate value, you must use HAVING, not WHERE. The correct query groups by department, then uses HAVING to filter for groups where the average salary exceeds $50,000. WHERE cannot contain aggregate functions, and HAVING must come after GROUP BY.",
        "hint": "Which clause is used to filter grouped data based on the result of an aggregate function?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What is the result of applying the SUM function to a text column?",
        "options": ["The concatenated string of all values", "The sum of the ASCII values of all characters", "An error", "NULL"],
        "correctOptionIndex": 2,
        "correctOptionText": "An error",
        "difficulty": "medium",
        "explanation": "Applying the SUM function to a text/character column will typically result in an error because SUM is designed to work with numeric data types. The database cannot implicitly convert text to numbers for summation.",
        "hint": "Can numerical operations be directly applied to text values in SQL?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "In a query with GROUP BY on multiple columns like 'GROUP BY department, job_title', how are the rows grouped?",
        "options": ["Rows are grouped by department first, then by job_title within each department", "Rows are grouped by job_title first, then by department within each job_title", "The database decides which column to group by first based on the data distribution", "Rows are grouped separately by each column, resulting in multiple grouping sets"],
        "correctOptionIndex": 0,
        "correctOptionText": "Rows are grouped by department first, then by job_title within each department",
        "difficulty": "medium",
        "explanation": "When GROUP BY is used with multiple columns, rows are grouped first by the leftmost column, then within each of those groups, they are further grouped by the next column, and so on. This creates a hierarchy of groups, with each grouping level nested within the previous one.",
        "hint": "The order of columns in the GROUP BY clause matters. Think about how a hierarchical grouping would work."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What does the COALESCE function do when used with aggregate functions?",
        "options": ["Combines multiple aggregate functions into one result", "Replaces NULL results from aggregate functions with a specified default value", "Automatically handles errors in aggregate calculations", "Groups data without requiring a GROUP BY clause"],
        "correctOptionIndex": 1,
        "correctOptionText": "Replaces NULL results from aggregate functions with a specified default value",
        "difficulty": "hard",
        "explanation": "COALESCE can be used to replace NULL results from aggregate functions with a default value. For example, COALESCE(SUM(amount), 0) will return 0 instead of NULL if there are no rows to sum. This is particularly useful for empty result sets where aggregates would normally return NULL.",
        "hint": "COALESCE takes multiple arguments and returns the first non-NULL value. How might this help with aggregate functions that might return NULL?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What is the correct syntax for nesting aggregate functions in SQL?",
        "options": ["You cannot nest aggregate functions in standard SQL", "SELECT AVG(MAX(salary)) FROM employees GROUP BY department", "SELECT AVG(salary_max) FROM (SELECT MAX(salary) AS salary_max FROM employees GROUP BY department)", "SELECT MAX(AVG(salary)) FROM employees"],
        "correctOptionIndex": 2,
        "correctOptionText": "SELECT AVG(salary_max) FROM (SELECT MAX(salary) AS salary_max FROM employees GROUP BY department)",
        "difficulty": "hard",
        "explanation": "You cannot directly nest aggregate functions in most SQL implementations. Instead, you must use a subquery: first calculate one aggregate (MAX salary per department), then apply the second aggregate (AVG) to those results. This two-step process effectively achieves nested aggregation.",
        "hint": "Standard SQL doesn't allow direct nesting of aggregate functions. What alternative approach would work?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which aggregate function would you use to find the number between the highest and lowest values in a dataset?",
        "options": ["RANGE", "DIFF", "MAX - MIN", "There is no standard SQL function for this"],
        "correctOptionIndex": 3,
        "correctOptionText": "There is no standard SQL function for this",
        "difficulty": "hard",
        "explanation": "There is no standard SQL aggregate function that directly calculates the range (the difference between maximum and minimum values). Instead, you would need to use separate MAX and MIN functions and calculate the difference: SELECT MAX(column) - MIN(column) FROM table.",
        "hint": "Consider whether this is available as a single built-in function or if it requires combining multiple functions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What will the following query return: SELECT department, SUM(salary) FROM employees GROUP BY department HAVING COUNT(*) > 5;",
        "options": ["All departments with total salary greater than 5", "All departments with more than 5 employees", "The sum of salaries only for employees in departments with more than 5 employees", "Departments with an average salary greater than 5"],
        "correctOptionIndex": 2,
        "correctOptionText": "The sum of salaries only for employees in departments with more than 5 employees",
        "difficulty": "hard",
        "explanation": "This query calculates the sum of salaries grouped by department, but only includes departments where the count of employees is greater than 5. The HAVING clause filters the groups after aggregation, so only departments with more than 5 employees will be included in the results.",
        "hint": "The HAVING clause filters groups after aggregation. What condition is being applied to the groups here?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What does the CUBE operator do in GROUP BY?",
        "options": ["Creates a hierarchical grouping similar to ROLLUP", "Groups data into n-dimensional cubes for analytical processing", "Generates all possible combinations of grouping sets from the specified columns", "Calculates the cubic root of aggregate values"],
        "correctOptionIndex": 2,
        "correctOptionText": "Generates all possible combinations of grouping sets from the specified columns",
        "difficulty": "hard",
        "explanation": "The CUBE operator generates all possible combinations of grouping sets from the specified columns. For example, GROUP BY CUBE(A, B, C) generates grouping sets for (A, B, C), (A, B), (A, C), (B, C), (A), (B), (C), and (). This allows for analysis across all possible combinations of dimensions.",
        "hint": "Think about a multidimensional analysis where you want to see totals across every possible combination of categories."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What is the difference between the STDDEV (or STDEV) and VAR (or VARIANCE) functions?",
        "options": ["STDDEV works with integer data, VAR works with decimal data", "STDDEV gives a percentage while VAR gives an absolute value", "STDDEV is the square root of VAR", "STDDEV calculates deviation from mean, VAR calculates variance from median"],
        "correctOptionIndex": 2,
        "correctOptionText": "STDDEV is the square root of VAR",
        "difficulty": "hard",
        "explanation": "STDDEV (standard deviation) is the square root of VAR (variance). Both measure dispersion in a dataset, but standard deviation is expressed in the same units as the original data, whereas variance is expressed in squared units. In statistical terms, STDDEV = √VAR.",
        "hint": "Both functions measure data dispersion, but what mathematical relationship exists between standard deviation and variance?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "What happens if you try to GROUP BY a column that contains NULL values?",
        "options": ["The query will fail with an error", "NULL values are excluded from the results", "NULL values are treated as a distinct group", "NULL values are automatically converted to zero or empty string"],
        "correctOptionIndex": 2,
        "correctOptionText": "NULL values are treated as a distinct group",
        "difficulty": "medium",
        "explanation": "When you GROUP BY a column that contains NULL values, all NULL values are considered equal and are grouped together as a single distinct group. This means you'll have one group for all NULL values, just like you have one group for each distinct non-NULL value.",
        "hint": "In SQL grouping operations, how are NULL values typically compared to each other?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "Which of the following is NOT a valid use of GROUP BY?",
        "options": ["GROUP BY 1, 2, 3 (referring to column positions)", "GROUP BY EXTRACT(YEAR FROM date_column)", "GROUP BY column HAVING column > 10", "GROUP BY column1 + column2"],
        "correctOptionIndex": 2,
        "correctOptionText": "GROUP BY column HAVING column > 10",
        "difficulty": "medium",
        "explanation": "You cannot use HAVING inside a GROUP BY clause. HAVING is a separate clause that comes after GROUP BY and is used to filter groups based on aggregate conditions. The correct syntax would be 'GROUP BY column HAVING column > 10' which filters groups where the grouped column's value exceeds 10.",
        "hint": "Which option mixes different SQL clauses in a way that violates standard SQL syntax?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Aggregate Functions",
        "questionText": "To find the second highest salary in an employees table, which approach using aggregate functions would work?",
        "options": ["SELECT SECOND(salary) FROM employees", "SELECT MAX(salary) FROM employees WHERE salary < MAX(salary)", "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)", "SELECT RANK(salary) FROM employees WHERE rank = 2"],
        "correctOptionIndex": 2,
        "correctOptionText": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)",
        "difficulty": "hard",
        "explanation": "To find the second highest salary, you can find the maximum salary among all salaries that are less than the maximum salary. This requires a subquery: first find the overall maximum, then find the maximum of all values less than that. Option B is incorrect because you cannot use an aggregate function in a WHERE clause.",
        "hint": "Think about how you could use MAX twice - once to find the highest value, and again to find the next highest."
    },


    // Subqueries & Common Table Expressions
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is a subquery in SQL?",
        "options": [
        "A query that is executed only once during database creation",
        "A query nested inside another query",
        "A query that only returns numeric results",
        "A query that can only be used in stored procedures"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A query nested inside another query",
        "difficulty": "easy",
        "explanation": "A subquery is a SQL query nested inside a larger query. It can be used in various parts of a SQL statement, such as the SELECT, FROM, WHERE, or HAVING clauses.",
        "hint": "Think about the hierarchical relationship between queries in complex SQL statements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following is a valid way to introduce a Common Table Expression (CTE)?",
        "options": [
        "DEFINE TABLE expression_name AS (...)",
        "CREATE CTE expression_name AS (...)",
        "WITH expression_name AS (...)",
        "EXECUTE expression_name AS (...)"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "WITH expression_name AS (...)",
        "difficulty": "easy",
        "explanation": "Common Table Expressions (CTEs) are introduced using the WITH keyword followed by the expression name and AS keyword, then the query definition in parentheses.",
        "hint": "Look for the keyword that typically precedes temporary result sets in SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which type of subquery returns exactly one value?",
        "options": [
        "Scalar subquery",
        "Row subquery",
        "Table subquery",
        "Correlated subquery"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Scalar subquery",
        "difficulty": "easy",
        "explanation": "A scalar subquery returns exactly one column and exactly one row (a single value). It can be used anywhere in a SQL statement where a single value is expected.",
        "hint": "Which type returns the smallest possible result set - just one value?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is the main advantage of using a CTE over a subquery?",
        "options": [
        "CTEs always execute faster than subqueries",
        "CTEs can be referenced multiple times in the same query",
        "CTEs can modify data while subqueries cannot",
        "CTEs can access system tables that subqueries cannot"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "CTEs can be referenced multiple times in the same query",
        "difficulty": "easy",
        "explanation": "One major advantage of CTEs is that they can be referenced multiple times within the same query, which improves readability and reduces redundant code, especially for complex queries.",
        "hint": "Think about code reusability within a single SQL statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following operators cannot be used with a subquery in a WHERE clause?",
        "options": [
        "IN",
        "EXISTS",
        "BETWEEN",
        "ALL"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "BETWEEN",
        "difficulty": "medium",
        "explanation": "The BETWEEN operator cannot be directly used with a subquery because it requires two single values to define a range. Operators like IN, EXISTS, and ALL are designed to work with subqueries.",
        "hint": "Which operator specifically needs two discrete values rather than a result set?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is a correlated subquery?",
        "options": [
        "A subquery that contains only correlation coefficients",
        "A subquery that uses the same tables as the outer query",
        "A subquery that references columns from the outer query",
        "A subquery that returns exactly the same number of rows as the outer query"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A subquery that references columns from the outer query",
        "difficulty": "medium",
        "explanation": "A correlated subquery is a subquery that references one or more columns from the outer query. This means the subquery is dependent on the outer query and must be reevaluated for each row processed by the outer query.",
        "hint": "This type of subquery has a dependency on the context in which it runs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which statement best describes the execution order of a CTE?",
        "options": [
        "CTEs are executed after the main query",
        "CTEs are executed before the main query",
        "CTEs are only executed if referenced in the main query",
        "CTEs are executed in parallel with the main query"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "CTEs are only executed if referenced in the main query",
        "difficulty": "medium",
        "explanation": "CTEs are materialized only when they are referenced in the main query. If a CTE is defined but not used in the main query, it will not be executed at all.",
        "hint": "Consider the performance implications and when the database engine would need to evaluate the CTE."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is the limitation of using IN with a subquery compared to using EXISTS?",
        "options": [
        "IN cannot be used with NULL values",
        "IN is usually slower for large result sets",
        "IN can only be used with a single column",
        "IN requires more memory than EXISTS"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "IN is usually slower for large result sets",
        "difficulty": "medium",
        "explanation": "When working with large result sets, IN with a subquery is often slower than EXISTS because IN typically requires the database to materialize the entire subquery result before comparison, while EXISTS can stop as soon as a match is found.",
        "hint": "Think about performance implications when dealing with extensive data sets."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following is NOT a valid clause where a subquery can be used?",
        "options": [
        "SELECT clause",
        "FROM clause",
        "ORDER BY clause",
        "GROUP BY clause"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "GROUP BY clause",
        "difficulty": "medium",
        "explanation": "Subqueries cannot be directly used in a GROUP BY clause. They can be used in SELECT, FROM, WHERE, HAVING, and ORDER BY clauses, but the GROUP BY clause requires column names or expressions directly from the query's result set.",
        "hint": "Which clause specifically requires direct column references rather than computed values?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What happens if a recursive CTE doesn't include a termination condition?",
        "options": [
        "The query will fail to compile",
        "The recursion will stop after 100 iterations by default",
        "The database will raise a warning but continue execution",
        "The query will run indefinitely or until it exceeds resource limits"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "The query will run indefinitely or until it exceeds resource limits",
        "difficulty": "medium",
        "explanation": "Without a proper termination condition, a recursive CTE will continue processing until it either produces no more rows or exceeds database-imposed resource limits (like maximum recursion depth), potentially causing a stack overflow or timeout error.",
        "hint": "Think about what safeguards SQL has against infinite loops."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "In which scenario would a derived table (subquery in the FROM clause) be more appropriate than a CTE?",
        "options": [
        "When the same subquery needs to be referenced multiple times",
        "When working with recursive data structures",
        "When the subquery is used only once and improves readability",
        "When performing data modification operations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "When the subquery is used only once and improves readability",
        "difficulty": "medium",
        "explanation": "Derived tables (subqueries in the FROM clause) are most appropriate when the subquery is only needed once. CTEs are better when the same subquery needs to be referenced multiple times or when handling recursive data structures.",
        "hint": "Consider the use case where simplicity might outweigh reusability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is the scope of a CTE?",
        "options": [
        "It persists throughout the entire database session",
        "It exists only within the query in which it is defined",
        "It persists until explicitly dropped",
        "It exists across all queries in a transaction"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It exists only within the query in which it is defined",
        "difficulty": "easy",
        "explanation": "A CTE has a scope limited to the single SQL statement in which it is defined. Once that statement completes execution, the CTE ceases to exist and cannot be referenced by subsequent queries.",
        "hint": "Think about the lifetime of a temporary result set in SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What differentiates a recursive CTE from a standard CTE?",
        "options": [
        "It must include the keyword RECURSIVE",
        "It references itself in its definition",
        "It can only be used with hierarchical data",
        "It requires a specific database permission"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It references itself in its definition",
        "difficulty": "medium",
        "explanation": "A recursive CTE references itself within its own definition, allowing it to traverse hierarchical or graph-like data structures through iterative processing. This self-reference is what enables recursion.",
        "hint": "What fundamental programming concept allows a function to call itself?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following is true about subqueries in the SELECT clause?",
        "options": [
        "They must return exactly one row and one column",
        "They can return multiple columns but only one row",
        "They can return multiple rows but only one column",
        "They can return multiple rows and multiple columns"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "They must return exactly one row and one column",
        "difficulty": "medium",
        "explanation": "Subqueries in the SELECT clause (scalar subqueries) must return exactly one row and one column (a single value). If they return multiple rows or columns, an error will be raised.",
        "hint": "When a subquery is part of a column list, what constraints exist on its result set?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is the purpose of the EXISTS operator with a subquery?",
        "options": [
        "To check if a specific column exists in the database",
        "To test if the subquery returns any rows",
        "To verify that all rows returned by the subquery have non-NULL values",
        "To check if the number of rows returned equals the number in the outer query"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To test if the subquery returns any rows",
        "difficulty": "easy",
        "explanation": "The EXISTS operator is used to test if a subquery returns any rows at all. It returns TRUE if the subquery returns at least one row, and FALSE if the subquery returns no rows.",
        "hint": "This operator performs a boolean test on the presence of data, not its content."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What happens if you try to define multiple CTEs with the same name in a single query?",
        "options": [
        "The latest definition overrides earlier ones",
        "All definitions are merged into a single result set",
        "The database raises a syntax error",
        "The query uses the definition that returns fewer rows"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The database raises a syntax error",
        "difficulty": "easy",
        "explanation": "In SQL, CTE names must be unique within a single query. Attempting to define multiple CTEs with the same name in one query will result in a syntax error because the database cannot determine which definition to use.",
        "hint": "Consider the naming constraints for temporary objects in SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "In a recursive CTE, what are the two main parts separated by a UNION ALL?",
        "options": [
        "Initialization and recursion",
        "Declaration and execution",
        "Anchor member and recursive member",
        "Selection and projection"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Anchor member and recursive member",
        "difficulty": "hard",
        "explanation": "A recursive CTE consists of an anchor member (the initial query that returns the base result set) and a recursive member (the part that references the CTE itself), typically combined with a UNION ALL operator.",
        "hint": "One part establishes the starting point, while the other handles the iteration."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following is NOT a valid way to use a subquery?",
        "options": [
        "As a derived table in the FROM clause",
        "As a scalar expression in the SELECT list",
        "As a predicate in a JOIN condition",
        "As a target in an UPDATE statement"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "As a target in an UPDATE statement",
        "difficulty": "medium",
        "explanation": "A subquery cannot be used as the target of an UPDATE statement. While subqueries can be used in various parts of SQL statements, including the SET clause of an UPDATE, the target table to be updated must be a regular table or view, not a subquery result.",
        "hint": "Consider which SQL objects can have their data directly modified."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is the main benefit of using the ANY operator with a subquery?",
        "options": [
        "It allows comparison with all values returned by the subquery",
        "It returns TRUE if the condition is true for at least one row from the subquery",
        "It optimizes the query by checking only the first returned row",
        "It can be used only with numeric comparisons"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "It returns TRUE if the condition is true for at least one row from the subquery",
        "difficulty": "hard",
        "explanation": "The ANY operator returns TRUE if the comparison is true for at least one value returned by the subquery. It's useful when you need to check if a condition holds for any of the values in a set.",
        "hint": "Think about what happens when at least one comparison succeeds rather than all of them."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following statements about multiple CTEs is correct?",
        "options": [
        "Each CTE must be introduced with its own WITH keyword",
        "Multiple CTEs must be separated by semicolons",
        "A later CTE can reference an earlier CTE defined in the same query",
        "Multiple CTEs can only be used with SELECT statements, not with INSERT, UPDATE, or DELETE"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A later CTE can reference an earlier CTE defined in the same query",
        "difficulty": "medium",
        "explanation": "When defining multiple CTEs in a single query, a CTE defined later in the list can reference any CTE that was defined earlier in the same WITH clause. This allows building complex queries in logical steps.",
        "hint": "Consider the order-dependent relationship between multiple temporary result sets."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is the result of comparing a value to a subquery that returns no rows using the = operator?",
        "options": [
        "TRUE",
        "FALSE",
        "NULL",
        "An error is raised"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "NULL",
        "difficulty": "hard",
        "explanation": "When comparing a value to a subquery that returns no rows using the = operator, the result is NULL. This is because comparing anything to an empty set results in an unknown comparison result in SQL's three-valued logic.",
        "hint": "In SQL's logic system, what happens when a comparison can't be definitively determined as true or false?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is the difference between the ALL and ANY operators when used with subqueries?",
        "options": [
        "ALL works with any data type while ANY only works with numbers",
        "ALL requires all rows to satisfy the condition while ANY requires just one row",
        "ALL can only be used with = operators while ANY works with all comparison operators",
        "ALL is supported in all databases while ANY is vendor-specific"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "ALL requires all rows to satisfy the condition while ANY requires just one row",
        "difficulty": "hard",
        "explanation": "The ALL operator returns TRUE if the condition is true for all values returned by the subquery. The ANY operator returns TRUE if the condition is true for at least one value returned by the subquery.",
        "hint": "Consider the logical difference between universal and existential quantifiers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What happens when you use the NOT EXISTS operator with a subquery?",
        "options": [
        "It returns TRUE if the subquery returns any NULL values",
        "It returns TRUE if the subquery returns exactly one row",
        "It returns TRUE if the subquery returns no rows",
        "It returns TRUE if the subquery returns all possible rows"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It returns TRUE if the subquery returns no rows",
        "difficulty": "medium",
        "explanation": "The NOT EXISTS operator returns TRUE if the subquery returns no rows. It's the logical negation of EXISTS, which checks for the presence of at least one row.",
        "hint": "This is the negation of a test for the presence of data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is a lateral join in relation to subqueries?",
        "options": [
        "A join that only works with tables that have a lateral relationship",
        "A join that allows a subquery in the FROM clause to reference columns from tables that appear before it",
        "A join that filters rows based on lateral movement of data",
        "A join that combines data horizontally instead of vertically"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A join that allows a subquery in the FROM clause to reference columns from tables that appear before it",
        "difficulty": "hard",
        "explanation": "A lateral join (using the LATERAL keyword) allows a subquery in the FROM clause to reference columns from tables that appear earlier in the FROM clause. This enables correlated subqueries in the FROM clause, which isn't normally possible.",
        "hint": "This feature allows dependencies between items in the FROM clause that would otherwise be impossible."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following is a valid way to define columns in a CTE?",
        "options": [
        "WITH cte (col1, col2) AS (...)",
        "WITH cte AS (...) RETURNING (col1, col2)",
        "WITH cte AS (...) DEFINE COLUMNS (col1, col2)",
        "WITH cte COLUMNS (col1, col2) AS (...)"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "WITH cte (col1, col2) AS (...)",
        "difficulty": "medium",
        "explanation": "Column names in a CTE can be explicitly defined by placing them in parentheses after the CTE name and before the AS keyword. This is particularly useful when the column names in the underlying query are complex or when you want to provide more meaningful names.",
        "hint": "Look for the syntax that follows standard SQL conventions for defining result set columns."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "When using multiple CTEs, which of the following is a limitation?",
        "options": [
        "You can define a maximum of 10 CTEs in one query",
        "All CTEs must return the same number of columns",
        "A CTE cannot reference a CTE defined earlier in the same query",
        "Recursive and non-recursive CTEs cannot be mixed in the same query"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Recursive and non-recursive CTEs cannot be mixed in the same query",
        "difficulty": "hard",
        "explanation": "In some database systems, mixing recursive and non-recursive CTEs in the same query is not supported or requires special syntax. This is because recursive CTEs often require different processing mechanisms than regular CTEs.",
        "hint": "Consider potential processing model differences between iterative and non-iterative query approaches."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What is a materialized CTE?",
        "options": [
        "A CTE that is stored permanently in the database",
        "A CTE where the results are computed once and stored in memory for reuse",
        "A CTE that only works with materialized views",
        "A CTE containing only physical, not computed, columns"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A CTE where the results are computed once and stored in memory for reuse",
        "difficulty": "hard",
        "explanation": "A materialized CTE is a CTE where the database engine computes the results once and stores them in memory for reuse. This optimization is applied automatically by some database systems when a CTE is referenced multiple times, improving performance by avoiding redundant computation.",
        "hint": "Think about the performance implications of reusing previously calculated results."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "What happens if a subquery in a WHERE clause returns more than one column when used with a single-column comparison?",
        "options": [
        "The database uses the first column and ignores the rest",
        "The database compares all columns and returns TRUE if any match",
        "The query fails with a syntax error",
        "The database automatically converts multi-column results to a single value"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The query fails with a syntax error",
        "difficulty": "medium",
        "explanation": "When using a subquery in a WHERE clause with operators like =, >, <, etc., the subquery must return exactly one column. If it returns multiple columns, the database will raise a syntax error because it cannot determine which column to use for the comparison.",
        "hint": "Consider the dimensional compatibility required for standard comparison operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "In a recursive CTE, what typically happens when the recursive member returns no rows?",
        "options": [
        "The CTE raises an error",
        "The recursion continues indefinitely with NULL values",
        "The base CTE result is returned and recursion stops",
        "The entire query returns no rows"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The recursion stops and the accumulated result is returned",
        "difficulty": "medium",
        "explanation": "In a recursive CTE, when the recursive member returns no rows, the recursion stops naturally. The final result consists of all rows accumulated up to that point, including the anchor member results.",
        "hint": "This scenario represents the natural termination condition for recursive processing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following statements best describes the relationship between a CTE and a temporary table?",
        "options": [
        "CTEs are permanent while temporary tables exist only for one session",
        "CTEs exist only for the duration of a query while temporary tables exist for the session",
        "CTEs can be indexed while temporary tables cannot",
        "CTEs can only be used in SELECT statements while temporary tables can be used with any statement"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "CTEs exist only for the duration of a query while temporary tables exist for the session",
        "difficulty": "medium",
        "explanation": "CTEs are defined and exist only within the scope of a single SQL statement. Once the statement completes execution, the CTE no longer exists. In contrast, temporary tables persist for the duration of a session or transaction, depending on their type.",
        "hint": "Consider the different lifetimes of these temporary data structures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Subqueries & Common Table Expressions",
        "questionText": "Which of the following is true about the performance of CTEs compared to derived tables (subqueries in the FROM clause)?",
        "options": [
        "CTEs are always faster because they are optimized by the query planner",
        "Derived tables are always faster because they exist only in the FROM clause",
        "Performance is generally similar, as both are optimized in similar ways by most database engines",
        "CTEs are only faster when referenced multiple times in the same query"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Performance is generally similar, as both are optimized in similar ways by most database engines",
        "difficulty": "hard",
        "explanation": "In most modern database systems, CTEs and derived tables have similar performance characteristics because query optimizers treat them in similar ways. The choice between them should generally be based on readability and maintainability rather than performance, except in specific cases.",
        "hint": "Modern query optimizers apply similar optimizations regardless of syntactic differences."
    },

    
    // Views
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is a database view?",
        "options": [
        "A physical copy of a table",
        "A virtual table based on the result set of a SQL statement",
        "A graphical representation of the database schema",
        "A historical record of data changes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A virtual table based on the result set of a SQL statement",
        "difficulty": "easy",
        "explanation": "A view is a virtual table that is based on the result set of a SQL statement. It does not store data itself but provides a way to look at data in the underlying tables through a specific lens.",
        "hint": "Think about whether views store their own data or provide access to existing data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is the basic syntax for creating a view?",
        "options": [
        "CREATE VIEW view_name AS SELECT * FROM table_name;",
        "MAKE VIEW view_name FROM table_name;",
        "CREATE VIEW view_name (SELECT * FROM table_name);",
        "DEFINE VIEW view_name = SELECT * FROM table_name;"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "CREATE VIEW view_name AS SELECT * FROM table_name;",
        "difficulty": "easy",
        "explanation": "The standard SQL syntax for creating a view uses the CREATE VIEW statement followed by the view name, the AS keyword, and then the SELECT statement that defines the view's content.",
        "hint": "The syntax follows a similar pattern to creating other database objects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which of the following is NOT a common use case for views?",
        "options": [
        "Simplifying complex queries",
        "Enforcing physical storage organization",
        "Restricting access to specific columns",
        "Presenting aggregated data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Enforcing physical storage organization",
        "difficulty": "easy",
        "explanation": "Views are virtual tables and do not affect the physical storage of data. They cannot be used to enforce how data is physically organized in the database. Views are commonly used for simplifying complex queries, restricting access to data, and presenting aggregated data.",
        "hint": "Consider whether views influence the actual storage of data on disk."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What happens when you query a view?",
        "options": [
        "The database returns the cached results from when the view was created",
        "The database executes the stored query on the underlying tables",
        "The database copies the view data into a temporary table first",
        "The database merges the view definition with the most recent backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The database executes the stored query on the underlying tables",
        "difficulty": "easy",
        "explanation": "When you query a view, the database executes the stored SELECT statement against the underlying tables. This means that a view always shows the current data from the source tables at the time the view is queried.",
        "hint": "Consider how views maintain data currency and consistency with source tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is a materialized view?",
        "options": [
        "A view that can only be accessed by certain users",
        "A view that stores its data physically rather than executing its query each time",
        "A view that can be used for INSERT, UPDATE, and DELETE operations",
        "A view that displays data visualization in graphical format"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A view that stores its data physically rather than executing its query each time",
        "difficulty": "medium",
        "explanation": "A materialized view is a database object that contains the results of a query physically stored as a table. Unlike standard views that execute their defining query each time they're accessed, materialized views store data for faster retrieval, though they need to be refreshed to reflect changes in source tables.",
        "hint": "The term 'materialized' refers to making something physical or concrete."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which command is used to remove a view from the database?",
        "options": [
        "REMOVE VIEW view_name;",
        "DELETE VIEW view_name;",
        "DROP VIEW view_name;",
        "ERASE VIEW view_name;"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "DROP VIEW view_name;",
        "difficulty": "easy",
        "explanation": "The DROP VIEW command is used to remove a view from the database. This removes the view definition but does not affect the underlying tables that the view references.",
        "hint": "This follows the same pattern as removing other database objects like tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What happens to views when an underlying table is dropped?",
        "options": [
        "Views are automatically updated to remove references to the dropped table",
        "Views remain unchanged but return errors when queried",
        "Views are automatically dropped along with the table",
        "The database prevents the table from being dropped if views depend on it"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Views remain unchanged but return errors when queried",
        "difficulty": "medium",
        "explanation": "When an underlying table referenced by a view is dropped, the view definition typically remains in the database, but it becomes invalid. When you try to query the view, you'll get an error because it references a table that no longer exists.",
        "hint": "Consider the dependency relationship between database objects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What does WITH CHECK OPTION do when used with a view?",
        "options": [
        "It verifies the view definition for errors before creating it",
        "It checks the source data for NULL values when creating the view",
        "It prevents inserts or updates through the view that would make rows invisible to the view",
        "It ensures the view only displays records that have been verified by an administrator"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It prevents inserts or updates through the view that would make rows invisible to the view",
        "difficulty": "medium",
        "explanation": "WITH CHECK OPTION ensures that any data inserted or updated through the view must satisfy the conditions in the view's WHERE clause. This prevents operations that would create rows that wouldn't be visible through the view, maintaining data integrity and logical consistency.",
        "hint": "Think about what restrictions you might want when modifying data through a filtered view."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which of the following is a limitation of standard views in most SQL databases?",
        "options": [
        "Views cannot include JOINs",
        "Views cannot include aggregate functions",
        "Views cannot have indexes directly built on them",
        "Views cannot reference more than one table"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Views cannot have indexes directly built on them",
        "difficulty": "medium",
        "explanation": "In most SQL databases, you cannot create indexes directly on standard views because they don't physically store data. Indexes can only be created on the underlying tables. However, some databases allow indexes on materialized views since they do store physical data.",
        "hint": "Consider what database feature requires physical storage to function effectively."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is an updatable view?",
        "options": [
        "A view whose definition can be modified after creation",
        "A view that automatically updates when source data changes",
        "A view that allows INSERT, UPDATE, and DELETE operations through it",
        "A view that refreshes its data at regular intervals"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A view that allows INSERT, UPDATE, and DELETE operations through it",
        "difficulty": "medium",
        "explanation": "An updatable view is one through which you can perform INSERT, UPDATE, and DELETE operations that affect the underlying base tables. Not all views are updatable; the ability to update depends on the complexity of the view definition and database system capabilities.",
        "hint": "The name refers to the ability to make changes to data through the view."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which of these operations typically makes a view non-updatable?",
        "options": [
        "Using a JOIN in the view definition",
        "Including a WHERE clause in the view",
        "Selecting fewer columns than exist in the base table",
        "Renaming columns in the view's SELECT statement"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using a JOIN in the view definition",
        "difficulty": "medium",
        "explanation": "Views that include JOINs between multiple tables are typically non-updatable in most database systems because the database engine cannot always determine which table should receive the modifications. Simple views that reference only one table are more likely to be updatable.",
        "hint": "Think about which feature makes it ambiguous where data changes should be applied."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is the difference between CASCADE and RESTRICT in DROP VIEW statements?",
        "options": [
        "CASCADE also drops views that depend on the view being dropped; RESTRICT prevents dropping if dependencies exist",
        "CASCADE drops the view immediately; RESTRICT schedules the drop for a later time",
        "CASCADE notifies users of the drop; RESTRICT drops silently",
        "CASCADE keeps a backup of the view; RESTRICT removes it permanently"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "CASCADE also drops views that depend on the view being dropped; RESTRICT prevents dropping if dependencies exist",
        "difficulty": "hard",
        "explanation": "When using DROP VIEW with the CASCADE option, the system will drop not only the specified view but also any other views that depend on it. The RESTRICT option (often the default) prevents dropping the view if other objects depend on it, raising an error instead.",
        "hint": "These terms describe how to handle dependent objects when removing database objects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "How can you modify a view's definition?",
        "options": [
        "ALTER VIEW view_name(...);",
        "CREATE OR REPLACE VIEW view_name(...);",
        "MODIFY VIEW view_name(...);",
        "UPDATE VIEW view_name SET(...);"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "CREATE OR REPLACE VIEW view_name(...);",
        "difficulty": "medium",
        "explanation": "The CREATE OR REPLACE VIEW statement is the standard way to modify an existing view's definition. It completely replaces the previous definition with the new one while preserving any permissions and dependencies.",
        "hint": "The SQL syntax implies creating a new definition that overwrites the existing one."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is a recursive view?",
        "options": [
        "A view that references itself in its definition",
        "A view that automatically updates when queried",
        "A view that can create additional views",
        "A view that is recreated each time the database restarts"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A view that references itself in its definition",
        "difficulty": "hard",
        "explanation": "A recursive view is a view that references itself in its definition. This is typically implemented using Common Table Expressions (CTEs) with the RECURSIVE keyword. Recursive views are useful for handling hierarchical or graph-structured data.",
        "hint": "The term 'recursive' in programming generally refers to something that references itself."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which of the following is NOT a benefit of using views?",
        "options": [
        "Simplifying complex queries",
        "Providing an additional security layer",
        "Improving query performance automatically",
        "Presenting data in a more meaningful format"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Improving query performance automatically",
        "difficulty": "easy",
        "explanation": "Standard views do not automatically improve query performance because the view's query is executed each time the view is accessed. In fact, complex views might be less efficient than direct table queries. Materialized views, however, can improve performance for specific use cases by storing results.",
        "hint": "Consider whether a view changes how the database processes the underlying query."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is a partitioned view?",
        "options": [
        "A view that divides its data into multiple segments based on a column value",
        "A view that shows only a portion of the rows in the underlying table",
        "A view that combines data from horizontally partitioned tables across servers",
        "A view that automatically partitions data for storage optimization"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A view that combines data from horizontally partitioned tables across servers",
        "difficulty": "hard",
        "explanation": "A partitioned view joins horizontally partitioned data from a set of member tables across one or more servers, making the data appear as if it comes from one table. This technique is used for distributed databases and to improve query performance on very large datasets.",
        "hint": "This type of view addresses how to work with data that has been split across multiple locations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is the WITH SCHEMABINDING option used for in view creation?",
        "options": [
        "It ensures the view is accessible from all schemas in the database",
        "It binds the view to a specific database schema for organization",
        "It prevents changes to underlying tables that would affect the view's definition",
        "It creates a visual schema diagram of the view's structure"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "It prevents changes to underlying tables that would affect the view's definition",
        "difficulty": "hard",
        "explanation": "The WITH SCHEMABINDING option binds the view to the schema of the underlying objects. This prevents changes to the referenced tables and columns that would affect the view definition, such as dropping columns or tables used by the view. It creates a dependency that must be respected when modifying the database schema.",
        "hint": "This feature protects the view from becoming invalid due to structural changes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What happens if you query a materialized view that is not up to date with its source tables?",
        "options": [
        "The query returns an error indicating the view is stale",
        "The query automatically refreshes the view before returning results",
        "The query returns the old data stored in the materialized view",
        "The query switches to querying the source tables directly"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The query returns the old data stored in the materialized view",
        "difficulty": "medium",
        "explanation": "When querying a materialized view that hasn't been refreshed since changes were made to source tables, the query returns the data that was stored in the materialized view when it was last refreshed or created. This may not reflect the current state of the source tables.",
        "hint": "Consider the tradeoff between performance and data currency."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "How do you refresh a materialized view?",
        "options": [
        "CREATE REFRESH MATERIALIZED VIEW view_name;",
        "UPDATE MATERIALIZED VIEW view_name;",
        "ALTER VIEW view_name REFRESH;",
        "REFRESH MATERIALIZED VIEW view_name;"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "REFRESH MATERIALIZED VIEW view_name;",
        "difficulty": "medium",
        "explanation": "The REFRESH MATERIALIZED VIEW command is used to update a materialized view with current data from the source tables. Some database systems offer additional options for complete or incremental refreshes.",
        "hint": "Look for the most direct way to express the action of updating the stored data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is the main difference between a view and a temporary table?",
        "options": [
        "A view is stored in the database permanently; a temporary table exists only for the session",
        "A view can join multiple tables; a temporary table cannot",
        "A view is a virtual table based on a query; a temporary table contains physical data",
        "A view can have indexes; a temporary table cannot"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A view is a virtual table based on a query; a temporary table contains physical data",
        "difficulty": "medium",
        "explanation": "The fundamental difference is that a view is a virtual table that runs its defining query each time it's accessed, while a temporary table physically stores data. Views don't store their own data but provide a window to the underlying tables, whereas temporary tables contain actual data rows.",
        "hint": "Consider the storage characteristics of each database object."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which view option is used to prevent changes to the view definition?",
        "options": [
        "WITH IMMUTABLE",
        "WITH READONLY DEFINITION",
        "WITH LOCK SCHEMA",
        "WITH ENCRYPTION"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "WITH ENCRYPTION",
        "difficulty": "hard",
        "explanation": "The WITH ENCRYPTION option in some database systems (like SQL Server) obfuscates the text of the CREATE VIEW statement in system tables, making it difficult to see or change the view definition. While its primary purpose is security, it effectively prevents casual modification of the view definition.",
        "hint": "This option is primarily about security but also affects how the definition can be accessed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "When should you use a view instead of a stored procedure?",
        "options": [
        "When you need to pass parameters to customize the results",
        "When you need to perform complex calculations on the data",
        "When you want to represent data in a read-only format that looks like a table",
        "When you need to execute multiple SQL statements in sequence"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "When you want to represent data in a read-only format that looks like a table",
        "difficulty": "medium",
        "explanation": "Views are best used when you want to present data in a table-like format, especially for read operations. They're ideal for simplifying complex data structures for users who need a specific perspective on the data. Stored procedures are better for operations requiring parameters, multiple SQL statements, or complex processing.",
        "hint": "Consider which option provides the most table-like interface for queries."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is an indexed view?",
        "options": [
        "A view that references indexed columns in the base tables",
        "A special type of view where the database maintains indexes on the view itself",
        "A view that creates indexes automatically on the underlying tables",
        "A view that can only be accessed using an index number instead of a name"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A special type of view where the database maintains indexes on the view itself",
        "difficulty": "hard",
        "explanation": "An indexed view (sometimes called a materialized view) is a view where the database system maintains a physical index on the view itself. This can significantly improve query performance but requires additional storage space and maintenance overhead when the underlying data changes.",
        "hint": "This specialized view type offers performance benefits through a physical optimization."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which type of view is most likely to improve query performance?",
        "options": [
        "Simple view with WHERE clauses",
        "View joining multiple large tables",
        "Materialized view with indexes",
        "View using complex aggregate functions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Materialized view with indexes",
        "difficulty": "medium",
        "explanation": "A materialized view with indexes is most likely to improve query performance because it physically stores the pre-computed results and allows for indexed access to this data. This eliminates the need to join tables or calculate aggregates at query time, leading to faster data retrieval.",
        "hint": "Consider which option combines pre-computed results with fast data access structures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What happens when you create a view without specifying column names?",
        "options": [
        "The view uses the column names from the underlying tables",
        "The view uses default column names like Column1, Column2, etc.",
        "The view uses the expressions or aliases defined in the SELECT statement",
        "The database raises an error requiring column names to be specified"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The view uses the expressions or aliases defined in the SELECT statement",
        "difficulty": "easy",
        "explanation": "When creating a view without explicitly specifying column names, the view will use the column names, aliases, or expressions exactly as they appear in the SELECT statement. If the SELECT uses a column directly, the view uses that column name; if it uses an expression or alias, the view uses that instead.",
        "hint": "Think about how the SELECT statement's output columns are named when not explicitly defined."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which of the following is true regarding permissions on views?",
        "options": [
        "Users must always have permissions on underlying tables to query a view",
        "View permissions are automatically the same as the permissions on underlying tables",
        "Users can be granted permissions on a view without having direct permissions on underlying tables",
        "Views cannot have their own permission settings"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Users can be granted permissions on a view without having direct permissions on underlying tables",
        "difficulty": "medium",
        "explanation": "One of the security benefits of views is that users can be granted permissions to access a view without having direct permissions on the underlying tables. This allows administrators to control precisely what data users can see without giving them access to the complete tables.",
        "hint": "Consider how views can be used as a security layer in database access control."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What happens if a column in the base table is renamed after a view is created?",
        "options": [
        "The view is automatically updated to use the new column name",
        "The view becomes invalid and must be recreated",
        "The view continues to work because it references the column position, not the name",
        "The view keeps using the old column name but displays the current data"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "The view keeps using the old column name but displays the current data",
        "difficulty": "hard",
        "explanation": "When a column in a base table is renamed, the view typically continues to function and displays the current data using the column name that was in effect when the view was created. The view definition refers to the physical column, not just its name, so the relationship is maintained despite the rename.",
        "hint": "Consider how the database system internally tracks columns beyond just their names."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is a view's owner in database security terms?",
        "options": [
        "The user who created the view",
        "The user who last modified the view",
        "The owner of the underlying tables",
        "The database administrator"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The user who created the view",
        "difficulty": "easy",
        "explanation": "The owner of a view is typically the user who created it. The owner has full privileges on the view and can grant permissions to other users. Ownership is important for security and administration purposes.",
        "hint": "Database object ownership is typically established at creation time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is the difference between a regular view and a lateral view?",
        "options": [
        "Regular views can only select from one table; lateral views can join multiple tables",
        "Regular views are static; lateral views update automatically",
        "Regular views can't reference variables; lateral views can reference variables from previous SELECT items",
        "Regular views are permanent; lateral views are temporary"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Regular views can't reference variables; lateral views can reference variables from previous SELECT items",
        "difficulty": "hard",
        "explanation": "A lateral view (or LATERAL join) is a feature that allows a table expression in a FROM clause to reference columns provided by preceding FROM items. This is different from regular views, which cannot reference variables from other items in the same query level.",
        "hint": "This feature allows for dependencies between items in a query that would otherwise be impossible."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which of the following is NOT required when creating a materialized view?",
        "options": [
        "A SELECT statement defining the view data",
        "A schedule for automatic refreshes",
        "A name for the materialized view",
        "Base tables that contain the source data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A schedule for automatic refreshes",
        "difficulty": "easy",
        "explanation": "A schedule for automatic refreshes is not required when creating a materialized view. While some database systems offer scheduling capabilities, it's typically an optional feature. The basic requirements are a name, a defining SELECT statement, and source tables.",
        "hint": "Which item relates to maintenance rather than definition?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "Which statement correctly describes the relationship between views and database normalization?",
        "options": [
        "Views violate normalization principles and should be avoided",
        "Views can present denormalized data while keeping the base tables normalized",
        "Views automatically normalize the data they present",
        "Views are only useful when working with already denormalized data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Views can present denormalized data while keeping the base tables normalized",
        "difficulty": "medium",
        "explanation": "Views allow you to present data in a denormalized format that may be more convenient for certain queries or user needs, while maintaining the benefits of a normalized database structure in the actual tables. This provides the best of both worlds: data integrity from normalization and query simplicity from denormalization.",
        "hint": "Consider how views can reconcile conflicting database design goals."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Views",
        "questionText": "What is the INSTEAD OF trigger used for with views?",
        "options": [
        "To execute code instead of querying the view",
        "To override the default view behavior when data is modified through the view",
        "To prevent the view from being queried under certain conditions",
        "To replace the view definition at runtime"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To override the default view behavior when data is modified through the view",
        "difficulty": "hard",
        "explanation": "An INSTEAD OF trigger defines custom logic that executes when DML operations (INSERT, UPDATE, DELETE) are performed on a view. This allows even complex views that would normally be non-updatable to support data modifications by defining exactly how these operations should affect the underlying tables.",
        "hint": "This feature provides control over what happens when someone tries to modify data through a view."
    },

    
    // Stored Procedures & Functions
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the correct syntax to create a stored procedure in SQL?",
        "options": [
        "CREATE PROCEDURE procedure_name AS BEGIN SQL statements END;",
        "CREATE PROCEDURE procedure_name() BEGIN SQL statements END;",
        "CREATE OR REPLACE PROCEDURE procedure_name AS SQL statements;",
        "CREATE PROC procedure_name{ SQL statements };"],
        "correctOptionIndex": 0,
        "correctOptionText": "CREATE PROCEDURE procedure_name AS BEGIN SQL statements END;",
        "difficulty": "easy",
        "explanation": "The standard syntax for creating a stored procedure uses CREATE PROCEDURE followed by the procedure name, the AS keyword, and then the procedure body enclosed in BEGIN and END blocks.",
        "hint": "Look for the syntax that includes both the BEGIN and END keywords to define the procedure body."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the main difference between a stored procedure and a function in SQL?",
        "options": [
        "Stored procedures can modify data while functions cannot",
        "Functions must return a value while stored procedures may not return anything",
        "Stored procedures can be called from the application layer, functions cannot",
        "Functions can accept parameters but stored procedures cannot"],
        "correctOptionIndex": 1,
        "correctOptionText": "Functions must return a value while stored procedures may not return anything",
        "difficulty": "easy",
        "explanation": "The key difference is that functions are required to return a value, while stored procedures don't have to return anything. Stored procedures can return values using OUT parameters but are not required to.",
        "hint": "Think about what each SQL object is obligated to do regarding return values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "How do you execute a stored procedure named 'GetCustomerOrders'?",
        "options": [
        "EXECUTE GetCustomerOrders;",
        "CALL GetCustomerOrders();",
        "RUN PROCEDURE GetCustomerOrders;",
        "EXEC GetCustomerOrders;"],
        "correctOptionIndex": 1,
        "correctOptionText": "CALL GetCustomerOrders();",
        "difficulty": "easy",
        "explanation": "The CALL statement is the standard way to execute a stored procedure in SQL, followed by the procedure name and parentheses (which can contain arguments if needed).",
        "hint": "Which keyword is most commonly used in SQL standards to invoke a stored procedure?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "Which parameter mode allows a procedure to receive a value AND modify it?",
        "options": [
        "IN",
        "OUT",
        "INOUT",
        "VAR"],
        "correctOptionIndex": 2,
        "correctOptionText": "INOUT",
        "difficulty": "medium",
        "explanation": "INOUT parameters can both receive initial values from the caller and return modified values back to the caller. They combine the functionality of IN and OUT parameters.",
        "hint": "Look for the option that combines input and output capabilities."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "In MySQL, what is the default delimiter used to separate SQL statements?",
        "options": [
        ";",
        "/",
        "//",
        "GO"],
        "correctOptionIndex": 0,
        "correctOptionText": ";",
        "difficulty": "easy",
        "explanation": "The semicolon (;) is the default delimiter in MySQL and most other SQL databases, used to terminate SQL statements.",
        "hint": "Think about what character typically ends a SQL statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "Why might you need to change the delimiter when creating stored procedures?",
        "options": [
        "To make the code more readable",
        "Because stored procedures don't use semicolons",
        "To allow semicolons within the procedure body without ending the CREATE PROCEDURE statement",
        "It's required by the SQL standard"],
        "correctOptionIndex": 2,
        "correctOptionText": "To allow semicolons within the procedure body without ending the CREATE PROCEDURE statement",
        "difficulty": "medium",
        "explanation": "When creating stored procedures, you need semicolons to terminate statements within the procedure body. Changing the delimiter allows you to use semicolons inside the procedure without prematurely ending the CREATE PROCEDURE statement itself.",
        "hint": "Consider what happens when you have semicolons both inside the procedure and at the end of the CREATE statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the correct syntax to declare a variable in a SQL Server stored procedure?",
        "options": [
        "VAR @VariableName datatype;",
        "DECLARE @VariableName datatype;",
        "SET @VariableName datatype;",
        "CREATE @VariableName AS datatype;"],
        "correctOptionIndex": 1,
        "correctOptionText": "DECLARE @VariableName datatype;",
        "difficulty": "easy",
        "explanation": "In SQL Server, variables in stored procedures are declared using the DECLARE keyword, followed by the variable name (prefixed with @) and its data type.",
        "hint": "Look for the keyword that establishes a new variable in SQL Server T-SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is NOT a valid way to return data from a stored procedure?",
        "options": [
        "Using SELECT statements within the procedure",
        "Using OUT parameters",
        "Using a RETURN statement with a result set",
        "Using a RETURN statement with an integer status code"],
        "correctOptionIndex": 2,
        "correctOptionText": "Using a RETURN statement with a result set",
        "difficulty": "medium",
        "explanation": "The RETURN statement in stored procedures can only return a single integer value, typically used as a status code. It cannot return result sets or complex data. Result sets are returned using SELECT statements, and complex data can be returned via OUT parameters.",
        "hint": "Consider the limitations of what the RETURN statement can provide in a stored procedure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "Which of the following is a characteristic of a deterministic function?",
        "options": [
        "It always returns different results even with the same inputs",
        "It always returns the same result given the same inputs",
        "It can modify data in database tables",
        "It can call stored procedures"],
        "correctOptionIndex": 1,
        "correctOptionText": "It always returns the same result given the same inputs",
        "difficulty": "medium",
        "explanation": "A deterministic function always returns the same output when given the same input values, regardless of when or how often it's called. This predictability is a key characteristic that distinguishes deterministic from non-deterministic functions.",
        "hint": "Think about what the word 'deterministic' means in terms of consistency and predictability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "Which statement is used to handle errors in SQL Server stored procedures?",
        "options": [
        "EXCEPTION WHEN",
        "ON ERROR",
        "TRY...CATCH",
        "HANDLE ERROR"],
        "correctOptionIndex": 2,
        "correctOptionText": "TRY...CATCH",
        "difficulty": "medium",
        "explanation": "SQL Server uses the TRY...CATCH construct for error handling in stored procedures. Code that might cause errors is placed in the TRY block, and error handling code goes in the CATCH block.",
        "hint": "This error handling method uses a structure similar to what many programming languages use."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What SQL Server function can be used in a CATCH block to get the error message text?",
        "options": [
        "ERROR_TEXT()",
        "ERROR_MESSAGE()",
        "GET_ERROR_MESSAGE()",
        "LAST_ERROR()"],
        "correctOptionIndex": 1,
        "correctOptionText": "ERROR_MESSAGE()",
        "difficulty": "medium",
        "explanation": "ERROR_MESSAGE() is a system function in SQL Server that returns the complete text of the error message that caused the CATCH block to execute. It's commonly used in error handling to log or display the error details.",
        "hint": "Look for the function name that most clearly describes retrieving an error message."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "How do you drop a stored procedure named 'UpdateCustomer'?",
        "options": [
        "REMOVE PROCEDURE UpdateCustomer;",
        "DELETE PROCEDURE UpdateCustomer;",
        "DROP PROCEDURE UpdateCustomer;",
        "ERASE PROC UpdateCustomer;"],
        "correctOptionIndex": 2,
        "correctOptionText": "DROP PROCEDURE UpdateCustomer;",
        "difficulty": "easy",
        "explanation": "The DROP PROCEDURE statement is used to remove a stored procedure from the database. This completely removes the procedure definition from the system tables.",
        "hint": "Which SQL keyword is commonly used to remove database objects completely?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the purpose of the WITH ENCRYPTION option when creating a stored procedure?",
        "options": [
        "To encrypt the data returned by the procedure",
        "To require a password when executing the procedure",
        "To encrypt the procedure's source code in system tables",
        "To ensure the procedure executes with encrypted connections only"],
        "correctOptionIndex": 2,
        "correctOptionText": "To encrypt the procedure's source code in system tables",
        "difficulty": "medium",
        "explanation": "The WITH ENCRYPTION option obscures the text of the CREATE PROCEDURE statement in the system tables, making it difficult to view the procedure's source code. This helps protect intellectual property in the procedure logic.",
        "hint": "Think about what's being protected - the data, the execution, or the code itself."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the maximum number of parameters a stored procedure can have in SQL Server?",
        "options": [
        "100",
        "1024",
        "2100",
        "There is no fixed limit"],
        "correctOptionIndex": 3,
        "correctOptionText": "There is no fixed limit",
        "difficulty": "hard",
        "explanation": "SQL Server doesn't impose a specific limit on the number of parameters a stored procedure can have. However, practical limitations exist due to the 2100 parameter limit in sp_executesql and the maximum size of a query batch.",
        "hint": "Consider whether SQL Server documentation specifies an explicit cap on procedure parameters."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is a table-valued function?",
        "options": [
        "A function that accepts a table as input",
        "A function that returns a table as output",
        "A function that modifies table data",
        "A function stored in a table"],
        "correctOptionIndex": 1,
        "correctOptionText": "A function that returns a table as output",
        "difficulty": "medium",
        "explanation": "A table-valued function is a user-defined function that returns data of table type. Unlike scalar functions which return a single value, table-valued functions return entire result sets that can be used like tables in queries.",
        "hint": "Consider what makes this type of function different from a scalar function in terms of its output."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "Which of the following is NOT a valid SQL Server function type?",
        "options": [
        "Scalar function",
        "Inline table-valued function",
        "Multi-statement table-valued function",
        "Procedural function"],
        "correctOptionIndex": 3,
        "correctOptionText": "Procedural function",
        "difficulty": "medium",
        "explanation": "SQL Server supports three types of user-defined functions: scalar functions (return a single value), inline table-valued functions (return a table based on a single SELECT), and multi-statement table-valued functions (can have multiple statements and return a table). 'Procedural function' is not a recognized function type.",
        "hint": "Look for the option that doesn't match the standard classification of SQL Server function types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "In PostgreSQL, what keyword is used to return a value from a function?",
        "options": [
        "RETURN",
        "OUTPUT",
        "RESULT",
        "YIELD"],
        "correctOptionIndex": 0,
        "correctOptionText": "RETURN",
        "difficulty": "easy",
        "explanation": "In PostgreSQL functions, the RETURN keyword is used to specify the value to be returned from the function. This applies to both scalar functions and table-returning functions.",
        "hint": "This is the same keyword used in many programming languages to send a value back from a function."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "Which MySQL statement would you use to view the source code of a stored procedure?",
        "options": [
        "SHOW PROCEDURE CODE procedure_name;",
        "SELECT ROUTINE_DEFINITION FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_NAME = 'procedure_name';",
        "DESCRIBE PROCEDURE procedure_name;",
        "SHOW CREATE PROCEDURE procedure_name;"],
        "correctOptionIndex": 3,
        "correctOptionText": "SHOW CREATE PROCEDURE procedure_name;",
        "difficulty": "medium",
        "explanation": "In MySQL, SHOW CREATE PROCEDURE returns the exact SQL statement needed to recreate a stored procedure, including its complete definition and parameters. This is the simplest way to view a procedure's source code.",
        "hint": "Look for the command that follows the pattern of other MySQL SHOW statements for viewing object definitions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the primary purpose of the EXEC statement in SQL Server?",
        "options": [
        "To execute SQL statements dynamically",
        "To call stored procedures",
        "To run external programs",
        "To execute transactions"],
        "correctOptionIndex": 1,
        "correctOptionText": "To call stored procedures",
        "difficulty": "easy",
        "explanation": "The primary purpose of the EXEC (or EXECUTE) statement in SQL Server is to call stored procedures. It can also be used for executing dynamic SQL, but its most common use is invoking procedures.",
        "hint": "Think about the most frequent use case for this command in everyday SQL Server programming."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What does SCHEMABINDING do when applied to a function?",
        "options": [
        "It ensures the function can only be accessed by its schema owner",
        "It prevents the function from accessing objects in other schemas",
        "It prevents modifications to referenced objects that would affect the function",
        "It binds the function to run with schema-level permissions"],
        "correctOptionIndex": 2,
        "correctOptionText": "It prevents modifications to referenced objects that would affect the function",
        "difficulty": "hard",
        "explanation": "WITH SCHEMABINDING binds the function to the schema of any objects it references. When a function is schema-bound, tables and views referenced by the function cannot be modified in ways that would affect the function (such as dropping columns the function uses), providing greater stability.",
        "hint": "Think about how this option relates to dependencies between database objects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "In Oracle PL/SQL, which of the following is NOT a valid procedure parameter mode?",
        "options": [
        "IN",
        "OUT",
        "INOUT",
        "RETURN"],
        "correctOptionIndex": 3,
        "correctOptionText": "RETURN",
        "difficulty": "medium",
        "explanation": "In Oracle PL/SQL, there are three valid parameter modes: IN (for input values), OUT (for output values), and INOUT (for both input and output). RETURN is not a parameter mode but a statement used in functions to return values.",
        "hint": "Consider which option doesn't describe how parameters receive or provide data, but rather relates to function output."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the default parameter mode in most SQL database systems?",
        "options": [
        "IN",
        "OUT",
        "INOUT",
        "There is no default"],
        "correctOptionIndex": 0,
        "correctOptionText": "IN",
        "difficulty": "medium",
        "explanation": "In most SQL database systems, including SQL Server, MySQL, and Oracle, the default parameter mode is IN, meaning parameters are used for input only and cannot return values unless explicitly defined as OUT or INOUT parameters.",
        "hint": "Think about what would be the most common need for parameters in procedures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the difference between an inline table-valued function and a multi-statement table-valued function?",
        "options": [
        "Inline functions can only return scalar values, multi-statement can return tables",
        "Inline functions return a table based on a single SELECT statement, multi-statement can have multiple statements and use a declared table variable",
        "Inline functions can have parameters, multi-statement functions cannot",
        "Inline functions are faster but limited to 10 columns, multi-statement have no column limit"],
        "correctOptionIndex": 1,
        "correctOptionText": "Inline functions return a table based on a single SELECT statement, multi-statement can have multiple statements and use a declared table variable",
        "difficulty": "hard",
        "explanation": "The key difference is in structure and complexity. Inline table-valued functions contain a single SELECT statement that defines the return table's structure and data. Multi-statement functions can contain multiple T-SQL statements, must explicitly declare a table variable structure, and use RETURN to return the populated table.",
        "hint": "Consider the limitations on statement complexity and how the return structure is defined in each function type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "Which of the following operations is generally NOT allowed in a user-defined function?",
        "options": [
        "SELECT statements that query tables",
        "INSERT statements that modify tables",
        "CASE statements for logical branching",
        "Calling other user-defined functions"],
        "correctOptionIndex": 1,
        "correctOptionText": "INSERT statements that modify tables",
        "difficulty": "medium",
        "explanation": "User-defined functions typically cannot perform data modification operations like INSERT, UPDATE, DELETE, or MERGE. They are limited to read-only operations on tables. This restriction helps ensure that functions behave predictably and can be used safely in queries.",
        "hint": "Think about which operation would have side effects that could affect database state."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What does the RETURNS NULL ON NULL INPUT clause do in SQL Server functions?",
        "options": [
        "Ensures NULL is always returned regardless of input",
        "Converts NULL inputs to empty strings",
        "Returns NULL immediately if any input parameter is NULL",
        "Prohibits NULL values from being used as input parameters"],
        "correctOptionIndex": 2,
        "correctOptionText": "Returns NULL immediately if any input parameter is NULL",
        "difficulty": "hard",
        "explanation": "RETURNS NULL ON NULL INPUT (also known as STRICT) is an optimization flag that tells SQL Server to bypass function execution and return NULL immediately if any input parameter is NULL. This can improve performance by avoiding unnecessary execution when the result would be NULL anyway.",
        "hint": "Think about how this option might help optimize function execution in certain scenarios."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is the correct syntax to alter an existing stored procedure in SQL Server?",
        "options": [
        "MODIFY PROCEDURE procedure_name...",
        "ALTER PROCEDURE procedure_name...",
        "CHANGE PROCEDURE procedure_name...",
        "UPDATE PROCEDURE procedure_name..."],
        "correctOptionIndex": 1,
        "correctOptionText": "ALTER PROCEDURE procedure_name...",
        "difficulty": "easy",
        "explanation": "ALTER PROCEDURE is the correct statement to modify an existing stored procedure in SQL Server. It allows you to change the procedure's definition without dropping and recreating it, which helps preserve permissions and dependencies.",
        "hint": "This follows the same pattern as other SQL statements for modifying existing database objects."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What happens when you execute a stored procedure that doesn't exist?",
        "options": [
        "The database creates a new empty procedure automatically",
        "The query fails with a syntax error",
        "The query fails with an object not found error",
        "The database searches for a similarly named procedure to execute instead"],
        "correctOptionIndex": 2,
        "correctOptionText": "The query fails with an object not found error",
        "difficulty": "easy",
        "explanation": "When you try to execute a non-existent stored procedure, the database engine returns an error indicating that the object was not found or does not exist. This is typically something like 'Cannot find the stored procedure' or 'Object not found' depending on the database system.",
        "hint": "Consider what kind of error would logically occur when requesting something that doesn't exist in the database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is NOT a potential advantage of using stored procedures?",
        "options": [
        "Improved security through granular permissions",
        "Better performance via execution plan caching",
        "Automatic index optimization",
        "Reduced network traffic"],
        "correctOptionIndex": 2,
        "correctOptionText": "Automatic index optimization",
        "difficulty": "medium",
        "explanation": "While stored procedures offer many benefits like better security, performance improvements through cached execution plans, and reduced network traffic by sending only procedure calls instead of entire queries, they do not automatically optimize indexes. Index creation and optimization remain separate database administration tasks.",
        "hint": "Look for the option that suggests stored procedures automatically improve something they don't directly influence."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "Which system stored procedure in SQL Server can be used to list all user-defined stored procedures in a database?",
        "options": [
        "sp_helpdb",
        "sp_help",
        "sp_stored_procedures",
        "sp_helpprocedure"],
        "correctOptionIndex": 1,
        "correctOptionText": "sp_help",
        "difficulty": "medium",
        "explanation": "While sp_help can show information about all objects including procedures, the most direct way to list all user-defined stored procedures is to query the system catalog views: SELECT * FROM sys.procedures or SELECT * FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_TYPE = 'PROCEDURE'.",
        "hint": "Which system procedure provides general information about database objects of different types?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "What is recursion in the context of stored procedures and functions?",
        "options": [
        "The ability to process XML data",
        "A procedure or function calling itself",
        "The ability to call procedures or functions from triggers",
        "A special kind of loop structure"],
        "correctOptionIndex": 1,
        "correctOptionText": "A procedure or function calling itself",
        "difficulty": "hard",
        "explanation": "Recursion occurs when a stored procedure or function calls itself. This technique is useful for processing hierarchical data, like organization charts or file systems, by solving a problem in terms of smaller instances of the same problem. Many database systems limit recursion depth to prevent infinite loops.",
        "hint": "Think about the computer science concept where a routine references itself."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Stored Procedures & Functions",
        "questionText": "In SQL Server, what's the maximum nesting level for stored procedure calls by default?",
        "options": [
        "16",
        "32",
        "64",
        "128"],
        "correctOptionIndex": 2,
        "correctOptionText": "64",
        "difficulty": "hard",
        "explanation": "SQL Server has a default maximum nesting level of 32 for stored procedure calls. This means one procedure can call another, which calls another, and so on up to 32 levels deep. This limit helps prevent infinite recursion and stack overflow errors.",
        "difficulty": "hard",
        "explanation": "The default maximum nesting level for stored procedure calls in SQL Server is 32 levels, but recursive triggers are limited to 32 levels of nesting. The limit can be viewed using 'SELECT @@MAX_RECURSIVE_TRIGGERS' command.",
        "hint": "This is a specific configuration value in SQL Server that prevents excessive nesting."
    },

    // Triggers & Events
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is a database trigger?",
        "options": [
        "A scheduled task that runs periodically",
        "A stored procedure that must be manually executed",
        "A special type of stored procedure that automatically executes in response to certain events",
        "A constraint that validates data before insertion"],
        "correctOptionIndex": 2,
        "correctOptionText": "A special type of stored procedure that automatically executes in response to certain events",
        "difficulty": "easy",
        "explanation": "A database trigger is a special type of stored procedure that automatically executes when a specified database event occurs, such as an INSERT, UPDATE, or DELETE operation on a table. Unlike regular stored procedures, triggers are event-driven and don't need to be explicitly called.",
        "hint": "Think about what makes triggers different from regular stored procedures in terms of execution."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "Which of the following is NOT a common type of SQL trigger?",
        "options": [
        "BEFORE trigger",
        "AFTER trigger",
        "INSTEAD OF trigger",
        "DURING trigger"],
        "correctOptionIndex": 3,
        "correctOptionText": "DURING trigger",
        "difficulty": "easy",
        "explanation": "There are three main types of triggers in SQL databases: BEFORE triggers (execute before the event), AFTER triggers (execute after the event), and INSTEAD OF triggers (replace the triggering action, often used with views). 'DURING' triggers do not exist as a standard trigger type.",
        "hint": "Consider which option doesn't align with the standard timing classifications for SQL triggers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "In SQL Server, which virtual tables can be used to access the modified data in a trigger?",
        "options": [
        "OLD and NEW",
        "inserted and deleted",
        "BEFORE and AFTER",
        "modified and original"],
        "correctOptionIndex": 1,
        "correctOptionText": "inserted and deleted",
        "difficulty": "medium",
        "explanation": "SQL Server uses two special tables named 'inserted' and 'deleted' to make modified data available within triggers. The 'inserted' table contains new rows for INSERT and UPDATE operations, while the 'deleted' table contains old rows for DELETE and UPDATE operations.",
        "hint": "SQL Server uses table names that describe what happened to the rows."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the correct syntax to create a trigger in SQL Server?",
        "options": [
        "CREATE TRIGGER trigger_name ON table_name AFTER INSERT AS BEGIN...END;",
        "CREATE TRIGGER trigger_name AFTER INSERT ON table_name BEGIN...END;",
        "CREATE TRIGGER trigger_name FOR INSERT ON table_name AS BEGIN...END;",
        "CREATE TRIGGER ON table_name FOR INSERT AS trigger_name BEGIN...END;"],
        "correctOptionIndex": 0,
        "correctOptionText": "CREATE TRIGGER trigger_name ON table_name AFTER INSERT AS BEGIN...END;",
        "difficulty": "medium",
        "explanation": "In SQL Server, the correct syntax for creating a trigger includes the CREATE TRIGGER statement, followed by the trigger name, the table it operates ON, the event timing (AFTER, INSTEAD OF), the event type (INSERT, UPDATE, DELETE), and then the AS keyword followed by the trigger body enclosed in BEGIN...END blocks.",
        "hint": "Pay attention to the order of keywords, particularly where the table name and event timing are specified."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the main purpose of a DDL trigger?",
        "options": [
        "To respond to data manipulation events like INSERT, UPDATE, and DELETE",
        "To respond to database structure changes like CREATE, ALTER, and DROP",
        "To enforce data validation before committing transactions",
        "To schedule automated database maintenance tasks"],
        "correctOptionIndex": 1,
        "correctOptionText": "To respond to database structure changes like CREATE, ALTER, and DROP",
        "difficulty": "medium",
        "explanation": "DDL (Data Definition Language) triggers fire in response to database structure changes, such as when tables, views, or other database objects are created, altered, or dropped. They're often used to enforce standards, prevent changes during certain times, or log schema changes.",
        "hint": "Think about what 'DDL' stands for and what types of SQL statements are classified as DDL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "In MySQL, what is the purpose of the EVENT scheduler?",
        "options": [
        "To create triggers",
        "To execute stored procedures on a schedule",
        "To log database events",
        "To manage user connections"],
        "correctOptionIndex": 1,
        "correctOptionText": "To execute stored procedures on a schedule",
        "difficulty": "medium",
        "explanation": "The MySQL EVENT scheduler executes scheduled tasks (events) automatically at specified intervals or at specific times. These events typically execute stored procedures or direct SQL statements and function similarly to cron jobs in Unix systems, allowing for automated database maintenance and processing.",
        "hint": "Consider what functionality would be most similar to scheduled tasks or cron jobs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "Which statement enables the MySQL Event Scheduler?",
        "options": [
        "SET GLOBAL event_scheduler = ON;",
        "ENABLE EVENT SCHEDULER;",
        "START EVENT SCHEDULER;",
        "ALTER SYSTEM SET event_scheduler = TRUE;"],
        "correctOptionIndex": 0,
        "correctOptionText": "SET GLOBAL event_scheduler = ON;",
        "difficulty": "medium",
        "explanation": "In MySQL, the Event Scheduler is enabled by setting the global system variable 'event_scheduler' to ON using the SET GLOBAL statement. This allows scheduled events to execute automatically according to their defined schedules.",
        "hint": "Look for the option that follows MySQL's standard pattern for setting global system variables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the difference between row-level and statement-level triggers?",
        "options": [
        "Row-level triggers execute once for each affected row, statement-level triggers execute once per SQL statement",
        "Row-level triggers can only access one column, statement-level triggers can access all columns",
        "Row-level triggers are used in MySQL, statement-level triggers are used in SQL Server",
        "Row-level triggers are for SELECT statements, statement-level triggers are for DML statements"],
        "correctOptionIndex": 0,
        "correctOptionText": "Row-level triggers execute once for each affected row, statement-level triggers execute once per SQL statement",
        "difficulty": "medium",
        "explanation": "The main difference is in execution frequency. Row-level triggers fire once for each row affected by the triggering statement, making them useful when you need to perform an action for each modified row. Statement-level triggers fire once per SQL statement regardless of how many rows are affected, making them more efficient for operations that don't depend on individual row values.",
        "hint": "Consider how many times each type of trigger would execute if an UPDATE statement modified 100 rows."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "In Oracle, which keyword is used to access the new values in an INSERT or UPDATE trigger?",
        "options": [
        ":new",
        "NEW",
        "INSERTED",
        "AFTER"],
        "correctOptionIndex": 0,
        "correctOptionText": ":new",
        "difficulty": "medium",
        "explanation": "In Oracle PL/SQL triggers, the :new prefix is used to access the new values being inserted or updated. For example, :new.column_name would reference the new value of 'column_name' during an INSERT or UPDATE operation.",
        "hint": "Oracle uses a special prefix notation with a colon to access the new values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What happens if a BEFORE INSERT trigger sets NEW.column_value = NULL for a NOT NULL column in MySQL?",
        "options": [
        "The trigger will fail with an error",
        "The INSERT will fail with a constraint violation",
        "The column will get its default value",
        "The NULL will be ignored and the original value will be used"],
        "correctOptionIndex": 1,
        "correctOptionText": "The INSERT will fail with a constraint violation",
        "difficulty": "hard",
        "explanation": "If a BEFORE INSERT trigger in MySQL sets a NOT NULL column to NULL, the INSERT operation will fail with a constraint violation when the database tries to apply the modified values. The NOT NULL constraint is checked after the trigger executes but before the row is actually inserted.",
        "hint": "Think about when constraint checking happens in relation to trigger execution."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "Which of the following can a trigger NOT do directly?",
        "options": [
        "Modify data in other tables",
        "Call stored procedures",
        "Commit or rollback the current transaction",
        "Generate errors to abort the triggering statement"],
        "correctOptionIndex": 2,
        "correctOptionText": "Commit or rollback the current transaction",
        "difficulty": "hard",
        "explanation": "Triggers in most database systems cannot directly commit or rollback the current transaction using COMMIT or ROLLBACK statements. This restriction exists because triggers are part of the transaction that fired them, and allowing commits or rollbacks within triggers could create complex transaction management issues. However, triggers can generate errors that cause the entire transaction to roll back.",
        "hint": "Consider which action would interfere with the transaction management of the triggering statement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is a recursive trigger?",
        "options": [
        "A trigger that calls a stored procedure which then calls the trigger again",
        "A trigger that can fire more than once in the same transaction",
        "A trigger that can be activated by its own actions, directly or indirectly",
        "A trigger that uses a recursive CTE (Common Table Expression)"],
        "correctOptionIndex": 2,
        "correctOptionText": "A trigger that can be activated by its own actions, directly or indirectly",
        "difficulty": "hard",
        "explanation": "A recursive trigger is one that can fire again as a result of its own actions. This can happen directly (a trigger on Table A modifies Table A again) or indirectly (a trigger on Table A modifies Table B, which has a trigger that modifies Table A). Most database systems have safeguards to prevent infinite recursion, such as limiting the number of recursive trigger levels.",
        "hint": "Think about what makes a function or procedure 'recursive' in programming terms."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "In SQL Server, how can you disable a trigger without dropping it?",
        "options": [
        "ALTER TRIGGER trigger_name DISABLE;",
        "DISABLE TRIGGER trigger_name ON table_name;",
        "ALTER TABLE table_name DISABLE TRIGGER trigger_name;",
        "UPDATE sys.triggers SET is_disabled = 1 WHERE name = 'trigger_name';"],
        "correctOptionIndex": 2,
        "correctOptionText": "ALTER TABLE table_name DISABLE TRIGGER trigger_name;",
        "difficulty": "medium",
        "explanation": "In SQL Server, you disable a trigger using the ALTER TABLE statement with the DISABLE TRIGGER clause, specifying both the table name and the trigger name. This temporarily deactivates the trigger without removing its definition, so it can be easily enabled later using ENABLE TRIGGER.",
        "hint": "Look for the syntax that mentions both the table and the trigger, since triggers are associated with tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the purpose of the FOR EACH ROW clause in MySQL triggers?",
        "options": [
        "It ensures the trigger fires only once regardless of rows affected",
        "It makes the trigger execute once for each row affected by the triggering statement",
        "It restricts the trigger to only access certain rows",
        "It is required for all MySQL triggers"],
        "correctOptionIndex": 1,
        "correctOptionText": "It makes the trigger execute once for each row affected by the triggering statement",
        "difficulty": "medium",
        "explanation": "In MySQL, the FOR EACH ROW clause creates a row-level trigger that executes once for each row affected by the triggering statement. This allows the trigger to access the values of individual rows through the OLD and NEW keywords. Without this clause, MySQL triggers would be statement-level, executing only once per statement.",
        "hint": "Consider how this clause affects how many times the trigger will execute during a multi-row operation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "Which system function in SQL Server returns the type of modification that caused a trigger to fire?",
        "options": [
        "TRIGGER_TYPE()",
        "EVENT_TYPE()",
        "COLUMNS_UPDATED()",
        "UPDATE()"],
        "correctOptionIndex": 3,
        "correctOptionText": "UPDATE()",
        "difficulty": "hard",
        "explanation": "In SQL Server, the UPDATE() function is used in triggers to determine if a specific column was included in an UPDATE statement. It returns TRUE if the column was listed in the UPDATE statement, even if the value wasn't actually changed. To check if multiple operations could have fired a trigger, you'd typically examine the contents of the inserted and deleted tables.",
        "hint": "This function helps determine which columns were included in the UPDATE statement that fired the trigger."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the correct syntax to create a scheduled event in MySQL?",
        "options": [
        "CREATE EVENT event_name ON SCHEDULE EVERY 1 DAY DO BEGIN SQL_statements; END;",
        "CREATE SCHEDULE event_name EVERY 1 DAY DO BEGIN SQL_statements; END;",
        "CREATE TASK event_name SCHEDULE EVERY 1 DAY AS BEGIN SQL_statements; END;",
        "CREATE JOB event_name EXECUTE EVERY 1 DAY BEGIN SQL_statements; END;"],
        "correctOptionIndex": 0,
        "correctOptionText": "CREATE EVENT event_name ON SCHEDULE EVERY 1 DAY DO BEGIN SQL_statements; END;",
        "difficulty": "medium",
        "explanation": "The correct syntax for creating a scheduled event in MySQL starts with CREATE EVENT followed by the event name, then ON SCHEDULE to specify timing (using either AT for one-time events or EVERY for recurring events), and finally DO followed by the SQL statements to execute. Complex statements are enclosed in BEGIN...END blocks.",
        "hint": "Look for the option that includes the key elements: CREATE EVENT, ON SCHEDULE, and DO."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the purpose of the AFTER keyword in trigger creation?",
        "options": [
        "To specify that the trigger should execute after another specific trigger",
        "To specify that the trigger should execute after the triggering DML operation completes",
        "To schedule the trigger to run after a specific date and time",
        "To define the cleanup actions after the main trigger body executes"],
        "correctOptionIndex": 1,
        "correctOptionText": "To specify that the trigger should execute after the triggering DML operation completes",
        "difficulty": "easy",
        "explanation": "The AFTER keyword in trigger creation defines when the trigger will execute relative to the triggering event. An AFTER trigger executes after the database has completed the DML operation (INSERT, UPDATE, or DELETE) that triggered it, meaning the data changes have already been applied when the trigger starts executing.",
        "hint": "Think about the timing of when the trigger executes in relation to the database operation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "In PostgreSQL, what special variable can be used in a trigger function to access the operation being performed?",
        "options": [
        "TG_OP",
        "TRIGGER_OPERATION",
        "CURRENT_OPERATION",
        "PG_TRIGGER_EVENT"],
        "correctOptionIndex": 0,
        "correctOptionText": "TG_OP",
        "difficulty": "hard",
        "explanation": "In PostgreSQL trigger functions, TG_OP is a special variable that contains a string indicating which operation fired the trigger: 'INSERT', 'UPDATE', 'DELETE', or 'TRUNCATE'. This allows the trigger function to behave differently depending on the type of operation being performed.",
        "hint": "PostgreSQL uses a short, two-part variable name where the first part indicates it's a trigger-related variable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is a INSTEAD OF trigger primarily used for?",
        "options": [
        "To execute code before a DML operation",
        "To execute code after a DML operation",
        "To replace the default action of a DML operation, especially on views",
        "To schedule events instead of using the event scheduler"],
        "correctOptionIndex": 2,
        "correctOptionText": "To replace the default action of a DML operation, especially on views",
        "difficulty": "medium",
        "explanation": "INSTEAD OF triggers replace the default action of an INSERT, UPDATE, or DELETE operation with custom logic. They're particularly useful for making non-updatable views updatable by intercepting DML operations and converting them into appropriate actions on the underlying base tables, essentially providing a way to define custom update logic for views.",
        "hint": "The name provides a clue - these triggers do something 'instead of' the regular operation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What happens if multiple triggers of the same type (e.g., AFTER INSERT) are defined on the same table?",
        "options": [
        "Only the first trigger created will fire",
        "Only the most recently created trigger will fire",
        "All triggers will fire in an undefined order unless specified otherwise",
        "The database will raise an error preventing multiple triggers of the same type"],
        "correctOptionIndex": 2,
        "correctOptionText": "All triggers will fire in an undefined order unless specified otherwise",
        "difficulty": "medium",
        "explanation": "When multiple triggers of the same type exist on a table, all of them will fire, but the execution order is generally not guaranteed unless explicitly specified using trigger ordering mechanisms (which vary by database system). In SQL Server, you can use sp_settriggerorder to control this; in Oracle, you can use the FOLLOWS clause.",
        "hint": "Consider whether database systems typically limit the number of triggers or provide ways to control execution order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is a typical use case for DDL triggers in SQL Server?",
        "options": [
        "Data validation before insertion",
        "Maintaining an audit trail of schema changes",
        "Automatic data encryption",
        "Regular database backups"],
        "correctOptionIndex": 1,
        "correctOptionText": "Maintaining an audit trail of schema changes",
        "difficulty": "medium",
        "explanation": "A common use for DDL triggers in SQL Server is to track and log schema changes by recording details about CREATE, ALTER, and DROP operations in an audit table. This creates a history of who made what structural changes to the database and when, which is valuable for compliance, troubleshooting, and change management.",
        "hint": "Think about what kind of information would be useful to track regarding database structure modifications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "Which of the following is TRUE about BEFORE triggers?",
        "options": [
        "They can prevent the triggering action by raising an error",
        "They can only read data but cannot modify it",
        "They are only available in Oracle but not in MySQL",
        "They execute after constraint checking but before the actual data modification"],
        "correctOptionIndex": 0,
        "correctOptionText": "They can prevent the triggering action by raising an error",
        "difficulty": "medium",
        "explanation": "BEFORE triggers execute before the triggering action and before constraints are checked. One of their key advantages is the ability to validate data using custom business logic and prevent the operation from proceeding by raising an error if the data doesn't meet requirements, effectively acting as a custom constraint mechanism.",
        "hint": "Consider what would happen if a BEFORE trigger raised an exception or returned an error code."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the purpose of the WHEN condition in a trigger definition?",
        "options": [
        "To specify when the trigger should be created",
        "To set a schedule for when the trigger should check for events",
        "To filter which rows cause the trigger to execute its actions",
        "To determine if the trigger should be enabled or disabled"],
        "correctOptionIndex": 2,
        "correctOptionText": "To filter which rows cause the trigger to execute its actions",
        "difficulty": "hard",
        "explanation": "The WHEN condition in a trigger definition provides a way to filter which rows actually cause the trigger body to execute. When a triggering event occurs, the condition is evaluated for each affected row, and the trigger actions only execute for rows where the condition evaluates to true. This allows for more selective trigger execution without needing complex conditionals in the trigger body.",
        "hint": "Consider how this clause could help make a trigger more selective about which data modifications it responds to."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "Which statement correctly drops a trigger in MySQL?",
        "options": [
        "DROP TRIGGER trigger_name;",
        "DROP TRIGGER trigger_name ON table_name;",
        "REMOVE TRIGGER trigger_name;",
        "DELETE TRIGGER trigger_name FROM table_name;"],
        "correctOptionIndex": 0,
        "correctOptionText": "DROP TRIGGER trigger_name;",
        "difficulty": "easy",
        "explanation": "In MySQL, you drop a trigger using the DROP TRIGGER statement followed by the trigger name. Unlike some other database systems, MySQL doesn't require specifying the table name as part of the DROP TRIGGER statement, as trigger names must be unique within a schema.",
        "hint": "Look for the most straightforward syntax that follows the pattern of other MySQL DROP statements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the FOLLOWS clause used for in Oracle trigger creation?",
        "options": [
        "To specify which user roles can access the trigger",
        "To control the execution order when multiple triggers fire for the same event",
        "To define which tables the trigger depends on",
        "To list the columns that should activate the trigger"],
        "correctOptionIndex": 1,
        "correctOptionText": "To control the execution order when multiple triggers fire for the same event",
        "difficulty": "hard",
        "explanation": "In Oracle, the FOLLOWS clause is used when creating triggers to explicitly define the order in which multiple triggers should execute for the same event on the same table. When trigger A is created with FOLLOWS trigger B, Oracle guarantees that trigger A will execute after trigger B when both are fired by the same event.",
        "hint": "The name of the clause suggests its purpose - something 'follows' something else."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What does the ENABLE keyword do in a CREATE EVENT statement?",
        "options": [
        "Activates the event immediately upon creation",
        "Enables other users to modify the event",
        "Enables the use of complex SQL in the event body",
        "It's not a valid keyword for CREATE EVENT"],
        "correctOptionIndex": 0,
        "correctOptionText": "Activates the event immediately upon creation",
        "difficulty": "medium",
        "explanation": "In MySQL's CREATE EVENT statement, the ENABLE keyword (or ON COMPLETION PRESERVE ENABLE) specifies that the event should be active and ready to execute according to its schedule immediately after creation. Without this, you might need to use ALTER EVENT to enable it separately. The opposite is DISABLE, which creates the event definition but keeps it inactive.",
        "hint": "Think about what state a newly created event should be in - active or inactive."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "Which system view in SQL Server provides information about triggers?",
        "options": [
        "sys.trigger_definitions",
        "sys.triggers",
        "information_schema.triggers",
        "sys.trigger_events"],
        "correctOptionIndex": 1,
        "correctOptionText": "sys.triggers",
        "difficulty": "medium",
        "explanation": "In SQL Server, the sys.triggers catalog view contains one row for each trigger in the database, providing information such as the trigger name, ID, type, and the object ID of the table or view it's associated with. This view is the primary source for metadata about triggers in SQL Server.",
        "hint": "Look for the most straightforward name that follows SQL Server's naming pattern for system catalog views."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the difference between a DATABASE level trigger and a SERVER level trigger in SQL Server?",
        "options": [
        "DATABASE triggers fire for events in a specific database, SERVER triggers fire for events on the entire server",
        "DATABASE triggers are for DML events, SERVER triggers are for DDL events",
        "DATABASE triggers can only be created by database owners, SERVER triggers require sysadmin privileges",
        "DATABASE triggers use T-SQL, SERVER triggers use PowerShell"],
        "correctOptionIndex": 0,
        "correctOptionText": "DATABASE triggers fire for events in a specific database, SERVER triggers fire for events on the entire server",
        "difficulty": "hard",
        "explanation": "The main difference is scope. DATABASE level triggers respond to events within a specific database, while SERVER level triggers respond to events across the entire SQL Server instance. For example, a DATABASE level DDL trigger might log all table creations in a single database, while a SERVER level trigger could log them across all databases on the server.",
        "hint": "Consider what the names suggest about the scope of events these triggers respond to."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is the MERGE statement's relationship with triggers?",
        "options": [
        "MERGE statements cannot activate triggers",
        "MERGE operations can fire INSERT, UPDATE, and DELETE triggers in a single statement",
        "MERGE requires special MERGE triggers to be defined",
        "MERGE can only activate AFTER triggers, not BEFORE triggers"],
        "correctOptionIndex": 1,
        "correctOptionText": "MERGE operations can fire INSERT, UPDATE, and DELETE triggers in a single statement",
        "difficulty": "hard",
        "explanation": "A MERGE statement can perform INSERT, UPDATE, and DELETE operations in a single statement, potentially firing all three types of triggers on the target table. This means that when planning triggers on tables that will be affected by MERGE operations, you need to consider how they'll interact when multiple trigger types fire from a single statement.",
        "hint": "Consider what operations a MERGE statement can perform and how that relates to trigger activation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "In MySQL, which event frequency option would create an event that runs every Monday at 3:00 AM?",
        "options": [
        "ON SCHEDULE EVERY '3:00' ON MONDAY",
        "ON SCHEDULE AT '3:00' EVERY MONDAY",
        "ON SCHEDULE EVERY 1 WEEK STARTS '2023-01-02 03:00:00'",
        "ON SCHEDULE AT MONDAY '03:00:00'"],
        "correctOptionIndex": 2,
        "correctOptionText": "ON SCHEDULE EVERY 1 WEEK STARTS '2023-01-02 03:00:00'",
        "difficulty": "hard",
        "explanation": "To schedule an event for every Monday at 3:00 AM in MySQL, you would use ON SCHEDULE EVERY 1 WEEK with a STARTS clause specifying a date that falls on a Monday and the time 03:00:00. The event will then repeat every week from that starting point, effectively running every Monday at 3:00 AM.",
        "hint": "Consider which option correctly specifies both a weekly interval and a specific starting time that would ensure it runs on Mondays."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What is a trigger action in the context of database systems?",
        "options": [
        "The DDL or DML statement that activates the trigger",
        "The code that executes when the trigger fires",
        "The process of enabling or disabling a trigger",
        "The event notification sent when a trigger completes"],
        "correctOptionIndex": 1,
        "correctOptionText": "The code that executes when the trigger fires",
        "difficulty": "easy",
        "explanation": "In database terminology, the trigger action refers to the actual code or SQL statements that execute when the trigger is fired. This is the body of the trigger—the procedural code between BEGIN and END in most SQL dialects—that defines what the trigger actually does when activated.",
        "hint": "Think about the component of a trigger that defines its behavior when activated."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Triggers & Events",
        "questionText": "What potential performance issue can arise from using triggers?",
        "options": [
        "Triggers always require more disk space than stored procedures",
        "Triggers can introduce hidden processing that impacts transaction duration",
        "Triggers cannot be optimized by the query optimizer",
        "Triggers require additional network connections for each execution"],
        "correctOptionIndex": 1,
        "correctOptionText": "Triggers can introduce hidden processing that impacts transaction duration",
        "difficulty": "medium",
        "explanation": "A significant performance concern with triggers is that they execute additional code automatically and sometimes invisibly to the application, potentially extending transaction duration. When triggers perform complex operations or cascade across multiple tables, they can substantially increase the time it takes to complete what appears to be a simple transaction, affecting overall system performance.",
        "hint": "Consider how automatic execution of trigger code might affect transaction processing in ways that aren't immediately obvious to developers."
    },
     
    
    // Transaction Control
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which SQL statement is used to make changes to a database permanent?",
        "options": ["SAVE", "COMMIT", "STORE", "FINALIZE"],
        "correctOptionIndex": 1,
        "correctOptionText": "COMMIT",
        "difficulty": "easy",
        "explanation": "The COMMIT statement is used to save all the transactions to the database permanently. Once the COMMIT statement is executed, changes cannot be rolled back.",
        "hint": "This command finalizes all changes made during the current transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which SQL statement is used to restore database to the state since the last COMMIT?",
        "options": ["ROLLBACK", "RESTORE", "REVERT", "UNDO"],
        "correctOptionIndex": 0,
        "correctOptionText": "ROLLBACK",
        "difficulty": "easy",
        "explanation": "The ROLLBACK statement is used to undo all changes made in the current transaction and restore the database to its previous state since the last COMMIT.",
        "hint": "This command undoes all the changes made during the current transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What does the acronym ACID stand for in the context of database transactions?",
        "options": ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Identity, Database", "Algorithm, Computation, Implementation, Design", "Availability, Consistency, Independence, Distribution"],
        "correctOptionIndex": 0,
        "correctOptionText": "Atomicity, Consistency, Isolation, Durability",
        "difficulty": "medium",
        "explanation": "ACID is an acronym that stands for Atomicity, Consistency, Isolation, and Durability. These are the four key properties that guarantee reliable processing of database transactions.",
        "hint": "These are the four essential properties that ensure database transactions are processed reliably."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which statement creates a point within a transaction to which you can later roll back?",
        "options": ["COMMIT", "SAVEPOINT", "CHECKPOINT", "MARKTRANS"],
        "correctOptionIndex": 1,
        "correctOptionText": "SAVEPOINT",
        "difficulty": "medium",
        "explanation": "The SAVEPOINT statement creates a point within a transaction to which you can roll back without rolling back the entire transaction. This allows partial rollbacks within a transaction.",
        "hint": "This command creates a specific point in a transaction that you can roll back to."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What happens to any open transaction when a user's session terminates abnormally?",
        "options": ["It gets committed automatically", "It gets rolled back automatically", "It remains pending until the next logon", "It depends on the database configuration"],
        "correctOptionIndex": 1,
        "correctOptionText": "It gets rolled back automatically",
        "difficulty": "medium",
        "explanation": "When a user's session terminates abnormally (like a crash or disconnect), most database systems automatically roll back any open transactions to maintain data integrity.",
        "hint": "Database systems have a default behavior to protect data integrity in case of unexpected terminations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What SQL command would you use to roll back to a specific savepoint?",
        "options": ["ROLLBACK", "ROLLBACK TO SAVEPOINT", "ROLLBACK TO", "RESTORE SAVEPOINT"],
        "correctOptionIndex": 1,
        "correctOptionText": "ROLLBACK TO SAVEPOINT",
        "difficulty": "medium",
        "explanation": "The 'ROLLBACK TO SAVEPOINT savepoint_name' command is used to roll back a transaction to a specific savepoint without rolling back the entire transaction.",
        "hint": "This command allows you to undo changes back to a specific marker in your transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which statement begins a transaction in SQL?",
        "options": ["START TRANSACTION", "BEGIN TRANSACTION", "Both A and B are correct", "INIT TRANSACTION"],
        "correctOptionIndex": 2,
        "correctOptionText": "Both A and B are correct",
        "difficulty": "easy",
        "explanation": "Both 'START TRANSACTION' and 'BEGIN TRANSACTION' are valid SQL statements used to explicitly start a transaction, though the exact syntax may vary depending on the database system.",
        "hint": "Different database systems use different keywords to start a transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What does the 'A' in ACID stand for?",
        "options": ["Availability", "Authentication", "Authorization", "Atomicity"],
        "correctOptionIndex": 3,
        "correctOptionText": "Atomicity",
        "difficulty": "easy",
        "explanation": "Atomicity ensures that all operations within a transaction are completed successfully; otherwise, the transaction is aborted and previous operations are rolled back to their former state.",
        "hint": "This property ensures that a transaction is treated as a single, indivisible unit."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What does the 'I' in ACID stand for?",
        "options": ["Identity", "Integrity", "Isolation", "Implementation"],
        "correctOptionIndex": 2,
        "correctOptionText": "Isolation",
        "difficulty": "easy",
        "explanation": "Isolation ensures that concurrent execution of transactions results in a system state that would be obtained if transactions were executed sequentially.",
        "hint": "This property ensures that the intermediate state of a transaction is invisible to other transactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which isolation level allows dirty reads to occur?",
        "options": ["READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE", "READ UNCOMMITTED"],
        "correctOptionIndex": 3,
        "correctOptionText": "READ UNCOMMITTED",
        "difficulty": "hard",
        "explanation": "READ UNCOMMITTED is the lowest isolation level that allows transactions to read data that has been modified but not yet committed by other transactions, which can result in dirty reads.",
        "hint": "This is the lowest isolation level and provides the least protection against concurrency problems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What is a 'dirty read' in database transactions?",
        "options": ["Reading data from a corrupted database", "Reading uncommitted changes made by other transactions", "Reading data that was marked for deletion", "Reading data that has been archived"],
        "correctOptionIndex": 1,
        "correctOptionText": "Reading uncommitted changes made by other transactions",
        "difficulty": "medium",
        "explanation": "A dirty read occurs when a transaction reads data that has been modified by another transaction that has not yet been committed. If the other transaction is rolled back, the read data becomes invalid.",
        "hint": "This concurrency issue involves reading data that might be reverted."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which isolation level prevents dirty reads but allows non-repeatable reads and phantom reads?",
        "options": ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
        "correctOptionIndex": 1,
        "correctOptionText": "READ COMMITTED",
        "difficulty": "hard",
        "explanation": "The READ COMMITTED isolation level ensures that any data read has been committed at the moment it is read. It prevents dirty reads but allows non-repeatable reads and phantom reads.",
        "hint": "This isolation level ensures that you only read data that has been saved to the database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What is a 'non-repeatable read' in database transactions?",
        "options": ["Reading incorrect data due to a system error", "A read operation that cannot be repeated due to permissions", "Reading the same row twice in a transaction and getting different values", "Reading data that no longer exists in the database"],
        "correctOptionIndex": 2,
        "correctOptionText": "Reading the same row twice in a transaction and getting different values",
        "difficulty": "medium",
        "explanation": "A non-repeatable read occurs when a transaction reads the same row twice and gets different data each time. This happens when another transaction modifies the row between the first and second read.",
        "hint": "This concurrency issue involves inconsistent reads of the same data within a single transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which isolation level prevents dirty reads and non-repeatable reads but allows phantom reads?",
        "options": ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
        "correctOptionIndex": 2,
        "correctOptionText": "REPEATABLE READ",
        "difficulty": "hard",
        "explanation": "REPEATABLE READ guarantees that if a transaction reads a row, any subsequent reads of that same row within the same transaction will yield the same value. It prevents dirty reads and non-repeatable reads but allows phantom reads.",
        "hint": "This isolation level ensures consistent results when reading the same data multiple times."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What is a 'phantom read' in database transactions?",
        "options": ["Reading data from a backup instead of the live database", "Reading data that appears and disappears mysteriously", "Reading rows that appear due to another transaction's INSERT or DELETE operations", "Reading data that has been corrupted by hardware failure"],
        "correctOptionIndex": 2,
        "correctOptionText": "Reading rows that appear due to another transaction's INSERT or DELETE operations",
        "difficulty": "hard",
        "explanation": "A phantom read occurs when a transaction re-executes a query returning a set of rows that satisfy a search condition and finds that the set of rows has changed due to another recently committed transaction.",
        "hint": "This concurrency issue involves the appearance or disappearance of rows that match your search criteria."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which isolation level provides the highest level of isolation and prevents dirty reads, non-repeatable reads, and phantom reads?",
        "options": ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
        "correctOptionIndex": 3,
        "correctOptionText": "SERIALIZABLE",
        "difficulty": "medium",
        "explanation": "SERIALIZABLE is the highest isolation level that ensures that transactions are completely isolated from each other, as if they were executed serially rather than concurrently.",
        "hint": "This isolation level provides the strongest guarantees but potentially the lowest concurrency."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What type of lock does a transaction typically acquire when reading data in the READ COMMITTED isolation level?",
        "options": ["Exclusive lock", "Shared lock", "Update lock", "No lock"],
        "correctOptionIndex": 1,
        "correctOptionText": "Shared lock",
        "difficulty": "hard",
        "explanation": "In the READ COMMITTED isolation level, transactions typically acquire shared locks on data being read, which allows other transactions to read the same data but not modify it until the lock is released.",
        "hint": "This type of lock permits multiple transactions to read the same data simultaneously."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What command would you use to commit a transaction even if errors occurred?",
        "options": ["COMMIT FORCE", "COMMIT IGNORE ERRORS", "COMMIT ANYWAY", "Not possible in standard SQL"],
        "correctOptionIndex": 0,
        "correctOptionText": "COMMIT FORCE",
        "difficulty": "hard",
        "explanation": "In some database systems like Oracle, 'COMMIT FORCE' can be used to commit a transaction regardless of whether it completes normally or abnormally. However, this is not part of standard SQL.",
        "hint": "This is a specialized command in certain database systems, not standard SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What happens if you try to access a savepoint that doesn't exist?",
        "options": ["The transaction automatically commits", "The transaction automatically rolls back", "An error occurs", "The database creates the savepoint automatically"],
        "correctOptionIndex": 2,
        "correctOptionText": "An error occurs",
        "difficulty": "medium",
        "explanation": "If you try to roll back to a savepoint that doesn't exist, the database system will generate an error, typically something like 'savepoint does not exist'.",
        "hint": "The database system needs to find a record of the savepoint to roll back to it."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What happens to savepoints after a COMMIT statement is executed?",
        "options": ["They remain available for the next transaction", "They are saved to the transaction log", "They are released and no longer available", "They become read-only"],
        "correctOptionIndex": 2,
        "correctOptionText": "They are released and no longer available",
        "difficulty": "medium",
        "explanation": "When a COMMIT statement is executed, all savepoints created in the current transaction are released and are no longer available for use in ROLLBACK TO SAVEPOINT statements.",
        "hint": "Savepoints are temporary markers within a single transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "In which transaction isolation level is a shared lock held until the end of a transaction?",
        "options": ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "All of the above"],
        "correctOptionIndex": 2,
        "correctOptionText": "REPEATABLE READ",
        "difficulty": "hard",
        "explanation": "In the REPEATABLE READ isolation level, shared locks are held until the end of a transaction to prevent other transactions from modifying the data, which could cause non-repeatable reads.",
        "hint": "This isolation level needs to maintain locks longer to prevent data changes that would affect query consistency."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What does the 'D' in ACID stand for?",
        "options": ["Data", "Dependency", "Distribution", "Durability"],
        "correctOptionIndex": 3,
        "correctOptionText": "Durability",
        "difficulty": "easy",
        "explanation": "Durability ensures that once a transaction has been committed, it will remain committed even in the case of a system failure. This is typically achieved by storing the transaction in non-volatile memory.",
        "hint": "This property ensures that committed transactions survive permanently, even after system failures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What does the 'C' in ACID stand for?",
        "options": ["Concurrency", "Commitment", "Consistency", "Control"],
        "correctOptionIndex": 2,
        "correctOptionText": "Consistency",
        "difficulty": "easy",
        "explanation": "Consistency ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants and constraints.",
        "hint": "This property ensures that the database remains in a valid state before and after the transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What does AUTO COMMIT mode mean in a database system?",
        "options": ["Transactions are committed only if they contain no errors", "Each SQL statement is automatically committed after execution", "The system periodically commits changes without user intervention", "The database uses AI to decide when to commit transactions"],
        "correctOptionIndex": 1,
        "correctOptionText": "Each SQL statement is automatically committed after execution",
        "difficulty": "medium",
        "explanation": "In AUTO COMMIT mode, each individual SQL statement is treated as a separate transaction that is automatically committed after it is executed, unless explicitly stated otherwise.",
        "hint": "This is a mode where you don't need to explicitly issue COMMIT statements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which statement would you use to disable auto-commit mode in MySQL?",
        "options": ["SET AUTOCOMMIT = 0", "DISABLE AUTOCOMMIT", "AUTO COMMIT OFF", "SET TRANSACTION MANUAL"],
        "correctOptionIndex": 0,
        "correctOptionText": "SET AUTOCOMMIT = 0",
        "difficulty": "medium",
        "explanation": "In MySQL, you can disable auto-commit mode by executing the statement 'SET AUTOCOMMIT = 0', which means transactions must be explicitly committed or rolled back.",
        "hint": "This command sets a session variable that controls the auto-commit behavior."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What is the main purpose of a database transaction?",
        "options": ["To improve query performance", "To ensure database security", "To maintain data integrity", "To reduce storage space"],
        "correctOptionIndex": 2,
        "correctOptionText": "To maintain data integrity",
        "difficulty": "easy",
        "explanation": "The main purpose of a database transaction is to maintain data integrity by ensuring that a series of SQL operations are treated as a single logical unit of work that either completes entirely or not at all.",
        "hint": "Transactions help protect the database from partial updates that could corrupt data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "What is a deadlock in database transactions?",
        "options": ["When a transaction takes too long to complete", "When two transactions wait indefinitely for each other to release locks", "When a transaction causes the database server to crash", "When all available connections to the database are in use"],
        "correctOptionIndex": 1,
        "correctOptionText": "When two transactions wait indefinitely for each other to release locks",
        "difficulty": "hard",
        "explanation": "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency that prevents any of the transactions from proceeding.",
        "hint": "This is a situation where multiple transactions are stuck in a circular waiting pattern."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "How does a database typically resolve a deadlock situation?",
        "options": ["By waiting until all transactions time out", "By rolling back all involved transactions", "By rolling back one of the transactions", "By forcing all transactions to commit"],
        "correctOptionIndex": 2,
        "correctOptionText": "By rolling back one of the transactions",
        "difficulty": "hard",
        "explanation": "To resolve a deadlock, database systems typically choose one of the transactions as a 'victim' and roll it back, releasing its locks so that other transactions can proceed.",
        "hint": "The database needs to break the circular waiting pattern by sacrificing one transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "Which of the following is a valid reason to use transactions in a database?",
        "options": ["To improve query performance", "To reduce database size", "To ensure data consistency during multiple related operations", "To avoid having to create proper database schemas"],
        "correctOptionIndex": 2,
        "correctOptionText": "To ensure data consistency during multiple related operations",
        "difficulty": "easy",
        "explanation": "Transactions are essential when multiple related operations need to be performed as a single unit to maintain data consistency, such as transferring money from one account to another.",
        "hint": "Transactions are used when multiple operations need to succeed or fail together."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Transaction Control",
        "questionText": "In PostgreSQL, what command can you use to set the transaction isolation level?",
        "options": ["SET TRANSACTION ISOLATION LEVEL", "SET ISOLATION LEVEL", "CHANGE ISOLATION LEVEL", "ALTER TRANSACTION ISOLATION"],
        "correctOptionIndex": 0,
        "correctOptionText": "SET TRANSACTION ISOLATION LEVEL",
        "difficulty": "medium",
        "explanation": "In PostgreSQL, you can set the transaction isolation level using the command 'SET TRANSACTION ISOLATION LEVEL' followed by the desired isolation level (e.g., READ COMMITTED, SERIALIZABLE).",
        "hint": "This command is used at the beginning of a transaction to define its behavior."
    },
    
    
    // Indexes & Query Optimization
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is the primary purpose of an index in a database?",
        "options": ["To enforce data security", "To verify data integrity", "To speed up data retrieval", "To reduce storage space"],
        "correctOptionIndex": 2,
        "correctOptionText": "To speed up data retrieval",
        "difficulty": "easy",
        "explanation": "Indexes are database objects that improve the speed of data retrieval operations by providing quick access paths to data in a table, similar to how a book index helps you find information quickly.",
        "hint": "Think about how you find information in a book - what helps you locate content faster?"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which SQL command is used to create an index?",
        "options": ["ADD INDEX", "MAKE INDEX", "CREATE INDEX", "INSERT INDEX"],
        "correctOptionIndex": 2,
        "correctOptionText": "CREATE INDEX",
        "difficulty": "easy",
        "explanation": "The CREATE INDEX statement is used in SQL to create indexes on tables. The basic syntax is 'CREATE INDEX index_name ON table_name (column_name)'.",
        "hint": "This follows the same pattern as other object creation commands in SQL."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which of the following data structures is commonly used to implement indexes in databases?",
        "options": ["Linked Lists", "Arrays", "Hash Tables", "B-Trees"],
        "correctOptionIndex": 3,
        "correctOptionText": "B-Trees",
        "difficulty": "medium",
        "explanation": "B-Trees (and variations like B+ Trees) are the most common data structures used for implementing database indexes because they efficiently support operations like search, sequential access, insertions, and deletions.",
        "hint": "This balanced tree structure allows for efficient range queries and maintains sorted order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which of the following is a potential disadvantage of adding many indexes to a table?",
        "options": ["Slower query performance", "Increased storage requirements", "More complex database design", "All of the above"],
        "correctOptionIndex": 3,
        "correctOptionText": "All of the above",
        "difficulty": "medium",
        "explanation": "While indexes speed up queries, they also consume storage space, slow down data modification operations (INSERT, UPDATE, DELETE), and make database design more complex with more objects to maintain.",
        "hint": "Indexes have costs as well as benefits, affecting various aspects of database performance and management."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What type of index is automatically created when you define a PRIMARY KEY constraint?",
        "options": ["Non-unique index", "Unique index", "Composite index", "Bitmap index"],
        "correctOptionIndex": 1,
        "correctOptionText": "Unique index",
        "difficulty": "easy",
        "explanation": "When you create a PRIMARY KEY constraint, the database automatically creates a unique index on the column(s) to enforce the uniqueness requirement of the primary key.",
        "hint": "This index ensures that the defining property of a primary key is maintained."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is a covering index?",
        "options": ["An index that spans multiple tables", "An index that includes all columns of a table", "An index that contains all columns referenced in a query", "An index that automatically updates itself"],
        "correctOptionIndex": 2,
        "correctOptionText": "An index that contains all columns referenced in a query",
        "difficulty": "hard",
        "explanation": "A covering index is an index that includes all the columns needed by a query, allowing the database to retrieve the necessary data directly from the index without accessing the table itself, which can significantly improve performance.",
        "hint": "This type of index can satisfy a query without the need to access the actual table data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which type of index is best suited for columns with a small number of distinct values?",
        "options": ["B-Tree index", "Hash index", "Bitmap index", "Clustered index"],
        "correctOptionIndex": 2,
        "correctOptionText": "Bitmap index",
        "difficulty": "hard",
        "explanation": "Bitmap indexes are particularly effective for columns with low cardinality (few distinct values) as they use bit vectors for each distinct value, making them space-efficient and good for certain types of queries.",
        "hint": "This index type works well for columns like status codes, gender, or boolean flags."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is a clustered index?",
        "options": ["An index on multiple columns", "An index that determines the physical order of data in a table", "An index shared among multiple tables", "An index with multiple sort orders"],
        "correctOptionIndex": 1,
        "correctOptionText": "An index that determines the physical order of data in a table",
        "difficulty": "medium",
        "explanation": "A clustered index determines the physical storage order of rows in a table. Each table can have only one clustered index because the rows can only be stored in one order.",
        "hint": "This type of index affects how the actual data rows are organized on disk."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which query operation typically benefits LEAST from indexes?",
        "options": ["WHERE clause filtering", "JOIN operations", "ORDER BY sorting", "Full table scans"],
        "correctOptionIndex": 3,
        "correctOptionText": "Full table scans",
        "difficulty": "medium",
        "explanation": "Full table scans, where every row in a table must be examined, benefit least from indexes because they access all data regardless. Indexes are designed to avoid reading all data by providing shortcuts to specific rows.",
        "hint": "This operation needs to process every row in the table, regardless of indexing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which SQL clause is used to view the execution plan of a query?",
        "options": ["DESCRIBE", "EXPLAIN", "ANALYZE", "PLAN"],
        "correctOptionIndex": 1,
        "correctOptionText": "EXPLAIN",
        "difficulty": "medium",
        "explanation": "The EXPLAIN statement (or EXPLAIN PLAN in some databases) is used to display the execution plan that the database optimizer has chosen for a SQL statement, showing how the database will execute the query.",
        "hint": "This command helps you understand how the database will process your query."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is a composite index?",
        "options": ["An index that combines multiple tables", "An index created on multiple columns", "An index with both ascending and descending sort orders", "An index that changes automatically"],
        "correctOptionIndex": 1,
        "correctOptionText": "An index created on multiple columns",
        "difficulty": "easy",
        "explanation": "A composite index (also called a multi-column index) is an index created on two or more columns of a table. It can speed up queries that filter, join, or sort by those columns in the specified order.",
        "hint": "This type of index involves more than one column in a single index structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "When would a composite index on columns (A, B) be useful?",
        "options": ["When querying only on column B", "When querying with WHERE A = ? OR B = ?", "When querying with WHERE A = ? AND B = ?", "When performing full table scans"],
        "correctOptionIndex": 2,
        "correctOptionText": "When querying with WHERE A = ? AND B = ?",
        "difficulty": "medium",
        "explanation": "A composite index on (A, B) is most useful for queries that filter on both columns with AND conditions. The index can also help with queries that filter only on column A, but not for queries that filter only on column B due to the left-to-right evaluation of composite indexes.",
        "hint": "Consider how indexes are searched from left to right in their column definition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which of the following operators in a WHERE clause can prevent the use of an index?",
        "options": ["= (equal)", "> (greater than)", "BETWEEN", "LIKE with a leading wildcard (%)"],
        "correctOptionIndex": 3,
        "correctOptionText": "LIKE with a leading wildcard (%)",
        "difficulty": "hard",
        "explanation": "LIKE expressions with a leading wildcard (e.g., WHERE column LIKE '%abc') typically cannot use indexes effectively because the database cannot determine where to start searching in the index. This often results in a full table scan.",
        "hint": "Think about which pattern matching operations make it difficult to use the ordered structure of an index."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What does it mean when an execution plan shows a 'table scan'?",
        "options": ["The query is using an index", "The query is joining multiple tables", "The query is reading every row in the table", "The query is sorting the results"],
        "correctOptionIndex": 2,
        "correctOptionText": "The query is reading every row in the table",
        "difficulty": "easy",
        "explanation": "A table scan (also called a full table scan) in an execution plan indicates that the database is reading every row in the table to satisfy the query, rather than using an index to access only the required rows.",
        "hint": "This operation examines all data in a table, which can be inefficient for large tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is index fragmentation?",
        "options": ["When an index is spread across multiple database files", "When an index contains logical or physical disorder", "When an index references deleted records", "When an index contains duplicate entries"],
        "correctOptionIndex": 1,
        "correctOptionText": "When an index contains logical or physical disorder",
        "difficulty": "hard",
        "explanation": "Index fragmentation occurs when the logical and/or physical order of the index pages doesn't match the logical ordering of the data. This happens over time as data is inserted, updated, and deleted, causing the index to become less efficient.",
        "hint": "This condition develops over time as data changes and affects index performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which SQL statement would you use to rebuild a fragmented index?",
        "options": ["UPDATE INDEX", "ALTER INDEX ... REBUILD", "OPTIMIZE INDEX", "REFRESH INDEX"],
        "correctOptionIndex": 1,
        "correctOptionText": "ALTER INDEX ... REBUILD",
        "difficulty": "medium",
        "explanation": "The ALTER INDEX ... REBUILD statement is used in many database systems to completely rebuild an index to eliminate fragmentation and restore optimal performance.",
        "hint": "This command creates a fresh copy of the index with optimized organization."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is a function-based index?",
        "options": ["An index created on a calculated column", "An index that uses a mathematical function", "An index created on the result of a function applied to column(s)", "An index that changes based on query patterns"],
        "correctOptionIndex": 2,
        "correctOptionText": "An index created on the result of a function applied to column(s)",
        "difficulty": "hard",
        "explanation": "A function-based index is built on the result of a function or expression applied to one or more columns, rather than on the column values themselves. This allows for indexing transformed data, such as UPPER(last_name) or date_column + 30.",
        "hint": "This special index type helps when you frequently query using transformed column values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which of the following is NOT a common query optimization technique?",
        "options": ["Using appropriate indexes", "Rewriting queries to use joins instead of subqueries", "Adding more tables to store denormalized data", "Using query hints to guide the optimizer"],
        "correctOptionIndex": 2,
        "correctOptionText": "Adding more tables to store denormalized data",
        "difficulty": "medium",
        "explanation": "While denormalization can be a valid optimization strategy in some cases, arbitrarily adding more tables is not a common or recommended query optimization technique. It increases complexity and can cause data consistency issues.",
        "hint": "This approach contradicts database normalization principles in most cases."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is cardinality in the context of database indexes?",
        "options": ["The number of columns in an index", "The number of indexes in a database", "The number of distinct values in an indexed column", "The maximum size of an index"],
        "correctOptionIndex": 2,
        "correctOptionText": "The number of distinct values in an indexed column",
        "difficulty": "medium",
        "explanation": "In database terminology, cardinality refers to the number of unique values in a column relative to the total number of rows. High cardinality (many unique values) generally makes a column a good candidate for indexing.",
        "hint": "This concept helps determine how selective an index will be."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Why might a database optimizer choose NOT to use an available index?",
        "options": ["The table is too small", "The selectivity of the index is too low", "The index was created recently", "The index has too many columns"],
        "correctOptionIndex": 1,
        "correctOptionText": "The selectivity of the index is too low",
        "difficulty": "hard",
        "explanation": "If an index has low selectivity (returns a large percentage of the table's rows), the optimizer might determine that a full table scan is more efficient than using the index, as the overhead of index lookups and random table access would exceed the benefit.",
        "hint": "This occurs when an index doesn't significantly narrow down the result set."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is a statistics histogram in database query optimization?",
        "options": ["A chart showing index usage over time", "A data structure that estimates the distribution of values in a column", "A tool for measuring query execution times", "A visualization of table relationships"],
        "correctOptionIndex": 1,
        "correctOptionText": "A data structure that estimates the distribution of values in a column",
        "difficulty": "hard",
        "explanation": "A statistics histogram is a data structure maintained by the database that captures the distribution of values in a column. The query optimizer uses this information to estimate the selectivity of predicates and choose efficient execution plans.",
        "hint": "This helps the optimizer make accurate cost estimates for different query plans."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which of the following queries would benefit most from an index on the 'hire_date' column?",
        "options": ["SELECT * FROM employees WHERE YEAR(hire_date) = 2020", "SELECT * FROM employees WHERE hire_date BETWEEN '2020-01-01' AND '2020-12-31'", "SELECT * FROM employees WHERE hire_date IS NULL", "All would benefit equally"],
        "correctOptionIndex": 1,
        "correctOptionText": "SELECT * FROM employees WHERE hire_date BETWEEN '2020-01-01' AND '2020-12-31'",
        "difficulty": "medium",
        "explanation": "The second query uses the hire_date column directly in a range condition, which can efficiently use an index. The first query applies a function (YEAR) to the column, which typically prevents index usage unless a function-based index exists.",
        "hint": "Consider which query allows direct use of the indexed column without transformations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is a partial (filtered) index?",
        "options": ["An index that only stores part of each column value", "An index that only covers some columns in a table", "An index that only includes rows that satisfy a predicate", "An index that has been partially corrupted"],
        "correctOptionIndex": 2,
        "correctOptionText": "An index that only includes rows that satisfy a predicate",
        "difficulty": "hard",
        "explanation": "A partial or filtered index only includes entries for rows that satisfy a specified predicate. This can improve performance and reduce storage requirements when queries frequently target a specific subset of data.",
        "hint": "This specialized index type focuses on a subset of rows based on a condition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is index selectivity?",
        "options": ["How often an index is chosen by the query optimizer", "The ratio of unique values to total rows in an indexed column", "The number of columns in a composite index", "The speed at which an index can be accessed"],
        "correctOptionIndex": 1,
        "correctOptionText": "The ratio of unique values to total rows in an indexed column",
        "difficulty": "medium",
        "explanation": "Index selectivity is the ratio of unique values to the total number of rows in an indexed column. High selectivity (many unique values relative to row count) generally makes an index more useful for query optimization.",
        "hint": "This metric helps determine how effectively an index can filter the data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which of the following operations would cause indexes to be updated?",
        "options": ["SELECT operations", "Committing a transaction", "INSERT, UPDATE, and DELETE operations", "Creating a view"],
        "correctOptionIndex": 2,
        "correctOptionText": "INSERT, UPDATE, and DELETE operations",
        "difficulty": "easy",
        "explanation": "Indexes must be maintained whenever the data in the indexed columns changes. Therefore, INSERT, UPDATE, and DELETE operations that affect indexed columns require index updates, which adds overhead to these operations.",
        "hint": "These operations modify the data that indexes track."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is a query hint?",
        "options": ["A comment that explains what a query does", "A suggestion to the user about how to improve a query", "A directive to the query optimizer about execution strategy", "An error message about a problematic query"],
        "correctOptionIndex": 2,
        "correctOptionText": "A directive to the query optimizer about execution strategy",
        "difficulty": "medium",
        "explanation": "Query hints are special instructions or directives included in a SQL statement that guide the query optimizer's decisions about how to execute the query, such as which indexes to use or join methods to employ.",
        "hint": "These are explicit instructions that can override the optimizer's default choices."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "In many database systems, what does the FORCE INDEX hint do?",
        "options": ["Creates a new index automatically", "Forces a full table scan", "Forces the optimizer to use a specific index", "Forces all queries to use indexes"],
        "correctOptionIndex": 2,
        "correctOptionText": "Forces the optimizer to use a specific index",
        "difficulty": "medium",
        "explanation": "The FORCE INDEX hint (or similar hints in different database systems) instructs the query optimizer to use a specific index, even if the optimizer would normally choose a different access method based on its cost calculations.",
        "hint": "This hint overrides the optimizer's judgment about index selection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is a common reason for updating database statistics?",
        "options": ["To correct errors in indexes", "To inform users about query performance", "To help the optimizer make better decisions", "To reduce database size"],
        "correctOptionIndex": 2,
        "correctOptionText": "To help the optimizer make better decisions",
        "difficulty": "medium",
        "explanation": "Database statistics provide the query optimizer with information about data distribution and cardinality. Updating statistics ensures the optimizer has accurate information to make optimal execution plan choices, especially after significant data changes.",
        "hint": "This maintenance task improves the accuracy of the optimizer's cost estimates."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which join algorithm typically performs best when joining a small table with a large table?",
        "options": ["Nested loops join", "Hash join", "Merge join", "Cross join"],
        "correctOptionIndex": 0,
        "correctOptionText": "Nested loops join",
        "difficulty": "hard",
        "explanation": "Nested loops join typically performs well when one table is small (the outer table) and can fit in memory, while the other table (the inner table) is large but has an index on the join column, allowing for efficient lookups.",
        "hint": "This algorithm works by scanning one table and looking up matching rows in the other."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "What is the main advantage of a hash index compared to a B-tree index?",
        "options": ["Better for range queries", "Faster for exact-match queries", "More efficient for sorting operations", "Smaller storage requirements"],
        "correctOptionIndex": 1,
        "correctOptionText": "Faster for exact-match queries",
        "difficulty": "hard",
        "explanation": "Hash indexes excel at equality comparisons (WHERE column = value) because they can locate values in constant time regardless of table size. However, they cannot support range queries or sorting operations like B-tree indexes can.",
        "hint": "This index type uses a hashing function to locate values very quickly in specific scenarios."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad87",
        "module": "Indexes & Query Optimization",
        "questionText": "Which of the following can help optimize a query that performs a GROUP BY operation?",
        "options": ["Adding an index on the GROUP BY columns", "Using DISTINCT instead of GROUP BY", "Always including HAVING clauses", "Removing all WHERE conditions"],
        "correctOptionIndex": 0,
        "correctOptionText": "Adding an index on the GROUP BY columns",
        "difficulty": "medium",
        "explanation": "Creating an index on the columns used in a GROUP BY clause can significantly improve query performance because the index already has the data pre-sorted, reducing the need for an expensive sort operation during grouping.",
        "hint": "This helps the database avoid sorting the data for grouping operations."
    },

    
    // SQL Security


  ];

  export default SQLQuestions;