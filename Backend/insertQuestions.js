import mongoose from 'mongoose';

require("dotenv").config();
const { Questions } = require("./Database/schema");
const questions = require("./Questions/quantitiativeQ");


// MongoDB Connection String
mongoose.connect(process.env.MONGO_URI);
console.log("Connected to MongoDB");

const insertQuestions = async () => {
  try {    
    await Questions.insertMany(questions);
    console.log("Questions inserted successfully!");
  } catch (err) {
    console.error("Error inserting questions:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

// Call the function
insertQuestions();
