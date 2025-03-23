import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Questions } from "./Database/schema.js";

// Import all question sets
import CQuestions from './Questions/cQ.js';
import JavaQuestions from './Questions/javaQ.js';
import JSQuestions from './Questions/javascriptQ.js';
import mongoDBQuestions from './Questions/mongoDBQ.js';
import nodeJSQuestions from './Questions/nodejsQ.js';
import pythonQuestions from './Questions/pythonQ.js';
import reactJSQuestions from './Questions/reactjsQ.js';
import SQLQuestions from './Questions/sqlQ.js';
import TSQuestions from './Questions/typeScriptQ.js';

// Load environment variables
dotenv.config();

// Main function using async/await pattern
async function insertQuestions() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    
    // Clear existing questions
    await Questions.deleteMany({});
    console.log("Cleared Questions Collections");

    // Define all question sets with their names for better logging
    const questionSets = [
      { name: 'C', data: CQuestions },
      { name: 'Java', data: JavaQuestions },
      { name: 'JavaScript', data: JSQuestions },
      { name: 'Python', data: pythonQuestions },
      { name: 'TypeScript', data: TSQuestions },
      { name: 'SQL', data: SQLQuestions },
      { name: 'Node.js', data: nodeJSQuestions },
      { name: 'MongoDB', data: mongoDBQuestions },
      { name: 'React.js', data: reactJSQuestions }
    ];

    // Use insertMany for better performance
    for (const set of questionSets) {
      if (set.data && set.data.length > 0) {
        await Questions.insertMany(set.data);
        console.log(`${set.name} Questions inserted successfully!`);
      } else {
        console.log(`No questions found for ${set.name}`);
      }
    }

    console.log("All questions inserted successfully!");
  } catch (err) {
    console.error("Error inserting questions:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Execute the function
insertQuestions();