import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import { validateEmail } from './utils/utilitsFunctions.js';

// Database  Module's
import { Feedback, Leaderboard, PracticeSessions, Questions, Topics, Users } from "./Database/schema.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// Worker to Count the Questions ineach Topic/Modules
import './workers/ReCalculateQueCount.js';


// Middleware 
app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

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

// Create a New Practice Session
app.post("/api/session/create", async (req, res) => {
    console.log("Request Body:", req.body);

    try {
        const { topicId, numQuestions, difficulty } = req.body;

        console.log(`Request: topic=${topicId}, numQuestions=${numQuestions}, difficulty=${difficulty}`);

        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Authentication required" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        
        if (!topicId || !numQuestions) {
            return res.status(400).json({ message: "Missing required fields" });
        }


        let matchQuery = { topic: new mongoose.Types.ObjectId(topicId) };


        if (difficulty && difficulty.trim().length > 0) {
            matchQuery.difficulty = difficulty;
        } else {
            matchQuery.$or = [{ difficulty: { $exists: true } }, { difficulty: { $eq: null } }];
        }

        console.log("Match Query:", matchQuery);

        const totalAvailable = await Questions.find(matchQuery).countDocuments();
        console.log(`Total questions available for criteria: ${totalAvailable}`);

        if (totalAvailable === 0) {
            return res.status(404).json({ message: "No questions found for the given criteria" });
        }
        
        const sampleSize = Math.min(parseInt(numQuestions), totalAvailable);

        const questions = await Questions.aggregate([
            { $match: matchQuery },
            { $sample: { size: sampleSize } }
        ]);
        

        console.log(`Fetched Questions: ${questions.length}`);

        if (questions.length === 0) {
            return res.status(404).json({ message: "No questions found for the given criteria" });
        }

        // New Practice Session
        const session = new PracticeSessions({
            userId: userId,
            topicId: topicId,
            moduleId: questions[0].module, // Use module from the first question
            questions: questions.map(q => ({
                questionId: q._id,
                selectedOption: null,
                isCorrect: null,
                attemptedAt: null
            })),
            totalQuestions: questions.length,
            correctAnswers: 0,
            score: 0,
            completed: false
        });

        await session.save();

        return res.status(201).json({
            message: "Practice session created successfully",
            sessionId: session._id,
            topicId: session.topicId,
            moduleId: session.moduleId,
            questions: session.questions.map(q => ({
                questionId: q.questionId
            }))
        });

    } catch (err) {
        if (err.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        }
        return res.status(500).json({ message: `Error creating session: ${err.message}` });
    }
});


// submit an answer & get Feedback
app.post('/api/practice/submit', async (req, res) => {
    const { questionId, selectedOption, sessionId } = req.body;
    
    try {
        // Validate input
        if (!questionId || !selectedOption) {
            return res.status(400).json({ message: "Question ID and selected option are required" });
        }

        // Find or create a practice session
        let session;
        if (sessionId) {
            session = await PracticeSessions.findById(sessionId);
            if (!session) {
                return res.status(404).json({ message: "Practice session not found" });
            }
        } else {
            // If no session ID provided, create a new one
            // This requires additional parameters like userId, topicId
            const { userId, topicId, moduleId } = req.body;
            if (!userId || !topicId) {
                return res.status(400).json({ message: "User ID and topic ID are required for new sessions" });
            }
            
            session = new PracticeSessions({
                userId,
                topicId,
                moduleId
            });
            await session.save();
        }
        
        // Add the question attempt to the session
        await session.addQuestionAttempt(questionId, selectedOption);
        
        // Get the question to include in the response
        const question = await Questions.findById(questionId);
        const isCorrect = question.checkAnswer(selectedOption);
        
        // Return the result
        return res.status(200).json({
            sessionId: session._id,
            isCorrect,
            correctOption: question.correctOption,
            explanation: question.explanation,
            sessionStats: {
                totalQuestions: session.totalQuestions,
                correctAnswers: session.correctAnswers,
                score: session.score
            }
        });
    } catch (err) {
        return res.status(500).json({
            message: `Error submitting answer: ${err.message}`
        });
    }
});

// Complete a practice session
app.post('/api/practice/complete', async (req, res) => {
    const { sessionId } = req.body;
    
    try {
        if (!sessionId) {
            return res.status(400).json({ message: "Session ID is required" });
        }
        
        const session = await PracticeSessions.findById(sessionId);
        if (!session) {
            return res.status(404).json({ message: "Practice session not found" });
        }
        
        if (session.completed) {
            return res.status(400).json({ message: "Session is already completed" });
        }
        
        await session.completeSession();
        
        // Get detailed results
        const results = await session.getResults();
        
        return res.status(200).json({
            message: "Session completed successfully",
            results
        });
    } catch (err) {
        return res.status(500).json({
            message: `Error completing session: ${err.message}`
        });
    }
});

