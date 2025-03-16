import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import { validateEmail } from './utils/utilitsFunctions.js';

import { Questions, Topics, Users } from "./Database/schema.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// Worker
import './workers/ReCalculateQueCount.js';


// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// Auth
// Register a new user
app.post('/api/auth/register', async (req, res) => {
    const { username, email, password } = req.body;

    try{
        if(!username || !email || !password) {
            return res.status(400).json({ message: "Enter all details" });
        }
        if(!validateEmail(email)){
            return res.status(400).json({ message: "Enter a valid email" });
        }
        if(password.length < 6) {
            return res.status(400).json({
                message: "Password should be atleast 6 charactor long"
            })
        }
    
        const hashPassword = await  bcrypt.hash(password, 10);
        
        await Users.create({
            username: username,
            password: hashPassword,
            email: email,
        });

        return res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        // Handle MongoDB duplicate key
        if (err.code === 11000) {
            return res.status(409).json({
                message: "Username or email already exists"
            });
        }
        
        // Generic error handling
        return res.status(500).json({
            message: "Registration failed. Please try again later"
        });
    }
});

// Authenticate user & return token
app.post('/api/auth/login', async (req, res) => {
    const { username, password} = req.body;

    try {
        if(!username || !password){
            return res.status(400).json({ message: "Username and password are required" });
        }

        const user = await Users.findOne({username});

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username
            }, 
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        
        return res.status(200).json({ 
            message: "Login successful",
            token: token
        });
    } catch (err) {
        return res.status(500).json({
            message: "Login failed. Please try again later"
        });
    }
});

// Logout user (invalidate session)
app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({ message: "Logged out successfully" });
});


// Topics & Modules
// Fetch all available Topics
app.get('/api/topics', async (req, res) => {
    try{
        const topics = await Topics.find({}, {
            name: 1, 
            description: 1, 
            icon: 1, 
            coverImage: 1,
            questionCount: 1,
            moduleCount: { $size: "$modules" }
          });

        if(!topics){
            return res.status(400).json({
                message: `Erroring fetching the topics ${err.message}`
            });
        }

        res.json({ topics: topics })

    } catch(err) {
        return res.status(400).json({
            message: `Erroring fetching the topics ${err.message}`
        });
    }
});

// Get modules for a given topic (by ID or name)
app.get('/api/modules/:topicId', async (req, res) => {
    const { topicId } = req.params;

    try {
        if(!topicId ) {
            return res.status(400).json({ message: "Provide either a topic id or name" });
        }

        let topicData = await Topics.findById( topicId );

        if(!topicData) {
            return res.status(404).json({ message: "Topic not found" });
        }
        res.json({ 
            topicName: topicData.name,
            modules: topicData.modules 
        });

    } catch(err) {
        return res.status(400).json({
            message: "Error getting details"
        })
    }
})

// Questions & Practice
// Get questions for a selected module
// Get questions for a selected module
app.get('/api/questions/:topicId/:moduleName', async (req, res) => {
    const { topicId, moduleName } = req.params;
    const { difficulty } = req.query;  

    try {
        // Build query object
        const query = { 
            topic: topicId,
            module: moduleName 
        };
        
        // Allow multiple difficulties like ?difficulty=easy,medium
        if (difficulty) {
            const difficultyArray = difficulty.split(',');
            query.difficulty = { $in: difficultyArray };
        }

        const questions = await Questions.find(query);
        
        if (questions.length === 0) {
            return res.status(404).json({
                message: `No questions found matching the criteria`
            });
        }

        res.json({ questions: questions });
    } catch (err) {
        return res.status(500).json({
            message: `Error fetching questions: ${err.message}`
        });
    }
});
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
  console.log(`Server running on http://localhost:${PORT}/`);
});