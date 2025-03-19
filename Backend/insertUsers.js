import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Users } from "./Database/schema.js";
import userSamples from './Questions/users.js';
dotenv.config();


// MongoDB Connection String
mongoose.connect(process.env.MONGO_URI);
console.log("Connected to MongoDB");

const insertUsers = async () => {
    try {
      for (const userData of userSamples) {
        const User = new Users(userData);
        await User.save(); // This will trigger the hooks
      }
      console.log("Users inserted successfully!");
    } catch (err) {
      console.error("Error inserting Users:", err);
    } finally {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    }
  };

// Call the function
insertUsers();