// Get top users in Leaderboard
app.get('/api/leaderboard', async (req, res) => {
    try {
        const { limit = 10 } = req.query;
        
        const leaderboard = await Leaderboard.find()
            .sort({ score: -1, updatedAt: 1 })
            .limit(parseInt(limit))
            .populate('userId', 'username avatar');
        
        if (leaderboard.length === 0) {
            return res.status(200).json({
                message: "No entries found in the leaderboard",
                leaderboard: []
            });
        }
        
        // Format the response
        const formattedLeaderboard = leaderboard.map(entry => ({
            rank: entry.rank,
            username: entry.userId.username,
            avatar: entry.userId.avatar,
            score: entry.score
        }));
        
        return res.status(200).json({ leaderboard: formattedLeaderboard });
    } catch (err) {
        return res.status(500).json({
            message: `Error fetching leaderboard: ${err.message}`
        });
    }
});

// Fetch user's personal progress
app.get('/api/user/stats', async (req, res) => {
    try {
        // Authentication middleware should be used here
        // This is a placeholder for getting the userId from the token
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Authentication required" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        // Get user's leaderboard position
        const leaderboardPosition = await Leaderboard.findOne({ userId });
        
        // Get recent practice sessions
        const recentSessions = await PracticeSessions.find({ userId, completed: true })
            .sort({ completedAt: -1 })
            .limit(5)
            .populate('topicId', 'name');
        
        // Format the response
        const stats = {
            username: user.username,
            avatar: user.avatar,
            streak: user.streak,
            total_questions_attempted: user.total_questions_attempted,
            total_correct_answers: user.total_correct_answers,
            accuracy: user.total_questions_attempted > 0 
                ? Math.round((user.total_correct_answers / user.total_questions_attempted) * 100) 
                : 0,
            badges: user.badges,
            rank: leaderboardPosition ? leaderboardPosition.rank : null,
            score: leaderboardPosition ? leaderboardPosition.score : 0,
            recentSessions: recentSessions.map(session => ({
                id: session._id,
                topic: session.topicId.name,
                score: session.score,
                correctAnswers: session.correctAnswers,
                totalQuestions: session.totalQuestions,
                completedAt: session.completedAt
            }))
        };
        
        return res.status(200).json({ stats });
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        return res.status(500).json({
            message: `Error fetching user stats: ${err.message}`
        });
    }
});

// Feedback
app.post('/api/feedback', async (req, res) => {
    const { message } = req.body;
    
    try {
        // Authentication middleware should be used here
        // This is a placeholder for getting the userId from the token
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Authentication required" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        
        if (!message || message.trim().length === 0) {
            return res.status(400).json({ message: "Feedback message is required" });
        }
        
        // Create new feedback entry
        const feedback = new Feedback({
            userId,
            message
        });
        
        await feedback.save();
        
        return res.status(201).json({
            message: "Feedback submitted successfully",
            feedback: {
                id: feedback._id,
                createdAt: feedback.createdAt
            }
        });
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        return res.status(500).json({
            message: `Error submitting feedback: ${err.message}`
        });
    }
});

// Get user's past practice sessions
app.get('/api/user/sessions', async (req, res) => {
    try {
        // Authentication middleware should be used here
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Authentication required" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        
        const { limit = 10, page = 1, completed } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        
        // Build query
        const query = { userId };
        if (completed !== undefined) {
            query.completed = completed === 'true';
        }
        
        // Get sessions
        const sessions = await PracticeSessions.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit))
            .populate('topicId', 'name');
        
        // Get total count for pagination
        const totalSessions = await PracticeSessions.countDocuments(query);
        
        // Format the response
        const formattedSessions = sessions.map(session => ({
            id: session._id,
            topic: session.topicId.name,
            module: session.moduleId,
            score: session.score,
            correctAnswers: session.correctAnswers,
            totalQuestions: session.totalQuestions,
            completed: session.completed,
            createdAt: session.createdAt,
            completedAt: session.completedAt
        }));
        
        return res.status(200).json({
            sessions: formattedSessions,
            pagination: {
                total: totalSessions,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(totalSessions / parseInt(limit))
            }
        });
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        return res.status(500).json({
            message: `Error fetching sessions: ${err.message}`
        });
    }
});

// Get specific session details
app.get('/api/sessions/:sessionId', async (req, res) => {
    const { sessionId } = req.params;
    
    try {
        // Authentication middleware should be used here
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Authentication required" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        
        const session = await PracticeSessions.findById(sessionId);
        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }
        
        // Check if the session belongs to the authenticated user
        if (session.userId.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized access to this session" });
        }
        
        // Get detailed results
        const results = await session.getResults();
        
        return res.status(200).json({ session: results });
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        return res.status(500).json({
            message: `Error fetching session details: ${err.message}`
        });
    }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});