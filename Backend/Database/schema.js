import dotenv from "dotenv";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const TopicSchema = new Schema({
    name: { type: String, required: true, unique: true, index: true },
    icon: { type: String },
    coverImage: { type: String },
    description: { type: String },
    questionCount: { type: Number, default: 0 }, // Total questions for this topic
    learningOutcomes: [{ type: String }],
    modules: [{
      name: { type: String, required: true },
      description: { type: String },
      questionCount: { type: Number, default: 0 } // Questions specific to this module
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Add this to your schema file where TopicSchema is defined
TopicSchema.statics.recalculateAllCounts = async function() {
    const Topics = this; // 'this' refers to the model
    const topics = await Topics.find({});
    
    console.log(`Recalculating counts for ${topics.length} topics...`);
    
    for (const topic of topics) {
      // Get question count for this topic
      const topicQuestionCount = await mongoose.model('Questions').countDocuments({ 
        topic: topic._id 
      });
      
      // Update modules question counts
      for (let i = 0; i < topic.modules.length; i++) {
        const moduleQuestionCount = await mongoose.model('Questions').countDocuments({ 
          topic: topic._id, 
          module: topic.modules[i].name 
        });
        
        topic.modules[i].questionCount = moduleQuestionCount;
      }
      
      // Update the topic with correct counts
      topic.questionCount = topicQuestionCount;
      await topic.save();
      
      console.log(`Updated counts for topic: ${topic.name} - Total questions: ${topicQuestionCount}`);
    }
    
    console.log("All counts recalculated successfully!");
    return true;
  };

const QuestionSchema = new Schema({
    topic: {type: Schema.Types.ObjectId, ref:"Topics", required: true, index: true},
    module: {type: String,  required: true, index: true},
    questionText: {type: String, required: true},
    options: {type: [String], required: true},
    correctOptionIndex: {type: Number, required: true},
    correctOptionText: {type: String, required: true},
    difficulty: {type: String, enum: ['easy', 'medium', 'hard'], required: true, index: true},
    explanation: {type: String},
    hint: {type: String}
}, {timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});


// After saving a question
QuestionSchema.post('save', async function(doc) {
    // Increment the topic's question count
    await Topics.findByIdAndUpdate(doc.topic, { $inc: { questionCount: 1 } });
    
    // Increment the specific module's question count
    await Topics.findOneAndUpdate(
      { _id: doc.topic, 'modules.name': doc.module },
      { $inc: { 'modules.$.questionCount': 1 } }
    );
  });
  
// After deleting a question
QuestionSchema.post('remove', async function(doc) {
// Decrement the topic's question count
await Topics.findByIdAndUpdate(doc.topic, { $inc: { questionCount: -1 } });

// Decrement the specific module's question count
await Topics.findOneAndUpdate(
    { _id: doc.topic, 'modules.name': doc.module },
    { $inc: { 'modules.$.questionCount': -1 } }
);
});

QuestionSchema.methods.checkAnswer = function (selectedOption) {
    return selectedOption.trim().toLowerCase() === this.correctOptionText.trim().toLowerCase();
};


const UsersSchema = new Schema({
    username: {type: String, required: true, unique:true},
    email: {type: String, required: true, index: true},
    password: {type: String, required: true},
    avatar: {type: String},
    streak: {type: Number, default: 0},
    total_questions_attempted: {type: Number, default: 0},
    total_correct_answers: {type: Number, default: 0},
    badges: {type: [String], default: []},
},{timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});

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
    topicId: {type: Schema.Types.ObjectId, ref: "Topics"},
    moduleId: {type: String},
    questions: [{
        questionId: {type: Schema.Types.ObjectId, ref: "Questions", required: true},
        selectedOption: {type: String},
        isCorrect: {type: Boolean},
        attemptedAt: {type: Date, default: Date.now}
    }],
    totalQuestions: {type: Number, default: 0},
    correctAnswers: {type: Number, default: 0},
    score: {type: Number, default: 0},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    completedAt: {type: Date}
});

PracticeSessionsSchema.methods.getResults = async function () {
    const user = await mongoose.model('Users').findById(this.userId);
    if (!user) {
        throw new Error("User not found");
    }

    // ✅ Check if questions exist
    if (!this.questions || this.questions.length === 0) {
        throw new Error("No questions found for this session");
    }

    const questionIds = this.questions.map(q => q.questionId);

    // ✅ Fetch all questions safely
    const questionDocs = await mongoose.model('Questions').find({
        _id: { $in: questionIds }
    });

    if (!questionDocs || questionDocs.length === 0) {
        throw new Error("Questions data is missing in the database");
    }

    // ✅ Create a map for quick lookup
    const questionsMap = {};
    questionDocs.forEach(q => {
        questionsMap[q._id.toString()] = q;
    });

    // ✅ Ensure each question exists before accessing its properties
    const detailedQuestions = this.questions.map(q => {
        const question = questionsMap[q.questionId.toString()];
        if (!question) {
            console.error(`Question not found: ${q.questionId}`);
            return {
                questionId: q.questionId,
                error: "Question details missing"
            };
        }

        return {
            questionId: q.questionId,
            questionText: question.questionText,
            options: question.options,
            correctOption: question.correctOption,
            selectedOption: q.selectedOption,
            isCorrect: q.isCorrect,
            explanation: question.explanation,
            difficulty: question.difficulty,
            module: question.module,
            attemptedAt: q.attemptedAt
        };
    });

    return {
        sessionId: this._id,
        username: user.username,
        topicId: this.topicId,
        moduleId: this.moduleId,
        totalQuestions: this.totalQuestions,
        correctAnswers: this.correctAnswers,
        score: this.score,
        completed: this.completed,
        startedAt: this.createdAt,
        completedAt: this.completedAt,
        questions: detailedQuestions
    };
};

// Add a method to add a question attempt to the session
PracticeSessionsSchema.methods.addQuestionAttempt = async function(questionId, selectedOption) {
    const question = await mongoose.model('Questions').findById(questionId);
    if (!question) {
        throw new Error('Question not found');
    }
    
    const isCorrect = question.checkAnswer(selectedOption);
    
    this.questions.push({
        questionId: questionId,
        selectedOption: selectedOption,
        isCorrect: isCorrect,
        attemptedAt: new Date()
    });
    
    this.totalQuestions = this.questions.length;
    this.correctAnswers = this.questions.filter(q => q.isCorrect).length;
    this.score = Math.round((this.correctAnswers / this.totalQuestions) * 100);
    
    return this.save();
};

// Method to complete a session
PracticeSessionsSchema.methods.completeSession = async function () {
    this.completed = true;
    this.completedAt = new Date();
    
    const user = await mongoose.model('Users').findById(this.userId);
    user.total_questions_attempted += this.totalQuestions;
    user.total_correct_answers += this.correctAnswers;

    if (this.correctAnswers > 0) {
        user.streak += 1;
        if (user.streak >= 7 && !user.badges.includes('7-Day Streak')) {
            user.badges.push('7-Day Streak');
        }
        if (user.total_correct_answers >= 100 && !user.badges.includes('Century Club')) {
            user.badges.push('Century Club');
        }
    } else {
        user.streak = 0;
    }

    await user.save();

    // ✅ Update Leaderboard
    let leaderboardEntry = await mongoose.model('Leaderboard').findOne({ userId: this.userId });

    if (leaderboardEntry) {
        leaderboardEntry.score += this.correctAnswers; // Add correct answers to the score
        await leaderboardEntry.updateRank();  // Call updateRank() here
    } else {
        leaderboardEntry = new mongoose.model('Leaderboard')({
            userId: this.userId,
            score: this.correctAnswers
        });
        await leaderboardEntry.save();
        await leaderboardEntry.updateRank();
    }

    return this.save();
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

// schema.js
export const Users = mongoose.model('Users', UsersSchema);
export const Topics = mongoose.model('Topics', TopicSchema);
export const Questions = mongoose.model('Questions', QuestionSchema);
export const PracticeSessions = mongoose.model('PracticeSessions', PracticeSessionsSchema);
export const Leaderboard = mongoose.model('Leaderboard', LeaderboardSchema);
export const Feedback = mongoose.model('Feedback', FeedbackSchema);



