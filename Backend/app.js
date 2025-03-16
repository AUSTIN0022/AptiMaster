import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import { validateEmail } from './utils/utilitsFunctions.js';

import { Users } from "./Database/schema.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

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
  console.log(`Server running on http://localhost:${PORT}/`);
});