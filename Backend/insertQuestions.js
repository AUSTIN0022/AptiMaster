import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Questions } from "./Database/schema.js";
import CQuestions from './Questions/cQ.js';
import JSQuestions from './Questions/javascriptQ.js';
import pythonQuestions from './Questions/pythonQ.js';
dotenv.config();


// MongoDB Connection String
mongoose.connect(process.env.MONGO_URI);
console.log("Connected to MongoDB");

const insertQuestions = async () => {
    try {

        await Questions.deleteMany({});

        console.log("Cleared Questions Collections");


    //   for (const questionData of questions) {
    //     const question = new Questions(questionData);
    //     await question.save(); // This will trigger the hooks
    //   }
    //   console.log("Quantitiatvie Questions inserted successfully!");

    // C Questions
     for (const questionData of CQuestions) {
        const question = new Questions(questionData);
        await question.save(); // This will trigger the hooks
      }
      console.log("C Questions inserted successfully!");

      // JavaScript Questions
      for (const questionData of JSQuestions) {
        const question = new Questions(questionData);
        await question.save(); 
      }
      console.log("JavaScript Questions inserted successfully!");
      
      // Python Questions 
      for (const questionData of pythonQuestions) {
        const question = new Questions(questionData);
        await question.save();
      }
      console.log("Python Questions inserted successfully!");
      
      // TypeScript Questions

      // SQL Questions

      // DataBase Systems

      // 

    } catch (err) {
      console.error("Error inserting questions:", err);
    } finally {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    }

  };

// Call the function
insertQuestions();
