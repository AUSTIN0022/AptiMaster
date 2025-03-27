import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Questions } from "./Database/schema.js";

// Import all question sets
import AngularQuestions from './Questions/angularQ.js';
import CNQuestions from './Questions/computerNetworkQ.js';
import CQuestions from './Questions/cQ.js';
import DBSysQuestions from './Questions/databaseSystemQ.js';
import JavaQuestions from './Questions/javaQ.js';
import JSQuestions from './Questions/javascriptQ.js';
import mongoDBQuestions from './Questions/mongoDBQ.js';
import nodeJSQuestions from './Questions/nodejsQ.js';
import pythonQuestions from './Questions/pythonQ.js';
import reactJSQuestions from './Questions/reactjsQ.js';
import SQLQuestions from './Questions/sqlQ.js';
import TSQuestions from './Questions/typeScriptQ.js';

dotenv.config();

async function insertQuestions() {
  try {
  
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    
    // Clear existing questions
    await Questions.deleteMany({});
    console.log("Cleared Questions Collections");

    const questionSets = [
      { name: 'C', data: CQuestions },
      { name: 'Java', data: JavaQuestions },
      { name: 'JavaScript', data: JSQuestions },
      { name: 'Python', data: pythonQuestions },
      { name: 'TypeScript', data: TSQuestions },
      { name: 'SQL', data: SQLQuestions },
      { name: 'Database Systems', data: DBSysQuestions},
      { name: 'Node.js', data: nodeJSQuestions },
      { name: 'MongoDB', data: mongoDBQuestions },
      { name: 'React.js', data: reactJSQuestions },
      { name: 'Angular', data: AngularQuestions },
      { name: 'Computer Network', data: CNQuestions }
    ];


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

insertQuestions();