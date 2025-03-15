import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Auth
// Register a new user
app.post('/api/auth/register', (req, res) => {

});

// Authenticate user & rturn token
app.post('/api/auth/login', (req, res) => {
    
})

// Logout user (invalidate session)
app.post('/api/auth/logout', (req, res) => {
    
});


// Topics & Modules
// Fetch all available Topics
app.get('/api/topics', (req, res) => {
    
});

// Get modules for a given topic
app.get('/api/module/:topicId', (req, res) => {
    
})

// Questions & Practice
// Get questions for a selected module
app.get('/api/questions/:moduleName', (req, res) => {
    
})

// submit an answer & get Feedback
app.post('/api/practice/submit', (req, res) => {
    
})

// User Progress & Leaderboard
// Get top users in Leaderboard
app.get('/api/leaderboard', (req, res) => {
    
});

// Fetch user's personal progress
app.get('/api/user/stats', (req, res) => {
    
});

// FeedBack
// Register a new user
app.post('/api/feedback', (req, res) => {
    
})



// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});