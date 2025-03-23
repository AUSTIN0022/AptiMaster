const mongoDBQuestions = [

    // Introduction to MongoDB
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What type of database is MongoDB?",
        "options": ["Relational database", "NoSQL document database", "Graph database", "Time-series database"],
        "correctOptionIndex": 1,
        "correctOptionText": "NoSQL document database",
        "difficulty": "easy",
        "explanation": "MongoDB is a NoSQL database that stores data in JSON-like documents with dynamic schemas rather than structured tables.",
        "hint": "Think about databases that don't use SQL and store information in document format."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "In what format does MongoDB store data?",
        "options": ["XML", "BSON", "CSV", "Plain text"],
        "correctOptionIndex": 1,
        "correctOptionText": "BSON",
        "difficulty": "easy",
        "explanation": "MongoDB stores data in BSON format, which is a binary representation of JSON-like documents that adds additional data types not available in JSON.",
        "hint": "It's a binary encoding format that extends JSON."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which company developed MongoDB?",
        "options": ["Oracle", "Microsoft", "MongoDB Inc. (formerly 10gen)", "Amazon"],
        "correctOptionIndex": 2,
        "correctOptionText": "MongoDB Inc. (formerly 10gen)",
        "difficulty": "easy",
        "explanation": "MongoDB was developed by MongoDB Inc., which was originally known as 10gen when the database was first released in 2009.",
        "hint": "The company shares its name with the database."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is the equivalent of a 'table' in MongoDB?",
        "options": ["Document", "Database", "Collection", "Field"],
        "correctOptionIndex": 2,
        "correctOptionText": "Collection",
        "difficulty": "easy",
        "explanation": "In MongoDB, a collection is analogous to a table in relational databases. Collections store documents rather than rows.",
        "hint": "It's a group of related documents stored together."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is the MongoDB equivalent of a 'row' in a relational database?",
        "options": ["Column", "Document", "Collection", "Field"],
        "correctOptionIndex": 1,
        "correctOptionText": "Document",
        "difficulty": "easy",
        "explanation": "In MongoDB, a document is equivalent to a row in a relational database. Documents contain fields and values rather than columns and cells.",
        "hint": "It's a single record in a collection containing key-value pairs."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which of the following is NOT a characteristic of MongoDB?",
        "options": ["Horizontal scalability", "Document-oriented storage", "Fixed schema", "High performance"],
        "correctOptionIndex": 2,
        "correctOptionText": "Fixed schema",
        "difficulty": "easy",
        "explanation": "MongoDB uses dynamic schemas, allowing documents in the same collection to have different fields, unlike relational databases which enforce fixed schemas.",
        "hint": "Think about MongoDB's flexibility with regard to data structure."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is the maximum size of a BSON document in MongoDB?",
        "options": ["4MB", "8MB", "16MB", "32MB"],
        "correctOptionIndex": 2,
        "correctOptionText": "16MB",
        "difficulty": "medium",
        "explanation": "MongoDB has a maximum BSON document size of 16 megabytes to ensure efficient use of RAM and network bandwidth.",
        "hint": "It's a power of 2 between 8 and 32 megabytes."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which of the following is NOT a data type supported by BSON?",
        "options": ["Date", "ObjectId", "Decimal128", "varchar"],
        "correctOptionIndex": 3,
        "correctOptionText": "varchar",
        "difficulty": "medium",
        "explanation": "varchar is a SQL data type and not supported in BSON/MongoDB. MongoDB uses String type instead of varchar.",
        "hint": "Think about SQL-specific types that wouldn't appear in a NoSQL database."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What does the acronym 'BSON' stand for?",
        "options": ["Basic Serialized Object Notation", "Binary JSON", "Buffered Standard Object Notation", "Backend Storage Object Notation"],
        "correctOptionIndex": 1,
        "correctOptionText": "Binary JSON",
        "difficulty": "easy",
        "explanation": "BSON stands for Binary JSON, which is a binary-encoded serialization of JSON-like documents that MongoDB uses for document storage.",
        "hint": "It's related to JSON but in a format that's more efficient for storage and traversal."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What year was MongoDB first released?",
        "options": ["2007", "2009", "2011", "2013"],
        "correctOptionIndex": 1,
        "correctOptionText": "2009",
        "difficulty": "medium",
        "explanation": "MongoDB was first released in February 2009 by 10gen (now MongoDB Inc.).",
        "hint": "It was released in the late 2000s."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which of the following is an advantage of MongoDB over traditional relational databases?",
        "options": ["ACID transactions by default", "Better support for complex JOIN operations", "Flexible schema design", "Built-in SQL query language"],
        "correctOptionIndex": 2,
        "correctOptionText": "Flexible schema design",
        "difficulty": "easy",
        "explanation": "MongoDB's flexible schema allows for documents with varying structures within the same collection, making it easier to adapt to changing data requirements without migrations.",
        "hint": "Think about MongoDB's ability to handle data without a predefined structure."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which of the following is the correct hierarchy of MongoDB components from largest to smallest?",
        "options": ["Database > Document > Collection > Field", "Collection > Database > Document > Field", "Database > Collection > Document > Field", "Document > Collection > Database > Field"],
        "correctOptionIndex": 2,
        "correctOptionText": "Database > Collection > Document > Field",
        "difficulty": "medium",
        "explanation": "The correct hierarchy in MongoDB is: Database contains Collections, Collections contain Documents, and Documents contain Fields.",
        "hint": "Think how this would compare to a relational database's hierarchy of database, table, row, and column."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What naming convention does MongoDB use for its unique document identifiers?",
        "options": ["_uid", "_id", "id", "@id"],
        "correctOptionIndex": 1,
        "correctOptionText": "_id",
        "difficulty": "easy",
        "explanation": "MongoDB automatically creates a field called '_id' in every document to serve as a primary key if one is not explicitly provided.",
        "hint": "It starts with an underscore and is a short two-letter name."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is the default data type of the '_id' field in MongoDB?",
        "options": ["String", "UUID", "ObjectId", "Integer"],
        "correctOptionIndex": 2,
        "correctOptionText": "ObjectId",
        "difficulty": "medium",
        "explanation": "By default, MongoDB generates an ObjectId value for the '_id' field if one is not specified. The ObjectId is a 12-byte identifier that includes a timestamp, machine identifier, process ID, and counter.",
        "hint": "It's a special MongoDB-specific type designed for distributed systems."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "In which programming language was MongoDB originally written?",
        "options": ["JavaScript", "Python", "Java", "C++"],
        "correctOptionIndex": 3,
        "correctOptionText": "C++",
        "difficulty": "medium",
        "explanation": "MongoDB was primarily written in C++ for performance reasons, although it uses JavaScript in its shell interface.",
        "hint": "It's a compiled language often used for system-level programming."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which MongoDB edition is free to use and open source?",
        "options": ["MongoDB Enterprise", "MongoDB Professional", "MongoDB Community", "MongoDB Atlas"],
        "correctOptionIndex": 2,
        "correctOptionText": "MongoDB Community",
        "difficulty": "easy",
        "explanation": "MongoDB Community Edition is the free and open-source version of MongoDB, available for anyone to use, modify, and distribute.",
        "hint": "Think about the edition that would be most accessible to the general public."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is sharding in MongoDB?",
        "options": ["A backup technique", "A method to compress data", "A horizontal partitioning strategy", "An encryption method"],
        "correctOptionIndex": 2,
        "correctOptionText": "A horizontal partitioning strategy",
        "difficulty": "medium",
        "explanation": "Sharding is MongoDB's approach to horizontal scaling, distributing data across multiple machines to support deployments with very large data sets and high throughput operations.",
        "hint": "It's related to how MongoDB handles large amounts of data across multiple servers."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which of the following is NOT a valid way to run MongoDB?",
        "options": ["As a service on-premises", "In the cloud using MongoDB Atlas", "Using Docker containers", "As a plugin for MySQL"],
        "correctOptionIndex": 3,
        "correctOptionText": "As a plugin for MySQL",
        "difficulty": "easy",
        "explanation": "MongoDB cannot run as a plugin for MySQL as they are separate database systems with different architectures. MongoDB can run on-premises, in the cloud, or in containers.",
        "hint": "Think about which option would involve integrating MongoDB with a completely different database system."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is a replica set in MongoDB?",
        "options": ["A duplicate copy of a document", "Multiple copies of the same database for backup", "A group of MongoDB instances that maintain the same data set", "A collection of identical queries"],
        "correctOptionIndex": 2,
        "correctOptionText": "A group of MongoDB instances that maintain the same data set",
        "difficulty": "medium",
        "explanation": "A replica set in MongoDB is a group of mongod processes that maintain the same data set, providing redundancy and high availability.",
        "hint": "It's related to MongoDB's approach to data redundancy and failover."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which of the following is MongoDB's cloud database offering?",
        "options": ["MongoDB Cloud", "MongoDB Cirrus", "MongoDB Online", "MongoDB Atlas"],
        "correctOptionIndex": 3,
        "correctOptionText": "MongoDB Atlas",
        "difficulty": "easy",
        "explanation": "MongoDB Atlas is the company's fully-managed cloud database service that handles all the complexity of deploying, managing, and healing deployments on the cloud service provider of your choice.",
        "hint": "It shares its name with a collection of maps."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What license is MongoDB Community Edition released under?",
        "options": ["MIT License", "Apache License", "Server Side Public License (SSPL)", "GNU General Public License (GPL)"],
        "correctOptionIndex": 2,
        "correctOptionText": "Server Side Public License (SSPL)",
        "difficulty": "hard",
        "explanation": "Since October 2018, MongoDB has been released under the Server Side Public License (SSPL), which was created by MongoDB Inc. to ensure that companies that use MongoDB as a service also contribute back to the community.",
        "hint": "It's a relatively new license specifically created by MongoDB Inc."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is the default port number for MongoDB server?",
        "options": ["3306", "27017", "8080", "5432"],
        "correctOptionIndex": 1,
        "correctOptionText": "27017",
        "difficulty": "medium",
        "explanation": "By default, MongoDB server listens for connections on port 27017. Additional instances typically use incrementing port numbers (27018, 27019, etc.).",
        "hint": "It's a five-digit number starting with 27."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which of the following data models is MongoDB best suited for?",
        "options": ["Highly normalized relational data", "Hierarchical and nested data structures", "Fixed-schema transactional data", "Purely tabular data"],
        "correctOptionIndex": 1,
        "correctOptionText": "Hierarchical and nested data structures",
        "difficulty": "medium",
        "explanation": "MongoDB's document model excels at storing hierarchical and nested data structures, making it ideal for complex objects that would be inefficient to store in normalized relational tables.",
        "hint": "Think about data that has parent-child relationships or contains arrays and nested objects."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is the WiredTiger storage engine?",
        "options": ["A tool for migrating data to MongoDB", "The default storage engine for MongoDB since version 3.2", "A specialized engine for time-series data", "A deprecated storage engine"],
        "correctOptionIndex": 1,
        "correctOptionText": "The default storage engine for MongoDB since version 3.2",
        "difficulty": "medium",
        "explanation": "WiredTiger became the default storage engine for MongoDB in version 3.2. It offers better performance, compression, and concurrency control compared to the previous MMAPv1 engine.",
        "hint": "It's the component responsible for storing data on disk in modern MongoDB versions."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which programming language is used for the MongoDB shell?",
        "options": ["Python", "JavaScript", "Ruby", "SQL"],
        "correctOptionIndex": 1,
        "correctOptionText": "JavaScript",
        "difficulty": "easy",
        "explanation": "The MongoDB shell (mongo shell) is an interactive JavaScript interface to MongoDB. It uses JavaScript for queries and commands.",
        "hint": "It's the same language commonly used for web front-end development."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What does CAP theorem refer to in the context of distributed databases like MongoDB?",
        "options": ["Cost, Availability, and Performance", "Consistency, Availability, and Partition tolerance", "Clustering, Administration, and Provisioning", "Caching, Access control, and Permissions"],
        "correctOptionIndex": 1,
        "correctOptionText": "Consistency, Availability, and Partition tolerance",
        "difficulty": "hard",
        "explanation": "CAP theorem states that a distributed database system can only guarantee two of three properties simultaneously: Consistency (all nodes see the same data at the same time), Availability (every request receives a response), and Partition tolerance (the system continues to operate despite network partitions).",
        "hint": "It's a fundamental theorem in distributed systems that explains inevitable trade-offs."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "In the CAP theorem, which two properties does MongoDB prioritize in its default configuration?",
        "options": ["Consistency and Availability", "Availability and Partition tolerance", "Consistency and Partition tolerance", "None of the above"],
        "correctOptionIndex": 2,
        "correctOptionText": "Consistency and Partition tolerance",
        "difficulty": "hard",
        "explanation": "MongoDB, in its default configuration with replica sets, prioritizes Consistency and Partition tolerance over Availability. This means that during a network partition, some nodes may become unavailable to maintain data consistency.",
        "hint": "Think about MongoDB's behavior during network failures and its prioritization of data correctness."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What happens when a document exceeds the 16MB BSON size limit in MongoDB?",
        "options": ["The document is automatically split into multiple documents", "The database returns an error and won't insert the document", "The document is compressed to fit the limit", "The limit is automatically increased for that document"],
        "correctOptionIndex": 1,
        "correctOptionText": "The database returns an error and won't insert the document",
        "difficulty": "medium",
        "explanation": "MongoDB enforces a strict 16MB limit on BSON documents and will return an error if you attempt to insert a document larger than this limit. For larger objects, MongoDB provides GridFS to store and retrieve large files.",
        "hint": "Think about strict enforcement of limits versus automatic adaptation."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "What is GridFS in MongoDB?",
        "options": ["A graphical user interface for MongoDB", "A method to store large files in MongoDB", "A grid computing feature for distributed queries", "A spatial indexing system"],
        "correctOptionIndex": 1,
        "correctOptionText": "A method to store large files in MongoDB",
        "difficulty": "medium",
        "explanation": "GridFS is a specification for storing and retrieving large files such as images, audio files, video files, etc., that exceed the 16MB BSON document size limit. It works by dividing a file into chunks and storing each chunk as a separate document.",
        "hint": "It helps overcome one of MongoDB's limitations for certain use cases."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Introduction to MongoDB",
        "questionText": "Which of the following is NOT a valid reason to choose MongoDB over a relational database?",
        "options": ["Need for flexible schema", "Handling large volumes of data", "Complex multi-table JOIN operations", "Hierarchical data structures"],
        "correctOptionIndex": 2,
        "correctOptionText": "Complex multi-table JOIN operations",
        "difficulty": "hard",
        "explanation": "MongoDB is not optimized for complex multi-table JOIN operations which are a strength of relational databases. While MongoDB can perform aggregation operations including joins (using $lookup), these are typically less efficient than equivalent SQL JOINs in relational databases for complex multi-table scenarios.",
        "hint": "Think about which operations are traditionally associated with SQL's strengths."
    },
    
    // MongoDB Shell & Basic Operations
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which command is used to connect to a MongoDB shell?",
        "options": ["mongodb", "mongo", "mongosh", "mongoose"],
        "correctOptionIndex": 2,
        "correctOptionText": "mongosh",
        "difficulty": "easy",
        "explanation": "The 'mongosh' command (MongoDB Shell) is the newer command line interface used to connect to MongoDB since version 5.0. The older 'mongo' shell is deprecated.",
        "hint": "It's the updated version of the mongo shell with improved features."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you display all databases in MongoDB shell?",
        "options": ["show dbs", "list databases", "display dbs", "get databases"],
        "correctOptionIndex": 0,
        "correctOptionText": "show dbs",
        "difficulty": "easy",
        "explanation": "The 'show dbs' command lists all databases in the MongoDB server with their sizes.",
        "hint": "It's a simple two-word command starting with 'show'."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which command is used to switch to a specific database in MongoDB?",
        "options": ["switchTo(dbName)", "connect dbName", "use dbName", "select dbName"],
        "correctOptionIndex": 2,
        "correctOptionText": "use dbName",
        "difficulty": "easy",
        "explanation": "The 'use dbName' command switches to the specified database. If the database doesn't exist, MongoDB will create it when you first store data.",
        "hint": "It's a simple three-letter command followed by the database name."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you display all collections in the current database?",
        "options": ["show collections", "list collections", "display collections", "get collections"],
        "correctOptionIndex": 0,
        "correctOptionText": "show collections",
        "difficulty": "easy",
        "explanation": "The 'show collections' command displays all collections in the currently selected database.",
        "hint": "It follows the same pattern as the command to show databases."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which method is used to insert a single document into a collection?",
        "options": ["db.collection.insertOne()", "db.collection.insert()", "db.collection.add()", "db.collection.create()"],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.insertOne()",
        "difficulty": "easy",
        "explanation": "db.collection.insertOne() is used to insert a single document into a collection and returns a document with the _id of the inserted document.",
        "hint": "The method name clearly indicates it inserts exactly one document."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you insert multiple documents at once into a collection?",
        "options": ["db.collection.insertMany()", "db.collection.insertMultiple()", "db.collection.addMany()", "db.collection.bulkInsert()"],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.insertMany()",
        "difficulty": "easy",
        "explanation": "db.collection.insertMany() allows you to insert an array of documents into a collection in a single operation.",
        "hint": "The method name follows the same pattern as insertOne() but indicates multiple documents."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which MongoDB shell method returns all documents in a collection?",
        "options": ["db.collection.all()", "db.collection.find()", "db.collection.select()", "db.collection.query()"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.find()",
        "difficulty": "easy",
        "explanation": "db.collection.find() returns a cursor to all documents in the collection when called without parameters.",
        "hint": "It's a simple four-letter method name related to searching."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which method returns only the first document that matches a query?",
        "options": ["db.collection.findOne()", "db.collection.getFirst()", "db.collection.firstMatch()", "db.collection.selectOne()"],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.findOne()",
        "difficulty": "easy",
        "explanation": "db.collection.findOne() returns the first document that satisfies the specified query criteria. If multiple documents satisfy the query, this method returns the first document according to natural order.",
        "hint": "It follows the same pattern as the method that returns all matching documents."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "What is the correct way to count documents in a collection?",
        "options": ["db.collection.count()", "db.collection.countDocuments()", "db.collection.size()", "db.collection.length()"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.countDocuments()",
        "difficulty": "medium",
        "explanation": "db.collection.countDocuments() is the recommended method to count documents in a collection. The older db.collection.count() method is now deprecated.",
        "hint": "It's the more accurate counting method introduced in MongoDB 4.0."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you apply a limit to the number of documents returned by a query?",
        "options": ["db.collection.find().max(5)", "db.collection.find().cap(5)", "db.collection.find().limit(5)", "db.collection.find(5)"],
        "correctOptionIndex": 2,
        "correctOptionText": "db.collection.find().limit(5)",
        "difficulty": "easy",
        "explanation": "The limit() method is used to specify the maximum number of documents the cursor will return.",
        "hint": "It's a method chained to find() that restricts the result size."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which method is used to update a single document in a collection?",
        "options": ["db.collection.modify()", "db.collection.updateOne()", "db.collection.change()", "db.collection.editOne()"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.updateOne()",
        "difficulty": "easy",
        "explanation": "db.collection.updateOne() updates a single document that matches the specified filter.",
        "hint": "The method name clearly indicates it updates exactly one document."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which operator is used to increment a field's value?",
        "options": ["$add", "$inc", "$plus", "$increment"],
        "correctOptionIndex": 1,
        "correctOptionText": "$inc",
        "difficulty": "medium",
        "explanation": "The $inc operator increments a field by a specified value. If the field does not exist, it creates the field and sets it to the specified value.",
        "hint": "It's an abbreviated version of 'increment'."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you sort documents in descending order by a specific field?",
        "options": ["db.collection.find().sort({field: -1})", "db.collection.find().sort({field: 'desc'})", "db.collection.find().orderBy({field: 'down'})", "db.collection.find().descending('field')"],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.find().sort({field: -1})",
        "difficulty": "medium",
        "explanation": "To sort in descending order, you use the sort() method with a value of -1 for the field. A value of 1 would sort in ascending order.",
        "hint": "It uses a numeric value to specify the sort direction."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which method is used to delete a single document that matches a condition?",
        "options": ["db.collection.remove()", "db.collection.delete()", "db.collection.deleteOne()", "db.collection.removeOne()"],
        "correctOptionIndex": 2,
        "correctOptionText": "db.collection.deleteOne()",
        "difficulty": "easy",
        "explanation": "db.collection.deleteOne() removes a single document that matches the specified filter criteria.",
        "hint": "The method name clearly indicates it deletes exactly one document."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you delete all documents in a collection?",
        "options": ["db.collection.deleteAll()", "db.collection.remove({})", "db.collection.deleteMany({})", "db.collection.clear()"],
        "correctOptionIndex": 2,
        "correctOptionText": "db.collection.deleteMany({})",
        "difficulty": "medium",
        "explanation": "db.collection.deleteMany({}) removes all documents from a collection as it matches all documents with an empty filter condition.",
        "hint": "It's a method that deletes multiple documents with an empty filter object."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "What's the recommended way to drop a collection?",
        "options": ["db.collection.remove()", "db.dropCollection('collection')", "db.collection.drop()", "db.collection.deleteAll()"],
        "correctOptionIndex": 2,
        "correctOptionText": "db.collection.drop()",
        "difficulty": "medium",
        "explanation": "db.collection.drop() is the preferred method to remove a collection entirely, including all documents and indexes.",
        "hint": "It's a short method name that indicates completely removing the collection."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you skip a certain number of documents in query results?",
        "options": ["db.collection.find().jump(5)", "db.collection.find().offset(5)", "db.collection.find().skip(5)", "db.collection.find().bypass(5)"],
        "correctOptionIndex": 2,
        "correctOptionText": "db.collection.find().skip(5)",
        "difficulty": "medium",
        "explanation": "The skip() method controls where MongoDB begins returning results. This is useful for pagination when combined with limit().",
        "hint": "It's a method that allows you to 'skip over' a number of documents in the results."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which of the following operators is used for equality comparison in queries?",
        "options": ["$eq", "$equals", "$is", "$same"],
        "correctOptionIndex": 0,
        "correctOptionText": "$eq",
        "difficulty": "medium",
        "explanation": "The $eq operator matches documents where the value of a field equals the specified value. However, it's often implicit (e.g., {field: value} is the same as {field: {$eq: value}}).",
        "hint": "It's an abbreviated form of 'equals'."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you find documents where a field is greater than a specific value?",
        "options": ["db.collection.find({field: {$greater: value}})", "db.collection.find({field: {$gt: value}})", "db.collection.find({field: {$more: value}})", "db.collection.find({field: '>' + value})"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.find({field: {$gt: value}})",
        "difficulty": "medium",
        "explanation": "The $gt operator selects documents where the value of the field is greater than (>) the specified value.",
        "hint": "It's a two-letter abbreviation for 'greater than'."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which operator is used to match values in an array?",
        "options": ["$contains", "$has", "$in", "$array"],
        "correctOptionIndex": 2,
        "correctOptionText": "$in",
        "difficulty": "medium",
        "explanation": "The $in operator selects documents where the value of a field equals any value in the specified array.",
        "hint": "The operator name suggests the value is 'in' a set of values."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you find documents where a field exists?",
        "options": ["db.collection.find({field: {$notNull: true}})", "db.collection.find({field: {$exists: true}})", "db.collection.find({field: {$has: true}})", "db.collection.find({field: {$defined: true}})"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.find({field: {$exists: true}})",
        "difficulty": "medium",
        "explanation": "The $exists operator matches documents that have the specified field, regardless of its value.",
        "hint": "The operator checks whether the field 'exists' in the document."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which method is used to update a document or insert it if it doesn't exist?",
        "options": ["db.collection.saveOrInsert()", "db.collection.upsert()", "db.collection.updateInsert()", "db.collection.updateOrInsert()"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.upsert()",
        "difficulty": "hard",
        "explanation": "While there isn't a direct upsert() method, upsert is a parameter option in updateOne() and updateMany(). When set to true, it creates a new document if no document matches the query.",
        "hint": "It's a combination of 'update' and 'insert' terms."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "What's the correct way to perform an upsert operation?",
        "options": ["db.collection.upsert(filter, update)", "db.collection.insertOrUpdate(filter, update)", "db.collection.updateOne(filter, update, {upsert: true})", "db.collection.updateOrInsert(filter, update)"],
        "correctOptionIndex": 2,
        "correctOptionText": "db.collection.updateOne(filter, update, {upsert: true})",
        "difficulty": "hard",
        "explanation": "To perform an upsert, you use updateOne() or updateMany() with the upsert option set to true in the options parameter.",
        "hint": "It uses a standard update method with a special option."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which operator is used to replace the entire document during an update?",
        "options": ["$replace", "$set", "$new", "$overwrite"],
        "correctOptionIndex": 1,
        "correctOptionText": "$set",
        "difficulty": "hard",
        "explanation": "While $set is normally used to update specific fields, when used with all fields of a document and no other update operators, it effectively replaces the entire document except for the _id field.",
        "hint": "This operator is commonly used to update specific fields, but can replace the entire document when used comprehensively."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you project (select) only specific fields in query results?",
        "options": ["db.collection.find({}, {field1: 1, field2: 1})", "db.collection.find().project({field1: true, field2: true})", "db.collection.find().select(['field1', 'field2'])", "db.collection.find().include('field1', 'field2')"],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.find({}, {field1: 1, field2: 1})",
        "difficulty": "medium",
        "explanation": "In MongoDB, projection is specified as the second parameter to find(). A value of 1 includes the field, while 0 excludes it.",
        "hint": "It's specified directly in the find method with numeric values to indicate inclusion."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which of the following methods is NOT a valid cursor method in MongoDB?",
        "options": ["sort()", "limit()", "skip()", "filter()"],
        "correctOptionIndex": 3,
        "correctOptionText": "filter()",
        "difficulty": "medium",
        "explanation": "filter() is not a valid cursor method in MongoDB. The filtering is done in the query parameter of find(). Valid cursor methods include sort(), limit(), skip(), count(), and others.",
        "hint": "Think about which method wouldn't make sense after already performing a find() operation."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "Which operator would you use to find documents where a field does NOT match a specific value?",
        "options": ["$not", "$ne", "$neq", "$notEquals"],
        "correctOptionIndex": 1,
        "correctOptionText": "$ne",
        "difficulty": "medium",
        "explanation": "The $ne (not equal) operator matches documents where the value of a field is not equal to the specified value.",
        "hint": "It's a two-letter abbreviation for 'not equal'."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "How do you find documents where a field matches any of several values?",
        "options": ["db.collection.find({field: {$any: [val1, val2]}})", "db.collection.find({field: {$in: [val1, val2]}})", "db.collection.find({field: {$or: [val1, val2]}})", "db.collection.find({$or: [{field: val1}, {field: val2}]})"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.find({field: {$in: [val1, val2]}})",
        "difficulty": "medium",
        "explanation": "The $in operator selects documents where the value of a field equals any value in the specified array.",
        "hint": "This operator checks if the field value is contained within a list of acceptable values."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "What does the pretty() method do in the MongoDB shell?",
        "options": ["Validates that the query is properly formatted", "Formats the output with proper indentation for better readability", "Optimizes the query for better performance", "Removes redundant fields from the output"],
        "correctOptionIndex": 1,
        "correctOptionText": "Formats the output with proper indentation for better readability",
        "difficulty": "easy",
        "explanation": "The pretty() method formats the output of find() with indentation and line breaks for better readability in the MongoDB shell.",
        "hint": "It affects how the results look, not what data is returned."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "What is the result of running db.collection.find().toArray() in the MongoDB shell?",
        "options": ["Returns a cursor object", "Returns an array of all matching documents", "Returns the count of matching documents", "Converts the collection to an array data structure"],
        "correctOptionIndex": 1,
        "correctOptionText": "Returns an array of all matching documents",
        "difficulty": "hard",
        "explanation": "The toArray() method consumes the cursor and returns an array containing all the documents that matched the query. Be careful with this on large collections as it loads all results into memory.",
        "hint": "It's helpful when you want to process results as a standard JavaScript array."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "MongoDB Shell & Basic Operations",
        "questionText": "What is the purpose of the explain() method in MongoDB?",
        "options": ["To document your query logic with comments", "To provide query execution statistics and plan information", "To convert the query results to a more understandable format", "To verify that your query syntax is correct"],
        "correctOptionIndex": 1,
        "correctOptionText": "To provide query execution statistics and plan information",
        "difficulty": "hard",
        "explanation": "The explain() method returns information about query execution, including which indexes were used and how many documents were examined. It's useful for query optimization and troubleshooting performance issues.",
        "hint": "It helps you understand how MongoDB executes your query internally."
    },

    // CRUD Operations
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which MongoDB method is used to insert a single document into a collection?",
        "options": ["insertOne()", "addOne()", "createOne()", "pushOne()"],
        "correctOptionIndex": 0,
        "correctOptionText": "insertOne()",
        "difficulty": "easy",
        "explanation": "The insertOne() method is used to insert a single document into a MongoDB collection.",
        "hint": "This method's name clearly indicates its purpose: to insert one document."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which of the following correctly inserts multiple documents at once in MongoDB?",
        "options": ["db.collection.insertMany()", "db.collection.addMany()", "db.collection.createMany()", "db.collection.bulkInsert()"],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.insertMany()",
        "difficulty": "easy",
        "explanation": "The insertMany() method allows you to insert multiple documents in a single operation, improving performance for bulk inserts.",
        "hint": "The method follows the same naming pattern as insertOne() but for multiple documents."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What is the MongoDB method to find all documents in a collection?",
        "options": ["find()", "findAll()", "getAll()", "select()"],
        "correctOptionIndex": 0,
        "correctOptionText": "find()",
        "difficulty": "easy",
        "explanation": "The find() method with no parameters returns all documents in a collection (though it's actually a cursor to the result set).",
        "hint": "This is the most basic query method in MongoDB."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which MongoDB method updates a single document that matches the filter criteria?",
        "options": ["updateOne()", "modifyOne()", "changeOne()", "editOne()"],
        "correctOptionIndex": 0,
        "correctOptionText": "updateOne()",
        "difficulty": "easy", 
        "explanation": "The updateOne() method updates a single document that matches the specified filter criteria.",
        "hint": "This method follows the same naming pattern as other single-document operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which MongoDB method removes a single document that matches the filter criteria?",
        "options": ["deleteOne()", "removeOne()", "dropOne()", "eraseOne()"],
        "correctOptionIndex": 0,
        "correctOptionText": "deleteOne()",
        "difficulty": "easy",
        "explanation": "The deleteOne() method deletes a single document that matches the specified filter criteria.",
        "hint": "This method is part of the CRUD operations and follows the same naming pattern as other single-document operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "In MongoDB, which method would you use to count the number of documents in a collection?",
        "options": ["count()", "countDocuments()", "size()", "length()"],
        "correctOptionIndex": 1,
        "correctOptionText": "countDocuments()",
        "difficulty": "easy",
        "explanation": "The countDocuments() method is used to count the number of documents in a collection. The count() method is deprecated.",
        "hint": "This method was introduced as a more accurate replacement for the deprecated count() method."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which operator is used to update specific fields in a document?",
        "options": ["$set", "$update", "$modify", "$change"],
        "correctOptionIndex": 0,
        "correctOptionText": "$set",
        "difficulty": "easy",
        "explanation": "The $set operator replaces the value of a field with the specified value without changing other fields.",
        "hint": "This operator 'sets' new values for the specified fields."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which method can update multiple documents at once?",
        "options": ["updateMany()", "modifyAll()", "updateAll()", "editMany()"],
        "correctOptionIndex": 0,
        "correctOptionText": "updateMany()",
        "difficulty": "easy",
        "explanation": "The updateMany() method updates all documents that match the specified filter criteria.",
        "hint": "This method follows the same naming pattern as insertMany() but for updates."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What MongoDB method is used to find a single document?",
        "options": ["findOne()", "getOne()", "selectOne()", "queryOne()"],
        "correctOptionIndex": 0,
        "correctOptionText": "findOne()",
        "difficulty": "easy",
        "explanation": "The findOne() method returns the first document that matches the query criteria.",
        "hint": "This method returns just one document instead of a cursor to multiple results."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which of the following is NOT a valid MongoDB update operator?",
        "options": ["$push", "$inc", "$modify", "$unset"],
        "correctOptionIndex": 2,
        "correctOptionText": "$modify",
        "difficulty": "medium",
        "explanation": "$modify is not a valid MongoDB update operator. The valid operators include $set, $unset, $inc, $push, $pull, etc.",
        "hint": "Think about the common update operations in MongoDB and their corresponding operators."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What does the upsert option do in MongoDB update operations?",
        "options": [
        "Creates a new document if no match is found",
        "Updates multiple documents at once",
        "Updates only specific fields",
        "Prevents document creation"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Creates a new document if no match is found",
        "difficulty": "medium",
        "explanation": "When upsert is set to true, if no documents match the filter, a new document is created based on the filter and update criteria.",
        "hint": "The term 'upsert' is a combination of 'update' and 'insert'."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which MongoDB method deletes all documents that match the filter criteria?",
        "options": ["deleteMany()", "removeAll()", "dropMany()", "deleteAll()"],
        "correctOptionIndex": 0,
        "correctOptionText": "deleteMany()",
        "difficulty": "medium",
        "explanation": "The deleteMany() method deletes all documents that match the specified filter criteria.",
        "hint": "This method follows the same naming pattern as insertMany() and updateMany()."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What is the purpose of the $inc operator in MongoDB?",
        "options": [
        "To increment a field by a specified value",
        "To include additional fields in the results",
        "To insert new documents",
        "To include referenced documents"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "To increment a field by a specified value",
        "difficulty": "medium",
        "explanation": "The $inc operator increments a field's value by the specified amount. If the field does not exist, it creates the field and sets the value.",
        "hint": "Think about what 'inc' might be short for in this context."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which of the following operators can be used to add an element to an array field?",
        "options": ["$push", "$add", "$append", "$insert"],
        "correctOptionIndex": 0,
        "correctOptionText": "$push",
        "difficulty": "medium",
        "explanation": "The $push operator appends a specified value to an array field. If the field doesn't exist, it creates the array field with the specified value as its element.",
        "hint": "This operator works similarly to the push method in many programming languages."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What does the findOneAndUpdate() method do in MongoDB?",
        "options": [
        "Updates a document and returns either the original or updated document",
        "Updates all documents matching a filter",
        "Updates a document only if it exists",
        "Updates and returns multiple documents"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Updates a document and returns either the original or updated document",
        "difficulty": "medium",
        "explanation": "The findOneAndUpdate() method updates a single document based on the filter and returns either the original document or the updated document depending on the returnOriginal parameter.",
        "hint": "This method combines finding and updating in a single atomic operation."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which parameter would you use to sort the results of a find() operation?",
        "options": ["sort()", "orderBy()", "arrange()", "sortBy()"],
        "correctOptionIndex": 0,
        "correctOptionText": "sort()",
        "difficulty": "medium",
        "explanation": "The sort() method is used on a cursor returned by find() to specify the order of returned documents. It takes an object parameter with field names as keys and sort order as values (1 for ascending, -1 for descending).",
        "hint": "This method directly indicates the operation it performs on the result set."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What does the $pull operator do in MongoDB?",
        "options": [
        "Removes all array elements that match a specified condition",
        "Pulls data from another collection",
        "Extracts specific fields from documents",
        "Removes the last element from an array"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Removes all array elements that match a specified condition",
        "difficulty": "medium",
        "explanation": "The $pull operator removes from an existing array all instances of a value or values that match a specified condition.",
        "hint": "Think of it as the opposite operation to $push."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What's the difference between deleteOne() and remove() methods in MongoDB?",
        "options": [
        "remove() is deprecated, deleteOne() is the recommended method",
        "deleteOne() removes only one document, remove() can remove multiple",
        "remove() is faster than deleteOne()",
        "They are exactly the same"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "remove() is deprecated, deleteOne() is the recommended method",
        "difficulty": "medium",
        "explanation": "The remove() method is deprecated in newer versions of MongoDB. deleteOne() and deleteMany() are the recommended methods for removing documents.",
        "hint": "Think about the evolution of MongoDB's API over time."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which method would you use to limit the number of documents returned by a query?",
        "options": ["limit()", "max()", "top()", "restrict()"],
        "correctOptionIndex": 0,
        "correctOptionText": "limit()",
        "difficulty": "medium",
        "explanation": "The limit() method specifies the maximum number of documents the cursor will return.",
        "hint": "This method sets an upper bound on the number of results."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which of the following correctly updates a field's value only if the new value is greater than the current value?",
        "options": ["$max", "$greater", "$higher", "$increase"],
        "correctOptionIndex": 0,
        "correctOptionText": "$max",
        "difficulty": "hard",
        "explanation": "The $max operator updates the value of the specified field to the specified value if the specified value is greater than the current value of the field.",
        "hint": "Think about mathematical operations and what would represent the upper bound."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What's the purpose of the findOneAndReplace() method in MongoDB?",
        "options": [
        "Replaces a single document and returns either the original or replacement document",
        "Finds and updates multiple documents",
        "Replaces all matching documents",
        "Finds a document and inserts a new one"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Replaces a single document and returns either the original or replacement document",
        "difficulty": "hard",
        "explanation": "The findOneAndReplace() method replaces a single document based on the filter and returns either the original document or the replacement document depending on the returnOriginal parameter.",
        "hint": "Consider what 'replace' means in contrast to 'update' in this context."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which operator would you use to update all elements in an array that match certain criteria?",
        "options": ["$[<identifier>]", "$[]", "$elemMatch", "$each"],
        "correctOptionIndex": 1,
        "correctOptionText": "$[]",
        "difficulty": "hard",
        "explanation": "The $[] operator is the all positional operator that updates all elements in an array field.",
        "hint": "This operator is used for positional updates across an entire array."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What does the bulkWrite() method allow you to do?",
        "options": [
        "Perform multiple write operations with a single command",
        "Write large documents faster",
        "Write to multiple collections at once",
        "Compress data before writing"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Perform multiple write operations with a single command",
        "difficulty": "hard",
        "explanation": "The bulkWrite() method allows you to perform multiple write operations (insertOne, updateOne, updateMany, replaceOne, deleteOne, and deleteMany) in a single command for better performance.",
        "hint": "This method is useful for batching different types of write operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What is the purpose of the $currentDate operator in MongoDB updates?",
        "options": [
        "Sets the value of a field to the current date or timestamp",
        "Compares the field with the current date",
        "Filters documents based on date fields",
        "Updates documents created on the current date"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Sets the value of a field to the current date or timestamp",
        "difficulty": "hard",
        "explanation": "The $currentDate operator sets the value of a field to the current date, either as a Date or a Timestamp.",
        "hint": "This operator is useful for automatically tracking when documents are modified."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which of the following correctly uses the findOneAndDelete() method?",
        "options": [
        "db.collection.findOneAndDelete({status: 'inactive'})",
        "db.collection.findOneAndDelete('status', 'inactive')",
        "db.collection.findOne({status: 'inactive'}).delete()",
        "db.collection.findAndDeleteOne({status: 'inactive'})"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.findOneAndDelete({status: 'inactive'})",
        "difficulty": "hard",
        "explanation": "The findOneAndDelete() method deletes a single document based on the filter criteria and returns the deleted document.",
        "hint": "This method follows MongoDB's standard pattern for query methods with filter criteria."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What does the replaceOne() method do differently compared to updateOne()?",
        "options": [
        "Completely replaces the matched document except for _id",
        "Updates only specific fields in the document",
        "Replaces multiple documents at once",
        "Creates a backup of the original document"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Completely replaces the matched document except for _id",
        "difficulty": "hard",
        "explanation": "The replaceOne() method completely replaces the matched document with the new document, except for the _id field. updateOne() only modifies the specified fields.",
        "hint": "Think about the difference between replacing something entirely versus updating parts of it."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which of the following options is NOT a valid parameter for insertMany()?",
        "options": ["ordered", "bypassDocumentValidation", "w", "partial"],
        "correctOptionIndex": 3,
        "correctOptionText": "partial",
        "difficulty": "hard",
        "explanation": "The 'partial' option is not a valid parameter for insertMany(). Valid options include 'ordered', 'bypassDocumentValidation', and write concern options like 'w'.",
        "hint": "Consider the common parameters that control how batch operations behave."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "What happens if you run an updateOne() operation with an empty filter {}?",
        "options": [
        "Updates the first document in the collection",
        "Updates all documents in the collection",
        "Returns an error",
        "Has no effect"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Updates the first document in the collection",
        "difficulty": "hard",
        "explanation": "When an updateOne() operation is run with an empty filter {}, it matches the first document in the collection and updates it.",
        "hint": "Think about what 'One' in updateOne() means and how MongoDB would handle an empty filter that matches everything."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "CRUD Operations",
        "questionText": "Which command would be most efficient for inserting 1,000 documents into a collection?",
        "options": [
        "db.collection.insertMany() with 1,000 documents",
        "db.collection.insertOne() in a loop 1,000 times",
        "db.collection.insert() with 1,000 documents",
        "db.collection.save() in a loop 1,000 times"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.insertMany() with 1,000 documents",
        "difficulty": "hard",
        "explanation": "The insertMany() method is designed for bulk inserts and is much more efficient than performing 1,000 individual insertOne() operations. It reduces network overhead and can be optimized by the server.",
        "hint": "Consider which approach minimizes the number of round trips to the server."
    },

    // Data Modeling
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which of the following is a key characteristic of document-oriented data modeling in MongoDB?",
        "options": [
        "Data is normalized across multiple tables",
        "Related data is stored together in a single document",
        "Relationships are defined using foreign keys",
        "Schema must be defined before inserting data"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Related data is stored together in a single document",
        "difficulty": "easy",
        "explanation": "MongoDB's document model allows related data to be embedded within a single document, reducing the need for joins and improving query performance.",
        "hint": "Think about how MongoDB differs from relational databases in terms of data storage."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is embedding in MongoDB data modeling?",
        "options": [
        "Storing related data in the same document",
        "Creating indexes on fields",
        "Defining constraints between collections",
        "Storing database files in memory"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Storing related data in the same document",
        "difficulty": "easy",
        "explanation": "Embedding is the practice of including related data within a single document structure, which is one of the primary data modeling techniques in MongoDB.",
        "hint": "This technique keeps related data together in one place."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is a common use case for embedding documents in MongoDB?",
        "options": [
        "When the embedded data is frequently accessed together with the parent document",
        "When the embedded data is extremely large",
        "When the embedded data changes frequently",
        "When the embedded data needs to be accessed independently"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "When the embedded data is frequently accessed together with the parent document",
        "difficulty": "easy",
        "explanation": "Embedding is most beneficial when the embedded data is commonly retrieved alongside the parent document, reducing the need for additional queries.",
        "hint": "Think about query patterns and data access efficiency."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is referencing in MongoDB data modeling?",
        "options": [
        "Storing references (typically IDs) to documents in other collections",
        "Creating exact copies of documents",
        "Using indexes to speed up queries",
        "Storing document data in memory"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Storing references (typically IDs) to documents in other collections",
        "difficulty": "easy",
        "explanation": "Referencing involves storing the IDs of related documents rather than embedding the entire document, similar to foreign keys in relational databases.",
        "hint": "This approach connects documents across different collections."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which statement about MongoDB schema design is TRUE?",
        "options": [
        "MongoDB is schema-less, allowing documents in the same collection to have different fields",
        "MongoDB requires a strict schema definition before any data can be inserted",
        "All documents in a MongoDB database must share the same structure",
        "Schema changes require downtime in MongoDB"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "MongoDB is schema-less, allowing documents in the same collection to have different fields",
        "difficulty": "easy",
        "explanation": "MongoDB is schema-less or has a flexible schema, meaning documents within the same collection can have different fields and structures.",
        "hint": "This is one of MongoDB's key differences from traditional relational databases."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is the maximum document size in MongoDB?",
        "options": ["16 MB", "32 MB", "64 MB", "No limit"],
        "correctOptionIndex": 0,
        "correctOptionText": "16 MB",
        "difficulty": "easy",
        "explanation": "MongoDB imposes a 16 MB size limit on documents. For larger objects, GridFS can be used to split data across multiple documents.",
        "hint": "This is a fixed limitation in MongoDB's architecture."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which of the following is NOT a common data modeling pattern in MongoDB?",
        "options": [
        "Attribute Pattern",
        "Polymorphic Pattern",
        "Bucket Pattern",
        "Join Pattern"
        ],
        "correctOptionIndex": 3,
        "correctOptionText": "Join Pattern",
        "difficulty": "easy",
        "explanation": "The 'Join Pattern' is not a standard MongoDB data modeling pattern. MongoDB typically uses embedding or referencing instead of joins. Common patterns include Attribute, Polymorphic, Bucket, Subset, and Extended Reference patterns.",
        "hint": "Think about which term comes from relational database terminology."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "When would you choose referencing over embedding in MongoDB?",
        "options": [
        "When the referenced data is large and infrequently accessed",
        "When you need atomic operations across related data",
        "When you always retrieve the related data together",
        "When the data model is very simple"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "When the referenced data is large and infrequently accessed",
        "difficulty": "easy",
        "explanation": "Referencing is preferred when the related data is large and not frequently accessed together with the main document, avoiding unnecessary data retrieval.",
        "hint": "Consider data size and access patterns when choosing between embedding and referencing."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is a potential drawback of excessive embedding in MongoDB?",
        "options": [
        "Documents may exceed the 16 MB size limit",
        "It makes indexing more efficient",
        "It reduces query complexity",
        "It improves read performance"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Documents may exceed the 16 MB size limit",
        "difficulty": "easy",
        "explanation": "Excessive embedding can lead to documents that approach or exceed MongoDB's 16 MB document size limit, especially if the embedded data grows over time.",
        "hint": "Think about the constraints that MongoDB imposes on document size."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which type of relationship is BEST modeled using embedding in MongoDB?",
        "options": [
        "One-to-few relationship",
        "Many-to-many relationship",
        "One-to-millions relationship",
        "Dynamic relationship"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "One-to-few relationship",
        "difficulty": "medium",
        "explanation": "One-to-few relationships are ideal for embedding because the limited number of related items won't cause the document to grow excessively, and they're often accessed together.",
        "hint": "Consider the cardinality of relationships and how it affects document size."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is denormalization in the context of MongoDB data modeling?",
        "options": [
        "Duplicating data across documents to improve read performance",
        "Splitting data into multiple collections to improve write performance",
        "Enforcing a strict schema on all documents",
        "Removing unnecessary fields from documents"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Duplicating data across documents to improve read performance",
        "difficulty": "medium",
        "explanation": "Denormalization involves intentionally duplicating data across multiple documents to reduce the need for joins and improve read performance, at the cost of more complex updates.",
        "hint": "This technique prioritizes read efficiency over storage efficiency."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is the Extended Reference pattern in MongoDB?",
        "options": [
        "Storing a copy of frequently accessed fields from referenced documents",
        "Creating extended indexes on reference fields",
        "Using longer ObjectIDs for references",
        "Extending the document size limit for references"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Storing a copy of frequently accessed fields from referenced documents",
        "difficulty": "medium",
        "explanation": "The Extended Reference pattern involves storing a subset of fields from a referenced document alongside the reference itself, reducing the need for separate lookups for commonly accessed data.",
        "hint": "This pattern combines aspects of both referencing and denormalization."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which of the following is a valid concern when using embedding in MongoDB?",
        "options": [
        "Updates to embedded documents may require rewriting the entire parent document",
        "Embedded documents cannot contain arrays",
        "Embedded documents cannot be individually indexed",
        "Embedded documents cannot exceed 1 MB in size"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Updates to embedded documents may require rewriting the entire parent document",
        "difficulty": "medium",
        "explanation": "When updating embedded documents, MongoDB may need to rewrite the entire parent document, especially if the document size changes. This can impact write performance for large documents with frequently updated embedded data.",
        "hint": "Think about the implications for write operations when documents contain embedded data."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is the Bucket Pattern in MongoDB?",
        "options": [
        "Grouping related time-series data into documents with fixed time ranges",
        "Storing documents in memory buckets for faster access",
        "Organizing collections into separate database buckets",
        "Partitioning data based on geographic regions"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Grouping related time-series data into documents with fixed time ranges",
        "difficulty": "medium",
        "explanation": "The Bucket Pattern involves grouping related time-series data points into documents that represent fixed time ranges (buckets), optimizing for time-based queries and preventing excessive document growth.",
        "hint": "This pattern is particularly useful for time-series data with many data points."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is the Subset Pattern in MongoDB?",
        "options": [
        "Splitting a document and keeping only the most frequently accessed fields in the main document",
        "Creating a subset of collections for specific queries",
        "Defining a subset of indexes for optimization",
        "Using a subset of available MongoDB features"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Splitting a document and keeping only the most frequently accessed fields in the main document",
        "difficulty": "medium",
        "explanation": "The Subset Pattern involves dividing a document into two parts: a main document with frequently accessed fields and a separate document with less frequently accessed fields. This optimizes for common queries while handling large data sets.",
        "hint": "This pattern helps optimize for the most common access patterns."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which approach would be best for modeling a many-to-many relationship in MongoDB?",
        "options": [
        "Using an array of references in both collections",
        "Always embedding all related documents",
        "Creating a third collection to store relationship information",
        "Using a single document to store all relationships"
        ],
        "correctOptionIndex": 2,
        "correctOptionText": "Creating a third collection to store relationship information",
        "difficulty": "medium",
        "explanation": "For true many-to-many relationships, especially with additional relationship metadata, creating a third collection (similar to a junction table in relational databases) is often the most flexible and scalable approach.",
        "hint": "Think about how complex relationships are modeled in both document and relational databases."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is the Schema Versioning Pattern in MongoDB?",
        "options": [
        "Including a version field in documents to track schema changes",
        "Creating multiple collections for different schema versions",
        "Using MongoDB's built-in versioning system",
        "Storing schema definitions in a separate collection"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Including a version field in documents to track schema changes",
        "difficulty": "medium",
        "explanation": "The Schema Versioning Pattern involves adding a version field to documents to track which schema version they conform to, allowing applications to handle documents with different structures.",
        "hint": "This pattern helps manage schema evolution over time."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which of the following is TRUE about MongoDB's document model?",
        "options": [
        "It allows for nested documents up to 100 levels deep",
        "Field names cannot contain periods or start with dollar signs",
        "Document keys must be unique across the entire database",
        "All documents must have the same set of fields"
        ],
        "correctOptionIndex": 1,
        "correctOptionText": "Field names cannot contain periods or start with dollar signs",
        "difficulty": "medium",
        "explanation": "MongoDB imposes some restrictions on field names: they cannot contain periods (.) or start with dollar signs ($) as these characters have special meaning in MongoDB's query language.",
        "hint": "Some characters have special meaning in MongoDB's query syntax."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "When is the Polymorphic Pattern useful in MongoDB?",
        "options": [
        "When storing similar but not identical entities in the same collection",
        "When creating polymorphic functions in MongoDB",
        "When designing multiple database schemas",
        "When implementing polyglot persistence with MongoDB"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "When storing similar but not identical entities in the same collection",
        "difficulty": "medium",
        "explanation": "The Polymorphic Pattern is useful when you need to store similar but not identical entities (e.g., different types of products) in the same collection, using a type field to distinguish between them.",
        "hint": "This pattern helps manage different entity types with shared and unique attributes."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which data modeling technique would be MOST appropriate for storing a product catalog with thousands of products where each product has a different set of attributes?",
        "options": [
        "Attribute Pattern",
        "Bucket Pattern",
        "Subset Pattern",
        "Tree Pattern"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Attribute Pattern",
        "difficulty": "hard",
        "explanation": "The Attribute Pattern stores a product's attributes as key-value pairs in an array, allowing each product to have a different set of attributes without creating sparse documents with many null values.",
        "hint": "Think about which pattern best handles variable attributes across entities."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is the primary challenge when modeling hierarchical data (like organizational charts or category trees) in MongoDB?",
        "options": [
        "Efficiently querying ancestors or descendants at any level",
        "Storing the hierarchical data in document format",
        "Enforcing referential integrity between parent and child nodes",
        "Maintaining a consistent schema across all nodes"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Efficiently querying ancestors or descendants at any level",
        "difficulty": "hard",
        "explanation": "The main challenge with hierarchical data is designing a model that allows efficient queries for ancestors or descendants at any level without requiring multiple queries or excessive data duplication.",
        "hint": "Consider the types of traversal operations that are common with tree structures."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which of the following patterns is MOST appropriate for modeling a tree structure in MongoDB?",
        "options": [
        "Parent References pattern",
        "Extended Reference pattern",
        "Computed Pattern",
        "Column-Oriented Pattern"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Parent References pattern",
        "difficulty": "hard",
        "explanation": "The Parent References pattern stores a reference to the parent node in each document, making it easy to find immediate children of a node and to traverse up the tree.",
        "hint": "This pattern allows for simple navigation of parent-child relationships."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "When implementing the Materialized Path pattern for hierarchical data, what is typically stored in each document?",
        "options": [
        "A string representation of the entire path from the root to the current node",
        "An array of all ancestor IDs",
        "Only the immediate parent ID",
        "The depth level of the node in the hierarchy"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "A string representation of the entire path from the root to the current node",
        "difficulty": "hard",
        "explanation": "The Materialized Path pattern stores the complete path from root to node, often as a string using delimiters (e.g., '/ancestors/parents/node'). This allows for efficient queries at any level of the hierarchy.",
        "hint": "This approach encodes the entire ancestry into a single field."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is the Computed Pattern in MongoDB data modeling?",
        "options": [
        "Storing pre-computed values alongside source data to avoid expensive calculations during reads",
        "Using MongoDB's compute engine to calculate values on-the-fly",
        "Computing optimal indexes for a collection",
        "Dynamically computing the schema based on inserted documents"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Storing pre-computed values alongside source data to avoid expensive calculations during reads",
        "difficulty": "hard",
        "explanation": "The Computed Pattern involves calculating and storing values during writes so they don't need to be calculated during reads, trading write complexity for read efficiency.",
        "hint": "This pattern optimizes for read performance at the expense of write operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What technique can be used to ensure referential integrity in MongoDB despite the lack of built-in foreign key constraints?",
        "options": [
        "Implementing application-level checks before performing delete operations",
        "Using MongoDB's built-in CASCADE option",
        "Creating a foreign key index",
        "Enabling the referential integrity setting in MongoDB"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Implementing application-level checks before performing delete operations",
        "difficulty": "hard",
        "explanation": "Since MongoDB doesn't have built-in foreign key constraints, referential integrity must be maintained at the application level by checking for existing references before deleting documents.",
        "hint": "MongoDB leaves certain database constraints to be handled by the application layer."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is the Outlier Pattern in MongoDB data modeling?",
        "options": [
        "Handling exceptional cases separately from the standard model",
        "Identifying statistical outliers in data sets",
        "Flagging documents that don't match the expected schema",
        "Removing outlier values from aggregation results"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Handling exceptional cases separately from the standard model",
        "difficulty": "hard",
        "explanation": "The Outlier Pattern involves using the standard model for most cases but handling rare outliers (e.g., users with thousands of addresses) differently to prevent performance issues for the majority of cases.",
        "hint": "This pattern focuses on special handling for unusual cases that don't fit the general pattern."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "Which of the following would be an appropriate use case for the Approximation pattern in MongoDB?",
        "options": [
        "Storing an approximate count of page views instead of individual records for each view",
        "Using approximate indexes for faster queries",
        "Approximating document sizes before insertion",
        "Implementing approximate matching for text queries"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Storing an approximate count of page views instead of individual records for each view",
        "difficulty": "hard",
        "explanation": "The Approximation pattern involves storing estimated or rounded values when absolute precision isn't required, such as page view counts where an exact count isn't critical but the volume of individual records would be problematic.",
        "hint": "This pattern trades exact precision for performance in high-volume scenarios."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "In which scenario would the Pre-allocation Pattern be most useful?",
        "options": [
        "When you need to ensure documents don't grow in size after creation",
        "When you need to reserve database space in advance",
        "When pre-computing values for the Computed Pattern",
        "When allocating server resources for MongoDB"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "When you need to ensure documents don't grow in size after creation",
        "difficulty": "hard",
        "explanation": "The Pre-allocation Pattern involves creating documents with placeholders for future data, ensuring the document doesn't grow in size when updated. This improves update performance by avoiding document relocations.",
        "hint": "This pattern helps optimize for document updates that might otherwise cause document growth."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "When modeling time-series data in MongoDB, what is an advantage of the Bucketing approach over simply storing each data point as a separate document?",
        "options": [
        "Reduces the total number of documents, improving query performance",
        "Allows for more accurate timestamp storage",
        "Enables better compression of time data",
        "Provides built-in time zone conversion"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Reduces the total number of documents, improving query performance",
        "difficulty": "hard",
        "explanation": "Bucketing time-series data groups multiple data points into a single document (e.g., one document per hour or day), drastically reducing the total document count and improving query performance compared to storing each reading as a separate document.",
        "hint": "Think about the performance implications of having millions of tiny documents versus fewer larger documents."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Data Modeling",
        "questionText": "What is a key consideration when implementing schema changes in a MongoDB database with existing data?",
        "options": [
        "Planning for both forward and backward compatibility during the transition period",
        "Always creating a new collection for the new schema",
        "Using MongoDB's automatic schema migration tool",
        "Locking the database during schema updates"
        ],
        "correctOptionIndex": 0,
        "correctOptionText": "Planning for both forward and backward compatibility during the transition period",
        "difficulty": "hard",
        "explanation": "When implementing schema changes, it's crucial to ensure that your application can handle both old and new document formats during the transition period, as schema changes are typically rolled out gradually.",
        "hint": "This approach allows for smooth migrations without downtime."
    },

    // Indexing Strategies
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is the primary purpose of creating an index in MongoDB?",
        "options": ["To save disk space", "To improve query performance", "To encrypt sensitive data", "To enable sharding"],
        "correctOptionIndex": 1,
        "correctOptionText": "To improve query performance",
        "difficulty": "easy",
        "explanation": "Indexes in MongoDB improve query performance by reducing the number of documents that need to be scanned when executing a query.",
        "hint": "Think about how indexes affect the speed of data retrieval operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "Which MongoDB command is used to create a new index?",
        "options": ["db.collection.createIndex()", "db.collection.addIndex()", "db.collection.newIndex()", "db.collection.makeIndex()"],
        "correctOptionIndex": 0,
        "correctOptionText": "db.collection.createIndex()",
        "difficulty": "easy",
        "explanation": "The db.collection.createIndex() method is used to create a new index on a specified field in a collection.",
        "hint": "This is a basic command for adding indexes to MongoDB collections."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is the default index that MongoDB creates for every collection?",
        "options": ["_id index", "Primary key index", "Unique index", "Default index"],
        "correctOptionIndex": 0,
        "correctOptionText": "_id index",
        "difficulty": "easy",
        "explanation": "MongoDB automatically creates a unique index on the _id field for every collection during creation.",
        "hint": "Think about which field is guaranteed to be indexed in every MongoDB collection."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "Which of the following index types is best suited for searching text content?",
        "options": ["Single field index", "Compound index", "Text index", "Geospatial index"],
        "correctOptionIndex": 2,
        "correctOptionText": "Text index",
        "difficulty": "easy",
        "explanation": "Text indexes in MongoDB support text search queries on string content, allowing for efficient searching across text fields.",
        "hint": "Which index type is specifically designed for natural language content?"
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "Which command would you use to view all indexes on a collection named 'products'?",
        "options": ["db.products.indexes()", "db.products.getIndexes()", "db.products.showIndexes()", "db.products.listIndexes()"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.products.getIndexes()",
        "difficulty": "easy",
        "explanation": "The db.collection.getIndexes() method returns an array of documents that describe the existing indexes on a collection.",
        "hint": "This command retrieves information about all indexes defined on a collection."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is a compound index in MongoDB?",
        "options": ["An index that uses hashing algorithm", "An index on multiple fields", "An index that allows duplicate values", "An index that supports text search"],
        "correctOptionIndex": 1,
        "correctOptionText": "An index on multiple fields",
        "difficulty": "easy",
        "explanation": "A compound index is an index structure that includes multiple fields, allowing queries that match on all or some of these fields to use the index.",
        "hint": "This type of index involves more than one field in its definition."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What happens when you create an index on a large collection in MongoDB?",
        "options": ["The database locks only the collection being indexed", "The database locks all collections in the database", "The index is created instantly with no performance impact", "The database locks the entire database during index creation"],
        "correctOptionIndex": 0,
        "correctOptionText": "The database locks only the collection being indexed",
        "difficulty": "medium",
        "explanation": "When creating an index on a large collection, MongoDB 4.2+ uses a rolling index build that only locks the collection being indexed, not the entire database. Older versions had different locking behaviors.",
        "hint": "Consider the scope of the lock that MongoDB applies during index creation operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is the correct format to create a descending index on a 'timestamp' field?",
        "options": ["db.collection.createIndex({timestamp: 'DESC'})", "db.collection.createIndex({timestamp: -1})", "db.collection.createIndex({timestamp: 'descending'})", "db.collection.createIndex({timestamp: false})"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.createIndex({timestamp: -1})",
        "difficulty": "medium",
        "explanation": "In MongoDB, you specify sort order as 1 for ascending or -1 for descending when creating an index.",
        "hint": "MongoDB uses numeric values to indicate sort direction in index definitions."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "When would a 2dsphere index be most appropriate?",
        "options": ["For full-text search", "For range queries on numeric fields", "For exact matches on string fields", "For geospatial queries with GeoJSON data"],
        "correctOptionIndex": 3,
        "correctOptionText": "For geospatial queries with GeoJSON data",
        "difficulty": "medium",
        "explanation": "2dsphere indexes support queries that calculate geometries on an earth-like sphere, making them ideal for geospatial data stored as GeoJSON objects.",
        "hint": "This specialized index type is designed for a specific category of spatial data."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "Which of the following options can be specified when creating an index?",
        "options": ["unique, sparse, expireAfterSeconds", "primary, foreign, reference", "clustered, non-clustered, hash", "indexed, non-indexed, partial"],
        "correctOptionIndex": 0,
        "correctOptionText": "unique, sparse, expireAfterSeconds",
        "difficulty": "medium",
        "explanation": "MongoDB supports several index options including unique (for uniqueness constraints), sparse (for indexing only documents that have the field), and expireAfterSeconds (for TTL indexes).",
        "hint": "These are valid options you can specify when calling createIndex() method."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is a multikey index in MongoDB?",
        "options": ["An index on multiple fields", "An index that supports multiple databases", "An index on array fields", "An index created by multiple administrators"],
        "correctOptionIndex": 2,
        "correctOptionText": "An index on array fields",
        "difficulty": "medium",
        "explanation": "A multikey index is automatically created when you index a field that contains an array value. MongoDB creates index entries for each element in the array.",
        "hint": "This type of index deals with fields that contain multiple values."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is the purpose of a 'sparse' index in MongoDB?",
        "options": ["It reduces index size by using compression", "It only includes documents where the indexed field exists", "It creates partial copies of the index across shards", "It removes duplicate values from the index"],
        "correctOptionIndex": 1,
        "correctOptionText": "It only includes documents where the indexed field exists",
        "difficulty": "medium",
        "explanation": "A sparse index only contains entries for documents that have the indexed field, even if it's null. Documents without the field are not indexed.",
        "hint": "This type of index is more space-efficient for collections where a field isn't present in all documents."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What does the 'background' option do when creating an index?",
        "options": ["Speeds up index creation", "Creates the index in a background thread", "Enables background reads during index creation", "Stores the index in background storage"],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates the index in a background thread",
        "difficulty": "medium",
        "explanation": "The background option allows index creation to occur in the background so the database remains available during the build process, although the index build itself may be slower.",
        "hint": "This option affects how the indexing operation impacts ongoing database operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What MongoDB index type would you use to automatically delete documents after a certain time period?",
        "options": ["Expiring index", "TTL index", "Temporal index", "Time-limited index"],
        "correctOptionIndex": 1,
        "correctOptionText": "TTL index",
        "difficulty": "medium",
        "explanation": "TTL (Time-To-Live) indexes in MongoDB automatically remove documents from a collection after a specified number of seconds has passed since the indexed field value.",
        "hint": "This special index type manages document lifetime based on a timestamp field."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "In a compound index on fields {a: 1, b: 1, c: 1}, which queries can use this index?",
        "options": ["Only queries that filter on all three fields a, b, and c", "Only queries that filter on field a", "Queries that filter on a, or a and b, or a and b and c", "Any query that filters on any combination of a, b, or c"],
        "correctOptionIndex": 2,
        "correctOptionText": "Queries that filter on a, or a and b, or a and b and c",
        "difficulty": "hard",
        "explanation": "A compound index can support queries on the leading field(s). So a compound index on {a, b, c} can support queries on: a, a and b, or all three fields a, b, and c, but not queries that don't include the leading field a.",
        "hint": "Consider the prefix rule for compound indexes and how it affects which queries can utilize the index."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is the maximum number of text indexes that can be created on a single collection?",
        "options": ["One", "Two", "Ten", "Unlimited"],
        "correctOptionIndex": 0,
        "correctOptionText": "One",
        "difficulty": "medium",
        "explanation": "MongoDB limits a collection to a maximum of one text index. This text index can include multiple fields, but you cannot have multiple separate text indexes on a single collection.",
        "hint": "MongoDB has a specific limitation regarding the number of text indexes per collection."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is a covered query in MongoDB?",
        "options": ["A query protected by authentication", "A query that uses multiple indexes", "A query where all fields in the query are part of an index", "A query where all required fields are returned from the index without examining documents"],
        "correctOptionIndex": 3,
        "correctOptionText": "A query where all required fields are returned from the index without examining documents",
        "difficulty": "hard",
        "explanation": "A covered query is when all fields in the query are part of an index and all fields returned in the results are in the same index, so MongoDB can return results directly from the index without accessing the actual documents.",
        "hint": "This query optimization scenario happens when MongoDB can satisfy a query entirely from index data."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What does the 'hint()' method do in MongoDB?",
        "options": ["Provides suggestions for query optimization", "Forces MongoDB to use a specific index", "Displays help information about indexes", "Hints at potential index candidates"],
        "correctOptionIndex": 1,
        "correctOptionText": "Forces MongoDB to use a specific index",
        "difficulty": "medium",
        "explanation": "The hint() method forces the MongoDB query optimizer to use a specific index to fulfill a query, overriding the default index selection process.",
        "hint": "This method gives you manual control over the query execution plan."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is a partial index in MongoDB?",
        "options": ["An index on only part of a field's content", "An index on partial matches using regular expressions", "An index that only includes documents meeting a specified filter expression", "An index shared between multiple collections"],
        "correctOptionIndex": 2,
        "correctOptionText": "An index that only includes documents meeting a specified filter expression",
        "difficulty": "hard",
        "explanation": "A partial index only indexes documents in a collection that meet a specified filter expression. This can make indexes more efficient when queries commonly filter for the same subset of documents.",
        "hint": "This type of index can be more space and performance efficient when you only need to index a specific subset of your documents."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "Which of the following best describes the impact of creating too many indexes on a collection?",
        "options": ["It always improves read performance with no downsides", "It may slow down write operations but has no effect on reads", "It can speed up certain queries while slowing down write operations", "It has no impact on performance but increases storage requirements"],
        "correctOptionIndex": 2,
        "correctOptionText": "It can speed up certain queries while slowing down write operations",
        "difficulty": "medium",
        "explanation": "While indexes can speed up read operations, each index must be updated when the collection is modified. Having too many indexes can therefore slow down write operations (inserts, updates, deletes).",
        "hint": "Consider the performance trade-off between read and write operations when using indexes."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What happens to indexes when you drop a collection in MongoDB?",
        "options": ["The indexes remain but become inactive", "The indexes are automatically recreated when a new collection with the same name is created", "The indexes are dropped along with the collection", "Only the default _id index is dropped"],
        "correctOptionIndex": 2,
        "correctOptionText": "The indexes are dropped along with the collection",
        "difficulty": "easy",
        "explanation": "When you drop a collection using db.collection.drop(), all indexes associated with that collection are also dropped.",
        "hint": "Think about the relationship between a collection and its indexes when the collection is removed."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "How can you determine if a query is using an index in MongoDB?",
        "options": ["db.collection.isIndexed(query)", "db.collection.stats()", "db.collection.explain()", "db.collection.indexStats()"],
        "correctOptionIndex": 2,
        "correctOptionText": "db.collection.explain()",
        "difficulty": "medium",
        "explanation": "The explain() method provides information about how MongoDB executes a query, including whether it uses an index and which index it selects.",
        "hint": "This method gives you visibility into the query execution plan."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is the command to drop an index named 'email_1' on a collection named 'users'?",
        "options": ["db.users.indexes.remove('email_1')", "db.users.dropIndex('email_1')", "db.users.deleteIndex('email_1')", "db.users.index('email_1').drop()"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.users.dropIndex('email_1')",
        "difficulty": "easy",
        "explanation": "The dropIndex() method removes a specified index from a collection. You can specify the index by name or by the same specification document used to create the index.",
        "hint": "This command removes an existing index from a collection."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "In which order are the fields arranged in a compound index?",
        "options": ["Alphabetical order", "Order of fields in the collection schema", "Order of fields specified when creating the index", "Automatic optimization by MongoDB"],
        "correctOptionIndex": 2,
        "correctOptionText": "Order of fields specified when creating the index",
        "difficulty": "easy",
        "explanation": "In a compound index, the order of fields is the exact order you specify when creating the index. This order is significant for determining which queries can use the index efficiently.",
        "hint": "The sequence in which you list fields when creating a compound index is meaningful."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is the effect of the 'unique' option when creating an index?",
        "options": ["It creates a special index for unique queries", "It restricts the index to only fields with unique values", "It ensures no two documents can have the same value for the indexed field(s)", "It creates a standalone index separate from the collection"],
        "correctOptionIndex": 2,
        "correctOptionText": "It ensures no two documents can have the same value for the indexed field(s)",
        "difficulty": "easy",
        "explanation": "The unique option creates a constraint that prevents inserting or updating documents with duplicate values in the indexed field(s). If you attempt to insert a document with a duplicate value, MongoDB will raise a duplicate key error.",
        "hint": "This option enforces data integrity by preventing duplicate values."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What does the 'expireAfterSeconds' option do when creating an index?",
        "options": ["Deletes the index after the specified time", "Makes the index invisible after the specified time", "Removes documents from the collection after the specified time has passed since the indexed date field", "Refreshes the index data after the specified time"],
        "correctOptionIndex": 2,
        "correctOptionText": "Removes documents from the collection after the specified time has passed since the indexed date field",
        "difficulty": "medium",
        "explanation": "The expireAfterSeconds option creates a TTL (Time-To-Live) index that automatically removes documents from a collection after a specified number of seconds has elapsed since the time specified in the indexed field.",
        "hint": "This feature provides automatic data cleanup based on document age."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is the practical limit to the number of indexes you can create on a single collection in MongoDB?",
        "options": ["10", "64", "128", "No hard limit"],
        "correctOptionIndex": 1,
        "correctOptionText": "64",
        "difficulty": "hard",
        "explanation": "MongoDB has a limit of 64 indexes per collection. This includes the default _id index that MongoDB creates automatically.",
        "hint": "MongoDB does impose a specific upper bound on the number of indexes per collection."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "What is a hashed index in MongoDB used for?",
        "options": ["For securing data with cryptographic hashes", "For exact matching on string fields", "For range-based queries on numeric fields", "For supporting sharding based on hashed shard keys"],
        "correctOptionIndex": 3,
        "correctOptionText": "For supporting sharding based on hashed shard keys",
        "difficulty": "hard",
        "explanation": "Hashed indexes store hashes of the values of the indexed field. They are primarily used to support hashed shard keys in a sharded cluster, which enables more even data distribution across shards.",
        "hint": "This specialized index type is particularly useful in distributed MongoDB deployments."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "Which explain() verbosity mode provides the most detailed information about query execution?",
        "options": ["queryPlanner", "executionStats", "allPlansExecution", "detailedPlan"],
        "correctOptionIndex": 2,
        "correctOptionText": "allPlansExecution",
        "difficulty": "hard",
        "explanation": "The 'allPlansExecution' verbosity mode provides the most comprehensive information, including details about the query planner's consideration of all candidate plans and their execution statistics.",
        "hint": "This mode gives you the fullest picture of how MongoDB evaluated different execution strategies."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Indexing Strategies",
        "questionText": "Which of the following cannot be indexed in MongoDB?",
        "options": ["Arrays", "Embedded documents", "Regular expressions", "Functions"],
        "correctOptionIndex": 3,
        "correctOptionText": "Functions",
        "difficulty": "hard",
        "explanation": "MongoDB cannot create indexes on fields that contain functions or JavaScript code. You can index arrays, embedded documents, and even fields that contain regular expressions as values, but not functions.",
        "hint": "Consider which data types cannot be effectively compared or sorted in a meaningful way for indexing."
    },
    
    // Aggregation Framework
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the primary purpose of MongoDB's Aggregation Framework?",
        "options": ["To create indexes on collections", "To process and analyze data within the database", "To manage MongoDB users and roles", "To back up MongoDB databases"],
        "correctOptionIndex": 1,
        "correctOptionText": "To process and analyze data within the database",
        "difficulty": "easy",
        "explanation": "MongoDB's Aggregation Framework is designed to process data records and return computed results, allowing for data transformation and analysis operations to occur within the database rather than in application code.",
        "hint": "Think about what kind of data operations this framework enables you to perform directly in MongoDB."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which MongoDB method is used to execute an aggregation pipeline?",
        "options": ["db.collection.find()", "db.collection.aggregate()", "db.collection.analyze()", "db.collection.compute()"],
        "correctOptionIndex": 1,
        "correctOptionText": "db.collection.aggregate()",
        "difficulty": "easy",
        "explanation": "The db.collection.aggregate() method is used to execute an aggregation pipeline on a collection in MongoDB.",
        "hint": "This is the primary method used to perform aggregation operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is a pipeline in MongoDB's Aggregation Framework?",
        "options": ["A way to connect multiple MongoDB servers", "A sequence of data processing stages", "A method to transfer data between collections", "A tool to optimize query performance"],
        "correctOptionIndex": 1,
        "correctOptionText": "A sequence of data processing stages",
        "difficulty": "easy",
        "explanation": "In MongoDB, an aggregation pipeline is a sequence of stages, where each stage transforms the documents as they pass through the pipeline. The output of each stage becomes the input for the next stage.",
        "hint": "Think about how data flows through multiple operations in sequence."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which stage is used to filter documents in an aggregation pipeline?",
        "options": ["$filter", "$match", "$where", "$select"],
        "correctOptionIndex": 1,
        "correctOptionText": "$match",
        "difficulty": "easy",
        "explanation": "The $match stage filters the documents to pass only those that match specified conditions, similar to how find() queries work.",
        "hint": "This stage works similarly to MongoDB's query operations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which stage would you use to create a calculated field in an aggregation pipeline?",
        "options": ["$calculate", "$compute", "$project", "$addFields"],
        "correctOptionIndex": 3,
        "correctOptionText": "$addFields",
        "difficulty": "easy",
        "explanation": "The $addFields stage adds new fields to documents. It's similar to $project, but $addFields preserves all existing fields and adds the new ones.",
        "hint": "This stage specifically focuses on adding new fields without affecting existing ones."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which aggregation stage is used to group documents by a specified expression?",
        "options": ["$gather", "$collect", "$group", "$cluster"],
        "correctOptionIndex": 2,
        "correctOptionText": "$group",
        "difficulty": "easy",
        "explanation": "The $group stage groups documents by a specified expression and can apply accumulator expressions to the grouped documents.",
        "hint": "This stage is similar to the GROUP BY clause in SQL."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What does the $unwind stage do in an aggregation pipeline?",
        "options": ["Combines multiple collections into one", "Creates a separate document for each element in an array", "Merges multiple fields into one", "Removes duplicate documents from the pipeline"],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a separate document for each element in an array",
        "difficulty": "medium",
        "explanation": "The $unwind stage deconstructs an array field from the input documents to output a document for each element. Each output document is a copy of the input document with the array field replaced by the element value.",
        "hint": "This stage helps when you need to process array elements individually in subsequent pipeline stages."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which aggregation operator would you use to calculate the sum of values in a group?",
        "options": ["$total", "$sum", "$add", "$accumulate"],
        "correctOptionIndex": 1,
        "correctOptionText": "$sum",
        "difficulty": "easy",
        "explanation": "The $sum operator calculates the sum of numeric values for the grouped documents.",
        "hint": "This is a common accumulator operator used with the $group stage."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the purpose of the $lookup stage in MongoDB's Aggregation Framework?",
        "options": ["To search for text within documents", "To perform a left outer join with another collection", "To look up documents in the same collection", "To verify document schema"],
        "correctOptionIndex": 1,
        "correctOptionText": "To perform a left outer join with another collection",
        "difficulty": "medium",
        "explanation": "The $lookup stage performs a left outer join to another collection in the same database, allowing you to merge documents from multiple collections.",
        "hint": "This stage provides functionality similar to SQL joins."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which stage would you use to limit the number of documents passed to the next stage in the pipeline?",
        "options": ["$cap", "$max", "$limit", "$restrict"],
        "correctOptionIndex": 2,
        "correctOptionText": "$limit",
        "difficulty": "easy",
        "explanation": "The $limit stage passes the first n documents from the input to the output, limiting the number of documents that progress through the pipeline.",
        "hint": "This stage works similarly to the limit() method in MongoDB queries."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which of the following aggregation stages can change the shape of documents in the pipeline?",
        "options": ["$match", "$sort", "$project", "$limit"],
        "correctOptionIndex": 2,
        "correctOptionText": "$project",
        "difficulty": "medium",
        "explanation": "The $project stage reshapes documents by specifying which fields to include, exclude, or compute. It can completely transform the structure of documents in the pipeline.",
        "hint": "This stage allows you to control which fields appear in the output documents."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the purpose of the $sort stage in an aggregation pipeline?",
        "options": ["To filter documents based on field values", "To arrange documents in a specified order", "To group documents by a key", "To limit the number of documents in the output"],
        "correctOptionIndex": 1,
        "correctOptionText": "To arrange documents in a specified order",
        "difficulty": "easy",
        "explanation": "The $sort stage reorders the documents in the pipeline based on specified sort keys and directions (ascending or descending).",
        "hint": "This stage is similar to the sort() method in MongoDB queries."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What does the $count stage do in an aggregation pipeline?",
        "options": ["Counts the occurrences of a specific field", "Creates a document with a count of all input documents", "Counts null values in documents", "Sums numeric fields in documents"],
        "correctOptionIndex": 1,
        "correctOptionText": "Creates a document with a count of all input documents",
        "difficulty": "easy",
        "explanation": "The $count stage creates a new document with a specified field name and a value equal to the number of documents in the pipeline at that stage.",
        "hint": "This stage provides a convenient way to count documents in the pipeline."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which of the following expressions would calculate the average of a field named 'score' in a $group stage?",
        "options": ["{ $avg: '$score' }", "{ average: '$score' }", "{ $mean: 'score' }", "{ $average: 'score' }"],
        "correctOptionIndex": 0,
        "correctOptionText": "{ $avg: '$score' }",
        "difficulty": "medium",
        "explanation": "The $avg accumulator calculates the average of numeric values for the grouped documents. The field name must be prefixed with a dollar sign when referenced in expressions.",
        "hint": "Pay attention to the correct operator name and syntax for field references in aggregation expressions."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What would the following aggregation stage do? { $match: { status: 'active', age: { $gt: 25 } } }",
        "options": ["Find all documents with active status and age greater than 25", "Update all documents to have active status and age greater than 25", "Group documents by status and age", "Count documents with active status and age greater than 25"],
        "correctOptionIndex": 0,
        "correctOptionText": "Find all documents with active status and age greater than 25",
        "difficulty": "medium",
        "explanation": "This $match stage filters the documents in the pipeline to only pass through those where status equals 'active' AND age is greater than 25.",
        "hint": "The $match stage uses the same query syntax as the find() method."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the purpose of the $out stage in an aggregation pipeline?",
        "options": ["To remove documents from the pipeline", "To output results to the console", "To write the results to a collection", "To export results to a file"],
        "correctOptionIndex": 2,
        "correctOptionText": "To write the results to a collection",
        "difficulty": "medium",
        "explanation": "The $out stage writes the documents that remain in the pipeline to a specified collection. It must be the last stage in the pipeline.",
        "hint": "This stage allows you to persist the results of your aggregation pipeline."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which operator would you use to get the first value in a group during aggregation?",
        "options": ["$first", "$init", "$start", "$begin"],
        "correctOptionIndex": 0,
        "correctOptionText": "$first",
        "difficulty": "medium",
        "explanation": "The $first accumulator returns the first value in a group according to the sort order within the $group stage.",
        "hint": "This operator is useful when you need just one representative value from each group."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What does the $facet stage allow you to do in an aggregation pipeline?",
        "options": ["Split documents into different categories", "Process multiple aggregation pipelines within a single stage", "Create a faceted search interface", "Apply facial recognition to document images"],
        "correctOptionIndex": 1,
        "correctOptionText": "Process multiple aggregation pipelines within a single stage",
        "difficulty": "hard",
        "explanation": "The $facet stage allows you to create multi-faceted aggregations by processing multiple aggregation pipelines within a single stage. Each pipeline operates on the same set of input documents and produces its own separate output.",
        "hint": "This stage is particularly useful for creating analytical reports with multiple sections or dimensions."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the purpose of the $bucket stage in an aggregation pipeline?",
        "options": ["To store temporary results", "To categorize documents into groups based on specified boundaries", "To create data backups", "To separate documents into random samples"],
        "correctOptionIndex": 1,
        "correctOptionText": "To categorize documents into groups based on specified boundaries",
        "difficulty": "hard",
        "explanation": "The $bucket stage categorizes incoming documents into groups (buckets) based on a specified expression and bucket boundaries. It's useful for creating histograms or distribution analysis.",
        "hint": "Think of this like creating histogram bins for your data."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "When using the $group stage, what is the significance of the _id field?",
        "options": ["It must match the _id field of the input documents", "It specifies the expression to group by", "It's optional and can be omitted", "It determines the sorting of the output documents"],
        "correctOptionIndex": 1,
        "correctOptionText": "It specifies the expression to group by",
        "difficulty": "medium",
        "explanation": "In the $group stage, the _id field specifies the expression to group by. This can be a field reference, a computed value, or even null to group all documents together.",
        "hint": "The _id field in a $group stage serves a specific purpose related to how documents are grouped."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What happens if you specify { $unwind: '$tags' } but some documents don't have a 'tags' field?",
        "options": ["Those documents are excluded from the results", "An error is thrown", "Those documents pass through unchanged", "The pipeline stops processing"],
        "correctOptionIndex": 0,
        "correctOptionText": "Those documents are excluded from the results",
        "difficulty": "medium",
        "explanation": "By default, if you use $unwind on a field that doesn't exist (or is null or an empty array), the document is excluded from the output. You can change this behavior using the preserveNullAndEmptyArrays option.",
        "hint": "Consider how $unwind handles documents that don't match its expectations."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which aggregation operator would you use to return the highest value in a group?",
        "options": ["$top", "$highest", "$maximum", "$max"],
        "correctOptionIndex": 3,
        "correctOptionText": "$max",
        "difficulty": "easy",
        "explanation": "The $max accumulator operator returns the highest value from all the values in the group.",
        "hint": "This is a standard accumulator operator used in the $group stage."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the key difference between $project and $addFields stages?",
        "options": ["$project can create new fields while $addFields cannot", "$project cannot use operators but $addFields can", "$project can remove fields while $addFields only adds fields", "$project works only with strings while $addFields works with all types"],
        "correctOptionIndex": 2,
        "correctOptionText": "$project can remove fields while $addFields only adds fields",
        "difficulty": "medium",
        "explanation": "The $project stage can include or exclude fields, reshape documents, and create computed fields. The $addFields stage only adds new fields while preserving all existing fields in the documents.",
        "hint": "Both can add new fields, but they differ in what they do with existing fields."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which of the following is NOT a valid accumulator in the $group stage?",
        "options": ["$sum", "$avg", "$median", "$stdDev"],
        "correctOptionIndex": 2,
        "correctOptionText": "$median",
        "difficulty": "hard",
        "explanation": "MongoDB does not provide a built-in $median accumulator. While it has $sum, $avg, $stdDev, and many others, calculating a median requires additional stages or using the $percentile accumulator in MongoDB 5.0+.",
        "hint": "Think about which statistical function might not be directly available as a group accumulator."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "How would you use the $cond operator in an aggregation pipeline?",
        "options": ["To control which stage executes next", "To conditionally include documents in the output", "To evaluate a boolean expression and return one of two values", "To determine if the pipeline should continue or terminate"],
        "correctOptionIndex": 2,
        "correctOptionText": "To evaluate a boolean expression and return one of two values",
        "difficulty": "hard",
        "explanation": "The $cond operator evaluates a boolean expression and returns one value if true and another value if false. It works like an if-then-else statement within expressions in stages like $project or $addFields.",
        "hint": "This operator allows for conditional logic within expression fields."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What does the $replaceRoot stage do in an aggregation pipeline?",
        "options": ["Replaces all documents with a root document", "Substitutes field values with default values", "Promotes a specified document to be the new root document", "Replaces the collection's data with the pipeline results"],
        "correctOptionIndex": 2,
        "correctOptionText": "Promotes a specified document to be the new root document",
        "difficulty": "hard",
        "explanation": "The $replaceRoot stage replaces the input document with a new document specified by the newRoot expression. This is often used to promote a nested document to the top level or to reshape documents significantly.",
        "hint": "This stage completely changes what's considered the 'root' document in the pipeline."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which MongoDB aggregation pipeline stage would you use to skip the first n documents?",
        "options": ["$jump", "$skip", "$offset", "$pass"],
        "correctOptionIndex": 1,
        "correctOptionText": "$skip",
        "difficulty": "easy",
        "explanation": "The $skip stage skips the first n documents where n is the specified number, passing the remaining documents to the next stage in the pipeline.",
        "hint": "This stage is commonly used with $sort and $limit for pagination."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the correct way to reference a field in an aggregation expression?",
        "options": ["fieldName", "'fieldName'", "$.fieldName", "$fieldName"],
        "correctOptionIndex": 3,
        "correctOptionText": "$fieldName",
        "difficulty": "easy",
        "explanation": "In MongoDB aggregation expressions, you reference a field by prefixing its name with a dollar sign ($). For example, to reference a field named 'price', you would use '$price'.",
        "hint": "This syntax distinguishes between field references and literal values in expressions."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the purpose of the $setUnion operator in the aggregation framework?",
        "options": ["To combine two collections", "To create a union of two arrays with duplicate removal", "To set all field values to a union type", "To join documents with a shared value"],
        "correctOptionIndex": 1,
        "correctOptionText": "To create a union of two arrays with duplicate removal",
        "difficulty": "hard",
        "explanation": "The $setUnion operator takes two arrays and returns an array containing all elements that appear in either or both arrays, without duplicates. It implements the mathematical set union operation.",
        "hint": "This is one of several set operators available in the aggregation framework."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "Which of the following pipeline stages would you use to merge data from multiple collections?",
        "options": ["$merge", "$join", "$lookup", "$combine"],
        "correctOptionIndex": 2,
        "correctOptionText": "$lookup",
        "difficulty": "medium",
        "explanation": "The $lookup stage performs a left outer join to another collection, allowing you to combine data from multiple collections in a single aggregation pipeline.",
        "hint": "This stage is MongoDB's primary mechanism for joining collection data."
    },
    {
        "topic": "67defc28e107cf2e3745af6a",
        "module": "Aggregation Framework",
        "questionText": "What is the purpose of the $redact stage in an aggregation pipeline?",
        "options": ["To remove sensitive information before showing results", "To restrict access to certain pipeline stages", "To filter documents based on document content and user privilege", "To prevent changes to the original collection"],
        "correctOptionIndex": 2,
        "correctOptionText": "To filter documents based on document content and user privilege",
        "difficulty": "hard",
        "explanation": "The $redact stage restricts the content of documents based on information contained within each document, allowing for complex document/field level security filtering.",
        "hint": "This stage is particularly useful for implementing data access controls."
    },


    // Data Validation

    // MongoDB Atlas

    // Replication

    // Sharding

    // Security Authentication

    // Performance OPtimization

    // MongoDB Drivers

    // Backup & Recovery

    // Advanced MongoDB Concepts
]

export default mongoDBQuestions;