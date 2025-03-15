require("dotenv").config();
const { GoogleSpreadsheet } = require("google-spreadsheet");
const mongoose = require("mongoose");
import { Questions } from '../Database/schema';

// Load Google Sheet
async function syncQuestions() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Connected to MongoDB!");

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // First sheet
    const rows = await sheet.getRows();

    console.log(`Fetched ${rows.length} rows from Google Sheets.`);

    const bulkOps = rows.map(row => ({
      updateOne: {
        filter: { questionText: row.question },
        update: {
          $set: {
            topicId: row.module.toLowerCase(),
            module: row.module,
            questionText: row.question,
            options: [row.option1, row.option2, row.option3, row.option4],
            correctOption: row.correctAnswer,
            difficulty: row.difficulty.toLowerCase(),
            explanation: row.explanation || "",
            hint: row.hint || ""
          }
        },
        upsert: true
      }
    }));

    if (bulkOps.length > 0) {
      await Questions.bulkWrite(bulkOps);
      console.log("Successfully synced questions to MongoDB!");
    } else {
      console.log("No new questions to sync.");
    }

    mongoose.connection.close();
    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error("Error syncing questions:", error);
  }
}

syncQuestions();
