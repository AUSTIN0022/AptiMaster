const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const TopicSchema = new Schema({
    name: { type: String, required: true, unique: true, index: true },
    icon: { type: String }, // URL to icon image
    coverImage: { type: String }, // URL to a larger cover image (optional)
    description: { type: String },
    learningOutcomes: [{ type: String }], // What users will learn
    modules: [{
      name: { type: String, required: true },
      description: { type: String },
      // icon: { type: String }, // Optional module-specific icon
      questionCount: { type: Number, default: 0 } // Can be updated when questions are added
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

const QuestionSchema = new Schema({
    topic: {type: Schema.Types.ObjectId, ref:"Topics", required: true, index: true},
    module: {type: String,  required: true, index: true},
    questionText: {type: String, required: true},
    options: {type: [String], required: true},
    correctOption: {type: String, required: true},
    difficulty: {type: String, enum: ['easy', 'medium', 'hard'], required: true, index: true},
    explanation: {type: String},
    hint: {type: String}
}, {timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});



QuestionSchema.methods.checkAnswer = function(selectedOption) {
    return selectedOption === this.correctOption;
};

const UsersSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, index: true},
    password: {type: String, required: true},
    avatar: {type: String},
    streak: {type: Number, default: 0},
    total_questions_attempted: {type: Number, default: 0},
    total_correct_answers: {type: Number, default: 0},
    badges: {type: [String], default: []},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

UsersSchema.methods.updateStats = async function(isCorrect) {
    // Implementation for updating user statistics
    // This is a placeholder for the method shown in the diagram
    this.total_questions_attempted += 1;

    if(isCorrect){
        this.total_correct_answers += 1;
        this.streak += 1;

        if(this.streak >= 7) {
            if(!this.badges.includes('7-Day Streak')) {
                this.badges.push('7-Day Streak');
            }
        }

        if(this.total_correct_answers >= 100) {
            if(!this.badges.includes('Century Club')) {
                this.badges.push('Century Club');
            }
        }
    } else{
        this.streak = 0;
    }

    return this.save();
};

const PracticeSessionsSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "Users", required: true},
    questionId: {type: Schema.Types.ObjectId, ref: "Questions", required: true},
    selectedOption: {type: String},
    isCorrect: {type: Boolean},
    createdAt: {type: Date, default: Date.now}
});

PracticeSessionsSchema.methods.getResults = async function() {
    // Get detailed results for this practice session
    const question = await mongoose.model('Questions').findById(this.questionId);
    const user = await mongoose.model('Users').findById(this.userId);
    
    return {
        sessionId: this._id,
        question: question.questionText,
        correctOption: question.correctOption,
        selectedOption: this.selectedOption,
        isCorrect: this.isCorrect,
        explanation: question.explanation,
        difficulty: question.difficulty,
        username: user.username,
        attemptedAt: this.createdAt
    };
};

const LeaderboardSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'Users', required: true},
    score: {type: Number, default: 0},
    rank: {type: Number, default: 0}
}, {timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});

LeaderboardSchema.methods.updateRank = async function() {
    // Find all leaderboard entries with higher scores
    const higherScores = await mongoose.model('Leaderboard').countDocuments({
        score: { $gt: this.score }
    });
    
    // Rank is count of higher scores plus 1
    this.rank = higherScores + 1;
    return this.save();
};

// Static method to recalculate all ranks
LeaderboardSchema.statics.recalculateAllRanks = async function() {
    // Get all leaderboard entries sorted by score (descending)
    const entries = await this.find().sort({ score: -1 });
    
    // Update ranks
    for (let i = 0; i < entries.length; i++) {
        entries[i].rank = i + 1;
        await entries[i].save();
    }
    
    return entries;
};

const FeedbackSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "Users", required: true},
    message: {type: String, required: true},
    isAcknowledged: {type: Boolean, default: false},
    acknowledgedBy: {type: String},
    acknowledgedAt: {type: Date},
    createdAt: {type: Date, default: Date.now}
});

FeedbackSchema.methods.acknowledge = function(adminUsername) {
    this.isAcknowledged = true;
    this.acknowledgedBy = adminUsername;
    this.acknowledgedAt = new Date();
    return this.save();
};

module.exports = { 
    Users: mongoose.model('Users', UsersSchema),
    Topics: mongoose.model('Topics', TopicSchema),
    Questions: mongoose.model('Questions', QuestionSchema),
    PracticeSessions: mongoose.model('PracticeSessions', PracticeSessionsSchema),
    Leaderboard: mongoose.model('Leaderboard', LeaderboardSchema),
    Feedback: mongoose.model('Feedback', FeedbackSchema)
};


