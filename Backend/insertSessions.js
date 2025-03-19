import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { PracticeSessions } from "./Database/schema.js";
import practiceSessionsSamples from './Questions/practiceSession.js';
dotenv.config();


// MongoDB Connection String
mongoose.connect(process.env.MONGO_URI);
console.log("Connected to MongoDB");

const insertQuestions = async () => {
    try {

        await PracticeSessions.deleteMany({});
        console.log("Deleted old Seesions");
        
      for (const sessionData of practiceSessionsSamples) {
        const session = new PracticeSessions(sessionData);
        await session.save(); // This will trigger the hooks
      }
      console.log("Practice Sessions inserted successfully!");
      
    } catch (err) {
      console.error("Error inserting questions:", err);
    } finally {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    }

  };

// Call the function
insertQuestions();
