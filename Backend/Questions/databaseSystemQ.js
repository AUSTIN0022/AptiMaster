const DBSysQuestions = [

    // Introduction to Databases
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database?",
        "options": [
            "A collection of unrelated data",
            "A structured set of data stored electronically",
            "A physical filing cabinet",
            "A computer program"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A structured set of data stored electronically",
        "difficulty": "easy",
        "explanation": "A database is an organized collection of structured information or data, typically stored electronically in a computer system.",
        "hint": "Think about how data is systematically organized and maintained."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "Which of the following is NOT a primary purpose of a database management system (DBMS)?",

        "options": [
            "Data storage",
            "Data retrieval",
            "Web page design",
            "Data security"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Web page design",
        "difficulty": "easy",
        "explanation": "A DBMS is responsible for data storage, retrieval, management, and security, but not web page design.",
        "hint": "Focus on data-related functions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is data redundancy?",
        "options": [
            "A method of data backup",
            "The unnecessary duplication of data",
            "A type of database encryption",
            "A way to improve data performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The unnecessary duplication of data",
        "difficulty": "medium",
        "explanation": "Data redundancy occurs when the same piece of data is stored in multiple places, which can lead to inconsistency and increased storage requirements.",
        "hint": "Consider what happens when the same information is repeated multiple times in different locations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What does ACID stand for in database transactions?",
        "options": [
            "Advanced Computational Information Design",
            "Atomicity, Consistency, Isolation, Durability",
            "Automated Critical Information Database",
            "Advanced Computational Integrated Design"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Atomicity, Consistency, Isolation, Durability",
        "difficulty": "hard",
        "explanation": "ACID is a set of properties that guarantee database transactions are processed reliably: Atomicity, Consistency, Isolation, and Durability.",
        "hint": "These properties ensure reliable processing of database transactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is the primary difference between a database and a spreadsheet?",
        "options": [
            "Spreadsheets can store more data",
            "Databases have more complex data relationships",
            "Spreadsheets are always digital",
            "Databases cannot perform calculations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Databases have more complex data relationships",
        "difficulty": "medium",
        "explanation": "Databases are designed to handle complex relationships between data, support multiple users, and provide advanced querying capabilities that spreadsheets cannot.",
        "hint": "Think about data structure and interconnectivity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a primary key in a database?",
        "options": [
            "The most important column in a table",
            "A key used to open database files",
            "A unique identifier for each record in a table",
            "A password for database access"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A unique identifier for each record in a table",
        "difficulty": "medium",
        "explanation": "A primary key is a column or set of columns that uniquely identifies each row/record in a database table.",
        "hint": "Each record must have a distinct identifier."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "Which type of database model stores data in tables with rows and columns?",
        "options": [
            "Hierarchical Database Model",
            "Network Database Model",
            "Object-Oriented Database Model",
            "Relational Database Model"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Relational Database Model",
        "difficulty": "easy",
        "explanation": "The Relational Database Model organizes data into tables (relations) with rows (records) and columns (attributes).",
        "hint": "Think about the most common database structure used today."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is data integrity?",
        "options": [
            "The speed of data retrieval",
            "The accuracy and consistency of data",
            "The amount of data stored",
            "The encryption of data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The accuracy and consistency of data",
        "difficulty": "medium",
        "explanation": "Data integrity ensures that data remains accurate, consistent, and unaltered throughout its lifecycle.",
        "hint": "Consider how data maintains its truthfulness and reliability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a foreign key?",
        "options": [
            "A key from another country",
            "A column that references the primary key of another table",
            "A secret key for database access",
            "A key used for data encryption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A column that references the primary key of another table",
        "difficulty": "medium",
        "explanation": "A foreign key is a column in a table that refers to the primary key of another table, establishing a link between two tables.",
        "hint": "Think about how tables can be connected in a relational database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What does a Database Management System (DBMS) do?",
        "options": [
            "Create websites",
            "Manage data storage, retrieval, and manipulation",
            "Write computer programs",
            "Design computer hardware"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Manage data storage, retrieval, and manipulation",
        "difficulty": "easy",
        "explanation": "A DBMS provides an interface for managing databases, handling data storage, retrieval, updates, and ensuring data integrity.",
        "hint": "Focus on data management capabilities."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is database normalization?",
        "options": [
            "Organizing data to reduce redundancy and improve data integrity",
            "Converting data to a standard format",
            "Securing database access",
            "Increasing database performance"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Organizing data to reduce redundancy and improve data integrity",
        "difficulty": "hard",
        "explanation": "Normalization is the process of structuring a relational database to minimize data redundancy and dependency by organizing data into separate tables.",
        "hint": "Consider how to efficiently organize data to prevent repetition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database schema?",
        "options": [
            "A backup of the database",
            "The physical storage of data",
            "The structural design of a database",
            "A database security protocol"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The structural design of a database",
        "difficulty": "medium",
        "explanation": "A database schema is the blueprint that defines the logical structure of a database, including tables, fields, relationships, and constraints.",
        "hint": "Think of it as the architectural plan for a database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database index?",
        "options": [
            "A list of all database contents",
            "A data structure that improves data retrieval speed",
            "A method of data encryption",
            "A backup mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A data structure that improves data retrieval speed",
        "difficulty": "hard",
        "explanation": "A database index is a data structure that allows faster retrieval of records by creating a separate lookup table with key values.",
        "hint": "Consider how a book's index helps you find information quickly."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database transaction?",
        "options": [
            "A financial payment",
            "A single database operation",
            "A complete and reliable unit of work",
            "A data backup process"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A complete and reliable unit of work",
        "difficulty": "medium",
        "explanation": "A database transaction is a sequence of database operations that are treated as a single, indivisible unit of work, ensuring data integrity.",
        "hint": "Think about a group of related database actions that must succeed or fail together."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What does SQL stand for?",
        "options": [
            "Structured Query Language",
            "Standard Query Logic",
            "System Query List",
            "Secure Query Language"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Structured Query Language",
        "difficulty": "easy",
        "explanation": "SQL (Structured Query Language) is a standard language for managing and manipulating relational databases.",
        "hint": "This is the standard language for database interactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database view?",
        "options": [
            "The visual representation of a database",
            "A virtual table based on the result of a SQL statement",
            "A database backup",
            "A data export method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A virtual table based on the result of a SQL statement",
        "difficulty": "medium",
        "explanation": "A database view is a virtual table derived from the result of a SQL statement, which can combine data from multiple tables.",
        "hint": "Think of it as a saved query that appears like a table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is database concurrency?",
        "options": [
            "Multiple users accessing the database simultaneously",
            "Backing up a database",
            "Encrypting database data",
            "Designing database architecture"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Multiple users accessing the database simultaneously",
        "difficulty": "hard",
        "explanation": "Database concurrency refers to the ability of a database management system to allow multiple users to access and modify data at the same time.",
        "hint": "Consider how multiple people can work with a database at once."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database cursor?",
        "options": [
            "A computer mouse pointer",
            "A database security feature",
            "A control structure that enables traversal of records in a database",
            "A method of data compression"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A control structure that enables traversal of records in a database",
        "difficulty": "hard",
        "explanation": "A database cursor is a control structure that allows traversal over the records in a database, enabling row-by-row processing.",
        "hint": "Think about how you can move through database records one at a time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is data warehousing?",
        "options": [
            "Storing physical goods",
            "A central repository for integrated data from multiple sources",
            "A method of data encryption",
            "A backup strategy"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A central repository for integrated data from multiple sources",
        "difficulty": "medium",
        "explanation": "Data warehousing is the process of collecting, storing, and managing large volumes of data from various sources for business intelligence and analytics.",
        "hint": "Consider a centralized storage system for business data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database trigger?",
        "options": [
            "A security alarm for databases",
            "A special type of stored procedure executed automatically",
            "A database backup mechanism",
            "A data encryption method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A special type of stored procedure executed automatically",
        "difficulty": "hard",
        "explanation": "A database trigger is a stored procedure that automatically executes when a specific event occurs in the database, such as an insert, update, or delete operation.",
        "hint": "Think about an automatic action that happens in response to a database event."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is denormalization?",
        "options": [
            "Removing data from a database",
            "The process of adding redundant data to improve read performance",
            "A method of data encryption",
            "Creating new database tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The process of adding redundant data to improve read performance",
        "difficulty": "hard",
        "explanation": "Denormalization is a strategy used to improve database read performance by adding redundant data to one or more tables.",
        "hint": "Consider a technique that deliberately introduces some data repetition for speed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is the purpose of a database backup?",
        "options": [
            "To increase database speed",
            "To protect against data loss",
            "To encrypt database contents",
            "To compress database files"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To protect against data loss",
        "difficulty": "easy",
        "explanation": "Database backups create copies of data to prevent loss in case of hardware failure, human error, or other unexpected events.",
        "hint": "Think about preserving important information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database constraint?",
        "options": [
            "A limitation on database performance",
            "A rule that enforces data integrity in a database",
            "A method of data compression",
            "A security protocol"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A rule that enforces data integrity in a database",
        "difficulty": "medium",
        "explanation": "Database constraints are rules applied to database columns to maintain data integrity, such as NOT NULL, UNIQUE, PRIMARY KEY, and FOREIGN KEY constraints.",
        "hint": "Consider rules that maintain the accuracy and consistency of data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a distributed database?",
        "options": [
            "A database spread across multiple geographic locations",
            "A backup database",
            "A database encryption method",
            "A temporary database storage"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A database spread across multiple geographic locations",
        "difficulty": "hard",
        "explanation": "A distributed database is a database that is stored across multiple computers or locations, allowing for improved performance, scalability, and reliability.",
        "hint": "Think about a database system not confined to a single physical location."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database connection pool?",
        "options": [
            "A method of data backup",
            "A group of database connections maintained for reuse",
            "A security feature",
            "A data compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A group of database connections maintained for reuse",
        "difficulty": "hard",
        "explanation": "A connection pool is a cache of database connections maintained so that the connections can be reused when future requests to the database are required.",
        "hint": "Consider a way to efficiently manage database access connections."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a stored procedure?",
        "options": [
            "A method of data storage",
            "A precompiled collection of SQL statements stored in the database",
            "A database backup method",
            "A data encryption technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A precompiled collection of SQL statements stored in the database",
        "difficulty": "medium",
        "explanation": "A stored procedure is a prepared SQL code that can be saved and reused, which can accept input parameters and return multiple values.",
        "hint": "Think about a reusable set of SQL commands."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is database sharding?",
        "options": [
            "A data backup method",
            "A process of dividing a database into smaller, more manageable pieces",
            "A security encryption technique",
            "A method of data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A process of dividing a database into smaller, more manageable pieces",
        "difficulty": "hard",
        "explanation": "Database sharding is a horizontal partitioning strategy that splits large databases into smaller, faster, more easily managed parts called shards.",
        "hint": "Consider a technique for managing very large databases by breaking them into smaller segments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is a database query?",
        "options": [
            "A database security check",
            "A request for data from a database",
            "A method of data backup",
            "A data compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A request for data from a database",
        "difficulty": "easy",
        "explanation": "A database query is a request to retrieve specific data from a database using a specific set of criteria, typically written in SQL.",
        "hint": "Think about how you ask a database for specific information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Introduction to Databases",
        "questionText": "What is data mining?",
        "options": [
            "Extracting physical minerals",
            "The process of discovering patterns in large data sets",
            "A database backup method",
            "A data encryption technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The process of discovering patterns in large data sets",
        "difficulty": "medium",
        "explanation": "Data mining is the process of analyzing large data sets to discover patterns, trends, and relationships that can provide valuable insights.",
        "hint": "Consider a technique for extracting knowledge from big data."
    },


    // Relational Database Model
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "Who is considered the father of the Relational Database Model?",
        "options": [
            "Bill Gates",
            "Larry Ellison",
            "Edgar F. Codd",
            "Tim Berners-Lee"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Edgar F. Codd",
        "difficulty": "medium",
        "explanation": "Edgar F. Codd, while working at IBM, proposed the relational database model in 1970, revolutionizing how data is stored and managed.",
        "hint": "This computer scientist worked at IBM and developed a groundbreaking database concept in the 1970s."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a relation in the Relational Database Model?",
        "options": [
            "A connection between two people",
            "A table with rows and columns",
            "A database security mechanism",
            "A method of data encryption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A table with rows and columns",
        "difficulty": "easy",
        "explanation": "In the Relational Database Model, a relation is a table composed of rows (tuples) and columns (attributes) that represents a specific entity or relationship.",
        "hint": "Think about a structured way of organizing data in a two-dimensional format."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a tuple in a relational database?",
        "options": [
            "A database backup method",
            "A single row in a table",
            "A column header",
            "A database connection"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A single row in a table",
        "difficulty": "easy",
        "explanation": "A tuple is a single row in a relational database table, representing a complete set of data for a specific record.",
        "hint": "Consider the horizontal entry in a database table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of a candidate key?",
        "options": [
            "To encrypt database data",
            "To uniquely identify a tuple in a relation",
            "To create database backups",
            "To compress data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To uniquely identify a tuple in a relation",
        "difficulty": "medium",
        "explanation": "A candidate key is a column or set of columns that can uniquely identify a tuple in a relation, from which a primary key can be selected.",
        "hint": "Think about a potential unique identifier for a record."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What does the term 'cardinality' refer to in a relational database?",
        "options": [
            "The number of tables in a database",
            "The number of rows in a table",
            "The number of columns in a table",
            "The number of relationships between tables"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "The number of relationships between tables",
        "difficulty": "hard",
        "explanation": "Cardinality describes the numerical relationships between tables, such as one-to-one, one-to-many, or many-to-many relationships.",
        "hint": "Consider how different tables are connected to each other."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a domain in the Relational Database Model?",
        "options": [
            "A geographic area",
            "A set of possible values for an attribute",
            "A database security zone",
            "A type of database backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A set of possible values for an attribute",
        "difficulty": "medium",
        "explanation": "A domain is the set of all possible values that an attribute can have, defining the data type and constraints for a specific column.",
        "hint": "Think about the range of acceptable values for a particular piece of data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the difference between a superkey and a candidate key?",
        "options": [
            "There is no difference",
            "A superkey can contain additional attributes that are not necessary for unique identification",
            "A candidate key is always a primary key",
            "A superkey is always a foreign key"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A superkey can contain additional attributes that are not necessary for unique identification",
        "difficulty": "hard",
        "explanation": "A superkey is a set of attributes that can uniquely identify a tuple, which may include additional attributes beyond those strictly necessary for unique identification.",
        "hint": "Consider a key that might have more information than minimally required for identification."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is referential integrity?",
        "options": [
            "A method of data encryption",
            "A rule ensuring that references between tables remain consistent",
            "A database backup technique",
            "A method of data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A rule ensuring that references between tables remain consistent",
        "difficulty": "medium",
        "explanation": "Referential integrity is a database constraint that ensures that relationships between tables remain consistent by preventing actions that would destroy links between tables.",
        "hint": "Think about maintaining the validity of relationships between different database tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a natural join in relational algebra?",
        "options": [
            "A join that connects all tables in a database",
            "A join that combines tables based on matching column values",
            "A method of data backup",
            "A database security technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A join that combines tables based on matching column values",
        "difficulty": "hard",
        "explanation": "A natural join combines two tables based on columns with the same name and compatible data types, eliminating duplicate columns.",
        "hint": "Consider a join operation that automatically matches columns with identical names."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of the Relational Algebra in database theory?",
        "options": [
            "To encrypt database data",
            "To provide a theoretical foundation for database operations",
            "To create database backups",
            "To design user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide a theoretical foundation for database operations",
        "difficulty": "hard",
        "explanation": "Relational Algebra is a theoretical foundation for database operations, providing a set of operations to manipulate relations (tables) mathematically.",
        "hint": "Think about a mathematical approach to database data manipulation."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What does the term 'degree' refer to in a relational database?",
        "options": [
            "The number of rows in a table",
            "The number of columns in a table",
            "The complexity of a database",
            "The number of relationships between tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The number of columns in a table",
        "difficulty": "medium",
        "explanation": "The degree of a relation (table) is the number of attributes (columns) in that relation.",
        "hint": "Consider the vertical structure of a database table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of a foreign key?",
        "options": [
            "To encrypt database data",
            "To establish a link between two tables",
            "To create database backups",
            "To compress data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To establish a link between two tables",
        "difficulty": "easy",
        "explanation": "A foreign key is a column that refers to the primary key of another table, creating a relationship between two tables.",
        "hint": "Think about how different tables can be connected in a relational database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the difference between a relation and a relationship in a relational database?",
        "options": [
            "There is no difference",
            "A relation is a table, while a relationship describes how tables are connected",
            "A relation is always a primary key",
            "A relationship is a type of database backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A relation is a table, while a relationship describes how tables are connected",
        "difficulty": "medium",
        "explanation": "In the Relational Database Model, a relation is a table, while a relationship describes the logical connection between different relations.",
        "hint": "Consider the structural and connective aspects of database design."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the Armstrong's Axioms used for in relational database theory?",
        "options": [
            "Database encryption",
            "Deriving functional dependencies",
            "Creating database backups",
            "Designing user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Deriving functional dependencies",
        "difficulty": "hard",
        "explanation": "Armstrong's Axioms are a set of inference rules used to derive all functional dependencies in a relational database schema.",
        "hint": "Think about a mathematical approach to understanding data relationships."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a functional dependency in a relational database?",
        "options": [
            "A method of data backup",
            "A relationship where one attribute determines the value of another",
            "A database security technique",
            "A method of data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A relationship where one attribute determines the value of another",
        "difficulty": "hard",
        "explanation": "A functional dependency is a constraint between two sets of attributes in a relation, where the value of one attribute uniquely determines the value of another.",
        "hint": "Consider how the value of one column can predict the value of another."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of normalization in the Relational Database Model?",
        "options": [
            "To encrypt database data",
            "To reduce data redundancy and improve data integrity",
            "To create database backups",
            "To design user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To reduce data redundancy and improve data integrity",
        "difficulty": "medium",
        "explanation": "Normalization is the process of organizing data to reduce redundancy and dependency by dividing larger tables into smaller, more focused tables.",
        "hint": "Think about efficiently organizing data to prevent unnecessary repetition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the difference between a weak entity and a strong entity?",
        "options": [
            "There is no difference",
            "A weak entity depends on a strong entity for its existence",
            "A strong entity is always a primary key",
            "A weak entity is a type of database backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A weak entity depends on a strong entity for its existence",
        "difficulty": "hard",
        "explanation": "A weak entity is an entity that cannot exist without a strong entity. It depends on the strong entity for its complete identification.",
        "hint": "Consider an entity that requires another entity to have meaning or exist."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of the projection operation in relational algebra?",
        "options": [
            "To encrypt database data",
            "To select specific columns from a relation",
            "To create database backups",
            "To design user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To select specific columns from a relation",
        "difficulty": "hard",
        "explanation": "Projection is a relational algebra operation that selects specific columns from a relation, creating a new relation with only the chosen attributes.",
        "hint": "Think about extracting specific columns from a table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the difference between a clustered and a non-clustered index?",
        "options": [
            "There is no difference",
            "A clustered index determines the physical order of data storage",
            "A non-clustered index is always faster",
            "A clustered index is a type of database backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A clustered index determines the physical order of data storage",
        "difficulty": "hard",
        "explanation": "A clustered index determines the physical order of data in a table, while a non-clustered index creates a separate structure that references the original data.",
        "hint": "Consider how data is physically organized in storage."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a view in a relational database?",
        "options": [
            "A database backup method",
            "A virtual table based on the result of a SELECT statement",
            "A database security mechanism",
            "A method of data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A virtual table based on the result of a SELECT statement",
        "difficulty": "medium",
        "explanation": "A view is a virtual table derived from the result of a SELECT statement, which can combine data from multiple tables without storing the data physically.",
        "hint": "Think about a saved query that appears like a table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of the selection operation in relational algebra?",
        "options": [
            "To encrypt database data",
            "To filter rows based on a specific condition",
            "To create database backups",
            "To design user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To filter rows based on a specific condition",
        "difficulty": "hard",
        "explanation": "Selection is a relational algebra operation that filters rows in a relation based on a specified condition, creating a new relation with only the rows that meet the condition.",
        "hint": "Consider filtering data based on specific criteria."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a transitive dependency?",
        "options": [
            "A method of data backup",
            "A functional dependency where one non-prime attribute determines another non-prime attribute",
            "A database security technique",
            "A method of data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A functional dependency where one non-prime attribute determines another non-prime attribute",
        "difficulty": "hard",
        "explanation": "A transitive dependency occurs when a non-prime attribute is functionally dependent on another non-prime attribute through a third attribute.",
        "hint": "Consider a chain of attribute dependencies."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of the Cartesian product in relational algebra?",
        "options": [
            "To encrypt database data",
            "To combine every row of one relation with every row of another relation",
            "To create database backups",
            "To design user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To combine every row of one relation with every row of another relation",
        "difficulty": "hard",
        "explanation": "The Cartesian product (or cross join) creates a new relation by combining every row of one relation with every row of another relation, resulting in a potentially very large relation.",
        "hint": "Think about creating all possible combinations between two tables."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a prime attribute in a relational database?",
        "options": [
            "The most important column in a table",
            "An attribute that is part of any candidate key",
            "A database security attribute",
            "A method of data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An attribute that is part of any candidate key",
        "difficulty": "hard",
        "explanation": "A prime attribute is an attribute that is part of any candidate key in a relation, distinguishing it from non-prime attributes.",
        "hint": "Consider attributes that are involved in unique identification."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a surrogate key?",
        "options": [
            "A database backup method",
            "An artificial key generated by the database system",
            "A database security mechanism",
            "A method of data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An artificial key generated by the database system",
        "difficulty": "medium",
        "explanation": "A surrogate key is an artificial key generated by the database system, typically an auto-incrementing integer, used as a primary key.",
        "hint": "Think about a unique identifier created automatically by the database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of the division operation in relational algebra?",
        "options": [
            "To encrypt database data",
            "To find tuples that are associated with all values in another relation",
            "To create database backups",
            "To design user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To find tuples that are associated with all values in another relation",
        "difficulty": "hard",
        "explanation": "The division operation in relational algebra finds tuples in one relation that are associated with all values in another relation.",
        "hint": "Consider finding complete matches across multiple relations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is a candidate key in a relational database?",
        "options": [
            "A potential primary key that can uniquely identify a tuple",
            "A database backup method",
            "A database security technique",
            "A method of data compression"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A potential primary key that can uniquely identify a tuple",
        "difficulty": "medium",
        "explanation": "A candidate key is a column or set of columns that can potentially serve as a primary key, uniquely identifying each tuple in a relation.",
        "hint": "Think about a column or set of columns that could be used to uniquely identify records."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of the rename operation in relational algebra?",
        "options": [
            "To encrypt database data",
            "To change the name of a relation or its attributes",
            "To create database backups",
            "To design user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To change the name of a relation or its attributes",
        "difficulty": "hard",
        "explanation": "The rename operation in relational algebra allows changing the name of a relation or its attributes, facilitating complex query operations.",
        "hint": "Consider the ability to modify relation or attribute names during operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the difference between a candidate key and a primary key?",
        "options": [
            "There is no difference",
            "A primary key is selected from candidate keys as the main identifier",
            "A candidate key is always a foreign key",
            "A primary key is a type of database backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A primary key is selected from candidate keys as the main identifier",
        "difficulty": "medium",
        "explanation": "A candidate key is a potential unique identifier, while a primary key is the specific candidate key chosen to uniquely identify records in a relation.",
        "hint": "Consider the selection process for the main identifier in a table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Relational Database Model",
        "questionText": "What is the purpose of the outer join in relational algebra?",
        "options": [
            "To encrypt database data",
            "To combine tables while preserving unmatched rows",
            "To create database backups",
            "To design user interfaces"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To combine tables while preserving unmatched rows",
        "difficulty": "hard",
        "explanation": "An outer join combines tables while preserving rows from one or both tables that do not have matching rows in the other table, filling with NULL values where no match exists.",
        "hint": "Think about joining tables while keeping all rows, even without matches."
    },

    // Entity-Relationship Model
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is an entity in the ER model?",
        "options": [
            "A physical object in a database",
            "A real-world object or concept that can be distinctly identified",
            "A table in a relational database",
            "A database attribute"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A real-world object or concept that can be distinctly identified",
        "difficulty": "easy",
        "explanation": "An entity represents a distinct object or concept in the real world that can be uniquely identified, such as a person, place, event, or thing.",
        "hint": "Think of something unique that can be described with attributes"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "Which of the following is NOT a valid cardinality ratio in an ER diagram?",
        "options": [
            "One-to-One (1:1)",
            "Many-to-Many (M:N)",
            "One-to-Many (1:M)",
            "Many-to-One-to-Many (M:1:M)"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Many-to-One-to-Many (M:1:M)",
        "difficulty": "medium",
        "explanation": "Standard cardinality ratios are One-to-One, One-to-Many, and Many-to-Many. The option 'Many-to-One-to-Many' is not a standard cardinality representation.",
        "hint": "Think about how relationships are typically defined between entities"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does a weak entity depend on?",
        "options": [
            "Primary key",
            "Foreign key",
            "Identifying entity",
            "Database index"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Identifying entity",
        "difficulty": "medium",
        "explanation": "A weak entity cannot be uniquely identified by its own attributes and depends on an identifying entity (owner entity) for its existence.",
        "hint": "Consider an entity that cannot exist independently"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does a multivalued attribute represent?",
        "options": [
            "An attribute with multiple possible values",
            "An attribute that can have only one value",
            "A composite attribute",
            "A derived attribute"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "An attribute with multiple possible values",
        "difficulty": "easy",
        "explanation": "A multivalued attribute can have multiple values for a single entity, such as a person having multiple phone numbers.",
        "hint": "Think of scenarios where one attribute can have more than one value"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "In an ER diagram, what does a diamond represent?",
        "options": [
            "Entity",
            "Attribute",
            "Relationship",
            "Primary key"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Relationship",
        "difficulty": "easy",
        "explanation": "In Chen's notation for ER diagrams, a diamond (rhombus) represents a relationship between two or more entities.",
        "hint": "It connects different entities together"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is a composite attribute?",
        "options": [
            "An attribute with multiple values",
            "An attribute composed of multiple sub-attributes",
            "A derived attribute",
            "A key attribute"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An attribute composed of multiple sub-attributes",
        "difficulty": "medium",
        "explanation": "A composite attribute can be broken down into smaller sub-attributes. For example, an 'Address' attribute might contain 'Street', 'City', and 'Zip Code'.",
        "hint": "Think of an attribute that can be further divided"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does a total participation constraint indicate?",
        "options": [
            "Every entity must participate in the relationship",
            "Some entities can choose not to participate",
            "Entities can have multiple relationships",
            "Relationships can have attributes"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Every entity must participate in the relationship",
        "difficulty": "medium",
        "explanation": "Total participation (double line) means every instance of the entity must participate in the relationship. Not all entities have total participation.",
        "hint": "Consider a scenario where participation is mandatory"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is an identifying relationship?",
        "options": [
            "A relationship with a primary key",
            "A relationship that defines a weak entity's existence",
            "A relationship between strong entities",
            "A recursive relationship"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A relationship that defines a weak entity's existence",
        "difficulty": "hard",
        "explanation": "An identifying relationship connects a weak entity to its identifying (owner) entity, and is crucial for the weak entity's identification.",
        "hint": "Think about dependencies between entities"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does a derived attribute represent?",
        "options": [
            "An attribute that can be calculated from other attributes",
            "A multivalued attribute",
            "A composite attribute",
            "A key attribute"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "An attribute that can be calculated from other attributes",
        "difficulty": "medium",
        "explanation": "A derived attribute's value can be computed from other attributes, rather than being stored directly. For example, 'Age' can be derived from 'Birth Date'.",
        "hint": "Think of an attribute that can be mathematically computed"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is a recursive relationship?",
        "options": [
            "A relationship between different entity types",
            "A relationship where an entity is related to itself",
            "A relationship with multiple cardinalities",
            "A weak entity relationship"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A relationship where an entity is related to itself",
        "difficulty": "hard",
        "explanation": "A recursive relationship occurs when an entity type has a relationship with itself. An example is an 'Employee' who reports to another 'Employee'.",
        "hint": "Consider an entity type that can be related to its own instances"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does a key attribute typically represent?",
        "options": [
            "An attribute that cannot be null",
            "An attribute that uniquely identifies an entity",
            "An attribute with multiple values",
            "A composite attribute"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An attribute that uniquely identifies an entity",
        "difficulty": "easy",
        "explanation": "A key attribute (often underlined in ER diagrams) is used to uniquely identify each instance of an entity.",
        "hint": "Think of something that makes each entity instance distinct"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "In a One-to-Many relationship, how many entities on one side can relate to multiple entities on the other side?",
        "options": [
            "Zero entities",
            "One entity",
            "Multiple entities",
            "It depends on the specific relationship"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "One entity",
        "difficulty": "medium",
        "explanation": "In a One-to-Many relationship, one entity on one side can be related to multiple entities on the other side. For example, one Department can have many Employees.",
        "hint": "Consider a typical organizational structure"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is the purpose of an ER diagram?",
        "options": [
            "To design physical database schema",
            "To create logical data models",
            "To visualize conceptual data structure and relationships",
            "To implement database queries"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To visualize conceptual data structure and relationships",
        "difficulty": "easy",
        "explanation": "An ER diagram helps in conceptually representing data objects, their attributes, and the relationships between them before actual database implementation.",
        "hint": "Think of it as a blueprint for database design"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does participation constraint describe?",
        "options": [
            "Number of relationships an entity can have",
            "Whether an entity must or can participate in a relationship",
            "The types of attributes an entity can have",
            "How entities are linked in a database"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Whether an entity must or can participate in a relationship",
        "difficulty": "medium",
        "explanation": "Participation constraint defines whether every entity instance must participate in a relationship (total participation) or participation is optional (partial participation).",
        "hint": "Consider mandatory vs. optional involvement"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What characterizes a Many-to-Many relationship?",
        "options": [
            "One entity can relate to multiple entities on both sides",
            "Entities can only have one relationship",
            "Relationships are always unidirectional",
            "Only one entity type is involved"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "One entity can relate to multiple entities on both sides",
        "difficulty": "medium",
        "explanation": "In a Many-to-Many relationship, entities on both sides can be related to multiple entities on the other side. For example, Students can enroll in multiple Courses, and Courses can have multiple Students.",
        "hint": "Think of complex, interconnected relationships"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is a ternary relationship?",
        "options": [
            "A relationship between three weak entities",
            "A relationship involving three different entity types",
            "A relationship with three cardinality ratios",
            "A recursive relationship with three participants"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A relationship involving three different entity types",
        "difficulty": "hard",
        "explanation": "A ternary relationship connects three different entity types simultaneously, representing a complex interaction that cannot be adequately captured by binary relationships.",
        "hint": "Consider complex scenarios involving multiple entity types"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What distinguishes a strong entity from a weak entity?",
        "options": [
            "Strong entities have more attributes",
            "Strong entities can be uniquely identified by their own attributes",
            "Weak entities have more relationships",
            "Strong entities always have total participation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Strong entities can be uniquely identified by their own attributes",
        "difficulty": "medium",
        "explanation": "A strong entity has a primary key and can be uniquely identified independently, while a weak entity depends on another entity for its identification.",
        "hint": "Think about self-sufficiency in identification"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does the Chen notation primarily use for representing entities?",
        "options": [
            "Rectangles",
            "Circles",
            "Ellipses",
            "Triangles"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Rectangles",
        "difficulty": "easy",
        "explanation": "In Peter Chen's original ER diagram notation, entities are represented by rectangles.",
        "hint": "Think of the most basic geometric shape used in the notation"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is an associative entity (junction entity)?",
        "options": [
            "An entity that always has weak entity status",
            "An entity created to resolve Many-to-Many relationships",
            "A recursive relationship entity",
            "A derived entity type"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An entity created to resolve Many-to-Many relationships",
        "difficulty": "hard",
        "explanation": "An associative entity (also called a junction or linking entity) is created to break down a Many-to-Many relationship into two One-to-Many relationships in the relational model.",
        "hint": "Consider how complex relationships are simplified in database design"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does a partial participation constraint indicate?",
        "options": [
            "Some entities may not participate in the relationship",
            "Entities must always participate",
            "Relationships are optional",
            "Only weak entities are involved"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Some entities may not participate in the relationship",
        "difficulty": "medium",
        "explanation": "Partial participation means that not all entities of an entity type must participate in a relationship. Some instances can exist without being involved in the specific relationship.",
        "hint": "Think of optional involvement"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is the primary purpose of identifying the cardinality of a relationship?",
        "options": [
            "To determine the database's physical storage",
            "To understand the interaction between entities",
            "To create database indexes",
            "To optimize query performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To understand the interaction between entities",
        "difficulty": "medium",
        "explanation": "Cardinality helps in understanding how entities are related and the numerical constraints of those relationships, which is crucial for accurate data modeling.",
        "hint": "Consider how entities connect and interact"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does a relationship attribute represent?",
        "options": [
            "An attribute of an entity",
            "An attribute specific to the relationship between entities",
            "A key attribute in the relationship",
            "A derived relationship property"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An attribute specific to the relationship between entities",
        "difficulty": "hard",
        "explanation": "A relationship attribute provides additional information about the relationship itself, not belonging to either participating entity. For example, in an 'Enrollment' relationship between Student and Course, 'Grade' could be a relationship attribute.",
        "hint": "Think of properties that describe the interaction between entities"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "Which symbol typically represents a key attribute in Chen's notation?",
        "options": [
            "Bold text",
            "Underline",
            "Italics",
            "Double border"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Underline",
        "difficulty": "easy",
        "explanation": "In Chen's ER diagram notation, a key attribute is represented by an underline beneath the attribute name.",
        "hint": "Think of the most common way to highlight something as special"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "In the context of ER modeling, what does 'participation' mean?",
        "options": [
            "The number of relationships an entity can have",
            "Whether an entity type must or can participate in a specific relationship",
            "The complexity of the relationship",
            "The primary key of the relationship"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Whether an entity type must or can participate in a specific relationship",
        "difficulty": "medium",
        "explanation": "Participation describes the obligation of an entity to take part in a relationship. It can be total (mandatory) or partial (optional).",
        "hint": "Consider mandatory vs. optional involvement in a relationship"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What problem does an associative entity solve in database design?",
        "options": [
            "Normalization of data",
            "Resolving Many-to-Many relationships",
            "Creating complex queries",
            "Implementing data validation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Resolving Many-to-Many relationships",
        "difficulty": "hard",
        "explanation": "An associative entity allows the conversion of a Many-to-Many relationship into two One-to-Many relationships, which is more easily implemented in a relational database.",
        "hint": "Think about how complex relationships are simplified"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What characterizes a One-to-One relationship?",
        "options": [
            "One entity can relate to multiple entities",
            "Each entity on one side relates to at most one entity on the other side",
            "Entities can have unlimited relationships",
            "Relationships are always bidirectional"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Each entity on one side relates to at most one entity on the other side",
        "difficulty": "medium",
        "explanation": "In a One-to-One relationship, an entity instance on one side can be related to at most one entity instance on the other side. An example is a Person and their Passport.",
        "hint": "Consider exclusive, singular connections"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What is the primary difference between total and partial participation?",
        "options": [
            "Total participation requires more attributes",
            "Total participation means every entity must participate in the relationship",
            "Partial participation has more complex relationships",
            "Total participation only applies to strong entities"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Total participation means every entity must participate in the relationship",
        "difficulty": "medium",
        "explanation": "Total participation means that every instance of an entity type must participate in the relationship, while partial participation allows some instances to not be involved.",
        "hint": "Think about mandatory vs. optional involvement"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Entity-Relationship Model",
        "questionText": "What does a composite key represent?",
        "options": [
            "A key formed from multiple single attributes",
            "A primary key with multiple values",
            "A key that changes frequently",
            "A weak entity's identification mechanism"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A key formed from multiple single attributes",
        "difficulty": "hard",
        "explanation": "A composite key is a key that consists of two or more attributes combined to uniquely identify an entity when no single attribute can serve as a unique identifier.",
        "hint": "Consider scenarios requiring multiple attributes for unique identification"
    },

    // Normalization
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the primary goal of database normalization?",
        "options": [
            "To increase database performance",
            "To minimize data redundancy and dependency",
            "To create more complex database structures",
            "To limit the number of tables in a database"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To minimize data redundancy and dependency",
        "difficulty": "easy",
        "explanation": "Normalization aims to organize data to reduce redundancy and improve data integrity by breaking down larger tables into smaller, more focused tables.",
        "hint": "Think about creating a more efficient and organized data structure"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the lowest level of normalization called?",
        "options": [
            "Zero Normal Form (0NF)",
            "First Normal Form (1NF)",
            "Second Normal Form (2NF)",
            "Base Normal Form"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Zero Normal Form (0NF)",
        "difficulty": "easy",
        "explanation": "Zero Normal Form (0NF) represents an unnormalized table with no specific structure or removal of redundancies.",
        "hint": "Think of the most basic, unorganized data representation"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the primary characteristic of First Normal Form (1NF)?",
        "options": [
            "No repeating groups of columns",
            "All non-key attributes are fully functionally dependent on the primary key",
            "No partial dependencies exist",
            "No transitive dependencies exist"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "No repeating groups of columns",
        "difficulty": "medium",
        "explanation": "In 1NF, each column contains atomic (indivisible) values, and there are no repeating groups of columns. Each intersection of a row and column contains a single value.",
        "hint": "Ensure each cell contains a single, unique value"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What defines a functional dependency?",
        "options": [
            "A relationship between tables",
            "A relationship where one attribute determines the value of another",
            "A way to create primary keys",
            "A method of joining tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A relationship where one attribute determines the value of another",
        "difficulty": "medium",
        "explanation": "Functional dependency occurs when the value of one attribute (or set of attributes) uniquely determines the value of another attribute.",
        "hint": "Think of a deterministic relationship between attributes"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is a partial dependency?",
"options": [
            "A dependency involving multiple tables",
            "A dependency where an attribute depends on only part of a composite key",
            "A complete functional dependency",
            "A dependency between primary keys"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A dependency where an attribute depends on only part of a composite key",
        "difficulty": "hard",
        "explanation": "A partial dependency occurs when a non-key attribute depends on only part of a composite key, violating Second Normal Form (2NF).",
        "hint": "Consider scenarios with composite keys and their subset dependencies"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the main requirement for Second Normal Form (2NF)?",
        "options": [
            "No repeating groups",
            "All non-key attributes must be fully functionally dependent on the primary key",
            "No transitive dependencies",
            "Atomic values in each column"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "All non-key attributes must be fully functionally dependent on the primary key",
        "difficulty": "hard",
        "explanation": "In 2NF, the table must be in 1NF, and all non-key attributes must depend on the entire primary key, not just part of it.",
        "hint": "Consider complete dependency of attributes on the primary key"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is a transitive dependency?",
        "options": [
            "A dependency between primary keys",
            "A dependency where a non-key attribute depends on another non-key attribute",
            "A direct functional dependency",
            "A dependency involving multiple tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A dependency where a non-key attribute depends on another non-key attribute",
        "difficulty": "hard",
        "explanation": "A transitive dependency occurs when a non-key attribute depends on another non-key attribute, violating Third Normal Form (3NF).",
        "hint": "Think of indirect dependencies between attributes"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What are the key requirements for Third Normal Form (3NF)?",
        "options": [
            "No repeating groups and atomic values",
            "No partial dependencies and full functional dependency",
            "No transitive dependencies and all non-key attributes depend directly on the primary key",
            "Minimizing the number of tables"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "No transitive dependencies and all non-key attributes depend directly on the primary key",
        "difficulty": "hard",
        "explanation": "3NF requires the table to be in 2NF and have no transitive dependencies, ensuring all non-key attributes depend directly on the primary key.",
        "hint": "Eliminate indirect dependencies between attributes"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is Boyce-Codd Normal Form (BCNF)?",
        "options": [
            "A stricter version of 2NF",
            "A relaxed version of 3NF",
            "A more rigorous version of 3NF that addresses certain dependency issues",
            "An alternative to normalization"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A more rigorous version of 3NF that addresses certain dependency issues",
        "difficulty": "hard",
        "explanation": "BCNF is a stronger version of 3NF that eliminates more anomalies by ensuring that every determinant is a candidate key.",
        "hint": "Consider a more strict approach to functional dependencies"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What problem does normalization help solve in database design?",
        "options": [
            "Increasing database storage requirements",
            "Data redundancy and update anomalies",
            "Improving query complexity",
            "Limiting the number of tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data redundancy and update anomalies",
        "difficulty": "easy",
        "explanation": "Normalization helps reduce data redundancy, minimize update anomalies, and improve data integrity by organizing data into more focused tables.",
        "hint": "Think about maintaining consistent and efficient data storage"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is an update anomaly in database context?",
        "options": [
            "A problem with database performance",
            "An issue where updating data in one place requires multiple updates",
            "A security vulnerability",
            "A query optimization problem"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An issue where updating data in one place requires multiple updates",
        "difficulty": "medium",
        "explanation": "An update anomaly occurs when updating a piece of data requires multiple changes across different rows or tables due to data redundancy.",
        "hint": "Consider scenarios where data duplication complicates updates"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is an insertion anomaly?",
        "options": [
            "A problem with adding new records to a database",
            "An issue with primary key generation",
            "A constraint violation",
            "A performance limitation"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A problem with adding new records to a database",
        "difficulty": "medium",
        "explanation": "An insertion anomaly occurs when it's impossible to add a new record to a table without the presence of other related data.",
        "hint": "Think about difficulties in inserting new data due to table design"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is a deletion anomaly?",
        "options": [
            "An error in deleting database records",
            "Losing important information when deleting a record",
            "A constraint violation during deletion",
            "A performance issue with delete operations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Losing important information when deleting a record",
        "difficulty": "medium",
        "explanation": "A deletion anomaly happens when deleting a record results in the unintentional loss of other important information stored in the same table.",
        "hint": "Consider scenarios where deleting one record removes unrelated data"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What does the term 'candidate key' mean?",
        "options": [
            "A potential primary key that could uniquely identify a record",
            "A key used for indexing",
            "A foreign key in another table",
            "A composite key"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A potential primary key that could uniquely identify a record",
        "difficulty": "medium",
        "explanation": "A candidate key is a column or set of columns that can uniquely identify a record and could potentially serve as a primary key.",
        "hint": "Think of alternative ways to uniquely identify records"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the primary difference between a candidate key and a primary key?",
        "options": [
            "Candidate keys cannot be used for identification",
            "A primary key is selected from candidate keys",
            "Candidate keys are always composite",
            "Primary keys always have multiple columns"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A primary key is selected from candidate keys",
        "difficulty": "medium",
        "explanation": "A primary key is chosen from the set of candidate keys as the main unique identifier for a table, while candidate keys are potential unique identifiers.",
        "hint": "Consider how one key is selected from multiple options"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the purpose of creating a surrogate key?",
        "options": [
            "To replace all natural keys",
            "To provide a unique identifier when no natural key exists",
            "To improve database performance",
            "To create more complex primary keys"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide a unique identifier when no natural key exists",
        "difficulty": "medium",
        "explanation": "A surrogate key is an artificial key added to a table when no natural key can uniquely and consistently identify records.",
        "hint": "Think of a synthetic identifier for unique record tracking"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What characterizes a natural key?",
        "options": [
            "An artificially created key",
            "A key based on existing data attributes",
            "A key that changes frequently",
            "A key used only in complex databases"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A key based on existing data attributes",
        "difficulty": "medium",
        "explanation": "A natural key is a key derived from existing data attributes that can uniquely identify a record without additional synthetic identifiers.",
        "hint": "Consider keys that emerge from the data itself"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the main goal of Fourth Normal Form (4NF)?",
        "options": [
            "Eliminating all possible dependencies",
            "Addressing multi-valued dependencies",
            "Reducing table complexity",
            "Minimizing storage requirements"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Addressing multi-valued dependencies",
        "difficulty": "hard",
        "explanation": "Fourth Normal Form (4NF) addresses multi-valued dependencies, ensuring that no table contains two or more independent multi-valued facts about an entity.",
        "hint": "Consider scenarios with multiple independent multi-valued attributes"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is a multi-valued dependency?",
        "options": [
            "A dependency involving multiple tables",
            "A relationship where one attribute determines multiple values of another",
            "A complex functional dependency",
            "A dependency between non-key attributes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A relationship where one attribute determines multiple values of another",
        "difficulty": "hard",
        "explanation": "A multi-valued dependency occurs when one attribute determines a set of values for another attribute, independent of other attributes.",
        "hint": "Think of scenarios with multiple independent values"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What problem does Fifth Normal Form (5NF) address?",
        "options": [
            "Multi-valued dependencies",
            "Join dependencies",
            "Transitive dependencies",
            "Partial dependencies"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Join dependencies",
        "difficulty": "hard",
        "explanation": "Fifth Normal Form (5NF), also called Project-Join Normal Form, addresses join dependencies by ensuring that every join dependency in a table is implied by the candidate keys.",
        "hint": "Consider complex scenarios involving table decomposition"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is a canonical cover in normalization?",
        "options": [
            "A set of all possible keys in a table",
            "A minimal set of functional dependencies",
            "A complete normalization strategy",
            "A method of key generation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A minimal set of functional dependencies",
        "difficulty": "hard",
        "explanation": "A canonical cover is the minimal set of functional dependencies that is equivalent to the original set of functional dependencies, with redundant dependencies removed.",
        "hint": "Think of simplifying and reducing functional dependencies"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the primary benefit of normalization beyond reducing redundancy?",
        "options": [
            "Increasing database complexity",
            "Improving data integrity and reducing anomalies",
            "Limiting query capabilities",
            "Reducing database performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improving data integrity and reducing anomalies",
        "difficulty": "easy",
        "explanation": "Normalization helps maintain data integrity by reducing update, insertion, and deletion anomalies, ensuring consistent and accurate data storage.",
        "hint": "Consider the long-term maintenance of database quality"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What does denormalization typically involve?",
        "options": [
            "Completely removing normalization",
            "Intentionally introducing redundancy for performance",
            "Eliminating all functional dependencies",
            "Reducing the number of tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Intentionally introducing redundancy for performance",
        "difficulty": "medium",
        "explanation": "Denormalization is a strategy of deliberately introducing redundancy into a database design to improve read performance, typically in data warehousing and reporting systems.",
        "hint": "Think of trade-offs between normalization and query speed"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is a key characteristic of a functionally dependent attribute?",
        "options": [
            "It can exist independently of other attributes",
            "Its value is determined by the value of another attribute",
            "It always serves as a primary key",
            "It cannot be part of a composite key"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Its value is determined by the value of another attribute",
        "difficulty": "medium",
        "explanation": "A functionally dependent attribute has its value uniquely determined by the value of another attribute or set of attributes.",
        "hint": "Consider a deterministic relationship between attributes"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "Why might a database designer choose not to fully normalize a database?",
        "options": [
            "To increase data redundancy",
            "To improve query performance",
            "To create more complex data structures",
            "To violate data integrity rules"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To improve query performance",
        "difficulty": "hard",
        "explanation": "Complete normalization can sometimes lead to complex joins and reduced query performance, so designers may intentionally denormalize to optimize read operations.",
        "hint": "Consider the balance between data organization and system efficiency"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What does a dependency preservation property ensure?",
        "options": [
            "All functional dependencies are maintained after decomposition",
            "Tables are always in the highest normal form",
            "No data is lost during normalization",
            "Minimal number of tables are created"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "All functional dependencies are maintained after decomposition",
        "difficulty": "hard",
        "explanation": "Dependency preservation ensures that all original functional dependencies can be reconstructed or maintained after decomposing a table into multiple smaller tables.",
        "hint": "Think about maintaining the original data relationships"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is an Armstrong's Axiom in functional dependency?",
"options": [
            "A rule for creating primary keys",
            "A set of inference rules for deriving functional dependencies",
            "A method of key generation",
            "A normalization technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A set of inference rules for deriving functional dependencies",
        "difficulty": "hard",
        "explanation": "Armstrong's Axioms are a set of sound and complete inference rules used to derive all functional dependencies in a relational database.",
        "hint": "Consider logical rules for understanding attribute relationships"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What distinguishes a strong entity from a weak entity in normalization?",
        "options": [
            "Strong entities have more attributes",
            "Strong entities can be uniquely identified without depending on other entities",
            "Weak entities have more relationships",
            "Strong entities always have composite keys"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Strong entities can be uniquely identified without depending on other entities",
        "difficulty": "medium",
        "explanation": "A strong entity has a primary key and can be uniquely identified independently, while a weak entity depends on another entity for its identification.",
        "hint": "Think about self-sufficiency in identification"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Normalization",
        "questionText": "What is the primary purpose of creating a junction table during normalization?",
        "options": [
            "To increase database complexity",
            "To resolve Many-to-Many relationships",
            "To reduce the number of tables",
            "To create additional dependencies"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To resolve Many-to-Many relationships",
        "difficulty": "medium",
        "explanation": "A junction table (or associative entity) is created to break down Many-to-Many relationships into two One-to-Many relationships, facilitating proper database normalization.",
        "hint": "Consider how complex relationships are simplified"
    },

    // SQL Fundamentals
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does SQL stand for?",
        "options": [
            "Structured Query Language",
            "Simple Query Language",
            "Sequential Query Language",
            "Systematic Query Language"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Structured Query Language",
        "difficulty": "easy",
        "explanation": "SQL stands for Structured Query Language, which is a standard language for managing and manipulating relational databases.",
        "hint": "Think about what the acronym represents in database management"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which SQL command is used to retrieve data from a database?",
        "options": [
            "OPEN",
            "GET",
            "SELECT",
            "FETCH"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "SELECT",
        "difficulty": "easy",
        "explanation": "The SELECT statement is used to retrieve data from one or more tables in a database.",
        "hint": "This command begins most data retrieval queries"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What is the purpose of the WHERE clause in a SQL query?",
        "options": [
            "To sort results",
            "To filter rows based on a condition",
            "To group data",
            "To join tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To filter rows based on a condition",
        "difficulty": "easy",
        "explanation": "The WHERE clause allows you to specify conditions to filter the rows returned in a query result set.",
        "hint": "Think about narrowing down your data based on specific criteria"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which keyword is used to sort query results in ascending order?",
        "options": [
            "SORT",
            "ORDER",
            "ARRANGE",
            "ASC"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "ASC",
        "difficulty": "easy",
        "explanation": "The ASC keyword is used with ORDER BY to sort results in ascending order. It is optional as ascending is the default sorting direction.",
        "hint": "This is a modifier used with the ORDER BY clause"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does the DISTINCT keyword do in a SELECT statement?",
        "options": [
            "Counts unique values",
            "Removes duplicate rows",
            "Sorts values",
            "Groups values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Removes duplicate rows",
        "difficulty": "medium",
        "explanation": "DISTINCT removes duplicate rows from the result set, returning only unique values.",
        "hint": "Think about eliminating repeated entries in your query results"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which SQL clause is used to combine the result set of two or more SELECT statements?",
        "options": [
            "MERGE",
            "JOIN",
            "UNION",
            "COMBINE"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "UNION",
        "difficulty": "medium",
        "explanation": "The UNION clause is used to combine the result sets of two or more SELECT statements, removing duplicate rows by default.",
        "hint": "This combines rows from multiple queries vertically"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What is the primary key in a database table?",
        "options": [
            "A key that locks the table",
            "A unique identifier for each record",
            "A foreign key in another table",
            "A key used for sorting"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A unique identifier for each record",
        "difficulty": "medium",
        "explanation": "A primary key is a column or set of columns that uniquely identifies each row in a database table.",
        "hint": "Think about what makes each record in a table distinctly identifiable"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which aggregate function returns the total number of rows in a group?",
        "options": [
            "TOTAL",
            "SUM",
            "COUNT",
            "ROWS"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "COUNT",
        "difficulty": "medium",
        "explanation": "The COUNT() function returns the number of rows that matches the specified criteria.",
        "hint": "This function helps you count the number of records in a query result"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does the GROUP BY clause do?",
        "options": [
            "Sorts data",
            "Groups rows that have the same values",
            "Filters out duplicate rows",
            "Joins multiple tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Groups rows that have the same values",
        "difficulty": "medium",
        "explanation": "The GROUP BY clause groups rows that have the same values in specified columns, typically used with aggregate functions.",
        "hint": "Used when you want to perform calculations on groups of rows"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which JOIN type returns all rows when there is a match in either the left or right table?",
        "options": [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "FULL OUTER JOIN"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "FULL OUTER JOIN",
        "difficulty": "medium",
        "explanation": "FULL OUTER JOIN returns all rows when there is a match in either the left or right table, filling with NULL where no match exists.",
        "hint": "Think about a join that includes all records from both tables"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What is the purpose of the HAVING clause?",
        "options": [
            "To filter individual rows",
            "To filter groups created by GROUP BY",
            "To sort results",
            "To count rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To filter groups created by GROUP BY",
        "difficulty": "medium",
        "explanation": "The HAVING clause is used to filter groups of rows created by the GROUP BY clause, similar to WHERE but applied after grouping.",
        "hint": "Used with aggregate functions to filter grouped results"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which statement is used to modify existing data in a table?",
        "options": [
            "MODIFY",
            "CHANGE",
            "UPDATE",
            "ALTER"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "UPDATE",
        "difficulty": "medium",
        "explanation": "The UPDATE statement is used to modify existing records in a table, allowing you to change column values.",
        "hint": "This command changes data within an existing record"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does the IN operator do in a WHERE clause?",
        "options": [
            "Checks for a range of values",
            "Checks if a value matches any value in a list",
            "Checks for NULL values",
            "Checks for exact matches"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Checks if a value matches any value in a list",
        "difficulty": "medium",
        "explanation": "The IN operator allows you to specify multiple values in a WHERE clause, checking if a value matches any of those values.",
        "hint": "Provides a shorthand for multiple OR conditions"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which SQL command is used to create a new table?",
        "options": [
            "MAKE TABLE",
            "CREATE TABLE",
            "NEW TABLE",
            "ADD TABLE"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "CREATE TABLE",
        "difficulty": "easy",
        "explanation": "The CREATE TABLE statement is used to create a new table in a database, defining its columns and their data types.",
        "hint": "This command establishes a new database table structure"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does the LIKE operator do in a WHERE clause?",
        "options": [
            "Checks for exact matches",
            "Performs pattern matching with wildcard characters",
            "Checks for NULL values",
            "Compares two values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Performs pattern matching with wildcard characters",
        "difficulty": "medium",
        "explanation": "The LIKE operator is used to search for a specified pattern in a column, using wildcard characters like % and _.",
        "hint": "Used for searching with partial string matches"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which clause is used to limit the number of rows returned in a query?",
        "options": [
            "REDUCE",
            "LIMIT",
            "TOP",
            "BOTTOM"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "LIMIT",
        "difficulty": "medium",
        "explanation": "The LIMIT clause is used to specify the maximum number of rows to return in a query result set.",
        "hint": "Controls the number of records displayed in your query"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What is a foreign key?",
        "options": [
            "A key used to lock a table",
            "A primary key in another table",
            "A unique identifier for a table",
            "A key used for sorting"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A primary key in another table",
        "difficulty": "medium",
        "explanation": "A foreign key is a column that references the primary key of another table, establishing a link between two tables.",
        "hint": "Represents a relationship between two database tables"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which keyword is used to remove all rows from a table without deleting the table structure?",
        "options": [
            "DELETE",
            "DROP",
            "TRUNCATE",
            "REMOVE"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "TRUNCATE",
        "difficulty": "medium",
        "explanation": "TRUNCATE removes all rows from a table, but keeps the table structure intact, which is faster than DELETE for removing all records.",
        "hint": "Quickly removes all data while preserving table definition"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does the ALTER TABLE statement do?",
        "options": [
            "Deletes a table",
            "Modifies the structure of an existing table",
            "Creates a new table",
            "Renames a table"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Modifies the structure of an existing table",
        "difficulty": "medium",
        "explanation": "The ALTER TABLE statement is used to add, modify, or delete columns in an existing table, or to add or drop constraints.",
        "hint": "Used to change table structure after initial creation"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which aggregate function returns the average value of a numeric column?",
        "options": [
            "MEAN",
            "MEDIAN",
            "AVG",
            "AVERAGE"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "AVG",
        "difficulty": "easy",
        "explanation": "The AVG() function calculates the average of all non-NULL values in a numeric column.",
        "hint": "Computes the arithmetic mean of a set of values"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What is a subquery?",
        "options": [
            "A query that joins multiple tables",
            "A query nested inside another SQL query",
            "A query that creates a new table",
            "A query that updates multiple rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A query nested inside another SQL query",
        "difficulty": "hard",
        "explanation": "A subquery is a query nested inside another SQL query, allowing complex data retrieval by using the result of one query as a condition for another.",
        "hint": "A query within a query, used to perform more complex data selections"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does the AS keyword do in SQL?",
        "options": [
            "Creates a new table",
            "Renames a column or table",
            "Sorts results",
            "Filters rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Renames a column or table",
        "difficulty": "easy",
        "explanation": "The AS keyword is used to give an alias (temporary name) to a table or column in a query, making the output more readable.",
        "hint": "Provides a way to rename columns or tables in a query result"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which JOIN type returns only matching rows between two tables?",
        "options": [
            "OUTER JOIN",
            "CROSS JOIN",
            "INNER JOIN",
            "NATURAL JOIN"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "INNER JOIN",
        "difficulty": "medium",
        "explanation": "INNER JOIN returns only the rows that have matching values in both tables based on the join condition.",
        "hint": "Returns records with matching values in both tables"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What is the primary purpose of the ORDER BY clause?",
        "options": [
            "To filter rows",
            "To group rows",
            "To sort query results",
            "To count rows"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To sort query results",
        "difficulty": "easy",
        "explanation": "The ORDER BY clause is used to sort the result set in ascending or descending order based on specified columns.",
        "hint": "Arranges query results in a specific sequence"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which function returns the highest value in a set of values?",
        "options": [
            "MAXIMUM",
            "TOP",
            "MAX",
            "HIGHEST"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "MAX",
        "difficulty": "easy",
        "explanation": "The MAX() function returns the highest value in a set of values in a specified column.",
        "hint": "Finds the maximum value in a column"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does the NOT NULL constraint do?",
        "options": [
            "Prevents duplicate values",
            "Ensures a column cannot have a NULL value",
            "Creates a primary key",
            "Sorts values"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ensures a column cannot have a NULL value",
        "difficulty": "medium",
        "explanation": "The NOT NULL constraint ensures that a column cannot have a NULL (empty) value, requiring a valid input.",
        "hint": "Prevents empty or undefined values in a column"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "Which statement is used to remove a table from a database?",
        "options": [
            "REMOVE TABLE",
            "DELETE TABLE",
            "DROP TABLE",
            "DESTROY TABLE"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "DROP TABLE",
        "difficulty": "easy",
        "explanation": "The DROP TABLE statement is used to completely remove a table and its data from a database.",
        "hint": "Permanently deletes a table and its structure"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What does the EXISTS operator do in a subquery?",
        "options": [
            "Checks if a subquery returns any rows",
            "Counts the number of rows in a subquery",
            "Joins two tables",
            "Sorts subquery results"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Checks if a subquery returns any rows",
        "difficulty": "hard",
        "explanation": "The EXISTS operator returns true if the subquery returns one or more rows, useful for checking the existence of records that meet certain conditions.",
        "hint": "Validates the presence of rows meeting specific criteria"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "SQL Fundamentals",
        "questionText": "What is the difference between DELETE and TRUNCATE?",
        "options": [
            "They are exactly the same",
            "DELETE removes specific rows, TRUNCATE removes all rows",
            "TRUNCATE removes specific rows, DELETE removes all rows",
            "They are used for different data types"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "DELETE removes specific rows, TRUNCATE removes all rows",
        "difficulty": "hard",
        "explanation": "DELETE can remove specific rows based on a condition, while TRUNCATE removes all rows from a table. DELETE is slower and can be rolled back, TRUNCATE is faster and cannot be rolled back.",
        "hint": "Consider the scope and performance of row removal"
    },

    
    // Advanced SQL

    // Transaction Management

    // Concurrency Control

    // Indexing & Query Optimization

    // Database Security

    // NoSQL Databases

    // Data Warehousing & OLAP

    // Big Data & Distributed Databases

    // Database Administration

    // Modern Database Systems

]

export default DBSysQuestions;