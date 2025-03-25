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
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a correlated subquery?",
        "options": [
            "A subquery that runs only once",
            "A subquery that references columns from the outer query",
            "A subquery that joins multiple tables",
            "A subquery that uses EXISTS operator"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A subquery that references columns from the outer query",
        "difficulty": "hard",
        "explanation": "A correlated subquery is a subquery that depends on the outer query for its values, meaning it is executed repeatedly - once for each row processed by the outer query.",
        "hint": "Think about a nested query that uses values from the main query"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the OVER clause primarily do in SQL?",
        "options": [
            "Create a new table",
            "Define window functions",
            "Join multiple tables",
            "Filter rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Define window functions",
        "difficulty": "hard",
        "explanation": "The OVER clause is used with window functions to perform calculations across a set of rows that are related to the current row.",
        "hint": "Enables performing calculations across a set of rows without reducing the number of rows returned"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a recursive Common Table Expression (CTE)?",
        "options": [
            "A CTE that calls itself",
            "A CTE with multiple joins",
            "A CTE that filters rows",
            "A CTE used only for sorting"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A CTE that calls itself",
        "difficulty": "hard",
        "explanation": "A recursive CTE is a CTE that references itself, allowing for hierarchical or tree-structured queries like traversing organizational hierarchies or bill of materials.",
        "hint": "Think about a query that can call itself to process hierarchical data"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the MERGE statement do in SQL?",
        "options": [
            "Combines two tables permanently",
            "Performs INSERT, UPDATE, or DELETE operations in a single statement",
            "Joins two tables",
            "Creates a new view"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Performs INSERT, UPDATE, or DELETE operations in a single statement",
        "difficulty": "hard",
        "explanation": "The MERGE statement allows conditional INSERT, UPDATE, or DELETE operations based on a comparison between a target table and a source table.",
        "hint": "A powerful statement that can perform multiple data modification operations simultaneously"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a window function?",
        "options": [
            "A function that creates a new window",
            "A function that performs calculations across a set of rows related to the current row",
            "A function that filters rows",
            "A function that joins tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A function that performs calculations across a set of rows related to the current row",
        "difficulty": "hard",
        "explanation": "Window functions perform calculations across a set of rows that are related to the current row, without reducing the number of rows returned.",
        "hint": "Allows aggregate-like calculations without grouping the result set"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the PIVOT operator do?",
        "options": [
            "Rotates a table's columns into rows",
            "Transforms rows into columns",
            "Sorts data",
            "Filters data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Transforms rows into columns",
        "difficulty": "hard",
        "explanation": "The PIVOT operator transforms rows into columns, allowing you to convert unique row values into multiple columns in the result set.",
        "hint": "Used for converting row-based data into a columnar format"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a view in SQL?",
        "options": [
            "A physical table in the database",
            "A virtual table based on the result of a SELECT statement",
            "A temporary table that exists only during a session",
            "A table with no columns"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A virtual table based on the result of a SELECT statement",
        "difficulty": "medium",
        "explanation": "A view is a virtual table that does not store data physically, but provides a way to represent the result of a complex SELECT query.",
        "hint": "Think of it as a saved query that looks like a table"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is the purpose of the MATERIALIZED VIEW?",
        "options": [
            "To create a temporary table",
            "To store the query result physically and update it periodically",
            "To create a read-only view",
            "To join multiple tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To store the query result physically and update it periodically",
        "difficulty": "hard",
        "explanation": "A materialized view stores the query result as a physical table and can be refreshed periodically, improving query performance for complex queries.",
        "hint": "Provides a way to cache and precompute complex query results"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the RANK() window function do?",
        "options": [
            "Assigns a unique rank to each row",
            "Assigns the same rank to rows with equal values, with gaps in ranking",
            "Sorts rows alphabetically",
            "Filters rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Assigns the same rank to rows with equal values, with gaps in ranking",
        "difficulty": "medium",
        "explanation": "RANK() assigns a rank to each row within a partition, with the same rank for rows with equal values, and leaves gaps in the ranking sequence.",
        "hint": "Used for ranking with potential ranking gaps"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a lateral join?",
        "options": [
            "A join that only works horizontally",
            "A join that allows a subquery to reference columns from previous tables in the join",
            "A join that always returns all rows",
            "A join that filters rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A join that allows a subquery to reference columns from previous tables in the join",
        "difficulty": "hard",
        "explanation": "A lateral join allows a subquery in the FROM clause to reference columns from preceding tables in the join, enabling more complex data retrieval.",
        "hint": "Think of it as a join that can use information from previously joined tables in its subquery"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is the difference between DENSE_RANK() and RANK() window functions?",
        "options": [
            "They are exactly the same",
            "DENSE_RANK() does not leave gaps in ranking",
            "RANK() does not leave gaps in ranking",
            "They are used for different data types"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "DENSE_RANK() does not leave gaps in ranking",
        "difficulty": "hard",
        "explanation": "While RANK() leaves gaps in ranking for rows with equal values, DENSE_RANK() assigns consecutive ranks without gaps.",
        "hint": "Consider how ranking handles rows with equal values"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does a recursive query help solve?",
        "options": [
            "Simple linear data traversal",
            "Hierarchical or tree-structured data queries",
            "Sorting large datasets",
            "Filtering rows quickly"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Hierarchical or tree-structured data queries",
        "difficulty": "hard",
        "explanation": "Recursive queries are particularly useful for traversing hierarchical data structures like organizational hierarchies, bill of materials, or network graphs.",
        "hint": "Think about querying data with parent-child relationships"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is the primary purpose of a stored procedure?",
        "options": [
            "To create a new table",
            "To encapsulate a set of SQL statements that can be reused",
            "To filter rows",
            "To join tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To encapsulate a set of SQL statements that can be reused",
        "difficulty": "medium",
        "explanation": "A stored procedure is a precompiled collection of one or more SQL statements that can be stored and reused, improving performance and code organization.",
        "hint": "Think of it as a reusable function in SQL"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the EXCEPT operator do?",
        "options": [
            "Combines two result sets",
            "Returns rows from the first query that do not appear in the second query",
            "Filters rows",
            "Joins tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Returns rows from the first query that do not appear in the second query",
        "difficulty": "medium",
        "explanation": "The EXCEPT operator returns distinct rows from the first query that are not present in the result of the second query.",
        "hint": "Used to find differences between two query results"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a trigger in SQL?",
        "options": [
            "A type of index",
            "A stored procedure that automatically executes when a specific database event occurs",
            "A way to create a new table",
            "A method to join tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A stored procedure that automatically executes when a specific database event occurs",
        "difficulty": "medium",
        "explanation": "A trigger is a special type of stored procedure that automatically runs when a specific event occurs in the database, such as INSERT, UPDATE, or DELETE operations.",
        "hint": "Automatically responds to database events"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a Common Table Expression (CTE)?",
        "options": [
            "A permanent table in the database",
            "A temporary named result set created within a SELECT, INSERT, UPDATE, DELETE, or MERGE statement",
            "A way to create indexes",
            "A method to filter rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A temporary named result set created within a SELECT, INSERT, UPDATE, DELETE, or MERGE statement",
        "difficulty": "medium",
        "explanation": "A CTE is a temporary named result set that exists only within the scope of a single SQL statement, helping to make complex queries more readable.",
        "hint": "Think of it as a temporary view defined within a query"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the CROSS APPLY operator do?",
        "options": [
            "Joins all rows from two tables",
            "Applies a table-valued function to each row of the outer table",
            "Filters rows",
            "Creates a new table"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Applies a table-valued function to each row of the outer table",
        "difficulty": "hard",
        "explanation": "CROSS APPLY allows you to apply a table-valued function to each row of the outer table, returning only the rows where the function returns a result.",
        "hint": "Similar to an inner join with a table-valued function"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is the primary difference between a stored procedure and a user-defined function?",
        "options": [
            "They are exactly the same",
            "Stored procedures can return values, functions must return a value",
            "Functions can modify database state, stored procedures cannot",
            "Stored procedures can be called from SELECT statements, functions cannot"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Stored procedures can return values, functions must return a value",
        "difficulty": "hard",
        "explanation": "The key difference is that stored procedures can optionally return values and can modify database state, while functions must return a value and typically cannot modify database state.",
        "hint": "Consider the return and modification capabilities"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the LEAD() window function do?",
        "options": [
            "Filters rows",
            "Accesses data from a subsequent row in the result set",
            "Sorts rows",
            "Joins tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Accesses data from a subsequent row in the result set",
        "difficulty": "hard",
        "explanation": "The LEAD() function allows you to access data from a subsequent row in the result set without the need for a self-join.",
        "hint": "Used for comparing current row with next row's values"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is the purpose of the UNPIVOT operator?",
        "options": [
            "Rotates columns into rows",
            "Transforms columns back into rows",
            "Sorts data",
            "Filters data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Transforms columns back into rows",
        "difficulty": "hard",
        "explanation": "The UNPIVOT operator is the opposite of PIVOT, transforming columns back into rows, which is useful for normalizing denormalized data.",
        "hint": "Reverses the effect of a PIVOT operation"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a user-defined table type?",
        "options": [
            "A permanent table in the database",
            "A custom table type that can be used as a parameter in stored procedures",
            "A temporary table",
            "An index type"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A custom table type that can be used as a parameter in stored procedures",
        "difficulty": "hard",
        "explanation": "A user-defined table type allows you to create a custom table structure that can be used as a parameter type in stored procedures, enabling more flexible data passing.",
        "hint": "A way to pass table-structured data as a parameter"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the FIRST_VALUE() window function do?",
        "options": [
            "Returns the last value in a set",
            "Returns the first value in an ordered set of rows",
            "Filters rows",
            "Sorts rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Returns the first value in an ordered set of rows",
        "difficulty": "medium",
        "explanation": "The FIRST_VALUE() function returns the first value in an ordered set of rows within a window partition.",
        "hint": "Retrieves the first value based on a specific ordering"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is the purpose of the INTERSECT operator?",
        "options": [
            "Combines two result sets",
            "Returns only the rows that appear in both queries",
            "Filters rows",
            "Joins tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Returns only the rows that appear in both queries",
        "difficulty": "medium",
        "explanation": "The INTERSECT operator returns distinct rows that are common to both queries, effectively finding the intersection of two result sets.",
        "hint": "Used to find common rows between two queries"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a recursive function in SQL?",
        "options": [
            "A function that never terminates",
            "A function that calls itself with a base case to prevent infinite recursion",
            "A function that joins tables",
            "A function that filters rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A function that calls itself with a base case to prevent infinite recursion",
        "difficulty": "hard",
        "explanation": "A recursive function in SQL is a user-defined function that calls itself, with a base case to prevent infinite recursion, typically used for processing hierarchical or tree-structured data.",
        "hint": "Think about a function that solves a problem by breaking it down into smaller, similar sub-problems"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the PERCENT_RANK() window function do?",
        "options": [
            "Calculates the percentage of rows",
            "Calculates the relative rank of a row as a percentage",
            "Filters rows",
            "Sorts rows"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Calculates the relative rank of a row as a percentage",
        "difficulty": "hard",
        "explanation": "The PERCENT_RANK() function calculates the relative rank of a row within a partition as a percentage, where the lowest row has a percent rank of 0 and the highest has a percent rank of 1.",
        "hint": "Provides a way to understand a row's position relative to other rows"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a window frame in window functions?",
        "options": [
            "A physical window in the database",
            "A subset of rows in the current partition to which the window function is applied",
            "A way to filter rows",
            "A method to join tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A subset of rows in the current partition to which the window function is applied",
        "difficulty": "hard",
        "explanation": "A window frame defines a subset of rows in the current partition to which the window function is applied, allowing more granular calculations.",
        "hint": "Defines the specific rows used in a window function calculation"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is the primary purpose of the INSTEAD OF trigger?",
        "options": [
            "To run before any database operation",
            "To replace the default insert, update, or delete action",
            "To filter rows",
            "To join tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To replace the default insert, update, or delete action",
        "difficulty": "hard",
        "explanation": "An INSTEAD OF trigger allows you to replace the default insert, update, or delete action with custom logic, providing more control over data modifications.",
        "hint": "Used to implement custom logic that overrides standard database operations"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What does the OUTER APPLY operator do?",
        "options": [
            "Joins all rows from two tables",
            "Applies a table-valued function to each row of the outer table, including rows where no result is returned",
            "Filters rows",
            "Creates a new table"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Applies a table-valued function to each row of the outer table, including rows where no result is returned",
        "difficulty": "hard",
        "explanation": "OUTER APPLY is similar to CROSS APPLY, but it returns all rows from the outer table, even when the table-valued function returns no results (similar to a LEFT OUTER JOIN).",
        "hint": "A more inclusive version of CROSS APPLY"
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Advanced SQL",
        "questionText": "What is a common table expression (CTE) used for in complex queries?",
        "options": [
            "To create a permanent table",
            "To improve query readability and break down complex queries",
            "To filter rows",
            "To join tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To improve query readability and break down complex queries",
        "difficulty": "medium",
        "explanation": "CTEs help improve the readability of complex queries by allowing you to define named subqueries that can be referenced multiple times within a single SQL statement.",
        "hint": "Think of it as a way to simplify and modularize complex query logic"
    },

    // Transaction Management
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What does the 'A' in ACID properties stand for?",
        "options": ["Availability", "Atomicity", "Abstraction", "Aggregation"],
        "correctOptionIndex": 1,
        "correctOptionText": "Atomicity",
        "difficulty": "easy",
        "explanation": "Atomicity ensures that a transaction is treated as a single, indivisible unit of work that either completely succeeds or completely fails.",
        "hint": "Think of an atomic operation that cannot be divided further."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "Which of the following is NOT an ACID property of transactions?",
        "options": ["Consistency", "Isolation", "Independence", "Durability"],
        "correctOptionIndex": 2,
        "correctOptionText": "Independence",
        "difficulty": "medium",
        "explanation": "The ACID properties are Atomicity, Consistency, Isolation, and Durability. Independence is not a standard ACID property.",
        "hint": "Check the standard definition of ACID properties in database systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What happens during a transaction rollback?",
        "options": [
            "Transaction is permanently saved", 
            "Database is backed up", 
            "Transaction changes are undone", 
            "New transaction is created"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Transaction changes are undone",
        "difficulty": "easy",
        "explanation": "A rollback reverses all changes made by a transaction, returning the database to its previous consistent state.",
        "hint": "Think of a rollback as an 'undo' operation for a transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "Which isolation level allows dirty reads?",
        "options": [
            "Serializable", 
            "Repeatable Read", 
            "Read Committed", 
            "Read Uncommitted"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Read Uncommitted",
        "difficulty": "medium",
        "explanation": "Read Uncommitted is the lowest isolation level where transactions can read uncommitted data from other transactions, potentially causing dirty reads.",
        "hint": "This is the least restrictive isolation level in terms of data consistency."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What is a savepoint in a transaction?",
        "options": [
            "A permanent database backup", 
            "A point to which a transaction can be rolled back", 
            "A transaction log entry", 
            "A database checkpoint"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A point to which a transaction can be rolled back",
        "difficulty": "medium",
        "explanation": "A savepoint allows you to create a point within a transaction to which you can later roll back, without rolling back the entire transaction.",
        "hint": "It's like a temporary bookmark within a transaction's execution."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What does the 'C' in ACID properties represent?",
        "options": ["Control", "Commitment", "Concurrency", "Consistency"],
        "correctOptionIndex": 3,
        "correctOptionText": "Consistency",
        "difficulty": "easy",
        "explanation": "Consistency ensures that a transaction brings the database from one valid state to another, maintaining database integrity rules.",
        "hint": "This property ensures data integrity across database state changes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "Which command is used to permanently save transaction changes?",
        "options": ["Save", "Commit", "Store", "Insert"],
        "correctOptionIndex": 1,
        "correctOptionText": "Commit",
        "difficulty": "easy",
        "explanation": "The COMMIT command saves all transaction changes permanently to the database, making them visible to other transactions.",
        "hint": "This is the SQL command that finalizes a transaction's changes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What problem can occur in concurrent transaction processing?",
        "options": [
            "Database Freeze", 
            "Lost Updates", 
            "System Shutdown", 
            "Memory Leak"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Lost Updates",
        "difficulty": "medium",
        "explanation": "Lost updates can occur when two transactions read and modify the same data concurrently, causing one transaction's changes to be overwritten.",
        "hint": "This is a common concurrency-related issue in database systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "In the context of transactions, what is a deadlock?",
        "options": [
            "A system crash", 
            "A permanent database error", 
            "A situation where transactions wait for each other", 
            "A transaction timeout"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A situation where transactions wait for each other",
        "difficulty": "hard",
        "explanation": "A deadlock occurs when two or more transactions are unable to proceed because each is waiting for the other to release a lock.",
        "hint": "Think of two transactions holding resources that the other needs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What prevents the 'Phantom Read' anomaly?",
        "options": [
            "Read Committed Isolation", 
            "Serializable Isolation", 
            "Read Uncommitted Isolation", 
            "Repeatable Read Isolation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Serializable Isolation",
        "difficulty": "hard",
        "explanation": "Serializable isolation level prevents phantom reads by locking all rows that match a query's conditions, ensuring no new rows can be inserted during the transaction.",
        "hint": "This is the highest and most restrictive isolation level."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What does the 'D' in ACID properties mean?",
        "options": ["Dispatch", "Durability", "Dynamic", "Dependency"],
        "correctOptionIndex": 1,
        "correctOptionText": "Durability",
        "difficulty": "easy",
        "explanation": "Durability guarantees that once a transaction is committed, its changes will persist even in the event of a system failure.",
        "hint": "This property ensures data is permanently stored after commitment."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "Which transaction isolation level prevents non-repeatable reads?",
        "options": [
            "Read Uncommitted", 
            "Read Committed", 
            "Repeatable Read", 
            "Serializable"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Repeatable Read",
        "difficulty": "medium",
        "explanation": "Repeatable Read isolation level prevents non-repeatable reads by locking rows read by a transaction, ensuring consistent data throughout the transaction.",
        "hint": "This level provides more consistency than Read Committed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What is a distributed transaction?",
        "options": [
            "A transaction within a single database", 
            "A transaction across multiple database systems", 
            "A transaction with multiple savepoints", 
            "A read-only transaction"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A transaction across multiple database systems",
        "difficulty": "hard",
        "explanation": "A distributed transaction involves multiple database systems that must coordinate to ensure all parts of the transaction are completed successfully.",
        "hint": "Think of a transaction that spans different database platforms or servers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What technique helps manage transaction consistency in distributed systems?",
        "options": [
            "Load Balancing", 
            "Two-Phase Commit", 
            "Caching", 
            "Data Sharding"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Two-Phase Commit",
        "difficulty": "hard",
        "explanation": "Two-Phase Commit is a protocol that ensures all databases in a distributed transaction either commit or abort, maintaining consistency.",
        "hint": "This protocol involves a preparation phase and a commit/abort phase."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What prevents concurrent transactions from interfering with each other?",
        "options": [
            "Transaction Logs", 
            "Locking Mechanisms", 
            "Savepoints", 
            "Rollback Strategies"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Locking Mechanisms",
        "difficulty": "medium",
        "explanation": "Locking mechanisms prevent concurrent transactions from accessing the same data simultaneously, ensuring data integrity and preventing race conditions.",
        "hint": "These mechanisms control access to database resources during transactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What is a transaction log used for?",
        "options": [
            "Tracking user activities", 
            "Recording transaction details for recovery", 
            "Managing database connections", 
            "Generating performance reports"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Recording transaction details for recovery",
        "difficulty": "medium",
        "explanation": "Transaction logs record all database modifications, enabling system recovery in case of failures and supporting rollback operations.",
        "hint": "Think of it as a detailed record of all database changes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What is pessimistic concurrency control?",
        "options": [
            "Assuming transactions will conflict", 
            "Preventing transactions before they start", 
            "Locking resources before access", 
            "Rejecting all concurrent transactions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Locking resources before access",
        "difficulty": "hard",
        "explanation": "Pessimistic concurrency control locks resources before a transaction can access them, preventing potential conflicts.",
        "hint": "This approach prioritizes data consistency over performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What does optimistic concurrency control assume?",
        "options": [
            "Transactions always conflict", 
            "Transactions rarely conflict", 
            "Transactions must be serialized", 
            "Transactions cannot run concurrently"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Transactions rarely conflict",
        "difficulty": "hard",
        "explanation": "Optimistic concurrency control assumes that transactions will rarely conflict, allowing them to proceed without locking and checking for conflicts at commit time.",
        "hint": "This approach prioritizes performance over immediate consistency checks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What type of lock allows multiple transactions to read but prevents writes?",
        "options": [
            "Exclusive Lock", 
            "Shared Lock", 
            "Intent Lock", 
            "Update Lock"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Shared Lock",
        "difficulty": "medium",
        "explanation": "A shared lock allows multiple transactions to read a resource simultaneously but prevents any transaction from writing to that resource.",
        "hint": "This lock type is read-oriented and supports concurrent read operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What does an exclusive lock prevent?",
        "options": [
            "Reading data", 
            "Writing data", 
            "Concurrent access", 
            "Transaction logging"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Concurrent access",
        "difficulty": "medium",
        "explanation": "An exclusive lock prevents any other transaction from reading or writing the locked resource, ensuring exclusive access.",
        "hint": "This is the most restrictive type of lock in database systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What is the purpose of a transaction timeout?",
        "options": [
            "To limit transaction duration", 
            "To prevent system overload", 
            "To automatically rollback long-running transactions", 
            "To schedule transactions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To automatically rollback long-running transactions",
        "difficulty": "medium",
        "explanation": "A transaction timeout automatically rolls back a transaction that exceeds a predefined time limit, preventing resource deadlock and system performance issues.",
        "hint": "This mechanism helps manage resource allocation and prevent stuck transactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "Which method helps resolve potential deadlocks in databases?",
        "options": [
            "Transaction Prioritization", 
            "Resource Allocation", 
            "Timeout and Rollback", 
            "Dependency Tracking"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Timeout and Rollback",
        "difficulty": "hard",
        "explanation": "Timeout and rollback mechanism helps resolve deadlocks by automatically terminating long-waiting transactions and rolling them back to release resources.",
        "hint": "This is a common strategy to break potential circular wait conditions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What is a read-only transaction?",
        "options": [
            "A transaction that cannot modify data", 
            "A transaction without a commit", 
            "A transaction logging operation", 
            "A transaction with no effect"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A transaction that cannot modify data",
        "difficulty": "easy",
        "explanation": "A read-only transaction allows data retrieval but prevents any data modifications, improving performance and ensuring data integrity.",
        "hint": "This type of transaction is used for retrieving information without changing the database state."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What problem does the 'Lost Update' anomaly describe?",
        "options": [
            "Data is permanently deleted", 
            "One transaction's update overwrites another's", 
            "Transaction logs are lost", 
            "Database connection is interrupted"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "One transaction's update overwrites another's",
        "difficulty": "medium",
        "explanation": "The 'Lost Update' anomaly occurs when two concurrent transactions read and modify the same data, causing one transaction's changes to be unintentionally overwritten.",
        "hint": "This is a classic concurrency-related data consistency issue."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What ensures that a transaction is processed exactly once?",
        "options": [
            "Idempotency", 
            "Consistency", 
            "Atomicity", 
            "Durability"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Idempotency",
        "difficulty": "hard",
        "explanation": "Idempotency ensures that a transaction can be applied multiple times without changing the result beyond the initial application, preventing duplicate processing.",
        "hint": "This concept is crucial in distributed and fault-tolerant systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What is a transaction boundary?",
        "options": [
            "Transaction size limit", 
            "Start and end points of a transaction", 
            "Database connection limit", 
            "Transaction processing speed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Start and end points of a transaction",
        "difficulty": "easy",
        "explanation": "A transaction boundary defines the beginning and end of a transaction, typically marked by BEGIN TRANSACTION and COMMIT or ROLLBACK statements.",
        "hint": "Think of it as the scope of a single unit of work."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What helps ensure data integrity during distributed transactions?",
        "options": [
            "Load Balancing", 
            "Two-Phase Commit Protocol", 
            "Data Caching", 
            "Connection Pooling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Two-Phase Commit Protocol",
        "difficulty": "hard",
        "explanation": "The Two-Phase Commit Protocol ensures that all database systems in a distributed transaction either commit or abort together, maintaining data consistency across systems.",
        "hint": "This protocol coordinates transaction completion across multiple databases."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What is the primary goal of transaction management?",
        "options": [
            "Maximize database performance", 
            "Ensure data integrity and consistency", 
            "Reduce storage requirements", 
            "Speed up data retrieval"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ensure data integrity and consistency",
        "difficulty": "easy",
        "explanation": "The primary goal of transaction management is to maintain data integrity and consistency, ensuring that database operations are reliable and accurate.",
        "hint": "This involves managing complex database operations and potential concurrent access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Transaction Management",
        "questionText": "What prevents the 'Dirty Read' anomaly?",
        "options": [
            "Read Uncommitted", 
            "Read Committed", 
            "Repeatable Read", 
            "Serializable"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Read Committed",
        "difficulty": "medium",
        "explanation": "Read Committed isolation level prevents dirty reads by ensuring a transaction can only read data that has been committed, not uncommitted changes from other transactions.",
        "hint": "This isolation level provides basic protection against reading unstable data."
    },


    // Concurrency Control
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is the primary goal of concurrency control?",
        "options": [
            "Maximize database performance", 
            "Prevent data inconsistency in multi-user environments", 
            "Reduce storage requirements", 
            "Simplify database access"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Prevent data inconsistency in multi-user environments",
        "difficulty": "easy",
        "explanation": "Concurrency control ensures data integrity when multiple transactions access the database simultaneously, preventing conflicts and maintaining consistent results.",
        "hint": "Think about maintaining data correctness in a system with multiple simultaneous users."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a race condition in database concurrency?",
        "options": [
            "A database performance test", 
            "A situation where transaction outcome depends on timing", 
            "A network connectivity issue", 
            "A locking mechanism failure"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A situation where transaction outcome depends on timing",
        "difficulty": "medium",
        "explanation": "A race condition occurs when the correctness of a transaction depends on the relative timing of multiple concurrent transactions, potentially leading to inconsistent results.",
        "hint": "Consider how different execution orders might produce different outcomes."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a lost update in concurrent transactions?",
        "options": [
            "A temporary database error", 
            "A situation where one transaction's update is overwritten", 
            "A network disconnection", 
            "A transaction rollback"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A situation where one transaction's update is overwritten",
        "difficulty": "medium",
        "explanation": "Lost update occurs when two transactions read the same data, and the second transaction overwrites the first transaction's modifications without preserving them.",
        "hint": "This is a common problem in systems with simultaneous data modifications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is an exclusive lock?",
        "options": [
            "A lock that allows multiple read operations", 
            "A lock that prevents any other transaction from accessing the resource", 
            "A temporary database connection", 
            "A shared reading mechanism"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A lock that prevents any other transaction from accessing the resource",
        "difficulty": "easy",
        "explanation": "An exclusive lock provides complete access control, preventing any other transaction from reading or writing the locked resource.",
        "hint": "This is the most restrictive type of lock in database concurrency control."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a shared lock?",
        "options": [
            "A lock that allows multiple read operations", 
            "A lock that prevents all access", 
            "A permanent database lock", 
            "A transaction-specific lock"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A lock that allows multiple read operations",
        "difficulty": "easy",
        "explanation": "A shared lock allows multiple transactions to read a resource simultaneously but prevents any transaction from writing to that resource.",
        "hint": "This type of lock supports concurrent read operations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a deadlock in database systems?",
        "options": [
            "A system performance improvement", 
            "A situation where transactions wait for each other indefinitely", 
            "A successful transaction completion", 
            "A database backup process"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A situation where transactions wait for each other indefinitely",
        "difficulty": "medium",
        "explanation": "A deadlock occurs when two or more transactions are unable to proceed because each is waiting for the other to release a lock, creating a circular dependency.",
        "hint": "Think of two transactions blocking each other's progress."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is pessimistic concurrency control?",
        "options": [
            "Assuming transactions will conflict", 
            "Preventing transactions before they start", 
            "Locking resources before access", 
            "Rejecting all concurrent transactions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Locking resources before access",
        "difficulty": "hard",
        "explanation": "Pessimistic concurrency control locks resources before a transaction can access them, preventing potential conflicts by restricting simultaneous access.",
        "hint": "This approach prioritizes data consistency over performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is optimistic concurrency control?",
        "options": [
            "Transactions always conflict", 
            "Transactions rarely conflict", 
            "Transactions must be serialized", 
            "Transactions cannot run concurrently"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Transactions rarely conflict",
        "difficulty": "hard",
        "explanation": "Optimistic concurrency control assumes that transactions will rarely conflict, allowing them to proceed without locking and checking for conflicts at commit time.",
        "hint": "This approach prioritizes performance over immediate consistency checks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a phantom read?",
        "options": [
            "A database error", 
            "A situation where new rows appear during a transaction", 
            "A temporary system glitch", 
            "A network interruption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A situation where new rows appear during a transaction",
        "difficulty": "medium",
        "explanation": "A phantom read occurs when a transaction reads a set of rows that satisfy a condition, and then a second transaction inserts or deletes rows that would have been part of the first transaction's result set.",
        "hint": "This anomaly involves unexpected changes to the result set during a transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What mechanism helps prevent deadlocks?",
        "options": [
            "Random transaction ordering", 
            "Timeout and rollback", 
            "Infinite resource allocation", 
            "Unrestricted locking"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Timeout and rollback",
        "difficulty": "hard",
        "explanation": "Timeout and rollback mechanism helps resolve potential deadlocks by automatically terminating long-waiting transactions and rolling them back to release resources.",
        "hint": "This strategy breaks potential circular wait conditions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a dirty read?",
        "options": [
            "Reading committed data", 
            "Reading uncommitted transaction data", 
            "A database cleaning process", 
            "A transaction validation method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Reading uncommitted transaction data",
        "difficulty": "medium",
        "explanation": "A dirty read occurs when a transaction reads data that has been modified by another transaction but not yet committed, potentially reading incorrect or temporary data.",
        "hint": "This is an inconsistency that can happen in low isolation levels."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is two-phase locking (2PL)?",
        "options": [
            "A locking mechanism with two types of locks", 
            "A protocol ensuring serializability of transactions", 
            "A method of distributed locking", 
            "A performance optimization technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A protocol ensuring serializability of transactions",
        "difficulty": "hard",
        "explanation": "Two-phase locking is a concurrency control method that ensures serializability by dividing transaction actions into two phases: growing (acquiring locks) and shrinking (releasing locks).",
        "hint": "This protocol helps maintain consistent transaction execution order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a non-repeatable read?",
        "options": [
            "Reading the same data multiple times", 
            "A situation where data changes during a transaction", 
            "A database backup process", 
            "A transaction validation method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A situation where data changes during a transaction",
        "difficulty": "medium",
        "explanation": "A non-repeatable read occurs when a transaction reads the same data twice and gets different values because another transaction has modified the data between reads.",
        "hint": "This anomaly involves unexpected data changes during a single transaction."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is intent locking?",
        "options": [
            "A preliminary locking mechanism", 
            "A temporary database connection", 
            "A transaction validation method", 
            "A performance optimization technique"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A preliminary locking mechanism",
        "difficulty": "hard",
        "explanation": "Intent locking is a hierarchical locking mechanism that indicates a transaction's intention to place a shared or exclusive lock at a lower level of the database hierarchy.",
        "hint": "This helps manage locks in complex database structures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is the primary difference between shared and exclusive locks?",
        "options": [
            "Performance characteristics", 
            "Ability to read or write data", 
            "Transaction duration", 
            "Database size"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ability to read or write data",
        "difficulty": "easy",
        "explanation": "Shared locks allow multiple read operations but prevent writes, while exclusive locks prevent both reads and writes by other transactions.",
        "hint": "Consider the level of access restriction for each lock type."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What technique helps prevent lost updates?",
        "options": [
            "Random transaction ordering", 
            "Locking mechanisms", 
            "Unlimited resource allocation", 
            "Parallel processing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Locking mechanisms",
        "difficulty": "medium",
        "explanation": "Locking mechanisms prevent lost updates by ensuring that only one transaction can modify a specific piece of data at a time, preserving the integrity of updates.",
        "hint": "Think about controlling access to shared resources."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a serializable isolation level?",
        "options": [
            "Allowing all concurrent transactions", 
            "Executing transactions as if they were sequential", 
            "Maximizing transaction speed", 
            "Minimizing lock overhead"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Executing transactions as if they were sequential",
        "difficulty": "hard",
        "explanation": "Serializable isolation level ensures that concurrent transactions are executed as if they were processed one after another, preventing all concurrency anomalies.",
        "hint": "This is the highest and most restrictive isolation level."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is the purpose of a transaction timeout?",
        "options": [
            "To limit transaction duration", 
            "To prevent system overload", 
            "To automatically rollback long-running transactions", 
            "To schedule transactions"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To automatically rollback long-running transactions",
        "difficulty": "medium",
        "explanation": "A transaction timeout automatically rolls back a transaction that exceeds a predefined time limit, preventing resource deadlock and system performance issues.",
        "hint": "This mechanism helps manage resource allocation and prevent stuck transactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a lock granularity?",
        "options": [
            "The size of a database", 
            "The level of detail in locking resources", 
            "The number of concurrent transactions", 
            "The duration of a lock"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The level of detail in locking resources",
        "difficulty": "hard",
        "explanation": "Lock granularity refers to the level of specificity in locking database resources, ranging from fine-grained (individual rows) to coarse-grained (entire tables).",
        "hint": "Consider how precisely locks can be applied to database resources."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a read-committed isolation level?",
        "options": [
            "Allowing all data reads", 
            "Reading only committed data", 
            "Preventing all data modifications", 
            "Maximizing transaction speed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Reading only committed data",
        "difficulty": "medium",
        "explanation": "Read Committed isolation level ensures that a transaction can only read data that has been committed, preventing dirty reads but allowing non-repeatable reads.",
        "hint": "This provides basic protection against reading unstable data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a repeatable read isolation level?",
        "options": [
            "Allowing multiple read attempts", 
            "Ensuring consistent reads within a transaction", 
            "Maximizing read performance", 
            "Preventing all data modifications"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ensuring consistent reads within a transaction",
        "difficulty": "medium",
        "explanation": "Repeatable Read isolation level guarantees that if a transaction reads a row, subsequent reads of the same row will return the same data, preventing non-repeatable reads.",
        "hint": "This level provides more consistency than Read Committed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is the purpose of a wait-for graph in deadlock detection?",
        "options": [
            "Tracking transaction performance", 
            "Identifying circular wait conditions", 
            "Optimizing database connections", 
            "Managing resource allocation"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Identifying circular wait conditions",
        "difficulty": "hard",
        "explanation": "A wait-for graph is a technique used to detect deadlocks by representing transactions as nodes and their wait dependencies as edges, helping identify circular wait conditions.",
        "hint": "This is a visual method of understanding transaction dependencies."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a timestamp-based concurrency control method?",
        "options": [
            "Using system time to limit transactions", 
            "Ordering transactions based on their arrival time", 
            "Tracking transaction duration", 
            "Preventing time-based conflicts"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ordering transactions based on their arrival time",
        "difficulty": "hard",
        "explanation": "Timestamp-based concurrency control orders transactions based on their arrival time, ensuring that older transactions are processed first and preventing conflicts.",
        "hint": "This method uses transaction timestamps to manage execution order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a write skew anomaly?",
        "options": [
            "A database writing error", 
            "A situation where two transactions modify different data that violates a constraint", 
            "A performance optimization technique", 
            "A locking mechanism failure"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A situation where two transactions modify different data that violates a constraint",
        "difficulty": "hard",
        "explanation": "Write skew occurs when two transactions read overlapping data sets and make changes that, when committed together, violate a database constraint.",
        "hint": "This is a subtle concurrency anomaly that can be difficult to detect."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is a read uncommitted isolation level?",
        "options": [
            "Preventing all data reads", 
            "Allowing reads of uncommitted data", 
            "Maximizing transaction isolation", 
            "Preventing data modifications"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Allowing reads of uncommitted data",
        "difficulty": "easy",
        "explanation": "Read Uncommitted is the lowest isolation level, allowing transactions to read data that has been modified but not yet committed by other transactions.",
        "hint": "This level provides minimal data consistency protection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is the primary goal of isolation levels?",
        "options": [
            "Maximizing database performance", 
            "Balancing data consistency and concurrency", 
            "Reducing storage requirements", 
            "Simplifying transaction management"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Balancing data consistency and concurrency",
        "difficulty": "medium",
        "explanation": "Isolation levels aim to provide a trade-off between data consistency and the ability to process multiple transactions simultaneously.",
        "hint": "Consider how different isolation levels manage concurrent access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What technique helps prevent write skew?",
        "options": [
            "Serializable isolation", 
            "Read-only transactions", 
            "Optimistic locking", 
            "Timeout mechanisms"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Serializable isolation",
        "difficulty": "hard",
        "explanation": "Serializable isolation prevents write skew by ensuring that transactions are executed as if they were processed sequentially, eliminating potential concurrent modification conflicts.",
        "hint": "This is the most restrictive isolation level."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Concurrency Control",
        "questionText": "What is predicate locking?",
        "options": [
            "A method of locking based on data conditions", 
            "A performance optimization technique", 
            "A transaction validation method", 
            "A database connection strategy"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A method of locking based on data conditions",
        "difficulty": "hard",
        "explanation": "Predicate locking prevents phantom reads by locking all data that satisfies a specific condition, even if those data points don't currently exist in the database.",
        "hint": "This advanced locking technique prevents insertions that might affect query results."
    },

    // Indexing & Query Optimization
    {
        "topic": "84f869889540770756312791",
        "module": "Indexing & Query Optimization",
        "questionText": "What is the purpose of a primary index?",
        "options": [
            "Enhancing query performance by reducing the amount of data scanned", 
            "Storing data in a sorted order", 
            "Preventing data modifications", 
            "Creating a backup of the database"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Enhancing query performance by reducing the amount of data scanned",
        "difficulty": "medium",
        "explanation": "A primary index organizes data based on the primary key, allowing faster lookups and eliminates the need for additional sorting operations.",
        "hint": "Consider how primary indices improve query performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is the primary purpose of creating an index in a database?",
        "options": [
            "To reduce storage space",
            "To improve query performance",
            "To enforce data integrity",
            "To validate data types"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To improve query performance",
        "difficulty": "easy",
        "explanation": "Indexes are data structures that improve the speed of data retrieval operations by allowing faster lookup of rows in a database table.",
        "hint": "Think about how an index helps in finding data quickly, similar to a book's table of contents."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "Which type of index creates a separate structure that points to the actual data rows?",
        "options": [
            "Clustered Index",
            "Non-Clustered Index",
            "Bitmap Index",
            "Hash Index"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Non-Clustered Index",
        "difficulty": "medium",
        "explanation": "A non-clustered index creates a separate structure with a copy of selected columns and a pointer to the actual data row, unlike a clustered index which determines the physical order of data.",
        "hint": "This type of index does not modify the physical order of the table's data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What does the term 'index selectivity' refer to?",
        "options": [
            "The number of unique values in an indexed column",
            "The total number of rows in a table",
            "The performance of an index",
            "The complexity of an index structure"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "The number of unique values in an indexed column",
        "difficulty": "hard",
        "explanation": "Index selectivity measures the number of unique values in an indexed column, which helps determine the effectiveness of an index in filtering data.",
        "hint": "Higher selectivity means more unique values, which typically leads to better index performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is a composite index?",
        "options": [
            "An index on a single column",
            "An index created on multiple columns",
            "A unique index",
            "A temporary index"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "An index created on multiple columns",
        "difficulty": "medium",
        "explanation": "A composite index is an index that is created on multiple columns of a table, which can improve query performance for queries that filter or sort by those columns.",
        "hint": "Think of it as an index that combines multiple columns to speed up complex queries."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "Which SQL clause can prevent the use of an index?",
        "options": [
            "WHERE",
            "SELECT",
            "HAVING",
            "LIKE with leading wildcard"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "LIKE with leading wildcard",
        "difficulty": "hard",
        "explanation": "When using LIKE with a leading wildcard (e.g., '%text'), the database cannot use an index efficiently because it must scan all rows.",
        "hint": "Indexes work best when the search starts with a known prefix."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is a covering index?",
        "options": [
            "An index that includes all columns needed by a query",
            "An index that covers the entire table",
            "A unique index on all columns",
            "An index that prevents data modification"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "An index that includes all columns needed by a query",
        "difficulty": "hard",
        "explanation": "A covering index contains all columns required by a query, allowing the database to retrieve results directly from the index without accessing the actual table.",
        "hint": "This type of index can significantly improve query performance by avoiding table lookups."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What does the term 'index scan' mean?",
        "options": [
            "Deleting an index",
            "Searching through an index structure",
            "Creating a new index",
            "Updating index metadata"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Searching through an index structure",
        "difficulty": "easy",
        "explanation": "An index scan involves searching through the index structure to locate the relevant data rows, which is typically faster than a full table scan.",
        "hint": "Think of an index scan as using a table of contents to quickly find information in a book."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "Which data structure is most commonly used for database indexes?",
        "options": [
            "Linked List",
            "Array",
            "B-Tree",
            "Stack"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "B-Tree",
        "difficulty": "medium",
        "explanation": "B-Trees are the most common data structure for database indexes due to their balanced nature and efficient search, insertion, and deletion operations.",
        "hint": "This data structure allows for logarithmic-time search and maintains sorted data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is the primary drawback of creating too many indexes?",
        "options": [
            "Increased query complexity",
            "Reduced storage space",
            "Slower data modification operations",
            "Improved database security"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Slower data modification operations",
        "difficulty": "medium",
        "explanation": "Each index must be updated whenever data is inserted, updated, or deleted, which can significantly slow down data modification operations.",
        "hint": "More indexes mean more overhead for maintaining data consistency."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is a 'hash index' best suited for?",
        "options": [
            "Range queries",
            "Exact match queries",
            "Complex join operations",
            "Sorting large datasets"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Exact match queries",
        "difficulty": "hard",
        "explanation": "Hash indexes are most efficient for exact match queries, providing constant-time lookup but poor performance for range queries or sorting.",
        "hint": "Hash indexes use a hash table for quick, direct access to data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What does the query execution plan show?",
        "options": [
            "Actual data in the database",
            "The steps the database will take to execute a query",
            "Index structure details",
            "Transaction logs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The steps the database will take to execute a query",
        "difficulty": "medium",
        "explanation": "A query execution plan details how the database will process a query, including index usage, join methods, and estimated costs.",
        "hint": "Think of it as a roadmap for query processing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "Which SQL command can help analyze index performance?",
        "options": [
            "EXPLAIN",
            "ANALYZE",
            "DESCRIBE",
            "PROFILE"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "EXPLAIN",
        "difficulty": "medium",
        "explanation": "The EXPLAIN command provides insight into how a query will be executed, showing the query plan and potential index usage.",
        "hint": "This command helps developers understand query optimization without actually running the query."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is a 'bitmap index' most useful for?",
        "options": [
            "Columns with few unique values",
            "Columns with many unique values",
            "Frequently updated columns",
            "Primary key columns"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Columns with few unique values",
        "difficulty": "hard",
        "explanation": "Bitmap indexes are most efficient for columns with a low number of distinct values, such as gender, status, or boolean fields.",
        "hint": "These indexes use bit vectors to represent data, which is memory-efficient for columns with limited unique values."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What does 'index fragmentation' refer to?",
        "options": [
            "Breaking an index into multiple parts",
            "Scattering of index entries across storage",
            "Deleting indexes",
            "Compressing index data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Scattering of index entries across storage",
        "difficulty": "hard",
        "explanation": "Index fragmentation occurs when index entries are not stored sequentially, which can degrade query performance and increase disk I/O.",
        "hint": "High fragmentation means less efficient index structure and potential performance issues."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "When might a full table scan be preferable to using an index?",
        "options": [
            "When retrieving most of the table's rows",
            "When the index is very large",
            "When performing complex joins",
            "When using aggregate functions"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "When retrieving most of the table's rows",
        "difficulty": "hard",
        "explanation": "If a query needs to retrieve a large percentage of rows, a full table scan can be more efficient than using an index, as it reduces the overhead of index lookups.",
        "hint": "Consider the percentage of rows being accessed relative to the total table size."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is the purpose of an 'index hint' in SQL?",
        "options": [
            "To suggest an index to be created",
            "To force the use of a specific index",
            "To recommend query optimization",
            "To disable indexing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To force the use of a specific index",
        "difficulty": "medium",
        "explanation": "An index hint explicitly tells the query optimizer to use a specific index, overriding its default index selection strategy.",
        "hint": "This allows developers to guide the query execution when they know a better optimization strategy."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What does 'index intersection' mean?",
        "options": [
            "Merging multiple indexes",
            "Deleting common index entries",
            "Creating a new index from two existing ones",
            "Comparing index performance"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Merging multiple indexes",
        "difficulty": "hard",
        "explanation": "Index intersection is an optimization technique where the database uses multiple indexes to satisfy a query, combining results from different indexes.",
        "hint": "Think of it as using multiple specialized maps to find a location more efficiently."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "Which type of join typically benefits most from indexing?",
        "options": [
            "Cross Join",
            "Inner Join",
            "Full Outer Join",
            "Natural Join"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Inner Join",
        "difficulty": "medium",
        "explanation": "Inner joins can significantly benefit from indexing, especially when join conditions are on indexed columns, reducing the computational complexity.",
        "hint": "Indexes can help quickly match rows between tables during an inner join."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is a 'clustered index'?",
        "options": [
            "An index that groups similar data together",
            "An index on multiple columns",
            "An index that determines the physical order of data",
            "A temporary index"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "An index that determines the physical order of data",
        "difficulty": "hard",
        "explanation": "A clustered index determines the physical storage order of data in a table, meaning the table data is sorted and stored based on the index key.",
        "hint": "There can only be one clustered index per table, as it defines the actual data storage order."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is the primary goal of query optimization?",
        "options": [
            "Minimizing storage space",
            "Reducing query execution time",
            "Increasing data redundancy",
            "Simplifying database schema"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Reducing query execution time",
        "difficulty": "easy",
        "explanation": "Query optimization aims to minimize the time and resources required to execute a database query by selecting the most efficient execution plan.",
        "hint": "The key is to find the fastest way to retrieve or manipulate data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What does 'index only scan' mean?",
        "options": [
            "Scanning an entire index",
            "Retrieving data directly from the index",
            "Creating a new index",
            "Deleting an index"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Retrieving data directly from the index",
        "difficulty": "hard",
        "explanation": "An index-only scan retrieves all required data directly from the index structure without accessing the actual table, which can significantly improve performance.",
        "hint": "This is possible with a covering index that contains all necessary columns."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "When would you consider creating a filtered index?",
        "options": [
            "When all rows need indexing",
            "When only a subset of rows are frequently queried",
            "When creating a primary key",
            "When performing full table scans"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "When only a subset of rows are frequently queried",
        "difficulty": "hard",
        "explanation": "A filtered index is created on a subset of rows that match a specific condition, reducing index size and improving query performance for those specific rows.",
        "hint": "This is useful when certain data has different query patterns compared to the rest of the table."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is a key consideration when choosing index columns?",
        "options": [
            "Always index primary keys",
            "Index columns used in WHERE, JOIN, and ORDER BY clauses",
            "Create an index on every column",
            "Only index text columns"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Index columns used in WHERE, JOIN, and ORDER BY clauses",
        "difficulty": "medium",
        "explanation": "Index columns that are frequently used in filtering (WHERE), joining, and sorting (ORDER BY) conditions to improve query performance.",
        "hint": "Focus on columns that are commonly used to search, filter, or sort data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is the 'query optimizer' responsible for?",
        "options": [
            "Writing database queries",
            "Selecting the most efficient execution plan",
            "Creating database indexes",
            "Managing database connections"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Selecting the most efficient execution plan",
        "difficulty": "easy",
        "explanation": "The query optimizer analyzes queries and determines the most efficient way to execute them, considering factors like available indexes, statistics, and resource constraints.",
        "hint": "Think of it as a query performance strategist."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What performance metric does the query optimizer consider?",
        "options": [
            "Disk space usage",
            "Query execution time",
            "Network bandwidth",
            "Memory consumption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Query execution time",
        "difficulty": "medium",
        "explanation": "Query optimizers primarily focus on minimizing query execution time by selecting the most efficient access paths and join strategies.",
        "hint": "The goal is to retrieve or process data as quickly as possible."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What is a potential drawback of over-indexing?",
        "options": [
            "Increased query complexity",
            "Slower data modification operations",
            "Reduced query performance",
            "Increased storage requirements"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Slower data modification operations",
        "difficulty": "medium",
        "explanation": "Each additional index requires maintenance during insert, update, and delete operations, which can slow down data modification performance.",
        "hint": "Every index adds overhead to data manipulation tasks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "In which scenario might a hash index be preferrable?",
        "options": [
            "When performing range queries",
            "When doing exact value lookups",
            "When sorting large datasets",
            "When joining multiple tables"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "When doing exact value lookups",
        "difficulty": "hard",
        "explanation": "Hash indexes provide constant-time complexity for exact value lookups but perform poorly for range queries, sorting, or complex join operations.",
        "hint": "Hash indexes are like a direct address book for finding specific entries."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "What does database statistics help the query optimizer do?",
        "options": [
            "Validate data integrity",
            "Estimate query execution costs",
            "Encrypt database content",
            "Manage user permissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Estimate query execution costs",
        "difficulty": "medium",
        "explanation": "Database statistics provide information about data distribution, table sizes, and index characteristics, helping the query optimizer estimate the most efficient query execution plan.",
        "hint": "Think of statistics as a detailed map that helps navigate query performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Indexing & Query Optimization",
        "questionText": "When might you consider adding a covering index?",
        "options": [
            "When table size is very small",
            "When queries frequently access the same set of columns",
            "When primary key is defined",
            "When performing bulk inserts"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "When queries frequently access the same set of columns",
        "difficulty": "hard",
        "explanation": "A covering index includes all columns needed by frequently run queries, allowing the database to retrieve data directly from the index without accessing the table.",
        "hint": "This can significantly reduce I/O operations for repetitive queries."
    },

    // Database Security
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is the primary goal of database security?",
        "options": [
            "Maximizing database performance",
            "Protecting data from unauthorized access and modifications",
            "Reducing storage costs",
            "Increasing data redundancy"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Protecting data from unauthorized access and modifications",
        "difficulty": "easy",
        "explanation": "Database security aims to protect sensitive information from unauthorized access, modification, or destruction.",
        "hint": "Think about safeguarding confidential information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "Which of the following is NOT a primary component of the CIA triad in database security?",
        "options": [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Scalability"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Scalability",
        "difficulty": "easy",
        "explanation": "The CIA triad consists of Confidentiality, Integrity, and Availability. Scalability is a performance characteristic, not a security principle.",
        "hint": "Remember the three core security principles."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is SQL injection primarily used for by attackers?",
        "options": [
            "Improving database performance",
            "Encrypting database contents",
            "Executing unauthorized database commands",
            "Creating database backups"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Executing unauthorized database commands",
        "difficulty": "medium",
        "explanation": "SQL injection is a code injection technique used to attack data-driven applications by inserting malicious SQL statements into input fields.",
        "hint": "Think about manipulating database queries through input fields."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "Which authentication method provides the strongest security?",
        "options": [
            "Single-factor authentication",
            "Two-factor authentication",
            "Password-only authentication",
            "Single sign-on"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Two-factor authentication",
        "difficulty": "easy",
        "explanation": "Two-factor authentication requires two different authentication methods, making it more secure than single-factor approaches.",
        "hint": "More factors mean more security layers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is the purpose of database encryption at rest?",
        "options": [
            "To speed up database queries",
            "To prevent unauthorized access to stored data",
            "To reduce database size",
            "To improve database backup speed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To prevent unauthorized access to stored data",
        "difficulty": "medium",
        "explanation": "Encryption at rest protects data stored on disk or other storage media from unauthorized access if physical storage is compromised.",
        "hint": "Consider protection when data is not actively being used."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a database honeypot?",
        "options": [
            "A type of encryption algorithm",
            "A decoy database system to detect and study attacks",
            "A backup recovery method",
            "A performance optimization technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A decoy database system to detect and study attacks",
        "difficulty": "hard",
        "explanation": "A honeypot is a deliberately vulnerable system designed to attract and trap potential attackers, allowing security researchers to study attack methods.",
        "hint": "Think about a trap that looks intentionally vulnerable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What does the principle of least privilege mean in database security?",
        "options": [
            "Giving all users maximum access rights",
            "Restricting user access to only the minimum permissions necessary",
            "Allowing unlimited database access",
            "Removing all user permissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Restricting user access to only the minimum permissions necessary",
        "difficulty": "medium",
        "explanation": "The principle of least privilege ensures that users have only the minimum levels of access needed to perform their job functions.",
        "hint": "Minimal access reduces potential security risks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "Which of the following is a common method for preventing SQL injection?",
        "options": [
            "Using complex passwords",
            "Implementing prepared statements",
            "Increasing server memory",
            "Disabling database logs"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Implementing prepared statements",
        "difficulty": "medium",
        "explanation": "Prepared statements separate SQL logic from data, preventing malicious input from being interpreted as part of the SQL command.",
        "hint": "Look for a method that separates code and data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a database auditing trail?",
        "options": [
            "A backup mechanism",
            "A record of database performance",
            "A log of database access and changes",
            "A security encryption method"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A log of database access and changes",
        "difficulty": "medium",
        "explanation": "An auditing trail records all significant database events, including user actions, access attempts, and data modifications.",
        "hint": "Think about tracking who did what in the database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What does end-to-end encryption protect against?",
        "options": [
            "Hardware failures",
            "Disk space limitations",
            "Interception of data during transmission",
            "Slow network connections"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Interception of data during transmission",
        "difficulty": "medium",
        "explanation": "End-to-end encryption ensures that data remains encrypted throughout its entire transmission, preventing unauthorized interception.",
        "hint": "Focus on protection during data transfer."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a database view used for in terms of security?",
        "options": [
            "To improve query performance",
            "To restrict access to specific columns or rows",
            "To increase storage capacity",
            "To create database backups"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To restrict access to specific columns or rows",
        "difficulty": "medium",
        "explanation": "Database views can be used to limit user access to sensitive data by showing only specific columns or filtered rows.",
        "hint": "Consider a way to control data visibility."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a salt in password storage?",
        "options": [
            "A database performance enhancer",
            "A random value added to password before hashing",
            "A type of encryption algorithm",
            "A backup recovery method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A random value added to password before hashing",
        "difficulty": "hard",
        "explanation": "A salt is a random value added to the password before hashing, making it more difficult to crack using precomputed hash tables.",
        "hint": "Think about adding randomness to increase security."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is the primary purpose of database access control?",
        "options": [
            "To increase database speed",
            "To manage user permissions and restrict unauthorized access",
            "To reduce storage costs",
            "To simplify database maintenance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To manage user permissions and restrict unauthorized access",
        "difficulty": "easy",
        "explanation": "Access control ensures that only authorized users can perform specific actions on a database, protecting sensitive information.",
        "hint": "Focus on managing who can do what in the database."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What does data masking primarily protect against?",
        "options": [
            "Hardware failures",
            "Network slowdowns",
            "Unauthorized exposure of sensitive information",
            "Disk space limitations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Unauthorized exposure of sensitive information",
        "difficulty": "medium",
        "explanation": "Data masking replaces sensitive data with fictitious but realistic data to protect confidential information while maintaining usability.",
        "hint": "Think about hiding sensitive details while maintaining data structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a database firewall?",
        "options": [
            "A physical security device",
            "A network security tool that monitors and filters database traffic",
            "A backup recovery mechanism",
            "An encryption method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A network security tool that monitors and filters database traffic",
        "difficulty": "medium",
        "explanation": "A database firewall inspects and filters database traffic to prevent unauthorized access and detect potential security threats.",
        "hint": "Consider a protective barrier for database communication."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is the primary risk of storing passwords in plain text?",
        "options": [
            "Increased storage costs",
            "Slower database performance",
            "Vulnerability to password theft",
            "Difficulty in password recovery"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Vulnerability to password theft",
        "difficulty": "easy",
        "explanation": "Storing passwords in plain text makes them easily readable if the database is compromised, exposing user credentials.",
        "hint": "Consider what happens if an attacker gains database access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What does database input validation prevent?",
        "options": [
            "Hardware failures",
            "Network slowdowns",
            "Malicious input and potential injection attacks",
            "Disk space limitations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Malicious input and potential injection attacks",
        "difficulty": "medium",
        "explanation": "Input validation checks and sanitizes user input to prevent malicious data from being processed by the database.",
        "hint": "Think about protecting against harmful user inputs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a database security challenge in cloud environments?",
        "options": [
            "Increased storage costs",
            "Shared infrastructure and multi-tenancy risks",
            "Slower network connections",
            "Reduced backup capabilities"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Shared infrastructure and multi-tenancy risks",
        "difficulty": "hard",
        "explanation": "Cloud databases share physical infrastructure, potentially increasing the risk of unauthorized data access between different tenants.",
        "hint": "Consider the implications of shared computing resources."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is the purpose of database encryption in transit?",
        "options": [
            "To improve query performance",
            "To protect data during network transmission",
            "To reduce storage requirements",
            "To simplify backup processes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To protect data during network transmission",
        "difficulty": "medium",
        "explanation": "Encryption in transit ensures that data is encrypted while being transferred between systems, preventing interception.",
        "hint": "Focus on protection during data movement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What does a database vulnerability scanner do?",
        "options": [
            "Increases database performance",
            "Identifies potential security weaknesses",
            "Creates database backups",
            "Manages user permissions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Identifies potential security weaknesses",
        "difficulty": "medium",
        "explanation": "A vulnerability scanner automatically checks databases for known security issues, misconfigurations, and potential exploit points.",
        "hint": "Think about a tool that finds security gaps."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is the primary goal of data anonymization?",
        "options": [
            "To improve database performance",
            "To protect individual identity while preserving data utility",
            "To reduce storage costs",
            "To simplify data backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To protect individual identity while preserving data utility",
        "difficulty": "hard",
        "explanation": "Data anonymization transforms personal data to prevent individual identification while maintaining the dataset's analytical value.",
        "hint": "Consider protecting privacy without losing data insights."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a key benefit of using stored procedures for database access?",
        "options": [
            "Increased storage capacity",
            "Improved query performance",
            "Enhanced security through parameterized access",
            "Simplified database maintenance"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Enhanced security through parameterized access",
        "difficulty": "medium",
        "explanation": "Stored procedures provide an additional security layer by controlling database access through predefined, parameterized queries.",
        "hint": "Think about controlling database interactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What does the term 'defense in depth' mean in database security?",
        "options": [
            "Using multiple layers of security controls",
            "Increasing server processing power",
            "Reducing network latency",
            "Simplifying user authentication"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Using multiple layers of security controls",
        "difficulty": "hard",
        "explanation": "Defense in depth is a strategy that employs multiple security mechanisms to provide comprehensive protection against various attack vectors.",
        "hint": "Consider a multi-layered approach to security."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a potential risk of using default database configurations?",
        "options": [
            "Slower database performance",
            "Increased storage costs",
            "Leaving known security vulnerabilities exposed",
            "Difficulty in user management"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Leaving known security vulnerabilities exposed",
        "difficulty": "medium",
        "explanation": "Default configurations often have well-known security vulnerabilities that attackers can easily exploit if not properly modified.",
        "hint": "Think about pre-set system settings and their potential risks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What does database role-based access control (RBAC) provide?",
        "options": [
            "Improved query performance",
            "Granular access permissions based on user roles",
            "Increased storage capacity",
            "Simplified backup processes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Granular access permissions based on user roles",
        "difficulty": "medium",
        "explanation": "RBAC assigns database permissions based on predefined roles, allowing fine-grained control over user access and actions.",
        "hint": "Consider managing access through organizational roles."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is the primary purpose of a database security policy?",
        "options": [
            "To increase database performance",
            "To define security standards and guidelines",
            "To reduce storage costs",
            "To simplify user management"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To define security standards and guidelines",
        "difficulty": "easy",
        "explanation": "A database security policy establishes comprehensive rules, responsibilities, and procedures for protecting database assets.",
        "hint": "Think about creating a framework for database protection."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is a potential consequence of a database breach?",
        "options": [
            "Increased storage requirements",
            "Financial losses and reputational damage",
            "Improved system performance",
            "Simplified data management"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Financial losses and reputational damage",
        "difficulty": "hard",
        "explanation": "Database breaches can lead to significant financial penalties, legal consequences, and loss of customer trust.",
        "hint": "Consider the broader impact beyond immediate technical issues."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What does database segregation help prevent?",
        "options": [
            "Hardware failures",
            "Network slowdowns",
            "Cross-contamination of sensitive data",
            "Disk space limitations"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Cross-contamination of sensitive data",
        "difficulty": "medium",
        "explanation": "Database segregation involves separating different types of data to prevent unauthorized access and limit potential damage from security breaches.",
        "hint": "Think about isolating different data environments."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Security",
        "questionText": "What is the recommended password complexity for database accounts?",
        "options": [
            "Short, simple passwords",
            "Passwords with mixed characters, length, and complexity",
            "Using default system passwords",
            "Avoiding special characters"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Passwords with mixed characters, length, and complexity",
        "difficulty": "easy",
        "explanation": "Strong passwords include a mix of uppercase, lowercase, numbers, and special characters, with sufficient length to resist brute-force attacks.",
        "hint": "Consider creating difficult-to-guess passwords."
    },

    // NoSQL Databases
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What does NoSQL stand for?",
        "options": [
            "Not Only SQL",
            "No Structured Query Language",
            "Non-Relational SQL",
            "New Structured Query Language"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Not Only SQL",
        "difficulty": "easy",
        "explanation": "NoSQL originally meant 'Not Only SQL', indicating databases that can handle both relational and non-relational data models.",
        "hint": "Think about a more flexible approach to databases."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "Which of the following is NOT a typical NoSQL database type?",
        "options": [
            "Document store",
            "Key-value store",
            "Relational database",
            "Column-family store"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Relational database",
        "difficulty": "easy",
        "explanation": "Relational databases use structured tables with predefined schemas, while NoSQL databases offer more flexible data models.",
        "hint": "Identify the traditional database model among NoSQL types."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is the primary advantage of a document store database like MongoDB?",
        "options": [
            "Fixed schema design",
            "Flexible schema and nested data storage",
            "Strong ACID compliance",
            "Limited horizontal scaling"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Flexible schema and nested data storage",
        "difficulty": "medium",
        "explanation": "Document stores like MongoDB allow flexible schemas and can store nested, complex data structures within a single document.",
        "hint": "Consider how data can be stored more dynamically."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "In a key-value store database like Redis, what does the key represent?",
        "options": [
            "A complex data structure",
            "A unique identifier for accessing a value",
            "A database table name",
            "A query parameter"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A unique identifier for accessing a value",
        "difficulty": "easy",
        "explanation": "In key-value stores, the key is a unique identifier used to retrieve the associated value quickly and directly.",
        "hint": "Think about how you would quickly access specific data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is sharding in NoSQL databases?",
        "options": [
            "A data encryption method",
            "Horizontal partitioning of data across multiple servers",
            "A backup technique",
            "A query optimization method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Horizontal partitioning of data across multiple servers",
        "difficulty": "medium",
        "explanation": "Sharding involves distributing data across multiple servers to improve performance, scalability, and load distribution.",
        "hint": "Consider how large datasets can be spread across multiple machines."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "Which NoSQL database is best known for graph data relationships?",
        "options": [
            "MongoDB",
            "Cassandra",
            "Neo4j",
            "Redis"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Neo4j",
        "difficulty": "medium",
        "explanation": "Neo4j is a specialized graph database designed to store and navigate complex relationships between data points.",
        "hint": "Think about a database optimized for interconnected data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is the CAP theorem in distributed NoSQL databases?",
        "options": [
            "A performance optimization technique",
            "A trade-off between Consistency, Availability, and Partition tolerance",
            "A data compression method",
            "A security protocol"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A trade-off between Consistency, Availability, and Partition tolerance",
        "difficulty": "hard",
        "explanation": "The CAP theorem states that distributed systems can only simultaneously provide two of three guarantees: Consistency, Availability, and Partition tolerance.",
        "hint": "Consider the challenges of distributed computing systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is a column-family database like Cassandra typically used for?",
        "options": [
            "Complex transaction processing",
            "Storing time-series and high-write volume data",
            "Simple key-value storage",
            "Generating complex reports"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Storing time-series and high-write volume data",
        "difficulty": "medium",
        "explanation": "Column-family databases excel at handling large volumes of write operations and time-series data across distributed systems.",
        "hint": "Think about databases optimized for massive, fast data writing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What makes a key-value store database like Redis popular?",
        "options": [
            "Complex query capabilities",
            "In-memory data storage and high performance",
            "Strong ACID compliance",
            "Complex schema design"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "In-memory data storage and high performance",
        "difficulty": "medium",
        "explanation": "Redis is known for its in-memory data storage, which provides extremely fast read and write operations.",
        "hint": "Consider a database designed for speed and simplicity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is the primary difference between document stores and key-value stores?",
        "options": [
            "Storage capacity",
            "Data structure complexity",
            "Network performance",
            "Encryption methods"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data structure complexity",
        "difficulty": "medium",
        "explanation": "Document stores support more complex, nested data structures, while key-value stores typically store simpler data types.",
        "hint": "Think about the depth and complexity of data storage."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "In a graph database like Neo4j, what are nodes primarily used for?",
        "options": [
            "Data compression",
            "Representing entities",
            "Query optimization",
            "Data encryption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Representing entities",
        "difficulty": "easy",
        "explanation": "In graph databases, nodes represent individual entities, with relationships (edges) defining connections between these entities.",
        "hint": "Consider how interconnected data points can be represented."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is eventual consistency in distributed NoSQL databases?",
        "options": [
            "Immediate data synchronization across all nodes",
            "Guaranteeing data will converge over time",
            "Preventing data conflicts",
            "Reducing network latency"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Guaranteeing data will converge over time",
        "difficulty": "hard",
        "explanation": "Eventual consistency means that in a distributed system, data will become consistent across all nodes given enough time, prioritizing availability over immediate consistency.",
        "hint": "Think about data synchronization in distributed systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is a primary use case for a key-value store like DynamoDB?",
        "options": [
            "Complex reporting",
            "Caching and session management",
            "Detailed financial transactions",
            "Scientific data analysis"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Caching and session management",
        "difficulty": "medium",
        "explanation": "Key-value stores are ideal for quick data retrieval scenarios like caching web sessions, user preferences, and temporary data storage.",
        "hint": "Consider scenarios requiring rapid, simple data access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "Which NoSQL database is most commonly used for real-time web applications?",
        "options": [
            "Cassandra",
            "MongoDB",
            "Redis",
            "Neo4j"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Redis",
        "difficulty": "medium",
        "explanation": "Redis is frequently used in real-time web applications due to its in-memory data storage and high-performance characteristics.",
        "hint": "Think about a database optimized for fast, live interactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What distinguishes a column-family database from a traditional relational database?",
        "options": [
            "Storage capacity",
            "Ability to store data in column groups",
            "Query complexity",
            "Indexing methods"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ability to store data in column groups",
        "difficulty": "medium",
        "explanation": "Column-family databases store data in column groups, allowing more flexible and efficient storage of sparse data compared to row-based relational databases.",
        "hint": "Consider how data can be organized differently."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is a primary advantage of document stores like MongoDB?",
        "options": [
            "Strong ACID compliance",
            "Handling semi-structured and unstructured data",
            "Complex join operations",
            "Fixed schema requirements"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Handling semi-structured and unstructured data",
        "difficulty": "medium",
        "explanation": "Document stores excel at managing data with varying structures, making them ideal for scenarios with evolving or unpredictable data models.",
        "hint": "Think about databases that can handle diverse data formats."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What does horizontal scaling mean in NoSQL databases?",
        "options": [
            "Increasing server memory",
            "Adding more servers to distribute load",
            "Optimizing database queries",
            "Implementing data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Adding more servers to distribute load",
        "difficulty": "easy",
        "explanation": "Horizontal scaling involves adding more servers to a database system to distribute data and computational load across multiple machines.",
        "hint": "Consider how to expand system capacity by adding more machines."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "Which database type is best for recommendation engines?",
        "options": [
            "Key-value store",
            "Column-family store",
            "Graph database",
            "Document store"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Graph database",
        "difficulty": "medium",
        "explanation": "Graph databases excel at managing complex relationships, making them ideal for recommendation systems that require traversing intricate connection networks.",
        "hint": "Think about databases optimized for interconnected data relationships."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is a map-reduce operation in NoSQL databases?",
        "options": [
            "A data encryption method",
            "A parallel processing technique for large datasets",
            "A backup strategy",
            "A query optimization technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A parallel processing technique for large datasets",
        "difficulty": "hard",
        "explanation": "Map-reduce is a programming model for processing and generating large datasets in parallel across distributed computer clusters.",
        "hint": "Consider how complex computations can be distributed."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What challenges do NoSQL databases typically address?",
        "options": [
            "Strict data consistency",
            "Handling massive scale and performance",
            "Complex transaction processing",
            "Rigid schema design"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Handling massive scale and performance",
        "difficulty": "medium",
        "explanation": "NoSQL databases are designed to address scalability, performance, and flexibility challenges that traditional relational databases struggle with.",
        "hint": "Think about database challenges in large, dynamic systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is the primary use of a time-series database?",
        "options": [
            "Social media analysis",
            "Storing and analyzing time-stamped data",
            "Complex financial modeling",
            "User authentication"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Storing and analyzing time-stamped data",
        "difficulty": "medium",
        "explanation": "Time-series databases are optimized for handling data points indexed by time, such as sensor readings, financial trades, or system metrics.",
        "hint": "Consider databases designed for tracking changes over time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "Which NoSQL database is known for wide-column storage?",
        "options": [
            "MongoDB",
            "Redis",
            "Cassandra",
            "Neo4j"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Cassandra",
        "difficulty": "medium",
        "explanation": "Cassandra is a widely-used NoSQL database known for its wide-column storage model, which allows dynamic column creation per row.",
        "hint": "Think about a database with flexible column structures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is a potential drawback of NoSQL databases?",
        "options": [
            "Limited storage capacity",
            "Lack of query complexity and join operations",
            "High implementation cost",
            "Slow data retrieval"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Lack of query complexity and join operations",
        "difficulty": "hard",
        "explanation": "Many NoSQL databases have limited support for complex joins and advanced querying compared to traditional relational databases.",
        "hint": "Consider the trade-offs in database design flexibility."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What does denormalization mean in NoSQL databases?",
        "options": [
            "Removing all data relationships",
            "Duplicating data to improve read performance",
            "Strictly enforcing data normalization",
            "Reducing database size"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Duplicating data to improve read performance",
        "difficulty": "hard",
        "explanation": "Denormalization involves intentionally duplicating data across different parts of a database to improve read performance and reduce complex join operations.",
        "hint": "Think about optimizing data retrieval by sacrificing some data storage efficiency."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is a multi-model database?",
        "options": [
            "A database with multiple servers",
            "A database supporting multiple data models",
            "A database with complex security layers",
            "A database with multiple user roles"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A database supporting multiple data models",
        "difficulty": "medium",
        "explanation": "A multi-model database can support multiple data models (like document, graph, key-value) within a single database system.",
        "hint": "Consider a flexible database that can handle different data structures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is the primary purpose of a document store like MongoDB?",
        "options": [
            "Strict data validation",
            "Storing JSON-like documents with dynamic schemas",
            "Complex financial calculations",
            "Generating database reports"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Storing JSON-like documents with dynamic schemas",
        "difficulty": "easy",
        "explanation": "Document stores like MongoDB are designed to store semi-structured data as documents, allowing flexible and evolving data models.",
        "hint": "Think about storing data in a more natural, document-like format."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What distinguishes a graph database in data modeling?",
        "options": [
            "Strict data normalization",
            "Explicit representation of relationships between entities",
            "Fixed schema requirements",
            "Complex query limitations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Explicit representation of relationships between entities",
        "difficulty": "medium",
        "explanation": "Graph databases focus on representing and querying relationships between data points, making them ideal for interconnected data scenarios.",
        "hint": "Consider how relationships can be first-class citizens in data modeling."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "NoSQL Databases",
        "questionText": "What is a key consideration when choosing a NoSQL database?",
        "options": [
            "Implementing complex joins",
            "Matching database type to specific use case",
            "Maximizing data normalization",
            "Ensuring strict ACID compliance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Matching database type to specific use case",
        "difficulty": "easy",
        "explanation": "Different NoSQL database types excel in different scenarios, so selecting the right type depends on specific application requirements.",
        "hint": "Think about tailoring database choice to unique project needs."
    },

    // Data Warehousing & OLAP
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What does OLAP stand for?",
        "options": [
            "Online Logical Analytical Processing",
            "Operational Logical Analytical Processing",
            "Online Analytical Processing",
            "Operational Advanced Processing"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Online Analytical Processing",
        "difficulty": "easy",
        "explanation": "OLAP stands for Online Analytical Processing, which is used for complex analytical queries with a multidimensional approach.",
        "hint": "Think about data analysis and decision support systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "Which of the following is NOT a typical characteristic of a data warehouse?",
        "options": [
            "Subject-oriented",
            "Time-variant",
            "Real-time updated",
            "Integrated"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Real-time updated",
        "difficulty": "medium",
        "explanation": "Data warehouses are typically not real-time updated. They are periodically refreshed with historical data from various sources.",
        "hint": "Consider the difference between operational and analytical systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is a data cube in OLAP?",
        "options": [
            "A three-dimensional storage mechanism",
            "A multidimensional data structure representing aggregated data",
            "A physical storage device",
            "A database optimization technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A multidimensional data structure representing aggregated data",
        "difficulty": "medium",
        "explanation": "A data cube is a multidimensional data structure that allows rapid analysis of data across multiple dimensions, storing pre-computed aggregations.",
        "hint": "Think about how data can be viewed from different perspectives."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What does the term 'drill-down' mean in OLAP?",
        "options": [
            "Deleting data from a database",
            "Navigating from a higher-level summary to more detailed data",
            "Compressing data",
            "Creating a new database"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Navigating from a higher-level summary to more detailed data",
        "difficulty": "easy",
        "explanation": "Drill-down is the process of moving from a higher-level, summarized view of data to a more granular, detailed view.",
        "hint": "Consider how you might explore data at different levels of detail."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "Which OLAP server type stores data in a multidimensional cube?",
        "options": [
            "ROLAP",
            "MOLAP",
            "HOLAP",
            "DOLAP"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "MOLAP",
        "difficulty": "hard",
        "explanation": "MOLAP (Multidimensional OLAP) stores data in a multidimensional cube, providing fast query performance but requiring more storage space.",
        "hint": "Look for the term that explicitly mentions 'multidimensional'."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is a star schema in data warehousing?",
        "options": [
            "A database design with multiple fact tables",
            "A normalized database schema",
            "A dimensional model with a central fact table and surrounding dimension tables",
            "A schema that represents complex relationships"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "A dimensional model with a central fact table and surrounding dimension tables",
        "difficulty": "medium",
        "explanation": "A star schema is a dimensional modeling technique where a central fact table is connected to multiple dimension tables, resembling a star shape.",
        "hint": "Visualize a central point with radiating dimensions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is the primary purpose of a fact table in a data warehouse?",
        "options": [
            "To store descriptive attributes",
            "To store numerical measurements and foreign keys",
            "To manage database connections",
            "To create indexes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To store numerical measurements and foreign keys",
        "difficulty": "medium",
        "explanation": "Fact tables contain quantitative data about a business process, typically including numerical metrics and foreign keys to dimension tables.",
        "hint": "Think about the core metrics and connections in a business process."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is the difference between OLTP and OLAP?",
        "options": [
            "They are the same thing",
            "OLTP is for reporting, OLAP is for transactions",
            "OLTP is for day-to-day transactions, OLAP is for analytical processing",
            "OLTP is for data storage, OLAP is for data retrieval"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "OLTP is for day-to-day transactions, OLAP is for analytical processing",
        "difficulty": "easy",
        "explanation": "OLTP (Online Transaction Processing) handles day-to-day operational transactions, while OLAP supports complex analytical queries and decision-making.",
        "hint": "Consider the primary use of each system in a business context."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is a slowly changing dimension (SCD)?",
        "options": [
            "A dimension that never changes",
            "A technique for handling changes in dimension attributes over time",
            "A temporary database table",
            "A method of data compression"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A technique for handling changes in dimension attributes over time",
        "difficulty": "hard",
        "explanation": "Slowly Changing Dimensions are strategies to handle changes in dimension attributes while maintaining historical accuracy in a data warehouse.",
        "hint": "Think about tracking historical changes in reference data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What does the term 'slice' mean in a data cube?",
        "options": [
            "Removing a dimension from the cube",
            "Selecting a single value for one dimension",
            "Deleting data from the cube",
            "Compressing the cube"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Selecting a single value for one dimension",
        "difficulty": "medium",
        "explanation": "A slice in a data cube is the process of selecting a single value for one dimension, creating a subset of the multidimensional data.",
        "hint": "Imagine filtering data along a specific dimension."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is a snowflake schema?",
        "options": [
            "A schema with a single table",
            "A normalized version of a star schema with normalized dimension tables",
            "A denormalized database design",
            "A temporary database structure"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A normalized version of a star schema with normalized dimension tables",
        "difficulty": "hard",
        "explanation": "A snowflake schema is a dimensional model where dimension tables are normalized, creating a more complex structure compared to a star schema.",
        "hint": "Consider how normalization affects the dimensional table structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What does 'roll-up' mean in OLAP?",
        "options": [
            "Deleting data from a database",
            "Moving from detailed data to a more summarized view",
            "Creating a new database",
            "Compressing data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Moving from detailed data to a more summarized view",
        "difficulty": "easy",
        "explanation": "Roll-up is the process of aggregating data to a higher level of summarization, typically by climbing up a hierarchy.",
        "hint": "Think about consolidating detailed information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is the primary goal of a data warehouse?",
        "options": [
            "To process real-time transactions",
            "To support decision-making through integrated, historical data",
            "To reduce database storage costs",
            "To improve application performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To support decision-making through integrated, historical data",
        "difficulty": "medium",
        "explanation": "The primary goal of a data warehouse is to provide a consolidated, historical view of data to support strategic decision-making.",
        "hint": "Consider the strategic use of data in business."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What does ETL stand for in data warehousing?",
        "options": [
            "Extract, Transform, Load",
            "Enter, Transfer, Link",
            "Explore, Track, Locate",
            "Enable, Transform, Link"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Extract, Transform, Load",
        "difficulty": "easy",
        "explanation": "ETL stands for Extract, Transform, Load - the process of extracting data from sources, transforming it, and loading it into a data warehouse.",
        "hint": "Think about the steps of preparing data for analysis."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is a dimension table in a data warehouse?",
        "options": [
            "A table that stores numerical measurements",
            "A table containing descriptive attributes and context for facts",
            "A temporary storage table",
            "A system configuration table"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A table containing descriptive attributes and context for facts",
        "difficulty": "medium",
        "explanation": "Dimension tables provide context and descriptive attributes for the numerical data in fact tables, allowing for meaningful analysis.",
        "hint": "Consider the 'who', 'what', 'where', and 'when' of data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is data mart?",
        "options": [
            "A small, focused subset of a data warehouse",
            "A database backup system",
            "A data storage device",
            "A network connection protocol"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A small, focused subset of a data warehouse",
        "difficulty": "easy",
        "explanation": "A data mart is a smaller, more focused version of a data warehouse, typically designed for a specific business unit or department.",
        "hint": "Think of a specialized, targeted data repository."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is the purpose of a data warehouse metadata?",
        "options": [
            "To store actual data",
            "To provide information about the data warehouse structure and contents",
            "To manage database connections",
            "To compress data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide information about the data warehouse structure and contents",
        "difficulty": "hard",
        "explanation": "Metadata in a data warehouse provides information about the data's structure, source, transformation rules, and other relevant details.",
        "hint": "Consider data about data itself."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is an OLAP cube rotation?",
        "options": [
            "Physically moving a storage device",
            "Changing the orientation of data dimensions",
            "Deleting data from the cube",
            "Compressing the cube"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Changing the orientation of data dimensions",
        "difficulty": "medium",
        "explanation": "OLAP cube rotation (or pivot) involves changing the orientation of dimensions to view data from different perspectives.",
        "hint": "Think about rearranging data to gain new insights."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What distinguishes a data warehouse from a traditional database?",
        "options": [
            "Storage capacity",
            "Processing speed",
            "Subject-orientation and time-variance",
            "Number of tables"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Subject-orientation and time-variance",
        "difficulty": "hard",
        "explanation": "Data warehouses are distinguished by being subject-oriented, integrated, time-variant, and non-volatile, unlike traditional operational databases.",
        "hint": "Consider the strategic purpose of data storage."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is the purpose of a fact table in a star schema?",
        "options": [
            "To store descriptive information",
            "To store numerical measurements and performance metrics",
            "To manage database connections",
            "To create indexes"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To store numerical measurements and performance metrics",
        "difficulty": "medium",
        "explanation": "Fact tables contain quantitative data and key performance indicators that can be analyzed across different dimensions.",
        "hint": "Think about the measurable aspects of a business process."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is a data warehouse grain?",
        "options": [
            "A physical storage unit",
            "The level of detail or granularity of a fact table",
            "A compression technique",
            "A database optimization method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "The level of detail or granularity of a fact table",
        "difficulty": "hard",
        "explanation": "The grain of a data warehouse defines the most atomic level of information stored in a fact table, representing the finest level of detail.",
        "hint": "Consider the most granular unit of data measurement."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What does 'hierarchical drill-down' mean in OLAP?",
        "options": [
            "Deleting data from different levels",
            "Navigating through predefined hierarchical levels of data",
            "Creating new database hierarchies",
            "Compressing hierarchical data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Navigating through predefined hierarchical levels of data",
        "difficulty": "medium",
        "explanation": "Hierarchical drill-down involves moving through predefined hierarchical levels of data, such as from year to quarter to month.",
        "hint": "Think about exploring data at different organizational levels."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is a type 2 slowly changing dimension?",
        "options": [
            "A dimension that never changes",
            "A dimension that creates a new record with a new version when attributes change",
            "A dimension that updates existing records",
            "A temporary dimension"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A dimension that creates a new record with a new version when attributes change",
        "difficulty": "hard",
        "explanation": "In a Type 2 SCD, when a dimension attribute changes, a new record is created, preserving the historical version of the data.",
        "hint": "Consider how to maintain historical accuracy of changing data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is the primary difference between ROLAP and MOLAP?",
        "options": [
            "They are exactly the same",
            "ROLAP uses relational databases, MOLAP uses multidimensional storage",
            "ROLAP is faster than MOLAP",
            "MOLAP is only used for small datasets"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "ROLAP uses relational databases, MOLAP uses multidimensional storage",
        "difficulty": "hard",
        "explanation": "ROLAP (Relational OLAP) stores data in relational databases, while MOLAP (Multidimensional OLAP) uses specialized multidimensional storage.",
        "hint": "Focus on the storage mechanism of each approach."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is the purpose of data cleansing in ETL?",
        "options": [
            "To reduce storage space",
            "To remove all historical data",
            "To improve data quality by correcting or removing incorrect, incomplete, or irrelevant data",
            "To speed up database connections"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "To improve data quality by correcting or removing incorrect, incomplete, or irrelevant data",
        "difficulty": "medium",
        "explanation": "Data cleansing is the process of detecting and correcting (or removing) corrupt or inaccurate records from a dataset during the ETL process.",
        "hint": "Think about ensuring data accuracy and reliability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What does the term 'aggregation' mean in OLAP?",
        "options": [
            "Deleting data from a database",
            "Summarizing data at different levels of granularity",
            "Creating new database tables",
            "Compressing data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Summarizing data at different levels of granularity",
        "difficulty": "easy",
        "explanation": "Aggregation in OLAP involves summarizing detailed data into higher-level summary information across different dimensions.",
        "hint": "Consider combining detailed data into more concise representations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is a conformed dimension?",
        "options": [
            "A dimension with strict data validation",
            "A dimension shared and consistent across multiple fact tables",
            "A temporary dimension",
            "A system configuration dimension"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A dimension shared and consistent across multiple fact tables",
        "difficulty": "hard",
        "explanation": "A conformed dimension is a dimension that has the same meaning and structure when used in multiple fact tables, ensuring consistency across different business processes.",
        "hint": "Think about maintaining uniform definitions across different data contexts."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What is the primary challenge of implementing a data warehouse?",
        "options": [
            "High initial hardware costs",
            "Complexity of data integration and transformation",
            "Limited storage capacity",
            "Slow network connections"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Complexity of data integration and transformation",
        "difficulty": "medium",
        "explanation": "The most significant challenge in implementing a data warehouse is integrating and transforming data from multiple, disparate sources into a consistent, meaningful format.",
        "hint": "Consider the difficulties of consolidating data from various systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Data Warehousing & OLAP",
        "questionText": "What does 'materialized view' mean in the context of data warehousing?",
        "options": [
            "A temporary database table",
            "A pre-computed result set stored for quick access",
            "A database backup",
            "A connection configuration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A pre-computed result set stored for quick access",
        "difficulty": "hard",
        "explanation": "A materialized view is a database object that contains the results of a query, pre-computed and stored to improve query performance.",
        "hint": "Think about storing pre-calculated query results."
    },

    // Big Data & Distributed Databases
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What are the four primary characteristics of Big Data, often referred to as the '4 V's'?",
        "options": [
            "Velocity, Volume, Variety, and Veracity",
            "Virtual, Visible, Volatile, and Vital",
            "Vertical, Velocity, Value, and Variance",
            "Volume, Visualization, Validation, and Versatility"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Velocity, Volume, Variety, and Veracity",
        "difficulty": "easy",
        "explanation": "The 4 V's of Big Data are Volume (amount of data), Velocity (speed of data generation), Variety (different types of data), and Veracity (data trustworthiness).",
        "hint": "Consider the key challenges in handling massive, diverse, and rapidly changing data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the primary purpose of the CAP theorem in distributed systems?",
        "options": [
            "To maximize database performance",
            "To explain the trade-offs between Consistency, Availability, and Partition Tolerance",
            "To standardize database design",
            "To reduce network latency"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To explain the trade-offs between Consistency, Availability, and Partition Tolerance",
        "difficulty": "hard",
        "explanation": "The CAP theorem states that in a distributed system, you can only guarantee two out of three properties: Consistency, Availability, and Partition Tolerance.",
        "hint": "Think about the fundamental challenges in designing distributed systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is Apache Hadoop primarily used for?",
        "options": [
            "Web development",
            "Real-time transaction processing",
            "Distributed storage and processing of large datasets",
            "Network security"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Distributed storage and processing of large datasets",
        "difficulty": "medium",
        "explanation": "Apache Hadoop is an open-source framework designed for distributed storage and processing of large datasets using a cluster of commodity hardware.",
        "hint": "Consider frameworks that handle massive amounts of data across multiple machines."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the primary function of HDFS (Hadoop Distributed File System)?",
        "options": [
            "To provide real-time data processing",
            "To store and distribute large files across multiple machines",
            "To manage database connections",
            "To compress data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To store and distribute large files across multiple machines",
        "difficulty": "medium",
        "explanation": "HDFS is designed to store very large files across multiple machines, providing high aggregate bandwidth and fault tolerance.",
        "hint": "Think about how large files can be split and stored across a cluster."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is sharding in distributed databases?",
        "options": [
            "A method of data encryption",
            "Partitioning data across multiple machines",
            "A backup strategy",
            "A network routing technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Partitioning data across multiple machines",
        "difficulty": "medium",
        "explanation": "Sharding is a database partitioning technique that separates very large databases into smaller, faster, more easily managed parts called shards.",
        "hint": "Consider how to distribute data to improve performance and manageability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is MapReduce in the context of Big Data?",
        "options": [
            "A database backup method",
            "A programming model for processing and generating large datasets in parallel",
            "A network security protocol",
            "A data compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A programming model for processing and generating large datasets in parallel",
        "difficulty": "hard",
        "explanation": "MapReduce is a programming model that allows for distributed processing of large datasets across clusters of computers, using parallel and distributed algorithms.",
        "hint": "Think about breaking down complex computational tasks into smaller, manageable parts."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the primary difference between vertical and horizontal scaling?",
        "options": [
            "Vertical scaling adds more machines, horizontal scaling upgrades existing machines",
            "Vertical scaling upgrades existing machines, horizontal scaling adds more machines",
            "They are exactly the same",
            "Vertical scaling is only used in cloud computing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Vertical scaling upgrades existing machines, horizontal scaling adds more machines",
        "difficulty": "medium",
        "explanation": "Vertical scaling (scaling up) involves adding more power to an existing machine, while horizontal scaling (scaling out) involves adding more machines to a system.",
        "hint": "Consider how systems can grow to handle increased load."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is a distributed database?",
        "options": [
            "A database that can only be accessed remotely",
            "A database spread across multiple machines that appears as a single database to the user",
            "A temporary database storage method",
            "A database compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A database spread across multiple machines that appears as a single database to the user",
        "difficulty": "easy",
        "explanation": "A distributed database is a database whose storage devices are not all attached to a common processing unit, but dispersed across a network.",
        "hint": "Think about data storage that looks unified but is actually spread out."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is NoSQL in the context of Big Data?",
        "options": [
            "A programming language",
            "A type of database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases",
            "A network security protocol",
            "A data compression method"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A type of database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases",
        "difficulty": "medium",
        "explanation": "NoSQL databases are designed to handle large volumes of unstructured data, providing flexible schemas and horizontal scalability.",
        "hint": "Consider databases that go beyond traditional table-based storage."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the primary advantage of a distributed database system?",
        "options": [
            "Reduced initial hardware costs",
            "Improved performance, reliability, and scalability",
            "Simplified database management",
            "Guaranteed data security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improved performance, reliability, and scalability",
        "difficulty": "easy",
        "explanation": "Distributed databases offer improved performance through parallel processing, increased reliability through data replication, and better scalability by adding more machines.",
        "hint": "Think about the benefits of spreading data and processing across multiple systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What does eventual consistency mean in distributed systems?",
        "options": [
            "Data is always immediately consistent across all nodes",
            "Data will converge to a consistent state over time",
            "Data is never consistent",
            "Consistency is maintained only during specific time intervals"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data will converge to a consistent state over time",
        "difficulty": "hard",
        "explanation": "Eventual consistency is a consistency model where updates to a distributed system will eventually propagate to all nodes, but may not be immediately visible everywhere.",
        "hint": "Consider how data might temporarily differ across distributed systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is Apache Spark primarily used for?",
        "options": [
            "Web development",
            "Large-scale data processing and analytics",
            "Network security",
            "Database backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Large-scale data processing and analytics",
        "difficulty": "medium",
        "explanation": "Apache Spark is an open-source, distributed computing system used for big data processing, with capabilities for batch processing, stream processing, machine learning, and graph processing.",
        "hint": "Think about frameworks that can handle complex data processing tasks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is a data node in a distributed system?",
        "options": [
            "A central management server",
            "A machine that stores and processes a portion of the distributed data",
            "A network router",
            "A database configuration file"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A machine that stores and processes a portion of the distributed data",
        "difficulty": "easy",
        "explanation": "A data node is an individual machine in a distributed system that stores a subset of the data and participates in distributed data processing.",
        "hint": "Consider the individual components that make up a distributed system."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the primary challenge of distributed database systems?",
        "options": [
            "High initial hardware costs",
            "Maintaining data consistency across multiple nodes",
            "Limited storage capacity",
            "Network bandwidth"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Maintaining data consistency across multiple nodes",
        "difficulty": "hard",
        "explanation": "The most significant challenge in distributed database systems is ensuring data consistency across multiple nodes while maintaining performance and availability.",
        "hint": "Think about the complexities of keeping data synchronized across different machines."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What are the main types of NoSQL databases?",
        "options": [
            "SQL, MySQL, and PostgreSQL",
            "Document, Key-Value, Column-Family, and Graph databases",
            "Relational, Hierarchical, and Network databases",
            "Primary, Secondary, and Distributed databases"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Document, Key-Value, Column-Family, and Graph databases",
        "difficulty": "medium",
        "explanation": "The main types of NoSQL databases are Document (e.g., MongoDB), Key-Value (e.g., Redis), Column-Family (e.g., Cassandra), and Graph databases (e.g., Neo4j).",
        "hint": "Consider the different ways data can be structured and stored."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the role of a master node in a distributed system?",
        "options": [
            "To store all the data",
            "To coordinate and manage worker nodes",
            "To provide network security",
            "To compress data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To coordinate and manage worker nodes",
        "difficulty": "medium",
        "explanation": "A master node in a distributed system is responsible for coordinating and managing worker nodes, distributing tasks, and maintaining overall system state.",
        "hint": "Think about the central management role in a distributed system."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What does partitioning mean in distributed databases?",
        "options": [
            "Encrypting database contents",
            "Dividing data into smaller, more manageable pieces across multiple machines",
            "Creating database backups",
            "Compressing database files"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Dividing data into smaller, more manageable pieces across multiple machines",
        "difficulty": "easy",
        "explanation": "Partitioning involves breaking a large database into smaller, more manageable pieces that are distributed across multiple machines to improve performance and manageability.",
        "hint": "Consider how large datasets can be split up for more efficient processing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is a key characteristic of Big Data processing frameworks like Hadoop?",
        "options": [
            "Real-time data processing",
            "Batch processing of large datasets",
            "Exclusive use in cloud environments",
            "Limited to small-scale data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Batch processing of large datasets",
        "difficulty": "medium",
        "explanation": "Frameworks like Hadoop are designed for batch processing of large datasets, breaking down complex computational tasks into smaller, parallel-processable units.",
        "hint": "Think about processing massive amounts of data in chunks."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the primary purpose of data replication in distributed systems?",
        "options": [
            "To reduce storage costs",
            "To improve fault tolerance and availability",
            "To compress data",
            "To increase network speed"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To improve fault tolerance and availability",
        "difficulty": "easy",
        "explanation": "Data replication involves storing multiple copies of data across different nodes to ensure system reliability, fault tolerance, and improved access speed.",
        "hint": "Consider how multiple copies of data can protect against system failures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is a distributed cache?",
        "options": [
            "A physical storage device",
            "A memory-based data storage system spread across multiple machines",
            "A database backup method",
            "A network security protocol"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A memory-based data storage system spread across multiple machines",
        "difficulty": "hard",
        "explanation": "A distributed cache is a memory-based data storage system that is spread across multiple machines, designed to improve data retrieval performance and reduce database load.",
        "hint": "Think about storing frequently accessed data in memory across multiple systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the primary difference between SQL and NoSQL databases in Big Data?",
        "options": [
            "SQL databases are faster",
            "SQL databases use fixed schemas, while NoSQL databases offer more flexible schema design",
            "NoSQL databases cannot handle complex queries",
            "SQL databases are only used for small datasets"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "SQL databases use fixed schemas, while NoSQL databases offer more flexible schema design",
        "difficulty": "medium",
        "explanation": "SQL databases have rigid, predefined schemas, while NoSQL databases provide more flexible schema design, making them better suited for unstructured or rapidly changing data.",
        "hint": "Consider how different types of databases handle data structure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is a distributed transaction?",
        "options": [
            "A transaction that occurs only in cloud environments",
            "A transaction that spans multiple database nodes and ensures atomic operation",
            "A temporary database connection",
            "A data compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A transaction that spans multiple database nodes and ensures atomic operation",
        "difficulty": "hard",
        "explanation": "A distributed transaction is a database transaction that spans multiple database nodes, requiring complex coordination to ensure all parts of the transaction are completed successfully.",
        "hint": "Think about maintaining data integrity across multiple systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the purpose of a load balancer in distributed systems?",
        "options": [
            "To encrypt data",
            "To distribute network traffic across multiple servers",
            "To compress data",
            "To manage database backups"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To distribute network traffic across multiple servers",
        "difficulty": "easy",
        "explanation": "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes a bottleneck, improving system performance and reliability.",
        "hint": "Consider how to evenly distribute computational work."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is data locality in distributed computing?",
        "options": [
            "Storing data in a single location",
            "Moving computation close to where the data is stored",
            "Encrypting local data",
            "Compressing data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Moving computation close to where the data is stored",
        "difficulty": "hard",
        "explanation": "Data locality is a principle in distributed computing where computation is moved to the location of the data to minimize data transfer and improve performance.",
        "hint": "Think about reducing data movement in distributed systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is a distributed file system?",
        "options": [
            "A local computer's file system",
            "A file system that stores data across multiple machines in a network",
            "A backup storage method",
            "A data compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A file system that stores data across multiple machines in a network",
        "difficulty": "medium",
        "explanation": "A distributed file system allows files to be stored and accessed across multiple machines in a network, providing improved reliability, performance, and scalability.",
        "hint": "Consider how files can be spread across multiple computers."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the primary challenge of big data analytics?",
        "options": [
            "Limited computer processing power",
            "Processing and extracting meaningful insights from large, complex datasets",
            "High storage costs",
            "Network bandwidth limitations"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Processing and extracting meaningful insights from large, complex datasets",
        "difficulty": "easy",
        "explanation": "The primary challenge of big data analytics is transforming vast, complex, and varied datasets into actionable insights that can drive business decisions.",
        "hint": "Think about the difficulties of making sense of massive amounts of data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is a consensus algorithm in distributed systems?",
        "options": [
            "A method of data encryption",
            "A mechanism for multiple nodes to agree on a single data value",
            "A network routing protocol",
            "A data compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A mechanism for multiple nodes to agree on a single data value",
        "difficulty": "hard",
        "explanation": "A consensus algorithm allows distributed systems to reach agreement on a single data value or state, ensuring consistency across multiple nodes.",
        "hint": "Consider how multiple independent systems can agree on a single piece of information."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Big Data & Distributed Databases",
        "questionText": "What is the role of a coordinator in a distributed system?",
        "options": [
            "To store all the data",
            "To manage and synchronize operations across multiple nodes",
            "To provide network security",
            "To compress data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "To manage and synchronize operations across multiple nodes",
        "difficulty": "medium",
        "explanation": "A coordinator in a distributed system is responsible for managing and synchronizing operations across multiple nodes, ensuring proper communication and task distribution.",
        "hint": "Think about the central management role in coordinating distributed tasks."
    },

    // Database Administration
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is the primary purpose of database backup?",
        "options": [
            "Improve database performance",
            "Recover data in case of system failure",
            "Compress database files",
            "Increase storage capacity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Recover data in case of system failure",
        "difficulty": "easy",
        "explanation": "Database backups are crucial for data recovery in case of hardware failures, data corruption, or accidental deletions.",
        "hint": "Think about data protection and disaster recovery."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "Which backup strategy involves creating a full backup and then only backing up changes since the last full backup?",
        "options": [
            "Full backup",
            "Differential backup",
            "Incremental backup",
            "Mirror backup"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Differential backup",
        "difficulty": "medium",
        "explanation": "Differential backup creates a copy of all changes made since the last full backup, which can be faster to restore than incremental backups.",
        "hint": "Consider the backup size and restore time between different backup strategies."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does RAID 5 provide in terms of data storage?",
        "options": [
            "Mirroring without parity",
            "Striping with distributed parity",
            "Complete data redundancy",
            "Maximum read performance"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Striping with distributed parity",
        "difficulty": "hard",
        "explanation": "RAID 5 uses block-level striping with distributed parity, providing both performance and fault tolerance.",
        "hint": "Consider how data is distributed and protected across multiple drives."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is the typical frequency for running log backups in a transaction-heavy database?",
        "options": [
            "Once a week",
            "Once a month",
            "Every few hours",
            "Every few minutes"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Every few minutes",
        "difficulty": "medium",
        "explanation": "Log backups are typically performed frequently to minimize potential data loss in case of system failure.",
        "hint": "Consider the potential data loss window in a high-transaction environment."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "Which of the following is NOT a typical database monitoring metric?",
        "options": [
            "Query response time",
            "CPU utilization",
            "Network latency",
            "User's favorite color"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "User's favorite color",
        "difficulty": "easy",
        "explanation": "Database monitoring focuses on performance, resource utilization, and system health metrics.",
        "hint": "Think about metrics that directly relate to database performance."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is the primary goal of database normalization?",
        "options": [
            "Increase storage space",
            "Reduce data redundancy",
            "Improve query performance",
            "Simplify backup process"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Reduce data redundancy",
        "difficulty": "medium",
        "explanation": "Normalization helps organize data to minimize redundancy and dependency by dividing larger tables into smaller ones.",
        "hint": "Consider how data can be efficiently organized to prevent repetition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "Which command is used to recover a database to a specific point in time?",
        "options": [
            "RESTORE POINT",
            "POINT RECOVERY",
            "POINT-IN-TIME RECOVERY",
            "TIME RESTORE"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "POINT-IN-TIME RECOVERY",
        "difficulty": "hard",
        "explanation": "Point-in-time recovery allows restoring a database to a specific moment, useful for recovering from logical errors.",
        "hint": "Think about recovering to an exact state before a problem occurred."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does WAL stand for in database systems?",
        "options": [
            "Wide Area Link",
            "Write Ahead Log",
            "Web Access Layer",
            "Wide Application Logging"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Write Ahead Log",
        "difficulty": "medium",
        "explanation": "Write Ahead Log ensures that changes are recorded in the log before being applied to the database, supporting transaction durability.",
        "hint": "Consider a logging mechanism that ensures data integrity."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is the primary purpose of database replication?",
        "options": [
            "Increase storage capacity",
            "Improve query performance",
            "Ensure high availability",
            "Compress database files"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Ensure high availability",
        "difficulty": "easy",
        "explanation": "Database replication creates copies of data across multiple servers to provide fault tolerance and continuous availability.",
        "hint": "Think about maintaining database access during hardware failures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "Which type of database user typically has the most privileges?",
        "options": [
            "Read-only user",
            "Application user",
            "Database administrator",
            "Guest user"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Database administrator",
        "difficulty": "easy",
        "explanation": "Database administrators have full access and control over the database system, including user management and system configurations.",
        "hint": "Consider who manages the entire database system."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is database sharding?",
        "options": [
            "Encrypting database content",
            "Partitioning data across multiple servers",
            "Compressing database files",
            "Creating database backups"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Partitioning data across multiple servers",
        "difficulty": "hard",
        "explanation": "Sharding involves horizontally partitioning data across multiple database servers to improve scalability and performance.",
        "hint": "Think about distributing large datasets across multiple machines."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does the term 'database migration' typically refer to?",
        "options": [
            "Moving data between storage devices",
            "Transferring data between database systems",
            "Backing up database files",
            "Updating database schema"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Transferring data between database systems",
        "difficulty": "medium",
        "explanation": "Database migration involves moving data, schema, and sometimes applications from one database system to another.",
        "hint": "Consider moving data between different database platforms."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "Which security measure helps prevent SQL injection attacks?",
        "options": [
            "Strong passwords",
            "Firewall configuration",
            "Prepared statements",
            "Data encryption"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Prepared statements",
        "difficulty": "medium",
        "explanation": "Prepared statements separate SQL logic from data, preventing malicious SQL code injection.",
        "hint": "Think about how to separate database queries from user input."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is a database schema?",
        "options": [
            "A backup of the database",
            "The physical storage layout",
            "The logical structure of the database",
            "A security configuration"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "The logical structure of the database",
        "difficulty": "easy",
        "explanation": "A database schema defines the organization of data, including tables, columns, relationships, and constraints.",
        "hint": "Consider the blueprint of how data is organized."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does 'database auditing' primarily involve?",
        "options": [
            "Checking database performance",
            "Tracking user activities and access",
            "Validating backup files",
            "Optimizing database queries"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Tracking user activities and access",
        "difficulty": "medium",
        "explanation": "Database auditing records and monitors user actions to ensure security, compliance, and detect potential unauthorized activities.",
        "hint": "Think about monitoring and logging database interactions."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "Which backup strategy involves creating a complete backup of all data?",
        "options": [
            "Incremental backup",
            "Differential backup",
            "Full backup",
            "Snapshot backup"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Full backup",
        "difficulty": "easy",
        "explanation": "A full backup creates a complete copy of all data in the database at a specific point in time.",
        "hint": "Consider the most comprehensive backup method."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is the purpose of a database connection pool?",
        "options": [
            "Increase storage capacity",
            "Reuse and manage database connections",
            "Encrypt database connections",
            "Create database backups"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Reuse and manage database connections",
        "difficulty": "medium",
        "explanation": "Connection pools manage and reuse database connections, reducing overhead and improving performance.",
        "hint": "Think about efficiently managing resources for database access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does 'data integrity' in databases refer to?",
        "options": [
            "Data storage capacity",
            "Ensuring data accuracy and consistency",
            "Data encryption methods",
            "Backup frequency"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ensuring data accuracy and consistency",
        "difficulty": "easy",
        "explanation": "Data integrity ensures that data remains accurate, complete, and consistent throughout its lifecycle.",
        "hint": "Consider maintaining the quality and reliability of data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "Which protocol is commonly used for secure database connections?",
        "options": [
            "HTTP",
            "FTP",
            "SSL/TLS",
            "SMTP"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "SSL/TLS",
        "difficulty": "medium",
        "explanation": "SSL/TLS provides encryption and secure communication for database connections.",
        "hint": "Think about a protocol that ensures encrypted data transmission."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is a deadlock in database systems?",
        "options": [
            "A backup failure",
            "A situation where transactions mutually wait for each other",
            "A network connection issue",
            "A schema update problem"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A situation where transactions mutually wait for each other",
        "difficulty": "hard",
        "explanation": "A deadlock occurs when two or more transactions are unable to proceed because each is waiting for the other to release resources.",
        "hint": "Consider a scenario of circular resource dependency."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does 'database normalization' aim to prevent?",
        "options": [
            "Data encryption",
            "Data redundancy",
            "Performance bottlenecks",
            "Network latency"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data redundancy",
        "difficulty": "medium",
        "explanation": "Normalization organizes data to minimize redundancy and improve data integrity.",
        "hint": "Think about eliminating unnecessary data repetition."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is a primary key in a database?",
        "options": [
            "The most important column",
            "A unique identifier for a record",
            "The first column in a table",
            "A foreign key reference"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A unique identifier for a record",
        "difficulty": "easy",
        "explanation": "A primary key uniquely identifies each record in a database table and ensures data integrity.",
        "hint": "Consider a column that makes each row distinctly identifiable."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does 'database archiving' typically involve?",
        "options": [
            "Creating real-time backups",
            "Moving historical data to separate storage",
            "Encrypting database files",
            "Compressing current database"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Moving historical data to separate storage",
        "difficulty": "medium",
        "explanation": "Database archiving involves moving older, less frequently accessed data to a separate storage system to optimize performance.",
        "hint": "Think about managing historical data efficiently."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is horizontal scaling in databases?",
        "options": [
            "Adding more memory to a server",
            "Increasing CPU cores",
            "Adding more servers to distribute load",
            "Upgrading network infrastructure"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Adding more servers to distribute load",
        "difficulty": "hard",
        "explanation": "Horizontal scaling involves adding more servers to distribute database load and improve performance.",
        "hint": "Consider expanding capacity by adding more machines."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is a database view?",
        "options": [
            "A backup of the database",
            "A virtual table based on the result of a SQL query",
            "A physical storage location",
            "A security configuration"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A virtual table based on the result of a SQL query",
        "difficulty": "medium",
        "explanation": "A database view is a virtual table that doesn't store data physically but presents data from one or more tables.",
        "hint": "Think about a dynamic, query-based representation of data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does 'database recovery' primarily mean?",
        "options": [
            "Updating database software",
            "Restoring data after a system failure",
            "Optimizing database performance",
            "Encrypting database contents"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Restoring data after a system failure",
        "difficulty": "easy",
        "explanation": "Database recovery involves restoring data to a consistent state after unexpected system failures or data corruption.",
        "hint": "Consider how to bring a database back to a working state after an issue."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What is a database index?",
        "options": [
            "A backup mechanism",
            "A data structure that improves query performance",
            "A security feature",
            "A data compression technique"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A data structure that improves query performance",
        "difficulty": "medium",
        "explanation": "A database index is a data structure that allows faster retrieval of records, similar to an index in a book.",
        "hint": "Think about a lookup mechanism that speeds up data access."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Database Administration",
        "questionText": "What does 'database partitioning' help achieve?",
        "options": [
            "Data encryption",
            "Improved query performance and manageability",
            "Backup compression",
            "Network security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Improved query performance and manageability",
        "difficulty": "hard",
        "explanation": "Database partitioning divides large tables into smaller, more manageable pieces to improve performance and ease maintenance.",
        "hint": "Consider breaking large datasets into more manageable segments."
    },


    // Modern Database Systems
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a NewSQL database primarily designed to address?",
        "options": [
            "Big data processing",
            "NoSQL scalability with SQL consistency",
            "Cloud storage",
            "Machine learning applications"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "NoSQL scalability with SQL consistency",
        "difficulty": "medium",
        "explanation": "NewSQL databases aim to provide the scalability of NoSQL systems while maintaining the ACID properties and SQL interface of traditional relational databases.",
        "hint": "Consider a solution that combines the best of traditional and modern database approaches."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What characterizes an in-memory database?",
        "options": [
            "Storing data exclusively in RAM",
            "Using cloud storage",
            "Slower data access",
            "Permanent data storage only"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Storing data exclusively in RAM",
        "difficulty": "easy",
        "explanation": "In-memory databases store and process data primarily in a computer's main memory (RAM) for faster data access and processing.",
        "hint": "Think about the fastest type of computer memory for data storage."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is the primary advantage of a distributed database system?",
        "options": [
            "Reduced hardware costs",
            "Improved data security",
            "Enhanced scalability and fault tolerance",
            "Simplified database management"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Enhanced scalability and fault tolerance",
        "difficulty": "medium",
        "explanation": "Distributed database systems spread data across multiple servers, providing better scalability, performance, and resilience against hardware failures.",
        "hint": "Consider how spreading data across multiple machines can improve system reliability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What does CAP theorem state about distributed systems?",
        "options": [
            "Databases can have unlimited storage",
            "A system can have at most two of three properties: Consistency, Availability, Partition tolerance",
            "Cloud databases are always faster",
            "Distributed systems are always secure"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A system can have at most two of three properties: Consistency, Availability, Partition tolerance",
        "difficulty": "hard",
        "explanation": "The CAP theorem suggests that in a distributed system, you can only guarantee two out of three properties: Consistency, Availability, and Partition tolerance.",
        "hint": "Think about the trade-offs in distributed system design."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a cloud-native database?",
        "options": [
            "A database that only works in the cloud",
            "A database designed specifically for cloud environments",
            "A traditional database moved to cloud storage",
            "A database with unlimited storage"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A database designed specifically for cloud environments",
        "difficulty": "medium",
        "explanation": "Cloud-native databases are designed to leverage cloud computing architectures, providing scalability, elasticity, and native cloud service integration.",
        "hint": "Consider a database built from the ground up to work seamlessly in cloud infrastructure."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is the primary characteristic of a graph database?",
        "options": [
            "Storing data in spreadsheet-like tables",
            "Optimizing relationships between data entities",
            "Maximizing storage efficiency",
            "Supporting only numerical data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Optimizing relationships between data entities",
        "difficulty": "medium",
        "explanation": "Graph databases are designed to store and query data with complex relationships, representing data as nodes and edges.",
        "hint": "Think about a database that excels at understanding and traversing connections between data points."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What does 'eventual consistency' mean in distributed databases?",
        "options": [
            "Data is never consistent",
            "Data will become consistent over time",
            "Immediate data synchronization",
            "Random data updates"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Data will become consistent over time",
        "difficulty": "hard",
        "explanation": "Eventual consistency guarantees that if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value.",
        "hint": "Consider a model where consistency is achieved after a period of time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a key advantage of columnar databases?",
        "options": [
            "Better performance for analytical queries",
            "Improved transaction processing",
            "Enhanced data security",
            "Reduced storage requirements"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Better performance for analytical queries",
        "difficulty": "medium",
        "explanation": "Columnar databases store data by column rather than by row, which can significantly improve performance for analytical and aggregation queries.",
        "hint": "Think about how storing data vertically might benefit certain types of data analysis."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What characterizes a key-value NoSQL database?",
        "options": [
            "Complex query support",
            "Storing data as simple key-pair entries",
            "Rigid schema requirements",
            "Mandatory relational structure"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Storing data as simple key-pair entries",
        "difficulty": "easy",
        "explanation": "Key-value databases store data as a collection of key-value pairs, providing high performance and scalability for simple data models.",
        "hint": "Consider the simplest possible way to store and retrieve data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is the primary purpose of a time-series database?",
        "options": [
            "Storing historical financial data",
            "Optimizing storage for time-based data",
            "Tracking real-time sensor or monitoring data",
            "Managing user login timestamps"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Tracking real-time sensor or monitoring data",
        "difficulty": "medium",
        "explanation": "Time-series databases are optimized for handling time-stamped or time-series data, such as IoT sensor readings, monitoring metrics, or financial trading data.",
        "hint": "Think about databases designed to handle data that changes over time."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What does 'sharding' mean in distributed databases?",
        "options": [
            "Data encryption",
            "Partitioning data across multiple servers",
            "Creating database backups",
            "Compressing database files"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Partitioning data across multiple servers",
        "difficulty": "medium",
        "explanation": "Sharding involves horizontally partitioning data across multiple database servers to improve scalability and performance.",
        "hint": "Consider how to distribute large datasets across multiple machines."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a document-oriented NoSQL database best suited for?",
        "options": [
            "Strict relational data models",
            "Storing semi-structured or hierarchical data",
            "High-frequency financial transactions",
            "Geospatial data processing"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Storing semi-structured or hierarchical data",
        "difficulty": "medium",
        "explanation": "Document databases store data in flexible, JSON-like documents, making them ideal for storing semi-structured or nested data with varying schemas.",
        "hint": "Think about a database that can handle complex, nested data structures."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What distinguishes a multi-model database?",
        "options": [
            "Supporting multiple programming languages",
            "Ability to use multiple data models in a single database",
            "Storing data in multiple physical locations",
            "Supporting multiple user authentication methods"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ability to use multiple data models in a single database",
        "difficulty": "hard",
        "explanation": "Multi-model databases can support multiple data models (like document, graph, key-value) within a single database system.",
        "hint": "Consider a database that isn't limited to a single data representation approach."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is the primary advantage of serverless databases?",
        "options": [
            "Eliminating the need for database servers",
            "Automatic scaling and pay-per-use pricing",
            "Improved data security",
            "Reduced network latency"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Automatic scaling and pay-per-use pricing",
        "difficulty": "medium",
        "explanation": "Serverless databases automatically manage infrastructure, scaling resources up or down based on demand, and typically charge only for actual usage.",
        "hint": "Think about a database service that manages its own infrastructure dynamically."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What does 'polyglot persistence' refer to?",
        "options": [
            "Multiple database language support",
            "Using different database types for different data needs",
            "Multilingual database interfaces",
            "Complex database encryption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Using different database types for different data needs",
        "difficulty": "hard",
        "explanation": "Polyglot persistence is the practice of using multiple database technologies to handle different types of data and use cases within a single application.",
        "hint": "Consider choosing the best database type for specific data requirements."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a vector database primarily used for?",
        "options": [
            "Storing geographical data",
            "Machine learning and AI applications",
            "Financial transaction tracking",
            "Web server logging"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Machine learning and AI applications",
        "difficulty": "medium",
        "explanation": "Vector databases are designed to store and query high-dimensional vector embeddings, crucial for machine learning, semantic search, and AI applications.",
        "hint": "Think about databases optimized for storing and searching complex mathematical representations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What characterizes an edge database?",
        "options": [
            "Databases located at physical network edges",
            "Databases optimized for edge computing environments",
            "Databases with limited functionality",
            "Databases with minimal security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Databases optimized for edge computing environments",
        "difficulty": "hard",
        "explanation": "Edge databases are designed to operate in distributed computing environments, close to data sources, with low latency and minimal infrastructure requirements.",
        "hint": "Consider databases that work efficiently in decentralized computing scenarios."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a major benefit of in-memory computing?",
        "options": [
            "Reduced hardware costs",
            "Significantly faster data processing",
            "Unlimited data storage",
            "Improved network security"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Significantly faster data processing",
        "difficulty": "easy",
        "explanation": "In-memory computing allows data to be processed directly in RAM, dramatically reducing data access times compared to disk-based storage.",
        "hint": "Think about the fastest way to access and process data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What does 'data lakehouse' combine?",
        "options": [
            "Data lake and data warehouse capabilities",
            "Cloud and on-premise storage",
            "Relational and NoSQL databases",
            "Transactional and analytical databases"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Data lake and data warehouse capabilities",
        "difficulty": "medium",
        "explanation": "A data lakehouse merges the flexibility of data lakes with the performance and management features of data warehouses.",
        "hint": "Consider a hybrid approach to data storage and processing."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a geospatial database specialized in?",
        "options": [
            "Storing financial data",
            "Managing location-based and geographical data",
            "Cloud storage optimization",
            "Machine learning models"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Managing location-based and geographical data",
        "difficulty": "medium",
        "explanation": "Geospatial databases are designed to store, index, and query geographical and location-based information efficiently.",
        "hint": "Think about databases optimized for handling maps and location data."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What characterizes a real-time database?",
        "options": [
            "Storing historical data",
            "Processing and updating data with minimal delay",
            "Permanent data archiving",
            "Complex query support"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Processing and updating data with minimal delay",
        "difficulty": "medium",
        "explanation": "Real-time databases are designed to process and reflect data changes with extremely low latency, often used in live monitoring and tracking systems.",
        "hint": "Consider a database that updates and reflects changes almost instantly."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a quantum database?",
        "options": [
            "A database running on quantum computers",
            "A highly advanced cloud database",
            "A database with quantum encryption",
            "A database with unlimited processing power"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A database running on quantum computers",
        "difficulty": "hard",
        "explanation": "Quantum databases leverage quantum computing principles to potentially process and store information using quantum mechanical phenomena.",
        "hint": "Think about databases that use quantum computing technologies."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What does 'database virtualization' primarily mean?",
        "options": [
            "Creating virtual reality database interfaces",
            "Abstracting database access across different platforms",
            "Cloud database storage",
            "Database encryption"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Abstracting database access across different platforms",
        "difficulty": "medium",
        "explanation": "Database virtualization allows applications to access data from multiple database systems through a unified interface, regardless of the underlying database technology.",
        "hint": "Consider a way to simplify database access across different systems."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a blockchain database?",
        "options": [
            "A database that only stores cryptocurrency data",
            "A decentralized, immutable database using blockchain technology",
            "A database with complex encryption",
            "A cloud-based database system"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A decentralized, immutable database using blockchain technology",
        "difficulty": "hard",
        "explanation": "Blockchain databases use distributed ledger technology to create a decentralized, tamper-resistant record of transactions and data.",
        "hint": "Think about a database designed for transparency and immutability."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What distinguishes a multi-tenant database?",
        "options": [
            "Supporting multiple users",
            "Ability to serve multiple customers/organizations from a single database instance",
            "Cloud-only deployment",
            "Unlimited storage capacity"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Ability to serve multiple customers/organizations from a single database instance",
        "difficulty": "medium",
        "explanation": "Multi-tenant databases allow multiple customers or organizations to use the same database infrastructure while keeping their data logically separated.",
        "hint": "Consider a database design that efficiently serves multiple users or organizations."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a reactive database?",
        "options": [
            "A database that only responds to user inputs",
            "A database designed to react to data changes in real-time",
            "A database with automated backup systems",
            "A cloud-based database"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "A database designed to react to data changes in real-time",
        "difficulty": "hard",
        "explanation": "Reactive databases are designed to automatically respond to data changes, propagating updates and maintaining system consistency in real-time.",
        "hint": "Think about a database that dynamically responds to data modifications."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is a key characteristic of NewSQL databases?",
        "options": [
            "Abandoning SQL entirely",
            "Combining NoSQL scalability with SQL ACID guarantees",
            "Using only cloud storage",
            "Eliminating database transactions"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Combining NoSQL scalability with SQL ACID guarantees",
        "difficulty": "medium",
        "explanation": "NewSQL databases aim to provide the horizontal scalability of NoSQL systems while maintaining the ACID transaction properties of traditional relational databases.",
        "hint": "Consider a database approach that bridges traditional and modern database designs."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What characterizes an autonomous database?",
        "options": [
            "Complete independence from human intervention",
            "Self-managing capabilities using AI and machine learning",
            "Unlimited processing power",
            "Mandatory cloud deployment"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Self-managing capabilities using AI and machine learning",
        "difficulty": "medium",
        "explanation": "Autonomous databases use AI and machine learning to automate database management tasks like tuning, security, and backup.",
        "hint": "Think about a database that can manage itself intelligently."
    },
    {
        "topic": "67d6b45a953bd3a26da2ad88",
        "module": "Modern Database Systems",
        "questionText": "What is the primary purpose of a federated database system?",
        "options": [
            "Creating backup copies",
            "Integrating data from multiple, potentially heterogeneous databases",
            "Encrypting database connections",
            "Limiting user access"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Integrating data from multiple, potentially heterogeneous databases",
        "difficulty": "hard",
        "explanation": "Federated database systems allow transparent access and integration of data from multiple, potentially different database systems as if they were a single database.",
        "hint": "Consider a system that can unify data from various sources."
    },

]

export default DBSysQuestions;