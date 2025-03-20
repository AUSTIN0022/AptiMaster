import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Questions } from "./Database/schema.js";
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

      for (const questionData of JSQuestions) {
        const question = new Questions(questionData);
        await question.save(); // This will trigger the hooks
      }
      console.log("JavaScript Questions inserted successfully!");
      
      for (const questionData of pythonQuestions) {
        const question = new Questions(questionData);
        await question.save(); // This will trigger the hooks
      }
      console.log("Pyhton Questions inserted successfully!");
      
    } catch (err) {
      console.error("Error inserting questions:", err);
    } finally {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    }

  };

// Call the function
insertQuestions();
